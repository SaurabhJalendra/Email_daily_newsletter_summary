---
name: GEN-1.5
description: Generalist AI's Aug 2026 one-shot robot learning model — picks up a new physical skill from a single 3-12 second demo (59% first-try / 83% after few minutes of practice)
type: product
---

# GEN-1.5

> **Type**: product
> **Vendor**: Generalist AI
> **First mentioned**: 2026-08-23-morning
> **Last updated**: 2026-08-23-morning
> **Status**: active — unveiled
> **Related**: [[humanoid-robotics]], [[world-action-models]], [[dyna-2]], [[lamem-vla]], [[gemini-robotics-2]], [[robostral-navigate]], [[qwen-robot-suite]], [[isaac-groot]]

## Summary

**GEN-1.5** is Generalist AI's **one-shot robot learning model**, unveiled in mid-August 2026, that can pick up a **new physical skill from a single 3-to-12-second demonstration** — no retraining, no purpose-built dataset. Reported success rate is **~59% on the first try** and **~83% after a few minutes of practice** on the same skill. This positions GEN-1.5 in the mid-2026 world-action + vision-language-action model cohort alongside [[dyna-2]] (1M+ hours video-diffusion pretraining), [[lamem-vla]] (long-horizon manipulation), [[gemini-robotics-2]] (single-model whole-body control), and Nvidia's [[world-action-models]] — but with the distinct *learn-from-a-single-short-demo* framing rather than *pretrain-then-fine-tune* pipelines.

## Timeline

- **2026-08-23-morning**: **GEN-1.5 unveiled — one-shot robot learning from 3-12s demo, 59% first-try / 83% after practice** — Superhuman MEDIUM: *"Generalist AI has unveiled a one-shot robot learning model, GEN-1.5, which can pick up a new physical skill from a single 3 to 12-second demo, with a success rate of 59% on the first try and 83% after a few minutes of practice"*. Also referenced in daily-digest AI Models & Research. First publicly framed *single-short-demo one-shot robot-skill acquisition anchor* in this wiki. See [[humanoid-robotics]] + [[dyna-2]] + [[lamem-vla]] + [[world-action-models]] — *source: data/summaries/2026-08-23-morning.json (Superhuman MEDIUM "⚡ Unitree's robot breaks Usain Bolt's speed record"; daily-digest AI Models & Research)*

## Key Facts

- Vendor: **Generalist AI**
- Type: one-shot robot learning model
- Input: single **3-to-12-second demo** of a new physical skill
- First-try success rate: ~59%
- Success rate after a few minutes of practice: ~83%
- Positioning: *learn-from-single-demo* alternative to pretrain-then-fine-tune robot learning pipelines

## Open Questions

- Which robot platforms is GEN-1.5 validated on? (arm-only, mobile manipulator, humanoid?)
- What is the base architecture — VLA, world-action model, diffusion policy, or hybrid?
- Are the 59% / 83% numbers on Generalist AI's internal skill suite or a public benchmark ([[libero]] / SimplerEnv / RoboSuite)?
- Open weights / commercial licensing terms
- Compute + latency envelope for the on-robot inference loop

## Sources

- data/summaries/2026-08-23-morning.json (Superhuman MEDIUM "⚡ Unitree's robot breaks Usain Bolt's speed record"; daily-digest AI Models & Research + Top Stories)
