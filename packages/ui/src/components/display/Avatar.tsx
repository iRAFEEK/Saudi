import { cx } from '../../cx';

export interface AvatarProps {
  /** Person's name; the first character renders as the initial. */
  name: string;
  /** `md` for table rows, `lg` for profile cards (e.g. the driver card). */
  size?: 'md' | 'lg';
  className?: string;
}

/**
 * Initial avatar — customers in case lists, the driver identity card.
 *
 * @example
 * <Avatar name="سعود العتيبي" size="lg" />
 * @example
 * <Avatar name="نورة" />
 */
export function Avatar({ name, size = 'md', className }: AvatarProps) {
  return (
    <span className={cx('slm-avatar', size === 'lg' && 'slm-avatar--lg', className)} aria-hidden="true">
      {Array.from(name.trim())[0] ?? '·'}
    </span>
  );
}
