---
name: Nemotron 3
description: NVIDIA's open-source agentic model line — Nano (30B/3B active MoE) + Super 120B + Ultra 550B-A55B; Nemotron 3.5 ASR + Content Safety modular family
type: product
---

# Nemotron 3

> **Type**: product
> **First mentioned**: 2025-12-17
> **Last updated**: 2026-06-05
> **Status**: active
> **Related**: [[nvidia]], [[nvidia-cosmos]], [[agent-frameworks]], [[deepseek]], [[mistral-3]], [[gemma-4]], [[qwen-3-7-max]]

## Summary

Nemotron 3 is [[nvidia]]'s open-source large-language-model family, launched on 2025-12-17 and positioned as NVIDIA's "agentic" play — open weights tuned specifically for multi-agent AI throughput. The launch model, Nemotron 3 Nano, is a 30B-parameter / 3B-active mixture-of-experts model that NVIDIA claims delivers ~4× throughput vs comparable competitors for multi-agent workloads. Larger Super and Ultra siblings are scheduled for 2026. Coverage framed Nemotron 3 as NVIDIA stepping further into the model layer (alongside [[nvidia-cosmos]] for physical AI), pushing past pure-silicon positioning into the open-weights race against [[deepseek]], [[mistral-3]], and others.

## Timeline

- **2026-06-05-evening**: Nemotron 3 Ultra specs refined in cycle coverage — **550B MoE / 55B active**, **1M context**, **OpenMDW 1.1 license**, focuses on long-running agent workloads with **5× faster + 30% lower cost for agentic tasks**, framed as the "most intelligent US open-weights model" by The Rundown AI; **Nemotron 3.5 ASR** released — open streaming ASR with a single **0.6B checkpoint**, **40 language-locale combinations**, **sub-100 ms latency** (NVIDIA's first open streaming ASR in the Nemotron 3.5 modular line); **Nemotron 3.5 Content Safety** released — a unified model for **multimodal + multilingual + customizable enterprise safety enforcement** with auditable reasoning, designed to fit into production moderation pipelines; positions NVIDIA across the open-weights agent → ASR → content-safety stack in one cycle and sharpens the Ultra-vs-[[gemma-4]]-12B-vs-[[qwen-3-7-max]] open-weights competition heading into the second half of 2026 — *source: AINews "[AINews] not much happened today" — Nemotron 3 Ultra OpenMDW 1.1 / 1M context / 5× faster / 30% lower cost / Nemotron 3.5 ASR 0.6B 40 language-locales sub-100ms; The Rundown AI "Anthropic's self-improving AI warning" — Nemotron 3 Ultra fully open 550B reasoning, 5× faster / 30% cheaper; Evolving AI Insights — Nemotron 3 Ultra targets agents that plan, reason, stick to workflows; TLDR AI "Anthropic Oceanus leaks, ChatGPT Dreaming, recursive self improvement" — Nemotron 3.5 Content Safety unified multimodal/multilingual moderation; The Batch @ DeepLearning.AI — competitive context vs Qwen3.7-Max*
- **2026-03-24**: Nemotron 3 120B MoE framed as agent-cost-reduction release — NVIDIA positioning to lower per-token cost for agent workflows — *source: 2026-03-24 cycle*
- **2026-03-13**: Nemotron 3 Super released — 120B open-source reasoning model, hybrid Mamba-Transformer MoE, 1M-token native context, 4× memory efficiency, dev-controlled reasoning budget; training data, RL environments, and post-training recipes published; 5× throughput vs prior gen — *source: 2026-03-13 cycle (TAAFT — NVIDIA releases Nemotron 3 Super; World of AI — NVIDIA's NEW Open-Source Model; The Code; TLDR AI)*
- **2026-02-06**: Nemotron 3 push extended — NVIDIA emphasizes Nemotron Nano/Super/Ultra as core open-weights agentic line in dev outreach — *source: 2026-02-06 cycle*
- **2025-12-17**: Nemotron 3 launches — Nano variant at 30B total / 3B active MoE; 4× throughput claimed for multi-agent AI; Super and Ultra previewed for 2026; framed as NVIDIA's "agentic bet" — *source: AlphaSignal "Nemotron 3"; AI Breakfast "NVIDIA Drops NEMOTRON 3!"; The Rundown AI "Nvidia's powerful open AI model play"; Forward Future "NVIDIA's Agentic Bet & A $3B Collapse"; TLDR AI "Nvidia Nemotron 3 / Claude agentic tasks / OLMo 3 deep dive"; TLDR "Nvidia drops open-source AI models"*

## Key Facts

- Vendor: [[nvidia]]
- License: open-source weights
- Launch model: Nemotron 3 Nano — 30B total / 3B active (MoE)
- Throughput claim: ~4× competitors for multi-agent AI
- Roadmap: Super and Ultra variants in 2026
- Strategic frame: NVIDIA's "agentic" play — model layer in addition to silicon layer

## Open Questions

- License terms (research-only, commercial, attribution requirements)?
- Independent reproducibility of the 4× throughput claim?
- Super / Ultra parameter counts and target benchmarks?
- How does Nemotron 3 Nano compare on coding/math/reasoning vs [[mistral-3]] Large 3 and DeepSeek V3.2?

## Sources

- data/summaries/2025-12-17.json (AlphaSignal — Nemotron 3; AI Breakfast — NVIDIA Drops NEMOTRON 3!; The Rundown AI — Nvidia's powerful open AI model play; Forward Future — NVIDIA's Agentic Bet & A $3B Collapse; TLDR AI — Nvidia Nemotron 3 / Claude agentic tasks; TLDR — Nvidia drops open-source AI models)
- data/summaries/2026-03-13.json (Nemotron 3 Super 120B — TAAFT; World of AI; The Code; TLDR AI)
- data/summaries/2026-03-24.json (Nemotron 3 as agent-cost-reduction frame)
- data/summaries/2026-06-05-evening.json (AINews — Nemotron 3 Ultra 550B-A55B OpenMDW 1.1 / 1M context / 5× faster / 30% lower cost + Nemotron 3.5 ASR 0.6B 40 language-locales sub-100ms; The Rundown AI — Nemotron 3 Ultra fully open 550B; Evolving AI Insights — Nemotron 3 Ultra plan/reason/stick-to-workflows; TLDR AI — Nemotron 3.5 Content Safety unified multimodal/multilingual moderation; The Batch @ DeepLearning.AI — Qwen3.7-Max competitive context)
