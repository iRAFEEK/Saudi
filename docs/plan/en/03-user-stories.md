# 03 — User Stories

14 epics, 70 stories. **P0** = MVP launch gate · **P1** = fast follow (first weeks after launch) · **P2** = growth. Acceptance criteria are the test list — a story is done when every bullet is demonstrably true.

Conventions: "customer" = the driver whose car crashed; "console" = the ops web app; money amounts are examples of configurable settings (see N3).

---

## Epic A — Accident assistant & tow request (customer)

### A1 · Request a tow from the SOS button without an account — P0
*As a driver who just crashed, I want to request a tow without signing up, so stress never meets a form.*
- With no session, the SOS flow completes with only a phone number; the account is created silently and linked to the case afterward.
- Location auto-detected (GPS) with drag-a-pin fallback; car described by make/model/year/color/plate (free text allowed); flow completes in ≤ 3 minutes.
- A case is created the instant the request submits, visible on the console dispatch inbox with channel = `app`.
- Offline/weak signal: the request queues and retries; the user sees "sending…" state, never a silent failure.

### A2 · Guided accident checklist — P0
*As a shaken driver, I want the app to tell me what to do in order, so I don't miss a legal or safety step.*
- Steps render in order: (1) injuries → tap-to-call 997, (2) move to safety / hazard lights, (3) report to Najm → tap-to-call 920 000 560, (4) photograph the scene.
- The injuries step visually dominates until dismissed; every step is skippable without blocking the tow request.
- Checklist state saves to the case (which steps were done, when).

### A3 · Damage photos attach to the case — P0
*As a customer, I want my accident photos kept with my case, so they serve the estimate and the insurance claim.*
- Camera opens in-flow; photos upload in background with retry; EXIF time/geo preserved.
- Photos appear on the console case record before the tow arrives; the estimator sees them at intake.
- Photos are included in the insurer-facing export (F4) when the case is an insurance case.

### A4 · Destination choice with upfront pricing — P0
*As a customer, I want to see exactly what the tow costs before I order, so there are no surprises.*
- Two options always render: our workshop (0 SAR, labeled «مجانية إذا أصلحت عندنا») and customer-chosen destination (fee from settings; per-km outside city limits).
- The applicable fee (including any night/holiday surcharge flag) renders on the confirm button screen before submission — never after.
- Selecting "elsewhere" records the case as tow-only-intent but keeps the estimate offer available.

### A5 · Free cancellation before loading — P1
*As a customer, I want to cancel without charge until my car is on the truck, so requesting feels safe.*
- Cancel is available and free until the driver marks "loaded"; afterwards the tow fee applies (messaged clearly at the moment of cancel).
- Cancellation reason captured (found other help / police handled it / changed mind / price).
- Dispatcher and driver are notified instantly; the truck returns to available.

### A6 · Scheduled non-accident tow — P2
*As a car owner, I want to book a tow for later today (breakdown, purchase transport), so Salamtak is my tow default, not just my crash default.*
- Date/time slot picker; same pricing rules; case type = `transport` excluded from conversion metrics.

---

## Epic B — Tracking & arrival (customer)

### B1 · Live map with honest ETA — P0
- Truck position updates ≤ every 10s; ETA recalculates with traffic and is never frozen.
- Status ladder renders: assigned → en route → arrived → loaded → delivered.
- If ETA slips > 10 minutes from the promise, the customer gets a proactive apology notification with the new time (no silent slippage).

### B2 · Driver identity card — P0
- Before arrival the customer sees: driver name, photo, truck plate, rating.
- Tap-to-call and in-app chat available; numbers are masked (proxy) in Phase 2.
- Identity card matches the physical truck (plate) — mismatches are reportable in one tap.

### B3 · Family tracking share — P1
- "شارك الرحلة مع أهلك" produces a public magic link showing live position, driver identity, and destination — no app or login required.
- Link expires when the job completes; revocable by the customer.

### B4 · Arrival & milestone notifications — P0
- WhatsApp (primary) + SMS fallback at: assigned, 5-minutes-away, arrived, loaded, delivered-to-workshop.
- Every message carries the case link (magic link) — the message *is* the app for non-installers.

---

## Epic C — Intake & inspection (ops)

### C1 · 360° vehicle intake — P0
- Arriving cars get: ≥ 8 exterior photos (guided angles), VIN scan/entry, odometer, fuel level, existing-damage notes.
- Intake is blocking: the case cannot enter `INSPECTING` without it; intake author and time are stamped.
- Driver pickup photos (M2) pre-populate the intake gallery.

