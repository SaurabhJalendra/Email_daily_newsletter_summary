---
name: Codex Security
description: OpenAI's autonomous application-security agent inside Codex — scans repos, builds threat models, proposes patches
type: product
---

# Codex Security

> **Type**: product
> **Vendor**: [[openai]]
> **First mentioned**: 2026-03-10
> **Last updated**: 2026-03-11
> **Status**: active
> **Related**: [[openai]], [[openai-codex]], [[openai-frontier]], [[aardvark]], [[claude-code-security]], [[prompt-injection]]

## Summary

Codex Security is [[openai]]'s autonomous application-security agent, shipped March 10 2026 as part of the [[openai-codex]] surface. It analyzes entire repositories to identify complex vulnerabilities, builds threat models, and proposes context-aware patches — OpenAI's direct answer to [[anthropic]]'s [[claude-code-security]]. It uses sandboxed validation to pressure-test its findings and reduce false positives, sitting adjacent to [[aardvark]] (the earlier GPT-5 security research agent) in OpenAI's security-agent lineup. The acquisition of [[promptfoo]] on 2026-03-11 is framed as rounding out the stack with eval/security-testing primitives folded into [[openai-frontier]].

## Timeline

- **2026-03-11**: [[openai]] acquires [[promptfoo]] — open-source AI security/eval used by >25% of Fortune 500 — capabilities fold into [[openai-frontier]] to catch vulnerabilities earlier in the agent lifecycle — *source: 2026-03-11 cycle (Superhuman; TLDR AI; TAAFT; Matt from FutureTools)*
- **2026-03-10**: Codex Security launches — autonomous appsec agent scans repos, builds threat models, proposes patches; sandboxed validation reduces false positives; available on enterprise + education tiers; Codex for Open Source offers 6 months of free Pro + API credits to core OSS maintainers — *source: 2026-03-10 cycle (AI Breakfast; The Code — OpenAI builds a security agent; TLDR AI — Codex Security; Superhuman)*

## Key Facts

- Vendor: [[openai]]
- Host surface: [[openai-codex]] (Codex superapp)
- Workflow: scan repo → build threat model → propose patches → human review
- Validation: sandboxed pressure-test to suppress false positives
- Tiers: enterprise + educational
- Free-access adjunct: "Codex for Open Source" (6 mo ChatGPT Pro + API credits for OSS maintainers)
- Complementary acquisition: [[promptfoo]] (Mar 11 2026)

## Open Questions

- Pricing vs [[claude-code-security]] and Snyk/Semgrep
- CWE coverage breadth and benchmark comparisons
- Whether Codex Security findings flow into Frontier eval workflows post-Promptfoo integration
- Relationship to [[aardvark]] — consolidation or parallel tracks?

## Sources

- data/summaries/2026-03-10.json (AI Breakfast; The Code; TLDR AI; Superhuman — Codex Security ships)
- data/summaries/2026-03-11.json (Superhuman; TLDR AI; TAAFT — OpenAI acquires Promptfoo)
