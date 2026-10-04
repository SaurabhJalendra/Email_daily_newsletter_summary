/**
 * Reference-sheet house style for the digest emails and PDFs.
 *
 * Source of truth for the look: design/reference-sheet/ (sheet.css, 01-colour.md,
 * 02-typography.md, 04-panel-anatomy.md, 05-tables.md). Paper and ink, lettered
 * panels (A, B, C...), IBM Plex, square corners, 1.25 px rules, colour only for
 * meaning (blue = data / explanation, red = error), light only.
 *
 * One rule table (RULES) drives both outputs:
 *   - PDF:   rulesToCss() emits it as a normal <style> block.
 *   - Email: inlineClasses() rewrites class="x" into style="..." because Gmail
 *            strips most <style>. Plex is not installed in mail clients, so the
 *            font stacks fall back to Arial / system monospace.
 *
 * Markup is written once with class names; email callers pass it through
 * inlineClasses(), PDF callers ship the <style>.
 */
import { Marked } from 'marked';

// ---- tokens (01-colour.md, light) -----------------------------------------
export const T = {
  paper: '#ffffff',
  wash: '#f4f6f8',
  ink: '#1b2430',
  ruleStrong: '#535a63',
  muted: '#6a7482',
  mutedWash: '#5f6977', // muted text on the wash keeps AA contrast
  rule: '#8d9197',
  hair: '#e4e7ea',
  blue: '#1f5fa8',
  blueLine: '#5687bd',
  red: '#b3261e'
};

// ---- font stacks ------------------------------------------------------------
// Plex first (PDF loads it from Google Fonts). Mail clients fall through to the
// system faces: Arial Narrow only where it is installed, then Arial.
export const SANS = `'IBM Plex Sans Condensed','IBM Plex Sans','Roboto Condensed','Arial Narrow',Arial,Helvetica,sans-serif`;
export const MONO = `'IBM Plex Mono',ui-monospace,SFMono-Regular,Menlo,Consolas,'Courier New',monospace`;

export const FONT_HREF =
  'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=IBM+Plex+Sans+Condensed:ital,wght@0,500;0,600;1,400&family=IBM+Plex+Sans:wght@500;600&display=swap';
export const FONT_LINKS =
  `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="${FONT_HREF}">`;

const LINE = '1.25px solid';
const sans = `font-family:${SANS};`;
const mono = `font-family:${MONO};font-weight:500;`;

