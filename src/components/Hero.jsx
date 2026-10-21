/* ---------------------------------------------------------------------------
   src/components/Hero.jsx
   The dark opening panel, rebuilt in the Cretapex palette (charcoal + the
   logo's orange) instead of the reference's navy.
   Pieces in this file:
     1. <Constellation /> — a generated SVG star-field/line network background
        that mirrors the reference hero, drawn once with deterministic maths so
        it never re-renders differently.
     2. Floating service chips on the left, echoing the reference.
     3. Headline, supporting copy and the two calls to action.
     4. A stats strip that bridges the hero into the next section.
--------------------------------------------------------------------------- */
import React, { useMemo } from "react";
import Icon from "./Icons.jsx";
import { stats } from "../data/siteData.js";

/* ---- 1. Decorative background ------------------------------------------- */
function Constellation() {
  /* Deterministic pseudo-random points so the layout is stable across renders */
  const { dots, links } = useMemo(() => {
    const rand = (seed) => {
      const x = Math.sin(seed * 9301 + 49297) * 233280;
      return x - Math.floor(x);
    };
    const dots = Array.from({ length: 46 }, (_, i) => ({
      x: rand(i + 1) * 100,
      y: rand(i + 57) * 100,
      r: 0.55 + rand(i + 113) * 1.1,
      delay: (i % 7) * 0.55,
    }));
    /* Connect dots that sit close together to form the network effect */
    const links = [];
    dots.forEach((a, i) =>
      dots.slice(i + 1).forEach((b) => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 15) links.push({ a, b, o: 1 - d / 15 });
      }),
    );
    return { dots, links };
  }, []);

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {links.map((l, i) => (
        <line
          key={i}
          x1={l.a.x}
          y1={l.a.y}
          x2={l.b.x}
          y2={l.b.y}
          stroke="#FF8A2B"
          strokeWidth="0.08"
          opacity={l.o * 0.28}
        />
      ))}
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={d.r * 0.22}
          fill={i % 5 === 0 ? "#FF8A2B" : "#FFFFFF"}
          className="animate-twinkle"
          style={{ animationDelay: `${d.delay}s` }}
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  /* 2. Chips that float over the left half of the hero */
  const floatingTags = [
    { label: "Website Development", pos: "left-[4%] top-[34%]", delay: "0s" },
    { label: "Motion graphics", pos: "left-[9%] top-[17%]", delay: "1.2s" },
    {
      label: "Software & app development",
      pos: "left-[2%] top-[54%]",
      delay: "2.1s",
    },
    { label: "Digital marketing", pos: "left-[12%] top-[71%]", delay: "0.7s" },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ink pt-32 sm:pt-36"
    >
      {/* Layered background: charcoal base, warm glow, star field */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_82%_18%,#3A1B06_0%,#140D08_45%,#0A0A0B_100%)]" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-500/25 blur-[110px]" />
      <Constellation />

      <div className="container-x relative pb-20 pt-10 sm:pb-28">
        {/* Floating tags — hidden on small screens where there is no room */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {floatingTags.map((t) => (
            <span
              key={t.label}
              className={`chip absolute animate-drift ${t.pos}`}
              style={{ animationDelay: t.delay }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              {t.label}
            </span>
          ))}
        </div>

        {/* 3. Headline block — right aligned on desktop like the reference */}
        <div className="ml-auto max-w-xl text-center lg:text-right">
          <span className="chip mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />A
            technology partner, not a vendor
          </span>

          <h1 className="font-display text-4xl font-extrabold leading-[1.12] text-white sm:text-5xl">
            Your best partner for complete
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
              tech solutions
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-white/70 lg:ml-auto lg:mr-0">
            Cretapex builds the software, security and campaigns that move a
            business forward. From Dhaka to clients worldwide, one team owns
            your product from first sketch to steady growth.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-end">
            <a href="#contact" className="btn-primary">
              Start a project
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-ghost">
              Explore solutions
            </a>
          </div>
        </div>

        {/* 4. Stats strip */}
        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-ink/70 px-5 py-6 text-center backdrop-blur"
            >
              <dt className="font-display text-2xl font-bold text-white sm:text-3xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs text-white/55">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Soft transition into the light section below */}
      <div className="h-10 w-full bg-gradient-to-b from-transparent to-sand" />
    </section>
  );
}
