# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a daily newsletter summarization agent that:
- Fetches newsletters from email daily at 10 PM IST
- Generates AI-powered summaries of newsletters received since the last summary
- Stores summaries in a searchable database with day-wise organization
- Provides access to current and historical summaries

**Key Requirement**: Must capture ALL information from newsletters - user subscribes to AI newsletters and cannot miss any updates.

## Architecture

The system follows a scheduled pipeline architecture:

1. **Email Fetcher**: Connects to email provider via IMAP, filters newsletters by sender/subject
2. **Content Processor**: Extracts and cleans newsletter content (handles HTML, plain text, attachments)
3. **AI Summarizer**: Sends content to AI API for comprehensive summarization
4. **Storage Layer**: Persists summaries with timestamps, original emails, and metadata
5. **Delivery Interface**: Presents summaries via chosen medium (web dashboard/email/etc.)
6. **Scheduler**: Runs the pipeline daily at 10 PM IST, handles timezone-aware date boundaries

## Important Considerations

- **Newsletter Detection**: Filter criteria must be flexible enough to catch all newsletters while avoiding regular emails
- **Summarization Quality**: Prompts must emphasize completeness - no information should be lost in summarization
- **Date Boundary Handling**: Emails received after 10 PM IST should roll into next day's summary
- **Historical Access**: Day-wise indexing is critical for easy navigation of past summaries
- **Reliability**: System must handle email API rate limits, network failures, and retry failed operations

## Environment Variables (To Be Configured)

The project requires credentials and configuration to be set up:
- Email access credentials (IMAP settings or OAuth tokens)
- AI API keys for summarization service
- Timezone configuration (IST)
- Schedule timing (10 PM)
- Delivery method configuration

## Commands

### Backend Pipeline
```bash
# Install dependencies
npm install

# Run the summarization pipeline
npm start

# Run in development/watch mode
npm run dev

# Test mode (manual trigger)
npm start -- --test
```

### Dashboard
```bash
cd dashboard

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel
vercel --prod
```

### GitHub Actions
- Workflow runs automatically at 12 midnight IST (6:30 PM UTC)
- Manual trigger: Go to Actions → Daily Newsletter Summary → Run workflow
- Logs: Check Actions tab for execution details

## Implementation Details

### Email Fetching (src/email/fetcher.js)
- Uses IMAP to connect to Gmail
- Filters emails by sender addresses (configured in .env)
- Fetches newsletters since last summary date
- Handles connection errors and retries

### Content Parsing (src/email/parser.js)
- Converts HTML newsletters to clean Markdown using Turndown
- Extracts important links (filters out unsubscribe/tracking links)
- Handles both HTML and plain text newsletters
- Preserves formatting for better AI summarization

### AI Summarization (src/summarizer/gemini.js)
- Uses Google Gemini 1.5 Flash for cost-effective summarization
- Two-level summarization:
  1. Individual newsletter summaries (comprehensive, no info loss)
  2. Overall daily digest (categorized by topic)
- Prompts emphasize completeness - critical for user's AI updates

### Storage (src/database/storage.js)
- Saves summaries as JSON files (YYYY-MM-DD.json format)
- Maintains index for quick lookups
- Easy to migrate to database later if needed
- Committed to Git for version control and Vercel access

### Email Notifications (src/notifier/email.js)
- Sends beautifully formatted HTML + plain text emails
- Uses nodemailer with Gmail SMTP
- Includes daily overview and individual summaries
- Error notifications if pipeline fails

### Dashboard (dashboard/pages/index.js)
- Next.js 14 with static site generation
- Interactive calendar using react-calendar
- Markdown rendering with marked library
- Tailwind CSS for styling
- Deployed on Vercel with custom domain support

## Tech Stack Decisions Made

- ✅ Email provider: Gmail (IMAP + SMTP)
- ✅ Summary delivery: Web dashboard + Email notifications
- ✅ AI service: Google Gemini (free tier)
- ✅ Database: JSON files (future: can migrate to PostgreSQL/MongoDB)
- ✅ Hosting: GitHub Actions (scheduler) + Vercel (dashboard)
