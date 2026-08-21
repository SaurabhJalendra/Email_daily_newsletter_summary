---
name: CS-4
description: Cerebras's fourth-generation wafer-scale AI inference system; up to 30× faster inference than GPUs; 750 PFLOPS + 129.6 PB/s memory bandwidth per rack (Aug 2026)
type: product
---

# CS-4

> **Type**: product
> **First mentioned**: 2026-08-19-evening
> **Last updated**: 2026-08-21-morning
> **Status**: active
> **Related**: [[cerebras]], [[nvidia]], [[etched]], [[ai-hardware]], [[openai]], [[gpt-5-6]]

## Summary

CS-4 is [[cerebras]]'s fourth-generation wafer-scale AI supercomputing system, announced in late August 2026 as a bid to challenge NVIDIA in the AI data-center hardware market. AlphaSignal's HIGH cycle-headline pins the concrete headline anchors — **750 PFLOPS of AI compute**, **129.6 PB/s of memory bandwidth**, **~10× efficiency vs CS-3**, and **up to 30× faster inference than GPUs** on the same benchmark — with three wafer-scale chips per rack. Cerebras positions CS-4 as the wafer-scale substrate for 10-trillion-parameter models at ~1000 tokens/sec, with early customer sampling underway. It extends Cerebras's "data movement not multiplication" thesis (wafer-scale = no inter-chip interconnect bottlenecks) into the frontier-inference tier alongside [[openai]]'s 750MW Cerebras commitment.

## Timeline

- **2026-08-21-morning**: **AlphaSignal HIGH cycle-headline "Cerebras CS-4 chip ⚡" + daily-digest Top Story #2 "Cerebras releases the CS-4 chip, delivering up to 30x faster inference than GPUs"** productizes CS-4 as *third-consecutive-cycle canonical anchor*. AlphaSignal adds: *"CS-4 runs 3 wafer-scale chips, 129.6 PB/s bandwidth, 10x efficiency over CS-3"* + *"750 PFLOPS of AI compute"* — first publicly framed *129.6 PB/s memory-bandwidth-per-rack* + *3-wafer-scale-chip-per-rack* concrete architectural anchors on this wiki. TLDR AI + Mindstream cross-cohort framing reinforces *"enables faster chatbots, snappier AI tools, and bigger models without sacrificing speed"* substrate-tier positioning. See [[cerebras]] + [[nvidia]] + [[ai-hardware]] — *source: data/summaries/2026-08-21-morning.json (AlphaSignal HIGH "Cerebras CS-4 chip ⚡, Cursor cloud agents upgrade 🤖, Stanford 10K LLM"; daily-digest Top Story #2)*
- **2026-08-20-morning**: TLDR Hardware HIGH + TLDR AI HIGH + tokens& Weekly HIGH cross-cohort saturation lands CS-4 as *concrete shipped-rack tier* — 750 PFLOPS/rack + 30× faster inference than GPUs + eliminates inter-chip interconnect bottlenecks + being sampled by small group of customers — *source: data/summaries/2026-08-20-morning.json*
- **2026-08-19-evening**: **CS-4 announcement** — successor wafer-scale system running 10-trillion-parameter models at 1000 tok/s + up to 10× higher throughput per MW vs CS-3 — *source: data/summaries/2026-08-19-evening.json (AINews MEDIUM)*

## Key Facts

- Architecture: 3 wafer-scale chips per rack (Cerebras WSE successor line); no inter-chip interconnect bottlenecks
- Throughput: 750 PFLOPS of AI compute per rack
- Memory bandwidth: 129.6 PB/s per rack
- Efficiency: ~10× vs CS-3; up to 30× faster inference than GPUs on the same benchmark
- Target workloads: 10-trillion-parameter models at ~1000 tokens/sec
- Availability: sampling with small group of customers (as of Aug 2026)
- Anchor customer: [[openai]] — 750MW multi-year commitment through 2028 (extends 2026-01 CS-3 deal into CS-4 build-out)

## Open Questions

- Per-rack pricing + power draw envelope
- CS-4 unit shipments to OpenAI's 750MW build-out schedule (2026 / 2027 / 2028 breakdown)
- Named 10T-parameter models targeted for deployment ([[nemotron-4]] is closest current disclosed tier)
- Benchmark comparisons vs NVIDIA Rubin Ultra + [[etched]] inference-racks

## Sources

- data/summaries/2026-08-21-morning.json (AlphaSignal HIGH; TLDR AI; Mindstream)
- data/summaries/2026-08-20-morning.json (TLDR Hardware HIGH; TLDR AI HIGH; tokens& Weekly HIGH)
- data/summaries/2026-08-19-evening.json (AINews MEDIUM CS-4 announcement)
