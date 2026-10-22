---
name: Patch the Planet
description: OpenAI Daybreak initiative with Trail of Bits for AI-assisted vulnerability discovery and coordinated disclosure in critical OSS; first major outcome Oct 2026 — PHP2Shell
type: product
---

# Patch the Planet

> **Type**: product (program within [[openai-daybreak]])
> **Vendor**: [[openai]] + Trail of Bits (named partner)
> **First mentioned**: 2026-06-23-evening (as part of Daybreak expansion)
> **Last updated**: 2026-10-22-evening
> **Status**: active — first major coordinated-disclosure outcome Oct 21–22 2026 ([[php2shell]])
> **Related**: [[openai]], [[openai-daybreak]], [[codex-security]], [[gpt-5-6]], [[php2shell]], [[ai-cybersecurity-arms-race]], [[anthropic-oss-scanner]], [[google]], [[aardvark]], [[claude-mythos]], [[project-glasswing]]

## Summary

Patch the Planet is [[openai]]'s coordinated-disclosure initiative inside the [[openai-daybreak]] cybersecurity program, launched in **June 2026** with Trail of Bits as named engineering partner. It pairs AI-assisted vulnerability research — [[codex-security]] + frontier models including [[gpt-5-6]] Sol — with open-source maintainers, security researchers, and government agencies, aiming to turn AI-discovered flaws into validated patches shipped upstream with the maintainer-bandwidth problem explicitly addressed (findings filtered first + fixing-assist rather than autonomous-scan-dump).

**October 21–22 2026** marks its first major public outcome: Patch the Planet coordinated a **two-month response** between OpenAI, security firm Calif, maintainers, and government agencies around the [[php2shell]] vulnerability pair in core PHP affecting roughly 70% of websites (whose server-side technology can be identified). The incident productizes Patch the Planet from *announced-defender-program* into *concrete-ecosystem-wide-coordinated-disclosure-platform operator* with a flagship landmark CVE outcome.

## Timeline

- **2026-10-22-evening**: **PHP2Shell canonical coordinated-disclosure outcome anchor — two CVEs (CVE-2026-109618 + CVE-2026-109619, CVSS 9.2) + two-month coordinated response + Codex skill for operator exposure-check + ~70%-of-web PHP footprint canonical anchor cluster** — AINews HIGH "[AINews] OpenAI's Patch the Planet program is 1 of 2 parties to discover PHP2Shell vulnerabilities in core PHP affecting 70% of the web, using GPT-5.6 Sol; coordinated response over 2 months": *"OpenAI's Patch the Planet program, in collaboration with security firm Calif, discovered two critical PHP vulnerabilities, PHP2Shell, affecting 70% of the web, using GPT-5.6 Sol"* + *"The discovery and remediation efforts involved a two-month coordinated response between OpenAI, security researchers, PHP maintainers, and government agencies, demonstrating the potential of AI-assisted vulnerability research in accelerating defensive cybersecurity"* + *"PHP maintainers released fixes for versions 8.2.35, 8.3.36, 8.4.27, and 8.5.12, with OpenAI providing guidance and tools for patching and vulnerability assessment"* + *"OpenAI also announced the release of a Codex skill to help operators check for PHP2Shell exposure and provided tools for patching and vulnerability assessment"*. researchFindings.additionalContext canonicalizes dashboard snapshot (secondary reporting): **68 codebases under review + 1,995 issues found + 679 patches written + 466 accepted upstream**. First-in-wiki: (a) **PHP2Shell as Patch the Planet's first named coordinated-disclosure outcome canonical anchor** — graduates Patch the Planet from *announced-program* (06-23/06-25 2026) into a *concrete-coordinated-ecosystem-disclosure-outcome with named-CVEs + named-partner-security-firm (Calif) + named-coordination-partners (PHP maintainers + government agencies) + named-independent-corroboration ([[google]] [[wiz]] via [[gemini-4-argon]] + [[gpt-5-6]] + Wiz Atlas) canonical anchor tier*; (b) **"Two-month coordinated response" canonical cadence anchor** — productizes Patch the Planet as *canonical late-Oct-2026 ~60-day coordinated-disclosure-cadence operator* on the AI-cybersecurity substrate; (c) **Codex skill for PHP2Shell exposure-check canonical operator-tooling anchor** — first-in-wiki *concrete named-vulnerability-exposure-check Codex-skill canonical anchor* (sits adjacent to [[claude-skills]] + [[openai-codex]] skill ecosystem) — productizes Patch the Planet as *delivering operator-side skills, not just upstream patches*; (d) **Dashboard-snapshot four-primitive canonical anchor (68 codebases + 1,995 issues + 679 patches + 466 accepted upstream)** — first-in-wiki *concrete AI-authored-OSS-patch upstream-acceptance-count canonical anchor tier* (~70% patch-acceptance rate from secondary reporting); (e) **~70% of web PHP footprint context + concrete named deployment surfaces (PHP-FPM + Apache mod_php + php-cgi + FrankenPHP + LiteSpeed) canonical anchor** per researchFindings for [[php2shell]]. See [[openai-daybreak]] this cycle + [[php2shell]] (NEW) + [[gpt-5-6]] this cycle + [[openai]] this cycle + [[google]] this cycle + [[ai-cybersecurity-arms-race]] this cycle — *source: data/summaries/2026-10-22-evening.json (AINews HIGH "[AINews] OpenAI's Patch the Planet program is 1 of 2 parties to discover PHP2Shell vulnerabilities in core PHP affecting 70% of the web, using GPT-5.6 Sol; coordinated response over 2 months"; daily-digest Top Story #1 + Tools & Products; researchFindings.additionalContext for Patch the Planet + GPT-5.6 Sol + PHP2Shell + OpenAI)*

