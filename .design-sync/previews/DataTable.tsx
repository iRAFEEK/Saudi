import { DataTable, Chip, Avatar } from '@salamtak/ui';

export const CasePipeline = () => (
  <DataTable
    columns={[
      { key: 'id', header: 'القضية' },
      { key: 'who', header: 'العميل والسيارة' },
      { key: 'status', header: 'الحالة' },
      { key: 'value', header: 'القيمة' },
    ]}
    rows={[
      {
        id: <span dir="ltr" style={{ fontFamily: 'ui-monospace, Menlo, monospace' }}>SLM-2484</span>,
        who: <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Avatar name="نورة" /> نورة · توسان 2022</span>,
        status: <Chip tone="info">الفحص جاري</Chip>,
        value: '—',
      },
      {
        id: <span dir="ltr" style={{ fontFamily: 'ui-monospace, Menlo, monospace' }}>SLM-2481</span>,
        who: <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Avatar name="عبدالعزيز" /> عبدالعزيز · كامري 2019</span>,
        status: <Chip tone="warn">بانتظار الرد</Chip>,
        value: <span className="slm-num">3,416</span>,
      },
      {
        id: <span dir="ltr" style={{ fontFamily: 'ui-monospace, Menlo, monospace' }}>SLM-2472</span>,
        who: <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Avatar name="خالد" /> خالد · باترول 2018</span>,
        status: <Chip tone="bad">بدون رد 26 س ⚠</Chip>,
        value: <span className="slm-num">11,300</span>,
      },
    ]}
  />
);
