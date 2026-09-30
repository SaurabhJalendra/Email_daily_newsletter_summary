---
name: Dots
description: OpenAI's Sep 29 2026 always-on persistent agents launched at DevDay 2026 — each dot runs on its own cloud computer powered by GPT-6 Astra, connects to 4,000+ apps + Slack/Teams, works before you ask, and requires approval for consequential actions
type: product
---

# Dots

> **Type**: product
> **Vendor**: [[openai]]
> **First mentioned**: 2026-09-30-evening
> **Last updated**: 2026-09-30-evening (**Launch — Sam Altman's "new thing" reveal at [[openai]] DevDay 2026 in San Francisco. World of AI HIGH cycle-headline *"OpenAI DROPS Dots! (OPENAI DEVDAY RECAP)"*: *"OpenAI introduced Dots, persistent agents that can connect to apps and continue working in the background, aiming to provide always-on assistance. Dots are included free with Pro and Business Premium plans and do not count against ChatGPT usage limits"*. AINews HIGH: *"Dots is a new feature that allows for always-on agents powered by GPT-6 Astra, running on cloud computers and connecting to 4,000+ apps and Slack/Teams, enabling users to set boundaries on what the agent can do on its own, what needs approval, and what it must never do"*. researchFindings.additionalContext: *"OpenAI introduced 'dots' on September 29, 2026, as always-on AI agents that pursue user goals after an initial request rather than waiting for step-by-step instructions. Each dot has its own cloud computer, can browse the web, use connected apps, create files, research, analyze data, draft documents, and write software, while learning from user feedback. OpenAI says dots are powered by GPT-6 Astra and can work continuously, sometimes delivering useful work before the user explicitly asks. They are rolling out in ChatGPT to Pro and Business Premium users in eligible markets, with integrations including Slack and Microsoft Teams"* + *"consequential actions—such as sending messages, changing passwords, or deleting data—require approval by default"*. Positions as OpenAI's *canonical persistent-autonomous-agent-tier substrate* competing with [[meta-muse-agent]], Google Gemini Spark, and agent startups. See [[openai]] + [[chatgpt]] + [[openai-astra]] + [[agent-frameworks]] — *source: data/summaries/2026-09-30-evening.json (World of AI HIGH "OpenAI DROPS Dots! (OPENAI DEVDAY RECAP) 🎬🔥"; AINews HIGH "[AINews] OpenAI DevDay 2026: Dots, 6.1 Sol, Ultrafast, Decisions API, Agents API, Spaces, Marketplace, and 1.2 Billion ChatGPT WAU"; researchFindings.additionalContext — OpenAI Dots)*)
> **Status**: rolling out (Pro + Business Premium tiers, eligible markets)
> **Related**: [[openai]], [[chatgpt]], [[openai-astra]], [[chatgpt-spaces]], [[meta-muse-agent]], [[agent-frameworks]], [[chatgpt-work]], [[dots-boundary-controls]]

## Summary

Dots is [[openai]]'s Sep 29 2026 DevDay launch of **persistent, always-on AI agents** that pursue user goals in the background after an initial request rather than waiting for turn-by-turn instructions. Each dot has its own cloud computer powered by [[openai-astra]] (GPT-6 Astra) and can browse the web, use connected apps, create files, research, analyze data, draft documents, and write software while learning from user feedback. Dots connect to 4,000+ apps plus Slack and Microsoft Teams, and OpenAI frames them as sometimes delivering useful work *before the user explicitly asks*.

Structurally, Dots productizes OpenAI's shift from turn-based chatbot to *persistent-autonomous-agent-tier substrate*. It sits alongside [[chatgpt-work]] (async agentic workspace) and the [[openai-agents-api]] (developer-facing agent substrate) as the consumer-tier surface of OpenAI's persistent-agent stack. Consequential actions (sending messages, changing passwords, deleting data) require approval by default, and users can define per-agent boundaries — what a dot may do on its own, what needs approval, and what it must never do — extending the mid-2026 [[agent-plugins]] permissioning pattern into a *first-class agent-boundary-control substrate*.

## Timeline

- **2026-09-29**: **Launch at [[openai]] DevDay 2026 in San Francisco** — Sam Altman unveils Dots as his "new thing" among 20+ DevDay announcements. Powered by [[openai-astra]] (GPT-6 Astra). Free with Pro and Business Premium plans; does not count against ChatGPT usage limits. Connects to 4,000+ apps + Slack + Teams. Three-tier boundary control (do-on-own / needs-approval / never). Consequential actions (messages, passwords, deletes) require approval by default. — *source: data/summaries/2026-09-30-evening.json (World of AI HIGH; AINews HIGH; researchFindings.additionalContext — OpenAI Dots)*

## Key Facts

- **Vendor**: [[openai]]
- **Launch**: 2026-09-29 at DevDay 2026
- **Underlying model**: [[openai-astra]] (GPT-6 Astra)
- **Runtime**: each dot has its own cloud computer
- **Integrations**: 4,000+ connected apps + Slack + Microsoft Teams
- **Capabilities**: web browsing, connected-app use, file creation, research, data analysis, document drafting, software authoring
- **Learning**: learns from user feedback
- **Availability**: rolling out in ChatGPT to Pro and Business Premium users in eligible markets
- **Pricing**: included free with Pro and Business Premium; does not count against ChatGPT usage limits
- **Boundary controls**: user-defined three-tier — on-own / needs-approval / must-never-do
- **Default policy**: consequential actions (sending messages, changing passwords, deleting data) require approval by default

## Open Questions

- Concurrency limits — how many dots can a Pro/Business Premium user run in parallel
- Whether Dots are also available to Plus tier or restricted to Pro + Business Premium indefinitely
- The 4,000+ app-integration catalog composition + how it maps to [[agent-plugins]] and MCP
- Rollout schedule outside "eligible markets" — EU + APAC availability
- Whether Dots inherit ChatGPT Memory + [[computer-history]] persistent-context
- Enterprise-tier governance surface (audit logs, admin-scoped boundary policies)

## Sources

- data/summaries/2026-09-30-evening.json (World of AI HIGH "OpenAI DROPS Dots! (OPENAI DEVDAY RECAP) 🎬🔥"; AINews HIGH "[AINews] OpenAI DevDay 2026: Dots, 6.1 Sol, Ultrafast, Decisions API, Agents API, Spaces, Marketplace, and 1.2 Billion ChatGPT WAU"; Anna's Daybreak MEDIUM "Razor the Ranks and Infections Drive Cancer"; researchFindings.additionalContext — OpenAI + OpenAI Dots)