// ---- rules: class -> declarations -------------------------------------------
// Later keys win when classes are combined (declarations are concatenated in
// class order), so write the generic class first on the element.
export const RULES = {
  // page + frame
  outer: `padding:12px 8px;`,
  page: `margin:0;padding:0;background:${T.paper};color:${T.ink};${sans}font-weight:500;`,
  sheet: `max-width:680px;margin:0 auto;background:${T.paper};border:${LINE} ${T.ink};`,
  inner: `padding:16px 16px 4px 16px;`,

  // title block (10-titleblock-semantics-web.md): title row, then key/value cells
  tb: `width:100%;border-collapse:collapse;`,
  'tb-title': `padding:14px 16px 12px 16px;border-bottom:${LINE} ${T.ink};${sans}font-weight:600;font-size:22px;line-height:1.25;color:${T.ink};text-align:left;`,
  'tb-cell': `padding:8px 16px 10px 16px;border-bottom:${LINE} ${T.ink};border-right:${LINE} ${T.ink};vertical-align:top;text-align:left;`,
  'tb-cell-last': `border-right:0;`,
  'tb-k': `${mono}font-size:10.5px;line-height:1.2;color:${T.muted};margin:0 0 4px 0;`,
  'tb-v': `${sans}font-weight:500;font-size:14px;line-height:1.25;color:${T.ink};margin:0;`,

  // lettered panel (04-panel-anatomy.md): ink letter tab, title, mono caption
  panel: `border:${LINE} ${T.ink};background:${T.paper};margin:0 0 16px 0;`,
  ph: `width:100%;border-collapse:collapse;border-bottom:${LINE} ${T.ruleStrong};`,
  pl: `width:32px;height:32px;background:${T.ink};color:${T.paper};text-align:center;vertical-align:middle;${sans}font-weight:600;font-size:15px;line-height:32px;padding:0;`,
  pt: `padding:0 0 0 12px;vertical-align:middle;text-align:left;${sans}font-weight:600;font-size:17px;line-height:32px;color:${T.ink};`,
  pc: `padding:0 10px 0 8px;vertical-align:middle;text-align:right;white-space:nowrap;${mono}font-size:11px;line-height:32px;color:${T.muted};`,
  pb: `padding:14px 16px 14px 16px;`,

  // text roles
  body: `${sans}font-weight:500;font-size:14px;line-height:1.6;color:${T.ink};margin:0;`,
  muted: `color:${T.muted};`,
  mb: `margin-bottom:14px;`,
  'label-w': `color:${T.mutedWash};`,
  label: `${mono}font-size:11px;line-height:1.4;color:${T.muted};`,
  lk: `color:${T.ink};text-decoration:underline;text-decoration-color:${T.blueLine};text-decoration-thickness:1.25px;text-underline-offset:2px;`,
  sq: `margin:0;padding:0 0 0 20px;list-style:square;`,
  sq_li: `margin:0 0 6px 0;${sans}font-weight:500;font-size:14px;line-height:1.55;color:${T.ink};`,
  num: `margin:0;padding:0 0 0 24px;`,
  num_li: `margin:0 0 8px 0;${sans}font-weight:500;font-size:14px;line-height:1.55;color:${T.ink};`,

  // research items (annotation voice = blue)
  ri: `margin:0 0 14px 0;`,
  ri_last: `margin:0;`,
  rh: `${sans}font-weight:600;font-size:15px;line-height:1.3;color:${T.ink};display:block;`,
  rsub: `${sans}font-weight:500;font-size:12.5px;line-height:1.5;color:${T.muted};margin:0 0 12px 0;`,
  rs: `${sans}font-weight:500;font-size:13.5px;line-height:1.55;color:${T.ink};margin:4px 0 4px 0;`,
  rw: `${sans}font-weight:500;font-size:12.5px;line-height:1.5;color:${T.blue};margin:2px 0 0 0;`,

  // grey note box (wash + hairline): attachment callout, digest scope, lint note
  note: `background:${T.wash};border:${LINE} ${T.hair};padding:12px 14px;margin:0;${sans}font-weight:500;font-size:13px;line-height:1.55;color:${T.ink};`,
  'note-h': `${sans}font-weight:600;font-size:14px;line-height:1.3;color:${T.ink};margin:0 0 6px 0;`,
  'note-p': `${sans}font-weight:500;font-size:13px;line-height:1.55;color:${T.mutedWash};margin:0;`,
  'note-lead': `${sans}font-weight:500;font-size:14px;line-height:1.55;color:${T.ink};margin:0;`,
  'meta-row': `${sans}font-weight:500;font-size:13px;line-height:1.5;color:${T.ink};margin:3px 0;`,
  fn: `${sans}font-style:italic;font-weight:400;font-size:12px;line-height:1.5;color:${T.muted};margin:0 0 14px 0;`,
  file: `display:inline-block;margin:10px 0 0 0;padding:2px 8px;background:${T.paper};border:${LINE} ${T.hair};${mono}font-size:12px;line-height:1.6;color:${T.ink};`,
  ft: `padding:10px 16px 12px 16px;border-top:${LINE} ${T.hair};${mono}font-size:11px;line-height:1.5;color:${T.muted};`,

  // newsletter card (PDF): hairline-separated entries inside a panel
  card: `border-top:${LINE} ${T.hair};padding:14px 0 6px 0;`,
  card0: `border-top:0;padding-top:0;`,
  ctop: `width:100%;border-collapse:collapse;`,
  ctitle: `padding:0;vertical-align:top;text-align:left;${sans}font-weight:600;font-size:16px;line-height:1.3;color:${T.ink};`,
  ctag: `padding:2px 0 0 12px;vertical-align:top;text-align:right;white-space:nowrap;${mono}font-size:11px;line-height:1.4;`,
  'ctag-hi': `color:${T.blue};`,
  'ctag-md': `color:${T.ink};`,
  'ctag-lo': `color:${T.muted};`,
  cfrom: `${mono}font-size:11px;line-height:1.4;color:${T.muted};margin:4px 0 10px 0;`,
  links: `margin:10px 0 6px 0;`,
  chip: `display:inline-block;margin:2px 4px 2px 0;padding:0 7px;border:${LINE} ${T.hair};${mono}font-size:11px;line-height:1.6;color:${T.ink};text-decoration:none;`,

  // table of contents rows
  tocl: `margin:0;padding:0;list-style:none;`,
  toci: `margin:0;padding:7px 0;border-bottom:${LINE} ${T.hair};${sans}font-weight:500;font-size:14px;line-height:1.4;color:${T.ink};`,
  tocn: `${mono}font-size:11px;color:${T.muted};padding-right:10px;`,
  tocs: `margin:4px 0 0 0;padding:0 0 0 28px;list-style:none;${mono}font-size:11px;line-height:1.6;color:${T.muted};`,

  // markdown output (marked renderer below); sizes track the body scale
  'md-h1': `${sans}font-weight:600;font-size:20px;line-height:1.3;color:${T.ink};margin:18px 0 10px 0;`,
  'md-h2': `${sans}font-weight:600;font-size:17px;line-height:1.3;color:${T.ink};margin:16px 0 8px 0;`,
  'md-h3': `${sans}font-weight:600;font-size:15.5px;line-height:1.3;color:${T.ink};margin:14px 0 6px 0;`,
  'md-h4': `${sans}font-weight:600;font-size:14px;line-height:1.3;color:${T.ink};margin:12px 0 6px 0;`,
  'md-p': `${sans}font-weight:500;font-size:14px;line-height:1.6;color:${T.ink};margin:8px 0;`,
  'md-list': `margin:8px 0;padding:0 0 0 22px;`,
  'md-li': `${sans}font-weight:500;font-size:14px;line-height:1.55;color:${T.ink};margin:4px 0;`,
  'md-a': `color:${T.ink};text-decoration:underline;text-decoration-color:${T.blueLine};text-decoration-thickness:1.25px;text-underline-offset:2px;`,
  'md-strong': `font-weight:600;color:${T.ink};`,
  'md-em': `font-style:italic;font-weight:400;`,
  'md-code': `${mono}font-size:12.5px;background:${T.wash};border:${LINE} ${T.hair};padding:0 4px;color:${T.ink};`,
  'md-pre': `${mono}font-size:12px;line-height:1.5;background:${T.wash};border:${LINE} ${T.hair};padding:10px 12px;margin:10px 0;overflow-x:auto;color:${T.ink};`,
  'md-blockquote': `margin:12px 0;padding:8px 12px;background:${T.wash};border:${LINE} ${T.hair};color:${T.ink};`,
  'md-hr': `border:0;border-top:${LINE} ${T.hair};margin:14px 0;height:0;`,
  'md-table': `width:100%;border-collapse:collapse;margin:10px 0;`,
  'md-th': `padding:6px 10px;text-align:left;border-bottom:${LINE} ${T.rule};${mono}font-size:11px;line-height:1.3;color:${T.muted};`,
  'md-td': `padding:6px 10px;vertical-align:top;${sans}font-weight:500;font-size:13px;line-height:1.5;color:${T.ink};`,
  'md-tr-odd': `background:${T.wash};`,
  // weekly wiki reference [[slug]]: explanation voice = blue, mono
  'wiki-ref': `${mono}font-size:0.9em;color:${T.blue};`,

  // cover (PDF)
  'cover-tag': `${mono}font-size:11px;line-height:1.4;color:${T.muted};margin:0 0 10px 0;`,
  'cover-title': `${sans}font-weight:600;font-size:34px;line-height:1.15;color:${T.ink};margin:0 0 6px 0;`,
  'cover-sub': `${sans}font-weight:500;font-size:17px;line-height:1.35;color:${T.ink};margin:0 0 4px 0;`,
  'cover-date': `${sans}font-weight:500;font-size:14px;line-height:1.4;color:${T.muted};margin:0 0 20px 0;`,
  stats: `width:100%;border-collapse:collapse;border:${LINE} ${T.ink};margin:0 0 16px 0;`,
  stat: `padding:10px 14px 12px 14px;border-right:${LINE} ${T.ink};vertical-align:top;text-align:left;`,
  'stat-last': `border-right:0;`,
  'stat-num': `${sans}font-weight:600;font-size:30px;line-height:1.1;color:${T.ink};margin:0 0 4px 0;`,
  'stat-num-hi': `color:${T.blue};`,
  'cover-foot': `position:absolute;left:8mm;right:8mm;bottom:8mm;${mono}font-size:10px;line-height:1.4;color:${T.muted};`,
  'stat-label': `${mono}font-size:10.5px;line-height:1.3;color:${T.muted};margin:0;`
};

