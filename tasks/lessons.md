# Lessons Learned

Self-improvement log — patterns to remember across sessions.

## 2026-06-03 — Daily workflow failing on wiki ingestion (doom loop)

**Symptom:** "Daily Newsletter Summary" workflow red for days (since ~2026-05-29), yet emails/summaries were still arriving. Last `wiki: ingest` commit was missing for weeks.

**Root cause:** The daily `Wiki ingestion via Claude Code` step ingested *every summary newer than the last-ingested date in `wiki/log.md`*. The watermark was stuck at 2026-04-16 (a 46-day backlog), which blew past `--max-turns 30` → step exited 1. Because the wiki commit step was `if: success()`, partial progress was discarded → watermark never advanced → backlog grew +1/day. And because the ingest step was *not* `continue-on-error`, it marked the whole run red even though the email had already shipped.

**Fix:**
- Bounded the daily ingest to **only the single newest summary file** (today's). Historical gaps are expected and are cleared by the separate, manually-dispatched `Backfill Wiki` workflow (`--max-turns 500`, batched).
- Added `continue-on-error: true` to the daily wiki ingestion step so a wiki hiccup never marks the run red (email/summary already shipped by then). `continue-on-error` keeps the step *conclusion* = success, so the downstream `if: success()` commit step still lands partial progress.
- Bumped daily `--max-turns` 30 → 50 for headroom on heavy days.

**Rule:** A secondary, best-effort step (wiki, analytics, etc.) must never (a) be unbounded in work, or (b) gate the overall run status. Bound the work AND mark it `continue-on-error`.
