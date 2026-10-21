/* ---------------------------------------------------------------------------
   src/components/Services.jsx
   "Precision Services" — the six-card grid from the reference design.
   Each card shows: a mini illustration, the service name, a short description,
   three bullet points, and a "Learn more" link that jumps to the contact form
   with that service pre-selected (handled via the URL hash + Contact.jsx).
   Content comes from src/data/siteData.js.
--------------------------------------------------------------------------- */
import React from 'react'
import SectionHeading from './SectionHeading.jsx'
import ServicePreview from './ServicePreviews.jsx'
import Icon from './Icons.jsx'
import { services } from '../data/siteData.js'

export default function Services() {
  return (
    <section id="services" className="section-y bg-sand">
      <div className="container-x">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="Precision services"
          subtitle="Six specialised capabilities under one accountable partner — from creative production to engineering, security and growth."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="card group flex flex-col p-5 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
            >
              {/* Mini illustration */}
              <ServicePreview type={service.preview} />

              {/* Title + copy */}
              <h3 className="mt-5 text-base font-semibold leading-snug text-ink">
                {service.title}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-500">
                {service.description}
              </p>

              {/* Three concrete deliverables per service */}
              <ul className="mt-4 space-y-1.5">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-[13px] text-ink-500">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Card CTA, pinned to the bottom so all cards line up */}
              <a
                href="#contact"
                onClick={() =>
                  /* Tell the contact form which service to pre-select.
                     Contact.jsx listens for this custom event. */
                  window.dispatchEvent(
                    new CustomEvent('cretapex:topic', { detail: service.title })
                  )
                }
                className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full border border-ink/10 px-3.5 py-2 text-xs font-semibold text-ink transition group-hover:border-brand-500 group-hover:text-brand-600"
              >
                Learn more
                <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="btn-outline">
            Discuss your project
            <Icon name="arrowRight" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
