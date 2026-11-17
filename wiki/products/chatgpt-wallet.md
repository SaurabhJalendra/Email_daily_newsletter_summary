---
name: ChatGPT Wallet
description: OpenAI's payment layer for ChatGPT AI agents — tokenized-card checkout with biometric authorization per transaction, launched Nov 13 2026 for US ChatGPT Pro users
type: product
---

# ChatGPT Wallet

> **Type**: product
> **First mentioned**: 2026-11-17-morning
> **Last updated**: 2026-11-17-morning
> **Status**: active
> **Related**: [[openai]], [[chatgpt]], [[dots]], [[agentic-commerce]], [[universal-commerce-protocol]], [[claude-commerce-agents]]

## Summary

ChatGPT Wallet is OpenAI's payment layer for [[chatgpt]]'s AI agents (the [[dots]] cohort), announced November 13, 2026. It lets ChatGPT agents complete purchases on a user's behalf without exposing the user's actual card number, security code, or expiration date to the merchant or agent. Users save an eligible card once, then for each purchase review the merchant, items, total, and selected card before authorizing with a biometric security check (Face ID or Touch ID). After approval, the payment network creates a tokenized card credential rather than exposing the underlying card details; the transaction remains charged to the user's selected card and is designed to preserve applicable card rewards and dispute protections.

The launch is positioned as a resolution of a central barrier to [[agentic-commerce]]: allowing autonomous software to complete purchases while limiting access to sensitive financial data and keeping human approval at the point of payment. Initial rollout is limited to ChatGPT Pro users aged 18+ in the United States with eligible U.S.-issued cards and billing addresses, in partnership with American Express, Chase, Mastercard, and Visa. OpenAI is also publishing merchant integration guidance for its agentic-commerce ecosystem, including use of network tokens and Payment Account References.

## Timeline

- **2026-11-17-morning**: **ChatGPT Wallet announced Nov 13 2026 as OpenAI's payment layer for ChatGPT AI agents — tokenized-card credential + biometric per-transaction authorization (Face ID / Touch ID) + merchant/items/total/selected-card user review + partnership with American Express + Chase + Mastercard + Visa + initial rollout gradual + ChatGPT Pro-only + US-only + 18+ age-gated + eligible US-issued cards only + OpenAI publishes merchant integration guidance incl. network tokens + Payment Account References**. TLDR AI MEDIUM top update: *"OpenAI introduced ChatGPT Wallet, a payment layer for ChatGPT's AI agents, allowing them to make purchases without accessing users' actual card details while requiring a security check for every transaction."* Also framed in NLP Newsletter + Cerebral Valley + daily-digest Top Story #2 as moving AI agents "from recommending or finding information toward taking authenticated economic actions on a user's behalf." See [[openai]] + [[dots]] + [[agentic-commerce]] + [[chatgpt]] — *source: data/summaries/2026-11-17-morning.json (TLDR AI MEDIUM "ChatGPT Wallet 💳, Devin Apps 🛠️, always-on agents ⚡"; NLP Newsletter MEDIUM "My Top 10 Eval Papers of 2026"; Cerebral Valley – Week of November 16; researchFindings.additionalContext — ChatGPT Wallet + OpenAI)*

## Key Facts

- **Launch date**: November 13, 2026
- **Mechanism**: tokenized card credential via payment-network tokenization rather than raw card-number exposure
- **Authorization model**: per-transaction biometric check (Face ID / Touch ID) + user review of merchant, items, total, selected card before approval
- **Initial availability**: ChatGPT Pro, US-only, 18+, eligible US-issued cards + billing addresses
- **Network partners**: American Express, Chase, Mastercard, Visa
- **Merchant integration**: network tokens + Payment Account References documented in OpenAI's agentic-commerce guidance
- **Preserved protections**: card rewards + dispute rights designed to pass through unchanged

## Open Questions

- International rollout timeline beyond US-only ChatGPT Pro
- Which agent surfaces beyond ChatGPT ([[dots]], Atlas) will get Wallet access
- Whether Wallet interoperates with [[universal-commerce-protocol]] / [[claude-commerce-agents]] or remains OpenAI-native checkout
- Fraud/abuse model for agent-side authentication distinct from user-biometric step
- Attribution + commission structure for agent-completed purchases
- Does the tokenized-credential approach become the de facto agent-payment standard across frontier labs

## Sources

- data/summaries/2026-11-17-morning.json (TLDR AI MEDIUM "ChatGPT Wallet 💳, Devin Apps 🛠️, always-on agents ⚡"; NLP Newsletter MEDIUM "My Top 10 Eval Papers of 2026"; Cerebral Valley – Week of November 16; researchFindings.additionalContext — ChatGPT Wallet + OpenAI)
