---
name: NVIDIA AVO
description: NVIDIA's Agentic Variation Operators — general-purpose autonomous coding-agent architecture that scored a perfect 100.00 on ARC-AGI-3 (183 levels / 25 environments) powered by Claude Opus 5, with ~12% fewer actions than the prior leader (Aug 2026)
type: product
---

# NVIDIA AVO

> **Type**: product
> **Vendor**: [[nvidia]] (with [[anthropic]] [[claude-opus-5]] as the base model)
> **First mentioned**: 2026-08-23-morning
> **Last updated**: 2026-08-23-morning
> **Status**: active — announced as perfect-score ARC-AGI-3 result
> **Related**: [[nvidia]], [[claude-opus-5]], [[anthropic]], [[agent-harness]], [[agent-frameworks]], [[trueforge]], [[deepseek-harness]], [[prime-agent]], [[self-harness]], [[recursive-self-improvement]]

## Summary

**AVO (Agentic Variation Operators)** is [[nvidia]]'s general-purpose agentic-coding architecture — originally built for GPU/CUDA kernel optimization, but recently demonstrated as a *frontier-level agent scaffold for interactive reasoning*. AVO replaces the fixed mutation/crossover operators of traditional evolutionary optimization with an agent that inspects implementations, forms hypotheses, edits code, runs tests, interprets profiler/compiler feedback, and iteratively refines its solutions over long horizons with minimal human intervention. In internal optimization loops it has been reported to run continuously for days, occasionally surpassing highly specialized human GPU engineers.

In August 2026, NVIDIA reported AVO — powered by [[anthropic]]'s [[claude-opus-5]] — scored a **perfect 100.00 on the ARC-AGI-3 public benchmark**, completing all **183 levels across 25 environments** and using **~12% fewer actions** than the previous leader. This lands AVO as a canonical proof-of-concept for the *harness-is-as-important-as-the-model* thesis: Claude Opus 5 scores around 30% on ARC-AGI-3 unaided, but inside the AVO scaffold (memory + tools + execution feedback + long-horizon planning) reaches 100%. AVO joins [[trueforge]], [[deepseek-harness]], [[vercel-eve]], and [[prime-agent]] as the mid-2026 named-agent-architecture cohort, and provides the strongest single data-point yet for the [[agent-harness]] discipline.

## Timeline

- **2026-08-23-morning**: **NVIDIA AVO achieves 100.00 on ARC-AGI-3 (183 levels / 25 environments) powered by [[claude-opus-5]]** — NLP Newsletter HIGH "AI Agents Weekly": *"NVIDIA's AVO (Agentic Variation Operators) architecture, powered by Anthropic's Claude Opus 5, has achieved a perfect 100.00 score on the ARC-AGI-3 public benchmark, completing all 183 levels across 25 environments"* + *"~12% fewer actions than the previous leading agent system"* per researchFindings. Also referenced in daily-digest Top Story #2. First publicly framed *perfect-score ARC-AGI-3 anchor* + *base-model-plus-scaffold decomposition* (Claude Opus 5 alone ~30% vs AVO+Opus5 100%) in this wiki. Canonicalizes the *agent-scaffold-quality is comparable to base-model-quality as a lever on frontier reasoning* thesis. See [[claude-opus-5]] + [[nvidia]] + [[agent-harness]] + [[trueforge]] — *source: data/summaries/2026-08-23-morning.json (NLP Newsletter HIGH "🤖 AI Agents Weekly: NVIDIA AVO, TrueForge, Chroma Foundation, Fragile Self-Improvement, Ornith-1.5, dots3-note, DeepSeek Vision, and More"; daily-digest Top Story #2; researchFindings.additionalContext — NVIDIA AVO)*

## Key Facts

- Vendor: [[nvidia]]; base model: [[claude-opus-5]] ([[anthropic]])
- Full name: **Agentic Variation Operators**
- Origin: general-purpose coding agent, initially focused on GPU/CUDA kernel optimization
- ARC-AGI-3 public benchmark: **100.00 / 100** — all 183 levels across 25 environments
- Action-efficiency: ~12% fewer actions than the previous leading agent
- Base-model reference: Claude Opus 5 alone ~30% on ARC-AGI-3; AVO+Opus5 = 100%
- Architectural pattern: agent inspects code + forms hypotheses + edits + runs tests + interprets profiler/compiler feedback + iterates over long horizons

## Open Questions

- Is AVO open-sourced or held internally at NVIDIA?
- Does AVO run on other base models (Fable 5, GPT-5.6 Sol, Gemini 3.7 Flash) — or is Claude Opus 5 exclusive?
- What is the compute + wall-clock cost of the 100% ARC-AGI-3 run?
- How does AVO compare structurally to [[prime-agent]] (95.5% ARC-AGI-3, Recursive Language Model + Continual Harness)?
- Will NVIDIA productize AVO as a customer-facing GPU-optimization service, or keep it as internal tooling?

## Sources

- data/summaries/2026-08-23-morning.json (NLP Newsletter HIGH "🤖 AI Agents Weekly: NVIDIA AVO, TrueForge, Chroma Foundation, Fragile Self-Improvement, Ornith-1.5, dots3-note, DeepSeek Vision, and More"; daily-digest Top Story #2; researchFindings.additionalContext — NVIDIA AVO)
