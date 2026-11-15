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

export interface ProblemTopicStat {
  topic: string;
  solvedCount: number;
}

export const topProblemTopics: ProblemTopicStat[] = [
  { topic: 'Implementation', solvedCount: 79 },
  { topic: 'Greedy', solvedCount: 42 },
  { topic: 'Math', solvedCount: 41 },
];

export interface CpCommunityRole {
  role: string;
  organization: string;
  badge: string;
  description: string;
}

export const cpCommunityRoles: CpCommunityRole[] = [
  {
    role: 'Advance Level Member',
    organization: 'IUBAT CSE Competitive Programming Community',
    badge: 'Member',
    description: 'Active member competing in university championships and regional ICPC contests.',
  },
  {
    role: 'Competitive Programming Mentor (Level-0)',
    organization: 'IUBAT CSE Competitive Programming Community',
    badge: 'Mentor',
    description: 'Taught 50+ junior students basic algorithms, C++ data structures, and contest problem solving.',
  },
];

export interface AcademicMentorshipSpotlight {
  id: string;
  title: string;
  role: string;
  appointedAs: string;
  institution: string;
  period: string;
  semester: string;
  year: number;
  certificateUrl: string;
  summary: string;
  pillars: {
    title: string;
    focus: string;
    description: string;
    skills: string[];
  }[];
  keyHighlights: string[];
}

export const academicMentorshipSpotlight: AcademicMentorshipSpotlight = {
  id: 'iubat-academic-mentor-2023',
  title: 'Academic Mentorship at IUBAT',
  role: 'English & C++ Academic Mentor',
  appointedAs: 'English Academic Mentor',
  institution: 'International University of Business Agriculture and Technology (IUBAT)',
  period: 'May 2023 – August 2023',
  semester: 'Summer 2023',
  year: 2023,
  certificateUrl: 'https://drive.google.com/file/d/12eTe6GnbdcRekKIe9sfR47vanZGc6eQw/view?usp=sharing',
  summary:
    'In Summer 2023, I was officially appointed as an English Academic Mentor at IUBAT. Along with English lessons, I also helped students learn C++ programming. This gave me hands-on experience teaching in class, leading group sessions, and guiding students one-on-one.',
  pillars: [
    {
      title: 'English Teaching',
      focus: 'Official Role',
      description:
        'Taught English lessons in class, helping students improve their grammar, reading, writing, and speaking so they felt confident in their courses.',
      skills: ['English Teaching', 'Public Speaking', 'Communication', 'Grammar'],
    },
    {
      title: 'C++ Programming',
      focus: 'Coding Help',
      description:
        'Taught C++ coding basics, helped students write clean code, find and fix bugs, and finish their lab assignments.',
      skills: ['C++ Coding', 'Problem Solving', 'Debugging', 'Algorithms'],
    },
    {
      title: 'Teaching & Leadership',
      focus: 'Mentorship',
      description:
        'Ran classroom lessons, held one-on-one help hours, and gave students the confidence to speak and code better.',
      skills: ['Classroom Teaching', '1-on-1 Mentoring', 'Student Leadership', 'Guidance'],
    },
  ],
  keyHighlights: [
    'Officially appointed as English Academic Mentor at IUBAT in Summer 2023.',
    'Helped students with both English lessons and C++ programming.',
    'Held one-on-one help sessions to answer questions and debug code.',
    'Built students’ confidence in speaking English and solving programming problems.',
  ],
};

export interface BasisExecutiveSpotlight {
  id: string;
  title: string;
  role: string;
  organization: string;
  period: string;
  summary: string;
  initiatives: {
    title: string;
    semester: string;
    roleNote?: string;
    description: string;
  }[];
}

