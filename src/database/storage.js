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
   * Falls back to the newest file's date (legacy single-edition data) if no
   * `__lastRunAt` is recorded yet, and null if there's nothing at all.
   */
  async getWatermark() {
    const indexPath = path.join(DATA_DIR, 'index.json');
    try {
      const content = await fs.readFile(indexPath, 'utf-8');
      const index = JSON.parse(content);
      if (index.__lastRunAt) {
        return new Date(index.__lastRunAt);
      }
    } catch (error) {
      // No index yet — fall through to filename-based fallback.
    }

    // Fallback for repos predating the watermark: end of the newest file's day.
    try {
      const files = await fs.readdir(DATA_DIR);
      const jsonFiles = files.filter(f => this.isSummaryFile(f));
      if (jsonFiles.length === 0) return null;

      const dates = jsonFiles
        .map(f => f.replace('.json', '').replace(/-(morning|evening)$/, ''))
        .sort();
      const dateString = dates[dates.length - 1];
      const [year, month, day] = dateString.split('-').map(Number);
      return new Date(year, month - 1, day, 23, 59, 59);
    } catch (error) {
      console.error('Error computing watermark:', error);
      return null;
    }
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
