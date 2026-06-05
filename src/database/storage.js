import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../../data/summaries');

export class SummaryStorage {
  constructor() {
    this.ensureDataDirectory();
  }

  /**
   * Ensure data directory exists
   */
  async ensureDataDirectory() {
    try {
      await fs.mkdir(DATA_DIR, { recursive: true });
    } catch (error) {
      console.error('Error creating data directory:', error);
    }
  }

  /**
   * Save a summary to a JSON file.
   *
   * @param {object} summaryData  The pipeline output. May carry an `edition`.
   * @param {object} [opts]
   * @param {('morning'|'evening')} [opts.edition]  Edition slot. When present the
   *        file is keyed `YYYY-MM-DD-<edition>.json`; otherwise the legacy
   *        `YYYY-MM-DD.json` (used by historical-import).
   * @param {Date} [opts.runStartTime]  Captured before fetch; becomes the new
   *        fetch watermark so the next run picks up exactly where this one stopped.
   */
  async saveSummary(summaryData, opts = {}) {
    const edition = opts.edition || summaryData.edition || null;

    // Use the date from summaryData if provided, otherwise use current date
    const date = summaryData.date ? new Date(summaryData.date) : new Date();
    const dateString = this.formatDate(date);
    const filename = edition ? `${dateString}-${edition}.json` : `${dateString}.json`;
    const filepath = path.join(DATA_DIR, filename);

    // savedAt records the actual run time (not IST midnight `date`), so the
    // dashboard can order editions within a day (evening after morning).
    const savedAt = (opts.runStartTime instanceof Date ? opts.runStartTime : new Date()).toISOString();

    const data = {
      ...summaryData,
      ...(edition ? { edition } : {}),
      savedAt,
      dateString
    };

    try {
      await fs.writeFile(filepath, JSON.stringify(data, null, 2), 'utf-8');
      console.log(`✓ Summary saved: ${filename}`);

      // Update the index, keyed by date+edition, and advance the fetch watermark.
      const indexKey = edition ? `${dateString}-${edition}` : dateString;
      await this.updateIndex(indexKey, summaryData.totalNewsletters, {
        edition,
        lastRunAt: opts.runStartTime instanceof Date ? opts.runStartTime.toISOString() : null
      });

      return filepath;
    } catch (error) {
      console.error('Error saving summary:', error);
      throw error;
    }
  }

  /**
   * Get summary for a specific date
   */
  async getSummary(dateString) {
    const filename = `${dateString}.json`;
    const filepath = path.join(DATA_DIR, filename);

    try {
      const content = await fs.readFile(filepath, 'utf-8');
      return JSON.parse(content);
    } catch (error) {
      if (error.code === 'ENOENT') {
        return null; // File doesn't exist
      }
      throw error;
    }
  }

  /**
   * Precise fetch watermark — the timestamp up to which mail has been summarized.
   *
   * Persisted in index.json under `__lastRunAt` (set by saveSummary). This is the
   * only reliable way to separate two same-day editions: IMAP SINCE is date-only,
   * so the caller fetches SINCE the watermark's date and then post-filters on
   * `email.date > watermark`.
   *
   * Falls back (for repos predating the watermark) to the latest run time
   * recorded in the index entries' `updatedAt`, and null if there's nothing —
   * in which case the fetcher uses a last-12-hours window. NOTE: do NOT fall
   * back to a filename date — files are named by IST calendar day but produced
   * at the prior run's wall-clock time, so an end-of-day filename watermark can
   * land in the future and filter out every fetched email.
   */
  async getWatermark() {
    const indexPath = path.join(DATA_DIR, 'index.json');
    try {
      const content = await fs.readFile(indexPath, 'utf-8');
      const index = JSON.parse(content);

      if (index.__lastRunAt) {
        return new Date(index.__lastRunAt);
      }

      // Pre-watermark fallback: newest per-entry updatedAt ≈ the last run time.
      const times = Object.entries(index)
        .filter(([k]) => !k.startsWith('__'))
        .map(([, v]) => v && v.updatedAt)
        .filter(Boolean)
        .map(t => new Date(t).getTime())
        .filter(n => !Number.isNaN(n));

      if (times.length > 0) {
        return new Date(Math.max(...times));
      }
    } catch (error) {
      // No index / unreadable — caller will use the 12-hour default.
    }

    return null;
  }

  /** Back-compat alias — older callers may still ask for the last summary date. */
  async getLastSummaryDate() {
    return this.getWatermark();
  }

  /** True for an actual summary file (not the index). */
  isSummaryFile(f) {
    return f.endsWith('.json') && f !== 'index.json';
  }

  /**
   * Get all summaries (for dashboard)
   */
  async getAllSummaries() {
    try {
      const files = await fs.readdir(DATA_DIR);
      const jsonFiles = files.filter(f => this.isSummaryFile(f));

      const summaries = await Promise.all(
        jsonFiles.map(async (file) => {
          const filepath = path.join(DATA_DIR, file);
          const content = await fs.readFile(filepath, 'utf-8');
          return JSON.parse(content);
        })
      );

      // Sort by date descending
      return summaries.sort((a, b) => new Date(b.date) - new Date(a.date));
    } catch (error) {
      console.error('Error getting all summaries:', error);
      return [];
    }
  }

  /**
   * Update index file for quick lookups
   */
  async updateIndex(indexKey, count, opts = {}) {
    const indexPath = path.join(DATA_DIR, 'index.json');

    try {
      let index = {};
      try {
        const content = await fs.readFile(indexPath, 'utf-8');
        index = JSON.parse(content);
      } catch (error) {
        // Index doesn't exist yet
      }

      index[indexKey] = {
        count: count,
        ...(opts.edition ? { edition: opts.edition } : {}),
        updatedAt: new Date().toISOString()
      };

      // Advance the fetch watermark (reserved key, ignored by date lookups).
      if (opts.lastRunAt) {
        index.__lastRunAt = opts.lastRunAt;
      }

      await fs.writeFile(indexPath, JSON.stringify(index, null, 2), 'utf-8');
    } catch (error) {
      console.error('Error updating index:', error);
    }
  }

  /**
   * Format date as YYYY-MM-DD in IST
   */
  formatDate(date) {
    return date.toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });
  }
}
