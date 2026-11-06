import Icon from './Icons'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__kicker">02 - Toolkit</span>
          <h2 className="section__title">Skills &amp; technologies</h2>
          <p className="section__lead">
            The stack I reach for to deliver production-grade, cloud-native systems end to end.
          </p>
        </header>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <article className="skill-card reveal" key={group.title} style={{ '--i': i }}>
              <div className="skill-card__head">
                <span className="skill-card__icon">
                  <Icon name={group.icon} size={22} />
                </span>
                <h3>{group.title}</h3>
              </div>
              <ul className="skill-card__tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
