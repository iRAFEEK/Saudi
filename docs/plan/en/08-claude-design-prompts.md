# 08 — Claude Design Prompt Pack

Once the **Salamtak سلامتك DS** project is synced to claude.ai/design (see `.design-sync/NOTES.md` for the authorization step), the design agent there builds screens **from our real components**. Paste one prompt per screen into a design project that uses the DS, then iterate conversationally. Every prompt below names the actual synced components; the agent also reads the conventions header (SalamtakApp wrapper, `--slm-*` tokens, RTL rules) automatically.

General preamble worth prepending to your first message in any new design:
> Arabic-first RTL product. Wrap everything in `SalamtakApp`. Phone screens are ~390px wide. Use only Salamtak components and `--slm-*` tokens. Western digits, currency `ر.س` after the amount.

## Customer app

| # | Screen | Prompt |
|---|---|---|
| C1 | Onboarding | Build a phone OTP sign-in screen: the سلامتك wordmark centered, a `Field` (ltr) for +966 phone entry, four OTP `Field` boxes in a row, a primary `Button` («تأكيد»), and below it an escape link «عندك حادث الحين؟ اطلب سطحة بدون تسجيل». |
| C2 | SOS home | Build the SOS home screen on the fixed-night tokens (`--slm-night-*` background): greeting appbar, a huge `Button variant="sos"` («عندي حادث 🚨» with subline «سطحة فورية + تقرير إصلاح كامل»), a row of three quick-action `Card`s (سطحة بدون حادث / تتبّع سيارتك / عروضي), an active-case `Card variant="night"` with a `Chip tone="warn"` 70%, and a pinned promise card «السطحة مجانية إذا أصلحت عندنا — وإلا 150 ر.س». |
| C3 | Accident assistant | Build the accident checklist: heading «سلامتك أهم شي. خلنا نمشي خطوة خطوة», a `Card` of four `ListRow`s — injuries (iconTone sos, trailing 997 sos small `Button`), safety (iconTone amber, `Chip tone="good"` ✓ تم), Najm report (trailing ghost `Button` 920 000 560), photos (iconTone plain, `Chip` 📷 4) — then a primary `Button` «اطلب السطحة الآن». |
| C4 | Tow wizard | Build step 4 of the tow wizard: `Stepper steps={4} current={3}`, a `MapCard` with location pin («موقعك: طريق الملك فهد»), a `Field` with the car summary, then a destination choice: selected option «ورشة سلامتك — سطحة مجانية إذا أصلحت عندنا» with `Chip tone="good"` 0 ر.س vs «مكان آخر» with 150 ر.س, and the confirm `Button` «اطلب السطحة». |
| C5 | Live tracking | Build the tracking screen: `MapCard showRoute showTruck` with ETA pill «الوصول خلال 12 دقيقة», a driver `Card` using `ListRow` with `Avatar size="lg"` (سعود العتيبي · سطحة هينو · لوحة 7421 TND · ⭐ 4.9) and two small buttons (📞 اتصال / شارك الرحلة مع أهلك), then a `Timeline` with done «تم إسناد السطحة», now «في الطريق إليك», pending «الوصول والتحميل». |
| C6 | Case timeline | Build the case screen for SLM-2481 (`Chip tone="info"` في الورشة): a `Card` with a four-item `Timeline` (tow loaded ✓ with 6 photos, arrived ✓, inspection now, estimate pending), a documents `Card` with `ListRow`s for the Najm report (`Chip tone="good"` مرفوع ✓) and 14 photos, and a ghost `Button` «💬 تواصل واتساب». |
| C7 | Estimate | Build the estimate screen: header «عرض الإصلاح v1» with `Chip tone="warn"` بانتظار اعتمادك, a `Card` of `EstimateLine`s — three with أصلي/تجاري/مستعمل options (صدّام أمامي 1850/700/350, شمعة يمين 950/420/250, رفرف 780/390/200) and two fixed (سمكرة وبوية 1200, أجور فحص 450) — then `TotalBar` with anchor 12,400, savings, and total 3,416 ر.س, and buttons «اعتمد العرض وادفع العربون» + ghost «📄 أرسل النسخة PDF». |
| C8 | Approve & pay | Build the payment screen: a summary `Card` of `ListRow`s (total 3,416 / deposit 1,708 in brand color / duration 5 أيام / warranty 6 أشهر), a `SegmentedControl` for مدى/ Pay/تحويل/كاش, a masked card `Field`, and the primary `Button` «اعتمد وادفع 1,708 ر.س» with the OTP footnote. |
| C9 | Insurance helper | Build the insurance screen (`Chip tone="info"` شامل): a policy `Card` (التعاونية — شامل + Najm `ListRow`), then a brand-bordered `Card` «خذ التعويض النقدي وأصلح عندنا» with `Chip tone="good"` الأفضل لك and three rows (التعويض المتوقع 5,800 / الإصلاح عندنا 3,416 / يبقى في جيبك 2,384 in green), an alternative `Card` with the claim pipeline `Chip`s (تقرير ✓ / تقدير جاري / موافقة / تسوية), and a confirm `Button`. |
| C10 | Repair progress | Build the repair screen: a readiness `Card` (70%, الخميس 21 أغسطس), and a `Card` with a five-stage `Timeline` — parts done with a 3-tile `PhotoStrip`, bodywork done, paint now (🎨), assembly and QC pending. |
| C11 | Delivery & rating | Build the delivery screen: two option rows — pickup (0 ر.س, selected) vs home delivery (50 ر.س) — an invoice `Card` with a QR placeholder and remaining 1,708 ر.س, a rating `Card` with five stars, and a referral `Card` on `--slm-brand-soft» «🎁 أهدِ صديقك سطحة — خصم 50 ر.س لك وله». |

## Ops console (desktop, RTL sidebar)

| # | View | Prompt |
|---|---|---|
| O1 | Dashboard | Build the owner dashboard: sidebar (لوحة القيادة on), four `StatTile`s (سحوبات اليوم 7 up / سيارات في الورشة 12 / عروض بانتظار الرد 5 down / تحصيل اليوم 9,850), a weekly grouped bar chart using `--slm-chart-1/2/3` with a legend, a funnel card (82→74→47, `Chip tone="good"` 57% فوق الهدف), and a «يحتاج تدخلك الآن» task list. |
| O2 | Dispatch | Build the dispatch board: a large `MapCard`-style map with two trucks and a request pin, a `--slm-sos`-bordered new-request `StatTile` with «إسناد لسعود — 12 دقيقة» `Button`, and an active-jobs `DataTable` with status `Chip`s. |
| O3 | Case list | Build the case pipeline: filter `Chip`s with counts (الكل 34 … متأخرة 3), and a `DataTable` of cases — mono id, `Avatar`+name+car, status `Chip`, next-action owner, value, age. |
| O4 | Case detail | Build case SLM-2481's detail: header with status `Chip`, tab chips, a case-log `DataTable` (timestamps → events incl. estimate opened twice), side `Card`s for customer/vehicle and money, and a dashed owner-only card (cost 2,180 · margin 36% · discount ceiling 10%). |
| O5 | Estimate builder | Build the estimate builder for SLM-2484: a price-book search `Field`, a `DataTable` with columns البند/المصدر/التكلفة/السعر/الهامش/التوفر (one row red, 5% تحت الحد), and three summary `StatTile`s (customer total incl. VAT + dealer ref / margin 38% 🔒 / duration 4 أيام). |
| O6 | Workshop board | Build the workshop kanban: five `KanbanColumn`s (بانتظار القطع 2 / سمكرة 3 / بوية 2 / تجميع 2 / فحص الجودة 1) filled with `KanbanCard`s (car + SLM code + note), the QC card `hot`. |
| O7 | Price book | Build the price book: category `Chip`s, a search `Field`, and a `DataTable` of part × source rows (صدّام أمامي كامري: أصلي 1,320/1,850, تجاري 430/700, مستعمل 200/350, dealer ref 2,600) with last-updated ages. |
| O8 | Inventory & POs | Build the purchase-orders view: a `DataTable` of POs (supplier, items, linked case, status `Chip`s incl. متأخر يوم ⚠, ETA) and a consumables alert `StatTile`. |
| O9 | Insurance pipeline | Build the claims view: a `DataTable` of claims — case, insurer, type `Chip`, four-stage pipeline `Chip`s, expected amount, next-action owner — plus a cycle-time `StatTile` (التعاونية 9 أيام · ميدغلف 12 · الدرع 17 ⚠). |
| O10 | Finance | Build the finance view: four `StatTile`s (revenue 214,600 up / margin 37% 🔒 / customer receivables / insurer receivables), an invoices `DataTable` with ZATCA status, and the daily cash-close `StatTile` (expected 3,200 = counted, فرق 0 ✓). |

## Driver mode

| # | Screen | Prompt |
|---|---|---|
| D1 | Jobs queue | Build the driver jobs screen: header «مهامي — سعود» with `Chip tone="good"` متاح, a `--slm-sos`-bordered offer `Card` (accident, 14 كم, accept `Button`), a today `Card` of completed `ListRow`s, and a commission footer `Card` (3 مهام · 120 ر.س). |
| D2 | Job & navigation | Build the active-job screen: `MapCard showRoute showTruck` with «12 دقيقة · 14 كم», an info-tinted «🧭 افتح في قوقل ماب» `Button`, a `Card` of `ListRow`s (car/plate, customer with «كلمه بهدوء» note + 📞, destination), and «وصلت الموقع». |
| D3 | Pickup documentation | Build the forced-documentation screen: «وثّق قبل التحميل» with `Chip tone="warn"` إلزامي, a 3×2 grid of tall `PhotoStrip` tiles, a checklist `Card` (4/6 progress `Chip`, voice-note row), and a disabled `Button` «حمّلت السيارة» with «الزر يفتح بعد اكتمال الصور». |
| D4 | Close-out | Build the close screen: a centered `Card` «سطحة مجانية — لا تستلم مبلغ», a fallback-fees `Card`, a signature `Card` (استلمها مشعل · 22:14), and «أقفل المهمة ✓». |

Reference implementations of every one of these screens exist in the **Salamtak Live** POC artifact and the blueprint artifact — when in doubt, show the agent a screenshot from there.
