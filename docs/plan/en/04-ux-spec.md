# 04 — UX Specification

Visual designs for every screen live in the Salamtak blueprint artifact; this doc is the written contract: purpose, contents, states, and edge cases per screen, plus the cross-cutting systems (magic links, notifications).

## Information architecture

```
CUSTOMER APP (Arabic RTL, PWA → native later)
├── Home (SOS)                    C2
│   ├── Accident assistant        C3
│   └── Tow request wizard        C4  (location → car → photos → destination)
├── Active case
│   ├── Live tracking             C5
│   ├── Case timeline             C6
│   ├── Estimate & comparisons    C7
│   ├── Approve & pay             C8
│   ├── Insurance helper          C9
│   ├── Repair progress           C10
│   └── Delivery & rating         C11
├── My cars / past cases / warranty cards
└── Settings (language, notifications) · Onboarding C1

OPS CONSOLE (Arabic RTL, responsive web)
├── Dashboard                     O1
├── Dispatch                      O2
├── Cases (list → detail)         O3 → O4
├── Estimates (builder)           O5
├── Workshop board                O6
├── Price book                    O7
├── Inventory & POs               O8
├── Insurance pipeline            O9
├── Finance                      O10
└── Team & settings

DRIVER MODE (same PWA, driver role)
D1 Jobs queue → D2 Job & navigation → D3 Pickup documentation → D4 Collect & close
```

## Customer screens

| # | Screen | Purpose | Must contain | Key states & edges |
|---|---|---|---|---|
| C1 | Onboarding | Phone-OTP sign-in with an emergency escape | Phone field, OTP boxes, «اطلب سطحة بدون تسجيل» escape | OTP retry cooldown; WhatsApp fallback for undelivered SMS; guest flow attaches account later |
| C2 | Home (SOS) | Own the panic moment | Giant «عندي حادث» button; quick actions (tow w/o accident, track, my estimates); free-tow promise strip; active-case card | Rendered dark in every theme (deliberate); logged-out = button still works; active case swaps in progress card |
| C3 | Accident assistant | Safety + legal steps in order | 997 call step (dominant if injuries), safety step, Najm call 920 000 560, scene photos | All steps skippable; photos background-sync; checklist state → case |
| C4 | Tow wizard | Order with zero surprises | Stepper (location→car→photos→destination); map pin; car field; destination cards with 0 SAR vs fee; confirm CTA repeats fee | No-GPS → drag pin / WhatsApp location; out-of-city per-km; night surcharge flag shown before request |
| C5 | Live tracking | Reassure while waiting | Map + route + ETA pill; driver card (name/photo/plate/rating); call; family share; status ladder | ETA slip > 10 min → proactive notice; share link public + expiring; free cancel until loaded |
| C6 | Case timeline | Kill "what's happening?" calls | Event feed (tow, arrival, inspection, estimate ETA); documents row (Najm, photos); WhatsApp support button | Estimate SLA breach → apology + new ETA; late Najm attach supported |
| C7 | Estimate | Convert through transparency | Per-line source toggles أصلي/تجاري/مستعمل with prices + warranty; fixed labor lines; وكالة anchor + savings; VAT-inclusive total; validity; approve + PDF/question CTAs | Unavailable source disabled with ETA; expiry → re-confirm prices; v2 renders diff badge |
| C8 | Approve & pay | Commit safely | Summary (total, deposit, duration, warranty); method segmented (mada/Apple Pay/transfer/cash); OTP note | Payment fail → retry/switch, case `APPROVED_UNPAID`; terms configurable |
| C9 | Insurance helper | Make insurance a reason to choose us | Policy/insurer card; Najm number + status; option A (settlement advisor with the 3 numbers) vs option B (direct insurer repair with claim pipeline chips) | Advisor renders only with staff-entered settlement estimate; third-party vs comprehensive copy differs; total-loss routes to advice screen |
| C10 | Repair progress | Proof over promises | Readiness % + expected day; stage timeline with photos per stage; honest delay reasons | Delay → ETA moves with stated reason; QC fail visible as "re-checking" not hidden |
| C11 | Delivery & rating | Close warm, seed the next case | Pickup slot vs paid delivery cards; ZATCA-QR invoice + balance; rating; referral credit card; warranty card | Unpicked > N days → storage policy warning; rating public per policy |

## Ops console views

