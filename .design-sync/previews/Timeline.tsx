import { Timeline, TimelineItem, PhotoStrip } from '@salamtak/ui';

export const TowStatus = () => (
  <div style={{ width: 300 }}>
    <Timeline>
      <TimelineItem state="done" title="تم إسناد السطحة" meta="21:39" />
      <TimelineItem state="now" icon="🛻" title="في الطريق إليك" meta="يوصلك تنبيه عند الاقتراب" />
      <TimelineItem icon="🏁" title="الوصول والتحميل" meta="السائق يصوّر السيارة قبل التحميل" />
    </Timeline>
  </div>
);
export const RepairProgress = () => (
  <div style={{ width: 300 }}>
    <Timeline>
      <TimelineItem state="done" title="قطع الغيار وصلت" meta="الأحد · فحصناها ووثقناها">
        <PhotoStrip count={3} />
      </TimelineItem>
      <TimelineItem state="done" title="السمكرة اكتملت" meta="الثلاثاء" />
      <TimelineItem state="now" icon="🎨" title="البوية — جاري الآن" meta="فرن البوية · مطابقة اللون بالكود" />
      <TimelineItem icon="🔍" title="فحص الجودة والتسليم" />
    </Timeline>
  </div>
);
