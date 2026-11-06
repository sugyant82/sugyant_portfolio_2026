import { experience, companies } from '../data/content'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__kicker">03 - Journey</span>
          <h2 className="section__title">Professional experience</h2>
          <p className="section__lead">
            15+ years across banking, insurance and healthcare in New Zealand and Singapore.
          </p>
        </header>

        <ol className="timeline">
          {experience.map((job) => (
            <li className="timeline__item reveal" key={job.company + job.period}>
              <span className="timeline__dot" aria-hidden="true" />
              <div className="timeline__card">
                <div className="timeline__top">
                  <span className="timeline__logo">
                    <img src={job.logo} alt={`${job.company} logo`} loading="lazy" />
                  </span>
                  <div className="timeline__meta">
                    <h3 className="timeline__role">{job.role}</h3>
                    <p className="timeline__company">
                      {job.company} <span>· {job.location}</span>
                    </p>
                  </div>
                  <span className={`timeline__period ${job.current ? 'is-current' : ''}`}>{job.period}</span>
                </div>
                <ul className="timeline__points">
                  {job.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="marquee reveal" aria-label="Companies I have worked with">
          <div className="marquee__track">
            {[...companies, ...companies].map((c, i) => (
              <span className="marquee__logo" key={c.name + i}>
                <img src={c.logo} alt={`${c.name} logo`} loading="lazy" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
