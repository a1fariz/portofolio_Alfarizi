import { TechCategory } from "@/lib/types";

export const techCategories: TechCategory[] = [
  {
    name: "Languages",
    items: ["Java", "Python", "JavaScript"],
  },
  {
    name: "Backend",
    items: ["Spring Boot", "Spring Security", "Django", "RESTful APIs", "Microservices"],
  },
  {
    name: "Frontend",
    items: ["React.js", "HTML5", "CSS3", "Bootstrap", "Thymeleaf"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "SQL", "Relational Schema Design", "ChromaDB"],
  },
  {
    name: "AI & ML",
    items: ["LangChain", "LLM Integration", "Prompt Engineering", "RAG"],
  },
  {
    name: "Cloud & Tools",
    items: ["IBM Cloud", "Docker", "GitHub Actions", "Git", "Maven", "BCrypt"],
  },
  {
    name: "Concepts",
    items: ["RESTful API Design", "Microservices", "JWT", "RBAC", "CI/CD", "OOP"],
  },
];

export const softSkills: string[] = [
  "Team Leadership",
  "Problem Solving",
  "Effective Communication",
  "Adaptability",
];
