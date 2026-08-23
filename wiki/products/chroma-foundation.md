---
name: Chroma Foundation
description: Chroma's Aug 2026 shared-memory system for AI agents — persistent, self-improving knowledge base built on ChromaDB + the Context-1 model; integrates with Codex / Claude Code / Cursor / Slack (Aug 2026)
type: product
---

# Chroma Foundation

> **Type**: product
> **Vendor**: Chroma (company behind ChromaDB and the Context-1 agentic-search model)
> **First mentioned**: 2026-08-23-morning
> **Last updated**: 2026-08-23-morning
> **Status**: active — launched as part of Chroma Cloud (~$30/month starting tier)
> **Related**: [[ai-memory]], [[agent-frameworks]], [[claude-code]], [[cursor]], [[slack-code]], [[perplexity-brain]], [[granola]], [[engram]], [[trajectory]], [[mongodb]]

## Summary

**Chroma Foundation** is a **shared-memory system for AI agents**, launched by Chroma (the company behind the [[ChromaDB]] vector database and the Context-1 agentic-search model). It acts as a unified, self-improving, wiki-like knowledge base that learns from a user's or team's agent sessions and maintains a persistent record of workflows, projects, and conversations. Foundation integrates directly with popular agent and coding environments — **Codex, Claude Code ([[claude-code]]), Cursor ([[cursor]]), and Slack ([[slack]])** — with connectors for Notion, GitHub, and Google Drive on the roadmap.

Under the hood, Foundation is implemented on top of **ChromaDB + the Context-1 model** (a ~20B-parameter GPT-OSS-based search agent), enabling high-throughput retrieval (~400 tokens/sec) at significantly lower cost (~25× cheaper than OpenAI's Opus for agentic search per external coverage). Each Foundation instance not only stores + retrieves context but iteratively **improves its own system prompt** based on natural-language feedback, giving agents a continuously-tuned operating profile. Chroma positions Foundation as *"memory as infrastructure"* — a canonical shared-memory tier for any agent stack — extending the mid-2026 [[ai-memory]] discourse ([[perplexity-brain]], [[granola]], [[engram]], [[trajectory]], Anthropic's explicit-recall Claude memory) with a **cross-tool + cross-user shared-substrate** posture distinct from single-vendor memory features.

## Timeline

- **2026-08-23-morning**: **Chroma Foundation launches as shared-memory system for AI agents; integrates with Codex + Claude Code + Cursor + Slack** — NLP Newsletter HIGH "AI Agents Weekly": *"Chroma has introduced Chroma Foundation, a shared memory system for AI agents that learn from agent sessions and maintain a persistent knowledge base. Foundation integrates with popular agent environments and is built on top of ChromaDB and the Context-1 model, offering high-throughput and lower costs compared to existing solutions"*. researchFindings.additionalContext adds: Context-1 = 20B GPT-OSS-based search agent, ~400 tokens/sec throughput, ~25× cheaper than Opus for agentic search, part of Chroma Cloud (~$30/month starting), self-tuning system prompt via NL feedback. First publicly framed *shared-memory-substrate for AI agents that integrates across coding + chat agent surfaces* in this wiki. Structurally distinct from [[perplexity-brain]] (single-vendor internal memory), [[granola]] (single-user meeting-note accumulation), and [[engram]] (memory-layer neo-lab). See [[ai-memory]] + [[claude-code]] + [[cursor]] + [[slack-code]] — *source: data/summaries/2026-08-23-morning.json (NLP Newsletter HIGH "🤖 AI Agents Weekly: NVIDIA AVO, TrueForge, Chroma Foundation, Fragile Self-Improvement, Ornith-1.5, dots3-note, DeepSeek Vision, and More"; daily-digest Tools & Products; researchFindings.additionalContext — Chroma Foundation)*

## Key Facts

- Vendor: Chroma (creators of ChromaDB and Context-1)
- Type: shared-memory system for AI agents ("memory as infrastructure")
- Backing model: **Context-1** — ~20B-parameter GPT-OSS-based agentic-search model
- Throughput: ~400 tokens/sec
- Cost claim: ~25× cheaper than OpenAI Opus for agentic search (external coverage)
- Integrations at launch: **Codex, Claude Code, Cursor, Slack**
- Roadmap connectors: Notion, GitHub, Google Drive
- Distribution: part of **Chroma Cloud** (starting ~$30/month)
- Novel primitive: **self-improving system prompt** iteratively tuned via natural-language feedback

## Open Questions

- Is Foundation open-source or Cloud-only? Chroma has historically open-sourced core (ChromaDB) but kept managed infra proprietary
- Interop with [[model-context-protocol]] — does Foundation expose MCP endpoints so any MCP-compliant agent can plug in?
- Data-residency + retention + user-consent controls for cross-agent shared memory
- Enterprise-tier pricing and SSO/team management scope
- Cost-per-token comparisons vs [[perplexity-brain]] / [[engram]] / self-hosted vector DB + LLM stacks

## Sources

- data/summaries/2026-08-23-morning.json (NLP Newsletter HIGH "🤖 AI Agents Weekly: NVIDIA AVO, TrueForge, Chroma Foundation, Fragile Self-Improvement, Ornith-1.5, dots3-note, DeepSeek Vision, and More"; daily-digest Tools & Products; researchFindings.additionalContext — Chroma Foundation)
