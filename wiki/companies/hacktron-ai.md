---
name: Hacktron AI
description: Ethical AI-assisted offensive-security research firm; used Anthropic's Claude to chain two OpenAI vulnerabilities and compromise multiple OpenAI-employee ChatGPT/Codex accounts (July 2026 responsible disclosure)
type: company
---

# Hacktron AI

> **Type**: company
> **First mentioned**: 2026-09-18-evening
> **Last updated**: 2026-09-18-evening
> **Status**: active
> **Related**: [[anthropic]], [[openai]], [[ai-cybersecurity-arms-race]], [[claude-opus-5]]

## Summary

Hacktron AI is a cybersecurity research firm that specializes in using frontier AI models as offensive-security tools inside ethical red-team engagements. In July 2026 the group used Anthropic's Claude (both an earlier Opus and a newer Opus-5-tier release) to generate exploit code and chain two OpenAI vulnerabilities — an image-processing bug in OpenAI's Discourse-based community forum, plus an authentication-token cross-service-validity flaw in OpenAI's SSO — into a full compromise of multiple OpenAI-employee ChatGPT and Codex accounts. The compromised accounts had access to connected services including Outlook, Slack, and internal GitHub. Hacktron reported the finding through OpenAI's bounty program on 25 July 2026; OpenAI patched the issues within about 14 hours and paid a $6,500 bounty.

The engagement is widely cited as a canonical *"AI now hacks AI"* case study — evidence that rapid capability gains in foundation models directly amplify red-team and hacking effectiveness. Hacktron's own writeup notes that an earlier Claude Opus version struggled with certain exploitation steps, while a newer release (an Opus-5-tier model) enabled them to generate a working ARM64 remote-code-execution exploit within hours.

## Timeline

- **2026-09-18-evening**: Multi-newsletter coverage (TLDR MEDIUM + Anna's Daybreak News MEDIUM + Evolving AI Insights MEDIUM) canonicalizes the Hacktron-vs-OpenAI hack as *"AI hacks AI"* reference-case. Notes: chained two vulnerabilities → compromised multiple OpenAI-employee ChatGPT and Codex accounts → reached OpenAI's internal GitHub, Slack, Outlook; OpenAI patched in ~14 hours; $6,500 bounty; researchFindings adds *"initial attempt with earlier Claude Opus struggled; newer Opus 5-tier release enabled working ARM64 RCE within hours"*. Framed as evidence of AI-assisted offensive security and cross-service authentication weakness in AI platforms — *source: data/summaries/2026-09-18-evening.json (TLDR MEDIUM "Hacking OpenAI 👨‍💻, Claude leads R&D 🤖, Safari MCP 🌍"; Anna's Daybreak News MEDIUM "Using AI to Hack AI and Measles Breaker"; Evolving AI Insights MEDIUM "🚨 Researchers Hacked OpenAI Using Claude"; researchFindings.additionalContext for OpenAI + Claude + ChatGPT)*

## Key Facts

- Ethical / bug-bounty context (not black-hat) — findings reported through OpenAI's responsible-disclosure program
- Uses Claude (Anthropic) as core exploit-generation substrate; earlier Opus struggled, Opus 5-tier release enabled working ARM64 RCE within hours
- Attack chain: Discourse forum image-processing vulnerability + OpenAI SSO auth-token cross-service-validity flaw → OpenAI-employee ChatGPT/Codex account takeover → internal GitHub + Slack + Outlook access
- Disclosed to OpenAI on 25 July 2026; patched in ~14 hours; $6,500 bounty paid
- Canonical example: "AI now hacks AI"

## Open Questions

- Team size, funding, other engagements
- Which specific Claude Opus versions were used (dates, checkpoint identifiers)
- Whether Hacktron has run comparable engagements against other frontier labs
- Whether Hacktron will publish the full ARM64 RCE exploit or keep it private
- Long-term relationship with Anthropic (any Claude-usage restrictions arising from this engagement)

## Sources

- data/summaries/2026-09-18-evening.json (TLDR — Hacking OpenAI; Anna's Daybreak News — Using AI to Hack AI; Evolving AI Insights — Researchers Hacked OpenAI Using Claude; researchFindings.additionalContext for Claude and ChatGPT)
