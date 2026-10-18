---
name: Nemotron 3.5 Super VL
description: NVIDIA's Oct 15 2026 open customizable vision-language model — 120B-parameter MoE with ~12B active per token, hybrid Mamba-Transformer language backbone + RADIO/C-RADIO vision encoder, video support, native multi-token prediction; built for specialized AI agents doing reasoning, coding, document understanding, tool use, and multimodal workflows (text + images + video; no audio)
type: product
---

# Nemotron 3.5 Super VL

> **Type**: product
> **Vendor**: [[nvidia]]
> **First mentioned**: 2026-10-18-morning
> **Last updated**: 2026-10-18-morning
> **Status**: launched (open + customizable)
> **Related**: [[nvidia]], [[nemotron-3]], [[nemotron-4]], [[open-source-models]], [[agent-frameworks]], [[world-models]], [[muse-spark-open]], [[beam]], [[deepseek-v4-1-flash]]

## Summary

Nemotron 3.5 Super VL is [[nvidia]]'s Oct 15 2026 **open, customizable vision-language model** designed for specialized AI agents. It uses a **120-billion-parameter mixture-of-experts architecture with ~12 billion active parameters per token**, combining a **hybrid Mamba-Transformer language backbone** with a **RADIO / C-RADIO vision encoder**, native **video support**, and **native multi-token prediction**. The model accepts **text, images, and video** inputs and targets **reasoning, coding, document understanding, tool use, and multimodal workflows** — it does **not** accept audio input (distinguishing it from [[muse-spark-open]]'s four-modality input stack).

Structurally, Nemotron 3.5 Super VL extends the [[nemotron-3]] modular family into a dedicated vision-language tier — pairing with the earlier Nemotron 3 Super (120B / 12B active, 1M context, text-only hybrid Mamba-Transformer MoE) by sharpening the Super substrate with native-multimodal vision + video + multi-token prediction primitives. Launched the **same day as [[muse-spark-open]] (Meta, Oct 15 2026)**, forming a *concrete mid-Oct-2026 US open-weight dual-vendor VLM + open-text-model canonical anchor pair* on the Chinese-vs-American open-frontier arc.

## Timeline

