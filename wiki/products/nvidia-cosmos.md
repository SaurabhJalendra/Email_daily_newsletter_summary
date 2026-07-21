---
name: NVIDIA Cosmos
description: NVIDIA's foundation-model family for physical AI — robotics, simulation, embodied agents; Cosmos 3 Edge (Jul 2026) extends the family into edge-tier real-time perception and navigation
type: product
---

# NVIDIA Cosmos

> **Type**: product
> **First mentioned**: 2026-04-16
> **Last updated**: 2026-07-21-evening (**Cycle-2 evening — Cosmos 3 Edge disclosed as **4B-parameter open-source world model** small enough to run directly on robots + predicts scene changes + plans actions**. The Rundown AI HIGH: ***"Nvidia has launched Cosmos 3 Edge, a 4B-parameter open-source world model small enough to run directly on robots, allowing them to predict scene changes and plan actions"***. First publicly framed on this cycle: (a) *4B-parameter concrete-size anchor* on Cosmos 3 Edge — resolves the 2026-07-17-evening body-recovery item on parameter count; (b) *open-source* license posture on Cosmos 3 Edge — first publicly framed on this variant in this wiki, structurally significant because NVIDIA typically ships proprietary; open-source posture positions Cosmos 3 Edge as a *counter-anchor* to closed-frontier-labs' robot-tier models + widens robotics-developer adoption; (c) *"run directly on robots"* deployment framing sharpens the prior *"perceive and navigate physical environments in real time"* framing into *on-device world-model tier* — no cloud-tether required; (d) *"predict scene changes + plan actions"* extends the perception capability into *predictive + planning* — makes Cosmos 3 Edge a canonical *action-oriented small-open-world-model* substrate that pairs with [[jetson-thor]] edge modules. Structurally significant three ways: (i) **4B open-source + on-device robot deployment closes gap with open-weights world-model tier** — extends the [[world-models]] arc from the closed-tier [[marble]] (world-labs) + Meta WorldGen into an *open-source-tier NVIDIA-anchored small-world-model on robots*; (ii) **"Small enough to run directly on robots" positions Cosmos 3 Edge as the world-model analog of on-device LLM tier** — mirrors the [[bonsai-27b]] 27B-on-phone tier at the world-model layer; (iii) **AINews confirms world models as "practical agent-training primitive"** — AINews MEDIUM: *"World models are becoming a practical agent-training primitive, with the potential to improve sample efficiency, tool use, generalization, and inference-time compute utilization"* — first publicly framed *world-models-as-agent-training-primitive* thesis-tier canonical framing in this wiki. See [[world-models]] + [[nvidia]] + [[jetson-thor]] — *source: data/summaries/2026-07-21-evening.json (The Rundown AI HIGH "🧮 Claude helps disprove 87-year math problem"; AINews MEDIUM "[AINews] not much happened today")*)
> **Previously updated**: 2026-07-17-evening (**Cosmos 3 Edge unveiled** — TLDR MEDIUM: ***"Nvidia has unveiled a new AI model, Cosmos 3 Edge, designed to help systems perceive and navigate physical environments in real time"***. First publicly framed *Cosmos 3 Edge* named product in this wiki; productizes the previously pre-announced Cosmos 3 family (2026-04-16 "summer 2026 release") into a concrete *edge-tier real-time perception + navigation* substrate variant. Structurally significant: (a) **Edge-tier specialization** — Cosmos family previously anchored *data-center-tier physical-AI foundation models*; Cosmos 3 Edge productizes an edge-form-factor variant, complementing the same-week [[jetson-thor]] T3000 + T2000 Blackwell edge modules (2026-07-17-morning) as a *paired-substrate-plus-model deployment* for edge robotics + autonomous systems; (b) **"Perceive and navigate physical environments in real time"** — first publicly framed *real-time-perception-plus-navigation* Cosmos capability framing, distinct from Cosmos 2.5's synthetic-data-generation and simulation-to-real transfer focus; (c) **Cross-signal SIGGRAPH 2026 amplification** — same-cycle NVIDIA SIGGRAPH 2026 activation plan (Jul 19-23) features Physical AI Day (Jul 21) and hands-on labs for physical AI — implies Cosmos 3 Edge is a load-bearing SIGGRAPH launch (see [[nvidia]]). Body-recovery items: (a) Cosmos 3 flagship vs Cosmos 3 Edge tier segmentation, (b) parameter count + hardware footprint + inference latency, (c) target use cases (humanoid navigation? autonomous mobile robots? drones? warehouse AMRs?), (d) whether Cosmos 3 Edge ships alongside Jetson Thor T3000 + T2000 as *paired substrate deployment* — *source: data/summaries/2026-07-17-evening.json (TLDR MEDIUM "xAI chaos 🔥, Gemini delays ⏳, earning judgement 👨‍💻")*)
> **Previously updated**: 2026-04-16
> **Status**: active
> **Related**: [[nvidia]], [[jetson-thor]], [[isaac-groot]], [[humanoid-robotics]], [[ai-hardware]], [[world-models]]

## Summary

NVIDIA Cosmos is a foundation-model family from [[nvidia]] purpose-built for physical AI — robotics, simulation-to-real transfer, and embodied agents. Cosmos 2.5 shipped GA in April 2026 with faster inference, simplified fine-tuning workflows, and Hugging Face Diffusers integration. In July 2026, NVIDIA unveiled **Cosmos 3 Edge**, an edge-tier variant designed to help systems *perceive and navigate physical environments in real time* — productizing the previously pre-announced Cosmos 3 family into an edge-form-factor deployment substrate that complements the same-week [[jetson-thor]] Blackwell edge modules.

## Timeline

- **2026-07-21-evening**: **Cosmos 3 Edge = 4B-parameter open-source world model small enough to run directly on robots + predicts scene changes + plans actions** (The Rundown AI HIGH). AINews MEDIUM confirms *"World models are becoming a practical agent-training primitive"* — first publicly framed *world-models-as-agent-training-primitive* thesis-tier canonical framing. Resolves prior parameter-count body-recovery item + establishes open-source posture on Cosmos 3 Edge. See [[world-models]] — *source: data/summaries/2026-07-21-evening.json (The Rundown AI HIGH "🧮 Claude helps disprove 87-year math problem"; AINews MEDIUM "[AINews] not much happened today")*

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
