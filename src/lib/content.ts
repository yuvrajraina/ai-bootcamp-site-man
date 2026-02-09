export type NavItem = {
  label: string;
  href: string;
};

export type HighlightItem = {
  title: string;
  description: string;
};

export type SyllabusSession = {
  title: string;
  topics: string[];
};

export type SyllabusWeek = {
  week: string;
  title: string;
  sessions: SyllabusSession[];
  deliverable: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  outcome: string;
};

export type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type StudentWinItem = {
  title: string;
  detail: string;
  metric: string;
  proofType: "github" | "deploy" | "linkedin";
  imageSrc: string;
  imageAlt: string;
};

export type TestimonialItem = {
  name: string;
  role: string;
  quote: string;
};

export type ShippedProjectItem = {
  title: string;
  summary: string;
  badge: string;
  imageSrc: string;
  imageAlt: string;
};

export type CohortInfoItem = {
  label: string;
  value: string;
};

export type MotionSettings = {
  enableGlobal3D: boolean;
  enableSectionTilt: boolean;
  revealDurationMs: number;
  staggerMs: number;
  parallaxMaxPx: number;
  tiltMaxDeg: number;
  tiltTranslatePx: number;
};

export type ApplyGoalOption = "job switch" | "projects" | "college" | "founder";

export type ApplyFormValues = {
  name: string;
  whatsappNumber: string;
  goal?: ApplyGoalOption | "";
};

export const siteMeta = {
  title: "AI Bootcamp (8 Weeks) | Yuvraj Raina",
  description:
    "Build real AI projects in 8 weeks with live classes, weekly deliverables, and mentor feedback. Limited seats.",
  ogTitle: "AI Bootcamp (8 Weeks)",
  ogDescription:
    "2 live sessions/week - 4 mini projects + 1 capstone - GitHub-ready portfolio",
  ogImage: "/og-placeholder.svg"
};

export const motionSettings: MotionSettings = {
  enableGlobal3D: true,
  enableSectionTilt: true,
  revealDurationMs: 550,
  staggerMs: 90,
  parallaxMaxPx: 24,
  tiltMaxDeg: 6,
  tiltTranslatePx: 8
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Program", href: "#program" },
  { label: "Syllabus", href: "#syllabus" },
  { label: "Pricing", href: "#pricing" },
  { label: "Apply", href: "#apply" }
];

export const heroContent = {
  headline: "Build Real AI Projects in 8 Weeks.",
  subheadline:
    "2 live sessions/week - 4 mini projects + 1 capstone - GitHub-ready portfolio",
  ctaPrimary: "Reserve Seat",
  ctaSecondary: "WhatsApp",
  note: "Limited seats - Beginner-friendly - Mentor feedback"
};

export const contact = {
  email: "yuvraj@netvoks.com",
  linkedinLink: "https://www.linkedin.com/in/yuvraj-raina/",
  whatsappNumber: "+91 7428999032",
  whatsappLinkNumber: "917428999032",
  whatsappMessage:
    "Hi Yuvraj, I want to reserve my seat for the AI Bootcamp. Please connect with me.",
  mailSubject: "AI Bootcamp Registration",
  mailBody:
    "Hi Yuvraj,\n\nI would like to reserve my seat for the AI Bootcamp. Please share the next steps.\n\nThanks"
};

export const buildMailto = () =>
  `mailto:${contact.email}?subject=${encodeURIComponent(
    contact.mailSubject
  )}&body=${encodeURIComponent(contact.mailBody)}`;

export const buildSignupForm = () => "#apply";

export const buildWhatsApp = () =>
  `https://wa.me/${contact.whatsappLinkNumber}?text=${encodeURIComponent(
    contact.whatsappMessage
  )}`;

export const applyFormContent = {
  title: "Apply / Reserve Seat",
  subtitle: "Reserve seat for free and pay later if you like the first class.",
  nameLabel: "Name",
  whatsappLabel: "WhatsApp number",
  goalLabel: "Your goal (optional)",
  goalPlaceholder: "Select your goal",
  submitLabel: "Reserve Seat",
  successMessage: "Thanks we will be in touch with you soon",
  requiredMessage: "This field is required."
};

