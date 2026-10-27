---
name: AFM 3 Core Advanced
description: Apple's 20-billion-parameter third-generation on-device Foundation Model; sparse architecture activating only 1–4B parameters per prompt via Instruction-Following Pruning; introduced Jun 2026, productized confirmation Oct 2026
type: product
---

# AFM 3 Core Advanced

> **Type**: product
> **Vendor**: [[apple]]
> **First mentioned**: 2026-06-26-evening (introduced via The Batch DeepLearning.AI)
> **Last updated**: 2026-10-27-morning
> **Status**: active (shipping as Apple Intelligence on-device substrate across iOS 27 / macOS)
> **Related**: [[apple]], [[apple-m5]], [[siri-ai]], [[google]], [[gemini]], [[ollama]]

## Summary

**AFM 3 Core Advanced** is Apple's third-generation on-device foundation model and the on-device half of its Apple Intelligence stack. Announced in June 2026 and productized through October 2026, it is a **~20-billion-parameter natively multimodal** model that uses a **sparse architecture activating only 1–4 billion parameters per request**, allowing a model far larger than typical phone-resident models to run within Apple-silicon memory and power constraints. The full model is stored in flash; relevant expert parameters are loaded into working memory **based on the overall instruction**, not recomputed per token — a technique Apple names **"Instruction-Following Pruning"**.

