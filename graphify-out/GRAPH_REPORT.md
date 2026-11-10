# Graph Report - obaidulsaiki.github.io  (2026-11-10)

## Corpus Check
- 117 files · ~73,378 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 4, .css 1)

## Summary
- 1154 nodes · 1324 edges · 81 communities (66 shown, 15 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 35 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dffa426b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- react
- json
- package.json
- Tool Orchestration
- Tool Orchestration
- Verification Chains (by Language)
- Verification Chains (by Language)
- Context Management
- Context Management
- The 20 Anti-Patterns
- Persona Protocol
- The 20 Anti-Patterns
- Persona Protocol
- GRAVITAS Prompt Template
- GRAVITAS Prompt Template
- Agent: General
- Agent: Verify
- Agent: General
- Agent: Verify
- The 7 Attack Vectors
- The 7 Attack Vectors
- Implications for Roadmap
- compilerOptions
- Model-Native Optimization Notes (Gemini tuned)
- Memory Protocol
- Model-Native Optimization Notes (Gemini tuned)
- Memory Protocol
- Agent: Plan
- Subagent Patterns
- Agent: Plan
- Subagent Patterns
- GRAVITAS -- Engineering Reliability Runtime
- v1 Requirements
- GRAVITAS -- Engineering Reliability Runtime
- Gravitas -- Verification Reference
- Modern Portfolio & Research Website (`Obaidul Haque`)
- Phase Details
- Gravitas -- Verification Reference
- Gravitas -- Interruption Recovery Reference
- .agents/skills/gravitas/scripts/verify.sh
- Project State
- Gravitas -- Interruption Recovery Reference
- .zoo/skills/gravitas/scripts/verify.sh
- Gravitas -- Delegation Reference
- Gravitas -- Task Contract Reference
- Gravitas -- Delegation Reference
- Gravitas -- Task Contract Reference
- Agent: Explore
- Stack Research
- Agent: Explore
- Gravitas -- Model Routing Reference
- Gravitas -- Adaptive Reasoning Reference
- Gravitas -- Reconnaissance Reference
- Common Pitfalls & Prevention Strategies
- Gravitas -- Model Routing Reference
- Gravitas -- Adaptive Reasoning Reference
- Gravitas -- Reconnaissance Reference
- Architecture Research
- Feature Research
- Plan Summary: 01-01 Next.js Foundation & Design Tokens
- Plan Summary: 01-02 Global Navigation & Multi-Page Stubs
- Plan Summary: 02-01 Hero & About Me Narrative
- Plan Summary: 02-02 Interactive Categorized Skills Showcase
- next.config.mjs
- postcss.config.mjs
- .agents/skills/gravitas/agents/coordinator.md
- .agents/skills/gravitas/scripts/run-checks.sh
- .agents/skills/gravitas/SESSION_FAILURES.md
- 01-CONTEXT.md
- 02-CONTEXT.md
- 03-CONTEXT.md
- .zoo/skills/gravitas/agents/coordinator.md
- .zoo/skills/gravitas/scripts/run-checks.sh
- .zoo/skills/gravitas/SESSION_FAILURES.md
- Research Paper list_995248d8.md
- extracurricular/page.tsx
- SkillCard.tsx

## God Nodes (most connected - your core abstractions)
1. `react` - 23 edges
2. `lucide-react` - 21 edges
3. `The 20 Anti-Patterns` - 21 edges
4. `The 20 Anti-Patterns` - 21 edges
5. `next` - 15 edges
6. `compilerOptions` - 15 edges
7. `framer-motion` - 14 edges
8. `Model-Native Optimization Notes (Gemini tuned)` - 13 edges
9. `Model-Native Optimization Notes (Gemini tuned)` - 13 edges
10. `GRAVITAS -- Engineering Reliability Runtime` - 13 edges

## Surprising Connections (you probably didn't know these)
- `HomePage()` --calls--> `FeaturedResearch()`  [EXTRACTED]
  src/app/page.tsx → src/components/home/FeaturedResearch.tsx
- `HomePage()` --calls--> `FeaturedProjects()`  [EXTRACTED]
  src/app/page.tsx → src/components/home/FeaturedProjects.tsx
- `SkillsShowcase()` --calls--> `SkillCard()`  [EXTRACTED]
  src/components/home/SkillsShowcase.tsx → src/components/home/SkillCard.tsx
- `Props` --references--> `ResearchPublication`  [EXTRACTED]
  src/components/research/PublicationCard.tsx → src/data/research.ts
- `SkillCardProps` --references--> `SkillItem`  [EXTRACTED]
  src/components/home/SkillCard.tsx → src/data/skills.ts

## Import Cycles
- None detected.

## Communities (81 total, 15 thin omitted)

### Community 0 - "react"
Cohesion: 0.06
Nodes (46): framer-motion, lucide-react, next, react, EducationPage(), ExperiencePage(), iconMap, metadata (+38 more)

### Community 1 - "json"
Cohesion: 0.09
Nodes (20): count_source_files(), detect_language(), main(), suggest_budget(), imported_plugin_names(), main(), sha256(), main() (+12 more)

### Community 2 - "package.json"
Cohesion: 0.07
Nodes (36): dependencies, clsx@^2.1.1, framer-motion@^11.11.9, lucide-react@^0.453.0, next@^14.2.15, react@^18.3.1, react-dom@^18.3.1, tailwind-merge@^2.5.4 (+28 more)

### Community 3 - "Tool Orchestration"
Cohesion: 0.06
Nodes (33): 1. Parallel by Default, 2. Tool Selection Hierarchy, 3. Never Retry Verbatim, 4. Confirm Before Destructive Actions, After implementation, After write, Always capture output, Always read before write (+25 more)

### Community 4 - "Tool Orchestration"
Cohesion: 0.06
Nodes (33): 1. Parallel by Default, 2. Tool Selection Hierarchy, 3. Never Retry Verbatim, 4. Confirm Before Destructive Actions, After implementation, After write, Always capture output, Always read before write (+25 more)

### Community 5 - "Verification Chains (by Language)"
Cohesion: 0.07
Nodes (27): Baseline (before implementation), C#, Edge Case Matrix, Evidence Format (cite verbatim), Evidence Requirements, Go, Issuing VERDICT: FAIL, Issuing VERDICT: PASS (+19 more)

### Community 6 - "Verification Chains (by Language)"
Cohesion: 0.07
Nodes (27): Baseline (before implementation), C#, Edge Case Matrix, Evidence Format (cite verbatim), Evidence Requirements, Go, Issuing VERDICT: FAIL, Issuing VERDICT: PASS (+19 more)

### Community 7 - "Context Management"
Cohesion: 0.08
Nodes (25): Context Budgeting, Context Hygiene Rules, Context Management, Context Structure (by Task Size), Cross-session continuity, Don't pass:, Large task (full codebase, 200K–1M tokens), Long Session Management (+17 more)

### Community 8 - "Context Management"
Cohesion: 0.08
Nodes (25): Context Budgeting, Context Hygiene Rules, Context Management, Context Structure (by Task Size), Cross-session continuity, Don't pass:, Large task (full codebase, 200K–1M tokens), Long Session Management (+17 more)

### Community 9 - "The 20 Anti-Patterns"
Cohesion: 0.08
Nodes (23): 10. Preamble Padding, 11. Over-scoping, 12. Quiet Workarounds, 13. Scope Narrowing Without Disclosure, 14. Post-hoc Rationalization, 15. False Precision, 16. Context Window Gaslighting, 17. Tool Trust Abuse (+15 more)

### Community 10 - "Persona Protocol"
Cohesion: 0.08
Nodes (23): After Tool Calls, Always open with:, Autonomous Operation Voice, Core Voice, Disagreement Protocol, Do, Don't, Examples (+15 more)

### Community 11 - "The 20 Anti-Patterns"
Cohesion: 0.08
Nodes (23): 10. Preamble Padding, 11. Over-scoping, 12. Quiet Workarounds, 13. Scope Narrowing Without Disclosure, 14. Post-hoc Rationalization, 15. False Precision, 16. Context Window Gaslighting, 17. Tool Trust Abuse (+15 more)

### Community 12 - "Persona Protocol"
Cohesion: 0.08
Nodes (23): After Tool Calls, Always open with:, Autonomous Operation Voice, Core Voice, Disagreement Protocol, Do, Don't, Examples (+15 more)

### Community 13 - "GRAVITAS Prompt Template"
Cohesion: 0.09
Nodes (21): Assembling the Full Prompt, Bug Fix, Example: Bug Fix Task, Explore Dispatch, Feature Addition, For a conditional subagent, For Long Sessions (after context compression), GRAVITAS Prompt Template (+13 more)

### Community 14 - "GRAVITAS Prompt Template"
Cohesion: 0.09
Nodes (21): Assembling the Full Prompt, Bug Fix, Example: Bug Fix Task, Explore Dispatch, Feature Addition, For a conditional subagent, For Long Sessions (after context compression), GRAVITAS Prompt Template (+13 more)

### Community 15 - "Agent: General"
Cohesion: 0.10
Nodes (20): Agent: General, Always run the full chain for the language, Before Writing Any Code, Cite verbatim, Code Standards, Compare to baseline, Don't over-engineer, Execution Protocol (+12 more)

### Community 16 - "Agent: Verify"
Cohesion: 0.10
Nodes (20): 1. Coverage check, 2. Test quality check, 3. Security spot-check (if auth/input/db code changed), Adversarial Test Review, Agent: Verify, Edge Case Matrix, Escalation, Full Verification Chain (+12 more)

### Community 17 - "Agent: General"
Cohesion: 0.10
Nodes (20): Agent: General, Always run the full chain for the language, Before Writing Any Code, Cite verbatim, Code Standards, Compare to baseline, Don't over-engineer, Execution Protocol (+12 more)

### Community 18 - "Agent: Verify"
Cohesion: 0.10
Nodes (20): 1. Coverage check, 2. Test quality check, 3. Security spot-check (if auth/input/db code changed), Adversarial Test Review, Agent: Verify, Edge Case Matrix, Escalation, Full Verification Chain (+12 more)

### Community 19 - "The 7 Attack Vectors"
Cohesion: 0.10
Nodes (19): Adversarial Critique Protocol, Auth Middleware Order, Common Failure Patterns (Historical), Critique Output Format, Critique Thresholds, DB Migration Without Transaction, Import Style Breaks Tree Shaking, Test Assertion Mismatch (+11 more)

### Community 20 - "The 7 Attack Vectors"
Cohesion: 0.10
Nodes (19): Adversarial Critique Protocol, Auth Middleware Order, Common Failure Patterns (Historical), Critique Output Format, Critique Thresholds, DB Migration Without Transaction, Import Style Breaks Tree Shaking, Test Assertion Mismatch (+11 more)

### Community 21 - "Implications for Roadmap"
Cohesion: 0.11
Nodes (17): Architecture Approach, Confidence Assessment, Critical Pitfalls, Executive Summary, Expected Features, Implications for Roadmap, Key Findings, Phase 1: Foundation, Design Tokens & Route Skeleton (+9 more)

### Community 22 - "compilerOptions"
Cohesion: 0.11
Nodes (17): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+9 more)

