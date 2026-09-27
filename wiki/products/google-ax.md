---
name: Google AX
description: Google's open-source Apache 2.0-licensed declarative orchestrator (Agent Executor) for running autonomous AI-agent workloads at scale; Kubernetes-style control plane for agent fleets; v0.3.1 released Sep 25 2026; runs on Google Agent Substrate with Redis Streams task queue
type: product
---

# Google AX (Agent Executor)

> **Type**: product
> **Vendor**: [[google]]
> **First mentioned**: 2026-09-27-morning
> **Last updated**: 2026-09-27-morning
> **Status**: active (early-stage; v0.3.1 released 2026-09-25; expected to undergo breaking changes before stable release)
> **Related**: [[google]], [[agent-frameworks]], [[a2a-protocol]], [[model-context-protocol]], [[antigravity-2]], [[recursive-self-improvement]]

## Summary

Google AX (Agent Executor) is an open-source, Apache 2.0-licensed **declarative orchestrator for running autonomous AI-agent workloads at scale**. Rather than serving as an agent-building framework, it acts more like a **Kubernetes control plane for agent fleets**: it manages isolated, stateful tasks with reusable Workspaces, network-control Gateways, and Model specifications. AX runs on Google's Agent Substrate, supporting checkpointing and rapid suspension or resumption of agents while they wait for model responses, tools, or human input.

The latest reported development is **AX v0.3.1**, released September 25, 2026, following v0.3.0's architectural split into an API frontend, reconciler, and sandboxed task runner, with task state moved to **Redis Streams** to handle high volumes of short-lived tasks. Positioning-wise, AX targets the gap between prototype agents and production-scale, long-running agent systems by emphasizing sandboxing, reproducibility, lifecycle management, and high concurrency — potentially influencing how enterprises and researchers deploy agent fleets, reinforcement-learning workloads, and evaluation environments. Complements [[a2a-protocol]] (agent-to-agent messaging) and [[model-context-protocol]] (agent-to-tool) as the *fleet-orchestration* layer.

## Timeline

- **2026-09-27-morning**: **Google AX first-in-wiki canonical anchor cluster — Apache-2.0 open-source + declarative-orchestrator + Kubernetes-control-plane-for-agent-fleets + Workspaces + Gateways + Model-specs primitives + Google-Agent-Substrate runtime + checkpointing + suspend/resume + v0.3.1 (2026-09-25) with API-frontend + reconciler + sandboxed-task-runner architectural split + Redis-Streams task-state canonical anchor cluster**. NLP Newsletter MEDIUM: *"Google has open-sourced AX (Agent Executor), a declarative orchestrator for running autonomous AI-agent workloads at scale"*. researchFindings.additionalContext: *"AX v0.3.1, released September 25, 2026, following v0.3.0's architectural split into an API frontend, reconciler, and sandboxed task runner, with task state moved to Redis Streams to handle high volumes of short-lived tasks"* + *"targets the gap between prototype agents and production-scale, long-running agent systems by emphasizing sandboxing, reproducibility, lifecycle management, and high concurrency"*. First-in-wiki: (a) Google-AX named-productization canonical anchor; (b) declarative-orchestrator-tier canonical positioning vs agent-framework-tier; (c) v0.3.1 concrete-version + Redis-Streams task-state canonical infrastructure anchor pair. See [[google]] + [[agent-frameworks]] + [[a2a-protocol]] — *source: data/summaries/2026-09-27-morning.json (NLP Newsletter MEDIUM "🤖 AI Agents Weekly: Claude Opus 5.5, GPT-6 Sol and Luna, MiMo-V2.6, Step 5 Preview, Google AX, Agensh, and More"; researchFindings.additionalContext for Google AX)*

## Key Facts

- **Vendor**: [[google]]
- **License**: Apache 2.0
- **Type**: Declarative orchestrator (agent fleet control plane), not an agent-building framework
- **Runtime**: Google Agent Substrate
- **Primitives**: Workspaces (reusable isolated environments), Gateways (network control), Models (spec-based)
- **Task-state store**: Redis Streams (since v0.3.0)
- **Architecture**: API frontend + reconciler + sandboxed task runner (since v0.3.0)
- **Latest version**: v0.3.1 (2026-09-25)
- **Capabilities**: Checkpointing, rapid suspend/resume, sandboxed task execution, high task concurrency
- **Target use cases**: Agent fleets in production, RL workloads, evaluation environments, long-running autonomous workflows
- **Status**: Early-stage; expected to undergo breaking changes before stable release

## Open Questions

- Concrete Google-internal adoption footprint (Deep Research, Jules, Antigravity, etc.) — is AX the substrate for those?
- Head-to-head positioning vs [[claude-managed-agents]] (Anthropic's managed agent runtime) and OpenAI's [[agentkit]]
- Interop with [[a2a-protocol]] (message-plane) and [[model-context-protocol]] (tool-plane) — does AX bundle A2A + MCP by default?
- Timeline to stable 1.0 release
- Third-party benchmark validation of the "prototype-to-production" gap-closing thesis

## Sources

- data/summaries/2026-09-27-morning.json (NLP Newsletter MEDIUM "🤖 AI Agents Weekly: Claude Opus 5.5, GPT-6 Sol and Luna, MiMo-V2.6, Step 5 Preview, Google AX, Agensh, and More"; researchFindings.additionalContext for Google AX — GitHub repository + InfoQ + AI Weekly coverage)
