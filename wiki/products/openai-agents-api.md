---
name: OpenAI Agents API
description: OpenAI's public-beta developer API bringing the Codex harness — context management, tool use, subagent coordination, multi-day agent reliability, and environments where agents work with files, run code, and save intermediate results — to third-party developers (Sep 2026)
type: product
---

# OpenAI Agents API

> **Type**: product
> **Vendor**: [[openai]]
> **First mentioned**: 2026-09-11-evening
> **Last updated**: 2026-09-11-evening
> **Status**: public beta
> **Related**: [[openai]], [[chatgpt-work]], [[openai-presence]], [[claude-managed-agents]], [[openai-astra]], [[agent-frameworks]], [[agent-harness]], [[loop-engineering]]

## Summary

**OpenAI Agents API** is the developer-facing public-beta API surface for OpenAI's Codex agent harness — the same infrastructure that powers ChatGPT Work / Codex internally now exposed for developers to build long-running, reliable, multi-tool agents on. The API bundles four canonical primitives: **context management** (automated prompt/state assembly across turns), **efficient tool use** (auto-selection and invocation of tools without prompt-engineering-heavy routing), **subagent coordination** (spawning and orchestrating child agents), and **multi-day reliability** (infrastructure to keep agents running for days without loss). Developers also get **execution environments** where agents can work with files, run code, and save intermediate results — a first-party sandbox tier instead of build-your-own-VM.

Structurally, the Agents API graduates OpenAI from *ChatGPT-Work-first-party productization* into a *developer-platform-tier canonical substrate* — parallel to [[claude-managed-agents]] from Anthropic and [[vercel-eve]]/[[flue]] third-party framework layers, but with OpenAI's own harness (informed by Astra + Codex production usage) as the runtime. Pairs cycle-structurally with [[chatgpt-for-financial-services]] launched same-day as *twin developer-tier + enterprise-vertical productization anchor* on OpenAI's post-DevDay-2026-preview commercial expansion window.

## Timeline

- **2026-09-11-evening**: **Public beta launch**. TLDR MEDIUM: *"OpenAI's Agents API is now in public beta, allowing developers to create useful agents with a powerful harness that manages context, uses tools efficiently, and coordinates subagents. The API provides infrastructure to keep agents running reliably for days, and environments where agents can work with files, run code, and save intermediate results"* — first-in-wiki *concrete public-beta developer-API canonical anchor* on OpenAI's Codex-harness-as-developer-platform arc; validates the 09-09-morning TLDR AI *"OpenAI is planning to introduce Managed Agents at DevDay 2026, following a model similar to Anthropic's offerings"* pre-announcement anchor with a *concrete public-beta launch canonical anchor*. — *source: data/summaries/2026-09-11-evening.json (TLDR MEDIUM "OpenAI Agents API 🤖, open model adoption 📈, sharded Postgres 🧑‍💻")*

## Key Facts

- Vendor: [[openai]]
- Status: public beta
- Core primitives: context management + efficient tool use + subagent coordination + multi-day reliability
- Runtime environments: file access + code execution + intermediate-result persistence
- Underlying harness: same infrastructure that powers Codex + ChatGPT Work

## Open Questions

- Pricing structure and rate-limit tiers
- Which OpenAI models are available in the API (Astra? Sol/Terra/Luna?)
- Concrete tool-catalog size and MCP-server compatibility
- Enterprise-tier controls (data retention, audit logs, permissions) — parallels to [[openai-presence]]

## Sources

- data/summaries/2026-09-11-evening.json (TLDR "OpenAI Agents API 🤖, open model adoption 📈, sharded Postgres 🧑‍💻")