### Community 23 - "Model-Native Optimization Notes (Gemini tuned)"
Cohesion: 0.12
Nodes (16): 10. Integration with GRAVITAS Tiers, 11. Portability Notes (tuned on Gemini, re-validate elsewhere), 12. Anti-patterns for Gemini, 1. Adaptive Reasoning, 2. Outcome-First Prompting, 3. Few-Shot Examples — Gemini's Strongest Lever, 4. Markdown Structure Over XML, 5. Context Window — Large, But Use Wisely (+8 more)

### Community 24 - "Memory Protocol"
Cohesion: 0.12
Nodes (16): Before saving, Cross-Session Continuity Pattern, Don't save, `feedback` — What the user has corrected, Layer 1 — Session Memory (in-session, ephemeral), Layer 2 — Project Memory (cross-session, persistent), Memory Index — GRAVITAS_MEMORY.md, Memory Lifecycle (+8 more)

### Community 25 - "Model-Native Optimization Notes (Gemini tuned)"
Cohesion: 0.12
Nodes (16): 10. Integration with GRAVITAS Tiers, 11. Portability Notes (tuned on Gemini, re-validate elsewhere), 12. Anti-patterns for Gemini, 1. Adaptive Reasoning, 2. Outcome-First Prompting, 3. Few-Shot Examples — Gemini's Strongest Lever, 4. Markdown Structure Over XML, 5. Context Window — Large, But Use Wisely (+8 more)

