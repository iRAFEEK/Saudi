import type { ReactNode } from 'react';
import { cx } from '../../cx';

export interface MapCardProps {
  /** ETA pill content, e.g. <>الوصول خلال <em>12 دقيقة</em></>. Omit to hide the pill. */
  eta?: ReactNode;
  /** Draw the dashed brand route from truck to pin. */
  showRoute?: boolean;
  /** Draw the truck marker. */
  showTruck?: boolean;
  /** Map height in SVG units (width is 288). */
  height?: number;
  className?: string;
}

/**
 * Stylized map placeholder with destination pin, optional truck + route,
 * and the floating ETA pill — stands in for the live map in tracking and
 * dispatch screens. Real apps replace the SVG with the maps SDK; the pill
 * and frame stay.
 *
 * @example
 * <MapCard eta={<>الوصول خلال <em>12 دقيقة</em></>} showRoute showTruck />
 * @example
 * <MapCard eta="موقعك: طريق الملك فهد" height={110} />
 */
export function MapCard({ eta, showRoute, showTruck, height = 150, className }: MapCardProps) {
  return (
    <div className={cx('slm-map', className)}>
      <svg viewBox={`0 0 288 ${height}`} aria-hidden="true">
        <rect width="288" height={height} fill="var(--slm-card-2)" />
        <g stroke="var(--slm-line)" strokeWidth="5" fill="none">
          <path d={`M0 ${height * 0.25} H288 M0 ${height * 0.64} H288 M50 0 V${height} M132 0 V${height} M212 0 V${height}`} />
        </g>
        {showRoute && (
          <path
            d={`M36 ${height * 0.85} L50 ${height * 0.64} H132 V${height * 0.25} H210`}
            fill="none"
            stroke="var(--slm-brand)"
            strokeWidth="3.5"
            strokeDasharray="8 6"
            strokeLinecap="round"
          />
        )}
        {showTruck && <rect x="26" y={height * 0.8} width="22" height="14" rx="4" fill="var(--slm-brand)" />}
        <circle cx="212" cy={height * 0.25} r="7" fill="var(--slm-sos)" />
        <circle cx="212" cy={height * 0.25} r="13" fill="none" stroke="var(--slm-sos)" strokeWidth="2" opacity="0.4" />
      </svg>
      {eta != null && <span className="slm-eta">{eta}</span>}
    </div>
  );
}
