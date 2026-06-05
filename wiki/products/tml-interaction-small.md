---
name: TML-Interaction-Small
description: Thinking Machines' 276B-A12B native interaction model — audio/video/text micro-turns at 200ms (May 2026)
metadata:
  type: product
---

# TML-Interaction-Small

> **Type**: product
> **First mentioned**: 2026-05-13
> **Last updated**: 2026-05-19
> **Status**: active
> **Related**: [[thinking-machines]], [[gemini-3-1-flash-live]], [[chatgpt]], [[agent-frameworks]]

## Summary

TML-Interaction-Small is the first publicly released model from Mira Murati's [[thinking-machines]] lab — a 276B-parameter MoE with ~12B active params trained from scratch for real-time human-AI interaction. Unlike the turn-based stack that other voice/multimodal models bolt streaming onto, TML-Interaction-Small processes raw audio, video, and text as continuous 200ms streams via encoder-free early fusion, letting the model interject, stay quiet, talk over, backchannel, and react to visual cues on the same micro-clock. Released as a research preview on 2026-05-12; reports a 0.40s response time (approaching natural human pacing), 64.7% on timed speech tasks, and 77.8 on the FD-bench v1.5 interactivity benchmark — outperforming OpenAI's GPT-Realtime-2 and Google's Gemini Live on interactivity and latency. Positioned as a counter-direction to the agentic-first wave: human-AI *collaboration* across audio/video/text rather than autonomous task execution.

## Timeline

- **2026-05-19**: Coverage continues to frame "Interaction Models" as a new model category — applications across Ed-Tech, customer service, finance, and real-time supervision — *source: 2026-05-19 cycle (NLP Newsletter; Forward Future)*
- **2026-05-15**: TML-Interaction-Small recirculates in coverage with the 64.7% timed-speech score and Mira Murati's $2B / $12B-valuation backdrop emphasized — *source: 2026-05-15 cycle (AI Supremacy; The Code)*
- **2026-05-13**: TML-Interaction-Small announced — 276B-A12B MoE, encoder-free early fusion, 200ms audio+video+text micro-turns, outperforms GPT-Realtime-2 and Gemini Live on interactivity benchmarks; framed by Thinking Machines as a deliberate counter to the agentic-first product direction the rest of the field has taken — *source: 2026-05-13 cycle (AINews — Thinking Machines Native Interaction Models; The Rundown AI — Thinking Machines bets voice AI got it wrong; AlphaSignal — Local 284B parameter model + Thinking Machines; The Code — Ex-OpenAI CTO drops interaction model; Superhuman — Gemini's next video model leaks; TLDR AI — Interaction Models)*

## Key Facts

- 276B params total / ~12B active (MoE)
- Encoder-free early fusion across audio + image + text within ~200ms micro-turns
- 0.40s response latency (natural-conversation pacing)
- 64.7% on timed speech tasks; 77.8 on FD-bench v1.5
- Outperforms GPT-Realtime-2 (OpenAI) and Gemini Live (Google) on interactivity
- Research preview as of 2026-05-12; broader release later in 2026

## Open Questions

- Will Thinking Machines open-source weights or run it as an API-only platform?
- How does cost-per-minute compare to Gemini Live / GPT-Realtime-2 in production?
- Does the 200ms micro-turn architecture generalize to long-horizon agentic work, or stay scoped to real-time interaction?

## Sources

- data/summaries/2026-05-13.json (AINews; The Rundown AI; AlphaSignal; The Code; Superhuman; TLDR AI)
- data/summaries/2026-05-14.json (AINews — Thinking Machines + Murati)
- data/summaries/2026-05-15.json (AI Supremacy — Thinking Machines + $2B / $12B)
- data/summaries/2026-05-16.json (AINews — Thinking Machines Interaction Models)
- data/summaries/2026-05-18.json (TAAFT — Mira Murati lab ships its first model)
- data/summaries/2026-05-19.json (NLP Newsletter; Forward Future)
