import { useState } from 'react'
import Icon from './Icons'
import { profile } from '../data/content'

const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', 'bot-field': '' })
  const [status, setStatus] = useState('idle') // idle | sending | ok | error

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      })
      if (!res.ok) throw new Error('Network response was not ok')
      setStatus('ok')
      setForm({ name: '', email: '', subject: '', message: '', 'bot-field': '' })
    } catch (err) {
      setStatus('error')
    }
  }

  const items = [
    { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: 'linkedin', label: 'LinkedIn', value: 'in/sugyant', href: profile.linkedin },
    { icon: 'github', label: 'GitHub', value: 'sugyant82', href: profile.github },
  ]

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="cta reveal">
          <div className="cta__glow" aria-hidden="true" />
          <span className="section__kicker">06 — Contact</span>
          <h2 className="cta__title">
            Let&rsquo;s build something <span className="grad">reliable</span> together.
          </h2>
          <p className="cta__lead">
            Open to senior engineering roles and interesting problems. Send a note below and it lands
            straight in my inbox &mdash; I usually reply within a day.
          </p>

          <form
            className="form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={onSubmit}
          >
            {/* Netlify form plumbing */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="form__hp">
              <label>
                Don&rsquo;t fill this out if you&rsquo;re human:
                <input name="bot-field" value={form['bot-field']} onChange={onChange} tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="form__row form__row--split">
              <div className="form__field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required placeholder="Your name" value={form.name} onChange={onChange} />
              </div>
              <div className="form__field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@company.com" value={form.email} onChange={onChange} />
              </div>
            </div>

            <div className="form__row">
              <div className="form__field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" required placeholder="What&rsquo;s this about?" value={form.subject} onChange={onChange} />
              </div>
            </div>

            <div className="form__row">
              <div className="form__field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required placeholder="Tell me a little about the role or project…" value={form.message} onChange={onChange} />
              </div>
            </div>

            <div className="form__submit">
              <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
                <Icon name="mail" size={18} />
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </div>

            {status === 'ok' && (
              <p className="form__status form__status--ok" role="status">
                Thanks &mdash; your message is on its way. I&rsquo;ll get back to you shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="form__status form__status--err" role="alert">
                Something went wrong sending the form. Please email me directly at {profile.email}.
              </p>
            )}
          </form>

          <div className="cta__actions">
            <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
              <Icon name="mail" size={18} /> Email me directly
            </a>
            <a className="btn btn--ghost" href={profile.coverLetter} download target="_blank" rel="noreferrer">
              <Icon name="download" size={18} /> Download cover letter
            </a>
          </div>

          <ul className="contact-grid">
            {items.map((it) => {
              const inner = (
                <>
                  <span className="contact-grid__icon">
                    <Icon name={it.icon} size={20} />
                  </span>
                  <span className="contact-grid__text">
                    <small>{it.label}</small>
                    <strong>{it.value}</strong>
                  </span>
                </>
              )
              return (
                <li key={it.label}>
                  {it.href ? (
                    <a href={it.href} target={it.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                      {inner}
                    </a>
                  ) : (
                    <div>{inner}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
