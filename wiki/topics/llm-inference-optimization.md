---
name: LLM Inference Optimization
description: The mid-2026 canonical framework for reasoning about LLM inference cost/latency — prefill vs decode, KV cache growth, arithmetic intensity, ridge point, batching (static/dynamic/continuous), quantization, pruning, distillation — as a practitioner-tier substrate underneath the "post-training scaling law" era
type: topic
---

# LLM Inference Optimization

> **Type**: topic
> **First mentioned**: 2026-08-20-evening
> **Last updated**: 2026-08-20-evening
> **Status**: active
> **Related**: [[midtraining]], [[cerebras]], [[etched]], [[nvidia]], [[glm-5-3]], [[model-routers]], [[gpt-5-6]], [[muse-glimmer]]

## Summary

**LLM inference optimization** is the mid-2026 canonical practitioner-tier framework for reasoning about *why LLMs are cost/latency-bound and what to do about it*. It splits inference into two execution regimes with very different bottleneck profiles:

- **Prefill** runs the entire prompt through the transformer stack at once, exposing lots of parallelism and reusing each loaded weight across many tokens — **compute-bound** on modern accelerators.
- **Decode** generates one output token at a time, with each step computing attention against the stored keys and values for **all** previous positions — **bandwidth-bound**, growing with the [[ai-memory|KV cache]].

The KV cache stores key and value vectors for past positions, grows linearly with context and concurrent users, and often dominates GPU-memory footprint. The metric that tells you which regime you're in is **arithmetic intensity** — arithmetic performed per byte moved from memory. The **ridge point** is the arithmetic intensity at which compute time equals memory time on a given GPU; for an A100 at BF16, ridge point ≈ 153 FLOP/byte.

Practitioner-tier interventions include **batching** (static, dynamic, continuous — where continuous-batching is now table-stakes in production inference stacks), **quantization** (with 1-bit / ternary / GGUF variants — see [[bonsai-27b]] + [[muse-glimmer]] deployment envelope), **model pruning**, and **knowledge distillation**. A production inference server composes GPU + KV cache + batching + queue-management as a single system.

The topic sits under the mid-2026 [[glm-5-3]] *"Death of Params" + "Post-training Scaling Law"* canonical framing (2026-08-20-evening) — as the era's frontier improvements come increasingly from post-training + inference-time compute, understanding *what actually moves the wall-clock and dollar-per-token needle at inference time* becomes a first-class practitioner substrate. Companion to the [[cerebras]] wafer-scale + [[etched]] inference-ASIC + [[nvidia]] financing arms-race — hardware-tier and software-tier optimizations must be reasoned about jointly.

## Timeline

- **2026-08-20-evening**: **Jam with AI HIGH cycle-headline *"LLM Inference 101"* productizes the canonical practitioner-tier framework**. Comprehensive walkthrough of prefill vs decode + KV cache + arithmetic intensity + ridge point (A100 ~153 FLOP/byte at BF16) + batching (static/dynamic/continuous) + production inference-server components (GPU + KV cache + batching + queue-management) + optimization techniques (quantization + pruning + knowledge distillation). References [[nvidia]] Nemotron 3.5 Lightning + NeMo Switchyard as agentic-workload substrate + Nvidia's $500B financing consortium as compute-substrate-scale anchor. First publicly framed *canonical newsletter-tier practitioner-substrate framework for reasoning about LLM inference cost/latency* in this wiki. See [[nvidia]] + [[cerebras]] + [[etched]] + [[glm-5-3]] + [[bonsai-27b]] + [[muse-glimmer]] — *source: data/summaries/2026-08-20-evening.json (Jam with AI HIGH "LLM Inference 101")*

## Key Facts

- **Two execution regimes**: **prefill** (compute-bound, parallelizes across prompt tokens) vs **decode** (bandwidth-bound, per-token, attends over KV cache of all prior positions)
- **KV cache**: grows linearly with context × concurrent users; often dominates GPU-memory footprint
- **Arithmetic intensity**: arithmetic operations per byte moved from memory — the key metric distinguishing compute-bound vs bandwidth-bound
- **Ridge point**: arithmetic intensity where compute time equals memory time on a given GPU
  - A100 @ BF16: ~153 FLOP/byte
- **Batching regimes**: static / dynamic / continuous (continuous-batching now standard in production stacks)
- **Optimization stack**: quantization (incl. 1-bit / ternary / GGUF), model pruning, knowledge distillation, speculative decoding (see [[muse-glimmer]] DFlash drafter)
- **Production inference-server composition**: GPU + KV cache + batching + queue management
- **Reference reading canonicalized by Jam with AI**: *The Illustrated Transformer*, *Transformer Inference Arithmetic*

## Open Questions

- Where the ridge-point framework generalizes to newer accelerators (H100, H200, B200, Rubin, GB300, Cerebras CS-4, Etched inference-ASIC)
- How the "Death of Params" post-training-scaling-law era changes the arithmetic-intensity / ridge-point calculus (more inference-time compute per query → more decode-tier bandwidth pressure)
- Whether continuous-batching + speculative-decoding + prefix-caching (KV-cache-reuse across sessions) compose additively at production scale
- Concrete comparisons of arithmetic-intensity across current-generation hardware (Nvidia Rubin, Cerebras CS-4, Etched inference-ASIC) — the [[nvidia]] SIGGRAPH 2026 Nemotron 3.5 Lightning + NeMo Switchyard release cycle should surface substrate-tier benchmarks

## Sources

- data/summaries/2026-08-20-evening.json (Jam with AI HIGH "LLM Inference 101" — prefill/decode + KV cache + arithmetic intensity + ridge point A100 ~153 FLOP/byte at BF16 + batching (static/dynamic/continuous) + production inference-server components + quantization/pruning/distillation optimization stack + Nvidia Nemotron 3.5 Lightning + NeMo Switchyard agentic-substrate + Nvidia $500B financing consortium recoverage)
