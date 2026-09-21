---
name: Hacktron AI
description: Ethical AI-assisted offensive-security research firm; used Anthropic's Claude to chain two OpenAI vulnerabilities and compromise multiple OpenAI-employee ChatGPT/Codex accounts (July 2026 responsible disclosure)
type: company
---

# Hacktron AI

> **Type**: company
> **First mentioned**: 2026-09-18-evening
> **Last updated**: 2026-09-21-evening (**Cross-cohort restatement of the Hacktron-vs-OpenAI hack as *"OpenAI goes from hacker to hacked"* + three-person-team named-cohort framing + $6,500 bounty-amount cross-cohort confirmation** — The Rundown AI HIGH cycle-headline *"🔓 OpenAI goes from hacker to hacked"*: *"OpenAI was hacked by a three-person team from security startup Hacktron, who used Anthropic's Claude to exploit vulnerabilities in OpenAI's Discourse forum and employee authentication, gaining access to internal GitHub repositories and employee ChatGPT accounts. The hackers reported the issue and were paid a $6,500 bug bounty"*. TLDR MEDIUM cross-cohort restates the hack in Anthropic-wet-lab-plus-Apple-home-device digest. First-in-wiki: (a) **Three-person-team concrete-team-size canonical anchor** — first-in-wiki *concrete three-person Hacktron-team-size canonical anchor* on the hack (sharpens the 09-18-evening Hacktron-vs-OpenAI hack canonical anchor with a *concrete-headcount-tier canonical anchor*; graduates Hacktron from *unspecified-team-size security-startup framing* into *concrete-three-person-team-size canonical anchor tier*); (b) **"OpenAI goes from hacker to hacked" cycle-headline canonical framing anchor** — The Rundown AI HIGH cycle-headline canonicalizes the Hacktron-vs-OpenAI hack as *canonical mid-Sep-2026 role-inversion tier substrate* (pairs cycle-structurally with the 09-16-morning rogue-OpenAI-and-Hugging-Face-agent-swarm-incident canonical anchor as *canonical twin OpenAI-side-substrate-inversion: OpenAI-agents-hacking-external-targets vs OpenAI-being-hacked* — validates The Rundown AI's *"role-inversion"* framing as canonically-elevated substrate). See [[openai]] + [[anthropic]] + [[claude]] + [[ai-cybersecurity-arms-race]] + [[geoffrey-hinton]] — *source: data/summaries/2026-09-21-evening.json (The Rundown AI HIGH "🔓 OpenAI goes from hacker to hacked"; TLDR MEDIUM "Anthropic wet lab 🧬, Apple home device 🏠, senior dev death spiral 👨‍💻"; researchFindings.additionalContext for OpenAI)*)
> **Previously updated**: 2026-09-18-evening
> **Status**: active
> **Related**: [[anthropic]], [[openai]], [[ai-cybersecurity-arms-race]], [[claude-opus-5]], [[geoffrey-hinton]]

## Summary

Hacktron AI is a cybersecurity research firm that specializes in using frontier AI models as offensive-security tools inside ethical red-team engagements. In July 2026 the group used Anthropic's Claude (both an earlier Opus and a newer Opus-5-tier release) to generate exploit code and chain two OpenAI vulnerabilities — an image-processing bug in OpenAI's Discourse-based community forum, plus an authentication-token cross-service-validity flaw in OpenAI's SSO — into a full compromise of multiple OpenAI-employee ChatGPT and Codex accounts. The compromised accounts had access to connected services including Outlook, Slack, and internal GitHub. Hacktron reported the finding through OpenAI's bounty program on 25 July 2026; OpenAI patched the issues within about 14 hours and paid a $6,500 bounty.

The engagement is widely cited as a canonical *"AI now hacks AI"* case study — evidence that rapid capability gains in foundation models directly amplify red-team and hacking effectiveness. Hacktron's own writeup notes that an earlier Claude Opus version struggled with certain exploitation steps, while a newer release (an Opus-5-tier model) enabled them to generate a working ARM64 remote-code-execution exploit within hours.

## Timeline

- **2026-09-21-evening**: **Cross-cohort restatement of the Hacktron-vs-OpenAI hack + three-person-team named-team-size canonical anchor + $6,500 bounty-amount cross-cohort confirmation + "OpenAI goes from hacker to hacked" cycle-headline canonical role-inversion framing anchor**. The Rundown AI HIGH cycle-headline *"🔓 OpenAI goes from hacker to hacked"*: *"OpenAI was hacked by a three-person team from security startup Hacktron, who used Anthropic's Claude to exploit vulnerabilities in OpenAI's Discourse forum and employee authentication, gaining access to internal GitHub repositories and employee ChatGPT accounts. The hackers reported the issue and were paid a $6,500 bug bounty"*. First-in-wiki: (a) *concrete three-person Hacktron-team-size canonical anchor*; (b) *"OpenAI goes from hacker to hacked" role-inversion cycle-headline canonical framing anchor* — pairs cycle-structurally with the 09-16-morning rogue-OpenAI-and-Hugging-Face-agent-swarm-incident canonical anchor as *canonical twin OpenAI-side-substrate-inversion: OpenAI-agents-hacking-external-targets vs OpenAI-being-hacked*. See [[openai]] + [[anthropic]] + [[ai-cybersecurity-arms-race]] + [[geoffrey-hinton]] — *source: data/summaries/2026-09-21-evening.json (The Rundown AI HIGH "🔓 OpenAI goes from hacker to hacked"; TLDR MEDIUM "Anthropic wet lab 🧬, Apple home device 🏠, senior dev death spiral 👨‍💻"; researchFindings.additionalContext for OpenAI)*

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

- data/summaries/2026-09-21-evening.json (The Rundown AI HIGH "🔓 OpenAI goes from hacker to hacked" — three-person-team + $6,500 bounty cross-cohort restatement + "OpenAI goes from hacker to hacked" role-inversion cycle-headline canonical framing anchor; TLDR MEDIUM "Anthropic wet lab 🧬, Apple home device 🏠, senior dev death spiral 👨‍💻"; researchFindings.additionalContext for OpenAI)
- data/summaries/2026-09-18-evening.json (TLDR — Hacking OpenAI; Anna's Daybreak News — Using AI to Hack AI; Evolving AI Insights — Researchers Hacked OpenAI Using Claude; researchFindings.additionalContext for Claude and ChatGPT)