- **2026-06-25-morning**: **Mindstream cycle-2 confirmation of Trail of Bits partnership** — *"OpenAI is launching a new project called Patch the Planet to help open source developers find and fix security issues before they turn into bigger problems, in partnership with cybersecurity firm Trail of Bits"* + concrete joint-engineering-review process (OpenAI + Trail of Bits engineers review possible code issues, help create patches and tests, use Codex Security to support the process) + concrete "filtering findings first and making the fixing process easier" maintainer-bandwidth-targeting framing — see [[openai-daybreak]] for full anchor detail — *source: data/summaries/2026-06-25-morning.json (Mindstream MEDIUM "OpenAI is hunting bugs")*

- **2026-06-24-morning**: **Trail of Bits + HackerOne named-partner roster first mentioned** — The AI Field HIGH-priority — *source: data/summaries/2026-06-24-morning.json (The AI Field HIGH)*

- **2026-06-23-evening**: **Patch the Planet announced as part of [[openai-daybreak]] expansion alongside Codex Security plugin + Cyber Partner Program + full GPT-5.5-Cyber release** — AINews HIGH: *"OpenAI has expanded its Daybreak program ... Patch the Planet for securing critical open-source software (OSS)"* + Rundown AI cleanest framing: *"a 'Patch the Planet' effort to fix open-source flaws"* — see [[openai-daybreak]] for full anchor detail — *source: data/summaries/2026-06-23-evening.json (AINews HIGH; Evolving AI Insights; Rundown AI)*

## Key Facts

- **Parent program**: [[openai-daybreak]] (umbrella cyber-defense platform)
- **Named engineering partner**: Trail of Bits
- **Historical partner roster**: Trail of Bits + HackerOne (per 06-24 AI Field cycle)
- **AI stack**: [[codex-security]] agentic harness + frontier models (currently [[gpt-5-6]] Sol per Oct 2026 reporting)
- **Operational model**: findings filtered first + fixing-assist (not autonomous-scan-dump); maintainer-bandwidth-targeted
- **Coordination surface**: open-source maintainers + security researchers + security firms (Calif named Oct 2026) + government agencies
- **Dashboard snapshot (secondary reporting, Oct 2026)**: 68 codebases under review + 1,995 issues found + 679 patches written + 466 accepted upstream
- **Flagship outcome**: [[php2shell]] — CVE-2026-109618 + CVE-2026-109619 (CVSS 9.2) disclosed Oct 21 2026 after two-month coordinated response
- **Operator tooling**: Codex skill for PHP2Shell exposure-check (Oct 2026)

## Open Questions

- Which audit firm conducted the Daybreak security audit referenced in 06-25 Mindstream?
- Full roster of OSS projects enrolled in the program beyond PHP
- Does the 466 upstream-patch-accepted count include patches outside this cycle's PHP cluster?
- How is Calif's role (external security firm) distinguished from Trail of Bits (named engineering partner) — contractor, grantee, independent researcher using Daybreak tools?
- Does government-agency coordination include CISA, Singapore CSA (per PHP2Shell corroboration), both, or more?

## Sources

- data/summaries/2026-10-22-evening.json (AINews HIGH "[AINews] OpenAI's Patch the Planet program is 1 of 2 parties to discover PHP2Shell vulnerabilities in core PHP affecting 70% of the web, using GPT-5.6 Sol; coordinated response over 2 months"; daily-digest Top Story #1; researchFindings.additionalContext for Patch the Planet + GPT-5.6 Sol + PHP2Shell + OpenAI)
- data/summaries/2026-06-25-morning.json (Mindstream MEDIUM "OpenAI is hunting bugs")
- data/summaries/2026-06-24-morning.json (The AI Field HIGH naming Trail of Bits + HackerOne)
- data/summaries/2026-06-23-evening.json (AINews HIGH — OpenAI Daybreak expansion; Evolving AI Insights; Rundown AI)