export const basisExecutiveSpotlight: BasisExecutiveSpotlight = {
  id: 'basis-student-forum-iubat',
  title: 'BASIS Student Forum IUBAT',
  role: 'Executive Member',
  organization: 'BASIS Student Forum · IUBAT',
  period: 'April 2024 – December 2025',
  summary:
    'Served as an Executive Member of the BASIS Student Forum at IUBAT. Led student technology initiatives, arranged university competitions, and organized hands-on workshops and industry seminars.',
  initiatives: [
    {
      title: 'IQ & IT Competition for Freshers',
      semester: 'Fall 2024',
      roleNote: 'Question Setter',
      description:
        'Arranged the IQ and IT competition for incoming freshers and served as the official Question Setter for the event.',
    },
    {
      title: 'Drone Technology Seminar',
      semester: 'Summer 2025',
      roleNote: 'Guest Speaker Event',
      description:
        'Arranged an interactive seminar on drone technology featuring industry guest speaker Mr. Zubayer Al Billal Khan.',
    },
    {
      title: 'Python Programming Workshop',
      semester: 'Fall 2025',
      roleNote: 'Hands-on Workshop',
      description:
        'Arranged a practical Python programming workshop to help university students learn hands-on coding from scratch.',
    },
  ],
};

export const extracurricularActivities: ExtracurricularActivity[] = [
  {
    id: 'java-spring-training',
    title: 'Java Spring Framework 80-Hour Professional Training',
    role: 'Certified Trainee',
    organization: 'Jagannath University & ICT Division Bangladesh',
    period: '2024',
    category: 'training',
    description:
      'Completed an 80-hour training on Java, Spring Boot, and building web applications, organized by Jagannath University and the ICT Division of Bangladesh.',
    highlights: [
      'Learned Spring Boot, database connections with Hibernate, and building web APIs.',
      'Earned an official certificate from the ICT Division and Jagannath University.',
    ],
    certificateUrl:
      'https://drive.google.com/open?id=151tQlgcAC39JYaq95CZn7O6w16r81WKC&usp=drive_fs',
  },
];

export interface OtherCampusActivity {
  id: string;
  title: string;
  role: string;
  organization: string;
  category: 'membership' | 'volunteer' | 'workshop';
  description: string;
  tag: string;
}

export const otherCampusActivities: OtherCampusActivity[] = [
  {
    id: 'dfi-member',
    title: 'Debating Forum of IUBAT (DFI)',
    role: 'Former General Member',
    organization: 'IUBAT',
    category: 'membership',
    description: 'Participated in campus debate practices, public speaking sessions, and intellectual discussions.',
    tag: 'Debating & Speech',
  },
  {
    id: 'ims-member',
    title: 'IUBAT Math Society (IMS)',
    role: 'Former General Member',
    organization: 'IUBAT',
    category: 'membership',
    description: 'Engaged in mathematics problem-solving workshops and quantitative logic activities.',
    tag: 'Mathematics & Logic',
  },
  {
    id: 'cse-volunteer',
    title: 'CSE Department Volunteer',
    role: 'Student Volunteer',
    organization: 'IUBAT CSE Department',
    category: 'volunteer',
    description: 'Done volunteer work for departmental events, workshops, and student coordination.',
    tag: 'Volunteering',
  },
  {
    id: 'github-bootcamp',
    title: 'GitHub Bootcamp',
    role: 'Participant',
    organization: 'IUBAT CSE Department',
    category: 'workshop',
    description: 'Joined hands-on GitHub bootcamp organized by the CSE department to learn git workflows and collaboration.',
    tag: 'Version Control',
  },
  {
    id: 'canva-pro-session',
    title: 'Canva Pro Design Session',
    role: 'Participant',
    organization: 'IUBAT',
    category: 'workshop',
    description: 'Joined design session focused on Canva Pro tools, creative layouts, and visual communication.',
    tag: 'Creative Design',
  },
];

export interface ConferenceCertificateInfo {
  title: string;
  conferences: string[];
  certificateUrl: string;
}

export const conferenceCertificateInfo: ConferenceCertificateInfo = {
  title: 'Conference Certificates',
  conferences: [
    'ICCIT',
    'RAAICON',
    'SPICSCON',
    'COMPASS',
    'ICCA',
    'BECITHCON',
    'ICECE',
    'ICECTE',
    'ICONNECT',
    'QPAIN',
  ],
  certificateUrl: '#',
};

