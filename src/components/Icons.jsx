/* ---------------------------------------------------------------------------
   src/components/Icons.jsx
   A tiny hand-rolled icon set (inline SVG) so the project ships with ZERO icon
   dependencies — smaller bundle, and every icon inherits the current text
   colour via `stroke="currentColor"`.
   Usage:  <Icon name="rocket" className="h-5 w-5" />
--------------------------------------------------------------------------- */
import React from 'react'

/* Shared stroke settings for every outline icon */
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const paths = {
  /* --- advantage / feature icons --- */
  layers: <><path d="M12 3 3 8l9 5 9-5-9-5Z" /><path d="m3 13 9 5 9-5" /><path d="m3 17.5 9 5 9-5" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.5 2.7 3.8 5.7 3.8 9S14.5 21.3 12 24M12 3C9.5 5.7 8.2 8.7 8.2 12S9.5 18.3 12 21" /></>,
  check: <><circle cx="12" cy="12" r="9" /><path d="m8.5 12.2 2.4 2.4 4.6-4.9" /></>,
  rocket: <><path d="M5 15c-1.2 2-1.4 4.4-1.4 4.4S6 19.2 8 18" /><path d="M14.5 4.5c3-1 5 1 4 4-1 3-5.5 7-8 8.5L7 14.5C8.5 12 12 6 14.5 4.5Z" /><circle cx="14.5" cy="9.5" r="1.6" /></>,

  /* --- contact / footer icons --- */
  phone: <path d="M6.5 3.5h3l1.5 4-2 1.4a12 12 0 0 0 5.6 5.6l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m3.8 7 7.3 5.3a1.5 1.5 0 0 0 1.8 0L20.2 7" /></>,
  pin: <><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5.2l3.2 2" /></>,

  /* --- UI icons --- */
  arrowUpRight: <path d="M7.5 16.5 16.5 7.5M9 7.5h7.5V15" />,
  arrowRight: <path d="M4.5 12h15m-6-6 6 6-6 6" />,
  chevronDown: <path d="m6 9.5 6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,

  /* --- social icons (filled, so they override the stroke settings) --- */
  facebook: <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.25-1.5 1.5-1.5h1.5V4.4A20 20 0 0 0 14.4 4.3c-2.2 0-3.7 1.35-3.7 3.83V10.5H8.2v3h2.5V21h2.8Z" fill="currentColor" stroke="none" />,
  linkedin: <path d="M6.9 8.8H4.3V20h2.6V8.8ZM5.6 4a1.5 1.5 0 1 0 0 3.05A1.5 1.5 0 0 0 5.6 4ZM20 13.8c0-3-1.6-4.4-3.8-4.4-1.7 0-2.5.95-2.9 1.6V8.8H8.8c.03.75 0 11.2 0 11.2h2.5v-6.2c0-.35.03-.7.13-.95.27-.7.9-1.4 1.95-1.4 1.4 0 1.95 1.05 1.95 2.6V20H20v-6.2Z" fill="currentColor" stroke="none" />,
  instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="3.9" /><circle cx="16.9" cy="7.1" r="1" fill="currentColor" stroke="none" /></>,
}

export default function Icon({ name, className = 'h-5 w-5', ...rest }) {
  const shape = paths[name]
  if (!shape) return null
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...rest}>
      {shape}
    </svg>
  )
}
