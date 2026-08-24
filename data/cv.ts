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
    description: "Software Engineer — all-round profile",
    paths: {
      en: "/cv/AlfaRizi_CV_EN.pdf",
      id: "/cv/AlfaRizi_CV_ID.pdf",
    },
  },
  {
    id: "backend",
    label: "Backend",
    description: "Backend Developer — Java, Spring Boot, PostgreSQL",
    paths: {
      en: "/cv/AlfaRizi_CV_Backend_EN.pdf",
      id: "/cv/AlfaRizi_CV_Backend_ID.pdf",
    },
  },
  {
    id: "fullstack",
    label: "FullStack",
    description: "Full-Stack Developer — React, Next.js, Spring Boot",
    paths: {
      en: "/cv/AlfaRizi_CV_FullStack_EN.pdf",
      id: "/cv/AlfaRizi_CV_FullStack_ID.pdf",
    },
  },
];

export const defaultCvVariant: CvVariant = cvVariants[0];
export const defaultCvLanguage: CvLanguage = "en";

export function cvFileName(path: string): string {
  return path.split("/").pop() ?? path;
}
