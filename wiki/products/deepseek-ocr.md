---
name: DeepSeek-OCR
description: DeepSeek's open-source OCR model that compresses text into visual tokens for 10x context efficiency
type: product
---

# DeepSeek-OCR

> **Type**: product
> **First mentioned**: 2025-10-21
> **Last updated**: 2025-11-04
> **Status**: stale
> **Related**: [[deepseek]], [[long-context-scaling]]

## Summary

DeepSeek-OCR is an open-source OCR model from [[deepseek]] (released late October 2025) whose key idea is to encode text as visual tokens — running text through a vision encoder, then reconstructing it with a text decoder. Reported numbers: ~10× compression of text tokens with 97% accuracy and 200,000 pages per GPU per day. The technique implies a new way to fit very long documents into LLM context windows without truncation, by representing text as an image rather than as tokens — a candidate enabling primitive for long-context retrieval pipelines.

## Timeline

- **2025-11-04**: LlamaIndex 2025-11-04 newsletter cites the model in its document-classification context — *source: LlamaIndex Newsletter 2025-11-04*
- **2025-10-28**: Detailed coverage — vision encoder + text decoder architecture, 10× compression at 97% accuracy, 200K pages/GPU/day; open-source on GitHub and Hugging Face — *source: World of AI "DeepSeek DROPPED a NEW AI"; LlamaIndex Newsletter*
- **2025-10-21**: Surfaces in AlphaSignal subject line — *source: AlphaSignal "Claude Code Web, DeepSeek OCR, is AI a bubble?"*

## Key Facts

- Vendor: [[deepseek]]
- License: open-source (GitHub + Hugging Face)
- Architecture: vision encoder + text decoder; text → visual tokens → reconstruction
- Compression: ~10× (1,000 text tokens → ~100 vision tokens)
- Accuracy: ~97%
- Throughput: ~200,000 pages per GPU per day
- Benchmark claim: top-tier edit-distance with fewer vision tokens than competing encoders

## Open Questions

- Does the vision-token encoding generalize beyond OCR (e.g., long-document RAG, code)?
- License specifics (research-only vs commercial)?
- How well does it preserve structure (tables, equations) vs reading-order text?
- Adoption curve in production RAG stacks?

## Sources

- data/summaries/2025-10-21.json (AlphaSignal subject — DeepSeek OCR)
- data/summaries/2025-10-28.json (World of AI — DeepSeek DROPPED a NEW AI; LlamaIndex Newsletter — DeepSeek OCR Revolution)
- data/summaries/2025-11-04.json (LlamaIndex Newsletter 2025-11-04)
