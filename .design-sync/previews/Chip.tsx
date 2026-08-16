import { Chip } from '@salamtak/ui';

export const AllTones = () => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
    <Chip tone="good">مرفوع ✓</Chip>
    <Chip tone="warn">بانتظار الرد</Chip>
    <Chip tone="bad">بدون رد 26 س ⚠</Chip>
    <Chip tone="info">في الورشة</Chip>
    <Chip>14 صورة</Chip>
  </div>
);
export const ClaimPipeline = () => (
  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
    <Chip tone="good">التقرير ✓</Chip>
    <Chip tone="warn">التقدير — جاري</Chip>
    <Chip>الموافقة</Chip>
    <Chip>التسوية</Chip>
  </div>
);
