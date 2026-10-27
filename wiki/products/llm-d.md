---
name: llm-d
description: Kubernetes-native stack for distributed LLM inference (Oct 2026) — runs vLLM, SGLang, and more across clusters, turning single-node inference engines into production-grade serving on local hardware
type: product
---

# llm-d

> **Type**: product
> **First mentioned**: 2026-10-22-morning
> **Last updated**: 2026-10-27-evening (**[[llm-d]] 1.0 release at IBM TechXchange 2026 canonical concrete-first-stable-version anchor + "open-source project focused on more efficient large-language-model inference and scaling" canonical scope-sharpening anchor + "may be particularly relevant to teams operating open-source models on their own infrastructure" canonical self-hosting-tier framing anchor**. researchFindings.missingStories: *"At TechXchange 2026, IBM announced identity, access-control, discovery, and audit capabilities for enterprise AI agents. Contributors also released llm-d 1.0, an open-source project focused on more efficient large-language-model inference and scaling"* + whyItMatters: *"The announcements address two major practitioner concerns: governing autonomous agents in production and reducing the infrastructure cost of model inference. llm-d 1.0 may be particularly relevant to teams operating open-source models on their own infrastructure"*. Attribution: IBM newsroom. First-in-wiki: (a) **llm-d 1.0 concrete-stable-version-tier canonical anchor** — graduates the 10-22-morning creation canonical anchor from *announcement-tier substrate* into *concrete-1.0-release-tier substrate operator* (five cycles after announcement); productizes llm-d as *canonical late-Oct-2026 concrete-first-stable-release of Kubernetes-native-distributed-LLM-inference-infra substrate operator*; (b) **IBM TechXchange 2026 release-venue canonical anchor** — first-in-wiki *concrete IBM-as-contributor + concrete TechXchange-2026-as-release-venue canonical anchor* on llm-d substrate — productizes IBM as *canonical late-Oct-2026 concrete-named-contributor-and-release-sponsor substrate operator* on the open-source LLM-inference-infra arc (resolves the 10-22-morning open question on *author/maintainer organization* with a *concrete IBM-contributor anchor*; the vendor-neutral multi-contributor framing is preserved); (c) **"More efficient large-language-model inference and scaling" canonical scope-sharpening anchor** — sharpens the 10-22-morning *"Kubernetes-native stack for distributed LLM inference"* framing with a *concrete efficiency-plus-scaling two-primitive scope canonical anchor tier*; (d) **"Self-hosted-open-source-model" canonical target-persona framing anchor** — productizes llm-d as *canonical late-Oct-2026 concrete-self-hosted-open-source-model-infrastructure substrate operator* (likely durable reference-anchor for future open-weights-self-hosting-infrastructure discussion). Pairs cycle-structurally with [[deepinfer]] canonical open-source-production-inference-substrate arc as *canonical late-Oct-2026 twin open-source LLM-inference-infrastructure 1.0-release-tier substrate*. See [[ibm]] this cycle + [[vllm]] + [[sglang]] + [[deepinfer]] + [[open-source-models]] + [[kubernetes]] — *source: data/summaries/2026-10-27-evening.json (researchFindings.missingStories — IBM launches enterprise controls for AI agents and llm-d 1.0; attribution IBM newsroom)*)
> **Previously updated**: 2026-10-22-morning
> **Status**: active
> **Related**: [[vllm]], [[sglang]], [[deepinfer]], [[kubernetes]], [[open-source-models]], [[ibm]]

## Summary

**llm-d** is a Kubernetes-native open-source stack for distributed LLM inference, announced in October 2026 via TLDR AI. Its explicit value proposition is turning single-node inference engines — vLLM, SGLang, and more — into production-grade serving across clusters on local hardware. It sits structurally in the open-source inference-infra tier alongside [[deepinfer]] (DeepSeek's open-sourced internal production inference stack, 2026-10-21-evening), vLLM Production Stack, and KServe + Ray Serve inference-serving substrates, but is distinctive in positioning itself as *the Kubernetes-native wrapper around existing engines* rather than a replacement engine.

## Timeline

- **2026-10-22-morning**: **Created — TLDR AI MEDIUM announces llm-d as "a Kubernetes-native stack for distributed LLM inference, running vLLM, SGLang, and more across clusters, turning single-node engines into production-grade serving on local hardware"**. First-in-wiki *Kubernetes-native wrapper-around-existing-inference-engines canonical anchor* on the open-source-inference-infra tier; pairs cycle-structurally with [[deepinfer]] (2026-10-21-evening) as *canonical late-Oct-2026 twin open-source production-inference-substrate anchor pair* — DeepInfer as vendor-authored full-stack vs llm-d as community-authored k8s-wrapper. See [[vllm]] + [[sglang]] + [[deepinfer]] — *source: data/summaries/2026-10-22-morning.json (TLDR AI MEDIUM "DeepSeek DeepInfer 🐋, PyTorch on TPUs ⚡, Ramp's agent framework 👨‍💻")*

## Key Facts

- **Role**: Kubernetes-native stack for distributed LLM inference
- **Engines supported**: [[vllm]], [[sglang]], and others
- **Positioning**: wrapper that turns single-node inference engines into production-grade cluster serving on local hardware
- **Comparator tier**: [[deepinfer]] (DeepSeek vendor-authored), vLLM Production Stack, KServe + Ray Serve

## Open Questions

- Author/maintainer organization (vendor-backed project, foundation-hosted, or independent OSS)
- Named production deployments at launch
- Supported hardware beyond "local hardware" — NVIDIA SM100 + Huawei Ascend 950DT like [[deepinfer]], or GPU-generic?
- Autoscaling + request-routing primitives (prefix-aware routing, continuous batching coordination across replicas, speculative-decoding fan-out?)
- License and governance model

## Sources

- data/summaries/2026-10-22-morning.json (TLDR AI MEDIUM "DeepSeek DeepInfer 🐋, PyTorch on TPUs ⚡, Ramp's agent framework 👨‍💻")
