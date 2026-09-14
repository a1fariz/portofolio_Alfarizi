export type CvLanguage = "en" | "id";

export interface CvVariant {
  id: string;
  label: string;
  description: string;
  paths: Record<CvLanguage, string>;
}

export const cvVariants: CvVariant[] = [
  {
    id: "general",
    label: "General",
    description: "Software Engineer — distributed microservices, modular monoliths & RAG",
    paths: {
      en: "/cv/AlfaRizi_CV_EN.pdf",
      id: "/cv/AlfaRizi_CV_ID.pdf",
    },
  },
  {
    id: "backend",
    label: "Backend",
    description: "Backend Developer — Quarkus 3.15, Spring Boot 3.2, PostgreSQL & Escrow",
    paths: {
      en: "/cv/AlfaRizi_CV_Backend_EN.pdf",
      id: "/cv/AlfaRizi_CV_Backend_ID.pdf",
    },
  },
  {
    id: "fullstack",
    label: "FullStack",
    description: "Full-Stack Developer — React 19, Next.js 14, Quarkus & Spring Boot",
    paths: {
      en: "/cv/AlfaRizi_CV_FullStack_EN.pdf",
      id: "/cv/AlfaRizi_CV_FullStack_ID.pdf",
    },
  },
];
