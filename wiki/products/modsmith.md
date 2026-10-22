---
name: ModSmith
description: Anthropic's distribution platform for sharing and installing Claude Mods — the companion registry to the Claude Code mod ecosystem introduced October 2026
type: product
---

# ModSmith

> **Type**: product
> **Vendor**: [[anthropic]]
> **First mentioned**: 2026-10-22-morning
> **Last updated**: 2026-10-22-morning
> **Status**: active
> **Related**: [[anthropic]], [[claude-code]], [[claude-mods]], [[attention-interface]], [[agent-skills]], [[agent-plugins]]

## Summary

**ModSmith** is [[anthropic]]'s distribution platform for sharing and installing [[claude-mods]] — the user-authored TypeScript/JavaScript middleware that customizes [[claude-code]]'s execution and rendering flow. ModSmith plays the registry role in the Claude Mods ecosystem: a central surface where mod authors can publish their work and where other Claude Code users can discover and install mods. Introduced alongside Claude Mods in Latent.Space's October 2026 essay, it structurally parallels the registry layer that already exists around [[agent-skills]] (Anthropic's reusable-capability bundle format) and [[agent-plugins]] (OpenAI's bundled-skill + MCP-config distribution unit) — pushing distribution-plus-discovery into the attention-interface tier of the agent harness.

## Timeline

- **2026-10-22-morning**: **Created — Latent.Space essay "Claude Mods: Flipping the Harness Inside Out" names ModSmith as the companion distribution platform for Claude Mods**. First-in-wiki concrete named-mod-registry canonical anchor on the [[claude-mods]] substrate; structurally parallels [[agent-skills]] + [[agent-plugins]] distribution-registry tier of the agent-harness ecosystem. See [[claude-mods]] + [[claude-code]] — *source: data/summaries/2026-10-22-morning.json (Latent.Space MEDIUM "Claude Mods: Flipping the Harness Inside Out")*

## Key Facts

- **Vendor**: [[anthropic]]
- **Role**: distribution platform for sharing and installing [[claude-mods]]
- **Target user**: [[claude-code]] users who want to install community-authored mods, and mod authors who want to publish
- **Structural analogue**: [[agent-skills]] registry tier + [[agent-plugins]] bundled-distribution tier

## Open Questions

- Pricing / monetization model (free registry, paid listings, Anthropic revenue share?)
- Verification + signing model for mods (who can publish; how installations are trusted)
- Whether ModSmith is first-party-only or federated / self-hostable
- Discovery mechanics (search, ranking, trending, curation)
- Overlap or integration with [[agent-skills]] registry

## Sources

- data/summaries/2026-10-22-morning.json (Latent.Space MEDIUM "Claude Mods: Flipping the Harness Inside Out")