### Community 26 - "Memory Protocol"
Cohesion: 0.12
Nodes (16): Before saving, Cross-Session Continuity Pattern, Don't save, `feedback` — What the user has corrected, Layer 1 — Session Memory (in-session, ephemeral), Layer 2 — Project Memory (cross-session, persistent), Memory Index — GRAVITAS_MEMORY.md, Memory Lifecycle (+8 more)

### Community 27 - "Agent: Plan"
Cohesion: 0.12
Nodes (15): Agent: Plan, Calibrated Reasoning Phase, Complexity Heuristics, Plan Agent Rules, Plan Templates, Planning Process, Step 1 — Absorb Everything Explore Found, Step 2 — Extended Research (for Tier 1+) (+7 more)

### Community 28 - "Subagent Patterns"
Cohesion: 0.12
Nodes (15): Agent Communication Rules, Anti-Patterns, Core Decision: Spawn or Act Directly?, Dispatching an Agent, Example Dispatch: Explore, Example Dispatch: General, Example Dispatch: Verify, Pattern 1: Sequential Pipeline (+7 more)

### Community 29 - "Agent: Plan"
Cohesion: 0.12
Nodes (15): Agent: Plan, Calibrated Reasoning Phase, Complexity Heuristics, Plan Agent Rules, Plan Templates, Planning Process, Step 1 — Absorb Everything Explore Found, Step 2 — Extended Research (for Tier 1+) (+7 more)

