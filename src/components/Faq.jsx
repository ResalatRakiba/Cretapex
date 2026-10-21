/* ---------------------------------------------------------------------------
   src/components/Faq.jsx
   Accordion of frequently asked questions.
   Behaviour: one panel open at a time (the first is open on load, as in the
   reference). Built with real <button> elements plus aria-expanded /
   aria-controls so screen readers and keyboards work correctly; the open/close
   motion is a height transition, which is motion that answers a user action.
--------------------------------------------------------------------------- */
import React, { useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import Icon from './Icons.jsx'
import { faqs } from '../data/siteData.js'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => setOpenIndex((current) => (current === index ? -1 : index))

  return (
    <section id="faq" className="section-y bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="GOOD TO KNOW"
          title="Frequently asked questions"
          subtitle="Still unsure about something? Call us on 01309584595 and ask directly."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
                  isOpen ? 'border-brand-200 bg-brand-50/40' : 'border-ink/[0.08]'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-[14.5px] font-semibold text-ink">{faq.q}</span>
                    <Icon
                      name="chevronDown"
                      className={`h-4 w-4 shrink-0 text-brand-600 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[13.5px] leading-relaxed text-ink-500">{faq.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
