# Modern Portfolio Website (`obaidulsaiki.github.io`)

## What This Is

A modern, highly polished multi-page personal portfolio website for Obaidul Saiki, hosted on GitHub Pages. It features interactive animations, fluid page routing, and an artisanal color palette (#FFFBF1, #FFF2D0, #FFB2B2, #E36A6A) that balances warm minimalism with technical elegance.

## Core Value

Deliver an unforgettable, lightning-fast personal showcase across 7 dedicated sections that highlights technical skills, research, and career achievements with seamless micro-animations.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Next.js multi-page architecture with static HTML/CSS export configured for GitHub Pages (`output: 'export'`)
- [ ] Warm artisanal design system adhering strictly to user palette: `#FFFBF1` (Canvas), `#FFF2D0` (Surface), `#FFB2B2` (Soft Accent), `#E36A6A` (Primary Accent)
- [ ] Home Page (`/`): Hero with profile picture, career summary ("About Me"), and interactive skills showcase with categorized technology icons
- [ ] Education Page (`/education`): Academic background, degrees, coursework, and milestones with timeline animations
- [ ] Work Experience Page (`/experience`): Professional career history, roles, key contributions, and impact metrics
- [ ] Research Page (`/research`): Academic papers, preprints, research projects, methodologies, and publication links
- [ ] Extracurricular Page (`/extracurricular`): Leadership roles, clubs, community involvement, and hackathons
- [ ] Hobby Page (`/hobby`): Personal interests, creative pursuits, and passions beyond code
- [ ] Contact Page (`/contact`): Interactive contact cards, email trigger, social connections (GitHub, LinkedIn, Twitter/X), and message dispatch
- [ ] Smooth page transitions, micro-interactions, responsive navigation bar, and accessible typography

### Out of Scope

- Dynamic server-side rendering (SSR) backend database — Static site generation (SSG) is required for GitHub Pages (`github.io`) deployment
- Unrelated legacy dark-neon styling — Explicitly replaced by the warm 4-tone palette (#FFFBF1, #FFF2D0, #FFB2B2, #E36A6A)

## Context

- Workspace: `d:\Projects\obaidulsaiki.github.io`
- Domain: `obaidulsaiki.github.io` (with custom domain support e.g. `obaidulhaque.me` if configured via CNAME)
- Agent Tooling & Reliability: Gravitas runtime enabled globally (`udaysharmadev/Gravitas`), Zoo Code skills mirrored in `.zoo/skills`, and CodeRabbit plugin active for code review.

## Constraints

- **Tech Stack**: Next.js (React), Tailwind CSS / Vanilla CSS, Framer Motion, TypeScript / JavaScript
- **Hosting**: GitHub Pages static deployment (`next export` / `output: 'export'`, `unoptimized` images)
- **Palette**: `#FFFBF1`, `#FFF2D0`, `#FFB2B2`, `#E36A6A` strictly applied as design tokens
- **Performance**: 100.0000% client-side responsive, zero hydration mismatch, lightweight asset footprint

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js Static Export (`output: 'export'`) | Required for zero-config GitHub Pages hosting on `obaidulsaiki.github.io` | — Pending |
| Multi-Page Route Structure (7 Routes) | Provides dedicated URL space for Home, Education, Experience, Research, Extracurricular, Hobby, Contact | — Pending |
| Framer Motion & Tailwind CSS | Delivers smooth micro-interactions, entrance choreography, and fluid card transitions | — Pending |
| 4-Tone Warm Palette Tokenization | Enforces cohesive aesthetic consistency across all components | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-11-10 after initialization*
