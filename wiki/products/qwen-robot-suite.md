---
name: Qwen-Robot Suite
description: Alibaba's open-source trio of robotics AI models deployable across humanoids, robotic arms, and quadruped robots (Jun 2026)
type: product
---

# Qwen-Robot Suite

> **Type**: product
> **Vendor**: [[alibaba]]
> **First mentioned**: 2026-06-21-morning
> **Last updated**: 2026-06-21-morning (Superhuman + NLP Newsletter cross-cohort — Alibaba open-sources Qwen-Robot Suite, a trio of robotics AI models that can be deployed across humanoids, robotic arms, and quadruped robots)
> **Status**: released (open-source)
> **Related**: [[alibaba]], [[qwen-3-5]], [[qwen3-coder-next]], [[humanoid-robotics]], [[isaac-groot]], [[nvidia-cosmos]], [[spatialclaw]]

## Summary

Qwen-Robot Suite is [[alibaba]]'s open-source trio of robotics AI models, designed for cross-form-factor deployment across humanoids, robotic arms, and quadruped robots. First surfaced in this wiki via Superhuman + NLP Newsletter cross-cohort on 2026-06-21-morning. Structurally, the release extends the Qwen open-weights distribution model from text/vision/code into the *embodied AI* category, paralleling [[nvidia]]'s [[nvidia-cosmos]] / [[isaac-groot]] open-reference stack and Google's [[gemini-3-1-pro]] robotics work — but with the differentiating feature that all three models in the suite ship as open weights.

The cross-form-factor design (humanoid + arm + quadruped) is structurally novel for an open-weights robotics release: most prior open robotics models target a single embodiment class. The three-model suite framing suggests Alibaba is positioning Qwen-Robot Suite as a *full-stack robotics-AI substrate* that downstream robot manufacturers can use as a vendor-neutral foundation, analogous to how [[gemma-4]] became the *full-stack on-device foundation* across vendor hardware tiers.

## Timeline

- **2026-06-21-morning**: **Superhuman / Zain Kahn "📱 Robot phone makes high-profile appearance"** + **NLP Newsletter "🤖 AI Agents Weekly"** carry the cross-cohort launch framing. Superhuman: ***"Alibaba has open-sourced its Qwen-Robot Suite, a trio of robotics AI models that can be deployed across humanoids, robotic arms, and quadruped robots"***. Daily-digest Tools & Products line: ***"Alibaba has open-sourced its **Qwen-Robot Suite**, a trio of robotics AI models that can be deployed across humanoids, robotic arms, and quadruped robots"***. NLP Newsletter places "Qwen-Robot Suite" in its cycle-headline compact subject alongside [[glm-5-2]], [[claude-code]] Artifacts, Codex Skills, Block's Builderbot, and [[spatialclaw]] — confirming the release as a digest-cohort high-signal event. Structurally novel three ways: (a) **cross-form-factor coverage** in a single release (humanoid + arm + quadruped) — prior open-weights robotics releases (e.g., Alibaba RynnBrain 2026-02-17, NVIDIA reference designs) have typically targeted a single embodiment class; (b) **trio architecture** rather than a single monolithic model — suggests specialized per-form-factor weights with shared substrate, paralleling [[gemma-4]]'s tiered family approach (E2B/E4B/12B/26B/31B) rather than one-model-fits-all; (c) **open-source licensing** lowers integration barriers for Chinese + Western robotics OEMs and academic labs, positioning Qwen-Robot Suite as a competitive alternative to closed-source robotics foundations from Google DeepMind / Tesla Optimus / Figure AI. Lands the same cycle as Genesis AI's Eno humanoid breakaway design (lab-automation form-factor) + Honor Robot Phone at Shanghai International Film Festival + Samsung-Boston-Dynamics stake exploration + Milrem NATO eastern border ground-robot proposal + Dnsys Z1 knee exoskeleton — see [[humanoid-robotics]] for the cycle-wide embodied-AI surface. Body-recovery items: (a) exact three-model composition (perception + planning + control? or three form-factor-specialized end-to-end models?), (b) parameter counts + architectures, (c) base-model lineage (built on top of [[qwen-3-5]] omnimodal? [[qwen-3-vl]]?), (d) license terms (Apache 2.0? Qwen License?), (e) distribution channel (Hugging Face + ModelScope + Hub repo names), (f) benchmark positioning on robotics manipulation + locomotion tasks — *source: data/summaries/2026-06-21-morning.json (Superhuman – Zain Kahn — Alibaba has open-sourced its Qwen-Robot Suite, a trio of robotics AI models that can be deployed across humanoids, robotic arms, and quadruped robots; NLP Newsletter — 🤖 AI Agents Weekly: GLM-5.2, Claude Code Artifacts, Qwen-Robot Suite, Codex Skills, Block's Builderbot, SpatialClaw)*

## Key Facts

- Vendor: [[alibaba]] / Qwen team
- Composition: **trio** of robotics AI models (single integrated release)
- Embodiment coverage: **humanoids + robotic arms + quadruped robots** — single release covers three form-factor classes
- License: **open-source** (specific license + repo not yet retrievable from digest-tier coverage)
- Release window: surfaced 2026-06-21-morning across two newsletters

## Open Questions

- Specific three-model decomposition — perception / planning / control? Or three form-factor-specialized end-to-end models?
- Base-model lineage — built on top of [[qwen-3-5]] omnimodal? [[qwen3-coder-next]]? a brand-new robotics base?
- Parameter counts + architectures (MoE? dense? VLA?)
- Concrete license terms — Apache 2.0 or Qwen License?
- Benchmark positioning on robotics manipulation + locomotion + multi-task tasks
- Integration / interoperability with NVIDIA [[isaac-groot]] reference humanoid hardware
- Competitive positioning vs Google DeepMind RT-2 / Tesla Optimus / Figure AI Helix
- Does this displace Alibaba's earlier **RynnBrain** open-source robotics foundation model (Feb 2026) or layer above it?

## Sources

- data/summaries/2026-06-21-morning.json (Superhuman – Zain Kahn — Alibaba has open-sourced its Qwen-Robot Suite, a trio of robotics AI models that can be deployed across humanoids, robotic arms, and quadruped robots; NLP Newsletter — 🤖 AI Agents Weekly: GLM-5.2, Claude Code Artifacts, Qwen-Robot Suite, Codex Skills, Block's Builderbot, SpatialClaw, and More)
