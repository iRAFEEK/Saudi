import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../cx';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** `inset` (default) = quiet section card inside a screen; `raised` = white elevated card on the page ground; `night` = fixed-dark card for the SOS/hero context. */
  variant?: 'inset' | 'raised' | 'night';
  children: ReactNode;
}

/**
 * Surface container. Most mobile screens stack `inset` cards; dashboards and
 * marketing surfaces use `raised`; the SOS screen uses `night`.
 *
 * @example
 * <Card>
 *   <ListRow icon="📄" title="تقرير نجم" subtitle="NJM-88213004" trailing={<Chip tone="good">مرفوع ✓</Chip>} />
 * </Card>
 */
export function Card({ variant = 'inset', className, children, ...rest }: CardProps) {
  return (
    <div
      className={cx(
        'slm-card',
        variant === 'raised' && 'slm-card--raised',
        variant === 'night' && 'slm-card--night',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
