# Stack Research

**Domain:** Modern Next.js Portfolio Website (Static GitHub Pages Hosting)
**Researched:** 2026-11-10
**Confidence:** HIGH

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Next.js | 14.2.x | App Router & Static Site Generation (SSG) | Native `output: 'export'` generates pure HTML/CSS/JS for GitHub Pages without server dependencies |
| React | 18.3.x | UI Library | Rock-solid stability, full hydration support, wide ecosystem compatibility |
| Tailwind CSS | 3.4.x | Utility-First Styling System | Seamless palette tokenization (`#FFFBF1`, `#FFF2D0`, `#FFB2B2`, `#E36A6A`) and responsive layouts |
| TypeScript | 5.4.x | Type Safety & Developer Experience | Eliminates runtime prop bugs and enforces structured content schemas |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Framer Motion | 11.2.x | Declarative Animations & Micro-interactions | Page transitions, scroll-triggered reveals, floating badges, hover feedback |
| Lucide React | 0.380.x | Icon System | Clean, lightweight SVG icons for skills, nav items, contacts, and external links |
| Canvas-Confetti | 1.9.x | Celebratory Micro-interaction | Interactive feedback on contact form submission or Easter eggs |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| ESLint & Prettier | Code quality & formatting | Enforces standard React/Next.js syntax rules |
| GitHub Actions | Automated build & deploy | Automatically builds Next.js export and pushes to `gh-pages` branch or GitHub Pages root |

## Installation

```bash
# Core & Supporting
npm install next react react-dom framer-motion lucide-react clsx tailwind-merge

# Dev dependencies
npm install -D typescript @types/react @types/node @types/react-dom tailwindcss postcss autoprefixer
```

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| Next.js (SSG) | Vanilla HTML/CSS/JS | Only for trivial 1-page sites with no routing or state requirements |
| Next.js (SSG) | Astro | When content is 95%+ markdown with minimal dynamic client state; Next.js was explicitly chosen |
| Framer Motion | Pure CSS keyframes | Only for simple hover states; Framer Motion enables orchestrated exit/enter page transitions |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| Next.js Server Actions / API Routes | GitHub Pages is a static file host with no Node.js runtime | Client-side form handlers (`mailto:` / Formspree / Web3Forms) or static routing |
| `next/image` with default server optimization | Next.js server image optimization fails on static export | Configure `images: { unoptimized: true }` in `next.config.mjs` |
| Heavy 3D libraries (Three.js/Fiber) | High initial bundle weight and slow mobile battery drain | Lightweight SVG / CSS canvas / Framer Motion micro-animations |

---
*Stack research for: Modern Next.js Portfolio Website*
*Researched: 2026-11-10*

