---
name: Gemma 4
description: Google's open-weights multimodal model family (Apr 2026) — 4 sizes (edge 2B/4B + 26B MoE + 31B Dense), 256K context, 140+ languages, Apache 2.0
type: product
---

# Gemma 4

> **Type**: product
> **Vendor**: [[google]]
> **First mentioned**: 2026-04-04
> **Last updated**: 2026-04-05
> **Status**: active
> **Related**: [[google]], [[nvidia]], [[gemini]], [[qwen-3-5]], [[open-source-models]]

## Summary

Gemma 4 is Google's April 2026 open-weights multimodal model family, released under Apache 2.0 in four sizes: two edge models (2B and 4B), a 26B MoE, and a 31B Dense. It advertises 256K-token context, multimodal inputs (text + images + audio), and coverage of 140+ languages — positioned as Google's answer to Alibaba's Qwen 3.5 / Qwen 3.6-Plus on the open-weights axis, and launched paired with [[nvidia]] optimizations for local agentic AI on phones, workstations, and IoT. Coverage places it at #3 on the AI Arena leaderboard in its launch week.

## Timeline

- **2026-04-05**: Google confirms Gemma 4 is *fully* open — explicit "full commercial freedom for the first time" framing, retracting any field-of-use or commercial-use restrictions attached to prior Gemma generations; same-day coverage ties this to the broader Google open-weights push (Google Research also publishes TimesFM as its first time-series foundation model) — *source: 2026-04-05 cycle (TAAFT — Google Goes Fully Open With Gemma 4)*
- **2026-04-04**: Launch — Apache 2.0 license, four sizes (edge 2B/4B, 26B MoE, 31B Dense), 256K context, multimodal (text + images + audio), 140+ languages; [[nvidia]] ships day-one optimizations for local agentic AI across phones/workstations/IoT; coverage frames Gemma 4 and Alibaba's Qwen 3.6-Plus as the two major open-weights drops of the week — *source: 2026-04-04 cycle (TLDR AI — Gemma 4 launch; The Code — Google open-weights family; The Rundown AI — Gemma 4 rivals Qwen; NVIDIA Newsletter — Gemma 4 on NVIDIA)*

## Key Facts

- License: Apache 2.0 (permissive, commercially usable)
- Sizes: 2B, 4B, 26B MoE, 31B Dense
- Context window: 256K tokens
- Multimodal inputs: text + images + audio
- Language coverage: 140+
- Arena rank at launch: #3
- Local-AI partner: [[nvidia]] (phones / workstations / IoT)

## Open Questions

- Gemma 4 commercial licensing fine print vs Gemma 3?
- Training-data disclosure and contamination controls?
- How does the 31B Dense compare to Qwen 3.5-Medium / Llama (Avocado) on standard benchmarks?
- Audio modality — is it input-only or does it extend to TTS/voice generation?

## Sources

- data/summaries/2026-04-04.json (TLDR AI — Gemma 4 launch; The Code — open-weights family; The Rundown AI — Gemma 4 rivals Qwen; NVIDIA Newsletter — Gemma 4 on NVIDIA)
- data/summaries/2026-04-05.json (TAAFT — Google Goes Fully Open With Gemma 4)
