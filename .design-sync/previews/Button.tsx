import { Button } from '@salamtak/ui';

export const Primary = () => <div style={{ width: 300 }}><Button>اطلب السطحة</Button></div>;
export const SOS = () => <div style={{ width: 300 }}><Button variant="sos">عندي حادث 🚨</Button></div>;
export const Ghost = () => <div style={{ width: 300 }}><Button variant="ghost">📄 أرسل النسخة PDF</Button></div>;
export const SmallRow = () => (
  <div style={{ display: 'flex', gap: 8 }}>
    <Button size="sm">إسناد لسعود — 12 دقيقة</Button>
    <Button size="sm" variant="ghost">📞 اتصال</Button>
  </div>
);
export const Disabled = () => <div style={{ width: 300 }}><Button disabled>حمّلت السيارة — انطلق للورشة</Button></div>;
