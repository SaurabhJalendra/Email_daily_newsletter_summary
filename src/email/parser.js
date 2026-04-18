import TurndownService from 'turndown';
import * as cheerio from 'cheerio';

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
});

function cleanUrl(url) {
  try {
    const u = new URL(url);
    // Only allow http(s) — reject mailto:, tel:, javascript:, etc.
    if (u.protocol !== 'http:' && u.protocol !== 'https:') return null;
    [...u.searchParams.keys()]
      .filter(k => k.startsWith('utm_'))
      .forEach(k => u.searchParams.delete(k));
    return u.toString();
  } catch { return null; }
}

// Senders/sender-domains to drop entirely (recurring promo, non-AI, webinar spam)
// Match is substring-based on the FROM field (case-insensitive)
const ALWAYS_SKIP_SENDERS = [
  'thetechbuzz',           // Real Intent webinar spam — not AI content
  'real intent',
  'realintent.com'
];

// Subject patterns that flag a newsletter as low-priority promo (LOW before LLM sees it)
const PROMO_SUBJECT_PATTERNS = [
  /webinar/i,
  /register now/i,
  /register today/i,
  /limited time/i,
  /exclusive offer/i,
  /save \$\d+/i,
  /\d+% off/i,
  /last chance/i,
  /price increase/i,
  /enroll now/i,
  /seats? (?:are )?(?:filling|going)/i
];

export function isPromoSubject(subject) {
  if (!subject) return false;
  return PROMO_SUBJECT_PATTERNS.some(rx => rx.test(subject));
}

export function shouldSkipSender(fromField) {
  if (!fromField) return false;
  const lower = fromField.toLowerCase();
  return ALWAYS_SKIP_SENDERS.some(s => lower.includes(s));
}

export class NewsletterParser {
  /**
   * Extract clean text content from newsletter email
   */
  static extractContent(email) {
    const content = {
      from: email.from?.text || 'Unknown',
      subject: email.subject || 'No Subject',
      date: email.date,
      textContent: '',
      htmlContent: '',
      links: []
    };

    // Try HTML first (most newsletters use HTML)
    if (email.html) {
      content.htmlContent = email.html;
      content.textContent = this.htmlToMarkdown(email.html);
      content.links = this.extractLinks(email.html);
    }
    // Fallback to plain text
    else if (email.text) {
      content.textContent = email.text;
    }

    return content;
  }

  /**
   * Convert HTML to clean Markdown for better AI processing
   */
  static htmlToMarkdown(html) {
    try {
      // Remove common newsletter cruft
      let cleaned = html
        .replace(/<style[^>]*>.*?<\/style>/gsi, '')
        .replace(/<script[^>]*>.*?<\/script>/gsi, '')
        .replace(/<!--.*?-->/gs, '');

      // Convert to markdown
      const markdown = turndownService.turndown(cleaned);

      return markdown;
    } catch (error) {
      console.error('Error converting HTML to markdown:', error);
      // Fallback to stripping HTML tags
      return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    }
  }

  /**
   * Extract important links from newsletter
   */
  static extractLinks(html) {
    let $;
    try {
      $ = cheerio.load(html);
    } catch (error) {
      console.error('Error loading HTML with cheerio:', error.message);
      return [];
    }
    const links = [];
    const seen = new Set();

    const urlBlocklist = [
      'unsubscribe',
      'facebook.com', 'twitter.com', 'linkedin.com', 'instagram.com',
      'list-manage.com'
    ];

    // Tracking redirect domains — these hide the real destination URL
    const trackingDomains = [
      'link.mail.beehiiv.com', 'links.beehiiv.com',
      'email.mg.', 'click.convertkit',
      'tracking.tldrnewsletter.com',
      'journalclub.io/track/',
      'link.skool.com',
      'app.alphasignal.ai/c',
      'track.', 'click.'
    ];

    const textBlocklist = [
      'privacy policy', 'terms of service', 'terms of use', 'email preferences',
      'manage preferences', 'update preferences', 'become a sponsor', 'submit your',
      'view in browser', 'read online', 'unsubscribe', 'manage subscription',
      'powered by', 'sent by', 'forward to a friend'
    ];

    const assetExtensions = [
      '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico', '.css', '.js'
    ];

    $('a[href]').each((_, el) => {
      const rawUrl = $(el).attr('href');
      const text = $(el).text().trim();

      if (!rawUrl || !text) return;

      const urlLower = rawUrl.toLowerCase();
      const textLower = text.toLowerCase();

      // Skip blocked URLs (social media, unsubscribe)
      if (urlBlocklist.some(pattern => urlLower.includes(pattern))) return;

      // Skip tracking redirect URLs
      if (trackingDomains.some(domain => urlLower.includes(domain))) return;

      // Skip blocked link text
      if (textBlocklist.some(pattern => textLower.includes(pattern))) return;

      // Skip image/asset URLs (check pathname to handle query strings like logo.png?v=1)
      let pathname = urlLower;
      try { pathname = new URL(rawUrl).pathname.toLowerCase(); } catch {}
      if (assetExtensions.some(ext => pathname.endsWith(ext))) return;

      const cleaned = cleanUrl(rawUrl);
      if (!cleaned) return; // skip mailto:, tel:, relative, javascript:, etc.

      // Deduplicate by cleaned URL
      if (seen.has(cleaned)) return;
      seen.add(cleaned);

      links.push({ text, url: cleaned });
    });

    return links.slice(0, 10); // Limit to top 10 links
  }

  /**
   * Parse multiple newsletters into structured format.
   * Drops senders in ALWAYS_SKIP_SENDERS entirely (recurring promo / non-AI noise).
   */
  static parseNewsletters(emails) {
    const parsed = emails.map(email => this.extractContent(email));
    const filtered = parsed.filter(nl => {
      if (shouldSkipSender(nl.from)) {
        console.log(`  ⏭️  Skipping spam/non-AI sender: ${nl.from}`);
        return false;
      }
      return true;
    });
    if (filtered.length < parsed.length) {
      console.log(`  Filtered ${parsed.length - filtered.length} newsletters from skip list (kept ${filtered.length} of ${parsed.length})`);
    }
    return filtered;
  }
}
