import { AiFillDatabase } from "react-icons/ai";
import { LucideHammer } from "lucide-react";
import {
  SiPandas,
  SiPlotly,
  SiNumpy,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiCplusplus,
  SiC,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiBun,
  SiMysql,
  SiRedis,
  SiSupabase,
  SiCodepen,
  SiNextdotjs,
  SiGithub,
  SiHashnode,
  SiInstagram,
  SiLeetcode,
  SiLinkedin,
  SiMedium,
  SiX,
  SiFiverr,
  SiAxios,
  SiFirebase,
  SiGraphql,
  SiJson,
  SiPostman,
  SiSwagger,
  SiDocker,
  SiGithubactions,
  SiGooglecloud,
  SiServerfault,
  SiPostgresql,
  SiPrisma,
  SiAstra,
  SiDjango,
  SiFastapi,
  SiGoogle,
  SiLangchain,
  SiNestjs,
  SiOllama,
  SiOpenai,
} from "react-icons/si";
import type { IconType } from "react-icons";

import {
  LucideBadge,
  LucideMousePointerClick,
  LucidePhoneCall,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export interface SocialLink {
  href: string;
  icon: IconType;
  label: string;
}

export interface Project {
  id: number;
  name: string;
  imageSrc: string;
  gallery: string[];
  techStacks: string;
  description?: string;
  githubLink: string;
  liveLink?: string;
}

export interface SkillItem {
  icon: IconType;
  label: string;
}

export interface SkillCategory {
  title: string;
  icon: IconType | LucideIcon;
  skills: SkillItem[];
}

export interface Internship {
  role: string;
  companyName: string;
  fromDate: string;
  toDate: string;
  modeOfWork: string;
  workDone: string[];
  TechStack: string[];
}

export interface NavLink {
  href: string;
  label: string;
}

// =============================================================================
// SOCIAL LINKS - Single Source of Truth
// =============================================================================

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/Anshulsharmacode",
    icon: SiGithub,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/anshul-sharma-8386ansh",
    icon: SiLinkedin,
    label: "LinkedIn",
  },
  { href: "https://x.com/Anshulsh8386", icon: SiX, label: "X (Twitter)" },
  {
    href: "https://medium.com/@anshulsharmasde",
    icon: SiMedium,
    label: "Medium",
  },
];

// =============================================================================
// PROJECTS DATA
// =============================================================================

export const projectsData: Project[] = [
  {
    id: 6,
    name: "E-Commerce Agency Platform",
    imageSrc:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      // "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
    ],
    techStacks: "AWS Lambda, SQS, Node.js/NestJS, React, Capacitor",
    description:
      "Built a full-stack e-commerce platform with role-based access (Admin, Employee, User), secure authentication, AWS SQS + Lambda image processing, and a responsive admin dashboard for products, users, and orders. Added a Capacitor mobile application for cross-platform deployment.",
    githubLink: "https://github.com/Anshulsharmacode/E-commerce-agency",
  },
  {
    id: 7,
    name: "Tool-calling voice/text agent",
    imageSrc:
      "https://images.unsplash.com/photo-1677442135136-760c813028c0?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      // "https://images.unsplash.com/photo-1677442135136-760c813028c0?auto=format&fit=crop&w=1600&q=80",
    ],
    techStacks: "Ollama, LangChain, Python, Whisper, LLMs",
    description:
      "Developed a local AI agent for voice and text interaction with tool-calling using Ollama and LangChain. Implemented function-calling for file operations, web search, command execution, and task planning, with Whisper STT logging and a secure command-execution sandbox.",
    githubLink: "https://github.com/Anshulsharmacode/Voice_Agent",
  },
  {
    id: 1,
    name: "PDF Chatbot using RAG and LLM",
    imageSrc:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "/pdf_bot/p2.png",
      "/pdf_bot/p3.png",
      "/pdf_bot/p4.png",
      "/pdf_bot/p5.png",
      "/pdf_bot/p6.png",
    ],
    techStacks: "Python, Gemini, RAG, Ollama",
    description:
      "Built a chat-with-PDF app integrating Gemini with Retrieval-Augmented Generation (RAG). Used nomic-embed-text:latest from Ollama locally and optimized chat history with aggregation pipelines.",
    githubLink: "https://github.com/Anshulsharmacode/Pdf_ChatBoat",
  },
  {
    id: 2,
    name: "Medicine Chatbot using RAG and LLM",
    imageSrc:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "/chat_bot/chat1.png",
      "/chat_bot/chat2.png",
      "/chat_bot/chat3.png",
    ],
    techStacks: "Python, LLM, RAG, Semantic Search",
    description:
      "Developed a medicine chatbot using Retrieval-Augmented Generation (RAG) and LLMs for accurate, real-time medical information with semantic and keyword search.",
    githubLink: "https://github.com/Anshulsharmacodes/Medicine-ai",
    liveLink: "https://medicine-ui.vercel.app",
  },
  {
    id: 3,
    name: "Mysterious Message App",
    imageSrc:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "/messageApp/me1.png",
      "/messageApp/me2.png",
      "/messageApp/me3.png",
      "/messageApp/me4.png",
      "/messageApp/me5.png",
      "/messageApp/me6.png",
    ],
    techStacks: "Next.js, TypeScript, Auth, Email",
    description:
      "Anonymous messaging platform with AI suggestions, secure authentication, and email verification built with a modern full-stack architecture.",
    githubLink: "https://github.com/Anshulsharmacode/message_app",
    liveLink: "https://message-app-pied.vercel.app/",
  },
  {
    id: 4,
    name: "Lung Cancer Classification (Major Project)",
    imageSrc:
      "data:image/jpeg;base64,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",
    gallery: [
      "/Major/m1.png",
      "/Major/m2.png",
      "/Major/m3.png",
      "/Major/m4.png",
      "/Major/m5.png",
      "/Major/m6.png",
    ],
    techStacks: "Python, Random Forest, Gradient Boosting, Next.js",
    description:
      "Lung cancer classifier using CT scans with Random Forest and Gradient Boosting. Built a Next.js frontend for image input and prediction results.",
    githubLink: "https://github.com/Anshulsharmacode/final-Major",
    liveLink: "https://final-major.vercel.app/",
  },
  {
    id: 5,
    name: "React Flow Interactive Guide",
    imageSrc:
      "data:image/jpeg;base64,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",
    gallery: ["/React_flow.png"],
    techStacks: "React, React Flow, AI Suggestions",
    description:
      "Interactive decision-making web app built with React Flow and AI-based suggestions, ending with personalized recommendations.",
    githubLink: "https://github.com/Anshulsharmacode/react-flow",
    liveLink: "https://react-flow-orcin.vercel.app/",
  },
  {
    id: 8,
    name: "First AI Agent",
    imageSrc:
      "https://images.unsplash.com/photo-1677442135136-760c813028c0?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      // "https://images.unsplash.com/photo-1677442135136-760c813028c0?auto=format&fit=crop&w=1600&q=80",
    ],
    techStacks: "Ollama, LangChain, Python    , LLMs",
    description:
      "This is my first Agentic AI project. Small demo agent that uses LangChain + Google Generative AI (Gemini) to run tools. Primary purpose: demo registering a simple tool (open_webpage) and invoking an LLM-backed agent.",
    githubLink: "https://github.com/Anshulsharmacode/First_Agentic_AI",
  },
];

