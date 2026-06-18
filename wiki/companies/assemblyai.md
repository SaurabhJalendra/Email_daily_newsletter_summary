---
name: AssemblyAI
description: Voice/speech AI vendor; Voice Agent API collapses voice agent pipeline into a single WebSocket connection (Jun 2026)
type: company
---

# AssemblyAI

> **Type**: company
> **First mentioned**: 2026-06-06-morning
> **Last updated**: 2026-06-06
> **Status**: active
> **Related**: [[agent-frameworks]], [[openai]], [[google]], [[elevenlabs]]

## Summary

AssemblyAI is a voice/speech AI vendor whose first wiki appearance is the launch of its **Voice Agent API** in June 2026 — a single-WebSocket interface that collapses the entire voice-agent pipeline (ASR → LLM → TTS → tool use) into one connection. The framing is significant because prior voice-agent stacks typically required stitching together a streaming ASR provider, a language model, a TTS provider, and a turn-management orchestrator, with the latency and reliability of the system bottlenecked by the seams. AssemblyAI's surface targets the "voice agents as a first-class product category" trend exemplified by [[google]]'s [[gemini-3-1-flash-live]] and [[openai]]'s GPT-Realtime family.

## Timeline

- **2026-06-06-morning**: **Voice Agent API launches** — collapses the entire voice-agent pipeline into a single WebSocket connection (one-endpoint replacement for the conventional ASR-LLM-TTS-orchestrator stack); positioned for developer ease-of-integration on voice agents; lands as the same-cycle voice-agent surface alongside [[openai]] Codex iOS plugin and the broader agent-framework consolidation toward fewer, higher-level primitives — *source: data/summaries/2026-06-06-morning.json (AlphaSignal "Claude outpaces humans 64% of the time" — AssemblyAI's Voice Agent API allows collapsing the entire voice agent pipeline into a single WebSocket connection)*

## Key Facts

- Product: **Voice Agent API**
- Architecture: single WebSocket connection consolidating ASR + LLM + TTS + turn management
- Category: voice agent platforms
- Competitive context: [[google]] [[gemini-3-1-flash-live]], [[openai]] GPT-Realtime family, [[elevenlabs]] voice/LLM hosting

## Open Questions

- Pricing model (per-minute, per-session, per-token)?
- Which underlying LLM(s) does Voice Agent API use — proprietary or third-party (OpenAI/Anthropic/Llama)?
- Latency benchmarks vs Gemini Live / GPT-Realtime end-to-end?
- Does the WebSocket surface support tool calls / function calling natively, or is that orchestrated client-side?
- Funding stage and recent valuation (not surfaced in current cycle)?

## Sources

- data/summaries/2026-06-06-morning.json (AlphaSignal — AssemblyAI Voice Agent API single-WebSocket pipeline)