### C2 · Damage zones on a car diagram — P1
- Estimator marks damage zones on a top-down car diagram; each zone suggests estimate lines (panel, part, paint) to speed up building.
- Zones render on the customer estimate as a visual "what we found".

### C3 · Estimate SLA timer — P1
- A 3-working-hour clock starts at `AT_WORKSHOP`; remaining time shows on the case and the dashboard.
- Breach fires an aging alert (J3) and an automatic customer apology with a new ETA.
- Working-hours calendar (incl. Ramadan hours) lives in settings.

---

## Epic D — Estimate & comparisons

### D1 · Build an estimate from the price book — P0
- Line search hits the price book by part name/model (Arabic synonyms supported: صدام/دعامية، شمعة/ليت).
- Adding a line pulls cost 🔒, sell price, source options, and availability automatically; manual lines allowed with a "not in book" flag that queues a book addition (K1).
- Draft autosaves; totals (subtotal, VAT 15%, total) compute live.

### D2 · Three source options per line — P0
- Each part line carries up to three options — أصلي / تجاري / مستعمل — each with price, warranty text, and availability (in stock / order X days).
- The estimator picks the default; all available options ship to the customer view.
- Missing sources render as unavailable, never as 0.

### D3 · Dealership anchor price — P1
- Each estimate shows the وكالة reference total (from price-book `dealer_ref` values) and the resulting savings figure.
- Anchor is labeled as a reference estimate; lines missing a dealer_ref degrade gracefully (anchor hides if coverage < 60%).

### D4 · Customer view with per-line toggles — P0
- The customer (app or magic link) switches sources per line; line price and totals recalculate instantly; VAT always included in the headline number.
- Selections persist and are visible to the estimator in real time.
- The view renders costlessly — no cost/margin data is ever present in the payload (not merely hidden).

### D5 · Branded PDF export — P1
- One tap generates an Arabic PDF: lines with the chosen options, totals, validity, warranty terms, workshop contact, and case QR.
- The PDF is watermarked with issue date + version and attached to the case.

### D6 · Expiry & versioning — P1
- Estimates expire after a configurable validity (default 48h); expired estimates prompt re-confirmation of prices before approval.
- Any post-send edit creates v(n+1) with a stored diff; the approved version is immutable.

---

## Epic E — Approval & negotiation

### E1 · OTP-backed remote approval — P0
- Approval requires an OTP to the case phone number; the record stores estimate version, selections, timestamp, and number.
- The approved snapshot (lines + prices + terms) freezes and renders identically forever, regardless of later price-book changes.

### E2 · Deposit payment — P0
- On approval the deposit (default 50%, configurable per case) is requested via mada / Apple Pay / payment link; transfer and cash options log manually with proof.
- Payment failure keeps the case `APPROVED_UNPAID` with retry; parts ordering can be gated on deposit receipt (setting).

### E3 · Questions & counter-offers — P1
- "عندي استفسار" opens a thread on the estimate; the estimator can reply or issue v2.
- Discount given (v1 total − approved total) is stored per case and reported per estimator (L2).

### E4 · Decline & tow-fee collection — P0
- Declining prompts a structured reason, generates the tow-fee invoice (150 SAR default), and collects by link or logged cash.
- The case closes as `CLOSED_TOW_ONLY` with the PDF attached to the goodbye message; nothing about the flow is punitive.

### E5 · Silence reminder ladder — P1
- No response at 24h → automatic gentle WhatsApp reminder; at 48h → a call task for a human on the dashboard.
- Reminders stop instantly on any customer action; the ladder is configurable.

---

## Epic F — Insurance & Najm (full module, v1)

### F1 · Insurance intake typing — P0
- Case open captures pay type (cash / شامل / ضد الغير), insurer (from the insurer registry), policy/claim reference, and the Najm report number + file upload.
- All fields are late-attachable — a roadside case can start untyped and be typed at the workshop.
- Pay type drives which downstream flows render (advisor, claim pipeline, receivables).

### F2 · Claim pipeline — P0
- Every insurance case owns a claim record with stages: reported → assessed → approved / cash-settled → paid out; each stage change stamps who/when.
- Every active claim names a next-action owner (staff / customer / insurer) and shows its age; the customer sees a simplified read-only pipeline.
- Claims list filterable by insurer, stage, and age (console O9 view).

