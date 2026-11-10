export interface ExtracurricularActivity {
  id: string;
  title: string;
  role: string;
  organization: string;
  period: string;
  category: 'leadership' | 'mentorship' | 'competitive-programming' | 'training';
  description: string;
  highlights: string[];
  certificateUrl?: string;
}

export interface ContestRanking {
  contest: string;
  rank: string;
  year: string;
  scope: string;
}

export interface PlatformProfile {
  platform: string;
  handle: string;
  solvedCount: number;
  url: string;
}

export const platformProfiles: PlatformProfile[] = [
  {
    platform: 'Codeforces',
    handle: 'obaidulsaiki',
    solvedCount: 267,
    url: 'https://codeforces.com/profile/obaidulsaiki',
  },
  {
    platform: 'HackerRank',
    handle: 'Obaidulsaiki',
    solvedCount: 79,
    url: 'https://www.hackerrank.com/profile/Obaidulsaiki',
  },
  {
    platform: 'VJudge',
    handle: 'obaidulsaiki',
    solvedCount: 56,
    url: 'https://vjudge.net/user/obaidulsaiki',
  },
  {
    platform: 'LeetCode',
    handle: 'obaidulsaiki',
    solvedCount: 22,
    url: 'https://leetcode.com/u/obaidulsaiki/',
  },
];

export const contestRankings: ContestRanking[] = [
  {
    contest: 'IUBAT Intra University Programming Contest',
    rank: '13th Place',
    year: '2024',
    scope: 'University Championship',
  },
  {
    contest: 'ICPC Asia Regional Preliminary Contest',
    rank: '418th Place',
    year: '2023',
    scope: 'Asia Regional',
  },
  {
    contest: 'University Monthly Programming Contests',
    rank: '1st & 2nd Place',
    year: '2023',
    scope: 'Monthly Intra Contests',
  },
  {
    contest: 'ICPC Preliminary Round',
    rank: '726th Place',
    year: '2022',
    scope: 'National Preliminary',
  },
];

export const extracurricularActivities: ExtracurricularActivity[] = [
  {
    id: 'basis-student-branch',
    title: 'BASIS IUBAT Student Branch',
    role: 'Executive Member',
    organization: 'Bangladesh Association of Software and Information Services (BASIS)',
    period: '2023 – 2025',
    category: 'leadership',
    description:
      'Organized high-impact technology events, student IT competitions, and technical seminars bridging academia with Bangladesh’s leading software industry association.',
    highlights: [
      'Authored problem sets and structured competition rules for freshman IQ and IT competitions.',
      'Co-organized a drone technology seminar featuring industry specialist Mr. Zubayer Al Billal Khan.',
      'Fostered student engagement in software development and emerging tech careers.',
    ],
    certificateUrl:
      'https://drive.google.com/open?id=1M7QMrkbTAr4JVCjDauHC7ajNptljaxZR&usp=drive_fs',
  },
  {
    id: 'cp-mentor',
    title: 'Competitive Programming Mentorship',
    role: 'Mentor (Level 0)',
    organization: 'IUBAT CSE Competitive Programming Community',
    period: '2023 – 2025',
    category: 'mentorship',
    description:
      'Mentored freshman and sophomore CSE students in foundational algorithms, C++ STL data structures, time complexity analysis, and problem-solving strategies.',
    highlights: [
      'Conducted problem-solving breakdown sessions for 50+ junior students.',
      'Curated weekly problem sets on VJudge and Codeforces to build algorithmic consistency.',
      'Helped student teams prepare for national and regional ICPC preliminary rounds.',
    ],
  },
  {
    id: 'java-spring-training',
    title: 'Java Spring Framework 80-Hour Professional Training',
    role: 'Certified Trainee',
    organization: 'Jagannath University & ICT Division Bangladesh',
    period: '2024',
    category: 'training',
    description:
      'Rigorous 80-hour advanced technical training on enterprise Java and the Spring ecosystem conducted in partnership with the Government ICT Division.',
    highlights: [
      'Completed comprehensive training in Spring Boot, Spring Security, Hibernate/JPA, and microservices.',
      'Awarded certificate of completion by the ICT Division and Jagannath University.',
    ],
    certificateUrl:
      'https://drive.google.com/open?id=151tQlgcAC39JYaq95CZn7O6w16r81WKC&usp=drive_fs',
  },
  {
    id: 'academic-mentor',
    title: 'Departmental Academic Mentorship',
    role: 'Peer Mentor',
    organization: 'Department of Computer Science & Engineering, IUBAT',
    period: '2022 – 2024',
    category: 'mentorship',
    description:
      'Supported undergraduate peers in computer science coursework, English language communication, and programming fundamentals.',
    highlights: [
      'Held regular tutoring hours for students needing reinforcement in programming concepts.',
      'Assisted in departmental volunteering, tech bootcamps, and Machine Learning workshops.',
    ],
  },
];

