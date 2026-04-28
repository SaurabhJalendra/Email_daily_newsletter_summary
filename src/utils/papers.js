/**
 * Paper-detection utilities. Surfaces academic references buried in
 * newsletter prose so the digest can cite them properly.
 *
 * Supported source types:
 *   - arXiv IDs (modern: 2401.12345 or 2401.12345v2; legacy: cs.LG/0012345)
 *   - DOI references (10.xxxx/...)
 *   - Direct paper URLs from arxiv.org / openreview.net / etc. (handled by parser)
 */

// arXiv ID patterns:
//   - Modern (post-2007): YYMM.NNNNN  e.g.  2401.12345  or  2401.12345v3
//   - Legacy: archive.subject/YYMMNNN  e.g.  cs.LG/0012345
const ARXIV_MODERN = /\barXiv:?\s*(\d{4}\.\d{4,5}(?:v\d+)?)\b/gi;
const ARXIV_BARE = /(?<![\w\/])(\d{4}\.\d{4,5}(?:v\d+)?)\b/g;
const ARXIV_LEGACY = /\b([a-z\-]{2,}(?:\.[A-Z]{2})?\/\d{7})\b/g;

// DOI: 10.<registrant>/<suffix>
const DOI_PATTERN = /\b10\.\d{4,9}\/[-._;()\/:A-Z0-9]+/gi;

/**
 * Extract arXiv IDs from arbitrary text. Returns canonical IDs (no version
 * suffix), deduplicated, in the order encountered.
 */
export function extractArxivIds(text) {
  if (!text || typeof text !== 'string') return [];
  const found = new Set();
  const out = [];

  const push = (raw) => {
    if (!raw) return;
    // Strip version suffix for canonicalization (`2401.12345v3` → `2401.12345`)
    const canonical = raw.replace(/v\d+$/i, '');
    if (!found.has(canonical)) {
      found.add(canonical);
      out.push(canonical);
    }
  };

  for (const m of text.matchAll(ARXIV_MODERN)) push(m[1]);
  for (const m of text.matchAll(ARXIV_LEGACY)) push(m[1]);

  // Bare-number pattern is risky (could match version numbers like "1.0.12345")
  // Only apply when we don't already have hits, and require the surrounding
  // context to look paper-ish (mentions arxiv, paper, preprint, study).
  const looksPaperish = /\b(arxiv|paper|preprint|study|published|authors)\b/i.test(text);
  if (out.length === 0 && looksPaperish) {
    for (const m of text.matchAll(ARXIV_BARE)) push(m[1]);
  }

  return out;
}

/**
 * Extract DOIs from text. Deduplicated, lowercased.
 */
export function extractDois(text) {
  if (!text || typeof text !== 'string') return [];
  const matches = text.matchAll(DOI_PATTERN);
  const found = new Set();
  for (const m of matches) {
    const doi = m[0].toLowerCase().replace(/[.,;:]+$/, '');
    found.add(doi);
  }
  return [...found];
}

/**
 * Convert an arXiv ID to its canonical abstract URL.
 */
export function arxivIdToUrl(id) {
  return `https://arxiv.org/abs/${id}`;
}

/**
 * Convert a DOI to a doi.org URL.
 */
export function doiToUrl(doi) {
  return `https://doi.org/${doi}`;
}

/**
 * Build a unified list of paper references from a parsed newsletter.
 *
 * Sources:
 *   - newsletter.links entries marked isPaper:true (from parser.js)
 *   - arXiv IDs found in newsletter.textContent
 *   - DOIs found in newsletter.textContent
 *
 * Returns: [{ url, title?, source }] deduplicated by URL.
 * `source` is "link" | "arxiv-id" | "doi" for traceability.
 */
export function collectPapers(newsletter) {
  const seen = new Map(); // url → ref
  const out = [];

  // 1) Direct paper URLs from extracted links
  for (const link of newsletter?.links || []) {
    if (link?.isPaper && link.url && !seen.has(link.url)) {
      const ref = { url: link.url, title: link.text || null, source: 'link' };
      seen.set(link.url, ref);
      out.push(ref);
    }
  }

  // 2) arXiv IDs in body text
  const text = newsletter?.textContent || '';
  for (const id of extractArxivIds(text)) {
    const url = arxivIdToUrl(id);
    if (!seen.has(url)) {
      const ref = { url, title: null, arxivId: id, source: 'arxiv-id' };
      seen.set(url, ref);
      out.push(ref);
    }
  }

  // 3) DOIs in body text
  for (const doi of extractDois(text)) {
    const url = doiToUrl(doi);
    if (!seen.has(url)) {
      const ref = { url, title: null, doi, source: 'doi' };
      seen.set(url, ref);
      out.push(ref);
    }
  }

  return out;
}

/**
 * Fetch arXiv metadata (title, authors) for an ID via the public API.
 * Returns null on any failure — non-fatal so summarization isn't blocked.
 */
export async function fetchArxivTitle(id) {
  try {
    const res = await fetch(`https://export.arxiv.org/api/query?id_list=${encodeURIComponent(id)}`, {
      signal: AbortSignal.timeout(5000)
    });
    if (!res.ok) return null;
    const xml = await res.text();
    const titleMatch = xml.match(/<entry>[\s\S]*?<title[^>]*>([\s\S]*?)<\/title>/);
    if (titleMatch) {
      return titleMatch[1].replace(/\s+/g, ' ').trim();
    }
    return null;
  } catch {
    return null;
  }
}
