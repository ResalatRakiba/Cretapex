/* ---------------------------------------------------------------------------
   src/components/Advantage.jsx
   "The Cretapex Advantage" — the two-column block from the reference.
   Left  : an SVG illustration of a team briefing, drawn inline (no stock art)
           and coloured with the brand palette.
   Right : four reasons to work with the agency. Hovering/focusing a row lifts
           it and reveals the brand-orange icon tile, mirroring the reference's
           highlighted row.
--------------------------------------------------------------------------- */
import React, { useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import Icon from './Icons.jsx'
import { advantages } from '../data/siteData.js'

/* Inline illustration — a small team reviewing work on a board */
function TeamIllustration() {
  return (
    <svg viewBox="0 0 420 320" className="h-auto w-full" role="img" aria-label="A Cretapex team reviewing project quality on a board">
      <rect x="0" y="0" width="420" height="320" rx="20" fill="#FFF4EC" />
      {/* Board */}
      <rect x="40" y="38" width="210" height="96" rx="12" fill="#fff" stroke="#0D0D0D" strokeOpacity=".08" />
      <circle cx="62" cy="60" r="7" fill="#F26A1B" />
      <rect x="76" y="56" width="92" height="7" rx="3.5" fill="#0D0D0D" opacity=".18" />
      <rect x="58" y="80" width="150" height="10" rx="5" fill="#0D0D0D" opacity=".75" />
      <rect x="58" y="102" width="110" height="7" rx="3.5" fill="#F26A1B" opacity=".45" />
      {/* Pointer + speech bubble */}
      <rect x="258" y="52" width="58" height="40" rx="12" fill="#26262A" />
      <path d="M270 92l-4 14 16-14z" fill="#26262A" />
      <circle cx="277" cy="72" r="3" fill="#fff" opacity=".8" />
      <circle cx="287" cy="72" r="3" fill="#fff" opacity=".8" />
      <circle cx="297" cy="72" r="3" fill="#fff" opacity=".8" />
      {/* Presenter */}
      <circle cx="196" cy="150" r="15" fill="#F26A1B" />
      <path d="M176 224c0-14 9-26 20-26s20 12 20 26v14h-40z" fill="#F26A1B" />
      <path d="M212 176l38-30" stroke="#F26A1B" strokeWidth="7" strokeLinecap="round" />
      {/* Table */}
      <ellipse cx="200" cy="268" rx="118" ry="20" fill="#0D0D0D" opacity=".07" />
      <rect x="120" y="242" width="160" height="16" rx="8" fill="#26262A" />
      {/* Seated team */}
      <g>
        <circle cx="130" cy="212" r="13" fill="#26262A" />
        <path d="M114 244c0-10 7-18 16-18s16 8 16 18z" fill="#26262A" />
      </g>
      <g>
        <circle cx="252" cy="214" r="12" fill="#8E8E96" />
        <path d="M238 244c0-9 6-16 14-16s14 7 14 16z" fill="#8E8E96" />
      </g>
      <g>
        <circle cx="290" cy="220" r="11" fill="#F26A1B" opacity=".75" />
        <path d="M277 246c0-8 6-15 13-15s13 7 13 15z" fill="#F26A1B" opacity=".75" />
      </g>
      {/* Plant */}
      <path d="M60 252c-8-16-4-32 6-40 6 12 6 28-6 40z" fill="#F26A1B" opacity=".55" />
      <path d="M52 268h26l-4 26H56z" fill="#26262A" />
      {/* Sparkles */}
      <path d="M330 120l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#F26A1B" />
      <circle cx="356" cy="182" r="4" fill="#F26A1B" opacity=".4" />
    </svg>
  )
}

export default function Advantage() {
  /* The first row starts highlighted, like the reference screenshot */
  const [activeId, setActiveId] = useState(advantages[0].id)

  return (
    <section id="about" className="section-y bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="WHY CRETAPEX"
          title="The Cretapex advantage"
          subtitle="We don't just deliver services — we build partnerships. Cross-disciplinary teams pair creative craft with engineering rigour, so every project ships polished, on time and ready to scale."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Illustration */}
          <div className="order-2 lg:order-1">
            <TeamIllustration />
          </div>

          {/* Four advantage rows */}
          <ul className="order-1 space-y-2 lg:order-2">
            {advantages.map((item) => {
              const isActive = activeId === item.id
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveId(item.id)}
                    onFocus={() => setActiveId(item.id)}
                    onClick={() => setActiveId(item.id)}
                    aria-pressed={isActive}
                    className={`flex w-full gap-4 rounded-2xl p-4 text-left transition duration-300 ${
                      isActive ? 'bg-sand shadow-card' : 'hover:bg-mist'
                    }`}
                  >
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition ${
                        isActive ? 'bg-brand-500 text-white' : 'bg-brand-50 text-brand-600'
                      }`}
                    >
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[15px] font-semibold text-ink">{item.title}</span>
                      <span className="mt-1 block text-[13.5px] leading-relaxed text-ink-500">
                        {item.text}
                      </span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
