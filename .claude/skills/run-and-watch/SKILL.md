---
name: run-and-watch
description: Trigger the Daily Newsletter Summary GitHub workflow manually, watch until completion, pull the latest commit, and report the new summary stats. Use when deploying pipeline changes or to manually refresh today's digest.
allowed-tools: [Bash]
---

# Run and Watch Pipeline

One-shot: trigger workflow → watch → pull → report.

## Steps

1. Trigger the workflow:
   ```bash
   gh workflow run "Daily Newsletter Summary"
   ```

2. Wait ~5 seconds, then get the latest run ID:
   ```bash
   sleep 5 && gh run list --workflow="Daily Newsletter Summary" --limit 1 --json databaseId,status --jq '.[0].databaseId'
   ```

3. Watch the run until completion (runs in background with run_in_background=true for long runs):
   ```bash
   gh run watch <RUN_ID> --exit-status
   ```

4. Check final status:
   ```bash
   gh run view <RUN_ID> --json status,conclusion --jq '.status + " " + .conclusion'
   ```

5. If successful, pull latest changes:
   ```bash
   git pull --rebase
   ```

6. Report stats on the newest summary JSON:
   ```bash
   node -e "
   const fs = require('fs');
   const files = fs.readdirSync('./data/summaries').filter(f => f.endsWith('.json') && f !== 'index.json').sort().reverse();
   const latest = files[0];
   const d = JSON.parse(fs.readFileSync('./data/summaries/' + latest, 'utf-8'));
   const stat = fs.statSync('./data/summaries/' + latest);
   console.log('New summary:', latest);
   console.log('Size:', (stat.size/1024).toFixed(1), 'KB');
   console.log('Newsletters:', d.totalNewsletters);
   console.log('TLDR bullets:', (d.tldr||[]).length);
   const pri = { HIGH: 0, MEDIUM: 0, LOW: 0 };
   for (const nl of d.newsletters) pri[nl.priority || 'MEDIUM']++;
   console.log('Priorities: HIGH=' + pri.HIGH + ' MED=' + pri.MEDIUM + ' LOW=' + pri.LOW);
   console.log('Research findings:', d.researchFindings ? 'YES (' + (d.researchFindings.missingStories||[]).length + ' stories)' : 'none');
   "
   ```

7. If failed, get the last 50 lines of failure logs:
   ```bash
   gh run view <RUN_ID> --log-failed 2>/dev/null | tail -50
   ```

## Rules
- If the workflow takes >10 min, use `run_in_background: true` for the watch command — do NOT sleep/poll
- If the run fails, ALWAYS pull the error logs and diagnose — don't just report "failed"
- Do NOT trigger multiple workflow runs back-to-back (one at a time)
- After a successful run, the newly-committed summary is visible in `data/summaries/`
