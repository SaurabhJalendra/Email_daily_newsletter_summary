---
name: PHP2Shell
description: October 2026 pair of CVSS 9.2 unauthenticated RCE vulnerabilities in core PHP (CVE-2026-109618 + CVE-2026-109619) discovered by OpenAI's Patch the Planet + independently by Google Wiz
type: topic
---

# PHP2Shell

> **Type**: topic (named vulnerability cluster)
> **First mentioned**: 2026-10-22-evening
> **Last updated**: 2026-10-22-evening
> **Status**: active (patched upstream; emergency updates in progress)
> **Related**: [[patch-the-planet]], [[openai-daybreak]], [[openai]], [[gpt-5-6]], [[google]], [[gemini-4-argon]], [[ai-cybersecurity-arms-race]], [[aardvark]], [[claude-mythos]], [[anthropic-oss-scanner]]

## Summary

PHP2Shell is the collective name for **two critical, unauthenticated remote-code-execution vulnerabilities in PHP's core engine** disclosed October 21 2026 — **CVE-2026-109618** and **CVE-2026-109619**, both rated **CVSS 9.2**. Successful exploitation lets attackers execute commands with web-worker privileges, disclose memory, steal data, alter sites, or establish persistence on affected PHP deployments. The vulnerabilities affect PHP deployments serving web requests — **PHP-FPM, Apache mod_php, php-cgi, FrankenPHP, and LiteSpeed** — not literally 70% of websites, although PHP powers roughly 70% of sites whose server-side technology can be identified (W3Techs).

The pair was discovered independently by **two parties on the same cycle**: (1) security firm **Calif** using [[openai]]'s [[gpt-5-6]] Sol via the [[patch-the-planet]] initiative; (2) **Wiz** ([[google]] Cloud subsidiary) using [[gemini-4-argon]] + [[gpt-5-6]] + its own Wiz Atlas tool. The coordinated-disclosure response ran two months across OpenAI, security researchers, PHP maintainers, and government agencies before public disclosure. PHP maintainers released fixes for **8.2.35, 8.3.36, 8.4.27, and 8.5.12**; OpenAI shipped a Codex skill for operators to check PHP2Shell exposure. The incident canonicalizes the first major cross-vendor AI-assisted frontier-model-authored OSS-vulnerability-discovery landmark event.

## Timeline

- **2026-10-22-evening**: **PHP2Shell publicly disclosed — AINews HIGH + daily-digest Top Story #1 + Top Story #4 ("critical security vulnerabilities discovered in PHP, Node.js, and other technologies") + TLDR MEDIUM "internet security meltdown" framing** — AINews HIGH *"[AINews] OpenAI's Patch the Planet program is 1 of 2 parties to discover PHP2Shell vulnerabilities in core PHP affecting 70% of the web, using GPT-5.6 Sol; coordinated response over 2 months"* + cycle-headline *"The Big Hardening begins"*. researchFindings.additionalContext for PHP2Shell: *"the collective name for two critical, unauthenticated remote-code-execution vulnerabilities in PHP's core engine: CVE-2026-109618 and CVE-2026-109619 ... affect PHP deployments serving web requests, including PHP-FPM, Apache mod_php, php-cgi, FrankenPHP, and LiteSpeed — not literally 70% of websites, although PHP is used by roughly 70% of sites whose server-side technology can be identified"*. TLDR MEDIUM: *"The internet is facing a major cybersecurity meltdown due to critical security vulnerabilities discovered in PHP, Node.js, and other technologies, prompting urgent updates and patches"*. First-in-wiki: (a) **Two-CVE named-vulnerability-cluster canonical anchor** — CVE-2026-109618 + CVE-2026-109619, both CVSS 9.2; (b) **"Two independent AI-assisted discovery parties on the same cycle" canonical twin-discovery anchor** — Calif (via [[gpt-5-6]] through [[patch-the-planet]]) + [[google]] [[wiz]] (via [[gemini-4-argon]] + [[gpt-5-6]] + Wiz Atlas); first-in-wiki *concrete independently-corroborated frontier-model-assisted OSS-vuln-discovery canonical anchor* on the [[ai-cybersecurity-arms-race]] arc (structurally significant three ways — (i) validates frontier-model-assisted vuln-research with *concrete independent-replication canonical anchor* rather than single-vendor claim; (ii) productizes mid-to-late-2026 as *canonical cross-vendor + cross-model AI-assisted-vulnerability-discovery convergence inflection*; (iii) likely durable reference-anchor for future AI-authored-OSS-CVE discussion); (c) **Two-month coordinated-response cadence canonical anchor** — OpenAI + Calif + Wiz + PHP maintainers + government agencies; (d) **Four-version-fix release canonical patch-cadence anchor — 8.2.35 + 8.3.36 + 8.4.27 + 8.5.12** — covers four supported PHP major-minor lines; (e) **Codex skill for operator PHP2Shell exposure-check canonical anchor** (first-in-wiki concrete named-CVE-specific Codex-skill canonical anchor) + concrete operator-guidance-plus-patching-tools from OpenAI; (f) **Named concrete deployment-surface five-primitive canonical anchor cluster — PHP-FPM + Apache mod_php + php-cgi + FrankenPHP + LiteSpeed** per researchFindings; (g) **Dashboard snapshot via secondary reporting — 68 codebases under review + 1,995 issues found + 679 patches written + 466 accepted upstream** (OpenAI Patch the Planet; secondary-reporting-tier, not primary); (h) **"70% of the web" headline framing with researchFindings-side nuance disclaimer canonical anchor pair** — productizes the AINews framing as *canonical headline-tier* with researchFindings *canonical nuanced-footprint-tier anchor* (PHP ≈ 70% of server-side-identifiable sites per W3Techs, not literally 70% of all websites). Pairs cycle-structurally with 10-20-evening [[anthropic-oss-scanner]] 77-critical + 803-high first-week-findings canonical anchor as *canonical late-Oct-2026 twin frontier-lab OSS-vulnerability-productization canonical anchor pair — OpenAI-outcome-tier (concrete-named-CVE-pair-upstream-patched) + Anthropic-scanner-tier (concrete-named-public-scanner-first-week-findings-count)*. See [[patch-the-planet]] this cycle + [[openai-daybreak]] this cycle + [[gpt-5-6]] this cycle + [[google]] this cycle (Wiz) + [[gemini-4-argon]] this cycle (Wiz-side) + [[ai-cybersecurity-arms-race]] this cycle — *source: data/summaries/2026-10-22-evening.json (AINews HIGH "[AINews] OpenAI's Patch the Planet program is 1 of 2 parties to discover PHP2Shell vulnerabilities in core PHP affecting 70% of the web, using GPT-5.6 Sol; coordinated response over 2 months"; TLDR MEDIUM "Anthropic's AI agent 🤖, Elon's merger 💰, internet security meltdown 👨‍💻"; daily-digest Top Story #1 + Top Story #4; researchFindings.additionalContext for Patch the Planet + GPT-5.6 Sol + PHP2Shell)*

