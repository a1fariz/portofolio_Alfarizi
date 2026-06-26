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
    id: "finance-feasibility",
    title: "Finance Feasibility — AI-Powered Investment Analysis Platform",
    description:
      "Full-stack AI-powered web application for conducting financial feasibility studies and investment analysis. Automatically calculates critical investment metrics (NPV, IRR, ROI, Payback Period) and integrates with Gemini 3.5 Flash for professional strategic insights. Features secure Firebase authentication, PDF export capabilities, and a Supabase PostgreSQL database managed via Drizzle ORM.",
    tags: [
      "React 19",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "Firebase Auth",
      "Gemini AI",
      "TailwindCSS",
    ],
    status: "Completed",
    github: "https://github.com/a1fariz/finance-feasibility",
    demo: "https://finance-feasibility.alfarizi.my.id/",
    highlight: "Automatic NPV/IRR engine + Gemini AI strategic analysis",
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
    demo: "https://solar-explorer.alfarizi.my.id",
    highlight: "Interactive animation + API integration",
  },
  {
    id: "alpay-wallet",
    title: "ALPAY — Console-Based E-Wallet System",
    description:
      "Terminal-based digital e-wallet system developed in C implementing a secure two-role RBAC (Admin & User) system, complete financial transaction flow (balance transfer, top-up, withdrawal, transaction history), and persistent data management using flat files (.txt) without external database dependencies.",
    tags: ["C", "File Handling", "RBAC", "CLI"],
    status: "Completed",
    github: "https://github.com/a1fariz/ALPAY-E-Wallet",
    highlight: "Digital wallet transactions + RBAC security + File Handling (.txt)",
  },
];
