---
name: Voxtral 3
description: Mistral's October 2026 voice-agent SDK with speech-to-text (Small Transcribe 3, 50+ languages) and text-to-speech (Mini TTS 3, natural emotional speech) models in a unified voice-agent pipeline
type: product
---

# Voxtral 3

> **Type**: product
> **Vendor**: [[mistral]]
> **First mentioned**: 2026-10-22-morning
> **Last updated**: 2026-10-22-morning
> **Status**: active
> **Related**: [[mistral]], [[elevenlabs]], [[assemblyai]], [[speechmatics]], [[fish-audio]], [[linden-stt]], [[voice-agents]]

## Summary

**Voxtral 3** is [[mistral]]'s October 2026 voice-agent SDK — a family of speech-to-text and text-to-speech models shipped together as an integrated voice-agent pipeline. The release pairs **Small Transcribe 3**, a multilingual STT model covering 50+ languages, with **Mini TTS 3**, a TTS model targeting natural emotional speech, and bundles them with a LiveKit-based pipeline that combines transcription, reasoning, tool calling, and streaming speech generation. Positioning is explicitly on reducing the integration effort to build real-time voice agents and increasing open-model competition in the voice-AI tier dominated by [[elevenlabs]], [[assemblyai]], [[speechmatics]], and [[fish-audio]].

Voxtral 3 extends Mistral's product ladder — [[ministral-3]] edge, Mistral Medium 3.1 mid-tier, [[mistral-large-4]] "Le Chonk" trillion-parameter frontier, [[leanstral]] verification, [[robostral-navigate]] robotics, [[shieldstral]] safety, [[mistral-ocr-4]] document intelligence — with a *voice-agent-tier* vertical, lifting Mistral's open-weight stack to a seventh-plus-vertical product architecture.

## Timeline

- **2026-10-22-morning**: **Created — TLDR AI MEDIUM announces Voxtral 3 as "a voice agent SDK offering advanced speech-to-text and text-to-speech capabilities across 50+ languages, featuring models like Small Transcribe 3 for multilingual transcription and Mini TTS 3 for natural emotional speech"**. researchFindings.missingStories cross-coverage: *"Mistral launched Voxtral 3, a family of speech-to-text and text-to-speech models supporting more than 50 languages and 35 languages for expressive speech. The release also includes a LiveKit-based SDK that combines transcription, reasoning, tool calling, and speech generation in a streaming voice-agent pipeline."* First-in-wiki *Mistral-voice-tier canonical productization anchor* + concrete three-component (Small Transcribe 3 + Mini TTS 3 + LiveKit-based streaming pipeline) canonical anchor cluster + concrete 50-plus-languages STT + 35-languages expressive-speech-TTS twin-coverage canonical anchor pair + "integrated stack lowers the engineering effort required to build real-time voice agents" positioning anchor. Extends Mistral's open-weight product ladder with a *voice-agent-tier vertical*. See [[mistral]] + [[voice-agents]] — *source: data/summaries/2026-10-22-morning.json (TLDR AI MEDIUM "DeepSeek DeepInfer 🐋, PyTorch on TPUs ⚡, Ramp's agent framework 👨‍💻"; researchFindings.missingStories — Mistral releases Voxtral 3 speech models and voice-agent SDK)*

## Key Facts

- **Vendor**: [[mistral]]
- **Family**: Voxtral 3 — voice-agent SDK + accompanying models
- **STT model**: Small Transcribe 3 — multilingual transcription, 50+ languages
- **TTS model**: Mini TTS 3 — natural emotional speech, 35 languages for expressive speech
- **Pipeline**: LiveKit-based SDK combining transcription + reasoning + tool calling + speech generation in a streaming voice-agent pipeline
- **Positioning**: integrated stack reducing engineering effort to build real-time voice agents; open-model competition in speech AI
- **Competitive cohort**: [[elevenlabs]], [[assemblyai]], [[speechmatics]] [[linden-stt]], [[fish-audio]]

## Open Questions

- Open-weights vs API-only distribution for Small Transcribe 3 and Mini TTS 3
- Latency numbers vs [[linden-stt]] 350ms + similar real-time voice-agent benchmarks
- Pricing (per-hour, per-token, or free self-hosted)
- Named early customers / integration partners beyond LiveKit
- Benchmark posture against [[elevenlabs]] + [[assemblyai]] in the production voice-agent tier
- Relationship (if any) to earlier Voxtral releases and whether weights of prior versions ship with 3

## Sources

- data/summaries/2026-10-22-morning.json (TLDR AI MEDIUM "DeepSeek DeepInfer 🐋, PyTorch on TPUs ⚡, Ramp's agent framework 👨‍💻"; researchFindings.missingStories — Mistral releases Voxtral 3 speech models and voice-agent SDK)
