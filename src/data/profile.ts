import { publicationOverviewStats } from './research';

export interface HeroStatBadge {
  text: string;
  tone?: 'default' | 'emerald' | 'amber' | 'accent';
}

export interface HeroStatItem {
  id: 'papers' | 'experience' | 'cgpa';
  label: string;
  value: string;
  href: string;
  highlight?: boolean;
  badges: HeroStatBadge[];
}

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
  cgpa: string;
  bioParagraphs: string[];
  stats: HeroStatItem[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
    phone: string;
    phoneFormatted: string;
    website: string;
  };
}

export const profileData: ProfileData = {
  name: 'Obaidul Haque',
  fullName: 'Obaidul Haque',
  title: 'AI Engineer and Researcher',
  specialization: 'Medical Imaging & Computer Vision · NLP · Biomedical Signal Processing',
  tagline:
    'Dedicated to conducting research and contributing to AI-related projects across Medical Imaging & Computer Vision, Natural Language Processing, and Biomedical Signal Processing.',
  location: 'Dhaka, Bangladesh',
  status: 'Conducting Research & Open to AI Projects',
  university: 'International University of Business Agriculture and Technology (IUBAT)',
  universityShort: 'IUBAT',
  cgpa: '3.89 / 4.00',
  bioParagraphs: [
    'I am an AI Engineer and Researcher dedicated to advancing deep learning architectures and building scalable full-stack AI applications. Alongside 40+ research papers across ACM, IEEE, and Springer Nature, I develop production software combining TypeScript, React, Next.js, Java Spring Boot, and modern LLM workflows to turn experimental models into practical systems.',
  ],
  stats: [
    {
      id: 'papers',
      label: 'Conference & Journal Papers',
      value: `${publicationOverviewStats.totalPapers} Papers`,
      href: '/research/',
      badges: [
        { text: `${publicationOverviewStats.publishedCount} Published`, tone: 'emerald' },
        { text: `${publicationOverviewStats.presentedCount} Presented`, tone: 'default' },
        { text: `${publicationOverviewStats.underReviewCount} Running`, tone: 'amber' },
      ],
    },
    {
      id: 'experience',
      label: 'Total Industry Experience',
      value: '10 Months',
      href: '/experience/',
      badges: [
        { text: 'Full Stack AI · 6 mo', tone: 'accent' },
        { text: 'Frontend Dev · 4 mo', tone: 'default' },
      ],
    },
    {
      id: 'cgpa',
      label: 'Academic CGPA · IUBAT',
      value: '3.89 / 4.00',
      href: '/education/',
      highlight: true,
      badges: [
        { text: 'B.Sc. in CSE', tone: 'accent' },
        { text: '144 Credits', tone: 'default' },
      ],
    },
  ],
  socials: {
    github: 'https://github.com/obaidulsaiki',
    linkedin: 'https://www.linkedin.com/in/obaidul-haque47/',
    email: 'saki.obidul@gmail.com',
    phone: '01883440377',
    phoneFormatted: '+880 1883-440377',
    website: 'https://obaidulhaque.me',
  },
};
