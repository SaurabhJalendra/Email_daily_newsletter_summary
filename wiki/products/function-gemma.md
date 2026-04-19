---
name: FunctionGemma
description: Google's 270M on-device model encoding function calling into weights; 58% → 85% on Mobile Actions
type: product
---

# FunctionGemma

> **Type**: product
> **First mentioned**: 2025-12-20
> **Last updated**: 2025-12-20
> **Status**: stale
> **Related**: [[google]], [[gemini]], [[ai-edge-gallery]], [[agent-frameworks]]

## Summary

FunctionGemma is [[google]]'s December 2025 on-device model optimised for function calling, at 270M parameters. It encodes function-calling behaviour directly into model weights rather than relying on prompt-engineering scaffolding — lifting Mobile Actions-benchmark accuracy from 58% to 85% for small on-device agents. The release fits Google's broader push toward on-device AI (see [[ai-edge-gallery]]) and specialised small models under the Gemma / T5Gemma family.

## Timeline

- **2025-12-20**: FunctionGemma released — 270M on-device model encoding function calling into weights; 58% → 85% on the Mobile Actions benchmark; T5Gemma 2 coverage continues same cycle — *source: AlphaSignal 2025-12-20 cycle*

## Key Facts

- Parameters: 270M
- Target environment: on-device / mobile
- Benchmark move: 58% → 85% on Mobile Actions

## Open Questions

- License status (Gemma terms or different)?
- Latency / memory footprint on mid-range Android?
- Integration path — Gemini API vs Gemma-runtimes-on-device vs AI Edge Gallery?

## Sources

- data/summaries/2025-12-20.json (AlphaSignal — FunctionGemma 270M)
