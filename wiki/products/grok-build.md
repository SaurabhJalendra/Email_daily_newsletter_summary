---
name: Grok Build
description: xAI's CLI coding agent for SuperGrok Heavy subscribers — plan mode, subagents, headless automation (May 2026)
type: product
---

# Grok Build

> **Type**: product
> **First mentioned**: 2026-05-15
> **Last updated**: 2026-07-15-evening (**Cycle-2 evening cross-tier escalation — full repos with "secrets and all" uploaded to cloud bucket despite privacy toggle turned off + SpaceXAI publicly commits to deleting uploaded customer data + user-side incident-response guidance (rotate API keys / tokens / DB passwords immediately)**)
> **Status**: active
> **Related**: [[xai]], [[spacex]], [[claude-code]], [[openai-codex]], [[antigravity-2]], [[cursor]], [[agent-frameworks]], [[gpt-5-6]]

## Summary

Grok Build is [[xai]]'s CLI coding agent for SuperGrok Heavy subscribers, launched in early-beta on 2026-05-15. Installable via a simple curl command, it offers plan mode (review or adjust each step before changes apply as clean diffs), subagents for parallel work, deep worktree integrations for managing multi-branch sessions, and headless mode for easy automation. Positions xAI in the coding-agent CLI category alongside [[claude-code]], [[openai-codex]], and Google's [[antigravity-2]] CLI. Lands during the same cycle in which xAI is reframed as "SpaceXAI" — Elon Musk's announcement that xAI will dissolve and integrate into [[spacex]] as a new division handling all AI projects (X social network, Grok, world models), branding them under SpaceX for streamlined vertical integration.

## Timeline

