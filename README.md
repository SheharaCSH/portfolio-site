# Chamudi Hennayaka — React Portfolio

Personal portfolio website built for COMP229 (Web Application Development), Assignment 1.

**Live site:** https://sheharaportfolio-site.vercel.app/
**Repository:** https://github.com/SheharaCSH/portfolio-site

## Pages

- **Home** — welcome message, mission statement, and links to About and Projects
- **About Me** — legal name, headshot, short bio, and a link to my PDF resume
- **Projects** — Echo Fridge, AI Study Buddy, and PlanPilot, each with an image, role, description, and tech tags
- **Education** — qualifications with dates and credentials
- **Services** — services I offer
- **Contact** — contact details panel and a message form (captures the input and redirects to Home)

The site also has a responsive navigation bar and a custom SVG logo (hexagon with my initials).

## Tech stack

- React 18
- React Router 6 (client-side routing)
- Vite 5 (dev server and build tool)
- Plain CSS (design tokens in `src/index.css`)
- Hosted on Vercel, deployed from the `main` branch

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```
public/        Headshot, resume PDF, favicon, project images, SPA redirect files
src/
  components/  Navbar, Logo, Footer
  pages/       Home, About, Projects, Education, Services, Contact
  data/        content.js — all site text and project/education data
  App.jsx      Routes and shared layout
  main.jsx     App entry point
  index.css    Global styles and design tokens
```

Almost all site content lives in `src/data/content.js`, so text and project
details can be updated in one place without touching the page components.

## Notes

- The contact form currently logs the submission to the console and redirects
  to the Home page. It does not send email yet; a service such as Formspree or
  EmailJS could be connected later.
- `vercel.json` and `public/_redirects` make page refreshes on routes like
  `/about` work on Vercel and Netlify.
- The project images in `public/projects/` are placeholder graphics.
