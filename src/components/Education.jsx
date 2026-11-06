import Icon from './Icons'
import { education, certifications, awards } from '../data/content'

export default function Education() {
  return (
    <section className="section section--alt" id="education">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__kicker">04 - Credentials</span>
          <h2 className="section__title">Education, certifications &amp; awards</h2>
        </header>

        <div className="creds">
          <div className="creds__col reveal">
            <h3 className="creds__heading">
              <Icon name="cap" size={20} /> Education
            </h3>
            <ul className="creds__list">
              {education.map((e) => (
                <li className="creds__edu" key={e.title}>
                  {e.logo && (
                    <span className="creds__edu-logo">
                      <img src={e.logo} alt={`${e.org} logo`} loading="lazy" />
                    </span>
                  )}
                  <div>
                    <p className="creds__title">{e.title}</p>
                    <p className="creds__org">{e.org}</p>
                    <span className="creds__period">{e.period}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="creds__col reveal">
            <h3 className="creds__heading">
              <Icon name="shield" size={20} /> Certifications
            </h3>
            <ul className="creds__list creds__list--plain">
              {certifications.map((c) => (
                <li key={c}>
                  <Icon name="check" size={16} /> {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="creds__col reveal">
            <h3 className="creds__heading">
              <Icon name="award" size={20} /> Awards
            </h3>
            <ul className="creds__list">
              {awards.map((a) => (
                <li key={a.title}>
                  <p className="creds__title">
                    {a.title} <span className="creds__year">{a.year}</span>
                  </p>
                  <p className="creds__org">{a.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