### Community 30 - "Subagent Patterns"
Cohesion: 0.12
Nodes (15): Agent Communication Rules, Anti-Patterns, Core Decision: Spawn or Act Directly?, Dispatching an Agent, Example Dispatch: Explore, Example Dispatch: General, Example Dispatch: Verify, Pattern 1: Sequential Pipeline (+7 more)

### Community 31 - "GRAVITAS -- Engineering Reliability Runtime"
Cohesion: 0.14
Nodes (13): DECISION RECORDS, DEEP REFERENCES, DELEGATION, EFFORT PROFILES, Evidence, GRAVITAS -- Engineering Reliability Runtime, MODES, OUTPUT FORMAT (+5 more)

### Community 32 - "v1 Requirements"
Cohesion: 0.14
Nodes (13): Deployment & Reliability, Education & Experience, Extended Interactivity, Foundation & Design System, Hobbies & Contact, Home & Skills Showcase, Navigation & Layout, Out of Scope (+5 more)

### Community 33 - "GRAVITAS -- Engineering Reliability Runtime"
Cohesion: 0.14
Nodes (13): DECISION RECORDS, DEEP REFERENCES, DELEGATION, EFFORT PROFILES, Evidence, GRAVITAS -- Engineering Reliability Runtime, MODES, OUTPUT FORMAT (+5 more)

### Community 34 - "Gravitas -- Verification Reference"
Cohesion: 0.17
Nodes (11): Adversarial Edge Cases (strict/security work), Completion Gating, Evidence Requirements by Claim, Gravitas -- Verification Reference, Regression Baseline, Reproduction-First Debugging, Requirement-Evidence States, Scope-Appropriate Verification (+3 more)

### Community 35 - "Modern Portfolio & Research Website (`Obaidul Haque`)"
Cohesion: 0.17
Nodes (11): Active, Constraints, Context, Core Value, Evolution, Key Decisions, Modern Portfolio & Research Website (`Obaidul Haque`), Out of Scope (+3 more)

### Community 36 - "Phase Details"
Cohesion: 0.17
Nodes (11): Overview, Phase 1: Foundation, Design Tokens & Navigation, Phase 2: Home Page & Interactive Skills Showcase, Phase 3: Education & Work Experience Timelines, Phase 4: Research Showcase & Extracurricular Leadership, Phase 5: Hobbies & Contact Hub, Phase 6: Verification, Static Build & GitHub Pages Deployment, Phase Details (+3 more)

### Community 37 - "Gravitas -- Verification Reference"
Cohesion: 0.17
Nodes (11): Adversarial Edge Cases (strict/security work), Completion Gating, Evidence Requirements by Claim, Gravitas -- Verification Reference, Regression Baseline, Reproduction-First Debugging, Requirement-Evidence States, Scope-Appropriate Verification (+3 more)

### Community 38 - "Gravitas -- Interruption Recovery Reference"
Cohesion: 0.18
Nodes (10): Anchor Upgrade (Backfill), Circuit Breaker, Evidence Ledger: .gravitas/sessions/<task-id>/evidence.jsonl, Failure Log: .gravitas/sessions/<task-id>/failures.jsonl, Gravitas -- Interruption Recovery Reference, Recovery Protocol, State File: .gravitas/sessions/<task-id>/state.json, The Problem (+2 more)

