import nodemailer from 'nodemailer';
import { marked } from 'marked';
import { config } from '../utils/config.js';
import { htmlToPdf } from '../utils/html-to-pdf.js';

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

  /* Cover page (PDF first page) */
  .cover { display: none; }

  /* Table of contents (PDF) */
  .toc { display: none; }

  /* Papers section (full) */
  .papers-full { background: #faf5ff; border: 1px solid #ddd6fe; border-radius: 8px; padding: 22px 24px; margin: 0 0 20px 0; }
  .papers-full-h { color: #5b21b6; margin: 0 0 6px 0; font-size: 19px; }
  .papers-full-sub { color: #6b21a8; font-size: 13px; margin: 0 0 14px 0; }
  .papers-full-list { margin: 0; padding-left: 24px; }
  .papers-full-li { margin: 10px 0; line-height: 1.5; }
  .papers-full-link { color: #5b21b6; font-weight: 600; text-decoration: none; }
  .papers-full-meta { color: #888; font-size: 11px; font-family: monospace; margin-top: 2px; word-break: break-all; }

  /* Print-specific styles for high-quality PDF rendering */
  @media print {
    @page { size: A4; margin: 20mm 14mm; }
    @page :first { margin: 0; }  /* Cover page is full-bleed */
    body {
      background: #fff;
      font-size: 11pt;
      font-family: Georgia, 'Times New Roman', serif;
      color: #1f2937;
    }
    .wrap { background: #fff; padding: 0; }
    .main { max-width: none; width: 100%; box-shadow: none; }

    /* Hide the email header on PDF — cover page replaces it */
    .hdr { display: none; }

    /* Cover page: full-bleed first page */
    .cover {
      display: block;
      page-break-after: always;
      height: 247mm;
      padding: 28mm 22mm 22mm 22mm;
      background: linear-gradient(135deg, #667eea 0%, #5b21b6 100%);
      color: #fff;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      box-sizing: border-box;
    }
    .cover-tag { font-size: 9pt; letter-spacing: 3pt; opacity: 0.8; text-transform: uppercase; margin-bottom: 18pt; font-family: Helvetica, Arial, sans-serif; }
    .cover-title { font-size: 36pt; margin: 0 0 10pt 0; line-height: 1.1; color: #fff; font-family: Georgia, serif; }
    .cover-date { font-size: 16pt; opacity: 0.9; margin-bottom: 32pt; font-style: italic; }
    .cover-stats { display: flex; gap: 14pt; flex-wrap: wrap; margin-bottom: 38pt; }
    .stat { background: rgba(255,255,255,0.12); border-radius: 8pt; padding: 12pt 16pt; min-width: 24mm; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .stat-num { display: block; font-size: 28pt; font-weight: bold; line-height: 1; font-family: Georgia, serif; }
    .stat-num.stat-high { color: #fecaca; }
    .stat-label { display: block; font-size: 9pt; opacity: 0.85; margin-top: 4pt; font-family: Helvetica, Arial, sans-serif; letter-spacing: 0.5pt; }
    .cover-tldr { background: rgba(0,0,0,0.18); border-radius: 8pt; padding: 16pt 20pt; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .cover-tldr-h { font-size: 11pt; letter-spacing: 2pt; opacity: 0.85; margin-bottom: 10pt; font-family: Helvetica, Arial, sans-serif; }
    .cover-tldr-list { margin: 0; padding-left: 18pt; font-family: Georgia, serif; }
    .cover-tldr-list li { font-size: 12pt; line-height: 1.5; margin: 6pt 0; }

    /* Table of contents */
    .toc {
      display: block;
      page-break-after: always;
      padding: 20mm 16mm;
      font-family: Georgia, serif;
    }
    .toc-h { font-size: 22pt; margin: 0 0 18pt 0; color: #1f2937; border-bottom: 1pt solid #e5e7eb; padding-bottom: 8pt; }
    .toc-list { margin: 0; padding-left: 22pt; font-size: 12pt; line-height: 2; }
    .toc-list > li { margin: 6pt 0; }
    .toc-list a { color: #1f2937 !important; text-decoration: none; }
    .toc-sub { padding-left: 22pt; font-size: 10.5pt; color: #6b7280; line-height: 1.7; list-style: none; margin-top: 4pt; }

    .content { padding: 0; }
    .tldr, .overview, .research, .papers-full, .card { -webkit-print-color-adjust: exact; print-color-adjust: exact; page-break-inside: avoid; box-shadow: none; }
    .tldr { background: #fffbeb; }
    .tldr-h, .overview-h, .research-h, .papers-full-h, .sec-h { font-size: 16pt; page-break-after: avoid; font-family: Georgia, serif; margin-top: 14pt; }
    .overview, .research, .papers-full { margin-bottom: 16pt; }
    .card { margin-bottom: 12pt; page-break-inside: avoid; padding: 12pt 14pt; }
    .card-title { font-size: 13pt; page-break-after: avoid; font-family: Georgia, serif; }
    .card-from { font-size: 9pt; font-family: Helvetica, Arial, sans-serif; }
    .card-body { font-size: 10.5pt; line-height: 1.55; }
    .card-prio { font-size: 8pt; font-family: Helvetica, Arial, sans-serif; }
    .tldr-li, .md-li { line-height: 1.55; }
    .md-h1 { font-size: 16pt; page-break-after: avoid; font-family: Georgia, serif; }
    .md-h2 { font-size: 14pt; page-break-after: avoid; font-family: Georgia, serif; }
    .md-h3 { font-size: 13pt; page-break-after: avoid; font-family: Georgia, serif; }
    .md-h4 { font-size: 12pt; page-break-after: avoid; font-family: Georgia, serif; }
    .md-p, .md-li { font-size: 10.5pt; }
    .links-sec { page-break-inside: avoid; }
    .link-pill { padding: 1pt 5pt; font-size: 8.5pt; font-family: Helvetica, Arial, sans-serif; }
    .footer { display: none; }
    .papers-full-list { padding-left: 22pt; }
    .papers-full-li { margin: 8pt 0; }
    .papers-full-meta { font-size: 9pt; }
    a { color: #2050a0 !important; text-decoration: none; }
    /* Each major section starts on a new page */
    section#beyond, section#papers, section#summaries { page-break-before: always; }
    h1, h2, h3, h4 { page-break-after: avoid; }
  }
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
 * Aggregate paper references across all newsletters.
 * Deduplicates by URL, preserves attribution back to source newsletter.
 */
function aggregatePapers(newsletters) {
  const seen = new Map(); // url → { url, title, sourceFroms: [..] }
  for (const nl of newsletters || []) {
    for (const p of nl?.papers || []) {
      if (!p?.url) continue;
      const existing = seen.get(p.url);
      if (existing) {
        // Prefer entries that have a title
        if (!existing.title && p.title) existing.title = p.title;
        if (!existing.sourceFroms.includes(nl.from)) existing.sourceFroms.push(nl.from);
      } else {
        seen.set(p.url, {
          url: p.url,
          title: p.title || null,
          source: p.source,
          sourceFroms: [nl.from]
        });
      }
    }
  }
  return [...seen.values()];
}

/**
 * Extract a list of "top stories" from the daily-overview markdown
 * for the short email body. Looks for the "Top Stories" section and
 * picks the first N bullets. Falls back to first N non-empty lines.
 */
function extractTopStories(overviewMarkdown, limit = 5) {
  if (!overviewMarkdown) return [];
  const lines = overviewMarkdown.split('\n');
  const stories = [];
  let inTop = false;
  for (const line of lines) {
    if (/^##\s*🔥?\s*Top Stories/i.test(line)) { inTop = true; continue; }
    if (inTop && /^##\s/.test(line)) break; // Next section
    if (inTop) {
      const trimmed = line.trim();
      const bullet = trimmed.match(/^(?:\d+\.|[-*])\s+(.+)$/);
      if (bullet) stories.push(bullet[1].trim());
      if (stories.length >= limit) break;
    }
  }
  return stories;
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
   * Send daily summary notification email.
   *
   * Email body = short scannable version (TL;DR + Top 5 stories + Beyond the
   * Newsletters + Papers This Cycle + attachment callout). Always ~10-15 KB.
   *
   * PDF attachment = full polished document with cover page, table of
   * contents, all newsletter cards grouped by priority, papers section,
   * page numbers, and serif typography.
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

    // Aggregate papers across all newsletters (deduped by URL)
    const allPapers = aggregatePapers(newsletters);

    // Short body for the email itself (never clipped)
    const bodyHtml = this.generateEmailBody(
      summary, newsletters, totalNewsletters, dateString, tldr, researchFindings, dateParam, allPapers
    );
    // Full content for the PDF attachment
    const fullDigestHtml = this.generateHtmlEmail(
      summary, newsletters, totalNewsletters, dateString, dateParam, tldr, researchFindings, allPapers
    );
    const textContent = this.generateTextEmail(summary, newsletters, totalNewsletters, dateString, tldr, researchFindings);

    // Convert the full digest HTML to PDF
    let pdfBuffer = null;
    try {
      console.log('   📄 Rendering digest as PDF…');
      pdfBuffer = await htmlToPdf(fullDigestHtml, {
        documentTitle: `AI Newsletter Digest — ${dateString}`,
        dateLabel: dateString
      });
      console.log(`   ✓ PDF rendered (${(pdfBuffer.length/1024).toFixed(1)} KB)`);
    } catch (pdfErr) {
      console.error('   ⚠️  PDF render failed, sending without attachment:', pdfErr.message);
    }

    const attachments = [];
    if (pdfBuffer) {
      attachments.push({
        filename: `digest-${dateParam}.pdf`,
        content: pdfBuffer,
        contentType: 'application/pdf'
      });
    }

    const mailOptions = {
      from: `Newsletter Digest <${config.email.address}>`,
      to: config.notification.recipientEmail,
      subject: `📰 Your AI Newsletter Digest - ${dateString}`,
      text: textContent,
      html: bodyHtml,
      attachments
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log(`✓ Summary email sent: ${info.messageId}`);
      console.log(`   Body: ${(bodyHtml.length/1024).toFixed(1)} KB (Gmail threshold: 102 KB)`);
      if (pdfBuffer) console.log(`   Attached PDF: ${(pdfBuffer.length/1024).toFixed(1)} KB`);
      return info;
    } catch (error) {
      console.error('Error sending email notification:', error);
      throw error;
    }
  }

  /**
   * Short scannable email body — TL;DR + Top 5 stories + Beyond the Newsletters
   * + Papers This Cycle + attachment callout. Always under 20KB regardless of
   * newsletter count. Goal: 30-second inbox scan.
   */
  generateEmailBody(summary, newsletters, totalNewsletters, dateString, tldr, researchFindings, dateParam, allPapers = []) {
    const tldrHtml = tldr && tldr.length > 0 ? `
      <div class="tldr">
        <h2 class="tldr-h">⚡ TL;DR</h2>
        <ul class="tldr-ul">${tldr.map(b => `<li class="tldr-li">${escapeHtml(b)}</li>`).join('')}</ul>
      </div>` : '';

    // Extract top 5 stories from the daily-overview markdown
    const topStories = extractTopStories(summary, 5);
    const topStoriesHtml = topStories.length > 0 ? `
      <div class="top5">
        <h2 class="top5-h">🔥 Top 5 Stories</h2>
        <ol class="top5-list">${topStories.map(s => `<li class="top5-li">${markdownToEmailHtml(s).replace(/^<p[^>]*>/, '').replace(/<\/p>$/, '')}</li>`).join('')}</ol>
      </div>` : '';

    const researchHtml = researchFindings?.missingStories?.length > 0 ? `
      <div class="research">
        <h2 class="research-h">🔍 Beyond the Newsletters</h2>
        <p class="research-sub">Stories our research agent found that weren't in today's newsletters:</p>
        ${researchFindings.missingStories.slice(0, 3).map(story => `
          <div class="research-item">
            <span class="research-head">${escapeHtml(story.headline)}</span>
            <p class="research-sum">${escapeHtml(story.summary)}</p>
            <p class="research-why">Why it matters: ${escapeHtml(story.whyItMatters)}</p>
          </div>`).join('')}
      </div>` : '';

    const papersHtml = allPapers.length > 0 ? `
      <div class="papers">
        <h2 class="papers-h">📄 Papers This Cycle</h2>
        <ul class="papers-list">${allPapers.slice(0, 8).map(p => `
          <li class="papers-li"><a href="${escapeHtml(p.url)}" class="papers-link">${escapeHtml(p.title || p.url)}</a></li>`).join('')}</ul>
      </div>` : '';

    return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>${EMAIL_STYLES}
.top5 { background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 18px 20px; margin-bottom: 20px; }
.top5-h { color: #b91c1c; margin: 0 0 12px 0; font-size: 18px; }
.top5-list { margin: 0; padding-left: 24px; }
.top5-li { margin: 8px 0; line-height: 1.5; color: #333; }
.papers { background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: 8px; padding: 18px 20px; margin-bottom: 20px; }
.papers-h { color: #5b21b6; margin: 0 0 10px 0; font-size: 17px; }
.papers-list { margin: 0; padding-left: 18px; }
.papers-li { margin: 5px 0; line-height: 1.4; }
.papers-link { color: #5b21b6; text-decoration: none; font-size: 13px; }
.attach-cta { background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; }
.attach-cta-h { color: #0369a1; margin: 0 0 8px 0; font-size: 16px; }
.attach-cta-p { color: #075985; margin: 0; font-size: 14px; line-height: 1.5; }
.attach-cta-file { display: inline-block; background: #fff; border: 1px dashed #7dd3fc; padding: 6px 12px; border-radius: 4px; font-family: monospace; font-size: 13px; color: #0c4a6e; margin-top: 8px; }
</style>
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
${topStoriesHtml}
${researchHtml}
${papersHtml}
<div class="attach-cta">
<h2 class="attach-cta-h">📎 Full digest attached as PDF</h2>
<p class="attach-cta-p">All ${totalNewsletters} newsletter summaries, daily overview by category, and complete papers list are in the attached PDF. Includes cover page, table of contents, page numbers.</p>
<div class="attach-cta-file">digest-${dateParam}.pdf</div>
</div>
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
   * Generate the FULL digest HTML — used as the source for the PDF attachment.
   * Includes a cover page, table of contents, daily overview, research
   * findings, ALL newsletter cards (priority-grouped), and a complete
   * Papers section. Designed to look polished as a saved/printed PDF.
   */
  generateHtmlEmail(summary, newsletters, totalNewsletters, dateString, dateParam, tldr, researchFindings, allPapers = []) {
    const priorityOrder = { HIGH: 0, MEDIUM: 1, LOW: 2 };
    const sorted = [...newsletters].sort((a, b) =>
      (priorityOrder[a.priority] ?? 1) - (priorityOrder[b.priority] ?? 1)
    );

    // Counts for cover page stats
    const counts = { HIGH: 0, MEDIUM: 0, LOW: 0 };
    for (const nl of newsletters) counts[nl.priority || 'MEDIUM']++;

    const priorityClass = { HIGH: 'card-high', MEDIUM: 'card-med', LOW: 'card-low' };
    const priorityLabel = { HIGH: '🔴 HIGH', MEDIUM: '🟡 MED', LOW: '⚪ LOW' };

    const tldrHtml = tldr && tldr.length > 0 ? `
      <div class="tldr">
        <h2 class="tldr-h">⚡ TL;DR</h2>
        <ul class="tldr-ul">${tldr.map(b => `<li class="tldr-li">${escapeHtml(b)}</li>`).join('')}</ul>
      </div>` : '';

    const newsletterCards = sorted.map((nl, i) => {
      const cls = priorityClass[nl.priority] || 'card-med';
      const label = priorityLabel[nl.priority] || '🟡 MED';
      const summaryHtml = markdownToEmailHtml(nl.summary);
      const cardId = `nl-${i}`;

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
        <div class="card ${cls}" id="${cardId}">
          <span class="card-prio">${label}</span>
          <h3 class="card-title">${escapeHtml(nl.subject)}</h3>
          <p class="card-from">From: ${escapeHtml(nl.from)}</p>
          <div class="card-body">${summaryHtml}</div>
          ${linksHtml}
        </div>`;
    }).join('');

    const researchHtml = researchFindings?.missingStories?.length > 0 ? `
      <section id="beyond" class="research">
        <h2 class="research-h">🔍 Beyond the Newsletters</h2>
        <p class="research-sub">Stories our research agent found that weren't in today's newsletters:</p>
        ${researchFindings.missingStories.map(story => `
          <div class="research-item">
            <span class="research-head">${escapeHtml(story.headline)}</span>
            <p class="research-sum">${escapeHtml(story.summary)}</p>
            <p class="research-why">Why it matters: ${escapeHtml(story.whyItMatters)}</p>
          </div>`).join('')}
      </section>` : '';

    const papersSectionHtml = allPapers.length > 0 ? `
      <section id="papers" class="papers-full">
        <h2 class="papers-full-h">📄 Papers Referenced Today</h2>
        <p class="papers-full-sub">${allPapers.length} unique paper${allPapers.length !== 1 ? 's' : ''} cited across today's newsletters.</p>
        <ol class="papers-full-list">${allPapers.map(p => `
          <li class="papers-full-li">
            <a href="${escapeHtml(p.url)}" class="papers-full-link">${escapeHtml(p.title || p.url)}</a>
            <div class="papers-full-meta">${escapeHtml(p.url)}</div>
          </li>`).join('')}</ol>
      </section>` : '';

    // Cover page (PDF only — hidden in email body via CSS, but email uses
    // generateEmailBody for the inline body so it's fine to include here)
    const coverHtml = `
      <section class="cover">
        <div class="cover-tag">DAILY DIGEST</div>
        <h1 class="cover-title">📰 AI Newsletter Digest</h1>
        <div class="cover-date">${dateString}</div>
        <div class="cover-stats">
          <div class="stat"><span class="stat-num">${totalNewsletters}</span><span class="stat-label">Newsletters</span></div>
          <div class="stat"><span class="stat-num stat-high">${counts.HIGH}</span><span class="stat-label">High Priority</span></div>
          <div class="stat"><span class="stat-num">${allPapers.length}</span><span class="stat-label">Papers</span></div>
          <div class="stat"><span class="stat-num">${researchFindings?.missingStories?.length || 0}</span><span class="stat-label">Beyond</span></div>
        </div>
        ${tldr && tldr.length > 0 ? `
          <div class="cover-tldr">
            <div class="cover-tldr-h">TL;DR</div>
            <ul class="cover-tldr-list">${tldr.map(b => `<li>${escapeHtml(b)}</li>`).join('')}</ul>
          </div>` : ''}
      </section>`;

    // Table of contents
    const tocItems = [
      `<li><a href="#overview">📊 Daily Overview</a></li>`,
      researchFindings?.missingStories?.length > 0 ? `<li><a href="#beyond">🔍 Beyond the Newsletters</a></li>` : '',
      allPapers.length > 0 ? `<li><a href="#papers">📄 Papers Referenced Today</a></li>` : '',
      `<li><a href="#summaries">📧 Individual Summaries (${totalNewsletters})</a>
        <ul class="toc-sub">
          ${counts.HIGH > 0 ? `<li>🔴 HIGH (${counts.HIGH})</li>` : ''}
          ${counts.MEDIUM > 0 ? `<li>🟡 MED (${counts.MEDIUM})</li>` : ''}
          ${counts.LOW > 0 ? `<li>⚪ LOW (${counts.LOW})</li>` : ''}
        </ul>
      </li>`
    ].filter(Boolean).join('\n');

    const tocHtml = `
      <section class="toc">
        <h2 class="toc-h">Contents</h2>
        <ol class="toc-list">${tocItems}</ol>
      </section>`;

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
${coverHtml}
${tocHtml}
<div class="content">
<section id="overview" class="overview">
<h2 class="overview-h">📊 Daily Overview</h2>
<div>${markdownToEmailHtml(summary)}</div>
</section>
${researchHtml}
${papersSectionHtml}
<section id="summaries">
<h2 class="sec-h">📧 Individual Summaries</h2>
${newsletterCards}
</section>
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
