# Architecture Research

**Domain:** Modern Next.js Portfolio Architecture
**Researched:** 2026-11-10
**Confidence:** HIGH

## Component & Route Architecture

```
src/
├── app/
│   ├── layout.tsx             # Root layout with Header, Footer, and PageTransition wrapper
│   ├── page.tsx               # Home route (Hero, About, Skills Matrix)
│   ├── education/
│   │   └── page.tsx           # Academic timeline & credentials
│   ├── experience/
│   │   └── page.tsx           # Career experience timeline & accomplishments
│   ├── research/
│   │   └── page.tsx           # Publications, preprints, and research projects
│   ├── extracurricular/
│   │   └── page.tsx           # Leadership, community initiatives, hackathons
│   ├── hobby/
│   │   └── page.tsx           # Hobbies, creative interests, and personal pursuits
│   └── contact/
│       └── page.tsx           # Contact details, socials, and inquiry form
├── components/
│   ├── ui/                    # Reusable atomics (Button, Badge, Card, Tooltip)
│   ├── layout/                # Navbar, Footer, MobileNav
│   ├── home/                  # Hero, AboutSummary, SkillPill, SkillCategory
│   ├── timeline/              # TimelineItem, TimelineContainer
│   ├── research/              # PublicationCard, BibtexModal
│   └── animations/            # PageTransition, FadeIn, StaggerContainer
├── data/
│   ├── profile.ts             # Personal bio, taglines, social links, contact info
│   ├── skills.ts              # Categorized skills with icons and proficiency
│   ├── education.ts           # Degree data, institutions, dates, courses
│   ├── experience.ts          # Roles, employers, dates, accomplishments
│   ├── research.ts            # Papers, authors, venues, links, abstracts
│   ├── extracurricular.ts     # Activities, clubs, achievements
│   └── hobbies.ts             # Personal interests and highlights
└── styles/
    └── globals.css            # Tailwind directives, CSS variables for user color tokens
```

## Design Token System

The portfolio enforces the user's bespoke 4-color palette as CSS custom properties and Tailwind extensions:

```css
:root {
  --canvas-bg: #FFFBF1;       /* Primary page background */
  --surface-bg: #FFF2D0;      /* Card and container surface */
  --accent-soft: #FFB2B2;     /* Subtle border, pill background, hover glow */
  --accent-primary: #E36A6A;  /* Primary brand buttons, links, active tab indicator */
  --text-primary: #2D2424;    /* High-contrast readable charcoal text */
  --text-muted: #6B5B5B;      /* Secondary typography and metadata */
}
```

## Static Generation Pipeline for GitHub Pages

1. **`next.config.mjs` configuration:**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true },
     trailingSlash: true,
   };
   export default nextConfig;
   ```
2. **Build Output:**
   - `npm run build` outputs pure HTML/CSS/JS files into `out/`.
   - The contents of `out/` are deployed to GitHub Pages root or branch without requiring a Node.js runtime.

---
*Architecture research for: Modern Next.js Portfolio Website*
*Researched: 2026-11-10*

