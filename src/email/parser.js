import TurndownService from 'turndown';

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
});

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
    const links = [];
    const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi;
    let match;

    while ((match = linkRegex.exec(html)) !== null) {
      const url = match[1];
      const text = match[2].replace(/<[^>]+>/g, '').trim();

      // Skip unsubscribe, tracking, and social media links
      if (!url.includes('unsubscribe') &&
          !url.includes('track.') &&
          !url.includes('facebook.com') &&
          !url.includes('twitter.com') &&
          !url.includes('linkedin.com') &&
          text.length > 0) {
        links.push({ text, url });
      }
    }

    return links.slice(0, 10); // Limit to top 10 links
  }

  /**
   * Parse multiple newsletters into structured format
   */
  static parseNewsletters(emails) {
    return emails.map(email => this.extractContent(email));
  }
}
