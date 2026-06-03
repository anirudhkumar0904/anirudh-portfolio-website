# Anirudh Kumar R Portfolio

Production-ready portfolio for Anirudh Kumar R, built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, GSAP, shadcn-style UI primitives, and Vercel-first deployment defaults.

## Highlights

- Cinematic dark UI with animated neural canvas, dot-grid depth, grain, magnetic hover states, and scroll-triggered motion.
- Recruiter-first narrative: metrics, production systems, project proof, and direct contact actions.
- Premium interactions: loader, custom cursor, scroll progress, command palette with `Cmd/Ctrl + K`, count-up stats, project tilt, spotlight hover, expandable case studies, and `hire anirudh` easter egg.
- SEO-ready App Router metadata, OpenGraph image, sitemap, robots, accessible labels, keyboard navigation, and responsive layouts.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run verify
npm run build
npm run start
```

Set `NEXT_PUBLIC_SITE_URL` in Vercel to the deployed domain so sitemap and OpenGraph canonical URLs point to the live site.

## Resume

The resume is served from `/resume.pdf` and lives at `public/resume.pdf`.
