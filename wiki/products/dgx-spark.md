---
name: DGX Spark
description: NVIDIA's $4,999 personal AI computer — 64GB memory, GB10 Grace Blackwell chip, two-unit cluster supports 200B-parameter models (Oct 2026)
type: product
---

# DGX Spark

> **Type**: product
> **Vendor**: [[nvidia]]
> **First mentioned**: 2026-10-06-morning
> **Last updated**: 2026-10-06-morning
> **Status**: launched
> **Related**: [[nvidia]], [[ai-hardware]], [[apple-m5]], [[ollama]]

## Summary

DGX Spark is [[nvidia]]'s $4,999 personal AI computer launched in early October 2026 — a 64GB variant of the previously announced 128GB DGX Spark personal-AI desktop, built around the same **GB10 Grace Blackwell** chip. Two 64GB units can be clustered to run **200B-parameter models** locally, bringing frontier-model-scale inference to a developer desktop. Positioned as a more affordable on-prem option for AI researchers and developers who want local inference on open-weight frontier models ([[deepseek-v4]], Kolibri, [[beam]]) without renting GPU cloud capacity.

## Timeline

- **2026-10-06-morning**: **Launch** — NVIDIA ships the 64GB DGX Spark at $4,999; same GB10 Grace Blackwell chip as the 128GB SKU; two-unit cluster runs 200B-parameter models. — *source: data/summaries/2026-10-06-morning.json (TLDR Hardware MEDIUM — Nvidia DGX Spark; daily-digest Tools & Products)*

## Key Facts

- **Vendor**: [[nvidia]]
- **Price**: $4,999
- **Memory**: 64GB
- **Chip**: GB10 Grace Blackwell
- **Clustering**: 2× 64GB units → run 200B-parameter models
- **Positioning**: lower-cost personal AI desktop vs 128GB SKU; local-inference substrate for open-weight frontier models
- **Launch URL**: blogs.nvidia.com/blog/local-ai-dgx-spark-64gb-sync/

## Open Questions

- Memory bandwidth + FP8/FP4 throughput specifications
- Comparison vs [[apple-m5]] / M5 Ultra on local-model inference tokens/sec
- Networking interconnect spec for 2-unit clustering
- Availability window + preorder pipeline + enterprise bulk pricing
- Software stack bundled (CUDA, TensorRT-LLM, local Ollama integration)
- Maximum cluster size beyond 2 units

## Sources

- data/summaries/2026-10-06-morning.json (TLDR Hardware MEDIUM "Meta gives Muse DIY HW 🔌, Musk confirms TSMC talks 🤝, Boston Dynamics' 4-finger hand ✋" — Nvidia has launched a $4,999 DGX Spark with 64GB of memory, which can cluster with a second unit to run 200B-parameter models, and is built on the same GB10 Grace Blackwell chip as the 128GB model; daily-digest Tools & Products)
