---
name: Inkling 2 Mini
description: Thinking Machines Lab's Nov 2026 laptop-scale 26B multimodal mixture-of-experts model — 5.4B active per token via looped middle layers, 1M context, Apache 2.0; runs locally on Macs with 32GB+ unified memory; day-0 on Ollama
type: product
---

# Inkling 2 Mini

> **Type**: product
> **Vendor**: [[thinking-machines]]
> **First mentioned**: 2026-11-21-evening
> **Last updated**: 2026-11-21-evening (**Created — Inkling 2 Mini laptop-scale canonical anchor cluster**. Ollama Newsletter MEDIUM "Inkling 2 Mini is now available on Ollama": *"Ollama has partnered with Thinking Machines Lab to make Inkling 2 Mini available to run locally"* + *"Inkling 2 Mini is a 26-billion-parameter multimodal model with 5.4 billion active parameters per token, designed with looped middle layers to perform more computation per token, and can run locally on devices with 32 GB unified memory or more"* + *"supports text and image inputs, tool use, reasoning, coding-agent workloads, and context windows of up to 1 million tokens"* + *"benchmarked on SWE-Bench Verified (79.2%), MCP Atlas (82.7%), DeepSearchQA (85.3%), and ScreenSpot Pro (76.5%), although these figures are vendor-provided"* + *"Ollama provides an accessible local distribution path and integrations with tools such as Claude Code, OpenCode, Hermes Agent, and OpenClaw"* + *"Thinking Machines Lab has also announced support for Inkling 2 Mini across multiple open inference and fine-tuning ecosystems, including SGLang, vLLM, Unsloth, NVIDIA Dynamo, and TokenSpeed"*. researchFindings.additionalContext (Inkling 2 Mini): *"a looped mixture-of-experts Transformer with roughly 26.4 billion total parameters and about 3.4 billion active parameters—reported by Ollama as 5.4 billion weight activations per token because its 12 middle layers run three times. This design increases computation per token without requiring a much larger model, while its approximately 20 GB memory footprint makes local inference practical on Macs and other consumer AI hardware with about 32 GB or more of memory"* + released November 20, 2026 under Apache 2.0. First-in-wiki: (a) **Inkling 2 Mini 26B/5.4B-active laptop-scale canonical anchor + looped-middle-layer architecture canonical anchor pair** — graduates the [[inkling]] family from 594B [[inkling-2-small]] flagship-open-weights tier into a *concrete laptop-scale 26B sibling canonical anchor tier* (~23× parameter reduction vs Inkling 2 Small); productizes [[thinking-machines]] as *canonical mid-Nov-2026 concrete-first-moment-Inkling-2-generation-shipped-laptop-scale-32GB-unified-memory substrate operator*; (b) **12-looped-middle-layers canonical architectural anchor** — first-in-wiki *concrete looped-transformer-layer canonical anchor* (12 middle layers run 3× per forward pass, yielding 5.4B activations/token at ~3.4B actual active params); (c) **Four-benchmark canonical anchor cluster — 79.2% SWE-Bench Verified + 82.7% MCP Atlas + 85.3% DeepSearchQA + 76.5% ScreenSpot Pro** — productizes Inkling 2 Mini as *canonical concrete-first-laptop-scale-open-weight-model-with-coding-plus-agent-plus-search-plus-grounding-benchmark-suite substrate operator*; (d) **Five-ecosystem support cohort — SGLang + vLLM + Unsloth + NVIDIA Dynamo + TokenSpeed canonical ecosystem-breadth anchor** + **Four-tool integration — [[claude-code]] + [[opencode]] + Hermes Agent + [[openclaw]] canonical agent-integration anchor cluster**; (e) **32GB-unified-memory + ~20GB-checkpoint canonical local-inference hardware-requirement anchor** — productizes late-2026 as *canonical concrete-first-Apache-2.0-frontier-lab-produces-practical-consumer-Mac-runnable-multimodal-agent-model substrate operator*; likely durable reference-anchor for future *laptop-scale frontier open-weight model* discussion. Pairs cycle-structurally with sibling [[inkling-2-small]] 594B flagship as *canonical late-2026 two-tier Inkling-2-generation canonical anchor pair — flagship Small (594B, cloud-hosted) + laptop-scale Mini (26B, locally-runnable)*. See [[ollama]] this cycle + [[thinking-machines]] + [[inkling]] + [[inkling-2-small]] + [[open-source-models]] + [[claude-code]] + [[openclaw]] + [[opencode]] — *source: data/summaries/2026-11-21-evening.json (Ollama Newsletter MEDIUM "Inkling 2 Mini is now available on Ollama"; researchFindings.additionalContext — Inkling 2 Mini + Ollama + Thinking Machines Lab + AI-powered applications + Unified memory)*)
> **Status**: released (open-weight, Apache 2.0)
> **Related**: [[inkling]], [[inkling-2-small]], [[thinking-machines]], [[ollama]], [[open-source-models]], [[claude-code]], [[opencode]], [[openclaw]]

