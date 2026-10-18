---
name: Muse Spark Open
description: Meta Superintelligence Labs' Oct 15 2026 open-weight, natively multimodal mixture-of-experts model — 816B total / 42B active parameters, 1M-token context, designed for coding, long-horizon reasoning, reliable tool use, and agent workflows; the strongest American-made open-weight model, narrowing the US-Chinese open-model gap by roughly half
type: product
---

# Muse Spark Open

> **Type**: product
> **Vendor**: [[meta]] (Meta Superintelligence Labs)
> **First mentioned**: 2026-10-18-morning
> **Last updated**: 2026-10-18-morning
> **Status**: launched (open-weight; downloadable via Hugging Face)
> **Related**: [[meta]], [[muse-wonder]], [[muse-wonder-full]], [[muse-spark]], [[muse-spark-1-3]], [[muse-code]], [[meta-muse-agent]], [[open-source-models]], [[agent-frameworks]], [[beam]], [[deepseek-v4-1-flash]], [[kimi-k3]], [[gemma-4]]

## Summary

Muse Spark Open is [[meta]]'s Oct 15 2026 open-weight, natively multimodal mixture-of-experts model from Meta Superintelligence Labs. It has **816 billion total parameters with approximately 42 billion active per token**, a **1-million-token context window**, accepts **text, images, video, and audio** inputs, and generates text — designed primarily for **coding, long-horizon reasoning, reliable tool use, and agent workflows** that plan, act, observe, and self-correct. Weights are downloadable and adaptable by developers; Meta reports strong vendor benchmark results on **MCP-Atlas, JobBench, OSWorld Verified, Toolathlon Verified, and Terminal-Bench 2.1** (independent reproduction pending).

Strategically, Muse Spark Open is the concrete productization of Meta's **two-track AI strategy** — releasing downloadable, customizable open-weight models while keeping its most capable frontier systems ([[muse-wonder]] / [[muse-wonder-full]]) closed. Nathan Lambert's Interconnects frames it as the **strongest American-made open-weight model**, outperforming other Western open models and narrowing the gap with Chinese open-weight frontier labs ([[deepseek]], [[zhipu-ai]], Alibaba Qwen) **roughly by half**. The model has been undergone additional safety post-training ahead of its open release and is positioned as part of a broader AI system with additional guardrails. Already integrated into **Microsoft Foundry, Cloudflare, and several inference providers**, with reported Apple-silicon support enabling it to run across two Mac Studio systems; frontier-scale agentic self-hosting now viable across NVIDIA, AMD, Intel, and Apple runtimes despite substantial hardware requirements.

## Timeline

- **2026-10-18-morning**: **Launch cycle canonical anchor cluster — Oct 15 2026 release + concrete 816B-total / 42B-active parameter + concrete 1M-token-context + concrete text/image/video/audio four-modality-input + concrete five-benchmark cluster (MCP-Atlas + JobBench + OSWorld Verified + Toolathlon Verified + Terminal-Bench 2.1) + concrete "strongest American-made open-weight model" canonical framing anchor + concrete "narrowing the US-Chinese open-model gap by roughly half" canonical anchor + concrete two-track Meta strategy (open + closed frontier) canonical anchor + concrete "additional safety post-training to prepare for its open release" canonical anchor + concrete Microsoft Foundry + Cloudflare + several inference providers day-0 integration canonical anchor + concrete Apple-silicon-via-two-Mac-Studio-systems concrete-local-inference canonical anchor + concrete NVIDIA + AMD + Intel + Apple four-vendor hardware-runtime canonical anchor cluster**. Interconnects by Nathan Lambert MEDIUM "Meta shakes up the frontiers, open and closed": *"Meta has released Muse Spark Open, a new open-weight model that is the strongest American-made open model, outperforming other Western models and narrowing the gap with Chinese models"* + *"Muse Spark Open has 816 billion total parameters, 42 billion active parameters, and a context window of 1 million tokens, making it suitable for coding, long-horizon reasoning, and agent workflows"* + *"The model has undergone additional safety post-training to prepare for its open release and is designed to be used as part of a broader AI system with additional guardrails"* + *"The gap between American and Chinese models has been reduced roughly by half, with Western open-weight models getting more adoption than Chinese models with the same performance-to-size footprint"*. NLP Newsletter HIGH "AI Agents Weekly": *"Meta released Muse Spark Open, a natively multimodal mixture-of-experts model with 816 billion total parameters and 42 billion active parameters, designed for coding and long-horizon agentic work. The model is available for download and can be adapted by developers"*. researchFindings.additionalContext: *"Muse Spark Open is Meta Superintelligence Labs' open-weight, natively multimodal mixture-of-experts model, released on October 15, 2026. It has 816 billion total parameters, approximately 42 billion active per token, and a context window of up to 1 million tokens. It accepts text, images, video, and audio, while generating text, and is designed primarily for coding, long-horizon reasoning, reliable tool use, and agent workflows that plan, act, observe, and self-correct"* + *"The release matters because it makes a frontier-scale agentic model available for self-hosting and deployment across runtimes and hardware from NVIDIA, AMD, Intel, and Apple. Meta reports strong results on agent benchmarks including MCP-Atlas, JobBench, OSWorld Verified, Toolathlon Verified, and Terminal-Bench 2.1, though these are vendor-reported figures ... The model is already being integrated into hosted platforms including Microsoft Foundry, Cloudflare, and several inference providers; Apple-related support reportedly allows it to run across two Mac Studio systems, broadening interest in local inference despite substantial hardware requirements"*. — *source: data/summaries/2026-10-18-morning.json (Interconnects by Nathan Lambert MEDIUM "Meta shakes up the frontiers, open and closed"; NLP Newsletter HIGH "AI Agents Weekly: Muse Spark Open, Gemini Agents Beat Minecraft, OpenCode 2.0, Nemotron 3.5 Super VL, OpenRouter Armor, Claude OpenTelemetry, and More"; researchFindings.additionalContext for Meta + Muse Spark Open)*

