import { ListRow, Chip, Avatar, Button } from '@salamtak/ui';

export const DocumentRow = () => (
  <div style={{ width: 320 }}>
    <ListRow icon="📄" iconTone="plain" title="تقرير نجم" subtitle="NJM-88213004" trailing={<Chip tone="good">مرفوع ✓</Chip>} />
  </div>
);
export const DriverCard = () => (
  <div style={{ width: 320 }}>
    <ListRow
      leading={<Avatar name="سعود" size="lg" />}
      title="سعود العتيبي"
      subtitle="سطحة هينو · لوحة 7421 TND · ⭐ 4.9"
      trailing={<Button variant="ghost" size="sm">📞</Button>}
    />
  </div>
);
export const ChecklistSteps = () => (
  <div style={{ width: 320 }}>
    <ListRow icon="1" iconTone="sos" title="فيه إصابات؟" subtitle="اتصل فورًا بالهلال الأحمر" trailing={<Button size="sm" variant="ghost">997</Button>} />
    <ListRow icon="2" iconTone="amber" title="وقّف بمكان آمن" subtitle="شغّل الفلاشر وحط المثلث" trailing={<Chip tone="good">✓ تم</Chip>} />
    <ListRow icon="3" title="بلّغ نجم" subtitle="لازم تقرير للتأمين" trailing={<Chip>920 000 560</Chip>} />
  </div>
);
