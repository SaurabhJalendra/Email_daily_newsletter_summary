---
name: Laminar
description: Ramp's October 2026 managed agents platform — secure conversation history, session compaction, standard tool-calling + message queuing + steering interfaces, subagents, multiplayer chat, observability tooling, in-house harness lifting Ramp from inference-router to full agent-runtime vendor
type: product
---

# Laminar

> **Type**: product
> **Vendor**: [[ramp]]
> **First mentioned**: 2026-10-22-morning
> **Last updated**: 2026-10-22-morning
> **Status**: active
> **Related**: [[ramp]], [[router-ramp]], [[agent-frameworks]], [[agent-harness]], [[claude-code]], [[claude-mods]], [[mcp]]

## Summary

**Laminar** is [[ramp]]'s managed-agents platform — a hosted runtime for building, running, and observing production AI agents. Introduced in Ramp's "Building Laminar" post (October 2026, carried by TLDR AI), it bundles the full agent-runtime surface: secure conversation-history storage, session compaction, standard interfaces for tool calling, message queuing and steering, subagents, multiplayer chat support, and observability tooling. Positioning extends Ramp beyond the inference-router tier of its [[router-ramp]] product into a *full agent-runtime vendor* alongside LangGraph Platform, LlamaIndex Hosted Agents, and Vercel AI SDK's managed offering.

Laminar is Ramp's second-ring AI product after the August 2026 [[router-ramp]] single-endpoint LLM aggregator. Where Router sits at the model-selection layer (benchmark/cost/difficulty routing across OpenAI/Anthropic/DeepSeek/xAI), Laminar sits at the agent-execution layer — the layer that holds conversation state, enforces safety, dispatches subagents, and streams observability signals.

## Timeline

- **2026-10-22-morning**: **Created — TLDR AI MEDIUM announces Laminar as "Ramp's managed agents platform, built to feature secure conversation history storage, session compaction, standard interfaces for tool calling, message queuing and steering, subagents, multiplayer chat support, observability tooling, and more"**. First-in-wiki *Ramp-authored agent-runtime canonical productization anchor* + concrete nine-primitive agent-runtime canonical anchor cluster (conversation history + session compaction + tool-call interface + message queuing + steering + subagents + multiplayer chat + observability + "more") + Ramp-moves-from-inference-router-to-full-agent-runtime cross-ring expansion canonical anchor. See [[ramp]] + [[agent-frameworks]] — *source: data/summaries/2026-10-22-morning.json (TLDR AI MEDIUM "DeepSeek DeepInfer 🐋, PyTorch on TPUs ⚡, Ramp's agent framework 👨‍💻")*

## Key Facts

- **Vendor**: [[ramp]]
- **Positioning**: managed agents platform (agent-runtime tier)
- **Capabilities enumerated at launch**: secure conversation-history storage, session compaction, standard tool-calling interface, message queuing + steering, subagents, multiplayer chat support, observability tooling
- **Launch source**: Ramp engineering blog ("Building Laminar") carried by TLDR AI
- **Relationship to [[router-ramp]]**: second-ring product — Router selects models, Laminar runs agents
- **Competitive cohort**: LangGraph Platform, LlamaIndex Hosted Agents, Vercel AI SDK managed tier, [[agent-skills]]-adjacent runtimes

## Open Questions

- Open-source vs closed-platform distribution — "built" could mean either Ramp-internal or externally available
- Session-compaction methodology (learned policy per [[agent-harness]] research-tier anchors, or heuristic trim?)
- Multiplayer chat semantics — concurrent human + agent conversation, or multi-human-same-agent?
- Steering primitives — mid-turn intervention, retry, pause, or declarative constraints?
- Integration posture — does Laminar run on top of [[router-ramp]] for model selection, or standalone?
- Pricing and deployment model (hosted-only, self-hosted, hybrid?)
- Observability stack — proprietary dashboards, or integration with OpenTelemetry / LangSmith / Phoenix?

## Sources

- data/summaries/2026-10-22-morning.json (TLDR AI MEDIUM "DeepSeek DeepInfer 🐋, PyTorch on TPUs ⚡, Ramp's agent framework 👨‍💻")
