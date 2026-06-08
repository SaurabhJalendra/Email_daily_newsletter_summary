# Changelog

All notable changes to this project are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed
- Edition times moved **08:00/20:00 IST → 06:00/18:00 IST** (crons `30 0` + `30 12` UTC) for earlier delivery. (Note: GitHub scheduled triggers can fire 1–4h late under load — the cron time is the *intended* fire time, not guaranteed delivery.)

### Added
- **Two daily editions** — the digest now runs twice a day: a **Morning** edition and an **Evening** edition, each covering only what arrived since the previous run. Motivated by timeliness (clipping was already handled by the short-body + PDF email).
- Precise **timestamp watermark** (`index.json` → `__lastRunAt`) so two same-day runs don't overlap; IMAP `SINCE` results are post-filtered on each email's received time to split the windows.
- Edition labels in the email subject/header/PDF filename and an edition badge in the dashboard.
- `specs/2026-06-05-two-editions.md` documenting the design.

### Changed
- Storage filenames are now `YYYY-MM-DD-<edition>.json` (legacy `YYYY-MM-DD.json` still supported for historical imports).
- `daily-summary.yml` runs on two crons (`30 2` + `30 14` UTC) and derives the edition from the IST hour; `workflow_dispatch` gains an optional `edition` input.
- Dashboard groups summaries by day and shows both editions for the selected date, ordered morning → evening.
- Daily wiki ingestion now targets the exact file this run produced (was: "newest by date").

### Fixed
- Daily wiki ingestion doom loop: it ingested the entire backlog (watermark stuck at 2026-04-16), overran `--max-turns`, discarded progress, and reddened every run. Bounded to one file + `continue-on-error`.
