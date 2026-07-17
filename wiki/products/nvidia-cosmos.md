---
name: NVIDIA Cosmos
description: NVIDIA's foundation-model family for physical AI — robotics, simulation, embodied agents; Cosmos 3 Edge (Jul 2026) extends the family into edge-tier real-time perception and navigation
type: product
---

# NVIDIA Cosmos

> **Type**: product
> **First mentioned**: 2026-04-16
> **Last updated**: 2026-07-17-evening (**Cosmos 3 Edge unveiled** — TLDR MEDIUM: ***"Nvidia has unveiled a new AI model, Cosmos 3 Edge, designed to help systems perceive and navigate physical environments in real time"***. First publicly framed *Cosmos 3 Edge* named product in this wiki; productizes the previously pre-announced Cosmos 3 family (2026-04-16 "summer 2026 release") into a concrete *edge-tier real-time perception + navigation* substrate variant. Structurally significant: (a) **Edge-tier specialization** — Cosmos family previously anchored *data-center-tier physical-AI foundation models*; Cosmos 3 Edge productizes an edge-form-factor variant, complementing the same-week [[jetson-thor]] T3000 + T2000 Blackwell edge modules (2026-07-17-morning) as a *paired-substrate-plus-model deployment* for edge robotics + autonomous systems; (b) **"Perceive and navigate physical environments in real time"** — first publicly framed *real-time-perception-plus-navigation* Cosmos capability framing, distinct from Cosmos 2.5's synthetic-data-generation and simulation-to-real transfer focus; (c) **Cross-signal SIGGRAPH 2026 amplification** — same-cycle NVIDIA SIGGRAPH 2026 activation plan (Jul 19-23) features Physical AI Day (Jul 21) and hands-on labs for physical AI — implies Cosmos 3 Edge is a load-bearing SIGGRAPH launch (see [[nvidia]]). Body-recovery items: (a) Cosmos 3 flagship vs Cosmos 3 Edge tier segmentation, (b) parameter count + hardware footprint + inference latency, (c) target use cases (humanoid navigation? autonomous mobile robots? drones? warehouse AMRs?), (d) whether Cosmos 3 Edge ships alongside Jetson Thor T3000 + T2000 as *paired substrate deployment* — *source: data/summaries/2026-07-17-evening.json (TLDR MEDIUM "xAI chaos 🔥, Gemini delays ⏳, earning judgement 👨‍💻")*)
> **Previously updated**: 2026-04-16
> **Status**: active
> **Related**: [[nvidia]], [[jetson-thor]], [[isaac-groot]], [[humanoid-robotics]], [[ai-hardware]], [[world-models]]

## Summary

NVIDIA Cosmos is a foundation-model family from [[nvidia]] purpose-built for physical AI — robotics, simulation-to-real transfer, and embodied agents. Cosmos 2.5 shipped GA in April 2026 with faster inference, simplified fine-tuning workflows, and Hugging Face Diffusers integration. In July 2026, NVIDIA unveiled **Cosmos 3 Edge**, an edge-tier variant designed to help systems *perceive and navigate physical environments in real time* — productizing the previously pre-announced Cosmos 3 family into an edge-form-factor deployment substrate that complements the same-week [[jetson-thor]] Blackwell edge modules.

## Timeline

- **2026-07-17-evening**: **Cosmos 3 Edge unveiled — new AI model designed to help systems perceive and navigate physical environments in real time**. First publicly framed *edge-tier* Cosmos variant + first publicly framed *real-time perception + navigation* capability framing. Pairs cycle-structurally with [[jetson-thor]] T3000 + T2000 Blackwell edge modules (same-week) as *paired substrate + model deployment* for edge robotics; likely load-bearing SIGGRAPH 2026 launch (Jul 21 Physical AI Day). See [[nvidia]] — *source: data/summaries/2026-07-17-evening.json (TLDR MEDIUM "xAI chaos 🔥, Gemini delays ⏳, earning judgement 👨‍💻")*
- **2026-04-16**: Cosmos 3 announced for summer 2026 release; Cosmos 2.5 available now with faster inference, simpler fine-tuning, Hugging Face Diffusers integration — *source: NVIDIA Newsletter "From SDG to physical AI: Turning simulation into real-world impact"*

## Key Facts

- Vendor: [[nvidia]]
- Purpose: foundation models for physical AI (robotics / simulation / embodied agents)
- Current releases: **Cosmos 2.5** (GA Apr 2026); **Cosmos 3 Edge** (unveiled Jul 2026 — edge-tier real-time perception + navigation)
- Cosmos 3 flagship: pre-announced Apr 2026 for summer 2026
- Integrations: Hugging Face Diffusers
- Paired substrate: complements [[jetson-thor]] T3000 + T2000 Blackwell edge modules for edge deployment

## Open Questions

- Cosmos 3 flagship vs Cosmos 3 Edge tier segmentation + release cadence
- Parameter count + hardware footprint + inference latency of Cosmos 3 Edge
- Target use cases (humanoid navigation? autonomous mobile robots? drones? warehouse AMRs?)
- Whether Cosmos 3 Edge ships as bundled runtime with Jetson Thor modules
- Positioning vs Google robotics + [[figure]] humanoid stack + [[isaac-groot]] humanoid reference design
- Pricing / licensing (open weights vs API-only)

## Sources

- data/summaries/2026-07-17-evening.json (TLDR MEDIUM "xAI chaos 🔥, Gemini delays ⏳, earning judgement 👨‍💻" — Nvidia has unveiled a new AI model Cosmos 3 Edge designed to help systems perceive and navigate physical environments in real time)
- data/summaries/2026-04-16.json (NVIDIA Newsletter — From SDG to physical AI: Turning simulation into real-world impact)
