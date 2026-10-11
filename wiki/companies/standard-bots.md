---
name: Standard Bots
description: US industrial-robotics company (self-described "America's largest AI-native industrial robot manufacturer"); $200M at $1B valuation; NASA + Amazon + Lockheed Martin customers; pretrained-plus-corrected AI stack for short-horizon factory tasks; ships [[standardos]] developer platform (Oct 2026)
type: company
---

# Standard Bots

> **Type**: company
> **First mentioned**: 2026-10-11-morning
> **Last updated**: 2026-10-11-morning
> **Status**: active
> **Related**: [[standardos]], [[industrial-robotics]], [[nvidia-cosmos]], [[humanoid-robotics]], [[world-models]], [[agent-frameworks]]

## Summary

Standard Bots is a US industrial-robotics company that describes itself as "America's largest AI-native industrial robot manufacturer." It develops an AI stack for factory robots that learn tasks from demonstrations and improve through corrections captured from real production deployments, with an explicit focus on *short-horizon* tasks that satisfy cycle-time and reliability requirements rather than open-ended autonomy. Public reporting places the company at a **$1B valuation** on a **$200M raise**, with named enterprise customers including **NASA, Amazon, and Lockheed Martin**. Its approach combines pretrained models with conventional programming on manufacturing primitives such as machine tending, welding, and assembly.

The company's technical thesis is *targeted data over large datasets*: high-quality, task-specific data gathered from real deployments is treated as more valuable than scale alone. Perception runs through a zero-shot system for machine tending; simulation is used where possible but is paired with real-world demonstrations; and models run **on-premises** on edge GPUs, with sensors feeding inference that produces "action chunks" streamed to the robot's control system. Production failures are captured as failure signals plus human corrections and fed back into training to patch edge cases. Standard Bots is also the first-in-wiki external named customer adopting [[nvidia-cosmos]] on an industrial-manufacturing substrate, and ships its own developer platform [[standardos]] (APIs + SDKs for third-party robotics applications on top of its AI models).

## Timeline

- **2026-10-11-morning**: **First-in-wiki coverage via Latent.Space MEDIUM "Building AI for Reliable Execution: Lessons From Industrial Robotics"** — Standard Bots framed as case study for *reliable execution* in production robotics; nine-primitive canonical anchor cluster: (1) pretrained-plus-demonstration-plus-correction training loop; (2) short-horizon task focus for cycle-time + reliability; (3) $200M raise at $1B valuation; (4) NASA + Amazon + Lockheed Martin customer list; (5) machine tending + welding + assembly task scope; (6) [[nvidia-cosmos]] usage; (7) targeted-data-not-large-datasets philosophy; (8) on-premises edge-GPU inference streaming "action chunks"; (9) failure-signal-plus-human-correction production feedback loop. [[standardos]] developer platform first-in-wiki framing. See [[industrial-robotics]] + [[nvidia-cosmos]] + [[world-models]] — *source: data/summaries/2026-10-11-morning.json (Latent.Space MEDIUM "Building AI for Reliable Execution: Lessons From Industrial Robotics"; researchFindings.additionalContext — Latent.Space + Industrial Robotics)*

## Key Facts

- **Positioning**: self-described "America's largest AI-native industrial robot manufacturer"
- **Funding**: $200M raised; $1B valuation (as of Oct 2026 Latent.Space coverage)
- **Named customers**: NASA, Amazon, Lockheed Martin
- **Task scope**: machine tending, welding, assembly (short-horizon production primitives)
- **AI stack**: pretrained models fine-tuned for specific tasks + conventional programming for deterministic control
- **Perception**: zero-shot perception system for machine tending
- **Deployment**: on-premises inference on edge GPUs; sensors → model → "action chunks" → robot control system
- **Training philosophy**: *targeted data* (high-quality, task-specific demonstrations) over large general datasets
- **Production feedback loop**: failure signals + human corrections captured from deployments → model updates → edge-case patches
- **Simulation posture**: uses simulation where possible but relies on real-world demonstrations as primary training substrate
- **External dependencies**: [[nvidia-cosmos]] (first-in-wiki named Cosmos industrial-vertical customer)
- **Named execs/figures**: Evan Beard, Leif Jentoft (surfaced in Latent.Space episode; roles not disclosed in summary)
- **Developer surface**: [[standardos]] — APIs + SDKs for third-party developers to build robotics applications on Standard Bots' AI models

## Open Questions

- Founding year + founders + total funding history before the $200M / $1B round
- Headquarters location and manufacturing-plant footprint
- Robot form factors shipped — fixed-base arm? mobile platform? multi-arm? What's the current product SKU count?
- Model architecture details — are the pretrained models proprietary end-to-end, or built on [[nvidia-cosmos]] / Isaac GR00T / an open-weight VLA foundation?
- Independent benchmarks vs [[figure]], [[agility-robotics]], [[walden-robotics]], [[skild-ai]], [[1x-technologies]], [[alfred-robotics]] on cycle-time + reliability metrics
- Specific NASA / Amazon / Lockheed Martin deployment detail — which plants, which tasks, how many robots in production?
- Whether [[standardos]] is open-source, licensed, or vendor-exclusive — and how it relates structurally to [[isaac-groot]] + Google Gemini Robotics 2 developer surfaces
- Whether the "action chunks" primitive is a Standard Bots–coined term or inherits from a published VLA / imitation-learning architecture

## Sources

- data/summaries/2026-10-11-morning.json (Latent.Space MEDIUM "Building AI for Reliable Execution: Lessons From Industrial Robotics" — pretrained-plus-correction AI stack + $200M at $1B + NASA/Amazon/Lockheed Martin + StandardOS + NVIDIA Cosmos + on-premises edge-GPU inference + action chunks + zero-shot perception + targeted-data-over-large-datasets + failure-signal-plus-correction feedback loop; researchFindings.additionalContext — Latent.Space + Industrial Robotics)
