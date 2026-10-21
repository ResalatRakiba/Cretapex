/* ---------------------------------------------------------------------------
   src/components/BackToTop.jsx
   A small floating button that appears after the user scrolls past one
   viewport height and returns them to the top. Hidden from screen readers
   while invisible so it never becomes a phantom tab stop.
--------------------------------------------------------------------------- */
import React, { useEffect, useState } from 'react'
import Icon from './Icons.jsx'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-ink text-white shadow-pill transition-all duration-300 hover:bg-brand-500 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <Icon name="arrowUpRight" className="h-4 w-4 -rotate-45" />
    </button>
  )
}