| # | View | Purpose | Must contain | Key states & edges |
|---|---|---|---|---|
| O1 | Dashboard | The owner's morning | 4 today-tiles (tows, cars in shop, awaiting-reply, cash); weekly revenue bars (3 streams); funnel with conversion vs target; "needs you now" task list | Aging alerts are actionable tasks; drill-down per estimator/truck |
| O2 | Dispatch | Assign in seconds | Live map (trucks, pending pins); new-request card with suggested truck + ETA; active jobs list; «قضية يدوية» | Request rings; SLA color shift; reassignment until pickup |
| O3 | Case list | Pipeline at a glance | Stage filter chips with counts; rows: id, customer+car, status, next-action owner, value, age | Search by id/phone/plate; aging color thresholds; cold cases retained |
| O4 | Case detail | The spine | Tabs (overview/photos/estimate/insurance/payments/messages); full timeline; customer+vehicle cards; money summary; owner-only margin box | Read receipts on estimate views; every event stamped who/when |
| O5 | Estimate builder | Price fast, protect margin | Price-book search; lines with cost/price/margin/availability; totals + margin summary + dealer anchor; preview-as-customer; send | Below-floor line turns red; post-send edits create versions; manual lines flag book gaps |
| O6 | Workshop board | Flow control | Kanban (parts→body→paint→assembly→QC) with capacity header; cards: car, case, day count, blockers | Move prompts stage photos + customer push; QC gate checklist; blocked-by-PO badge |
| O7 | Price book | The moat | Part × model × source × supplier rows: cost, price, dealer ref, last-updated; labor/paint tabs; bulk % update | Stale-age flags; estimator proposals queue |
| O8 | Inventory & POs | Parts never surprise | PO table (supplier, items, case link, status, ETA); consumables min-stock alerts | Late PO flags blocked cases + offers customer ETA update; receiving requires inspection photo |
| O9 | Insurance | Claims never go quiet | Claims table: case, insurer, type, 4-stage chips, expected amount, age, next-action owner; receivables total; per-insurer cycle stats | Stage stale > 7d → task; formal PDF export per claim |
| O10 | Finance | Money truth | Month tiles (revenue, margin 🔒, customer receivables, insurer receivables); invoice list with ZATCA status; cash close card; expense summary | Partial payments tracked; unmatched transfers queue; immutable invoices + credit notes |

## Driver screens

| # | Screen | Purpose | Key states & edges |
|---|---|---|---|
| D1 | Jobs queue | One offer at a time + today's earnings | Offer timeout re-routes; shift toggle; offline queue |
| D2 | Job & navigation | Facts + hand-off to Google Maps | "Customer didn't answer" logging; GPS arrival detection with override |
| D3 | Pickup documentation | Forced condition photos | Continue locked until required set complete; voice note; local storage on weak signal |
| D4 | Collect & close | Unambiguous money instruction + handover | Free vs collect stated explicitly; method required; signature or geo-photo fallback |

## Magic links (no-install parity)

Every customer touchpoint has a tokenized web page — WhatsApp/SMS deliver these links so the full journey works without the app:

| Link | Content | Auth |
|---|---|---|
| Track | C5 equivalent (live map, driver card) | Token in URL, expires at delivery |
| Trip share | Read-only C5 for family | Public token, expires at delivery |
| Estimate | C7 with toggles + approve (E1 OTP happens in-page) | Token + OTP at approval |
| Pay | Hosted PSP page for deposit/balance/tow fee | PSP session |
| Progress | C10 equivalent | Token |
| Invoice | PDF + ZATCA QR | Token |

Rules: tokens are single-case scoped, revocable, and expire on case close (invoice link persists); pages are read-only except approve/pay; every page carries the hotline and WhatsApp deep link.

## Notifications matrix

WhatsApp Business API is the primary channel (template messages), SMS the fallback, push once the app is installed. **Bold** = also SMS if WhatsApp undelivered.

| Event | Customer | Ops | Driver |
|---|---|---|---|
| Tow requested | **Confirmation + track link** | Dispatch ring + badge | — |
| Assigned / 5-min away / arrived | **Status + ETA** | — | Job offer / reminders |
| Loaded (photos done) | Note + photo count | Timeline event | — |
| Delivered to workshop | Arrival + "estimate in ≤ 3h" | Intake task | Close-out prompt |
| Estimate ready | **Estimate link** | — | — |
| Estimate silent 24h / 48h | Gentle reminder | Call task (48h) | — |
| Approved + deposit paid | Receipt + start notice | Parts task; board card created | — |
| Stage moved | Progress + photos | — | — |
| ETA changed | New date + reason | — | — |
| Ready (QC passed) | **Ready + pickup/delivery options** | — | Delivery job (if booked) |
| Payment events | Receipt / invoice link | Finance record | Collection confirm |
| Claim stage changed | Simplified pipeline update | O9 aging reset | — |
| Declined | Tow-fee link + PDF + thanks | Reason logged; win-back scheduled | — |

Quiet hours: non-urgent messages hold 22:00–08:00 (urgent = tow lifecycle). All templates editable in Arabic via N4.
