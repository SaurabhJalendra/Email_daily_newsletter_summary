import nodemailer from 'nodemailer';
import { config } from '../utils/config.js';
import { htmlToPdf } from '../utils/html-to-pdf.js';
import {
  createSheetMarked, rulesToCss, inlineClasses, PDF_CSS, FONT_LINKS,
  panel, titleBlock, statGrid, letterer, PRIORITY
} from '../utils/sheet-style.js';

// Reference-sheet house style (design/reference-sheet/). The markup below uses
// class names only; the email body passes through inlineClasses() because Gmail
// strips <style>, the PDF source ships a <style> block built from the same rules.

// Show the cover page and table of contents at the front of the PDF. The
// markup always existed and the email's attachment note promises both, but the
// old stylesheet only revealed them under @media print, which never applied
// because html-to-pdf emulates screen media. Set to false to drop them again.
const PDF_COVER_AND_TOC = true;

// Markdown -> class-based HTML (same renderer rules as before: tracking URLs
// and links over 250 chars lose their anchor, text is kept).
const md = createSheetMarked({ stripTracking: true });

/**
 * Convert markdown to email-safe HTML using marked
 */
function markdownToEmailHtml(markdown) {
  if (!markdown) return '';
  try {
    return md.parse(markdown);
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
export function aggregatePapers(newsletters) {
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
    const { summary, totalNewsletters, newsletters, date, tldr, researchFindings, edition } = summaryData;

    const calendarDate = new Date(date).toLocaleDateString('en-IN', {
      timeZone: 'Asia/Kolkata',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Edition label flows into the header/cover/text via dateString, and into the
    // subject + PDF filename explicitly. Absent on legacy single-edition runs.
    const editionLabel = edition === 'morning' ? 'Morning'
      : edition === 'evening' ? 'Evening'
      : '';
    const dateString = editionLabel ? `${editionLabel} · ${calendarDate}` : calendarDate;

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
        filename: edition ? `digest-${dateParam}-${edition}.pdf` : `digest-${dateParam}.pdf`,
        content: pdfBuffer,
        contentType: 'application/pdf'
      });
    }

    const subjectDate = editionLabel ? `${editionLabel} - ${calendarDate}` : calendarDate;
    const mailOptions = {
      from: `Newsletter Digest <${config.email.address}>`,
      to: config.notification.recipientEmail,
      subject: `📰 Your AI Newsletter Digest - ${subjectDate}`,
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
   *
   * Styled as lettered reference-sheet panels with INLINE styles (Gmail strips
   * <style>). Plex falls back to Arial / system mono in mail clients.
   */
  generateEmailBody(summary, newsletters, totalNewsletters, dateString, tldr, researchFindings, dateParam, allPapers = []) {
    const next = letterer();
    const plural = (n, w) => `${n} ${w}${n !== 1 ? 's' : ''}`;

    const tldrHtml = tldr && tldr.length > 0 ? panel({
      letter: next(), title: 'TL;DR', caption: plural(tldr.length, 'point'),
      body: `<ul class="sq">${tldr.map(b => `<li class="sq_li">${escapeHtml(b)}</li>`).join('')}</ul>`
    }) : '';

    // Extract top 5 stories from the daily-overview markdown
    const topStories = extractTopStories(summary, 5);
    const topStoriesHtml = topStories.length > 0 ? panel({
      letter: next(), title: 'Top 5 Stories', caption: 'from the daily overview',
      body: `<ol class="num">${topStories.map(s => `<li class="num_li">${markdownToEmailHtml(s).replace(/^<p[^>]*>/, '').replace(/<\/p>$/, '')}</li>`).join('')}</ol>`
    }) : '';

    const missing = researchFindings?.missingStories?.length > 0 ? researchFindings.missingStories.slice(0, 3) : [];
    const researchHtml = missing.length > 0 ? panel({
      letter: next(), title: 'Beyond the Newsletters', caption: 'research agent',
      body: `<p class="rsub">Stories our research agent found that weren't in today's newsletters:</p>` +
        missing.map((story, i) => `
          <div class="${i === missing.length - 1 ? 'ri ri_last' : 'ri'}">
            <span class="rh">${escapeHtml(story.headline)}</span>
            <p class="rs">${escapeHtml(story.summary)}</p>
            <p class="rw">Why it matters: ${escapeHtml(story.whyItMatters)}</p>
          </div>`).join('')
    }) : '';

    const papersHtml = allPapers.length > 0 ? panel({
      letter: next(), title: 'Papers This Cycle', caption: plural(allPapers.length, 'paper'),
      body: `<ul class="sq">${allPapers.slice(0, 8).map(p => `
          <li class="sq_li"><a href="${escapeHtml(p.url)}" class="lk">${escapeHtml(p.title || p.url)}</a></li>`).join('')}</ul>`
    }) : '';

    const attachHtml = panel({
      letter: next(), title: 'Full digest attached as PDF', caption: 'attachment',
      body: `<div class="note">
          <p class="note-p">All ${totalNewsletters} newsletter summaries, daily overview by category, and complete papers list are in the attached PDF. Includes cover page, table of contents, page numbers.</p>
          <span class="file">digest-${dateParam}.pdf</span>
        </div>`
    });

    const html = `<!DOCTYPE html>
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
  title: 'AI Newsletter Digest',
  cells: [
    { k: 'Date', v: dateString },
    { k: 'Summary', v: `${totalNewsletters} Newsletter${totalNewsletters !== 1 ? 's' : ''} Summarized` }
  ]
})}
<div class="inner">
${tldrHtml}
${topStoriesHtml}
${researchHtml}
${papersHtml}
${attachHtml}
</div>
<div class="ft">Generated with AI • Delivered at midnight IST</div>
</div>
</div>
</body>
</html>`;
    return inlineClasses(html);
  }

  /**
   * Generate the FULL digest HTML — used as the source for the PDF attachment.
   * Includes a cover page, table of contents, daily overview, research
   * findings, ALL newsletter cards (priority-grouped), and a complete
   * Papers section, as reference-sheet panels (A, B, C ...) in IBM Plex.
   */
  generateHtmlEmail(summary, newsletters, totalNewsletters, dateString, dateParam, tldr, researchFindings, allPapers = []) {
    const priorityOrder = { HIGH: 0, MEDIUM: 1, LOW: 2 };
    const sorted = [...newsletters].sort((a, b) =>
      (priorityOrder[a.priority] ?? 1) - (priorityOrder[b.priority] ?? 1)
    );

    // Counts for cover page stats
    const counts = { HIGH: 0, MEDIUM: 0, LOW: 0 };
    for (const nl of newsletters) counts[nl.priority || 'MEDIUM']++;

    const next = letterer();
    const plural = (n, w) => `${n} ${w}${n !== 1 ? 's' : ''}`;
    const hasResearch = researchFindings?.missingStories?.length > 0;

    const newsletterCards = sorted.map((nl, i) => {
      const tag = PRIORITY[nl.priority] || PRIORITY.MEDIUM;
      const summaryHtml = markdownToEmailHtml(nl.summary);
      const cardId = `nl-${i}`;

      const linksHtml = nl.links && nl.links.length > 0 ? `
        <div class="links">
          <span class="label">Links: </span>
          ${nl.links.slice(0, 5).map(link => {
            const text = link.text || link.url || 'link';
            const shortText = text.length > 30 ? text.substring(0, 28) + '…' : text;
            return `<a href="${escapeHtml(link.url || '#')}" class="chip">${escapeHtml(shortText)}</a>`;
          }).join('')}
        </div>` : '';

      return `
        <div class="card${i === 0 ? ' card0' : ''}" id="${cardId}">
          <table class="ctop" role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr>
            <td class="ctitle">${escapeHtml(nl.subject)}</td>
            <td class="ctag ${tag.cls}">${tag.text}</td>
          </tr></table>
          <p class="cfrom">From: ${escapeHtml(nl.from)}</p>
          <div>${summaryHtml}</div>
          ${linksHtml}
        </div>`;
    }).join('');

    // Cover page + table of contents (PDF front matter). Panel letters follow
    // reading order: cover TL;DR, Contents, then the body panels.
    const tldrHtml = tldr && tldr.length > 0 ? panel({
      letter: next(), title: 'TL;DR', caption: plural(tldr.length, 'point'),
      body: `<ul class="sq">${tldr.map(b => `<li class="sq_li">${escapeHtml(b)}</li>`).join('')}</ul>`
    }) : '';

    const coverHtml = `
      <section class="cover">
        <div class="cover-tag">Daily digest</div>
        <h1 class="cover-title">AI Newsletter Digest</h1>
        <div class="cover-date">${escapeHtml(dateString)}</div>
        ${statGrid([
          { num: String(totalNewsletters), label: 'Newsletters' },
          { num: String(counts.HIGH), label: 'High Priority', hi: true },
          { num: String(allPapers.length), label: 'Papers' },
          { num: String(researchFindings?.missingStories?.length || 0), label: 'Beyond' }
        ])}
        ${PDF_COVER_AND_TOC ? tldrHtml : ''}
      </section>`;

    const tocRows = [
      ['#overview', 'Daily Overview', ''],
      hasResearch ? ['#beyond', 'Beyond the Newsletters', ''] : null,
      allPapers.length > 0 ? ['#papers', 'Papers Referenced Today', ''] : null,
      ['#summaries', `Individual Summaries (${totalNewsletters})`, `<ul class="tocs">
          ${counts.HIGH > 0 ? `<li>${PRIORITY.HIGH.text} (${counts.HIGH})</li>` : ''}
          ${counts.MEDIUM > 0 ? `<li>${PRIORITY.MEDIUM.text} (${counts.MEDIUM})</li>` : ''}
          ${counts.LOW > 0 ? `<li>${PRIORITY.LOW.text} (${counts.LOW})</li>` : ''}
        </ul>`]
    ].filter(Boolean);
    const tocItems = tocRows.map(([href, label, sub], i) =>
      `<li class="toci"><span class="tocn">${String(i + 1).padStart(2, '0')}</span><a href="${href}" class="lk">${escapeHtml(label)}</a>${sub}</li>`
    ).join('\n');

    const tocPanel = PDF_COVER_AND_TOC ? panel({
      letter: next(), title: 'Contents', caption: 'this issue', extra: 'toc-panel',
      body: `<ol class="tocl">${tocItems}</ol>`
    }) : '';

    const front = PDF_COVER_AND_TOC ? coverHtml : '';
    // With the cover off, the TL;DR panel leads the body instead of being lost.
    const bodyTldr = PDF_COVER_AND_TOC ? '' : tldrHtml;

    const overviewHtml = panel({
      letter: next(), title: 'Daily Overview', caption: plural(totalNewsletters, 'newsletter'), id: 'overview',
      body: `<div>${markdownToEmailHtml(summary)}</div>`
    });

    const researchHtml = hasResearch ? panel({
      letter: next(), title: 'Beyond the Newsletters', caption: 'research agent', id: 'beyond',
      body: `<p class="rsub">Stories our research agent found that weren't in today's newsletters:</p>` +
        researchFindings.missingStories.map((story, i, arr) => `
          <div class="${i === arr.length - 1 ? 'ri ri_last' : 'ri'}">
            <span class="rh">${escapeHtml(story.headline)}</span>
            <p class="rs">${escapeHtml(story.summary)}</p>
            <p class="rw">Why it matters: ${escapeHtml(story.whyItMatters)}</p>
          </div>`).join('')
    }) : '';

    const papersSectionHtml = allPapers.length > 0 ? panel({
      letter: next(), title: 'Papers Referenced Today', caption: plural(allPapers.length, 'paper'), id: 'papers',
      body: `<p class="rsub">${allPapers.length} unique paper${allPapers.length !== 1 ? 's' : ''} cited across today's newsletters.</p>
        <ol class="num">${allPapers.map(p => `
          <li class="num_li">
            <a href="${escapeHtml(p.url)}" class="lk">${escapeHtml(p.title || p.url)}</a>
            <div class="label" style="word-break:break-all;">${escapeHtml(p.url)}</div>
          </li>`).join('')}</ol>`
    }) : '';

    const summariesHtml = panel({
      letter: next(), title: 'Individual Summaries', caption: plural(totalNewsletters, 'newsletter'), id: 'summaries',
      body: newsletterCards
    });

    return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AI Newsletter Digest — ${escapeHtml(dateString)}</title>
${FONT_LINKS}
<style>${rulesToCss()}
${PDF_CSS}</style>
</head>
<body class="page">
<div class="sheet">
${front}
${tocPanel}
<div class="inner">
${bodyTldr}
${overviewHtml}
${researchHtml}
${papersSectionHtml}
${summariesHtml}
</div>
<div class="ft">Generated with AI • Delivered at midnight IST</div>
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
