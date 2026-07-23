---
name: Laguna S
description: Poolside AI's open-weights foundation model family — Laguna S 2.1 is a 118B MoE with 8B active params + 1M context, positioned as cheaper than Deepseek v4 Flash and better than V4 Pro; candidate for strongest American open-weight model
type: product
---

# Laguna S

> **Type**: product
> **Vendor**: [[poolside-ai]]
> **First mentioned**: 2026-07-23-evening
> **Last updated**: 2026-07-23-evening (created — AINews HIGH release framing + Latent Space HIGH long-form Model Factory interview canonicalize Laguna S 2.1 = 118B MoE / 8B active params / 1M-token context as "cheaper than Deepseek v4 Flash, better than V4 Pro" + community candidate for "strongest American open-weight model")
> **Status**: active
> **Related**: [[poolside-ai]], [[deepseek-v4]], [[open-source-models]], [[neo-labs]], [[thinking-machines]], [[kimi-k3]]

## Summary

Laguna S is [[poolside-ai]]'s open-weights foundation model family, most recently released as **Laguna S 2.1** — a **118B parameter MoE** with **8B active parameters per token** and a **context window of up to 1M tokens**. AINews frames the release as *"cheaper than Deepseek v4 Flash, better than Deepseek v4 Pro"*; Reddit community-tier discussion positions it as a candidate for the *"strongest American open-weight model"*. Prior model in the family — Laguna M.1 / XS.2 — was covered in a Latent Space Paper Club deep dive per Kant. Laguna S is targeted at local inference on high-memory systems and demonstrates Poolside's *"Model Factory"* rapid-iteration methodology. Latent Space frames the parent Laguna S release as **"beating [[thinking-machines]]' recent release nearly 10 times their size"** — a concrete open-vs-open parameter-efficiency anchor (Poolside 118B vs Thinking Machines ~1T [[inkling]]).

## Timeline

- **2026-07-23-evening**: **Laguna S 2.1 released** — 118B MoE, 8B active params, 1M context, positioned as *"cheaper than Deepseek v4 Flash, better than V4 Pro"*; Reddit community-tier candidate for *"strongest American open-weight model"*; Latent Space long-form interview canonicalizes Poolside "Model Factory" approach and cites Laguna S *"beating Thinking Machines' recent release nearly 10 times their size"*. Discussions include benchmark-claim scrutiny + open-vs-closed model competitive dynamics + distillation-ethics debate (parallel to White House-vs-Moonshot [[kimi-k3]] distillation accusation). See [[poolside-ai]] + [[open-source-models]] — *source: data/summaries/2026-07-23-evening.json (AINews HIGH "[AINews] Laguna S 2.1 Released: Cheaper than Deepseek v4 Flash, Better than V4 Pro"; Latent Space HIGH "Inside the Model Factory — Eiso Kant, Poolside AI")*

## Key Facts

- Vendor: [[poolside-ai]]
- Latest release: Laguna S 2.1 (Jul 2026)
- Architecture: 118B parameter MoE with 8B active parameters per token
- Context window: up to 1M tokens
- Positioning: cheaper than [[deepseek-v4]] Flash, better than V4 Pro; candidate for "strongest American open-weight model"
- Parameter-efficiency anchor: beats [[thinking-machines]] [[inkling]] (~1T) at ~1/10 the size per Latent Space
- Prior family versions: Laguna M.1, Laguna XS.2 (Technical Report + Latent Space Paper Club deep-dive coverage)
- Local inference: competitive option on high-memory systems

## Open Questions

- Concrete benchmark scores (SWE-bench Pro, AECV-Bench, Artificial Analysis Intelligence Index) vs Deepseek v4 Flash/Pro + [[kimi-k3]] + [[inkling]]
- Open-weights license terms + Hugging Face distribution URL (announcement references Hugging Face URL huggingface.co/Nanbeige/Nanbeige4.2-3B — potentially mislabeled; needs verification)
- Cost anchor: exact $/M input + $/M output on Poolside's own inference tier
- Whether Laguna S 2.1 ships coding/reasoning-tier fine-tunes alongside base weights
- Comparison methodology on the "cheaper than Deepseek v4 Flash, better than V4 Pro" claim

## Sources

- data/summaries/2026-07-23-evening.json (AINews HIGH "[AINews] Laguna S 2.1 Released: Cheaper than Deepseek v4 Flash, Better than V4 Pro"; Latent Space HIGH "Inside the Model Factory — Eiso Kant, Poolside AI")
