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
  githubUrl?: string;
  stats: string;
  isProprietary?: boolean;
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
      'Engineered full-stack SaaS production architectures for the SAASk platform, building an intelligent real-time AI Voice Assistant pipeline and fine-tuning domain-specific LLM architectures to deliver intelligent enterprise workflow automation.',
    achievements: [
      'Engineered core enterprise SaaS modules for the SAASk platform utilizing TypeScript, React, Next.js, and Node.js with modern component architectures.',
      'Developed and integrated an intelligent AI Voice Assistant featuring speech-to-text transcription, context-aware reasoning, and low-latency audio response streaming.',
      'Conducted domain-specific LLM tuning, optimizing system prompts, context-window embeddings, and inference parameters to maximize SaaS workflow precision.',
      'Designed and implemented high-performance RESTful APIs and WebSocket streaming channels, optimizing payload delivery, caching layers, and database queries.',
      'Collaborated seamlessly across distributed cross-functional teams in Agile development cycles, managing Git-based version control and peer code reviews.',
    ],
    techStack: [
      'TypeScript',
      'Next.js',
      'React',
      'Node.js',
      'AI Voice Assistant',
      'LLM Tuning',
      'REST APIs',
      'WebSockets',
      'Docker',
      'Git',
      'Agile',
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
    id: 'saask-ai-platform',
    title: 'SAASk Project',
    subtitle: 'Enterprise AI SaaS Platform with Voice Assistant & LLM Tuning',
    period: 'March 2026 – August 2026',
    tech: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Voice Assistant', 'LLM Tuning', 'REST APIs', 'WebSockets', 'Docker'],
    stats: 'Production SaaS · Voice AI & LLM Engine',
    isProprietary: true,
    description:
      'Enterprise-grade full-stack SaaS platform engineered during my engagement at Saask Task. Featured an intelligent real-time AI Voice Assistant pipeline and fine-tuned domain-specific Large Language Models (LLMs) to automate context-aware workflows, audio reasoning, and interactive user operations.',
    highlights: [
      'Engineered an end-to-end AI Voice Assistant integrating speech-to-text recognition, contextual reasoning, and low-latency synthesized audio response playback.',
      'Conducted domain-specific LLM tuning, optimizing system prompts, contextual embeddings, and inference parameters to maximize SaaS workflow execution accuracy.',
      'Architected scalable backend microservices and secure RESTful APIs with Node.js and TypeScript, handling high-concurrency client sessions with minimal latency.',
      'Built responsive, accessible UI modules in Next.js and React with live WebSocket streaming for instantaneous voice and text interactions.',
    ],
  },
  {
    id: 'store-management-pc',
    title: 'Store Management Software',
    subtitle: 'Retail ERP & Inventory Management PC Desktop Application',
    period: '2025',
    tech: ['Java Swing', 'React.js', 'AngularJS', 'REST APIs', 'Desktop GUI', 'PostgreSQL / MySQL', 'Event-Driven Architecture'],
    stats: 'Desktop & Web Hybrid ERP',
    isProprietary: true,
    description:
      'Production-ready retail and inventory management desktop application built with Java Swing for robust on-premise store operations, coupled with modern web management dashboards developed with React.js and AngularJS for remote administration and analytics.',
    highlights: [
      'Developed a high-performance offline-first desktop POS and inventory management GUI using Java Swing with multi-threaded data caching.',
      'Engineered web-based administrative analytics and inventory monitoring portals using React.js and AngularJS, interfacing with backend service APIs.',
      'Automated real-time stock reconciliation, invoice/receipt generation, barcode integration, and transaction audit trails across retail counters.',
      'Optimized relational database queries and schema designs to ensure sub-millisecond barcode lookups and reliable transaction rollbacks.',
    ],
  },
];
