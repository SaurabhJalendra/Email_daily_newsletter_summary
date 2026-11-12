---
name: Gemini Decisions API
description: Google's Nov 11 2026 specialized endpoint for fast closed-set decisions — powered by Gemini Decision 1 model; evaluates shared multimodal input against up to 1,000 independent questions; 150-250ms latency; $0.10/M input tokens; no output-token charges
type: product
---

# Gemini Decisions API

> **Type**: product
> **Vendor**: [[google]]
> **First mentioned**: 2026-11-12-evening
> **Status**: active
> **Related**: [[google]], [[gemini]], [[model-routers]], [[agent-frameworks]], [[llm-inference-optimization]]

## Summary

The Gemini Decisions API is [[google]]'s Nov 11 2026 specialized endpoint for **fast, closed-set decisions**, powered by the new **Gemini Decision 1** model. Rather than generating text token-by-token, it evaluates shared multimodal input — text, images, audio, video, PDFs — against **up to 1,000 independent questions** per request and returns **probabilities and confidence scores**. Supported tasks include yes/no checks, selecting among up to 255 options, and scoring against a defined rubric, with up to a **256,000-token context window**.

The API is designed for operational AI workloads such as tool selection, model routing, policy enforcement, content moderation, and context evaluation. Google reports **150-250 millisecond end-to-end latency**, pricing of **$0.10 per million input tokens**, **no output-token charges**, and billing of shared input only once per request. It is available through Google AI Studio with broader ecosystem integrations rolling out.

Its structural significance is that it gives developers a lower-cost, more predictable alternative to general-purpose generative models for bounded decisions — potentially improving the speed and economics of AI agents and intensifying competition with similar decision-oriented offerings from other major AI providers.

## Timeline

- **2026-11-12-evening**: **Gemini Decisions API canonical productization anchor + Gemini Decision 1 model canonical anchor + canonical four-primitive pricing + latency + context + question-batch canonical anchor cluster**. TLDR LOW top update + researchFindings.additionalContext (Gemini Decisions API): *"Google introduced the Gemini Decisions API on November 11, 2026, as a specialized endpoint for fast, closed-set decisions powered by the Gemini Decision 1 model. Rather than generating text token by token, it evaluates shared multimodal input — including text, images, audio, video, and PDFs — against up to 1,000 independent questions and returns probabilities and confidence scores. Supported tasks include yes/no checks, selecting among up to 255 options, and scoring against a defined rubric, with up to a 256,000-token context window"* + *"The API is designed for operational AI workloads such as tool selection, model routing, policy enforcement, content moderation, and context evaluation. Google reports 150-250 millisecond end-to-end latency, pricing of $0.10 per million input tokens, no output-token charges, and billing of shared input only once per request; it is available through Google AI Studio, with ecosystem integrations rolling out"*. First-in-wiki: (a) **Gemini Decisions API NEW canonical closed-set-decision specialized-endpoint canonical anchor** — productizes Google as *canonical early-Nov-2026 concrete-first-frontier-lab-ships-dedicated-closed-set-decision-API-separate-from-general-purpose-text-generation substrate operator*; (b) **"Gemini Decision 1" named-model canonical anchor** — first-in-wiki *concrete decision-specialized named-model canonical anchor* on Google substrate; (c) **Up-to-1,000-independent-questions-per-request + up-to-255-options canonical concrete-batch-ceiling canonical anchor pair** — productizes early-Nov-2026 as *canonical concrete-first-moment-named-decision-endpoint-ships-1K-question-batch-plus-255-option-selection substrate operator*; (d) **$0.10/M input tokens + no output-token charges + 150-250ms end-to-end latency + "billing of shared input only once per request" canonical four-primitive pricing-plus-latency-plus-billing canonical anchor cluster** — productizes Gemini Decisions API as *canonical concrete-first-moment-shared-input-billed-once-per-request-across-up-to-1000-questions substrate operator* (likely durable reference-anchor for future decision-oriented-API-economics discussion); (e) **256K-token context window canonical anchor + multimodal-input (text + images + audio + video + PDFs) five-primitive canonical anchor cluster**; (f) **Five canonical target-use-cases — tool selection + model routing + policy enforcement + content moderation + context evaluation** — pairs cycle-structurally with multi-cycle [[model-routers]] + [[openrouter]] + [[jev]] + [[router-ramp]] canonical model-routing + decision-tier canonical arc as *canonical late-2026 concrete-decision-oriented-AI-endpoint canonical anchor cluster* alongside [[agent-frameworks]]. See [[google]] this cycle + [[gemini]] + [[model-routers]] + [[agent-frameworks]] + [[llm-inference-optimization]] — *source: data/summaries/2026-11-12-evening.json (TLDR LOW "Nvidia's CEO search 🔍, AWS emulator 👨‍💻, Gemini Decisions API 💡"; researchFindings.additionalContext — Gemini Decisions API; attribution Google AI Blog + Google AI Studio Decisions API documentation + InfoWorld)*

## Key Facts

- **Vendor**: [[google]]
- **Model**: Gemini Decision 1 (decision-specialized)
- **Launch**: November 11, 2026
- **Access surface**: Google AI Studio (ecosystem integrations rolling out)
- **Capability**: evaluates shared multimodal input against up to 1,000 independent questions per request; returns probabilities + confidence scores
- **Task types**: yes/no checks, selecting among up to 255 options, scoring against a defined rubric
- **Context window**: up to 256,000 tokens
- **Latency**: 150-250 ms end-to-end
- **Pricing**: $0.10 per million input tokens; no output-token charges; shared input billed only once per request
- **Positioning**: cheaper + faster + more predictable alternative to general-purpose generative models for bounded decisions

## Open Questions

- Benchmarks vs general-purpose Gemini (e.g., Gemini 4 Argon / Carbon) on the same closed-set tasks
- Does Gemini Decision 1 share a base with Gemini 4 or is it a separately-trained decision head?
- Fine-tuning + RAG support?
- Availability on Vertex AI + Gemini Enterprise?
- Does "shared input billed once per request" apply across concurrent batches or only within a single call?

## Sources

- data/summaries/2026-11-12-evening.json (TLDR LOW "Nvidia's CEO search 🔍, AWS emulator 👨‍💻, Gemini Decisions API 💡"; researchFindings.additionalContext — Gemini Decisions API; attribution Google AI Blog + Google AI Studio Decisions API documentation + InfoWorld)
