import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../cx';

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  /** Semantic tone. Pair color with a word or icon — never color alone. */
  tone?: 'good' | 'warn' | 'bad' | 'info' | 'neutral';
  children: ReactNode;
}

/**
 * Status chip — case states, claim stages, availability, aging.
 *
 * @example
 * <Chip tone="good">مرفوع ✓</Chip>
 * @example
 * <Chip tone="warn">بانتظار الرد</Chip>
 * @example
 * <Chip tone="bad">بدون رد 26 س ⚠</Chip>
 * @example
 * <Chip tone="info">في الورشة</Chip>
 */
export function Chip({ tone = 'neutral', className, children, ...rest }: ChipProps) {
  return (
    <span
      className={cx(
        'slm-chip',
        tone === 'good' && 'slm-chip--good',
        tone === 'warn' && 'slm-chip--warn',
        tone === 'bad' && 'slm-chip--bad',
        tone === 'info' && 'slm-chip--info',
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
