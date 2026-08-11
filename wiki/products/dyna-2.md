---
name: Dyna-2
description: Dyna Robotics's world-action foundation model pre-trained on 1M+ hours of human video; 87% zero-shot pass rate on real-world unseen-robot-hardware deployments; scaling-laws-for-robotics anchor
type: product
---

# Dyna-2

> **Type**: product
> **Vendor**: Dyna Robotics
> **First mentioned**: 2026-08-11-evening
> **Last updated**: 2026-08-11-evening (**Created — Dyna-2 world-action model achieves 87% pass rate in real-world zero-shot deployments; pre-trained on 1M+ hours of human video; scaling human-video data proves out zero-shot dexterity on unseen robot hardware; successor to Dyna-1**)
> **Status**: released
> **Related**: [[world-action-models]], [[humanoid-robotics]], [[world-models]], [[nvidia-cosmos]], [[gemini-robotics-2]], [[lamem-vla]]

## Summary

Dyna-2 is Dyna Robotics's second-generation **world-action model** pre-trained on **over one million hours of human video data** and evaluated at an **87% pass rate on real-world zero-shot deployments** — outperforming its predecessor Dyna-1 and offered as evidence that *"scaling human video data improves zero-shot performance on unseen robot hardware"* (per TLDR's framing). The release lands as one of the cycle's canonical anchors on the *scaling-laws-for-robotics* axis, structurally distinct from Google's [[gemini-robotics-2]] (single-model whole-body control with 89.6% precise-insertion) and NVIDIA's [[world-action-models]] family (physical-AI stack alongside [[isaac-groot]] + [[alpamayo]]).

## Timeline

- **2026-08-11-evening**: **Created — Dyna-2 achieves 87% real-world zero-shot pass rate on unseen robot hardware after pre-training on 1M+ hours of human video**. TLDR MEDIUM cites the Humanoids Daily framing *"Dyna-2 Proves Scaling Laws for Robotics: 1 Million Hours of Human Video Unlocks Zero-Shot Dexterity"*: *"Dyna-2, a world-action model pre-trained on over one million hours of human video data, has achieved an 87% pass rate in real-world zero-shot deployments, outperforming its predecessor Dyna-1. This proves that scaling human video data improves zero-shot performance on unseen robot hardware"*. AINews HIGH re-frames as *"notable releases and updates in the areas of video, multimodal, and robotics models, including MiniMax H3's open-weight video momentum and Dyna Robotics' world-action model"*. Daily-digest AI Models & Research anchor. First publicly framed *"one million hours of human video → 87% zero-shot on unseen robot hardware"* concrete-scaling-anchor on world-action models in this wiki; extends the [[world-action-models]] category from NVIDIA's Alpamayo-adjacent framing into a *scaling-laws-for-robotics-canonical anchor* aligned with the mid-2026 [[humanoid-robotics]] arc. See [[world-action-models]] + [[humanoid-robotics]] + [[gemini-robotics-2]] — *source: data/summaries/2026-08-11-evening.json (TLDR MEDIUM "Zuckerberg's manifesto 🤖, Elon's $1T shortcut 💰, local models won't win 👨‍💻"; AINews HIGH "[AINews] Muse Glimmer and Spark")*

## Key Facts

- **Vendor**: Dyna Robotics
- **Model class**: world-action model (WAM)
- **Pre-training corpus**: 1M+ hours of human video
- **Zero-shot benchmark**: 87% pass rate on real-world unseen-robot-hardware deployments
- **Predecessor**: Dyna-1 (outperformed by Dyna-2 per Humanoids Daily framing)
- **Framing**: canonical *scaling-laws-for-robotics* anchor per Humanoids Daily headline

## Open Questions

- Architecture — transformer, diffusion policy, or hybrid VLA style?
- Whether weights are open-source or vendor-hosted only
- Concrete robot-hardware tested in the zero-shot deployments (arm-only, humanoid, quadruped?)
- Head-to-head with [[gemini-robotics-2]] (89.6% precise-insertion) and [[lamem-vla]] (97.6% LIBERO / 73.9% SimplerEnv-Bridge)
- Dyna Robotics's funding status + team size

## Sources

- data/summaries/2026-08-11-evening.json (TLDR MEDIUM "Zuckerberg's manifesto 🤖, Elon's $1T shortcut 💰, local models won't win 👨‍💻" — Humanoids Daily Dyna-2 87% zero-shot proof of scaling-laws-for-robotics; AINews HIGH "[AINews] Muse Glimmer and Spark: Open Weights return Personal Superintelligence promise" — MiniMax H3 + Dyna Robotics world-action model releases)
