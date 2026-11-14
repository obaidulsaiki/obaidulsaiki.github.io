export interface ThesisInfo {
  title: string;
  code: string;
  credits: string;
  grade: string;
  description: string;
  tags: string[];
}

export interface PracticumInfo {
  title: string;
  code: string;
  credits: string;
  grade: string;
  description: string;
  tags: string[];
}

export interface EducationMilestone {
  id: string;
  degree: string;
  institution: string;
  institutionShort: string;
  location: string;
  period: string;
  status: 'Completed' | 'In Progress';
  gradeOrHonors: string;
  description: string;
  highlights: string[];
  keyCourses?: string[];
  thesis?: ThesisInfo;
  practicum?: PracticumInfo;
}

export interface TopicNoteItem {
  id: string;
  topic: string;
  category: string;
  description: string;
  keyConcepts: string[];
  githubUrl?: string;
  driveUrl?: string;
}

export interface CourseItem {
  code: string;
  name: string;
  credits: number;
  grade: string;
  description: string;
}

export interface CourseCategory {
  category: string;
  courses: CourseItem[];
}

export const educationMilestones: EducationMilestone[] = [
  {
    id: 'iubat-bsc-cse',
    degree: 'Bachelor of Science in Computer Science and Engineering (BCSE)',
    institution: 'International University of Business Agriculture and Technology (IUBAT)',
    institutionShort: 'IUBAT',
    location: 'Sector-10, Uttara, Dhaka, Bangladesh',
    period: 'January 2022 – April 2026',
    status: 'Completed',
    gradeOrHonors: 'CGPA 3.89 / 4.00 (144 Total Credits)',
    description:
      'Rigorous 4-year undergraduate curriculum in the College of Engineering and Technology (CEAT). Completed 144 credit hours with high honors (CGPA 3.89/4.00), demonstrating consistent academic excellence with A+ grades across core computer science, software engineering, systems, and mathematics.',
    highlights: [
      'Graduated with CGPA 3.89 / 4.00 across 144 credit hours (BCSE, College of Engineering and Technology).',
      'Earned A+ in CSC 488: Thesis (6.0 credits) and CSC 391: Data Structures and Algorithms (4.0 credits).',
      'Earned straight A+ across all core programming sequences: JAVA (CSC 383/384), C++ (CSC 283/284), and C (CSC 183/184).',
      'Earned straight A+ across core systems: Operating System (CSC 307), Database Systems (CSC 433/434), Computer Networks (CSC 465/466), and Software Engineering (CSC 469/470).',
    ],
    thesis: {
      title: 'Aspect-Based Hate Speech Detection and Analysis Using BERT Architectures',
      code: 'CSC 488',
      credits: '6.0 Credits',
      grade: 'Grade: A+',
      description:
        'Conducted capstone thesis research on aspect-based hate speech detection and analysis using BERT architectures evaluated on the EmoNoBa benchmark dataset. Introduced a novel methodological contribution by formulating and maintaining contextual aspect embeddings directly within transformer layers, earning high commendation and exceptional praise from the departmental thesis defense committee.',
      tags: [
        'BERT Architectures',
        'Aspect Embeddings',
        'EmoNoBa Dataset',
        'Bengali NLP',
        'Hate Speech Detection',
        'A+ Grade (6.0 Cr)',
      ],
    },
    practicum: {
      title: 'EduMaster: AI-Powered Learning Management System (LMS)',
      code: 'CSC 490',
      credits: '6.0 Credits',
      grade: 'Grade: A',
      description:
        'Architected and deployed EduMaster, a production-grade AI-powered Learning Management System featuring automated student performance analytics, intelligent content recommendation, and 104 robust RESTful API endpoints. Defended before the IUBAT Practicum Board in January 2026, earning Grade A for end-to-end full-stack systems engineering.',
      tags: [
        'AI Learning Management System',
        'Full-Stack Architecture',
        'RESTful APIs (104 Endpoints)',
        'Student Analytics',
        'Grade: A (6.0 Cr)',
      ],
    },
  },
  {
    id: 'hsc-science',
    degree: 'Higher Secondary Certificate (HSC) — Science',
    institution: 'Mohammadpur Govt. College',
    institutionShort: 'MGC',
    location: 'Dhaka, Bangladesh',
    period: 'June 2018 – January 2020',
    status: 'Completed',
    gradeOrHonors: 'GPA 5.00 / 5.00',
    description:
      'Rigorous pre-university science curriculum under the Board of Intermediate and Secondary Education, completing foundational higher mathematics, physics, and chemistry with GPA 5.00/5.00.',
    highlights: [
      'GPA 5.00 / 5.00 in National Higher Secondary Examinations.',
      'Distinction in Higher Mathematics (Calculus, Coordinate Geometry, Vectors) and Physics.',
    ],
  },
  {
    id: 'ssc-science',
    degree: 'Secondary School Certificate (SSC) — Science',
    institution: 'Kakoli High School and College',
    institutionShort: 'KHSC',
    location: 'Dhaka, Bangladesh',
    period: 'Passing Year: 2016',
    status: 'Completed',
    gradeOrHonors: 'GPA 5.00 / 5.00',
    description:
      'Completed secondary education curriculum in the Science group with a perfect GPA 5.00/5.00, establishing early foundational excellence in general mathematics, physics, chemistry, biology, and analytical problem solving.',
    highlights: [
      'Perfect GPA 5.00 / 5.00 in National Secondary School Examinations (Dhaka Board).',
      'Distinction in General Mathematics, Physics, Chemistry, and Analytical Science.',
    ],
  },
];

