---
name: EmbeddingGemma 2
description: Google's 740M-parameter open multimodal embedding model mapping text, code, images, video, and audio into a shared embedding space
type: product
---

# EmbeddingGemma 2

> **Type**: product
> **First mentioned**: 2026-10-07-evening
> **Last updated**: 2026-10-08-morning (cycle-2 recoverage — TLDR AI MEDIUM adds concrete on-device-tier canonical framing: *"EmbeddingGemma 2 is introduced as a 740M-parameter model that maps text, code, images, audio, and video into a shared embedding space, enabling multimodal search and retrieval without sending data to the cloud"*. First-in-wiki *concrete "multimodal search and retrieval without sending data to the cloud" on-device-tier canonical framing anchor* on EmbeddingGemma 2 — productizes EmbeddingGemma 2 as *canonical early-Oct-2026 open-weight on-device-multimodal-embedding canonical anchor tier* alongside the broader Gemma on-device lineage)
> **Status**: launched (open-weight)
> **Related**: [[google]], [[gemma]], [[gemma-4]], [[open-source-models]], [[ai-memory]], [[model-context-protocol]]

## Summary

EmbeddingGemma 2 is [[google]]'s October 2026 open-weight multimodal embedding model — a 740M-parameter model that maps text, code, images, video, and audio into a single shared embedding space. It is the first Gemma-family entry to target the embedding tier directly, graduating the on-device-generative Gemma lineage into a *multimodal-embedding-tier substrate operator* and offering a developer-facing alternative to closed-weight incumbents such as Voyage AI, [[cohere]] Embed, and OpenAI's text-embedding-3-large.

The release pairs cycle-structurally with [[mistral-large-4]] (trillion-parameter MoE), [[beam]] (501B-A23B sparse MoE), and [[kolibri]] (78.1B MoE) as a *canonical early-Oct-2026 open-weight-across-every-tier substrate cluster* — covering embedding, mid-tier, and frontier open-weight product lines in the same week.

## Timeline

- **2026-10-08-morning**: Cycle-2 recoverage sharpens on-device framing — TLDR AI MEDIUM: *"EmbeddingGemma 2 is introduced as a 740M-parameter model that maps text, code, images, audio, and video into a shared embedding space, enabling multimodal search and retrieval without sending data to the cloud"* — *source: data/summaries/2026-10-08-morning.json (TLDR AI MEDIUM "Mistral Large 4 🧠, OpenAI Decisions API ❓, Nano Banana 2.1 🍌")*

- **2026-10-07-evening**: **EmbeddingGemma 2 released — 740M-parameter open multimodal embedding across text, code, images, video, and audio** — AINews HIGH: *"Google has released EmbeddingGemma 2, a 740M-parameter open multimodal embedding model that maps text, code, images, video, and audio into a shared space"*; daily-digest Top Story #4 — *source: data/summaries/2026-10-07-evening.json*

## Key Facts

- Parameters: 740M
- Distribution: open-weight
- Modalities: text + code + images + video + audio (shared embedding space)
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

- data/summaries/2026-10-07-evening.json (AINews HIGH "[AINews] Quasi-Riemann-Hypothesis: OpenAI publishes 722 math papers"; daily-digest Top Story #4 — EmbeddingGemma 2 740M open multimodal embedding)
- data/summaries/2026-10-08-morning.json (TLDR AI MEDIUM "Mistral Large 4 🧠, OpenAI Decisions API ❓, Nano Banana 2.1 🍌")
