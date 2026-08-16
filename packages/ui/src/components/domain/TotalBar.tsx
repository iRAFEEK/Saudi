import type { ReactNode } from 'react';
import { cx } from '../../cx';

export interface TotalBarProps {
  /** Total label, e.g. «الإجمالي شامل الضريبة 15%». */
  label: ReactNode;
  /** Total amount in SAR. */
  total: number;
  /** Dealership reference price in SAR — renders struck through above the bar. */
  anchor?: number;
  /** Label for the anchor row, e.g. «سعر الوكالة (أصلي)». */
  anchorLabel?: ReactNode;
  /** Savings amount in SAR — renders in success green beside the anchor. */
  savings?: number;
  className?: string;
}

const fmt = (n: number) => n.toLocaleString('en-US');

/**
 * The estimate's closing bar: dealership anchor + savings, then the VAT-inclusive total.
 *
 * @example
 * <TotalBar
 *   label="الإجمالي شامل الضريبة 15%"
 *   total={3416}
 *   anchorLabel="سعر الوكالة (أصلي)"
 *   anchor={12400}
 *   savings={10844}
 * />
 */
export function TotalBar({ label, total, anchor, anchorLabel, savings, className }: TotalBarProps) {
  return (
    <div className={className}>
      {(anchor != null || savings != null) && (
        <div className="slm-anchor">
          {anchor != null && (
            <span>
              {anchorLabel}: <span className="slm-strike slm-num">{fmt(anchor)} ر.س</span>
            </span>
          )}
          {savings != null && (
            <span className="slm-save">
              وفّرت <span className="slm-num">{fmt(savings)}</span> ر.س
            </span>
          )}
        </div>
      )}
      <div className="slm-totalbar">
        <span>{label}</span>
        <span className={cx('slm-totalbar-value', 'slm-num')}>{fmt(total)} ر.س</span>
      </div>
    </div>
  );
}
