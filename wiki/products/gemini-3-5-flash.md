---
name: Gemini 3.5 Flash
description: Google's I/O 2026 agent-and-coding-tuned flagship; 4x speed at frontier-level performance; 1M-token context (May 2026)
type: product
---

# Gemini 3.5 Flash

> **Type**: product
> **First mentioned**: 2026-05-19
> **Last updated**: 2026-07-22-evening (**Successor tier ships — [[gemini-3-6-flash]] launches as the new workhorse Flash tier, using 17% fewer output tokens than 3.5 Flash + broad distribution (Gemini API + AI Studio + Vertex AI + [[antigravity-2]] + Gemini app + rolling into [[github-copilot]]). Also ships alongside [[gemini-3-5-flash-lite]] budget tier + [[gemini-3-5-flash-cyber]] gated cyber tier as a three-model July bundle. 3.5 Flash's role transitions from *reigning Flash-tier workhorse* into *prior-generation workhorse being superseded by 3.6 Flash's efficiency gains*. Notably 3.5 Pro **still missed its third deadline** (structural failures in the rebuilt model per World of AI); Google skipping 3.5 Pro and pre-training [[gemini]] 4. See [[gemini-3-6-flash]] (NEW) + [[gemini-3-5-flash-lite]] (NEW) + [[gemini-3-5-flash-cyber]] (NEW) — *source: data/summaries/2026-07-22-evening.json (World of AI MEDIUM "Gemini 3.6 Flash Is Out! 👀 + Still No Flagship")*)
> **Previously updated**: 2026-06-26-morning (**TLDR AI HIGH cycle-2 confirmation of native computer-use launch — Google has launched native computer-use capabilities for Gemini 3.5 Flash, allowing the model to interact directly with digital desktop interfaces and process continuous screenshots to execute click, scroll, and typing actions seamlessly across varied software environments; reframes cycle-1 The Rundown AI framing as official Google launch event with concrete capability list (click, scroll, typing + continuous-screenshot processing)**)
> **Previously updated**: 2026-06-25-evening
> **Earlier**: 2026-05-23
> **Status**: active
> **Related**: [[google]], [[gemini]], [[gemini-3-1-pro]], [[gemini-3-1-flash-lite]], [[gemini-2-5-computer-use]], [[gemini-omni]], [[gemini-spark]], [[antigravity-2]], [[claude-opus-4-7]], [[gpt-5-5]], [[computer-use]], [[agent-frameworks]]

## Summary

Gemini 3.5 Flash is Google's mid-tier-renamed-into-flagship model, launched at Google I/O 2026 (2026-05-19) as the new default model in the Gemini app, Google Search AI Mode, and Antigravity 2.0. Trained specifically for agentic workloads, coding, and long-horizon task execution. Beats Gemini 3.1 Pro on coding, agent, and multimodal benchmarks at roughly 4× faster output and half the cost — scoring 76.2% on Terminal-Bench 2.1, 83.6% on MCP Atlas, 84.2% on CharXiv Reasoning, 84% on MMMU-Pro, and 1656 Elo on GDPval-AA. Supports a 1M-token context window and 65K max output tokens. Pricing is $1.50/M input and $9/M output (3× the previous Flash but below frontier competitors per-task). Runs at ~280-289 tokens/sec. Pairs with [[gemini-spark]] (24/7 personal agent), [[gemini-omni]] (any-input → video), and [[antigravity-2]] (parallel-agent desktop platform) as the I/O 2026 trio.

## Timeline

- **2026-06-26-morning**: **TLDR AI HIGH cycle-2 confirmation of native computer-use launch with concrete capability list (click + scroll + typing + continuous-screenshot processing)**. TLDR AI HIGH "Jalapeño chip 🌶️, Anthropic accuses Alibaba ⚖️, Gemini computer use 🖥️" lands ***"Google has launched native computer-use capabilities for Gemini 3.5 Flash, allowing the model to interact directly with digital desktop interfaces and process continuous screenshots to execute click, scroll, and typing actions seamlessly across varied software environments"***. Cycle-2 confirmation of the prior 2026-06-25-evening The Rundown AI framing — sharpens the *native computer-use functionality* claim into a concrete *click + scroll + typing + continuous-screenshot processing* capability list + first publicly framed *seamless across varied software environments* multi-app generalization framing on Gemini 3.5 Flash. Productizes computer-use from a Gemini 3.5 Flash baseline framing into a *click-stream + scroll-stream + keystroke-stream + screenshot-stream* execution surface — structurally analog to Anthropic claude-computer-use cycle (Oct 2024) + [[chatgpt-atlas]] computer-use surface. Body-recovery items: (a) benchmark numbers vs Claude computer-use / [[chatgpt-atlas]] / [[gemini-2-5-computer-use]] / OpenAI Operator on OSWorld / WebArena, (b) explicit linked Google blog post (TLDR cites blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-computer-use-gemini-3-5-flash), (c) pricing for computer-use mode (per-screenshot? per-action?), (d) sandboxing model for production deployment — *source: data/summaries/2026-06-26-morning.json (TLDR AI HIGH "Jalapeño chip 🌶️, Anthropic accuses Alibaba ⚖️, Gemini computer use 🖥️" — Google has launched native computer-use capabilities for Gemini 3.5 Flash + allowing the model to interact directly with digital desktop interfaces + process continuous screenshots to execute click scroll and typing actions seamlessly across varied software environments + blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-computer-use-gemini-3-5-flash)*

