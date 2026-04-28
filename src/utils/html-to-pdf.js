import puppeteer from 'puppeteer';

/**
 * Convert HTML string to a high-quality PDF Buffer.
 *
 * Uses puppeteer with Chrome headless. The HTML is rendered exactly as a
 * browser would render it, then printed to PDF. Print-specific CSS in the
 * HTML's <style> block (via @media print) is applied automatically.
 *
 * @param {string} html - Full HTML document with <head>/<body>.
 * @param {Object} options - Optional puppeteer page.pdf() overrides.
 * @returns {Promise<Buffer>} - PDF file content.
 */
export async function htmlToPdf(html, options = {}) {
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
    const pdf = await page.pdf({
      format: 'A4',
      margin: { top: '15mm', right: '12mm', bottom: '15mm', left: '12mm' },
      printBackground: true,
      preferCSSPageSize: false,
      ...options
    });
    return pdf;
  } finally {
    await browser.close();
  }
}
