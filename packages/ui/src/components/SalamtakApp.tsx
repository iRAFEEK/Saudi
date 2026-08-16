import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../cx';

export interface SalamtakAppProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/**
 * Root wrapper for any Salamtak surface. Applies the IBM Plex Sans Arabic
 * type stack, ink/paper colors, and RTL direction — every screen composed
 * from this design system should sit inside exactly one SalamtakApp.
 *
 * @example
 * <SalamtakApp>
 *   <Button variant="sos">عندي حادث 🚨</Button>
 * </SalamtakApp>
 */
export function SalamtakApp({ className, children, ...rest }: SalamtakAppProps) {
  return (
    <div className={cx('slm-app', className)} dir="rtl" lang="ar" {...rest}>
      {children}
    </div>
  );
}
