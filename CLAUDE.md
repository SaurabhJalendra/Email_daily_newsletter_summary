# Email Daily Newsletter Summary

## Stack
- **Language**: JavaScript (ES Modules)
- **Backend**: Node.js 20 pipeline (IMAP + OpenRouter AI + nodemailer)
- **Frontend**: Next.js 14 + Tailwind CSS + react-calendar
- **AI**: OpenRouter (Llama 3.3 70B) via OpenAI SDK
- **Storage**: JSON files in `data/summaries/` (committed to Git)
- **Hosting**: GitHub Actions (scheduler) + Vercel (dashboard)
- **Region**: Mumbai (BOM1)

## Architecture

Scheduled pipeline: GitHub Actions (midnight IST) triggers:
```
Email Fetcher (IMAP) → Parser (HTML→MD) → Summarizer (OpenRouter) → Storage (JSON) → Notifier (Gmail SMTP)
                                                                                    → Git commit → Vercel redeploy
```

Key files:
- `src/index.js` — Pipeline orchestrator
- `src/email/fetcher.js` — Gmail IMAP connection, sender filtering
- `src/email/parser.js` — HTML→Markdown via Turndown, link extraction
- `src/summarizer/openrouter.js` — Two-level AI summarization
- `src/database/storage.js` — JSON file persistence, date indexing
- `src/notifier/email.js` — HTML + plaintext email notifications
- `src/utils/config.js` — Centralized env config
- `dashboard/pages/index.js` — Next.js calendar + summary viewer

## Conventions
- ES Modules (`import`/`export`, `"type": "module"`)
- Class-based modules (EmailFetcher, SummaryStorage, etc.)
- Async/await for all I/O
- IST timezone throughout (`Asia/Kolkata`)
- Date format: `YYYY-MM-DD` for file naming and indexing
- No test framework — verify manually or via pipeline runs

## Key Commands

### Backend Pipeline
```bash
npm install          # Install dependencies
npm start            # Run summarization pipeline
npm run dev          # Watch mode
npm start -- --test  # Test mode (manual trigger)
npm run import       # Historical import
```

### Dashboard
```bash
cd dashboard && npm install && npm run dev    # Development
cd dashboard && npm run build                 # Production build
```

### GitHub Actions
```bash
gh workflow run "Daily Newsletter Summary"    # Manual trigger
gh run list --limit 5                         # Check recent runs
gh run view <id> --log-failed                 # Debug failures
```

## Important Considerations
- **No info loss**: Summarization prompts emphasize completeness — missing info is worse than verbosity
- **Sender filtering**: IMAP FROM substring match — domain filters (e.g., `@substack.com`) catch all senders on that domain
- **Page size**: Dashboard strips `originalContent` from props to stay under Vercel's 19 MB ISR limit
- **Rate limits**: 2-second delays between OpenRouter API calls; 5-second for historical imports
- **Secrets**: NEWSLETTER_SENDERS, OPENROUTER_API_KEY, EMAIL_APP_PASSWORD stored in GitHub Secrets

## Environment Variables (To Be Configured)

The project requires credentials and configuration to be set up:
- Email access credentials (IMAP settings or OAuth tokens)
- AI API keys for summarization service
- Timezone configuration (IST)
- Schedule timing (midnight IST)
- Delivery method configuration

## Implementation Details

### Email Fetching (src/email/fetcher.js)
- Uses IMAP to connect to Gmail
- Filters emails by sender addresses (configured in .env)
- Fetches newsletters since last summary date
- Handles connection errors and retries
- 30-second auth/connection timeouts
- Builds nested OR structure for IMAP search with multiple senders

### Content Parsing (src/email/parser.js)
- Converts HTML newsletters to clean Markdown using Turndown
- Extracts important links (filters out unsubscribe/tracking/social links)
- Handles both HTML and plain text newsletters
- Preserves formatting for better AI summarization
- Limits to top 10 links per newsletter

### AI Summarization (src/summarizer/openrouter.js)
- Uses OpenRouter with Llama 3.3 70B (via OpenAI SDK)
- Two-level summarization:
  1. Individual newsletter summaries (comprehensive, no info loss)
  2. Overall daily digest (categorized by topic: AI Models & Research, Tools & Products, Industry News, Resources & Learning)
- Prompts emphasize completeness - critical for user's AI updates
- 2-second delays between API calls to avoid rate limits

### Storage (src/database/storage.js)
- Saves summaries as JSON files (YYYY-MM-DD.json format)
- Maintains index.json for quick lookups
- Date formatting uses IST timezone (`en-CA` locale for ISO format)
- Easy to migrate to database later if needed
- Committed to Git for version control and Vercel access

### Email Notifications (src/notifier/email.js)
- Sends beautifully formatted HTML + plain text emails
- Uses nodemailer with Gmail SMTP (port 587)
- Includes daily overview and individual summaries
- Error notifications if pipeline fails
- Up to 5 links per newsletter in email

