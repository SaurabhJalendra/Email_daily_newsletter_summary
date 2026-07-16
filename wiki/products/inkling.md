---
name: Inkling
description: Thinking Machines Lab's first foundation model — 975B-A41B multimodal open-weight LLM (Apache 2.0), with 276B-A12B "Inkling-Small" sibling; 1M context, text/image/audio inputs, day-0 vLLM + NVIDIA + Tinker support
type: product
---

# Inkling

> **Type**: product
> **Vendor**: [[thinking-machines]]
> **First mentioned**: 2026-07-16-morning
> **Last updated**: 2026-07-16-evening (**Cycle-2 evening-cohort saturation — full architectural detail lands via AINews HIGH: **975B total / 41B active MoE + relative positional encoding + short convolutions + relative attention** + trained on **45T tokens of text/image/audio/video** + **1M-token context** + **text/image/audio** input modalities + **Inkling-Small at 276B-A41B... wait, 276B-A12B** sibling + **Apache 2.0** open-weight license + day-0 inference-stack support: [[tinker-api]] + **HuggingFace** + **vLLM** + **NVIDIA GB300 NVL72** + **NVFP4** optimization + benchmarked on **GDPval-AA v2 / τ³-Banking / Agentic Web App Arena** + framed as *"solid performance across broad categories"* rather than benchmark-maxed flagship + praised for *"concise reasoning, strong tool calling, controllable thinking effort"* + hailed by commentators as *"best American open model"*. Ecosystem framing: Forward Future MEDIUM ("built from scratch on NVIDIA's latest infrastructure" / "customizable model designed to balance 'cost against performance'"); Superhuman MEDIUM ("America's best open-weight model yet" cycle headline); TLDR MEDIUM ("975 billion parameters ... broad, balanced foundation model"); Evolving AI Insights MEDIUM + Forward Future add cross-tier confirmation. Structurally significant three ways: (i) **First frontier-open-weights US lab entry with 1M context + tri-modal input + Apache 2.0** — Inkling is the first US open-weights model to combine *frontier-tier parameter count (975B total / 41B active)* + *1M-token context* + *text+image+audio inputs* + *Apache 2.0 license* in this wiki; positions [[thinking-machines]] as the *first Mira-Murati-led open-weights frontier lab* alongside Chinese incumbents ([[moonshot-ai]] Kimi K2/K3 + [[alibaba]] Qwen + [[deepseek]] + [[zhipu-ai]] GLM + [[longcat-2]]) and reshapes the US-vs-China open-weights parity narrative — commentator framing *"best American open model"* is the canonical positioning; (ii) **Day-0 multi-stack support** — vLLM + NVIDIA GB300 NVL72 + NVFP4 + HuggingFace + Tinker + partner inference platforms simultaneously indicates a *coordinated ecosystem launch* rather than a research-tier drop; contrasts with Chinese-open-weights typical *HuggingFace + ModelScope only* pattern; (iii) **Broad-capabilities-over-benchmark-max positioning** — "solid performance across broad categories" (not a benchmark-maxed flagship) reads as *product-market fit for enterprise buyers wanting long-context multimodal customizable base rather than benchmark champions*, structurally distinct from the AIME/GPQA/SWE-Bench-max framing of most frontier releases; targeted at *companies that will download and modify directly* per Superhuman framing. Same-cycle context: [[openai]] [[codex-micro]] $230 keypad launch + [[gpt-red]] self-hacking model + [[anthropic]] Honeycomb Cursor leak + [[moonshot-ai]] Kimi K3 pulled-page leak + [[ode-with-anthropic]] $1.5B implementation firm — *source: data/summaries/2026-07-16-evening.json (AINews HIGH "Thinky's Inkling: 975B-A41B multimodal, new best American Apache 2.0 open model"; Forward Future MEDIUM "China's memory giant makes its move"; Superhuman MEDIUM "🇺🇸 America's best open-weight model yet"; TLDR MEDIUM "Stripe's PayPal bid"; Evolving AI Insights MEDIUM "⌨️ OpenAI Launches First Ever Gadget")*)
> **Previously updated**: 2026-07-16-morning (**Created — Thinking Machines open-sources Inkling — 975B-parameter multimodal model on HuggingFace — first Mira-Murati-lab frontier open-weights entry** — tokens& MEDIUM / AI Breakfast HIGH morning-cohort surface; body specs deferred to evening cohort saturation — *source: data/summaries/2026-07-16-morning.json*)
> **Status**: active (open-weight, Apache 2.0)
> **Related**: [[thinking-machines]], [[tinker-api]], [[tml-interaction-small]], [[open-source-models]], [[moonshot-ai]], [[kimi-k3]], [[alibaba]], [[deepseek]], [[zhipu-ai]], [[nvidia]], [[vera-rubin]]

## Summary

