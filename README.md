# Obaidul Haque — Academic & AI Engineering Portfolio

Personal portfolio and academic research website of **Obaidul Haque**, AI Engineer and Researcher specializing in Medical Imaging & Computer Vision, Natural Language Processing, and Biomedical Signal Processing.

- **Live URL**: [https://obaidulhaque.me](https://obaidulhaque.me) (or [https://obaidulsaiki.github.io](https://obaidulsaiki.github.io))
- **Framework**: Next.js 14 (App Router) + React 18 + TypeScript + Tailwind CSS + Framer Motion
- **Deployment**: Static HTML export (`output: 'export'`) deployed to GitHub Pages via GitHub Actions

---

## Technical Skills & Expertise

The portfolio documents 35 specialized skills, models, languages, and frameworks categorized across 5 core domains from [`src/data/skills.ts`](file:///d:/Projects/obaidulsaiki.github.io/src/data/skills.ts):

### 1. AI, Models & Deep Learning Frameworks

| Skill / Tool | Domain Focus | Experience | Proficiency | Technical Description & Practical Application |
| :--- | :--- | :--- | :--- | :--- |
| **PyTorch** | Deep Learning | 2+ years | Advanced | Custom neural architectures, autograd computation graphs, and GPU-accelerated training pipelines. |
| **Mamba** | Selective State Space | Specialized | Specialist | Kernel-invariant continuous state-space modeling for dose-robust low-dose CT reconstruction. |
| **State Space Models (SSM)** | Sequence Modeling | Specialized | Specialist | Continuous-time discretization, structured state-space representations, and linear-time sequence learning. |
| **Hugging Face** | Transformers Hub | 2+ years | Advanced | Pretrained transformer fine-tuning, tokenization, sequence classification, and model hub deployment. |
| **BanglaBERT** | Bengali Linguistic AI | Specialized | Specialist | Bengali language representations, subword tokenizers, aspect-based sentiment, and semantic pairs. |
| **OpenCV** | Computer Vision | 2+ years | Advanced | Medical scan preprocessing, morphological filtering, spatial augmentations, and visual feature extraction. |
| **Torchvision** | Vision Datasets | 2+ years | Advanced | Deep learning image datasets, model backbones, transforms, and bounding-box augmentations. |
| **SciPy** | Digital Signal DSP | Specialized | Specialist | ECG and EEG digital signal filtering, continuous wavelet transforms, and spectral density extraction. |
| **Grad-CAM** | Model Explainability | Specialized | Specialist | Gradient-weighted class activation mapping, clinical feature attribution, and beat-level saliency heatmaps. |
| **LangChain4j** | LLM Orchestration | Production | Advanced | Java LLM integration, prompt engineering, RAG pipelines, and conversational learning assistants. |
| **Ollama** | Local LLM Serving | Production | Advanced | Self-hosted local model execution, GGUF quantization, and lightweight edge inference. |
| **TensorFlow** | Deep Learning | 2+ years | Proficient | Convolutional neural networks, transfer learning, data pipelines, and evaluation metrics. |
| **Keras** | Neural Networks API | 2+ years | Proficient | High-level neural network prototyping, sequential models, and custom callbacks. |
| **Scikit-Learn** | Machine Learning | 2+ years | Advanced | Stacking ensembles, gradient boosting, statistical feature selection, and cross-validation pipelines. |
| **NumPy** | Vectorized Math | 3+ years | Advanced | Vectorized tensor operations, multidimensional arrays, and numerical linear algebra. |
| **Pandas** | Data Analysis | 3+ years | Advanced | Tabular dataset processing, feature engineering, missing-value imputation, and aggregation. |

### 2. Programming Languages

| Language | Category | Experience | Proficiency | Technical Description & Application |
| :--- | :--- | :--- | :--- | :--- |
| **Python** | Language | 3+ years | Advanced | Primary language for deep learning research, numerical processing, and automated experimentation. |
| **C++** | Language | 3+ years | Advanced | High-performance computing, STL algorithms, memory allocation, and algorithmic problem solving. |
| **Java** | Language | 3+ years | Advanced | Enterprise backend development, multi-threaded systems, OOP patterns, and Spring Boot services. |
| **TypeScript** | Language | 2+ years | Advanced | Type-safe contracts, compile-time validation, and scalable full-stack web application development. |
| **JavaScript (ES6+)** | Language | 3+ years | Advanced | Asynchronous event loops, DOM manipulation, promises, and modern client-side architectures. |
| **C Programming** | Language | 3+ years | Advanced | Low-level procedural programming, manual memory management (pointers/malloc), and systems fundamentals. |
| **SQL** | Language | 3+ years | Advanced | Relational data modeling, query optimization, indexing strategies, normalization, and ACID safety. |

### 3. Backend & Enterprise Engineering

| Technology | Category | Experience | Proficiency | Technical Description & Application |
| :--- | :--- | :--- | :--- | :--- |
| **Spring Boot** | Enterprise Framework | 3+ years | Advanced | Production backend architecture, Spring Security, JPA/Hibernate, stateless JWT, and REST microservices. |
| **PostgreSQL** | Relational Database | 2+ years | Proficient | ACID-compliant relational database management, schema normalization, and complex querying. |
| **MySQL** | Relational Database | 2+ years | Proficient | Relational data persistence, foreign key modeling, stored procedures, and service integration. |
| **REST APIs** | Architecture | 3+ years | Advanced | Stateless HTTP endpoint design, JWT authorization filters, structured DTOs, and error handling. |

### 4. Frontend & Web Technologies

| Technology | Category | Experience | Proficiency | Technical Description & Application |
| :--- | :--- | :--- | :--- | :--- |
| **React.js** | Frontend Library | 3+ years | Advanced | Component-driven user interfaces, custom React hooks, state management, and performance tuning. |
| **Next.js** | React Framework | 2+ years | Advanced | App Router, Static Site Generation (SSG) for GitHub Pages, and client/server boundary segregation. |
| **Tailwind CSS** | CSS Framework | 2+ years | Advanced | Artisanal color token systems, mobile-first responsive layouts, and modern utility typography. |
| **Framer Motion** | Animation Library | 2+ years | Proficient | Spring physics micro-interactions, layout morphing, staggered reveals, and route transitions. |

### 5. DevOps, Infrastructure & Tools

| Tool / OS | Category | Experience | Proficiency | Technical Description & Application |
| :--- | :--- | :--- | :--- | :--- |
| **Git** | Version Control | 4+ years | Advanced | Version control, atomic commits, branch management, pull requests, and collaborative workflows. |
| **GitHub** | Code Hosting & CI/CD | 4+ years | Advanced | Repository hosting, GitHub Actions CI/CD automation, pull request code review, and project management. |
| **Linux** | Operating System | 3+ years | Advanced | Unix environment, bash scripting, process management, and GPU driver setup for ML workflows. |
| **Docker** | Containerization | 1+ years | Proficient | Containerized deployment for reproducible model inference and backend microservices. |

---

### Skills Component Architecture

The portfolio's interactive skills showcase is implemented via:
- **Data Source** ([`src/data/skills.ts`](file:///d:/Projects/obaidulsaiki.github.io/src/data/skills.ts)): Defines the `SkillItem` interface, color palettes, and full skill registry.
- **Brand SVG Icons** ([`src/components/icons/TechIcons.tsx`](file:///d:/Projects/obaidulsaiki.github.io/src/components/icons/TechIcons.tsx)): Custom branded vector icons for each technology (PyTorch, Mamba, BanglaBERT, Spring, Docker, etc.).
- **Interactive Filtering** ([`src/components/animations/MotionPrimitives.tsx`](file:///d:/Projects/obaidulsaiki.github.io/src/components/animations/MotionPrimitives.tsx)): `SlidingFilterTabs` with magnetic hover pills and animated active pills.
- **Modular Cards** ([`src/components/home/SkillCard.tsx`](file:///d:/Projects/obaidulsaiki.github.io/src/components/home/SkillCard.tsx)): Displays individual skills with experience pills, proficiency badges, icon color coding, and hover elevation.

---

## Portfolio Website Tech Stack

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js | `^14.2.15` | App Router, static site generation (`output: 'export'`) |
| **UI Library** | React | `^18.3.1` | Component-driven architecture |
| **Language** | TypeScript | `^5.6.3` | End-to-end type safety |
| **Styling** | Tailwind CSS | `^3.4.14` | Warm aesthetic design tokens (`canvas`, `surface`, `accent`, `ink`) |
| **Animations** | Framer Motion | `^11.11.9` | Magnetic springs, route transitions, sliding filter pills |
| **Icons** | Lucide React | `^0.453.0` | Vector icon system |
| **CI / CD** | GitHub Actions | `deploy.yml` | Automated build, static export, and GitHub Pages deployment |

---

## Technical Details: Setting Up the Project Locally

### 1. Prerequisites

Ensure the following tools are installed on your machine:
- **Node.js**: `v20.x` or later (tested on `v20` and `v22.14.0`)
- **npm**: `v10.x` or later (or `pnpm` / `yarn`)
- **Git**: Installed and configured

### 2. Clone Repository

```bash
git clone https://github.com/obaidulsaiki/obaidulsaiki.github.io.git
cd obaidulsaiki.github.io
```

### 3. Install Dependencies

Install the locked dependencies cleanly:

```bash
npm ci
# or if installing for the first time:
npm install
```

### 4. Run Development Server

Start the local development server:

```bash
npm run dev
```

Open your browser at [http://localhost:3000](http://localhost:3000) to view the live site with hot module reloading.

### 5. Type Checking & Verification

Run the TypeScript compiler in no-emit mode to verify all type contracts:

```bash
npx tsc --noEmit
```

Run ESLint to inspect code quality:

```bash
npm run lint
```

### 6. Production Static Build & Export

To generate the static HTML/CSS/JS export in the `./out` directory:

```bash
# Optional: clean existing build artifacts
npm run clean

# Build and export
npm run build
```

This compiles all routes (`/`, `/education/`, `/experience/`, `/research/`, `/extracurricular/`, `/hobby/`, `/contact/`, `/_not-found`) into standalone static HTML and client JS bundles inside `./out/`.

---

## Available NPM Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| `npm run dev` | `next dev` | Starts local Next.js development server on port 3000 |
| `npm run build` | `next build` | Runs type checks, linter, and static HTML export to `./out` |
| `npm run start` | `next start` | Starts Next.js production server (used for Node SSR, not static export) |
| `npm run clean` | `node -e "..."` | Deletes `.next` and `out` build directories |
| `npm run lint` | `next lint` | Executes ESLint validation across project files |

---

## Codebase Architecture & Directory Structure

```
obaidulsaiki.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── images/
│   │   └── MyPicture.png       # Profile portrait asset
│   ├── .nojekyll               # Disables Jekyll processing on GitHub Pages
│   └── CNAME                   # Custom domain pointer (obaidulhaque.me)
├── src/
│   ├── app/                    # Next.js App Router routes
│   │   ├── contact/page.tsx    # Contact dispatch, social links & direct WhatsApp
│   │   ├── education/page.tsx  # Timeline, CGPA 3.89, coursework & transcript
│   │   ├── experience/page.tsx # Full Stack AI Developer & Frontend roles
│   │   ├── extracurricular/page.tsx # Competitive programming & leadership
│   │   ├── hobby/page.tsx      # Acoustic soundscapes, street photography, chess
│   │   ├── research/page.tsx   # 40+ papers, DOI links, publication filters
│   │   ├── layout.tsx          # Root HTML layout with Navbar & Footer
│   │   ├── not-found.tsx       # 404 custom error page
│   │   └── page.tsx            # Home page (Hero, About Me, Spotlight, Skills)
│   ├── components/
│   │   ├── animations/
│   │   │   ├── MotionPrimitives.tsx # MagneticPull, SlidingFilterTabs, Spring presets
│   │   │   └── PageTransition.tsx   # Smooth route change transition
│   │   ├── home/
│   │   │   ├── AboutMe.tsx          # 1-row layout (Bio paragraph + 2x2 focus grid)
│   │   │   ├── FeaturedProjects.tsx # Engineering systems (EduMaster, Tracker)
│   │   │   ├── FeaturedResearch.tsx # Top 3 paper spotlight
│   │   │   ├── Hero.tsx             # Main header, portrait & 3 highlight cards
│   │   │   ├── SkillCard.tsx        # Colored icon cards with hover borders
│   │   │   └── SkillsShowcase.tsx   # Categorized interactive skills filter
│   │   ├── icons/
│   │   │   └── TechIcons.tsx        # Custom SVG brand icons (PyTorch, Mamba, etc.)
│   │   ├── layout/
│   │   │   ├── Footer.tsx           # Global footer with copyright & quick links
│   │   │   └── Navbar.tsx           # Sticky nav with gliding magnetic pill
│   │   ├── research/
│   │   │   └── PublicationCard.tsx  # Interactive paper card (Abstract, BibTeX)
│   │   └── timeline/
│   │       ├── EducationTimeline.tsx # IUBAT degree milestones & coursework tabs
│   │       └── ExperienceTimeline.tsx # Industry work milestones
│   └── data/
│       ├── education.ts         # Degree specs, semesters, grades, and courses
│       ├── experience.ts        # Saask Task & AKS Global roles, featured apps
│       ├── extracurricular.ts   # Codeforces/LeetCode metrics, leadership roles
│       ├── hobbies.ts           # Acoustic tracks, street photography galleries
│       ├── profile.ts           # Core profile data, bio, stats, and socials
│       ├── research.ts          # 40+ publications, DOI links, publication stats
│       └── skills.ts            # Detailed skill taxonomy, brand colors, icons
├── next.config.mjs              # Next.js static export config (output: 'export')
├── tailwind.config.ts           # Color tokens, shadows, font configurations
├── tsconfig.json                # TypeScript compiler configuration
├── .gitignore                   # Excludes node_modules, .next, out, and AI tooling
└── package.json                 # Project dependencies and script definitions
```

---

## Deployment Setup (GitHub Pages)

The portfolio is deployed to **GitHub Pages** using **GitHub Actions**.

### How Automated Deployment Works

1. Any push to the `main` branch triggers `.github/workflows/deploy.yml`.
2. The workflow checks out the repository on an `ubuntu-latest` runner.
3. Node.js `20` is configured with npm caching.
4. `npm ci` installs exact lockfile dependencies.
5. `npm run build` runs Next.js static compilation into `./out/`.
6. `actions/upload-pages-artifact@v3` packages `./out/`.
7. `actions/deploy-pages@v4` publishes the artifact to GitHub Pages.

### Reconfiguring Deployment on a New Repository

If you ever fork or re-create this repository on GitHub:

1. Push the code to GitHub (`git push -u origin main`).
2. Go to your repository on GitHub.
3. Click **Settings** (top navigation tab) → **Pages** (left sidebar under *Code and automation*).
4. Under **Build and deployment** → **Source**, select **GitHub Actions**.
5. Under **Custom domain**, enter `obaidulhaque.me` (or your domain).
6. Ensure **Enforce HTTPS** is checked.
7. Under DNS management for your domain provider (e.g., Cloudflare, Namecheap):
   - **Apex domain (`@`)**: Add 4 `A` records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **Subdomain (`www`)**: Add a `CNAME` record pointing to `obaidulsaiki.github.io`.

---

## Author & Contact

**Obaidul Haque**
- AI Engineer and Researcher
- B.Sc. in Computer Science & Engineering, IUBAT (CGPA 3.89 / 4.00)
- **Website**: [https://obaidulhaque.me](https://obaidulhaque.me)
- **GitHub**: [github.com/obaidulsaiki](https://github.com/obaidulsaiki)
- **LinkedIn**: [linkedin.com/in/obaidul-haque47](https://www.linkedin.com/in/obaidul-haque47/)
