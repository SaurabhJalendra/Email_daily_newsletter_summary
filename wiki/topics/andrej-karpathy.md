---
name: Andrej Karpathy
description: Ex-OpenAI / ex-Tesla AI researcher; author of influential pedagogical LLM repos (nanoGPT, nanochat) and widely-quoted commentator on the agent era
type: topic
---

# Andrej Karpathy

> **Type**: topic
> **First mentioned**: 2025-10-14
> **Last updated**: 2026-05-26
> **Status**: active
> **Related**: [[nanochat]], [[openai]], [[anthropic]], [[recursive-architectures]], [[recursive-superintelligence]], [[agent-frameworks]], [[vibe-coding]]

## Summary

Andrej Karpathy is a founding-era [[openai]] researcher and former Tesla Autopilot lead, known in 2025 as the author of pedagogical LLM repos (nanoGPT, [[nanochat]]) and a widely-quoted voice on how real-world AI agents differ from marketing narratives. In October 2025 he released an end-to-end ChatGPT-clone training repo and publicly cautioned on agent capabilities and AGI timelines. **In May 2026 he joined [[anthropic]]'s pretraining team** to build an internal group focused on using Claude to accelerate pretraining research — first hands-on AI-research role since leaving OpenAI/Tesla, and the most significant individual AI-talent move of 2026. He plans to resume his education work later. His **Autoresearch method** — a three-file architecture (prepare.py, train.py, program.md) that loops an agent over experiments overnight to iteratively improve validation scores — circulates as the concrete blueprint for the Claude-on-Claude-training direction he will pursue at Anthropic.

## Timeline

- **2026-05-26**: **Karpathy's 65-line CLAUDE.md config boosts Claude coding accuracy from 65% → 94%** in published framing — four rules encoded in the config file: think-before-coding, simplicity-first, surgical-changes, goal-driven; widely circulated as the first prominent post-Anthropic-join Karpathy contribution and gives [[claude-code]] users a concrete, copy-pasteable accuracy lever (separate artifact from the Autoresearch method but the same agent-discipline-via-config thesis) — *source: 2026-05-26 cycle (AlphaSignal — Karpathy's 65-line config pushes Claude coding accuracy to 94%)*
- **2026-05-22**: Karpathy's **Autoresearch method** circulates as the canonical recipe — three-file architecture (prepare.py / train.py / program.md), agent runs experiments while user sleeps, ~11% validation-score improvements; Hyperspace AI runs 333 experiments across 35 agents overnight for 19% improvement — *source: 2026-05-22 cycle (The AI Corner — How to 10× any AI skill using Autoresearch)*
- **2026-05-21**: Karpathy admits "never felt more behind" — AI code over-trust giving him "heart attacks"; developer community deconstructs the meta-commentary — *source: 2026-05-21 cycle (The Code — AI boom divides Silicon Valley)*
- **2026-05-20**: Karpathy free video course teaching neural networks from scratch ships; ties into the educational lineage he plans to resume — *source: 2026-05-20 cycle (AlphaSignal — Hallmark + Karpathy course)*
- **2026-05-19**: **Karpathy joins [[anthropic]]** in the pretraining team — builds a new internal group focused on using Claude to accelerate pretraining research; coverage frames as biggest AI talent move of 2026; explicit "recursive self-improvement" direction parallels [[recursive-superintelligence]] and [[ineffable-intelligence]] same week — *source: 2026-05-19 cycle (World of AI — ANTHROPIC POACHED Karpathy; TLDR AI — Karpathy joins Anthropic; AINews — Google I/O 2026 + Karpathy; AI Breakfast; The Code — Anthropic is onto something; Evolving AI Insights — OpenAI co-founder joins Anthropic; Mindstream; Forward Future; The Rundown AI — Karpathy lands at Anthropic)*
- **2026-03-23**: Karpathy argues AI agents will replace most software UIs — framed as "skill issue" on users + devs to adapt; widely discussed in weekly recaps — *source: 2026-03-23 cycle*
- **2025-12-25**: Karpathy coins / popularizes "[[vibe-coding]]" framing — agent-assisted coding where the developer nudges intent and the agent produces code — widely picked up by Anthropic / Lovable coverage — *source: 2025-12-25 cycle*
- **2025-11-19**: Karpathy explains why "verifiable work disappears first to AI" — framing of which tasks are first to be automated — *source: OpenAI guide cycle; TAAFT Nov 19*
- **2025-10-20**: "Karpathy's AI agent reality check" / "Karpathy on AGI" — *source: The Rundown AI; TLDR AI "Karpathy on AGI"*
- **2025-10-14**: Releases end-to-end ChatGPT-clone repo ([[nanochat]]); NanoGPT coverage — *source: AlphaSignal "Karpathy unveils end-to-end ChatGPT clone repo"; TLDR "NanoGPT"*

## Key Facts

- Prior roles: OpenAI founding team, Tesla Autopilot director
- Public signature: teaching-first code drops (nanoGPT lineage)

## Open Questions

- Does the October 2025 "reality check" reflect technical issues (benchmarks, failure modes) or broader positioning fatigue?

## Sources

- data/summaries/2025-10-14.json (AlphaSignal — Karpathy unveils end-to-end ChatGPT clone repo; TLDR — NanoGPT)
- data/summaries/2025-10-20.json (The Rundown AI — Karpathy's AI agent reality check; TLDR AI — Karpathy on AGI)
- data/summaries/2025-11-19.json (TAAFT cycle — Karpathy on verifiable-work-first automation)
- data/summaries/2026-03-23.json (Karpathy — agents will replace most software UIs)
- data/summaries/2026-05-19.json (World of AI; TLDR AI; AINews; AI Breakfast; The Code; Evolving AI Insights; Mindstream; Forward Future; The Rundown AI — Karpathy joins Anthropic)
- data/summaries/2026-05-20.json (AlphaSignal — Karpathy free video course)
- data/summaries/2026-05-21.json (The Code — Karpathy never felt more behind)
- data/summaries/2026-05-22.json (The AI Corner — Karpathy Autoresearch method)
- data/summaries/2026-05-26.json (AlphaSignal — Karpathy 65-line CLAUDE.md config pushes Claude coding accuracy to 94%)
