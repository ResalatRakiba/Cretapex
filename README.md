# Cretapex — Agency Website (Front-End)

Front-end build for **Cretapex — Your Growth, Our Strategy**.
Stack: **React 18 + Vite + Tailwind CSS**. No UI library, no icon package — everything
is hand-built so the bundle stays small and the code is easy to hand over.

---

## 1. Run it

```bash
npm install     # install dependencies
npm run dev     # start the dev server at http://localhost:3000
npm run build   # production build into /dist
npm run preview # preview the production build
```

Requires Node.js 18 or newer.

---

## 2. What's in each file

| File | What it does |
|---|---|
| `index.html` | HTML shell: page title, SEO meta, favicon, Google Fonts (Sora + Inter) |
| `vite.config.js` | Vite + React plugin, dev server on port 3000 |
| `tailwind.config.js` | **Design tokens** — brand colours sampled from the logo, fonts, shadows, animations |
| `postcss.config.js` | Runs Tailwind + Autoprefixer |
| `src/main.jsx` | React entry point, mounts `<App />` |
| `src/index.css` | Tailwind layers, global base styles, reusable classes (`.btn-primary`, `.card`, `.container-x`…), focus rings, reduced-motion support |
| `src/App.jsx` | Page composition — stacks every section in display order |
| `src/data/siteData.js` | **All website copy** — company info, nav, services, advantages, process, stats, FAQs. Edit content here, not in components |
| `src/components/Logo.jsx` | Renders the PNG logo (`lockup` for navbar/footer, `full` for the complete artwork) |
| `src/components/Icons.jsx` | Inline SVG icon set (`<Icon name="phone" />`) — zero dependencies |
| `src/components/Navbar.jsx` | Floating pill nav: scroll shadow, scroll-spy active link, mobile menu |
| `src/components/Hero.jsx` | Dark hero: generated constellation background, floating service chips, headline, CTAs, stats strip |
| `src/components/ServicePreviews.jsx` | The six mini illustrations inside the service cards (pure JSX/SVG) |
| `src/components/Services.jsx` | "Precision services" six-card grid |
| `src/components/Advantage.jsx` | "The Cretapex advantage" — inline team illustration + four interactive rows |
| `src/components/Process.jsx` | Five-step delivery timeline, revealed on scroll |
| `src/components/Faq.jsx` | Accessible accordion (one panel open at a time) |
| `src/components/Contact.jsx` | Contact details + validated enquiry form with success state |
| `src/components/Footer.jsx` | Four-column footer + legal bar |
| `src/components/BackToTop.jsx` | Floating scroll-to-top button |
| `public/cretapex-logo.png` | Logo lockup, background removed (transparent PNG) |
| `public/cretapex-mark.png` | The "CA" mark only — used in navbar/footer |
| `public/cretapex-logo-original.png` | Your original upload, untouched |
| `public/favicon.png` | Browser tab icon |

---

## 3. Colour theme (taken from the logo)

| Token | Hex | Where it comes from |
|---|---|---|
| `brand-500` | `#F26A1B` | the orange "C" |
| `brand-400` | `#FF8A2B` | the lighter top of the orange gradient |
| `brand-700` | `#C4500A` | hover / pressed state |
| `ink` | `#0D0D0D` | the black "A", arrow and wordmark |
| `sand` | `#FFF4EC` | soft orange tint for alternating sections |
| `ink-500` | `#5A5A5E` | the grey of the logo tagline |

Change any of these in `tailwind.config.js` and the whole site updates.

---

## 4. Contact details in use

- Phone: **01309584595** (`tel:+8801309584595`)
- Email: **info@cretapex.com**

Both live in `src/data/siteData.js` under `company` — change them once, everywhere updates.

---

## 5. Connecting the back-end later

The contact form in `src/components/Contact.jsx` currently simulates a send.
Look for the `// TODO (back-end)` comment inside `handleSubmit` and swap the
`setTimeout` for your API call:

```js
await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

Validation, error messages and the success screen are already wired up.

---

## 6. Quality notes

- Responsive from 360px up to wide desktop.
- Keyboard accessible: visible focus rings, real `<button>` elements, `aria-expanded` on the accordion and mobile menu.
- Respects `prefers-reduced-motion`.
- Semantic landmarks (`header`, `main`, `nav`, `footer`) for SEO and screen readers.
