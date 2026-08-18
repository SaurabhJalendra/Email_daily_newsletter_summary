---
name: Nemotron 4
description: NVIDIA's in-development ~1-trillion-parameter open-source model family — rival to the most capable global open models (Aug 2026)
type: product
---

# Nemotron 4

> **Type**: product
> **Vendor**: [[nvidia]]
> **First mentioned**: 2026-08-18-morning
> **Last updated**: 2026-08-18-morning
> **Status**: in development (multi-newsletter coverage of forthcoming release)
> **Related**: [[nvidia]], [[nemotron-3]], [[open-source-models]], [[claude-fable-5]], [[claude-opus-5]], [[gpt-5-6]], [[glm-5-3]], [[kimi-k3]], [[qwen-3-8-max]]

## Summary

Nemotron 4 is [[nvidia]]'s forthcoming **~1-trillion-parameter open-source model family** in development to rival the most capable global open models. First surfaced in Aug 2026 newsletter coverage as part of Nvidia's broader open-source AI strategy — Nathan Lambert's Interconnects essay *"Teaching Everyone to Fish for Tokens"* frames Nvidia's Nemotron series as a bet on a **self-sustaining open-model ecosystem** where Nvidia sells GPUs by making it viable for anyone to run their own model, rather than buying tokens from Anthropic or OpenAI. Nemotron 4 extends the Nemotron 3 family (Nano baseline 30B/3B active MoE + Super 120B + Ultra 550B/55B active + 3.5 ASR + 3.5 Content Safety + 3.5 Lightning) into the **trillion-parameter tier** as the flagship of Nvidia's *"give away the model, sell the hardware"* competitive posture.

Positioned as a competitor to [[claude-fable-5]] + [[gpt-5-6]] on frontier capability at the *open-weights* tier, sits alongside [[kimi-k3]] (~2.5T), [[qwen-3-8-max]] (2.4T), and [[glm-5-3]] (743B) in the mid-2026 Chinese/open-frontier cohort that has been closing the gap with US-flagship closed models.

## Timeline

- **2026-08-18-morning**: **Nemotron 4 ~1T parameter open-source model family disclosed as in development** — AI Breakfast MEDIUM + Interconnects MEDIUM + The AI Corner HIGH cross-cohort framing: *"Nvidia is developing Nemotron 4, a roughly 1-trillion-parameter open-source model family, to rival the most capable global open models"*. Nathan Lambert's *"Teaching Everyone to Fish for Tokens"* essay canonicalizes Nvidia's Nemotron strategy as *"teaching everyone to fish for tokens and creating a self-sustaining ecosystem"* — contrast to Anthropic/OpenAI's *"selling tokens"* posture. First publicly framed: (a) **Nemotron 4 concrete named-version anchor** — first publicly framed *Nemotron 4* successor-tier to Nemotron 3 family in this wiki; (b) **~1-trillion-parameter tier** — extends Nvidia's Nemotron family from 550B Ultra ceiling into *trillion-parameter tier*, competitive with Kimi K3 (~2.5T) + Qwen 3.8-Max (2.4T) on the Chinese/open-frontier cohort scale-axis; (c) **"Rival the most capable global open models" positioning** — first publicly framed *frontier-open-weights-parity target* on Nvidia in this wiki; canonicalizes Nvidia's evolution from *silicon-supplier + Nano-tier open-model provider* into *frontier-open-weights competitor*; (d) **Lambert's "Teaching Everyone to Fish for Tokens" strategic-framing** — Nemotron 4 productizes Nvidia's *give-away-the-model + sell-the-hardware* strategic thesis at the frontier-tier; the *"open-model ecosystem self-sustaining"* framing positions Nvidia against Anthropic + OpenAI token-selling business models by making the *own-your-model + rent-Nvidia-GPU* pattern economically viable at frontier scale — *source: data/summaries/2026-08-18-morning.json (AI Breakfast MEDIUM "OpenAI adds opt-in desktop activity logging for context"; Interconnects MEDIUM "Teaching Everyone to Fish for Tokens" by Nathan Lambert; The AI Corner HIGH "Sam Altman: OpenAI's Best 12 Months Start Now"; researchFindings.additionalContext for Nvidia)*

## Key Facts

- **Vendor**: [[nvidia]]
- **Parameter tier**: ~1 trillion (concrete anchor — order of magnitude on Nemotron 3 Ultra 550B)
- **License**: open-source (per multi-newsletter framing; specific license TBD)
- **Family position**: fourth generation of Nemotron modular family; frontier-tier flagship above Nemotron 3 Ultra 550B
- **Competitive positioning**: rival [[kimi-k3]] + [[qwen-3-8-max]] + [[glm-5-3]] on frontier-open-weights axis; competitive with [[claude-fable-5]] + [[gpt-5-6]] + [[claude-opus-5]] on capability
- **Strategic framing**: *"Teaching everyone to fish for tokens"* — self-sustaining open-model ecosystem where Nvidia captures value via GPU sales, not model API revenue
- **Related domain-specific offerings**: [[alpamayo]] 2 Super for autonomous vehicles; part of Nvidia's growing domain-specific open-model portfolio

## Open Questions

- **Release date** — Nathan Lambert's coverage frames Nemotron 4 as *"in development"*; specific launch quarter not disclosed
- **Architecture** — dense vs MoE? Active-parameter count if MoE?
- **Base model / training corpus** — trained from scratch or built on Nemotron 3 Ultra 550B base?
- **License terms** — Apache 2.0? Custom NVIDIA-open-source license?
- **Context window** — 1M+ target to match [[claude-opus-5]] + [[gpt-5-6]] + [[glm-5-3]] frontier norm?
- **Benchmark positioning at launch** — target position relative to Kimi K3 + Qwen 3.8-Max + GLM-5.3 + Fable 5 + Sol
- **Distribution surfaces** — Hugging Face + NVIDIA NGC + API? Inference-cost target?
- **Relationship to NeMo Switchyard agent-workflow router** and NVIDIA's broader agent-substrate cohort

## Sources

- data/summaries/2026-08-18-morning.json (AI Breakfast MEDIUM "OpenAI adds opt-in desktop activity logging for context" — Nvidia is developing Nemotron 4, a roughly 1-trillion-parameter open-source model family; Interconnects MEDIUM "Teaching Everyone to Fish for Tokens" by Nathan Lambert — Nvidia's investment in open-source AI models with the goal of teaching everyone to "fish for tokens" and creating a self-sustaining ecosystem; The AI Corner HIGH "Sam Altman: OpenAI's Best 12 Months Start Now" — Nvidia is developing Nemotron 4, a roughly 1-trillion-parameter open-source model family, to rival the most capable global open models; researchFindings.additionalContext for Nvidia)
