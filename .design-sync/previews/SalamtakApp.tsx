import { SalamtakApp, Button, Chip } from '@salamtak/ui';

export const RootWrapper = () => (
  <SalamtakApp style={{ padding: 16, borderRadius: 12, width: 300 }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <b>سلامتك</b>
        <Chip tone="good">متصل</Chip>
      </div>
      <Button variant="sos">عندي حادث 🚨</Button>
    </div>
  </SalamtakApp>
);
