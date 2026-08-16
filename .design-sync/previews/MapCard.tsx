import { MapCard } from '@salamtak/ui';

export const LiveTracking = () => (
  <div style={{ width: 300 }}>
    <MapCard eta={<>الوصول خلال <em>12 دقيقة</em></>} showRoute showTruck />
  </div>
);
export const LocationPin = () => (
  <div style={{ width: 300 }}>
    <MapCard eta="موقعك: طريق الملك فهد" height={110} />
  </div>
);