export const applyGoalOptions: ApplyGoalOption[] = [
  "job switch",
  "projects",
  "college",
  "founder"
];

export const buildApplyWhatsApp = (values: ApplyFormValues) => {
  const lines = [
    "Hi Yuvraj, I want to reserve my seat for the AI Bootcamp.",
    "",
    `Name: ${values.name.trim()}`,
    `WhatsApp number: ${values.whatsappNumber.trim()}`
  ];

  if (values.goal && values.goal.trim().length > 0) {
    lines.push(`Goal: ${values.goal.trim()}`);
  }

  return `https://wa.me/${contact.whatsappLinkNumber}?text=${encodeURIComponent(
    lines.join("\n")
  )}`;
};

export const studentWins: StudentWinItem[] = [
  // Swap these mock screenshots by replacing files in /public/proof and updating imageSrc paths.
  {
    title: "GitHub streak to shipped repo",
    detail: "From first commit to a polished README and deployment notes.",
    metric: "4 merged project repos",
    proofType: "github",
    imageSrc: "/proof/student-win-github.svg",
    imageAlt: "GitHub style project board with commits, pull requests, and deployment status."
  },
  {
    title: "Live deployment milestone",
    detail: "Students take apps from local demos to public links with docs.",
    metric: "First app shipped in week 2",
    proofType: "deploy",
    imageSrc: "/proof/student-win-deploy.svg",
    imageAlt: "Deployed application dashboard with traffic, response time, and release indicators."
  },
  {
    title: "Career signal in public",
    detail: "Learners post shipping updates and project outcomes on LinkedIn.",
    metric: "Portfolio stories shared weekly",
    proofType: "linkedin",
    imageSrc: "/proof/student-win-linkedin.svg",
    imageAlt: "LinkedIn style post preview showing project launch update and engagement metrics."
  }
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Aarav S.",
    role: "Software Engineer",
    quote:
      "I came in with theory only, and left with projects I could actually show in interviews."
  },
  {
    name: "Riya M.",
    role: "College Student",
    quote:
      "The weekly shipping routine made me accountable. I finally finished and deployed real work."
  },
  {
    name: "Kabir P.",
    role: "Founder",
    quote:
      "The sessions were practical and direct. I used the RAG app pattern in my own product."
  },
  {
    name: "Nisha K.",
    role: "Career Switcher",
    quote:
      "I needed structure and feedback. This bootcamp gave me both and helped me build confidence."
  }
];

export const whatYouShip: ShippedProjectItem[] = [
  // Swap these mock screenshots by replacing files in /public/proof and updating imageSrc paths.
  {
    title: "Sokoban Solver",
    summary: "Search algorithms, heuristics, and optimization in a production-style repo.",
    badge: "Algorithmic depth",
    imageSrc: "/proof/ship-sokoban.svg",
    imageAlt: "Sokoban puzzle solver UI with grid board, node expansion chart, and solution path."
  },
  {
    title: "RAG App",
    summary: "Retrieval with citations, chunking strategy, and evaluation notes.",
    badge: "LLM app architecture",
    imageSrc: "/proof/ship-rag.svg",
    imageAlt: "RAG assistant interface with source citations, retrieved chunks, and confidence panel."
  },
  {
    title: "Assistant App",
    summary: "A deployed assistant web app with structured output and prompt design.",
    badge: "Deployed product",
    imageSrc: "/proof/ship-assistant.svg",
    imageAlt: "AI assistant product screen with chat, action cards, and deployment status widget."
  }
];

export const cohortInfo: CohortInfoItem[] = [
  {
    label: "Next cohort start date",
    value: "15th FEB 2026"
  },
  {
    label: "Days + time",
    value: "MON+THU, TUE+FRI, SAT+SUN - 11 AM to 1 PM"
  },
  {
    label: "Batch size",
    value: "20"
  },
  {
    label: "Payment options",
    value:
      "payment is due after week 1 of classes when you choose to continue"
  }
];

