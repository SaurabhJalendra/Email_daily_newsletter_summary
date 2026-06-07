---
name: Gemma 4
description: Google's open-weights multimodal model family (Apr 2026) — 4 sizes (edge 2B/4B + 26B MoE + 31B Dense), 256K context, 140+ languages, Apache 2.0
type: product
---

# Gemma 4

> **Type**: product
> **Vendor**: [[google]]
> **First mentioned**: 2026-04-04
> **Last updated**: 2026-06-07 (evening edition — Gemma 4 12B + QAT weights for all sizes distributed via [[ollama]])
> **Status**: active
> **Related**: [[google]], [[nvidia]], [[gemini]], [[ollama]], [[claude-code]], [[openclaw]], [[qwen-3-5]], [[open-source-models]]

## Summary

Gemma 4 is Google's April 2026 open-weights multimodal model family, released under Apache 2.0. The April launch shipped four sizes (edge 2B/4B, 26B MoE, 31B Dense) with 256K context, multimodal inputs (text + images + audio), and coverage of 140+ languages — positioned as Google's answer to Alibaba's Qwen 3.5 / Qwen 3.6-Plus on the open-weights axis, and launched paired with [[nvidia]] optimizations for local agentic AI on phones, workstations, and IoT. In June 2026 the family extended to a fifth size — **Gemma 4 12B**, an **encoder-free unified multimodal model** that directly handles text, images, and native audio input in a single transformer (no separate vision/audio encoders), designed to run locally on a laptop with 16GB of memory and to power on-device agentic workflows. Same cycle, Google DeepMind released **quantization-aware-trained (QAT) weights for all Gemma 4 sizes** (E2B/E4B/12B/26B/31B), reducing memory footprint dramatically with near-original quality and faster inference across Apple/AMD/Intel/NVIDIA/Qualcomm hardware.

## Timeline

- **2026-06-07-evening**: **Ollama distributes Gemma 4 12B + QAT weights for all sizes** — the Ollama newsletter explicitly frames Gemma 4 12B as an **encoder-free unified multimodal model** (single transformer for text + images + native audio, no separate encoders), positioned to run on a 16GB laptop and to power local agents alongside [[claude-code]], Codex App, Hermes Agent, and [[openclaw]] (`ollama launch claude --model gemma4:12b` etc.); benchmark performance nears the 26B variant. Same drop: **Quantization-Aware Trained (QAT) weights** for **all** Gemma 4 sizes — E2B, E4B, 12B, 26B, and 31B — accelerate inference and **reduce memory footprint with nearly the same quality** vs the BF16 weights (Q4_0 reportedly ~72% memory reduction per Google's own framing); QAT weights run faster across Apple, AMD, Intel, NVIDIA, and Qualcomm hardware; pull via e.g. `ollama pull gemma4:e2b-it-qat`. This concretizes the 2026-06-05 Gemma 4 12B framing (Apache 2.0 on-device frontier-level model) into the local-runtime distribution surface — Ollama becomes the canonical packaging channel for Gemma 4 QAT — *source: data/summaries/2026-06-07-evening.json (Ollama Newsletter — Gemma 4 12B + quantization-aware weights for all sizes / encoder-free unified multimodal model / Apache 2.0 / app launches for Claude Code, Codex App, Hermes Agent, OpenClaw)*
- **2026-06-05**: **Gemma 4 12B launches** — encoder-free unified multimodal model (text + images + native audio in a single transformer), runs entirely on a 16GB-RAM laptop; Apache 2.0; coverage frames it as the concrete drop that makes "local AI a mainstream deployment target"; Unsloth ships dynamic compression that runs Gemma 4 12B on **8GB RAM** laptops the same day; Google Research publishes the **"Sleep" paradigm for continual learning** (distillation + replay to consolidate in-context knowledge into longer-term weights) — *source: 2026-06-05 cycle (multiple — AINews, The Code, TLDR, TLDR AI, The Rundown AI, Forward Future, Evolving AI Insights, AlphaSignal, The AI Brief)*
- **2026-04-05**: Google confirms Gemma 4 is *fully* open — explicit "full commercial freedom for the first time" framing, retracting any field-of-use or commercial-use restrictions attached to prior Gemma generations; same-day coverage ties this to the broader Google open-weights push (Google Research also publishes TimesFM as its first time-series foundation model) — *source: 2026-04-05 cycle (TAAFT — Google Goes Fully Open With Gemma 4)*
- **2026-04-04**: Launch — Apache 2.0 license, four sizes (edge 2B/4B, 26B MoE, 31B Dense), 256K context, multimodal (text + images + audio), 140+ languages; [[nvidia]] ships day-one optimizations for local agentic AI across phones/workstations/IoT; coverage frames Gemma 4 and Alibaba's Qwen 3.6-Plus as the two major open-weights drops of the week — *source: 2026-04-04 cycle (TLDR AI — Gemma 4 launch; The Code — Google open-weights family; The Rundown AI — Gemma 4 rivals Qwen; NVIDIA Newsletter — Gemma 4 on NVIDIA)*

## Key Facts

- License: Apache 2.0 (permissive, commercially usable)
- Sizes: E2B, E4B, 12B (encoder-free multimodal, Jun 2026), 26B MoE, 31B Dense
- Context window: 256K tokens
- Multimodal inputs: text + images + audio (12B handles audio **natively** in a single transformer — no separate audio encoder)
- Language coverage: 140+
- 12B target memory: 16GB RAM laptop (8GB with Unsloth dynamic compression)
- QAT (quantization-aware-trained) weights available for all five sizes (Jun 2026) — runs faster on Apple/AMD/Intel/NVIDIA/Qualcomm; pulled via `ollama pull gemma4:<size>-it-qat`
- Local-runtime distribution: [[ollama]] is the canonical packaging surface; [[nvidia]] day-one optimizations (phones / workstations / IoT)
- Arena rank at launch: #3

## Open Questions

- Gemma 4 commercial licensing fine print vs Gemma 3?
- Training-data disclosure and contamination controls?
- How does the 31B Dense compare to Qwen 3.5-Medium / Llama (Avocado) on standard benchmarks?
- How does Gemma 4 12B audio-native input compare to Gemini 3 Flash Live + Qwen 3.5 voice on benchmark tasks?
- Does the QAT-weights memory reduction (~72% per Google's framing) hold at task-quality parity for agentic / multi-tool workflows, or only general chat?

## Sources

- data/summaries/2026-04-04.json (TLDR AI — Gemma 4 launch; The Code — open-weights family; The Rundown AI — Gemma 4 rivals Qwen; NVIDIA Newsletter — Gemma 4 on NVIDIA)
- data/summaries/2026-04-05.json (TAAFT — Google Goes Fully Open With Gemma 4)
- data/summaries/2026-06-05.json (multiple — Gemma 4 12B launch)
- data/summaries/2026-06-07-evening.json (Ollama Newsletter — Gemma 4 12B + quantization-aware weights for all sizes / encoder-free unified multimodal model)