- **2026-06-25-evening**: **Native computer-use functionality added directly into Gemini 3.5 Flash (The Rundown AI)**. ***"Google has added new computer-use functionality directly into Gemini 3.5 Flash, allowing the model to power agents that navigate browsers, apps, and desktops, and has introduced new models and tools such as Gemini Omni and Gemini Spark, signaling a strategic push toward AI agents that can plan, execute tasks, and integrate with enterprise workflows"***. First publicly framed *native computer-use baseline on the Gemini 3.5 Flash flagship* in this wiki — graduates computer-use from a separate variant ([[gemini-2-5-computer-use]] dedicated SKU from Oct 2025) into a *baseline capability of the flagship model*. Strategic significance: makes computer-use the default capability across the broad Gemini 3.5 Flash distribution surface (Gemini app + Search AI Mode + AI Studio + [[antigravity-2]] + Android Studio + enterprise surfaces), structurally analog to Anthropic's claude-3.5-Sonnet computer-use cycle. Introduced alongside [[gemini-omni]] + [[gemini-spark]] as part of broader strategic agent push. Body-recovery items: (a) Computer-use benchmark numbers vs Claude / [[chatgpt-atlas]] / [[gemini-2-5-computer-use]] / OpenAI Operator, (b) browser + app + desktop coverage scope (which platforms? sandboxing model?), (c) whether [[gemini-2-5-computer-use]] gets deprecated now that 3.5 Flash has native computer-use — *source: data/summaries/2026-06-25-evening.json (The Rundown AI "🌶️ OpenAI's spicy new custom AI chip" — Google has added new computer-use functionality directly into Gemini 3.5 Flash allowing the model to power agents that navigate browsers apps and desktops + introduced new models and tools such as Gemini Omni and Gemini Spark + strategic push toward AI agents that can plan execute tasks and integrate with enterprise workflows)*

- **2026-05-23**: Gemini 3.5 Flash + Managed Agents recirculate in NLP Newsletter weekly recap — *source: 2026-05-23 cycle (NLP Newsletter — AI Agents Weekly; Hello World)*
- **2026-05-22**: Coverage emphasizes Gemini 3.5 Flash sits fifth on Artificial Analysis Intelligence Index — ahead of Claude Opus 4.7 trail-position positioning emerges (Qwen 3.7-Max sits ahead per coverage) — *source: 2026-05-22 cycle (The Code — Microsoft and Uber ditch Claude Code; Mindstream)*
- **2026-05-21**: Google triples weekly quotas across all paid Antigravity plans after Gemini 3.5 Flash driven traffic spike overwhelmed existing limits — *source: 2026-05-21 cycle (AI Breakfast — Qwen 35h continuous; Forward Future — Google found AI's killer distribution hack)*
- **2026-05-20**: Gemini 3.5 Flash + Antigravity 2.0 + Spec Kit get extensive coverage as the I/O 2026 trifecta — *source: 2026-05-20 cycle (AlphaSignal — Gemini Omni Flash; AI Breakfast — Every Announcement)*
- **2026-05-19**: Gemini 3.5 Flash launches at Google I/O 2026 — 1M-token context, 65K output, 4× faster than Gemini 3.1 Pro / competing frontier models, default model in Gemini app + Search AI Mode + Antigravity 2.0; benchmarks: 76.2% Terminal-Bench 2.1, 83.6% MCP Atlas, 84.2% CharXiv Reasoning, 84% MMMU-Pro, 1656 GDPval-AA Elo; pricing $1.50/$9 per M tokens — *source: 2026-05-19 cycle (World of AI — Gemini 3.5 Flash + Karpathy + IO; AINews — Gemini 3.5 Flash + Omni + Antigravity; The Rundown AI — biggest reveals from Google I/O; TLDR Newsletter — Google I/O; TLDR AI — Gemini 3.5 Flash; Superhuman — Gemini becomes your personal agent; AI Breakfast — Every Announcement; Forward Future — Google found AI's killer distribution hack; Mindstream — Android jumped ahead; Evolving AI Insights)*

## Key Facts

- 1M-token context window, 65K max output tokens
- ~280-289 tokens/sec sustained throughput
- 4× faster than Gemini 3.1 Pro at frontier-level intelligence
- Benchmarks: 76.2% Terminal-Bench 2.1, 83.6% MCP Atlas, 84.2% CharXiv Reasoning, 84% MMMU-Pro, 1656 Elo GDPval-AA
- Pricing: $1.50/M input, $9/M output (3× prior Flash; below frontier per-task)
- Multimodal: text, image, video, audio, PDF inputs
- Default model in Gemini app, Search AI Mode, AI Studio, [[antigravity-2]], Android Studio, enterprise surfaces
- Pairs with [[gemini-spark]], [[gemini-omni]], [[antigravity-2]] as I/O 2026 trio
- **Native computer-use** (Jun 2026): powers agents that navigate browsers, apps, and desktops — graduates computer-use into a flagship baseline capability rather than a separate SKU (see [[gemini-2-5-computer-use]] for the prior dedicated variant)

## Open Questions

- Where does Gemini 3.5 Pro fit — separate tier yet to launch, or is Flash the new flagship?
- Will Anthropic / OpenAI match the 4× throughput claim with their next coding-tier releases?
- Knowledge cut-off: January 2025 — does this hurt agentic real-world tasks?

## Sources

- data/summaries/2026-05-19.json (World of AI; AINews; The Rundown AI; TLDR Newsletter; TLDR AI; Superhuman; AI Breakfast; Forward Future; Mindstream; Evolving AI Insights)
- data/summaries/2026-05-20.json (AlphaSignal; AI Breakfast; Cerebral Valley)
- data/summaries/2026-05-21.json (AI Breakfast; Forward Future)
- data/summaries/2026-05-22.json (The Code; Mindstream)
- data/summaries/2026-05-23.json (NLP Newsletter; Hello World)