## Key Facts

- **CVE IDs**: CVE-2026-109618 + CVE-2026-109619
- **CVSS**: 9.2 (both)
- **Impact class**: unauthenticated remote code execution + memory disclosure
- **Attacker outcomes**: execute commands with web-worker privileges, disclose memory, steal data, alter sites, establish persistence
- **Affected deployments**: PHP-FPM + Apache mod_php + php-cgi + FrankenPHP + LiteSpeed
- **Fixed PHP versions**: 8.2.35 + 8.3.36 + 8.4.27 + 8.5.12
- **Discovery (party 1)**: security firm **Calif** via [[openai]]'s [[gpt-5-6]] Sol under [[patch-the-planet]]
- **Discovery (party 2, independent)**: **Wiz** ([[google]] Cloud subsidiary) via [[gemini-4-argon]] + [[gpt-5-6]] + Wiz Atlas
- **Coordinated-response window**: ~2 months (OpenAI + Calif + Wiz + PHP maintainers + government agencies)
- **Operator tooling**: OpenAI Codex skill for PHP2Shell exposure-check
- **Footprint context**: PHP powers ~70% of sites whose server-side technology can be identified (W3Techs); the "70% of the web" framing is a headline shorthand, not a literal site-count
- **Corroborating sources (per researchFindings)**: SC Media, Infosecurity Magazine, Tom's Hardware, SecurityWeek, BleepingComputer, Singapore Cyber Security Agency

## Open Questions

- Technical root cause — which PHP engine subsystem(s) are affected (parser, SAPI handler, memory-management, serialization)?
- Was either CVE actively exploited pre-disclosure (government-agency involvement suggests nation-state concern)?
- Which government agencies coordinated — CISA? Singapore CSA? UK NCSC? Five Eyes? EU ENISA?
- Full roster of corroborating security vendors — are there parties beyond Calif + Wiz?
- How much human-review time vs AI-identification time in the two-month response?
- Does the dashboard snapshot (68 codebases + 1,995 issues + 679 patches + 466 accepted) include this cycle's PHP patches or predate them?

## Sources

- data/summaries/2026-10-22-evening.json (AINews HIGH "[AINews] OpenAI's Patch the Planet program is 1 of 2 parties to discover PHP2Shell vulnerabilities in core PHP affecting 70% of the web, using GPT-5.6 Sol; coordinated response over 2 months"; TLDR MEDIUM "Anthropic's AI agent 🤖, Elon's merger 💰, internet security meltdown 👨‍💻"; daily-digest Top Story #1 + Top Story #4; researchFindings.additionalContext for Patch the Planet + GPT-5.6 Sol + PHP2Shell + OpenAI)