## Summary

Inkling 2 Mini is [[thinking-machines]]'s November 2026 laptop-scale companion to its 594B [[inkling-2-small]] flagship — a **26-billion-parameter multimodal mixture-of-experts model** with **5.4 billion active parameters per token** (reported by Ollama; underlying architecture has ~3.4B actually unique active params, inflated to 5.4B activations because its **12 middle layers are looped 3×** per forward pass to increase per-token computation without scaling the model). Released on 2026-11-20 under **Apache 2.0**, with a roughly 20 GB checkpoint that runs locally on Macs and other consumer AI hardware with **32 GB or more unified memory**.

The model supports **text and image inputs**, tool use, reasoning, coding-agent workloads, and context windows of up to **1 million tokens** — targeting agentic and tool-use systems, coding assistants, chatbots, and retrieval-augmented generation. Vendor-reported benchmarks place it at **79.2% on SWE-Bench Verified**, **82.7% on MCP Atlas**, **85.3% on DeepSearchQA**, and **76.5% on ScreenSpot Pro**. Day-0 distribution spans [[ollama]] for local inference plus support across SGLang, vLLM, Unsloth, NVIDIA Dynamo, and TokenSpeed; named agent-integration partners at launch are [[claude-code]], [[opencode]], Hermes Agent, and [[openclaw]].

## Timeline

- **2026-11-21-evening**: **Created** — Ollama ships Inkling 2 Mini for local use; 26B / 5.4B-active multimodal MoE + 12-looped-middle-layers + Apache 2.0 + 32GB unified-memory requirement + 1M context + text/image inputs; vendor benchmarks SWE-Bench Verified 79.2% + MCP Atlas 82.7% + DeepSearchQA 85.3% + ScreenSpot Pro 76.5%; agent-integration cohort Claude Code + OpenCode + Hermes Agent + OpenClaw; inference/fine-tuning ecosystem cohort SGLang + vLLM + Unsloth + NVIDIA Dynamo + TokenSpeed. See [[ollama]] + [[thinking-machines]] + [[inkling-2-small]] — *source: data/summaries/2026-11-21-evening.json (Ollama Newsletter MEDIUM "Inkling 2 Mini is now available on Ollama"; daily-digest Top Story #1)*

## Key Facts

- Vendor: [[thinking-machines]]
- Release date: 2026-11-20
- Parameters: **26B total / 5.4B active-per-token** (Ollama framing; ~3.4B unique active params per researcher-sourced context, inflated via layer looping)
- Architecture: **Looped mixture-of-experts Transformer** — 12 middle layers run 3× per forward pass
- Context window: **1M tokens**
- Modalities: text + image inputs
- License: **Apache 2.0**
- Checkpoint size: ~20 GB (mixed-precision)
- Local hardware requirement: **32 GB unified memory** on Apple silicon, or 32 GB VRAM on other GPU platforms
- Vendor-reported benchmarks: SWE-Bench Verified **79.2%**, MCP Atlas **82.7%**, DeepSearchQA **85.3%**, ScreenSpot Pro **76.5%**
- Distribution: [[ollama]] (local); supported across SGLang, vLLM, Unsloth, NVIDIA Dynamo, TokenSpeed
- Agent integrations at launch: [[claude-code]], [[opencode]], Hermes Agent, [[openclaw]]
- Sibling: [[inkling-2-small]] (594B / 17B active, Nov 2026)

## Open Questions

- Independent third-party benchmark validation (figures above are vendor-provided)
- Flagship (non-Mini, non-Small) Inkling 2 release timeline
- [[tinker-api]] fine-tuning availability and pricing
- Performance of looped-middle-layer architecture relative to equivalent-compute dense/vanilla-MoE baselines

## Sources

- data/summaries/2026-11-21-evening.json (Ollama Newsletter MEDIUM "Inkling 2 Mini is now available on Ollama" — 26B/5.4B-active + 12-looped-middle-layers + 1M context + 32GB unified memory + four-benchmark cluster + four-tool integration + five-ecosystem support; researchFindings.additionalContext — Inkling 2 Mini + Ollama + Thinking Machines Lab + AI-powered applications + Unified memory)
