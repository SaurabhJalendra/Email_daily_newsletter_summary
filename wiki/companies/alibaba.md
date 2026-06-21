---
name: Alibaba
description: Alibaba — Qwen model family; Qwen3-Max-Thinking 100% AIME 2025; Quark AI Glasses; Chinese AI frontier lab
type: company
---

# Alibaba

> **Type**: company
> **First mentioned**: 2025-10-16
> **Last updated**: 2026-06-21-morning (Superhuman + NLP Newsletter cross-cohort — Alibaba open-sources **Qwen-Robot Suite**, a trio of robotics AI models deployable across humanoids, robotic arms, and quadruped robots; first publicly framed *cross-form-factor open-weights robotics-AI release* in this wiki; extends Qwen-family open-weights distribution from text/vision/code into the *embodied AI* category — see [[qwen-robot-suite]])
> **Status**: active
> **Related**: [[qwen-3-vl]], [[qwen-image]], [[qwen-image-2]], [[qwen-3-5]], [[qwen3-coder-next]], [[qwen-robot-suite]], [[openai]], [[meta]], [[deepseek]], [[ai-hardware]], [[humanoid-robotics]]

## Summary

Alibaba is the Chinese technology company behind the open-weights Qwen model family, and is a principal non-US frontier-lab player. In October 2025 it shipped [[qwen-3-vl]] — compact vision-language models that reportedly rival GPT-5 Nano at the small-model tier. By early November 2025 the story moved to the high-end and into hardware: Qwen3-Max-Thinking reportedly reached 100% on AIME 2025 (a competition-math benchmark) — placing Alibaba at the top of the math-reasoning leaderboard alongside the Western frontier labs — and the Quark AI Glasses surfaced as Alibaba's consumer hardware play.

## Timeline

- **2026-06-21-morning**: **Alibaba open-sources the Qwen-Robot Suite — trio of robotics AI models deployable across humanoids, robotic arms, and quadruped robots**. **Superhuman / Zain Kahn "📱 Robot phone makes high-profile appearance"** + **NLP Newsletter (Elvis Saravia) "🤖 AI Agents Weekly"** carry the cross-cohort launch framing. Superhuman: ***"Alibaba has open-sourced its Qwen-Robot Suite, a trio of robotics AI models that can be deployed across humanoids, robotic arms, and quadruped robots"***. Daily-digest Tools & Products line confirms: ***"Alibaba has open-sourced its Qwen-Robot Suite, a trio of robotics AI models that can be deployed across humanoids, robotic arms, and quadruped robots"***. NLP Newsletter places "Qwen-Robot Suite" in its compact-subject cycle headline alongside [[glm-5-2]], [[claude-code]] Artifacts, Codex Skills, Block's Builderbot, and [[spatialclaw]] — digest-cohort high-signal placement. First publicly framed *cross-form-factor open-weights robotics-AI release* in this wiki — see [[qwen-robot-suite]] for product-side detail. Structurally significant three ways: (a) **cross-form-factor coverage** in a single release (humanoid + arm + quadruped) — prior open-weights robotics releases (e.g., Alibaba RynnBrain 2026-02-17, NVIDIA reference designs) typically target a single embodiment class; (b) **trio architecture** suggests specialized per-form-factor weights with shared substrate, paralleling [[gemma-4]]'s tiered family approach rather than one-model-fits-all; (c) **open-source licensing** positions Qwen-Robot Suite as a vendor-neutral robotics foundation that Chinese + Western OEMs + academic labs can build on — competitive alternative to closed-source Google DeepMind RT-2 / Tesla Optimus / Figure AI proprietary stacks. The release extends Alibaba's open-weights distribution model from text ([[qwen-3-5]] omnimodal) + code ([[qwen3-coder-next]]) + image ([[qwen-image-2]]) + robotics-foundation (RynnBrain Feb 2026) into a *concrete shipping* robotics-AI product family. Pairs structurally same-cycle with: (1) NVIDIA SpatialClaw spatial-reasoning model (see [[spatialclaw]]) — Alibaba on the *embodiment-action* side, NVIDIA on the *spatial-reasoning-primitive* side; (2) Genesis AI Eno humanoid breakaway design + lab automation form factor (see [[humanoid-robotics]]); (3) Samsung exploring a stake in Boston Dynamics; (4) IFR report — US robotics industry grew 11% last year, with China deploying roughly *10× as many robots as the US* (consistent macro context for Chinese-frontier-lab open-source robotics-AI dominance positioning). Body-recovery items: (a) exact three-model decomposition (perception/planning/control? or three form-factor-specialized end-to-end VLAs?), (b) parameter counts + architectures + base-model lineage, (c) Apache 2.0 vs Qwen License, (d) Hugging Face + ModelScope repo names, (e) integration with NVIDIA [[isaac-groot]] reference humanoid, (f) does this displace or layer above RynnBrain — *source: data/summaries/2026-06-21-morning.json (Superhuman – Zain Kahn — Alibaba has open-sourced its Qwen-Robot Suite, a trio of robotics AI models that can be deployed across humanoids, robotic arms, and quadruped robots; NLP Newsletter — 🤖 AI Agents Weekly: GLM-5.2, Claude Code Artifacts, Qwen-Robot Suite, Codex Skills, Block's Builderbot, SpatialClaw, and More)*

