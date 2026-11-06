import Icon from './Icons'
import { projects, profile } from '../data/content'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__kicker">05 - Showcase</span>
          <h2 className="section__title">Things I&rsquo;ve built</h2>
          <p className="section__lead">
            A few personal projects - full-stack apps and APIs I ship on the side, outside of client work.
          </p>
        </header>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <article className="project-card reveal" key={p.title} style={{ '--i': i }}>
              <div className="project-card__head">
                <span className="project-card__index">{String(i + 1).padStart(2, '0')}</span>
                <Icon name="code" size={20} />
              </div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__tagline">{p.tagline}</p>
              <p className="project-card__desc">{p.description}</p>

              <ul className="project-card__tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <div className="project-card__links">
                {p.demo && (
                  <a className="project-link project-link--demo" href={p.demo} target="_blank" rel="noreferrer">
                    Live demo <Icon name="external" size={15} />
                  </a>
                )}
                {p.links.map((l) => (
                  <a className="project-link" key={l.href} href={l.href} target="_blank" rel="noreferrer">
                    <Icon name="github" size={15} /> {l.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="projects-cta reveal">
          <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
            <Icon name="github" size={18} /> View all repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
