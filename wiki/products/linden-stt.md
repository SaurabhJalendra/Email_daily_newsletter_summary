---
name: Linden STT
description: Speechmatics's Sep 2026 STT model purpose-built for voice agents — 55+ languages, 350ms latency, 1000+ custom-word jargon support, $0.30/hr ($0.15/hr discounted)
type: product
---

# Linden STT

> **Type**: product
> **Vendor**: [[speechmatics]]
> **First mentioned**: 2026-09-18-evening
> **Last updated**: 2026-09-18-evening
> **Status**: active
> **Related**: [[speechmatics]], [[assemblyai]], [[elevenlabs]], [[fish-audio]]

## Summary

Linden is [[speechmatics]]'s September 2026 speech-to-text model *purpose-built for voice agents*, not general transcription. It emphasizes high accuracy in noisy environments and with strong accents, supports 1,000+ custom words per session for industry-jargon tuning, spans 55+ languages, and runs at 350ms latency. Priced $0.30/hour list ($0.15/hour after discounts), Linden competes directly with AssemblyAI's Voice Agent API, ElevenLabs speech-to-text, and OpenAI's Realtime speech APIs on the voice-agent tier.

## Timeline

- **2026-09-18-evening**: Speechmatics releases Linden — 55+ languages + 350ms latency + 1,000+ custom-word support + $0.30/hr ($0.15/hr discounted); AlphaSignal HIGH: *"Speechmatics has released a new STT model, Linden, which is purpose-built for voice agents, not general transcription. It has high accuracy in noisy environments and strong accents, supports 1,000+ custom words for understanding industry jargon, and has 350ms latency"* — *source: data/summaries/2026-09-18-evening.json (AlphaSignal HIGH "⚖️ OpenAI GPT-6 Astra targets law firms with 230M-URL index")*

## Key Facts

- Purpose: voice agents (not general transcription)
- Languages: 55+
- Latency: 350ms
- Custom vocabulary: 1,000+ words per session (industry-jargon adaptation)
- Robustness: noisy environments + strong accents
- Pricing: $0.30/hour list; $0.15/hour after discounts

## Open Questions

- Word-error-rate benchmarks vs AssemblyAI / OpenAI Realtime / ElevenLabs on standard corpora (LibriSpeech, CommonVoice, meeting audio)
- On-device / edge inference support
- Speaker diarization + timestamps at 350ms latency
- Real-time streaming interfaces (WebSocket, gRPC)

## Sources

- data/summaries/2026-09-18-evening.json (AlphaSignal — Speechmatics releases Linden STT)
