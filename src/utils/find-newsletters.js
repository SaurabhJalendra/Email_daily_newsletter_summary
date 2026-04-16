import Imap from 'imap';
import { simpleParser } from 'mailparser';
import { config } from './config.js';

/**
 * Analyzes recent emails to find potential newsletter senders
 * that aren't currently configured
 */
class NewsletterFinder {
  constructor() {
    this.imap = null;
    this.configuredSenders = new Set(config.newsletters.senders.map(s => s.toLowerCase()));
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
   * Fetch all emails from the last N days
   */
  async fetchRecentEmails(days = 60) {
    return new Promise((resolve, reject) => {
      this.imap.openBox('INBOX', true, (err, box) => {
        if (err) {
          reject(err);
          return;
        }

        // Calculate date from N days ago
        const sinceDate = new Date();
        sinceDate.setDate(sinceDate.getDate() - days);

        console.log(`Searching emails since ${sinceDate.toDateString()}...`);

        const searchCriteria = [['SINCE', sinceDate]];

        this.imap.search(searchCriteria, (err, results) => {
          if (err) {
            reject(err);
            return;
          }

          if (!results || results.length === 0) {
            console.log('No emails found');
            resolve([]);
            return;
          }

          console.log(`Found ${results.length} emails to analyze`);

          // Fetch email headers only for efficiency
          const fetch = this.imap.fetch(results, {
            bodies: 'HEADER.FIELDS (FROM SUBJECT DATE)',
            struct: true
          });

          const emails = [];

          fetch.on('message', (msg, seqno) => {
            msg.on('body', (stream) => {
              simpleParser(stream, (err, parsed) => {
                if (err) {
                  console.error('Error parsing email:', err);
                  return;
                }
                emails.push({
                  from: parsed.from?.text || '',
                  subject: parsed.subject || '',
                  date: parsed.date
                });
              });
            });
          });

          fetch.once('error', (err) => {
            reject(err);
          });

          fetch.once('end', () => {
            console.log(`✓ Analyzed ${emails.length} emails`);
            resolve(emails);
          });
        });
      });
    });
  }

  /**
   * Extract sender email from "Name <email@domain.com>" format
   */
  extractEmail(fromField) {
    const match = fromField.match(/<([^>]+)>/);
    return match ? match[1].toLowerCase() : fromField.toLowerCase();
  }

  /**
   * Identify if an email is likely a newsletter based on patterns
   */
  isLikelyNewsletter(senderEmail, senderName, subject, frequency) {
    const email = senderEmail.toLowerCase();
    const name = senderName.toLowerCase();
    const subj = subject.toLowerCase();

    // Newsletter platform domains
    const newsletterPlatforms = [
      'beehiiv.com',
      'substack.com',
      'medium.com',
      'substackcdn.com',
      'ghost.io',
      'mailchimp.com',
      'convertkit.com',
      'sendgrid.net',
      'newsletter.',
      'news@',
      'hello@',
      'hi@',
      'noreply@',
      'no-reply@'
    ];

    // AI/Tech related keywords
    const aiTechKeywords = [
      'ai',
      'artificial intelligence',
      'machine learning',
      'llm',
      'gpt',
      'chatgpt',
      'openai',
      'anthropic',
      'claude',
      'gemini',
      'deepmind',
      'neural',
      'deep learning',
      'transformer',
      'langchain',
      'agent',
      'prompt',
      'rag',
      'embeddings',
      'vector',
      'generative',
      'diffusion',
      'stable diffusion',
      'midjourney',
      'dall-e',
      'copilot'
    ];

    // Check if from newsletter platform
    const isFromPlatform = newsletterPlatforms.some(platform =>
      email.includes(platform)
    );

    // Check if AI/tech related
    const isAITech = aiTechKeywords.some(keyword =>
      name.includes(keyword) || subj.includes(keyword) || email.includes(keyword)
    );

    // Check if frequent (likely regular newsletter)
    const isFrequent = frequency >= 3;

    return isFromPlatform || (isAITech && isFrequent);
  }

  /**
   * Analyze emails and group by sender
   */
  analyzeSenders(emails) {
    const senderStats = new Map();

    for (const email of emails) {
      const senderEmail = this.extractEmail(email.from);
      const senderName = email.from.replace(/<[^>]+>/, '').trim();

      // Skip if already configured
      if (this.configuredSenders.has(senderEmail)) {
        continue;
      }

      if (!senderStats.has(senderEmail)) {
        senderStats.set(senderEmail, {
          email: senderEmail,
          name: senderName,
          subjects: [],
          count: 0,
          firstDate: email.date,
          lastDate: email.date
        });
      }

      const stats = senderStats.get(senderEmail);
      stats.count++;
      stats.subjects.push(email.subject);

      if (email.date < stats.firstDate) stats.firstDate = email.date;
      if (email.date > stats.lastDate) stats.lastDate = email.date;
    }

    return senderStats;
  }

  /**
   * Filter and rank potential newsletters
   */
  findPotentialNewsletters(senderStats) {
    const candidates = [];

    for (const [email, stats] of senderStats) {
      // Get a sample subject (most recent)
      const sampleSubject = stats.subjects[stats.subjects.length - 1] || '';

      const isNewsletter = this.isLikelyNewsletter(
        stats.email,
        stats.name,
        sampleSubject,
        stats.count
      );

      if (isNewsletter) {
        candidates.push({
          ...stats,
          sampleSubject,
          score: stats.count // Simple scoring: more emails = higher score
        });
      }
    }

    // Sort by score (frequency) descending
    candidates.sort((a, b) => b.score - a.score);

    return candidates;
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

  /**
   * Main analysis function
   */
  async analyze(days = 60) {
    try {
      await this.connect();

      console.log('\n📧 Analyzing recent emails...\n');
      const emails = await this.fetchRecentEmails(days);

      console.log('\n📊 Analyzing sender patterns...\n');
      const senderStats = this.analyzeSenders(emails);

      console.log('🔍 Identifying potential newsletters...\n');
      const candidates = this.findPotentialNewsletters(senderStats);

      this.disconnect();

      return {
        totalEmails: emails.length,
        uniqueSenders: senderStats.size,
        candidates,
        configuredCount: this.configuredSenders.size
      };
    } catch (error) {
      console.error('Error during analysis:', error);
      this.disconnect();
      throw error;
    }
  }
}

/**
 * Display results in a nice format
 */
function displayResults(results) {
  console.log('═'.repeat(80));
  console.log('📬 NEWSLETTER DISCOVERY RESULTS');
  console.log('═'.repeat(80));
  console.log();
  console.log(`Total emails analyzed: ${results.totalEmails}`);
  console.log(`Unique senders found: ${results.uniqueSenders}`);
  console.log(`Currently configured: ${results.configuredCount} newsletter senders`);
  console.log(`New candidates found: ${results.candidates.length}`);
  console.log();

  if (results.candidates.length === 0) {
    console.log('✓ No new newsletter candidates found. Your configuration looks complete!');
    return;
  }

  console.log('═'.repeat(80));
  console.log('🎯 POTENTIAL NEWSLETTER SENDERS (sorted by frequency)');
  console.log('═'.repeat(80));
  console.log();

  results.candidates.forEach((candidate, index) => {
    console.log(`${index + 1}. ${candidate.name}`);
    console.log(`   Email: ${candidate.email}`);
    console.log(`   Frequency: ${candidate.count} emails`);
    console.log(`   Sample: "${candidate.sampleSubject}"`);
    console.log(`   Period: ${candidate.firstDate.toDateString()} → ${candidate.lastDate.toDateString()}`);
    console.log();
  });

  console.log('═'.repeat(80));
  console.log('📝 TO ADD THESE SENDERS:');
  console.log('═'.repeat(80));
  console.log();
  console.log('Copy the email addresses you want to add and append them to');
  console.log('NEWSLETTER_SENDERS in your .env file (comma-separated).');
  console.log();
  console.log('Quick copy (all candidates):');
  console.log('-'.repeat(80));
  const allEmails = results.candidates.map(c => c.email).join(',');
  console.log(allEmails);
  console.log('-'.repeat(80));
}

// Run the analysis - scan 90 days
const finder = new NewsletterFinder();
finder.analyze(90)
  .then(results => {
    displayResults(results);
  })
  .catch(error => {
    console.error('Failed to analyze newsletters:', error);
    process.exit(1);
  });
