#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import nodemailer from 'nodemailer';
import { marked } from 'marked';
import { config } from './utils/config.js';
import { htmlToPdf } from './utils/html-to-pdf.js';

/**
 * Extract a markdown section by header pattern. Returns the body content
 * (everything between the matching header and the next h1/h2 header).
 * Returns empty string if not found.
 */
function extractSection(markdown, headerPattern) {
  const lines = markdown.split('\n');
  const out = [];
  let inSection = false;
  for (const line of lines) {
    if (inSection && /^#{1,2}\s/.test(line)) break; // Hit next section
    if (!inSection && headerPattern.test(line)) { inSection = true; continue; }
    if (inSection) out.push(line);
  }
  return out.join('\n').trim();
}

function escapeHtml(text) {
  if (!text) return '';
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return text.replace(/[&<>"']/g, m => map[m]);
}

const WEEKLY_STYLES = `
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; margin: 0; padding: 0; background: #f5f5f5; color: #333; }
  .wrap { width: 100%; background: #f5f5f5; padding: 20px 0; }
  .main { max-width: 760px; margin: 0 auto; background: #ffffff; padding: 0; }
  .hdr { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; padding: 32px 28px; }
  .hdr h1 { margin: 0 0 8px 0; font-size: 26px; color: #fff; }
  .hdr p { margin: 0; font-size: 15px; color: #e8ebff; }
  .hdr-sub { margin-top: 4px !important; font-size: 13px !important; opacity: 0.85; }
  .content { padding: 28px; line-height: 1.6; }
  .content section { margin-bottom: 24px; }
  .content h2 { color: #5b21b6; margin: 0 0 12px 0; font-size: 19px; border-bottom: 2px solid #f0f1f5; padding-bottom: 6px; }
  .content h3 { color: #444; margin: 18px 0 10px 0; font-size: 16px; }
  .content p { margin: 10px 0; }
  .content ul, .content ol { margin: 10px 0; padding-left: 24px; }
  .content li { margin: 6px 0; }
  .content a { color: #5b21b6; text-decoration: none; }
  .content a:hover { text-decoration: underline; }
  .content blockquote { border-left: 4px solid #667eea; background: #f8f9ff; padding: 12px 18px; margin: 12px 0; font-style: italic; color: #555; }
  .content code { background: #f1f5f9; padding: 2px 6px; border-radius: 3px; font-size: 14px; }
  .featured { background: #fffbeb; border-left: 4px solid #f59e0b; padding: 18px 22px; border-radius: 6px; }
  .featured h2 { color: #92400e; border-bottom: none; }
  .top5 { background: #fff; border: 1px solid #e5e7eb; padding: 18px 22px; border-radius: 6px; }
  .numbers { background: #f5f3ff; border: 1px solid #ddd6fe; padding: 18px 22px; border-radius: 6px; }
  .numbers h2 { color: #5b21b6; }
  .attach-cta { background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 22px; margin: 24px 0 0 0; text-align: center; }
  .attach-cta h2 { color: #0369a1; margin: 0 0 8px 0; font-size: 16px; border: none; }
  .attach-cta p { color: #075985; margin: 0; font-size: 13px; line-height: 1.55; }
  .attach-cta-file { display: inline-block; background: #fff; border: 1px dashed #7dd3fc; padding: 6px 12px; border-radius: 4px; font-family: monospace; font-size: 12px; color: #0c4a6e; margin-top: 10px; }
  .footer { padding: 20px 28px; background: #f9fafb; text-align: center; border-top: 1px solid #e5e7eb; }
  .footer p { margin: 0; color: #999; font-size: 12px; }
  /* Cover & TOC hidden in email body, shown only in PDF print */
  .cover, .toc { display: none; }

  /* Print-specific styles for high-quality PDF rendering */
  @media print {
    @page { size: A4; margin: 20mm 14mm; }
    @page :first { margin: 0; }
    body { background: #fff; font-size: 11pt; font-family: Georgia, 'Times New Roman', serif; color: #1f2937; }
    .wrap { background: #fff; padding: 0; }
    .main { max-width: none; width: 100%; box-shadow: none; }
    .hdr { display: none; }

    .cover {
      display: block; page-break-after: always; height: 247mm;
      padding: 30mm 24mm 24mm 24mm;
      background: linear-gradient(135deg, #667eea 0%, #5b21b6 100%);
      color: #fff;
      -webkit-print-color-adjust: exact; print-color-adjust: exact;
      box-sizing: border-box;
    }
    .cover-tag { font-size: 9pt; letter-spacing: 3pt; opacity: 0.85; text-transform: uppercase; margin-bottom: 24pt; font-family: Helvetica, Arial, sans-serif; }
    .cover-title { font-size: 40pt; margin: 0 0 12pt 0; line-height: 1.1; color: #fff; font-family: Georgia, serif; }
    .cover-date { font-size: 18pt; opacity: 0.92; margin-bottom: 20pt; font-style: italic; }
    .cover-meta { font-size: 12pt; opacity: 0.8; line-height: 1.5; margin-top: 40pt; padding: 12pt 16pt; background: rgba(0,0,0,0.18); border-radius: 6pt; -webkit-print-color-adjust: exact; print-color-adjust: exact; }

    .toc { display: block; page-break-after: always; padding: 22mm 16mm; font-family: Georgia, serif; }
    .toc-h { font-size: 24pt; margin: 0 0 20pt 0; color: #1f2937; border-bottom: 1pt solid #e5e7eb; padding-bottom: 10pt; }
    .toc-list { margin: 0; padding-left: 22pt; font-size: 13pt; line-height: 2.2; }
    .toc-list > li { margin: 4pt 0; }
    .toc-list a { color: #1f2937 !important; text-decoration: none; }

    .content { padding: 0 0 14pt 0; }
    .content h1 { display: block; font-size: 18pt; color: #222; margin: 8pt 0; page-break-after: avoid; font-family: Georgia, serif; }
    .content h2 { font-size: 15pt; margin: 16pt 0 8pt 0; padding-bottom: 4pt; page-break-after: avoid; -webkit-print-color-adjust: exact; print-color-adjust: exact; font-family: Georgia, serif; }
    .content h3 { font-size: 13pt; margin: 12pt 0 6pt 0; page-break-after: avoid; font-family: Georgia, serif; }
    .content p { font-size: 10.5pt; line-height: 1.6; margin: 8pt 0; }
    .content ul, .content ol { margin: 6pt 0; padding-left: 18pt; }
    .content li { font-size: 10.5pt; line-height: 1.55; margin: 3pt 0; }
    .content blockquote { -webkit-print-color-adjust: exact; print-color-adjust: exact; page-break-inside: avoid; }
    .content code { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .content a { color: #2050a0 !important; text-decoration: none; }
    .footer, .attach-cta { display: none; }
    h1, h2, h3, h4 { page-break-after: avoid; }
    blockquote, pre { page-break-inside: avoid; }
  }
`;

/**
 * Pull the first N numbered list items from a markdown chunk.
 */
function takeFirstN(markdown, n) {
  const lines = markdown.split('\n');
  const out = [];
  let count = 0;
  let collecting = false;
  for (const line of lines) {
    if (/^\s*\d+\.\s/.test(line)) {
      if (count >= n) break;
      out.push(line);
      count++;
      collecting = true;
    } else if (collecting && /^\s+\S/.test(line)) {
      // Continuation of previous numbered item (indented continuation)
      out.push(line);
    } else if (collecting && line.trim() === '') {
      out.push(line);
    } else {
      collecting = false;
    }
  }
  return out.join('\n').trim();
}

/**
 * Send the weekly digest email with the latest digest markdown as HTML.
 */
async function sendWeeklyDigest() {
  const digestPath = process.env.DIGEST_PATH;
  if (!digestPath) {
    console.error('❌ DIGEST_PATH env var not set');
    process.exit(1);
  }

  console.log(`📖 Reading digest: ${digestPath}`);
  const rawMarkdown = await fs.readFile(digestPath, 'utf-8');
  const basename = path.basename(digestPath, '.md'); // e.g. "2026-15"

  // Convert [[wiki-page]] syntax to readable bold (pandoc/marked don't parse it)
  // e.g. [[claude-opus-4-7]] → **Claude Opus 4 7**
  const markdown = rawMarkdown.replace(/\[\[([^\]]+)\]\]/g, (_, name) => {
    const readable = name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return `**${readable}**`;
  });

  // Extract title from the first H1
  const titleMatch = markdown.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : `Weekly Digest ${basename}`;

  const dateString = new Date().toLocaleDateString('en-IN', {
    timeZone: 'Asia/Kolkata',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Extract sections for the short email body
  const ifYouOnly = extractSection(markdown, /^##\s*📌?\s*If You Only Read/i);
  const topStoriesSection = extractSection(markdown, /^##\s*🔥?\s*Top\s*\d*\s*Stories/i);
  const top5Md = takeFirstN(topStoriesSection, 5);
  const byTheNumbers = extractSection(markdown, /^##\s*📊?\s*By the Numbers/i);

  const ifYouOnlyHtml = ifYouOnly ? marked(ifYouOnly, { breaks: true, gfm: true }) : '';
  const top5Html = top5Md ? marked(top5Md, { breaks: true, gfm: true }) : '';
  const byTheNumbersHtml = byTheNumbers ? marked(byTheNumbers, { breaks: true, gfm: true }) : '';

  // Full markdown rendered (used for PDF)
  const fullBodyHtml = marked(markdown, { breaks: true, gfm: true });

  // ---- SHORT email body (sent inline) ----
  const shortBodyHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>${WEEKLY_STYLES}</style>
</head>
<body>
<div class="wrap">
<div class="main">
<div class="hdr">
<h1>🗓️ Weekly AI Wiki Digest</h1>
<p>${dateString}</p>
<p class="hdr-sub">Week of ${escapeHtml(title.match(/Week\s*(?:of|ending)?\s*([\d-]+)/i)?.[1] || '')}</p>
</div>
<div class="content">
${ifYouOnlyHtml ? `<section class="featured">
<h2>📌 If You Only Read One Thing</h2>
${ifYouOnlyHtml}
</section>` : ''}
${top5Html ? `<section class="top5">
<h2>🔥 Top 5 Stories This Week</h2>
${top5Html}
</section>` : ''}
${byTheNumbersHtml ? `<section class="numbers">
<h2>📊 By the Numbers</h2>
${byTheNumbersHtml}
</section>` : ''}
<div class="attach-cta">
<h2>📎 Full weekly report attached as PDF</h2>
<p>The attached PDF includes the complete digest: Top 10 Stories, New Pages, Pages with Biggest Updates, Cross-Cutting Patterns, Featured Page Deep-Dive, Stories Worth Watching, and Notable Quotes — with cover page, table of contents, and page numbers.</p>
<div class="attach-cta-file">weekly-digest-${basename}.pdf</div>
</div>
</div>
<div class="footer">
<p>Generated from the LLM Wiki • Weekly lint + digest</p>
</div>
</div>
</div>
</body>
</html>`;

  // ---- FULL HTML for PDF (cover + TOC + full content) ----
  const tocItemsList = [
    { id: 'featured', label: '📌 If You Only Read One Thing', test: /^##\s*📌?\s*If You Only Read/i },
    { id: 'top10', label: '🔥 Top 10 Stories This Week', test: /^##\s*🔥?\s*Top\s*\d*\s*Stories/i },
    { id: 'numbers', label: '📊 By the Numbers', test: /^##\s*📊?\s*By the Numbers/i },
    { id: 'newpages', label: '🆕 New Pages Created', test: /^##\s*🆕?\s*New Pages/i },
    { id: 'biggest', label: '📈 Pages with Biggest Updates', test: /^##\s*📈?\s*Pages with Biggest/i },
    { id: 'patterns', label: '🔗 Cross-Cutting Patterns', test: /^##\s*🔗?\s*Cross-?Cutting/i },
    { id: 'deepdive', label: '💡 Featured Page Deep-Dive', test: /^##\s*💡?\s*Featured Page/i },
    { id: 'watching', label: '📌 Stories Worth Watching', test: /^##\s*📌?\s*Stories Worth/i },
    { id: 'quotes', label: '🎤 Notable Quotes & Claims', test: /^##\s*🎤?\s*Notable Quotes/i }
  ].filter(item => item.test.test(markdown));

  const fullHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>${WEEKLY_STYLES}</style>
</head>
<body>
<div class="wrap">
<div class="main">
<section class="cover">
<div class="cover-tag">WEEKLY DIGEST</div>
<h1 class="cover-title">🗓️ AI Wiki Weekly</h1>
<div class="cover-date">${dateString}</div>
<div class="cover-meta">${escapeHtml(title)}</div>
</section>
<section class="toc">
<h2 class="toc-h">Contents</h2>
<ol class="toc-list">${tocItemsList.map(it => `<li><a href="#${it.id}">${it.label}</a></li>`).join('')}</ol>
</section>
<div class="content">
${fullBodyHtml}
</div>
<div class="footer">
<p>Generated from the LLM Wiki • Weekly lint + digest</p>
</div>
</div>
</div>
</body>
</html>`;

  // Plain text version
  const text = markdown;

  const transporter = nodemailer.createTransport(config.email.smtp);

  // Render the email HTML as a PDF for the attachment.
  // PDF is universal and renders properly on all email clients (HTML
  // attachments often display as raw source code on mobile).
  const attachments = [];
  try {
    console.log('📄 Rendering weekly digest as PDF…');
    const pdfBuffer = await htmlToPdf(fullHtml, {
      documentTitle: `Weekly AI Wiki Digest — ${basename}`,
      dateLabel: dateString
    });
    attachments.push({
      filename: `weekly-digest-${basename}.pdf`,
      content: pdfBuffer,
      contentType: 'application/pdf'
    });
    console.log(`📎 Attaching PDF: ${(pdfBuffer.length / 1024).toFixed(1)} KB`);
  } catch (err) {
    console.warn(`⚠️  PDF render failed, sending without attachment: ${err.message}`);
  }
  // Always include markdown as a secondary attachment for archival/portability
  attachments.push({
    filename: `weekly-digest-${basename}.md`,
    content: markdown,
    contentType: 'text/markdown'
  });

  const mailOptions = {
    from: `Newsletter Digest <${config.email.address}>`,
    to: config.notification.recipientEmail,
    subject: `🗓️ Weekly AI Digest — ${title.replace(/^.*Week(ly)?\s*Digest\s*[—-]?\s*/, '')}`,
    text,
    html: shortBodyHtml,
    attachments
  };

  console.log(`📬 Sending weekly digest email to ${config.notification.recipientEmail}...`);
  const info = await transporter.sendMail(mailOptions);
  console.log(`✓ Sent: ${info.messageId}`);
  console.log(`   Subject: ${mailOptions.subject}`);
  console.log(`   Body: ${(shortBodyHtml.length/1024).toFixed(1)} KB inline, full ${(fullHtml.length/1024).toFixed(1)} KB rendered to PDF`);
}

sendWeeklyDigest().catch(err => {
  console.error('❌ Failed to send weekly digest:', err);
  process.exit(1);
});
