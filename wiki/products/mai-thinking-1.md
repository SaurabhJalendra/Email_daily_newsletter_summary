---
name: MAI-Thinking-1
description: Microsoft's first in-house frontier reasoning model — 35B active params, 97% AIME 2025, no third-party distillation
type: product
---

# MAI-Thinking-1

> **Type**: product
> **Vendor**: [[microsoft]]
> **First mentioned**: 2026-06-05
> **Last updated**: 2026-07-03-evening (**The Batch @ DeepLearning.AI HIGH cycle-2 recoverage — ***"Microsoft introduces MAI-Thinking-1, its first reasoning language model built from scratch, which leads a family of seven MAI models and is comparable to Claude Sonnet 4.6"***; sharpens the 2026-06-05 launch framing three ways: (a) "first reasoning language model built from scratch" — first publicly framed *clean-lineage-first-reasoning-tier* claim on the model, structurally novel-vs-2026-06-05's "no third-party model distillation" framing (from → clean-slate-first-reasoning-tier); (b) "leads a family of seven MAI models" — cycle-2 confirmation of the 7-model family count; (c) "comparable to Claude Sonnet 4.6" — matches the prior 2026-06-05 human-preference-parity framing on Sonnet 4.6; pairs cycle-structurally with [[microsoft-frontier-company]] $2.5B/6,000-engineer AI-deployment unit launch as Microsoft's *first-party model + FDE-distribution* dual posture**)
> **Previously updated**: 2026-06-05
> **Status**: launched
> **Related**: [[microsoft]], [[microsoft-scout]], [[microsoft-frontier-company]], [[claude-opus-4-6]], [[claude-sonnet-4-6]], [[gpt-5-2]], [[claude-haiku-4-5]], [[openai]], [[anthropic]]

## Summary

MAI-Thinking-1 is the flagship reasoning model in Microsoft's first in-house MAI family, unveiled at Build 2026 (June 2026). It is a 35B-active-parameter model with a 256K-token context window that scores 97% on AIME 2025 and 53% on SWE-Bench Pro — reportedly matching [[claude-opus-4-6]] at "human preference parity" with [[claude-sonnet-4-6]] in blind tests. Microsoft published a 109-page technical report emphasizing "clean data lineage" and the fact that no third-party model was distilled during training — an explicit reputational counter to industry suspicion that frontier challengers shortcut benchmarks via teacher-model distillation. The release is one of seven MAI models (alongside MAI-Code-1-Flash, MAI-Image-2.5, MAI-Transcribe-1.5, MAI-Voice-2 and others) that mark Microsoft's clearest move yet to decouple its enterprise AI surface from [[openai]] dependency. Microsoft also introduced "Frontier Tuning," a capability that lets developers RL-tune model weights for workflow-specific adaptation.

## Timeline

- **2026-07-03-evening**: **The Batch cycle-2 recoverage — "first reasoning language model built from scratch, leads a family of seven MAI models, comparable to Claude Sonnet 4.6"**. The Batch @ DeepLearning.AI HIGH ***"Microsoft introduces MAI-Thinking-1, its first reasoning language model built from scratch, which leads a family of seven MAI models and is comparable to Claude Sonnet 4.6"***. Sharpens the 2026-06-05 launch framing three ways: (a) **"first reasoning language model built from scratch"** — first publicly framed *clean-lineage-first-reasoning-tier* claim (extends 2026-06-05's *no-third-party-model-distillation* posture into a *first-from-scratch* framing implying Microsoft's prior reasoning capabilities were routed through OpenAI's family and MAI-Thinking-1 is Microsoft's first in-house reasoning generation); (b) **"leads a family of seven MAI models"** — cycle-2 confirmation of the family-of-seven count (from Build 2026); (c) **"comparable to Claude Sonnet 4.6"** — matches the 2026-06-05 *human-preference-parity with Sonnet 4.6 in blind tests* framing. Pairs cycle-structurally with the same-day [[microsoft-frontier-company]] $2.5B/6,000-engineer AI-deployment unit launch as Microsoft's *first-party-model + FDE-distribution* dual posture — MAI-Thinking-1 supplies the model tier; Frontier Company supplies the distribution motion. Body-recovery items: (a) does "first reasoning language model built from scratch" imply Microsoft is publicly repositioning prior "MAI Reasoner"-like references as OpenAI-derived / distilled?, (b) which of the 7 MAI models are *reasoning-tier* vs coding/vision/audio-tier, (c) updated benchmark comparisons vs [[claude-sonnet-5]] (successor to Sonnet 4.6, launched 2026-07-01-morning) — *source: data/summaries/2026-07-03-evening.json (The Batch @ DeepLearning.AI HIGH "OpenAI's GPT-5.6 Family, New Ways to Train Robots, Models Invoking Models" — Microsoft introduces MAI-Thinking-1 its first reasoning language model built from scratch which leads a family of seven MAI models and is comparable to Claude Sonnet 4.6)*

