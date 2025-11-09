import Imap from 'imap';
import { simpleParser } from 'mailparser';
import { config } from '../utils/config.js';

export class EmailFetcher {
  constructor() {
    this.imap = null;
  }

  /**
   * Connect to Gmail IMAP
   */
  async connect() {
    return new Promise((resolve, reject) => {
      this.imap = new Imap(config.email.imap);

      this.imap.once('ready', () => {
        console.log('✓ Connected to Gmail IMAP');
        resolve();
      });

      this.imap.once('error', (err) => {
        console.error('✗ IMAP connection error:', err);
        reject(err);
      });

      this.imap.connect();
    });
  }

  /**
   * Fetch newsletters received since a given date
   */
  async fetchNewsletters(sinceDate) {
    return new Promise((resolve, reject) => {
      this.imap.openBox('INBOX', false, (err, box) => {
        if (err) {
          reject(err);
          return;
        }

        // Build proper search criteria with nested ORs
        const senderCriteria = this.buildSenderCriteria();
        const searchCriteria = [
          ['SINCE', sinceDate],
          senderCriteria
        ];

        this.imap.search(searchCriteria, (err, results) => {
          if (err) {
            reject(err);
            return;
          }

          if (!results || results.length === 0) {
            console.log('No new newsletters found');
            resolve([]);
            return;
          }

          console.log(`Found ${results.length} potential newsletters`);

          const fetch = this.imap.fetch(results, { bodies: '' });
          const emails = [];

          fetch.on('message', (msg) => {
            msg.on('body', (stream) => {
              simpleParser(stream, (err, parsed) => {
                if (err) {
                  console.error('Error parsing email:', err);
                  return;
                }
                emails.push(parsed);
              });
            });
          });

          fetch.once('error', (err) => {
            reject(err);
          });

          fetch.once('end', () => {
            console.log(`✓ Fetched ${emails.length} newsletters`);
            resolve(emails);
          });
        });
      });
    });
  }

  /**
   * Build search criteria for newsletter senders
   * IMAP OR only accepts exactly 2 arguments, so we need to nest them
   */
  buildSenderCriteria() {
    const senders = config.newsletters.senders;

    if (senders.length === 0) {
      return ['ALL'];
    }

    if (senders.length === 1) {
      return ['FROM', senders[0]];
    }

    // Build nested OR structure: OR(sender1, OR(sender2, OR(sender3, ...)))
    let criteria = ['FROM', senders[senders.length - 1]];

    for (let i = senders.length - 2; i >= 0; i--) {
      criteria = ['OR', ['FROM', senders[i]], criteria];
    }

    return criteria;
  }

  /**
   * Get newsletters from last summary time until now
   */
  async getNewslettersSinceLastSummary(lastSummaryDate) {
    try {
      await this.connect();

      // If no last summary date, get last 24 hours
      const sinceDate = lastSummaryDate || new Date(Date.now() - 24 * 60 * 60 * 1000);

      const newsletters = await this.fetchNewsletters(sinceDate);

      this.disconnect();

      return newsletters;
    } catch (error) {
      console.error('Error fetching newsletters:', error);
      this.disconnect();
      throw error;
    }
  }

  /**
   * Disconnect from IMAP
   */
  disconnect() {
    if (this.imap) {
      this.imap.end();
      console.log('✓ Disconnected from Gmail');
    }
  }
}
