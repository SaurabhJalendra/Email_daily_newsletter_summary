---
name: Audex
description: NVIDIA's 30B parameter / 3B active MoE model for unified text + audio work — preserves text intelligence while adding broad audio generation and understanding
type: product
---

# Audex

> **Type**: product
> **Vendor**: [[nvidia]]
> **First mentioned**: 2026-07-08-evening
> **Last updated**: 2026-07-08-evening
> **Status**: launched
> **Related**: [[nvidia]], [[nemotron-3]], [[gemini-omni]], [[mai-thinking-1]], [[claude-fable-5]]

## Summary

Audex is [[nvidia]]'s **30B parameter / 3B active MoE** model for **unified text and audio work**, launched July 8 2026 alongside the Lilian Weng harness-engineering-for-RSI summary cycle. NVIDIA's stated design goal is to *preserve text intelligence while adding broad audio generation and understanding capabilities* — the sparse MoE (~10% activation ratio) suggests the audio path is added as additional experts routed alongside the text-only experts, allowing text-only workloads to retain frontier-tier quality while audio workloads activate the audio-specialized experts.

Structurally, Audex extends NVIDIA's [[nemotron-3]]-lineage model-development posture from text-only reasoning into *multimodal-audio* territory, competing with the [[gemini-omni]] omni-modal + Microsoft MAI-Voice-2 audio-tier + OpenAI Realtime-audio + ElevenLabs generation-tier at the open-source-tier (implied by NVIDIA's prior Nemotron open-source posture). Pairs with same-cycle [[muse-image]] Meta consumer-image-tier + [[antidoom]] Liquid AI agent-verification tier as the cycle's *multi-vendor multi-modality tooling* wave.

## Timeline

- **2026-07-08-evening**: **Audex launched — 30B parameter / 3B active MoE unified text + audio model**. AINews HIGH: ***"NVIDIA has released Audex, a 30B parameter / 3B active MoE model for unified text and audio work, with a focus on preserving text intelligence while adding broad audio generation and understanding capabilities"***. First publicly framed *Audex named model* + first publicly framed *30B/3B active MoE* parameter posture + first publicly framed *unified text-and-audio work* modality-scope on NVIDIA in this wiki. Structurally significant three ways: (a) **10% activation ratio** — 3B active on 30B total implies a sparse MoE routing where each forward pass activates ~10% of parameters, structurally similar to Mixtral-8x7B / Qwen3-MoE / DeepSeek-V3.2 MoE patterns; the low-activation ratio enables *audio-experts-added-alongside-text-experts* architecture without inflating text-only inference cost; (b) **"preserving text intelligence"** framing — first publicly framed *text-quality-preservation* concern on a multimodal-audio extension in this wiki; structurally novel because prior multimodal-audio models ([[gemini-omni]] + MAI-Voice-2 + Whisper) have been framed as *audio-specialization at the expense of text-tier reasoning*; NVIDIA's *preserve* framing implies Audex targets text-tier reasoning parity with pure-text peers while adding audio; (c) **"broad audio generation and understanding"** dual-scope — Audex targets both audio *generation* (TTS/music/SFX) + audio *understanding* (ASR/speaker-ID/sound-event-classification) rather than a single-direction audio-tier product, structurally similar to [[gemini-omni]] but at a smaller parameter tier. See [[nvidia]] — *source: data/summaries/2026-07-08-evening.json (AINews HIGH "Lilian Weng summarizes 35 papers on Harness Engineering for RSI" — NVIDIA has released Audex a 30B parameter / 3B active MoE model for unified text and audio work with a focus on preserving text intelligence while adding broad audio generation and understanding capabilities)*

## Key Facts

- Vendor: [[nvidia]]
- Architecture: **30B parameter / 3B active MoE** (~10% activation ratio)
- Modality: unified **text + audio** (both generation and understanding)
- Design goal: preserve text intelligence while adding broad audio capabilities
- Positioning: NVIDIA-family multimodal-audio companion to [[nemotron-3]] text reasoning tier

## Open Questions

- Open-weights vs closed-source licensing (Nemotron-family precedent implies open-source but not confirmed)
- Named benchmarks — text-side (MMLU, MMLU-Pro, HumanEval) vs audio-side (LibriSpeech, VCTK, MELD, AudioSet)
- Whether Audex is trained from scratch or is a Nemotron-3 text-tier checkpoint with audio-experts grafted on
- Inference substrate — Blackwell-tier optimization? Available on Ollama-hosted infra?
- Voice-cloning + speaker-ID safety posture (bio-relevant given [[ai-cybersecurity-arms-race]] impersonation concerns)
- Relationship to prior NVIDIA speech products (Riva ASR/TTS + Parakeet + Canary)

## Sources

- data/summaries/2026-07-08-evening.json (AINews HIGH "Lilian Weng summarizes 35 papers on Harness Engineering for RSI" — Audex launch + 30B/3B MoE parameter posture + text+audio modality scope)
