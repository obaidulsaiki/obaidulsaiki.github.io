# Requirements: Modern Portfolio Website (`obaidulsaiki.github.io`)

**Defined:** 2026-11-10
**Core Value:** Deliver an unforgettable, lightning-fast personal showcase across 7 dedicated sections that highlights technical skills, research, and career achievements with seamless micro-animations.

## v1 Requirements

### Foundation & Design System

- [x] **FOUND-01**: Initialize Next.js 14+ with App Router, TypeScript, and Tailwind CSS.
- [x] **FOUND-02**: Enforce 4-color design tokens: `#FFFBF1` (Canvas), `#FFF2D0` (Surface), `#FFB2B2` (Soft Accent), `#E36A6A` (Primary Accent).
- [x] **FOUND-03**: Configure `output: 'export'` and `images: { unoptimized: true }` for pure static GitHub Pages deployment.
- [x] **FOUND-04**: Implement Framer Motion page entrance choreography and smooth view transitions.

### Navigation & Layout

- [x] **NAV-01**: Sticky responsive glassmorphic navbar displaying all 7 routes: Home, Education, Experience, Research, Extracurricular, Hobby, Contact.
- [x] **NAV-02**: Active link indicators with `#E36A6A` accent highlights and subtle hover physics.
- [x] **NAV-03**: Mobile-responsive hamburger navigation drawer with animated drawer reveal.

### Home & Skills Showcase

- [x] **HOME-01**: Hero presentation featuring profile picture, candidate name, headline, and quick action buttons.
- [x] **HOME-02**: "About Me" section delivering an engaging career summary and academic trajectory.
- [x] **HOME-03**: Categorized skills matrix (Frontend, Backend, AI/ML, Cloud/DevOps, Programming Languages).
- [x] **HOME-04**: Interactive skill cards/pills featuring official technology icons, proficiency tags, and hover elevation.

### Education & Experience

- [ ] **CRED-01**: Dedicated `/education` route with chronological degrees, institutions, GPA/honors, and coursework.
- [ ] **CRED-02**: Animated timeline nodes connecting educational achievements.
- [ ] **CRED-03**: Dedicated `/experience` route with career positions, dates, employers, and bulleted contributions.
- [ ] **CRED-04**: Technology tags attached to each job entry with quantifiable achievement badges.

### Research & Extracurricular

- [ ] **SCHOLAR-01**: Dedicated `/research` route displaying publications, preprints, patents, and technical reports.
- [ ] **SCHOLAR-02**: Research cards with paper titles, author lists, publication venues, abstract summaries, and links (PDF/DOI/arXiv).
- [ ] **SCHOLAR-03**: One-click BibTeX copy modal/interaction for published works.
- [ ] **SCHOLAR-04**: Dedicated `/extracurricular` route detailing leadership, community projects, hackathons, and clubs.

### Hobbies & Contact

- [ ] **ENGAGE-01**: Dedicated `/hobby` route featuring personal passions, creative pursuits, and curated interest cards.
- [ ] **ENGAGE-02**: Dedicated `/contact` route with interactive communication cards and direct email dispatch.
- [ ] **ENGAGE-03**: Click-to-copy email functionality with toast feedback and animated confirmation.
- [ ] **ENGAGE-04**: Social media connect hub (GitHub, LinkedIn, Google Scholar, X/Twitter) with outbound hover physics.

### Deployment & Reliability

- [ ] **DEPLOY-01**: Clean `npm run build` producing zero TypeScript or ESLint errors.
- [ ] **DEPLOY-02**: Static `out/` export verification with `trailingSlash: true` and `out/404.html` SPA routing safety.
- [ ] **DEPLOY-03**: Verification that CodeRabbit reviews and Gravitas invariants pass prior to shipping.

## v2 Requirements

### Extended Interactivity

- **V2-01**: Dark/Light mode theme toggle preserving the warm aesthetic.
- **V2-02**: Dynamic blog/articles engine with markdown rendering.
- **V2-03**: Interactive 3D research visualization widgets.

## Out of Scope

| Feature | Reason |
|---------|--------|
| Server-Side Database (PostgreSQL/MongoDB) | GitHub Pages only supports static assets; all data is managed via clean typed TypeScript stores |
| Dynamic Node.js API Routes | Incompatible with static GitHub Pages hosting |
| Dark Neon Cyberpunk Theme | Explicitly superseded by user's artisanal warm palette (#FFFBF1, #FFF2D0, #FFB2B2, #E36A6A) |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 | Phase 1 | Complete |
| FOUND-02 | Phase 1 | Complete |
| FOUND-03 | Phase 1 | Complete |
| FOUND-04 | Phase 1 | Complete |
| NAV-01 | Phase 1 | Complete |
| NAV-02 | Phase 1 | Complete |
| NAV-03 | Phase 1 | Complete |
| HOME-01 | Phase 2 | Complete |
| HOME-02 | Phase 2 | Complete |
| HOME-03 | Phase 2 | Complete |
| HOME-04 | Phase 2 | Complete |
| CRED-01 | Phase 3 | Pending |
| CRED-02 | Phase 3 | Pending |
| CRED-03 | Phase 3 | Pending |
| CRED-04 | Phase 3 | Pending |
| SCHOLAR-01 | Phase 4 | Pending |
| SCHOLAR-02 | Phase 4 | Pending |
| SCHOLAR-03 | Phase 4 | Pending |
| SCHOLAR-04 | Phase 4 | Pending |
| ENGAGE-01 | Phase 5 | Pending |
| ENGAGE-02 | Phase 5 | Pending |
| ENGAGE-03 | Phase 5 | Pending |
| ENGAGE-04 | Phase 5 | Pending |
| DEPLOY-01 | Phase 6 | Pending |
| DEPLOY-02 | Phase 6 | Pending |
| DEPLOY-03 | Phase 6 | Pending |

**Coverage:**
- v1 requirements: 23 total
- Mapped to phases: 23
- Unmapped: 0 ✓

---
*Requirements defined: 2026-11-10*
*Last updated: 2026-11-10 after initial definition*

