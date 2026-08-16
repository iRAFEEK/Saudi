# سلامتك Salamtak — build conventions

Salamtak is an **Arabic-first, RTL-first** design system for a Riyadh accident-to-repair product. Every design you build with it is an Arabic UI unless the user says otherwise.

## 1. Wrap everything in `SalamtakApp`

Every screen sits inside exactly one `SalamtakApp`. It applies the IBM Plex Sans Arabic type stack, ink/paper colors, and `dir="rtl"`. **Without it, text renders in the browser default font, left-to-right, on a transparent ground** — the single most common way to get an off-brand result.

```jsx
<SalamtakApp>
  {/* your screen */}
</SalamtakApp>
```

## 2. Styling idiom: component props + tokens, no utility classes

This system has **no utility-class vocabulary** — components style themselves via props (`variant`, `tone`, `size`, `state`). For your own layout glue (stacks, grids, spacing), write inline styles or small CSS **using the tokens**, never hard-coded colors:

Grounds & ink: `--slm-paper` `--slm-card` `--slm-card-2` `--slm-ink` `--slm-ink-2` `--slm-muted` `--slm-line` `--slm-line-soft`
Brand & semantics: `--slm-brand` `--slm-brand-soft` `--slm-brand-ink` `--slm-sos` `--slm-sos-soft` `--slm-amber` `--slm-amber-soft` `--slm-good` `--slm-good-soft` `--slm-bad` `--slm-bad-soft` `--slm-info` `--slm-info-soft`
Charts (CVD-validated, fixed order): `--slm-chart-1` `--slm-chart-2` `--slm-chart-3` · Elevation: `--slm-shadow` `--slm-shadow-lg`
Fixed-night surfaces (SOS/hero stays dark in every theme): `--slm-night-bg` `--slm-night-card` `--slm-night-ink` `--slm-night-ink2` `--slm-night-line` `--slm-night-brand` `--slm-night-sos`

Light + dark are token-swapped automatically (`prefers-color-scheme` + `[data-theme="dark"]`); use tokens and both themes work for free. One helper class exists: `slm-num` (tabular numerals — put it on any aligned money/number).

## 3. RTL & content rules

- Direction comes from `SalamtakApp`; progress flows right→left automatically.
- LTR islands: wrap plates, phone numbers, and case IDs (`SLM-2481`) in `dir="ltr"`.
- Western digits (1, 2, 3); currency renders **after** the amount as `ر.س` (e.g. `3,416 ر.س`); VAT-inclusive totals are the headline number.
- The `sos` Button variant is the loudest thing in the system — **at most one per screen**, only for the emergency moment.
- Voice: warm Saudi-colloquial («سلامتك، ما تشوف شر»), never call-center formal («عزيزي العميل»).

## 4. Where the truth lives

Read `styles.css` (imports the full token + component CSS) before inventing any style; each component's `.prompt.md` carries its API and a working example. Screens are composed from: `Button` `SegmentedControl` `Chip` `Card` `StatTile` `Avatar` `PhotoStrip` `Field` `Stepper` `ListRow` `DataTable` `Timeline` `TimelineItem` `KanbanColumn` `KanbanCard` `EstimateLine` `TotalBar` `MapCard` inside `SalamtakApp`.

## 5. Idiomatic example (verified render)

```jsx
<SalamtakApp style={{ padding: 16, maxWidth: 340 }}>
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
    <Card>
      <EstimateLine
        title="صدّام أمامي"
        note="شامل الفك والتركيب"
        options={[
          { source: 'أصلي', price: 1850 },
          { source: 'تجاري', price: 700 },
          { source: 'مستعمل', price: 350 },
        ]}
        selectedIndex={1}
      />
      <EstimateLine title="سمكرة وبوية — 3 قطع" note="ضمان 6 أشهر على البوية" price={1200} />
    </Card>
    <TotalBar label="الإجمالي شامل الضريبة 15%" total={3416}
      anchorLabel="سعر الوكالة (أصلي)" anchor={12400} savings={10844} />
    <Button>اعتمد العرض وادفع العربون</Button>
  </div>
</SalamtakApp>
```
