---
name: OpenAI Agents API
description: OpenAI's public-beta developer API bringing the Codex harness — context management, tool use, subagent coordination, multi-day agent reliability, and environments where agents work with files, run code, and save intermediate results — to third-party developers (Sep 2026)
type: product
---

# OpenAI Agents API

> **Type**: product
> **Vendor**: [[openai]]
> **First mentioned**: 2026-09-11-evening
> **Last updated**: 2026-09-12-morning (**Cycle-N+1 morning saturation — concrete launch-customer metrics + partner-sandbox enumeration + no-additional-fee pricing model + US-only-data-residency + no-ZDR canonical constraint cluster**. The AI Corner HIGH: *"Launch customers report 4x lower latency, 60% lower cost per task, and 86% fewer failed responses after migrating to the Agents API"* + *"agents can run either in OpenAI-hosted sandboxes, self-hosted environments, or partner sandboxes from providers such as Cloudflare, DigitalOcean, Modal, Oracle, and Vercel"* + *"no additional fee for the Agents API itself—developers pay only for model tokens, tool usage, and container time if using hosted sandboxes"*. TLDR AI HIGH cycle-headline *"Agents API 🤖, Cognition SWE-2 👨‍💻, Muse Shared Agents 🧑‍🤝‍🧑"* daily-digest Top Story #1 + Future Tools HIGH cross-cohort restatement. researchFindings.additionalContext: *"US-only data residency and no Zero Data Retention support"*. First-in-wiki: (a) **4x-lower-latency + 60%-lower-cost-per-task + 86%-fewer-failed-responses launch-customer canonical metric-triad anchor** — first-in-wiki *concrete-launch-customer-migration-outcome canonical anchor triad* on the OpenAI Agents API surface (structurally significant — canonicalizes *concrete-quantitative-migration-benefit tier* on the managed-agent-harness productization arc — likely durable reference-anchor for future third-party-harness-vs-first-party-Agents-API cost/performance comparisons); (b) **Cloudflare + DigitalOcean + Modal + Oracle + Vercel five-partner-sandbox canonical anchor** — first-in-wiki *concrete-five-vendor partner-sandbox-tier canonical anchor cluster* — canonicalizes the mid-2026 agent-runtime-sandbox-substrate cohort at *concrete-partner-enumeration tier*; (c) **No-additional-fee-for-Agents-API pricing-model canonical anchor** — first-in-wiki *concrete-no-additional-fee canonical pricing-model anchor* on OpenAI's managed-agent-harness productization (structurally significant — inverts the *charge-for-orchestration-layer* SaaS pattern into a *give-away-the-agent-loop-charge-only-for-compute* posture; canonicalizes OpenAI's strategic position as *harness-commoditization-via-first-party-productization*); (d) **US-only-data-residency + no-ZDR twin-constraint canonical anchor** — first-in-wiki *concrete-regulated-industry-adoption-constraint canonical anchor cluster* on the Agents API beta (structurally significant — sharpens the multi-cycle Trusted-Access-tier + [[openai-presence]] enterprise-tier arc with a *concrete-beta-tier data-residency-limitation canonical anchor*); (e) **5-question migration-framework "you spent 2 months building an agent harness. OpenAI just made it a config block" canonical framing anchor** — The AI Corner HIGH-tier reduces-agent-orchestration-to-config-block-tier canonical framing. Structurally significant: **4x-lower-latency + 60%-lower-cost + 86%-fewer-failed-responses + 5-partner-sandbox + no-additional-fee + US-only-ZDR-free six-signal canonical anchor cluster productizes the Agents API as *canonical mid-Sep-2026 managed-agent-harness developer-platform-tier substrate*** — likely durable reference-anchor on the enterprise-agent-orchestration-commoditization arc. See [[openai]] + [[chatgpt-work]] + [[cloudflare]] + [[vercel]] + [[oracle]] + [[claude-managed-agents]] + [[agent-harness]] — *source: data/summaries/2026-09-12-morning.json (TLDR AI HIGH "Agents API 🤖, Cognition SWE-2 👨‍💻, Muse Shared Agents 🧑‍🤝‍🧑"; The AI Corner HIGH "You Spent 2 Months Building an Agent Harness. OpenAI Just Made It a Config Block."; Future Tools HIGH "Anthropic 'gambling with our lives'"; researchFindings.additionalContext for OpenAI + OpenAI Agents API)*)
> **Previously (Latest)**: 2026-09-11-evening
> **Status**: public beta
> **Related**: [[openai]], [[chatgpt-work]], [[openai-presence]], [[claude-managed-agents]], [[openai-astra]], [[agent-frameworks]], [[agent-harness]], [[loop-engineering]], [[cloudflare]], [[vercel]], [[oracle]]

## Summary

**OpenAI Agents API** is the developer-facing public-beta API surface for OpenAI's Codex agent harness — the same infrastructure that powers ChatGPT Work / Codex internally now exposed for developers to build long-running, reliable, multi-tool agents on. The API bundles four canonical primitives: **context management** (automated prompt/state assembly across turns), **efficient tool use** (auto-selection and invocation of tools without prompt-engineering-heavy routing), **subagent coordination** (spawning and orchestrating child agents), and **multi-day reliability** (infrastructure to keep agents running for days without loss). Developers also get **execution environments** where agents can work with files, run code, and save intermediate results — a first-party sandbox tier instead of build-your-own-VM.

Structurally, the Agents API graduates OpenAI from *ChatGPT-Work-first-party productization* into a *developer-platform-tier canonical substrate* — parallel to [[claude-managed-agents]] from Anthropic and [[vercel-eve]]/[[flue]] third-party framework layers, but with OpenAI's own harness (informed by Astra + Codex production usage) as the runtime. Pairs cycle-structurally with [[chatgpt-for-financial-services]] launched same-day as *twin developer-tier + enterprise-vertical productization anchor* on OpenAI's post-DevDay-2026-preview commercial expansion window.

## Timeline

- **2026-09-12-morning**: **Cycle-N+1 morning saturation** — TLDR AI HIGH + The AI Corner HIGH + Future Tools HIGH lock in *launch-customer 4x-lower-latency + 60%-lower-cost + 86%-fewer-failed-responses metric-triad* + *Cloudflare + DigitalOcean + Modal + Oracle + Vercel five-partner-sandbox enumeration* + *no-additional-fee pricing-model* + *US-only-data-residency + no-ZDR beta-tier constraint*. The AI Corner HIGH: *"You Spent 2 Months Building an Agent Harness. OpenAI Just Made It a Config Block."* — reduces-agent-orchestration-to-config-block canonical framing anchor. — *source: data/summaries/2026-09-12-morning.json (TLDR AI HIGH; The AI Corner HIGH; Future Tools HIGH; researchFindings.additionalContext)*

- **2026-09-11-evening**: **Public beta launch**. TLDR MEDIUM: *"OpenAI's Agents API is now in public beta, allowing developers to create useful agents with a powerful harness that manages context, uses tools efficiently, and coordinates subagents. The API provides infrastructure to keep agents running reliably for days, and environments where agents can work with files, run code, and save intermediate results"* — first-in-wiki *concrete public-beta developer-API canonical anchor* on OpenAI's Codex-harness-as-developer-platform arc; validates the 09-09-morning TLDR AI *"OpenAI is planning to introduce Managed Agents at DevDay 2026, following a model similar to Anthropic's offerings"* pre-announcement anchor with a *concrete public-beta launch canonical anchor*. — *source: data/summaries/2026-09-11-evening.json (TLDR MEDIUM "OpenAI Agents API 🤖, open model adoption 📈, sharded Postgres 🧑‍💻")*

## Key Facts

- Vendor: [[openai]]
- Status: public beta (Sep 10-11, 2026)
- Core primitives: context management + efficient tool use + subagent coordination + multi-day reliability
- Runtime environments: file access + code execution + intermediate-result persistence
- Underlying harness: same infrastructure that powers Codex + ChatGPT Work
- Pricing: no additional fee — developers pay only for model tokens, tool usage, and container time
- Partner sandbox providers: [[cloudflare]] + DigitalOcean + Modal + [[oracle]] + [[vercel]]
- Launch-customer metrics: 4× lower latency, 60% lower cost per task, 86% fewer failed responses (post-migration)
- Beta constraints: US-only data residency, no Zero Data Retention support
- Required SDK header: `OpenAI-Beta: agents=v1`

## Open Questions

- Pricing structure and rate-limit tiers
- Which OpenAI models are available in the API (Astra? Sol/Terra/Luna?)
- Concrete tool-catalog size and MCP-server compatibility
- Enterprise-tier controls (data retention, audit logs, permissions) — parallels to [[openai-presence]]

## Sources

- data/summaries/2026-09-11-evening.json (TLDR "OpenAI Agents API 🤖, open model adoption 📈, sharded Postgres 🧑‍💻")
- data/summaries/2026-09-12-morning.json (TLDR AI HIGH "Agents API 🤖, Cognition SWE-2 👨‍💻, Muse Shared Agents 🧑‍🤝‍🧑"; The AI Corner HIGH "You Spent 2 Months Building an Agent Harness. OpenAI Just Made It a Config Block."; Future Tools HIGH "Anthropic 'gambling with our lives'"; researchFindings.additionalContext — OpenAI + OpenAI Agents API)
