// Central content for the portfolio. Edit here to update the site.

import ibm from '../assets/logos/ibm.svg'
import prudential from '../assets/logos/prudential.svg'
import southernCross from '../assets/logos/southern-cross.png'
import aci from '../assets/logos/aci.png'
import bnz from '../assets/logos/bnz.png'
import ocbc from '../assets/logos/ocbc.png'
import uob from '../assets/logos/uob.png'
import murdoch from '../assets/logos/murdoch.png'
import sikkimManipal from '../assets/logos/sikkim-manipal.jpg'
import niit from '../assets/logos/niit.png'

export const profile = {
  name: 'Sugyant Chettri',
  firstName: 'Sugyant',
  role: 'Senior Software Engineer',
  tagline: 'Java · Microservices · Cloud-Native',
  summary:
    'Senior full stack engineer with 15+ years delivering secure, scalable platforms across banking, insurance and healthcare in New Zealand and Singapore. Currently building KiwiSaver and wealth APIs for the BNZ mobile app, and working AI-first every day.',
  location: 'Manurewa, Auckland, New Zealand',
  email: 'sugyant@gmail.com',
  phone: '+64 2902 379730',
  linkedin: 'https://linkedin.com/in/sugyant',
  github: 'https://github.com/sugyant82',
  cv: '/Sugyant_Chettri_CV.pdf',
  coverLetter: '/Sugyant_Chettri_Cover_Letter.pdf',
  badges: ['NZ Permanent Resident', 'NZ Full Driver Licence (Class 1)', 'Open to opportunities'],
}

export const stats = [
  { value: '15+', label: 'Years of experience' },
  { value: '7', label: 'Industry-leading employers' },
  { value: '2', label: 'Countries (NZ & Singapore)' },
  { value: 'AI-first', label: 'Copilot · MCP · AI Hub' },
]

export const about = {
  paragraphs: [
    'I design and ship cloud-native platforms end to end — from Java and Spring Boot microservices to the React front ends that sit on top of them. Over 15+ years I have delivered mission-critical systems in banking, insurance and healthcare across New Zealand and Singapore.',
    'Today I am a Senior Developer at BNZ, building KiwiSaver and wealth APIs for the bank’s mobile app, owning fortnightly releases, security remediation and production support. I work AI-first with GitHub Copilot, MCP skills and the BNZ AI Hub to move faster while keeping quality high.',
    'Beyond the technology, I’m a team-oriented engineer who values clear communication, pair programming and mentoring — helping teams raise their standards and take ownership of outcomes from design through to production.',
  ],
  highlights: [
    'Leads releases end to end — builds, security scans & rollouts',
    'Has led and mentored teams of 5–6 engineers',
    'Deep in Kubernetes, OpenShift, AWS EKS & CI/CD',
    'MBA (Murdoch University) + B.Tech in Electronics & Comms',
  ],
}

export const skills = [
  {
    title: 'Backend',
    icon: 'server',
    items: ['Java', 'Spring Boot', 'Spring Batch', 'Node.js', 'Express', 'Microservices', 'REST APIs', 'Kafka', 'Redis', 'JPA / Hibernate'],
  },
  {
    title: 'Frontend',
    icon: 'layout',
    items: ['React', 'TypeScript', 'Angular', 'JavaScript', 'Redux'],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    items: ['AWS (EKS, Lambda, DynamoDB, SQS, EC2)', 'Azure (AD B2C, Blob, DevOps)', 'Docker', 'Kubernetes', 'Helm', 'OpenShift', 'ArgoCD', 'Jenkins', 'Spinnaker', 'Kong', '3Scale', 'LaunchDarkly', 'CI/CD'],
  },
  {
    title: 'Data & Observability',
    icon: 'database',
    items: ['Oracle', 'PostgreSQL', 'MySQL', 'MongoDB', 'DB2', 'Splunk', 'ELK', 'Prometheus', 'Grafana', 'Dynatrace'],
  },
  {
    title: 'Quality & Security',
    icon: 'shield',
    items: ['JUnit', 'Mockito', 'Wiremock', 'Jest', 'Selenium', 'JMeter', 'SonarQube', 'Nexus', 'Vulnerability remediation', 'Security scanning'],
  },
  {
    title: 'Ways of Working',
    icon: 'sparkles',
    items: ['AI-assisted dev (Copilot, MCP, AI Hub)', 'Agile', 'Scrumban', 'DevSecOps', 'Pair programming', 'Jira'],
  },
]

