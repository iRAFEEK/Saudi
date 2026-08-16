import { Timeline, TimelineItem } from '@salamtak/ui';

export const States = () => (
  <div style={{ width: 300 }}>
    <Timeline>
      <TimelineItem state="done" title="مرحلة مكتملة" meta="بشارة خضراء وعلامة صح" />
      <TimelineItem state="now" icon="🎨" title="المرحلة النشطة" meta="نبضة كهرمانية" />
      <TimelineItem title="مرحلة قادمة" meta="محايدة حتى يحين وقتها" />
    </Timeline>
  </div>
);