// Rules that only make sense in the PDF (page flow, full-width sheet). Appended
// after rulesToCss() in PDF documents. Screen media is emulated by html-to-pdf,
// so these are plain rules, not @media print.
export const PDF_CSS = `
  @page { size: A4; margin: 20mm 12mm; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font-synthesis: none; }
  .sheet { max-width: none; border: 0; }
  .inner { padding: 0; }
  .ft { padding-left: 0; padding-right: 0; }
  .cover { position: relative; page-break-after: always; box-sizing: border-box; height: 238mm; margin: 6mm 6mm 0 6mm; padding: 10mm 8mm 8mm 8mm;
    border: ${LINE} ${T.rule}; outline: ${LINE} ${T.ink}; outline-offset: 5px; }
  .panel { margin-bottom: 14px; }
  .ph, .md-h1, .md-h2, .md-h3, .md-h4, .rh, .ctitle { page-break-after: avoid; }
  .card, .ri, .md-blockquote, .md-pre, .note, .md-table tr { page-break-inside: avoid; }
  .sec-panel { page-break-before: always; }
  .md-li > .md-p { margin: 4px 0; }
  a { text-decoration-color: ${T.blueLine}; }
`;

export function rulesToCss(rules = RULES) {
  return Object.entries(rules).map(([k, v]) => `.${k}{${v}}`).join('\n');
}

