import type { ReactNode } from 'react';
import { cx } from '../../cx';

export interface KanbanCardProps {
  /** Card headline, e.g. the car («توسان 2022»). */
  title: ReactNode;
  /** Monospace reference under the title, e.g. the case id. */
  code?: string;
  /** Status note line. */
  note?: ReactNode;
  /** Brand-outline highlight (e.g. the card in QC). */
  hot?: boolean;
  className?: string;
}

/**
 * A car on the workshop board.
 *
 * @example
 * <KanbanCard title="كامري 2019" code="SLM-2479" note="فرن · مطابقة لون ✓" />
 */
export function KanbanCard({ title, code, note, hot, className }: KanbanCardProps) {
  return (
    <div className={cx('slm-kanban-card', hot && 'slm-kanban-card--hot', className)}>
      <span className="slm-kanban-card-title">{title}</span>
      {code != null && (
        <span className="slm-kanban-card-note" dir="ltr" style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 11 }}>
          {code}
        </span>
      )}
      {note != null && (
        <>
          <br />
          <span className="slm-kanban-card-note">{note}</span>
        </>
      )}
    </div>
  );
}

export interface KanbanColumnProps {
  /** Stage name, e.g. «بوية». */
  title: ReactNode;
  /** Card count shown beside the title. */
  count?: number;
  /** A stack of <KanbanCard/> elements. */
  children?: ReactNode;
  className?: string;
}

/**
 * One stage column of the workshop board (parts → body → paint → assembly → QC).
 *
 * @example
 * <KanbanColumn title="بوية" count={2}>
 *   <KanbanCard title="كامري 2019" code="SLM-2479" note="فرن · مطابقة لون ✓" />
 *   <KanbanCard title="أكورد 2021" code="SLM-2466" note="طبقة أخيرة" />
 * </KanbanColumn>
 */
export function KanbanColumn({ title, count, children, className }: KanbanColumnProps) {
  return (
    <div className={cx('slm-kanban-col', className)}>
      <div className="slm-kanban-head">
        <span>{title}</span>
        {count != null && <span className="slm-kanban-count slm-num">{count}</span>}
      </div>
      {children}
    </div>
  );
}
