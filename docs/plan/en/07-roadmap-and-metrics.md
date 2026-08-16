# 07 — Roadmap & Metrics

## Phase 0 — Design & validation *(this deliverable)*

**Goal:** agree on exactly what we're building before a line of app code.

- ✅ Complete product design: all 25 screens (11 customer, 10 ops, 4 driver) in the blueprint artifact
- ✅ Plan docs (this folder)
- ⬜ Walk the operator (أبو خالد) through every ops screen against one real week of his cases; correct what the designs got wrong
- ⬜ Collect the real numbers: tow fees & zones, margin floor, deposit %, labor rates, top-50 parts for the price-book seed
- ⬜ Brand/trademark check for «سلامتك»; hotline number; legal flags from [06](06-data-and-architecture.md)

**Exit:** operator signs off on flows + numbers; Phase 1 backlog = every P0 story in [03](03-user-stories.md).

## Phase 1 — MVP, both sides live (~6–8 weeks)

**Goal:** one integrated launch — customers can go accident → repaired → paid entirely in-system, and the operation runs on the console.

| Track | Scope (all P0 stories) |
|---|---|
| Customer PWA + magic links | A1–A4, B1, B2, B4, C7-view (D4), E1, E2, E4, C9-view (F1/F2 read), G2 (receive), H1, C11 essentials |
| Ops console | I1–I3, J1, J2, J4, C1, D1, D2, F1, F2, F5, G1, G3, K1, K2, K4, L1–L3, L5, N1, N3, H2, H3 |
| Driver mode | M1–M3 |
| Infra | WhatsApp templates approved, PSP live, ZATCA QR, hosting in-region, audit basics |

**Launch checklist:** 2 trucks + drivers onboarded · price book seeded (top 50 parts × 3 sources + labor rates) · templates approved · test cases end-to-end incl. one insurance case and one decline · cash-close ritual trained · Google Business profile live · hotline forwarding.

**Exit:** 100 real cases processed; conversion, SLA, and margin measured (not estimated).

## Phase 2 — Growth & polish (months 3–6)

P1 backlog + measured gaps: native wrappers + push · full settlement advisor (F3, F4) with per-insurer data (F6) · reminder ladders (E5, J3) · negotiation versioning UX (E3) · damage-diagram intake (C2, C3) · PDF exports (D5) · delivery booking (G4) · payment plans (H4) · SLA/auto-dispatch experiments (I4→I5) · receiving & consumables (K5, K6) · ratings public page + referral engine · win-back campaigns (J5) · salvage (تشليح) offers for total-loss.

**Exit:** conversion ≥ 55% sustained; ≥ 25% of new cases arrive via referral/repeat; claim cycle visible per insurer.

## Phase 3 — Platform (month 6+)

Fleet contracts (B2B SLA, consolidated standard invoices) · insurer direct-billing agreements · second location / partner workshops on the same rails (multi-branch model) · supplier integrations into the price book · auto-dispatch default-on.

## KPIs — definitions and targets

| KPI | Definition | Target |
|---|---|---|
| **Tow → repair conversion** | Cases `CLOSED_PAID` ÷ (cases picked up, excl. `transport` type), rolling 30d | **≥ 55%** |
| Tow arrival time | Median request→arrival, in-city, working hours | ≤ 30 min |
| Estimate turnaround | Median `AT_WORKSHOP` → `ESTIMATE_SENT` (working hours) | ≤ 3 h |
| Approval latency | Median `ESTIMATE_SENT` → decision | ≤ 24 h |
| Average approved ticket | Mean approved estimate total | 3,000–5,000 SAR band |
| Gross margin per case 🔒 | Case P&L margin at close | ≥ 35% |
| Repair cycle | `APPROVED` → `READY` | minor ≤ 3d, moderate ≤ 7d |
| Claim cycle | Per-insurer median per stage | measured; alerts at 7d stale |
| Insurer receivables aging | Balance > 30 days | → 0 |
| Rating / referral share | Post-delivery rating; % new cases from referral/repeat | ≥ 4.7 · ≥ 25% |
| Truck utilization | Jobs per truck per day | informs fleet growth |
| Cash variance | Daily |expected − counted| | 0, streaked |

Counter-metrics (watch for gaming): conversion vs margin (don't buy conversion with discounts — discount per estimator is on the dashboard); speed vs QC failures (QC fail rate trends with cycle-time pushes).

## Parked decisions (revisit at Phase 1 kickoff)

- Final brand + trademark; hotline short number
- Real tow fee/zone table and night-surcharge policy
- Deposit % and whether parts ordering waits for deposit
- Storage-fee policy numbers
- PSP choice (Moyasar vs Tap vs HyperPay) after fee negotiation
- WhatsApp BSP (direct Meta vs Unifonic)
- Whether the estimate rating/reviews are public at launch or after volume
