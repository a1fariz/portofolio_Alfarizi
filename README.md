# Alfa Rizi — Software Engineering Portfolio

Personal software engineering portfolio and architectural case study platform built with Next.js App Router, TypeScript, and Tailwind CSS. Showcases production services, microservices platforms, asynchronous RAG pipelines, and full-stack web applications.

Live Website: https://alfarizi.my.id

---

## Overview

This repository houses the source code for Alfa Rizi's personal portfolio website. It features an editorial, high-performance web experience focused on quiet minimalism, typography hierarchy, responsive layouts, and comprehensive architectural breakdowns for each featured project.

---

## Featured Projects Catalog

1. **ReLoop**
   - Subtitle: Enterprise Circular-Commerce Platform & Escrow Architecture
   - Category: Java / Backend
   - Stack: Java 17, Quarkus 3.15 LTS, Next.js 14, PostgreSQL 16, Redis 7, Flyway, Double-Entry Ledger, TailwindCSS
   - Architecture: Enterprise-grade circular commerce platform built as a Quarkus 3.15 modular monolith with 25 bounded contexts, ArchUnit architecture verification, balanced double-entry escrow accounting, anti-hoarding checkout leases with pessimistic locks, and transactional outbox worker.

2. **ApexGrid**
   - Subtitle: F1 Race Ticket Reservation & Microservices Platform
   - Category: Java / Backend
   - Stack: Java 17, Spring Boot 3.2, Spring Cloud Gateway, PostgreSQL, React 18, Docker, JWT, TailwindCSS
   - Architecture: Distributed microservices system featuring 3 independent Spring Boot services, real-time ticket quota management via transactional database triggers, 30-minute auto-expiry reservation scheduler, and shared RBAC.

3. **StudyMate AI**
   - Subtitle: Intelligent RAG-Based Educational Knowledge Assistant
   - Category: AI & RAG
   - Stack: Python, LangChain, ChromaDB, Google Gemini 2.0 Flash, PyMuPDF, Docker, JWT, GitHub Actions
   - Architecture: Asynchronous Retrieval-Augmented Generation pipeline parsing academic textbook PDFs, indexing vector chunks in ChromaDB, and generating study plans, quizzes, and citations via Gemini 2.0 Flash.

4. **Arte**
   - Subtitle: Classical Art Bureau & Interactive Curatorial Archive
   - Category: Full-Stack Web
   - Stack: React 19, Vite, TailwindCSS, React Router 7, Framer Motion, Web Audio API, The Met API, LocalStorage
   - Architecture: Curatorial art platform powered by The Metropolitan Museum of Art Open Access API, featuring 360-degree circular orbit gallery, infinite marquee, accessible CRUD forms with focus trapping, dual Curator/Visitor roles, and procedural Web Audio API sound feedback.

5. **Vanguard IELTS**
   - Subtitle: A1 to C1 Academic IELTS Preparation & SRS Platform
   - Category: Full-Stack Web
   - Stack: React 19, TypeScript, Vite, TailwindCSS v4, Web Speech API, SRS Engine, Canvas Confetti
   - Architecture: Four-skill IELTS academic suite (Listening, Reading, Writing, Speaking) integrating native Web Speech synthesis for audio shadowing, SuperMemo-inspired Spaced Repetition (SRS) vocabulary deck, Daily Adventure map, and persistent Mistake Bank.

6. **Renshuu**
   - Subtitle: Interactive Japanese Learning & Spaced Repetition (SRS)
   - Category: Full-Stack Web
   - Stack: JavaScript, HTML5 Canvas, CSS3, Web Speech API, SVG KanjiVG, SRS Algorithm, LocalStorage
   - Architecture: Client-side educational web application with animated SVG stroke order tracing, handwriting canvas pad, Spaced Repetition review scheduling, and native browser Web Speech API pronunciation.

7. **Finance Feasibility**
   - Subtitle: AI-Powered Investment Analysis & Feasibility Platform
   - Category: Full-Stack Web
   - Stack: React 19, Node.js, Express, PostgreSQL, Drizzle ORM, Firebase Auth, Google Gemini, TailwindCSS
   - Architecture: Financial valuation engine automating NPV, IRR, ROI, and Payback Period calculations paired with Google Gemini AI for executive strategic insights.

8. **Finance Management System (FinanceAll)**
   - Subtitle: Full-Stack Enterprise Financial Dashboard & MVC
   - Category: Java / Backend
   - Stack: Java 17, Spring Boot 3.2, Spring Security, Thymeleaf, PostgreSQL, Flyway, Docker
   - Architecture: Monolithic Spring Boot 3 MVC architecture with multi-role RBAC, Flyway database migrations, and normalized PostgreSQL relational schema.

9. **Universe Interactive (Solar Explorer)**
   - Subtitle: Astronomy Calculation & Planetary Physics Engine
   - Category: Full-Stack Web
   - Stack: HTML5, CSS3, JavaScript, Astronomy API, NASA Data
   - Architecture: Client-side physics engine calculating planetary rotational velocities and orbital period conversions using authentic NASA orbital parameters.

10. **ALPAY — E-Wallet System**
    - Subtitle: Console-Based Digital Wallet in Pure C
    - Category: C Systems
    - Stack: C Language, Flat File Handling (.txt), RBAC Security, CLI Architecture
    - Architecture: Low-level procedural system in C managing memory-efficient record locks, authentication state, and sequential transaction ledgers via flat files.

---

## Technical Stack

- Framework: Next.js (App Router, Turbopack)
- Language: TypeScript
- Styling: Tailwind CSS
- Icons: Lucide React
- Fonts: Geist Sans & Geist Mono (via next/font)
- Deployment: Vercel

---

## Architecture & Features

- Static Site Generation (SSG): Case study pages (`/work/[id]`) and sitemaps are pre-rendered at build time for optimal load speed and SEO performance.
- Accessible Motion: Custom reveal animations and responsive layouts with reduced-motion support.
- Centralized Data Layer: Single source of truth in `src/data/realPortfolio.ts` for all projects, capabilities, certifications, and career records.
- SEO & OpenGraph: Automatic dynamic metadata generation, structured sitemap (`sitemap.xml`), and robots configuration.

---

## Project Structure

```
portfolio/
├── public/
│   ├── cv/                    # PDF CV variants (EN / ID)
│   └── images/
│       └── projects/          # Optimized project showcase screenshots
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with fonts & metadata
│   │   ├── page.tsx           # Home page with hero, projects, about
│   │   ├── sitemap.ts         # Automated XML sitemap generation
│   │   ├── robots.ts          # Search engine crawler policies
│   │   └── work/[id]/
│   │       └── page.tsx       # Dynamic SSG project case study pages
│   ├── components/
│   │   ├── Reveal.tsx         # Scroll-triggered viewport animations
│   │   └── SpinningBadge.tsx  # Rotating visual badge component
│   └── data/
│       ├── cv.ts              # CV paths and language configurations
│       └── realPortfolio.ts   # Core dataset for projects and credentials
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/a1fariz/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run start
   ```

---

## Contact

- Name: Alfa Rizi
- Email: alfarizi.developer@gmail.com
- GitHub: https://github.com/a1fariz
- LinkedIn: https://www.linkedin.com/in/alfa-rizi-65b483412
