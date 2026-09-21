export type CvLanguage = "en" | "id";

export interface CvVariant {
  id: string;
  label: string;
  description: string;
  paths: Record<CvLanguage, string>;
}

export const cvVariants: CvVariant[] = [
  {
    id: "software-engineer",
    label: "Software Engineer",
    description: "Software Engineer — Java, Spring Boot, Quarkus, React, Next.js, Python & PostgreSQL",
    paths: {
      en: "/cv/Alfarizi_CV_Software_Engineer.pdf",
      id: "/cv/Alfarizi_CV_Software_Engineer.pdf",
    },
  },
  {
    id: "java-backend",
    label: "Java Backend",
    description: "Java Backend Engineer — Spring Boot, Quarkus, PostgreSQL, concurrency & Docker",
    paths: {
      en: "/cv/Alfarizi_CV_Java_Backend.pdf",
      id: "/cv/Alfarizi_CV_Java_Backend.pdf",
    },
  },
  {
    id: "fullstack",
    label: "Full Stack",
    description: "Full Stack Developer — React, Next.js, TypeScript, API integration & Java/Python backends",
    paths: {
      en: "/cv/Alfarizi_CV_Full_Stack_Developer.pdf",
      id: "/cv/Alfarizi_CV_Full_Stack_Developer.pdf",
    },
  },
  {
    id: "ai-python",
    label: "AI & Python",
    description: "Python & AI Engineer — FastAPI, RAG pipelines, vector search & microservices",
    paths: {
      en: "/cv/Alfarizi_CV_AI_Python.pdf",
      id: "/cv/Alfarizi_CV_AI_Python.pdf",
    },
  },
];
