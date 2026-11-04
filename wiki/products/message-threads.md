---
name: Message Threads
description: Anthropic's Nov 2026 public-beta API feature for the Claude Messages API that retains conversation state server-side so long-running agents can send only new messages instead of the full history; ~35% median reduction in time-to-first-token for 500K–1M-token requests; 5-minute inactivity expiration; default-on for most Claude Code users
type: product
---

# Message Threads

> **Type**: product (API feature)
> **Vendor**: [[anthropic]]
> **First mentioned**: 2026-11-04-morning
> **Last updated**: 2026-11-04-morning (created)
> **Status**: public beta (released Nov 2 2026)
> **Related**: [[anthropic]], [[claude-code]], [[claude-opus-5-5]], [[agent-frameworks]], [[agent-harness]], [[llm-inference-optimization]], [[computer-use]]

## Summary

**Message Threads** is an [[anthropic]] Claude Messages API feature, launched in public beta on **November 2, 2026**, that keeps an active conversation on Anthropic's servers after the initial request so subsequent turns can send only newly-added messages plus the previous response ID instead of resending the full conversation. It is designed for **long-running agents, coding workflows, computer-use sessions, and document- or image-heavy applications** where the growing context window has made repeated full-history payloads a dominant source of latency and bandwidth cost.

Anthropic reports that requests containing **500,000–1,000,000 tokens** see roughly a **35% reduction in median time-to-first-token**, and independent coverage reports payload reductions of roughly **99%** in representative long conversations. Standard token pricing and rate limits are unchanged — the win is latency and client-side bandwidth, not model-inference cost. Threads are available through Anthropic's own platform as well as AWS, Microsoft Foundry, and Anthropic-managed Claude on Google Cloud, with a **5-minute inactivity expiration** on retained server-side context. The feature is **enabled by default for most [[claude-code]] users**, suggesting Anthropic views persistent server-side context as core infrastructure for agentic workloads rather than an opt-in optimization.

## Timeline

- **2026-11-04-morning**: **Created — Anthropic ships Message Threads public beta for the Claude Messages API — concrete 35%-median-TTFT-reduction-on-500K-to-1M-token-requests canonical performance anchor + concrete 5-minute-inactivity-expiration canonical retention anchor + concrete AWS + Microsoft Foundry + Anthropic-managed-Google-Cloud three-partner canonical distribution anchor + concrete default-on-for-most-Claude-Code-users canonical embedded-productization anchor**. TLDR AI MEDIUM top update: *"Anthropic has released message threads in public beta for its Claude Messages API, allowing agents to send only new messages instead of resending the entire conversation history, which reduces median time to first token by approximately 35% for requests with 500K–1M tokens"*. Simon Willison MEDIUM: *"Anthropic's Claude model has introduced message threads, which can reduce latency and improve performance for long-running agents"*. researchFindings.additionalContext (Anthropic Message Threads): *"Anthropic released Message Threads in public beta on November 2, 2026, for the Claude Messages API ... designed for long-running agents, coding workflows, computer-use sessions, and document- or image-heavy applications ... currently available on Claude Platform, AWS, Microsoft Foundry, and Anthropic-managed Claude on Google Cloud, with standard token pricing and a five-minute inactivity expiration ... Anthropic reports that requests containing 500,000–1 million tokens achieve about a 35% reduction in median time to first token; independent coverage also reports payload reductions of roughly 99% in representative long conversations ... already enabled by default for most Claude Code users"*. First-in-wiki: (a) **Message-Threads public-beta canonical productization anchor on Anthropic Claude Messages API** — productizes Anthropic as *canonical early-Nov-2026 concrete-first-frontier-lab-with-server-side-conversation-retention-feature substrate operator* on the agentic-API substrate; (b) **~35%-median-TTFT-reduction on 500K–1M-token requests concrete-performance anchor** — first-in-wiki *concrete long-context TTFT-reduction canonical anchor* on Anthropic substrate; (c) **5-minute inactivity-expiration concrete-retention-window anchor** — first-in-wiki *concrete sub-10-minute retention-window canonical anchor* on Claude-API substrate; (d) **AWS + Microsoft Foundry + Anthropic-managed Google Cloud three-cloud-partner distribution canonical anchor** — productizes early-Nov-2026 as *canonical concrete-first-moment Message-Threads-available-across-three-hyperscaler-managed-Claude-deployments substrate operator*; (e) **"Already enabled by default for most Claude Code users" canonical default-on-productization anchor** — productizes Message Threads as *canonical concrete-Claude-Code-infrastructure-tier canonical anchor* rather than opt-in-API-feature tier. Pairs cycle-structurally with [[recursive-self-improvement]] Anthropic-near-RSI cycle-N+1 restatement + [[kimi-k3-1-pro]] Nov-4 open-weight-release + [[longcat-2-5]] cycle-marker + [[chatgpt]] Chat+Work merge canonical anchor cluster as *canonical early-Nov-2026 five-substrate agentic-infrastructure-plus-frontier-productization anchor cluster*. See [[anthropic]] this cycle + [[claude-code]] + [[claude-opus-5-5]] + [[llm-inference-optimization]] + [[agent-frameworks]] — *source: data/summaries/2026-11-04-morning.json (TLDR AI MEDIUM "Claude Message Threads 🧵, Astra 6.2 spotted 👀, Anthropic nears RSI 🔄"; Simon Willison MEDIUM "Qwen 3.8 27B on my laptop can interpret model weights, too"; researchFindings.additionalContext — Anthropic + Anthropic Message Threads)*

## Key Facts

- **Vendor**: [[anthropic]]
- **Launch**: 2026-11-02 (public beta)
- **Scope**: Claude Messages API
- **Mechanism**: server retains conversation after initial request; subsequent turns send only new messages + previous response ID
- **Latency**: ~35% median TTFT reduction for 500K–1M token requests
- **Payload reduction**: ~99% in representative long conversations (per independent coverage)
- **Retention**: 5-minute inactivity expiration (context is retained encrypted in memory)
- **Pricing**: standard token pricing + rate limits unchanged — benefit is latency + bandwidth, not inference cost
- **Target workloads**: long-running agents, coding workflows, computer-use sessions, document- or image-heavy applications
- **Distribution**: Claude Platform + AWS + Microsoft Foundry + Anthropic-managed Claude on Google Cloud
- **Default status**: enabled by default for most [[claude-code]] users

## Open Questions

- Whether the 5-minute retention window will be extended in GA — too short for many real agent workflows
- SOC 2 / HIPAA / enterprise-data-residency posture for server-side-retained context
- Whether the server-side retained thread is reusable across API keys or scoped per-request-chain
- How Message Threads interact with prompt caching (do they compose, or is one subsumed by the other?)
- Whether non-Anthropic Claude integrations (direct AWS Bedrock SDK calls) support threads without the Anthropic-managed wrapper
- Feature parity timeline between beta and GA
- Observed real-world TTFT reduction at mid-context (100K–500K tokens) — Anthropic only reports the 500K–1M tier

## Sources

- data/summaries/2026-11-04-morning.json (TLDR AI MEDIUM "Claude Message Threads 🧵, Astra 6.2 spotted 👀, Anthropic nears RSI 🔄" — message threads in public beta for Claude Messages API, 35% median TTFT reduction for 500K–1M-token requests; Simon Willison MEDIUM "Qwen 3.8 27B on my laptop can interpret model weights, too" — Claude introduces message threads for reduced latency on long-running agents; researchFindings.additionalContext — Anthropic + Anthropic Message Threads; attribution Anthropic "Make long-running agents faster with message threads" November 2 2026 + supporting coverage from The Decoder and Gadgets 360)
