import { cx } from '../../cx';

export interface StepperProps {
  /** Total number of steps in the flow. */
  steps: number;
  /** 1-based index of the current step; earlier steps render as done. */
  current: number;
  className?: string;
}

/**
 * Thin progress stepper for wizards (e.g. the 4-step tow request).
 * In RTL context progress fills right-to-left automatically.
 *
 * @example
 * <Stepper steps={4} current={3} />
 */
export function Stepper({ steps, current, className }: StepperProps) {
  return (
    <div className={cx('slm-stepper', className)} role="progressbar" aria-valuemin={1} aria-valuemax={steps} aria-valuenow={current}>
      {Array.from({ length: steps }, (_, i) => (
        <i key={i} className={i < current ? 'is-done' : undefined} />
      ))}
    </div>
  );
}
