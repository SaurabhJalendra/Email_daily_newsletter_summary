---
name: Speech Models
description: Speech models — AI systems that generate or understand spoken audio, including text-to-speech (TTS), speech-to-text (STT), and direct full-duplex speech-to-speech (S2S); mid-to-late-2026 trend toward lower-latency, more natural, more locally deployable voice AI
type: topic
---

# Speech Models

> **Type**: topic
> **First mentioned**: 2026-10-26-morning
> **Last updated**: 2026-10-26-morning
> **Status**: active
> **Related**: [[phonon]], [[gradium]], [[ollama]], [[dessa]], [[block]], [[voxtral-3]], [[mistral]], [[elevenlabs]], [[fish-audio]], [[assemblyai]], [[speechmatics]], [[linden-stt]], [[muse-voice-transcribe]]

## Summary

**Speech models** are AI systems that generate or understand spoken audio. The category spans **text-to-speech (TTS)** (e.g., [[phonon]], [[voxtral-3]] Mini TTS 3), **speech-to-text (STT)** (e.g., [[voxtral-3]] Small Transcribe 3, [[linden-stt]]), and direct **full-duplex speech-to-speech (S2S)** systems that listen and speak simultaneously while modeling conversational cues (e.g., [[dessa]] from [[block]]). The late-2026 shape of the market has three visible pressure points: (1) lower latency — real-time or faster-than-real-time streaming on consumer hardware; (2) more natural prosody including pauses, laughter, and emotional expressiveness; (3) more locally deployable models — a shift from cloud-only pipelines to on-device inference and local-first developer stacks.

Oct 2026 is a dense cycle on this substrate. [[ollama]] added first-party speech-model support on macOS (Apple Silicon + MLX; `/v1/audio/speech` OpenAI-compatible endpoint) with [[gradium]]'s **[[phonon]]** TTS family as its launch model (>100× real-time on Apple Silicon). [[block]] previewed **[[dessa]]**, an unreleased full-duplex S2S model limited to safety-research testing. [[mistral]] shipped **[[voxtral-3]]** earlier in the month — an integrated voice-agent SDK pairing Small Transcribe 3 (STT, 50+ languages) and Mini TTS 3 (TTS, 35 languages with expressive speech) over a LiveKit-based streaming pipeline. These sit against the established voice-AI vendor cohort: [[elevenlabs]], [[assemblyai]], [[speechmatics]] + [[linden-stt]], and [[fish-audio]].

## Timeline

- **2026-10-26-morning**: **Created — Ollama Newsletter MEDIUM "Speech models in Ollama" + researchFindings.additionalContext canonicalize the Oct 2026 speech-models tri-anchor cluster**: (a) **[[phonon]] + [[gradium]] launch on [[ollama]]** — first speech model on Ollama via `/v1/audio/speech`; macOS/Apple Silicon only initially (Windows + Linux planned); five languages + dozens of voices; streams audio as generated; >100× real-time on Apple Silicon; (b) **[[dessa]] from [[block]]** — unreleased full-duplex S2S listening + speaking simultaneously with pauses + laughter + emotion modeling; high-end consumer hardware; safety-research testing only; (c) **Ollama 0.40.11** — speech-model support + MLX-accelerated performance (35% faster than next-fastest option on MacBook Pro with M5 Max). researchFindings framing: *"The broader industry trend is toward lower-latency, more natural, and more locally deployable voice AI"*. Pairs cycle-structurally with 10-22-morning [[voxtral-3]] [[mistral]] voice-agent SDK (STT + TTS + LiveKit pipeline) as *canonical late-Oct-2026 three-vendor open/local voice-AI productization cluster — Mistral-SDK-tier + Ollama-local-TTS-tier + Block-research-S2S-tier*. See [[phonon]] (NEW) + [[gradium]] (NEW) + [[dessa]] (NEW) + [[ollama]] + [[block]] + [[voxtral-3]] + [[mistral]] — *source: data/summaries/2026-10-26-morning.json (Ollama Newsletter MEDIUM "Speech models in Ollama"; researchFindings.additionalContext — Speech models + Ollama; daily-digest Top Story #1)*

## Key Facts

- **Three canonical sub-classes**: TTS (text → audio), STT (audio → text), full-duplex S2S (continuous bidirectional audio)
- **Oct 2026 cohort**: [[phonon]] ([[gradium]], TTS, Ollama launch partner); [[voxtral-3]] ([[mistral]], STT + TTS + LiveKit SDK); [[dessa]] ([[block]], full-duplex S2S research preview); established vendors [[elevenlabs]], [[fish-audio]], [[assemblyai]], [[speechmatics]] / [[linden-stt]]
- **Distribution surfaces**: [[ollama]] `/v1/audio/speech` OpenAI-compatible endpoint (local-first, macOS/Apple Silicon in Oct 2026); LiveKit-based streaming (Voxtral 3); vendor-hosted APIs (ElevenLabs, AssemblyAI); on-device (Phonon via MLX)
- **Oct 2026 trend-vector**: lower latency (>100× real-time on Apple Silicon for Phonon); more natural prosody (laughter + emotion in Dessa; expressive speech in Mini TTS 3); more locally deployable (Phonon on-device via Ollama; Dessa on high-end consumer hardware)
- **OpenAI-compatible `/v1/audio/speech` endpoint**: Ollama exposes speech through this standard, lowering integration friction for apps already using OpenAI SDKs

## Open Questions

- Head-to-head latency + naturalness benchmarks across Phonon vs Mini TTS 3 vs ElevenLabs vs Fish Audio
- Dessa release timeline and whether weights will be released
- Multilingual breadth comparisons (Phonon 5 vs Voxtral STT 50+ vs TTS 35)
- Whether Ollama's `/v1/audio/speech` endpoint will be adopted by other local-runtime vendors
- How full-duplex S2S changes agent-UX patterns beyond ASR→LLM→TTS chaining
- Enterprise voice-agent price-performance frontier as these models mature

## Sources

- data/summaries/2026-10-26-morning.json (Ollama Newsletter MEDIUM "Speech models in Ollama"; researchFindings.additionalContext — Speech models + Ollama; daily-digest Top Story #1)
- data/summaries/2026-10-22-morning.json ([[voxtral-3]] canonicalization — [[mistral]] voice-agent SDK)
