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
  stats: {
    label: string;
    value: string;
    detail: string;
  }[];
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
    { label: 'Research Papers', value: '40+ Papers', detail: 'ACM | IEEE | Elsevier | Springer' },
    { label: 'Graduated IUBAT', value: '3.89 / 4.00 CGPA', detail: 'B.Sc. in Computer Science & Engineering' },
    { label: 'Problem Solving', value: '550+ Solved', detail: 'Codeforces, LeetCode, ICPC' },
    { label: 'Highlighted Best', value: 'Top 5 Papers', detail: '1st Author Breakthroughs' },
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
