# Roadmap: Modern Portfolio Website (`obaidulsaiki.github.io`)

## Overview

Build and deploy a modern, animated, multi-page personal portfolio for Obaidul Saiki using Next.js, Tailwind CSS, and Framer Motion with an artisanal 4-color palette (#FFFBF1, #FFF2D0, #FFB2B2, #E36A6A). The roadmap progresses from core foundational infrastructure and global navigation through all 7 dedicated sections to full static export verification on GitHub Pages.

## Phases

- [x] **Phase 1: Foundation, Design Tokens & Navigation** - Next.js App Router scaffold, Tailwind palette tokens, static export config, responsive glassmorphism navbar, and 7 route stubs with motion transitions.
- [ ] **Phase 2: Home Page & Interactive Skills Showcase** - Hero introduction, profile portrait integration, career narrative, and categorized interactive skills matrix with icons.
- [ ] **Phase 3: Education & Work Experience Timelines** - Animated chronological timelines for academic degrees and professional career history.
- [ ] **Phase 4: Research Showcase & Extracurricular Leadership** - Academic publication cards with BibTeX copy support and extracurricular initiatives showcase.
- [ ] **Phase 5: Hobbies & Contact Hub** - Curated visual hobby cards, interactive contact options, and one-click email copying.
- [ ] **Phase 6: Verification, Static Build & GitHub Pages Deployment** - Static export generation (`out/`), 404 routing fallback, CodeRabbit audit, and GitHub Pages production verification.

## Phase Details

### Phase 1: Foundation, Design Tokens & Navigation
**Goal**: Establish Next.js App Router project configured for static export, apply the 4-color palette tokens, set up shared layouts with responsive navbar/footer, and stub all 7 routes with Framer Motion transitions.
**Depends on**: Nothing (initial phase)
**Requirements**: FOUND-01, FOUND-02, FOUND-03, FOUND-04, NAV-01, NAV-02, NAV-03
**Success Criteria**:
  1. Next.js App Router builds cleanly with `output: 'export'` and `trailingSlash: true`.
  2. Palette tokens `#FFFBF1`, `#FFF2D0`, `#FFB2B2`, `#E36A6A` render accurately in layout and navigation.
  3. Responsive navbar allows fluid navigation across all 7 routes on both desktop and mobile viewports.
**Plans**: 2 plans

Plans:
- [x] 01-01: Next.js project initialization, Tailwind palette tokenization, and static build configuration.
- [x] 01-02: Glassmorphic responsive navbar, footer, motion transition wrapper, and 7 route stubs.

### Phase 2: Home Page & Interactive Skills Showcase
**Goal**: Build the hero presentation, profile picture display, "About Me" summary, and categorized skills matrix with technology icons.
**Depends on**: Phase 1
**Requirements**: HOME-01, HOME-02, HOME-03, HOME-04
**Success Criteria**:
  1. Hero section displays candidate headline, profile image, and immediate action buttons.
  2. "About Me" narrative communicates career journey with crisp, readable typography.
  3. Skills matrix categorizes technologies (Languages, Frontend, Backend, AI/ML, DevOps) with hover animations and icons.
**Plans**: 2 plans

Plans:
- [ ] 02-01: Hero presentation, profile photo integration, and About Me career narrative.
- [ ] 02-02: Interactive categorized skills matrix with hover elevation, tooltips, and SVG icons.

### Phase 3: Education & Work Experience Timelines
**Goal**: Create dedicated animated chronological timelines for educational background and career history.
**Depends on**: Phase 2
**Requirements**: CRED-01, CRED-02, CRED-03, CRED-04
**Success Criteria**:
  1. `/education` route presents degrees, institutions, and coursework in an animated timeline.
  2. `/experience` route highlights professional roles, impact metrics, and technology badges.
  3. Content seamlessly scales across mobile and desktop without visual stutter.
**Plans**: 2 plans

Plans:
- [ ] 03-01: Education timeline component with academic credentials and coursework badges.
- [ ] 03-02: Work experience timeline with role descriptions, achievements, and tech stack tags.

### Phase 4: Research Showcase & Extracurricular Leadership
**Goal**: Build the `/research` publication showcase and `/extracurricular` community leadership page.
**Depends on**: Phase 3
**Requirements**: SCHOLAR-01, SCHOLAR-02, SCHOLAR-03, SCHOLAR-04
**Success Criteria**:
  1. `/research` route displays publications with abstracts, PDF/arXiv links, and BibTeX citation copy.
  2. `/extracurricular` highlights student clubs, leadership initiatives, and hackathons.
**Plans**: 2 plans

Plans:
- [ ] 04-01: Research publication cards, paper links, and BibTeX citation modal.
- [ ] 04-02: Extracurricular activities layout with leadership cards and photo/badge assets.

### Phase 5: Hobbies & Contact Hub
**Goal**: Implement the personal `/hobby` route and interactive `/contact` hub.
**Depends on**: Phase 4
**Requirements**: ENGAGE-01, ENGAGE-02, ENGAGE-03, ENGAGE-04
**Success Criteria**:
  1. `/hobby` route presents a visual masonry/grid of personal interests and creative pursuits.
  2. `/contact` route provides one-click email copying with animated toast feedback and direct social links.
**Plans**: 2 plans

Plans:
- [ ] 05-01: Personal hobbies and interests visual showcase.
- [ ] 05-02: Interactive contact hub, one-click email copy, and social network links.

### Phase 6: Verification, Static Build & GitHub Pages Deployment
**Goal**: Perform end-to-end static export build, 404 routing verification, CodeRabbit code review audit, and production deployment check.
**Depends on**: Phase 5
**Requirements**: DEPLOY-01, DEPLOY-02, DEPLOY-03
**Success Criteria**:
  1. `npm run build` generates static `out/` directory with `0.0000` errors.
  2. All 7 routes resolve without 404 errors on direct refresh.
  3. CodeRabbit review passes with zero critical/major defects.
**Plans**: 1 plan

Plans:
- [ ] 06-01: End-to-end static export verification, 404 fallback generation, and deployment audit.

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5 → 6

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation, Design Tokens & Navigation | 2/2 | Complete | 2026-11-10 |
| 2. Home Page & Skills Showcase | 0/2 | Not started | - |
| 3. Education & Work Experience | 0/2 | Not started | - |
| 4. Research & Extracurricular | 0/2 | Not started | - |
| 5. Hobbies & Contact Hub | 0/2 | Not started | - |
| 6. Verification & Deployment | 0/1 | Not started | - |

