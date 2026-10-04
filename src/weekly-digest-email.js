#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import { config } from './utils/config.js';
import { htmlToPdf } from './utils/html-to-pdf.js';
import {
  createSheetMarked, rulesToCss, inlineClasses, PDF_CSS, FONT_LINKS, escapeHtml,
  panel, titleBlock, statGrid, letterer, stripLeadingEmoji
} from './utils/sheet-style.js';

// Reference-sheet house style (design/reference-sheet/): lettered panels, IBM
// Plex, colour only for meaning. Markup is class-based; the inline email body
// goes through inlineClasses() (Gmail strips <style>), the PDF ships a <style>.
const md = createSheetMarked();

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
 * Section markdown ends with a '---' separator line; the panel border already
 * separates sections, so drop trailing rules (and blank lines) before rendering.
 */
function sectionMarkdown(lines) {
  const out = [...lines];
  while (out.length && (out[out.length - 1].trim() === '' || /^-{3,}$/.test(out[out.length - 1].trim()))) out.pop();
  return out.join('\n');
}

/**
 * Render the per-section HTML used in the PDF body. Each section is a lettered
 * panel with id="..." so anchor links from the TOC resolve; every section after
 * the first starts on a new page. `letters[i]` is the panel letter of section i.
 */
function renderSectionsHtml(sections, letters) {
  let html = '';
  sections.forEach((sec, i) => {
    const id = sectionIdForHeading(sec.heading);
    const bodyMd = convertWikiLinks(sectionMarkdown(sec.lines)).trim();
    const bodyHtml = bodyMd ? md.parse(bodyMd) : '';
    html += panel({
      letter: letters[i], title: stripLeadingEmoji(sec.heading), id,
      extra: i > 0 ? 'sec-panel' : '',
      body: bodyHtml
    }) + '\n';
  });
  return html;
}

/**
 * Build the weekly digest email + PDF HTML from the digest markdown.
 * Pure (no I/O, nothing is sent): used by sendWeeklyDigest and by
 * scripts/preview-styles.js.
 *
 * @returns {{ title, weekOf, dateString, sections, shortBodyHtml, fullHtml }}
 */
