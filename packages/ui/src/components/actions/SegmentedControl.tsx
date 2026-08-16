import { cx } from '../../cx';

export interface SegmentedControlOption {
  /** Machine value reported through `onChange`. */
  value: string;
  /** Visible label (Arabic-first). */
  label: string;
}

export interface SegmentedControlProps {
  /** The choices, right-to-left in RTL context. 2–4 options work best. */
  options: SegmentedControlOption[];
  /** Currently selected option value. */
  value: string;
  /** Called with the tapped option's value. */
  onChange?: (value: string) => void;
  className?: string;
}

/**
 * Single-choice segmented control — used for payment methods, filters, and mode switches.
 *
 * @example
 * <SegmentedControl
 *   options={[{ value: 'mada', label: 'مدى' }, { value: 'applepay', label: ' Pay' }, { value: 'transfer', label: 'تحويل' }, { value: 'cash', label: 'كاش' }]}
 *   value="mada"
 *   onChange={setMethod}
 * />
 */
export function SegmentedControl({ options, value, onChange, className }: SegmentedControlProps) {
  return (
    <div className={cx('slm-seg', className)} role="radiogroup">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          role="radio"
          aria-checked={opt.value === value}
          className={cx('slm-seg-opt', opt.value === value && 'is-on')}
          onClick={() => onChange?.(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
