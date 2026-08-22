---
name: Mistral Agentic Search
description: Mistral's five-operation agentic search framework (search + open + navigate + read + grep) — enables an LLM to inspect long documents, follow references, and verify an answer instead of accepting the first retrieved chunks; FinanceBench 26.7% → 86%
type: product
---

# Mistral Agentic Search

> **Type**: product
> **Vendor**: [[mistral]]
> **First mentioned**: 2026-08-22-morning
> **Last updated**: 2026-08-22-morning (**Created — TLDR AI MEDIUM cycle-headline *"Mistral Agentic Search 🔍"*: *"Mistral's Agentic Search gives a model five operations—search, open, navigate, read, and grep—enabling it to inspect long documents, follow references, and verify an answer instead of accepting the first retrieved chunks. In Mistral's tests, the loop raised FinanceBench correctness from 26.7% to 86% and reduced tail latency"*. First publicly framed on this cycle: (a) **Five-operation named-primitive-set (search + open + navigate + read + grep) canonical anchor** — first publicly framed *concrete-five-operation-named-primitive-set* for agentic-search on Mistral in this wiki (structurally distinct from generic RAG which offers only *retrieve-then-generate* two-primitive loop); canonicalizes *file-system-metaphor primitive-set* for agentic document-inspection substrate; (b) **FinanceBench 26.7% → 86% concrete benchmark-multiplier anchor** — first publicly framed *~3.2× correctness-multiplier from agentic-search substrate* on Mistral in this wiki; canonicalizes agentic-search-as-benchmark-multiplier reference-example likely widely cited going forward; (c) **"Reduced tail latency" counter-intuitive latency-anchor** — first publicly framed *agentic-search-improves-tail-latency vs single-shot-RAG* posture (structurally counter-intuitive since agentic loops typically increase latency; Mistral's framing implies avoiding cascading-wrong-retrieval retry-loops); (d) **"Follow references + verify answer instead of accepting first retrieved chunks" canonical framing** — first publicly framed *verify-before-accept posture* on agentic RAG in this wiki; extends the mid-2026 [[graph-engineering]] + verifier-tier arc into a *first-class product-tier surface*. See [[mistral]] + [[agent-frameworks]] + [[graph-engineering]] — *source: data/summaries/2026-08-22-morning.json (TLDR AI MEDIUM "ChatGPT Apple Messages 💬, Anthropic's meeting recorder 💼, Mistral Agentic Search 🔍")*)
> **Status**: shipped (per 2026-08-22-morning TLDR AI MEDIUM disclosure)
> **Related**: [[mistral]], [[agent-frameworks]], [[graph-engineering]]

## Summary

Mistral Agentic Search is a five-operation agentic-search framework from [[mistral]] that gives a model access to `search + open + navigate + read + grep` as named primitives — a file-system-metaphor set that lets the model inspect long documents, follow cross-references, and verify an answer rather than accepting the first-retrieved chunks. Where classic RAG offers only a two-primitive `retrieve + generate` loop, Agentic Search adds *navigation + verification* as first-class primitives.

The headline benchmark result is a **FinanceBench correctness jump from 26.7% to 86%** using the five-op loop — roughly a **3.2× multiplier** over baseline RAG on that benchmark. Mistral also reports **reduced tail latency**, framing agentic search as avoiding the cascading-wrong-retrieval retry loops that hurt single-shot RAG on hard queries. The five-op set positions Agentic Search alongside Xiaomi's [[harnessx]] agent-foundry and cross-vendor primitive-taxonomy discourse ([[graph-engineering]], DeepSeek Harness) as canonical mid-2026 *named-primitive-set-substrate* for agentic workflows.

## Timeline

- **2026-08-22-morning**: Created — Mistral ships Agentic Search with five named primitives; FinanceBench 26.7% → 86% + reduced tail latency — *source: data/summaries/2026-08-22-morning.json (TLDR AI MEDIUM "ChatGPT Apple Messages 💬, Anthropic's meeting recorder 💼, Mistral Agentic Search 🔍")*

## Key Facts

- Vendor: [[mistral]]
- Named primitive-set: `search`, `open`, `navigate`, `read`, `grep` (five operations, file-system-metaphor)
- Benchmark: FinanceBench correctness 26.7% → 86% (~3.2× multiplier over baseline RAG)
- Latency: reduced tail latency vs single-shot RAG per Mistral tests
- Positioning: agentic-RAG substrate distinct from classic retrieve-then-generate two-primitive loop
- Adjacent products: [[deepseek-harness]] (agent-primitives set), [[harnessx]] (nine-component foundry), OpenAI Assistants API `file_search`

## Open Questions

- Which Mistral model tier is Agentic Search optimized for (Large 3, Medium, Small, or model-agnostic)?
- Is the five-op set open-sourced as an SDK/primitive-library or Mistral-API-only?
- What is the pricing model — bundled with Mistral Studio, per-operation, or subscription-tier?
- Are there benchmarks beyond FinanceBench (e.g., HotpotQA, MuSiQue, LongBench)?

## Sources

- data/summaries/2026-08-22-morning.json (TLDR AI MEDIUM "ChatGPT Apple Messages 💬, Anthropic's meeting recorder 💼, Mistral Agentic Search 🔍")
