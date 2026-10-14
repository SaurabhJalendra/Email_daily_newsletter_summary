---
name: Dyna Robotics
description: Robotics startup building general-purpose world-action models for hour-long autonomous physical work; Dyna-2 WAM pretrained on 1M+ hours of egocentric human video; co-founder Jason Ma; Best Western and Din Tai Fung among early deploy customers
type: company
---

# Dyna Robotics

> **Type**: company
> **First mentioned**: 2026-08-11-evening (as vendor of [[dyna-2]])
> **Last updated**: 2026-10-14-morning (**Page created — Latent.Space podcast with Chief Scientist Jason Ma canonicalizes Dyna Robotics as *canonical mid-Oct-2026 World-Action-Model substrate operator* alongside concrete-Dyna-2.1-semi-humanoid-ship + concrete-hour-long-autonomy-claim + concrete-Best-Western + concrete-Din-Tai-Fung commercial customer-partners + concrete own-actuator-hardware roadmap + concrete-"hundreds-of-robots-next-year" deployment target**)
> **Status**: active
> **Related**: [[dyna-2]], [[dyna-2-1]], [[world-action-models]], [[humanoid-robotics]], [[industrial-robotics]], [[1x-technologies]], [[figure]], [[agility-robotics]], [[walden-robotics]]

## Summary

Dyna Robotics is a robotics startup building **general-purpose physical agents** driven by its proprietary **World-Action Model (WAM)** family — a foundation-model class trained to predict how actions change the physical world before a robot acts, connecting visual understanding with contact physics and manipulation. Co-founder and Chief Scientist **Jason Ma** has become the public face of the company's thesis that scaling **egocentric human video** data produces predictable improvements in robot performance — a *human-to-robot scaling law* intended to reduce the industry's dependence on expensive teleoperation data.

The flagship product is [[dyna-2]], a WAM pretrained on **over one million hours of egocentric human video**. Dyna reports hour-long autonomy on ultra-long real-world workflows when Dyna-2 is paired with its agentic system. The company has graduated from foundation-model-tier productization into shipped workflow-level systems with the Sep 29 2026 reveal of **[[dyna-2-1]]**, a semi-humanoid physical agent that executes full real-world shifts such as commercial laundry. Dyna is also building its own hardware, including actuators, to co-design the model and the body — and has named **Best Western** and **Din Tai Fung** as deploy customers, with a stated goal of deploying hundreds of robots over the following year.

## Timeline

- **2026-10-14-morning**: **Latent.Space podcast *"Dyna-2: General Purpose Physical Agents with Hour-Long Autonomy — Jason Ma, Dyna Robotics"* canonicalizes Dyna Robotics as *canonical mid-Oct-2026 WAM-foundation-plus-shipping-platform operator*** — first-in-wiki concrete-named-customer-pair ([[best-western]]/Best Western + Din Tai Fung) + concrete own-hardware-and-actuator-roadmap + concrete "hundreds of robots next year" deployment goal + concrete synthetic-data-and-simulation acceleration strategy + concrete general-model-over-task-specialization positioning. Also canonicalizes **[[dyna-2-1]]** as *concrete semi-humanoid-tier shipped physical-agent substrate* on top of Dyna-2 agentic system; Dyna-2.1 ran *uncut* commercial-laundry shift footage at reveal — *source: data/summaries/2026-10-14-morning.json (Latent.Space MEDIUM "Dyna-2: General Purpose Physical Agents with Hour-Long Autonomy — Jason Ma, Dyna Robotics")*
- **2026-08-11-evening**: **Dyna-2 WAM achieves 87% real-world zero-shot pass rate on unseen robot hardware after pretraining on 1M+ hours of human video** — Humanoids Daily framing *"Dyna-2 Proves Scaling Laws for Robotics"*. See [[dyna-2]] — *source: data/summaries/2026-08-11-evening.json*

## Key Facts

- **Chief Scientist**: Jason Ma (podcast guest, Latent.Space 2026-10-13-evening episode)
- **Flagship product**: [[dyna-2]] — World-Action Model pretrained on >1M hours of egocentric human video
- **Latest system**: [[dyna-2-1]] — semi-humanoid physical agent on top of Dyna-2 agentic system, revealed Sep 29 2026; demonstrated full commercial-laundry-shift footage uncut
- **Core thesis**: *human-to-robot scaling law* — scaling human-video data predictably enhances robot action accuracy, reducing dependence on expensive teleoperation data
- **Hardware strategy**: building own hardware including actuators to optimize performance and reduce reliance on external suppliers
- **Model strategy**: general-purpose foundation model adaptable to many tasks rather than task-specialized robots
- **Named deploy customers**: Best Western, Din Tai Fung
- **Deployment target**: hundreds of robots in the next year (per Latent.Space podcast)
- **Simulation + synthetic data**: exploring both to accelerate progress and reduce real-world data-collection cost

## Open Questions

- Funding status + total raised + lead investors + valuation
- Headcount + locations
- Named benchmark comparisons vs [[figure]] [[helix-2-5]] + [[1x-technologies]] + [[gemini-robotics-2]] + [[nvidia-cosmos]] on standardized evals
- Pricing / commercial model (robot-as-a-service, per-robot sale, workflow-outcome contracts?)
- Dyna-2.1 hardware spec — actuator count, payload, battery life, degrees of freedom
- Whether weights are open-source or vendor-hosted only (likely vendor-hosted given deployment model)
- Which specific actuator primitives Dyna is building in-house vs sourcing from external suppliers

## Sources

- data/summaries/2026-10-14-morning.json (Latent.Space MEDIUM "Dyna-2: General Purpose Physical Agents with Hour-Long Autonomy — Jason Ma, Dyna Robotics" — WAM + hour-long autonomy + 1M+ hours egocentric human video + Dyna-2.1 semi-humanoid + commercial laundry shift + Best Western + Din Tai Fung + own actuators + hundreds-of-robots-next-year + general-purpose model + synthetic data + simulation)
- data/summaries/2026-08-12-morning.json (TLDR AI HIGH "Muse Glimmer ✨, OpenAI Cyber 🛡️, Claude vs Riemann Hypothesis 🧠" — Dyna-2 scaling-laws-for-robotics)
- data/summaries/2026-08-11-evening.json (TLDR MEDIUM; AINews HIGH "[AINews] Muse Glimmer and Spark" — Dyna-2 87% zero-shot pass rate on unseen robot hardware; 1M+ hours of human video)