### F3 · Settlement advisor — P1
- For شامل / ضد الغير cases with an estimate, the app renders: expected settlement vs repair-with-us total vs cash left over.
- Expected settlement is staff-entered (from تقدير/assessor outcomes) with an "estimate" disclaimer; the recommendation updates when either number changes.
- Advisor outcomes (taken / not taken) are recorded to measure the wedge.

### F4 · Insurer-facing estimate export — P1
- One tap produces a formal PDF for assessors: itemized lines, photos, VIN, Najm number, workshop credentials — layout distinct from the customer PDF.

### F5 · Insurer receivables — P0
- Insurer-paid cases create receivables with aging; the finance view totals them per insurer; dunning tasks fire at configurable ages.
- Settlement payments reconcile against the receivable, not against the customer.

### F6 · Per-insurer cycle stats — P2
- Median days per stage per insurer, computed from claim history; surfaces in O9 and feeds the advisor's "cash beats waiting" copy.

---

## Epic G — Repair tracking & delivery

### G1 · Workshop kanban with photo prompts — P0
- Columns: awaiting parts → bodywork → paint → assembly → QC → ready; drag/drop moves stamp the case.
- Each move prompts stage photos (skippable with a reason, tracked); WIP counts show against workshop capacity.

### G2 · Customer progress push — P0
- Every stage move updates the customer progress screen and sends the WhatsApp template with photos and the current ETA.
- ETA changes require a reason that is included in the message (part delay, added damage found, etc.).

### G3 · QC gate — P0
- "Ready" requires the QC checklist complete + final photo set; failures return the card with a required note.
- The delivery report (checklist + photos) attaches to the case and to the delivery message.

### G4 · Pickup slot or paid delivery — P1
- On ready, the customer books a pickup slot or requests home delivery (fee from settings); delivery becomes a driver job (M-series) with POD.

### G5 · Storage-fee policy — P2
- Cars unpicked N days after ready accrue a daily fee — warned at day N−2, itemized on the invoice, waivable by the owner role.

---

## Epic H — Payments & invoicing

### H1 · Card payments via Saudi PSP — P0
- mada, Apple Pay, and cards accepted through hosted payment links (PSP: Moyasar or equivalent); success/failure webhooks update the case in real time.
- Every payment records: method, amount, kind (deposit/final/tow fee/delivery), reference; receipts message automatically.

### H2 · Cash & transfer logging — P0
- Cash entries record collector + amount and feed the daily cash close (L3); transfers require a proof image.
- Unmatched transfers land in a reconciliation queue instead of guess-matching.

### H3 · ZATCA-compliant invoices — P0
- Every revenue event (repair, tow-only, delivery) issues a simplified tax invoice: sequential number, VAT 15% breakdown, seller VAT registration, TLV QR per ZATCA spec.
- B2B (fleet/insurer) cases can issue standard tax invoices with buyer VAT details.
- Invoices are immutable; corrections via credit notes.

### H4 · Payment plans — P1
- Deposit/milestone/final splits configurable per case; the case shows paid vs due at all times; delivery can be gated on balance (setting).

### H5 · Refunds — P2
- Refunds require owner approval + reason code; they reverse against the original payment record and appear on the case P&L.

---

## Epic I — Dispatch (ops)

### I1 · Request inbox with assignment — P0
- New requests ring (sound + badge) with location, car, photos, and destination; the nearest available truck is suggested with its ETA.
- One-tap assign notifies the driver and the customer; reassignment is possible until pickup.

### I2 · Truck & driver registry — P0
- Trucks: plate, model, TGA license + expiry (alert at −30 days); drivers: license, phone, commission scheme, shift status (متاح/خارج الخدمة).

### I3 · Phone-in manual cases — P0
- "قضية يدوية" opens the same case form pre-set to channel = `phone`; a dispatcher completes it in ≤ 60 seconds (phone, location text, car, destination).
- Manual cases flow through the identical pipeline — no parallel paper universe.

### I4 · SLA timers — P1
- Unassigned requests color-shift (green → amber → red) on configurable thresholds; breaches log for the dashboard.

### I5 · Auto-dispatch — P2
- Auto-assign nearest available truck with a dispatcher override window; measured against manual assignment before default-on.

---

## Epic J — Case management (ops)

### J1 · Unified case record — P0
- One timeline shows every event class: statuses, photos, messages (in/out), estimate versions, payments, claim stages — newest context always one scroll away.
- Every entity in [06](06-data-and-architecture.md) that references a case renders on this timeline.

