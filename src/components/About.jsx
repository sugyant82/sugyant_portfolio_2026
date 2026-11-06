import Icon from './Icons'
import { about, profile } from '../data/content'
import aboutImg from '../assets/about.jpg'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__kicker">01 - About</span>
          <h2 className="section__title">A full stack engineer who ships with care</h2>
        </header>

        <div className="about">
          <div className="about__media reveal">
            <div className="about__frame">
              <img src={aboutImg} alt="Sugyant Chettri" width="520" height="520" loading="lazy" />
            </div>
            <div className="about__card">
              <Icon name="pin" size={18} />
              <div>
                <strong>Based in Auckland</strong>
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          <div className="about__body reveal">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <ul className="about__highlights">
              {about.highlights.map((h) => (
                <li key={h}>
                  <Icon name="check" size={16} /> {h}
                </li>
              ))}
            </ul>

            <div className="about__links">
              <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                <Icon name="linkedin" size={18} /> LinkedIn
              </a>
              <a className="btn btn--ghost" href={profile.cv} target="_blank" rel="noreferrer">
                <Icon name="download" size={18} /> Résumé
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
