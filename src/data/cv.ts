export type CvLanguage = "en" | "id";

export interface CvVariant {
  id: string;
  label: string;
  description: string;
  paths: Record<CvLanguage, string>;
}

const tracks = [
  ["software-engineer", "Software Engineer", "Web, backend, mobile and AI applications", "Alfarizi_Software.pdf"],
  ["master-resume", "Master Resume", "Complete project and experience overview", "Alfarizi_Master_Resume.pdf"],
  ["fullstack", "Full Stack", "Web interfaces, APIs and databases", "Alfarizi_FullStack.pdf"],
  ["frontend", "Frontend", "React, Next.js and accessible interfaces", "Alfarizi_Frontend.pdf"],
  ["go-java-backend", "Go / Java Backend", "APIs, transactions and integration tests", "Alfarizi_Junior_Backend_EN.pdf"],
  ["java-backend", "Java Backend", "Spring Boot, Quarkus and PostgreSQL", "Alfarizi_Java.pdf"],
  ["ai-python", "AI & Python", "Python services, vector search and RAG", "Alfarizi_AI.pdf"],
  ["mobile", "Flutter / Mobile", "Flutter, SQLite and explicit synchronization", "Alfarizi_Mobile.pdf"],
  ["it-support", "IT Support", "Hardware, OS support and data validation", "Alfarizi_ITSupport.pdf"],
] as const;

export const cvVariants: CvVariant[] = tracks.map(([id, label, description, fileName]) => ({
  id,
  label,
  description,
  paths: { en: `/cv/${fileName}`, id: `/cv/${fileName}` },
}));
