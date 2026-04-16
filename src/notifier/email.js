import nodemailer from 'nodemailer';
import { marked } from 'marked';
import { config } from '../utils/config.js';

// Configure marked for email-safe HTML with inline styles
const emailRenderer = {
  heading({ tokens, depth }) {
    const text = this.parser.parseInline(tokens);
    const styles = {
      1: 'color: #222; margin: 25px 0 15px 0; font-size: 24px;',
      2: 'color: #333; margin: 20px 0 10px 0; font-size: 20px;',
      3: 'color: #333; margin: 18px 0 8px 0; font-size: 17px;',
      4: 'color: #444; margin: 15px 0 8px 0; font-size: 15px;'
    };
    const tag = `h${depth}`;
    return `<${tag} style="${styles[depth] || styles[4]}">${text}</${tag}>`;
  },
  paragraph({ tokens }) {
    const text = this.parser.parseInline(tokens);
    return `<p style="margin: 10px 0; line-height: 1.6; color: #333;">${text}</p>`;
  },
  list({ items, ordered }) {
    const tag = ordered ? 'ol' : 'ul';
    const body = items.map(item => this.listitem(item)).join('');
    return `<${tag} style="margin: 10px 0; padding-left: 25px;">${body}</${tag}>`;
  },
  listitem({ tokens }) {
    const text = this.parser.parse(tokens, !!this.options?.async);
    return `<li style="margin: 4px 0; line-height: 1.5; color: #444;">${text}</li>`;
  },
  link({ href, text }) {
    return `<a href="${href}" style="color: #0066cc; text-decoration: underline;">${text}</a>`;
  },
  strong({ tokens }) {
    const text = this.parser.parseInline(tokens);
    return `<strong style="color: #222;">${text}</strong>`;
  },
  em({ tokens }) {
    const text = this.parser.parseInline(tokens);
    return `<em>${text}</em>`;
  },
  codespan({ text }) {
    return `<code style="background: #f1f5f9; padding: 2px 6px; border-radius: 3px; font-size: 14px;">${text}</code>`;
  },
  code({ text }) {
    return `<pre style="background: #1f2937; color: #e5e7eb; padding: 16px; border-radius: 8px; overflow-x: auto; font-size: 13px;"><code>${text}</code></pre>`;
  },
  blockquote({ tokens }) {
    const body = this.parser.parse(tokens);
    return `<blockquote style="border-left: 4px solid #667eea; margin: 15px 0; padding: 10px 20px; background: #f8f9ff; font-style: italic;">${body}</blockquote>`;
  }
};

marked.use({ renderer: emailRenderer, breaks: true, gfm: true });

/**
 * Convert markdown to email-safe HTML using marked
 */
function markdownToEmailHtml(markdown) {
  if (!markdown) return '';
  try {
    return marked(markdown);
  } catch (error) {
    console.error('Error converting markdown to HTML:', error);
    return `<p>${escapeHtml(markdown)}</p>`;
  }
}

/**
 * Strip markdown syntax for plain text email
 */
