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

## Development Status

This is a new project. Core decisions pending:
- Email provider and authentication method
- Summary delivery medium (web dashboard vs email vs messaging app)
- AI service selection (OpenAI, Anthropic, Gemini, local LLM)
- Database choice (SQLite, PostgreSQL, MongoDB, JSON)
- Hosting environment (local, cloud, home server)
