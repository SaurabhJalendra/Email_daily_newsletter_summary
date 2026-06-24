---
name: Gemma 3 270M
description: Google's ultra-lightweight 270M-parameter open model from the Gemma 3 family — targets edge deployment, low-cost inference, and experimentation
type: product
---

# Gemma 3 270M

> **Type**: product
> **Vendor**: [[google]]
> **First mentioned**: 2026-06-06
> **Last updated**: 2026-06-24-evening (**researchFindings.missingStories canonical re-anchor framing — "new baseline for 'good enough' local intelligence in mobile, embedded, and privacy-preserving scenarios" + "sets expectations for what sub-billion-parameter models can achieve"** — first publicly framed positioning-tier canonical framing on the sub-billion-parameter on-device-AI category in this wiki; cycle-pairs with [[xai]] Grok-4 free-access + [[openai]] GPT-4o restoration + Mistral Medium 3.1 + Alibaba Qwen3 as the post-Fable/Mythos-suspension multi-frontier-lab competitive-rebalancing wave)
> **Status**: released (open-source)
> **Related**: [[google]], [[gemma-4]], [[function-gemma]], [[medgemma]], [[translategemma]], [[ai-hardware]]

## Summary

Gemma 3 270M is [[google]]'s ultra-lightweight **270-million-parameter** open model from the Gemma 3 family, released on 2026-06-06 and designed explicitly for efficient deployment — edge devices, low-cost inference, and experimentation where latency and resource use matter more than frontier capability. It extends the [[google]] Gemma family *down* into a sub-billion-parameter tier below the existing [[gemma-4]] 12B "laptop-frontier" anchor and the domain-specialized [[function-gemma]] / [[medgemma]] / [[translategemma]] SKUs. Coverage in the AINews video roundup positions Gemma 3 270M as the small-open-model surface for the on-device / edge-AI deployment pattern that the broader [[rtx-spark]] + [[gemma-4]] 12B cycle has been building toward.

## Timeline

- **2026-06-24-evening**: **researchFindings.missingStories canonical re-anchor framing**: ***"Google has released Gemma 3 270M, a new ultra-small open-weight language model intended for edge devices and highly constrained environments. Despite its small parameter count, the model is reported to deliver significantly better performance than earlier tiny models in its class, especially on instruction-following and basic reasoning benchmarks. Gemma 3 270M is relevant for practitioners building on-device or latency-sensitive applications where larger models are impractical. It offers a new baseline for 'good enough' local intelligence in mobile, embedded, and privacy-preserving scenarios, and it sets expectations for what sub-billion-parameter models can achieve."*** First publicly framed *"new baseline for 'good enough' local intelligence in mobile, embedded, and privacy-preserving scenarios"* canonical framing in this wiki — sharpens the 2026-06-06 launch-event framing into a *positioning-tier canonical framing* on the sub-billion-parameter on-device-AI category. Also first publicly framed *"sets expectations for what sub-billion-parameter models can achieve"* category-defining framing. Body-recovery items: (a) which "earlier tiny models in its class" Gemma 3 270M is benchmarked against (Phi-mini? TinyLlama? SmolLM?), (b) explicit instruction-following + basic reasoning benchmark numbers, (c) device-class benchmarks (phones, microcontrollers, edge accelerators). Pairs cycle-structurally with the same edition's [[xai]] Grok-4 free-access + [[openai]] GPT-4o restoration + Mistral Medium 3.1 + Alibaba Qwen3 as the *post-Fable/Mythos-suspension multi-frontier-lab competitive-rebalancing wave* — Gemma 3 270M is the *edge / on-device tier* of the wave — *source: data/summaries/2026-06-24-evening.json (researchFindings.missingStories — Google Unveils Gemma 3 270M Pushing Tiny Open Models Forward / Google has released Gemma 3 270M / ultra-small open-weight language model intended for edge devices and highly constrained environments / significantly better performance than earlier tiny models in its class especially on instruction-following and basic reasoning benchmarks / new baseline for "good enough" local intelligence in mobile embedded and privacy-preserving scenarios / sets expectations for what sub-billion-parameter models can achieve / AI News 24 Stories You Missed While Living Your Life segment on Google unveiling Gemma 3 270M)*

- **2026-06-06**: **Gemma 3 270M released** as a "very small open model designed for efficient deployment"; framed as expanding the Gemma family into ultra-lightweight tiers; importance: small open models matter for edge deployment, low-cost inference, and experimentation where latency and resource use matter more than frontier capability — *source: data/summaries/2026-06-06-evening.json (AI Brief top story — Google launches open-source Gemma 3 270M; researchFindings.missingStories — AI News video roundup citing Google model release)*

## Key Facts

- Vendor: [[google]]
- Parameter count: 270M
- Open-source release (consistent with prior Gemma family Apache-style licensing)
- Designed for: edge deployment, low-cost inference, experimentation
- Position in family: sub-billion-parameter tier below [[gemma-4]] 12B and the function/medical/translation specialized SKUs

## Open Questions

- Architecture details — is this a dense or sparse model, and what context length does it support?
- License terms — Apache 2.0 like prior Gemma releases, or a more permissive/restrictive variant?
- Target hardware envelope — phones / microcontrollers / single-board computers?
- Distillation source — does it derive from the [[gemma-4]] 12B lineage, or a separate from-scratch training run?
- Benchmark performance vs other small open models (Phi-mini, TinyLlama, SmolLM)?

## Sources

- data/summaries/2026-06-06-evening.json (AI Brief — "Google launches open-source Gemma 3 270M, a very small open model designed for efficient deployment"; researchFindings.missingStories — "Google released Gemma 3 270 million parameter model, a very small open model designed for efficient deployment. The release expands the Gemma family into ultra-lightweight models.")