- **2026-06-05**: Launch at Microsoft Build 2026 — 35B active params, 256K context, 97% AIME 2025, 53% SWE-Bench Pro, matches Claude Opus 4.6 at human-preference parity per Microsoft; 109-page technical report emphasizes clean data lineage and no third-party distillation; shipped alongside MAI-Code-1-Flash (5B coding model targeting [[gpt-5-2]]-class quality at fraction of cost, rivals [[claude-haiku-4-5]]), MAI-Image-2.5 (Arena #3 text-to-image / #2 image-to-image), MAI-Transcribe-1.5, MAI-Voice-2, and Aion 1.0 small language models; Frontier Tuning capability lets developers RL-tune weights for their own workflows; available in Azure Foundry; positioned as the trigger for [[anthropic]]'s "AI spending backlash" framing the same day (lower-cost Microsoft model raising scrutiny on Anthropic's compute economics ahead of its IPO filing) — *source: AINews "Reve 2 and Ideogram 4: Layouts in Imagegen" / "Microsoft Build: MAI-Thinking-1"; InstaByte "Anthropic files for IPO" — Microsoft unveils seven new AI models; Forward Future "OpenAI's real plan for ChatGPT" — MAI 35B reasoning model + custom AI chips; TLDR AI "DeepSeek fundraising, Meta model delays, Gemma 4 12B"*

## Key Facts

- Vendor: [[microsoft]]
- Class: reasoning (frontier-adjacent)
- Active parameters: 35B
- Context window: 256K tokens
- Benchmarks: 97% AIME 2025, 53% SWE-Bench Pro
- Comparative framing: human-preference parity with [[claude-opus-4-6]]; matches [[claude-sonnet-4-6]] in blind tests
- Training discipline: no third-party model distillation; 109-page technical report published
- Family siblings: MAI-Code-1-Flash, MAI-Image-2.5, MAI-Transcribe-1.5, MAI-Voice-2, Aion 1.0
- Deployment: Azure Foundry
- Tuning: Frontier Tuning enables developer-RL fine-tuning of weights

## Open Questions

- Total parameter count (vs the 35B "active" framing — is this a MoE?)
- Pricing per token vs Claude / GPT classes?
- Does "no third-party distillation" extend to all seven MAI models, or only MAI-Thinking-1?
- Inference latency and throughput on Azure's custom AI chips vs NVIDIA-backed Claude/Codex?

## Sources

- data/summaries/2026-07-03-evening.json (The Batch @ DeepLearning.AI HIGH — Microsoft introduces MAI-Thinking-1 its first reasoning language model built from scratch which leads a family of seven MAI models and is comparable to Claude Sonnet 4.6)
- data/summaries/2026-06-05.json (AINews — Reve 2 and Ideogram 4 / MAI-Thinking-1 launch; InstaByte — seven Microsoft AI models; Forward Future — OpenAI's real plan for ChatGPT [MAI 35B]; TLDR AI — DeepSeek fundraising / Gemma 4 12B / Meta model delays)