### J2 · Next-action owner — P0
- Every open case names who owes the next move (staff member / customer / insurer); "my actions" filters the list per user.
- Ownerless open cases are a data error surfaced on the dashboard.

### J3 · Aging alerts as tasks — P1
- Configurable rules fire dashboard tasks: estimate silent 24h, car ready 3d unpicked, claim stage stale 7d, part order overdue.
- Tasks carry one-tap actions (call, remind, escalate) and complete with an outcome note.

### J4 · Search by the three things a caller says — P0
- Instant search across case ID, phone number, and plate; partial matches; Arabic/Latin plate forms both hit.

### J5 · Cold-case win-back list — P2
- Declined/unreachable cases with reasons, filterable for campaigns; win-back outcomes tracked to measure recovered revenue.

---

## Epic K — Price book & inventory (ops)

### K1 · Parts catalog — P0
- Entries: part × car model/years × source (أصلي/تجاري/مستعمل) × supplier, with cost 🔒, sell price, dealer reference, lead time.
- Estimator "not in book" flags queue here for enrichment; every estimate written grows the book.

### K2 · Labor & paint rate cards — P0
- Bodywork rates per operation size, paint per panel, diagnostics/electrical flat rates — versioned so old estimates keep their rates.

### K3 · Stale-price flags — P2
- Entries older than a threshold show age and surface in a re-quote queue; supplier-wide % bulk updates with preview.

### K4 · Part orders tied to cases — P0
- POs reference case + estimate lines; statuses: ordered → shipped → received → inspected; a late PO flags every case it blocks (and offers the customer ETA update, G2).

### K5 · Receiving with inspection — P1
- Receiving requires an inspection photo + pass/fail; failures open a supplier-return record and re-flag the case.

### K6 · Consumables min-stock — P2
- Paint/materials tracked by level with min-level alerts on the dashboard.

---

## Epic L — Finance & reporting (ops)

### L1 · Per-case P&L — P0
- Revenue (repair, tow, delivery) minus parts cost, labor allocation, paint materials, and tow cost = case gross margin, visible (owner 🔒) live and at close.

### L2 · Owner dashboard — P0
- Today: tows, cars in shop, estimates awaiting reply, cash collected. Month: revenue by stream (weekly bars), funnel (tows → estimates → approvals) with conversion vs target, drill-down per estimator/truck.

### L3 · Daily cash close — P0
- Expected cash (from payment records) vs counted, with variance stored and signed by the closer; unclosed days block the next close.

### L4 · Expense capture — P1
- Expenses by category (parts, salaries, satha fuel, rent, other) with photo receipts; feeds monthly P&L.

### L5 · Receivables with aging — P0
- Customers (partial payments) and insurers in one view, aged 0-7/8-30/30+; dunning tasks from J3.

### L6 · Monthly export — P2
- One-click month pack (PDF/Excel): revenue, VAT, expenses, receivables — accountant-ready.

---

## Epic M — Driver mode

### M1 · One job at a time — P0
- Job offer shows pickup, car, destination, and pay type; accept/decline with timeout re-routing; active job screen hands off navigation to Google Maps.
- Big-type Arabic UI; every action ≤ 2 taps; works one-handed.

### M2 · Forced pickup documentation — P0
- The "loaded" button unlocks only after required photos (4 corners + damage close-ups); optional voice note; all geo/time-stamped to the case.
- Offline capture with background upload.

### M3 · Close-out with money instruction — P0
- The job's final screen states exactly one of: «مجانية — لا تستلم مبلغ» or «حصّل X ر.س» with method logging (cash/POS/link) required before close.
- Workshop handover captures a receiver signature (or geo-stamped photo fallback).

### M4 · My day & commission — P1
- Completed jobs, distances, and computed commission visible to the driver; disputes flag to the owner.

---

## Epic N — Staff, roles & settings (ops)

### N1 · Role-based access — P0
- Roles per the matrix in [06](06-data-and-architecture.md); costs/margins render only for owner (and accountant read); server-side enforcement, not UI hiding.

### N2 · Audit log — P1
- Price edits, discounts, refunds, deletions, and role changes log who/what/when/before/after; owner-searchable.

### N3 · Business configuration — P0
- Editable without code: tow fees & zones, night/holiday surcharge, VAT rate, deposit %, margin floor %, estimate validity, SLA hours & working calendar, storage-fee policy, referral credit.

### N4 · Arabic template editor — P1
- Every outbound WhatsApp/SMS template editable with variable placeholders and live preview; changes versioned.
