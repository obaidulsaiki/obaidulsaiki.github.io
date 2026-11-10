export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  organizationType: string;
  location: string;
  period: string;
  status: 'Current' | 'Completed';
  overview: string;
  achievements: string[];
  techStack: string[];
  highlightBadge?: string;
  projectUrl?: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  tech: string[];
  description: string;
  highlights: string[];
  githubUrl: string;
  stats: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'full-stack-ai-developer-saask-task',
    role: 'Full Stack AI Developer',
    organization: 'Saask Task',
    organizationType: 'SaaS & AI Integration',
    location: 'Remote, Canada',
    period: 'March 2026 – August 2026',
    status: 'Current',
    highlightBadge: 'AI SaaS & Full Stack',
    overview:
      'Engineered full-stack SaaS production applications utilizing TypeScript, React, Next.js, and Node.js, integrating enterprise AI and LLM workflows to deliver intelligent automation.',
    achievements: [
      'Developed responsive full-stack SaaS applications using TypeScript, React, Next.js, and Node.js with modern component architectures.',
      'Integrated existing AI/LLM services into application workflows to enable intelligent automation, context-aware reasoning, and AI-assisted user functionality.',
      'Designed and implemented high-performance RESTful APIs, optimizing payload delivery, caching layers, and database queries.',
      'Collaborated seamlessly with cross-functional distributed teams in Agile development cycles, managing Git-based version control and peer code reviews.',
    ],
    techStack: [
      'TypeScript',
      'Next.js',
      'React',
      'Node.js',
      'AI/LLM Integration',
      'REST APIs',
      'Git',
      'Agile',
      'Docker',
    ],
  },
  {
    id: 'frontend-developer-intern-aks-global',
    role: 'Frontend Developer Intern',
    organization: 'AKS Global IT Services',
    organizationType: 'Software Development Firm',
    location: 'Dhaka, Bangladesh',
    period: 'October 2025 – January 2026',
    status: 'Completed',
    highlightBadge: 'Frontend Engineering',
    overview:
      'Engineered interactive, accessible frontend interfaces with React.js, integrating RESTful microservices and translating design mockups into pixel-perfect user experiences.',
    achievements: [
      'Developed responsive, accessible, and reusable UI components using React.js, JavaScript (ES6+), HTML5, and modern CSS3.',
      'Integrated RESTful APIs to connect interactive client-side interfaces with backend data layers and business logic.',
      'Partnered closely with backend engineers and UI/UX designers to implement customer-driven features and elevate overall application usability.',
      'Participated actively in daily Agile standups, code reviews, and Git-based collaborative workflows.',
    ],
    techStack: [
      'React.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'REST API Integration',
      'Git',
      'Responsive Design',
      'Agile',
    ],
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'edumaster-lms',
    title: 'EduMaster',
    subtitle: 'AI-Assisted Learning Management System',
    period: 'January 2026',
    tech: ['Spring Boot', 'React', 'PostgreSQL', 'LangChain4j', 'Ollama', 'JWT', 'WebSockets'],
    stats: '104 REST APIs · IUBAT Practicum Board',
    description:
      'Production-grade full-stack LMS developed with Spring Boot, React, and PostgreSQL, showcased and defended before the IUBAT Practicum Board in January 2026. Integrates local LLM intelligence via LangChain4j and Ollama for automated context-aware learning assistance, course Q&A, and personalized career roadmaps.',
    highlights: [
      'Showcased and defended before the Practicum Board at IUBAT (College of Engineering and Technology) in January 2026.',
      'Engineered 104 secure REST API endpoints with role-based access control (RBAC), stateless JWT authentication, and OTP verification.',
      'Embedded conversational course mentors using LangChain4j and Ollama for zero-cost, localized AI interactions.',
      'Built real-time interactive learning modules with WebSockets, dynamic payment workflows, and automated PDF certificate/invoice generation.',
    ],
    githubUrl: 'https://github.com/obaidulsaiki/EduMaster-LearningManagementSystem/',
  },
  {
    id: 'research-tracker',
    title: 'Research Tracker',
    subtitle: 'Academic Research Management & Analytics Platform',
    period: '2024 – 2025',
    tech: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'PostgreSQL', 'Electron'],
    stats: '32 REST API Endpoints',
    description:
      'Cross-platform desktop & web platform for managing academic research lifecycles. Automates metadata ingestion, co-author intelligence, and paper tracking with DOI-based OpenAlex integration.',
    highlights: [
      'Engineered 32 REST APIs with automated duplicate detection, diff-based paper version tracking, and audit logging.',
      'Integrated OpenAlex API for automatic DOI citation and metadata retrieval.',
      'Built multi-format export engines (CSV, Excel, PDF), automated database backup routines, and conference deadline countdown analytics.',
    ],
    githubUrl: 'https://github.com/obaidulsaiki/research-tracker/',
  },
];
