---
name: Kimi K2.5
description: Moonshot AI's multimodal agentic open-source model; 1T MoE + 400M MoonViT vision, Agent Swarm of 100 sub-agents
type: product
---

# Kimi K2.5

> **Type**: product
> **First mentioned**: 2026-01-30
> **Last updated**: 2026-02-04
> **Status**: stale
> **Related**: [[moonshot-ai]], [[kimi-k2-thinking]], [[deepseek]], [[alibaba]], [[agent-frameworks]]

## Summary

Kimi K2.5 is [[moonshot-ai]]'s next open-source model after [[kimi-k2-thinking]], released in late January 2026. Reported configuration combines a ~1T-parameter mixture-of-experts (MoE) language core with a ~400M-parameter MoonViT vision tower, plus an "Agent Swarm" orchestration layer that can coordinate up to 100 sub-agents on a single task. It is positioned as a cross-modal, agentic step beyond pure reasoning — advancing the Chinese open-source lab cluster ([[alibaba]] Qwen, [[deepseek]], [[moonshot-ai]], [[baidu]]) from "benchmark-leading reasoning" to "execution-capable multimodal agents."

## Timeline

- **2026-02-04**: Framed as a headline item in "AI leaving the ChatBox" weekly recap — showcasing open models advancing toward execution (multimodal + agentic systems) — *source: World of AI "AI Is Leaving the ChatBox: Weekly Recap"*
- **2026-01-30**: Kimi K2.5 details circulate — 1T MoE language model + 400M MoonViT vision tower + Agent Swarm coordinating up to 100 sub-agents; positioned as multimodal agentic successor to [[kimi-k2-thinking]] — *source: 2026-01-30 cycle*

## Key Facts

- Vendor: [[moonshot-ai]]
- Language backbone: ~1T-parameter MoE
- Vision tower: MoonViT ~400M parameters
- Agent orchestration: "Agent Swarm" — up to 100 coordinating sub-agents per task
- License: open-source (consistent with [[kimi-k2-thinking]] distribution)
- Positioning: multimodal + agentic step over reasoning-only [[kimi-k2-thinking]]; part of Chinese open-source frontier push

## Open Questions

- Benchmark results on SWE-bench / LMArena / MMMU (formal comparisons vs GPT-5.2, Claude Opus 4.5, Gemini 3)?
- Exact parameter counts (active vs total MoE)?
- Licensing terms — Apache/MIT or Moonshot custom?
- How does Agent Swarm compare to MCP-based orchestration / [[claude-code]] Routines?

## Sources

- data/summaries/2026-01-30.json (community / newsletter coverage — release details)
- data/summaries/2026-02-04.json (World of AI — AI Is Leaving the ChatBox: Weekly Recap)
