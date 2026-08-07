---
name: FLUX 3
description: Black Forest Labs' Jul 2026 multimodal foundation model combining image + video + audio + robotics; ships as unified model for creative and physical-AI workloads
type: product
---

# FLUX 3

> **Type**: product
> **Vendor**: [[black-forest-labs]]
> **First mentioned**: 2026-07-25-morning
> **Last updated**: 2026-08-07-morning (**FLUX 3 Video ships as a video-specific variant/component with concrete specs: 1080p output, up to 20-second clips, native audio/dialogue/sound-effects generation, draft mode for cheap preview-before-full-render**. Superhuman MEDIUM: *"Black Forest Labs has released its latest video model, FLUX 3 Video, which can generate clips in 1080p up to 20 seconds long with native audio, dialogue, or sound effects. The model is built on an understanding of the real world and comes with a draft mode, allowing users to preview different ideas at a lower cost before rendering the entire video"*. Daily-digest AI Models & Research: *"Black Forest Labs releases FLUX 3 Video, capable of generating 1080p clips up to 20 seconds long with native audio, dialogue, or sound effects. This demonstrates progress in AI-generated content, particularly in video production, which can have wide-ranging applications in entertainment, education, and marketing"*. First publicly framed on this cycle: (a) *1080p up-to-20-second concrete video-spec anchor* — sharpens the 2026-07-25 unified-multimodal framing into a concrete video-tier capability spec; (b) *"native audio, dialogue, or sound effects"* — first publicly framed *audio-track-as-native-video-output* on FLUX 3 in this wiki, competes structurally with [[sora-2]] audio + [[veo-3]] synchronized-audio + [[gemini-omni]] Flash 720p+audio at the *conversational-video-with-audio* tier; (c) *"draft mode for preview-before-full-render"* cost-tier — first publicly framed *cheap-preview + full-render two-tier video-generation UX primitive* on FLUX 3, structurally novel for a video-generation product. See [[ai-video-generation]] + [[sora-2]] + [[veo-3]] + [[gemini-omni]] — *source: data/summaries/2026-08-07-morning.json (Superhuman MEDIUM "🫨 Four legends leave Google at once"; daily-digest AI Models & Research)*)
> **Previously updated**: 2026-07-25-morning
> **Status**: shipped (Jul 2026; FLUX 3 Video variant Aug 2026)
> **Related**: [[black-forest-labs]], [[flux-2]], [[nano-banana-pro]], [[audex]], [[ai-video-generation]], [[world-models]], [[humanoid-robotics]], [[sora-2]], [[veo-3]], [[gemini-omni]]

## Summary

FLUX 3 is [[black-forest-labs]]' July 2026 multimodal foundation model that combines image, video, and audio generation in a single system and extends into robotics control — framed as targeting "a better understanding of the real world" via unified multimodal processing. The launch is significant on two axes: (a) it collapses BFL's prior image-only [[flux-2]] positioning into a *unified multimodal-first substrate*, structurally analog to NVIDIA's [[audex]] text+audio unification but broader in scope; (b) it debuts with a *shipping physical-AI deployment* — BFL says FLUX 3 is "already powering real-world robots deployed at Audi", making it the first BFL model publicly framed as *powering production factory-robotics*.

## Timeline

- **2026-08-07-morning**: **FLUX 3 Video variant ships — 1080p up to 20-second clips + native audio/dialogue/sound-effects + draft mode for cheap preview-before-full-render**. Superhuman MEDIUM: *"Black Forest Labs has released its latest video model, FLUX 3 Video, which can generate clips in 1080p up to 20 seconds long with native audio, dialogue, or sound effects. The model is built on an understanding of the real world and comes with a draft mode, allowing users to preview different ideas at a lower cost before rendering the entire video"*. First publicly framed *1080p / 20s / native-audio / draft-mode* concrete video-spec anchors on FLUX 3 in this wiki. Positions FLUX 3 Video against [[sora-2]] + [[veo-3]] + [[gemini-omni]] Flash at the *conversational-video-with-audio* tier — *source: data/summaries/2026-08-07-morning.json (Superhuman MEDIUM "🫨 Four legends leave Google at once"; daily-digest AI Models & Research)*
- **2026-07-25-morning**: **FLUX 3 launched — multimodal (image + video + audio) + real-world-robots deployment at Audi**. Superhuman MEDIUM: *"Black Forest Labs launched FLUX 3, a multimodal foundation model that combines image, video, and audio elements to gain a better understanding of the real world and create results that are truer to life. FLUX 3 is already powering real-world robots deployed at Audi"*. AlphaSignal MEDIUM restates: *"Black Forest Labs has released FLUX 3, a single model for image, video, audio, and robotics tasks, aiming to simplify multimodal processing and application development"*. FutureTools MEDIUM cross-signal: BFL "FLUX 3 into factory robotics with Audi test". First publicly framed in this wiki: (a) FLUX-family multimodal-and-robotics unification; (b) BFL production-factory-robotics deployment (Audi) — *source: data/summaries/2026-07-25-morning.json (Superhuman MEDIUM "💬 AI's voice control level ups"; AlphaSignal MEDIUM "ChatGPT Voice Agents 🤖, Claude Opus Voice Mode 🎙️, Claude Managed Agen(ts)"; FutureTools MEDIUM "OpenAI models break free")*

## Key Facts

- Vendor: [[black-forest-labs]]
- Modalities: image + video + audio + robotics control (single-model)
- First named production customer: Audi (factory robotics deployment)
- Predecessor: [[flux-2]] (image-only)
- Positioning: multimodal foundation-model-for-both-creative-and-physical-AI
- FLUX 3 Video variant specs (Aug 2026): 1080p resolution, up to 20-second clips, native audio/dialogue/sound-effects, draft mode for cheap preview-before-full-render

## Open Questions

- Open-weights or closed API? [[flux-2]] shipped open weights; is FLUX 3 same?
- Parameter count / model size / inference cost profile?
- Audi deployment scope (assembly, inspection, or full-cell autonomy)?
- Concrete pricing tiers (draft mode vs full render)?
- Video-generation quality vs [[runway-gen-4-5]] / [[sora-2]] / [[veo-3]] head-to-head?
- Audio track generation quality (TTS, music, environmental sound) benchmarks?

## Sources

- data/summaries/2026-08-07-morning.json (Superhuman MEDIUM "🫨 Four legends leave Google at once" — FLUX 3 Video 1080p / 20s / native audio / draft mode; daily-digest AI Models & Research)
- data/summaries/2026-07-25-morning.json (Superhuman MEDIUM "💬 AI's voice control level ups"; AlphaSignal MEDIUM "ChatGPT Voice Agents 🤖, Claude Opus Voice Mode 🎙️, Claude Managed Agen(ts)"; FutureTools MEDIUM "OpenAI models break free" — FLUX 3 into factory robotics with Audi test)
