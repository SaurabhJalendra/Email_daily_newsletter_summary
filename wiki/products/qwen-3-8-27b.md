---
name: Qwen3.8-27B
description: Alibaba Qwen team's Aug 2026 27B-parameter vision-capable LLM released under Apache 2.0; frontier-level coding + reasoning that fits on high-end consumer hardware; defaults to xhigh reasoning effort
type: product
---

# Qwen3.8-27B

> **Type**: product
> **Vendor**: [[alibaba]] (Qwen team)
> **First mentioned**: 2026-08-17-evening
> **Last updated**: 2026-08-17-evening
> **Status**: released (open-weights, Apache 2.0)
> **Related**: [[alibaba]], [[qwen-3-8-max]], [[open-source-models]], [[muse-glimmer]], [[glm-5-3]], [[claude-code]], [[gemini-3-7-flash]]

## Summary

Qwen3.8-27B is [[alibaba]]'s Aug 2026 **27B-parameter dense vision-language model** released under **Apache 2.0** — the smaller-model sibling to the 08-15 [[qwen-3-8-max]] open-weights drop, resolving that cycle's *"Qwen3.8-27B smaller-model missing-in-action"* thread. The model natively accepts text, images, and video, ships with a very large **262K-token context window** (with an advertised path to ~1M), and uses a hybrid attention backbone (Gated DeltaNet-style linear attention + full gated-attention blocks) shared with the larger Qwen3.8 family. Reported benchmarks include ~**61.7 on SWE-bench Pro**, high DeepSWE and LiveCodeBench scores, and results competitive with or slightly above closed models like Claude Opus 4.6 Max on certain code-heavy tasks.

What makes 3.8-27B notable is that it delivers **frontier-level coding and reasoning in a model deployable on high-end consumer hardware** while being fully open and commercially usable. Simon Willison's cycle-anchoring write-up highlights that the model **defaults to "xhigh" reasoning effort**, causing it to run extremely long internal chains-of-thought before answering — a *"wildly overthinks things"* characterization that is really a default-configuration effect (reasoning effort is tunable per message to *low* / *medium* / *high*). Practitioners have integrated 3.8-27B rapidly via vLLM recipes, GGUF builds, and local model launchers, positioning it as a canonical open-weight alternative for **local agents, dev tools, and multimodal workflows**.

## Timeline

- **2026-08-17-evening**: **Qwen3.8-27B released — Apache 2.0, vision-capable, effective tool calling, competent code generation; Simon Willison canonical write-up frames it as "excellent, but defaults to wildly overthinking things"; TLDR / Rundown AI / Evolving AI Insights cross-cohort saturation into daily-digest Top Story #3**. Simon Willison MEDIUM cycle-headline: *"Qwen 3.8 27B is a new 27B parameter vision-capable LLM from Alibaba's Qwen research lab, released under the Apache 2.0 license. It has a long context, effective tool calling, strong vision ability, and competent code generation, making it suitable for local deployment on high-end consumer hardware"* + *"defaults to 'xhigh' reasoning effort, which can lead to overthinking and slow performance; users are recommended to adjust the reasoning effort to 'low' or 'medium'"*. Concrete comparisons drawn to [[claude-code]] and [[gemini-3-7-flash]]. researchFindings.additionalContext locks in: 262K native context (~1M path), Gated DeltaNet + gated-attention hybrid, ~61.7 on SWE-bench Pro, competitive with Claude Opus 4.6 Max on certain code-heavy tasks, vLLM recipes + GGUF + local launchers integrated. Daily-digest Top Story #3: *"Qwen 3.8 27B, a new 27B parameter vision-capable LLM, is released under the Apache 2.0 license, offering a competitive model for local deployment on high-end consumer hardware"*. First publicly framed on this cycle: (a) **Apache 2.0 open-weights + 27B parameters + vision-capable + long context** — resolves 08-15-evening [[qwen-3-8-max]] *"27B smaller-model missing-in-action"* open thread; (b) **xhigh default reasoning effort as a UX fault-line** — first publicly framed *reasoning-effort-default configuration causing overthinking* on a Chinese-open-weights release; sharpens the *tunable-thinking* Gemini/Opus/GPT-5.6 API-surface arc with a *default-too-high-out-of-box* companion observation; (c) **Fits on high-end consumer hardware as canonical positioning** — extends the [[muse-glimmer]] *fits-on-24GB-consumer-GPU* framing from 30B tier into a 27B tier open-weights *frontier-coding-in-consumer-envelope* substrate; (d) **Simon Willison as canonical open-weights evaluator** — his direct testing (SVG generation, image annotation, coding-agent driving) provides a canonical framing on new open-weights releases. See [[alibaba]] + [[qwen-3-8-max]] + [[open-source-models]] + [[muse-glimmer]] + [[glm-5-3]] — *source: data/summaries/2026-08-17-evening.json (Simon Willison MEDIUM "Qwen 3.8 27B is excellent, but it defaults to wildly overthinking things"; TLDR MEDIUM; The Rundown AI MEDIUM; daily-digest Top Story #3; researchFindings.additionalContext for Qwen3.8-27B)*

## Key Facts

- **Vendor**: [[alibaba]] / Qwen research team
- **Release**: 2026-08-17 (Apache 2.0 open-weights)
- **Parameter count**: 27B (dense)
- **Modalities**: text + images + video (native vision-language)
- **Context window**: 262K tokens native, path to ~1M advertised
- **Architecture**: hybrid attention backbone — Gated DeltaNet-style linear attention + full gated-attention blocks (shared with larger Qwen3.8 family)
- **Reasoning effort**: tunable — defaults to xhigh (causes overthinking); low / medium / high available per-message
- **Benchmarks**: ~61.7 SWE-bench Pro; high DeepSWE and LiveCodeBench scores; competitive with Claude Opus 4.6 Max on certain code-heavy tasks (self-reported + independent)
- **Deployment**: fits on high-end consumer hardware; vLLM recipes + GGUF builds + local launchers integrated day-0
- **Positioning**: long-context agentic model for software engineering + professional work + research
- **Sibling model**: [[qwen-3-8-max]] (2.4T-A95B, HF/ModelScope open-weights with text-only + reduced-context caveats)

## Open Questions

- Concrete per-message performance overhead when reasoning-effort is left at xhigh default
- Full third-party benchmark placement (Artificial Analysis Intelligence Index, Vals Index) beyond self-reported and Willison hands-on
- Exact VRAM footprint at BF16 / quantized variants (Willison notes "high-end consumer hardware" but no specific tier)
- License nuances vs [[qwen-3-8-max]]'s new revenue-share license — is 27B fully permissive Apache 2.0 or does it carry additional restrictions?
- Whether 27B supports the same 1M-token context path advertised for the Max tier
- Post-training methodology — RL environments, tool-use corpus, vision-training-data provenance

## Sources

- data/summaries/2026-08-17-evening.json (Simon Willison MEDIUM "Qwen 3.8 27B is excellent, but it defaults to wildly overthinking things" — Apache 2.0, vision-capable, long context, effective tool calling, competent code gen, defaults to xhigh reasoning effort, compared to Claude Code and Gemini 3.7 Flash; TLDR MEDIUM "Stripe buys OpenRouter 🔀, Anthropic Model 2 🤖"; The Rundown AI MEDIUM "✍️ Dario Amodei logs on to answer the critics"; daily-digest Top Story #3; researchFindings.additionalContext for Qwen3.8-27B — 262K context, Gated DeltaNet hybrid, 61.7 SWE-bench Pro, competitive with Claude Opus 4.6 Max, vLLM/GGUF/local-launcher integrations)