## Key Facts

- **Vendor**: [[meta]] / Meta Superintelligence Labs
- **Released**: 2026-10-15
- **License**: open-weight (downloadable + adaptable; weights on Hugging Face)
- **Architecture**: natively multimodal mixture-of-experts (MoE)
- **Parameters**: 816B total / ~42B active per token (~5.1% active ratio)
- **Context window**: 1,000,000 tokens
- **Input modalities**: text + images + video + audio (four-modality native-multimodal input)
- **Output modality**: text
- **Target workloads**: coding + long-horizon reasoning + reliable tool use + agent workflows (plan + act + observe + self-correct)
- **Safety posture**: additional safety post-training before open release; designed to be used as part of a broader AI system with additional guardrails
- **Positioning**: strongest American-made open-weight model; narrows US-vs-Chinese open-model gap "roughly by half"
- **Benchmarks (vendor-reported)**: MCP-Atlas, JobBench, OSWorld Verified, Toolathlon Verified, Terminal-Bench 2.1 — strong results across all five (independent reproduction pending)
- **Hardware runtimes**: NVIDIA + AMD + Intel + Apple (four-vendor); reported Apple-silicon support running across two Mac Studio systems for local inference
- **Hosted-platform integrations (day-0)**: Microsoft Foundry + Cloudflare + several inference providers
- **Strategic frame**: open-weight track of Meta's "two-track AI strategy" alongside closed frontier [[muse-wonder]] + [[muse-wonder-full]]
- **Relative positioning**: less advanced than closed [[muse-wonder]] but Meta's most capable US open-weight model

## Open Questions

- Independent benchmark validation (MCP-Atlas, JobBench, OSWorld Verified, Toolathlon Verified, Terminal-Bench 2.1 reproducibility)
- Exact license terms (Apache 2.0? OpenMDW? Meta-specific research-only variant?)
- Pricing of inference partners' hosted endpoints (Cloudflare Workers AI, Microsoft Foundry)
- Local-inference hardware requirements beyond "two Mac Studio" guidance (minimum VRAM? quantized variants?)
- Relation to [[muse-glimmer]] (prior Meta Apache 2.0 open-weight) + [[muse-spark]] / [[muse-spark-1-3]] closed-weight lineage — is Muse Spark Open a distinct architecture or a lineage branch?
- Instruction-tuning / RL post-training recipe
- Benchmark position vs [[deepseek-v4-1-flash]] V4.1-Flash-1017 (MIT, 552B/8-16B active, 1M context) and [[beam]] (Apache 2.0, 501B/23B active, 1M context) same-week US + Chinese open-weight releases

## Sources

- data/summaries/2026-10-18-morning.json (Interconnects by Nathan Lambert MEDIUM "Meta shakes up the frontiers, open and closed" — Muse Spark Open 816B/42B 1M context strongest American-made open model; NLP Newsletter HIGH "AI Agents Weekly: Muse Spark Open, Gemini Agents Beat Minecraft, OpenCode 2.0, Nemotron 3.5 Super VL, OpenRouter Armor, Claude OpenTelemetry, and More"; researchFindings.additionalContext — Meta + Muse Spark Open; daily-digest Top Story #1)