export const topicNotes: TopicNoteItem[] = [
  {
    id: 'dsa',
    topic: 'Data Structures & Algorithms',
    category: 'Core Computer Science',
    description:
      'Comprehensive reference notes and solution patterns covering asymptotic complexity proofs, balanced binary search trees, graph theory (Dijkstra, BFS/DFS, Bellman-Ford), dynamic programming memoization, and competitive programming paradigms.',
    keyConcepts: [
      'Balanced BSTs & Heaps',
      'Graph Traversals & Shortest Paths',
      'Dynamic Programming & Bitmasking',
      'Divide and Conquer',
      'Asymptotic Big-O Analysis',
    ],
    githubUrl: 'https://github.com/obaidulsaiki?tab=repositories&q=data-structures',
  },
  {
    id: 'ml-dl',
    topic: 'Machine Learning & Deep Learning',
    category: 'Artificial Intelligence & Vision',
    description:
      'Theoretical notes, mathematical formulations, and PyTorch implementations covering convolutional backbones, vision transformers (ViT), state-space continuous Mamba models, loss formulations, and clinical evaluation metrics.',
    keyConcepts: [
      'PyTorch Neural Backbones',
      'State-Space Mamba & ViT',
      'Loss Formulations & Optimization',
      'Medical Image Segmentation',
      'Explainable AI (Grad-CAM, SHAP)',
    ],
    driveUrl: 'https://drive.google.com/drive/',
  },
  {
    id: 'python-ai',
    topic: 'Python for AI & Research',
    category: 'Research Engineering',
    description:
      'Production research workflows with Python: vectorized NumPy matrix manipulations, Pandas exploratory analysis, PyTorch custom datasets & DataLoaders, scientific plotting, and multi-process batch pipelines.',
    keyConcepts: [
      'Vectorized NumPy Computations',
      'Pandas Data Cleaning & Wrangling',
      'PyTorch Custom Dataset Pipelines',
      'Matplotlib & Seaborn Visualizations',
      'Multiprocessing & CLI Workflows',
    ],
    githubUrl: 'https://github.com/obaidulsaiki?tab=repositories&q=python',
  },
];

