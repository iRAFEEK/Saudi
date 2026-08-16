import { SegmentedControl } from '@salamtak/ui';

export const PaymentMethods = () => (
  <div style={{ width: 300 }}>
    <SegmentedControl
      options={[
        { value: 'mada', label: 'مدى' },
        { value: 'applepay', label: ' Pay' },
        { value: 'transfer', label: 'تحويل' },
        { value: 'cash', label: 'كاش' },
      ]}
      value="mada"
    />
  </div>
);
export const TwoChoices = () => (
  <div style={{ width: 300 }}>
    <SegmentedControl
      options={[
        { value: 'pickup', label: 'أستلمها من الورشة' },
        { value: 'delivery', label: 'وصّلوها لي' },
      ]}
      value="delivery"
    />
  </div>
);