- **2026-10-18-morning**: **Launch cycle canonical anchor cluster — Oct 15 2026 release + concrete 120B-total / ~12B-active-per-token MoE canonical architecture anchor + concrete hybrid Mamba-Transformer language-backbone + concrete RADIO / C-RADIO vision-encoder canonical architectural-primitive anchor pair + concrete native-video-support canonical anchor + concrete native-multi-token-prediction canonical architectural-primitive + concrete text + images + video three-modality input canonical anchor + concrete "no audio" explicit-modality-exclusion canonical anchor + concrete reasoning + coding + document-understanding + tool-use + multimodal-workflow five-vertical use-case canonical anchor cluster**. NLP Newsletter HIGH "AI Agents Weekly": *"NVIDIA launched Nemotron 3.5 Super VL, an open and customizable vision-language model. This launch matters because it provides a new tool for developers to build specialized AI agents, combining a hybrid language backbone with a vision encoder and native multi-token prediction"*. researchFindings.additionalContext: *"NVIDIA Nemotron 3.5 Super VL is an open, customizable vision-language model released on October 15, 2026, designed for specialized AI agents. It uses a 120-billion-parameter mixture-of-experts architecture with about 12 billion active parameters per token, combining a hybrid Mamba-Transformer language backbone with a RADIO/C-RADIO vision encoder, video support, and native multi-token prediction. It accepts text, images, and video, and is intended for reasoning, coding, document understanding, tool use, and multimodal workflows; it does not accept audio"*. First-in-wiki: (a) **120B-MoE / ~12B-active + Mamba-Transformer + RADIO/C-RADIO vision + video-support + native-multi-token-prediction five-architectural-primitive canonical anchor cluster** — graduates [[nemotron-3]] family into a *concrete Nemotron 3.5 Super VL named-VLM-tier substrate operator* alongside Nemotron 3 Nano baseline + Super 120B/12B/1M text + Ultra 550B-A55B + 3.5 ASR + 3.5 Content Safety + 3.5 Lightning 30B-A3B + 3 Diarization 100M prior cohort; (b) **Native multi-token prediction canonical architectural-primitive anchor** — first-in-wiki *concrete NVIDIA-side native-multi-token-prediction canonical anchor* on the Nemotron-family arc (structurally significant — productizes NVIDIA as *canonical mid-Oct-2026 native-multi-token-prediction vision-language substrate operator*; likely durable reference-anchor for future speculative-decoding + MTP-tier VLM discussion); (c) **"Does not accept audio" explicit-modality-exclusion canonical anchor** — pairs cycle-structurally with same-day [[muse-spark-open]] text+images+video+audio four-modality input canonical anchor as *canonical mid-Oct-2026 US-open-weight VLM-tier modality-coverage comparator anchor pair*; (d) **Same-day Oct 15 2026 release pairs cycle-structurally with [[muse-spark-open]] as US-open-weight dual-vendor Oct-mid-2026 launch cohort** — NVIDIA Nemotron 3.5 Super VL + Meta Muse Spark Open constitute *canonical mid-Oct-2026 concrete-two-US-vendor-same-day-open-release canonical anchor pair* on the open-source-models arc. See [[nvidia]] + [[nemotron-3]] + [[muse-spark-open]] + [[open-source-models]] — *source: data/summaries/2026-10-18-morning.json (NLP Newsletter HIGH "AI Agents Weekly: Muse Spark Open, Gemini Agents Beat Minecraft, OpenCode 2.0, Nemotron 3.5 Super VL, OpenRouter Armor, Claude OpenTelemetry, and More"; researchFindings.additionalContext for Nemotron 3.5 Super VL; daily-digest Top Story #3)*

## Key Facts

- **Vendor**: [[nvidia]]
- **Released**: 2026-10-15
- **License**: open + customizable (part of Nemotron 3.5 modular open-weights family)
- **Architecture**: mixture-of-experts (MoE), hybrid Mamba-Transformer language backbone + RADIO / C-RADIO vision encoder, native multi-token prediction, video support
- **Parameters**: 120B total / ~12B active per token (~10% active ratio — matches Nemotron 3 Super text-only baseline)
- **Input modalities**: text + images + video (three-modality — explicitly no audio)
- **Target workloads**: reasoning + coding + document understanding + tool use + multimodal workflows
- **Positioning**: open customizable VLM for building specialized AI agents
- **Family**: [[nemotron-3]] — pairs with Nano baseline + Super 120B text-only + Ultra 550B-A55B + 3.5 ASR 0.6B + 3.5 Content Safety + 3.5 Lightning 30B-A3B + 3 Diarization 100M
- **Co-release**: same-day Oct 15 2026 as [[muse-spark-open]] (Meta MSL open-weight text-generation MoE)

## Open Questions

- Benchmark results on multimodal evals (MMMU, DocVQA, VideoBench, MVBench)
- Context window length (likely 1M matching Nemotron 3 Super text-only baseline — unconfirmed)
- Hugging Face model-card URL + concrete weight-file naming
- Deployment surface — NIM, OpenRouter, Ollama, Together, Fireworks partner integration cadence
- Vision-encoder resolution + video-FPS support details
- Native multi-token prediction factor (2x? 4x? dynamic?) + inference-speedup magnitude
- Alpha-tier customization recipe (SFT + RL + MOPD distillation per Nemotron 3 Deep Learning Focus coverage)
- Positioning vs [[muse-spark-open]] on vision-tier benchmarks (Muse Spark Open 816B/42B accepts audio but Nemotron 3.5 Super VL does not)

## Sources

- data/summaries/2026-10-18-morning.json (NLP Newsletter HIGH "AI Agents Weekly: Muse Spark Open, Gemini Agents Beat Minecraft, OpenCode 2.0, Nemotron 3.5 Super VL, OpenRouter Armor, Claude OpenTelemetry, and More" — Nemotron 3.5 Super VL 120B MoE / 12B active + hybrid Mamba-Transformer + RADIO/C-RADIO vision + video + native multi-token prediction + text/images/video no-audio; researchFindings.additionalContext for Nemotron 3.5 Super VL; daily-digest Top Story #3)
