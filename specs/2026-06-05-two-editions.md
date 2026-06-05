# Spec: Two daily editions (Morning + Evening)

**Date:** 2026-06-05
**Status:** Building
**Author:** Saurabh (with Claude)

## Goal

Replace the single midnight digest with **two time-windowed editions per day** so AI news arrives twice daily instead of one overnight dump:

- **Morning edition** — 08:00 IST — covers everything that arrived since the previous evening run (the overnight US-daytime bulk).
- **Evening edition** — 20:00 IST — covers everything since the morning run (the IST-daytime mail).

Primary motivation is **timeliness**. (Email clipping is *already* solved — the notifier sends a <20 KB scannable body plus the full digest as a PDF attachment — so this is not a size fix.)

## Non-goals

- No change to summarization quality, research agent, or PDF rendering.
- No backfill of historical days into two editions — existing single-edition days stay as-is.
- Not touching the QA step's content checks (separate cleanup).

## Core problem: the watermark

Today the pipeline decides "what to fetch next" from **filenames** (`storage.getLastSummaryDate()`), and the IMAP `SINCE` filter is **date-granular only**. Neither can separate a morning run from an evening run on the same calendar day — a second same-day run would re-fetch the morning's mail.

**Fix:** a precise **timestamp watermark**.

- Stored in `data/summaries/index.json` under reserved key `__lastRunAt` (index.json is write-only today — nothing reads its date keys — so this adds no new listing exclusions).
- Each run captures `runStartTime` before fetching. On successful save, `__lastRunAt = runStartTime`.
- Fetch = IMAP `SINCE date(watermark)` (coarse) **then post-filter** `email.date > watermark` (precise). The post-filter is the only thing that actually splits the two windows.
- First run ever (no watermark) → last 12 hours.
- Empty runs (0 newsletters) do **not** advance the watermark (current early-exit behavior), so nothing is skipped.

## Edition resolution

`index.js` resolves the edition, in priority order:
1. `--edition=morning|evening` CLI arg, or `EDITION` env var.
2. Otherwise from IST hour: `hour < 14` → `morning`, else `evening`.

The GitHub workflow computes the edition from the IST hour and passes `EDITION=` explicitly so the app and the commit message agree.

## Storage schema

- Filename: `YYYY-MM-DD-<edition>.json` (e.g. `2026-06-05-morning.json`). When no edition is passed (historical-import), keep legacy `YYYY-MM-DD.json`.
- Each summary JSON gains an `edition` field (`"morning" | "evening"`; absent on legacy files).
- `date` stays IST midnight (unchanged) → `dateString` stays `YYYY-MM-DD`, so the calendar still keys by day.
- `savedAt` (run time, already present) is used for **intra-day ordering** (evening sorts after morning).
- `index.json`: `index["YYYY-MM-DD-<edition>"] = { count, edition, updatedAt }` + `index.__lastRunAt`.

## Notifier

- Subject: `📰 Your AI Newsletter Digest (Morning) - <date>` / `(Evening)`; no parens when edition absent.
- Header date line + PDF cover get the edition label.
- PDF filename: `digest-<date>-<edition>.pdf`.

## GitHub Actions

- Two crons replace the single one:
  - `30 2 * * *` → 08:00 IST → morning
  - `30 14 * * *` → 20:00 IST → evening
- A step computes `EDITION` from `TZ=Asia/Kolkata date +%H` and exports it to `npm start` and the commit message (`Add <edition> summary for <date>`).
- `workflow_dispatch` gains an optional `edition` input for manual runs.
- Wiki ingestion: change "newest by date" → "most recently modified summary file not already in `wiki/log.md`" so it picks the edition just produced (two same-date files).

## Dashboard

- `getStaticProps`: sort by `savedAt || date` desc; keep stripping `originalContent`.
- Group summaries by `dateString`. Selecting a calendar day renders **all editions for that day**, each with a Morning/Evening (or "Daily" for legacy) badge, in chronological order.
- "Days Archived" counts **distinct dates**, not files.
- Fully backward-compatible: legacy single-edition days render unchanged.

## Backward compatibility

- Legacy `YYYY-MM-DD.json` files (no `edition`) keep rendering; treated as a single "Daily" edition.
- `savedAt` exists on all historical files, so dashboard ordering works for old data.
- `historical-import.js` is unchanged (calls `saveSummary` with no edition → legacy filename).

## Cost note

Two runs/day doubles the per-run Opus Claude Code steps (wiki ingest + QA), ~2× that token cost. OpenRouter summarization volume is roughly unchanged (same newsletters, split across two runs).

## Verification

- Local unit-style check of `saveSummary`/`getWatermark`/edition resolution against a temp dir (no email/API side effects).
- `cd dashboard && npm run build` to confirm the UI compiles.
- Full pipeline verified on the first real cron run (sends real email + spends API) — watched via the `run-and-watch` skill.
