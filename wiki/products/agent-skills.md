---
name: Agent Skills
description: Anthropic-originated open standard for reusable agent capabilities; 2026 research (AlphaSignal + NLP Newsletter Demystifying Agent Skills paper) reframes skills as *execution anchors* rather than knowledge repositories
type: product
---

# Agent Skills

> **Type**: product / topic
> **First mentioned**: 2025-12-20
> **Last updated**: 2026-08-24-morning (**AlphaSignal MEDIUM deep-dive analyzing 8,135 trial records across benchmarks reframes agent skills as *execution anchors that prevent derailment during complex workflows* rather than *repositories for missing knowledge*; NLP Newsletter *Demystifying Agent Skills* paper independently corroborates: **procedural anchoring more effective than explicit knowledge injection**. Together with the *Skill Trigger Bottleneck* paper (reliable-trigger-slots scarcity) + *Strategy Lock-In* (first-step-determines-strategy in multi-agent envs), the cycle graduates *Agent Skills* from a vendor-standard-tier product page into a *research-substrate-tier topic anchor* on how skills actually function. Concrete findings from the AlphaSignal analysis: (a) scaling the skill catalogue degrades an agent's ability to pick the right skill, but agents can still extract enough partial procedural guidance from *related* tools to succeed → **downstream task success stays stable even as retrieval precision falls**; (b) formatting skills as *standardized, step-by-step runbooks* that force strict operational checklists beats teaching facts or generic algorithms; (c) skills fail under *brittle assumptions*, *incompatible contexts*, or *insufficient adaptation* — distilling skills from raw trajectories without explicit outcome hints degrades performance; (d) build reliable systems by *gating skills by domain buckets* and using *strict trigger conditions* to avoid semantic confusability. Cross-references: [[agent-harness]] Latent Space three-era framework applies structurally — skills sit at the Bolt-On/Co-Training boundary as *procedural scaffolding the model may or may not have internalized*. See [[claude-skills]] + [[claude-code]] + [[agent-plugins]] + [[agent-harness]] — *source: data/summaries/2026-08-24-morning.json (AlphaSignal MEDIUM "🧠 AI agent skills: Why they succeed—and what causes them to crash"; NLP Newsletter MEDIUM "🥇Top AI Papers of the Week" — Demystifying Agent Skills + Skill Trigger Bottleneck + Strategy Lock-In papers; daily-digest AI Models & Research anchor)*)
> **Previously updated**: 2026-02-19
> **Status**: active (research-substrate)
> **Related**: [[anthropic]], [[openai]], [[claude-skills]], [[claude-code]], [[claude-for-excel]], [[chatgpt]], [[agent-frameworks]], [[agent-harness]], [[model-context-protocol]], [[agentic-ai-foundation]], [[agent-plugins]], [[scrollcraft]], [[evals-skills]]

## Summary

**Agent Skills** started as an [[anthropic]]-led open standard (Dec 2025) for packaging reusable agent capabilities so multiple runtimes can discover, invoke, and compose them without vendor-specific glue. Through 2026 the format spread across vendors ([[openai]] ChatGPT Skills Feb 2026, [[agent-plugins]] Aug 2026 cross-vendor standard) and became the substrate for how coding agents install reusable capabilities (e.g. [[scrollcraft]] for Claude Code, [[evals-skills]] for AI product evals).

The Aug 2026 research turn — AlphaSignal's 8,135-trial-record deep-dive plus the NLP Newsletter *Demystifying Agent Skills* + *Skill Trigger Bottleneck* + *Strategy Lock-In* papers — has reframed skills as **procedural execution anchors that prevent derailment**, not **knowledge repositories that teach facts**. Practical implication: format skills as standardized runbooks with strict trigger conditions and domain gating; don't distill skills from raw trajectories without explicit outcome hints; expect retrieval precision to fall as the skill catalog grows, but downstream task success can stay stable because related-tool partial-procedural-support absorbs the miss.

## Timeline

- **2026-08-24-morning**: **AlphaSignal 8,135-trial analysis + NLP Newsletter Demystifying Agent Skills paper canonicalize skills as *execution anchors* not knowledge stores; procedural anchoring beats explicit knowledge injection; scaling the catalog degrades retrieval precision but not necessarily task success (partial procedural support from related tools); reliable trigger conditions + domain gating + step-by-step runbook formatting are the operational levers** — *source: data/summaries/2026-08-24-morning.json (AlphaSignal MEDIUM; NLP Newsletter MEDIUM; daily-digest AI Models & Research)*
- **2026-02-09**: [[openai]] launches ChatGPT Skills — packaged, reusable agent capabilities inside ChatGPT, framed as competitor to Anthropic Agent Skills — *source: 2026-02-09 cycle*
- **2025-12-20**: Agent Skills publishes as open standard for reusable agent capabilities (cross-lab usable) — *source: 2025-12-20 cycle*

## Key Facts

- **Originator**: [[anthropic]]
- **Predecessor**: [[claude-skills]] (internal Anthropic concept)
- **Ecosystem siblings**: [[model-context-protocol]] (tools/data → LLMs); [[agent-plugins]] (Aug 2026 cross-vendor plugin standard)
- **Distribution examples**: [[scrollcraft]] (website design), [[evals-skills]] (AI product evals), Nate Herk's AIS skill portfolio
- **Research reframing (Aug 2026)**: skills work as *procedural anchors preventing derailment*, not knowledge injection; format as step-by-step runbooks; gate by domain + use strict trigger conditions

## Open Questions

- Full author list on the *Demystifying Agent Skills* paper + which benchmarks the 8,135 trials covered
- Governance — is Agent Skills donated to [[agentic-ai-foundation]] like MCP?
- Spec surface vs Anthropic's Claude Skills format — identical or extended?
- How the *Skill Trigger Bottleneck* protocol proposal interacts with Anthropic's existing skill-invocation semantics

## Sources

- data/summaries/2025-12-20.json (Anthropic Agent Skills open-standard publication)
- data/summaries/2026-08-24-morning.json (AlphaSignal MEDIUM "🧠 AI agent skills: Why they succeed—and what causes them to crash"; NLP Newsletter MEDIUM "🥇Top AI Papers of the Week" — Demystifying Agent Skills + Skill Trigger Bottleneck + Strategy Lock-In papers; daily-digest AI Models & Research anchor)
