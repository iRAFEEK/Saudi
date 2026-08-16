# 01 — Vision & Market

## The problem

Three failures collide at the moment of a crash in Riyadh:

1. **"Who do I call?"** There is no default answer. Drivers flag down passing sathas, phone relatives, or search Google at the roadside while traffic honks past. The stress of the moment makes people take the first offer they get.
2. **Price opacity.** Repair quotes are verbal, unitemized, and wildly variable between workshops in الصناعية. Drivers assume they are being cheated (often correctly), so they burn days collecting quotes — or overpay the dealership for peace of mind.
3. **The operator flies blind.** The business this platform digitizes already runs — profitably — on phone calls, WhatsApp threads, and a paper notebook. Cold cases get forgotten, part orders slip, real margin per car is unknown, and cash reconciliation is a nightly guess.

## The solution

One brand that owns the accident moment end-to-end:

- **Accident assistant** — a guided checklist (injuries → 997, safety, Najm report, evidence photos) that makes the app *the accident authority*, not just a tow button.
- **Tow in minutes** — dispatched سطحة with live tracking, verified driver identity, and the fee (or its absence) shown before the customer commits.
- **Transparent estimate** — itemized within 3 working hours; every part offered as أصلي / تجاري / مستعمل with per-source warranty, anchored against the dealership price. The customer composes their own repair and watches the total move.
- **Repair with proof** — photo evidence at pickup, intake, every workshop stage, and QC; approval, deposit, and payment from the phone; 6-month workmanship warranty.
- **A real back office** — cases, dispatch, price book, workshop board, inventory, insurance pipeline, and finance in one console, with the conversion rate on the owner's home screen.

### The free-tow flywheel

```
Accident → free tow (our cost ≈ 80 SAR) → car is physically at OUR workshop
   → transparent estimate beats the market → conversion (target ≥ 55%)
      → repair margin funds the next free tow → rating + referral
         → "Salamtak" is the first word after the next crash
```

The tow is customer acquisition with a ~100% qualified-lead rate: everyone we tow has a broken car. Physical possession of the vehicle plus a fair, comparable estimate is a conversion machine no ad budget can imitate.

## Unit economics (illustrative — every number is configurable in settings)

| Quantity | Value | Note |
|---|---|---|
| Cost per tow job | ≈ 80 SAR | Fuel + driver commission, in-city |
| Tow fee when declined | 150 SAR | Disclosed upfront; declined path nets ≈ +70 |
| Average repair ticket | ≈ 3,800 SAR | Band to watch: 3,000–5,000 |
| Gross margin on repairs | ≈ 35% | ≈ 1,320 SAR gross profit per converted case |
| **Blended value of one tow @ 60% conversion** | **≈ 770 SAR** | 0.6 × (1,320 − 80) + 0.4 × 70 |

Sensitivity: at 40% conversion the blended value drops to ≈ 520 SAR; at 70% it reaches ≈ 890. This is why **conversion is the KPI the dashboard leads with**, sliced per truck, per estimator, per week — and why decline reasons are captured as structured data.

## Competitive landscape

| Alternative | What they offer | Where they lose |
|---|---|---|
| **Morni** and tow marketplaces | App-dispatched towing from independent drivers | The journey ends at drop-off — no estimate, no repair, no accountability for what happens next |
| Independent sathas | Fast if one happens to pass | Haggled pricing, zero documentation of car condition, no follow-through |
| Dealership (الوكالة) | OEM parts, brand trust | 2–4× the price, weeks of waiting, no towing story |
| Insurance-appointed workshops | Paid by the insurer | Customer has no choice, slow claim cycles, incentive to cheapen the repair |
| **Salamtak** | End-to-end: free tow → comparison estimate → repair with photo proof → warranty | Trust must be earned at scale — which is exactly what the product manufactures |

**Moat, in order of durability:** (1) the price book — structured cost/price/availability data across sources that compounds with every estimate; (2) the brand position at the panic moment; (3) the integrated case record that makes service quality repeatable; (4) per-insurer cycle data powering settlement advice nobody else can give.

## Go-to-market sketch (Riyadh)

- **Be findable at the roadside:** Google Business dominance for "سطحة الرياض" and accident-adjacent searches; the hotline number on everything; QR windshield stickers handed out at oil changes, car washes, and fuel stations.
- **Zero-install transacting:** every step works as a WhatsApp/SMS magic link, so the stressed customer never hits an install wall. The app install is *earned* during the repair (progress tracking), not demanded at the crash.
- **Transparency as content:** TikTok/Snap before-and-after repairs, real estimates on camera, "what the dealership quoted vs what it took" — the estimate-comparison screen is inherently shareable.
- **Referral credit:** 50 SAR both ways; the delivery/rating screen plants it at the moment of maximum goodwill.
- **Word of mouth by design:** the family tracking-share link shows the product to 2–3 relatives per accident — each one a future first-caller.
- Note on solicitation: accident-scene chasing is illegal and brand-toxic — growth relies on brand recall, referral, and search, never ambulance-chasing.

## Risks & mitigations

| Risk | Mitigation |
|---|---|
| Conversion below the model's floor | Decline reasons captured; price-match plays; win-back campaigns; estimate quality reviews per estimator |
| "App at the accident moment" adoption gap | Magic links + hotline + phone-in dispatch make the app optional at the moment of stress |
| Trust cold-start (unknown brand) | Verified drivers, upfront prices, photo evidence, public ratings, warranty — trust features are the product |
| Regulatory (TGA tow licensing, ZATCA, PDPL) | Compliance flags tracked in [06](06-data-and-architecture.md); legal review before launch |
| Insurer friction (no APIs, slow cycles) | v1 tracks everything in-system regardless; settlement advisor routes around the slowest insurers |
| Single-workshop capacity cap | Workshop board exposes capacity; Phase 3 adds partner workshops on the same rails |
| Key-person dependency (the owner's pricing instinct) | The price book turns instinct into data the whole team can use |
