# Sugyant Chettri - Portfolio

A minimal, futuristic personal portfolio built with **React + Vite**. The design takes cues
from Tesla, SpaceX and Apple (white / silver / graphite, lots of whitespace, Space Grotesk
display type) with subtle Māori-inspired motifs (koru, niho taniwha) and te reo greetings,
reflecting a New Zealand base. Ships with a light and a dark theme.

Live sections: hero, about, skills, an experience timeline with company logos, education /
certifications / awards, a personal-projects showcase (from GitHub), and a contact section
with a working message form.

## Features

- **Light & dark mode** - toggle in the navbar, remembers your choice (`localStorage`), defaults
  to your system preference, and applies before first paint (no flash). You can also force a
  theme with a `?theme=dark` or `?theme=light` URL parameter.
- **Working contact form** - name / email / subject / message, submitted via
  [Netlify Forms](https://docs.netlify.com/forms/setup/) (see setup below).
- **Downloads** - résumé (navbar, hero, about, footer) and cover letter (contact section + footer).
- **Smooth motion** - scroll-in reveals plus a scroll-linked hero collapse, all disabled for
  visitors who prefer reduced motion.
- **Accessible & responsive** - mobile-first, keyboard-friendly nav, honours
  `prefers-reduced-motion` and `prefers-color-scheme`.

## Tech

- React 18 + Vite 5 (plain CSS with custom properties - no UI framework, dependency-light)
- Google Fonts: **Space Grotesk** (display) + **Inter** (body)
- Inline SVG icons, `IntersectionObserver` reveals, CSS scroll-driven animation, theme tokens

## Local development

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build locally
```

## Editing content

Almost everything is data-driven - update **`src/data/content.js`** to change text, skills,
experience, projects, education and links. Other locations:

| What | Where |
| --- | --- |
| Profile, summary, contact details, links | `src/data/content.js` (`profile`) |
| Skills, experience, projects, education, awards | `src/data/content.js` |
| Hero & about photos | `src/assets/hero.jpg`, `src/assets/about.jpg` |
| Company / education logos | `src/assets/logos/` |
| Downloadable PDFs (résumé, cover letter) | `public/` |
| Theme colours & styles | `src/index.css` (`:root` and `:root[data-theme="dark"]`) |

## Contact form (Netlify Forms)

The form posts to Netlify Forms. For it to work:

1. Deploy on **Netlify** (the hidden detection form in `index.html` is required and already present).
2. In the Netlify dashboard: **Forms -> "contact" -> Form notifications -> Add notification ->
   Email notification**, and set the recipient to **sugyant@gmail.com**.

Submissions are always captured in the Netlify dashboard; the email notification step is what
makes them land in your inbox. Outside Netlify the form falls back to a "email me directly" link.

## Deploy to Netlify

### Option A - Git (recommended)
1. Push this repo to GitHub (done: `sugyant82/sugyant_portfolio_2026`).
2. In Netlify: **Add new site -> Import an existing project** and pick the repo.
3. Netlify reads `netlify.toml` automatically:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy. Every push to `main` redeploys.

### Option B - Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option C - Drag & drop
Run `npm run build`, then drag the generated `dist/` folder onto
[app.netlify.com/drop](https://app.netlify.com/drop).

## Project structure

```
src/
  components/    Navbar, Hero, About, Skills, Experience, Projects,
                 Education, Contact, Footer, ThemeToggle, Icons
  data/content.js   single source of truth for all copy & links
  hooks/useReveal.js  scroll-reveal observer
  assets/        images + logos
  index.css      design system, themes, layout, motion
public/          favicon + downloadable PDFs
index.html       meta, fonts, pre-paint theme script, Netlify form stub
```

---

© Sugyant Chettri. Built with React. Ngā mihi for visiting.