export const experience = [
  {
    role: 'Senior Developer',
    company: 'BNZ',
    logo: bnz,
    location: 'Queen Street, Auckland',
    period: 'Aug 2026 – Present',
    current: true,
    points: [
      'Deliver KiwiSaver wealth-domain APIs for the BNZ mobile app using Java & Spring Boot microservices.',
      'Integrated the external FirstScape Apex vendor API, owning financial data extraction and mapping.',
      'Migrating the statements service from MuleSoft to Spring Boot while supporting legacy services.',
      'Own fortnightly Documents API releases: image updates, Nexus vulnerability fixes and security scans.',
      'Operate services on Kubernetes (AWS EKS) & OpenShift via Jenkins/Spinnaker, behind Kong with Redis & Kafka.',
      'Apply AI-assisted engineering with GitHub Copilot, BNZ MCP skills and the BNZ AI Hub.',
    ],
  },
  {
    role: 'Senior Full Stack Developer',
    company: 'Southern Cross Health Insurance',
    logo: southernCross,
    location: 'Auckland CBD',
    period: 'Dec 2023 – Aug 2026',
    points: [
      'Built & deployed Node.js microservices on Red Hat OpenShift with 3Scale API Gateway and ArgoCD GitOps.',
      'Developed an Angular login portal with Azure AD B2C, improving authentication experience and security.',
      'Migrated legacy .NET Core business logic to Node.js microservices for scalability and maintainability.',
      'Designed atomic & composite services to migrate documents from Documentum to Azure Blob & InfoArchive.',
      'Established UAT/test environments with Azure Pipelines CI/CD; mentored junior engineers.',
    ],
  },
  {
    role: 'Full Stack Developer (AVP)',
    company: 'OCBC Bank',
    logo: ocbc,
    location: 'Singapore',
    period: 'Jul 2022 – Nov 2023',
    points: [
      'Led end-to-end migration of a legacy trading app to Java, Spring Boot, React & OpenShift with minimal downtime.',
      'Built RESTful Spring Boot APIs and a React/TypeScript UI, improving transaction responsiveness.',
      'Implemented CI/CD with Jenkins & CloudBees Flow, achieving 94% test coverage via SonarQube quality gates.',
      'Authored Kubernetes & Helm manifests for blue-green, self-healing deployments.',
      'Led the Bonds product go-live and Funds Trade Phase 2 OpenShift migration.',
    ],
  },
  {
    role: 'Software Development Engineer',
    company: 'Prudential',
    logo: prudential,
    location: 'Singapore',
    period: 'Jan 2017 – Jul 2022',
    points: [
      'Developed Java, React & Azure microservices and front end for the primary point-of-sale application.',
      'Delivered a high-performance SQS Engine API to streamline message processing and reduce latency.',
      'Led migration from Dynatrace to Prometheus & Grafana for richer metrics and alerting.',
      'Improved Spring Batch job efficiency ~25% and cut critical SQL query response times by 30%.',
      'Led a team of 5–6 engineers, managed infrastructure releases and introduced pair programming.',
    ],
  },
  {
    role: 'Senior Developer',
    company: 'IBM',
    logo: ibm,
    location: 'Singapore',
    period: 'Dec 2014 – Dec 2016',
    points: [
      'Built & maintained outpatient applications for nine government-run national polyclinics in Singapore —',
      'a system generating millions in monthly revenue.',
    ],
  },
  {
    role: 'Sr. Software Engineer',
    company: 'Nucleus Software (UOB Bank)',
    logo: uob,
    location: 'Singapore',
    period: 'Aug 2011 – Nov 2014',
    points: [
      'Led development of a credit & loan origination system for a major Singapore bank,',
      'including expansion across 19 countries.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'ACI Worldwide',
    logo: aci,
    location: 'Bangalore, India',
    period: 'Apr 2007 – Aug 2011',
    points: ['Built banking product features and user interfaces for a US-based product development company.'],
  },
]

export const projects = [
  {
    title: 'Darjeeling Kitchen',
    tagline: 'MERN food-ordering app · Stripe payments',
    description:
      'A full-stack food-ordering app — browse the menu, build a cart, authenticate and pay with Stripe, end to end. React + Vite front end on a Node/Express & MongoDB backend.',
    tags: ['React', 'Node', 'Express', 'MongoDB', 'Stripe'],
    demo: 'https://darjeelingkitchenfe.vercel.app',
    links: [
      { label: 'Front end', href: 'https://github.com/sugyant82/darjeelingkitchenfe' },
      { label: 'Back end', href: 'https://github.com/sugyant82/darjeelingkitchenbe' },
    ],
  },
  {
    title: 'Darjeeling Kitchen — Admin',
    tagline: 'Admin console for the food app',
    description:
      'The operator side of Darjeeling Kitchen: manage menu items, track orders and keep inventory in sync — built with React, Node and MongoDB.',
    tags: ['React', 'Node', 'MongoDB'],
    demo: 'https://darjeelingkitchenadm.vercel.app',
    links: [{ label: 'Code', href: 'https://github.com/sugyant82/darjeelingkitchenadm' }],
  },
  {
    title: 'Animal Service',
    tagline: 'Spring Boot REST API · Java OOP',
    description:
      'A Spring Boot RESTful service (plus a standalone Java app) that models an animal domain to explore clean inheritance and polymorphism through queryable endpoints.',
    tags: ['Java', 'Spring Boot', 'REST'],
    links: [{ label: 'Code', href: 'https://github.com/sugyant82/animalservice' }],
  },
  {
    title: 'Hillsoft POS',
    tagline: 'Point-of-sale & inventory',
    description:
      'A lightweight point-of-sale and inventory-management interface for small retail — browse stock, ring up sales and keep item counts up to date.',
    tags: ['JavaScript', 'HTML', 'POS'],
    links: [{ label: 'Code', href: 'https://github.com/sugyant82/hillsoft' }],
  },
]

export const companies = [
  { name: 'BNZ', logo: bnz },
  { name: 'Southern Cross', logo: southernCross },
  { name: 'OCBC Bank', logo: ocbc },
  { name: 'Prudential', logo: prudential },
  { name: 'IBM', logo: ibm },
  { name: 'UOB', logo: uob },
  { name: 'ACI Worldwide', logo: aci },
]

export const education = [
  {
    title: 'Master of Business Administration',
    org: 'Murdoch University, Perth (via Kaplan, Singapore)',
    period: '2020 – 2021',
    logo: murdoch,
  },
  {
    title: 'B.Tech, Electronics & Communication Engineering',
    org: 'Sikkim Manipal Institute of Technology, India',
    period: '2001 – 2005',
    logo: sikkimManipal,
  },
  {
    title: 'Accelerated ANIIT, Software Engineering',
    org: 'NIIT Academy, Bangalore',
    period: '2006 – 2007',
    logo: niit,
  },
]

export const certifications = [
  'Microsoft Certified: Azure Fundamentals (2022)',
  'ITIL V4 Foundation (2021)',
  'Pulse Artificial Intelligence Certificate, Levels 1 & 2 (2021)',
]

export const awards = [
  { title: 'OCBC Spot On Award', year: '2022', detail: 'Speedy initiation of React development for the EdgeConnect migration.' },
  { title: 'Prudential “Empathetic” Title', year: '2022', detail: 'Dedication and support for project deliverables.' },
  { title: 'Prudential Spot Award', year: '2021', detail: 'Helping resolve mission-critical issues for other teams.' },
]