function stripMarkdown(text) {
  if (!text) return '';
  return text
    .replace(/^#{1,6}\s+/gm, '')           // Remove headings
    .replace(/\*\*(.*?)\*\*/g, '$1')        // Remove bold
    .replace(/\*(.*?)\*/g, '$1')            // Remove italic
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1: $2')  // Links to "text: url"
    .replace(/`([^`]+)`/g, '$1')            // Remove inline code
    .replace(/^[-*]\s+/gm, '- ')            // Normalize list markers
    .replace(/^\d+\.\s+/gm, (m) => m)       // Keep numbered lists
    .trim();
}

/**
 * Truncate markdown text for email (Gmail clipping protection)
 */
function truncateForEmail(markdown, maxWords = 300) {
  if (!markdown) return { text: '', truncated: false };
  const words = markdown.split(/\s+/);
  if (words.length <= maxWords) return { text: markdown, truncated: false };
  return { text: words.slice(0, maxWords).join(' ') + '...', truncated: true };
}

/**
 * Escape HTML special characters
 */
function escapeHtml(text) {
  if (!text) return '';
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * Get priority color for visual indicator
 */
function getPriorityStyle(priority) {
  switch ((priority || '').toUpperCase()) {
    case 'HIGH': return { border: '#ef4444', label: '🔴 HIGH', bg: '#fef2f2' };
    case 'MEDIUM': return { border: '#f59e0b', label: '🟡 MEDIUM', bg: '#fffbeb' };
    case 'LOW': return { border: '#9ca3af', label: '⚪ LOW', bg: '#f9fafb' };
    default: return { border: '#f59e0b', label: '🟡 MEDIUM', bg: '#fffbeb' };
  }
}

export class EmailNotifier {
  constructor() {
    this.transporter = nodemailer.createTransport(config.email.smtp);
  }

  /**
   * Send daily summary notification email
   */
  async sendSummaryNotification(summaryData) {
    const { summary, totalNewsletters, newsletters, date, tldr, researchFindings } = summaryData;

    const dateString = new Date(date).toLocaleDateString('en-IN', {
      timeZone: 'Asia/Kolkata',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const dateParam = new Date(date).toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });

    const htmlContent = this.generateHtmlEmail(summary, newsletters, totalNewsletters, dateString, dateParam, tldr, researchFindings);
    const textContent = this.generateTextEmail(summary, newsletters, totalNewsletters, dateString, tldr, researchFindings);

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
   * Generate HTML email content with table-based layout for Outlook compatibility
   */
  generateHtmlEmail(summary, newsletters, totalNewsletters, dateString, dateParam, tldr, researchFindings) {
    // Sort newsletters by priority: HIGH → MEDIUM → LOW
    const priorityOrder = { HIGH: 0, MEDIUM: 1, LOW: 2 };
    const sorted = [...newsletters].sort((a, b) =>
      (priorityOrder[a.priority] ?? 1) - (priorityOrder[b.priority] ?? 1)
    );

    // TL;DR section
    const tldrHtml = tldr && tldr.length > 0 ? `
      <tr><td style="padding: 0 0 20px 0;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background: #fffbeb; border-radius: 8px; border-left: 4px solid #f59e0b;">
          <tr><td style="padding: 18px 20px;">
            <h2 style="color: #92400e; margin: 0 0 12px 0; font-size: 18px;">⚡ TL;DR</h2>
            <ul style="margin: 0; padding-left: 20px;">
              ${tldr.map(b => `<li style="color: #78350f; margin: 4px 0; line-height: 1.5;">${escapeHtml(b)}</li>`).join('')}
            </ul>
          </td></tr>
        </table>
      </td></tr>` : '';

    // Individual newsletter cards
    const newsletterCards = sorted.map(nl => {
      const ps = getPriorityStyle(nl.priority);
      const { text: truncatedSummary, truncated } = truncateForEmail(nl.summary, 300);
      const summaryHtml = markdownToEmailHtml(truncatedSummary);
      const readMoreLink = truncated
        ? `<p style="margin: 10px 0 0 0;"><a href="https://newsletters.saurabhjalendra.com?date=${dateParam}" style="color: #667eea; text-decoration: none; font-weight: 600;">Read full summary on dashboard →</a></p>`
        : '';

      const linksHtml = nl.links && nl.links.length > 0 ? `
        <table cellpadding="0" cellspacing="0" style="margin-top: 12px; border-top: 1px solid #e5e7eb; padding-top: 10px; width: 100%;">
          <tr><td style="padding-top: 8px;">
            <strong style="color: #555; font-size: 13px;">Notable Links:</strong>
            <ul style="margin: 6px 0 0 0; padding-left: 20px;">
              ${nl.links.slice(0, 5).map(link => `
                <li style="margin: 3px 0;"><a href="${escapeHtml(link.url)}" style="color: #0066cc; font-size: 13px; text-decoration: none;">→ ${escapeHtml(link.text)}</a></li>
              `).join('')}
            </ul>
          </td></tr>
        </table>` : '';

      return `
        <tr><td style="padding: 0 0 16px 0;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background: ${ps.bg}; border-left: 4px solid ${ps.border}; border-radius: 6px;">
            <tr><td style="padding: 16px 18px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td><h3 style="color: #111; margin: 0 0 6px 0; font-size: 16px;">${escapeHtml(nl.subject)}</h3></td>
                  <td width="80" style="text-align: right; font-size: 11px; color: #888; vertical-align: top;">${ps.label}</td>
                </tr>
              </table>
              <p style="color: #666; font-size: 12px; margin: 0 0 12px 0;">From: ${escapeHtml(nl.from)}</p>
              <div style="color: #444; font-size: 14px; line-height: 1.6;">${summaryHtml}</div>
              ${readMoreLink}
              ${linksHtml}
            </td></tr>
          </table>
        </td></tr>`;
    }).join('');

    // Research findings section
    const researchHtml = researchFindings?.missingStories?.length > 0 ? `
      <tr><td style="padding: 0 0 20px 0;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background: #f0fdf4; border-radius: 8px; border: 1px solid #bbf7d0;">
          <tr><td style="padding: 18px 20px;">
            <h2 style="color: #166534; margin: 0 0 12px 0; font-size: 18px;">🔍 Beyond the Newsletters</h2>
            <p style="color: #15803d; font-size: 13px; margin: 0 0 12px 0;">Stories our research agent found that weren't in today's newsletters:</p>
            ${researchFindings.missingStories.map(story => `
              <div style="margin-bottom: 12px; padding: 10px; background: #ffffff; border-radius: 6px;">
                <strong style="color: #166534;">${escapeHtml(story.headline)}</strong>
                <p style="color: #444; margin: 6px 0 4px 0; font-size: 13px; line-height: 1.5;">${escapeHtml(story.summary)}</p>
                <p style="color: #15803d; margin: 2px 0 0 0; font-size: 12px; font-style: italic;">Why it matters: ${escapeHtml(story.whyItMatters)}</p>
              </div>
            `).join('')}
          </td></tr>
        </table>
      </td></tr>` : '';

    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!--[if mso]>
  <style>body{font-family:Arial,sans-serif;}</style>
  <![endif]-->
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 0; background: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #f5f5f5;">
    <tr><td align="center" style="padding: 20px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 700px; background: #ffffff;">

        <!-- Header -->
        <tr><td style="background: #667eea; padding: 30px; text-align: left;">
          <!--[if mso]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:700px;"><v:fill type="gradient" color="#667eea" color2="#764ba2"/><v:textbox inset="30px"><![endif]-->
          <h1 style="margin: 0 0 8px 0; font-size: 26px; color: #ffffff;">📰 AI Newsletter Digest</h1>
          <p style="margin: 0; font-size: 15px; color: rgba(255,255,255,0.85);">${dateString}</p>
          <p style="margin: 8px 0 0 0; font-size: 17px; font-weight: bold; color: #ffffff;">${totalNewsletters} Newsletter${totalNewsletters !== 1 ? 's' : ''} Summarized</p>
          <!--[if mso]></v:textbox></v:rect><![endif]-->
        </td></tr>

        <!-- Content Area -->
        <tr><td style="padding: 24px;">
          <table width="100%" cellpadding="0" cellspacing="0">

            <!-- TL;DR -->
            ${tldrHtml}

            <!-- Daily Overview -->
            <tr><td style="padding: 0 0 20px 0;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px;">
                <tr><td style="padding: 18px 20px;">
                  <h2 style="color: #333; margin: 0 0 14px 0; font-size: 18px;">📊 Daily Overview</h2>
                  <div style="color: #444; font-size: 14px; line-height: 1.6;">
                    ${markdownToEmailHtml(summary)}
                  </div>
                </td></tr>
              </table>
            </td></tr>

            <!-- Research Findings -->
            ${researchHtml}

            <!-- Individual Newsletters -->
            <tr><td style="padding: 0 0 10px 0;">
              <h2 style="color: #333; margin: 0 0 14px 0; font-size: 18px;">📧 Individual Summaries</h2>
            </td></tr>
            ${newsletterCards}

          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding: 20px 24px; background: #f9fafb; text-align: center; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">
            <a href="https://newsletters.saurabhjalendra.com" style="color: #667eea; text-decoration: none; font-weight: 600;">View full archive on dashboard</a>
          </p>
          <p style="margin: 0; color: #999; font-size: 12px;">Generated with AI • Delivered at midnight IST</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
  }

  /**
   * Generate plain text email content
   */
  generateTextEmail(summary, newsletters, totalNewsletters, dateString, tldr, researchFindings) {
    // Sort newsletters by priority
    const priorityOrder = { HIGH: 0, MEDIUM: 1, LOW: 2 };
    const sorted = [...newsletters].sort((a, b) =>
      (priorityOrder[a.priority] ?? 1) - (priorityOrder[b.priority] ?? 1)
    );

    const tldrText = tldr && tldr.length > 0
      ? `⚡ TL;DR\n${tldr.map(b => `  • ${b}`).join('\n')}\n\n${'━'.repeat(60)}\n`
      : '';

    const researchText = researchFindings?.missingStories?.length > 0
      ? `\n${'━'.repeat(60)}\n\n🔍 BEYOND THE NEWSLETTERS\n\n${researchFindings.missingStories.map(s =>
          `▸ ${s.headline}\n  ${s.summary}\n  Why it matters: ${s.whyItMatters}\n`
        ).join('\n')}\n`
      : '';

    const newsletterDetails = sorted.map(nl => {
      const priorityLabel = { HIGH: '[HIGH]', MEDIUM: '[MED]', LOW: '[LOW]' }[nl.priority] || '[MED]';
      const { text: truncatedSummary } = truncateForEmail(nl.summary, 300);
      const cleanSummary = stripMarkdown(truncatedSummary);
      const linksText = nl.links && nl.links.length > 0
        ? `\nLinks:\n${nl.links.slice(0, 5).map(link => `  → ${link.text}: ${link.url}`).join('\n')}\n`
        : '';

      return `${'═'.repeat(60)}
${priorityLabel} ${nl.subject}
From: ${nl.from}
${'═'.repeat(60)}

${cleanSummary}
${linksText}`;
    }).join('\n\n');

    return `📰 YOUR AI NEWSLETTER DIGEST
${dateString}
${totalNewsletters} Newsletter${totalNewsletters !== 1 ? 's' : ''} Summarized

${'━'.repeat(60)}

${tldrText}
📊 DAILY OVERVIEW

${stripMarkdown(summary)}

${'━'.repeat(60)}
${researchText}
📧 INDIVIDUAL SUMMARIES

${newsletterDetails}

${'━'.repeat(60)}

View full archive: https://newsletters.saurabhjalendra.com

Generated with AI • Delivered at midnight IST`;
  }
}
