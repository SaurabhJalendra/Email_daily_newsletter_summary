---
name: Post-Quantum Cryptography
description: Cryptographic algorithms designed to remain secure against attacks by large-scale quantum computers — the AI/ML-adjacent security substrate driving industry-wide "harvest now, decrypt later" defensive migration; canonical mid-2020s at-scale deployments include Apple iMessage PQ3 (Kyber KEM + hybrid ECC + continuous rekeying)
type: topic
---

# Post-Quantum Cryptography (PQC)

> **Type**: topic
> **First mentioned**: 2026-08-24-evening (created; PQC has been implicitly referenced across many prior cybersecurity + AI-arms-race cycles but this is the first canonical topic-page anchor in this wiki)
> **Last updated**: 2026-08-31-evening (**Twin evening motion — (a) **Concrete 2029 quantum-crack-timeline anchor lands with *"cybersecurity apocalypse"* daily-digest tier canonicalization** — TLDR MEDIUM cycle-headline *"OpenAI blocks Cursor 🚫, Apple's new CEO 🍎, GitHub Agentic Workflows 👨‍💻"*: *"Researchers predict that quantum computers could crack complex math behind encryption protocols as early as 2029, potentially causing a cybersecurity apocalypse"*. Daily-digest Top Story #4: *"Researchers predict that quantum computers could crack complex math behind encryption protocols as early as 2029, potentially causing a cybersecurity apocalypse. This matters because it underscores a critical future challenge for cybersecurity, as the potential for quantum computers to break current encryption methods could have profound implications for data security and privacy"*. First-in-wiki: (i) *"as early as 2029" concrete-year-anchor* on the quantum-crack-timeline — sharpens the multi-cycle *"harvest now, decrypt later"* framing into a *concrete-3-year-outer-horizon canonical anchor*; (ii) *"cybersecurity apocalypse" daily-digest-tier framing* — first-in-wiki *consumer/prosumer-tier alarming canonical-slogan-anchor* on the post-quantum-crypto-migration arc (structurally significant — graduates the *technical-community-only concern* into *mainstream-audience canonical framing* at daily-digest Top Story #4 tier). (b) **iMessage PQ3 cross-cohort restatement** — Hello World MEDIUM cross-cohort restatement of the 08-24-evening PQ3 canonical launch anchor sustains PQ3 into cycle-N+2 as *canonical mid-2026 at-scale consumer-messaging-tier post-quantum-crypto reference case-study* (see [[imessage-pq3]] + [[apple]]). Structurally significant: **2029-crack + "cybersecurity apocalypse" concrete-year + mainstream-canonical-slogan cluster productizes the post-quantum-migration arc into consumer/prosumer-tier discourse** — pairs cycle-structurally with iMessage PQ3 sustained recoverage as *twin-canonical mid-2026 post-quantum arc anchor* — threat-side + response-side. See [[imessage-pq3]] + [[apple]] + [[ai-cybersecurity-arms-race]] — *source: data/summaries/2026-08-31-evening.json (TLDR MEDIUM "OpenAI blocks Cursor 🚫, Apple's new CEO 🍎, GitHub Agentic Workflows 👨‍💻"; Hello World MEDIUM "How LinkedIn Cut a 7-Hour Spark Pipeline Down to 3 Hours"; daily-digest Top Story #4)*)
> **Previously updated**: 2026-08-24-evening (Created — Hello, World! MEDIUM "How Apple is Preparing iMessage for the Quantum Computing Era with PQ3")
> **Status**: active
> **Related**: [[apple]], [[imessage-pq3]], [[ai-cybersecurity-arms-race]], [[quantum-computing]]

## Summary

**Post-quantum cryptography (PQC)** is a class of **cryptographic algorithms designed to remain secure against attacks by large-scale quantum computers**. Today's dominant public-key schemes — RSA, elliptic-curve Diffie-Hellman, ECDSA — can in principle be broken by a sufficiently large quantum computer running **Shor's algorithm**. PQC replaces these with algorithms based on hard problems (lattices, hash-based signatures, code-based cryptography, isogenies) that are believed to remain computationally infeasible even for quantum adversaries. The most-widely-standardized PQC scheme so far is **Kyber / ML-KEM**, a lattice-based key encapsulation mechanism selected by NIST and shipped under the FIPS 203 standard.

The industry driver is the *"harvest now, decrypt later"* threat model — the concern that adversaries can capture and archive encrypted communications today and then decrypt them once practical quantum computers exist (widely projected somewhere in the 2030s+ timeframe). This threat is especially acute for **long-lived confidential data** (personal messages, medical records, national-security communications, financial identifiers). The mid-2020s canonical response is a two-track migration: **defensive adoption of PQC** across messaging, TLS, and identity infrastructure; and **hybrid deployments** that combine PQC with classical cryptography so both must be broken for security to fail — providing a *belt-and-suspenders* transition posture while PQC schemes mature and receive real-world stress testing.

## Canonical at-scale deployments

- **[[imessage-pq3]]** ([[apple]], 2024–2026) — first messaging protocol to achieve *"Level 3 security"* (PQC applied continuously throughout a conversation, not only at initial key setup); hybrid Kyber + ECC + double-ratchet + periodic rekeying; formally verified; deployed by default with iOS 17.4 / iPadOS 17.4 / macOS 14.4 / watchOS 14.4
- **Signal** — shipped PQXDH (post-quantum extended triple Diffie-Hellman) for initial key agreement; **narrower** scope than PQ3 (PQC applied only at session setup, not continuously)
- **Cloud + TLS** — Amazon, Cloudflare, Google, and Microsoft have piloted or shipped hybrid X25519+Kyber TLS handshakes; broader-industry migration is still in early / experimental phase for production traffic

## Timeline

- **2026-08-24-evening**: **Created** — Hello, World! MEDIUM subject *"How Apple is Preparing iMessage for the Quantum Computing Era with PQ3"* + researchFindings.additionalContext canonicalize (a) *"harvest now, decrypt later"* threat framing, (b) *Kyber post-quantum KEM as canonical PQC primitive shipping at consumer scale*, (c) *hybrid Kyber-plus-ECC construction* as canonical mid-2020s deployment pattern, (d) *[[apple]] positioned as one of the first major consumer platforms to deploy large-scale, post-quantum secure messaging by default*, (e) *industry pressure on Signal + Meta + Google + cloud providers to accelerate PQC deployment* — *source: data/summaries/2026-08-24-evening.json (Hello, World! MEDIUM "How Apple is Preparing iMessage for the Quantum Computing Era with PQ3"; researchFindings.additionalContext — Apple + iMessage + Apple iMessage PQ3 + Quantum Computing in AI/ML)*

## Key Facts

- **Standardization**: NIST selected Kyber (as ML-KEM under FIPS 203) + ML-DSA (Dilithium signature, FIPS 204) + SLH-DSA (SPHINCS+, FIPS 205) as first-generation PQC standards
- **Dominant primitive**: Kyber / ML-KEM (lattice-based key encapsulation)
- **Deployment pattern**: hybrid PQC + classical cryptography (both must be broken for the protocol to fail)
- **Threat model**: "harvest now, decrypt later" — captured traffic decrypted by future quantum computers
- **Security tiers** (per Apple framing on PQ3): Level 1 = classical crypto only; Level 2 = PQC only at initial key setup; Level 3 = PQC applied continuously throughout the conversation via periodic rekeying
- **Ongoing work**: continual-rekeying protocols, post-compromise security guarantees, formal verification, migration of long-lived identity + certificate infrastructure
- **AI/ML relevance**: PQC + AI/ML intersect through (a) defensive-AI-substrate for cryptographic-protocol formal verification, (b) AI-driven cryptanalysis research, (c) LLM-assisted PQC-migration code refactoring, (d) *quantum-computing-in-AI* narrower topic on quantum ML

## Open Questions

- Signal / Meta / Google / cloud-provider timelines for shipping continuous-PQC (Level 3) protocols in response to [[apple]]'s at-scale deployment
- Enterprise + governmental PQC-migration deadlines (NIST guidance, NSA CNSA 2.0 profile)
- Whether newer PQC schemes (McEliece, HQC, BIKE) will supplement or displace Kyber over time
- AI-driven cryptanalysis: can LLMs + agentic ML help identify weaknesses in candidate PQC schemes?
- Interaction with certificate infrastructure — PKI + X.509 + code-signing PQC migration timeline

## Sources

- data/summaries/2026-08-24-evening.json (Hello, World! MEDIUM "How Apple is Preparing iMessage for the Quantum Computing Era with PQ3"; researchFindings.additionalContext — Apple + iMessage + Apple iMessage PQ3 + Quantum Computing in AI/ML)
