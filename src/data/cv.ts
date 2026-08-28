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
    description: "Software Engineer — all-round profile & system architecture",
    paths: {
      en: "/cv/AlfaRizi_CV_EN.pdf",
      id: "/cv/AlfaRizi_CV_ID.pdf",
    },
  },
  {
    id: "backend",
    label: "Backend",
    description: "Backend Developer — Java 17, Spring Boot 3, PostgreSQL",
    paths: {
      en: "/cv/AlfaRizi_CV_Backend_EN.pdf",
      id: "/cv/AlfaRizi_CV_Backend_ID.pdf",
    },
  },
  {
    id: "fullstack",
    label: "FullStack",
    description: "Full-Stack Developer — React 19, Next.js, Spring Boot",
    paths: {
      en: "/cv/AlfaRizi_CV_FullStack_EN.pdf",
      id: "/cv/AlfaRizi_CV_FullStack_ID.pdf",
    },
  },
];
