/* ---------------------------------------------------------------------------
   src/components/SectionHeading.jsx
   The centred heading block reused by Services, Advantage, Process, FAQ and
   Contact: small brand-coloured eyebrow, large display heading, and one line
   of supporting text. Keeping it in one component guarantees identical
   spacing and type sizes in every section.
--------------------------------------------------------------------------- */
import React from 'react'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', invert = false }) {
  const alignment = align === 'left' ? 'text-left' : 'text-center mx-auto'
  return (
    <header className={`max-w-2xl ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`text-3xl font-bold sm:text-4xl ${invert ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-[15px] leading-relaxed ${invert ? 'text-white/70' : 'text-ink-500'}`}>
          {subtitle}
        </p>
      )}
    </header>
  )
}
