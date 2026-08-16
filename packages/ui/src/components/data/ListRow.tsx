import type { ReactNode } from 'react';
import { cx } from '../../cx';

export interface ListRowProps {
  /** Leading icon glyph (emoji or short text) rendered in a tinted square. Omit for text-only rows. */
  icon?: ReactNode;
  /** Tint of the icon square. `brand` (default) for positive/primary, `amber` pending, `sos` urgent, `plain` neutral. */
  iconTone?: 'brand' | 'amber' | 'sos' | 'plain';
  /** Custom leading node (e.g. an <Avatar/>) — replaces the icon square. */
  leading?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Trailing slot: a <Chip/>, a value, or a small <Button/>. */
  trailing?: ReactNode;
  className?: string;
}

/**
 * The workhorse list row — checklists, document rows, driver cards, settings.
 *
 * @example
 * <ListRow icon="📄" iconTone="plain" title="تقرير نجم" subtitle="NJM-88213004" trailing={<Chip tone="good">مرفوع ✓</Chip>} />
 * @example
 * <ListRow leading={<Avatar name="سعود" size="lg" />} title="سعود العتيبي" subtitle="سطحة هينو · ⭐ 4.9" trailing={<Button variant="ghost" size="sm">📞</Button>} />
 */
export function ListRow({ icon, iconTone = 'brand', leading, title, subtitle, trailing, className }: ListRowProps) {
  return (
    <div className={cx('slm-row', className)}>
      {leading ??
        (icon != null && (
          <span
            className={cx(
              'slm-row-icon',
              iconTone === 'amber' && 'slm-row-icon--amber',
              iconTone === 'sos' && 'slm-row-icon--sos',
              iconTone === 'plain' && 'slm-row-icon--plain',
            )}
          >
            {icon}
          </span>
        ))}
      <div className="slm-row-body">
        <div className="slm-row-title">{title}</div>
        {subtitle != null && <div className="slm-row-sub">{subtitle}</div>}
      </div>
      {trailing != null && <div className="slm-row-end">{trailing}</div>}
    </div>
  );
}