- **2026-04-04**: Qwen3.6-Plus released — reasoning/coding upgrade explicitly built for coding agents; native 1M-token context window; multimodal inputs; native function calling + structured JSON output; Alibaba reports Qwen3.6-Plus outperforms [[claude-opus-4-5]] in terminal-based coding benchmarks; direct integration with [[openclaw]], [[claude-code]], and Cline (plug-and-play for existing agent tooling); called out by TLDR AI as "a highly stable and reliable foundation for the developer ecosystem" with "sharper multimodal reasoning" than prior Qwen generations; paired in coverage with Google's [[gemma-4]] as the two major open-model drops of the week — *source: 2026-04-04 cycle (The Code — Qwen3.6-Plus massive upgrade for coding agents; TLDR AI — Qwen3.6-Plus; The Rundown AI — Qwen3.6-Plus rivals Opus 4.5)*
- **2026-04-01**: [[qwen-3-5-omni]] released — full omnimodal LLM (text + images + audio + video in one system); 256K-token context across combined multimodal inputs in a single request; handles 10+ hours of audio and 400 s of 720p video without splitting inputs; trained on 100M+ hours of multimodal data; speech recognition in 113 languages, speech generation in 36; reported to outperform Google [[gemini-3-1-pro]] on audio reasoning and speech benchmarks; can generate functional websites and games from spoken descriptions + camera input; QWEN 3.6 Plus Preview released alongside — hybrid architecture tuned for reasoning + agent workflows; Z.ai ships AutoClaw (local AI assistant that breaks down + executes tasks) — *source: 2026-04-01 cycle (World of AI — Claude Controls Computers [Qwen 3.6 Plus]; The Code — Claude Code gets computer use [Qwen 3.5 Omni]; TLDR AI — Qwen3.5-Omni; AlphaSignal — full omnimodal)*
- **2026-03-30**: Alibaba.com launches Accio Work — agentic B2B system that assembles Qwen-powered agent teams for businesses; handles multi-step workflows like launching an e-commerce business (market analysis, supplier negotiations, logistics tracking); positioned for agent-to-agent B2B communication; President Kuo Zhang predicts "first one-person billion-dollar company just months away" — *source: 2026-03-30 cycle (The Rundown AI — Kuo Zhang exclusive)*
- **2026-03-06**: Significant departures from Qwen team — including lead researcher Junyang Lin — raising questions about continued Qwen development velocity — *source: 2026-03-06 cycle*
- **2026-03-04**: [[qwen-3-5-small]] series released — tiny open-source Qwen 3.5 Small family that runs on laptops/phones and outperforms larger models in specific tasks — *source: 2026-03-04 cycle*
- **2026-02-27**: [[qwen-3-5-medium]] open-source — outperforms its larger predecessor via smarter architecture + MoE — *source: 2026-02-27 cycle*
- **2026-02-18**: [[qwen-3-5]] released — Qwen3.5-397B-A17B sparse-MoE with hybrid linear-attention architecture (up to 19× faster decoding than Qwen3-Max); native vision-language; 201 languages/dialects; near-frontier performance at lower cost — *source: 2026-02-18 cycle (TLDR; AlphaSignal; The Rundown AI)*
- **2026-02-17**: RynnBrain open-source robotics foundation model released — *source: 2026-02-17 cycle (Mindstream)*
- **2026-02-12**: [[qwen-image-2]] released — merges image generation and editing into a single model; #2 on AI Arena image-editing Elo, #3 on text-to-image — *source: 2026-02-12 cycle*
- **2026-02-05**: [[qwen3-coder-next]] released — open-weights 80B-parameter MoE coding agent trained on 800K executable coding tasks — *source: 2026-02-05 cycle*
- **2026-01-03**: [[qwen-image]] ranked strongest open-source image generator on AI Arena after 10,000+ blind evaluations — "open-source image king" framing — *source: 2026-01-03 cycle*
- **2026-01-02**: Qwen3 highlighted alongside [[deepseek]]-R1 as China AI-model wave rivaling Western frontier — *source: 2026-01-02 cycle*
- **2025-12-17**: "China's ChatGPT" coverage cycles spotlight Alibaba/Qwen continued momentum — *source: TAAFT cycle*
- **2025-12-16**: [[meta]] reportedly trains AI on Alibaba's Qwen — first major US-lab usage of Qwen weights for training framed as a milestone — *source: AI Breakfast "Meta Trains AI on China's Qwen"*
- **2025-12-02**: Chinese open-AI economy share rises to 14.2% (DeepSeek + Alibaba/Qwen leading); true open-source share of overall AI models drops from 79.3% (2022) to 39% (2025) — *source: 2025-12-02 cycle*
- **2025-11-29**: Qwen sigmoid-gated SDPA research — improves transformer scaling and stability with consistent performance gains and reduced activation spikes — *source: 2025-11-29 cycle*
- **2025-11-29**: Quark S1 Smart Specs launched — Meta-Ray-Ban-Display-class features at lower price point — *source: 2025-11-29 cycle*
- **2025-11-27**: Qwen app exceeds 10M downloads in first week; lifestyle/productivity service integration planned; Taobao integration narrative continues — *source: 2025-11-27 cycle*
- **2025-11-23**: Qwen chatbot enhances shopping on Taobao to rival ChatGPT and Google — *source: 2025-11-23 cycle*
- **2025-11-19**: Qwen Code upgraded with free web search, fuzzy matching, cleaner responses — *source: AlphaSignal cycle*
- **2025-11-06**: Partially trained Qwen 3 reportedly solves top reasoning tests mid-training — *source: AlphaSignal cycle "Alibaba releases partially trained Qwen 3"*
- **2025-11-04**: Qwen3-Max-Thinking reportedly hits 100% AIME 2025 — *source: TLDR AI "Qwen3-Max-Thinking"*
- **2025-10-31**: Quark AI Glasses surface in coverage — *source: TLDR cycle*
- **2025-10-16**: Unveils [[qwen-3-vl]] compact models rivaling GPT-5 Nano — *source: AlphaSignal "Alibaba unveils compact Qwen3-VL models that rival GPT-5 Nano"*