// ---- email: class -> inline style ---------------------------------------------
export const unmappedClasses = new Set();

/** Rewrite every class="a b" into style="<decls of a><decls of b>". */
export function inlineClasses(html, rules = RULES) {
  return html.replace(/\sclass="([^"]*)"/g, (_, names) => {
    const decl = names.split(/\s+/).filter(Boolean).map(n => {
      if (!(n in rules)) { unmappedClasses.add(n); return ''; }
      return rules[n];
    }).join('');
    return decl ? ` style="${decl}"` : '';
  });
}

// ---- small markup helpers -------------------------------------------------------
export function escapeHtml(text) {
  if (!text) return '';
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return String(text).replace(/[&<>"']/g, m => map[m]);
}

const TABLE = 'role="presentation" cellpadding="0" cellspacing="0" border="0"';

/** Panel letters A, B, C ... Z, AA ... in document order. */
export function letterer() {
  let i = 0;
  return () => {
    let n = i++;
    let s = '';
    do { s = String.fromCharCode(65 + (n % 26)) + s; n = Math.floor(n / 26) - 1; } while (n >= 0);
    return s;
  };
}

/** Lettered panel. title/caption are raw text (escaped here); body is HTML. */
export function panel({ letter, title, caption = '', body = '', id = '', extra = '' }) {
  return `<div class="panel${extra ? ' ' + extra : ''}"${id ? ` id="${id}"` : ''}>` +
    `<table class="ph" ${TABLE} width="100%"><tr><td class="pl" width="32">${escapeHtml(letter)}</td>` +
    `<td class="pt">${escapeHtml(title)}</td>${caption ? `<td class="pc">${escapeHtml(caption)}</td>` : ''}</tr></table>` +
    `<div class="pb">${body}</div></div>`;
}

/** Title block: title row, then one key/value cell per entry (values are raw text). */
export function titleBlock({ title, cells }) {
  const n = cells.length || 1;
  return `<table class="tb" ${TABLE} width="100%"><tr><td class="tb-title" colspan="${n}">${escapeHtml(title)}</td></tr><tr>` +
    cells.map((c, i) => `<td class="tb-cell${i === n - 1 ? ' tb-cell-last' : ''}"><div class="tb-k">${escapeHtml(c.k)}</div><div class="tb-v">${escapeHtml(c.v)}</div></td>`).join('') +
    `</tr></table>`;
}

/** Cover stat grid (PDF). stats: [{ num, label, hi }] */
export function statGrid(stats) {
  return `<table class="stats" ${TABLE} width="100%"><tr>` +
    stats.map((s, i) => `<td class="stat${i === stats.length - 1 ? ' stat-last' : ''}"><div class="stat-num${s.hi ? ' stat-num-hi' : ''}">${escapeHtml(s.num)}</div><div class="stat-label">${escapeHtml(s.label)}</div></td>`).join('') +
    `</tr></table>`;
}

/** Priority tag: glyph + word + colour (never colour alone). */
export const PRIORITY = {
  HIGH: { cls: 'ctag-hi', text: '● HIGH', short: 'HIGH' },
  MEDIUM: { cls: 'ctag-md', text: '◐ MED', short: 'MED' },
  LOW: { cls: 'ctag-lo', text: '○ LOW', short: 'LOW' }
};

/** Drop a leading emoji (and its separator) from a heading; the words stay. */
export function stripLeadingEmoji(s) {
  return String(s || '').replace(/^[\p{Extended_Pictographic}️‍⃣\s]+/u, '').trim();
}

// ---- markdown renderer (class-based; inlined for email) --------------------------
const TRACKING = /link\.mail\.beehiiv\.com|tracking\.tldrnewsletter\.com|journalclub\.io\/track|link\.skool\.com|app\.alphasignal\.ai\/c|links\.beehiiv\.com/;

/**
 * Marked instance whose output carries md-* classes (no inline styles), so one
 * rule table serves the PDF stylesheet and the inlined email.
 * stripTracking: daily-digest behaviour (drop tracking/overlong URLs, keep text).
 */
export function createSheetMarked({ stripTracking = false } = {}) {
  const renderer = {
    heading({ tokens, depth }) {
      const text = stripLeadingEmoji(this.parser.parseInline(tokens));
      return `<h${depth} class="md-h${Math.min(depth, 4)}">${text}</h${depth}>`;
    },
    paragraph({ tokens }) {
      return `<p class="md-p">${this.parser.parseInline(tokens)}</p>`;
    },
    list({ items, ordered }) {
      const tag = ordered ? 'ol' : 'ul';
      return `<${tag} class="md-list">${items.map(item => this.listitem(item)).join('')}</${tag}>`;
    },
    listitem({ tokens }) {
      return `<li class="md-li">${this.parser.parse(tokens, !!this.options?.async)}</li>`;
    },
    link({ href, tokens, text }) {
      const inner = tokens ? this.parser.parseInline(tokens) : text;
      if (stripTracking && (TRACKING.test(href) || href.length > 250)) {
        return `<span class="md-strong">${inner}</span>`;
      }
      return `<a href="${href}" class="md-a">${inner}</a>`;
    },
    strong({ tokens }) {
      return `<strong class="md-strong">${this.parser.parseInline(tokens)}</strong>`;
    },
    em({ tokens }) {
      return `<em class="md-em">${this.parser.parseInline(tokens)}</em>`;
    },
    codespan({ text }) {
      return `<code class="md-code">${text}</code>`;
    },
    code({ text }) {
      return `<pre class="md-pre"><code>${text}</code></pre>`;
    },
    blockquote({ tokens }) {
      return `<blockquote class="md-blockquote">${this.parser.parse(tokens)}</blockquote>`;
    },
    hr() {
      return '<hr class="md-hr">';
    },
    table({ header, rows }) {
      const cell = (c, tag) =>
        `<${tag} class="md-${tag}"${c.align ? ` align="${c.align}"` : ''}>${this.parser.parseInline(c.tokens)}</${tag}>`;
      const head = `<tr>${header.map(c => cell(c, 'th')).join('')}</tr>`;
      const body = rows.map((r, i) => `<tr${i % 2 === 0 ? ' class="md-tr-odd"' : ''}>${r.map(c => cell(c, 'td')).join('')}</tr>`).join('');
      return `<table class="md-table"><thead>${head}</thead><tbody>${body}</tbody></table>`;
    }
  };
  return new Marked({ renderer, breaks: true, gfm: true });
}
