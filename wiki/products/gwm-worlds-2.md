---
name: GWM Worlds 2
description: Runway's real-time interactive world model that generates 720p/24fps video + 48kHz audio continuously; driven by the structured WorldPrompt control format
type: product
---

# GWM Worlds 2

> **Type**: product
> **Vendor**: [[runway]]
> **First mentioned**: 2026-09-05-morning
> **Last updated**: 2026-09-25-evening
> **Status**: active
> **Related**: [[runway]], [[runway-gen-4-5]], [[solaris]], [[world-labs]], [[world-models]], [[atlas-world-labs]], [[hydra-0]], [[odyssey-3]], [[ai-video-generation]]

## Summary

GWM Worlds 2 is [[runway]]'s real-time interactive world-model research preview announced in early September 2026 — a system that generates continuous 720p video at 24 fps synchronized with 48 kHz audio, allowing users to steer characters, cameras, and environment through a structured control format called **WorldPrompt**. Unlike one-shot text-to-video generators, GWM Worlds 2 uses **autoregressive diffusion** (frames generated one at a time rather than a whole clip at once) to keep the world responsive to input, and separates a scene into two layers: a *persistent context* (genesis prompt + first frame, defining environment, subjects, visual style, physics, and camera perspective) and a *timestamped event stream* (movement, gestures, object interactions, dialogue, sound, scene-level events). Runway positions the system for gaming, robotics, and simulation — applications where continuous, controllable, physics-aware video generation matters more than a single beautiful clip.

## Timeline

- **2026-09-25-evening**: **WorldPrompt structured control format + autoregressive diffusion architecture surfaced via Latent.Space swyx podcast with Runway CTO Kamil Sindi and Principal Research Scientist Robin Kahlow — canonical concrete-input-format canonical anchor + concrete-frame-by-frame-vs-clip-at-once architectural-choice canonical anchor pair**. Latent.Space MEDIUM: *"Runway has released GWM Worlds 2, a research preview that generates interactive worlds continuously in real time, allowing for control over characters, cameras, and the environment through its new WorldPrompt format"* + *"Runway's model is based on autoregressive diffusion, generating frames one at a time rather than all at once, which allows for real-time interaction and is more suitable for applications requiring continuous video generation"* + *"achieved real-time interactive worlds streamed in continuous 720p video at 24 frames per second and audio at 48,000 Hz"*. researchFindings.additionalContext canonicalizes: *"WorldPrompt is Runway's structured control format for GWM Worlds 2 ... It separates a world into two layers: persistent context—a genesis prompt and first frame defining the environment, subjects, visual style, physical or behavioral laws, and camera perspective—and a timestamped event stream describing changing actions such as movement, gestures, object interactions, dialogue, sound, and scene-level events"* + *"Its significance is the explicit separation of stable world state from time-varying events, a model more compatible with games, interactive media, simulation, robotics, and AI-agent training than conventional clip-based generation"*. AINews HIGH cross-cohort: *"Runway has released GWM Worlds 2 ... users can steer the world with text actions and camera motion"*. AINews HIGH also announces the Runway-CTO+Principal-Research-Scientist Latent.Space *exclusive podcast this weekend* — reinforces the podcast as the canonical technical-anchor source for WorldPrompt on this cycle. First-in-wiki: (a) **WorldPrompt canonical named-input-format anchor + persistent-context-plus-timestamped-event-stream two-layer canonical architecture anchor** — first-in-wiki *concrete WorldPrompt named-control-format canonical anchor* on any real-time world-model (structurally significant — canonicalizes late-Sep-2026 as *canonical concrete-structured-world-prompting-format inflection window* — likely durable reference-anchor for future world-model-control-format discussion); (b) **Autoregressive-diffusion frame-by-frame canonical architecture anchor** — first-in-wiki *concrete Runway-authored autoregressive-diffusion canonical anchor* on world-models arc (structurally significant — distinguishes GWM Worlds 2 from clip-at-once video-generation-tier substrate); (c) **Kamil Sindi + Robin Kahlow named-team canonical attribution anchor** — first-in-wiki *concrete Runway-CTO + Principal-Research-Scientist named-attribution canonical anchor* on GWM Worlds 2. Also same-cycle: **daily-digest Top Story #1 in the "AI Models & Research" section** — canonicalizes GWM Worlds 2 as *cycle-headline research-tier canonical anchor*. See [[worldprompt]] (folded into this page) + [[runway]] + [[world-models]] + [[atlas-world-labs]] + [[odyssey-3]] — *source: data/summaries/2026-09-25-evening.json (Latent.Space MEDIUM "Runway's WorldPrompt and the Engineering of Real-Time Worlds"; AINews HIGH "[AINews] The Future of Latent Space"; researchFindings.additionalContext — Runway's WorldPrompt)*