export const courseCategories: CourseCategory[] = [
  {
    category: 'Algorithms, Core CS & Theory',
    courses: [
      {
        code: 'CSC 391',
        name: 'Data Structures and Algorithms',
        credits: 4,
        grade: 'A+',
        description:
          'Comprehensive algorithmic study: balanced binary search trees, graph algorithms (Dijkstra, BFS/DFS, MST), dynamic programming, divide-and-conquer, hashing, and rigorous asymptotic complexity analysis.',
      },
      {
        code: 'CSC 397',
        name: 'Theory of Computation',
        credits: 4,
        grade: 'A+',
        description:
          'Automata theory, regular expressions, deterministic and non-deterministic finite automata (DFA/NFA), context-free grammars, pushdown automata, Turing machines, decidability, and computational complexity (P vs NP).',
      },
      {
        code: 'CSC 437',
        name: 'Compiler Design',
        credits: 3,
        grade: 'A',
        description:
          'Lexical analysis, syntax analysis (top-down and bottom-up parsing), abstract syntax trees (AST), symbol tables, semantic analysis, intermediate representation (IR), and code generation/optimization.',
      },
      {
        code: 'CSC 455',
        name: 'Computer Graphics',
        credits: 3,
        grade: 'A+',
        description:
          '2D and 3D graphics pipelines, coordinate transformations, line and polygon rasterization algorithms, clipping, illumination models, shading, rendering, and visual texture mapping.',
      },
      {
        code: 'MAT 257',
        name: 'Discrete Mathematics',
        credits: 3,
        grade: 'A-',
        description:
          'Propositional and predicate logic, set theory, relations, mathematical induction, recurrence relations, graph theory, combinatorics, and discrete mathematical structures for computer science.',
      },
      {
        code: 'CSC 461',
        name: 'Programming Languages and Structures',
        credits: 3,
        grade: 'A+',
        description:
          'Comparative paradigms of programming languages: imperative, functional, and object-oriented paradigms, type checking, scoping rules, storage management, and runtime environments.',
      },
    ],
  },
  {
    category: 'Software Engineering & Enterprise Dev',
    courses: [
      {
        code: 'CSC 383 & 384',
        name: 'Programming (JAVA) & Lab',
        credits: 4,
        grade: 'A+',
        description:
          'Enterprise Java programming: object-oriented design patterns, polymorphism, exception handling, multithreading, collections framework, Java I/O streams, and GUI/backend architectures.',
      },
      {
        code: 'CSC 283 & 284',
        name: 'Programming (C++) & Lab',
        credits: 4,
        grade: 'A+',
        description:
          'Advanced C++ programming, object-oriented concepts, STL containers and algorithms, template metaprogramming, memory allocation, operator overloading, and high-performance problem solving.',
      },
      {
        code: 'CSC 183 & 184',
        name: 'Programming C & Lab',
        credits: 4,
        grade: 'A+',
        description:
          'Foundational procedural programming, pointers, manual dynamic memory management (malloc/free), arrays, structs, modular file handling, and bitwise manipulation.',
      },
      {
        code: 'CSC 469 & 470',
        name: 'Software Engineering & Lab',
        credits: 4,
        grade: 'A+',
        description:
          'Software development life cycle (SDLC), Agile and Scrum methodologies, UML architectural modeling, requirements engineering, design patterns, software testing, and quality assurance.',
      },
      {
        code: 'CSC 387',
        name: 'System Analysis and Design',
        credits: 3,
        grade: 'A+',
        description:
          'Enterprise systems analysis, structured analysis, data flow diagrams (DFD), entity-relationship modeling, feasibility studies, system specification, and implementation planning.',
      },
      {
        code: 'CSC 439 & 440',
        name: 'Visual Programming & Lab',
        credits: 4,
        grade: 'A+',
        description:
          'Event-driven application development, GUI architecture, component binding, interactive desktop frameworks, and client-side event management.',
      },
      {
        code: 'CSC 451',
        name: 'Management Information System',
        credits: 3,
        grade: 'A+',
        description:
          'Enterprise information architectures, strategic decision support systems (DSS), business process integration, and data-driven organizational workflows.',
      },
      {
        code: 'CSC 103 & 104',
        name: 'Fundamentals of Computers and Applications & Lab',
        credits: 4,
        grade: 'A+',
        description:
          'Foundations of computer systems, algorithmic problem decomposition, computing environments, and applied office automation systems.',
      },
    ],
  },
  {
    category: 'Systems, Databases & Networks',
    courses: [
      {
        code: 'CSC 433 & 434',
        name: 'Database Management Systems & Lab',
        credits: 4,
        grade: 'A+',
        description:
          'Relational database architecture, relational algebra, SQL optimization, normalization (1NF through BCNF), indexing (B+ trees), query execution plans, transaction management, and ACID compliance.',
      },
      {
        code: 'CSC 307',
        name: 'Operating System',
        credits: 3,
        grade: 'A+',
        description:
          'Process scheduling algorithms, inter-process communication (IPC), multithreading, concurrency and deadlocks, memory management (virtual memory, paging), file systems, and Linux kernel fundamentals.',
      },
      {
        code: 'CSC 465 & 466',
        name: 'Data Communication and Computer Network & Lab',
        credits: 4,
        grade: 'A+',
        description:
          'OSI and TCP/IP protocol stacks, physical layer encoding, packet framing, sliding window protocols, routing algorithms, transport layer protocols (TCP/UDP), socket programming, and network security.',
      },
      {
        code: 'CSC 247',
        name: 'Computer Organization and Architecture',
        credits: 3,
        grade: 'A+',
        description:
          'Instruction set architecture (ISA), CPU datapath and control unit design, pipelining and hazards, memory hierarchy (cache design, virtual memory), and input/output interfaces.',
      },
      {
        code: 'CSC 471',
        name: 'Microprocessor Based System Design',
        credits: 3,
        grade: 'A+',
        description:
          'Microprocessor architecture, interfacing techniques, memory and I/O mapped interfacing, interrupt controllers, bus timing diagrams, and embedded system design.',
      },
      {
        code: 'CSC 197',
        name: 'Assembly Language',
        credits: 3,
        grade: 'A+',
        description:
          'x86 assembly programming, CPU registers, stack operations, memory segmentation, interrupt handling, string operations, and hardware-level algorithmic optimization.',
      },
      {
        code: 'CSC 329 & 330',
        name: 'Logic Design and Switching Circuits & Lab',
        credits: 4,
        grade: 'A+',
        description:
          'Boolean algebra, Karnaugh maps, combinational logic (multiplexers, decoders, ALUs), sequential circuits (flip-flops, registers, counters), and finite state machine (FSM) synthesis.',
      },
      {
        code: 'CSC 347 & 348',
        name: 'Computer Hardware and Maintenance & Lab',
        credits: 4,
        grade: 'B+ / A+',
        description:
          'Hardware architecture, microcomputer bus interfaces, diagnostic troubleshooting, peripheral maintenance, and system board architecture.',
      },
      {
        code: 'CSC 231 & 232',
        name: 'Fundamentals of Electronics and Digital & Lab',
        credits: 4,
        grade: 'A / A+',
        description:
          'Semiconductor physics, diodes, bipolar junction transistors (BJT), FET amplifiers, operational amplifiers, and digital logic gate circuit design.',
      },
    ],
  },
  {
    category: 'Mathematics, Statistics & Applied Science',
    courses: [
      {
        code: 'STA 240',
        name: 'Statistics',
        credits: 3,
        grade: 'A+',
        description:
          'Probability theory, discrete and continuous random variables, probability distributions, statistical hypothesis testing, regression analysis, correlation, and data analytics.',
      },
      {
        code: 'MAT 247',
        name: 'Numerical Analysis',
        credits: 3,
        grade: 'A-',
        description:
          'Numerical root finding (Newton-Raphson, Bisection), numerical differentiation and integration, solving linear systems (Gaussian elimination, LU decomposition), and curve fitting.',
      },
      {
        code: 'MAT 147',
        name: 'Applied Calculus',
        credits: 3,
        grade: 'A',
        description:
          'Differential and integral calculus, limits, continuity, partial derivatives, multiple integrals, and applications in engineering modeling and optimization.',
      },
      {
        code: 'MAT 219',
        name: 'Linear Algebra',
        credits: 2,
        grade: 'B+',
        description:
          'Matrices and determinants, vector spaces, linear transformations, eigenvalues and eigenvectors, orthogonality, and matrix decompositions foundational for machine learning.',
      },
      {
        code: 'EEN 183 & 184',
        name: 'Circuit Analysis & Lab I',
        credits: 4,
        grade: 'A+',
        description:
          'Ohm’s and Kirchhoff’s laws, mesh and nodal analysis, Thévenin and Norton equivalent circuits, operational amplifiers, and AC circuit frequency response.',
      },
      {
        code: 'PHY 111 & 112',
        name: 'Physics & Physics Lab',
        credits: 4,
        grade: 'A+',
        description:
          'Mechanics, wave dynamics, electrostatics, magnetism, optics, and experimental laboratory measurements.',
      },
      {
        code: 'CHM 117 & 118',
        name: 'General Chemistry & Lab',
        credits: 4,
        grade: 'B+ / A',
        description:
          'Chemical bonding, molecular geometry, reaction thermodynamics, solutions, electrochemistry, and experimental laboratory techniques.',
      },
      {
        code: 'ENV 101',
        name: 'Environmental Science',
        credits: 2,
        grade: 'A+',
        description:
          'Ecological principles, biodiversity conservation, sustainable resource management, renewable energy, and climate impact analysis.',
      },
    ],
  },
  {
    category: 'Capstone Research & Practicum',
    courses: [
      {
        code: 'CSC 488',
        name: 'Thesis',
        credits: 6,
        grade: 'A+',
        description:
          '6-credit undergraduate capstone research investigating aspect-based hate speech detection using BERT architectures on the EmoNoBa benchmark dataset with novel aspect embedding formulation. Awarded highest grade (A+) with exceptional defense commendation.',
      },
      {
        code: 'CSC 490',
        name: 'Practicum',
        credits: 6,
        grade: 'A',
        description:
          '6-credit professional engineering practicum engaging in industry-standard software development cycles and full-stack software delivery. Showcased and defended EduMaster (AI-powered LMS with 104 REST APIs) before the IUBAT Practicum Board in January 2026.',
      },
      {
        code: 'CSC 496',
        name: 'Comprehensive Examination',
        credits: 0,
        grade: 'S',
        description:
          'Comprehensive departmental evaluation covering the entire computer science curriculum: algorithms, systems, mathematics, and software engineering. Awarded Satisfactory (S).',
      },
    ],
  },
  {
    category: 'Communication, Ethics & Professional Studies',
    courses: [
      {
        code: 'CSC 215',
        name: 'Engineering Ethics',
        credits: 1,
        grade: 'A+',
        description:
          'Professional codes of conduct, ethical frameworks in computer engineering, intellectual property, data privacy, and societal impact of computing.',
      },
      {
        code: 'ENG 101',
        name: 'Basic English Composition',
        credits: 4,
        grade: 'A+',
        description:
          'Academic writing principles, paragraph development, rhetorical modes, and grammatical syntax.',
      },
      {
        code: 'ENG 102',
        name: 'English Comprehensions and Speaking',
        credits: 3,
        grade: 'A+',
        description:
          'Oral articulation, listening comprehension, technical discussions, and professional communicative efficacy.',
      },
      {
        code: 'ENG 203',
        name: 'Advanced English Composition',
        credits: 3,
        grade: 'A-',
        description:
          'Expository analysis, technical documentation, argumentative research writing, and critical literary review.',
      },
      {
        code: 'ENG 250',
        name: 'Public Speaking',
        credits: 3,
        grade: 'A+',
        description:
          'Rhetorical presentation delivery, speech design, visual presentation media, and effective verbal argumentation.',
      },
      {
        code: 'BUS 201',
        name: 'Business Communications',
        credits: 3,
        grade: 'A-',
        description:
          'Corporate correspondence, formal engineering proposals, inter-departmental communications, and executive presentations.',
      },
      {
        code: 'PHI 114',
        name: 'Introduction to Philosophy',
        credits: 3,
        grade: 'A',
        description:
          'Epistemology, formal logical structures, ethics, existential philosophy, and analytical thinking.',
      },
      {
        code: 'ART 202 & 203',
        name: 'Career Planning and Development I & II',
        credits: 2,
        grade: 'A+',
        description:
          'Professional portfolio construction, technical interviews, industry readiness, and corporate career development.',
      },
      {
        code: 'ART 102 & 103',
        name: 'Educational Planning & Professional Grooming',
        credits: 1,
        grade: 'A / A+',
        description:
          'Higher education planning strategies, professional decorum, workplace etiquette, and leadership development.',
      },
      {
        code: 'ART 204',
        name: 'Modern Living',
        credits: 2,
        grade: 'A+',
        description:
          'Contemporary societal frameworks, interpersonal adaptability, health, and holistic modern living.',
      },
      {
        code: 'ELP 002',
        name: 'Intermediate English',
        credits: 0,
        grade: 'A',
        description:
          'Language proficiency development, technical reading comprehension, and structured lexical usage.',
      },
    ],
  },
];
