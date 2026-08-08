---
name: JetBrains
description: Czech developer-tools company (IDEs, TeamCity CI, AI Assistant, Junie, Mellum2); Aug 2026 unauthenticated RCE in TeamCity On-Premises actively exploited
type: company
---

# JetBrains

> **Type**: company
> **First mentioned**: 2026-08-08-evening
> **Last updated**: 2026-08-08-evening (**Created — Hello, World! MEDIUM cycle-headline "Jetbrains Hacked" lands first publicly framed *TeamCity unauthenticated remote code execution vulnerability actively exploited on self-hosted servers* incident + first publicly framed *JetBrains-tier developer-CI-infrastructure compromise* in this wiki**. Hello, World! MEDIUM ***"Jetbrains Hacked and Why everyone want to become Indian now?? ft. Cursor"***: *"Hackers are actively exploiting a critical JetBrains TeamCity vulnerability that allows unauthenticated remote code execution on self-hosted servers. Organizations using TeamCity On-Premises should patch immediately"*. researchFindings.additionalContext canonicalizes JetBrains' current AI portfolio: *"JetBrains AI Assistant, Junie, Mellum/Mellum2, and broader agent integrations such as OpenAI Codex and GitHub Copilot inside JetBrains IDEs, with the company emphasizing an open ecosystem and vendor-neutral agent interoperability through ACP (Agent Client Protocol)"* + notes prior June 2026 Marketplace security update after *"15 third-party plugins were found stealing AI provider API keys"* + JetBrains removed the plugins, blocked the publisher accounts, and disabled the plugins in installed IDEs. Structurally significant three ways: (a) **TeamCity CI-server compromise extends the mid-2026 developer-toolchain-supply-chain attack surface** — sharpens the multi-cycle [[ai-supply-chain-attacks]] arc from *registry-tier* (npm/PyPI/Packagist/Marketplace) + *IDE-plugin-tier* (JetBrains Marketplace June 2026 API-key theft) into *CI-server-tier* (TeamCity On-Premises unauthenticated RCE); (b) **Twin JetBrains-tier compromise cluster within a two-month window** — June 2026 Marketplace plugin API-key theft + Aug 2026 TeamCity On-Premises RCE = *two-vector JetBrains-tier compromise cluster*; positions JetBrains alongside GitHub + npm + Packagist as *canonical mid-2026 developer-toolchain compromise-target cohort*; (c) **Vendor-neutral ACP posture on JetBrains AI substrate** — the *Agent Client Protocol (ACP)* framing sits alongside [[agent-plugins]] as *cross-vendor agent-interop standard cohort*, positions JetBrains as *interop-first coding-IDE substrate* rather than proprietary-agent-lock-in. See [[ai-supply-chain-attacks]] + [[ai-cybersecurity-arms-race]] + [[agent-plugins]] — *source: data/summaries/2026-08-08-evening.json (Hello, World! MEDIUM "Jetbrains Hacked and Why everyone want to become Indian now?? ft. Cursor"; researchFindings.additionalContext — JetBrains)*)
> **Status**: active
> **Related**: [[cursor]], [[openai-codex]], [[agent-plugins]], [[ai-supply-chain-attacks]], [[ai-cybersecurity-arms-race]]

## Summary

JetBrains is a Czech developer-tools company best known for its family of IDEs (IntelliJ IDEA, PyCharm, WebStorm, GoLand, Rider) and the **TeamCity** CI/CD server. In the AI era it has built out a proprietary AI stack — **JetBrains AI Assistant**, **Junie** (coding agent), and **Mellum/Mellum2** (in-house code models) — while also integrating third-party coding agents like [[openai-codex]] and GitHub Copilot inside its IDEs under a stated *vendor-neutral open-ecosystem* posture, including support for the **Agent Client Protocol (ACP)** as a cross-vendor agent-interop standard.

JetBrains sits at the intersection of developer productivity and AI tooling, so its security posture directly affects enterprise adoption of AI coding assistants. In mid-2026 the company has faced two notable compromises: a June 2026 Marketplace incident where 15 third-party plugins were found stealing AI provider API keys (JetBrains removed the plugins, blocked publisher accounts, and disabled them in installed IDEs), and — most consequentially — an August 2026 unauthenticated remote-code-execution vulnerability in **TeamCity On-Premises** that is being actively exploited, prompting an urgent patch-immediately advisory to self-hosted organizations.

## Timeline

- **2026-08-08-evening**: **Created — TeamCity On-Premises unauthenticated RCE actively exploited; patch-immediately advisory to self-hosted organizations**. Hello, World! MEDIUM: *"Hackers are actively exploiting a critical JetBrains TeamCity vulnerability that allows unauthenticated remote code execution on self-hosted servers. Organizations using TeamCity On-Premises should patch immediately"*. First publicly framed *JetBrains-tier developer-CI-infrastructure compromise* in this wiki; extends the [[ai-supply-chain-attacks]] arc from registry-tier + IDE-plugin-tier into *CI-server-tier* compromise surface. Pairs cycle-structurally with the June 2026 Marketplace plugin API-key theft as *twin JetBrains-tier compromise cluster within a two-month window*. See [[ai-supply-chain-attacks]] + [[ai-cybersecurity-arms-race]] — *source: data/summaries/2026-08-08-evening.json (Hello, World! MEDIUM "Jetbrains Hacked and Why everyone want to become Indian now?? ft. Cursor")*

- **2026-06 (prior)**: **Marketplace security update — 15 third-party plugins found stealing AI provider API keys; plugins removed, publisher accounts blocked, plugins disabled in installed IDEs** (per researchFindings.additionalContext) — *source: data/summaries/2026-08-08-evening.json (researchFindings.additionalContext — JetBrains)*

## Key Facts

- **Products**: JetBrains IDEs (IntelliJ IDEA, PyCharm, WebStorm, GoLand, Rider, ReSharper), TeamCity (CI/CD server), YouTrack (issue tracker)
- **AI portfolio**: JetBrains AI Assistant + Junie (coding agent) + Mellum / Mellum2 (in-house code models)
- **Third-party agent integrations**: [[openai-codex]] + GitHub Copilot + Agent Client Protocol (ACP) cross-vendor interop
- **Aug 2026 compromise**: TeamCity On-Premises unauthenticated RCE — actively exploited; urgent patch required
- **Jun 2026 compromise**: JetBrains Marketplace — 15 third-party plugins stealing AI provider API keys; removed / blocked / disabled in IDEs

## Open Questions

- CVE identifier and patched TeamCity version range for the Aug 2026 RCE?
- Named exploit-attribution (nation-state? cybercriminal group? mass-scanner?) on the TeamCity RCE?
- Concrete scope of AI-provider API-key theft from the June 2026 Marketplace plugin incident?
- Does the TeamCity RCE reach Cloud-hosted TeamCity or is it strictly On-Premises?
- How does Junie compete cycle-structurally with [[cursor]] + [[claude-code]] + [[openai-codex]] on the coding-agent frontier?

## Sources

- data/summaries/2026-08-08-evening.json (Hello, World! MEDIUM "Jetbrains Hacked and Why everyone want to become Indian now?? ft. Cursor" — critical JetBrains TeamCity vulnerability allows unauthenticated remote code execution on self-hosted servers + patch immediately; researchFindings.additionalContext — JetBrains AI Assistant + Junie + Mellum/Mellum2 + OpenAI Codex + GitHub Copilot + Agent Client Protocol (ACP) + June 2026 Marketplace 15-plugin API-key-theft incident)
