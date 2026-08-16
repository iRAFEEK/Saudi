import { cx } from '../../cx';

export interface PhotoStripProps {
  /** Number of photo tiles to render. */
  count: number;
  /** Content per tile — defaults to a camera glyph. Pass e.g. ['✓','✓','📷'] for capture progress. */
  marks?: string[];
  /** Taller tiles for capture grids (driver documentation screens). */
  tall?: boolean;
  className?: string;
}

/**
 * Row of photo placeholder tiles — evidence strips on timelines, capture grids
 * in driver documentation. Real implementations swap tiles for thumbnails.
 *
 * @example
 * <PhotoStrip count={3} />
 * @example
 * <PhotoStrip count={6} tall marks={['✓', '✓', '✓', '✓', '📷', '6']} />
 */
export function PhotoStrip({ count, marks, tall, className }: PhotoStripProps) {
  return (
    <div className={cx('slm-photostrip', className)}>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className={cx('slm-photo', tall && 'slm-photo--tall')}>
          {marks?.[i] ?? '📷'}
        </div>
      ))}
    </div>
  );
}
