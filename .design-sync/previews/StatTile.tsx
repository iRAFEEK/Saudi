import { StatTile } from '@salamtak/ui';

export const OwnerMorning = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, width: 380 }}>
    <StatTile label="سحوبات اليوم" value="7" delta="+2 عن أمس" deltaTone="up" />
    <StatTile label="سيارات في الورشة" value="12" delta="طاقة الورشة 16" />
    <StatTile label="عروض بانتظار الرد" value="5" delta="منها 2 متأخرة ⚠" deltaTone="down" />
    <StatTile label="تحصيل اليوم" value="9,850 ر.س" delta="كاش 3,200 · مدى 6,650" deltaTone="up" />
  </div>
);
export const Single = () => <div style={{ width: 200 }}><StatTile label="التحويل سحب ← إصلاح" value="57%" delta="فوق الهدف" deltaTone="up" /></div>;
