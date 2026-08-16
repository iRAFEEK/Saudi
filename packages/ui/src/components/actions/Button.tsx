import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../cx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual role. `primary` = signage-green main action; `sos` = the emergency call-to-action (reserve for the accident moment); `ghost` = secondary outline. */
  variant?: 'primary' | 'sos' | 'ghost';
  /** `md` fills its container (mobile-first); `sm` is inline-sized for toolbars and rows. */
  size?: 'md' | 'sm';
  children: ReactNode;
}

/**
 * Salamtak button. Big, one-thumb targets by default — `md` spans the container.
 * The `sos` variant is the loudest element in the system; use it once per screen at most.
 *
 * @example
 * <Button variant="sos">عندي حادث 🚨</Button>
 * @example
 * <Button>اطلب السطحة</Button>
 * @example
 * <Button variant="ghost" size="sm">📞 اتصال</Button>
 */
export function Button({ variant = 'primary', size = 'md', className, children, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      className={cx(
        'slm-btn',
        variant === 'sos' && 'slm-btn--sos',
        variant === 'ghost' && 'slm-btn--ghost',
        size === 'sm' && 'slm-btn--sm',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