export const linksData = [];

export const skillCategories = [
  {
    title: "Full Stack",
    icon: SiJavascript,
    skills: [
      { icon: SiReact, label: "React" },
      { icon: SiNextdotjs, label: "Next.js" },
      { icon: SiNodedotjs, label: "Node.js" },
      { icon: SiNestjs, label: "NestJS" },
      { icon: SiDjango, label: "Django" },
      { icon: SiFastapi, label: "FastAPI" },
    ],
  },
  {
    title: "Gen AI",
    icon: SiOpenai,
    skills: [
      { icon: SiPython, label: "RAG (Retrieval-Augmented Generation)" },
      { icon: SiOpenai, label: "LLM Integration" },
      { icon: SiLangchain, label: "LLM Workflows (LangChain)" },
      { icon: SiPython, label: "Agentic AI Systems" },
      { icon: SiOpenai, label: "Function Calling" },
      { icon: SiOpenai, label: "MCP Server" },
      { icon: SiOllama, label: "Ollama" },
      { icon: SiGoogle, label: "Google Gemini" },
    ],
  },

  {
    title: "ML (Basics)",
    icon: SiReact,
    skills: [
      { icon: SiPython, label: "Machine Learning Basics" },
      // { icon: SiCodepen, label: "Generative AI Integration" },
      // { icon: SiCodepen, label: "RAG and LLM Workflows" },
    ],
  },
  {
    title: "API Integration",
    icon: SiNodedotjs,
    skills: [
      { icon: SiExpress, label: "RESTful APIs" },
      { icon: SiGraphql, label: "GraphQL APIs" },
      { icon: SiAxios, label: "API Consumption (Axios / Fetch)" },
      { icon: SiPostman, label: "API Testing & Debugging" },
      { icon: SiSwagger, label: "API Documentation (Swagger / OpenAPI)" },
      { icon: SiFirebase, label: "Third-party API Integration" },
      { icon: SiNodedotjs, label: "Middleware & Authentication (JWT / OAuth)" },
      { icon: SiJson, label: "JSON & Data Serialization" },
    ],
  },

  {
    title: "Cloud (Basic)",
    icon: SiServerfault,
    skills: [
      { icon: SiServerfault, label: "AWS (EC2, S3, IAM Basics)" },
      { icon: SiGooglecloud, label: "Google Cloud (Compute Engine, Storage)" },
      { icon: SiDocker, label: "Containerization Basics (Docker)" },
      { icon: SiGithubactions, label: "CI/CD Basics" },
      { icon: SiNodedotjs, label: "Cloud Deployment (Node.js Apps)" },
      { icon: SiFirebase, label: "FireBase" },
    ],
  },

  {
    title: "Database",
    icon: AiFillDatabase,
    skills: [
      { icon: SiMongodb, label: "MongoDB (NoSQL)" },
      { icon: SiMysql, label: "MySQL (Relational DB)" },
      { icon: SiPostgresql, label: "PostgreSQL" },
      { icon: SiAstra, label: "Astra DB(Vector DB)" },

      // { icon: SiMongodb, label: "Mongo" },
      // { icon: SiMysql, label: "Database Design & Normalization" },
      // { icon: SiRedis, label: "Query Optimization & Indexing" },
    ],
  },
  {
    title: "Tools",
    icon: SiGithub,
    skills: [
      { icon: SiGithub, label: "Git & GitHub" },
      { icon: SiCodepen, label: "VS Code" },
      { icon: SiDocker, label: "Docker" },
      { icon: SiPostman, label: "Postman" },
    ],
  },
];

