---
name: Frozen v2
description: Google's next-generation server chip that embeds parts of Gemini's model design directly into silicon; projected to run 6-10× more efficiently than current TPUs; targeted ship date 2028
type: product
---

# Frozen v2

> **Type**: product
> **Vendor**: [[google]]
> **First mentioned**: 2026-07-21-morning
> **Last updated**: 2026-07-21-morning
> **Status**: in development (target ship 2028)
> **Related**: [[google]], [[gemini]], [[ironwood-tpu]], [[google-tpu-v8]], [[nvidia]], [[ai-hardware]], [[openai-jalapeno]]

## Summary

Frozen v2 is Google's next-generation server chip, first surfaced in July 2026 as a hardware program that embeds *pieces of Gemini's model design directly into silicon*. By baking parts of the model architecture into the chip itself, Frozen v2 reduces data movement and is projected to run **6-10× more efficiently** than Google's current TPUs. Reported target ship date is **as early as 2028**. Uncovering AI's launch framing — *"Google just fused Gemini into silicon"* — canonicalizes the story as the first publicly framed *frontier-lab model design fused into custom silicon* on a hyperscaler-tier chip, and extends the mid-2026 silicon-diversification arc alongside [[openai-jalapeno]] (OpenAI + Broadcom) and Anthropic's Samsung custom-chip talks.

If Frozen v2 lands the projected efficiency gain, it structurally shifts the *TPU vs GPU vs custom-silicon* competitive frame — Google would run its own frontier models on hardware co-designed with the model architecture rather than on general-purpose accelerators, sharpening the [[ai-hardware]] arc's *model-hardware-co-design* thesis.

## Timeline

- **2026-07-21-morning**: **Frozen v2 first surfaced — Google's next-gen server chip embedding pieces of Gemini's model design into silicon; projected 6-10× more efficient than current TPUs; ship as early as 2028**. Uncovering AI HIGH: ***"Google is developing a new server chip, Frozen v2, which could ship as soon as 2028 and is projected to run six to ten times more efficiently than Google's current TPUs. The chip will embed pieces of Gemini's model design directly into it, reducing data movement and increasing efficiency"*** — *source: data/summaries/2026-07-21-morning.json (Uncovering AI HIGH "🧠 Google just fused Gemini into silicon"; daily-digest Top Story #3)*

## Key Facts

- Vendor: [[google]]
- Category: server-tier AI training + inference chip; successor generation to current TPUs (see [[ironwood-tpu]], [[google-tpu-v8]])
- Distinctive design: embeds parts of the [[gemini]] model architecture directly into silicon (reduces data movement)
- Projected efficiency gain: **6-10× more efficient** than Google's current TPUs
- Ship target: **as early as 2028**
- Positioning: extends the mid-2026 model-hardware-co-design arc alongside [[openai-jalapeno]] and Anthropic's Samsung custom-chip talks
- Canonical launch framing: *"Google just fused Gemini into silicon"* (Uncovering AI)

## Open Questions

- Which specific parts of the Gemini architecture are baked into silicon (attention mechanism? MoE routing? tokenizer?)
- Is Frozen v2 exclusive to Google-Cloud-hosted Gemini workloads, or will it be exposed to external customers via TPU-tier rental?
- Manufacturing partner (TSMC N3? Samsung foundry?)
- Whether the 6-10× efficiency claim is per-watt, per-dollar, or per-token
- How Frozen v2 competes with [[nvidia]] Vera Rubin at the training-tier and Rubin GPUs at the inference-tier
- Whether Google retires older TPU tiers (Ironwood, TPU v8) when Frozen v2 ships

## Sources

- data/summaries/2026-07-21-morning.json (Uncovering AI HIGH "🧠 Google just fused Gemini into silicon" — Google is developing a new server chip Frozen v2 which could ship as soon as 2028 and is projected to run six to ten times more efficiently than Google's current TPUs; daily-digest Top Story #3)
