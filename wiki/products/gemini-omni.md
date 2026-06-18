---
name: Gemini Omni
description: Google's conversational video model — "Nano Banana for video"; edits and creates video from any input (May 2026)
type: product
---

# Gemini Omni

> **Type**: product
> **First mentioned**: 2026-05-13
> **Last updated**: 2026-06-08 (evening edition — Vaibhav Sisinty three-test review: Likeness 6/10, Multi-turn Ceiling 7/10, Physics 5/10; positioned as edit-loop workflow upgrade *not* a [[veo-3]] replacement)
> **Status**: active
> **Related**: [[google]], [[gemini]], [[gemini-3-5-flash]], [[veo-3]], [[nano-banana-pro]], [[project-genie]], [[ai-video-generation]], [[world-models]]

## Summary

Gemini Omni is Google's conversational multimodal video model launched at Google I/O 2026 (2026-05-19) — leaked a week earlier on Reddit. Takes any input (text, image, audio, video) and outputs editable video grounded in real-world knowledge, with each edit building on the last in chat-style turns. Marketed as "Nano Banana for video," it shifts the value prop from raw generation (Sora, Veo 3) to in-chat editing — supporting remixing, object swaps, character consistency, watermark removal, and template-based editing across clips up to 10 seconds today with longer durations rolling out. Variants ship as **Gemini Omni Flash** (in Gemini app, Google Flow, YouTube Shorts/Create, with API access following) and a higher-tier Pro variant. Replaces Veo 3.1 branding inside Gemini surfaces. Combined with [[project-genie]] (Genie 3 + Street View persistent worlds), [[veo-3]], and [[nano-banana-pro]], Google positions Omni as the unifying video/world-model substrate.

## Timeline

- **2026-06-08-evening**: **Vaibhav Sisinty publishes first publicly framed three-test methodological evaluation of Gemini Omni vs [[veo-3]]** — (1) **Likeness Test 6/10** — Omni keeps the subject identical across edits but struggles with environment and lighting consistency; (2) **Multi-turn Ceiling Test 7/10** — Omni performs well across the first three editing turns but fails in the fourth, exposing a ceiling on the chat-based edit loop; (3) **Physics Test 5/10** — fails to depict the physics of a bowling ball dropping onto cardboard boxes accurately. Conclusion: Omni's strengths are in **chat-based editing-loop workflow**, *not* in raw video-generation output fidelity — explicitly framed as a **workflow upgrade, not a Veo 3.1 replacement** (first cross-test methodological framing that decouples Omni's chat-editing-loop value from raw-output-fidelity benchmarks in this wiki — sharpens the 2026-05-19 "Nano Banana for video" framing into a concrete tradeoff: in-chat editing as the durable surface, raw generation still Veo's territory) — *source: data/summaries/2026-06-08-evening.json (Staying Ahead with AI / Vaibhav Sisinty "rip veo?" — Likeness 6/10 + Multi-turn 7/10 + Physics 5/10 + edit-loop workflow upgrade not Veo replacement; Superhuman "ChatGPT getting biggest overhaul yet" — Gemini Live real-time AI edits through camera as the conversational-editing companion surface)*
- **2026-05-25**: Post-I/O 2026 synthesis: Omni recapped as the "video generation from text prompts" surface that lets users (e.g.) "generate a claymation explainer of protein folding from a one-line prompt" — concrete example crystallizes the editorial framing of Omni as a high-fidelity-+-conversational-editing pair; users can ask for adjustments (motion blur in background, warmer lighting) via plain chat after generation — *source: 2026-05-25 cycle (The AI Corner — 10 moves from I/O 2026 / Gemini Omni; Uncovering AI — Gemini Omni high-fidelity video + plain-conversation editing)*
- **2026-05-23**: Gemini Omni continues circulating as the "create-anything model" framing in AI-agents weekly recaps — *source: 2026-05-23 cycle (NLP Newsletter; Hello World)*
- **2026-05-20**: Gemini Omni Flash announced as the conversational video-editing flagship — supports remixing, object swap, template editing, mixing inputs; up to 10s clips today, API access in coming weeks — *source: 2026-05-20 cycle (AlphaSignal — Gemini Omni Flash; AI Breakfast — Every Announcement; Cerebral Valley)*
- **2026-05-19**: Gemini Omni officially announced at Google I/O 2026 — replaces Veo 3.1 branding in Gemini surfaces; rolls out to AI Plus, Pro, Ultra tiers across Gemini app, Google Flow, YouTube Shorts — *source: 2026-05-19 cycle (World of AI — Gemini 3.5 Flash + Karpathy + IO; AINews — Gemini 3.5 Flash + Omni + Antigravity; The Rundown AI — biggest reveals from Google I/O; TLDR — Google I/O; AI Breakfast — Every Announcement; Forward Future — Google found AI's killer distribution hack; Evolving AI Insights — OpenAI Co-Founder Joins Anthropic)*
- **2026-05-16**: Gemini Omni leak continues to circulate ahead of I/O — sharper realism on historically challenging prompts, video-from-text + conversational editing — *source: 2026-05-16 cycle (Daily ChatGPT — ChatGPT Is Being Sued; World of AI — GOOGLE: Gemini Omni LEAKED)*
- **2026-05-13**: Gemini Omni leaks on Reddit ahead of Google I/O — described as chat-native video tool rather than standalone generator, replaces Veo 3.1 inside Gemini; demos show sharper realism, math-equation text rendering, in-chat object swap, watermark removal — *source: 2026-05-13 cycle (Evolving AI Insights — Gemini Omni Leaks; TLDR — Google video AI leaks; AlphaSignal — Gemini Omni surfaces; AI Breakfast — Google's Gemini Omni; Mindstream — Gemini Omni)*

## Key Facts

- Any-input → editable video output (text, image, audio, video → video)
- 10-second clips today, longer durations announced as rolling out
- In-chat editing: remixing, object swap, watermark removal, template-based edits, character consistency
- "Nano Banana for video" framing — value prop is editing, not just generation
- Variants: Gemini Omni Flash (Gemini app / Flow / YouTube Shorts) + Pro tier
- Replaces [[veo-3]] (Veo 3.1) branding inside Gemini surfaces
- Integrated with [[gemini-3-5-flash]] reasoning backbone

## Open Questions

- Same model as Veo 3.1 with a new front-end, or new architecture entirely?
- Pricing per generation / per edit — likely consumption-based?
- Watermarking — does Omni's SynthID labeling apply to chat-edited outputs?

## Sources

- data/summaries/2026-05-13.json (Evolving AI Insights; TLDR; AlphaSignal; AI Breakfast; Mindstream)
- data/summaries/2026-05-16.json (Daily ChatGPT; World of AI)
- data/summaries/2026-05-19.json (World of AI; AINews; The Rundown AI; TLDR; AI Breakfast; Forward Future; Evolving AI Insights)
- data/summaries/2026-05-20.json (AlphaSignal; AI Breakfast; Cerebral Valley)
- data/summaries/2026-05-23.json (NLP Newsletter; Hello World)
- data/summaries/2026-05-25.json (The AI Corner — claymation protein-folding explainer prompt; Uncovering AI — high-fidelity video + plain-conversation editing example)
