---
name: GLM 5.5
description: Zhipu AI's upcoming next-generation open-weight model in the GLM family — first surfaced 2026-07-21 as targeted for August 2026 release, extending the ~2-month minor-version cadence from GLM-5.2 (Jun 2026); expected to build on GLM-5.2's frontier-parity + fraction-of-cost positioning; Hugging Face expected to host open weights
type: product
---

# GLM 5.5

> **Type**: product
> **Vendor**: [[zhipu-ai]]
> **First mentioned**: 2026-07-21-evening
> **Last updated**: 2026-08-15-morning (**[[glm-5-3]] lands as intermediate Aug release before GLM-5.5 — Interconnects Nathan Lambert canonicalizes GLM-5.3 (~750B parameters, beats [[kimi-k3]] + [[claude-fable-5]] + [[gpt-5-6]]-Sol on many benchmarks) as Z.ai's next public shipping event; positions GLM-5.5 as *forecast-still-pending post-5.3 successor* rather than *August-target-2026-first-shipping successor*; sharpens the Z.ai release cadence into a *~2-month minor-version cadence* (5.2 Jun → 5.3 mid-Aug → 5.5 forecast still pending) rather than a *~4-month major-version cadence*. See [[glm-5-3]] (NEW) + [[zhipu-ai]] — *source: data/summaries/2026-08-15-morning.json (Interconnects MEDIUM "GLM-5.3: How Chinese labs keep stride with the frontier")*)
> **Previously updated**: 2026-07-21-evening
> **Status**: pre-release (target August 2026 — pending after GLM-5.3 lands mid-Aug 2026)
> **Related**: [[zhipu-ai]], [[glm-5-2]], [[glm-5-3]], [[glm-5]], [[glm-4-7]], [[open-fable]], [[kimi-k3]], [[qwen-3-8-max]], [[deepseek-v4]], [[open-source-models]]

## Summary

GLM 5.5 is [[zhipu-ai]]'s upcoming next-generation open-weight model in the GLM family, first surfaced 2026-07-21 as *"lining up for August"* — extends the ~2-month minor-version cadence from [[glm-5-2]] (Jun 2026). World of AI's cycle framing positions GLM 5.5 as *"building on the success of GLM-5.2, which was ranked as the most capable open model at its launch,"* and expects it to sustain the pattern of monthly Chinese-frontier-lab releases that has now demonstrated Kimi K3 (Jul 17) + Qwen 3.8 Max (Jul 20) landing in the same 3-day window. Hugging Face is expected to host the open weights (alongside GLM-5.2 and [[kimi-k3]]).

The release is set against [[zhipu-ai]]'s parallel infrastructure-buildout signal — Z.AI has finished construction on a **1GW data center stocked exclusively with domestic Chinese chips**, positioning GLM 5.5 training on a *no-NVIDIA* substrate (see [[ai-hardware]] + [[open-source-models]]). The August timeline slots GLM 5.5 into the mid-2026 Chinese-frontier-lab release cadence that Interconnects has canonicalized as *"the open-weights escalation"* — a "beginning of a new era in AI, with more competition, a higher need for coordination, and a growing ecosystem of frontier, open models."

## Timeline

- **2026-07-21-evening**: **GLM 5.5 first surfaced — targeted for August release, building on GLM-5.2's frontier-parity posture; Hugging Face expected to host open weights**. World of AI HIGH: ***"GLM 5.5 is expected to be released in August, building on the success of GLM-5.2, which was ranked as the most capable open model at its launch"*** + ***"Hugging Face will host the open weights for GLM-5.2, Kimi K3, and potentially Qwen 3.8"***. Same-cycle Z.AI 1GW data center anchor: The Rundown AI HIGH ***"China's Z AI has finished construction on a 1GW data center stocked exclusively with domestic chips, giving its GLM models a training hub without Nvidia hardware"*** — first publicly framed *concrete 1GW no-NVIDIA training substrate* for the GLM family in this wiki — *source: data/summaries/2026-07-21-evening.json (World of AI HIGH "China Claims the #2 AI Model! 🐉"; The Rundown AI HIGH "🧮 Claude helps disprove 87-year math problem")*

## Key Facts

- Vendor: [[zhipu-ai]] (Z.AI)
- Predecessor: [[glm-5-2]] (Jun 2026, MIT license, 754B parameters + sparse attention indexer + IndexShare + MTP)
- Release target: August 2026
- Distribution: Hugging Face expected to host open weights (alongside GLM-5.2 + Kimi K3, per World of AI)
- Training substrate: Z.AI's newly-completed **1GW data center running only Chinese-made chips** — first no-NVIDIA training hub for the GLM family
- Positioning: continues the *frontier-parity + fraction-of-cost* open-weights arc [[glm-5-2]] canonicalized

## Open Questions

- Parameter count (GLM-5.2 was 754B / 40B-active; GLM 5.5 scale unknown)
- Architecture changes vs GLM-5.2 (new attention mechanism? sparse-MoE variant?)
- License terms (MIT continuation expected)
- Benchmark posture vs [[kimi-k3]] (Interconnects has canonicalized K3 as strongest open model) + [[qwen-3-8-max]]
- Whether 1GW Chinese-chip data center delivers competitive throughput / inference efficiency vs NVIDIA-hosted training
- Confirmed release date within August + hosting-provider inference-tier metrics

## Sources

- data/summaries/2026-07-21-evening.json (World of AI HIGH "China Claims the #2 AI Model! 🐉" — GLM 5.5 is expected to be released in August, building on the success of GLM-5.2, which was ranked as the most capable open model at its launch + Hugging Face will host the open weights for GLM-5.2, Kimi K3, and potentially Qwen 3.8; The Rundown AI HIGH "🧮 Claude helps disprove 87-year math problem" — China's Z AI has finished construction on a 1GW data center stocked exclusively with domestic chips, giving its GLM models a training hub without Nvidia hardware)
