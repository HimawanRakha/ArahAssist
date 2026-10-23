/* Shared design tokens and icons for the hand-built ArahAssist screens. */
import React from 'react';

export const C = {
  sky: '#1664B0',
  skyDark: '#0F5596',
  skyTint: '#E3EEF8',
  linen: '#EFE8DE',
  linenDeep: '#E4DBCD',
  scarlet: '#D21624',
  scarletTint: '#FBE4E5',
  ink: '#1B2333',
  muted: '#5D6577',
  line: '#EAE2D5',
  white: '#FFFFFF',
};

export const card = { background: C.white, borderRadius: 16, border: `1px solid ${C.line}` };

const P = {
  bus: <><rect width="16" height="16" x="4" y="3" rx="3" /><path d="M4 11h16" /><path d="M8 15h.01" /><path d="M16 15h.01" /><path d="M6 19v2" /><path d="M18 19v2" /></>,
  route: <><circle cx="6" cy="19" r="3" /><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" /><circle cx="18" cy="5" r="3" /></>,
  map: <><path d="M14.1 6 9.9 4 3 7v13l6.9-3 4.2 2 6.9-3V3z" /><path d="M9.9 4v13" /><path d="M14.1 6v13" /></>,
  ticket: <><path d="M3 9a3 3 0 0 0 0 6v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3a3 3 0 0 0 0-6V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z" /><path d="M13 5v2" /><path d="M13 17v2" /><path d="M13 11v2" /></>,
  chat: <><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" /><path d="M8.5 11h.01" /><path d="M12 11h.01" /><path d="M15.5 11h.01" /></>,
  wallet: <><path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h14a2 2 0 0 1 2 2v3h-4a2 2 0 0 0 0 4h4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5" /></>,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  swap: <><path d="m21 16-4 4-4-4" /><path d="M17 20V4" /><path d="m3 8 4-4 4 4" /><path d="M7 4v16" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
  search: <><circle cx="11" cy="11" r="7.5" /><path d="m20.5 20.5-4.2-4.2" /></>,
  chevron: <path d="m9 6 6 6-6 6" />,
  globe: <><circle cx="12" cy="12" r="9.5" /><path d="M2.5 12h19" /><path d="M12 2.5a14 14 0 0 1 0 19a14 14 0 0 1 0-19" /></>,
  qr: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><path d="M14 14h3v3h-3z" /><path d="M17 20h4v-3" /></>,
  star: <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />,
};

export function Icon({ name, size = 20, stroke = 2, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      {P[name]}
    </svg>
  );
}

export function SectionTitle({ children, action, onAction }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, padding: '0 2px' }}>
      <h2 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: C.ink }}>{children}</h2>
      {action ? (
        <button onClick={onAction} style={{ border: 0, background: 'none', padding: '6px 0', fontSize: 14, fontWeight: 700, color: C.sky, cursor: 'pointer' }}>
          {action}
        </button>
      ) : null}
    </div>
  );
}

export function RouteBadge({ rid, ink }) {
  return (
    <span style={{ display: 'inline-grid', placeItems: 'center', minWidth: 34, height: 24, padding: '0 7px', borderRadius: 6, background: ink, color: '#fff', fontSize: 13, fontWeight: 800 }}>
      {rid}
    </span>
  );
}
