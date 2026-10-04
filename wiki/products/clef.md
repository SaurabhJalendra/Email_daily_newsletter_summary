---
name: Clef
description: Cloudflare's Oct 2 2026 open-source "decision model" family (Clef + Clef-flash) + RL fine-tuning platform; fully Jev-API-compatible, Apache 2.0 on Hugging Face, locally-runnable
type: product
---

# Clef

> **Type**: product
> **Vendor**: [[cloudflare]]
> **First mentioned**: 2026-10-03-morning
> **Last updated**: 2026-10-04-morning (**Clef + Clef-flash available on [[ollama]] via `/v1/systemone` endpoint — concrete parameter counts resolved (27B Clef + 9B Clef-flash fine-tuned from Qwen3.5-9B) + 13× faster than [[jev]] at median across 43 benchmark runs + hosted median latencies 209.3 ms (Clef) + 38.8 ms (Clef-flash) + `ollama pull clef-flash` install command on Ollama v0.35.1+ + Qwen-architecture-based open-source confirmation + Oct 1 2026 Clef-flash release date resolved**. Ollama Newsletter MEDIUM *"Clef and Clef Flash Decision Models are now on Ollama"*: *"Cloudflare's Clef and Clef Flash decision models are now available on Ollama, allowing users to make decisions from text and images by running the models locally. Clef is a 27B model, while Clef Flash is a smaller 9B variant, both supporting images and designed for structured agent workflows such as routing support tickets, classifying images, or escalating cases to humans"* + *"The models can be accessed through Ollama's `/v1/systemone` endpoint and are compatible with the Jev and SystemOne APIs. To use these models, users need to update to Ollama v0.35.1 or later and then pull the clef or clef-flash models using the command `ollama pull clef-flash`"* + *"Clef and Clef Flash are open-source and based on Qwen architectures. They are suited for classification, moderation, routing, extraction, and other decision workflows where structured outputs and low latency matter"* + *"Cloudflare positions the 9B Flash variant for latency-critical workloads, reporting it to be 13× faster than Jev at the median across 43 benchmark runs"*. researchFindings.additionalContext resolves Clef-flash as fine-tuned from Qwen3.5-9B (per Cloudflare's HF model card) + hosted median latencies 209.3 ms (Clef) and 38.8 ms (Clef-flash). First-in-wiki: (a) **27B + 9B concrete parameter-count canonical anchor pair** — resolves the 10-03 open question on parameter counts for both variants in a single cycle; (b) **Clef-flash = Qwen3.5-9B fine-tune canonical base-model anchor** — pairs structurally with [[jev]] clone-cohort precedent (Bespoke Nimble = LoRA-Qwen3.5-9B) as *canonical Qwen3.5-9B-as-default-base-for-decision-model-tier substrate*; (c) **13× faster than [[jev]] at median across 43 benchmark runs concrete-multiplier canonical anchor** — first-in-wiki *concrete Cloudflare-reported Clef-vs-Jev speed-multiplier canonical anchor* on the Oct-2026 System-One substrate — direct challenge-tier to [[jev]]'s 200×-faster-than-generative-LLM framing (positions Clef-flash as *Jev's own 13×-faster competitor at Jev's game*); (d) **209.3 ms + 38.8 ms concrete-hosted-latency canonical anchor pair** — first-in-wiki *concrete hosted-median-latency canonical pair on Clef/Clef-flash substrate* (sits inside the 70–500 ms Jev-reported envelope from [[system-one-models]] canonical anchor — Clef-flash's 38.8 ms sharpens the lower bound by ~2× while Clef's 209.3 ms sits mid-range); (e) **Ollama `/v1/systemone` endpoint re-canonicalized as cross-vendor local-runtime decision-model standard** — same endpoint Ollama launched 09-30-evening for Nimble/Tev1 Jev-cohort now carries Cloudflare's own Clef/Clef-flash — graduates `/v1/systemone` into a *canonical multi-vendor decision-model endpoint* (Bespoke + Together + Cloudflare); (f) **`ollama pull clef-flash` concrete-install-command canonical anchor** — first-in-wiki *concrete Clef-install-command canonical anchor* extending the multi-cycle `ollama pull X` command-family arc into Clef substrate; (g) **Oct 1 2026 Clef-flash release date canonical anchor** — resolves the launch-cycle timing with a concrete day-anchor (sharpens the 10-03 "October 2 2026" launch framing to Oct 1 for Clef-flash + Oct 2 for Cloudflare blog). Structurally significant: **Ollama availability one day after launch + concrete sub-40ms latency + 13× Jev-benchmark + Qwen3.5-9B base canonicalize Clef-flash as *canonical early-Oct-2026 open-source Jev-competitor substrate operator with concrete latency-and-benchmark advantage over Jev at Jev's own API-surface*** — likely-durable reference anchor for future decision-model-vs-decision-model benchmark discussion. See [[ollama]] this cycle + [[jev]] this cycle + [[system-one-models]] this cycle + [[cloudflare]] this cycle — *source: data/summaries/2026-10-04-morning.json (Ollama Newsletter MEDIUM "Clef and Clef Flash Decision Models are now on Ollama")*)
> **Previously updated**: 2026-10-03-morning (launch — Cloudflare blog "Introducing Clef" + Apache 2.0 on Hugging Face + Jev-API-compatible + RL fine-tuning platform)
> **Status**: launched (open-sourced, Apache 2.0, Hugging Face, Ollama-available)
> **Related**: [[cloudflare]], [[jev]], [[typesafe-ai]], [[ollama]], [[system-one-models]], [[agent-frameworks]], [[model-routers]], [[kev]]

## Summary

Clef and Clef-flash are [[cloudflare]]'s open-source "decision models" launched Oct 1–2 2026, positioned as fully Jev-API-compatible drop-in alternatives to [[typesafe-ai]]'s [[jev]] "System One Model." Clef is a 27B multimodal model; Clef-flash is a 9B variant fine-tuned from Qwen3.5-9B. Decision models help agents programmatically gather context, make decisions, and take actions on tasks — i.e. the lightweight classification/routing/scoring substrate that sits beside full LLM reasoning. Both models are released under Apache 2.0 on Hugging Face, run locally, and support text + image inputs; Cloudflare also launched a companion RL fine-tuning platform.

Available on [[ollama]] via the `/v1/systemone` endpoint (Ollama v0.35.1+, `ollama pull clef-flash`) one day post-launch, Clef-flash reports **13× faster than Jev** at the median across 43 benchmark runs with concrete hosted median latencies of **38.8 ms (Clef-flash)** and **209.3 ms (Clef)**. Clef lands in a crowded Sep–Oct 2026 decision-model cohort — [[kev]] (Jared Palmer, 0.8B–27B), Amazon's Strands Decider 2B, Perplexity's pplx-decider-v1-27b, and Mercor's Qwen3.5-397B-A17B post-trained variant all shipped in the same window — all built against [[typesafe-ai]]'s Jev API, canonicalizing *System One decision substrate* as a competitive, Jev-API-compatible open-model category.

## Timeline

- **2026-10-04-morning**: **Clef + Clef-flash available on [[ollama]] via `/v1/systemone`** — concrete 27B/9B parameter counts + Qwen3.5-9B base for Clef-flash + 13× faster than [[jev]] at median across 43 benchmark runs + hosted median latencies 209.3 ms (Clef) / 38.8 ms (Clef-flash) + `ollama pull clef-flash` on Ollama v0.35.1+ + image-input support confirmed. See [[ollama]] + [[jev]] + [[system-one-models]] — *source: data/summaries/2026-10-04-morning.json (Ollama Newsletter MEDIUM "Clef and Clef Flash Decision Models are now on Ollama")*

- **2026-10-02**: **Launch** — Cloudflare blog "Introducing Clef: our open-source decision models, and new RL fine-tuning platform". Clef + Clef-flash released Apache 2.0 on Hugging Face as Jev-API-compatible drop-ins. Companion RL fine-tuning platform launched. — *source: data/summaries/2026-10-03-morning.json (TLDR AI MEDIUM "Decision models 🤖, Claude-shaped science 🧪, OpenAI safety firings 🚨")*

## Key Facts

- **Vendor**: [[cloudflare]]
- **Models**: Clef (27B) + Clef-flash (9B, fine-tuned from Qwen3.5-9B)
- **License**: Apache 2.0
- **Distribution**: Hugging Face + [[ollama]] (v0.35.1+ via `ollama pull clef` / `ollama pull clef-flash`)
- **Compatibility**: fully Jev-API-compatible + Ollama SystemOne API (`/v1/systemone`)
- **Deployment**: locally-runnable + Cloudflare Workers AI hosted tier
- **Modalities**: text + image (both variants)
- **Benchmark**: Clef-flash 13× faster than [[jev]] at median across 43 benchmark runs (Cloudflare-reported)
- **Hosted latencies**: 209.3 ms (Clef) + 38.8 ms (Clef-flash) median
- **Companion product**: RL fine-tuning platform
- **Category**: decision models — classification, moderation, routing, extraction, structured agent workflows

## Open Questions

- Accuracy vs [[jev]] (speed is 13×; accuracy headroom unclear)
- Pricing on Cloudflare Workers AI hosted tier
- Which Qwen3.5 base Clef (27B) derives from (vs the 9B Qwen3.5 base for Clef-flash)
- Adoption velocity vs [[jev]]'s 13%-of-AI-Gateway-teams-in-first-day canonical adoption anchor
- How Cloudflare's RL fine-tuning platform differs from similar primitives already in the Cloudflare agent-infra suite

## Sources

- data/summaries/2026-10-04-morning.json (Ollama Newsletter MEDIUM "Clef and Clef Flash Decision Models are now on Ollama")
- data/summaries/2026-10-03-morning.json (TLDR AI MEDIUM "Decision models 🤖, Claude-shaped science 🧪, OpenAI safety firings 🚨")
