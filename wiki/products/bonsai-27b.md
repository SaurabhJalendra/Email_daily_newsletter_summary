---
name: Bonsai 27B
description: PrismML's 27B-class on-device model — 3.9 GB quantized footprint (1-bit binary + ternary variants), retains ~89.5% of the FP16 base's performance; first 27B model to fit on a phone
type: product
---

# Bonsai 27B

> **Type**: product
> **Vendor**: [[prismml]]
> **First mentioned**: 2026-07-17-morning
> **Last updated**: 2026-07-17-morning (**Created — PrismML ships Bonsai 27B, framed as *"the first 27B-class model that can run on a phone"* at a 3.9 GB on-device footprint via aggressive quantization (1-bit binary build + ternary build) while retaining ~89.5% of the original FP16 model's performance**. AlphaSignal HIGH: ***"PrismML has released Bonsai 27B, a 27B model that fits on a phone at 3.9 GB, with two variants: a 1-bit binary build and a ternary build. Bonsai 27B is the first 27B-class model that can run on a phone, and it retains around 89.5% of the original FP16 model's performance"***. Daily-digest Top Story #3-cohort framing: PrismML as an on-device-AI vendor in the same cycle-cohort as [[thinking-machines]] Inkling (frontier open-weights) and [[nvidia]] Jetson Thor T3000/T2000 (edge robotics silicon), extending the mid-2026 *on-device / edge AI substrate* arc into the 27B parameter tier. Structurally significant three ways: (i) **First publicly framed 27B-class model at phone-runnable footprint in this wiki** — sharpens the on-device-AI narrative (previously anchored at [[gemma-4]] E2B/E4B + [[apple]] AFM 3B + Whisper-tier speech) into a *27B-class reasoning-tier* runnable-on-phone posture; the 3.9 GB footprint is compatible with mid-tier smartphone RAM budgets (8-16 GB systems); (ii) **1-bit binary + ternary quantization dual-track** — first publicly framed *dual-variant quantization ship* on the same base model in this wiki, structurally distinct from typical Q4/Q8 GGUF families; positions PrismML at the *extreme-quantization research frontier* alongside BitNet + Microsoft 1-bit LLM lineage; (iii) **~89.5% FP16 retention as headline claim** — first publicly framed *quantization-fidelity retention percentage* on a 27B model at 1-bit / ternary depth in this wiki; if the number holds up under downstream-task evaluation, it materially undercuts the assumption that 1-bit/ternary quantization requires purpose-trained quantization-aware base models (BitNet-style). See [[open-source-models]] + [[ai-hardware]]. Body-recovery items: (a) PrismML base model architecture (dense vs MoE, transformer variant), (b) which benchmarks the ~89.5% retention was measured on, (c) HuggingFace URL + license, (d) phone-runtime substrate (iOS Core ML? Android NNAPI? llama.cpp GGUF?), (e) inference tokens/s on reference phones — *source: data/summaries/2026-07-17-morning.json (AlphaSignal HIGH "Thinking Machines Inkling 🎙️, OpenAI GPT-Red Security 🛡️, PrismML 27B" — PrismML Bonsai 27B fits on phone at 3.9 GB, 1-bit binary + ternary builds, first 27B-class model on a phone, ~89.5% FP16 performance retention)*
> **Status**: active (open-weight, phone-runnable)
> **Related**: [[prismml]], [[open-source-models]], [[ai-hardware]], [[gemma-4]], [[apple]], [[ollama]], [[inkling]]

## Summary

Bonsai 27B is [[prismml]]'s on-device large language model — a 27-billion-parameter class model quantized to a **3.9 GB footprint** in two variants: a **1-bit binary build** and a **ternary build**. PrismML frames it as *"the first 27B-class model that can run on a phone"*, with the aggressive quantization retaining **~89.5%** of the original FP16 base's performance. The release lands in the same mid-July 2026 cycle as [[thinking-machines]]'s 975B [[inkling]] open-weights model and [[nvidia]]'s Jetson Thor edge modules, extending the *edge/on-device AI substrate* arc from the 3B-class ([[gemma-4]] E4B, Apple AFM) into the 27B-class reasoning tier.

The 1-bit and ternary quantization tracks position PrismML at the extreme-quantization research frontier (BitNet lineage), and — if the ~89.5% FP16 retention holds up under adversarial evaluation — undercut the assumption that aggressive quantization requires purpose-trained quantization-aware base models.

## Timeline

- **2026-07-17-morning**: **Created — PrismML ships Bonsai 27B — 3.9 GB on-device footprint + 1-bit binary + ternary variants + ~89.5% FP16 retention + first 27B-class model that fits on a phone**. AlphaSignal HIGH cycle-headline placement — *source: data/summaries/2026-07-17-morning.json (AlphaSignal HIGH — Bonsai 27B; also referenced in daily-digest AI Models & Research)*

## Key Facts

- Vendor: [[prismml]]
- Parameter class: **27B**
- On-device footprint: **3.9 GB** (quantized)
- Quantization variants: **1-bit binary build** + **ternary build**
- Performance retention: **~89.5%** of FP16 base
- Positioning: *"first 27B-class model that can run on a phone"*

## Open Questions

- Base model architecture (dense vs MoE, transformer variant) and base-model provenance
- Benchmark set the 89.5% retention was measured on (MMLU? GSM8K? SWE-bench? real-world tasks?)
- HuggingFace URL, license terms, and commercial-use permission
- Phone-runtime substrate (iOS Core ML / Android NNAPI / llama.cpp GGUF / ONNX)
- Inference tokens/s on reference smartphones
- Relationship to BitNet / 1-bit LLM research lineage

## Sources

- data/summaries/2026-07-17-morning.json (AlphaSignal HIGH "Thinking Machines Inkling 🎙️, OpenAI GPT-Red Security 🛡️, PrismML 27B" — PrismML Bonsai 27B fits on a phone at 3.9 GB, 1-bit binary + ternary builds, first 27B-class model on a phone, ~89.5% FP16 performance retention; daily-digest AI Models & Research — PrismML has released Bonsai 27B, a 27B model that fits on a phone at 3.9 GB)
