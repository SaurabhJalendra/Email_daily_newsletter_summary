import nodemailer from 'nodemailer';
import { config } from '../utils/config.js';

export class EmailNotifier {
  constructor() {
    this.transporter = nodemailer.createTransport(config.email.smtp);
  }

  /**
   * Send daily summary notification email
   */
  async sendSummaryNotification(summaryData) {
    const { summary, totalNewsletters, newsletters, date } = summaryData;

    const dateString = new Date(date).toLocaleDateString('en-IN', {
      timeZone: 'Asia/Kolkata',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const htmlContent = this.generateHtmlEmail(summary, newsletters, totalNewsletters, dateString);
    const textContent = this.generateTextEmail(summary, newsletters, totalNewsletters, dateString);

    const mailOptions = {
      from: `Newsletter Digest <${config.email.address}>`,
      to: config.notification.recipientEmail,
      subject: `📰 Your AI Newsletter Digest - ${dateString}`,
      text: textContent,
      html: htmlContent
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log(`✓ Summary email sent: ${info.messageId}`);
      return info;
    } catch (error) {
      console.error('Error sending email notification:', error);
      throw error;
    }
  }

  /**
   * Generate HTML email content
   */
  generateHtmlEmail(summary, newsletters, totalNewsletters, dateString) {
    const newsletterDetails = newsletters.map(nl => `
      <div style="margin-bottom: 20px; padding: 15px; background: #f9f9f9; border-radius: 8px;">
        <h3 style="color: #333; margin: 0 0 10px 0;">📧 ${this.escapeHtml(nl.subject)}</h3>
        <p style="color: #666; font-size: 12px; margin: 0 0 10px 0;">From: ${this.escapeHtml(nl.from)}</p>
        <div style="color: #444; line-height: 1.6;">
          ${this.markdownToSimpleHtml(nl.summary)}
        </div>
        ${nl.links && nl.links.length > 0 ? `
          <div style="margin-top: 10px;">
            <strong>Links:</strong>
            <ul style="margin: 5px 0; padding-left: 20px;">
              ${nl.links.slice(0, 5).map(link => `
                <li><a href="${this.escapeHtml(link.url)}" style="color: #0066cc;">${this.escapeHtml(link.text)}</a></li>
              `).join('')}
            </ul>
          </div>
        ` : ''}
      </div>
    `).join('');

    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; background: #ffffff;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
    <h1 style="margin: 0 0 10px 0; font-size: 28px;">📰 Your Daily AI Newsletter Digest</h1>
    <p style="margin: 0; font-size: 16px; opacity: 0.9;">${dateString}</p>
    <p style="margin: 10px 0 0 0; font-size: 18px; font-weight: bold;">${totalNewsletters} Newsletter${totalNewsletters !== 1 ? 's' : ''} Summarized</p>
  </div>

  <div style="background: #fff; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #e0e0e0;">
    <h2 style="color: #333; margin-top: 0;">📊 Daily Overview</h2>
    ${this.markdownToSimpleHtml(summary)}
  </div>

  <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #e0e0e0;">
    <h2 style="color: #333; margin-top: 0;">📝 Individual Newsletter Summaries</h2>
    ${newsletterDetails}
  </div>

  <div style="margin-top: 30px; padding: 20px; background: #f5f5f5; border-radius: 10px; text-align: center;">
    <p style="margin: 0; color: #666;">
      View full archive and previous summaries at:
      <a href="https://newsletters.saurabhjalendra.com" style="color: #667eea; text-decoration: none; font-weight: bold;">newsletters.saurabhjalendra.com</a>
    </p>
  </div>

  <div style="margin-top: 20px; text-align: center; color: #999; font-size: 12px;">
    <p>Generated with AI • Delivered at midnight IST</p>
  </div>
</body>
</html>`;
  }

  /**
   * Generate plain text email content
   */
  generateTextEmail(summary, newsletters, totalNewsletters, dateString) {
    const newsletterDetails = newsletters.map(nl => `
${'='.repeat(60)}
Subject: ${nl.subject}
From: ${nl.from}
${'='.repeat(60)}

${nl.summary}

${nl.links && nl.links.length > 0 ? `
Links:
${nl.links.slice(0, 5).map(link => `- ${link.text}: ${link.url}`).join('\n')}
` : ''}
    `).join('\n\n');

    return `
📰 YOUR DAILY AI NEWSLETTER DIGEST
${dateString}

${totalNewsletters} Newsletter${totalNewsletters !== 1 ? 's' : ''} Summarized

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 DAILY OVERVIEW

${summary}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 INDIVIDUAL NEWSLETTER SUMMARIES

${newsletterDetails}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

View full archive: https://newsletters.saurabhjalendra.com

Generated with AI • Delivered at midnight IST
`;
  }

  /**
   * Simple markdown to HTML conversion for email
   */
  markdownToSimpleHtml(markdown) {
    return markdown
      .replace(/^### (.*$)/gim, '<h4 style="color: #444; margin: 15px 0 10px 0;">$1</h4>')
      .replace(/^## (.*$)/gim, '<h3 style="color: #333; margin: 20px 0 10px 0;">$1</h3>')
      .replace(/^# (.*$)/gim, '<h2 style="color: #222; margin: 25px 0 15px 0;">$1</h2>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^- (.*$)/gim, '<li>$1</li>')
      .replace(/(<li>.*<\/li>)/s, '<ul style="margin: 10px 0; padding-left: 25px;">$1</ul>')
      .replace(/\n\n/g, '</p><p style="margin: 10px 0;">')
      .replace(/^(.+)$/gim, '<p style="margin: 10px 0;">$1</p>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color: #0066cc;">$1</a>');
  }

  /**
   * Escape HTML special characters
   */
  escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }
}
