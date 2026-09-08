---
name: Extropic
description: Hardware startup pitching thermodynamic sampling units (TSU) for ~10,000× more energy-efficient AI
type: company
---

# Extropic

> **Type**: company
> **First mentioned**: 2025-10-30
> **Last updated**: 2026-09-08-morning (Z1 chip unveiled — probabilistic sub-threshold CMOS technology for transformer-inference energy efficiency; status: stale → active)
> **Status**: active
> **Related**: [[ai-hardware]], [[nvidia]]

## Summary

Extropic is a hardware startup whose pitch is a new chip class — the **thermodynamic sampling unit (TSU)** — designed around probabilistic computation rather than deterministic processing. The headline claim, surfaced in late October 2025: AI workloads run with up to 10,000× less energy than on current GPUs. Extropic shipped its first development kit to AI labs and weather-modeling companies, plus open-source tooling for outside researchers to validate the approach. It belongs in the same "alternative compute" cluster as quantum-control plays (NVIDIA Ising, IBM) and analog accelerators — speculative, but with a concrete dev-kit footprint.

## Timeline

- **2026-09-08-morning**: **Z1 chip unveiled — probabilistic sub-threshold CMOS technology to improve transformer-inference energy efficiency**. TLDR AI HIGH: *"Extropic unveils the Z1 chip to improve energy efficiency in transformer inference by leveraging probabilistic sub-threshold CMOS technology"* + linked writeup at `extropic.ai/writing/z1t/` (referenced as *"Z1T"*). First-in-wiki: (a) **Z1 (Z1T) chip canonical named-product anchor** — extends the multi-cycle Extropic TSU-substrate framing with a *concrete-named product-family anchor* (Z1/Z1T = second-generation productization tier after the 2025-10-30 dev-kit); (b) **"Probabilistic sub-threshold CMOS" concrete-technology-substrate canonical anchor** — sharpens the multi-cycle *"thermodynamic sampling unit (TSU)"* generic-class framing with a *concrete sub-threshold-CMOS + probabilistic-computation architectural-substrate anchor* (structurally significant — sub-threshold CMOS is a well-known low-power regime; the Z1 productizes it specifically for *transformer-inference-energy-efficiency* tier — first-in-wiki *concrete transformer-inference-specific probabilistic-CMOS canonical anchor*); (c) **Transformer-inference-specific positioning canonical anchor** — sharpens the multi-cycle Extropic *"AI workloads"* generic framing with a *concrete transformer-inference target-workload substrate anchor* (aligns with the multi-cycle [[llm-inference-optimization]] arc + competes structurally with the low-power inference-accelerator cohort). See [[ai-hardware]] + [[llm-inference-optimization]] + [[nvidia]] — *source: data/summaries/2026-09-08-morning.json (TLDR AI HIGH "Claude proves Fermat 🧮, automated AI researcher 🔬, Z1 efficiency chip ⚡")*

- **2025-10-30**: TSU announcement — 10,000× energy-efficiency claim; first dev-kit shipments to AI labs and weather companies; open-source research tooling — *source: The Rundown AI "Extropic's 10,000x AI energy breakthrough"; TLDR Newsletter "OpenAI explores $1T IPO"*

## Key Facts

- Compute class: thermodynamic sampling unit (TSU); probabilistic rather than deterministic
- Headline efficiency claim: ~10,000× less energy vs current GPUs
- First customers: AI labs, weather-modeling companies
- Open-source angle: tooling so researchers can independently test

## Open Questions

- Is the 10,000× efficiency claim realized end-to-end, or only on a narrow class of probabilistic workloads?
- Production scaling timeline beyond dev-kit?
- Programming model — what does an LLM trained-/run-on a TSU look like?
- Funding and runway?

## Sources

- data/summaries/2026-09-08-morning.json (TLDR AI HIGH "Claude proves Fermat 🧮, automated AI researcher 🔬, Z1 efficiency chip ⚡")
- data/summaries/2025-10-30.json (The Rundown AI — Extropic's 10,000x AI energy breakthrough; TLDR Newsletter — OpenAI explores $1T IPO)
