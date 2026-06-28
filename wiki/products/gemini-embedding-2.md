---
name: Gemini Embedding 2
description: Google's multimodal embedding model — text/image/video/audio/PDF in a single unified space
type: product
---

# Gemini Embedding 2

> **Type**: product
> **Vendor**: [[google]]
> **First mentioned**: 2026-03-12
> **Last updated**: 2026-06-28-morning (resurfaces in researchFindings.missingStories as "Google debuts Gemini Embedding 2 for more powerful multimodal retrieval" — framed as upgrade for RAG-style systems, knowledge bases, and recommendation engines; expected near-term integration into Google Cloud and developer tooling; signals continued Mar 2026 launch relevance for RAG-pipeline embedding-stack reevaluation 3+ months post-launch)
> **Status**: active
> **Related**: [[google]], [[gemini]], [[gemini-3-1-pro]]

## Summary

Gemini Embedding 2 is [[google]]'s multimodal embedding model, released March 12 2026 via the Gemini API and Vertex AI. It maps text (up to 8,192 tokens), images (up to 6 per request, PNG/JPEG), video (up to 120s MP4/MOV), native audio, and PDFs (up to 6 pages) into a single shared embedding space — a first-class-citizen treatment of all modalities intended to collapse the old "text-only or awkwardly combined" stack. It ships with Matryoshka Representation Learning, letting users scale down output dimensions (default 3,072) to manage storage cost without retraining. Positioned as the foundation for cross-modal RAG and semantic search, it's integrated with Vertex AI, Weaviate, Qdrant, and ChromaDB.

## Timeline

- **2026-06-28-morning**: Resurfaces in researchFindings.missingStories — framed as upgrade for RAG-style systems / knowledge bases / recommendation engines; expected near-term integration into Google Cloud + developer tooling; signals continued post-launch traction 3+ months on — *source: data/summaries/2026-06-28-morning.json (researchFindings.missingStories — Google debuts Gemini Embedding 2 for more powerful multimodal retrieval)*
- **2026-03-13**: AlphaSignal deep-dive — multimodal search across 5 media types confirmed, with Matryoshka Representation Learning detailed for nested dimension scaling — *source: 2026-03-13 cycle (AlphaSignal — Gemini Embedding 2)*
- **2026-03-12**: Gemini Embedding 2 launches on Gemini API + Vertex AI — text/image/video/audio/PDF unified embedding, 100+ languages, benchmark-leading on text/image/video/speech tasks — *source: 2026-03-12 cycle (World of AI; Google AI Studio; AI Breakfast; TLDR AI; Superhuman)*

## Key Facts

- Vendor: [[google]]
- Modalities: text, image, video, audio, PDF
- Text: up to 8,192 tokens
- Image: up to 6 per request (PNG/JPEG)
- Video: up to 120s (MP4/MOV)
- Audio: ingested natively (no transcription preprocess)
- PDF: up to 6 pages
- Output: default 3,072-d vector, Matryoshka scaling down for storage cost
- Availability: Gemini API, Vertex AI; vector-DB integrations (Weaviate, Qdrant, ChromaDB)
- Languages: 100+

## Open Questions

- Benchmark comparisons vs text-only OpenAI embedding v3 and Voyage's v3
- Pricing per 1M tokens / per image / per second of video
- Latency on multimodal queries at scale
- Whether third-party vector DBs (Pinecone, Milvus) get parity support

## Sources

- data/summaries/2026-03-12.json (World of AI; Google AI Studio; AI Breakfast; TLDR AI; Superhuman)
- data/summaries/2026-03-13.json (AlphaSignal — multimodal search across 5 media types)
- data/summaries/2026-06-28-morning.json (researchFindings.missingStories — Google debuts Gemini Embedding 2 for more powerful multimodal retrieval)
