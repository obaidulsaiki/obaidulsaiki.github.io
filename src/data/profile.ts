export interface ProfileData {
  name: string;
  fullName: string;
  title: string;
  tagline: string;
  location: string;
  status: string;
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
  name: 'Obaidul Saiki',
  fullName: 'Obaidul Haque Saiki',
  title: 'Software Engineer & Machine Learning Researcher',
  tagline: 'Designing high-performance web applications and robust deep learning architectures for biomedical computing.',
  location: 'Dhaka, Bangladesh',
  status: 'Open to Research & Engineering Opportunities',
  bioParagraphs: [
    "I am a software engineer and computational researcher passionate about bridging algorithmic rigor with intuitive, artisanal user experiences. My engineering focus centers on modern full-stack systems—architecting reactive frontends in Next.js/React and high-throughput backends that scale effortlessly.",
    "On the scientific frontier, my research investigates deep convolutional neural networks and attention-based feature extraction for multi-channel biomedical signal analysis, specifically pediatric and adult EEG seizure detection. I thrive at the intersection where complex mathematics meets practical software architecture.",
    "Beyond day-to-day code, I believe in continuous curiosity: learning new paradigms, contributing to open-source developer tooling, and crafting software that is as delightful to use as it is reliable under the hood.",
  ],
  stats: [
    { label: 'Experience', value: '3+ Years', detail: 'Engineering & Research' },
    { label: 'Technologies', value: '25+', detail: 'Across Web, Systems & ML' },
    { label: 'Focus Areas', value: 'Full-Stack & ML', detail: 'Next.js, PyTorch, Signal Processing' },
    { label: 'Academic Foundation', value: 'B.Sc. CSE', detail: 'Brac University' },
  ],
  socials: {
    github: 'https://github.com/obaidulsaiki',
    linkedin: 'https://linkedin.com/in/obaidulsaiki',
    email: 'contact@obaidulhaque.me',
    website: 'https://obaidulhaque.me',
  },
};
