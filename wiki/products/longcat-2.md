---
name: LongCat-2.0
description: Meituan open-source 1.6-trillion-parameter model — first publicly framed in Jul 2026; positioned as the largest open-source Chinese-lab model to date
type: product
---

# LongCat-2.0

> **Type**: product
> **Vendor**: Meituan
> **First mentioned**: 2026-07-01-evening
> **Last updated**: 2026-07-01-evening (created — World of AI HIGH lands ***"Meituan open-sourcing LongCat-2.0, a 1.6-trillion-parameter model"*** as an "other notable update" alongside the Sonnet 5 + Fable/Mythos-lift headline; first publicly framed Meituan-frontier-AI-lab entrant in this wiki + first publicly framed *1.6-trillion-parameter open-source Chinese-lab model* — one of the largest publicly disclosed parameter counts on any open-source model in this wiki)
> **Status**: launched (open-sourced)
> **Related**: [[deepseek]], [[moonshot-ai]], [[zhipu-ai]], [[alibaba]], [[minimax]], [[open-source-models]]

## Summary

LongCat-2.0 is Meituan's open-source 1.6-trillion-parameter model, released in early July 2026. Meituan is the Chinese food-delivery giant that has been building AI capability over multiple years but had not previously surfaced in this wiki as a frontier-model publisher. The LongCat-2.0 release marks Meituan's *first publicly framed entrant in the open-source Chinese frontier-model race* alongside [[deepseek]], [[moonshot-ai]] (Kimi), [[zhipu-ai]] (GLM), [[alibaba]] (Qwen), and [[minimax]] — with a parameter count (1.6T) that is among the largest publicly disclosed on any open-source model.

The 1.6T parameter count reads as sparse MoE architecture given the current open-source frontier-model design norms (dense 1.6T would be operationally intractable for most inference-tier consumers); comparable to Kimi K2's 1T MoE, but the "LongCat" naming lineage may suggest a *long-context specialization* posture (candidate: 1M+ context window). Structurally significant as a signal that Meituan has moved from AI-user (food-delivery routing/logistics ML) to AI-publisher (open-source frontier model), joining the Chinese open-source frontier-model competitive surface.

## Timeline

- **2026-07-01-evening**: **Created — Meituan open-sources LongCat-2.0, a 1.6-trillion-parameter model**. World of AI HIGH cycle-headline "USA Restores Fable ACCESS!" lands the LongCat-2.0 release as an "other notable update" alongside the Sonnet 5 + Fable/Mythos-lift headlines: ***"Meituan open-sourcing LongCat-2.0, a 1.6-trillion-parameter model"***. First publicly framed *Meituan-frontier-AI-lab entrant* in this wiki — Meituan is the Chinese food-delivery giant, historically a heavy AI-user (logistics + routing + recommendation) but not previously a publisher of frontier open-source foundation models. First publicly framed *1.6-trillion-parameter open-source model* in this wiki — one of the largest publicly disclosed parameter counts on any open-source model (comparable to Kimi K2's 1T MoE, larger than most published dense/MoE counts from [[zhipu-ai]] / [[alibaba]] / [[minimax]]). Body-recovery items: (a) architecture — MoE (near-certain given 1.6T count) or dense (operationally intractable); active-parameter count if MoE; (b) LongCat naming lineage — is "Long" a *long-context* signal (1M+ context)? *long-training-horizon* signal? or a Meituan brand-suffix? (c) license (Apache 2.0? MIT? Meituan-modified permissive?); (d) benchmark deltas vs [[kimi-k2-6]] / [[glm-5-2]] / Qwen3-Max on frontier reasoning + coding + math; (e) whether LongCat-2.0 was preceded by a LongCat-1 that this wiki missed, or whether the "2.0" naming is Meituan's typical version-number practice; (f) distribution surface (Hugging Face? Ollama Cloud? Meituan-native platform?); (g) whether the release is opportunistically timed to the [[claude-fable-5]] / [[claude-mythos]] full-export-control-lift cycle window (similar to the 2026-06-17 [[glm-5-2]] opportunistic-release-into-Fable-vacuum pattern) or independent Meituan-cadence launch — *source: data/summaries/2026-07-01-evening.json (World of AI HIGH "USA Restores Fable ACCESS!" — Other notable updates include Meituan open-sourcing LongCat-2.0 a 1.6-trillion-parameter model)*

## Key Facts

- Vendor: Meituan (Chinese food-delivery giant + AI-user historically)
- Parameter count: 1.6 trillion (near-certain MoE given size)
- License: (pending — likely permissive open-source)
- Release: 2026-07-01

## Open Questions

- Architecture (MoE vs dense; active-parameter count if MoE)
- LongCat naming lineage (long-context specialization? long-training-horizon? Meituan brand suffix?)
- License terms (Apache 2.0? MIT?)
- Benchmark deltas vs [[kimi-k2-6]] / [[glm-5-2]] / Qwen3-Max on frontier reasoning + coding + math
- Distribution surface (Hugging Face? Ollama Cloud? Meituan-native?)
- Whether the release was opportunistically timed to the Fable/Mythos-lift window
- Is this Meituan's first frontier release or does it succeed a LongCat-1?

## Sources

- data/summaries/2026-07-01-evening.json (World of AI HIGH "USA Restores Fable ACCESS!" — Meituan open-sourcing LongCat-2.0 a 1.6-trillion-parameter model)
