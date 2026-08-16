import { TotalBar } from '@salamtak/ui';

export const WithDealerAnchor = () => (
  <div style={{ width: 300 }}>
    <TotalBar
      label="الإجمالي شامل الضريبة 15%"
      total={3416}
      anchorLabel="سعر الوكالة (أصلي)"
      anchor={12400}
      savings={10844}
    />
  </div>
);
export const Plain = () => (
  <div style={{ width: 300 }}>
    <TotalBar label="العربون الآن (50%)" total={1708} />
  </div>
);