- **2026-07-15-evening**: **Cycle-2 evening escalation — Grok Build ships whole repositories including committed secrets to xAI/SpaceXAI-controlled cloud bucket *despite the privacy toggle being turned off*; SpaceXAI commits to deleting uploaded customer data; users advised to rotate API keys, tokens, DB passwords immediately**. World of AI HIGH: ***"xAI's Grok Build was caught uploading entire code repositories, including secrets, to a cloud bucket, despite the privacy toggle being turned off"*** + ***"security researchers caught xAI's Grok Build shipping developers' entire repositories, committed secrets and all, to a cloud bucket"*** + ***"Users are advised to rotate their API keys, tokens, and database passwords immediately"***. The Rundown AI MEDIUM: ***"SpaceXAI is deleting uploaded customer data after a researcher discovered that the company's Grok Build coding agent was shipping whole repositories to a company-controlled cloud"***. Escalates the 2026-07-15-morning framing three ways: (a) *privacy-toggle-off-yet-repo-uploaded* — the user-facing privacy control was **non-functional**, materially worse than the morning-cycle *undisclosed-collection* framing; (b) *"secrets and all"* explicit-secret-inclusion — committed secrets in tracked git history exfiltrated alongside source; (c) *SpaceXAI vendor-side deletion + zero-retention commitment* — first publicly framed *post-incident vendor-side damage-control template* on Grok Build. Structural implication: reads as either UX-bug (toggle didn't route through to backend) or affirmative-misrepresentation; both have contract-law + regulatory-tier consequences. Twin-cycle with [[gpt-5-6]] Sol rm -rf code-deletion incident positions coding-agent safety-failures as the *load-bearing 2026-H2 industry-risk narrative*. Same-cycle: [[openai-companion]] first device sketch + [[hassabis]] AI Standards Body Framework + [[claude-for-teachers]] launch — *source: data/summaries/2026-07-15-evening.json (World of AI HIGH "GPT-5.6 Is DELETING Code 🗑️ + Grok's Uploading It 👀"; The Rundown AI MEDIUM "🗺️ Demis Hassabis' blueprint for AI regulation")*

- **2026-07-15-morning**: **Grok Build CLI transmits entire repositories to xAI unredacted — including files the agent never reads, potentially for training purposes**. TLDR AI MEDIUM: ***"xAI's Grok Build CLI transmits the contents of the files it reads to xAI verbatim and unredacted. It uploads whole repositories independent of what the agent reads"***. First publicly framed *repository-scoped data-egress beyond agent task scope* on Grok Build in this wiki. Positions Grok Build as *training-data-optimized rather than enterprise-privacy-optimized* — structurally incompatible with regulated-enterprise procurement (contrasted with [[claude-code]] + [[openai-codex]] + [[cursor]] load-bearing privacy-of-source-code + no-train-on-user-code commitments). Same-cycle: [[nvidia]]-[[groq]] $20B deal narrated origin story + [[anthropic]] 20-language personality study — *source: data/summaries/2026-07-15-morning.json (TLDR AI MEDIUM "xAI uploads codebases 👨‍💻, Prime Intellect verifiers 🧠, Sakana smart bricks 🧱")*

- **2026-06-02**: **grok-build-0.1 public API beta launches** — Grok Build's first publicly priced API: **$1/M input + $2/M output tokens** (sub-Opus / sub-GPT-5.5 entry-price-positioning for agentic coding); designed for autonomous planning, writing, refactoring, iterating on code across multi-step tasks; AlphaSignal frames as the explicit low-cost entry to the agentic coding category that puts pricing pressure on [[claude-code]] / Codex; same cycle: **Wispr Flow CTO** hasn't written code since December 2025, AI ships 90% serving 1M+ users (cross-tool agent-replaces-engineer data point) — *source: 2026-06-02 cycle (AlphaSignal — xAI grok-build-0.1 public API $1/M input + $2/M output; AI Breakfast — grok-build-0.1 beta autonomous coding pricing; TLDR AI — grok-build-0.1)*
- **2026-05-27**: **Grok Build opens to all SuperGrok and X Premium+ subscribers** in beta — graduates from the 2026-05-15 SuperGrok Heavy-only beta to broad subscriber availability; The Rundown AI and The Code coverage emphasizes the **plans-before-execute** UX (Grok Build shows the plan, lets the developer review or rewrite before execution) and **hand-off to parallel sub-agents** for bigger tasks — positions Grok Build as the explicit plan-then-execute competitor to [[claude-code]] (which got `/usage` + 125+ settings the same week) and [[openai-codex]] (which gained 4M weekly users + Mac cleanup tool + 10% third-party-platform routing same week); same cycle Musk announces **Grok V9-Medium (1.5T params) finished training**, designed for harder coding tasks, public release in 2–3 weeks — *source: 2026-05-27 cycle (The Rundown AI — xAI Grok Build to all SuperGrok and X Premium+ + Grok V9-Medium training complete; The Code — Grok Build opens to subscribers / plans-before-execute + parallel sub-agents)*
- **2026-05-16**: Grok Build coverage continues — features like plan mode and subagents emphasized; xAI exodus to Meta / Thinking Machines surfaces same cycle — *source: 2026-05-16 cycle (TLDR AI — Grok Build + Codex customizations + xAI exodus; The Code — You can now access Codex on phone + Grok Build)*
- **2026-05-15**: Grok Build launches as early beta for SuperGrok Heavy subscribers — curl install, plan mode, subagents, worktree integrations, headless mode; xAI announced as dissolving into SpaceXAI (SpaceX AI division) — *source: 2026-05-15 cycle (TLDR AI — Grok Build; The Rundown AI — OpenAI's Codex escapes the desktop; The Code — You can now access Codex on phone)*

## Key Facts

- Vendor: [[xai]] (becoming SpaceXAI)
- Distribution: curl install for SuperGrok Heavy subscribers
- Features: plan mode (diff review), subagents, worktree integrations, headless automation
- Competes with [[claude-code]], [[openai-codex]], [[antigravity-2]] CLI
- Launches same week as xAI → SpaceXAI division merge announcement
- Reports of significant talent exodus from xAI/SpaceXAI to Meta and Thinking Machines in coding/world-models/voice teams

## Open Questions

- Pricing — included free with SuperGrok Heavy or metered separately?
- Will the SpaceXAI rebrand change Grok Build's positioning vs Cursor (which SpaceX has $60B acquisition option on)?
- Headless-mode integration paths for CI / cron — concrete examples?

## Sources

- data/summaries/2026-05-15.json (TLDR AI — Grok Build; The Rundown AI; The Code; TLDR — Apple vs OpenAI)
- data/summaries/2026-05-16.json (TLDR AI; The Code)
- data/summaries/2026-05-27.json (The Rundown AI — Grok Build to all SuperGrok / X Premium+ + Grok V9-Medium 1.5T training complete; The Code — Grok Build opens / plans-before-execute + parallel sub-agents)