export const navigationItems = [
  { to: "/skills", text: "SKILLS", icon: LucideHammer },
  { to: "/projects", text: "PROJECTS", icon: LucideBadge },
  {
    to: "/important-links",
    text: "IMPORTANT LINKS",
    icon: LucideMousePointerClick,
  },
  // { to: '/qualifications', text: 'QUALIFICATIONS', icon: LucideSchool },
  { to: "/contact", text: "CONTACT", icon: LucidePhoneCall },
];

export const internshipData: Internship[] = [
  {
    role: "Software Development Engineer",
    companyName: "AI Caller",
    fromDate: "june 2025",
    toDate: "Present",
    modeOfWork: "Full-Time",
    workDone: [
      // "Updated the internal flow-builder by experimenting with XState orchestration and later migrating to Pipecat for a more maintainable workflow.",
      // "Worked with distributed task processing where jobs enter SQS and are handled by worker services for call flow execution.",
      "Re-architected a React Flow orchestration engine from branch-heavy control logic to a deterministic state-machine runtime with explicit transition contracts.",
      "Engineered a bulk-call failure detection mechanism that monitors job completion status and triggers automated email notifications upon failure.",

      "Built a call analytics pipeline that aggregates call-level data into structured metrics capturing outcomes, durations, and failure patterns to surface operational visibility across the system",
      "Resolved duplicate call events in the SQS queue by identifying repeated jobs, removing redundant entries, and triggering automated notifications to maintain pipeline integrity.",
      "Implemented backend features using MongoDB aggregation pipelines to extract and structure information from uploaded documents, expanding the system knowledge base.",
      "Integrated LLM-powered document processing to intelligently parse and interpret unstructured content, enabling context-aware information retrieval across the knowledge base.",
    ],
    TechStack: [
      "XState",
      "Pipecat",
      "AWS SQS",
      "MongoDB",
      "Firebase",
      "Node.js",
      "REST APIs",
      "LLM",
      "Gen Ai",
    ],
  },
  {
    role: "Software Development Engineer Intern",
    companyName: "AI Caller",
    fromDate: "April 2025",
    toDate: "June 2025",
    modeOfWork: "Internship",
    workDone: [
      // "Updated the internal flow-builder by experimenting with XState orchestration and later migrating to Pipecat for a more maintainable workflow.",
      // "Worked with distributed task processing where jobs enter SQS and are handled by worker services for call flow execution.",
      "Built a Firebase web app with an inbuilt billing dashboard and workflow management for 3 user types (Admin,Manager, Employee), with secure login and data storage via Firestore.",
      "Added REST API endpoints and backend logic to support new UI features and improve overall workflow usability.",
      "Developed a workflow-cloning process that duplicated configurations, rules, and metadata with safe validation,",
    ],
    TechStack: [
      "XState",
      "Pipecat",
      "AWS SQS",
      "MongoDB",
      "Firebase",
      "Node.js",
      "REST APIs",
      "LLM",
      "Gen Ai",
    ],
  },
  {
    role: "Contract Work",
    companyName: "OCS Agriculture",
    fromDate: "Dec 2025",
    toDate: "Jan 2026",
    modeOfWork: "Contract",
    workDone: [
      "Built a field management platform with an inbuilt CRM for 6 user types (Admin, Editor, Dealer, and 3 employee roles), shipped in under 1 month with SSO login and secured APIs.",
      "Launched a cross-platform mobile app using Vite and Capacitor, crossed 500+ installs within the first month.",
      "Built a quotation workflow where unassigned dealer requests automatically reach the admin, keeping every lead tracked and assigned without manual follow-up.",
      "Deployed the solution to production ensuring high availability and seamless user onboarding.",
    ],
    TechStack: ["React", "Vite", "Capacitor", "Node.js", "SSO", "CRM"],
  },

  {
    role: "Freelance Full Stack Developer",
    companyName: "Self-Employed",
    fromDate: "Jan 2024",
    toDate: "Present",
    modeOfWork: "Freelancing",
    workDone: [
      "Delivered 5+ full-stack web applications using React and Next.js.",
      "Developed backend services and REST APIs with Node.js, integrating authentication and role-based access control.",
      "Connected applications with third-party services and optimized performance.",
      "Maintained client communication and delivered projects on time.",
    ],
    TechStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
];

export const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/internships", label: "Internships" },
];
