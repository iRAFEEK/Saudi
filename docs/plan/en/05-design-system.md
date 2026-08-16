# 05 — Design System — سلامتك

The blueprint artifact demonstrates this system on every screen; this doc states the rules so the build reproduces it.

## Brand direction: Saudi highway at night

The product lives on the road shoulder at 9pm: deep asphalt, retroreflective signage, one hazard-orange point of urgency. Calm, high-contrast, unmistakably Saudi — never clinical, never toy-like.

## Principles

1. **Calm in the crash.** One decision per screen, giant targets, no walls of red text. The SOS screen is the only loud element in the product — by design, it renders night-dark in both themes.
2. **One thumb, three taps.** Tow request, approval, and payment each complete one-handed with ≤ 3 taps per screen, usable standing on a road shoulder in sunlight.
3. **Radical price transparency.** Numbers appear *before* commitments; comparisons are the interface (not a footnote); the dealership anchor makes fairness visible instead of claimed.
4. **Photo evidence everywhere.** Pickup, intake, stages, QC — the camera is the trust engine and the dispute killer. A consent flag gates any marketing reuse.
5. **Arabic-first, RTL-first.** Designed in Arabic and mirrored properly; English is a settings toggle, never the default.

## Color tokens

Light = warm sand daylight; dark = night asphalt. Components reference tokens only — no raw hex in component styles.

| Token | Light | Dark | Role |
|---|---|---|---|
| `paper` | `#F5F2EA` | `#0F1613` | Page ground |
| `card` | `#FFFFFF` | `#17211D` | Surfaces |
| `card-2` | `#FBF9F4` | `#1C2722` | Raised/inset surfaces |
| `ink` | `#1A2622` | `#E9EDE6` | Primary text |
| `ink-2` | `#55635C` | `#A6B2A9` | Secondary text |
| `muted` | `#8A948E` | `#79857D` | Tertiary/labels |
| `line` | `#E4E0D3` | `#28332D` | Borders |
| `brand` | `#0E5A46` | `#45B893` | Signage green — primary actions, links, selection |
| `brand-soft` | `#E1EEE6` | `#16332A` | Brand tints |
| `sos` | `#C7431F` | `#F0693E` | Safety orange — SOS/emergency only, never decoration |
| `amber` | `#A06A0E` | `#DFA649` | Hazard amber — warnings, pending, aging |
| `good / bad` | `#12703C` / `#B23227` | `#4FBE7E` / `#E2705F` | Semantic status (always icon + label, never color alone) |
| `chart-1/2/3` | `#0E8158` / `#3E71B8` / `#C9861F` | `#39AB82` / `#5589D8` / `#BC8226` | Categorical chart trio — **CVD-validated on both surfaces** (fixed order, never cycled) |

Fixed-night tokens (`night-*`, from the dark column) paint the two deliberately always-dark elements: the marketing hero and the SOS home screen.

Rules: dark mode is designed, not inverted — both columns above are chosen against their surface. Every color is defined at `:root` scope with dark overrides under both the `prefers-color-scheme` media query (guarded against an explicit light choice) and the `[data-theme="dark"]` stamp.

## Typography

**IBM Plex Sans Arabic** everywhere — one family carries Arabic and Latin, so mixed strings (case IDs inside Arabic sentences) never fracture.

| Role | Size / weight | Notes |
|---|---|---|
| Display | 30–40 / 600 | Screen titles, hero |
| Title | 19 / 600 | Cards, section heads |
| Body | 15.5 / 400 · line-height 1.65 | Default |
| UI label | 13–14 / 500–600 | Buttons, chips, rows |
| Caption | 12–13 / 400 | Secondary info |
| Money | any / 600 + `tabular-nums` | Totals right-aligned in LTR digit runs |

Number & script rules:
- **Western digits (1 2 3)** throughout, matching Saudi fintech convention (mada, STC Pay).
- Currency renders as **ر.س** after the amount in Arabic UI, `SAR` in English/docs. (The new Riyal symbol can replace ر.س once font coverage is universal.)
- Mixed-direction strings (plates, case IDs, phone numbers) are wrapped in explicit `dir="ltr"` spans inside RTL text — bidi is handled in markup, never left to chance.
- Dates: Gregorian with Arabic month names («الخميس 21 أغسطس»); Hijri available as a secondary line where formality needs it.

## RTL rules

- The app root is `dir="rtl"`; all layout uses logical properties (`inline-start/end`) so the English toggle mirrors for free.
- Progress and steppers flow right → left; timelines rail on the right; back arrows point right (→).
- Maps, phone numbers, plates, OTP boxes, and charts' numeric axes remain LTR islands.
- Icons with direction (arrows, send) flip; neutral icons don't.

## Core components (built once, reused everywhere)

Buttons (primary / SOS / ghost / small) · status chips (good/warn/bad/info/neutral — always with icon or text) · list row (icon + text + trailing) · segmented control · input field · stepper bar · timeline item (done/now/pending) · photo strip + gallery · map card with ETA pill · estimate line with source options · total bar with anchor/savings · stat tile · kanban column + card · data table (RTL) · sidebar nav · avatar · notification toast.

Interaction states: every control has visible hover, pressed, focus (2px brand outline), and disabled states; touch targets ≥ 44px; skeleton loading for lists; optimistic UI on kanban moves with rollback toast.

Motion: functional only (state changes, sheet transitions ≤ 200ms); respects `prefers-reduced-motion`; no ambient animation — this is an emergency product.

## Voice & tone (Arabic)

Saudi-colloquial, warm, direct. The app talks like a competent friend at the scene, not a call center.

| Do | Don't |
|---|---|
| «سلامتك، ما تشوف شر» | «عزيزي العميل، نأسف لسماع ذلك» |
| «السطحة في الطريق إليك — 12 دقيقة» | «تم إسناد طلبكم إلى مزود الخدمة» |
| «بدون مفاجآت — أي رسوم تشوفها قبل الطلب» | «قد يتم تطبيق رسوم إضافية» |
| «وش صار على سيارتك؟» (win-back) | «استبيان رضا العملاء» |

Errors state what happened and the fix («ما قدرنا نرسل الرمز — جرب واتساب بدلًا من الرسائل»), never apologize vaguely. Numbers are never rounded away from the customer's favor.