- **2026-09-05-morning**: **GWM Worlds 2 launch as sibling world-model to [[solaris]] IWM — 720p / 24fps / 48kHz-audio spec anchor + text-actions + camera-motion steering canonical anchor**. TLDR AI HIGH cycle-item: *"Runway has introduced GWM Worlds 2, a world model that generates interactive environments in real time at 720p, 24 fps, with 48 kHz audio. Users can steer the world with text actions and camera motion"*. FutureTools HIGH + AlphaSignal MEDIUM cross-cohort saturation. First-in-wiki *GWM Worlds 2 canonical sibling-world-model product anchor + audio-included real-time world-model spec anchor* on the multi-cycle Runway world-model line. See [[runway]] + [[solaris]] — *source: data/summaries/2026-09-05-morning.json (TLDR AI HIGH "GPT-6 Astra 🚀, Grok Bot Enterprise 🤖, Runway world model 🌎"; FutureTools HIGH; AlphaSignal MEDIUM)*

## Key Facts

- **Vendor**: [[runway]]
- **Status**: research preview (September 2026)
- **Output spec**: 720p continuous video @ 24 fps + 48 kHz audio, real-time interactive
- **Input format**: WorldPrompt — two-layer structure: (a) persistent context (genesis prompt + first frame; environment, subjects, style, physics, camera) + (b) timestamped event stream (movement, gestures, object interactions, dialogue, sound, scene-level events)
- **Architecture**: autoregressive diffusion (frame-by-frame generation, not clip-at-once) — enables real-time interaction and error-tolerant continuous generation
- **Key team**: Kamil Sindi (CTO), Robin Kahlow (Principal Research Scientist), Anastasis Germanidis (CTO/co-founder)
- **Target applications**: gaming, robotics simulation, interactive media, AI-agent training synthetic data
- **Competitive positioning**: alongside [[atlas-world-labs]] world-generation-tier + [[hydra-0]] pixel-motion-trajectory-tier + [[odyssey-3]] cross-embodiment-controller-tier + Google DeepMind Genie 3 + Odyssey-2 Pro + [[world-labs]] RTFM

## Open Questions

- Latency ceiling and hardware requirements at 24 fps sustained streaming?
- Public API / developer access timeline beyond research-preview?
- Error-accumulation behavior over long horizons (multi-minute continuous sessions)?
- Compatibility of WorldPrompt with robotic-simulation stacks (Isaac Sim, Genesis, MuJoCo)?

## Sources

- data/summaries/2026-09-25-evening.json (Latent.Space MEDIUM "Runway's WorldPrompt and the Engineering of Real-Time Worlds"; AINews HIGH "[AINews] The Future of Latent Space"; researchFindings.additionalContext — Runway's WorldPrompt)
- data/summaries/2026-09-05-morning.json (TLDR AI HIGH "GPT-6 Astra 🚀, Grok Bot Enterprise 🤖, Runway world model 🌎"; FutureTools HIGH; AlphaSignal MEDIUM)
