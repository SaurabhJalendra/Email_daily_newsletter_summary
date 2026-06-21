---
name: SpatialClaw
description: NVIDIA's spatial reasoning model for coding and robotics tasks; first surfaced in NLP Newsletter AI Agents Weekly digest June 2026
type: product
---

# SpatialClaw

> **Type**: product
> **Vendor**: [[nvidia]]
> **First mentioned**: 2026-06-21-morning
> **Last updated**: 2026-06-21-morning (NLP Newsletter "🤖 AI Agents Weekly: GLM-5.2, Claude Code Artifacts, Qwen-Robot Suite, Codex Skills, Block's Builderbot, SpatialClaw" — first publicly framed SpatialClaw surface in this wiki; positioned as a spatial-reasoning model for coding and robotics tasks)
> **Status**: released (per NLP Newsletter digest framing)
> **Related**: [[nvidia]], [[nvidia-cosmos]], [[nvidia-motionbricks]], [[isaac-groot]], [[humanoid-robotics]], [[world-models]]

## Summary

SpatialClaw is a spatial reasoning model from [[nvidia]] for coding and robotics tasks. First surfaced in this wiki via Elvis Saravia's NLP Newsletter "AI Agents Weekly" digest on 2026-06-21-morning, where it landed in a cycle-headline slot alongside [[glm-5-2]], [[claude-code]] Artifacts, [[qwen-robot-suite]], and Codex Skills — placing it in the same week as multiple structural model + agent-framework announcements. The "SpatialClaw" naming convention extends NVIDIA's growing menagerie of named AI-for-physical-world products ([[nvidia-cosmos]], [[nvidia-motionbricks]], [[isaac-groot]], [[alpamayo]], [[nitrogen]]) into the spatial-reasoning category specifically.

Substantive product details (parameter count, architecture, benchmark positioning, distribution channel, license) are not yet retrievable from the digest-tier subject framing. Likely composes with NVIDIA's broader physical-AI stack: [[nvidia-cosmos]] world models for environment generation, [[isaac-groot]] reference humanoid hardware, [[nvidia-motionbricks]] character motion — SpatialClaw plausibly slots in as the *spatial reasoning* primitive between perception and action.

## Timeline

- **2026-06-21-morning**: **NLP Newsletter (Elvis Saravia) "🤖 AI Agents Weekly: GLM-5.2, Claude Code Artifacts, Qwen-Robot Suite, Codex Skills, Block's Builderbot, SpatialClaw, and More"** — first publicly framed SpatialClaw surface in this wiki. Summary: ***"NVIDIA has introduced SpatialClaw, a spatial reasoning model for coding and robotics tasks"***. Daily-digest AI Models & Research line: ***"NVIDIA has introduced SpatialClaw, a spatial reasoning model for coding and robotics tasks, enhancing capabilities in complex environments"***. Digest-cohort placement is significant: SpatialClaw appears in the same compact-subject slot as multiple high-signal frontier model + agent-framework launches ([[glm-5-2]], Claude Code Artifacts, Qwen-Robot Suite, Codex Skills, Block's Builderbot), suggesting Saravia's editorial judgment that SpatialClaw is a load-bearing release rather than a peripheral demo. The "spatial reasoning model for coding *and* robotics tasks" framing is structurally novel — most spatial-reasoning surfaces in the field target *either* perception/world-modeling (for robotics) *or* code generation, but not both. The bridge framing suggests SpatialClaw exposes the same spatial-reasoning primitive to code generation (e.g., generating CAD / spatial-control code from spatial descriptions) and to physical-agent execution (e.g., grounding robotics motion planning in spatial reasoning). Body-recovery items: (a) parameter count + architecture, (b) distribution channel (Hugging Face / NVIDIA NGC / part of [[nvidia-cosmos]] family), (c) license / open-weights status, (d) concrete benchmarks (spatial reasoning leaderboards, robotics manipulation tasks, code-generation benchmarks), (e) integration with [[isaac-groot]] reference humanoid + [[nvidia-cosmos]] world models — *source: data/summaries/2026-06-21-morning.json (NLP Newsletter — 🤖 AI Agents Weekly: GLM-5.2, Claude Code Artifacts, Qwen-Robot Suite, Codex Skills, Block's Builderbot, SpatialClaw / NVIDIA has introduced SpatialClaw, a spatial reasoning model for coding and robotics tasks, enhancing capabilities in complex environments)*

## Key Facts

- Vendor: [[nvidia]]
- Category: spatial reasoning model — covers *both* coding and robotics tasks (cross-modality bridge framing is structurally novel)
- First-newsletter digest placement: NLP Newsletter "AI Agents Weekly" digest 2026-06-21-morning — same slot as [[glm-5-2]], Claude Code Artifacts, Qwen-Robot Suite, Codex Skills, Block's Builderbot
- Naming convention fits the broader NVIDIA AI-for-physical-world product family ([[nvidia-cosmos]], [[nvidia-motionbricks]], [[alpamayo]], [[nitrogen]])

## Open Questions

- Parameter count, architecture, training data — open-weights or closed?
- Distribution channel and license
- Benchmark positioning on spatial-reasoning leaderboards (e.g., 3D-VLM benchmarks) and robotics manipulation tasks
- Integration / composition with the broader NVIDIA physical-AI stack ([[isaac-groot]], [[nvidia-cosmos]], [[nvidia-motionbricks]])
- How does the "coding tasks" framing manifest — is it generating spatial-control code, CAD code, robotics simulation code, or general code with spatial reasoning embedded?
- Competitive positioning vs Google's [[gemini-3-1-pro]] / Apple's spatial reasoning research / Meta's world-model lineage

## Sources

- data/summaries/2026-06-21-morning.json (NLP Newsletter — 🤖 AI Agents Weekly: GLM-5.2, Claude Code Artifacts, Qwen-Robot Suite, Codex Skills, Block's Builderbot, SpatialClaw / NVIDIA has introduced SpatialClaw, a spatial reasoning model for coding and robotics tasks, enhancing capabilities in complex environments)
