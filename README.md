# React Portfolio Site

A 6-page personal portfolio built with React, Vite, and React Router —
Home, About Me, Projects, Education, Services, and Contact.

## 1. Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## 2. Make it yours

Almost everything lives in **`src/data/content.js`**. Open that file and
replace every value marked `REPLACE:` — your name, tagline, bio, projects,
education history, services, and contact info.

For images and your resume:

1. Add your headshot to `public/` (e.g. `public/headshot.jpg`) and set
   `headshotSrc: "/headshot.jpg"` in `content.js`.
2. Add project screenshots to `public/projects/` and set each project's
   `imageSrc` accordingly.
3. Add your resume PDF to `public/resume.pdf` and set
   `resumeSrc: "/resume.pdf"`.

The logo is a hand-drawn SVG hexagon with your initials
(`src/components/Logo.jsx`) — update `profile.initials` in `content.js`
to change it, or edit the SVG directly for something more custom.

The contact form (`src/pages/Contact.jsx`) currently logs the submission
to the console and redirects to Home. To make it fully functional, replace
the `console.log` in `handleSubmit` with a real request (e.g. to
Formspree, EmailJS, or your own backend endpoint).

> Note: the images in `public/projects/` are generated placeholder graphics.
> Replace them with real screenshots (same filenames, or update `imageSrc`).
> `public/_redirects` (Netlify) and `vercel.json` make page refreshes on
> routes like `/about` work on those hosts.

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: portfolio site scaffold"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Commit again after each meaningful change (adding real content, styling
passes, form wiring, etc.) so your history shows the project's progress —
that's part of what's being graded.

## 4. Deploy

**Netlify (drag-and-drop, easiest):**
```bash
npm run build
```
Then drag the generated `dist/` folder onto https://app.netlify.com/drop.

**Vercel:**
```bash
npm install -g vercel
vercel
```
Follow the prompts; Vercel auto-detects the Vite build settings.

**Render / Railway:** connect your GitHub repo in their dashboard, set
the build command to `npm run build` and the publish/output directory to
`dist`.

## Project structure

```
src/
  components/   Navbar, Logo, Footer
  pages/        Home, About, Projects, Education, Services, Contact
  data/         content.js — all editable site content in one place
```
