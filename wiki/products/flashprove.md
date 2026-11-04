---
name: FlashProve
description: Anthropic + EPFL + MIT Apache 2.0 prototype using zero-knowledge proofs to establish that an output came from a specific committed model without revealing the model weights; reported ~110 tokens/sec on a single H100
type: product
---

# FlashProve

> **Type**: product
> **Vendor**: [[anthropic]] (with EPFL and MIT collaborators)
> **First mentioned**: 2026-11-04-evening
> **Last updated**: 2026-11-04-evening
> **Status**: launched (Apache 2.0 prototype)
> **Related**: [[anthropic]], [[ai-provenance]], [[ai-watermarking]], [[model-governance]], [[prompt-injection]], [[ai-regulation]]

## Summary

FlashProve is a late-2026 Apache 2.0 open-source prototype from [[anthropic]] with collaborators at EPFL and MIT. It uses **zero-knowledge proofs** to establish that an AI output came from a **specific committed model**, **without revealing the model weights**. Reports place performance at roughly **~110 tokens/sec on a single H100 GPU** — a first-in-wiki concrete throughput datapoint for frontier-scale ZK-proof-of-model-output.

Cryptographic provenance of this kind could help developers verify model identity and deployment integrity, especially in regulated, safety-critical, or adversarial environments where ordinary provider claims are insufficient. It opens a different substrate than watermarking (e.g. [[synthid]] / [[synthid-bio]]) because the proof is cryptographic + per-output + non-removable rather than statistical + per-corpus + potentially evadable.

## Timeline

- **2026-11-04-evening**: **FlashProve prototype published — Anthropic + EPFL + MIT; Apache 2.0; ~110 tokens/sec on one H100; zero-knowledge proofs establish output-came-from-committed-model without revealing weights**. See [[anthropic]] + [[ai-provenance]] + [[ai-watermarking]] — *source: data/summaries/2026-11-04-evening.json (researchFindings.missingStories — Anthropic publishes FlashProve; attribution AI Weekly + AI Tools Recap)*

## Key Facts

- **Vendor**: [[anthropic]] (with EPFL + MIT collaborators)
- **Technique**: zero-knowledge proofs of model-output provenance
- **Cryptographic guarantee**: proves output came from a specific *committed* model without revealing the model weights
- **License**: Apache 2.0 (open-source prototype)
- **Reported throughput**: ~110 tokens/sec on one NVIDIA H100
- **Status**: research prototype, not a production feature
- **Target use cases**: model identity verification, deployment integrity, regulated / safety-critical / adversarial environments

## Open Questions

- How FlashProve's ~110 tok/s on H100 scales to production inference throughput + what the economic overhead is per proven token
- Whether Anthropic plans to ship FlashProve as a production API feature or keep it as a research prototype
- Compatibility with other provenance substrates (C2PA, [[synthid]], model watermarking)
- Verifier side: who runs proof-verification in practice (platform vs user vs regulator) + verification cost
- Integration with Claude's existing safety + deployment stack
- How FlashProve interacts with Anthropic's late-2026 SEC-filing-tier RSI governance commitments on [[recursive-self-improvement]] substrate

## Sources

- data/summaries/2026-11-04-evening.json (researchFindings.missingStories — Anthropic publishes FlashProve for cryptographic model-output verification; attribution AI Weekly + AI Tools Recap)
