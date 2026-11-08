---
name: Claude Dreams
description: Anthropic's Nov 2026 research-preview "dreaming" memory capability for Claude Managed Agents — reviews prior session transcripts and existing memory store during idle periods, merges duplicates, replaces stale/contradicted info, corrects mistakes, surfaces new insights for future sessions; changes stored context rather than model weights
type: product
---

# Claude Dreams

> **Type**: product (research preview feature)
> **Vendor**: [[anthropic]]
> **First mentioned**: 2026-11-08-morning
> **Last updated**: 2026-11-08-morning (**Created — Anthropic details Claude's "dreaming" memory, a mechanism for organizing memories, creating notes and representations, and deciding what should be loaded into later sessions; canonical "reviews prior session transcripts and an existing memory store during idle periods" canonical idle-period-batch-processing substrate anchor + canonical "merges duplicates + replaces stale or contradicted information + corrects mistakes + surfaces new insights for future sessions" four-primitive canonical memory-operation anchor cluster + canonical "changes an agent's stored context rather than retraining the model's weights" canonical substrate-distinction anchor + canonical gated-as-research-preview-for-Claude-Managed-Agents canonical access-tier anchor**. NLP Newsletter MEDIUM: *"Anthropic has detailed Claude's 'dreaming' memory, a mechanism for organizing memories, creating notes and representations, and deciding what should be loaded into later sessions. Claude's Dreams capability reviews prior session transcripts and an existing memory store during idle periods"*. Daily-digest Top Story #2: *"Anthropic details Claude's 'dreaming' memory, a mechanism for organizing memories and creating notes"*. researchFindings.additionalContext (Claude): *"Anthropic's research-preview Dreams capability for Claude Managed Agents reviews prior session transcripts and an existing memory store during idle periods, then merges duplicates, replaces stale or contradicted information, corrects mistakes, and surfaces new insights for future sessions. It changes an agent's stored context rather than retraining the model's weights"* + *"Anthropic's November 6, 2026 research on 'The components of agent memory,' which describes dreaming as one mechanism for organizing memories, creating notes and representations, and deciding what should be loaded into later sessions"*. First-in-wiki: (a) **"Dreaming" canonical named-memory-mechanism canonical anchor** — productizes Anthropic as *canonical early-Nov-2026 concrete-first-frontier-lab-with-publicly-named-dreaming-memory-mechanism substrate operator* on [[ai-memory]] arc; (b) **"Idle-period review of prior session transcripts + existing memory store" canonical idle-period-batch-processing substrate anchor** — first-in-wiki *concrete off-duty-agent-memory-consolidation canonical anchor* on AI-memory substrate (structurally distinct from in-session memory-write primitives like [[message-threads]] server-side-conversation-retention or the 08-27-morning Claude unified-memory default-on substrate — Dreams happens *between* sessions rather than during); (c) **Four-primitive memory-operation canonical anchor cluster — merges duplicates + replaces stale/contradicted info + corrects mistakes + surfaces new insights** — productizes Dreams as *canonical concrete-first-frontier-lab-with-publicly-named-four-mode-memory-consolidation-protocol substrate operator*; (d) **"Changes an agent's stored context rather than retraining the model's weights" canonical substrate-distinction canonical anchor** — productizes Dreams as *structurally distinct from fine-tuning + weight-space-programming substrate tiers* (lives in *memory-store-tier* rather than *weight-tier*); likely durable reference-anchor for future dreaming-vs-fine-tuning-vs-weight-space-programming discussion; (e) **"Research preview for Claude Managed Agents" canonical gated-access-tier canonical anchor** — productizes Dreams as *canonical concrete-research-preview tier substrate operator*; gates Dreams distribution to [[claude-managed-agents]]-tier customers alongside Ultraplan + composable-agent-runtime canonical arc; (f) **"The components of agent memory" Nov 6 2026 Anthropic research-publication canonical anchor** — first-in-wiki *concrete Anthropic-research-publication-tier canonical anchor on agent-memory architecture substrate*. Pairs cycle-structurally with 11-04-morning [[message-threads]] server-side-conversation-retention canonical anchor + 08-29-evening Anthropic Bedrock-exposed automatic-context-editing + externalized-memory-store-outside-context-window canonical anchor + 08-27-morning Claude Chat+Cowork default-on unified-memory canonical anchor as *canonical late-Aug-to-early-Nov-2026 four-substrate Anthropic-memory-architecture canonical anchor cluster — unified-memory-default-on + Bedrock-automatic-context-editing + Message-Threads-server-side-conversation + Dreams-idle-period-memory-consolidation*. See [[anthropic]] this cycle + [[ai-memory]] this cycle + [[claude-managed-agents]] + [[message-threads]] + [[claude-opus-5-5]] + [[claude-haiku-5-5]] + [[claude-code]] — *source: data/summaries/2026-11-08-morning.json (NLP Newsletter MEDIUM "🤖 AI Agents Weekly: GPT-6 Cyber, Weight-Space Programming, Claude Dreaming, Exo, METR's AI R&D Assessment, SWE-2…"; daily-digest Top Story #2; researchFindings.additionalContext — Claude; Anthropic "The components of agent memory" Nov 6 2026 research publication)*)
> **Status**: research preview (Claude Managed Agents)
> **Related**: [[anthropic]], [[ai-memory]], [[claude-managed-agents]], [[message-threads]], [[claude-opus-5-5]], [[claude-haiku-5-5]], [[claude-code]], [[chroma-foundation]], [[recursive-self-improvement]]

## Summary

Claude Dreams is [[anthropic]]'s Nov 2026 research-preview memory capability for [[claude-managed-agents]] in which Claude *"dreams"* during idle periods — reviewing prior session transcripts and an existing memory store, then merging duplicates, replacing stale or contradicted information, correcting mistakes, and surfacing new insights for future sessions. Critically, Dreams changes an agent's **stored context** rather than retraining the **model weights** — it lives at the memory-store tier, not the fine-tuning or weight-space-programming tier.

Anthropic frames Dreams as one component of a broader "components of agent memory" research program published Nov 6 2026. Structurally, Dreams is the first-in-wiki concrete idle-period-batch-processing memory-consolidation substrate on the multi-cycle [[ai-memory]] arc — distinct from in-session primitives like [[message-threads]] (server-side conversation retention) or Bedrock-exposed automatic context editing. Claims about broad production impact should be treated cautiously given the research-preview gating.

## Timeline

- **2026-11-08-morning**: **Created** — NLP Newsletter MEDIUM + daily-digest Top Story #2 canonicalize Dreams launch with idle-period-batch-processing substrate + four-primitive memory-operation cluster (merge duplicates + replace stale info + correct mistakes + surface insights) + stored-context-not-weights substrate distinction + Claude Managed Agents research-preview gating + Nov 6 2026 Anthropic "components of agent memory" research publication — *source: data/summaries/2026-11-08-morning.json (NLP Newsletter MEDIUM; daily-digest Top Story #2; researchFindings.additionalContext — Claude)*

## Key Facts

- **Vendor**: [[anthropic]]
- **Access**: research preview for [[claude-managed-agents]]
- **Substrate**: idle-period background process; modifies stored context, not weights
- **Memory operations**: merge duplicates + replace stale or contradicted information + correct mistakes + surface new insights
- **Inputs**: prior session transcripts + existing memory store
- **Outputs**: notes + representations + decisions about what to load into later sessions
- **Research publication**: "The components of agent memory" (Anthropic, Nov 6 2026)

## Open Questions

- Compute cost per "dream" cycle + how often Dreams runs per agent
- How Dreams interacts with [[message-threads]] server-side conversation state
- Safety / auditability of automatic "replaces stale or contradicted information" edits (what prevents destructive overwrites?)
- Whether Dreams is scoped per-agent, per-user, or shared across agent fleet
- Production-GA timeline beyond the Claude Managed Agents research preview
- Relationship to [[chroma-foundation]] / other externalized-memory substrates

## Sources

- data/summaries/2026-11-08-morning.json (NLP Newsletter MEDIUM "🤖 AI Agents Weekly: GPT-6 Cyber, Weight-Space Programming, Claude Dreaming, Exo, METR's AI R&D Assessment, SWE-2 …"; daily-digest Top Story #2; researchFindings.additionalContext — Claude; Anthropic "The components of agent memory" Nov 6 2026 research publication)
