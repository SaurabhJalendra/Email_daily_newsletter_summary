---
name: System One Models
description: Emerging class of decision-only AI models — return typed structured judgments (choices, scores, probabilities) with calibrated confidence rather than free-text tokens; coined by TypeSafe AI's Jev, canonicalized by Simon Willison; open alternatives include Laya and CLM-8B
type: topic
---

# System One Models

> **Type**: topic
> **First mentioned**: 2026-09-17-morning (introduced alongside [[jev]] launch)
> **Last updated**: 2026-09-28-morning
> **Status**: active
> **Related**: [[jev]], [[typesafe-ai]], [[model-routers]], [[agent-frameworks]], [[llm-inference-optimization]], [[computer-use]]

## Summary

**System One models** are an emerging class of AI models designed to make **fast, structured, probabilistic judgments that software can consume directly** — rather than generating conversational text. Named after Kahneman's *System 1* (rapid, intuitive decision-making), the class was introduced by [[typesafe-ai]] alongside its [[jev]] launch in September 2026 and rapidly canonicalized in the developer press by Simon Willison and others as *"decision models"*.

System One outputs are typed values — categories, ratings, yes/no decisions, and calibrated confidence scores — drawn from a **predefined answer space** so the model is architecturally *incapable of hallucinating* values outside that space. The class targets high-volume, narrowly defined decisions where general-purpose LLM cost and latency are prohibitive: classification, routing, tool selection, approvals, retries, guardrails, and escalation. TypeSafe's Jev reports ~70–500 ms latency and 40–200× cost/latency improvements over comparable frontier-LLM workflows for these workloads.

The emerging "heterogeneous stack" framing pairs three tiers: **conventional code** for explicit rules, **decision models** for fuzzy structured choices, and **generative models** for open-ended tasks — leaving expensive frontier models to do what they are good at while cheaper decision models handle selection, routing, and verification.

## Timeline

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
- **Named exemplars**: [[jev]] (TypeSafe AI, closed-weights) + Laya (Convai Innovations, 421M ModernBERT, Apache 2.0) + CLM-8B (contrastive language model, 9× faster than Jev on some workloads) + Bespoke Nimble (LoRA-Qwen3.5-9B) + Kev-0.5B (Qwen2.5-0.5B, MacBook-runnable) + DiffusionGemmaJev + SemIf/OpenJev + Jared Palmer's 0.5B open-source decision model
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
