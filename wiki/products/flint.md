---
name: Flint
description: Recursive's mixture-of-experts model for fast agentic coding on local hardware — 40B total parameters; >125 tokens/sec on M4 Pro MacBook Pro
type: product
---

# Flint

> **Type**: product
> **Vendor**: [[recursive]]
> **First mentioned**: 2026-10-23-morning
> **Last updated**: 2026-10-25-morning (**Cycle-N+2 NLP Newsletter HIGH weekly-digest cross-cohort recoverage + concrete architectural + licensing details fill-in**: *"Recursive Superintelligence has released Recursive Flint, its first open-weight AI coding model, which can run locally on compatible laptops or GPUs. It is designed for coding agents that can inspect codebases, fix bugs, implement features, write tests, reason through tasks, and use tools across multiple turns."* researchFindings.additionalContext canonicalizes: **~39.8B total parameters** + **~2.5B active-per-token**; **released 2026-10-21**; **Apache 2.0** licensed; developed largely via Recursive's **automated Eureka Machine research system** (pre-training + post-training + inference optimization); NVIDIA says automated research produced specialized kernels that **increased generation speed on its RTX platform by 55% without changing the model weights**; strong SWE-Bench + Terminal-Bench performance per early reporting. First-in-wiki: (a) **~39.8B total / ~2.5B active concrete sparse-MoE parameter-count canonical anchor pair** — sharpens the 10-23-morning *"40B total"* framing with *concrete active-expert-per-token canonical anchor* and resolves the 10-23-morning "active-parameters" open question; (b) **Apache 2.0 license + 2026-10-21 release-date canonical anchor pair** — resolves two 10-23-morning open questions; (c) **Automated-"Eureka-Machine"-research-system concrete-training-pipeline canonical anchor** — productizes Recursive as *canonical late-Oct-2026 concrete-automated-AI-research-system substrate operator*; (d) **NVIDIA 55% RTX-generation-speedup-without-weight-change concrete-kernel-level canonical anchor** — productizes Flint as *canonical NVIDIA-RTX-tier-optimized local-coding-model canonical anchor*. See [[recursive]] + [[open-source-models]] + [[nvidia]] + [[kimi-k3-1-pro]] + [[claude-duet]] — *source: data/summaries/2026-10-25-morning.json (NLP Newsletter HIGH "AI Agents Weekly: Claude Duet, Kimi K3.1 Pro, MiniMax M3.1 Flash, Recursive Flint, DeepSeek DeepInfer, Ramp Laminar, Mercury 3, and More"; researchFindings.additionalContext — Recursive Flint; attribution TechCrunch + NVIDIA + RecursiveSI/flint Hugging Face)*)
> **Previously updated**: 2026-10-23-morning
> **Status**: active (launched)
> **Related**: [[recursive]], [[ollama]], [[earendil]], [[open-source-models]], [[claude-code]], [[cursor]], [[nvidia]]

## Summary

Flint is [[recursive]]'s **mixture-of-experts model built for fast agentic coding on local hardware**. The model features **40 billion total parameters** and generates **more than 125 tokens per second on an M4 Pro MacBook Pro**, placing it in the local-first coding-agent runtime cohort alongside [[ollama]]-hosted small frontier models and the [[earendil]] Pi coding-agent harness.

## Timeline

- **2026-10-23-morning**: **Flint canonical productization launch — concrete MoE architecture + 40B total parameters + >125 tokens/sec on M4 Pro MacBook Pro + fast-agentic-coding-on-local-hardware canonical positioning anchor cluster**. TLDR AI MEDIUM "Claude Duet 🤖, Anthropic API changes 👨‍💻, Recursive's local model 💻": *"Recursive has introduced Flint, a mixture-of-experts model built for fast agentic coding on local hardware, featuring 40 billion total parameters and the ability to generate over 125 tokens per second on an M4 Pro MacBook Pro"*. First-in-wiki *concrete Flint canonical anchor* on local-first-coding-agent-runtime substrate — productizes Recursive as *canonical late-Oct-2026 concrete-first-sub-100B-local-coding-MoE substrate operator*. See [[recursive]] + [[ollama]] + [[earendil]] + [[open-source-models]] — *source: data/summaries/2026-10-23-morning.json (TLDR AI MEDIUM "Claude Duet 🤖, Anthropic API changes 👨‍💻, Recursive's local model 💻")*

## Key Facts

- **Vendor**: [[recursive]]
- **Architecture**: Mixture of experts (MoE)
- **Total parameters**: 40B
- **Throughput benchmark**: >125 tokens/sec on M4 Pro MacBook Pro
- **Target workload**: Fast agentic coding on local hardware

## Open Questions

- Active-parameters-per-token count
- Context-window length
- License (Apache 2.0? MIT? custom?)
- Named benchmarks (SWE-Bench, DeepSWE, Terminal-Bench) scores
- Hardware coverage beyond Apple Silicon (NVIDIA + AMD + Intel + Qualcomm)
- Named integrations ([[claude-code]], [[cursor]], [[ollama]], [[earendil]])
- Training data + methodology detail

## Sources

- data/summaries/2026-10-23-morning.json (TLDR AI MEDIUM "Claude Duet 🤖, Anthropic API changes 👨‍💻, Recursive's local model 💻")