### Community 39 - ".agents/skills/gravitas/scripts/verify.sh"
Cohesion: 0.58
Nodes (10): log_fail(), log_info(), log_pass(), log_warn(), verify.sh script, detect_language(), verify_go(), verify_python() (+2 more)

### Community 40 - "Project State"
Cohesion: 0.18
Nodes (10): Accumulated Context, Blockers/Concerns, Current Position, Decisions, Deferred Items, Pending Todos, Performance Metrics, Project Reference (+2 more)

### Community 41 - "Gravitas -- Interruption Recovery Reference"
Cohesion: 0.18
Nodes (10): Anchor Upgrade (Backfill), Circuit Breaker, Evidence Ledger: .gravitas/sessions/<task-id>/evidence.jsonl, Failure Log: .gravitas/sessions/<task-id>/failures.jsonl, Gravitas -- Interruption Recovery Reference, Recovery Protocol, State File: .gravitas/sessions/<task-id>/state.json, The Problem (+2 more)

### Community 42 - ".zoo/skills/gravitas/scripts/verify.sh"
Cohesion: 0.58
Nodes (10): log_fail(), log_info(), log_pass(), log_warn(), verify.sh script, detect_language(), verify_go(), verify_python() (+2 more)

### Community 43 - "Gravitas -- Delegation Reference"
Cohesion: 0.20
Nodes (9): Budget Profiles and Delegation, Gravitas -- Delegation Reference, Impact Auditor, Investigator, Simple Task Rule, Spawn Decision Record, The Principle, Three Conditional Roles (+1 more)

### Community 44 - "Gravitas -- Task Contract Reference"
Cohesion: 0.20
Nodes (9): Acceptance Criteria, Action Lock, Allowed Write Scope, Gravitas -- Task Contract Reference, Interruption Recovery, Modes, Policy Dimensions, Schema (+1 more)

### Community 45 - "Gravitas -- Delegation Reference"
Cohesion: 0.20
Nodes (9): Budget Profiles and Delegation, Gravitas -- Delegation Reference, Impact Auditor, Investigator, Simple Task Rule, Spawn Decision Record, The Principle, Three Conditional Roles (+1 more)

### Community 46 - "Gravitas -- Task Contract Reference"
Cohesion: 0.20
Nodes (9): Acceptance Criteria, Action Lock, Allowed Write Scope, Gravitas -- Task Contract Reference, Interruption Recovery, Modes, Policy Dimensions, Schema (+1 more)

### Community 47 - "Agent: Explore"
Cohesion: 0.22
Nodes (8): Agent: Explore, Exploration Depth by Tier, Explore Rules, MANDATORY: Full Codebase Map Phase, Phase 2 — Target Deep Dive (parallel batch), Phase 3 — Dependency and Impact Analysis (parallel batch), Phase 4 — Critical Analysis, What to Report

### Community 48 - "Stack Research"
Cohesion: 0.22
Nodes (8): Alternatives Considered, Core Technologies, Development Tools, Installation, Recommended Stack, Stack Research, Supporting Libraries, What NOT to Use

### Community 49 - "Agent: Explore"
Cohesion: 0.22
Nodes (8): Agent: Explore, Exploration Depth by Tier, Explore Rules, MANDATORY: Full Codebase Map Phase, Phase 2 — Target Deep Dive (parallel batch), Phase 3 — Dependency and Impact Analysis (parallel batch), Phase 4 — Critical Analysis, What to Report

### Community 50 - "Gravitas -- Model Routing Reference"
Cohesion: 0.25
Nodes (7): Available Models in Antigravity (example snapshot, September 2026 -- verify), Conceptual Routing Policy, Gravitas -- Model Routing Reference, GravitasBench Will Measure This, Quota-Aware Routing, The Principle, When Native Antigravity Features Are Better

### Community 51 - "Gravitas -- Adaptive Reasoning Reference"
Cohesion: 0.25
Nodes (7): Gravitas -- Adaptive Reasoning Reference, Reasoning by Scenario, Reasoning Depth Formula, Red Flags for Over-Reasoning, Red Flags for Under-Reasoning, Selective CoT, The Core Principle

### Community 52 - "Gravitas -- Reconnaissance Reference"
Cohesion: 0.25
Nodes (7): Dependency-Directed Recon, Extended Recon (unfamiliar codebase or high fan-out), Gravitas -- Reconnaissance Reference, Recon Completeness Check, Recon Principle, Standard Recon (Tier 1 tasks), What Not to Do

