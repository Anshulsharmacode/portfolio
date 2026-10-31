import { internshipData } from "@/constants/constant";
import type { Internship } from "@/constants/constant";

type ExperienceDisplayItem = Internship & {
  id: string;
  summary: string;
  additionalSummary?: string;
  emphasis?: string[];
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
    "Fine-tuned machine learning models for task-specific use cases, adapting them to domain data and evaluating results against general-purpose baselines to improve accuracy on the target task.",
  additionalSummary:
    "Quantized trained models to cut size and memory footprint, enabling efficient on-device inference and low-latency deployment on resource-constrained edge hardware while preserving task accuracy.",
  emphasis: [
    "Fine-tuned machine learning models",
    "general-purpose baselines",
    "Quantized trained models",
    "on-device inference",
    "preserving task accuracy",
  ],
  highlights: [
    "Task-specific model fine-tuning",
    "Model quantization for edge deployment",
  ],
  workDone: [
    "Fine-tuned machine learning models for task-specific use cases, adapting them to domain data and evaluating results against general-purpose baselines to improve accuracy on the target task.",
    "Quantized trained models to cut size and memory footprint, enabling efficient on-device inference and low-latency deployment on resource-constrained edge hardware while preserving task accuracy.",
  ],
  TechStack: [],
};

// Presentation copy stays separate from the original experience records.
const experienceCopy: Record<
  string,
  Pick<
    ExperienceDisplayItem,
    "summary" | "additionalSummary" | "emphasis" | "highlights"
  >
> = {
  "AI Caller:Full-Time": {
    summary:
      "Re-architected the React Flow conversation builder into a state-machine runtime using XState and Pipecat, making AI voice-call flows predictable and maintainable. Reduced latency by optimizing function calling to use a single LLM call instead of two.",
    additionalSummary:
      "Migrated the application database from NoSQL to PostgreSQL and built call analytics to track outcomes, durations, and failure patterns. Implemented automated campaign failure alerts and duplicate-job detection for AWS SQS workers to improve delivery reliability.",
    emphasis: [
      "state-machine runtime",
      "Reduced latency",
      "single LLM call instead of two",
      "NoSQL to PostgreSQL",
      "call analytics",
      "automated campaign failure alerts",
      "duplicate-job detection",
    ],
    highlights: [
      "Voice-flow runtime with XState & Pipecat",
      "Single-call LLM function calling for lower latency",
      "Document knowledge base for RAG",
      "Call outcome & performance analytics",
      "SQS failure alerts & queue deduplication",
    ],
  },
  "OCS Agriculture:Contract": {
    summary:
      "Digitized the company’s entire workflow, moving operations from paperwork and phone calls to a centralized online platform. Built and deployed field management, an integrated CRM, secure APIs, and a cross-platform mobile app in under a month.",
    emphasis: [
      "Digitized the company’s entire workflow",
      "centralized online platform",
      "under a month",
      "500+ mobile installs",
    ],
    highlights: [
      "6 user types with SSO login",
      "500+ mobile installs in the first month",
      "Automated dealer quotation routing",
      "Production deployment & user onboarding",
    ],
  },
  "AI Caller:Internship": {
    summary:
      "Developed backend APIs to support new application features and built workflow cloning to reuse configurations, rules, and metadata with validation, simplifying workflow setup.",
    additionalSummary:
      "Built a Firebase web app with billing and workflow management for Admin, Manager, and Employee roles, integrating secure login, Firestore storage, and REST APIs to support day-to-day operations.",
    emphasis: [
      "backend APIs",
      "workflow cloning",
      "billing and workflow management",
      "secure login",
    ],
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
      emphasis: copy?.emphasis,
      highlights: copy?.highlights ?? experience.workDone.slice(1),
    };
  })
  .flatMap((experience) =>
    experience.id === "AI Caller:Full-Time"
      ? [experience, unintellectExperience]
      : [experience],
  );
