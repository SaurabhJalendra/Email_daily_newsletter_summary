---
name: Praxis-1
description: Runway's 27-billion-parameter robotics world-action model; jointly predicts video and actions; weights + fine-tuning code open-sourced Nov 2026; 46.2% success on RoboLab-120
type: product
---

# Praxis-1

> **Type**: product
> **Vendor**: [[runway]]
> **First mentioned**: 2026-10-06-morning
> **Last updated**: 2026-11-13-evening (**Open weights + fine-tuning code release canonical anchor + 27B-parameter concrete scale anchor + 46.2% RoboLab-120 success rate across 1,200 benchmark episodes concrete-benchmark anchor + video-plus-action joint-prediction canonical architecture anchor** — TLDR MEDIUM daily-digest Top Story #5: *"Runway has released the weights and fine-tuning code for Praxis-1, a 27-billion-parameter robotics model, which predicts video and actions, achieving a 46.2% success rate in benchmark episodes"*. researchFindings.missingStories: *"Runway released the weights and fine-tuning code for Praxis-1, a 27-billion-parameter robotics model that jointly predicts video and actions. Runway reported a 46.2% success rate across 1,200 RoboLab-120 benchmark episodes"* + whyItMatters: *"The release gives researchers and robotics practitioners access to a sizable vision-action model for local experimentation, adaptation, and benchmark comparisons"*. First-in-wiki: (a) **27B-parameter concrete scale anchor** — graduates the 10-06-morning Praxis-1 launch anchor from *video-pretraining-to-control-robots canonical framing tier* into a *concrete 27B-parameter + concrete 46.2%-RoboLab-120-benchmark + concrete 1,200-episode canonical anchor tier*; (b) **Weights + fine-tuning code open-sourced** canonical open-weights productization anchor — productizes Runway as *canonical early-Nov-2026 concrete-first-video-generation-vendor-ships-open-weight-robotics-world-action-model substrate operator*; pairs cycle-structurally with [[gr00t-2]] (NVIDIA GEAR Lab) + [[gemini-robotics-2]] + [[isaac-groot]] + [[lamem-vla]] robotics-foundation-model cohort as *canonical early-Nov-2026 cross-vendor robotics-FM canonical anchor cluster with the first open-weight entry on the video-generation-vendor side*; (c) **46.2% RoboLab-120 canonical named-benchmark anchor** — first-in-wiki concrete robot-episode-benchmark-success-rate canonical anchor on a video-generation-vendor-authored world-action model. See [[runway]] + [[world-models]] + [[gwm-worlds-2]] + [[solaris]] + [[gr00t-2]] + [[gemini-robotics-2]] + [[isaac-groot]] + [[humanoid-robotics]] + [[open-source-models]])
> **Previously mentioned**: 2026-10-06-morning (**Runway introduces Praxis-1, a world action model that uses video pretraining to control robots** — TLDR Hardware MEDIUM; daily-digest Tools & Products)
> **Status**: released (open weights + fine-tuning code)
> **Related**: [[runway]], [[world-models]], [[gwm-worlds-2]], [[solaris]], [[gr00t-2]], [[gemini-robotics-2]], [[isaac-groot]], [[humanoid-robotics]], [[open-source-models]]

## Summary

Praxis-1 is [[runway]]'s 27-billion-parameter robotics world-action model, released with open weights and fine-tuning code in November 2026. The model jointly predicts future video and robot actions, extending Runway's world-model line ([[solaris]] IWM + [[gwm-worlds-2]] 3D-interactive-world-generation) into concrete robot-policy-control territory. Runway reports a 46.2% success rate across 1,200 episodes on the RoboLab-120 benchmark. Praxis-1 is Runway's first open-weight model in this category, placing it alongside [[gr00t-2]], [[gemini-robotics-2]], [[isaac-groot]], and [[lamem-vla]] as a robotics-foundation-model entry that researchers and practitioners can download, adapt, and benchmark locally.

## Timeline

- **2026-11-13-evening**: **Weights + fine-tuning code open-sourced** — Runway releases the weights and fine-tuning code for Praxis-1; concrete 27B-parameter scale; 46.2% success rate across 1,200 RoboLab-120 benchmark episodes. First-in-wiki concrete scale + benchmark-score + open-weights-release canonical anchor cluster. See [[runway]] + [[gr00t-2]] + [[world-models]] — *source: data/summaries/2026-11-13-evening.json (TLDR MEDIUM "Jensen Huang resigns 💼, SpaceX Tesla merger progress 🤝, state of slop 👨‍💻"; daily-digest Top Story #5; researchFindings.missingStories)*

- **2026-10-06-morning**: **Praxis-1 world-action model launches** — Runway introduces Praxis-1, a world action model that uses video pretraining to control robots. First Runway entry into the robotics-foundation-model cohort; extends the multi-substrate world-model line ([[solaris]] IWM + [[gwm-worlds-2]] 3D-interactive-world-generation) into a concrete robot-policy-control substrate — *source: data/summaries/2026-10-06-morning.json (TLDR Hardware MEDIUM; daily-digest Tools & Products)*

## Key Facts

- Vendor: [[runway]]
- Parameters: 27 billion
- Capability: jointly predicts video and robot actions
- Benchmark: 46.2% success on RoboLab-120 (1,200 episodes, vendor-reported)
- License/access: open weights + fine-tuning code released Nov 2026
- Lineage: productizes 09-25-evening Latent.Space canonical "robotics-policy-testing/training + synthetic-data augmentation" applications framing into a shipping model

## Open Questions

- Specific license terms (Apache 2.0? Research-only? Commercial-use terms?)
- Architectural details (diffusion backbone vs autoregressive vs hybrid)
- Training data composition (video corpus + real-robot teleop data + simulation)
- Deployment path: real robot hardware integrations + simulation-stack compatibility
- Comparative benchmark vs [[gr00t-2]] on common robotics evaluations

## Sources

- data/summaries/2026-10-06-morning.json (TLDR Hardware MEDIUM — Praxis-1 world-action model launch)
- data/summaries/2026-11-13-evening.json (TLDR MEDIUM — Runway open-sources Praxis-1 weights + fine-tuning code; 27B parameters; 46.2% RoboLab-120; daily-digest Top Story #5; researchFindings.missingStories)
