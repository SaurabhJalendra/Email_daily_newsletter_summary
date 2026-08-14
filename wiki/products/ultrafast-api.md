---
name: Ultrafast API
description: OpenAI's Aug 2026 new API service tier for GPT-5.6 Sol — up to 14× faster than Standard processing, up to 750 output tokens/second, powered by Cerebras hardware; limited preview
type: product
---

# Ultrafast API

> **Type**: product
> **Vendor**: [[openai]] (Cerebras infrastructure)
> **First mentioned**: 2026-08-14-evening
> **Last updated**: 2026-08-14-evening
> **Status**: limited preview
> **Related**: [[openai]], [[gpt-5-6]], [[cerebras]], [[chatgpt]], [[gpt-5-3-codex-spark]]

## Summary

Ultrafast is [[openai]]'s new API service tier for [[gpt-5-6]] Sol that runs **up to 14× faster than Standard processing** and generates **up to 750 output tokens per second** in a **limited preview** powered by **[[cerebras]]** hardware. It launches first in the OpenAI API for a select group of customers, with access expanding as capacity grows. The tier targets latency-critical workloads: real-time apps, interactive workflows, and enterprise systems in support, finance, security, voice, commerce, incident response, and live research loops.

The Ultrafast launch sits alongside a rename of **Priority Processing to Fast mode** (up to **2.5× faster** speeds for GPT-5.6 Sol) and **price cuts on Terra and Luna** models. Together this productizes OpenAI's tiered-performance API strategy — Sol Ultrafast (14×) + Sol Fast (2.5×) + Sol Standard as three-tier speed control on the flagship, layered atop Sol/Terra/Luna tier control and reasoning-effort control (low/medium/high/max).

## Timeline

- **2026-08-14-evening**: **Ultrafast tier launched in limited preview — 14× faster than Standard + up to 750 output tokens/sec for GPT-5.6 Sol, powered by Cerebras hardware; access expanding as capacity grows**. Same-cycle: **Priority Processing renamed to Fast mode** (up to 2.5× faster on Sol) + **price cuts on Terra and Luna**. Daily-digest Top Story #2. The Rundown AI framing: *"pushes OpenAI's most capable model into real-time, low-latency workflows, extending its API strategy around tiered performance and targeting use cases where latency is a competitive advantage."* — *source: data/summaries/2026-08-14-evening.json (The Rundown AI HIGH "💨 OpenAI feels the frontier need for speed"; TLDR MEDIUM "OpenAI Ultrafast ⚡, X open sources algo 📱, DeepSeek Harness 🐋"; AlphaSignal MEDIUM "🤖 xAI Grok Bot logs into your tools autonomously, $120/seat"; researchFindings.additionalContext — Ultrafast API + OpenAI + GPT-5.6)*

## Key Facts

- **Vendor**: [[openai]] (infrastructure: [[cerebras]])
- **Model**: [[gpt-5-6]] Sol (flagship-only)
- **Speed**: up to **14× faster** than Standard processing
- **Throughput**: up to **750 output tokens per second**
- **Status**: limited preview, select customers, access expanding as capacity grows
- **Hardware substrate**: Cerebras wafer-scale inference silicon
- **Related tiers (Aug 2026)**:
  - **Fast mode** (renamed from Priority Processing): up to 2.5× faster for GPT-5.6 Sol
  - **Standard**: baseline processing
- **Companion moves**: price cuts on GPT-5.6 Terra and Luna
- **Target workloads**: real-time apps, interactive workflows, enterprise systems, support, finance, security, voice, commerce, incident response, live research loops

## Open Questions

- Per-token pricing premium for Ultrafast vs Standard vs Fast mode
- Rate-limit / concurrency behavior under limited preview
- Rollout timeline for general availability + broader-customer eligibility criteria
- Whether Ultrafast will extend to Terra/Luna tiers or remain Sol-only
- Cerebras-vs-NVIDIA fleet split for Ultrafast serving; contract structure
- Whether Ultrafast is available through Azure OpenAI + AWS Bedrock passthrough tiers
- Latency floor for first-token vs sustained-throughput regime

## Sources

- data/summaries/2026-08-14-evening.json (The Rundown AI HIGH "💨 OpenAI feels the frontier need for speed" — 14× faster, 750 output tokens/sec, Cerebras infrastructure, latency-critical workflow positioning; TLDR MEDIUM "OpenAI Ultrafast ⚡, X open sources algo 📱, DeepSeek Harness 🐋" — Priority Processing renamed to Fast mode + Terra/Luna price cuts; AlphaSignal MEDIUM "🤖 xAI Grok Bot logs into your tools autonomously, $120/seat" — limited-preview status + tier context; researchFindings.additionalContext — Ultrafast API + OpenAI + GPT-5.6 Sol Ultrafast full framing)
