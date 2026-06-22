---
name: Google AI Studio
description: Google's free playground for testing and comparing AI models including Gemini 3.5 Flash — run multiple models side-by-side, tweak settings, build prompts, accessed with a Google login
type: product
---

# Google AI Studio

> **Type**: product
> **Vendor**: [[google]]
> **First mentioned**: 2026-06-22-evening
> **Last updated**: 2026-06-22-evening (The AI Field "GPT-5.6 is already inside ChatGPT Pro" lead Top Story #3: ***"Google introduced AI Studio, a free playground for testing and comparing AI models"*** — first publicly framed cross-newsletter coverage of AI Studio as a *free model-comparison playground* in this wiki, positioned as a developer-onboarding surface for Gemini 3.5 Flash and the broader Gemini API stack)
> **Status**: launched (free with Google login)
> **Related**: [[google]], [[gemini]], [[gemini-3-5-flash]], [[gemini-3-1-pro]], [[gemini-3-1-flash-lite]], [[gemini-3-1-flash-live]], [[gemma-4]], [[chatgpt-pro-tier]]

## Summary

Google AI Studio is [[google]]'s **free playground for testing and comparing AI models**, allowing users to run and compare models side-by-side, tweak settings, and build prompts — accessed with a standard Google login. Lands as a Top Story #3 in The AI Field Newsletter's 2026-06-22-evening HIGH-priority cycle alongside GPT-5.6's appearance inside ChatGPT Pro, [[glm-5-2]]'s coding-benchmark win, [[claude-opus-4-8]] re-anchoring, and Midjourney's 60-second Body Scanner. Structurally complements the Gemini API + Vertex AI developer-tooling stack by giving newcomers a *no-code, no-cost* surface to evaluate the Gemini 3.5 family ([[gemini-3-5-flash]] + Pro) and lower-tier Gemini models before committing to API integration. Reads as Google's *developer-acquisition funnel* equivalent of [[openai]]'s ChatGPT Playground and Anthropic's Claude.ai workbench — a free top-of-funnel UX that drives toward paid Gemini API + Vertex AI consumption.

The "compare models side by side" framing is the structurally novel UX axis vs prior generation playgrounds: AI Studio appears to support running multiple Gemini variants (and possibly third-party models) on the same prompt simultaneously, making it a head-to-head model-evaluation surface rather than a single-model-at-a-time interface. This makes it a useful evaluation tool for developers comparing Gemini 3.5 Flash vs Gemini 3.1 Pro vs Gemma 4 for a specific use case before committing to a paid API tier.

## Timeline

- **2026-06-22-evening**: **First publicly framed cross-newsletter coverage of Google AI Studio in this wiki**. (1) **The AI Field Newsletter** Top Story #3: ***"Google introduced AI Studio, a free playground for testing and comparing AI models — This matters because it provides developers with a powerful tool for exploring and evaluating AI models, potentially accelerating innovation in the field"***. Body framing: ***"Google AI Studio: Google introduced AI Studio, a free playground for testing and comparing AI models, including the new Gemini 3.5 Flash. The platform allows users to run and compare models side by side, tweak settings, and build prompts, all for free with a Google login"***. (2) Structural framing: positions AI Studio as a *free developer-acquisition funnel* for the Gemini API + Vertex AI paid-tier consumption stack — analogous to OpenAI's ChatGPT Playground in providing a no-cost top-of-funnel UX. (3) **Cycle structural significance**: AI Studio's launch lands the same cycle as GPT-5.6 confirmed inside ChatGPT Pro + GLM-5.2's FrontierSWE 74.4% / 1/6-cost-of-GPT-5.5 framing + Claude Opus 4.8 re-anchoring + Anthropic Mythos broke-into-classified-systems framing — Google's AI Studio reads as a *competitive response* to the multi-vendor model-comparison conversation that the cycle's flagship-model-release wave is generating; gives developers a *vendor-controlled comparison surface* where Google's models can be evaluated head-to-head with Google's own framing rather than via third-party benchmark aggregators (Artificial Analysis, LMArena, AIDER Polyglot, etc.). Body-recovery items: (a) which non-Google models AI Studio supports for side-by-side comparison (is it Gemini-only or cross-vendor), (b) the specific Gemini variant lineup (Flash + Pro + Flash-Lite + Live + TTS + Gemma 4 + diffusion-gemma), (c) prompt-history and project-saving features, (d) usage limits (token budget per session, per-day cap, per-account cap), (e) AI Studio's relationship to the existing Vertex AI Studio / Gemini API console UX (is this a rebrand or a parallel surface for non-paying developers) — *source: data/summaries/2026-06-22-evening.json (The AI Field — GPT-5.6 is already inside ChatGPT Pro / Top Story #3 Google introduced AI Studio, a free playground for testing and comparing AI models / Google AI Studio: Google introduced AI Studio, a free playground for testing and comparing AI models, including the new Gemini 3.5 Flash / platform allows users to run and compare models side by side, tweak settings, and build prompts, all for free with a Google login)*

## Key Facts

- Vendor: [[google]]
- Cost: **free** (Google login required)
- Core capability: run and compare AI models **side by side**, tweak settings, build prompts
- Featured models: includes the new [[gemini-3-5-flash]]; likely full Gemini family + Gemma open-weights tier
- Positioning: developer-acquisition funnel for paid Gemini API / Vertex AI consumption
- Launch surface: web-based playground accessed with standard Google login (no developer account creation friction)
- Closest competitive analogs: OpenAI ChatGPT Playground, Anthropic Claude.ai workbench, Mistral Studio, OpenRouter playground

## Open Questions

- Does AI Studio support cross-vendor model comparison (Gemini vs Claude / GPT / Llama / GLM) or Google-models-only?
- Usage limits per session / day / account — free-tier token budget and rate limits
- Whether AI Studio is a rebrand of the existing Google AI Studio (ai.google.dev) or a parallel new surface
- Differences between AI Studio (free) and Vertex AI Studio (paid enterprise tier)
- Prompt history, project saving, evaluation harness features
- Tool-use + MCP-connector support — does AI Studio expose Gemini's agentic-tool-use capabilities?
- Multimodal input — image / audio / video upload for testing
- Pricing migration path — how does AI Studio onboard free users to the paid Gemini API / Vertex AI tier?

## Sources

- data/summaries/2026-06-22-evening.json (The AI Field — GPT-5.6 is already inside ChatGPT Pro / Top Story #3 Google introduced AI Studio, a free playground for testing and comparing AI models / Google AI Studio: free playground for testing and comparing AI models, including the new Gemini 3.5 Flash / platform allows users to run and compare models side by side, tweak settings, and build prompts, all for free with a Google login)
