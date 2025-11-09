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
   * Save daily summary to JSON file
   */
  async saveSummary(summaryData) {
    const date = new Date();
    const dateString = this.formatDate(date);
    const filename = `${dateString}.json`;
    const filepath = path.join(DATA_DIR, filename);

    const data = {
      ...summaryData,
      savedAt: date.toISOString(),
      dateString: dateString
    };

    try {
      await fs.writeFile(filepath, JSON.stringify(data, null, 2), 'utf-8');
      console.log(`✓ Summary saved: ${filename}`);

      // Also update the index file for quick access
      await this.updateIndex(dateString, summaryData.totalNewsletters);

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
   * Get last summary date for determining what emails to fetch
   */
  async getLastSummaryDate() {
    try {
      const files = await fs.readdir(DATA_DIR);
      const jsonFiles = files.filter(f => f.endsWith('.json') && f !== 'index.json');

      if (jsonFiles.length === 0) {
        return null;
      }

      // Sort and get most recent
      jsonFiles.sort().reverse();
      const lastFile = jsonFiles[0];
      const dateString = lastFile.replace('.json', '');

      // Return end of that day (so we get newsletters after the last summary)
      const [year, month, day] = dateString.split('-').map(Number);
      return new Date(year, month - 1, day, 23, 59, 59);
    } catch (error) {
      console.error('Error getting last summary date:', error);
      return null;
    }
  }

  /**
   * Get all summaries (for dashboard)
   */
  async getAllSummaries() {
    try {
      const files = await fs.readdir(DATA_DIR);
      const jsonFiles = files.filter(f => f.endsWith('.json') && f !== 'index.json');

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
  async updateIndex(dateString, count) {
    const indexPath = path.join(DATA_DIR, 'index.json');

    try {
      let index = {};
      try {
        const content = await fs.readFile(indexPath, 'utf-8');
        index = JSON.parse(content);
      } catch (error) {
        // Index doesn't exist yet
      }

      index[dateString] = {
        count: count,
        updatedAt: new Date().toISOString()
      };

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
