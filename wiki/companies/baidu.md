---
name: Baidu
description: Chinese search/cloud giant; releases ERNIE-4.5-VL-Thinking as open-source multimodal reasoning model
type: company
---

# Baidu

> **Type**: company
> **First mentioned**: 2025-11-13
> **Last updated**: 2026-07-21-morning (**Baidu releases tiny 3B open-source **Unlimited-OCR** model — reads entire multi-page documents in single pass at 93.23% accuracy on OmniDocBench; uses novel Reference Sliding Window Attention (R-SWA) mechanism; runs on single GPU with 8GB+ VRAM**. AlphaSignal HIGH: ***"Baidu has released a tiny 3B open-source OCR model called Unlimited-OCR, which can read entire multi-page documents in a single pass, achieving a 93.23% accuracy on the OmniDocBench benchmark. The model uses a new attention mechanism called Reference Sliding Window Attention (R-SWA) and can run on a single GPU with 8GB+ VRAM"***. First publicly framed on this cycle: (a) *Unlimited-OCR* named product — first publicly framed *Baidu OCR-specialized model* in this wiki (extends prior Baidu ERNIE + ERNIE-VL family into a *document-intelligence-tier vertical*); (b) *Reference Sliding Window Attention (R-SWA)* named attention mechanism — first publicly framed *R-SWA* named attention architecture in this wiki + Baidu-originated architectural contribution to the multi-page-document-processing tier; (c) *93.23% OmniDocBench accuracy at 3B / 8GB-VRAM single-GPU footprint* — first publicly framed *concrete OmniDocBench score + concrete VRAM-tier deployment envelope* on a Chinese-open-weight OCR model in this wiki. Structurally significant three ways: (i) **Baidu enters OCR/document-intelligence category with tiny-open-weight tier** — sibling positioning to [[mistral-ocr-4]] (Mistral OCR successor with 170 languages + bounding boxes for RAG pipelines) + [[chandra-ocr-2]] (Chandra OCR topping olmOCR on tables + tiny-text) + [[deepseek-ocr]] (10× vision-token compression); extends the mid-2026 *frontier-OCR-tier open-weights arms race* into Baidu-tier participation; (ii) **R-SWA attention mechanism as architectural contribution** — first publicly framed *Baidu-originated named attention mechanism* in this wiki, structurally novel because Baidu's prior contribution profile has centered on ERNIE-family model releases rather than named-attention-mechanism papers; positions Baidu on the architectural-contribution axis alongside [[kimi-k3]]'s Kimi Delta Attention + Zhipu GLM's sparse-attention + DeepSeek's V3.2 architectural work; (iii) **3B parameter count + 8GB VRAM = truly consumer-tier deployment** — the *"runs on single GPU with 8GB+ VRAM"* framing sits at the *consumer-edge tier* comparable to [[bonsai-27b]] on-phone-tier + [[gemma-3-270m]] mobile-tier; graduates document-intelligence-tier deployment from *enterprise-GPU-cluster tier* into *single-consumer-GPU tier*, structurally significant for practitioners deploying document-processing at edge. Activates Baidu page from *stale (2025-11-14 last updated)* → *active* status. Body-recovery items: (a) Unlimited-OCR license terms (Apache 2.0? modified?), (b) Hugging Face repo URL, (c) R-SWA paper reference / arxiv preprint, (d) benchmark comparison against [[mistral-ocr-4]] + [[chandra-ocr-2]] + [[deepseek-ocr]] + [[glm-ocr]], (e) integration with Baidu ERNIE ecosystem — *source: data/summaries/2026-07-21-morning.json (AlphaSignal HIGH "LocalAI depth-anything 🎥, Baidu Unlimited-OCR 3B 📄, Cline K3 vs Fable")*)
> **Previously updated**: 2025-11-14
> **Status**: active
> **Related**: [[ernie-4-5-vl-thinking]], [[alibaba]], [[deepseek]], [[moonshot-ai]]

## Summary

Baidu is the Chinese search, cloud, and AI company behind the ERNIE model family. In mid-November 2025 it joined [[alibaba]] and [[moonshot-ai]] on the "Chinese open-source catches frontier US closed-source" thesis by releasing [[ernie-4-5-vl-thinking]] — an open-source multimodal reasoning model positioned as competitive with GPT-5 and Gemini 2.5 Pro despite being substantially smaller in parameter count.

## Timeline

- **2025-11-14**: Releases ERNIE-4.5-VL-28B-A3B-Thinking — open-source multimodal reasoning, rivals larger competing systems — *source: AlphaSignal "Baidu releases ERNIE-4.5-VL"*
- **2025-11-13**: Baidu drops open-source multimodal AI that rivals GPT-5 (ERNIE 4 Vision framing) — *source: World of AI "Baidu DROPS an OPEN-SOURCE AI that Rivals GPT-5!"*

## Key Facts

- Flagship model family: ERNIE (open weights)
- Latest release: [[ernie-4-5-vl-thinking]] (Nov 2025)
- Positioning: one of the three principal Chinese open-source frontier labs alongside [[alibaba]] and [[moonshot-ai]]

## Open Questions

- Commercial roadmap beyond open-weights releases — is there a closed-source ERNIE-Pro tier?
- Licensing details for ERNIE weights (fully-permissive or research-restricted)?
- Deployment targets — Baidu Cloud, Hugging Face, or both?

## Sources

- data/summaries/2025-11-13.json (World of AI — Baidu DROPS an OPEN-SOURCE AI that Rivals GPT-5)
- data/summaries/2025-11-14.json (AlphaSignal — Baidu releases ERNIE-4.5-VL)
