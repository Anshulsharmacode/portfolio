import { internshipData } from "@/constants/constant";
import type { Internship } from "@/constants/constant";

type ExperienceDisplayItem = Internship & {
  id: string;
  summary: string;
  additionalSummary?: string;
  highlights: string[];
  website?: string;
};

const unintellectExperience: ExperienceDisplayItem = {
  id: "Unintellect:Part-Time",
  companyName: "Unintellect",
  website: "https://unintellect.com/",
  role: "Software Engineer · Part-time",
  modeOfWork: "Part-Time",
  fromDate: "",
  toDate: "",
  summary:
    "Fine-tuned and quantized models for specific tasks and deployment on edge devices.",
  highlights: [
    "Task-specific model fine-tuning",
    "Model quantization for edge deployment",
  ],
  workDone: [
    "Fine-tuned and quantized models for specific tasks and deployment on edge devices.",
  ],
  TechStack: [],
};

// Presentation copy stays separate from the original experience records.
const experienceCopy: Record<
  string,
  Pick<ExperienceDisplayItem, "summary" | "additionalSummary" | "highlights">
> = {
  "AI Caller:Full-Time": {
    summary:
      "Re-architected internal conversation flows using a state-machine architecture and migrated the database from NoSQL to PostgreSQL. Built supporting systems for document retrieval, call analytics, and campaign delivery.",
    highlights: [
      "Voice-flow runtime with XState & Pipecat",
      "Document knowledge base for RAG",
      "Call outcome & performance analytics",
      "SQS failure alerts & queue deduplication",
    ],
  },
  "OCS Agriculture:Contract": {
    summary:
      "Built and deployed a field management platform with an integrated CRM, secure APIs, and a cross-platform mobile app in under a month.",
    highlights: [
      "6 user types with SSO login",
      "500+ mobile installs in the first month",
      "Automated dealer quotation routing",
      "Production deployment & user onboarding",
    ],
  },
  "AI Caller:Internship": {
    summary:
      "Developed backend APIs and workflow cloning for AI Caller, enabling reuse of configurations, rules, and metadata with validation.",
    additionalSummary:
      "Developed a Firebase web app with billing and workflow management for three user roles, backed by secure login, Firestore storage, and REST APIs.",
    highlights: [
      "Admin, Manager & Employee workflows",
      "Billing dashboard & backend APIs",
      "Workflow cloning with safe validation",
    ],
  },
};

const companyWebsites: Record<string, string> = {
  "AI Caller": "https://aicaller.io/",
  "OCS Agriculture": "https://omcropscience.com/",
};

export const experienceDisplayData: ExperienceDisplayItem[] = internshipData
  .filter((experience) => experience.modeOfWork !== "Freelancing")
  .map((experience) => {
    const id = `${experience.companyName}:${experience.modeOfWork}`;
    const copy = experienceCopy[id];

    return {
      ...experience,
      id,
      website: companyWebsites[experience.companyName],
      summary: copy?.summary ?? experience.workDone[0] ?? "",
      additionalSummary: copy?.additionalSummary,
      highlights: copy?.highlights ?? experience.workDone.slice(1),
    };
  })
  .flatMap((experience) =>
    experience.id === "AI Caller:Full-Time"
      ? [experience, unintellectExperience]
      : [experience],
  );
