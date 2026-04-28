#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import nodemailer from 'nodemailer';
import { marked } from 'marked';
import { config } from './utils/config.js';
import { htmlToPdf } from './utils/html-to-pdf.js';

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

  // Render markdown to HTML
  const bodyHtml = marked(markdown, { breaks: true, gfm: true });

  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; margin: 0; padding: 0; background: #f5f5f5; color: #333; }
  .wrap { width: 100%; background: #f5f5f5; padding: 20px 0; }
  .main { max-width: 760px; margin: 0 auto; background: #ffffff; padding: 0; }
  .hdr { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; padding: 32px 28px; }
  .hdr h1 { margin: 0 0 8px 0; font-size: 26px; color: #fff; }
  .hdr p { margin: 0; font-size: 15px; color: #e8ebff; }
  .content { padding: 28px; line-height: 1.6; }
  .content h1 { display: none; } /* First H1 already in header */
  .content h2 { color: #333; margin: 24px 0 12px 0; font-size: 20px; border-bottom: 2px solid #f0f1f5; padding-bottom: 6px; }
  .content h3 { color: #444; margin: 18px 0 10px 0; font-size: 16px; }
  .content p { margin: 10px 0; }
  .content ul, .content ol { margin: 10px 0; padding-left: 24px; }
  .content li { margin: 6px 0; }
  .content a { color: #667eea; text-decoration: none; }
  .content a:hover { text-decoration: underline; }
  .content blockquote { border-left: 4px solid #667eea; background: #f8f9ff; padding: 12px 18px; margin: 12px 0; font-style: italic; color: #555; }
  .content code { background: #f1f5f9; padding: 2px 6px; border-radius: 3px; font-size: 14px; }
  .footer { padding: 20px 28px; background: #f9fafb; text-align: center; border-top: 1px solid #e5e7eb; }
  .footer p { margin: 0; color: #999; font-size: 12px; }

  /* Print-specific styles for high-quality PDF rendering */
  @media print {
    @page { size: A4; margin: 15mm 14mm; }
    body { background: #fff; font-size: 11pt; }
    .wrap { background: #fff; padding: 0; }
    .main { max-width: none; width: 100%; box-shadow: none; }
    .hdr { -webkit-print-color-adjust: exact; print-color-adjust: exact; padding: 24pt 22pt; page-break-after: avoid; }
    .hdr h1 { font-size: 22pt; }
    .hdr p { font-size: 12pt; color: #e8ebff !important; }
    .content { padding: 22pt; }
    .content h1 { display: block; font-size: 18pt; color: #222; margin: 12pt 0 8pt 0; page-break-after: avoid; }
    .content h2 { font-size: 15pt; margin: 18pt 0 8pt 0; padding-bottom: 4pt; page-break-after: avoid; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .content h3 { font-size: 13pt; margin: 14pt 0 6pt 0; page-break-after: avoid; }
    .content p { font-size: 10.5pt; line-height: 1.55; margin: 8pt 0; }
    .content ul, .content ol { margin: 8pt 0; padding-left: 20pt; }
    .content li { font-size: 10.5pt; line-height: 1.5; margin: 4pt 0; }
    .content blockquote { -webkit-print-color-adjust: exact; print-color-adjust: exact; page-break-inside: avoid; }
    .content code { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .content a { color: #2050a0 !important; text-decoration: none; }
    .footer { display: none; }
    /* Avoid orphan headings at bottom of page */
    h1, h2, h3, h4 { page-break-after: avoid; }
    blockquote, pre { page-break-inside: avoid; }
  }
</style>
</head>
<body>
<div class="wrap">
<div class="main">
<div class="hdr">
<h1>🗓️ Weekly AI Wiki Digest</h1>
<p>${dateString}</p>
</div>
<div class="content">
${bodyHtml}
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
    const pdfBuffer = await htmlToPdf(html);
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
    html,
    attachments
  };

  console.log(`📬 Sending weekly digest email to ${config.notification.recipientEmail}...`);
  const info = await transporter.sendMail(mailOptions);
  console.log(`✓ Sent: ${info.messageId}`);
  console.log(`   Subject: ${mailOptions.subject}`);
  console.log(`   HTML size: ${html.length} bytes (${(html.length/1024).toFixed(1)} KB)`);
}

sendWeeklyDigest().catch(err => {
  console.error('❌ Failed to send weekly digest:', err);
  process.exit(1);
});
