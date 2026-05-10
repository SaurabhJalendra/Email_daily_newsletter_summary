#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import nodemailer from 'nodemailer';
import { marked } from 'marked';
import { config } from './utils/config.js';
import { htmlToPdf } from './utils/html-to-pdf.js';

/**
 * Split a markdown document into:
 *   - `beforeFirst`: lines that appear before the first `## ...` (H1, frontmatter blockquotes)
 *   - `sections`: array of { heading, lines } for each `## ...` block
 */
function splitMarkdownSections(markdown) {
  const lines = markdown.split('\n');
  const sections = [];
  let current = null;
  const beforeFirst = [];

  for (const line of lines) {
    if (/^##\s/.test(line)) {
      if (current) sections.push(current);
      current = { heading: line.replace(/^##\s+/, '').trim(), lines: [] };
    } else if (current) {
      current.lines.push(line);
    } else {
      beforeFirst.push(line);
    }
  }
  if (current) sections.push(current);
  return { beforeFirst: beforeFirst.join('\n').trim(), sections };
}

/**
 * Map a section heading to a canonical anchor ID so the TOC links resolve.
 */
function sectionIdForHeading(heading) {
  if (/If You Only Read/i.test(heading)) return 'featured';
  if (/Top\s*\d*\s*Stories/i.test(heading)) return 'top10';
  if (/By the Numbers/i.test(heading)) return 'numbers';
  if (/New Pages/i.test(heading)) return 'newpages';
  if (/Pages.*Biggest|Biggest.*Updates/i.test(heading)) return 'biggest';
  if (/Cross[- ]?Cutting|Patterns/i.test(heading)) return 'patterns';
  if (/Featured Page|Deep[- ]Dive/i.test(heading)) return 'deepdive';
  if (/Stories Worth|Worth Watching/i.test(heading)) return 'watching';
  if (/Notable Quotes|Quotes.*Claims/i.test(heading)) return 'quotes';
  return heading.toLowerCase().replace(/[^\w]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'section';
}

/**
 * Parse the leading blockquote frontmatter for stats like "Summaries covered: 7 daily ingests".
 * Returns { rawNotes: [non-stat blockquote lines], stats: { key: value } }.
 */
function parseDigestFrontmatter(beforeFirst) {
  const stats = {};
  const notes = [];
  const lines = beforeFirst.split('\n');
  for (const line of lines) {
    if (!line.trim().startsWith('>')) continue;
    // Try "> **Key**: value"
    const m = line.match(/^>\s*\*\*([^*]+?)\*\*\s*[:\-—]\s*(.+)$/);
    if (m) {
      stats[m[1].trim()] = m[2].trim();
    } else {
      // Other blockquote lines (LINT pass notes, etc.) — surface separately
      const stripped = line.replace(/^>\s?/, '').trim();
      if (stripped) notes.push(stripped);
    }
  }
  return { stats, notes };
}

/**
 * Pull a leading-number out of "7 daily ingests" → "7", "~38 distinct pages" → "~38".
 */
function leadingToken(value) {
  if (!value) return '';
  const m = value.match(/^[~$]?[\d,.]+\+?/);
  return m ? m[0] : value.split(/\s+/)[0];
}

/**
 * Convert `[[wiki-slug]]` to a styled wiki-reference span. Marked passes
 * inline HTML through unchanged, so this survives markdown rendering.
 */
function convertWikiLinks(markdown) {
  return markdown.replace(/\[\[([^\]]+)\]\]/g, (_, name) => {
    return `<span class="wiki-ref">${name}</span>`;
  });
}

/**
 * Pull the first sentence (or first ~240 chars) of the markdown for the
 * cover-page TLDR overlay.
 */
function firstSentence(markdown, maxChars = 280) {
  if (!markdown) return '';
  const cleaned = markdown
    .replace(/\[\[([^\]]+)\]\]/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
  // First sentence break (period + space + capital letter or end)
  const m = cleaned.match(/^(.{40,}?[.!?])(\s|$)/);
  let candidate = m ? m[1] : cleaned;
  if (candidate.length > maxChars) candidate = candidate.slice(0, maxChars).replace(/\s+\S*$/, '') + '…';
  return candidate;
}

function escapeHtml(text) {
  if (!text) return '';
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return String(text).replace(/[&<>"']/g, m => map[m]);
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
  /* Wiki refs in email body — subtle pill */
  .wiki-ref { background: #f5f3ff; color: #5b21b6; padding: 1px 6px; border-radius: 3px; font-size: 0.92em; font-weight: 500; }

  /* ===========================================================================
   * PDF-only elements (cover, toc, digest-meta, lint-note, weekly-section).
   * These elements only exist in fullHtml (the PDF source). The shortBodyHtml
   * sent inline never includes them, so we can keep them visible by default
   * — no @media print needed. (htmlToPdf emulates "screen" media to keep
   * gradients/backgrounds rendering, so @media print rules never apply.)
   * ======================================================================== */

  /* @page rules apply to the PDF generator regardless of emulated media */
  @page { size: A4; margin: 22mm 16mm 22mm 16mm; }
  @page :first { margin: 0; }

  /* ---- Cover ---- */
  .cover {
    page-break-after: always; height: 247mm;
    padding: 28mm 22mm 22mm 22mm;
    background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 45%, #7c3aed 100%);
    color: #fff;
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
    box-sizing: border-box;
    position: relative;
    font-family: Georgia, 'Times New Roman', serif;
  }
  .cover-tag { font-size: 11pt; letter-spacing: 4pt; opacity: 0.82; text-transform: uppercase; margin-bottom: 22pt; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
  .cover-tag .dot { display: inline-block; margin: 0 8pt; opacity: 0.5; }
  .cover-title { font-size: 56pt; margin: 0 0 12pt 0; line-height: 1.02; color: #fff; font-family: Georgia, serif; letter-spacing: -1pt; font-weight: bold; }
  .cover-subtitle { font-size: 21pt; opacity: 0.94; margin: 0 0 8pt 0; font-style: italic; font-family: Georgia, serif; line-height: 1.25; }
  .cover-week { font-size: 13pt; opacity: 0.76; margin-bottom: 28pt; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; letter-spacing: 1pt; }
  .cover-stats { margin: 24pt 0 28pt 0; padding: 0; display: block; }
  .cover-stats table { width: 100%; border-collapse: separate; border-spacing: 10pt 0; }
  .cover-stat { background: rgba(255,255,255,0.14); border-radius: 8pt; padding: 16pt 18pt; -webkit-print-color-adjust: exact; print-color-adjust: exact; vertical-align: top; width: 33%; }
  .cover-stat-num { display: block; font-size: 36pt; font-weight: bold; line-height: 1; font-family: Georgia, serif; color: #fff; }
  .cover-stat-label { display: block; font-size: 9pt; opacity: 0.85; margin-top: 8pt; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; letter-spacing: 1.4pt; text-transform: uppercase; line-height: 1.3; font-weight: 500; }
  .cover-tldr { background: rgba(0,0,0,0.24); border-radius: 8pt; padding: 18pt 22pt; -webkit-print-color-adjust: exact; print-color-adjust: exact; margin-top: 22pt; }
  .cover-tldr-h { font-size: 10pt; letter-spacing: 3pt; opacity: 0.82; margin: 0 0 10pt 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; text-transform: uppercase; font-weight: 600; }
  .cover-tldr-body { font-size: 12pt; line-height: 1.55; margin: 0; font-family: Georgia, serif; opacity: 0.96; }
  .cover-foot { position: absolute; bottom: 14mm; left: 22mm; right: 22mm; font-size: 8.5pt; opacity: 0.5; letter-spacing: 1.5pt; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; text-transform: uppercase; }

  /* ---- Table of contents ---- */
  .toc { display: block; page-break-after: always; padding: 24mm 18mm; font-family: Georgia, 'Times New Roman', serif; background: #fff; color: #1f2937; }
  .toc-eyebrow { font-size: 9pt; letter-spacing: 3pt; color: #7c3aed; text-transform: uppercase; margin-bottom: 6pt; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 600; }
  .toc-h { font-size: 32pt; margin: 0 0 26pt 0; color: #1f2937; border-bottom: 1pt solid #d1d5db; padding-bottom: 16pt; font-family: Georgia, serif; font-weight: bold; letter-spacing: -0.5pt; }
  .toc-list { margin: 0; padding: 0; list-style: none; counter-reset: tocnum; }
  .toc-list > li { margin: 0; padding: 11pt 0; border-bottom: 0.5pt solid #e5e7eb; counter-increment: tocnum; font-size: 13pt; line-height: 1.4; font-family: Georgia, serif; }
  .toc-list > li::before { content: counter(tocnum, decimal-leading-zero) ".  "; color: #9ca3af; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 10.5pt; letter-spacing: 1pt; font-weight: 500; }
  .toc-list a { color: #1f2937 !important; text-decoration: none; }

  /* ---- Body content (PDF) ---- */
  .digest-meta {
    display: block;
    background: #faf5ff; border-left: 3pt solid #7c3aed;
    padding: 14pt 18pt; margin: 0 0 18pt 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 10pt; line-height: 1.6; color: #4c1d95;
    page-break-inside: avoid; border-radius: 0 4pt 4pt 0;
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  .digest-meta-h { display: block; font-size: 9pt; letter-spacing: 2pt; text-transform: uppercase; opacity: 0.7; margin-bottom: 8pt; font-weight: 600; }
  .digest-meta-row { display: block; margin: 4pt 0; }
  .digest-meta-row strong { color: #1f2937; }
  .lint-note { display: block; font-size: 9.5pt; line-height: 1.55; color: #6b7280; font-style: italic; padding: 10pt 16pt; border-left: 2pt solid #e5e7eb; margin: 14pt 0 18pt 0; font-family: Georgia, serif; }

  .weekly-section { page-break-before: always; padding-top: 0; font-family: Georgia, 'Times New Roman', serif; color: #1f2937; }
  .weekly-section:first-of-type { page-break-before: avoid; }
  .sec-heading {
    font-size: 24pt; color: #1f2937; margin: 0 0 18pt 0;
    padding-bottom: 10pt; border-bottom: 1.5pt solid #e5e7eb;
    page-break-after: avoid; font-family: Georgia, serif; font-weight: bold;
    letter-spacing: -0.5pt;
  }
  .weekly-section h3 { font-size: 14pt; color: #4c1d95; margin: 18pt 0 10pt 0; page-break-after: avoid; font-family: Georgia, serif; font-weight: bold; }
  .weekly-section p { font-size: 11pt; line-height: 1.65; margin: 10pt 0; text-align: justify; hyphens: auto; color: #1f2937; }
  .weekly-section ul, .weekly-section ol { margin: 10pt 0; padding-left: 22pt; }
  .weekly-section li { font-size: 11pt; line-height: 1.6; margin: 6pt 0; color: #1f2937; }
  .weekly-section li > p { margin: 4pt 0; font-size: 11pt; }
  .weekly-section blockquote { border-left: 3pt solid #c4b5fd; background: #faf5ff; padding: 10pt 16pt; margin: 14pt 0; font-style: italic; color: #4c1d95; -webkit-print-color-adjust: exact; print-color-adjust: exact; page-break-inside: avoid; border-radius: 0 4pt 4pt 0; }
  .weekly-section a { color: #5b21b6 !important; text-decoration: none; border-bottom: 0.5pt dotted #c4b5fd; }
  .weekly-section strong { color: #111827; font-weight: bold; }
  .weekly-section em { color: #374151; }

  /* Drop cap on the first paragraph of each section (only when paragraph follows the heading directly) */
  .weekly-section > p:first-of-type::first-letter {
    font-size: 38pt; font-weight: bold; float: left; line-height: 0.9;
    padding: 6pt 8pt 0 0; color: #5b21b6; font-family: Georgia, serif;
  }

  /* PDF-only headers/footers — hide email-only chrome */
  /* (these elements aren't in fullHtml anyway, but be defensive) */
  /* Avoid orphaned "Top 10 Stories" numbered items splitting awkwardly */
  .weekly-section ol > li { page-break-inside: avoid; margin-bottom: 10pt; }

  /* ===========================================================================
   * Email-body overrides: when this stylesheet is loaded inside the inline
   * email (which doesn't contain .cover/.toc/.weekly-section), nothing here
   * matters. But hide PDF-only chrome if it ever shows up in screen rendering.
   * ======================================================================== */
  @media screen and (min-width: 1px) {
    .pdf-only { display: none; }
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
 * Find the section in `sections` whose heading matches `pattern`.
 */
function findSection(sections, pattern) {
  return sections.find(s => pattern.test(s.heading));
}

/**
 * Render the per-section HTML used in the PDF body. Each section is wrapped
 * in <section class="weekly-section" id="..."> so anchor links from the TOC
 * resolve and `page-break-before: always` applies.
 */
function renderSectionsHtml(sections) {
  let html = '';
  for (const sec of sections) {
    const id = sectionIdForHeading(sec.heading);
    const bodyMd = convertWikiLinks(sec.lines.join('\n')).trim();
    const bodyHtml = bodyMd ? marked(bodyMd, { breaks: true, gfm: true }) : '';
    html += `<section class="weekly-section" id="${id}">`;
    html += `<h2 class="sec-heading">${escapeHtml(sec.heading)}</h2>`;
    html += bodyHtml;
    html += `</section>\n`;
  }
  return html;
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
  // Normalize CRLF → LF so single-line regexes work (Windows-authored files
  // otherwise leave a trailing \r that breaks `(.+)$` patterns).
  const rawMarkdown = (await fs.readFile(digestPath, 'utf-8')).replace(/\r\n/g, '\n');
  const basename = path.basename(digestPath, '.md'); // e.g. "2026-15"

  // Extract H1 title before any markdown processing
  const titleMatch = rawMarkdown.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : `Weekly Digest ${basename}`;
  const weekOfMatch = title.match(/Week\s*of\s*([\d-]+)/i);
  const weekOf = weekOfMatch ? weekOfMatch[1] : basename;

  // Strip the H1 line — cover replaces it. Keep the rest of the document.
  const markdownWithoutH1 = rawMarkdown.replace(/^#\s+.+$/m, '').trim();

  const { beforeFirst, sections } = splitMarkdownSections(markdownWithoutH1);
  const { stats, notes } = parseDigestFrontmatter(beforeFirst);

  const dateString = new Date().toLocaleDateString('en-IN', {
    timeZone: 'Asia/Kolkata',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Pick stats for the cover
  const ingestsRaw = stats['Summaries covered'] || stats['Ingest range'] || '';
  const wikiPagesRaw = stats['Wiki pages touched'] || '';
  const newPagesRaw = stats['New pages'] || '';

  const coverStats = [
    { num: leadingToken(ingestsRaw) || '7', label: 'Daily Ingests' },
    { num: leadingToken(wikiPagesRaw) || '—', label: 'Wiki Pages Touched' },
    { num: leadingToken(newPagesRaw) || '0', label: 'New Pages Created' }
  ];

  // Featured snippet for cover TLDR (from "If You Only Read One Thing")
  const featuredSection = findSection(sections, /If You Only Read/i);
  const coverTldr = featuredSection
    ? firstSentence(featuredSection.lines.join('\n'), 320)
    : firstSentence(sections[0]?.lines.join('\n') || '', 320);

  // Build TOC entries from sections that exist
  const tocLabelMap = {
    featured: '📌 If You Only Read One Thing',
    top10: '🔥 Top Stories This Week',
    numbers: '📊 By the Numbers',
    newpages: '🆕 New Pages Created',
    biggest: '📈 Pages with Biggest Updates',
    patterns: '🔗 Cross-Cutting Patterns',
    deepdive: '💡 Featured Page Deep-Dive',
    watching: '📌 Stories Worth Watching',
    quotes: '🎤 Notable Quotes & Claims'
  };
  const tocItemsList = sections.map(s => {
    const id = sectionIdForHeading(s.heading);
    return { id, label: tocLabelMap[id] || s.heading };
  });

  // ---- Sections needed for the SHORT email body ----
  const ifYouOnlyHtml = featuredSection
    ? marked(convertWikiLinks(featuredSection.lines.join('\n')), { breaks: true, gfm: true })
    : '';
  const topStoriesSection = findSection(sections, /Top\s*\d*\s*Stories/i);
  const top5Md = topStoriesSection ? takeFirstN(topStoriesSection.lines.join('\n'), 5) : '';
  const top5Html = top5Md ? marked(convertWikiLinks(top5Md), { breaks: true, gfm: true }) : '';
  const byTheNumbersSection = findSection(sections, /By the Numbers/i);
  const byTheNumbersHtml = byTheNumbersSection
    ? marked(convertWikiLinks(byTheNumbersSection.lines.join('\n')), { breaks: true, gfm: true })
    : '';

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
<p>${escapeHtml(dateString)}</p>
<p class="hdr-sub">Week of ${escapeHtml(weekOf)}</p>
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
<p>The attached PDF includes the complete digest with cover page, contents, all ${sections.length} sections — Top 10 Stories, New Pages, Biggest Updates, Cross-Cutting Patterns, Featured Page Deep-Dive, Stories Worth Watching, and Notable Quotes — with serif typography, drop caps, and page numbers.</p>
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
  const statCardsHtml = `<table><tr>${coverStats.map(s => `
    <td class="cover-stat">
      <span class="cover-stat-num">${escapeHtml(s.num)}</span>
      <span class="cover-stat-label">${escapeHtml(s.label)}</span>
    </td>`).join('')}</tr></table>`;

  // Build a "digest metadata" callout for the first body page (frontmatter stats)
  const digestMetaRows = Object.entries(stats)
    .filter(([k]) => !/Note on this LINT/i.test(k))
    .map(([k, v]) => `<span class="digest-meta-row"><strong>${escapeHtml(k)}:</strong> ${marked.parseInline(convertWikiLinks(v))}</span>`)
    .join('');
  const digestMetaHtml = digestMetaRows
    ? `<div class="digest-meta"><span class="digest-meta-h">Digest Scope</span>${digestMetaRows}</div>`
    : '';

  // LINT-pass note as a subtle italic blockquote on first body page (non-stat blockquote prose)
  const lintNoteHtml = notes.length
    ? `<div class="lint-note">${escapeHtml(notes.join(' '))}</div>`
    : '';

  const sectionsHtml = renderSectionsHtml(sections);

  const fullHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(title)}</title>
<style>${WEEKLY_STYLES}</style>
</head>
<body>
<div class="wrap">
<div class="main">
<section class="cover">
<div class="cover-tag">Weekly Digest<span class="dot">•</span>${escapeHtml(basename)}</div>
<h1 class="cover-title">AI Wiki Weekly</h1>
<div class="cover-subtitle">${escapeHtml(title.replace(/^Weekly Digest\s*[—-]\s*/, ''))}</div>
<div class="cover-week">Issued ${escapeHtml(dateString)}</div>
<div class="cover-stats">${statCardsHtml}</div>
${coverTldr ? `<div class="cover-tldr">
<div class="cover-tldr-h">If You Only Read One Thing</div>
<p class="cover-tldr-body">${escapeHtml(coverTldr)}</p>
</div>` : ''}
<div class="cover-foot">Generated from the LLM Wiki · Weekly LINT + Digest</div>
</section>
<section class="toc">
<div class="toc-eyebrow">Contents</div>
<h2 class="toc-h">In This Issue</h2>
<ol class="toc-list">${tocItemsList.map(it => `<li><a href="#${it.id}">${escapeHtml(it.label)}</a></li>`).join('')}</ol>
</section>
<div class="content">
${digestMetaHtml}
${lintNoteHtml}
${sectionsHtml}
</div>
</div>
</div>
</body>
</html>`;

  // Plain text version
  const text = rawMarkdown;

  // Dry-run: write the rendered HTML + PDF to disk and exit without sending email.
  // Useful for previewing layout changes locally.
  if (process.env.DRY_RUN === '1') {
    const outDir = process.env.DRY_RUN_OUT || path.resolve('./tmp');
    await fs.mkdir(outDir, { recursive: true });
    const htmlPath = path.join(outDir, `weekly-${basename}.html`);
    await fs.writeFile(htmlPath, fullHtml);
    console.log(`📝 Wrote HTML preview: ${htmlPath} (${(fullHtml.length/1024).toFixed(1)} KB)`);
    try {
      const pdfBuffer = await htmlToPdf(fullHtml, {
        documentTitle: `Weekly AI Wiki Digest — ${basename}`,
        dateLabel: dateString
      });
      const pdfPath = path.join(outDir, `weekly-${basename}.pdf`);
      await fs.writeFile(pdfPath, pdfBuffer);
      console.log(`📄 Wrote PDF preview: ${pdfPath} (${(pdfBuffer.length/1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error('⚠️  PDF render failed:', err.message);
    }
    return;
  }

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
    content: rawMarkdown,
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
  console.log(`   Sections in PDF: ${sections.length}`);
}

sendWeeklyDigest().catch(err => {
  console.error('❌ Failed to send weekly digest:', err);
  process.exit(1);
});
