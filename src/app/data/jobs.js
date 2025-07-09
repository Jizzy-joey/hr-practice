const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    category: "Frontend",
    company: "TechNova Inc.",
    location: "Remote",
    description: "We are seeking an experienced Frontend Developer to join our dynamic team. You'll be responsible for building responsive, accessible, and performant user interfaces using modern web technologies. You'll collaborate with UX designers to implement pixel-perfect designs and work closely with backend developers to integrate APIs. Our tech stack includes React, TypeScript, Tailwind CSS, and Next.js. This role offers the opportunity to contribute to architectural decisions and mentor junior developers while staying updated with the latest frontend trends and best practices.",
    requirements: [
      "3+ years of professional frontend development experience",
      "Strong proficiency in JavaScript/TypeScript and React ecosystem",
      "Experience with state management (Redux, Context API, or Zustand)",
      "Familiarity with version control (Git) and CI/CD pipelines",
      "Understanding of web performance optimization techniques",
      "Experience with responsive design and cross-browser compatibility"
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
    description: "As a Backend Engineer at ByteWorks, you'll design, build, and maintain scalable microservices architecture powering our enterprise applications. You'll optimize database queries, implement robust authentication systems, and ensure high availability of our services. We use Node.js with Express/Nest.js, PostgreSQL, Redis, and deploy on AWS with Kubernetes. You'll participate in code reviews, write technical documentation, and collaborate with the DevOps team to improve our deployment processes. Senior candidates will have opportunities to lead technical initiatives and architecture decisions.",
    requirements: [
      "4+ years experience building production backend systems",
      "Expertise in RESTful API design and GraphQL implementation",
      "Strong database skills (PostgreSQL, MongoDB, or MySQL)",
      "Experience with caching strategies using Redis",
      "Knowledge of authentication protocols (OAuth2, JWT)",
      "Familiarity with containerization and orchestration tools"
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
    description: "Join our Security Operations Center as a Cybersecurity Analyst where you'll monitor networks for security breaches, investigate incidents, and implement protective measures. You'll conduct vulnerability assessments, penetration testing, and security audits while maintaining our SIEM solutions. This role involves staying ahead of emerging threats, developing security policies, and conducting employee training on security best practices. You'll work with a team of experts to harden our infrastructure against attacks and respond to security incidents following our IRP.",
    requirements: [
      "3+ years in cybersecurity or related IT security role",
      "Deep understanding of firewalls, VPNs, IDS/IPS systems",
      "Hands-on experience with SIEM tools like Splunk or ELK",
      "Knowledge of MITRE ATT&CK framework and threat modeling",
      "Experience with incident response and forensic analysis",
      "Relevant certifications (CISSP, CEH, Security+) preferred"
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
    description: "We're looking for a creative Product Designer to lead the design of our digital products from conception to launch. You'll conduct user research, create wireframes and prototypes, and design beautiful, functional interfaces. You'll collaborate with product managers to define requirements and with engineers to ensure flawless implementation. Our design system uses Figma, and we practice data-driven design with A/B testing. This role offers the opportunity to shape the user experience of products used by millions while mentoring junior designers and evolving our design processes.",
    requirements: [
      "5+ years experience in UI/UX design for digital products",
      "Expert proficiency in Figma, Sketch, or Adobe XD",
      "Strong portfolio demonstrating user-centered design solutions",
      "Experience conducting user research and usability testing",
      "Knowledge of design systems and component libraries",
      "Understanding of frontend development constraints"
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
    description: "As a Project Manager at AgileTeams, you'll oversee the complete lifecycle of software development projects for our diverse client portfolio. You'll create project plans, manage budgets, mitigate risks, and ensure timely delivery while maintaining high quality standards. Using Agile methodologies (Scrum/Kanban), you'll facilitate daily standups, sprint planning, and retrospectives. This client-facing role requires excellent stakeholder management skills as you'll bridge technical teams with business stakeholders, providing regular progress reports and managing expectations.",
    requirements: [
      "PMP or Scrum Master certification preferred",
      "5+ years managing software development projects",
      "Expertise in JIRA, Confluence, and project management tools",
      "Strong financial acumen for budget management",
      "Excellent communication and conflict resolution skills",
      "Technical background to understand development challenges"
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
    description: "Join our fullstack engineering team to build innovative web applications from the ground up. You'll work across our tech stack (React, Node.js, PostgreSQL) to implement features, optimize performance, and ensure system reliability. This role offers the opportunity to contribute to architectural decisions, implement CI/CD pipelines, and mentor junior developers. We value clean code, thorough testing, and collaborative problem solving. You'll participate in all phases of the SDLC while working in a fast-paced, innovative environment with cutting-edge technologies.",
    requirements: [
      "4+ years professional fullstack development experience",
      "Strong knowledge of React and modern JavaScript/TypeScript",
      "Backend experience with Node.js and Express/Nest.js",
      "Database skills (SQL and NoSQL solutions)",
      "Experience with testing frameworks (Jest, Cypress)",
      "Understanding of cloud platforms (AWS, Azure, or GCP)"
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
    description: "As a Data Scientist at DataCrux, you'll leverage large datasets to derive insights that drive business decisions. You'll build predictive models, design experiments, and create data visualizations that tell compelling stories. Working cross-functionally with product and business teams, you'll identify opportunities for data-driven improvements. Our stack includes Python, R, SQL, TensorFlow, and Tableau. This role offers the chance to work on challenging problems in NLP, recommendation systems, and predictive analytics while publishing research papers and contributing to open-source projects.",
    requirements: [
      "Advanced degree in Computer Science, Statistics, or related field",
      "3+ years experience in data science or machine learning roles",
      "Expertise in Python data stack (pandas, NumPy, scikit-learn)",
      "Experience with machine learning model deployment",
      "Strong SQL skills and experience with big data technologies",
      "Excellent communication and data storytelling abilities"
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
    description: "We're seeking a DevOps Engineer to architect and maintain our cloud infrastructure and CI/CD pipelines. You'll automate deployments, monitor system health, and optimize costs across our AWS environment. Using Infrastructure as Code (Terraform), you'll ensure reproducible environments and high availability. This role involves close collaboration with development teams to implement observability (logging, metrics, tracing) and improve developer experience. You'll also research and implement security best practices while responding to incidents and participating in on-call rotations.",
    requirements: [
      "3+ years professional DevOps/SRE experience",
      "Deep knowledge of AWS services and cloud architecture",
      "Expertise in containerization (Docker) and orchestration (Kubernetes)",
      "Strong scripting skills (Bash, Python, or Go)",
      "Experience with monitoring tools (Prometheus, Grafana, ELK)",
      "Knowledge of security best practices in cloud environments"
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
    description: "Join our mobile team to build beautiful, performant cross-platform applications using Flutter. You'll collaborate with designers to implement pixel-perfect UIs and with backend developers to integrate APIs. This role involves optimizing app performance, implementing analytics, and ensuring smooth user experiences across devices. We practice clean architecture, thorough testing, and continuous delivery. You'll have the opportunity to contribute to our open-source projects, speak at conferences, and mentor junior developers while working on products with millions of active users.",
    requirements: [
      "3+ years professional mobile development experience",
      "Expertise in Flutter framework and Dart language",
      "Understanding of native Android/iOS development",
      "Experience with state management solutions",
      "Knowledge of mobile app security best practices",
      "Published apps on Play Store/App Store"
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
    description: "As a QA Engineer at BugTrackers, you'll ensure the quality of our software products through comprehensive testing strategies. You'll design test plans, write automated tests, and perform manual testing when needed. Working closely with developers, you'll identify, document, and track bugs through resolution. This role involves building and maintaining our test automation framework (using Selenium, Cypress, or similar tools), implementing CI/CD test pipelines, and developing quality metrics. You'll advocate for quality throughout the SDLC while balancing speed and thoroughness in a fast-paced Agile environment.",
    requirements: [
      "4+ years experience in software quality assurance",
      "Strong knowledge of test automation frameworks",
      "Experience with both manual and automated testing",
      "Programming skills in JavaScript, Python, or Java",
      "Understanding of CI/CD integration for testing",
      "ISTQB certification or similar is a plus"
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
    description: "Join our AI research team to push the boundaries of machine learning and artificial intelligence. You'll develop novel algorithms, train models on large datasets, and publish research papers. Current focus areas include computer vision, NLP, and reinforcement learning. This role offers access to high-performance computing resources and collaboration with academic partners. You'll have the freedom to explore innovative ideas while contributing to practical applications that solve real-world problems. Senior candidates may lead research teams and represent the company at international conferences.",
    requirements: [
      "PhD or MS in Computer Science, Mathematics, or related field",
      "Strong publication record in AI/ML conferences/journals",
      "Expertise in deep learning frameworks (TensorFlow/PyTorch)",
      "Experience with distributed training of large models",
      "Strong mathematical foundation in linear algebra and statistics",
      "Ability to translate research into production-ready solutions"
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
    description: "We're looking for a Technical Writer to create comprehensive documentation for our developer products including API references, SDK documentation, and integration guides. You'll work closely with engineering teams to understand complex technical concepts and translate them into clear, accessible content. This role involves maintaining our knowledge base, creating tutorials and examples, and improving developer onboarding materials. You'll also contribute to our open-source documentation and help shape our documentation strategy while ensuring consistency across all technical content.",
    requirements: [
      "3+ years technical writing experience in software",
      "Ability to understand and explain complex technical concepts",
      "Experience with docs-as-code workflows and Markdown",
      "Familiarity with version control (Git)",
      "Basic understanding of programming concepts",
      "Portfolio of technical writing samples"
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
    description: "As a Business Analyst at InsightOps, you'll bridge the gap between business stakeholders and technical teams. You'll gather and analyze requirements, document processes, and propose data-driven solutions. This role involves creating detailed user stories, facilitating workshops, and analyzing business metrics to identify improvement opportunities. You'll work across departments to understand pain points and recommend system enhancements while ensuring alignment between business objectives and technical implementation. Strong candidates will have experience with BPMN, UML, and data visualization tools.",
    requirements: [
      "4+ years experience in business analysis roles",
      "Strong analytical and problem-solving skills",
      "Experience with requirements gathering techniques",
      "Proficiency in data analysis tools (Excel, SQL, Power BI)",
      "Excellent communication and stakeholder management",
      "CBAP or similar certification is a plus"
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
    description: "Join our IT operations team as a Systems Administrator responsible for maintaining our corporate infrastructure. You'll manage Windows/Linux servers, network equipment, and enterprise applications while ensuring high availability and security. This hands-on role involves troubleshooting hardware/software issues, implementing backups, and responding to security incidents. You'll automate repetitive tasks, document procedures, and provide technical support to employees. We value proactive problem-solvers who can anticipate issues before they occur and implement preventive measures.",
    requirements: [
      "5+ years systems administration experience",
      "Expertise in Windows Server and Linux administration",
      "Strong networking knowledge (TCP/IP, DNS, VPN, firewalls)",
      "Experience with virtualization technologies (VMware/Hyper-V)",
      "Knowledge of backup and disaster recovery solutions",
      "Relevant certifications (MCSE, RHCE, CCNA) preferred"
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
    description: "As a UX Researcher at HumanTech, you'll lead user research initiatives to inform product strategy and design decisions. You'll plan and conduct studies using various methods (interviews, surveys, usability tests) and synthesize findings into actionable insights. This role involves creating personas, journey maps, and research reports that influence product direction. You'll collaborate with designers, PMs, and engineers to advocate for user needs throughout the development process. Strong candidates will have experience with both qualitative and quantitative research methods in an Agile environment.",
    requirements: [
      "3+ years professional UX research experience",
      "Proficiency with research tools (UserTesting, Optimal Workshop)",
      "Strong analytical skills for qualitative/quantitative data",
      "Ability to communicate research findings effectively",
      "Background in psychology, HCI, or related field",
      "Portfolio demonstrating research impact on products"
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
    description: "Provide exceptional technical support to our customers by troubleshooting software issues, answering technical questions, and guiding users through solutions. You'll document support tickets, escalate bugs to engineering teams, and contribute to our knowledge base. This role requires patience, clear communication, and the ability to explain technical concepts to non-technical users. You'll work with various support channels (email, chat, phone) while maintaining high customer satisfaction scores. Opportunities for growth include specializing in specific product areas or moving into team leadership positions.",
    requirements: [
      "2+ years technical support experience",
      "Excellent problem-solving and communication skills",
      "Basic understanding of software systems and networking",
      "Ability to learn complex technical products quickly",
      "Experience with support ticketing systems (Zendesk, Freshdesk)",
      "Customer-focused attitude and patience"
    ],
    postedAt: "2025-06-25",
    endDate: "2025-07-25"
  },
  {
    id: 17,
    title: "Cloud Architect",
    category: "Cloud Computing",
    company: "SkyScale Technologies",
    location: "Remote",
    description: "Design and implement scalable, secure cloud solutions for our enterprise clients. As a Cloud Architect, you'll lead migration projects, optimize cloud spend, and develop best practices for cloud adoption. This strategic role involves evaluating new cloud technologies, creating reference architectures, and mentoring engineering teams. You'll work across AWS, Azure, and GCP to build multi-cloud solutions while ensuring compliance with security and regulatory requirements. Strong candidates will have experience with cloud-native architectures, serverless computing, and infrastructure automation at scale.",
    requirements: [
      "7+ years experience in cloud engineering/architecture",
      "Expert-level certification in AWS, Azure, or GCP",
      "Deep knowledge of cloud security and networking",
      "Experience with Terraform or CloudFormation",
      "Strong understanding of distributed systems",
      "Excellent communication and presentation skills"
    ],
    postedAt: "2025-06-26",
    endDate: "2025-07-26"
  },
  {
    id: 18,
    title: "Blockchain Developer",
    category: "Blockchain",
    company: "ChainInnovate",
    location: "Remote",
    description: "Join our blockchain team to develop decentralized applications and smart contracts. You'll work with Ethereum, Solidity, and Web3.js to build secure, scalable blockchain solutions. This role involves researching new protocols, optimizing gas fees, and implementing best practices for smart contract security. You'll collaborate with frontend developers to create seamless dApp experiences and contribute to our open-source blockchain projects. Strong candidates will have experience with DeFi protocols, NFT standards, and layer 2 scaling solutions.",
    requirements: [
      "3+ years software development experience",
      "1+ years hands-on blockchain development",
      "Proficiency in Solidity and smart contract development",
      "Understanding of cryptographic principles",
      "Experience with Truffle/Hardhat and testing frameworks",
      "Knowledge of Ethereum improvement proposals"
    ],
    postedAt: "2025-06-27",
    endDate: "2025-07-27"
  },
  {
    id: 19,
    title: "AR/VR Developer",
    category: "Extended Reality",
    company: "RealityLabs",
    location: "Lagos, Nigeria",
    description: "Create immersive augmented and virtual reality experiences using Unity and Unreal Engine. You'll develop interactive 3D applications, optimize performance for various devices, and implement spatial computing features. This creative technical role involves working with 3D artists and designers to bring concepts to life while solving unique challenges in AR/VR development. Projects range from enterprise training simulations to consumer entertainment applications. Strong candidates will have experience with ARKit/ARCore, VR SDKs, and 3D mathematics.",
    requirements: [
      "2+ years AR/VR development experience",
      "Strong Unity or Unreal Engine skills",
      "Understanding of 3D graphics and shaders",
      "Experience with C# or C++ programming",
      "Knowledge of performance optimization for XR",
      "Portfolio of AR/VR projects"
    ],
    postedAt: "2025-06-28",
    endDate: "2025-07-28"
  },
  {
    id: 20,
    title: "Growth Marketing Manager",
    category: "Marketing",
    company: "ScaleUp Digital",
    location: "Remote",
    description: "Lead our growth marketing initiatives to acquire and retain customers for our SaaS products. You'll develop and execute data-driven marketing campaigns across multiple channels (paid, email, content, SEO). This role involves analyzing metrics, A/B testing strategies, and optimizing conversion funnels. You'll work closely with product and sales teams to align messaging with user needs while managing marketing automation tools and CRM systems. Strong candidates will have experience with SaaS marketing, funnel optimization, and marketing technology stacks.",
    requirements: [
      "5+ years digital marketing experience",
      "Proven track record of driving user growth",
      "Expertise in marketing analytics and attribution",
      "Experience with marketing automation tools",
      "Strong copywriting and messaging skills",
      "Understanding of SaaS business models"
    ],
    postedAt: "2025-06-29",
    endDate: "2025-07-29"
  },
  {
    id: 21,
    title: "Chief Technology Officer",
    category: "Executive",
    company: "NexGen Innovations",
    location: "Hybrid - Lagos",
    description: "As CTO, you'll lead our technology strategy and engineering organization. This executive role involves setting technical vision, making architecture decisions, and scaling our engineering teams. You'll evaluate emerging technologies, manage technical debt, and ensure our systems support business growth. Responsibilities include budgeting for technology initiatives, representing the company at industry events, and fostering engineering excellence. Strong candidates will have experience scaling technology organizations, managing distributed teams, and aligning technical strategy with business objectives.",
    requirements: [
      "10+ years technology leadership experience",
      "Proven track record of scaling engineering teams",
      "Deep technical expertise in modern software development",
      "Strong business acumen and strategic thinking",
      "Excellent leadership and communication skills",
      "Experience with fundraising and investor relations"
    ],
    postedAt: "2025-06-30",
    endDate: "2025-07-30"
  }
];

export default jobs;