# 02 — Personas & Journeys

## Personas

### Customers

**عبدالعزيز — 27, marketing employee, Camry 2019 (financed)**
Third-party insurance only. First real accident, at night, on طريق الملك فهد; needs the car for work tomorrow. *Goals:* someone takes over the whole problem; fair price; speed. *Fears:* being cheated (مغشوش), unknown workshops, hidden fees. *Wins with:* the SOS button, upfront tow pricing, the وكالة anchor price, fast estimate. *Quote:* «أبي أحد يتولى الموضوع كله».

**نورة — 32, teacher, Tucson 2022, comprehensive (شامل)**
Will not wait alone at night or tour industrial-district workshops. *Goals:* handle everything remotely and respectfully; keep family informed. *Fears:* safety with an unknown driver; being talked down to. *Wins with:* verified driver identity, live family tracking-share, full journey from the phone, WhatsApp communication. *Quote:* «ما أبي أروح ورش، أبي كل شي من الجوال».

**أبو فهد — 52, owns five delivery vans**
Downtime is money. *Goals:* one accountable contact, VAT invoices, priority turnaround, fleet history. *Wins with:* B2B invoicing and SLA (Phase 3 revenue engine).

### Operations

**أبو خالد — the owner-operator (the client)**
Runs two sathas and the workshop from his head, WhatsApp, and a notebook. Knows his craft cold; loses money to forgotten cases, silent estimates, late parts, and unreconciled cash. *Wins with:* one pipeline, conversion & margin per case, aging alerts, daily cash close. *Success for him:* fewer phone calls, more closed cases, numbers he can trust.

**سعود — satha driver**
On the road all day, not a screen person. *Wins with:* one job at a time, huge Arabic type, navigation hand-off to Google Maps, forced photo documentation that protects him from damage claims, and a commission counter he can see.

**مشعل — estimator / workshop foreman**
Turns wrecks into numbers and schedules. *Wins with:* price-book search while estimating, availability inline, part orders tied to cases, and a kanban that updates customers so nobody interrupts him for status.

## The end-to-end journey (primary path)

| # | Stage | Customer feels | Customer sees | Backstage |
|---|---|---|---|---|
| 1 | Accident | Panic, adrenaline | SOS button; checklist: injuries → 997, safety, Najm, photos | Case auto-opens on request |
| 2 | Tow request | Urgency, suspicion of cost | 3-step wizard; destination pricing: ours = 0, elsewhere = 150 | Dispatcher assigns nearest truck |
| 3 | Waiting | Vulnerability (esp. at night) | Live map, ETA, driver name/plate/rating, family share | Driver en-route; SLA timer running |
| 4 | Pickup | Relief, mild anxiety about the car | Driver photographs the car before loading | 6 condition photos + voice note → case |
| 5 | At workshop | Impatience | Case timeline: "estimate within 3 working hours" | 360° intake, VIN, damage zones → estimate draft |
| 6 | Estimate | Skepticism → agency | Per-line أصلي/تجاري/مستعمل toggles; وكالة anchor; total recalcs | Estimator prices from the book; owner sees margin |
| 7 | Approval | Commitment, wanting reassurance | OTP approval; deposit; terms (days, warranty) | Version freezes; parts auto-ordered |
| 8 | Repair | Background worry | Stage-by-stage photos (parts → body → paint → assembly → QC) | Kanban moves push notifications |
| 9 | Delivery | Anticipation | Ready notice; pickup slot or paid delivery; ZATCA invoice; balance | QC gate passed; payment reconciles |
| 10 | After | Goodwill (or grievance) | Rating; referral credit; warranty card in "My cars" | Case P&L closes; review posted |

**Emotional design rule:** stages 1–4 minimize decisions (panic-proof); stages 6–7 maximize agency (trust-building); stages 8–10 maximize proof (retention).

## The decline path — designed, not ignored

Trigger: customer rejects the estimate (or goes silent past the reminder ladder).

1. Tow fee (150 SAR) collected by payment link or cash — the case closes clean, never hostile.
2. The estimate exports as a **branded PDF they keep** — useful anywhere, and it keeps our price as their reference point.
3. Offered: paid delivery to any workshop they choose (we stay helpful to the end).
4. Structured decline reason captured (price / trust / insurance said no / total loss / other).
5. Win-back automation: after 7 days, a WhatsApp check-in («وش صار على سيارتك؟») with a price-match or re-quote offer.
6. Future creative plays (Phase 2+): price-match guarantees, partner-workshop referral fees, salvage (تشليح) purchase offers for total-loss cars.

A declined case that paid its tow fee and got a PDF is not a loss — it is a marketing impression with positive margin.

## The insurance journey (runs alongside stages 2–9)

1. **Intake typing** at case open: cash / شامل / ضد الغير + insurer + Najm report number (uploadable later — many customers won't have it yet at the roadside).
2. **Claim record** opens with its own pipeline: reported → assessed (تقدير) → approved / cash-settled → paid out. Each stage has an owner and an age; staff update stages as calls/emails resolve (no insurer APIs exist — the system is the memory, not the wire).
3. **The settlement advisor** (the wedge): once our estimate exists, compare the expected cash settlement against repairing with us. «التعويض المتوقع 5,800 — الإصلاح عندنا 3,416 — يبقى لك 2,384» converts an insurance chore into a reason to choose us, backed by per-insurer cycle-time data ("cash beats waiting 17 days for الدرع").
4. **Direct insurer repair** when the customer prefers: we export a formal estimate PDF with photos for the assessor, track approval, repair on approval, and the invoice becomes an **insurer receivable** with aging and dunning tasks.
5. **Total loss:** estimate above the economic threshold → advise honestly, and (Phase 2) offer a salvage purchase so even a written-off car ends warm.

## Service blueprint summary

Frontstage promises map 1:1 to backstage mechanisms — this table is the contract the build must honor:

| Promise to the customer | Mechanism that keeps it |
|---|---|
| "Tow in ≤ 30 minutes" | Dispatch SLA timer + nearest-truck suggestion + truck utilization view |
| "No surprise fees" | Fees render before request; config lives in settings, not in chat |
| "Estimate in ≤ 3 working hours" | Case SLA clock + dashboard aging alert at breach |
| "Fair prices you can compare" | Price book with per-source cost/price + dealership reference |
| "See your car's progress" | Kanban moves are the notification triggers; photos required per stage |
| "Your money is documented" | OTP approvals, ZATCA invoices, payment records on the case |
| "We treat the claim seriously" | Claim pipeline with owner + age; nothing lives in one person's memory |