export function buildWeeklyDigest(rawMarkdown, basename, now = new Date()) {
  // Extract H1 title before any markdown processing
  const titleMatch = rawMarkdown.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : `Weekly Digest ${basename}`;
  const weekOfMatch = title.match(/Week\s*of\s*([\d-]+)/i);
  const weekOf = weekOfMatch ? weekOfMatch[1] : basename;

  // Strip the H1 line — cover replaces it. Keep the rest of the document.
  const markdownWithoutH1 = rawMarkdown.replace(/^#\s+.+$/m, '').trim();

  const { beforeFirst, sections } = splitMarkdownSections(markdownWithoutH1);
  const { stats, notes } = parseDigestFrontmatter(beforeFirst);

  const dateString = now.toLocaleDateString('en-IN', {
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
    featured: 'If You Only Read One Thing',
    top10: 'Top Stories This Week',
    numbers: 'By the Numbers',
    newpages: 'New Pages Created',
    biggest: 'Pages with Biggest Updates',
    patterns: 'Cross-Cutting Patterns',
    deepdive: 'Featured Page Deep-Dive',
    watching: 'Stories Worth Watching',
    quotes: 'Notable Quotes & Claims'
  };
  const tocItemsList = sections.map(s => {
    const id = sectionIdForHeading(s.heading);
    return { id, label: tocLabelMap[id] || stripLeadingEmoji(s.heading) };
  });

  // ---- Sections needed for the SHORT email body ----
  const ifYouOnlyHtml = featuredSection
    ? md.parse(convertWikiLinks(sectionMarkdown(featuredSection.lines)))
    : '';
  const topStoriesSection = findSection(sections, /Top\s*\d*\s*Stories/i);
  const top5Md = topStoriesSection ? takeFirstN(sectionMarkdown(topStoriesSection.lines), 5) : '';
  const top5Html = top5Md ? md.parse(convertWikiLinks(top5Md)) : '';
  const byTheNumbersSection = findSection(sections, /By the Numbers/i);
  const byTheNumbersHtml = byTheNumbersSection
    ? md.parse(convertWikiLinks(sectionMarkdown(byTheNumbersSection.lines)))
    : '';

  // ---- SHORT email body (sent inline, INLINE styles) ----
  const nextShort = letterer();
  const shortBodyHtml = inlineClasses(`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
${FONT_LINKS}
</head>
<body class="page">
<div class="outer">
<div class="sheet">
${titleBlock({
  title: 'Weekly AI Wiki Digest',
  cells: [
    { k: 'Date', v: dateString },
    { k: 'Week of', v: weekOf }
  ]
})}
<div class="inner">
${ifYouOnlyHtml ? panel({ letter: nextShort(), title: 'If You Only Read One Thing', caption: 'featured', body: ifYouOnlyHtml }) : ''}
${top5Html ? panel({ letter: nextShort(), title: 'Top 5 Stories This Week', caption: 'first 5', body: top5Html }) : ''}
${byTheNumbersHtml ? panel({ letter: nextShort(), title: 'By the Numbers', body: byTheNumbersHtml }) : ''}
${panel({
  letter: nextShort(), title: 'Full weekly report attached as PDF', caption: 'attachment',
  body: `<div class="note">
<p class="note-p">The attached PDF includes the complete digest with cover page, contents, all ${sections.length} sections — Top 10 Stories, New Pages, Biggest Updates, Cross-Cutting Patterns, Featured Page Deep-Dive, Stories Worth Watching, and Notable Quotes — with lettered panels and page numbers.</p>
<span class="file">weekly-digest-${escapeHtml(basename)}.pdf</span>
</div>`
})}
</div>
<div class="ft">Generated from the LLM Wiki • Weekly lint + digest</div>
</div>
</div>
</body>
</html>`);

  // ---- FULL HTML for PDF (cover + TOC + full content) ----
  // Letters in reading order: Contents = A, then one per section (the TOC
  // rows show the letter of the panel they link to).
  const next = letterer();
  const tocLetter = next();
  const sectionLetters = sections.map(() => next());

  const statCardsHtml = statGrid(coverStats);

  // "Digest scope" (frontmatter stats) as a grey note box on the first body page
  const digestMetaRows = Object.entries(stats)
    .filter(([k]) => !/Note on this LINT/i.test(k))
    .map(([k, v]) => `<div class="meta-row"><span class="label label-w">${escapeHtml(k)}:</span> ${md.parseInline(convertWikiLinks(v))}</div>`)
    .join('');
  const digestMetaHtml = digestMetaRows
    ? `<div class="note mb"><div class="note-h">Digest Scope</div>${digestMetaRows}</div>`
    : '';

  // LINT-pass note as a subtle italic footnote (non-stat blockquote prose)
  const lintNoteHtml = notes.length
    ? `<p class="fn">${escapeHtml(notes.join(' '))}</p>`
    : '';

  const sectionsHtml = renderSectionsHtml(sections, sectionLetters);

  const tocPanel = panel({
    letter: tocLetter, title: 'In This Issue', caption: 'contents', extra: 'toc-panel',
    body: `<ol class="tocl">${tocItemsList.map((it, i) =>
      `<li class="toci"><span class="tocn">${escapeHtml(sectionLetters[i])}</span><a href="#${it.id}" class="lk">${escapeHtml(it.label)}</a></li>`
    ).join('')}</ol>`
  });

  const fullHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(title)}</title>
${FONT_LINKS}
<style>${rulesToCss()}
${PDF_CSS}</style>
</head>
<body class="page">
<div class="sheet">
<section class="cover">
<div class="cover-tag">Weekly digest • ${escapeHtml(basename)}</div>
<h1 class="cover-title">AI Wiki Weekly</h1>
<div class="cover-sub">${escapeHtml(title.replace(/^Weekly Digest\s*[—-]\s*/, ''))}</div>
<div class="cover-date">Issued ${escapeHtml(dateString)}</div>
${statCardsHtml}
${coverTldr ? `<div class="note"><div class="note-h">If You Only Read One Thing</div><p class="note-lead">${escapeHtml(coverTldr)}</p></div>` : ''}
<div class="cover-foot">Generated from the LLM Wiki · Weekly LINT + Digest</div>
</section>
${tocPanel}
<div class="inner">
${digestMetaHtml}
${lintNoteHtml}
${sectionsHtml}
</div>
</div>
</body>
</html>`;

  return { title, weekOf, dateString, sections, shortBodyHtml, fullHtml };
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

  const { title, dateString, sections, shortBodyHtml, fullHtml } = buildWeeklyDigest(rawMarkdown, basename);

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

// Run only when invoked directly (node src/weekly-digest-email.js), not when
// imported by scripts/preview-styles.js.
const invokedDirectly = process.argv[1] &&
  path.resolve(fileURLToPath(import.meta.url)).toLowerCase() === path.resolve(process.argv[1]).toLowerCase();
if (invokedDirectly) {
  sendWeeklyDigest().catch(err => {
    console.error('❌ Failed to send weekly digest:', err);
    process.exit(1);
  });
}
