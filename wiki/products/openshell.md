---
name: OpenShell
description: NVIDIA's open-source sandboxed runtime for agent containment — CPU-side component of the Open Agent Safety Platform; restated at GTC Berlin 2026 as a reference architecture for safe agent operation
type: product
---

# OpenShell

> **Type**: product
> **Vendor**: [[nvidia]]
> **First mentioned**: 2026-09-28-evening (as component of [[open-agent-safety-platform]])
> **Last updated**: 2026-10-23-morning (**GTC Berlin 2026 restatement — OpenShell framed independently as a "reference architecture intended to provide safety controls for operating AI agents" + concrete containing-and-governing-agents-that-can-take-actions-across-software-environments scope-tier canonical anchor + daily-digest Industry News framing**. DeepLearning.AI HIGH researchFindings.missingStories: *"NVIDIA announced OpenShell, a reference architecture intended to provide safety controls for operating AI agents. The announcement was made at GTC Berlin and focuses on containing and governing agents that can take actions across software environments"* + *"As agents gain access to tools and production systems, standardized isolation, monitoring, and permission controls become essential for deploying them securely and managing operational risk"*. First-in-wiki *concrete OpenShell dedicated-page canonical anchor* — graduates the multi-cycle 09-28-evening Open-Agent-Safety-Platform-sub-component canonical anchor arc into a *concrete named-reference-architecture tier canonical anchor* at GTC Berlin cross-cohort restatement cycle. See [[open-agent-safety-platform]] + [[nvidia]] this cycle + [[agent-frameworks]] + [[ai-cybersecurity-arms-race]] — *source: data/summaries/2026-10-23-morning.json (DeepLearning.AI HIGH "Meta's Muse Wonder and Spark Open, Educational Use of ChatGPT, Reflection's Partnership with Nvidia" — researchFindings.missingStories: NVIDIA introduces OpenShell architecture for safer AI agents at GTC Berlin)*)
> **Status**: active
> **Related**: [[open-agent-safety-platform]], [[nvidia]], [[agent-frameworks]], [[ai-cybersecurity-arms-race]], [[nemotron-3]], [[claude-mythos]], [[anthropic-oss-scanner]]

## Summary

OpenShell is [[nvidia]]'s open-source sandboxed runtime for AI-agent containment — originally shipped Sep 2026 as the CPU-side containment component of the [[open-agent-safety-platform]] (paired with Sentry on BlueField-4 DPU for network-level safeguards). At GTC Berlin 2026 (Oct 20–22), NVIDIA restated OpenShell independently as a **reference architecture intended to provide safety controls for operating AI agents** — containing and governing agents that can take actions across software environments. The GTC-Berlin restatement elevates OpenShell to its own standalone reference-architecture framing, distinct from the broader OSP umbrella.

OpenShell enforces which files, tools, and online services an agent can access while it works (concrete three-primitive permission substrate per 09-29-evening canonical anchor). As agents gain access to tools and production systems, standardized isolation, monitoring, and permission controls become essential for deploying them securely and managing operational risk.

## Timeline

- **2026-10-23-morning**: **GTC Berlin 2026 restatement — OpenShell framed independently as a reference architecture for AI-agent safety-controls**. DeepLearning.AI HIGH researchFindings.missingStories elevates OpenShell to its own stand-alone reference-architecture canonical anchor tier beyond its 09-28 role as OSP sub-component. See [[open-agent-safety-platform]] + [[nvidia]] this cycle — *source: data/summaries/2026-10-23-morning.json (DeepLearning.AI HIGH "Meta's Muse Wonder and Spark Open, Educational Use of ChatGPT, Reflection's Partnership with Nvidia" — researchFindings.missingStories)*

- **2026-09-29-evening** (via [[open-agent-safety-platform]]): OpenShell reframed as "open-source software that enforces which files, tools, and online services an agent can access while it works" — concrete three-primitive permission-substrate canonical anchor.

- **2026-09-29-morning** (via [[open-agent-safety-platform]]): OpenShell explicitly framed as "open-source, sandboxed runtime" with 100+ industry partners at launch.

- **2026-09-28-evening** (via [[open-agent-safety-platform]]): Launch as CPU-side containment component of NVIDIA Open Agent Safety Platform; paired with Sentry (BlueField-DPU-hosted network-level safeguards).

## Key Facts

- **Vendor**: [[nvidia]]
- **Type**: open-source sandboxed runtime; reframed Oct 2026 as a reference architecture
- **Role**: CPU-side containment / process-level sandbox + permission substrate
- **Permission substrate**: enforces which files, tools, and online services an agent can access
- **Umbrella platform**: component of [[open-agent-safety-platform]]
- **Companion component**: Sentry (network-level safeguards running on BlueField-4 DPU)
- **Ecosystem partners**: Microsoft + Cisco + Oracle + Intel + 100+ industry partners

## Open Questions

- GitHub repository + Apache/MIT license designation
- Named adopters / production deployments of OpenShell outside NVIDIA
- OSP + OpenShell integration into [[nemotron-3]] runtime
- How the GTC-Berlin "reference architecture" framing differs from the Sep 2026 "sandboxed runtime" framing — is this new scope, or marketing restatement?
- Container-runtime compatibility (OCI? containerd? gVisor?)
- Compatibility with [[claude-mods]] + [[agent-plugins]] + [[agent-skills]] registry ecosystem

## Sources

- data/summaries/2026-10-23-morning.json (DeepLearning.AI HIGH "Meta's Muse Wonder and Spark Open, Educational Use of ChatGPT, Reflection's Partnership with Nvidia" — researchFindings.missingStories: NVIDIA introduces OpenShell architecture for safer AI agents at GTC Berlin)
- See [[open-agent-safety-platform]] for earlier timeline entries (2026-09-28-evening → 2026-10-01-morning)
