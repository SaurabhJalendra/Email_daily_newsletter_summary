---
name: Laguna S
description: Poolside AI's open-weights foundation model family — Laguna S 2.1 is a 118B MoE with 8B active params + 1M context, positioned as cheaper than Deepseek v4 Flash and better than V4 Pro; candidate for strongest American open-weight model
type: product
---

# Laguna S

> **Type**: product
> **Vendor**: [[poolside-ai]]
> **First mentioned**: 2026-07-23-evening
> **Last updated**: 2026-08-03-morning (**Interconnects HIGH #23 (Nathan Lambert) canonical Sunday-essay lands *"Laguna-S-2.1, a 118B-A8B MoE from Poolside, is pre- and post-trained to fit on a DGX Spark"* first publicly framed *concrete DGX-Spark-fit anchor* + places Laguna-S-2.1 in the mid-2026 five-lab Pareto-frontier cohort alongside [[kimi-k3]] + [[inkling]] + [[hy3]] + [[deepseek-v4]] V4-Flash-0731**. Interconnects HIGH: *"Laguna-S-2.1, a 118B-A8B MoE from Poolside, is pre- and post-trained to fit on a DGX Spark"* + framed as one of five *"open models on the Pareto frontier"*. First publicly framed on this cycle: (a) *"pre- and post-trained to fit on a DGX Spark"* concrete-hardware-fit anchor — first publicly framed *DGX-Spark-fit deployment-tier anchor* on Laguna-S in this wiki; sharpens the launch-cycle *"cheaper than Deepseek v4 Flash"* framing with an *explicit-hardware-envelope target* (Nvidia DGX Spark = compact single-node reference platform); positions Laguna-S as *purpose-built for compact-node self-hosting* rather than large-cluster deployment; (b) *Interconnects five-model Pareto-frontier cohort recoverage* — Laguna-S as one of five open-weight labs on the Pareto frontier canonicalizes its *mid-2026 open-weights-frontier-diversification cohort* positioning in Nathan Lambert's authoritative Sunday essay. Structurally significant two ways: (i) **DGX-Spark-fit deployment-tier anchor validates Poolside's Model-Factory efficiency thesis** — [[poolside-ai]]'s parameter-efficiency claim ("beats Thinking Machines' Inkling ~10× larger") extends into a *concrete-hardware-envelope target* (DGX Spark) that competing open-frontier models (Kimi K3 requires 64+ accelerators; Inkling day-0 on GB300 NVL72) do not fit; (ii) **Nathan Lambert Sunday-essay canonical validation** — Interconnects #23 validates Poolside as a legitimate Pareto-frontier open-weights lab alongside [[thinking-machines]] + [[moonshot-ai]] + [[deepseek]] + Tencent. See [[poolside-ai]] + [[open-source-models]] + [[kimi-k3]] + [[inkling]] + [[nvidia]] + [[deepseek-v4]] + [[hy3]] — *source: data/summaries/2026-08-03-morning.json (Interconnects HIGH "Latest open artifacts (#23): Laguna S2.1, Inkling, & Kimi K3 show the utility of open models on the Pareto frontier")*)
> **Previously updated**: 2026-07-23-evening (created — AINews HIGH release framing + Latent Space HIGH long-form Model Factory interview canonicalize Laguna S 2.1 = 118B MoE / 8B active params / 1M-token context as "cheaper than Deepseek v4 Flash, better than V4 Pro" + community candidate for "strongest American open-weight model")
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