Inkling is [[thinking-machines]]'s first full foundation model — a **975-billion-parameter total / 41-billion-active Mixture-of-Experts (MoE) multimodal LLM** released under **Apache 2.0** in mid-July 2026 as the lab's decisive graduation from *fine-tuning platform* ([[tinker-api]]) into a *frontier open-weights model-releasing lab*. The model accepts **text, image, and audio inputs**, supports a **1-million-token context window**, and was trained on **45 trillion tokens** of text/image/audio/video data. A smaller sibling, **Inkling-Small** at **276B total / 12B active**, ships alongside the flagship. Distribution is broad and coordinated: HuggingFace + Thinking Machines's own Tinker platform, with day-0 inference-stack support from vLLM, NVIDIA (GB300 NVL72 + NVFP4 optimized), and other partner inference platforms.

Architecturally, Inkling is a MoE transformer that combines relative positional encoding with short convolution layers and relative attention. Commentators frame it as *"the best American open model"* — a positioning claim that, if it holds, would mark the first US open-weights lab entry into the frontier-parity tier previously dominated by Chinese labs ([[moonshot-ai]] Kimi K2/K3, [[alibaba]] Qwen, [[deepseek]], [[zhipu-ai]] GLM, [[longcat-2]]). Thinking Machines has explicitly positioned Inkling as *"solid performance across broad categories"* rather than a benchmark-max flagship — a product-market bet on enterprise buyers wanting a customizable long-context multimodal base rather than leaderboard champions.

## Timeline

- **2026-07-16-evening**: **Cycle-2 evening-cohort architectural saturation** — AINews HIGH lands full spec: **975B total / 41B active MoE** + **relative positional encoding + short convolutions + relative attention** architecture + **45T tokens of text/image/audio/video** training + **1M-token context** + **text/image/audio inputs** + **Inkling-Small 276B-A12B** sibling + **Apache 2.0** + **day-0 support**: [[tinker-api]] + HuggingFace + vLLM + NVIDIA GB300 NVL72 + NVFP4 + benchmarked on GDPval-AA v2 / τ³-Banking / Agentic Web App Arena. Praised for "concise reasoning, strong tool calling, controllable thinking effort." Superhuman + TLDR + Evolving AI Insights + Forward Future add cross-tier confirmation and the *"best American open-weight model yet"* / *"broad, balanced foundation model"* / *"built from scratch on NVIDIA's latest infrastructure"* framings — *source: data/summaries/2026-07-16-evening.json (AINews HIGH; Forward Future MEDIUM; Superhuman MEDIUM; TLDR MEDIUM; Evolving AI Insights MEDIUM)*

- **2026-07-16-morning**: **Created** — [[thinking-machines]] open-sources Inkling 975B multimodal model on HuggingFace; first publicly framed Thinking Machines frontier open-weights model in this wiki; positions TML alongside Chinese open-weights leaders — *source: data/summaries/2026-07-16-morning.json (AI Breakfast HIGH; tokens& MEDIUM)*

## Key Facts

- Vendor: [[thinking-machines]] (Mira Murati)
- Parameters: **975B total / 41B active** (Mixture-of-Experts)
- Inkling-Small sibling: **276B total / 12B active**
- Context window: **1M tokens**
- Input modalities: **text, image, audio**
- Training corpus: **45 trillion tokens** of text, images, audio, video
- License: **Apache 2.0** open-weight
- Architecture: MoE transformer + relative positional encoding + short convolutions + relative attention
- Distribution: HuggingFace + [[tinker-api]] + partner inference platforms
- Day-0 hardware / software support: **NVIDIA GB300 NVL72 + NVFP4**, **vLLM**
- Benchmarks referenced: **GDPval-AA v2**, **τ³-Banking**, **Agentic Web App Arena**
- Positioning: "solid performance across broad categories" (not benchmark-maxed); commentator label: *"best American open model"*

## Open Questions

- Specific benchmark scores vs Kimi K2.6/K3, Qwen 3.7, GLM-5.2, and Claude Opus 4.8 / GPT-5.6 Sol
- Training compute + timeline (started when, on what infrastructure)
- Commercial licensing terms for large-scale enterprise deployment beyond Apache 2.0
- Whether Thinking Machines will iterate on Inkling as a series or treat it as a single-shot release
- Output modality (text-only? multimodal generation?)
- Fine-tuning support via [[tinker-api]] — is Inkling the default base for Tinker going forward?

## Sources

- data/summaries/2026-07-16-morning.json (AI Breakfast HIGH; tokens& MEDIUM "Weekly 7/15 - 🎛️ OpenAI's $230 gadget: Codex Micro")
- data/summaries/2026-07-16-evening.json (AINews HIGH "Thinky's Inkling: 975B-A41B multimodal, new best American Apache 2.0 open model (with Inkling-Small, 276B-A12B)"; Forward Future MEDIUM "China's memory giant makes its move"; Superhuman MEDIUM "🇺🇸 America's best open-weight model yet"; TLDR MEDIUM "Stripe's PayPal bid 💰"; Evolving AI Insights MEDIUM "⌨️ OpenAI Launches First Ever Gadget to Run AI AGENTS")
