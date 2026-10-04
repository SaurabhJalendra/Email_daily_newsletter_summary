import puppeteer from 'puppeteer';
import { FONT_LINKS, MONO, T } from './sheet-style.js';

/**
 * Convert HTML string to a high-quality PDF Buffer with header/footer
 * (date stamp, page numbers, generation marker).
 *
 * Uses puppeteer with Chrome headless. The HTML is rendered as a browser
 * would render it (screen media is emulated, so @media print rules do NOT
 * apply: put PDF rules in plain CSS), then printed to PDF. IBM Plex is loaded
 * from Google Fonts (injected here when the document does not link it).
 *
 * @param {string} html - Full HTML document with <head>/<body>.
 * @param {Object} options
 * @param {string} options.documentTitle - Shown in PDF metadata + header
 * @param {string} options.dateLabel - Shown in header (e.g. "Monday, 28 April 2026")
 * @param {boolean} options.firstPageNoFooter - Suppress footer on cover page (default true)
 * @returns {Promise<Buffer>} - PDF file content.
 */
export async function htmlToPdf(html, options = {}) {
  const {
    documentTitle = 'AI Newsletter Digest',
    dateLabel = '',
    firstPageNoFooter = true,
    ...pdfOverrides
  } = options;

  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ]
  });
  try {
    const page = await browser.newPage();
    // Emulate "screen" media so colors/backgrounds (priority borders, TLDR
    // box, etc.) render. Puppeteer defaults to "print" which strips many
    // backgrounds unless `printBackground` is true (which we also set).
    await page.emulateMediaType('screen');
    // Reference-sheet house style needs IBM Plex. Inject the Google Fonts links
    // when the document has none; offline, the CSS font stacks fall back to
    // system faces and the PDF still renders.
    const withFonts = html.includes('fonts.googleapis.com')
      ? html
      : html.replace(/<\/head>/i, `${FONT_LINKS}</head>`);
    await page.setContent(withFonts, { waitUntil: 'networkidle0', timeout: 30000 });
    // networkidle0 can fire before the font files are decoded: wait explicitly.
    await page.evaluate(() => document.fonts.ready).catch(() => {});

    // Header/footer templates render outside the page, so web fonts are not
    // available there: Plex Mono if installed, else the system mono stack.
    // Style follows the sheet: mono caption in muted ink, one hairline above
    // the footer, no colour.
    const tplFont = `font-family:${MONO.replace(/"/g, "'")}; font-weight:500; font-size:7.5pt; color:${T.muted};`;

    // Header: date stamp top-right
    const headerTemplate = `
      <div style="${tplFont} width:100%; padding:0 12mm; text-align:right;">
        ${escapeForTemplate(dateLabel)}
      </div>`;

    // Footer: doc title left, page X of Y right, hairline above
    const footerTemplate = `
      <div style="${tplFont} width:100%; padding:0 12mm;">
        <div style="display:flex; justify-content:space-between; border-top:1px solid ${T.hair}; padding-top:5px;">
          <span>${escapeForTemplate(documentTitle)}</span>
          <span>Page <span class="pageNumber"></span> / <span class="totalPages"></span></span>
        </div>
      </div>`;

    const pdf = await page.pdf({
      format: 'A4',
      // Slightly larger top/bottom margins to leave room for header/footer
      margin: { top: '20mm', right: '12mm', bottom: '20mm', left: '12mm' },
      printBackground: true,
      preferCSSPageSize: false,
      displayHeaderFooter: true,
      headerTemplate,
      footerTemplate,
      ...pdfOverrides
    });
    return pdf;
  } finally {
    await browser.close();
  }
}

function escapeForTemplate(s) {
  if (!s) return '';
  return String(s).replace(/[<>&"']/g, c => (
    { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}