export const pricingOffer = {
  headline: "Reserve your seat with zero upfront risk",
  supportingLine:
    "Reserve seat for free and pay later if you like the first class.",
  reassurance: "No upfront payment required."
};

export const instructor = {
  name: "Yuvraj Raina",
  title: "Industry specialist, mentor, entrepreneur",
  bio:
    "Yuvraj has guided founders, engineers, and teams to ship AI-powered products. The bootcamp is designed to move you from concepts to real-world builds with disciplined weekly delivery.",
  credibility: [
    "Hands-on mentor with industry delivery experience",
    "Structured 8-week sprint with weekly outcomes",
    "Focus on portfolio-ready projects and real-world workflows"
  ]
};

export const programHighlights: HighlightItem[] = [
  {
    title: "Live, practical learning",
    description:
      "Two 90-minute live sessions per week with 30 minutes of theory and 60 minutes of coding."
  },
  {
    title: "Weekly deliverables",
    description:
      "Stay accountable with mini labs, project milestones, and clear feedback loops."
  },
  {
    title: "Beginner-friendly",
    description:
      "We start from fundamentals and quickly move to modern AI applications."
  },
  {
    title: "Real-world outcomes",
    description:
      "Graduate with a GitHub-ready portfolio and capstone you can showcase."
  }
];

export const outcomes = [
  "4 mini projects (biweekly)",
  "1 capstone project",
  "GitHub portfolio with clean READMEs",
  "Mentor feedback and review"
];

export const whoFor = [
  "Aspiring AI/ML engineers",
  "Software developers pivoting into AI",
  "Founders building AI-powered products",
  "Students aiming for project-based learning"
];

export const syllabus: SyllabusWeek[] = [
  {
    week: "Week 1",
    title: "Search & Problem Solving (Sokoban)",
    sessions: [
      {
        title: "Session 1",
        topics: ["Problem formulation", "State space", "BFS/DFS"]
      },
      {
        title: "Session 2",
        topics: ["Heuristics", "A*", "Implementing solver + experiments"]
      }
    ],
    deliverable: "Mini Lab 1 (Sokoban baseline solver)"
  },
  {
    week: "Week 2",
    title: "Advanced Search + Optimization",
    sessions: [
      {
        title: "Session 1",
        topics: [
          "Improving heuristics",
          "Pruning",
          "Complexity",
          "Debugging"
        ]
      },
      {
        title: "Session 2",
        topics: [
          "Performance profiling",
          "Clean project structure",
          "README writing"
        ]
      }
    ],
    deliverable: "Mini Project 1 (Sokoban solver v2 on GitHub)"
  },
  {
    week: "Week 3",
    title: "Supervised Learning Foundations",
    sessions: [
      {
        title: "Session 1",
        topics: [
          "Data and features",
          "Train/val/test",
          "Metrics",
          "Linear models"
        ]
      },
      {
        title: "Session 2",
        topics: ["Hands-on classifier/regressor notebook", "Evaluation"]
      }
    ],
    deliverable: "Mini Lab 2 (supervised learning notebook)"
  },
  {
    week: "Week 4",
    title: "Practical Supervised ML",
    sessions: [
      {
        title: "Session 1",
        topics: [
          "Overfitting",
          "Regularization",
          "Model selection",
          "Pipelines"
        ]
      },
      {
        title: "Session 2",
        topics: ["End-to-end mini project", "Dataset selection", "Report writing"]
      }
    ],
    deliverable: "Mini Project 2 (end-to-end ML project)"
  },
  {
    week: "Week 5",
    title: "Intro to Modern AI Apps",
    sessions: [
      {
        title: "Session 1",
        topics: ["LLM basics", "Prompting", "Structured outputs"]
      },
      {
        title: "Session 2",
        topics: ["Build Mini Project 3", "Simple AI assistant web app"]
      }
    ],
    deliverable: "Mini Project 3 (deployed link + repo)"
  },
  {
    week: "Week 6",
    title: "RAG + Knowledge Apps",
    sessions: [
      {
        title: "Session 1",
        topics: ["Embeddings", "Vector DB concepts", "Chunking"]
      },
      {
        title: "Session 2",
        topics: ["Build Mini Project 4", "RAG app with citations"]
      }
    ],
    deliverable: "Mini Project 4 (deployed link + repo)"
  },
  {
    week: "Week 7",
    title: "Capstone Build Sprint",
    sessions: [
      {
        title: "Session 1",
        topics: [
          "Capstone planning",
          "Architecture",
          "Milestones",
          "Git workflow"
        ]
      },
      {
        title: "Session 2",
        topics: ["Build + mentor review", "Debugging", "Evals"]
      }
    ],
    deliverable: "Capstone v1"
  },
  {
    week: "Week 8",
    title: "Capstone Launch + Portfolio",
    sessions: [
      {
        title: "Session 1",
        topics: ["Deployment", "Polishing", "Demos", "Storytelling"]
      },
      {
        title: "Session 2",
        topics: [
          "Final presentations",
          "Portfolio/GitHub cleanup",
          "Next steps"
        ]
      }
    ],
    deliverable: "Capstone final + portfolio"
  }
];

