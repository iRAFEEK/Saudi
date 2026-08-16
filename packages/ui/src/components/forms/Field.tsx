import type { ReactNode } from 'react';
import { cx } from '../../cx';

export interface FieldProps {
  /** The field's main content — a value, an input, or a summary line. */
  children: ReactNode;
  /** Trailing affordance: an action word («تعديل»), a flag, an icon. */
  trailing?: ReactNode;
  /** Force LTR for phone numbers, plates, codes inside RTL screens. */
  ltr?: boolean;
  className?: string;
}

/**
 * Bordered field row — display-and-edit rows in wizards and forms.
 *
 * @example
 * <Field trailing="تعديل"><b>كامري 2019 · أبيض · ن ط د 7421</b></Field>
 * @example
 * <Field ltr trailing="🇸🇦"><b>+966 5X XXX XXXX</b></Field>
 */
export function Field({ children, trailing, ltr, className }: FieldProps) {
  return (
    <div className={cx('slm-field', className)} dir={ltr ? 'ltr' : undefined}>
      <span className="slm-field-value">{children}</span>
      {trailing != null && <span className="slm-field-trailing">{trailing}</span>}
    </div>
  );
}
