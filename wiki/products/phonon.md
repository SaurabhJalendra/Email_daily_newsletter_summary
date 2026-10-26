---
name: Phonon
description: Phonon — Gradium's family of small state-of-the-art text-to-speech (TTS) models; first speech model supported in [[ollama]] Oct 2026; streams audio as it is generated; exceeds real-time playback by more than 100× on Apple Silicon; five languages; dozens of voices
type: product
---

# Phonon

> **Type**: product
> **Vendor**: [[gradium]]
> **First mentioned**: 2026-10-26-morning
> **Last updated**: 2026-10-26-morning
> **Status**: active
> **Related**: [[gradium]], [[ollama]], [[speech-models]], [[voxtral-3]], [[elevenlabs]], [[fish-audio]], [[linden-stt]]

## Summary

**Phonon** is a family of small, state-of-the-art text-to-speech (TTS) models from **[[gradium]]**, shipped as the launch model for **[[ollama]]**'s new speech-model capability on 2026-10-26. Phonon streams audio as it is generated and, per Ollama, exceeds real-time playback by **more than 100× on Apple Silicon**. The initial release supports **five languages** and **dozens of voices**, and is reachable via `ollama run phonon` and an OpenAI-compatible **`/v1/audio/speech`** HTTP endpoint. Phonon's Ollama distribution means developers can add TTS to their applications without adopting a separate serving stack, placing it alongside [[voxtral-3]] Mini TTS 3, [[elevenlabs]], and [[fish-audio]] in the open/local-tier voice-AI competitive set.

## Timeline

- **2026-10-26-morning**: **Created** — Ollama Newsletter MEDIUM "Speech models in Ollama" announces Phonon as the first speech model supported by Ollama on macOS: *"The first speech model is Phonon, a family of small, state-of-the-art text-to-speech (TTS) models from Gradium"* + *"stream audio as it is generated and reportedly exceeds real-time playback by more than 100× on Apple Silicon"* + initial release supports Apple Silicon Macs, five languages, and dozens of voices + reachable via `ollama run` and OpenAI-compatible `/v1/audio/speech` endpoint. Daily-digest Top Story #1 elevation: *"Ollama now supports speech models on macOS, with the initial release supporting Apple Silicon Macs, five languages, and dozens of voices, including the Phonon text-to-speech model"*. First-in-wiki Phonon canonical anchor; first-in-wiki concrete `/v1/audio/speech` OpenAI-compatible endpoint canonical anchor on Ollama. See [[gradium]] + [[ollama]] + [[speech-models]] — *source: data/summaries/2026-10-26-morning.json (Ollama Newsletter MEDIUM "Speech models in Ollama"; daily-digest Top Story #1)*

## Key Facts

- **Vendor**: [[gradium]]
- **Model class**: small text-to-speech (TTS) family
- **Streaming**: audio streamed as it is generated
- **Latency claim**: exceeds real-time playback by >100× on Apple Silicon
- **Languages**: five (unspecified in source)
- **Voices**: dozens
- **Platform (initial)**: macOS, Apple Silicon only (Windows + Linux planned)
- **Distribution**: [[ollama]] — `ollama run phonon` + OpenAI-compatible `/v1/audio/speech` endpoint (Ollama v0.40.11+)
- **Positioning**: integrated into Ollama's local-to-cloud stack so developers can add speech without a separate serving stack
- **Competitive cohort**: [[voxtral-3]] Mini TTS 3 ([[mistral]]), [[elevenlabs]], [[fish-audio]]

## Open Questions

- Full language list (five supported) and voice catalog
- Open-weights vs API-only
- Benchmark comparisons vs ElevenLabs / Fish Audio / Mini TTS 3 on naturalness, latency, prosody
- Pricing beyond free local use
- Whether Phonon supports voice cloning, SSML, or emotional-expressiveness controls
- Non-Apple Silicon support timeline
- Model size (parameter count), training data provenance

## Sources

- data/summaries/2026-10-26-morning.json (Ollama Newsletter MEDIUM "Speech models in Ollama"; daily-digest Top Story #1)