export const projects: ProjectItem[] = [
  {
    title: "Mini Lab 1: Sokoban Solver",
    description: "Implement a baseline solver with BFS/DFS and test scenarios.",
    outcome: "A working search baseline and evaluation notes."
  },
  {
    title: "Mini Project 1: Sokoban Solver v2",
    description:
      "Improve heuristics, prune efficiently, and publish a clean GitHub repo.",
    outcome: "Optimized solver with performance profiling and README."
  },
  {
    title: "Mini Lab 2: Supervised Learning Notebook",
    description: "Build and evaluate a classifier/regressor with clean metrics.",
    outcome: "Notebook plus evaluation summary."
  },
  {
    title: "Mini Project 2: End-to-End ML Project",
    description:
      "Select a dataset, build a pipeline, and publish a mini report.",
    outcome: "Deployed notebook/report with model selection rationale."
  },
  {
    title: "Mini Project 3: AI Assistant App",
    description: "Ship a simple AI assistant web app with structured outputs.",
    outcome: "Deployed demo link + repo."
  },
  {
    title: "Mini Project 4: RAG App",
    description: "Build a retrieval app with citations and evaluation notes.",
    outcome: "Deployed RAG app + repo."
  },
  {
    title: "Capstone Project",
    description:
      "Define a real-world problem, build, iterate, and publish a polished final demo.",
    outcome: "Capstone final + portfolio-ready GitHub."
  }
];

export const pricing: PricingTier[] = [];

export const pricingNote = "Limited seats. Pricing may change for next cohort.";

export const faqs: FAQItem[] = [
  {
    question: "Do I need prior AI experience?",
    answer:
      "No. We start from fundamentals and move quickly into modern AI workflows."
  },
  {
    question: "What if I miss a live session?",
    answer: "Each class is recorded and shared so you can catch up."
  },
  {
    question: "How much time should I allocate weekly?",
    answer:
      "Plan for 4 to 6 hours per week including classes and project work."
  },
  {
    question: "Will I build a portfolio?",
    answer:
      "Yes. You will complete four mini projects and a capstone with GitHub-ready repos."
  },
  {
    question: "Is there feedback on assignments?",
    answer:
      "Yes, feedback is included in Builder and Pro tiers; Pro includes 1:1 support."
  },
  {
    question: "How do I register?",
    answer:
      "Use the Apply form on this page to reserve your seat. For questions, reach out on WhatsApp or email."
  }
];

export const registerSection = {
  title: "Ready to Build Your AI Portfolio?",
  subtitle:
    "Seats are limited. Reserve your seat from the apply form, then use email or WhatsApp for any queries.",
  ctaPrimary: "Reserve Seat",
  ctaSecondary: "WhatsApp",
  reassurance: "Replies within 24 hours on business days."
};

export const footer = {
  note: "AI Bootcamp by Yuvraj Raina",
  emailLabel: "Email",
  linkedinLabel: "LinkedIn",
  whatsappLabel: "WhatsApp"
};
