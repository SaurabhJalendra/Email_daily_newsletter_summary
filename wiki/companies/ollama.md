---
name: Ollama
description: Ollama — local-model runtime for macOS/Linux/Windows; ships Pi coding agent powering OpenClaw; Pro/Max cloud plans
type: company
---

# Ollama

> **Type**: company
> **First mentioned**: 2026-03-31
> **Last updated**: 2026-06-13-morning (Ollama Newsletter "Ollama now supports Cline CLI" — extends Ollama's coverage of third-party coding-agent CLIs from Pi/[[claude-code]]/Hermes Desktop into the Cline CLI surface; first publicly framed Ollama-Cline integration in this wiki)
> **Status**: active
> **Related**: [[openclaw]], [[moonshot-ai]], [[google]], [[gemma-4]], [[claude-code]], [[agent-frameworks]]

## Summary

Ollama is the company behind the widely-used local-model runtime of the same name, which lets developers download and run open-weight LLMs on their own hardware (macOS, Linux, Windows). In March 2026 Ollama moved up the stack from model runtime to agent runtime with the launch of Pi — a minimal coding agent that is the harness behind [[openclaw]]. Pi is designed to be infinitely customizable via extensions, skills, prompt templates, themes, and subagents, and works with both local Ollama models and Ollama's cloud via the paid Pro and Max plans. The move positions Ollama as a credible third option alongside [[claude-code]] and Google's Gemini CLI for teams who want agent tooling that defaults to running their own models.

## Timeline

- **2026-06-13-morning**: **Ollama now supports Cline CLI** — Ollama Newsletter "Ollama now supports Cline CLI" (subject-only data; pipeline summaries failed across all 10 newsletters in this cycle with the OpenRouter 403 key-limit-exceeded error — sixth consecutive cycle with the same blocker). First publicly framed Ollama–Cline integration in this wiki; extends Ollama's "default runtime for open-weights coding agents" positioning from Pi (2026-03-31) → MLX/Apple-silicon optimization (2026-04-01) → OpenClaw cloud (2026-04-06) → Gemma 4 12B (2026-06-07-evening) → Hermes Desktop (2026-06-09-evening) into a Cline CLI launcher pattern. Suggests `ollama launch cline` (or similar) now routes Cline's coding-agent surface against local + Ollama-cloud models in the same canonical-install-surface manner as Pi/Hermes Desktop. Body links reference **Download Ollama** + **Ollama's Discord** — concretely positions Ollama as the install entry point for Cline rather than Cline being a separate runtime. Cline is the open-source VS Code coding-agent extension; this lands Cline alongside [[claude-code]], [[openai-codex]], OpenCode, and Hermes Agent in the Ollama-runtime catalog of third-party coding agents. Substantive details (recommended models, command syntax, Pro/Max plan implications) to be re-anchored on the next successful summarization pass — *source: data/summaries/2026-06-13-morning.json (Ollama "Ollama now supports Cline CLI" — body links: Download Ollama + Ollama's Discord; all 10 newsletter summaries failed with OpenRouter 403 key-limit-exceeded error — sixth consecutive cycle)*
- **2026-06-09-evening**: **Ollama now supports [[hermes-desktop]]** — the [[nous-research]] desktop client of the open-source self-improving Hermes Agent is launchable via `ollama launch hermes-desktop`, running directly against Ollama's local and cloud models. Recommended companion models named in the newsletter include **minimax-m3:cloud, kimi-k2.6:cloud, qwen3.6:27b, gemma4:12b, gemma4:26b**; for Apple silicon, **qwen3.6:27b-mlx and gemma4:26b-mlx** are flagged as preferred. Extends Ollama's "default runtime for the open-weights self-improving agent stack" positioning from the 2026-06-04 [[hermes-desktop]] launch into a *first-party launcher integration* — Ollama is now the canonical install surface for both [[openclaw]] (via Pi/[[claude-code]] family) and Hermes Desktop (via Nous Research). Same cycle the Apple Siri AI WWDC26 overhaul is framed by the Ollama newsletter as the consumer-side counterpart to the local-agentic stack Ollama serves — *source: data/summaries/2026-06-09-evening.json (Ollama "Ollama now supports Hermes Desktop" — ollama launch hermes-desktop / Hermes Desktop native cross-platform app for Hermes Agent / Nous Research / parallel subagents + persistent memory + Slack/Discord/Telegram connectivity / recommended models minimax-m3:cloud + kimi-k2.6:cloud + qwen3.6:27b + gemma4:12b + gemma4:26b + Apple-silicon-preferred qwen3.6:27b-mlx + gemma4:26b-mlx / consumer-side Siri AI counterpart framing)*
- **2026-06-07-evening**: **Ollama ships [[gemma-4]] 12B + QAT weights for all Gemma 4 sizes** — the new 12B Gemma 4 model (encoder-free unified multimodal, text + images + native audio in a single transformer, designed to power on-device agents on a 16GB-RAM laptop with benchmark performance nearing the 26B variant) becomes the headline default for the local-agent stack; same drop, **Quantization-Aware Trained (QAT) weights** land for all five Gemma 4 sizes (E2B, E4B, 12B, 26B, 31B) — pulled via `ollama pull gemma4:<size>-it-qat`; ~72% memory reduction with near-original quality, faster across Apple/AMD/Intel/NVIDIA/Qualcomm; Ollama explicitly markets Gemma 4 12B as the substrate for `ollama launch claude --model gemma4:12b`, plus parallel app launches for Codex App, Hermes Agent, and [[openclaw]] — reinforces Ollama-as-canonical-local-runtime positioning for the Apache 2.0 frontier-on-device tier (lands one day after [[google]]'s 270M [[gemma-3-270m]] on the Gemma family's ultra-edge side) — *source: data/summaries/2026-06-07-evening.json (Ollama Newsletter "Gemma 4 12B + quantization-aware weights for all sizes")*
- **2026-04-13**: GLM-5.1 (ZAI) lands on Ollama Cloud — flagship open-weight coding agent; significantly stronger coding capabilities framing — *source: 2026-04-13 cycle*
- **2026-04-08**: Gemma 4 available on Ollama — frontier-level performance framing for reasoning / agentic workflows / coding / multimodal; four sizes (2B, 4B, 26B, 31B) deployable locally — *source: 2026-04-08 cycle*
- **2026-04-06**: Ollama Cloud powers [[openclaw]] — OpenClaw framed as "personal AI assistant that manages inbox, email, calendar via messaging apps" running on Ollama's cloud models (kimi-k2.5 / glm-5 / minimax-m2.7 / gemma4:31b cloud variants) — *source: 2026-04-06 cycle*
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
- data/summaries/2026-06-07-evening.json (Ollama Newsletter — Gemma 4 12B + quantization-aware weights for all sizes)
