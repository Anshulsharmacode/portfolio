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
    id: 1,
    name: "PDF Chatbot using RAG and LLM",
    imageSrc: "/pdf_bot/p2.png",
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
    imageSrc: "/chat_bot/chat1.png",
    gallery: ["/chat_bot/chat1.png", "/chat_bot/chat2.png", "/chat_bot/chat3.png"],
    techStacks: "Python, LLM, RAG, Semantic Search",
    description:
      "Developed a medicine chatbot using Retrieval-Augmented Generation (RAG) and LLMs for accurate, real-time medical information with semantic and keyword search.",
    githubLink: "https://github.com/Anshulsharmacodes/Medicine-ai",
    liveLink: "https://medicine-ui.vercel.app",
  },
  {
    id: 3,
    name: "Mysterious Message App",
    imageSrc: "/messageApp/me1.png",
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
    imageSrc: "/Major/m1.png",
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
    imageSrc: "/React_flow.png",
    gallery: ["/React_flow.png"],
    techStacks: "React, React Flow, AI Suggestions",
    description:
      "Interactive decision-making web app built with React Flow and AI-based suggestions, ending with personalized recommendations.",
    githubLink: "https://github.com/Anshulsharmacode/react-flow",
    liveLink: "https://react-flow-orcin.vercel.app/",
  },
];

export const linksData = [];

export const skillCategories = [
  {
    title: "Full Stack",
    icon: SiCodepen,
    skills: [
      { icon: SiReact, label: "React" },
      { icon: SiNextdotjs, label: "Next.js" },
      { icon: SiNodedotjs, label: "Node.js" },
    ],
  },
  {
    title: "AI/ML (Basics)",
    icon: SiReact,
    skills: [
      { icon: SiPython, label: "Machine Learning Basics" },
      { icon: SiCodepen, label: "Generative AI Integration" },
      { icon: SiCodepen, label: "RAG and LLM Workflows" },
    ],
  },
  {
    title: "API Integration",
    icon: SiNodedotjs,
    skills: [
      { icon: SiExpress, label: "RESTful APIs" },
      { icon: SiJavascript, label: "Service Integration" },
      { icon: SiTypescript, label: "Data Communication" },
    ],
  },
  {
    title: "Cloud (Basic)",
    icon: SiCodepen,
    skills: [
      { icon: SiCodepen, label: "AWS Services" },
      { icon: SiCodepen, label: "Cloud Deployment Basics" },
    ],
  },
  {
    title: "Database",
    icon: AiFillDatabase,
    skills: [
      { icon: SiMongodb, label: "MongoDB" },
      { icon: SiMysql, label: "Database Design" },
      { icon: SiRedis, label: "Performance Optimization" },
    ],
  },
  {
    title: "Tools",
    icon: SiGithub,
    skills: [
      { icon: SiGithub, label: "Git" },
      { icon: SiCodepen, label: "VS Code" },
      { icon: SiCodepen, label: "Agile Practices" },
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

export const internshipData = [
  {
    role: "Software Development Engineer Intern",
    companyName: "AI Caller",
    fromDate: "May 2025",
    toDate: "Present",
    modeOfWork: "Internship",
    workDone: [
      "Updated the internal flow-builder by experimenting with XState orchestration and later migrating to Pipecat for a more maintainable workflow.",
      "Worked with distributed task processing where jobs enter SQS and are handled by worker services for call flow execution.",
      "Managed duplicate call events in SQS by removing redundant jobs and triggering automated notifications for clean pipelines.",
      "Implemented MongoDB aggregation pipelines to extract structured information from uploaded documents and expand the knowledge base.",
      "Added REST API endpoints and backend logic to support new UI features and overall workflow usability.",
      "Built workflow cloning to duplicate configurations, rules, and metadata with safe validation.",
      "Developed a Firebase-based app with billing dashboard and secure workflow-management interfaces.",
    ],
    TechStack: [
      "XState",
      "Pipecat",
      "AWS SQS",
      "MongoDB",
      "Firebase",
      "Node.js",
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
