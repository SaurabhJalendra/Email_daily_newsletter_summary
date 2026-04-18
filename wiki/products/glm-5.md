---
name: GLM-5
description: Zhipu AI's Feb 2026 754B-parameter MIT-licensed open foundation model
type: product
---

# GLM-5

> **Type**: product
> **First mentioned**: 2026-02-13
> **Last updated**: 2026-02-19
> **Status**: active
> **Related**: [[zhipu-ai]], [[glm-4-7]], [[deepseek]], [[kimi-k2-thinking]]

## Summary

GLM-5 is Zhipu AI's February 2026 open-source foundation model — 754 billion parameters, MIT-licensed, released on Hugging Face and ModelScope. It's targeted at complex systems engineering and long-horizon agentic tasks, and gives proprietary frontier rivals (Google, OpenAI, Anthropic) a real benchmark fight at a fraction of their costs. The model uses sparse attention and an asynchronous-RL training architecture detailed in Zhipu's later technical report. GLM-5 extends the open-source Chinese frontier-lab cluster (Zhipu / [[deepseek]] / Alibaba-Qwen / [[moonshot-ai]]) to a new parameter scale.

## Timeline

- **2026-02-19**: Technical report published — sparse attention + asynchronous RL details for coding-focused foundation models — *source: 2026-02-19 cycle*
- **2026-02-14**: Continued framing as "matches top closed models at a fraction of cost" — *source: 2026-02-14 cycle*
- **2026-02-13**: Released — 754B params, MIT license; on Hugging Face / ModelScope; designed for complex systems engineering and long-horizon agentic tasks — *source: 2026-02-13 cycle*

## Key Facts

- Vendor: [[zhipu-ai]]
- Parameters: 754B
- License: MIT
- Architecture: sparse attention + asynchronous RL
- Distribution: Hugging Face, ModelScope
- Positioning: open-source rival to GPT-5, Claude Opus 4.6, Gemini 3

## Open Questions

- Active vs total parameter split (MoE design specifics)
- Independent benchmark verification on SWE-Bench / Terminal-Bench
- Inference cost on commodity hardware
- Whether GLM-5 is included in Western open-model leaderboards

## Sources

- data/summaries/2026-02-13.json (GLM-5 release)
- data/summaries/2026-02-14.json (continued benchmark framing)
- data/summaries/2026-02-19.json (technical report)
