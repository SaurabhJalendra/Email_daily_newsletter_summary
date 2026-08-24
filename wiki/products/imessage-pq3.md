---
name: iMessage PQ3
description: Apple's third-generation cryptographic protocol for iMessage — combines post-quantum Kyber KEM with classical elliptic-curve cryptography, double-ratchet design, and periodic post-quantum rekeying to achieve "Level 3 security"; the first at-scale consumer messaging protocol with post-quantum guarantees applied continuously through a conversation
type: product
---

# iMessage PQ3

> **Type**: product
> **Vendor**: [[apple]]
> **First mentioned**: 2026-08-24-evening
> **Last updated**: 2026-08-24-evening (Created — Hello, World! MEDIUM subject *"How Apple is Preparing iMessage for the Quantum Computing Era with PQ3"*)
> **Status**: shipping (rolled out with iOS 17.4 / iPadOS 17.4 / macOS 14.4 / watchOS 14.4; replacing legacy iMessage encryption across supported conversations over time)
> **Related**: [[apple]], [[post-quantum-cryptography]]

## Summary

**iMessage PQ3** is [[apple]]'s **third-generation end-to-end cryptographic protocol** for iMessage, introduced in 2024 and now (per the Hello, World! MEDIUM 2026-08-24 recoverage) reaching canonical wiki-tier framing as the *first messaging protocol to achieve **Level 3 security*** — meaning post-quantum cryptography is applied **continuously throughout a conversation** (both at initial key establishment and via periodic rekeying) rather than only at initial setup. PQ3 combines the **Kyber / ML-KEM** post-quantum key encapsulation algorithm with classical elliptic-curve cryptography in a hybrid construction, layered on top of a **double-ratchet-style** design (similar in spirit to Signal) extended with post-quantum forward secrecy and post-compromise security guarantees. The protocol was **formally verified** by cryptography researchers before deployment.

PQ3 is Apple's defensive response to the *"harvest now, decrypt later"* threat model — the concern that adversaries capture and store today's encrypted messages so they can decrypt them once practical quantum computers exist. By continuously mixing in fresh post-quantum key material every ~50 epochs (the periodic-rekeying design), PQ3 provides both **forward secrecy** (past messages remain protected if a current key is compromised) and **post-compromise security** with a *self-healing* mechanism (even after key compromise, future messages can return to a secure state because new message keys cannot be computed from past keys). Rollout began with **iOS 17.4, iPadOS 17.4, macOS 14.4, and watchOS 14.4**, and PQ3 is progressively replacing the legacy iMessage encryption scheme across all supported conversations. This positions [[apple]] as one of the first major consumer platforms to deploy **large-scale, post-quantum secure messaging by default**, influencing best practices and accelerating enterprise + governmental timelines for migrating to quantum-resistant cryptography.

## Timeline

- **2026-08-24-evening**: **Created** — Hello, World! MEDIUM subject *"How Apple is Preparing iMessage for the Quantum Computing Era with PQ3"* lands canonical wiki-tier framing: (a) *"first messaging protocol to achieve Level 3 security"*, (b) *"combines post-quantum cryptography with classical elliptic curve cryptography, introducing fresh post-quantum key material throughout the conversation using periodic rekeying, and was formally verified"*, (c) *"uses Kyber, a post-quantum key encapsulation algorithm, and a double-ratchet design to provide post-quantum forward secrecy and post-compromise security guarantees"*, (d) *"rollout began with iOS 17.4, iPadOS 17.4, macOS 14.4, and watchOS 14.4"*, (e) *"positions Apple as one of the first major consumer platforms to deploy large-scale, post-quantum secure messaging by default, influencing best practices and accelerating enterprise and governmental timelines for migrating to quantum-resistant cryptography"*. researchFindings.additionalContext deepens with (i) *"security researchers have begun formally analyzing PQ3, with pre-publication work presented at USENIX Security indicating strong formal guarantees for post-quantum forward secrecy and post-compromise security in the presence of a quantum adversary"*, (ii) *"post-quantum key mixed in every 50 epochs"* concrete rekeying-cadence anchor, (iii) *"self-healing rekeying mechanism: even if an attacker compromises some keys, future messages can return to a secure state because fresh message keys are derived in a way that cannot be computed from past keys"* — *source: data/summaries/2026-08-24-evening.json (Hello, World! MEDIUM "How Apple is Preparing iMessage for the Quantum Computing Era with PQ3"; researchFindings.additionalContext — Apple + iMessage + Apple iMessage PQ3 + Quantum Computing in AI/ML)*

## Key Facts

- **Vendor**: [[apple]]
- **Type**: end-to-end cryptographic protocol for iMessage (third-generation)
- **Security tier**: Apple-defined *"Level 3 security"* — PQC applied **continuously** throughout a conversation, not only at initial key setup
- **Post-quantum primitive**: Kyber / ML-KEM key encapsulation algorithm
- **Hybrid construction**: Kyber + classical elliptic-curve cryptography (both must be broken for the protocol to fail)
- **Session design**: double-ratchet-style with periodic post-quantum rekeying (~every 50 epochs)
- **Security guarantees**: forward secrecy + post-compromise security + self-healing rekeying + authenticated key exchange
- **Formal verification**: verified by cryptography researchers; pre-publication analysis presented at USENIX Security
- **Rollout**: began with iOS 17.4 / iPadOS 17.4 / macOS 14.4 / watchOS 14.4; replacing legacy scheme across supported conversations
- **Threat model addressed**: *"harvest now, decrypt later"* — encrypted traffic captured today decrypted by future quantum computers

## Open Questions

- Signal + Meta + Google timeline for shipping continuous-PQC (Level 3) messaging protocols in response to Apple's at-scale deployment
- Kyber / ML-KEM parameter set used (ML-KEM-512, 768, or 1024)
- Performance overhead on older devices (battery + latency) from continuous PQC rekeying
- Interoperability posture — will PQ3 ever be adopted as an open standard beyond Apple's ecosystem?
- Whether Apple extends PQ3 to iCloud Messages backup, FaceTime, and Group iMessages with the same "Level 3" guarantees

## Sources

- data/summaries/2026-08-24-evening.json (Hello, World! MEDIUM "How Apple is Preparing iMessage for the Quantum Computing Era with PQ3"; researchFindings.additionalContext — Apple + iMessage + Apple iMessage PQ3 + Quantum Computing in AI/ML)
