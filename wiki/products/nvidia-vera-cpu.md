---
name: NVIDIA Vera CPU
description: NVIDIA's first agent-tuned CPU — 88 custom Olympus cores, 1.2 TB/s memory bandwidth, $200B TAM (May 2026)
type: product
---

# NVIDIA Vera CPU

> **Type**: product
> **First mentioned**: 2026-05-19
> **Last updated**: 2026-07-10-evening (**Vera CPU repositioned as "AI factory throughput" + "agentic workloads" substrate — cross-newsletter recoverage after ~7-week silence**. NVIDIA Developer News MEDIUM: ***"NVIDIA Vera CPU is introduced as a solution to boost AI factory throughput and accelerate agentic workloads, enabling multi-step workflows that combine inference, tool use, code execution, retrieval, orchestration, and other tasks"*** + daily-digest Tools & Products: ***"NVIDIA announces the NVIDIA Vera CPU, designed to boost AI factory throughput and accelerate agentic workloads, highlighting the company's efforts to support the development and deployment of more powerful AI models"***. First publicly framed *canonical "agentic workloads" positioning* on Vera CPU in this wiki + first publicly framed *concrete named-workload enumeration* — inference + tool use + code execution + retrieval + orchestration + other tasks. Structurally significant three ways: (a) **"AI factory throughput" framing** — extends the May 2026 launch's *token-throughput-on-agentic-workloads* framing into a canonical *AI-factory-throughput* substrate positioning that aligns with the same-week [[software-factories]] cross-vendor thesis (Warp Oz + Cursor FDE + Factory / IBM Bob / ChatGPT Work) — Vera CPU is now framed as the *silicon substrate for the software-factories operating model*; (b) **Concrete named-workload enumeration** — first time NVIDIA explicitly enumerates the six agentic-workload primitives (inference / tool use / code execution / retrieval / orchestration / other) as Vera CPU's target-workload surface; graduates the abstract *token-throughput* framing into a concrete *agentic-loop-execution-primitive* pitch; (c) **Cross-cycle recoverage after ~7-week silence** — Vera CPU has been dormant in this wiki since 2026-05-23; the reappearance in NVIDIA Developer News + daily-digest simultaneously suggests NVIDIA is actively re-marketing Vera CPU into the frontier-lab-cycle-cadence, plausibly aligned with GTC Berlin Oct 20-22 pre-marketing push. Same-day competitive-simultaneity: [[chatgpt-work]] agentic ChatGPT + [[ibm-bob]] enterprise SDLC + [[muse-spark]] 1.1 subagent-squad-orchestration + [[claude-reflect]] mindful-use — the entire cycle's product-motion centers on *agentic workflows*, positioning Vera CPU as the *cross-vendor silicon substrate* — *source: data/summaries/2026-07-10-evening.json (NVIDIA Developer News MEDIUM "Your Personalized Developer News from NVIDIA" — NVIDIA Vera CPU is introduced as a solution to boost AI factory throughput and accelerate agentic workloads enabling multi-step workflows that combine inference tool use code execution retrieval orchestration and other tasks; daily-digest Tools & Products — NVIDIA announces the NVIDIA Vera CPU)*)
> **Previously updated**: 2026-05-23
> **Status**: active
> **Related**: [[nvidia]], [[vera-rubin]], [[agent-frameworks]], [[ai-hardware]]

## Summary

NVIDIA Vera is NVIDIA's first agent-purpose-built CPU, announced at FY27 Q1 earnings (2026-05-19) and positioned by Jensen Huang as opening "a brand new $200B TAM" the company has never addressed before. Architecturally Vera is an ARM-based design with 88 custom NVIDIA-designed Olympus cores, 1.2 TB/s of memory bandwidth, and ~50% faster per-core performance than conventional server CPUs — optimized for token throughput on agentic AI workloads rather than multi-core parallelism. NVIDIA reports ~$20B in standalone Vera CPU revenue for the current year and positions Vera as the inference-economics complement to the [[vera-rubin]] GPU platform. Lands the same earnings cycle as $81.6B Q1 FY27 revenue (+85% YoY), $75B data-center revenue (+92% YoY), and Q2 guidance of $91B (±2%) — concrete proof points for the "inference is the next leg up" narrative.

## Timeline

- **2026-05-23**: Vera continues circulating as NVIDIA's defining 2026 CPU bet; coverage frames NVIDIA as "the world's leading CPU supplier" via Vera — *source: 2026-05-23 cycle (TLDR Newsletter — Google's AI ads; AlphaSignal — Google launches managed agents)*
- **2026-05-22**: Vera reframed as $200B TAM in cycle coverage following the Q1 earnings call; Singapore robotics hub announcement parallels — *source: 2026-05-22 cycle (Mindstream — Nvidia isn't stopping; Forward Future — NVIDIA earnings could move all of AI)*
- **2026-05-21**: NVIDIA GTC Taipei 2026 keynote pre-announcement amplifies Vera as the centerpiece for the post-Hopper/Blackwell agentic-AI substrate — *source: 2026-05-21 cycle (NVIDIA GTC Taipei 2026)*
- **2026-05-19**: NVIDIA Vera CPU announced — 88 custom Olympus cores, 1.2 TB/s memory bandwidth, 50% faster per-core, "$200B TAM" framing from Huang on Q1 FY27 earnings; arrives at top AI labs — *source: 2026-05-19 cycle (TLDR AI — NVIDIA Vera + Anthropic context limits)*

## Key Facts

- ARM-based, 88 custom NVIDIA-designed Olympus cores
- 1.2 TB/s memory bandwidth
- ~50% faster per-core vs conventional server CPUs
- Tuned for token throughput on agentic workloads (not multi-core parallelism)
- Already deployed at top AI labs
- ~$20B standalone Vera CPU revenue forecast for current year
- $200B TAM framing from Jensen Huang
- Complements [[vera-rubin]] GPU platform

## Open Questions

- Per-CPU pricing — likely premium given the 50% per-core perf claim
- Will hyperscaler customers (AWS, Google, Microsoft) standardize on Vera or develop own ARM substrates?
- How does Vera affect [[claude-opus-4-7]] / [[gpt-5-5]] inference economics on supported infra?

## Sources

- data/summaries/2026-05-19.json (TLDR AI — NVIDIA Vera; Mindstream — Android jumped ahead)
- data/summaries/2026-05-20.json (TLDR AI — Qwen 3.7; NVIDIA GTC anchor)
- data/summaries/2026-05-21.json (NVIDIA GTC Taipei 2026)
- data/summaries/2026-05-22.json (Mindstream — Nvidia isn't stopping; Forward Future — NVIDIA earnings; DayTrading Dispatch)
- data/summaries/2026-05-23.json (TLDR Newsletter; AlphaSignal)
