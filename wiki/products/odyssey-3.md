---
name: Odyssey 3
description: Odyssey's Sep 2026 general-purpose world model that can control robot arms, humanoids, self-driving cars, drones, and games from a single substrate
type: product
---

# Odyssey 3

> **Type**: product
> **Vendor**: Odyssey
> **First mentioned**: 2026-09-16-evening
> **Last updated**: 2026-09-16-evening
> **Status**: active
> **Related**: [[world-models]], [[marble]], [[atlas-world-labs]], [[hydra-0]], [[nvidia-cosmos]], [[humanoid-robotics]], [[computer-use]]

## Summary

Odyssey 3 is Odyssey's Sep 2026 **general-purpose world model** that can drive multiple embodiment classes from a single substrate — **robot arms, humanoids, self-driving cars, drones, and games**. Structurally distinct from prior world models (e.g. [[marble]] persistent-3D-scene generation, [[atlas-world-labs]] world-generation/reconstruction/simulation) in that Odyssey 3 is *controller-tier*: it takes actions in embodied environments rather than only generating or simulating them. Sits alongside NVIDIA's [[hydra-0]] as the mid-Sep-2026 canonical anchor for *world-models-as-cross-embodiment-controller* — five embodiment classes (arms + humanoids + AVs + drones + games) covered by a single model rather than per-embodiment fine-tunes.

Set to release in the coming weeks after the initial 2026-09-16 announcement.

## Timeline

- **2026-09-16-evening**: **Launch — Odyssey 3 world model for cross-embodiment control across robot arms, humanoids, self-driving cars, drones, and games**. The Rundown AI MEDIUM: *"Odyssey introduces Odyssey 3, a world model that can control robot arms, humanoids, self-driving cars, drones, and games, set to release in the coming weeks"*. Forward Future MEDIUM (Tools & Products): *"Odyssey introduces Odyssey 3, a world model that can control robot arms, humanoids, self-driving cars, drones, and games"*. See [[world-models]] + [[hydra-0]] + [[atlas-world-labs]] + [[humanoid-robotics]] — *source: data/summaries/2026-09-16-evening.json (The Rundown AI MEDIUM "⚡ ChatGPT co-creator launches new kind of AI model"; Forward Future MEDIUM "Salesforce gives enterprise AI a new brain")*

## Key Facts

- **Vendor**: Odyssey
- **Model class**: world model — cross-embodiment controller (arms + humanoids + AVs + drones + games)
- **Release timing**: announced 2026-09-16, ships in the following weeks
- **Positioning**: single-substrate cross-embodiment control (vs per-embodiment fine-tunes)

## Open Questions

- Parameter count + training data regime (real teleoperated data, sim-only, hybrid?)
- Whether Odyssey 3 is open-weight or closed
- Named benchmarks vs [[nvidia-cosmos]] Cosmos 3 Edge + [[hydra-0]] on VLA tasks
- Concrete robot platforms + car platforms + game engines integrated at launch
- Company backing / funding — who is Odyssey structurally?
- Distribution — API, on-device weights, or vertical partner-only?

## Sources

- data/summaries/2026-09-16-evening.json (The Rundown AI MEDIUM "⚡ ChatGPT co-creator launches new kind of AI model"; Forward Future MEDIUM "Salesforce gives enterprise AI a new brain")
