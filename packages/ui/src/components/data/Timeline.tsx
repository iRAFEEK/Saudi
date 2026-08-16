import type { ReactNode } from 'react';
import { cx } from '../../cx';

export interface TimelineItemProps {
  /** `done` = brand check, `now` = amber pulse (the active stage), `pending` = muted. */
  state?: 'done' | 'now' | 'pending';
  /** Dot glyph; defaults to ✓ when done. */
  icon?: ReactNode;
  title: ReactNode;
  /** Small muted line under the title (time, note). */
  meta?: ReactNode;
  /** Extra content under the meta — e.g. a <PhotoStrip/>. */
  children?: ReactNode;
}

/**
 * One event on a case/repair timeline.
 *
 * @example
 * <TimelineItem state="done" title="السطحة وصلت وتم التحميل" meta="21:58 · 6 صور للحالة" />
 * @example
 * <TimelineItem state="now" icon="🎨" title="البوية — جاري الآن" meta="فرن البوية">
 *   <PhotoStrip count={2} />
 * </TimelineItem>
 */
export function TimelineItem({ state = 'pending', icon, title, meta, children }: TimelineItemProps) {
  return (
    <div className={cx('slm-tl-item', state === 'done' && 'slm-tl-item--done', state === 'now' && 'slm-tl-item--now')}>
      <span className="slm-tl-dot">{icon ?? (state === 'done' ? '✓' : '·')}</span>
      <div className="slm-tl-body">
        <span className="slm-tl-title">{title}</span>
        {meta != null && <span className="slm-tl-meta">{meta}</span>}
        {children}
      </div>
    </div>
  );
}

export interface TimelineProps {
  /** A sequence of <TimelineItem/> elements. */
  children: ReactNode;
  className?: string;
}

/**
 * Vertical timeline — the case thread, repair stages, tow status ladder.
 *
 * @example
 * <Timeline>
 *   <TimelineItem state="done" title="تم إسناد السطحة" meta="21:39" />
 *   <TimelineItem state="now" icon="🛻" title="في الطريق إليك" meta="يوصلك تنبيه عند الاقتراب" />
 *   <TimelineItem icon="🏁" title="الوصول والتحميل" />
 * </Timeline>
 */
export function Timeline({ children, className }: TimelineProps) {
  return <div className={cx('slm-timeline', className)}>{children}</div>;
}
