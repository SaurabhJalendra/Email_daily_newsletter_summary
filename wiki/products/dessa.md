---
name: Dessa
description: Dessa — [[block]]'s unreleased full-duplex speech-to-speech model designed to listen and speak simultaneously while modeling conversational cues (pauses, laughter, emotion); runs on high-end consumer hardware; currently limited to safety-research testing (Oct 2026)
type: product
---

# Dessa

> **Type**: product
> **Vendor**: [[block]]
> **First mentioned**: 2026-10-26-morning
> **Last updated**: 2026-10-26-morning
> **Status**: active (research preview; unreleased)
> **Related**: [[block]], [[speech-models]], [[phonon]], [[voxtral-3]]

## Summary

**Dessa** is **[[block]]**'s unreleased **full-duplex speech-to-speech** model, designed to listen and speak simultaneously while modeling conversational cues such as pauses, laughter, and emotion. Per public reporting, Dessa runs on high-end consumer hardware but is currently limited to **safety-research testing**. Dessa is Block's entry into the mid-to-late-2026 trend toward lower-latency, more natural, and more locally deployable voice AI — a different point in the design space from TTS-only families like [[phonon]] ([[gradium]]) and TTS+STT voice-agent SDKs like [[voxtral-3]] ([[mistral]]), because Dessa is a single model that handles the entire bidirectional speech exchange rather than chaining ASR → LLM → TTS.

Dessa also broadens Block's AI-product footprint beyond its earlier `Goose` internal agent + [[buzz]] self-hosted agent-workspace productization arc into the frontier **voice-AI research** tier.

## Timeline

- **2026-10-26-morning**: **Created** — Ollama Newsletter MEDIUM "Speech models in Ollama" references Dessa in a *broader-industry trend* framing: *"the broader industry trend is toward lower-latency, more natural, and more locally deployable voice AI, with other developments such as Block's introduction of Dessa, an unreleased full-duplex speech-to-speech model designed to listen and speak simultaneously while modeling conversational cues"*. researchFindings.additionalContext (speech models topic): *"Block also introduced Dessa, an unreleased full-duplex speech-to-speech model ... modeling conversational cues such as pauses, laughter, and emotion; it reportedly runs on high-end consumer hardware but is currently limited to safety-research testing"*. tldr: *"Block introduces Dessa speech-to-speech model"*. First-in-wiki Dessa canonical anchor + first-in-wiki concrete full-duplex-S2S + pauses + laughter + emotion three-conversational-cue canonical anchor cluster on Block. See [[block]] + [[speech-models]] — *source: data/summaries/2026-10-26-morning.json (Ollama Newsletter MEDIUM "Speech models in Ollama"; researchFindings.additionalContext; tldr)*

## Key Facts

- **Vendor**: [[block]]
- **Model class**: full-duplex speech-to-speech (listens and speaks simultaneously)
- **Conversational-cue modeling**: pauses, laughter, emotion
- **Hardware**: runs on high-end consumer hardware
- **Status**: unreleased; limited to safety-research testing
- **Positioning**: part of the broader lower-latency / more-natural / more-locally-deployable voice-AI trend; architecturally distinct from TTS-only or ASR+LLM+TTS pipeline products ([[phonon]] [[voxtral-3]])

## Open Questions

- Specific "high-end consumer hardware" baseline (GPU family, VRAM)
- Model architecture (single-model duplex vs separately-trained encoder/decoder; audio-token vs continuous)
- Latency numbers (listen-to-first-byte, interrupt-reaction)
- Open-weights vs internal-only vs API; release timeline
- Named safety-research partners; what specifically is being evaluated
- Positioning vs OpenAI realtime voice + ElevenLabs Conversational AI + Fish Audio S2S

## Sources

- data/summaries/2026-10-26-morning.json (Ollama Newsletter MEDIUM "Speech models in Ollama"; researchFindings.additionalContext — Speech models; tldr)
