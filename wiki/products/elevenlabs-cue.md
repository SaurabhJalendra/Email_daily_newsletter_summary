---
name: ElevenLabs Cue
description: ElevenLabs's Oct 2026 forced-alignment model for precise character-level timing in audio files
type: product
---

# ElevenLabs Cue

> **Type**: product
> **Vendor**: [[elevenlabs]]
> **First mentioned**: 2026-10-30-morning
> **Last updated**: 2026-10-30-morning
> **Status**: launched
> **Related**: [[elevenlabs]], [[speech-models]], [[ai-music-generation]]

## Summary

ElevenLabs Cue is a **forced-alignment model** that produces precise character-level timing for spoken audio against its transcript. It sits alongside the Scribe + Eleven v4 + Expressive Mode speech stack as a timing-infrastructure primitive — the base layer other ElevenLabs products need to drive mouth-shape animation, captioning, song-lyric sync, and voice-cloning dataset preparation. Not to be confused with [[cue]] (Manus's unrelated personal-AI-agent product also launched in Sep 2026).

## Timeline

- **2026-10-30-morning**: **Cue launches as a forced-alignment model for precise character-level timing in audio files** — TLDR AI HIGH *"Gemini 4 Carbon 🌱, Nemotron Transcribe 📝, benchmarker's dilemma ❓"* — *source: data/summaries/2026-10-30-morning.json (TLDR AI HIGH; blog link elevenlabs.io/blog/cue-aligner)*

## Key Facts

- **Vendor**: [[elevenlabs]]
- **Task**: forced alignment (map audio to transcript with character-level timing)
- **Output granularity**: character-level timestamps
- **Blog**: elevenlabs.io/blog/cue-aligner

## Open Questions

- Language coverage (90+ languages like Eleven v4? subset?)
- Pricing + rate limits
- Streaming vs batch-only
- Comparison to open alternatives (Whisper + WhisperX word-timestamps, Montreal Forced Aligner)

## Sources

- data/summaries/2026-10-30-morning.json (TLDR AI HIGH "Gemini 4 Carbon 🌱, Nemotron Transcribe 📝, benchmarker's dilemma ❓"; blog link elevenlabs.io/blog/cue-aligner)
