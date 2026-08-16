import { PhotoStrip } from '@salamtak/ui';

export const Evidence = () => <div style={{ width: 280 }}><PhotoStrip count={3} /></div>;
export const CaptureProgress = () => (
  <div style={{ width: 280 }}>
    <PhotoStrip count={6} tall marks={['✓', '✓', '✓', '✓', '📷', '6']} />
  </div>
);
