# Wiki Schema — AI Newsletter Knowledge Base

This is the schema file. It tells you (the LLM) exactly how to read, write, and maintain this wiki. Follow these rules precisely.

## Purpose

This wiki is a **persistent, evolving knowledge base** built from daily AI/tech newsletter summaries. The user (Saurabh, AI/ML engineer) reads 40+ newsletters per day. Individual summaries sit in `data/summaries/YYYY-MM-DD.json` (raw sources, immutable). **Your job is to synthesize across them** — turning a stream of isolated daily news into a structured, queryable knowledge base.

## Three-Layer Architecture

```
data/summaries/          Raw sources (JSON per day). IMMUTABLE. Never edit.
wiki/                    Your workspace. Write freely.
WIKI.md (this file)      Schema. Read on every run. Do not modify unless asked.
```

## Directory Structure

```
wiki/
├── WIKI.md              This file
├── index.md             Catalog of all wiki pages, grouped by section
├── log.md               Append-only chronological changelog of wiki edits
├── companies/           One page per organization (Anthropic, OpenAI, Google, NVIDIA, Meta, Mistral, xAI, etc.)
├── products/            One page per product/model (Claude 4, GPT-5, Gemini, Llama 4, Cursor, Cline, etc.)
├── topics/              One page per technical topic (agent-frameworks, mcp, rag, long-context, multimodal, etc.)
└── trends/              One page per cross-cutting trend (funding-rounds, regulation, open-vs-closed, pricing, etc.)
```

## Three Operations

### 1. INGEST (run daily after new summary is saved)

**Trigger**: A new file `data/summaries/YYYY-MM-DD.json` exists that has not yet been ingested (check `log.md` for last ingested date).

**Steps**:
1. Read `WIKI.md` (this file) first
2. Read `wiki/index.md` to see current wiki state
3. Read the new summary JSON
4. For each newsletter in `summaryData.newsletters`:
   - Identify entities mentioned: companies, products, topics, trends
   - For each entity: update (or create) the corresponding wiki page
   - A single newsletter typically touches **3–8 wiki pages**
5. Update `wiki/index.md` if new pages were created
6. Append one entry to `wiki/log.md` (format below)
7. Commit message: `wiki: ingest YYYY-MM-DD` (use `Co-Authored-By: Claude Code`)

**Key rule**: Touch 10–15 pages per daily ingest. If you're only touching 1–2, you're missing cross-references.

### 2. QUERY (on-demand, user triggers)

**Trigger**: User runs a workflow with a question, OR asks interactively.

