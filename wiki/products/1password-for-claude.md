---
name: 1Password for Claude
description: 1Password + Anthropic integration launched Jul 2026 that lets Claude sign into websites and use one-time passcodes on the user's behalf without exposing credentials to the model
type: product
---

# 1Password for Claude

> **Type**: product
> **First mentioned**: 2026-07-23-morning
> **Last updated**: 2026-07-23-morning
> **Status**: active
> **Related**: [[anthropic]], [[claude-cowork]], [[claude-code]], [[agent-frameworks]]

## Summary

1Password for Claude is a July 2026 integration between password-manager [[anthropic]] and 1Password that enables Claude — via Cowork, browser-agent, or Claude Code surfaces — to sign into third-party websites and use one-time passcodes on the user's behalf without exposing raw credentials to the model. The integration addresses a long-standing limitation of browser and desktop agents: how to authenticate into user-owned SaaS accounts securely enough for enterprise/regulated environments while still letting the agent complete multi-step web tasks that require login. 1Password brokers the credential handoff (autofilling into the site rather than passing to the LLM prompt), which keeps credentials outside the training-and-log surface while still unblocking agent flows on Gmail, Salesforce, banking portals, and other authenticated destinations.

## Timeline

- **2026-07-23-morning**: **Launch — 1Password + Anthropic ship "1Password for Claude"** — Future Tools MEDIUM ***"1Password and Anthropic have launched '1Password for Claude,' a new integration that lets Claude sign into websites and use one-time passcodes on behalf of the user without exposing the credentials to the AI, addressing a significant limitation in current AI agents by enabling secure and efficient handling of sensitive tasks"***. Daily-digest Tools & Products anchor. Pairs cycle-structurally with same-cycle [[claude-cowork]] Record-a-Skill screen-recording feature — Cowork now captures workflows *and* has an auth-bridge to execute them on authenticated sites — *source: data/summaries/2026-07-23-morning.json (Future Tools MEDIUM "Claude wants your passwords"; daily-digest Tools & Products)*

## Key Facts

- Vendors: [[anthropic]] + 1Password (joint product)
- Capability: agent-triggered website login + one-time-passcode handling
- Security posture: credentials never enter the LLM prompt/context
- Surface: works with Claude across Cowork / browser-agent / Claude Code contexts
- Positioning: enterprise-grade auth bridge for agentic web workflows

## Open Questions

- Whether the integration is exclusive to Anthropic or a template for other frontier labs (OpenAI ChatGPT Work + Google Antigravity)
- Enterprise vs consumer 1Password plan gating
- Whether MFA methods beyond TOTP one-time passcodes (WebAuthn, push, SMS) are supported
- Which specific Claude surfaces expose the integration first (Cowork? Claude for Chrome? Claude Code browser tool?)
- Whether 1Password logs which sites/actions Claude accessed for audit trail

## Sources

- data/summaries/2026-07-23-morning.json (Future Tools MEDIUM "Claude wants your passwords" — 1Password and Anthropic have launched "1Password for Claude"; daily-digest Tools & Products)
