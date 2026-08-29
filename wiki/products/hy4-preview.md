---
name: Hy4 Preview (Hunyuan)
description: Tencent Hunyuan's 770B-parameter open-source AI model (~49B active per token via sparse/modular activation) released August 28 2026 as preview
type: product
---

# Hy4 Preview (Hunyuan)

> **Type**: product
> **Vendor**: [[tencent]] (Hunyuan lineage)
> **First mentioned**: 2026-08-29-evening
> **Last updated**: 2026-08-29-evening
> **Status**: preview (released 2026-08-28)
> **Related**: [[tencent]], [[hy3]], [[hy-mt2]], [[open-source-models]], [[deepseek]], [[zhipu-ai]], [[moonshot-ai]], [[longcat-2]]

## Summary

**Hy4 Preview** is [[tencent]] Hunyuan's next-generation open-source flagship — a **770B-parameter model with ~49B active parameters per token** (~6.4% active ratio) released as preview on **2026-08-28**. It is positioned as part of China's push to accelerate open-source foundation models and AI infrastructure, offering a high-capacity alternative to Western frontier models while remaining openly available to developers.

Hy4 Preview is Tencent's largest publicly released Hunyuan-tier release surfaced in this wiki, roughly ~2.6× the total parameter count of [[hy3]] (295B) and structurally consistent with the mid-2026 sparse-MoE frontier-tier profile pioneered by [[deepseek]] V4 + [[longcat-2]] (Meituan 1.6T). The Aug 28 release lands the same cycle as the [[eu-ai-act]] transparency-obligations enforcement and [[openai]]'s slowdown after the [[hugging-face]]-breach incident — reads as continued Chinese-open-weights competitive-tier cadence against Western frontier-lab pauses.

## Timeline

- **2026-08-29-evening**: **Created — Tencent launches Hy4 Preview, a 770B-parameter open-source AI model with ~49B active parameters per token via sparse/modular activation** — daily-digest Top Story #4 + researchFindings.missingStories: *"Tencent released Hy4 Preview on August 28, an open-source model with 770 billion parameters, of which about 49 billion are activated per token through sparse or modular computation ... positioned as part of China's broader push to accelerate open-source foundation models and AI infrastructure, alongside expanded access to government-held intellectual property data for commercial AI development. Hy4 aims to offer a high-capacity alternative to Western frontier models while remaining openly available to developers"*. First-in-wiki: (a) *770B-total / 49B-active MoE architecture concrete anchor* on Tencent's next-generation Hunyuan lineage (~2.6× step-up in total parameters from [[hy3]] 295B); (b) *government-held IP data expanded access for commercial AI development* framing on China's open-source-frontier-tier substrate — sharpens the multi-cycle *"Chinese labs shipping open-source releases at fraction-of-cost economics"* framing with a *state-backed IP-data-access accelerator anchor*; (c) *August 28 release preview-tier canonical anchor*. See [[tencent]] + [[open-source-models]] + [[hy3]] — *source: data/summaries/2026-08-29-evening.json (daily-digest Top Story #4; researchFindings.missingStories — Tencent launches Hy4 Preview, a 770B-parameter open-source AI model)*

## Key Facts

- **Vendor**: [[tencent]] (Hunyuan lineage — Hy4 succeeds [[hy3]] 295B)
- **Architecture**: sparse/modular MoE — 770B total parameters, ~49B active per token (~6.4% active ratio)
- **Release date**: 2026-08-28 (preview tier)
- **Positioning**: high-capacity open-source alternative to Western frontier models
- **Ecosystem context**: part of China's push to accelerate open-source foundation models + expanded access to government-held IP data for commercial AI development

## Open Questions

- License terms (Apache 2.0 like [[hy3]]? MIT? research-only? commercial-use restrictions?)
- Full benchmark scores vs [[deepseek]] V4 + [[longcat-2]] + [[claude-opus-5]] + [[gpt-5-6]]
- Context window + agentic-coding capability tier
- Distribution surfaces (Hugging Face? Tencent Cloud? ollama? Baseten?)
- Whether Hy4 Preview is a time-limited window (as [[hy3]] initially was) or a permanent open-weight release
- Concrete details of the "government-held IP data" access program — which sectors, what data types

## Sources

- data/summaries/2026-08-29-evening.json (daily-digest Top Story #4; researchFindings.missingStories — "Tencent launches Hy4 Preview, a 770B-parameter open-source AI model")
