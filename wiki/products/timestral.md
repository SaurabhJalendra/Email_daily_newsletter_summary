---
name: Timestral
description: Mistral's Oct 2026 open family of probabilistic time-series foundation models (5M–209M parameters) for forecasting and related time-series applications
type: product
---

# Timestral

> **Type**: product
> **Vendor**: [[mistral]]
> **First mentioned**: 2026-10-29-evening
> **Last updated**: 2026-10-29-evening
> **Status**: open-weight (released Oct 2026)
> **Related**: [[mistral]], [[open-source-models]], [[tabular-foundation-models]], [[enterprise-ai]]

## Summary

**Timestral** is Mistral's open family of probabilistic **time-series foundation models**, released Oct 2026. Parameter sizes range from roughly **5M to 209M**, targeting forecasting and other structured time-series workloads — demand planning, anomaly detection, finance, industrial monitoring. Timestral extends Mistral's open-weight product ladder with a *forecasting-vertical seventh tier* alongside [[ministral-3]] edge, Mistral Medium 3.1 mid-tier, [[mistral-large-4]] frontier, [[leanstral]] theorem-proving, [[robostral-navigate]] robotics, [[shieldstral]] moderation, [[mistral-ocr-4]] document intelligence, and [[voxtral-3]] voice.

The release matters because **open, compact forecasting models broaden access to foundation-model techniques for structured-data workloads** that have historically relied on per-dataset bespoke models. Sits in the same zero-shot-in-context-learning for structured data substrate as the [[tabular-foundation-models]] cohort (TabFM, TabPFN, KumoRFM, TabICL), extended into the time-series vertical.

## Timeline

- **2026-10-29-evening**: **Timestral released** — open probabilistic time-series foundation model family, 5M–209M parameter range, targeting forecasting and related applications. Framed by AI Weekly as broadening access to foundation-model techniques for demand planning, anomaly detection, finance, and industrial monitoring. — *source: data/summaries/2026-10-29-evening.json (researchFindings.missingStories — Mistral releases open Timestral time-series models via AI Weekly)*

## Key Facts

- **Vendor**: [[mistral]]
- **Family**: probabilistic time-series foundation models
- **Parameter range**: ~5M to ~209M
- **Target workloads**: forecasting, demand planning, anomaly detection, finance, industrial monitoring
- **Distribution**: open-weight (consistent with Mistral's open-weight product ladder)
- **Peer substrate**: [[tabular-foundation-models]] cohort (TabFM / TabPFN / KumoRFM / TabICL) — Timestral extends foundation-model techniques to time-series alongside the tabular-structured-data arc

## Open Questions

- Specific architecture (transformer? state-space? other?) and probabilistic head formulation
- Named benchmarks (M4, M5, Monash, etc.) and vendor-reported numbers
- License (Apache 2.0 / MIT / Mistral Research License?)
- Context length + horizon support across the 5M–209M sizes
- Fine-tuning + domain-adaptation recipes

## Sources

- data/summaries/2026-10-29-evening.json (researchFindings.missingStories — Mistral releases open Timestral time-series models, Mistral announcement reported by AI Weekly Oct 29 2026)
