import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "apexgrid",
    title: "ApexGrid — F1 Race Ticket Booking Platform",
    description:
      "Production-ready microservices application with 3 independent Spring Boot services (API Gateway, User Service, Race Service) via Spring Cloud Gateway. JWT auth, RBAC (USER/ADMIN), real-time quota management with PostgreSQL triggers, 30-minute auto-expiry scheduler, full Admin Panel with CRUD & analytics dashboard via DB views, Swagger UI, and premium React 18 frontend with glassmorphism UI.",
    tags: ["Java 17", "Spring Boot 3.2", "Spring Cloud Gateway", "React 18", "TailwindCSS", "PostgreSQL", "JWT", "Docker"],
    status: "In Deployment & Maintenance",
    github: "https://github.com/a1fariz/ApexGrid",
    highlight: "Microservices architecture + RBAC + real-time quota system",
  },
  {
    id: "studymate-ai",
    title: "StudyMate AI — Intelligent RAG-Based Study Assistant",
    description:
      "High-performance asynchronous RAG pipeline for processing textbook PDFs and generating personalised study content. Semantic search index via ChromaDB & sentence-transformers, Google Gemini 2.0 Flash orchestration (summaries, quizzes, 3D flip flashcards, dynamic study plans), page-specific citations via PyMuPDF, rate limiter (60 req/min), JWT auth with bcrypt, Docker Compose, and CI/CD via GitHub Actions.",
    tags: ["Python", "LangChain", "ChromaDB", "Google Gemini 2.0 Flash", "PyMuPDF", "Docker", "JWT", "GitHub Actions"],
    status: "In Deployment & Maintenance",
    github: "https://github.com/a1fariz/StudyMateAI",
    highlight: "RAG pipeline + AI integration + CI/CD",
  },
  {
    id: "finance-management",
    title: "Finance Management System",
    description:
      "Full-stack finance web application with multi-role authentication (BCrypt + Spring Security), complete CRUD operations, real-time financial dashboard, normalised PostgreSQL schema, and MVC backend with clean REST API endpoints.",
    tags: ["Java", "Spring Boot", "Spring Security", "Thymeleaf", "PostgreSQL", "BCrypt"],
    status: "Completed",
    github: "https://github.com/a1fariz/financeall_project_java_alfariz",
    highlight: "Full-stack MVC + multi-role auth",
  },
  {
    id: "universe-interactive",
    title: "Universe Interactive Website",
    description:
      "Space-themed interactive website with scroll-triggered animations, live astronomy data via REST API, and persistent dark/light mode toggle.",
    tags: ["HTML5", "CSS3", "JavaScript", "Astronomy API", "Animation Libraries"],
    status: "Completed",
    github: "https://github.com/a1fariz/projek-website-your-age-other-planet",
    highlight: "Interactive animation + API integration",
  },
];
