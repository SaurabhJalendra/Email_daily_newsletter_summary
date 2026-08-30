---
name: Mistral OCR 4
description: Mistral's document-intelligence OCR successor to OCR 3 — structured content extraction with bounding boxes + confidence scores, 170 languages, single-container deployment, built specifically for RAG pipelines (Jun 2026)
type: product
---

# Mistral OCR 4

> **Type**: product
> **Vendor**: [[mistral]]
> **First mentioned**: 2026-06-25-morning
> **Last updated**: 2026-06-26-morning (**AlphaSignal HIGH cycle-2 — first publicly framed concrete *72% win rate across 600+ real-world documents* benchmark + first publicly framed *returns a full map of the document* output-format framing**)
> **Previously updated**: 2026-06-25-morning
> **Status**: stale
> **Related**: [[mistral]], [[mistral-ocr-3]], [[deepseek-ocr]], [[glm-ocr]], [[mistral-studio]], [[chandra-ocr-2]]

## Summary

Mistral OCR 4 is Mistral's June 2026 document-intelligence model — successor to [[mistral-ocr-3]] — providing structured content extraction including bounding boxes and confidence scores, supporting 170 languages, and built specifically for RAG (retrieval-augmented-generation) pipelines per tokens&'s framing. It can be deployed in a single container and integrates into enterprise search and structured-data pipelines.

The release positions Mistral against [[deepseek-ocr]] (open-source, 97% accuracy, 10× vision-token compression) and [[glm-ocr]] (Zhipu AI's #1 OmniDocBench) in the post-2025 OCR-as-document-intelligence shift, where the OCR layer is increasingly the bridge between raw documents and enterprise LLM workflows.

## Timeline

- **2026-06-26-morning**: **AlphaSignal HIGH cycle-2 — first publicly framed *72% win rate across 600+ real-world documents* benchmark + *returns a full map of the document* output framing**. AlphaSignal HIGH "OpenAI built its own chip in 9 months—here's what changes for API cost" lands ***"Mistral OCR 4 has been released with a 72% win rate across 600+ real-world documents, and it returns a full map of the document, including bounding boxes, type labels, and confidence scores"***. First publicly framed *72% win rate across 600+ real-world documents* benchmark on Mistral OCR 4 in this wiki — concretizes the prior 2026-06-25-morning tokens& "benchmark numbers turning heads" framing into a *specific 72%-win-rate + 600+-document* head-to-head measurement (likely vs prior-generation [[mistral-ocr-3]] and competitor stack). First publicly framed *full map of the document* canonical output framing on OCR 4 — the *map* metaphor productizes structured-content-extraction as a *spatial overlay* combining bounding boxes (location) + type labels (semantic category) + confidence scores (uncertainty quantification) into a single representation. Reinforces the cycle-1 RAG-pipeline framing — the *full document map* output is structurally well-suited to ingestion into vector-DB RAG indexes that need per-chunk semantic + spatial + confidence metadata. Body-recovery items: (a) 600+ documents benchmark composition (academic papers? legal contracts? medical records? receipts?), (b) what the 72% win rate is measured against (Mistral OCR 3? DeepSeek OCR? GLM OCR? Tesseract? cloud-vendor offerings?), (c) exact benchmark methodology — *source: data/summaries/2026-06-26-morning.json (AlphaSignal HIGH "OpenAI built its own chip in 9 months—here's what changes for API cost" — Mistral OCR 4 has been released with a 72% win rate across 600+ real-world documents and it returns a full map of the document including bounding boxes type labels and confidence scores)*

- **2026-06-25-morning**: **Mistral announces OCR 4**, document-intelligence with structured content extraction (bounding boxes + confidence scores), 170 languages, single-container deployment, integrates into enterprise search + structured-data pipelines. tokens& adds: "built specifically for RAG pipelines, with benchmark numbers that are turning heads in the industry." Cross-newsletter convergence (TLDR AI HIGH + tokens& HIGH). First publicly framed *successor to [[mistral-ocr-3]]* in this wiki — *source: data/summaries/2026-06-25-morning.json (TLDR AI HIGH — Mistral announced OCR 4 / structured content extraction / bounding boxes and confidence scores / 170 languages / single container / enterprise search + structured data pipelines; tokens& HIGH — Mistral has released OCR 4 built specifically for RAG pipelines with benchmark numbers that are turning heads in the industry)*

## Key Facts

- Vendor: [[mistral]]
- Language support: 170 languages
- Output: structured content extraction with bounding boxes + **type labels** + confidence scores — framed as "**full map of the document**" (spatial overlay combining location + semantic category + uncertainty)
- Benchmark: **72% win rate across 600+ real-world documents** (AlphaSignal HIGH)
- Deployment: single-container
- Integration: enterprise search + structured-data pipelines
- Use case framing: built specifically for RAG pipelines (tokens&)
- Predecessor: [[mistral-ocr-3]] (~97% accuracy, strong on European documents)

## Open Questions

- Specific benchmark numbers vs [[mistral-ocr-3]] / [[deepseek-ocr]] / [[glm-ocr]] (tokens& cites "benchmark numbers turning heads" but exact scores undisclosed)
- Pricing / licensing (open-weights vs proprietary)
- Inference latency profile
- Whether OCR 4 is bundled into [[mistral-studio]] or shipped standalone

## Sources

- data/summaries/2026-06-25-morning.json (TLDR AI HIGH — Mistral announced OCR 4 / 170 languages / single container / RAG-pipeline framing; tokens& HIGH — Mistral has released OCR 4 built specifically for RAG pipelines / benchmark numbers turning heads)
