---
name: System One Models
description: Emerging class of decision-only AI models — return typed structured judgments (choices, scores, probabilities) with calibrated confidence rather than free-text tokens; coined by TypeSafe AI's Jev, canonicalized by Simon Willison; open alternatives include Laya and CLM-8B
type: topic
---

# System One Models

> **Type**: topic
> **First mentioned**: 2026-09-17-morning (introduced alongside [[jev]] launch)
> **Last updated**: 2026-10-05-morning (**NLP Newsletter MEDIUM *"Top AI Papers of the Week (Sep 28 - Oct 4)"* ships **Jev-Mem** — *"a memory system that borrows its design from System-One/System-Two cognition"* + *"hands decisions about memory organization and retrieval to a lightweight controller, improving answer quality while reducing memory latency"*. First-in-wiki *concrete named System-One/System-Two-cognition-inspired memory-system canonical research anchor* on the memory-tier substrate (structurally significant three ways — (i) extends the System-One terminology from *decision-model substrate* ([[jev]] + [[clef]]) into *memory-controller substrate* — graduates the Kahneman-System-1/System-2 twin-cognition framing from *isolated-decision-model vocabulary* into *memory-architecture-tier design-primitive*; (ii) productizes a *lightweight-controller-for-memory-organization + lightweight-controller-for-memory-retrieval + improved-answer-quality + reduced-memory-latency four-primitive canonical research anchor cluster* on the mid-to-late-2026 agent-memory substrate; (iii) likely durable reference-anchor for future System-One/System-Two-architecture-across-the-agent-stack discussion — canonicalizes the System-One/System-Two twin-cognition framing as *canonical cross-substrate design-primitive* that spans decision-model-tier ([[jev]] + [[clef]]) + memory-controller-tier (Jev-Mem) within one quarter). See [[jev]] + [[ai-memory]] + [[agent-frameworks]] — *source: data/summaries/2026-10-05-morning.json (NLP Newsletter MEDIUM "🥇Top AI Papers of the Week")*)
> **Previously updated**: 2026-10-04-morning (**[[cloudflare]]'s [[clef]] (27B) + Clef-flash (9B, Qwen3.5-9B fine-tune) land on [[ollama]] via `/v1/systemone` endpoint with concrete Cloudflare-reported 13×-faster-than-[[jev]] benchmark + hosted median latencies 209.3 ms (Clef) + 38.8 ms (Clef-flash) + image-input multimodal support canonical anchor cluster**. Graduates the System-One substrate into a *first-party frontier-infra-vendor-shipped multimodal (text + image) decision-model tier* with concrete-vendor-reported benchmark-advantage-at-Jev-API-surface. Ollama's `/v1/systemone` endpoint canonicalized as *multi-vendor local-runtime decision-model API standard* carrying Bespoke Nimble + Together AI Tev1 + Cloudflare Clef/Clef-flash within two weeks of 09-30 endpoint-launch. See [[clef]] + [[cloudflare]] + [[ollama]] + [[jev]] — *source: data/summaries/2026-10-04-morning.json (Ollama Newsletter MEDIUM "Clef and Clef Flash Decision Models are now on Ollama")*)
> **Previously updated**: 2026-09-28-morning
> **Status**: active
> **Related**: [[jev]], [[clef]], [[typesafe-ai]], [[cloudflare]], [[ollama]], [[model-routers]], [[agent-frameworks]], [[llm-inference-optimization]], [[computer-use]]

## Summary

**System One models** are an emerging class of AI models designed to make **fast, structured, probabilistic judgments that software can consume directly** — rather than generating conversational text. Named after Kahneman's *System 1* (rapid, intuitive decision-making), the class was introduced by [[typesafe-ai]] alongside its [[jev]] launch in September 2026 and rapidly canonicalized in the developer press by Simon Willison and others as *"decision models"*.

