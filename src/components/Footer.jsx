/* ---------------------------------------------------------------------------
   src/components/Footer.jsx
   Four-column footer following the reference layout: brand blurb + socials,
   company links, the service list, and contact info — then a thin legal bar.
   All links are live anchors; the phone and email use tel:/mailto:.
--------------------------------------------------------------------------- */
import React from 'react'
import Logo from './Logo.jsx'
import Icon from './Icons.jsx'
import { company, navLinks, services } from '../data/siteData.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/[0.06] bg-brand-50/60">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.1fr_1.1fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-ink-500">
              Cretapex builds software, secures it, designs around it and markets it —
              one accountable team for the whole journey from idea to growth.
            </p>
            <div className="mt-5 flex gap-2">
              {company.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-ink text-white transition hover:bg-brand-500"
                >
                  <Icon name={social.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <nav aria-label="Company">
            <h3 className="text-sm font-semibold text-ink">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[13.5px] text-ink-500 transition hover:text-brand-600">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-[13.5px] text-ink-500 transition hover:text-brand-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Solutions">
            <h3 className="text-sm font-semibold text-ink">Solutions</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="text-[13.5px] text-ink-500 transition hover:text-brand-600">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-ink">Contact info</h3>
            <ul className="mt-4 space-y-3 text-[13.5px] text-ink-500">
              <li className="flex items-center gap-2.5">
                <Icon name="phone" className="h-4 w-4 text-brand-600" />
                <a href={company.phoneHref} className="hover:text-brand-600">{company.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="pin" className="h-4 w-4 text-brand-600" />
                {company.address}
              </li>
            </ul>

            {/* Email highlighted in a bordered pill, as in the reference */}
            <a
              href={company.emailHref}
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-brand-300 bg-white px-3.5 py-2.5 text-[13.5px] font-medium text-ink transition hover:border-brand-500 hover:text-brand-600"
            >
              <Icon name="mail" className="h-4 w-4 text-brand-600" />
              {company.email}
            </a>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-ink/[0.06]">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-ink-300 sm:flex-row">
          <p>© {year} Cretapex. All rights reserved.</p>
          <p>{company.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