### Dashboard (dashboard/pages/index.js)
- Next.js 14 with static site generation (ISR: 3600s revalidation)
- Interactive calendar using react-calendar
- Markdown rendering with marked library
- Tailwind CSS for styling with custom primary color palette
- Strips originalContent from props to stay under Vercel ISR size limit
- prebuild script copies data/summaries/ into dashboard/data/summaries/

### Newsletter Discovery (src/utils/find-newsletters.js)
- Standalone utility to scan inbox for unconfigured newsletter senders
- Analyzes last 90 days of email
- Identifies newsletters by platform domains and AI/tech keywords
- Ranks by frequency — run with `node src/utils/find-newsletters.js`

### Historical Import (src/historical-import.js)
- Batch imports historical newsletters with `npm run import`
- Iterates day-by-day from start date, skips existing summaries
- 5-second delays between days to avoid rate limits

## Tech Stack Decisions Made

- Email provider: Gmail (IMAP + SMTP)
- Summary delivery: Web dashboard + Email notifications
- AI service: OpenRouter / Llama 3.3 70B (free tier)
- Database: JSON files (future: can migrate to PostgreSQL/MongoDB)
- Hosting: GitHub Actions (scheduler) + Vercel (dashboard)
- Vercel deploys via Git integration (not from GitHub Actions)

---

## Workflow Orchestration

### 1. Plan Mode Default
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately
- Use plan mode for verification steps, not just building

### 2. Subagent Strategy
- Offload research, exploration, and parallel analysis to subagents
- One task per subagent for focused execution
- **Fork** (omit subagent_type) when the child needs conversation context — reuses KV cache
- **Explore** for quick codebase searches — uses Haiku, skips CLAUDE.md, fast and cheap
- **Plan** for architecture exploration — read-only, thorough
- **general-purpose** for independent implementation work
- Never delegate understanding — synthesize findings yourself before dispatching

### 3. Skill Activation
Use project skills instead of doing things manually:
- `/explore` — map the codebase before working in unfamiliar areas
- `/research` — research before building anything new
- `/commit` — stage, review, and commit with good messages
- `/debug` — systematic reproduce → isolate → fix → verify
- `/review` — review code for bugs, security, quality
- **Superpowers**: `brainstorming` → `writing-plans` → `executing-plans` → `verification-before-completion`

### 4. Parallel Execution
- Batch Read/Grep/Glob calls in ONE message — parallel, up to 10 concurrent
- Use `run_in_background: true` for long Bash commands
- Dispatch multiple Explore agents simultaneously for parallel research
- Keep Bash output under 30K chars — pipe through head/tail

### 5. Context Management
- Run `/compact` manually before context gets large
- Use `/compact Preserve findings about [topic]` for guided compaction
- Save important findings to memory for future sessions
- Old tool results (20+ turns) get snipped — summarize key info yourself
- For long output: say "complete implementation" upfront (8K → 64K escalation)

### 6. Verification Before Done
- Never mark a task complete without proving it works
- Run tests, check logs, demonstrate correctness
- Dispatch `verifier` agent for adversarial testing on important changes
- Ask: "Would a staff engineer approve this?"

### 7. Self-Improvement
- After ANY correction: save the pattern to `tasks/lessons.md`
- Review lessons at session start
- Write rules that prevent the same mistake

### 8. Autonomous Execution
- Do NOT ask for permission to read files, search the web, or run safe commands
- Do NOT ask "would you like me to..." — just do it
- Only pause for: destructive git operations, sending external messages, spending money

---

## Auto-Triggers

### After Editing Code
- Run tests if they exist — report pass/fail
- Check if documentation references changed code — update if stale
- If 3+ tasks completed without verification, dispatch `verifier` agent

### Before Committing
- Review changes for bugs, security issues, convention violations
- Update CHANGELOG.md if it exists
- Use `/commit` skill for proper staging and commit message

### At Session Start
- Check `git status` and recent commits
- Read `tasks/lessons.md` for past learnings
- Report brief project status before starting work

### When Patterns Repeat
- If you do the same sequence 3+ times, create a skill for it
- Write SKILL.md to `.claude/skills/<name>/SKILL.md`
- Tell the user what you created

---

## Cache Optimization
- This file: static content first, variable content last
- Do NOT edit this file mid-session — busts the entire prompt cache
- Keep MCP server list stable within a session
- Fork subagents reuse parent's KV cache

---

## Memory System
- Save architecture decisions, user preferences, key findings, feedback
- Descriptive file names and one-line summaries in MEMORY.md index
- Don't save: code patterns from codebase, git history, ephemeral details

---

## Current Focus
- Daily newsletter pipeline running successfully via GitHub Actions
- Dashboard deployed on Vercel
- Recently added: NVIDIA, DeepLearning.AI, Cerebral Valley, Ollama newsletter senders
- Fixed: Vercel ISR oversized page error (stripped originalContent from props)
- Fixed: Removed Vercel deploy step from GitHub Actions (Vercel handles via Git integration)
