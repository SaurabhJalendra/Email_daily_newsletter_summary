---
name: Gemini 3.5 Transcribe
description: Google AI Studio speech-to-text model launched Aug 27 2026; real-time streaming + pre-recorded multi-speaker diarization + word-level timestamps + smart transcription + custom-vocabulary (up to 1,000 terms) across 85+ languages
type: product
---

# Gemini 3.5 Transcribe

> **Type**: product (model — speech-to-text)
> **Vendor**: [[google]] (Google AI Studio)
> **First mentioned**: 2026-08-27-evening (created)
> **Last updated**: 2026-08-27-evening
> **Status**: active (GA via Google AI Studio API with Python/JS/Go SDKs + REST)
> **Related**: [[google]], [[gemini]], [[gemini-3-5-flash]], [[assemblyai]], [[cohere]]

## Summary

Gemini 3.5 Transcribe is Google AI Studio's dedicated speech-to-text model launched **2026-08-27** — positioned as a token-efficient, lower-cost transcription workhorse targeting both real-time interactive voice agents (sub-second latency via the Live API) and pre-recorded audio processing (multi-speaker diarization + word-level timestamps via the Interactions API). It handles **85+ languages and dialects** with reliability across noisy acoustic environments and domain-specific jargon.

Its **smart transcription mode** filters filler words, resolves spoken self-corrections, and auto-formats spoken lists / dates / numbers into clean text ready for downstream LLM processing. A **custom-vocabulary** slot (up to 1,000 terms) covers domain-specific acronyms and product names for accurate recognition. Positioning is against [[assemblyai]] Voice Agent API and Cohere Transcribe on the developer/API tier.

## Timeline

- **2026-08-27-evening**: Created — Google AI Studio ships Gemini 3.5 Transcribe with Live API (real-time streaming, sub-second latency) + Interactions API (batch multi-speaker diarization + word-level timestamps) + smart transcription mode + 1,000-term custom-vocabulary + 85+ languages; SDKs for Python, JavaScript, Go + REST via cURL. Google AI Studio MEDIUM: *"Google AI Studio introduces Gemini 3.5 Transcribe, a new transcription model that converts raw audio into accurate, polished, context-aware text, performing reliably across 85+ languages, noisy acoustic environments, and domain-specific jargon"* — *source: data/summaries/2026-08-27-evening.json (Google AI Studio MEDIUM "🚀 Introducing intelligent transcription with Gemini 3.5 Transcribe")*

## Key Facts

- Vendor: [[google]] (via Google AI Studio)
- Modes: Live API (streaming, sub-second latency) + Interactions API (batch with multi-speaker diarization + word-level timestamps)
- Languages: 85+ languages/dialects with regional-accent handling
- Smart transcription: filler-word filtering, self-correction resolution, auto-formatting of lists/dates/numbers
- Custom vocabulary: up to 1,000 domain terms
- SDKs: Python, JavaScript, Go + REST/cURL
- Positioning: developer/API workhorse for interactive voice agents + captioning + call-analytics pipelines

## Open Questions

- Concrete pricing per audio-minute vs [[assemblyai]] Voice Agent API + Cohere Transcribe
- Word Error Rate (WER) benchmarks vs Whisper Large v3 / AssemblyAI Universal-2 / Deepgram Nova
- Streaming latency percentile numbers (p50/p95/p99)
- Whether it shares model weights with [[gemini-3-5-flash]] or is a dedicated ASR architecture

## Sources

- data/summaries/2026-08-27-evening.json (Google AI Studio MEDIUM "🚀 Introducing intelligent transcription with Gemini 3.5 Transcribe")
