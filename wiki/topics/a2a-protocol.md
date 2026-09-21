---
name: A2A Protocol (Agent2Agent)
description: Google's open, vendor-neutral protocol for secure agent-to-agent communication and collaboration — complements MCP (which connects agents to tools) by connecting agents to agents
type: topic
---

# A2A Protocol (Agent2Agent)

> **Type**: topic
> **First mentioned**: 2026-09-21-evening
> **Last updated**: 2026-09-21-evening
> **Status**: active
> **Related**: [[google]], [[model-context-protocol]], [[agent-frameworks]], [[foldrun]], [[agentic-ai-foundation]]

## Summary

**Agent2Agent (A2A)** is Google's open, vendor-neutral protocol for secure communication and collaboration between autonomous AI agents running across different frameworks, vendors, and infrastructure. It standardizes how agents *discover* each other via structured "AgentCards", *advertise capabilities*, *negotiate interaction modalities* (text, files, structured data), and *exchange tasks and results* — without requiring each agent to expose its internal tools, memory, or state to the others. Security is a core design goal: encrypted transport (HTTPS/gRPC with modern TLS), standard web auth schemes (OAuth 2.0, OpenID Connect, API keys, mutual TLS), and signed AgentCards for auditable agent-to-agent authentication.

A2A is explicitly positioned as *complementary* to Anthropic's [[model-context-protocol]] (MCP): where MCP connects agents to *tools and data*, A2A connects agents to *other agents*. Google has released SDKs in Python, Go (GA), Java, .NET (beta/preview), and JavaScript/TypeScript (in development). Over 50 partners — Atlassian, Salesforce, SAP, ServiceNow, and major consultancies — support the protocol. Google Cloud Marketplace now supports offering "AI Agents as a Service" using A2A for inter-agent communication.

## Timeline

- **2026-09-21-evening**: **A2A canonical open-standard agent-interoperability-substrate anchor + FoldRun protein-structure-prediction agent as canonical scientific-computing A2A example + 50+ partner-cohort + AgentCard-plus-OAuth2-plus-mTLS security-stack + Google-Cloud-Marketplace-AI-Agents-as-a-Service canonical distribution-substrate anchor cluster**. Hello, World! MEDIUM cycle-headline *"How Google's A2A Is Changing How AI Agents Collaborate?"*: *"Google's A2A (Agent-to-Agent) protocol enables specialized AI agents to collaborate and delegate tasks, turning isolated agents into a connected ecosystem of autonomous capabilities"* + *"A2A allows agents to keep their own tools, data, and internal processes encapsulated, while contributing to a larger workflow"* + *"A2A is demonstrated through FoldRun, an agentic interface for protein structure prediction, which packages the specialized workflow behind an agent"* + *"FoldRun can be added to an A2A-compatible environment, such as Gemini Enterprise or Gemini CLI"*. researchFindings.additionalContext canonicalizes: *"A2A is Google's open standard designed to let AI agents from different vendors securely communicate, exchange information, and coordinate actions"* + *"client–remote agent model, where a client agent formulates tasks and a remote agent executes them, with capabilities like understanding intent, refining plans, and asking clarifying questions"* + *"A2A is explicitly positioned to complement Anthropic's Model Context Protocol (MCP)"* + *"Google has released SDKs in multiple languages (Python, Go GA; Java, .NET in beta/preview; JavaScript/TypeScript in active development)"* + *"over 50 partners supporting A2A, including Atlassian, Salesforce, SAP, ServiceNow, and major consultancies"* + *"native A2A support in its open-source Agent Development Kit (ADK)"* + *"support for offering AI Agents as a Service on Google Cloud Marketplace using A2A for inter-agent communication"* + *"HTTPS, gRPC with modern TLS, supports standard web security schemes like OAuth 2.0, OpenID Connect, API keys, and mutual TLS, and uses signed AgentCards"*. First-in-wiki: (a) **A2A canonical open-standard agent-interoperability-substrate anchor** — first-in-wiki *concrete Google-authored agent-to-agent-interoperability protocol canonical anchor*; canonicalizes A2A as the *canonical agent-tier complement to [[model-context-protocol]]* on the emerging agentic-ecosystem substrate (MCP is agent-to-tool; A2A is agent-to-agent); (b) **AgentCard + OAuth 2.0/OIDC + mTLS + signed-cards security-stack canonical anchor** — first-in-wiki *concrete Google-side agent-discovery-plus-authentication three-primitive canonical anchor* on agent-interoperability; positions A2A as *enterprise-grade auditable* rather than *research-tier experimental*; (c) **50+ partner-cohort canonical enterprise-adoption anchor (Atlassian + Salesforce + SAP + ServiceNow + major consultancies)** — first-in-wiki *concrete-50+-partner cohort canonical anchor* on A2A; canonicalizes A2A as *cross-enterprise-vendor multi-signatory substrate* rather than *Google-only substrate*; (d) **FoldRun protein-structure-prediction agent canonical scientific-computing A2A-example anchor** — first-in-wiki *concrete named-scientific-domain A2A-deployed-agent canonical anchor* on the protocol substrate; validates A2A as *cross-domain applicable substrate* (commerce + enterprise-data + IT/DevOps + telecom + regulated-environments + scientific-computing); (e) **"AI Agents as a Service" on Google Cloud Marketplace canonical distribution-substrate anchor** — first-in-wiki *concrete-productized agent-marketplace canonical anchor* on A2A; canonicalizes Google Cloud as *canonical A2A-native agent-marketplace substrate operator*. Structurally significant: **Evening cycle canonicalizes A2A as *canonical mid-Sep-2026 open-agent-interoperability-substrate anchor complementary to MCP*** — extends the multi-cycle [[model-context-protocol]] Safari-MCP + Google-Home-MCP + ChatGPT-WebMCP + MongoDB-Atlas-MCP + X-MCP substrate cluster with a *concrete cross-agent-not-agent-to-tool canonical substrate anchor tier*. See [[google]] + [[model-context-protocol]] + [[foldrun]] + [[gemini-enterprise]] + [[agent-frameworks]] + [[salesforce]] — *source: data/summaries/2026-09-21-evening.json (Hello, World! MEDIUM "How Google's A2A Is Changing How AI Agents Collaborate?"; researchFindings.additionalContext for Google + A2A + Agent2Agent)*

