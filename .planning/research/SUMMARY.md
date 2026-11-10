# Project Research Summary

**Project:** Modern Portfolio Website (`obaidulsaiki.github.io`)
**Domain:** Personal Portfolio & Academic Showcase (Next.js SSG on GitHub Pages)
**Researched:** 2026-11-10
**Confidence:** HIGH

## Executive Summary

The project is a high-craft, multi-page personal portfolio website for Obaidul Saiki, hosted via GitHub Pages at `obaidulsaiki.github.io`. The aesthetic departs from dark neon paradigms in favor of an artisanal 4-color palette: Soft Cream (`#FFFBF1`), Warm Custard (`#FFF2D0`), Peach Coral (`#FFB2B2`), and Terracotta Crimson (`#E36A6A`). The architecture utilizes Next.js with App Router and static export (`output: 'export'`) to guarantee high-performance, serverless GitHub Pages hosting.

To satisfy user expectations for "cool animations", the frontend couples Tailwind CSS utility design tokens with Framer Motion entrance choreographies, subtle card hover elevations, and interactive floating skill badges. The multi-page route structure encompasses 7 distinct pages: Home (`/`), Education (`/education`), Work Experience (`/experience`), Research (`/research`), Extracurricular Activities (`/extracurricular`), Hobby (`/hobby`), and Contact (`/contact`).

Key implementation risks center around static site routing pitfalls (e.g. 404s on direct URL refreshes without `trailingSlash: true` or 404 fallbacks) and unoptimized image handling in Next.js static exports. These risks are resolved upfront via deterministic build configuration.

## Key Findings

### Recommended Stack

- **Next.js 14+ (App Router)**: Configured for static HTML/CSS export (`output: 'export'`) compatible with GitHub Pages.
- **Tailwind CSS**: Strict custom theme mapping to `#FFFBF1`, `#FFF2D0`, `#FFB2B2`, `#E36A6A`.
- **Framer Motion**: Orchestrated page transitions, stagger reveal effects, and floating skill badges.
- **Lucide React**: Clean SVG icon system across technology pills and navigation.

### Expected Features

**Must have (table stakes):**
- Sticky responsive glassmorphism navigation across all 7 routes with active tab indicators.
- Home page with profile picture, career summary ("About Me"), and interactive categorized skills matrix.
- Dedicated pages for Education, Work Experience, Research publications, Extracurricular activities, Hobbies, and Contact.
- Zero broken routes on direct refresh on GitHub Pages.

**Should have (competitive differentiators):**
- Coordinated Framer Motion route transitions.
- Interactive BibTeX citation copy and direct DOI/PDF badges on the Research page.
- One-click copy email card and interactive inquiry dispatcher on Contact.

### Architecture Approach

A clean modular Next.js directory structure separating route views under `src/app/`, reusable atomics under `src/components/ui/`, section-specific components under `src/components/`, and strongly typed content under `src/data/`. All personal bio, career history, skills, and publications are isolated into clean TypeScript data stores to enable instant future updates.

### Critical Pitfalls

1. **GitHub Pages 404 on Subpage Refresh**: Prevented by setting `trailingSlash: true` in `next.config.mjs` and generating `out/404.html`.
2. **`next/image` Static Export Failure**: Prevented by configuring `images: { unoptimized: true }`.
3. **Hydration Mismatch with Motion**: Prevented by using client-only motion wrappers with `"use client"`.

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Foundation, Design Tokens & Route Skeleton
**Delivers:** Next.js project setup with static export, Tailwind palette configuration (`#FFFBF1`, `#FFF2D0`, `#FFB2B2`, `#E36A6A`), global layout, responsive navbar, footer, and 7 stubbed routes with smooth page transitions.

### Phase 2: Home Page (Hero, Career Summary & Skills Showcase)
**Delivers:** Hero section with portrait (`MyPicture.png`), About Me summary, and interactive skills matrix with categorized technology icons and subtle hover animations.

### Phase 3: Credentials & Career (Education & Work Experience)
**Delivers:** Dedicated `/education` and `/experience` pages with animated vertical milestones, company badges, and quantifiable impact metrics.

### Phase 4: Academic & Community Impact (Research & Extracurricular)
**Delivers:** Dedicated `/research` page with publication cards, abstracts, and citation copy tools; dedicated `/extracurricular` page with leadership and initiative highlights.

### Phase 5: Personal Touch & Interaction (Hobby & Contact)
**Delivers:** Dedicated `/hobby` visual interest grid; `/contact` page with interactive cards, email copy feedback, and social links.

### Phase 6: Verification, Static Build & GitHub Pages Deployment
**Delivers:** Full responsive audit across desktop and mobile, static export build verification (`out/`), 404 routing safety, and GitHub Pages readiness.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Next.js SSG + Tailwind + Framer Motion is industry standard for high-performance portfolios |
| Features | HIGH | Explicit user requirements mapped 1:1 across 7 dedicated routes |
| Architecture | HIGH | Verified clean separation between presentation, animation, and data |
| Pitfalls | HIGH | Identified GitHub Pages static export traps and documented exact fixes |

**Overall confidence:** HIGH

## Sources

### Primary (HIGH confidence)
- Official Next.js Static Exports Documentation (`output: 'export'`)
- Framer Motion documentation on layout transitions
- GitHub Pages SPA routing specifications

---
*Research completed: 2026-11-10*
*Ready for roadmap: yes*

