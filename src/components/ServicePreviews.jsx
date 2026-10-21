/* ---------------------------------------------------------------------------
   src/components/ServicePreviews.jsx
   Each service card in the reference design has a small abstract "preview"
   panel at the top. This file draws those six previews as pure JSX/SVG — no
   image files, so they stay crisp, theme-able and weigh nothing.
   Exported as one <ServicePreview type="..." /> switcher.
--------------------------------------------------------------------------- */
import React from 'react'

/* Shared frame: soft brand-tinted panel the mini illustration sits inside */
function Frame({ children }) {
  return (
    <div className="relative grid h-[104px] place-items-center overflow-hidden rounded-xl border border-ink/[0.06] bg-gradient-to-b from-brand-50 to-white">
      {children}
    </div>
  )
}

/* Development — a stylised code snippet */
const CodePreview = () => (
  <Frame>
    <div className="w-[82%] rounded-lg bg-white px-3 py-2.5 font-mono text-[9px] leading-[1.9] text-ink-500 shadow-sm ring-1 ring-ink/5">
      <p><span className="text-brand-600">const</span> app = build();</p>
      <p><span className="text-brand-600">await</span> app.deploy();</p>
      <p>return scale;</p>
    </div>
  </Frame>
)

/* Cyber security — shield badge */
const ShieldPreview = () => (
  <Frame>
    <div className="grid h-12 w-12 place-items-center rounded-xl bg-white shadow-sm ring-1 ring-ink/5">
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand-500" fill="currentColor">
        <path d="M12 2.5 19 5v6.2c0 4.3-2.9 8.2-7 9.3-4.1-1.1-7-5-7-9.3V5l7-2.5Z" opacity=".9" />
      </svg>
    </div>
  </Frame>
)

/* Digital marketing — rising bar chart */
const ChartPreview = () => (
  <Frame>
    <div className="flex items-end gap-1.5">
      {[10, 18, 26, 34].map((h, i) => (
        <span key={i} className="w-2.5 rounded-sm bg-brand-500" style={{ height: h, opacity: 0.45 + i * 0.18 }} />
      ))}
      <span className="ml-2 h-6 w-6 rounded-full border-2 border-ink/15" />
    </div>
  </Frame>
)

/* Graphics & motion — scattered geometry */
const ShapesPreview = () => (
  <Frame>
    <div className="relative h-14 w-24">
      <span className="absolute left-3 top-6 h-4 w-4 rotate-45 rounded-[3px] bg-ink/80" />
      <span className="absolute left-10 top-1 h-3.5 w-3.5 rounded-full bg-brand-500" />
      <span className="absolute left-16 top-8 h-5 w-5 rounded-[3px] bg-brand-300" />
      <span className="absolute left-1 top-1 h-2.5 w-2.5 rounded-full bg-ink/25" />
    </div>
  </Frame>
)

/* UI/UX — browser wireframe */
const WireframePreview = () => (
  <Frame>
    <div className="w-[82%] rounded-lg bg-white p-2.5 shadow-sm ring-1 ring-ink/5">
      <div className="mb-2 flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
        <span className="h-1.5 w-1.5 rounded-full bg-ink/15" />
      </div>
      <div className="flex gap-2">
        <div className="h-8 w-1/3 rounded bg-brand-100" />
        <div className="flex-1 space-y-1.5">
          <div className="h-1.5 w-full rounded bg-ink/10" />
          <div className="h-1.5 w-4/5 rounded bg-ink/10" />
          <div className="h-1.5 w-2/3 rounded bg-brand-200" />
        </div>
      </div>
    </div>
  </Frame>
)

/* Video editing — edit timeline with clips */
const TimelinePreview = () => (
  <Frame>
    <div className="w-[82%] space-y-2">
      <div className="flex gap-1.5">
        <span className="h-3 w-8 rounded bg-brand-500" />
        <span className="h-3 w-5 rounded bg-brand-300" />
        <span className="h-3 w-10 rounded bg-brand-400" />
        <span className="h-3 flex-1 rounded bg-ink/10" />
      </div>
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-ink/70" />
        <span className="h-2 flex-1 rounded bg-ink/10" />
      </div>
    </div>
  </Frame>
)

const map = {
  code: CodePreview,
  shield: ShieldPreview,
  chart: ChartPreview,
  shapes: ShapesPreview,
  wireframe: WireframePreview,
  timeline: TimelinePreview,
}

export default function ServicePreview({ type }) {
  const Component = map[type] || CodePreview
  return <Component />
}