System One outputs are typed values — categories, ratings, yes/no decisions, and calibrated confidence scores — drawn from a **predefined answer space** so the model is architecturally *incapable of hallucinating* values outside that space. The class targets high-volume, narrowly defined decisions where general-purpose LLM cost and latency are prohibitive: classification, routing, tool selection, approvals, retries, guardrails, and escalation. TypeSafe's Jev reports ~70–500 ms latency and 40–200× cost/latency improvements over comparable frontier-LLM workflows for these workloads.

The emerging "heterogeneous stack" framing pairs three tiers: **conventional code** for explicit rules, **decision models** for fuzzy structured choices, and **generative models** for open-ended tasks — leaving expensive frontier models to do what they are good at while cheaper decision models handle selection, routing, and verification.

## Timeline

- **2026-10-05-morning**: **NLP Newsletter *Top AI Papers of the Week (Sep 28 - Oct 4)* ships Jev-Mem — System-One/System-Two-cognition-inspired memory system with lightweight controller for memory organization + retrieval; improves answer quality + reduces memory latency.** First-in-wiki *concrete System-One/System-Two-cognition-inspired memory-system canonical research anchor* — graduates the Kahneman-System-1/System-2 twin-cognition framing from *isolated-decision-model vocabulary* ([[jev]] + [[clef]]) into *memory-architecture-tier design-primitive* within one quarter. See [[jev]] + [[ai-memory]] + [[agent-frameworks]] — *source: data/summaries/2026-10-05-morning.json (NLP Newsletter MEDIUM "🥇Top AI Papers of the Week")*

- **2026-10-04-morning**: **[[cloudflare]]'s [[clef]] (27B) + Clef-flash (9B, Qwen3.5-9B fine-tune) land on [[ollama]] via `/v1/systemone` endpoint** with concrete Cloudflare-reported 13×-faster-than-[[jev]] at median across 43 benchmark runs + hosted median latencies 209.3 ms (Clef) + 38.8 ms (Clef-flash) + image-input multimodal support. First-in-wiki *first-party frontier-infra-vendor-shipped multimodal (text + image) decision-model tier* with concrete-benchmarked advantage at Jev's own API-surface. Ollama's `/v1/systemone` endpoint canonicalized as *multi-vendor local-runtime decision-model API standard* — Bespoke Nimble + Together AI Tev1 + Cloudflare Clef/Clef-flash within two weeks of 09-30 endpoint-launch. See [[clef]] + [[cloudflare]] + [[ollama]] + [[jev]] — *source: data/summaries/2026-10-04-morning.json (Ollama Newsletter MEDIUM "Clef and Clef Flash Decision Models are now on Ollama")*

