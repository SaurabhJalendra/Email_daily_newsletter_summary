# Changelog

All notable changes to this project are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed
- **`config/senders.txt` is now the authoritative sender list** (renamed from `extra-senders.txt`); the `NEWSLETTER_SENDERS` secret is only a fallback when the file is empty. Curated 2026-10-04 from 73 senders seen in the last 40 digests down to 26: research/depth newsletters (Import AI, Ahead of AI, Interconnects, Epoch AI, Deep Learning Focus, ...), one daily roundup (AINews/Latent Space) and TLDR. Daily hype roundups (Mindstream, Superhuman, Rundown, beehiiv lists, Skool) and stray matches (Stripe, Medium, Coursera) are gone.

### Fixed
- **Emails silently dropped while parsing** -- `fetchNewsletters` resolved on the IMAP fetch `end` event, before the async `simpleParser` callbacks finished, so slow-to-parse emails were lost (2026-10-04 test run: 17 found, 13 kept). It now waits for every parse (`Promise.all`).
- **IMAP "Could not parse command"** -- both runs since 2026-10-03 12:30 UTC failed after `extra-senders.txt` lengthened the sender list: one nested-OR `FROM` chain over every sender is too deep for Gmail. `src/email/fetcher.js` now searches in chunks of 15 senders and merges the UIDs.

### Changed
- Edition times moved **08:00/20:00 IST → 06:00/18:00 IST** (crons `30 0` + `30 12` UTC) for earlier delivery. (Note: GitHub scheduled triggers can fire 1–4h late under load — the cron time is the *intended* fire time, not guaranteed delivery.)

### Added
- **`config/extra-senders.txt`** — newsletter senders added on top of the `NEWSLETTER_SENDERS` secret (merged and de-duplicated in `src/utils/config.js`; an empty secret still means "fetch all"). The secret cannot be read back, so additions now live in a committed, editable file. First entries (2026-10-03, from a 30-day inbox scan): The Deep View, The Code (Superhuman), The Tokenizer (Art of Saience), INSEAD Knowledge.
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
