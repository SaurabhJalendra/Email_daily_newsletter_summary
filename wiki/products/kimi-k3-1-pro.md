---
name: Kimi K3.1 Pro
description: Moonshot AI's Oct 2026 flagship 3T-class multimodal mixture-of-experts model — 2.8T total / 104B active parameters, 1M-token context, post-trained from Kimi K3 with substantially more RL compute; scores 65.7% on Terminal-Bench 4.0 ahead of GPT-6 Astra; targets long-horizon coding + 3D/CAD + finance + factual accuracy; full weights expected Nov 4 2026
type: product
---

# Kimi K3.1 Pro

> **Type**: product
> **Vendor**: [[moonshot-ai]]
> **First mentioned**: 2026-10-25-morning
> **Last updated**: 2026-10-25-morning
> **Status**: active (released ~Oct 23–24 2026; full weights due Nov 4 2026)
> **Related**: [[moonshot-ai]], [[kimi-k3]], [[open-source-models]], [[kimi-work]], [[kimi-code-cli]]

## Summary

**Kimi K3.1 Pro** is [[moonshot-ai]]'s first entry in the K3.1 series and its most capable 3T-class open-weight model to date. Announced on 2026-10-23/24, the model is described as a **multimodal mixture-of-experts** system with approximately **2.8T total parameters** and **104B active parameters**, **native visual understanding**, and a **1-million-token context window**. It is **post-trained from [[kimi-k3]] with substantially more RL compute** and targets long-horizon coding, 3D creation, CAD, financial research and modeling, and other agentic knowledge-work tasks.

The headline evaluation claim is a score of **65.7% on Terminal-Bench 4.0**, placing K3.1 Pro **ahead of GPT-6 Astra** on that benchmark; Moonshot additionally highlights strength in 3D and CAD work, finance, and factual accuracy. Full weights are scheduled for public release by **November 4, 2026**.

Structurally, K3.1 Pro extends the K3 architectural lineage (Kimi Delta Attention + Attention Residuals + Stable LatentMoE / 896 experts) into a **more-RL-compute post-training generation** — productizing Moonshot's continued investment in the agentic + long-horizon workflow substrate at the open-weight-frontier tier, alongside late-2026 Chinese open-weight peers such as [[minimax-m3-1-flash]], [[deepseek-v4-1-flash]], and GLM-5.3.

## Timeline

- **2026-10-25-morning**: **K3.1 Pro canonical launch anchor** — NLP Newsletter HIGH *"AI Agents Weekly: Claude Duet, Kimi K3.1 Pro, MiniMax M3.1 Flash, Recursive Flint, DeepSeek DeepInfer, Ramp Laminar, Mercury 3, …"* leads with K3.1 Pro: *"Moonshot AI has launched Kimi K3.1 Pro, its most capable 3T-class model, with full weights due by November 4. It is a multimodal Mixture-of-Experts model with 2.8T total and 104B active parameters, a 1M-token context, and is post-trained from Kimi K3 with substantially more RL compute. This model achieves a score of 65.7% on Terminal-Bench 4.0, ahead of GPT-6 Astra, and also excels in 3D and CAD work, finance, and factual accuracy."* researchFindings.additionalContext canonicalizes the launch date (2026-10-23/24), the 3T-class open-weight framing, and multimodal MoE architecture. First-in-wiki: (a) **Terminal-Bench 4.0 65.7% ahead of GPT-6 Astra** concrete benchmark-score canonical anchor pair; (b) **"Post-trained from Kimi K3 with substantially more RL compute"** concrete training-lineage canonical anchor — productizes K3.1 Pro as *continuation + RL-scaled sibling* of [[kimi-k3]] rather than a from-scratch new model; (c) **Full-weights-by-Nov-4-2026** concrete open-weight-release-date canonical anchor; (d) **3D + CAD + finance + factual-accuracy four-vertical capability-claim** canonical anchor cluster — distinct from prior K3 coding-and-agentic-first positioning. See [[moonshot-ai]] + [[kimi-k3]] + [[open-source-models]] — *source: data/summaries/2026-10-25-morning.json (NLP Newsletter HIGH "AI Agents Weekly: Claude Duet, Kimi K3.1 Pro, MiniMax M3.1 Flash, Recursive Flint, DeepSeek DeepInfer, Ramp Laminar, Mercury 3, and More"; researchFindings.additionalContext — Kimi K3.1 Pro)*

## Key Facts

- **Vendor**: [[moonshot-ai]]
- **Series position**: First release in the K3.1 series; successor to [[kimi-k3]]
- **Architecture**: Multimodal Mixture-of-Experts; native visual understanding
- **Total parameters**: ~2.8T
- **Active parameters**: ~104B
- **Context window**: 1,000,000 tokens
- **Training lineage**: Post-trained from [[kimi-k3]] with substantially more RL compute
- **Headline benchmark**: 65.7% on Terminal-Bench 4.0 — ahead of GPT-6 Astra
- **Claimed strengths**: Long-horizon coding, 3D/CAD, finance, factual accuracy
- **Announcement date**: 2026-10-23 / 24
- **Full-weights release**: by 2026-11-04

## Open Questions

- License terms for the Nov-4 open-weight release — Kimi K3 License, Apache 2.0, or new terms?
- API pricing structure (cached vs non-cached input/output) and comparisons to [[kimi-k3]] pricing
- Named integrations at launch — Ollama Cloud + OpenRouter + Baseten + Fireworks hosting
- Independent benchmark replication for the 65.7% Terminal-Bench 4.0 claim
- Which attention / expert-routing primitives from K3 are retained vs modified in K3.1 Pro
- Multimodal input scope — image only, or also video / audio?
- Positioning vs [[kimi-k3]] on hallucination rate, HLE, DeepSWE, and SWE-Bench Pro
- Hardware requirements for self-hosted deployment (K3 required 64+ accelerators)

## Sources

- data/summaries/2026-10-25-morning.json (NLP Newsletter HIGH "AI Agents Weekly: Claude Duet, Kimi K3.1 Pro, MiniMax M3.1 Flash, Recursive Flint, DeepSeek DeepInfer, Ramp Laminar, Mercury 3, and More"; researchFindings.additionalContext — Kimi K3.1 Pro; attribution Moonshot AI / Kimi technical blog + Kimi API documentation)