- **2026-09-28-morning**: **AlphaSignal MEDIUM canonical "System One models are carving out a new layer in the AI stack" framing anchor + emerging three-tier heterogeneous stack canonical framing (code + decision models + generative models) + CLM-8B named contrastive-language-model alternative canonical anchor + Laya 421M ModernBERT ~33ms/T4 canonical benchmark anchor + heterogeneous-stack division-of-labor framing (generation for LLMs; selection/routing/verification for decision models)** — canonicalizes late-Sep-2026 as *canonical concrete-System-One-model-class-tier inflection window* — *source: data/summaries/2026-09-28-morning.json (AlphaSignal MEDIUM "🚀 System One models are carving out a new layer in the AI stack"; The AI Corner HIGH "Your AI Agent Might Be Paying $11,000 a Month to Answer Yes or No"; Abhijay's AI Action Letter MEDIUM)*

- **2026-09-22-evening**: **Simon Willison "System One aka Decision Models" third-party canonical framing anchor** — via TLDR MEDIUM body-link, canonicalizes System One as *concrete-third-party-named-model-class canonical anchor* accepting text inputs and returning floating-point numbers corresponding to categories, yes/no questions, ratings, and confidence scores — *source: data/summaries/2026-09-22-evening.json (AI Supremacy HIGH; TLDR MEDIUM)*

- **2026-09-17-morning**: **TLDR AI MEDIUM canonicalizes "System One Model" as concrete-model-class named-tier** — cross-cohort naming resolves the 09-16-evening launch's decision-model-without-a-class-name into a *concrete named-class canonical anchor*. Jev formally introduced as the first System One model — *source: data/summaries/2026-09-17-morning.json (TLDR AI MEDIUM "Jev ⚡, Periodic Neon 🧬, Gemini 3.8 Live 💬"; Superhuman MEDIUM; Matt from FutureTools MEDIUM; tokens& MEDIUM; AI Breakfast MEDIUM)*

## Key Facts

- **Coined by**: [[typesafe-ai]] (Diogo Almeida) for the [[jev]] launch
- **Named after**: Kahneman's *System 1* — rapid, intuitive decision-making
- **Output shape**: typed structured values (categories, ratings, yes/no probabilities, confidence scores) from a *predefined answer space* — not free-form tokens
- **Architectural claim**: mathematically incapable of hallucinating values (Uncovering AI framing)
- **Target workloads**: classification, routing, tool selection, approvals, retries, guardrails, verification, escalation
- **Cost/latency envelope (Jev-reported)**: 70–500 ms; 40–200× lower latency; $0.042 per million input tokens with output free
- **Named exemplars**: [[jev]] (TypeSafe AI, closed-weights) + [[clef]] (Cloudflare, 27B Clef + 9B Clef-flash fine-tuned from Qwen3.5-9B, Apache 2.0, 13× faster than Jev at median across 43 benchmark runs, 38.8 ms hosted median latency for Clef-flash, multimodal text + image) + Laya (Convai Innovations, 421M ModernBERT, Apache 2.0) + CLM-8B (contrastive language model, 9× faster than Jev on some workloads) + Bespoke Nimble (LoRA-Qwen3.5-9B) + Tev1 (Together AI, 4B + 0.8B) + Kev-0.5B (Qwen2.5-0.5B, MacBook-runnable) + DiffusionGemmaJev + SemIf/OpenJev + Jared Palmer's 0.5B open-source decision model
- **Canonical local-runtime endpoint**: Ollama `/v1/systemone` on Ollama v0.35.1+ carries three third-party vendors (Bespoke Nimble + Together AI Tev1 + Cloudflare Clef/Clef-flash) within two weeks of endpoint launch, canonicalizing it as *multi-vendor local-runtime decision-model API standard*
- **Emerging-stack framing**: three-tier heterogeneous stack — conventional code (explicit rules) + decision models (fuzzy structured choices) + generative models (open-ended tasks)
- **Third-party canonical framing**: Simon Willison — *"System One aka Decision Models"* (simonwillison.net/2026/Sep/21/jev)

## Open Questions

- Does the "System One" terminology persist as a canonical model-class name across vendors, or does the field consolidate under an alternative label (e.g., *decision models*, *typed-output classifiers*)?
- Will major frontier labs (OpenAI, Anthropic, Google) ship first-party System One offerings, or leave the tier to specialist vendors like TypeSafe AI?
- Calibration methodology convergence — Platt scaling, isotonic regression, conformal prediction, or a novel decision-calibrated approach?
- Whether the class evolves beyond text-input-to-typed-output into multimodal decision substrates (image → decision, audio → decision)

## Sources

- data/summaries/2026-09-28-morning.json (AlphaSignal MEDIUM "🚀 System One models are carving out a new layer in the AI stack"; The AI Corner HIGH "Your AI Agent Might Be Paying $11,000 a Month to Answer Yes or No"; Abhijay's AI Action Letter MEDIUM; NLP Newsletter MEDIUM including "JEV-as-a-Judge" paper)
- data/summaries/2026-09-22-evening.json (AI Supremacy HIGH; TLDR MEDIUM — Simon Willison third-party framing)
- data/summaries/2026-09-17-morning.json (TLDR AI MEDIUM; Superhuman MEDIUM; Matt from FutureTools MEDIUM; tokens& MEDIUM; AI Breakfast MEDIUM — "System One Model" model-class naming cross-cohort)
