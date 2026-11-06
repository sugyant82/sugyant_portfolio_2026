# Sugyant Chettri — Portfolio

A sleek, mobile-first personal portfolio built with **React + Vite**. Dark, teal-accented
theme matching the CV brand, with a hero portrait, skills, an experience timeline with company
logos, education/certifications/awards, and a contact section. Fully responsive and accessible
(respects `prefers-reduced-motion`).

## Tech
- React 18 + Vite 5 (plain CSS, no UI framework — fast and dependency-light)
- Inline SVG icons, IntersectionObserver scroll reveals, CSS-only animations

## Local development
```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deploy to Netlify

### Option A — Git (recommended)
1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Netlify: **Add new site → Import an existing project** and pick the repo.
3. Netlify reads `netlify.toml` automatically:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy. Every push to the branch redeploys.

### Option B — Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option C — Drag & drop
Run `npm run build`, then drag the generated `dist/` folder onto
[app.netlify.com/drop](https://app.netlify.com/drop).

## Editing content
All text, skills, experience and links live in **`src/data/content.js`** — update that one file
to change the site. Images live in `src/assets/` and the downloadable PDFs in `public/`.

## Images
- `src/assets/hero.jpg` — hero portrait (square crop of your profile photo)
- `src/assets/about.jpg` — About section photo (wide portrait)
- `src/assets/logos/` — employer logos (IBM, Prudential, Southern Cross, ACI, BNZ, OCBC, UOB)

> Source-of-truth originals (full-resolution photos, CV/Cover Letter PDFs) remain in the repo root.
