/* ---------------------------------------------------------------------------
   src/components/Contact.jsx
   Enquiry section. Left: contact details. Right: validated form that POSTs
   to the real backend API (/api/contact). Design, colours and copy unchanged.
--------------------------------------------------------------------------- */
import React, { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import Icon from './Icons.jsx'
import { company, contactTopics } from '../data/siteData.js'

const emptyForm = { name: '', email: '', phone: '', topic: '', message: '' }

// In production (Vercel) this is same-origin. Locally, Vite proxies /api → backend.
const API_URL = import.meta.env.VITE_API_URL || '/api/contact'

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [serverError, setServerError] = useState('')

  /* Pre-select a service when the user arrives from a "Learn more" card */
  useEffect(() => {
    const handler = (e) => setForm((f) => ({ ...f, topic: e.detail }))
    window.addEventListener('cretapex:topic', handler)
    return () => window.removeEventListener('cretapex:topic', handler)
  }, [])

  const update = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Tell us who you are.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (form.message.trim().length < 10) next.message = 'A sentence or two about the project helps.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('sending')
    setServerError('')

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || undefined,
          topic: form.topic || undefined,
          message: form.message.trim(),
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(data.message || data.error || 'Something went wrong. Please try again.')
      }

      setStatus('sent')
      setForm(emptyForm)
    } catch (err) {
      setStatus('error')
      setServerError(err.message || 'Could not send message. Please try again or email us directly.')
    }
  }

  const details = [
    { icon: 'phone', label: 'Phone', value: company.phone, href: company.phoneHref },
    { icon: 'mail', label: 'Email', value: company.email, href: company.emailHref },
    { icon: 'pin', label: 'Location', value: company.address },
    { icon: 'clock', label: 'Office hours', value: company.hours },
  ]

  const inputClass = (field) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-300 transition focus:border-brand-500 focus:outline-none ${
      errors[field] ? 'border-red-400' : 'border-ink/10'
    }`

  return (
    <section id="contact" className="section-y bg-sand">
      <div className="container-x">
        <SectionHeading
          eyebrow="START HERE"
          title="Tell us what you're building"
          subtitle="Send the brief, or just the rough idea. You'll hear back from a real person within one working day."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* ---------- Left: contact details ---------- */}
          <div className="card flex flex-col gap-6 p-7">
            <div>
              <h3 className="text-lg font-semibold text-ink">Talk to Cretapex</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500">
                Prefer to skip the form? Call or email us directly — both reach the same team.
              </p>
            </div>

            <ul className="space-y-4">
              {details.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name={item.icon} className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-medium uppercase tracking-wide text-ink-300">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-semibold text-ink hover:text-brand-600">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-ink">{item.value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            {/* Social links */}
            <div className="mt-auto flex gap-2 pt-2">
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

          {/* ---------- Right: enquiry form ---------- */}
          <div className="card p-7">
            {status === 'sent' ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-500 text-white">
                  <Icon name="check" className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-ink">Message sent</h3>
                <p className="mt-2 max-w-sm text-sm text-ink-500">
                  Thanks — we have your brief. A Cretapex strategist will reply within one
                  working day, usually sooner.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-outline mt-6">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-ink">
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Your name"
                      className={inputClass('name')}
                      autoComplete="name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-ink">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="you@company.com"
                      className={inputClass('email')}
                      autoComplete="email"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-ink">
                      Phone <span className="font-normal text-ink-300">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder="+880 ..."
                      className={inputClass('phone')}
                      autoComplete="tel"
                    />
                  </div>

                  <div>
                    <label htmlFor="topic" className="mb-1.5 block text-xs font-semibold text-ink">
                      What do you need?
                    </label>
                    <select
                      id="topic"
                      value={form.topic}
                      onChange={update('topic')}
                      className={inputClass('topic')}
                    >
                      <option value="">Choose a service</option>
                      {contactTopics.map((topic) => (
                        <option key={topic} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-ink">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    value={form.message}
                    onChange={update('message')}
                    placeholder="What are you building, and when do you need it live?"
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                {status === 'error' && serverError && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {serverError}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary disabled:opacity-70"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send message'}
                    {status !== 'sending' && <Icon name="arrowRight" className="h-4 w-4" />}
                  </button>
                  <p className="text-xs text-ink-300">We reply within one working day.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
