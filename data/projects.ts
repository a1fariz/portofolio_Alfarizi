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
    category: "Java / Backend",
    thumbnail: "/images/projects/apexgrid.png",
    architecture: {
      summary: "Distributed microservices architecture built with Java Spring Boot & Spring Cloud Gateway, featuring real-time quota synchronization and shared RBAC authentication.",
      flow: [
        "Client Request (React 18 UI)",
        "Spring Cloud Gateway (Routing & JWT Filter)",
        "Microservices (User Service / Race Ticket Service)",
        "PostgreSQL DB Triggers & 30-min Auto-Expiry Scheduler",
      ],
      components: [
        { title: "API Gateway", desc: "Spring Cloud Gateway handles centralized routing, rate limiting, and JWT token validation." },
        { title: "User & Auth Service", desc: "Manages BCrypt encrypted password credentials, user profiles, and JWT claim validation." },
        { title: "Race & Quota Service", desc: "High-concurrency ticket booking engine powered by PostgreSQL triggers for real-time inventory management." },
        { title: "Analytics & Views", desc: "Complex PostgreSQL DB views feed real-time sales and reservation metrics to the React Admin Panel." },
      ],
    },
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
    category: "AI & RAG",
    thumbnail: "/images/projects/studymate-ai.png",
    architecture: {
      summary: "Asynchronous Retrieval-Augmented Generation (RAG) system utilizing vector embeddings, semantic search, and LLM orchestration with automated CI/CD deployment.",
      flow: [
        "PDF Upload & PyMuPDF Citation Extraction",
        "Chunking & Embeddings via sentence-transformers",
        "ChromaDB Vector Store Query & Similarity Retrieval",
        "Google Gemini 2.0 Flash Context Injection & Response Generation",
      ],
      components: [
        { title: "PyMuPDF Document Ingestion", desc: "Extracts textual content, pages, and metadata from academic PDF textbooks." },
        { title: "ChromaDB Vector Store", desc: "Indexes document chunks locally for lightning-fast cosine similarity vector searches." },
        { title: "Gemini 2.0 Flash Engine", desc: "Orchestrates prompts for automated summaries, interactive quizzes, and 3D flashcards." },
        { title: "DevOps & CI/CD", desc: "Containerized with Docker Compose and deployed automatically via GitHub Actions pipelines." },
      ],
    },
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
    category: "Full-Stack Web",
    thumbnail: "/images/projects/finance-feasibility.png",
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
    category: "Java / Backend",
    thumbnail: "/images/projects/finance-management.png?v=3",
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
    category: "Full-Stack Web",
    thumbnail: "/images/projects/universe-interactive.png",
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
    category: "C Systems",
    thumbnail: "/images/projects/alpay-wallet.png",
  },
];
