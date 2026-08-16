import { EstimateLine } from '@salamtak/ui';

export const WithSourceOptions = () => (
  <div style={{ width: 300 }}>
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
  </div>
);
export const OemSelected = () => (
  <div style={{ width: 300 }}>
    <EstimateLine
      title="شمعة يمين"
      note="إضاءة LED مطابقة"
      options={[
        { source: 'أصلي', price: 950 },
        { source: 'تجاري', price: 420 },
        { source: 'مستعمل', price: 250, disabled: true },
      ]}
      selectedIndex={0}
    />
  </div>
);
export const FixedLine = () => (
  <div style={{ width: 300 }}>
    <EstimateLine title="سمكرة وبوية — 3 قطع" note="ضمان 6 أشهر على البوية" price={1200} />
  </div>
);
