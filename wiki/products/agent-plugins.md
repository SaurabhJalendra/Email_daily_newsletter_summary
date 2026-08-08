---
name: Agent Plugins
description: OpenAI's Aug 2026 open standard for bundling agent skills and MCP server configurations — packages skills + tools + MCP configs into distributable, portable units
type: product
---

# Agent Plugins

> **Type**: product
> **Vendor**: [[openai]]
> **First mentioned**: 2026-08-07-evening
> **Last updated**: 2026-08-08-morning (**AlphaSignal HIGH canonicalizes Agent Plugins 1.0.0 with concrete versioning + explicit multi-vendor cross-ecosystem support + concrete host-surface enumeration + concrete co-signer enumeration**. AlphaSignal HIGH: *"OpenAI has launched Agent Plugins 1.0.0, an open, vendor-neutral standard for packaging agent skills and MCP servers into one portable format that works everywhere, including ChatGPT, Codex, Cursor, GitHub Copilot, VS Code, and Kiro. The format is supported by Google, Amazon, Microsoft, and other companies"*. TLDR AI MEDIUM: *"Agent Plugins 1.0.0 has been introduced as an open standard to simplify packaging reusable AI Agent Skills and MCP servers into plugins"*. First publicly framed on this cycle: (a) *"1.0.0" concrete version-anchor* — sharpens the 08-07-evening un-versioned framing into a *concrete v1.0.0 canonical-launch anchor* (structurally significant as *stable-release-tier posture* rather than *beta / preview*); (b) *"Open, vendor-neutral standard" explicit multi-vendor cross-ecosystem framing* — sharpens the 08-07-evening OpenAI-branded framing into a *canonical multi-vendor cross-ecosystem support* posture; (c) *ChatGPT + Codex + Cursor + GitHub Copilot + VS Code + Kiro six-host-surface enumeration* — first publicly framed *concrete six-surface host-enumeration* on Agent Plugins in this wiki; canonicalizes cross-vendor developer + prosumer IDE + editor + AI-agent-tool support; (d) *Google + Amazon + Microsoft + others co-signer enumeration* — first publicly framed *concrete three-hyperscaler + others co-signer enumeration* on Agent Plugins (validates the 08-07-evening *"OpenAI + Amazon + Cursor + Microsoft + Vercel"* [[ai-plugin-standard]] cohort with an *expanded Google-co-signer* addition + likely-includes-Vercel implicit membership); (e) *"portable format that works everywhere"* framing — sharpens the 08-07-evening *"packaging tier"* framing into a *"works everywhere"* portability-first canonical posture. Structurally significant three ways: (i) **Multi-vendor cross-ecosystem support with Google/Amazon/Microsoft co-signers productizes Agent Plugins as *industry-wide-consensus canonical packaging standard*** — sits alongside HTTP/1.1 + MCP + Docker OCI as *cross-vendor + cross-hyperscaler adopted-by-all-major-vendors substrate*; resolves the 08-07-evening tension over whether Agent Plugins is OpenAI-side implementation of [[ai-plugin-standard]] or separate spec — this cycle's *multi-vendor* framing suggests they may be the same canonical standard; (ii) **Six-host-surface enumeration canonicalizes the cross-vendor developer + editor + IDE + AI-agent-tool + prosumer surface** — extends the mid-2026 *cross-vendor MCP substrate* into a *cross-vendor plugin-packaging tier surface* — canonicalizes the multi-vendor consensus that plugin-packaging becomes *standard-substrate rather than per-vendor primitive*; (iii) **Google-added-to-co-signer-list** — first publicly framed *Google-side Agent Plugins support* in this wiki, structurally significant as *Google explicitly aligns with OpenAI-branded canonical packaging standard* despite Google's parallel Gemini + Antigravity + Vertex AI plugin-ecosystem — validates the *multi-vendor consensus tier* on Agent Plugins as *canonical industry-wide standard*. See [[openai]] + [[model-context-protocol]] + [[ai-plugin-standard]] + [[claude-skills]] + [[cursor]] + [[github-agent-hq]] — *source: data/summaries/2026-08-08-morning.json (AlphaSignal HIGH "OpenAI GPT-5.6 Sol 🧠, OpenAI Agent Plugins Standard 🔌, Block Buzz Work"; TLDR AI MEDIUM "GPT-5.6 Luna default 🌙, Agent Plugins 🔌, AMD Taalas acquisition 🧩")*)
> **Previously updated**: 2026-08-07-evening (**Launched — OpenAI ships Agent Plugins as an open standard for bundling agent skills and MCP server configs, alongside unlimited GPT-5.6 Luna text chats for free + Go users**. AINews HIGH: *"OpenAI has launched Agent Plugins, an open standard for bundling agent skills and MCP server configs, and has introduced unlimited text chats with GPT-5.6 Luna for free and Go users"*. Daily-digest Top Story #2: *"OpenAI launches Agent Plugins, an open standard for bundling agent skills and MCP server configs, and introduces unlimited text chats with GPT-5.6 Luna for free and Go users"*. First publicly framed on this cycle: (a) *OpenAI-branded "Agent Plugins" open-standard* — first publicly framed OpenAI-side canonical agent-plugin packaging spec in this wiki; (b) *bundles skills + MCP server configs into single distributable unit* — sharpens the fragmented pattern (skills + tools + MCP configs distributed separately) into a *packaged-unit distribution primitive*. Sits in complementary/competitive tension with the same-week [[ai-plugin-standard]] cohort (Amazon + Cursor + Microsoft + OpenAI + Vercel) — OpenAI is a co-signer on both, suggesting Agent Plugins is either the OpenAI-side implementation of the multi-vendor standard or a separate OpenAI-authored spec being harmonized with it. Structurally significant two ways: (i) **First-vendor-branded "agent plugin standard" packaging primitive** — sharpens the mid-2026 [[model-context-protocol]] tool-interop foundation with a *plugin-packaging-tier open standard* on top of MCP; (ii) **Bundles MCP configs into agent skills** — canonicalizes MCP as substrate that ships *inside* higher-level plugin bundles rather than as user-configured integrations. See [[openai]] + [[model-context-protocol]] + [[ai-plugin-standard]] + [[agent-frameworks]] + [[claude-skills]] — *source: data/summaries/2026-08-07-evening.json (AINews HIGH "[AINews] AMD buys Taalas"; daily-digest Top Story #2)*)
> **Status**: launched
> **Related**: [[openai]], [[model-context-protocol]], [[ai-plugin-standard]], [[agent-frameworks]], [[claude-skills]], [[gpt-5-6]]

## Summary

Agent Plugins is [[openai]]'s open standard for bundling agent skills and MCP server configurations into distributable, portable units. Launched August 6–7, 2026 alongside the announcement that GPT-5.6 Luna text chats are now unlimited for free and Go users, the standard sits on top of [[model-context-protocol]] as a *packaging-tier* primitive: instead of end-users configuring MCP servers manually per assistant, a single plugin bundle carries the skills, tool configs, and MCP server declarations together.

The launch pairs structurally with the same-week [[ai-plugin-standard]] cohort (Amazon + Cursor + Microsoft + OpenAI + Vercel converging on a shared plugin spec) — OpenAI is a co-signer of both, suggesting Agent Plugins is either OpenAI's implementation of the multi-vendor standard or a separate spec being harmonized with it. The bundling-of-MCP-configs pattern canonicalizes MCP as substrate shipping *inside* higher-level plugin bundles rather than as user-configured raw integrations.

## Timeline

- **2026-08-07-evening**: **Launched — OpenAI ships Agent Plugins as an open standard for bundling agent skills + MCP server configs; unveiled alongside unlimited GPT-5.6 Luna text chats for free + Go users**. AINews HIGH cycle-headline "[AINews] AMD buys Taalas" lists Agent Plugins as one of the day's canonical OpenAI motions; daily-digest Top Story #2 anchor. First publicly framed *OpenAI-branded agent-plugin packaging standard* in this wiki — *source: data/summaries/2026-08-07-evening.json (AINews HIGH "[AINews] AMD buys Taalas"; daily-digest Top Story #2)*

## Key Facts

- Vendor: [[openai]]
- Category: open standard for agent-plugin packaging
- Bundled contents: agent skills + MCP server configurations
- Substrate: sits on top of [[model-context-protocol]] as packaging tier
- Companion launch: unlimited GPT-5.6 Luna text chats for free + Go tier users
- Standards adjacency: co-signer with Amazon + Cursor + Microsoft + Vercel on the same-week [[ai-plugin-standard]]

## Open Questions

- Is Agent Plugins the OpenAI-side implementation of the [[ai-plugin-standard]] multi-vendor spec, or a distinct standard being harmonized?
- Plugin bundle format (JSON manifest? OCI-style layered? Signed package with provenance?)
- Distribution channel — ChatGPT plugin marketplace, npm-like registry, self-hosted, or all three?
- Runtime enforcement — does the plugin bundle carry sandboxing/permission scoping, or is that on the host assistant?
- Does [[anthropic]]'s [[claude-skills]] pattern become interoperable with Agent Plugins?

## Sources

- data/summaries/2026-08-07-evening.json (AINews HIGH "[AINews] AMD buys Taalas" — OpenAI has launched Agent Plugins, an open standard for bundling agent skills and MCP server configs, and has introduced unlimited text chats with GPT-5.6 Luna for free and Go users; daily-digest Top Story #2 — OpenAI launches Agent Plugins)