## Key Facts

- **Type**: Open, vendor-neutral protocol
- **Author**: Google (open-source, welcomes external contributions)
- **Complement**: [[model-context-protocol]] (MCP) — MCP is agent-to-tool, A2A is agent-to-agent
- **Discovery**: Structured "AgentCards" that advertise capabilities and interaction modalities
- **Security**: HTTPS/gRPC with TLS; OAuth 2.0 + OpenID Connect + API keys + mutual TLS; signed AgentCards
- **SDKs**: Python (GA), Go (GA), Java (beta/preview), .NET (beta/preview), JavaScript/TypeScript (in dev)
- **Model**: Client–remote agent model; client formulates tasks, remote agent executes; agents can understand intent, refine plans, ask clarifying questions
- **Ecosystem**: 50+ partners including Atlassian, Salesforce, SAP, ServiceNow, plus major consultancies
- **Distribution**: Native A2A support in Google's open-source Agent Development Kit (ADK); "AI Agents as a Service" via Google Cloud Marketplace
- **Named example**: [[foldrun]] protein structure prediction agent
- **Integration surface**: Gemini Enterprise, Gemini CLI, third-party A2A-compatible environments

## Open Questions

- How does A2A handle cross-vendor liability + governance (which vendor is responsible when a remote agent fails or misbehaves)?
- Adoption timeline for Anthropic and OpenAI — will they build A2A support natively, or ship a competing standard?
- Enterprise pricing model for A2A-hosted agents on Google Cloud Marketplace
- Long-term relationship with MCP — will they merge, remain complementary, or diverge?
- Whether A2A becomes the de facto standard analogous to HTTP/REST for agent-to-agent, or gets fragmented across vendors

## Sources

- data/summaries/2026-09-21-evening.json (Hello, World! MEDIUM "How Google's A2A Is Changing How AI Agents Collaborate?"; researchFindings.additionalContext for Google (A2A and broader AI/ML initiatives) + Agent2Agent (A2A) protocol)