**Steps**:
1. Read WIKI.md and index.md
2. Read the relevant wiki pages (pick via index.md, don't search all files)
3. Compose an answer grounded in the wiki
4. Save the answer as `wiki/queries/YYYY-MM-DD-<slug>.md`
5. Add to index.md under "Queries"
6. Append to log.md

### 3. LINT (weekly, Sunday)

**Trigger**: Weekly GitHub Actions workflow.

**Steps**:
1. Read all wiki pages
2. Detect and fix:
   - **Contradictions**: "GPT-5 launched in March" on one page, "GPT-5 launched in April" on another. Resolve with source check.
   - **Orphan pages**: Pages not referenced by any other page. Either add cross-references or merge.
   - **Stale pages**: Pages with no updates in >60 days marked with `> **Status**: stale`.
   - **Duplicate pages**: Same topic under two names. Merge and redirect.
3. Regenerate `index.md` from directory listing
4. Generate `wiki/digests/YYYY-WW.md` — weekly digest summarizing that week's ingests from `log.md`
5. Commit as `wiki: weekly lint for YYYY-WW`

---

## Page Format

Every wiki page follows this template:

**OKF frontmatter is REQUIRED on every page** (Open Knowledge Format v0.1): YAML frontmatter with a **flat top-level `type:`** field. Write `type: product` directly — **NOT** nested under `metadata:`. Reserved files (`index.md`, `log.md`, `WIKI.md`) are exempt.

```markdown
---
name: <Page Title>
description: <one-line evergreen description of the entity>
type: company | product | topic | trend | digest
---

# <Page Title>

> **Type**: company | product | topic | trend
> **First mentioned**: YYYY-MM-DD
> **Last updated**: YYYY-MM-DD
> **Status**: active | stale | deprecated
> **Related**: [[other-page]], [[another-page]]

## Summary
<1–2 paragraph evergreen description. Updated, not appended.>

## Timeline
- **YYYY-MM-DD**: <Event> — *source: [newsletter subject](link if available)*
- **YYYY-MM-DD**: <Event> — *source: ...*
(newest at top, oldest at bottom)

## Key Facts
- <Stable facts — benchmarks, architecture, pricing, team size, etc.>
- <Updated when facts change; delete outdated ones>

## Open Questions
- <Things the newsletters haven't clarified yet>

## Sources
- data/summaries/2026-04-16.json (newsletter: AlphaSignal — Subject)
- data/summaries/2026-04-15.json (newsletter: TAAFT — Subject)
```

## Style Rules

1. **Prose over lists** in the Summary section — readable, not bullet-point-only
2. **Lists with dates** in Timeline — newest first
3. **Cross-references** use `[[page-name]]` syntax (without `.md`). When ingesting, always add cross-refs both ways.
4. **Never duplicate content** across pages — extract to a topic page and link
5. **Cite sources** — every claim ties back to a specific `data/summaries/YYYY-MM-DD.json` file
6. **Use consistent naming**: kebab-case filenames (`claude-code.md`, not `Claude_Code.md` or `ClaudeCode.md`)

## Naming Conventions

- **Companies**: legal/common name lowercased, kebab-case — `anthropic.md`, `google-deepmind.md`, `hugging-face.md`
- **Products**: product name — `claude-code.md`, `gpt-5.md`, `gemini-3-flash-tts.md`
- **Topics**: descriptive phrase — `agent-frameworks.md`, `model-context-protocol.md`, `long-context-scaling.md`
- **Trends**: plural noun phrase — `ai-funding-rounds.md`, `open-source-models.md`, `ai-regulation.md`

## What Goes Where

| If the newsletter mentions... | Update this page |
|-------------------------------|------------------|
| A company name | `companies/<name>.md` |
| A product/model/tool release | `products/<name>.md` |
| A technical concept (e.g., "RAG", "agents") | `topics/<concept>.md` |
| A pattern across multiple stories (funding surge, regulatory move) | `trends/<pattern>.md` |

**One story often touches all four**: "Anthropic releases Claude 4 agents" → updates `companies/anthropic.md`, `products/claude-4.md`, `topics/agent-frameworks.md`, and possibly `trends/ai-product-cadence.md`.

## log.md Format

Append-only. Each entry:

```markdown
## 2026-04-17
**Ingested**: data/summaries/2026-04-17.json (17 newsletters)

**Pages updated**:
- [[anthropic]] — added Claude Code Routines launch
- [[openai]] — added GPT-5.4-Cyber release
- [[claude-code]] — added always-on routines feature
- [[gpt-5-cyber]] — created new page
- [[agent-frameworks]] — added Routines as example
- [[ai-cybersecurity]] — new trend section

**Pages created**: [[gpt-5-cyber]]

**Notable**: OpenAI's Trusted Access tiered identity program is a pattern — watch for copycats.
```

## Scope Limits (Important)

1. **Only AI/ML/dev-tools content** — exclude crypto, consumer tech, general business news unless AI-relevant
2. **Don't page-ify ephemera** — a webinar invitation is not a page. Only create pages for content with lasting relevance (>30 day expected relevance)
3. **Don't create pages for individuals unless they're a central figure** — "Andrej Karpathy" yes, "VP of Marketing at Company X" no
4. **Keep `timeline` entries concise** — one line each. If more detail is needed, link to the source JSON.

## First Principles

> The wiki is for cross-day synthesis. If the info is fully captured in one daily summary and you'd never want to look it up again, don't page-ify it.

> A well-maintained wiki means: someone asking "what happened with Claude Code in March?" gets a coherent answer in 30 seconds by reading `products/claude-code.md`, not by grepping 30 JSON files.

> Treat the wiki as a living document. Summaries stay concise as facts evolve — don't turn the Summary section into a timeline.
