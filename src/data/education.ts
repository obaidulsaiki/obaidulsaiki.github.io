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
  keyCourses: string[];
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
      'Ranked 13th in the IUBAT Intra University Programming Contest (2024) and 418th in ICPC Asia Regional Preliminary (2023).',
      'Served as Competitive Programming Mentor (Level 0) and Executive Member of BASIS IUBAT Student Branch.',
    ],
    keyCourses: [
      'CSC 488: Thesis (6.0 Cr · A+)',
      'CSC 391: Data Structures & Algorithms (4.0 Cr · A+)',
      'CSC 383 & 384: Programming (JAVA) & Lab (4.0 Cr · A+)',
      'CSC 283 & 284: Programming (C++) & Lab (4.0 Cr · A+)',
      'CSC 183 & 184: Programming C & Lab (4.0 Cr · A+)',
      'CSC 433 & 434: Database Management Systems & Lab (4.0 Cr · A+)',
      'CSC 307: Operating System (3.0 Cr · A+)',
      'CSC 465 & 466: Data Communication & Computer Network (4.0 Cr · A+)',
      'CSC 469 & 470: Software Engineering & Lab (4.0 Cr · A+)',
      'CSC 397: Theory of Computation (4.0 Cr · A+)',
      'CSC 437: Compiler Design (3.0 Cr · A)',
      'CSC 455: Computer Graphics (3.0 Cr · A+)',
      'CSC 471: Microprocessor Based System Design (3.0 Cr · A+)',
      'CSC 247: Computer Organization & Architecture (3.0 Cr · A+)',
      'CSC 197: Assembly Language (3.0 Cr · A+)',
      'CSC 439 & 440: Visual Programming & Lab (4.0 Cr · A+)',
      'CSC 387: System Analysis & Design (3.0 Cr · A+)',
      'CSC 461: Programming Languages & Structures (3.0 Cr · A+)',
      'CSC 490: Practicum (6.0 Cr · A)',
      'STA 240: Statistics (3.0 Cr · A+)',
      'MAT 257: Discrete Mathematics (3.0 Cr · A-)',
      'MAT 247: Numerical Analysis (3.0 Cr · A-)',
      'MAT 147: Applied Calculus (3.0 Cr · A)',
      'MAT 219: Linear Algebra (2.0 Cr · B+)',
    ],
  },
  {
    id: 'hsc-science',
    degree: 'Higher Secondary Certificate (HSC) — Science',
    institution: 'Mohammadpur Govt. College',
    institutionShort: 'MGC',
    location: 'Dhaka, Bangladesh',
    period: 'June 2018 – January 2020',
    status: 'Completed',
    gradeOrHonors: 'GPA 5.00 / 5.00 (Golden Distinction)',
    description:
      'Rigorous pre-university science curriculum under the Board of Intermediate and Secondary Education, achieving the highest possible distinction with GPA 5.00/5.00.',
    highlights: [
      'Perfect GPA 5.00 / 5.00 in National Higher Secondary Examinations.',
      'Distinction in Higher Mathematics (Calculus, Coordinate Geometry, Trigonometry) and Physics.',
      'Active participant in science seminars and competitive mathematics study circles.',
    ],
    keyCourses: [
      'Higher Mathematics (Differential & Integral Calculus, Vectors, Coordinate Geometry)',
      'Physics (Classical Mechanics, Thermodynamics, Waves, Modern Physics)',
      'Chemistry (Inorganic, Organic, and Physical Reaction Kinetics)',
      'Information & Communication Technology (Logic Gates, Algorithms, C Programming)',
    ],
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
          '6-credit undergraduate capstone research investigating deep convolutional and state-space architectures for automated biomedical signal analysis and medical image reconstruction. Awarded highest grade (A+).',
      },
      {
        code: 'CSC 490',
        name: 'Practicum',
        credits: 6,
        grade: 'A',
        description:
          '6-credit professional engineering practicum engaging in industry-standard software development cycles and full-stack software delivery. Showcased and defended EduMaster (AI-assisted LMS with 104 REST APIs) before the IUBAT Practicum Board in January 2026.',
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
