import type { ReactNode } from 'react';
import { cx } from '../../cx';

export interface StatTileProps {
  /** Small muted label above the number, e.g. «سحوبات اليوم». */
  label: ReactNode;
  /** The headline figure. Tabular numerals applied automatically. */
  value: ReactNode;
  /** Optional context line under the value, e.g. «+2 عن أمس». */
  delta?: ReactNode;
  /** Colors the delta: `up` = good/green, `down` = bad/red, `none` = neutral. */
  deltaTone?: 'up' | 'down' | 'none';
  className?: string;
}

/**
 * KPI tile for dashboards — the owner's morning numbers.
 *
 * @example
 * <StatTile label="سحوبات اليوم" value="7" delta="+2 عن أمس" deltaTone="up" />
 * @example
 * <StatTile label="عروض بانتظار الرد" value="5" delta="منها 2 متأخرة ⚠" deltaTone="down" />
 */
export function StatTile({ label, value, delta, deltaTone = 'none', className }: StatTileProps) {
  return (
    <div className={cx('slm-stat', className)}>
      <div className="slm-stat-label">{label}</div>
      <div className="slm-stat-value">{value}</div>
      {delta != null && (
        <div
          className={cx(
            'slm-stat-delta',
            deltaTone === 'up' && 'slm-stat-delta--up',
            deltaTone === 'down' && 'slm-stat-delta--down',
          )}
        >
          {delta}
        </div>
      )}
    </div>
  );
}
