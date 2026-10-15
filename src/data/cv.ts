export type CvLanguage = "en" | "id";

export interface CvVariant {
  id: string;
  label: string;
  description: string;
  paths: Record<CvLanguage, string>;
}

export const cvVariants: CvVariant[] = [
  {
    id: "master-resume",
    label: "Master Resume",
    description: "Complete resume",
    paths: {
      en: "/cv/Alfarizi_Master_Resume.pdf",
      id: "/cv/Alfarizi_Master_Resume.pdf",
    },
  },
  {
    id: "software-engineer",
    label: "Software Engineer",
    description: "Software engineering resume",
    paths: {
      en: "/cv/Alfarizi_Software.pdf",
      id: "/cv/Alfarizi_Software.pdf",
    },
  },
  {
    id: "java-backend",
    label: "Java Backend",
    description: "Java backend resume",
    paths: {
      en: "/cv/Alfarizi_Java.pdf",
      id: "/cv/Alfarizi_Java.pdf",
    },
  },
  {
    id: "fullstack",
    label: "Full Stack",
    description: "Full-stack developer resume",
    paths: {
      en: "/cv/Alfarizi_FullStack.pdf",
      id: "/cv/Alfarizi_FullStack.pdf",
    },
  },
  {
    id: "frontend",
    label: "Frontend",
    description: "Frontend developer resume",
    paths: {
      en: "/cv/Alfarizi_Frontend.pdf",
      id: "/cv/Alfarizi_Frontend.pdf",
    },
  },
  {
    id: "ai-python",
    label: "AI & Python",
    description: "AI and Python resume",
    paths: {
      en: "/cv/Alfarizi_AI.pdf",
      id: "/cv/Alfarizi_AI.pdf",
    },
  },
];
