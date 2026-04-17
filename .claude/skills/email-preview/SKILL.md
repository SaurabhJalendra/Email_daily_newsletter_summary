---
name: email-preview
description: Generate the HTML email from the latest summary JSON, save it, report size vs Gmail 102KB clipping threshold and key rendering metrics. Use after any change to src/notifier/email.js or when verifying email output looks correct.
allowed-tools: [Read, Bash, Write]
---

# Email Preview

Render the current email template against the latest summary JSON and report whether it will clip in Gmail.

## Steps

1. Find the most recent summary JSON (highest date):
   ```bash
   ls -1t data/summaries/*.json | head -5
   ```

2. Run the email generator and write HTML to `/tmp/email-preview.html`:
   ```bash
   node --experimental-vm-modules -e "
   import('./src/notifier/email.js').then(async mod => {
     const fs = await import('fs/promises');
     const files = (await fs.readdir('./data/summaries'))
       .filter(f => f.endsWith('.json') && f !== 'index.json').sort().reverse();
     const latest = files[0];
     const data = JSON.parse(await fs.readFile('./data/summaries/' + latest, 'utf-8'));
     const { EmailNotifier } = mod;
     const n = Object.create(EmailNotifier.prototype);
     const ds = new Date(data.date).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
     const dp = new Date(data.date).toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });
     const html = n.generateHtmlEmail(data.summary, data.newsletters, data.totalNewsletters, ds, dp, data.tldr, data.researchFindings);
     await fs.writeFile('/tmp/email-preview.html', html, 'utf-8');
     const kb = (html.length/1024).toFixed(1);
     const status = html.length < 102*1024 ? 'PASS' : 'FAIL (will be clipped)';
     console.log('Source:', latest);
     console.log('HTML size:', html.length.toLocaleString(), 'bytes (' + kb + ' KB)');
     console.log('Gmail threshold: 102 KB');
     console.log('Clipping check:', status);
     console.log('File written: /tmp/email-preview.html');
     // Metrics
     const m = {
       HIGH: (html.match(/card-high/g) || []).length - 1,  // -1 for CSS rule
       MED: (html.match(/card-med/g) || []).length - 1,
       LOW: (html.match(/card-low/g) || []).length - 1,
       trackingUrls: (html.match(/link\\.mail\\.beehiiv\\.com|tracking\\.tldrnewsletter\\.com|journalclub\\.io\\/track|link\\.skool\\.com|app\\.alphasignal\\.ai\\/c/g) || []).length,
       clickableLinks: (html.match(/<a href=/g) || []).length,
       nonClickableUrls: (html.match(/class=\"md-strong\"/g) || []).length
     };
     console.log('Priorities: HIGH=' + m.HIGH + ' MED=' + m.MED + ' LOW=' + m.LOW);
     console.log('Tracking URLs in HTML:', m.trackingUrls);
     console.log('Clickable <a> tags:', m.clickableLinks);
     console.log('Non-clickable (stripped URLs):', m.nonClickableUrls);
   });
   "
   ```

3. Report results. Flag any of these as issues:
   - HTML size > 102 KB (will clip)
   - Tracking URLs > 0 in rendered output
   - All newsletters rated HIGH (priority not discriminating)
   - Zero newsletters rated LOW (promotional content not filtered)

4. Optionally open in browser if user asks:
   ```bash
   start /tmp/email-preview.html  # Windows
   ```

## Rules
- Always run against the LATEST summary JSON unless user specifies a date
- Do NOT send a real email — this is preview-only
- Keep the metrics table short (size + priority distribution + link counts)