## Key Facts

- Flagship model family: Qwen (open weights)
- Latest releases: [[qwen-3-vl]] (Oct 2025); Qwen3-Max-Thinking (Nov 2025)
- Hardware: Quark AI Glasses (Oct 2025)
- Benchmark headline: 100% AIME 2025 on Qwen3-Max-Thinking

## Open Questions

- Licensing terms on Qwen3-VL and Qwen3-Max-Thinking — fully open or commercial-restricted?
- Methodology/contamination concerns behind 100% AIME 2025 — independent reproduction status?
- Quark Glasses pricing, geographic availability, and competitive position vs Meta Ray-Ban?
- Deployment story for small-model tier (edge, mobile, in-browser)?

## Sources

- data/summaries/2025-10-16.json (AlphaSignal — Alibaba unveils compact Qwen3-VL models that rival GPT-5 Nano)
- data/summaries/2025-10-31.json (TLDR cycle — Quark AI Glasses)
- data/summaries/2025-11-04.json (TLDR AI — Qwen3-Max-Thinking)
- data/summaries/2025-11-06.json (AlphaSignal — partially trained Qwen 3 solves reasoning tests)
- data/summaries/2025-11-19.json (AlphaSignal — Qwen Code upgraded)
- data/summaries/2025-11-23.json (Qwen chatbot Taobao shopping)
- data/summaries/2025-11-27.json (Qwen app 10M downloads first week)
- data/summaries/2025-11-29.json (Qwen sigmoid-gated SDPA; Quark S1 Smart Specs)
- data/summaries/2025-12-02.json (China 14.2% open-AI economy)
- data/summaries/2025-12-16.json (AI Breakfast — Meta Trains AI on China's Qwen)
- data/summaries/2025-12-17.json (TAAFT cycle — China's ChatGPT)
- data/summaries/2026-02-27.json (Qwen 3.5 Medium MoE)
- data/summaries/2026-03-04.json (Qwen 3.5 Small family)
- data/summaries/2026-03-06.json (Qwen team departures — Junyang Lin)
- data/summaries/2026-03-30.json (The Rundown AI — Kuo Zhang exclusive on Accio Work / Qwen agent teams for B2B)
- data/summaries/2026-04-01.json (World of AI / The Code / TLDR AI / AlphaSignal — Qwen3.5-Omni + Qwen 3.6 Plus Preview)
- data/summaries/2026-04-04.json (The Code — Qwen3.6-Plus massive upgrade for coding agents; TLDR AI — Qwen3.6-Plus; The Rundown AI — Qwen3.6-Plus rivals Opus 4.5)
