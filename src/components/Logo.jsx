/* ---------------------------------------------------------------------------
   src/components/Logo.jsx
   Renders the client's PNG logo. Two variants so one component serves the
   whole site:
     variant="lockup"  -> square "CA" mark + "Cretapex" wordmark + tagline
                          (used in the navbar and the footer)
     variant="full"    -> the complete supplied PNG, untouched
   The PNGs live in /public and were background-removed so they sit cleanly on
   any surface.
--------------------------------------------------------------------------- */
import React from 'react'

export default function Logo({ variant = 'lockup', className = '', showTagline = true }) {
  /* Full original artwork — mark, wordmark and tagline in one image */
  if (variant === 'full') {
    return (
      <img
        src="/cretapex-logo.png"
        alt="Cretapex — Your Growth, Our Strategy"
        className={className || 'h-24 w-auto'}
      />
    )
  }

  /* Horizontal lockup: PNG mark + live text, which stays sharp at small sizes */
  return (
    <a href="#home" className={`group flex items-center gap-2.5 ${className}`} aria-label="Cretapex home">
      <img
        src="/cretapex-mark.png"
        alt=""
        className="h-9 w-auto shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
      />
      <span className="leading-none">
        <span className="block font-display text-[19px] font-extrabold tracking-tight text-ink">
          Cretapex
        </span>
        {showTagline && (
          <span className="mt-0.5 block text-[10px] font-medium tracking-wide text-brand-600">
            Your Growth, Our Strategy
          </span>
        )}
      </span>
    </a>
  )
}