AFM 3 Core Advanced underpins Apple-tier features such as more expressive Siri voices and higher-accuracy dictation, with processing kept on-device for privacy and lower cloud dependence. It is the on-device counterpart to the cloud-side **AFM Pro** model (hosted on Google Cloud with NVIDIA GPUs, comparable to Gemini Frontier per Apple's WWDC 2026 framing) that handles heavier workloads via Private Cloud Compute. Together the two canonicalize Apple's *hybrid on-device-plus-cloud frontier-AI substrate* strategy.

## Timeline

- **2026-10-27-morning**: **Cycle-N+X cross-cohort productization-confirmation canonical anchor + concrete 20B-parameter + concrete 1-4B-active-per-prompt + concrete "weights kept in flash storage" + concrete "activates only 1-4 billion parameters per prompt" canonical anchor cluster**. TLDR AI MEDIUM: *"Apple has developed a 20-billion-parameter on-device model, AFM 3 Core Advanced, which uses a sparse architecture to operate within Apple silicon's memory and power constraints. The model supports features such as more expressive Siri voices and higher-accuracy dictation, while keeping processing on-device for greater privacy and lower cloud dependence."* researchFindings.additionalContext (Apple): *"Apple's 20-billion-parameter on-device model is AFM 3 Core Advanced, part of its third-generation Apple Foundation Models announced in June 2026. It is natively multimodal and uses a sparse architecture: only 1–4 billion parameters are activated for a given request"* + *"The key technical innovation is Apple's 'Instruction-Following Pruning': the full model is stored in flash memory, while the relevant expert parameters are loaded into faster working memory based on the overall instruction rather than recalculated for every generated token"*. First-in-wiki as a standalone product-page: (a) **20B total + 1-4B active sparse-architecture canonical anchor pair** — first-in-wiki *concrete parameter-breakdown canonical anchor* on AFM 3 Core Advanced (sharpens the 06-26-evening *"exceeds the efficiency of typical mixture-of-experts models"* framing with concrete numbers); (b) **"Instruction-Following Pruning" named-technique canonical anchor** — first-in-wiki *concrete Apple-named sparse-activation technique canonical anchor* (sharpens prior MoE-comparison framing with a *concrete named-method canonical anchor tier*; graduates AFM 3 Core Advanced from "better than typical MoE" into a *named-architecture substrate*); (c) **"More expressive Siri voices + higher-accuracy dictation" concrete feature-primitive canonical anchor pair** — first-in-wiki *concrete named-feature-cluster canonical anchor* on AFM 3 Core Advanced consumer-tier substrate; (d) **"Full model stored in flash + relevant expert parameters loaded into working memory based on overall instruction rather than recalculated per token" concrete-memory-architecture canonical anchor** — first-in-wiki *concrete flash-plus-working-memory two-tier canonical anchor* on Apple-silicon sparse-inference substrate. See [[apple]] + [[siri-ai]] + [[apple-m5]] — *source: data/summaries/2026-10-27-morning.json (TLDR AI MEDIUM "Apple's 20B model 📱, Kimi K3.1 Pro 🧠, Block Dessa 🗣️, frontier training security 🔐"; researchFindings.additionalContext — Apple; Apple Machine Learning Research + Apple Newsroom attribution)*

- **2026-06-26-evening**: **First-in-wiki Apple AFM 3 Core Advanced custom on-device model introduction canonical anchor** — The Batch DeepLearning.AI HIGH *"GLM5.2 Tackles Open-Ended Problems"*: *"Apple has introduced AFM 3 Core Advanced, a custom-built model designed to run on Apple devices, which exceeds the efficiency of typical mixture-of-experts models. This model is part of Apple's collaboration with Google and is optimized for Apple silicon, enabling streamlined models to run on iOS hardware without requiring significant downloads."* First-in-wiki: (a) *AFM 3 Core Advanced* model-naming canonical anchor; (b) *"part of Apple's collaboration with Google"* bidirectional-collaboration canonical anchor (Apple licenses 1.2T Gemini for Siri cloud + AFM 3 Core Advanced on-device is also Google-collaboration); (c) *"exceeds the efficiency of typical mixture-of-experts models"* capability framing; (d) *"streamlined models to run on iOS hardware without requiring significant downloads"* deployment-tier anchor. See [[apple]] — *source: data/summaries/2026-06-26-evening.json (The Batch DeepLearning.AI HIGH "GLM5.2 Tackles Open-Ended Problems" — Apple AFM 3 Core Advanced)*

## Key Facts

- **Vendor**: [[apple]]
- **Family position**: third-generation Apple Foundation Models (on-device half); sibling to cloud-side AFM Pro
- **Total parameters**: ~20 billion
- **Active parameters per request**: 1–4 billion (sparse)
- **Named technique**: Instruction-Following Pruning (per-request expert selection; per-instruction, not per-token)
- **Modality**: natively multimodal
- **Storage model**: full model in flash; active experts loaded into working memory
- **Target silicon**: Apple-silicon only (M-series + A-series Neural Engine)
- **Shipped features**: more expressive Siri voices + higher-accuracy dictation + Visual Intelligence + Writing Tools + Image Playground + Siri Recap + Live Rewind (across iOS 27 / macOS / watchOS)
- **Hardware floor**: iPhones 15 Pro and above (per 09-17-morning Siri AI canonical anchor)
- **Positioning**: hybrid-stack with AFM Pro (cloud, Google-hosted) — on-device for privacy + latency, cloud for heavy workloads

## Open Questions

- Context window + max output tokens for AFM 3 Core Advanced on-device
- Benchmark comparisons vs peer on-device models (Gemma 3n, Phi-5, Qwen3-5-Mini, Phonon on Ollama)
- Developer API surface — Core AI framework exposure of AFM 3 Core Advanced vs the smaller legacy on-device model
- Does Instruction-Following Pruning share lineage with Mixture-of-Experts routing or is it a distinct sparse-activation technique
- Energy/thermal footprint vs typical ~3B-parameter dense on-device models

## Sources

- data/summaries/2026-10-27-morning.json (TLDR AI MEDIUM "Apple's 20B model 📱, Kimi K3.1 Pro 🧠, Block Dessa 🗣️, frontier training security 🔐"; researchFindings.additionalContext — Apple + Instruction-Following Pruning; Apple Machine Learning Research + Apple Newsroom)
- data/summaries/2026-06-26-evening.json (The Batch DeepLearning.AI HIGH "GLM5.2 Tackles Open-Ended Problems" — Apple AFM 3 Core Advanced custom on-device model introduction)
