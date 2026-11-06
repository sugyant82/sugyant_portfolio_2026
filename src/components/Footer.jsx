import Icon from './Icons'
import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#top" className="footer__brand">
          <span className="nav__monogram">SC</span>
          <span>{profile.name}</span>
        </a>

        <p className="footer__note">
          Designed &amp; built with React. &copy; {new Date().getFullYear()} {profile.name}.
        </p>

        <div className="footer__social">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Icon name="linkedin" size={20} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Icon name="github" size={20} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Icon name="mail" size={20} />
          </a>
          <a href={profile.cv} target="_blank" rel="noreferrer" aria-label="Résumé">
            <Icon name="download" size={20} />
          </a>
          <a href={profile.coverLetter} download target="_blank" rel="noreferrer" aria-label="Cover letter">
            <Icon name="file" size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
