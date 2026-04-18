---
name: Ollama
description: Ollama — local-model runtime for macOS/Linux/Windows; ships Pi coding agent powering OpenClaw; Pro/Max cloud plans
type: company
---

# Ollama

> **Type**: company
> **First mentioned**: 2026-03-31
> **Last updated**: 2026-04-01
> **Status**: active
> **Related**: [[openclaw]], [[moonshot-ai]], [[agent-frameworks]]

## Summary

Ollama is the company behind the widely-used local-model runtime of the same name, which lets developers download and run open-weight LLMs on their own hardware (macOS, Linux, Windows). In March 2026 Ollama moved up the stack from model runtime to agent runtime with the launch of Pi — a minimal coding agent that is the harness behind [[openclaw]]. Pi is designed to be infinitely customizable via extensions, skills, prompt templates, themes, and subagents, and works with both local Ollama models and Ollama's cloud via the paid Pro and Max plans. The move positions Ollama as a credible third option alongside [[claude-code]] and Google's Gemini CLI for teams who want agent tooling that defaults to running their own models.

## Timeline

- **2026-04-01**: Ollama rebuilt on [[apple]] MLX for Apple-silicon speedups — unified-memory architecture leveraged for large time-to-first-token and tokens/sec gains on M5 / M5 Pro / M5 Max GPU Neural Accelerators; added support for NVIDIA NVFP4 (production-parity low-precision inference); cache overhaul cuts memory use, adds intelligent checkpoints and smarter eviction of shared prefixes — positioned as the runtime for macOS-first agents like [[openclaw]], [[claude-code]], OpenCode, and [[openai-codex]]; bench model used is [[alibaba]]'s Qwen3.5-35B-A3B quantized to NVFP4; int4 path coming in Ollama 0.19 — *source: 2026-04-01 cycle (Ollama Newsletter — fastest on Apple silicon / MLX + NVFP4)*
- **2026-03-31**: Pi launched — minimal coding agent positioned as the harness behind [[openclaw]]; bootstrapped via `ollama launch pi --model kimi-k2.5:cloud` (uses [[moonshot-ai]] Kimi K2.5 as default cloud model); infinitely customizable with pi-packages, subagents (`pi-subagents` for deep research / large-codebase refactors), prompt templates, themes, and `pi-autoresearch` (Karpathy-inspired autonomous optimization loops); works with both local models and Ollama's Pro/Max cloud tier — *source: 2026-03-31 cycle (Ollama Newsletter — Ollama launch Pi: the coding agent behind OpenClaw)*

## Key Facts

- Core product: Ollama local-model runtime
- New product: Pi — coding agent powering [[openclaw]]
- Monetization: Pro and Max cloud plans for extended usage + larger models
- Partnership model: Pi ships as the default harness for [[openclaw]]; default cloud model is [[moonshot-ai]] Kimi K2.5

## Open Questions

- Commercial terms for Pro/Max; enterprise tier?
- Will Pi work with non-Kimi models in the cloud tier, or stay Kimi-first?
- Relationship between Pi and [[openclaw]]'s independent foundation post-OpenAI acquihire?

## Sources

- data/summaries/2026-03-31.json (Ollama Newsletter — Ollama launch Pi: the coding agent behind OpenClaw)
- data/summaries/2026-04-01.json (Ollama Newsletter — Ollama updated to run fastest on Apple silicon, powered by MLX)
