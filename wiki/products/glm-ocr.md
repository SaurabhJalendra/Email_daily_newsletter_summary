---
name: GLM-OCR
description: Zhipu AI's open-source state-of-the-art OCR model; ranks #1 on OmniDocBench, handles handwriting/tables/code layouts
type: product
---

# GLM-OCR

> **Type**: product
> **First mentioned**: 2026-02-04
> **Last updated**: 2026-02-04
> **Status**: active (open-source)
> **Related**: [[zhipu-ai]], [[deepseek-ocr]], [[mistral-ocr-3]], [[glm-4-7]]

## Summary

GLM-OCR is [[zhipu-ai]]'s open-source OCR model, released in early February 2026 as a direct challenger to PaddleOCR and [[deepseek-ocr]] on document-understanding benchmarks. It ranks #1 on OmniDocBench and demonstrates strong handling of real-world document edge cases — handwriting, complex tables, and code-heavy layouts — while processing PDFs at ~1.86 pages per second. The release extends the open-source Chinese frontier-lab push into specialized document-AI, alongside [[deepseek-ocr]] and [[mistral-ocr-3]].

## Timeline

- **2026-02-04**: GLM-OCR launches and tops OmniDocBench — open-source, SOTA on handwriting / tables / code-heavy layouts; ~1.86 PDF pages/sec; frames as "Chinese lab dethroning DeepSeek" in document OCR — *source: The Code by Superhuman "Chinese lab dethroned DeepSeek"*

## Key Facts

- Vendor: [[zhipu-ai]]
- License: open-source
- Benchmark: #1 on OmniDocBench at release
- Throughput: ~1.86 PDF pages/second
- Strengths: handwriting, tables, code-heavy layouts
- Positioning: overtakes PaddleOCR and [[deepseek-ocr]] on benchmark leadership

## Open Questions

- Parameter count / architecture (VLM vs dedicated OCR stack)?
- License terms (MIT / Apache vs Zhipu custom)?
- Language coverage beyond Chinese + English?
- Inference cost and GPU footprint?

## Sources

- data/summaries/2026-02-04.json (The Code by Superhuman — A Chinese lab dethroned DeepSeek)
