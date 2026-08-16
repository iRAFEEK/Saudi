import { KanbanColumn, KanbanCard } from '@salamtak/ui';

export const PaintStage = () => (
  <div style={{ width: 220 }}>
    <KanbanColumn title="بوية" count={2}>
      <KanbanCard title="كامري 2019" code="SLM-2479" note="فرن · مطابقة لون ✓" />
      <KanbanCard title="أكورد 2021" code="SLM-2466" note="طبقة أخيرة" />
    </KanbanColumn>
  </div>
);
export const QCStage = () => (
  <div style={{ width: 220 }}>
    <KanbanColumn title="فحص الجودة" count={1}>
      <KanbanCard hot title="مازدا 6" code="SLM-2460" note="قائمة الفحص 8/10 + صور" />
    </KanbanColumn>
  </div>
);
