---
name: GPT-5.1-Codex-Max
description: OpenAI's late-Nov 2025 long-running coding model — compaction, 24+ hour sessions, default in Codex
type: product
---

# GPT-5.1-Codex-Max

> **Type**: product
> **First mentioned**: 2025-11-21
> **Last updated**: 2025-11-22
> **Status**: active
> **Related**: [[openai]], [[openai-codex]], [[gpt-5-codex-mini]], [[gpt-5-1]], [[gemini-3]], [[claude-code]], [[agent-frameworks]]

## Summary

GPT-5.1-Codex-Max is [[openai]]'s long-context, agentic coding model released on 2025-11-21. It introduces a "compaction" technique that lets it work across multiple context windows on tasks spanning 24+ hours, surpassing prior Codex variants on developer benchmarks. The model becomes the default across Codex environments (CLI, IDE, [[chatgpt-atlas]] integrations) and supports Windows command-line workflows. It posts 77.9% on SWE-bench Verified using 30% fewer thinking tokens than its predecessor and is reportedly used weekly by 95% of OpenAI engineers, with shipped pull requests up 70%. AI Breakfast frames it as a "24/7 coding copilot" capable of multi-step refactors, long-cycle debugging, and test-driven iteration nonstop.

## Timeline

- **2025-11-22**: Becomes the default model across all Codex environments; framed as direct response to [[gemini-3]] coding strength — *source: AI Breakfast "Nano Banana Pro Sets New Standard"*
- **2025-11-21**: Released — compaction across context windows, 24+ hour sessions, 77.9% SWE-bench Verified (30% fewer tokens than predecessor), Windows CLI support, 27–42% faster task completion — *source: TLDR "Nvidia crushes earnings"; TLDR AI "GPT-5.1-Codex-Max"; The Rundown AI "OpenAI's Codex-Max codes for 24 hours straight"*

## Key Facts

- Vendor: [[openai]]
- Headline: works across 24+ hour development sessions via compaction
- SWE-bench Verified: 77.9% (vs prior Codex-High); 30% fewer thinking tokens
- Surfaces: Codex CLI, IDE integrations, [[chatgpt-atlas]]
- OS: now supports Windows command-line workflows
- Internal use: ~95% of OpenAI engineers weekly; PRs shipped +70%
- Speed: 27–42% faster task completion
- Companion variant: [[gpt-5-codex-mini]] (cost-efficient, Nov 11 2025)

## Open Questions

- API pricing and availability outside Codex IDE/CLI?
- Compaction details — fixed-size summary, hierarchical recall, or model-driven?
- Head-to-head with Claude Code (Opus 4.5) and Antigravity / Gemini 3 Pro on long tasks?

## Sources

- data/summaries/2025-11-21.json (TLDR — Nvidia crushes earnings; TLDR AI — GPT-5.1-Codex-Max; The Rundown AI — Codex-Max codes for 24 hours)
- data/summaries/2025-11-22.json (AI Breakfast — Nano Banana Pro Sets New Standard [Codex-Max default]; The Rundown AI)
