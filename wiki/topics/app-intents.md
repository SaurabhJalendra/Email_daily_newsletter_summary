---
name: App Intents
description: Apple's framework for declaring an app's actions, content, entities, and data in structures that Apple Intelligence + Siri AI can understand — bridges third-party apps to system-level AI through schemas (contract), transferable content, view annotations, and the App Intents Testing Framework
type: topic
---

# App Intents

> **Type**: topic
> **First mentioned**: 2026-11-04-evening
> **Last updated**: 2026-11-04-evening
> **Status**: active
> **Related**: [[apple]], [[siri-ai]], [[apple-intelligence]], [[agent-frameworks]], [[tool-use]]

## Summary

App Intents is [[apple]]'s framework for declaring an app's actions, content, entities, and data in structures that Apple Intelligence can understand. It serves as the bridge between third-party apps and [[siri-ai]], Spotlight, Shortcuts, and related system experiences: developers expose actions through intents and content through app entities, allowing users to make natural-language requests such as checking a delivery, booking a reservation, finding previously viewed content, or acting on information currently on screen. Apple describes the schemas as a contract that helps its models identify, query, and invoke the appropriate app capability — a permission-aware, standardized alternative to letting general-purpose models operate apps through brittle UI automation.

The most significant recent development is Apple's **November 3, 2026 announcement** that a Siri AI Developer Preview is opening to all developers in the iOS 27.3, iPadOS 27.3, macOS 27.3, and visionOS 27.3 betas. This expands App Intents from a primarily Siri, Shortcuts, and Spotlight integration mechanism into an app-tooling layer for AI-assisted, cross-app workflows, including personal-context understanding and onscreen awareness. Apple has also introduced **broader schema support**, **transferable content between apps**, **view annotations for onscreen context**, and an **App Intents Testing Framework**. The industry impact: app discoverability and user access increasingly depend on exposing structured capabilities to platform AI, while Apple gains a standardized, permission-aware alternative to general-purpose models operating apps through brittle UI automation.

## Timeline

- **2026-11-04-evening**: **App Intents framework expands as backbone of Siri AI Developer Preview — Nov 3 2026 announcement opens the SDK to all developers in iOS/iPadOS/macOS/visionOS 27.3 betas**; new platform-tooling: schemas-as-contract + transferable content between apps + view annotations for onscreen context + App Intents Testing Framework. Example cross-app tasks: check deliveries + book reservations + place orders + find previously-viewed content + act on onscreen info. See [[apple]] + [[siri-ai]] — *source: data/summaries/2026-11-04-evening.json (TLDR MEDIUM "Siri AI dev preview 📱, ChatGPT races Google 📈, engineering is changing 👨‍💻"; researchFindings.additionalContext — Siri AI + App Intents; Notable Links apple.com/developer/news)*

## Key Facts

- **Vendor**: [[apple]]
- **Role**: framework that declares an app's actions + content + entities + data in structures Apple Intelligence can understand
- **Surfaces**: [[siri-ai]], Spotlight, Shortcuts, related system experiences
- **Developer Preview opened to all developers**: 2026-11-03
- **Available in**: iOS 27.3, iPadOS 27.3, macOS 27.3, watchOS 27.3, visionOS 27.3 betas
- **Developer tooling**: Xcode + internal TestFlight
- **Not yet GA**: App Store submission + broader customer access expected spring 2027
- **Platform-tooling expansion (Nov 2026)**: broader schema support, transferable content between apps, view annotations for onscreen context, App Intents Testing Framework
- **Example cross-app tasks**: check deliveries, book reservations, place orders, find previously-viewed content, act on onscreen info
- **Core framing per Apple**: schemas as a contract that helps models identify, query, and invoke the appropriate app capability
- **Positioning**: permission-aware, standardized alternative to general-purpose models operating apps via brittle UI automation

## Open Questions

- Interop with rival AI assistants (Claude, ChatGPT) via Apple's reported Extensions Framework / Model Delegation substrate — do third-party models invoke App Intents directly?
- Permission + privacy model: how intent invocation is gated per-user, per-app
- Developer policies for high-risk intents (financial transactions, health data, destructive actions)
- Monetization: whether Apple will gate advanced intents behind App Store review tiers or Apple Intelligence usage caps
- Cross-platform parity vs Google's [[app-actions]] / Android equivalents
- Observability + debugging: trace/replay surface for intent invocations

## Sources

- data/summaries/2026-11-04-evening.json (TLDR MEDIUM "Siri AI dev preview 📱, ChatGPT races Google 📈, engineering is changing 👨‍💻" — Developer Preview opens to all developers Nov 3 2026 via iOS/iPadOS/macOS/watchOS/visionOS 27.3 betas; researchFindings.additionalContext — Siri AI + App Intents canonical framework-page page-creation anchor; Notable Links apple.com/developer/news "Siri AI is now open to all developers")
