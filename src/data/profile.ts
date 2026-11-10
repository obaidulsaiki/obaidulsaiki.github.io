export interface ProfileData {
  name: string;
  fullName: string;
  title: string;
  specialization: string;
  tagline: string;
  location: string;
  status: string;
  university: string;
  universityShort: string;
  bioParagraphs: string[];
  stats: {
    label: string;
    value: string;
    detail: string;
  }[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
    website: string;
  };
}

export const profileData: ProfileData = {
  name: 'Obaidul Haque',
  fullName: 'Obaidul Haque',
  title: 'AI Engineer & Researcher',
  specialization: 'Computer Vision · NLP · Signal Processing',
  tagline: 'Specializing in Computer Vision, Natural Language Processing, and Signal Processing—grounded in robust Java/Spring Boot backend systems and modern JavaScript frontends.',
  location: 'Dhaka, Bangladesh',
  status: 'Open to AI Engineering & Research Roles',
  university: 'International University of Business Agriculture and Technology (IUBAT)',
  universityShort: 'IUBAT',
  bioParagraphs: [
    "I am an AI Engineer and Researcher specializing in Computer Vision (CV), Natural Language Processing (NLP), and Signal Processing. My academic and research foundation is anchored at the International University of Business Agriculture and Technology (IUBAT).",
    "My software engineering roots were built on enterprise backend development with Java and Spring Boot, coupled with responsive JavaScript frontends. In October 2025, I transitioned my full focus into deep learning research and applied AI engineering, channeling my systems background into high-accuracy visual computing, linguistic modeling, and biomedical/acoustic signal analysis.",
    "Today, I build intelligent systems that bridge theoretical mathematics with scalable deployment: training custom neural networks in PyTorch, processing multi-channel time-series signals, deploying transformer-based NLP pipelines, and wrapping them in reliable production architectures.",
  ],
  stats: [
    { label: 'Primary Focus', value: 'CV · NLP · Signal', detail: 'Deep Learning & Applied AI' },
    { label: 'Backend Roots', value: 'Java & Spring Boot', detail: 'Enterprise Systems & APIs' },
    { label: 'Research Pivot', value: 'Oct 2025 – Present', detail: 'Dedicated AI & ML Research' },
    { label: 'Institution', value: 'IUBAT', detail: 'Computer Science & Engineering' },
  ],
  socials: {
    github: 'https://github.com/obaidulsaiki',
    linkedin: 'https://linkedin.com/in/obaidulsaiki',
    email: 'contact@obaidulhaque.me',
    website: 'https://obaidulhaque.me',
  },
};
