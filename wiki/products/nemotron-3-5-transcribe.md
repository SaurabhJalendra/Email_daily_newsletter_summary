---
name: Nemotron 3.5 Transcribe
description: NVIDIA's Oct 2026 open-weight multilingual transcription + translation + speaker-attribution + audio Q&A model supporting up to 40 languages; vendor-reported #1 across several transcription and speaker-attribution leaderboards
type: product
---

# Nemotron 3.5 Transcribe

> **Type**: product
> **Vendor**: [[nvidia]]
> **First mentioned**: 2026-10-30-morning
> **Last updated**: 2026-10-30-morning
> **Status**: launched (open-weight on Hugging Face)
> **Related**: [[nvidia]], [[nemotron-3]], [[nemotron-3-5-super-vl]], [[speech-models]], [[open-source-models]]

## Summary

Nemotron 3.5 Transcribe is [[nvidia]]'s open-weight multilingual speech model that bundles transcription, translation, speaker attribution, and audio question-answering in one model. It supports up to **40 languages** at low word-error rates and is reported as **ranked first across several transcription and speaker-attribution leaderboards** at launch. The model is distributed on Hugging Face under the `nvidia/nemotron-transcribe-granary` collection and extends the Nemotron 3.5 audio-substrate line that previously included [[nemotron-3]] ASR 0.6B + Content Safety + Lightning + the 100M Diarization checkpoint.

The release graduates the Nemotron 3 family's audio-specialist tier from recognition + moderation + diarization three-vertical cohort into a **four-primitive unified-speech-model canonical anchor** (ASR + translation + speaker attribution + audio Q&A), positioning NVIDIA against proprietary multilingual speech stacks like Microsoft [[mai-transcribe-2]], Google [[gemini-3-5-transcribe]], and [[elevenlabs]] Scribe.

## Timeline

- **2026-10-30-morning**: **Nemotron 3.5 Transcribe open-weight release — multilingual transcription + translation + speaker attribution + audio Q&A, up to 40 languages, reported #1 across several transcription and speaker-attribution leaderboards; shipped via Hugging Face `nvidia/nemotron-transcribe-granary`** — TLDR AI HIGH *"Gemini 4 Carbon 🌱, Nemotron Transcribe 📝, benchmarker's dilemma ❓"*; daily-digest Top Story #3 — *source: data/summaries/2026-10-30-morning.json (TLDR AI HIGH)*

## Key Facts

- **Vendor**: [[nvidia]]
- **Family**: Nemotron 3.5 (sibling to [[nemotron-3-5-super-vl]] + ASR 0.6B + Content Safety + Lightning + Diarization)
- **Capabilities**: transcription + translation + speaker attribution + audio Q&A
- **Language coverage**: up to 40 languages
- **Vendor-reported positioning**: ranked #1 across several transcription + speaker-attribution leaderboards
- **Distribution**: open weights via Hugging Face (`nvidia/nemotron-transcribe-granary`)

## Open Questions

- Exact parameter count + architecture (likely builds on the Nemotron 3.5 ASR 0.6B lineage with multilingual + translation extension — unverified)
- Which specific transcription/speaker-attribution leaderboards place it #1
- Audio-Q&A latency + context-window specifications
- Whether it ships with a NIM-tier managed-inference offering alongside the open weights

## Sources

- data/summaries/2026-10-30-morning.json (TLDR AI HIGH "Gemini 4 Carbon 🌱, Nemotron Transcribe 📝, benchmarker's dilemma ❓"; daily-digest Top Story #3)
