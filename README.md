# SaaS Landing Page XG

A polished, light-themed SaaS landing page template built with Next.js
(originally generated with v0.app). A variant of the dark `saas-landing-page`
template, this one uses a clean light design with theme toggle support and a
full marketing layout: hero with social proof, features, testimonials, pricing,
FAQ, and calls to action ("No credit card", "Cancel anytime").

## Features

- **Hero section** — headline, CTAs, and "Trusted by innovative companies
  worldwide" social-proof strip
- **Theme toggle** — light/dark mode switch powered by next-themes
- **Features section** — "Everything You Need to Succeed" product grid
- **Testimonials** — customer quotes
- **Pricing section** — tiered plans with "No credit card / Cancel anytime"
  messaging
- **FAQ** — Radix accordion
- **Sticky navbar** — responsive with mobile menu toggle
- **Fully responsive** — mobile, tablet, and desktop layouts

## Tech Stack

- [Next.js](https://nextjs.org) 14 (App Router, static export)
- [React](https://react.dev) 18
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) 3 + tailwindcss-animate
- [Radix UI](https://www.radix-ui.com) (accordion, tabs)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [next-themes](https://github.com/pacocoursey/next-themes) — theming
- [lucide-react](https://lucide.dev) — icons

## Quick Start

### Prerequisites

- Node.js 18 or later
- npm (or pnpm/yarn)

### Install and run

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

### Build for production

```bash
npm run build
npm start
```

The project is configured for static export (`output: "export"`), so
`npm run build` produces a fully static site in the `out/` directory that can
be hosted on any static host (GitHub Pages, Cloudflare Pages, Netlify, Vercel).

## Project Structure

```
app/
  page.tsx            # Home page — all marketing sections
  layout.tsx          # Root layout, theme provider, fonts
  globals.css         # Tailwind + global styles
components/
  ui/                 # shadcn/ui-style primitives
  <sections>          # Hero, features, pricing, FAQ, footer components
lib/
  utils.ts            # cn() class-name helper
public/               # Static assets
tailwind.config.js    # Tailwind theme config
next.config.mjs       # Static export + basePath config
```

## Environment Variables

None required. The template runs entirely client-side with no backend.

## Deployment

This repo is deployed as a static site on **GitHub Pages**:

- Live URL: https://girishlade111.github.io/saas-landing-page-xg/
- Deployment: `output: "export"` static build pushed to the `gh-pages` branch.

Notes:

- `basePath` is set to `/saas-landing-page-xg` so assets resolve correctly under
  the GitHub Pages subpath. **Remove the `basePath` line from `next.config.mjs`
  if you deploy to a root domain (Vercel/Netlify/Cloudflare Pages root) — or set
  it to your own subpath.**
- `images.unoptimized` is enabled because static export has no image optimizer.
- Next.js was bumped to 14.2.33 (patched for CVE-2025-55182 / React2Shell and
  related vulnerabilities on the 14.x line).

## Customizing

- Edit `app/page.tsx` and the section components under `components/` to change
  copy and layout.
- Global styles and Tailwind tokens live in `app/globals.css` and
  `tailwind.config.js`.

---

Built by Girish Lade — https://ladestack.in
