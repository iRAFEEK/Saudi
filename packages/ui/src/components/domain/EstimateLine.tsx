import type { ReactNode } from 'react';
import { cx } from '../../cx';

export interface EstimateOption {
  /** Source label — canonical values: «أصلي» (OEM), «تجاري» (aftermarket), «مستعمل» (used). */
  source: string;
  /** Price in SAR for this source. */
  price: number;
  /** Renders the option disabled (e.g. not currently sourceable). */
  disabled?: boolean;
}

export interface EstimateLineProps {
  /** Part or work item name, e.g. «صدّام أمامي». */
  title: ReactNode;
  /** Small note under the title (warranty, scope), e.g. «شامل الفك والتركيب». */
  note?: ReactNode;
  /** Source options. Omit for fixed lines (labor, paint) and pass `price` instead. */
  options?: EstimateOption[];
  /** Index of the selected option (controlled). */
  selectedIndex?: number;
  /** Called with the tapped option index. */
  onSelect?: (index: number) => void;
  /** Fixed price for lines without options. */
  price?: number;
}

const fmt = (n: number) => n.toLocaleString('en-US');

/**
 * One line of the estimate — the heart of Salamtak's price transparency.
 * With `options`, the customer picks أصلي / تجاري / مستعمل and the shown
 * line price follows the selection; totals are recomputed by the parent.
 *
 * @example
 * <EstimateLine
 *   title="صدّام أمامي"
 *   note="شامل الفك والتركيب"
 *   options={[{ source: 'أصلي', price: 1850 }, { source: 'تجاري', price: 700 }, { source: 'مستعمل', price: 350 }]}
 *   selectedIndex={1}
 *   onSelect={setChoice}
 * />
 * @example
 * <EstimateLine title="سمكرة وبوية — 3 قطع" note="ضمان 6 أشهر على البوية" price={1200} />
 */
export function EstimateLine({ title, note, options, selectedIndex = 0, onSelect, price }: EstimateLineProps) {
  const shown = options ? options[selectedIndex]?.price ?? 0 : price ?? 0;
  return (
    <div className="slm-estline">
      <div className="slm-estline-head">
        <span>{title}</span>
        <span className="slm-estline-price">{fmt(shown)} ر.س</span>
      </div>
      {note != null && <div className="slm-estline-note">{note}</div>}
      {options && (
        <div className="slm-estline-opts">
          {options.map((opt, i) => (
            <button
              key={i}
              type="button"
              disabled={opt.disabled}
              aria-pressed={i === selectedIndex}
              className={cx('slm-opt', i === selectedIndex && 'is-on')}
              onClick={() => onSelect?.(i)}
            >
              <b>{opt.source}</b>
              <span>{fmt(opt.price)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
