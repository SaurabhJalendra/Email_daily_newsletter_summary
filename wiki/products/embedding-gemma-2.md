---
name: EmbeddingGemma 2
description: Google's 740M-parameter open multimodal embedding model mapping text, code, images, video, and audio into a shared embedding space
type: product
---

# EmbeddingGemma 2

> **Type**: product
> **First mentioned**: 2026-10-07-evening
> **Last updated**: 2026-11-02-morning (NLP Newsletter MEDIUM "🥇Top AI Papers of the Week (Oct 26 - Nov 1)" ships research-tier restatement sharpening three concrete primitives — (a) **744M-parameter concrete-size canonical anchor** sharpens the prior 740M approximate figure (first-in-wiki *concrete 744M figure canonical anchor*); (b) **"New Pareto frontier across seven benchmark suites + beats specialist models and larger models" canonical concrete-benchmark-superiority anchor** — first-in-wiki *concrete seven-benchmark-suite-Pareto-frontier canonical anchor + concrete "beats specialists + larger models" framing anchor* on EmbeddingGemma 2; (c) **"Modular design — teams load only the necessary components, reducing computational costs" canonical modular-component-architecture anchor** + **three-stage training recipe (text-only + multimodal + distillation-from-contrastive-objectives) canonical anchor** — first-in-wiki *concrete modular-component-load + three-stage-training-recipe canonical anchor pair* on EmbeddingGemma 2 training-substrate. Daily-digest Top Story #2: *"EmbeddingGemma 2's ability to handle multiple input types and outperform larger models makes it a notable advancement in multimodal AI"*. See [[google]] + [[gemma]] + [[open-source-models]] — *source: data/summaries/2026-11-02-morning.json (NLP Newsletter MEDIUM "🥇Top AI Papers of the Week"; daily-digest Top Story #2)*)
> **Previously updated**: 2026-10-08-morning (cycle-2 recoverage — TLDR AI MEDIUM adds concrete on-device-tier canonical framing: *"EmbeddingGemma 2 is introduced as a 740M-parameter model that maps text, code, images, audio, and video into a shared embedding space, enabling multimodal search and retrieval without sending data to the cloud"*. First-in-wiki *concrete "multimodal search and retrieval without sending data to the cloud" on-device-tier canonical framing anchor* on EmbeddingGemma 2 — productizes EmbeddingGemma 2 as *canonical early-Oct-2026 open-weight on-device-multimodal-embedding canonical anchor tier* alongside the broader Gemma on-device lineage)
> **Status**: launched (open-weight)
> **Related**: [[google]], [[gemma]], [[gemma-4]], [[open-source-models]], [[ai-memory]], [[model-context-protocol]], [[agent-harness]]

## Summary

EmbeddingGemma 2 is [[google]]'s October 2026 open-weight multimodal embedding model — a 740M-parameter model that maps text, code, images, video, and audio into a single shared embedding space. It is the first Gemma-family entry to target the embedding tier directly, graduating the on-device-generative Gemma lineage into a *multimodal-embedding-tier substrate operator* and offering a developer-facing alternative to closed-weight incumbents such as Voyage AI, [[cohere]] Embed, and OpenAI's text-embedding-3-large.

The release pairs cycle-structurally with [[mistral-large-4]] (trillion-parameter MoE), [[beam]] (501B-A23B sparse MoE), and [[kolibri]] (78.1B MoE) as a *canonical early-Oct-2026 open-weight-across-every-tier substrate cluster* — covering embedding, mid-tier, and frontier open-weight product lines in the same week.

## Timeline

- **2026-11-02-morning**: **NLP Newsletter MEDIUM "🥇Top AI Papers of the Week (Oct 26 - Nov 1)" ships research-tier restatement with concrete 744M-parameter size (sharpens prior 740M approximate figure) + "new Pareto frontier across seven benchmark suites + beats specialist models and larger models" + modular design (teams load only necessary components, reducing computational costs) + three-stage training recipe (text-only + multimodal + distillation from contrastive objectives)**. Daily-digest Top Story #2: *"EmbeddingGemma 2's ability to handle multiple input types and outperform larger models makes it a notable advancement in multimodal AI, with potential applications in various fields such as media analysis and generation"* — *source: data/summaries/2026-11-02-morning.json (NLP Newsletter MEDIUM "🥇Top AI Papers of the Week"; daily-digest Top Story #2)*

- **2026-10-08-morning**: Cycle-2 recoverage sharpens on-device framing — TLDR AI MEDIUM: *"EmbeddingGemma 2 is introduced as a 740M-parameter model that maps text, code, images, audio, and video into a shared embedding space, enabling multimodal search and retrieval without sending data to the cloud"* — *source: data/summaries/2026-10-08-morning.json (TLDR AI MEDIUM "Mistral Large 4 🧠, OpenAI Decisions API ❓, Nano Banana 2.1 🍌")*

- **2026-10-07-evening**: **EmbeddingGemma 2 released — 740M-parameter open multimodal embedding across text, code, images, video, and audio** — AINews HIGH: *"Google has released EmbeddingGemma 2, a 740M-parameter open multimodal embedding model that maps text, code, images, video, and audio into a shared space"*; daily-digest Top Story #4 — *source: data/summaries/2026-10-07-evening.json*

## Key Facts

- Parameters: 744M (sharpened from prior 740M approximation per 2026-11-02-morning NLP Newsletter)
- Distribution: open-weight
- Modalities: text + code + images + video + audio (shared embedding space)
- Benchmark positioning: new Pareto frontier across seven benchmark suites; reportedly beats specialist models and larger models
- Architecture: modular — teams load only the necessary components, reducing computational cost
- Training recipe: three stages — text-only training + multimodal training + distillation from contrastive objectives
- Lineage: first embedding-tier entry in the [[gemma]] family
- Vendor: [[google]] / Google DeepMind
- Competitive positioning: open-weight counter to Voyage AI, [[cohere]] Embed, OpenAI text-embedding-3-large

## Open Questions

- Benchmark scores vs Voyage-3, Cohere Embed, text-embedding-3-large on standard retrieval suites (MTEB, BEIR)?
- Context window and max input tokens per modality?
- License terms (Gemma-license variant vs Apache 2.0)?
- Dimensionality of the shared embedding space + optional output-dim reduction?
- Named reference implementations (RAG, vector DB integrations, retrieval-augmented agents)?

## Sources

- data/summaries/2026-11-02-morning.json (NLP Newsletter MEDIUM "🥇Top AI Papers of the Week"; daily-digest Top Story #2 — 744M-parameter + 7-benchmark-suite Pareto + modular + three-stage training recipe)
- data/summaries/2026-10-07-evening.json (AINews HIGH "[AINews] Quasi-Riemann-Hypothesis: OpenAI publishes 722 math papers"; daily-digest Top Story #4 — EmbeddingGemma 2 740M open multimodal embedding)
- data/summaries/2026-10-08-morning.json (TLDR AI MEDIUM "Mistral Large 4 🧠, OpenAI Decisions API ❓, Nano Banana 2.1 🍌")
