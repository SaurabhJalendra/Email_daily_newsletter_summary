import puppeteer from 'puppeteer';

/**
 * Convert HTML string to a high-quality PDF Buffer with header/footer
 * (date stamp, page numbers, generation marker).
 *
 * Uses puppeteer with Chrome headless. The HTML is rendered exactly as a
 * browser would render it, then printed to PDF. Print-specific CSS in the
 * HTML's <style> block (via @media print) is applied automatically.
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
    await page.setContent(html, { waitUntil: 'networkidle0', timeout: 30000 });

    // Header: small date stamp top-right (skipped on cover page via @page CSS)
    const headerTemplate = `
      <div style="font-size:8pt; color:#888; width:100%; padding:0 14mm; text-align:right; font-family:Georgia,serif;">
        ${escapeForTemplate(dateLabel)}
      </div>`;

    // Footer: doc title left, page X of Y right
    const footerTemplate = `
      <div style="font-size:8pt; color:#888; width:100%; padding:0 14mm; display:flex; justify-content:space-between; font-family:Georgia,serif;">
        <span>${escapeForTemplate(documentTitle)}</span>
        <span>Page <span class="pageNumber"></span> / <span class="totalPages"></span></span>
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
