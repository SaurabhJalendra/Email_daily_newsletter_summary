import nodemailer from 'nodemailer';
import { marked } from 'marked';
import { config } from '../utils/config.js';

// Marked renderer using CSS classes instead of inline styles (huge size savings)
const emailRenderer = {
  heading({ tokens, depth }) {
    const text = this.parser.parseInline(tokens);
    const tag = `h${depth}`;
    return `<${tag} class="md-h${depth}">${text}</${tag}>`;
  },
  paragraph({ tokens }) {
    const text = this.parser.parseInline(tokens);
    return `<p class="md-p">${text}</p>`;
  },
  list({ items, ordered }) {
    const tag = ordered ? 'ol' : 'ul';
    const body = items.map(item => this.listitem(item)).join('');
    return `<${tag} class="md-list">${body}</${tag}>`;
  },
  listitem({ tokens }) {
    const text = this.parser.parse(tokens, !!this.options?.async);
    return `<li class="md-li">${text}</li>`;
  },
  link({ href, text }) {
    // Strip tracking URLs from summary markdown (LLM sometimes includes them despite prompt)
    // Bumped threshold to 250 chars so legitimate long URLs (GitHub gists, arXiv with params,
    // Google Docs, signed S3) stay clickable
    const isTracking = /link\.mail\.beehiiv\.com|tracking\.tldrnewsletter\.com|journalclub\.io\/track|link\.skool\.com|app\.alphasignal\.ai\/c|links\.beehiiv\.com/.test(href);
    if (isTracking || href.length > 250) {
      return `<span class="md-strong">${text}</span>`;
    }
    return `<a href="${href}" class="md-a">${text}</a>`;
  },
  strong({ tokens }) {
    return `<strong class="md-strong">${this.parser.parseInline(tokens)}</strong>`;
  },
  em({ tokens }) {
    return `<em>${this.parser.parseInline(tokens)}</em>`;
  },
  codespan({ text }) {
    return `<code class="md-code">${text}</code>`;
  },
  code({ text }) {
    return `<pre class="md-pre"><code>${text}</code></pre>`;
  },
  blockquote({ tokens }) {
    return `<blockquote class="md-blockquote">${this.parser.parse(tokens)}</blockquote>`;
  }
};

marked.use({ renderer: emailRenderer, breaks: true, gfm: true });

