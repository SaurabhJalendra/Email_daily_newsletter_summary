---
name: AIPerf
description: NVIDIA's open benchmarking tool for LLM inference at scale — measures time-to-first-token, inter-token latency, request latency, and throughput with realistic, repeatable traffic
type: product
---

# AIPerf

> **Type**: product
> **Vendor**: [[nvidia]]
> **First mentioned**: 2026-11-12-evening
> **Status**: active
> **Related**: [[nvidia]], [[llm-inference-optimization]], [[benchmark-integrity]], [[artificial-analysis]], [[openshell]], [[nvidia-cosmos]]

## Summary

AIPerf is [[nvidia]]'s benchmarking tool for LLM inference at scale, framed in NVIDIA's own developer newsletter as a *concrete first-party inference-performance-measurement substrate* measuring **time to first token, inter-token latency, request latency, and throughput at scale with realistic, repeatable traffic**. The four-primitive measurement scope canonicalizes AIPerf as NVIDIA's reference harness for comparing inference-stack efficiency across GPU + runtime + model-size configurations.

## Timeline

- **2026-11-12-evening**: **AIPerf canonical productization anchor — "NVIDIA introduces AIPerf, a tool for benchmarking LLM inference at scale, which measures time to first token, inter-token latency, request latency, and throughput at scale with realistic, repeatable traffic"**. NVIDIA MEDIUM "Your Personalized Developer News from NVIDIA" + daily-digest Tools & Products. First-in-wiki *concrete NVIDIA-authored named LLM-inference-benchmarking tool canonical anchor + concrete four-primitive measurement-scope anchor (TTFT + ITL + request-latency + throughput) + "realistic, repeatable traffic" canonical reproducibility-framing anchor*. Positions AIPerf alongside [[artificial-analysis]] third-party-benchmark substrate as the *vendor-authored complementary-tier inference-performance harness*. See [[nvidia]] this cycle + [[llm-inference-optimization]] + [[benchmark-integrity]] — *source: data/summaries/2026-11-12-evening.json (NVIDIA MEDIUM "Your Personalized Developer News from NVIDIA"; daily-digest Tools & Products)*

## Key Facts

- **Vendor**: [[nvidia]]
- **Type**: LLM inference benchmarking harness
- **Measurement scope**: time to first token (TTFT) + inter-token latency (ITL) + request latency + throughput
- **Traffic profile**: "realistic, repeatable" — framed for reproducible comparisons across GPU/runtime/model configurations

## Open Questions

- Open-source license + GitHub repo?
- Compatibility with non-NVIDIA inference stacks ([[vllm]], [[sglang]], [[tensorrt-llm]], [[tgi]], [[ollama]])?
- Does AIPerf align with or diverge from [[artificial-analysis]] methodology?
- Relationship to NVIDIA Triton / NIM runtime substrate?

## Sources

- data/summaries/2026-11-12-evening.json (NVIDIA MEDIUM "Your Personalized Developer News from NVIDIA"; daily-digest Tools & Products — NVIDIA introduces AIPerf)
