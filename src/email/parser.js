import TurndownService from 'turndown';
import * as cheerio from 'cheerio';

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
});

function cleanUrl(url) {
  try {
    const u = new URL(url);
    [...u.searchParams.keys()]
      .filter(k => k.startsWith('utm_'))
      .forEach(k => u.searchParams.delete(k));
    return u.toString();
  } catch { return url; }
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
    const $ = cheerio.load(html);
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

      // Skip image/asset URLs
      if (assetExtensions.some(ext => urlLower.endsWith(ext))) return;

      const cleaned = cleanUrl(rawUrl);

      // Deduplicate by cleaned URL
      if (seen.has(cleaned)) return;
      seen.add(cleaned);

      links.push({ text, url: cleaned });
    });

    return links.slice(0, 10); // Limit to top 10 links
  }

  /**
   * Parse multiple newsletters into structured format
   */
  static parseNewsletters(emails) {
    return emails.map(email => this.extractContent(email));
  }
}
