import Icon from './Icons'
import { profile, stats } from '../data/content'
import heroImg from '../assets/hero.jpg'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__glow hero__glow--1" />
        <span className="hero__glow hero__glow--2" />
        <span className="hero__grid" />
        <svg className="hero__koru" viewBox="0 0 220 220" fill="none" aria-hidden="true">
          <path
            d="M16 110a94 94 0 1 1 94 94 58 58 0 1 1-58-58 28 28 0 1 1 28 28"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container hero__inner">
        <div className="hero__content reveal">
          <p className="hero__eyebrow">
            <span className="hero__status" /> Nau mai · Senior Developer @ BNZ · Auckland
          </p>
          <h1 className="hero__title">
            Kia ora, I&rsquo;m {profile.firstName}. I build <span className="grad">secure, cloud-native</span> platforms.
          </h1>
          <p className="hero__role">
            {profile.role} <span className="hero__sep">·</span> {profile.tagline}
          </p>
          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">
              Get in touch <Icon name="arrow" size={18} />
            </a>
            <a className="btn btn--ghost" href={profile.cv} target="_blank" rel="noreferrer">
              <Icon name="download" size={18} /> Download CV
            </a>
          </div>

          <div className="hero__badges">
            {profile.badges.map((b) => (
              <span className="chip chip--outline" key={b}>
                <Icon name="check" size={14} /> {b}
              </span>
            ))}
          </div>
        </div>

        <div className="hero__portrait reveal">
          <div className="portrait">
            <span className="portrait__ring" aria-hidden="true" />
            <img src={heroImg} alt="Portrait of Sugyant Chettri" width="420" height="420" loading="eager" />
            <span className="portrait__badge">
              <strong>15+</strong>
              <span>years</span>
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <dl className="hero__stats reveal">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <dt className="stat__value grad">{s.value}</dt>
              <dd className="stat__label">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
