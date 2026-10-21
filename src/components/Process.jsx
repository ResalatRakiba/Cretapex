/* ---------------------------------------------------------------------------
   src/components/Process.jsx
   "Precision in Every Step" — the delivery timeline.
   The reference reveals each step as you scroll; this version does the same
   with a single IntersectionObserver that adds a `visible` class to each step
   once it enters the viewport (and the reduced-motion rule in index.css turns
   the animation off for users who ask for that).
   Numbered markers are used here because the content genuinely is a sequence.
--------------------------------------------------------------------------- */
import React, { useEffect, useRef, useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import { processSteps } from '../data/siteData.js'

export default function Process() {
  const containerRef = useRef(null)
  const [revealed, setRevealed] = useState([])

  useEffect(() => {
    const nodes = containerRef.current?.querySelectorAll('[data-step]') || []
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.dataset.step)
            setRevealed((prev) => (prev.includes(id) ? prev : [...prev, id]))
          }
        })
      },
      { threshold: 0.4 }
    )
    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" className="section-y bg-mist">
      <div className="container-x">
        <SectionHeading
          eyebrow="HOW WE WORK"
          title="Precision in every step"
          subtitle="A transparent process that takes your idea from the first conversation to a product that scales."
        />

        <ol ref={containerRef} className="mt-14 grid gap-8 md:grid-cols-5 md:gap-4">
          {processSteps.map((step, index) => {
            const isVisible = revealed.includes(step.id)
            return (
              <li
                key={step.id}
                data-step={step.id}
                className={`relative text-center transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-35'
                }`}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                {/* Connector line to the next step (desktop only) */}
                {index < processSteps.length - 1 && (
                  <span
                    className={`absolute left-1/2 top-7 hidden h-px w-full transition-colors duration-700 md:block ${
                      isVisible ? 'bg-brand-300' : 'bg-ink/10'
                    }`}
                    aria-hidden="true"
                  />
                )}

                {/* Numbered marker */}
                <span
                  className={`relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full border font-display text-lg font-bold transition-colors duration-500 ${
                    isVisible
                      ? 'border-brand-200 bg-white text-brand-600 shadow-card'
                      : 'border-ink/10 bg-white text-ink-300'
                  }`}
                >
                  {step.id}
                </span>

                <h3 className="mt-4 text-[15px] font-semibold text-ink">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-[230px] text-[13px] leading-relaxed text-ink-500">
                  {step.text}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
