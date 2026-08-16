import { Card, ListRow, Chip } from '@salamtak/ui';

export const Inset = () => (
  <Card style={{ width: 300 }}>
    <ListRow icon="📄" iconTone="plain" title="تقرير نجم" subtitle="NJM-88213004" trailing={<Chip tone="good">مرفوع ✓</Chip>} />
    <ListRow icon="📷" iconTone="plain" title="صور الحادث والاستلام" trailing="14 صورة" />
  </Card>
);
export const Raised = () => (
  <Card variant="raised" style={{ width: 300 }}>
    <b style={{ fontSize: 15 }}>السطحة مجانية إذا أصلحت عندنا</b>
    <div style={{ color: 'var(--slm-ink-2)', fontSize: 13, marginTop: 4 }}>وإلا 150 ر.س داخل الرياض — بدون مفاجآت.</div>
  </Card>
);
export const Night = () => (
  <Card variant="night" style={{ width: 300, textAlign: 'center' }}>
    <b style={{ color: 'var(--slm-night-brand)' }}>السطحة مجانية</b> إذا أصلحت عندنا
  </Card>
);
