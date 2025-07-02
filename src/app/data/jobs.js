const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    category: "Frontend",
    company: "TechNova Inc.",
    location: "Remote",
    description: "We are looking for a skilled Frontend Developer with experience in React and Tailwind CSS.",
    requirements: [
      "3+ years of experience",
      "Strong JavaScript and React skills",
      "Familiarity with version control (Git)"
    ],
    postedAt: "2025-06-20",
    endDate: "2025-07-20"
  },
  {
    id: 2,
    title: "Backend Engineer",
    category: "Backend",
    company: "ByteWorks",
    location: "Lagos, Nigeria",
    description: "Build and maintain scalable backend systems using Node.js and Express.",
    requirements: [
      "Experience with REST APIs",
      "Database management skills (MongoDB or PostgreSQL)",
      "Knowledge of authentication and authorization"
    ],
    postedAt: "2025-06-18",
    endDate: "2025-07-18"
  },
  {
    id: 3,
    title: "Cybersecurity Analyst",
    category: "Cybersecurity",
    company: "SecureLink",
    location: "Remote",
    description: "Monitor and defend systems against security breaches and cyber threats.",
    requirements: [
      "Understanding of firewalls, VPNs, IDS/IPS",
      "Experience with incident response",
      "Security certifications are a plus"
    ],
    postedAt: "2025-06-15",
    endDate: "2025-07-15"
  },
  {
    id: 4,
    title: "Product Designer",
    category: "Product Design",
    company: "CreateLab",
    location: "Abuja, Nigeria",
    description: "Work closely with product managers and engineers to design user-centric interfaces.",
    requirements: [
      "Proficiency in Figma/Sketch",
      "Strong understanding of UX principles",
      "Portfolio of past design work"
    ],
    postedAt: "2025-06-10",
    endDate: "2025-07-10"
  },
  {
    id: 5,
    title: "Project Manager",
    category: "Project Management",
    company: "AgileTeams Ltd.",
    location: "Hybrid - Lagos",
    description: "Lead cross-functional teams to deliver projects on time and within scope.",
    requirements: [
      "Proven experience managing software projects",
      "Excellent communication and organizational skills",
      "Familiarity with Agile methodologies"
    ],
    postedAt: "2025-06-12",
    endDate: "2025-07-12"
  },
  {
    id: 6,
    title: "Fullstack Developer",
    category: "Fullstack",
    company: "DevSphere",
    location: "Remote",
    description: "Join our engineering team to build end-to-end web applications.",
    requirements: [
      "Good knowledge of both frontend (React) and backend (Node.js)",
      "Experience working with APIs and databases",
      "Understanding of deployment workflows"
    ],
    postedAt: "2025-06-14",
    endDate: "2025-07-14"
  },
  {
    id: 7,
    title: "Data Scientist",
    category: "Data Science",
    company: "DataCrux",
    location: "Remote",
    description: "Analyze complex datasets to drive business decisions.",
    requirements: [
      "Proficiency in Python and SQL",
      "Experience with machine learning models",
      "Strong data visualization skills"
    ],
    postedAt: "2025-06-19",
    endDate: "2025-07-19"
  },
  {
    id: 8,
    title: "DevOps Engineer",
    category: "DevOps",
    company: "CloudCore",
    location: "Remote",
    description: "Automate infrastructure and manage CI/CD pipelines.",
    requirements: [
      "Experience with Docker, Kubernetes, and AWS",
      "Strong scripting skills (Bash, Python)",
      "Knowledge of monitoring tools"
    ],
    postedAt: "2025-06-21",
    endDate: "2025-07-21"
  },
  {
    id: 9,
    title: "Mobile App Developer",
    category: "Mobile Development",
    company: "AppForge",
    location: "Lagos, Nigeria",
    description: "Develop and maintain cross-platform mobile applications.",
    requirements: [
      "Experience with Flutter or React Native",
      "Understanding of mobile UI/UX",
      "Published apps on Play Store or App Store"
    ],
    postedAt: "2025-06-13",
    endDate: "2025-07-13"
  },
  {
    id: 10,
    title: "Quality Assurance Engineer",
    category: "QA/Testing",
    company: "BugTrackers",
    location: "Remote",
    description: "Test software and ensure it meets quality standards.",
    requirements: [
      "Knowledge of test automation tools",
      "Familiarity with manual and automated testing",
      "Understanding of SDLC"
    ],
    postedAt: "2025-06-16",
    endDate: "2025-07-16"
  },
  {
    id: 11,
    title: "AI Research Engineer",
    category: "AI/ML",
    company: "NeuroNet",
    location: "Remote",
    description: "Research and implement cutting-edge AI algorithms.",
    requirements: [
      "Strong background in deep learning",
      "Experience with TensorFlow or PyTorch",
      "Research publications are a plus"
    ],
    postedAt: "2025-06-17",
    endDate: "2025-07-17"
  },
  {
    id: 12,
    title: "Technical Writer",
    category: "Technical Writing",
    company: "DocuTech",
    location: "Remote",
    description: "Create clear and concise documentation for software products.",
    requirements: [
      "Excellent writing and communication skills",
      "Ability to explain technical concepts",
      "Experience with Markdown or Docs-as-code tools"
    ],
    postedAt: "2025-06-11",
    endDate: "2025-07-11"
  },
  {
    id: 13,
    title: "Business Analyst",
    category: "Business Analysis",
    company: "InsightOps",
    location: "Hybrid - Abuja",
    description: "Bridge the gap between business needs and technical solutions.",
    requirements: [
      "Strong analytical and problem-solving skills",
      "Experience with data analysis tools",
      "Excellent communication abilities"
    ],
    postedAt: "2025-06-22",
    endDate: "2025-07-22"
  },
  {
    id: 14,
    title: "Systems Administrator",
    category: "IT Support",
    company: "SysNet",
    location: "On-site - Lagos",
    description: "Maintain and troubleshoot system infrastructure.",
    requirements: [
      "Experience with Windows/Linux servers",
      "Knowledge of networking",
      "Familiarity with backups and disaster recovery"
    ],
    postedAt: "2025-06-23",
    endDate: "2025-07-23"
  },
  {
    id: 15,
    title: "UX Researcher",
    category: "User Research",
    company: "HumanTech",
    location: "Remote",
    description: "Conduct research to understand user needs and behaviors.",
    requirements: [
      "Experience with user interviews and surveys",
      "Ability to synthesize insights into design recommendations",
      "Background in psychology or HCI is a plus"
    ],
    postedAt: "2025-06-24",
    endDate: "2025-07-24"
  },
  {
    id: 16,
    title: "Technical Support Specialist",
    category: "Customer Support",
    company: "HelpDeskPro",
    location: "Remote",
    description: "Assist customers with technical issues and troubleshooting.",
    requirements: [
      "Excellent problem-solving skills",
      "Clear and patient communication",
      "Basic understanding of software systems"
    ],
    postedAt: "2025-06-25",
    endDate: "2025-07-25"
  }
];

export default jobs;
