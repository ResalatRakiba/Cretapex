/* ---------------------------------------------------------------------------
   src/components/Navbar.jsx
   Floating pill navigation, matching the reference layout.
   What this file handles:
     1. Sticks to the top of the viewport and gains a stronger shadow once the
        user scrolls past the hero fold (useState + scroll listener).
     2. Scroll-spy: highlights the nav link of the section currently on screen
        using an IntersectionObserver.
     3. Fully responsive — collapses into an accessible slide-down mobile menu.
--------------------------------------------------------------------------- */
import React, { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import Icon from './Icons.jsx'
import { navLinks } from '../data/siteData.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)   // shadow state
  const [open, setOpen] = useState(false)           // mobile menu state
  const [active, setActive] = useState('#home')     // current section

  /* 1. Track scroll position for the elevated navbar look */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* 2. Watch every section and mark the one in view as active */
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  /* 3. Lock body scroll while the mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-5">
      <div className="container-x">
        <nav
          className={`flex items-center justify-between gap-4 rounded-full bg-white/95 px-4 py-2.5 pl-5 backdrop-blur-md transition-shadow duration-300 sm:px-3 sm:pl-6 ${
            scrolled ? 'shadow-pill' : 'shadow-[0_6px_24px_-16px_rgba(13,13,13,0.4)]'
          }`}
        >
          {/* Brand */}
          <Logo />

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative py-1 text-sm font-medium transition-colors ${
                    active === link.href ? 'text-ink' : 'text-ink-500 hover:text-ink'
                  }`}
                >
                  {link.label}
                  {/* Active underline in brand orange */}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-brand-500 transition-all duration-300 ${
                      active === link.href ? 'w-full' : 'w-0'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <a href="#contact" className="btn-primary hidden !px-5 !py-2.5 md:inline-flex">
              Contact us
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink md:hidden"
            >
              <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
            </button>
          </div>
        </nav>

        {/* Mobile dropdown panel */}
        <div
          className={`mt-2 overflow-hidden rounded-3xl bg-white shadow-pill transition-all duration-300 md:hidden ${
            open ? 'max-h-[420px] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
          }`}
        >
          <ul className="divide-y divide-ink/5 p-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-ink hover:bg-sand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="p-4 pt-1">
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
