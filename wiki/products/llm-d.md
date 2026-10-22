---
name: llm-d
description: Kubernetes-native stack for distributed LLM inference (Oct 2026) — runs vLLM, SGLang, and more across clusters, turning single-node inference engines into production-grade serving on local hardware
type: product
---

# llm-d

> **Type**: product
> **First mentioned**: 2026-10-22-morning
> **Last updated**: 2026-10-22-morning
> **Status**: active
> **Related**: [[vllm]], [[sglang]], [[deepinfer]], [[kubernetes]], [[open-source-models]]

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
