---
name: Motif-3
description: Motif Technologies' large-scale decoder-only MoE language model — 314B total / ~13.2B active parameters, ~256K native context, released open-weight under MIT license; strongest open-weight LLM outside US/China ecosystem
type: product
---

# Motif-3

> **Type**: product
> **Vendor**: Motif Technologies (South Korean lab; Dokpamo sovereign-AI program)
> **First mentioned**: 2026-09-09-morning
> **Last updated**: 2026-09-09-morning
> **Status**: released (open-weights final)
> **Related**: [[open-source-models]], [[glm-5-3]], [[hy4-preview]], [[kimi-k3]], [[deepseek-v4]], [[inkling]]

## Summary

Motif-3 is a **large-scale decoder-only Mixture-of-Experts (MoE) language model** developed by **Motif Technologies**, a ~30-person South Korean lab participating in the government-backed **Dokpamo sovereign AI program**. The model has **314B total parameters with ~13.2B activated per token** and a native context window around **256K tokens**, built on a proprietary architecture designed from scratch rather than derived from existing open-source models. It exists in Base and aligned/chat variants, and a quantized NVFP4 variant targets efficient NVIDIA-GPU deployment. Final weights are released openly under the **MIT license** — commercial use permitted.

Motif-3 lands as one of the **strongest open-weight MoE LLMs outside the US/China ecosystem**, scoring around **44 on Artificial Analysis' Intelligence Index** — comparable to much larger flagship models — despite being trained by a small team on comparatively limited resources. It is surfaced in Nathan Lambert's *"Latest open artifacts (#24)"* Interconnects roundup alongside [[glm-5-3]] and [[hy4-preview]] as one of the flagship mid-2026 non-Chinese non-Western open-weight releases, and is called out as a *"hidden gem"* for its unusually strong performance for its size and budget.

## Timeline

- **2026-09-09-morning**: **Motif-3 canonicalized as flagship "open artifact" in Interconnects *Latest open artifacts (#24)* roundup** — Nathan Lambert (Interconnects) MEDIUM: *"Motif-3 is a large-scale, decoder-only Mixture-of-Experts (MoE) language model with 314 billion total parameters, built by Motif Technologies, and has been released under the MIT license"*. researchFindings.additionalContext canonicalizes: (a) *"one of the strongest open-weight MoE LLMs outside the US/China ecosystem"*; (b) ~44 on Artificial Analysis' Intelligence Index; (c) architectural provenance from a smaller Motif 2.6B technical report (differential attention + specialized normalization + data-mix scheduling); (d) NVFP4-quantized variant for memory-efficient serving on modern NVIDIA GPUs; (e) South Korean sovereign-AI program (Dokpamo) origin. First-in-wiki: (i) *Motif Technologies as canonical named-vendor for sovereign-Korean-tier open-weight MoE flagship*; (ii) *314B-total / 13.2B-active / 256K-context / MIT-license concrete architecture-and-license anchor cluster*; (iii) *"hidden gem" / non-US-non-Chinese frontier-open-weight canonical positioning*. Positions Motif-3 alongside [[glm-5-3]] (Z.ai, ~750B, coding+cyber) + [[hy4-preview]] (Tencent, 770B, coding) as *third-pillar of the mid-2026 non-Western frontier-open-weight cohort with an explicit sovereign-Korean-AI angle* — see [[open-source-models]] — *source: data/summaries/2026-09-09-morning.json (Interconnects MEDIUM "Latest open artifacts (#24): Motif-3, GLM-5.3, Hy4-preview and open model licenses"; researchFindings.additionalContext for Motif-3)*

## Key Facts

- **Vendor**: Motif Technologies (~30-person South Korean lab)
- **Ecosystem context**: participant in South Korean government-backed **Dokpamo sovereign AI program**
- **Architecture**: decoder-only Mixture-of-Experts (MoE); **314B total parameters** / **~13.2B active per token**
- **Context window**: **~256K tokens native**
- **License**: **MIT** (final weights) — permissive, commercial use allowed
- **Variants**:
  - **Motif-3-Base** (foundation)
  - **Motif-3** (aligned/chat)
  - **NVFP4-quantized** variant for efficient NVIDIA-GPU serving
- **Benchmark tier**: ~44 on Artificial Analysis' Intelligence Index — comparable to much larger flagship models
- **Architectural lineage**: builds on ideas first detailed in a smaller Motif 2.6B technical report (differential attention, specialized normalization, data-mix scheduling); scaled to trillions of tokens
- **Distribution**: available in the Motif-Technologies namespace on Hugging Face
- **Positioning per Interconnects**: *"one of the strongest open-weight MoE LLMs outside the US/China ecosystem"*; "hidden gem" framing given team size and budget

## Open Questions

- Concrete training-token count and final compute budget
- Full benchmark table vs [[kimi-k3]] + [[glm-5-3]] + [[hy4-preview]] + [[deepseek-v4]] + [[inkling]] on coding, reasoning, agentic tasks
- Native multimodal capability (text-only vs vision/audio) — Interconnects roundup implies text-only
- Whether the Dokpamo program funds further Motif model iterations at higher parameter counts
- Adoption by Korean-language + multilingual product teams; localization case studies

## Sources

- data/summaries/2026-09-09-morning.json (Interconnects MEDIUM "Latest open artifacts (#24): Motif-3, GLM-5.3, Hy4-preview and open model licenses" — Motif-3 314B total decoder-only MoE from Motif Technologies released under MIT license; researchFindings.additionalContext for Motif-3 — 314B / 13.2B active / ~256K context / Dokpamo sovereign AI program / Motif 2.6B technical report lineage / NVFP4-quantized variant / ~44 Artificial Analysis Intelligence Index / "hidden gem" Korean sovereign-AI open-weight flagship)
