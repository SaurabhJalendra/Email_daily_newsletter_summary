#!/usr/bin/env node
/**
 * Local style preview. Renders the daily email, the weekly email and both PDF
 * sources from the latest data to preview/ and prints their sizes.
 * Sends NOTHING and does not run the pipeline.
 *
 *   node scripts/preview-styles.js            HTML only
 *   node scripts/preview-styles.js --pdf      HTML + daily.pdf + weekly.pdf
 *   node scripts/preview-styles.js --summary data/summaries/2026-10-04-morning.json --weekly wiki/digests/2026-W39.md
 *
 * Exit code 1 when the daily email HTML is 102 KB or more (Gmail clips there)
 * or when the markup uses a class that has no style rule.
 */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { EmailNotifier, aggregatePapers } from '../src/notifier/email.js';
import { buildWeeklyDigest } from '../src/weekly-digest-email.js';
import { htmlToPdf } from '../src/utils/html-to-pdf.js';
import { unmappedClasses } from '../src/utils/sheet-style.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'preview');
const args = process.argv.slice(2);
const arg = (name) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : undefined; };
const wantPdf = args.includes('--pdf');
const GMAIL_LIMIT = 102 * 1024;

async function latest(dir, ext, skip = []) {
  const names = (await fs.readdir(dir)).filter(n => n.endsWith(ext) && !skip.includes(n)).sort();
  if (!names.length) throw new Error(`no ${ext} files in ${dir}`);
  return path.join(dir, names[names.length - 1]);
}

const kb = (n) => (n / 1024).toFixed(1) + ' KB';
let failed = false;

await fs.mkdir(outDir, { recursive: true });

// ---- daily (same date/edition logic as EmailNotifier.sendSummaryNotification) ----
const summaryPath = arg('--summary') ? path.resolve(arg('--summary')) : await latest(path.join(root, 'data', 'summaries'), '.json', ['index.json']);
const data = JSON.parse(await fs.readFile(summaryPath, 'utf-8'));
const { summary, totalNewsletters, newsletters, date, tldr, researchFindings, edition } = data;
const calendarDate = new Date(date).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
const editionLabel = edition === 'morning' ? 'Morning' : edition === 'evening' ? 'Evening' : '';
const dateString = editionLabel ? `${editionLabel} · ${calendarDate}` : calendarDate;
const dateParam = new Date(date).toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });
const allPapers = aggregatePapers(newsletters);

// No constructor: it would create the SMTP transport. The methods need no state.
const notifier = Object.create(EmailNotifier.prototype);
const dailyEmail = notifier.generateEmailBody(summary, newsletters, totalNewsletters, dateString, tldr, researchFindings, dateParam, allPapers);
const dailyPdfHtml = notifier.generateHtmlEmail(summary, newsletters, totalNewsletters, dateString, dateParam, tldr, researchFindings, allPapers);
// What the post-send QA step renders (no papers argument): it also checks 102 KB.
const dailyQaHtml = notifier.generateHtmlEmail(summary, newsletters, totalNewsletters, dateString, dateParam, tldr, researchFindings);

await fs.writeFile(path.join(outDir, 'daily-email.html'), dailyEmail);
await fs.writeFile(path.join(outDir, 'daily-pdf.html'), dailyPdfHtml);

// ---- weekly ----
const weeklyPath = arg('--weekly') ? path.resolve(arg('--weekly')) : await latest(path.join(root, 'wiki', 'digests'), '.md');
const weeklyMd = (await fs.readFile(weeklyPath, 'utf-8')).replace(/\r\n/g, '\n');
const weekly = buildWeeklyDigest(weeklyMd, path.basename(weeklyPath, '.md'));
await fs.writeFile(path.join(outDir, 'weekly-email.html'), weekly.shortBodyHtml);
await fs.writeFile(path.join(outDir, 'weekly-pdf.html'), weekly.fullHtml);

// ---- report ----
const rows = [
  ['daily-email.html', dailyEmail.length, true],
  ['daily-pdf.html', dailyPdfHtml.length, false],
  ['daily QA render (generateHtmlEmail, no papers)', dailyQaHtml.length, true],
  ['weekly-email.html', weekly.shortBodyHtml.length, true],
  ['weekly-pdf.html', weekly.fullHtml.length, false]
];
console.log(`daily source:  ${path.relative(root, summaryPath)}`);
console.log(`weekly source: ${path.relative(root, weeklyPath)}\n`);
for (const [name, bytes, gmail] of rows) {
  const flag = gmail && bytes >= GMAIL_LIMIT ? '  OVER 102 KB' : gmail ? '  (limit 102 KB)' : '';
  if (gmail && bytes >= GMAIL_LIMIT && name.startsWith('daily')) failed = true;
  console.log(`${name.padEnd(48)} ${kb(bytes).padStart(10)}${flag}`);
}
for (const [name, html] of [['daily-email.html', dailyEmail], ['weekly-email.html', weekly.shortBodyHtml]]) {
  const styleTags = (html.match(/<style/gi) || []).length;
  const classAttrs = (html.match(/\sclass="/g) || []).length;
  console.log(`${name}: <style> tags ${styleTags}, leftover class attributes ${classAttrs} (both must be 0)`);
  if (styleTags || classAttrs) failed = true;
}
if (unmappedClasses.size) { console.log('UNMAPPED classes:', [...unmappedClasses].join(', ')); failed = true; }

if (wantPdf) {
  const dailyPdf = await htmlToPdf(dailyPdfHtml, { documentTitle: `AI Newsletter Digest — ${dateString}`, dateLabel: dateString });
  await fs.writeFile(path.join(outDir, 'daily.pdf'), dailyPdf);
  const weeklyPdf = await htmlToPdf(weekly.fullHtml, { documentTitle: `Weekly AI Wiki Digest — ${path.basename(weeklyPath, '.md')}`, dateLabel: weekly.dateString });
  await fs.writeFile(path.join(outDir, 'weekly.pdf'), weeklyPdf);
  console.log(`\ndaily.pdf ${kb(dailyPdf.length)}, weekly.pdf ${kb(weeklyPdf.length)}`);
}
console.log(`\nwritten to ${path.relative(process.cwd(), outDir) || outDir}`);
process.exit(failed ? 1 : 0);