### Community 53 - "Common Pitfalls & Prevention Strategies"
Cohesion: 0.25
Nodes (7): 1. GitHub Pages Routing 404 on Direct Subpage Refresh, 2. Broken Images with `next/image` in Static Export, 3. Hydration Mismatch with Framer Motion and SSR, 4. Color Contrast & Accessibility with Pastel Backgrounds, 5. Excessive Animation Lag on Mobile Devices, Common Pitfalls & Prevention Strategies, Pitfalls Research

### Community 54 - "Gravitas -- Model Routing Reference"
Cohesion: 0.25
Nodes (7): Available Models in Antigravity (example snapshot, September 2026 -- verify), Conceptual Routing Policy, Gravitas -- Model Routing Reference, GravitasBench Will Measure This, Quota-Aware Routing, The Principle, When Native Antigravity Features Are Better

### Community 55 - "Gravitas -- Adaptive Reasoning Reference"
Cohesion: 0.25
Nodes (7): Gravitas -- Adaptive Reasoning Reference, Reasoning by Scenario, Reasoning Depth Formula, Red Flags for Over-Reasoning, Red Flags for Under-Reasoning, Selective CoT, The Core Principle

### Community 56 - "Gravitas -- Reconnaissance Reference"
Cohesion: 0.25
Nodes (7): Dependency-Directed Recon, Extended Recon (unfamiliar codebase or high fan-out), Gravitas -- Reconnaissance Reference, Recon Completeness Check, Recon Principle, Standard Recon (Tier 1 tasks), What Not to Do

### Community 57 - "Architecture Research"
Cohesion: 0.40
Nodes (4): Architecture Research, Component & Route Architecture, Design Token System, Static Generation Pipeline for GitHub Pages

### Community 58 - "Feature Research"
Cohesion: 0.40
Nodes (4): Differentiating Features (Cool Animations & Polish), Feature Mapping by Route, Feature Research, Table Stakes Features

### Community 59 - "Plan Summary: 01-01 Next.js Foundation & Design Tokens"
Cohesion: 0.50
Nodes (3): Plan Summary: 01-01 Next.js Foundation & Design Tokens, Verification, What Was Built

### Community 60 - "Plan Summary: 01-02 Global Navigation & Multi-Page Stubs"
Cohesion: 0.50
Nodes (3): Plan Summary: 01-02 Global Navigation & Multi-Page Stubs, Verification Metrics, What Was Built

### Community 61 - "Plan Summary: 02-01 Hero & About Me Narrative"
Cohesion: 0.50
Nodes (3): Plan Summary: 02-01 Hero & About Me Narrative, Verification, What Was Built

### Community 62 - "Plan Summary: 02-02 Interactive Categorized Skills Showcase"
Cohesion: 0.50
Nodes (3): Plan Summary: 02-02 Interactive Categorized Skills Showcase, Verification Metrics, What Was Built

### Community 78 - "Research Paper list_995248d8.md"
Cohesion: 0.15
Nodes (12): Sheet: BECITHCON(IUBAT), Sheet: COMPASS(DU), Sheet: ICCA(AIUB), Sheet: ICCIT(cox bazar), Sheet: ICECE(BUET), Sheet: ICECTE(RUET), Sheet: ICONNECT(PU), Sheet: Journals (+4 more)

### Community 79 - "extracurricular/page.tsx"
Cohesion: 0.31
Nodes (6): ContestRanking, contestRankings, extracurricularActivities, ExtracurricularActivity, PlatformProfile, platformProfiles

### Community 80 - "SkillCard.tsx"
Cohesion: 0.09
Nodes (37): SkillCard(), SkillCardProps, techIconMap, BanglaBERTIcon(), CLangIcon(), CppIcon(), DockerIcon(), GitHubIcon() (+29 more)

## Knowledge Gaps
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `SkillCard.tsx`, `package.json`, `extracurricular/page.tsx`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.05707450444292549 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `react` to `SkillCard.tsx`, `package.json`, `extracurricular/page.tsx`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `json` be split into smaller, more focused modules?**
  _Cohesion score 0.08973172987974098 - nodes in this community are weakly interconnected._
- **Why does `framer-motion` connect `react` to `SkillCard.tsx`, `package.json`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.06685633001422475 - nodes in this community are weakly interconnected._
- **Should `Tool Orchestration` be split into smaller, more focused modules?**
  _Cohesion score 0.058823529411764705 - nodes in this community are weakly interconnected._