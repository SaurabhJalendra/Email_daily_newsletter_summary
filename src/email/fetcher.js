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

        // Gmail rejects a FROM chain nested too deep ("Could not parse command" -- first seen 2026-10-03,
        // the run after 4 senders were added to the list). Search in chunks and merge the UIDs.
        const searchOne = (criteria) => new Promise((res, rej) =>
          this.imap.search([['SINCE', sinceDate], criteria], (e, r) => (e ? rej(e) : res(r || []))));

        Promise.all(this.buildSenderCriteriaChunks().map(searchOne)).then((parts) => {
          const results = [...new Set(parts.flat())];

          if (results.length === 0) {
            console.log('No new newsletters found');
            resolve([]);
            return;
          }

          console.log(`Found ${results.length} potential newsletters`);

          const fetch = this.imap.fetch(results, { bodies: '' });
          // 'end' fires when the download ends, not when parsing ends: wait for every parse
          // (resolving on 'end' alone dropped 4 of 17 emails on 2026-10-04).
          const parses = [];

          fetch.on('message', (msg) => {
            msg.on('body', (stream) => {
              parses.push(simpleParser(stream).catch((err) => {
                console.error('Error parsing email:', err);
                return null;
              }));
            });
          });

          fetch.once('error', (err) => {
            reject(err);
          });

          fetch.once('end', () => {
            Promise.all(parses).then((all) => {
              const emails = all.filter(Boolean);
              console.log(`✓ Fetched ${emails.length} newsletters`);
              resolve(emails);
            });
          });
        }).catch(reject);
      });
    });
  }

  /**
   * Sender criteria split into chunks of at most `size` senders, each a nested-OR chain.
   * One chain over every sender grows too deep for Gmail's IMAP parser.
   */
  buildSenderCriteriaChunks(size = 15) {
    const senders = config.newsletters.senders;
    if (senders.length === 0) return [['ALL']];
    const chunks = [];
    for (let i = 0; i < senders.length; i += size) {
      chunks.push(this.buildSenderCriteria(senders.slice(i, i + size)));
    }
    return chunks;
  }

  /**
   * Build search criteria for newsletter senders
   * IMAP OR only accepts exactly 2 arguments, so we need to nest them
   */
  buildSenderCriteria(senders = config.newsletters.senders) {
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
   * Get newsletters received after the watermark.
   *
   * IMAP SINCE is date-granular only, so it cannot separate a morning run from
   * an evening run on the same day. We therefore fetch SINCE the watermark's
   * (coarse) date and then post-filter precisely on each email's received time.
   * That post-filter is what actually splits the two daily windows.
   */
  async getNewslettersSinceLastSummary(watermark) {
    try {
      await this.connect();

      // No watermark yet (first run ever): look back 12 hours (one window).
      const cutoff = watermark || new Date(Date.now() - 12 * 60 * 60 * 1000);

      // IMAP SINCE ignores the time component; nudge back one day so a watermark
      // late in the day can't make SINCE skip same-day mail before post-filter.
      const sinceDate = new Date(cutoff.getTime() - 24 * 60 * 60 * 1000);

      const fetched = await this.fetchNewsletters(sinceDate);

      // Precise window filter — keep only mail strictly after the watermark.
      const newsletters = fetched.filter(e => {
        const d = e.date ? new Date(e.date) : null;
        return d && d > cutoff;
      });

      console.log(`✓ ${newsletters.length}/${fetched.length} newsletters are after watermark ${cutoff.toISOString()}`);

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
