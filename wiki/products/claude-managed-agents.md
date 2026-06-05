---
name: Claude Managed Agents
description: Anthropic fully-managed runtime for building and deploying AI agents in the cloud without infrastructure setup
type: product
---

# Claude Managed Agents

> **Type**: product
> **Vendor**: [[anthropic]]
> **First mentioned**: 2026-04-10
> **Last updated**: 2026-05-12
> **Status**: launched
> **Related**: [[anthropic]], [[claude-code]], [[claude-cowork]], [[agent-frameworks]]

## Summary

Claude Managed Agents is [[anthropic]]'s fully-managed agent runtime, announced 2026-04-10. It packages the Claude agent stack as a composable API suite that lets developers build and deploy cloud-hosted agents "directly in their cloud" with no infrastructure setup — positioning Anthropic against self-hosted harnesses (OpenClaw, etc.) and competing agent-runtime platforms (Vercel Open Agents, OpenAI Agents). The 2026-04-14 cycle paired it with Ultraplan, a cloud-based collaborative task-planning tool, framing both as parts of Anthropic's managed-agent surface.

## Timeline

- **2026-05-12**: **Claude learns to dream and curate its own memory** — auto-merges duplicates, replaces stale entries, surfaces insights (extends the 2026-05-08 "dreaming" feature into an active memory-curation capability for managed agents) — *source: 2026-05-12 cycle (Claude dream-curate memory)*
- **2026-05-09**: **"Dreaming" formally framed as Claude Managed Agents feature** — agents review past memories and conversations, identify patterns, and proactively offer support; coverage frames as significant advancement in personalized + adaptive AI assistants — *source: 2026-05-09 cycle (Dreaming for AI agents)*
- **2026-05-08**: **Claude Managed Agents gain "dreaming" feature for self-improvement** — agents learn from past interactions (first public framing of dream-mode as Anthropic-shipped agent capability, extends the 2026-03-25 Claude "auto dream" memory-consolidation work); same cycle Anthropic-SpaceX Colossus partnership provides infra capacity for Managed Agents at greater scale — *source: 2026-05-08 cycle (Claude Managed Agents dreaming for self-improvement)*
- **2026-04-26**: **Claude Managed Agents gains built-in memory** for continuous cross-session learning — first persistent-memory feature for the runtime (sets up the 2026-05-08 dreaming feature) — *source: 2026-04-26 cycle (Claude Managed Agents built-in memory)*
- **2026-04-14**: Formally positioned as a "fully managed runtime" with Ultraplan (collaborative task-planning cloud tool) launched alongside; framed as central to Anthropic's agent strategy — *source: 2026-04-14 cycle*
- **2026-04-13**: Recapped in cycle coverage as a newly launched Anthropic product surface — *source: 2026-04-13 cycle*
- **2026-04-10**: Launch announcement — composable APIs for building and deploying cloud-hosted agents at scale with no infrastructure setup required — *source: 2026-04-10 cycle*

## Key Facts

- Vendor: [[anthropic]]
- Positioning: fully managed runtime for agents (alternative to self-hosted harnesses)
- Companion product: Ultraplan (collaborative cloud task-planning)
- Target: enterprise teams wanting hosted agent orchestration without infra ops

## Open Questions

- Pricing model — per-agent, per-token, usage-based?
- Model surface — Claude Opus 4.7 only, or Claude Mythos Preview access for cybersecurity customers?
- Interop — does it expose MCP tools to external agents, or only Claude-native tools?
- Ultraplan status — separate product or a Managed Agents feature?

## Sources

- data/summaries/2026-04-10.json (AlphaSignal — Managed Agents launch; Superhuman — enterprise adoption)
- data/summaries/2026-04-13.json (recap in Mythos Breach cycle coverage)
- data/summaries/2026-04-14.json (Ultraplan companion launch; fully-managed-runtime framing)
- data/summaries/2026-04-26.json (Built-in memory for continuous cross-session learning)
- data/summaries/2026-05-08.json (Dreaming feature for self-improvement)
- data/summaries/2026-05-09.json (Dreaming formally framed as Managed Agents feature)
- data/summaries/2026-05-12.json (Claude dream-curate memory)
