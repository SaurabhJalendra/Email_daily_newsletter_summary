---
name: Moltbot
description: Open-source self-hosted personal AI assistant (formerly Clawdbot, later OpenClaw); Anthropic-API-powered always-on agent
type: product
---

# Moltbot

> **Type**: product
> **First mentioned**: 2026-01-25
> **Last updated**: 2026-02-04
> **Status**: active (renamed from Clawdbot following Anthropic trademark dispute; also referenced as OpenClaw)
> **Related**: [[anthropic]], [[claude-opus-4-5]], [[claude-cowork]], [[moltbook]], [[agent-frameworks]]

## Summary

Moltbot is an open-source, self-hosted personal AI assistant that lives inside messaging apps (Telegram, WhatsApp, Discord, Slack) and runs with persistent memory, proactive messaging, and full local-machine access. It was originally released as "Clawdbot" by developer Peter Steinberger (formerly of PSPDFKit) in late January 2026 and rapidly went viral — crossing 15,000+ GitHub stars within days and 18,000+ within three weeks. Following a trademark dispute with [[anthropic]] (the name evoked "Claude"), the project was rebranded to Moltbot and later OpenClaw. It uses the [[anthropic]] API for its core intelligence and is commonly deployed either locally on a laptop or on a Hetzner VPS for 24/7 availability. Distinguishing characteristics vs traditional chatbots: it does not wait for prompts (can initiate conversations), remembers across sessions, and can take action on the host machine (shell commands, browser automation, file operations).

## Timeline

- **2026-02-04**: Further rebrands to "OpenClaw"; framed as modular "skills"-based open-source AI assistant; the social platform [[moltbook]] built on the same skills framework reaches 1.5M AI-agent users — *source: The Rundown AI "social network where humans just watch"; TLDR AI "MiniMax / Moltbook / AI job market"; Mindstream "There's a new social media"; World of AI "AI Is Leaving the ChatBox"*
- **2026-02-01**: Officially rebranded from Clawdbot to Moltbot following [[anthropic]] trademark dispute; continued viral coverage on "Tech Twitter"; small language models (Gemma 3, SmolLM2, Phi-4 Mini, Qwen2.5) emerge as alternative on-device backend — *source: Hello, World! "Lobster eating Tech Jobs to Cloudflare Caught Lying"*
- **2026-01-27**: Over 18,000 GitHub stars in three weeks; described as having "like superpowers" and "1,000% worth it"; Anthropic launches Security Center for Claude Code partly in response to surge ("Claude CoWork effect") — *source: World of AI "ClawdBot: 24/7 AI Assistant"; Staying Ahead with AI "setup your 24/7 ai assistant"; AI Breakfast "Clawdbot"; Superhuman "Clawdbot, Claude in Excel"*
- **2026-01-25**: Clawdbot launches publicly — persistent memory across conversations, proactive messaging, full computer access (terminal, browser automation), 5-minute Telegram deployment; Nate Herk releases comparison videos — *source: 2026-01-25 cycle (community discussion on Skool, Hacker News, Twitter)*

## Key Facts

- Creator: Peter Steinberger (ex-PSPDFKit founder)
- License: open source (GitHub)
- Model: uses [[anthropic]] Claude API (typically [[claude-opus-4-5]])
- Key capabilities: persistent long-term memory, proactive messaging, full local-machine access (shell, browser, files)
- Deployment: local laptop (dev) or Hetzner VPS (~low-cost 24/7)
- Channels: WhatsApp, Telegram, Discord, Slack
- Naming saga: Clawdbot → Moltbot (Anthropic trademark dispute) → OpenClaw (further rebrand / open-source framing)
- Scale: 15K→18K+ GitHub stars in three weeks after launch
- Security posture: concerning — researchers observed agents requesting API keys, testing credentials, suggesting destructive commands

## Open Questions

- What was the exact trademark/legal basis for the Clawdbot → Moltbot rename?
- How does [[moltbook]] (the AI-agent social network) technically relate — same author, same skills runtime?
- Is there a sanctioned Anthropic API-usage agreement, or does it rely on standard user API keys?
- What is the long-term maintenance plan given security incident history?

## Sources

- data/summaries/2026-01-25.json (community coverage — launch)
- data/summaries/2026-01-27.json (World of AI — ClawdBot; Staying Ahead with AI; AI Breakfast; Superhuman — Clawdbot, Claude in Excel)
- data/summaries/2026-02-01.json (Hello, World! — Lobster eating Tech Jobs; Cloudflare Caught Lying — Moltbot rebrand)
- data/summaries/2026-02-02.json (AI Automation Society — Nate Herk comparison videos)
- data/summaries/2026-02-04.json (The Rundown AI — social network where humans just watch; TLDR AI — MiniMax / Moltbook; Mindstream — There's a new social media; World of AI — AI Is Leaving the ChatBox; Superhuman — Moltbook 1.5M)
