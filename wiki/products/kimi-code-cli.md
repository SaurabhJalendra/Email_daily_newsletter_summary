---
name: Kimi Code CLI
description: Moonshot AI's terminal-tier AI coding agent — reads/edits code, runs shell commands, searches files, fetches web pages, and chooses next step from feedback; open-sourced on GitHub (MoonshotAI/kimi-code); ships as the K3-companion agent-CLI product
type: product
---

# Kimi Code CLI

> **Type**: product
> **Vendor**: [[moonshot-ai]]
> **First mentioned**: 2026-07-21-morning
> **Last updated**: 2026-07-21-morning
> **Status**: shipped (open-source on github.com/MoonshotAI/kimi-code)
> **Related**: [[moonshot-ai]], [[kimi-k3]], [[claude-code]], [[grok-build]], [[openai-codex]], [[zcode]], [[mimo-code]], [[software-factories]]

## Summary

Kimi Code CLI is [[moonshot-ai]]'s terminal-tier AI coding agent, launched alongside [[kimi-k3]] in mid-July 2026. It runs entirely in the terminal, reads and edits code, executes shell commands, searches files, fetches web pages, and chooses its next step based on feedback from earlier actions — the same core agentic-CLI shape as [[claude-code]], OpenAI Codex CLI, and xAI's [[grok-build]]. TLDR AI's launch note ties Kimi Code CLI directly to the K3 release week, positioning it as Moonshot's *vertical-integration answer* to the coding-agent-CLI category now defined by Anthropic, OpenAI, and xAI.

The launch extends the Chinese-frontier-lab pattern of pairing a foundation-model release with a first-party coding-agent product (Alibaba's Qoder alongside Qwen, Zhipu's [[zcode]] alongside [[glm-5-2]], Xiaomi's [[mimo-code]] / [[harnessx]]). Kimi Code CLI is distributed as an open-source repository on GitHub, aligning with Moonshot's broader open-weights posture.

## Timeline

- **2026-07-21-morning**: **Kimi Code CLI launched — terminal AI coding agent that reads/edits code, runs shell commands, searches files, fetches web pages, chooses next step from feedback**. Open-sourced on GitHub at MoonshotAI/kimi-code. TLDR AI HIGH cycle-headline placement alongside Qwen 3.8 + Netflix's LLM stack — *source: data/summaries/2026-07-21-morning.json (TLDR AI HIGH "Qwen 3.8 ✨, Kimi Code CLI 👨‍💻, Netflix's LLM stack 🤖")*

## Key Facts

- Vendor: [[moonshot-ai]]
- Interface: terminal-tier CLI (parallel to [[claude-code]], Codex CLI, [[grok-build]])
- Core capabilities: read/edit code, run shell commands, search files, fetch web pages, choose next step from feedback
- Distribution: open-source on GitHub — github.com/MoonshotAI/kimi-code
- Launch timing: same week as [[kimi-k3]] formal release (mid-July 2026)
- Likely default model: [[kimi-k3]] (2.8T MoE, $3/M input + $15/M output pricing)
- Category peers: [[claude-code]] (Anthropic), OpenAI Codex CLI, [[grok-build]] (xAI SuperGrok Heavy), Alibaba Qoder, [[zcode]] (Zhipu), [[mimo-code]] (Xiaomi)

## Open Questions

- License terms (MIT / Apache 2.0 / Moonshot-specific)?
- Whether the CLI defaults to K3 or is model-agnostic (can it drive Fable 5, Sonnet 5, GPT-5.6 Sol via API)?
- Benchmarked performance vs [[claude-code]] on SWE-Bench Pro / Terminal-Bench 2.1 / FrontierCode?
- Integration with existing IDEs (VS Code, Cursor, Windsurf) — is there an editor extension planned?
- Whether Kimi Code CLI ships tool-integration equivalents to Claude Code MCP / Skills / plugins?

## Sources

- data/summaries/2026-07-21-morning.json (TLDR AI HIGH "Qwen 3.8 ✨, Kimi Code CLI 👨‍💻, Netflix's LLM stack 🤖")
