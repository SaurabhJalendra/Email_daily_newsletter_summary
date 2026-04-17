---
name: summary-audit
description: Audit recent newsletter summaries for quality issues — spam/promotional content leaking through, tracking URLs, priority distribution, non-AI content, missing fields. Use when user suspects summary quality has degraded or to verify improvements after code changes.
allowed-tools: [Read, Bash, Glob]
---

# Summary Quality Audit

Analyze the last N daily summaries (default 5) and report quality issues.

## Steps

1. Find the N most recent summaries:
   ```bash
   ls -1t data/summaries/*.json | grep -v index.json | head -5
   ```

2. For each, run this analysis:
   ```bash
   node -e "
   const fs = require('fs');
   const files = process.argv.slice(1);
   for (const f of files) {
     const d = JSON.parse(fs.readFileSync(f, 'utf-8'));
     console.log('\\n=== ' + f + ' ===');
     console.log('Newsletters:', d.totalNewsletters, '| TLDR bullets:', (d.tldr||[]).length, '| Research:', d.researchFindings ? 'YES' : 'NO');

     // Priority distribution
     const pri = { HIGH: 0, MEDIUM: 0, LOW: 0, NONE: 0 };
     for (const nl of d.newsletters) pri[nl.priority || 'NONE']++;
     console.log('Priority: HIGH=' + pri.HIGH + ' MED=' + pri.MEDIUM + ' LOW=' + pri.LOW + ' NONE=' + pri.NONE);

     // Known spam senders
     const spamSenders = ['thetechbuzz', 'Real Intent', 'Superagent webinar'];
     const spam = d.newsletters.filter(nl =>
       spamSenders.some(s => (nl.from + nl.subject).toLowerCase().includes(s.toLowerCase()))
     );
     if (spam.length) console.log('⚠️  Spam/promo newsletters present:', spam.map(s => s.subject).join(', '));

     // Tracking URLs in links arrays
     let tracking = 0;
     for (const nl of d.newsletters) {
       for (const l of (nl.links || [])) {
         if (/link\\.mail\\.beehiiv|tracking\\.tldrnewsletter|journalclub\\.io\\/track|link\\.skool\\.com|app\\.alphasignal\\.ai\\/c/.test(l.url)) tracking++;
       }
     }
     if (tracking > 0) console.log('⚠️  Tracking URLs in links arrays:', tracking);

     // Tracking URLs in summary text
     let trackingInText = 0;
     for (const nl of d.newsletters) {
       const matches = (nl.summary || '').match(/\\]\\((https?:\\/\\/[^)]+)\\)/g) || [];
       for (const m of matches) {
         if (/link\\.mail\\.beehiiv|tracking\\.tldrnewsletter|journalclub\\.io\\/track|link\\.skool\\.com|app\\.alphasignal\\.ai\\/c/.test(m)) trackingInText++;
       }
     }
     if (trackingInText > 0) console.log('⚠️  Tracking URLs in summary markdown:', trackingInText);

     // Missing fields
     const missingPriority = d.newsletters.filter(nl => !nl.priority).length;
     const missingLinks = d.newsletters.filter(nl => !Array.isArray(nl.links)).length;
     if (missingPriority) console.log('⚠️  Newsletters without priority field:', missingPriority);
     if (missingLinks) console.log('⚠️  Newsletters without links array:', missingLinks);

     // All HIGH = priority not discriminating
     if (pri.HIGH > d.newsletters.length * 0.6) {
       console.log('⚠️  Over 60% HIGH priority — priority filter may not be strict enough');
     }
     if (pri.LOW === 0) {
       console.log('⚠️  Zero LOW priority — promotional content may be misrated');
     }

     // Summary word counts
     const wc = d.newsletters.map(nl => (nl.summary||'').split(/\\s+/).length);
     const avg = Math.round(wc.reduce((a,b)=>a+b,0) / wc.length);
     const max = Math.max(...wc);
     console.log('Summary length — avg:', avg, 'words, max:', max, 'words');
   }
   " data/summaries/2026-04-17.json data/summaries/2026-04-16.json  # UPDATE these to actual file paths
   ```

3. Summarize findings across all days. Report:
   - Systemic issues (same problem on multiple days)
   - Day-specific issues (one-off)
   - Trends (priority distribution drifting, tracking URLs increasing)

## Rules
- Always report specific subjects/senders when flagging spam, not just counts
- Only flag as issue if pattern repeats across ≥2 days (single occurrences are noise)
- Do NOT modify any files — this is a read-only audit