// Centralized stylesheet — put once in <head>, classes reused throughout
const EMAIL_STYLES = `
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; margin: 0; padding: 0; background: #f5f5f5; }
  .wrap { width: 100%; background: #f5f5f5; }
  .main { max-width: 700px; background: #ffffff; margin: 0 auto; }
  .hdr { background: #667eea; padding: 30px; color: #fff; }
  .hdr-h1 { margin: 0 0 8px 0; font-size: 26px; color: #fff; }
  .hdr-date { margin: 0; font-size: 15px; color: rgba(255,255,255,0.85); }
  .hdr-count { margin: 8px 0 0 0; font-size: 17px; font-weight: bold; color: #fff; }
  .content { padding: 24px; }
  .tldr { background: #fffbeb; border-radius: 8px; border-left: 4px solid #f59e0b; padding: 18px 20px; margin-bottom: 20px; }
  .tldr-h { color: #92400e; margin: 0 0 12px 0; font-size: 18px; }
  .tldr-ul { margin: 0; padding-left: 20px; }
  .tldr-li { color: #78350f; margin: 4px 0; line-height: 1.5; }
  .overview { background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 18px 20px; margin-bottom: 20px; }
  .overview-h { color: #333; margin: 0 0 14px 0; font-size: 18px; }
  .research { background: #f0fdf4; border-radius: 8px; border: 1px solid #bbf7d0; padding: 18px 20px; margin-bottom: 20px; }
  .research-h { color: #166534; margin: 0 0 12px 0; font-size: 18px; }
  .research-sub { color: #15803d; font-size: 13px; margin: 0 0 12px 0; }
  .research-item { margin-bottom: 12px; padding: 10px; background: #fff; border-radius: 6px; }
  .research-head { color: #166534; font-weight: bold; }
  .research-sum { color: #444; margin: 6px 0 4px 0; font-size: 13px; line-height: 1.5; }
  .research-why { color: #15803d; margin: 2px 0 0 0; font-size: 12px; font-style: italic; }
  .sec-h { color: #333; margin: 0 0 14px 0; font-size: 18px; }
  .card { border-radius: 6px; padding: 16px 18px; margin-bottom: 16px; }
  .card-high { background: #fef2f2; border-left: 4px solid #ef4444; }
  .card-med { background: #fffbeb; border-left: 4px solid #f59e0b; }
  .card-low { background: #f9fafb; border-left: 4px solid #9ca3af; }
  .card-title { color: #111; margin: 0 0 6px 0; font-size: 16px; }
  .card-from { color: #666; font-size: 12px; margin: 0 0 12px 0; }
  .card-body { color: #444; font-size: 14px; line-height: 1.6; }
  .card-prio { float: right; font-size: 11px; color: #888; }
  .read-more { margin: 10px 0 0 0; }
  .read-more a { color: #667eea; text-decoration: none; font-weight: 600; }
  .links-sec { margin-top: 12px; border-top: 1px solid #e5e7eb; padding-top: 10px; }
  .links-label { color: #555; font-size: 12px; font-weight: bold; }
  .link-pill { display: inline-block; color: #0066cc; font-size: 12px; text-decoration: none; background: #eff6ff; padding: 3px 8px; border-radius: 4px; margin: 2px 4px 2px 0; }
  .footer { padding: 20px 24px; background: #f9fafb; text-align: center; border-top: 1px solid #e5e7eb; }
  .footer-p { margin: 0 0 8px 0; color: #666; font-size: 14px; }
  .footer-sub { margin: 0; color: #999; font-size: 12px; }
  .footer a { color: #667eea; text-decoration: none; font-weight: 600; }
  /* Markdown classes */
  .md-h1 { color: #222; margin: 20px 0 12px 0; font-size: 22px; }
  .md-h2 { color: #333; margin: 18px 0 10px 0; font-size: 19px; }
  .md-h3 { color: #333; margin: 16px 0 8px 0; font-size: 17px; }
  .md-h4 { color: #444; margin: 14px 0 8px 0; font-size: 15px; }
  .md-p { margin: 10px 0; line-height: 1.6; color: #333; }
  .md-list { margin: 10px 0; padding-left: 25px; }
  .md-li { margin: 4px 0; line-height: 1.5; color: #444; }
  .md-a { color: #0066cc; text-decoration: underline; }
  .md-strong { color: #222; }
  .md-code { background: #f1f5f9; padding: 2px 6px; border-radius: 3px; font-size: 14px; }
  .md-pre { background: #1f2937; color: #e5e7eb; padding: 12px; border-radius: 6px; overflow-x: auto; font-size: 13px; }
  .md-blockquote { border-left: 4px solid #667eea; margin: 15px 0; padding: 10px 20px; background: #f8f9ff; font-style: italic; }
`;

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
   * Generate HTML email — class-based, compact, full content (no truncation)
   */
  generateHtmlEmail(summary, newsletters, totalNewsletters, dateString, dateParam, tldr, researchFindings) {
    const priorityOrder = { HIGH: 0, MEDIUM: 1, LOW: 2 };
    const sorted = [...newsletters].sort((a, b) =>
      (priorityOrder[a.priority] ?? 1) - (priorityOrder[b.priority] ?? 1)
    );

    const priorityClass = { HIGH: 'card-high', MEDIUM: 'card-med', LOW: 'card-low' };
    const priorityLabel = { HIGH: '🔴 HIGH', MEDIUM: '🟡 MED', LOW: '⚪ LOW' };

    const tldrHtml = tldr && tldr.length > 0 ? `
      <div class="tldr">
        <h2 class="tldr-h">⚡ TL;DR</h2>
        <ul class="tldr-ul">${tldr.map(b => `<li class="tldr-li">${escapeHtml(b)}</li>`).join('')}</ul>
      </div>` : '';

    const newsletterCards = sorted.map(nl => {
      const cls = priorityClass[nl.priority] || 'card-med';
      const label = priorityLabel[nl.priority] || '🟡 MED';
      const summaryHtml = markdownToEmailHtml(nl.summary);

      const linksHtml = nl.links && nl.links.length > 0 ? `
        <div class="links-sec">
          <span class="links-label">Links: </span>
          ${nl.links.slice(0, 5).map(link => {
            const text = link.text || link.url || 'link';
            const shortText = text.length > 30 ? text.substring(0, 28) + '…' : text;
            return `<a href="${escapeHtml(link.url || '#')}" class="link-pill">${escapeHtml(shortText)}</a>`;
          }).join('')}
        </div>` : '';

      return `
        <div class="card ${cls}">
          <span class="card-prio">${label}</span>
          <h3 class="card-title">${escapeHtml(nl.subject)}</h3>
          <p class="card-from">From: ${escapeHtml(nl.from)}</p>
          <div class="card-body">${summaryHtml}</div>
          ${linksHtml}
        </div>`;
    }).join('');

    const researchHtml = researchFindings?.missingStories?.length > 0 ? `
      <div class="research">
        <h2 class="research-h">🔍 Beyond the Newsletters</h2>
        <p class="research-sub">Stories our research agent found that weren't in today's newsletters:</p>
        ${researchFindings.missingStories.map(story => `
          <div class="research-item">
            <span class="research-head">${escapeHtml(story.headline)}</span>
            <p class="research-sum">${escapeHtml(story.summary)}</p>
            <p class="research-why">Why it matters: ${escapeHtml(story.whyItMatters)}</p>
          </div>`).join('')}
      </div>` : '';

    return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>${EMAIL_STYLES}</style>
</head>
<body>
<div class="wrap">
<div class="main">
<div class="hdr">
<h1 class="hdr-h1">📰 AI Newsletter Digest</h1>
<p class="hdr-date">${dateString}</p>
<p class="hdr-count">${totalNewsletters} Newsletter${totalNewsletters !== 1 ? 's' : ''} Summarized</p>
</div>
<div class="content">
${tldrHtml}
<div class="overview">
<h2 class="overview-h">📊 Daily Overview</h2>
<div>${markdownToEmailHtml(summary)}</div>
</div>
${researchHtml}
<h2 class="sec-h">📧 Individual Summaries</h2>
${newsletterCards}
</div>
<div class="footer">
<p class="footer-sub">Generated with AI • Delivered at midnight IST</p>
</div>
</div>
</div>
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
      const cleanSummary = stripMarkdown(nl.summary);
      const linksText = nl.links && nl.links.length > 0
        ? `\nLinks: ${nl.links.slice(0, 5).map(link => `[${link.text}]`).join(' | ')}\n`
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

Generated with AI • Delivered at midnight IST`;
  }
}
