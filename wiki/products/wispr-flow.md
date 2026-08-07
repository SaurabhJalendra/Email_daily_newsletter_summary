---
name: Wispr Flow
description: Voice dictation + AI editing tool that lets developers prompt agents and drive IDEs ~4× faster than typing; Menlo Ventures talks at ~$2B
type: product
---

# Wispr Flow

> **Type**: product
> **First mentioned**: 2026-06-28-morning
> **Last updated**: 2026-08-07-evening (**Cross-cohort recoverage — World of AI MEDIUM highlights Wispr Flow as a tool for speaking prompts to AI models, allowing more natural interaction and detailed prompts without the need for typing**. World of AI MEDIUM: *"Wispr Flow, a tool for speaking prompts to AI models, was highlighted, allowing for more natural interaction and detailed prompts without the need for typing"*. First publicly framed on this cycle: *"speaking prompts" framing at newsletter-headline tier* — sharpens the multi-cycle "voice-input-to-AI" positioning with a *canonical newsletter-tier framing* on Wispr Flow's role as *prompt-input substrate for AI-model interaction*. Reads as *cross-cohort settled-fact* framing that Wispr Flow is now the *canonical voice-input tool* for AI-model prompting in mid-2026. See [[cursor]] + [[vibe-coding]] — *source: data/summaries/2026-08-07-evening.json (World of AI MEDIUM "GPT-6! 🔥 DeepSeek-V4-Flash & Qwen 3.8-Max Drop")*)
> **Previously updated**: 2026-06-28-morning
> **Status**: active
> **Related**: [[cursor]], [[vibe-coding]], [[ai-funding-rounds]], [[agent-frameworks]]

## Summary

Wispr Flow is a voice dictation and command product that turns messy real-world speech into clean, formatted text plus in-app actions, claimed to let developers input text and steer applications about 3–4× faster than typing. It runs as a system-level assistant on Mac, Windows, iOS and (newly) Android, supports 100+ languages including a Hinglish model for code-mixed Indian users, and integrates with developer environments including [[cursor]], VS Code, and JetBrains. Beyond raw transcription, Flow automatically removes filler words, formats output to match the app's context, and exposes AI commands and auto-edits — positioning it as the voice front-end for prompting and steering AI coding agents hands-free.

AlphaSignal's 2026-06-28 coverage frames Flow as the canonical "voice is the new keyboard" example and reports engineering teams at OpenAI, Vercel, and Clay as users. Independent research surfaces traction milestones (~50% of character input by voice within three months of onboarding, ~100× YoY user growth, strong 12-month retention) and a funding ladder reaching a reported $260M Bloomberg-reported raise led by Menlo Ventures at ~$2B valuation, after a 2025 $30M Series A and follow-ons totaling $81M at a $700M valuation. The Android launch reportedly cut dictation latency ~30% via an infra rewrite. Flow's strategic positioning — voice as a primary modality for prompting [[vibe-coding]]-class agents — pairs with the broader keyboard-to-voice shift in [[agent-frameworks]].

## Timeline

- **2026-06-28-morning**: AlphaSignal headlines "Speak to your IDE, skip the keyboard" — Wispr Flow described as letting devs prompt AI agents ~4× faster than typing; supports 100+ languages; integrates with [[cursor]], VS Code, JetBrains; used by engineering teams at [[openai]], [[vercel]], Clay; researchFindings adds ~50% character-input-by-voice within 3 months of onboarding, ~100× YoY user growth, $260M Bloomberg-reported raise led by Menlo Ventures at ~$2B valuation, Android launch with ~30% dictation-latency cut, new Hinglish model; recent Yapify acquisition + in-house ASR stack targeting ~10% error rate cited as moat-building moves — *source: data/summaries/2026-06-28-morning.json (AlphaSignal — Speak to your IDE, skip the keyboard)*

## Key Facts

- Category: voice dictation + command + AI editing layer
- Platforms: Mac, Windows, iOS, Android
- Languages: 100+ including Hinglish (code-mixed)
- Editor integrations: [[cursor]], VS Code, JetBrains
- Speed claim: ~3–4× typing throughput
- Adoption signals: 50% character input via voice within 3 months; ~100× YoY user growth; strong 12-month retention
- Funding: $30M Series A (mid-2025) → $81M cumulative at $700M valuation; reportedly raising ~$260M at ~$2B (Menlo Ventures lead, per Bloomberg)
- Recent: Android launch with ~30% latency cut; Yapify acquisition; in-house ASR targeting ~10% error rate
- Enterprise users named: [[openai]], [[vercel]], Clay engineering teams

## Open Questions

- Does the ~$2B Menlo round close at reported terms, and what's the lead investor list?
- How does Flow's ASR compare against AssemblyAI's Voice Agent API and Cohere Transcribe on developer-context benchmarks?
- Will major IDE vendors (Microsoft, JetBrains) ship native first-party equivalents and squeeze Flow's IDE-integration moat?
- Privacy/security posture for enterprise deployments — does audio leave the device, where is it stored?

## Sources

- data/summaries/2026-06-28-morning.json (AlphaSignal — Speak to your IDE, skip the keyboard; researchFindings.additionalContext — Wispr Flow funding ladder, Android launch, Hinglish model, Yapify acquisition)
