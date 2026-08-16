# سلامتك Salamtak — Product Plan

**The first call after the accident — أول اتصال بعد الحادث**

An accident-to-repair platform for Riyadh. When someone crashes, Salamtak is the button they press: a tow truck (سطحة) arrives in minutes, the car goes to our workshop, they get a transparent itemized estimate with real price comparisons — and **the tow is free if they repair with us**. Behind it, a complete management console runs the whole operation: cases, dispatch, pricing, workshop, insurance, and money.

> **Design blueprint:** every screen of the product (11 customer, 10 ops, 4 driver) is designed in the companion HTML blueprint published as a Claude artifact ("Salamtak سلامتك"). These docs carry the written depth behind those designs.

## The one-paragraph business model

The tow is not a product — it is **customer acquisition**. We arrive first (≤ 30 min target), tow for free, and earn the repair with an estimate the customer can compare line by line (أصلي / تجاري / مستعمل against the dealership price). If they decline, they pay only the tow fee (e.g. 150 SAR, disclosed upfront) and leave with a portable PDF estimate — still slightly profitable, still a future customer. The single number the whole system optimizes is the **tow → repair conversion rate** (target ≥ 55%).

## Reading order

| Doc | What it answers |
|---|---|
| [01 — Vision & market](01-vision-and-market.md) | Why this wins: problem, model, unit economics, competition, go-to-market, risks |
| [02 — Personas & journeys](02-personas-and-journeys.md) | Who we serve and the end-to-end journey, including decline and insurance paths |
| [03 — User stories](03-user-stories.md) | The build backlog: 14 epics, ~70 stories with acceptance criteria and priorities |
| [04 — UX spec](04-ux-spec.md) | Screen-by-screen specs for all three surfaces + the notifications matrix |
| [05 — Design system](05-design-system.md) | Principles, tokens, typography, RTL rules, voice & tone with real Arabic copy |
| [06 — Data & architecture](06-data-and-architecture.md) | ERD, case state machine, permissions, stack, integrations, compliance |
| [07 — Roadmap & metrics](07-roadmap-and-metrics.md) | Phases, KPIs with definitions, launch checklist, parked decisions |
| [08 — Claude Design prompts](08-claude-design-prompts.md) | Ready-to-paste prompt per screen for building on the synced design system in claude.ai/design |

## Scope decisions (agreed 2026-08-16)

- **MVP ships both sides together**: the customer app and the management console — one integrated launch, design-first.
- **Insurance is a full v1 module** (intake typing, Najm capture, claim pipeline, settlement advisor, receivables) — not a capture-only stub.
- **Docs in English; the product is Arabic-first** (all UI copy in the designs is real Arabic).
- **Working brand: سلامتك Salamtak** — trademark/name check pending; treat as a placeholder in code (`salamtak`).

## Glossary

| Term | Meaning |
|---|---|
| سطحة (satha) | Flatbed tow truck — the vehicle and, colloquially, the service |
| نجم (Najm) | Najm for Insurance Services — attends accidents and issues the report insurers require (920 000 560) |
| تقدير (Taqdeer) | Vehicle damage assessment used by insurers to value claims |
| الوكالة (al-wakala) | The dealership / agency service center — the high price anchor |
| تشليح (tashleeh) | Salvage/used-parts market (e.g., used parts sourced from scrap yards) |
| شامل (shamel) | Comprehensive insurance — customer's own insurer pays |
| ضد الغير (dhid al-ghair) | Third-party liability — the at-fault party's insurer pays |
| أصلي / تجاري / مستعمل | OEM / aftermarket / used — the three part-source options in every estimate |
| ZATCA / فاتورة | Saudi tax authority e-invoicing regime (QR-coded invoices, 15% VAT) |
| مدى (mada) | The dominant Saudi debit network |

## Status

Phase 0 (design & validation) delivered by this plan. Next: validate flows and numbers with the operator, then build Phase 1 per [07 — Roadmap](07-roadmap-and-metrics.md).
