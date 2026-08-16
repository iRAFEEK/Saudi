import type { ReactNode } from 'react';
import { cx } from '../../cx';

export interface DataTableColumn<Row> {
  /** Key into the row object (or use `render`). */
  key: keyof Row & string;
  /** Column header text. */
  header: ReactNode;
  /** Custom cell renderer — receives the whole row. */
  render?: (row: Row) => ReactNode;
}

export interface DataTableProps<Row extends Record<string, ReactNode>> {
  columns: DataTableColumn<Row>[];
  rows: Row[];
  className?: string;
}

/**
 * RTL-first data table for console views (cases, claims, invoices, POs).
 * Headers align to the reading start; give numeric cells `className="slm-num"` via `render`.
 *
 * @example
 * <DataTable
 *   columns={[
 *     { key: 'id', header: 'القضية' },
 *     { key: 'customer', header: 'العميل' },
 *     { key: 'status', header: 'الحالة', render: (r) => <Chip tone="warn">{r.status}</Chip> },
 *   ]}
 *   rows={[{ id: 'SLM-2481', customer: 'عبدالعزيز · كامري 2019', status: 'بانتظار الرد' }]}
 * />
 */
export function DataTable<Row extends Record<string, ReactNode>>({ columns, rows, className }: DataTableProps<Row>) {
  return (
    <table className={cx('slm-table', className)}>
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c.key}>{c.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {columns.map((c) => (
              <td key={c.key}>{c.render ? c.render(row) : row[c.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
