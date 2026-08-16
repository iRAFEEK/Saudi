import { KanbanColumn, KanbanCard } from '@salamtak/ui';

export const InColumn = () => (
  <div style={{ width: 220 }}>
    <KanbanColumn title="سمكرة" count={1}>
      <KanbanCard title="توسان 2022" code="SLM-2484" note="بدأت اليوم · ناصر" />
    </KanbanColumn>
  </div>
);
export const Blocked = () => (
  <div style={{ width: 220 }}>
    <KanbanColumn title="بانتظار القطع" count={1}>
      <KanbanCard title="سنترا 2020" code="SLM-2476" note="حساس + صدّام · متأخر يوم ⚠" />
    </KanbanColumn>
  </div>
);
