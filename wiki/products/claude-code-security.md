---
name: Claude Code Security
description: Anthropic's security scanner inside Claude Code — scans codebases for vulnerabilities and suggests patches for human review (Feb 2026)
type: product
---

# Claude Code Security

> **Type**: product
> **Vendor**: [[anthropic]]
> **First mentioned**: 2026-02-22
> **Last updated**: 2026-05-02
> **Status**: stale
> **Related**: [[claude-code]], [[anthropic]]

## Summary

Claude Code Security is a security-scanning feature that Anthropic built directly into [[claude-code]], announced in late February 2026. It scans codebases for vulnerabilities and suggests patches for human review, extending Claude Code from a coding agent into an integrated dev-and-security surface — a deliberate collapse of traditionally separate tooling categories.

## Timeline

- **2026-05-05**: **Claude Security** formally framed as Anthropic's AI vulnerability scanner for enterprise teams — utilizes [[claude-opus-4-7]] to identify and patch vulnerabilities in enterprise code (productizes the Feb 2026 Claude Code Security into a dedicated enterprise SKU) — *source: 2026-05-05 cycle (Claude Security AI vulnerability scanner on Opus 4.7)*
- **2026-05-02**: **Claude Security public beta launches** powered by [[claude-opus-4-7]] — AI-powered vulnerability scanning available to the public; significant advancement in AI-powered security for enterprise cybersecurity defenses (broadens the 2026-02-22 announcement into a fully public SKU) — *source: 2026-05-02 cycle (Claude Security public beta on Opus 4.7)*
- **2026-03-09**: Claude AI discovers 22 Firefox vulnerabilities (14 high-severity) in an autonomous scan — treated as flagship result for AI-driven vulnerability research — *source: TAAFT 2026-03-09 "AI Went Rogue and Mined Crypto" (Anthropic's AI Hacked Firefox segment)*
- **2026-02-23**: Claude Code Security Scanner positioned as tool that scans codebases and suggests patches for human review — *source: 2026-02-23 cycle*
- **2026-02-22**: Security features announced inside Claude Code — expands its reach across traditionally separate software domains — *source: 2026-02-22 cycle*

## Key Facts

- Host surface: [[claude-code]]
- Workflow: scan → suggest patches → human review
- Category shift: merges dev tooling and appsec scanning

## Open Questions

- Vulnerability classes covered (CWE coverage, SAST/DAST breadth)?
- Integration with existing SAST/SCA vendors (Snyk, Semgrep)?
- Pricing tier — bundled with Claude Code or separate?

## Sources

- data/summaries/2026-02-22.json (Claude Code Security announcement)
- data/summaries/2026-02-23.json (Claude Code Security Scanner framing)
- data/summaries/2026-03-09.json (TAAFT — Claude discovers 22 Firefox vulnerabilities, 14 high-severity)
- data/summaries/2026-05-02.json (Claude Security public beta on Opus 4.7)
- data/summaries/2026-05-05.json (Claude Security framed as Opus 4.7-powered enterprise scanner)
