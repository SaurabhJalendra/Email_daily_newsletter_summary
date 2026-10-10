---
name: OpenAI Decisions API
description: OpenAI API that turns text and/or images into typed decisions (predicates, choices, scores); Luna-wrapper architecture; $0.10/M input + no output charges
type: product
---

# OpenAI Decisions API

> **Type**: product
> **First mentioned**: 2026-09-30-evening
> **Last updated**: 2026-10-10-evening (**Decision-models product-category day canonicalized — same-day peer-launch cohort anchor cluster: Microsoft-Decision-1 + Perplexity pplx-decider-v1.1-27b + Cloudflare clef + Liquid d1 all shipping same day as the Decisions API's continuing roll-out** — AINews HIGH + daily-digest Top Story #3: *"Decision models have become a product category, with several vendors shipping 'decision' models on the same day, including OpenAI Decisions API, Microsoft-Decision-1, Perplexity pplx-decider-v1.1-27b, Cloudflare clef, and Liquid d1"*. First-in-wiki *concrete OpenAI-Decisions-API-anchored five-vendor-same-day-SKU canonical anchor cluster* on the [[system-one-models]] substrate — productizes Decisions API as *canonical first-frontier-lab-SKU within the five-vendor product-category-day cohort*; graduates the 09-30-evening DevDay launch + 10-07-evening pricing anchor + 10-08-morning public-beta canonical anchor arc into *concrete product-category-formalization-tier canonical anchor*. See [[system-one-models]] this cycle + [[jev]] + [[typesafe-ai]] + [[clef]] — *source: data/summaries/2026-10-10-evening.json (AINews HIGH "[AINews] TypeSafe/Jev at >$100M ARR, $7.5B valuation 3 weeks after launch"; daily-digest Top Story #3)*)
> **Previously updated**: 2026-10-08-morning (cycle-N restatement + concrete-"up-to-10×-faster-than-GPT-6-Luna" latency anchor + concrete-"public-beta" status anchor — TLDR AI MEDIUM: *"OpenAI's Decisions API is now available in public beta, enabling faster decision-making up to 10 times faster than GPT-6 Luna through the Responses API, and supporting text and image inputs with three kinds of outputs: predicates, choices, and scores"*. First-in-wiki concrete *up-to-10×-faster-than-Luna* latency-tier canonical anchor on Decisions API — sits alongside the 10-01-morning "Luna wrapper for now" architecture framing and reads as *Decisions API's typed-output path short-circuits most of Luna's work* for latency gains. Also first-in-wiki *concrete "public beta" release-stage canonical anchor* on Decisions API)
> **Status**: launched (DevDay 2026)
> **Related**: [[openai]], [[gpt-6-luna]], [[jev]], [[dots]], [[openai-agents-api]], [[chatgpt-spaces]], [[openai-codex]], [[ultrafast-api]], [[system-one-models]]

## Summary

The Decisions API is [[openai]]'s DevDay 2026 (2026-09-30) endpoint for turning text and/or images into *typed decisions* — predicates (true/false), choices (one of N labels), or scores — rather than free-form generated text. It targets classification, routing, triage, and content-moderation workloads where downstream code wants a structured answer, not a chat completion. Architecturally the Decisions API is reported to be a Luna wrapper for now (see [[gpt-6-luna]]) and is priced at **$0.10 per million input tokens with no output charges** per the 10-07-evening AINews HIGH canonical pricing anchor.

OpenAI positions the Decisions API as a competitor to [[jev]], Typesafe AI's "System One Model" decision-substrate (see [[system-one-models]]). The product sits alongside [[dots]] (persistent agents), [[chatgpt-spaces]] (shared human/agent workspaces), [[openai-agents-api]], and [[ultrafast-api]] as part of the DevDay 2026 seven-substrate agent-and-decision-stack productization cluster.

## Timeline

- **2026-10-10-evening**: **Decision-models product-category day canonicalized — same-day peer-launch cohort: Microsoft-Decision-1 + Perplexity pplx-decider-v1.1-27b + Cloudflare clef + Liquid d1** all shipping same day; "Decision models have become a product category" canonical framing — *source: data/summaries/2026-10-10-evening.json (AINews HIGH "[AINews] TypeSafe/Jev at >$100M ARR, $7.5B valuation 3 weeks after launch"; daily-digest Top Story #3)*

- **2026-10-08-morning**: Public-beta release-stage canonical restatement + up-to-10×-faster-than-GPT-6-Luna concrete latency anchor via Responses API — TLDR AI MEDIUM: *"OpenAI's Decisions API is now available in public beta, enabling faster decision-making up to 10 times faster than GPT-6 Luna through the Responses API, and supporting text and image inputs with three kinds of outputs: predicates, choices, and scores"* — *source: data/summaries/2026-10-08-morning.json (TLDR AI MEDIUM "Mistral Large 4 🧠, OpenAI Decisions API ❓, Nano Banana 2.1 🍌")*

- **2026-10-07-evening**: **Decisions API $0.10/M-input + no-output-charges concrete-pricing canonical anchor** — AINews HIGH + TLDR MEDIUM twin-newsletter restatement; AINews HIGH: *"OpenAI has launched its Decisions API, which allows users to get predicates, choices, or scores from a model, and is priced at $0.10/M input with no output charges"*; TLDR MEDIUM: *"OpenAI has introduced the Decisions API, which can be used to turn text and images into decisions that applications can use. The API evaluates text, images, or both and returns typed answers, and can be used for tasks such as classifying content and routing requests"* — *source: data/summaries/2026-10-07-evening.json*
- **2026-10-01-morning**: *"Decisions API is a Luna wrapper for now"* concrete-architecture canonical restatement (Latent.Space MEDIUM) — *source: data/summaries/2026-10-01-morning.json*
- **2026-09-30-evening**: **DevDay 2026 launch** — near-instant multiple-choice classification + routing on [[gpt-6-luna]] over text and images; positioned as competitor to [[jev]] — *source: data/summaries/2026-09-30-evening.json (AINews HIGH "[AINews] OpenAI DevDay 2026: Dots, 6.1 Sol, Ultrafast, Decisions API, Agents API, Spaces, Marketplace")*

## Key Facts

- Output tiers: predicates (true/false), choices (one of N), scores
- Modalities: text and/or images
- Architecture: Luna wrapper for now (see [[gpt-6-luna]])
- Pricing: $0.10 per million input tokens; no output charges
- Launched: DevDay 2026 (2026-09-30)
- Competitor to: [[jev]] (Typesafe AI "System One Model")
- Vendor: [[openai]]

## Open Questions

- Latency distribution vs standard chat completions (near-instant framing — numeric p50/p99)?
- Max input length per modality?
- When does Decisions API move off the Luna wrapper to a dedicated decision-trained model?
- Named enterprise reference deployments (routing + classification + content-moderation workflows)?
- Interaction with [[openai-agents-api]] — are agents expected to call the Decisions API for sub-choices?

## Sources

- data/summaries/2026-09-30-evening.json (AINews HIGH "[AINews] OpenAI DevDay 2026: Dots, 6.1 Sol, Ultrafast, Decisions API, Agents API, Spaces, Marketplace, and 1.2 Billion ChatGPT WAU")
- data/summaries/2026-10-01-morning.json (Latent.Space MEDIUM — Decisions API is a Luna wrapper for now)
- data/summaries/2026-10-07-evening.json (AINews HIGH "[AINews] Quasi-Riemann-Hypothesis: OpenAI publishes 722 math papers"; TLDR MEDIUM "Apple's home ecosystem 🏠, OpenAI math 🧮, state of tech 👨‍💻" — $0.10/M-input pricing + no output charges + typed-decision use-case framing)
- data/summaries/2026-10-08-morning.json (TLDR AI MEDIUM "Mistral Large 4 🧠, OpenAI Decisions API ❓, Nano Banana 2.1 🍌" — public beta + up-to-10×-faster-than-GPT-6-Luna via Responses API)
