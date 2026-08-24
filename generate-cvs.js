const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { cvHtmlTemplate } = require('./generate-cv-template');

const outputDir = path.join(__dirname, 'public', 'cv');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const cvDataList = [
  // 1. INTERNATIONAL SOFTWARE ENGINEER CV
  {
    fileName: 'AlfaRizi_CV_English.pdf',
    data: {
      name: 'Alfa Rizi',
      targetRole: 'Software Engineer',
      location: 'West Bandung, West Java, Indonesia',
      email: 'alfarizi.developer@gmail.com',
      github: 'https://github.com/a1fariz',
      portfolio: 'https://alfarizi.my.id',
      labels: {
        summary: 'Professional Summary',
        skills: 'Technical Skills',
        projects: 'Featured Engineering Projects',
        experience: 'Professional Experience',
        education: 'Education & Training'
      },
      summary: 'Early-career Software Engineer and Informatics Management student (GPA 3.6/4.0) with practical experience building distributed microservices, RAG AI pipelines, and responsive web applications. Strong technical foundation in Java (Spring Boot 3, Spring Security, Spring Cloud Gateway), TypeScript/JavaScript (React, Next.js, Express), Python (FastAPI), and PostgreSQL (PL/pgSQL triggers, views, Flyway). Experienced with Docker containerization and automated GitHub Actions CI/CD workflows.',
      skills: [
        { category: 'Languages', items: 'Java 17, TypeScript, JavaScript (ES6+), Python 3.12, SQL, C' },
        { category: 'Backend & Microservices', items: 'Spring Boot 3.2, Spring Cloud Gateway, Spring Security 6, Spring Data JPA, FastAPI, Express.js' },
        { category: 'Frontend Development', items: 'React 18/19, Next.js 16 (App Router), HTML5, CSS3, Tailwind CSS, Canvas API, Web Speech API' },
        { category: 'Databases & ORM', items: 'PostgreSQL (PL/pgSQL Triggers, Views), Drizzle ORM, Flyway, Hibernate, ChromaDB, SQLite' },
        { category: 'DevOps & Quality', items: 'Docker, Docker Compose, GitHub Actions (CI/CD), Git, Maven, Postman, Linux CLI, OpenAPI/Swagger' }
      ],
      projects: [
        {
          title: 'ApexGrid — F1 Race Ticket Booking Platform',
          tech: 'Java 17, Spring Boot, React, PostgreSQL, Docker',
          year: '2026',
          bullets: [
            'Architected a 3-service distributed system (API Gateway, User Service, Race Service) using Spring Boot 3.2 and Spring Cloud Gateway.',
            'Implemented stateless JWT authentication with refresh token rotation and RBAC (USER/ADMIN) enforced across service levels.',
            'Built real-time quota validation using PostgreSQL PL/pgSQL triggers and automated 30-minute booking cancellations via Spring @Scheduled.',
            'Developed an admin dashboard and race booking UI in React 18 with Tailwind CSS; containerized the complete stack using Docker Compose.'
          ]
        },
        {
          title: 'StudyMate AI — Asynchronous RAG Document Assistant',
          tech: 'Python, FastAPI, ChromaDB, Sentence-Transformers',
          year: '2026',
          bullets: [
            'Engineered an asynchronous RAG pipeline using FastAPI, PyMuPDF, and LangChain splitters to index PDF textbooks with verified page citations.',
            'Implemented semantic search via Sentence Transformers (all-MiniLM-L6-v2) embeddings indexed into persistent ChromaDB collections.',
            'Orchestrated prompt pipelines with an LLM gateway to generate structured summaries, multi-choice quizzes, and interactive flashcards.',
            'Configured automated CI/CD via GitHub Actions executing Ruff linting, Pytest async suites, and pip-audit vulnerability checks.'
          ]
        },
        {
          title: 'Finance Feasibility — AI-Assisted Investment Analysis',
          tech: 'React 19, Express.js, PostgreSQL, Drizzle ORM, Gemini',
          year: '2026',
          demo: 'https://finance-feasibility.alfarizi.my.id',
          github: 'https://github.com/a1fariz/finance-feasibility',
          bullets: [
            'Developed an investment appraisal application calculating DCF, NPV, IRR, ROI, and Payback Period with automated Gemini AI evaluation.',
            'Built a type-safe REST API in Express.js with PostgreSQL and Drizzle ORM, secured via Firebase Admin auth and rate limiting.',
            'Constructed interactive financial visualization charts in React 19 using Recharts and implemented client-side Excel (XLSX) report export.'
          ]
        },
        {
          title: 'Renshuu — Interactive Japanese Learning Platform',
          tech: 'Next.js 16, React 19, TypeScript, Canvas API, Web Speech API',
          year: '2026',
          demo: 'https://renshuu.alfarizi.my.id',
          github: 'https://github.com/a1fariz/renshuu',
          bullets: [
            'Built a language learning platform covering Kana, Kanji (KanjiVG SVG stroke data), Vocabulary, and JLPT N4 Grammar.',
            'Created an interactive HTML5 Canvas character tracing pad and integrated native browser Web Speech API (ja-JP) for audio playback.',
            'Implemented a Spaced Repetition (SRS) review queue and offline-first LocalStorage state management with JSON backup/restore.'
          ]
        }
      ],
      experience: [
        {
          role: 'Lead Intern — IT & Business Operations',
          company: 'PT Resik Cemerlang (Pasim Group)',
          location: 'Bandung, Indonesia',
          period: '2025 – Present',
          bullets: [
            'Directed a 5-person intern team managing day-to-day IT support operations, hardware diagnostics, and workstation availability.',
            'Enforced SLA ticket resolution, executing security patching, software configurations, and antivirus definition updates across laptops.',
            'Conducted quality control and data validation across thousands of medical device specification records to ensure database accuracy.',
            'Prepared structured weekly operational health and incident summary reports for senior management review.'
          ]
        },
        {
          role: 'Lead Intern — IT Hardware',
          company: 'SMP Negeri 2 Batujajar',
          location: 'West Bandung, Indonesia',
          period: '2024',
          bullets: [
            'Diagnosed and resolved hardware faults, network cabling errors, and printer issues across school computer laboratories.',
            'Established a physical hardware inventory and maintenance tracking log that reduced repeat-fault turnaround time.'
          ]
        }
      ],
      education: [
        {
          institution: 'Universitas Nasional PASIM',
          degree: 'Associate Degree in Informatics Management (D3) — GPA: 3.6 / 4.0',
          location: 'Bandung, Indonesia',
          period: 'Expected May 2027',
          bullets: [
            'PUB Intensive Technical Scholarship (2024 – Present): Logic & C, Data Structures, Relational Databases, Advanced Java Development.'
          ]
        }
      ]
    }
  },

  // 2. BACKEND DEVELOPER CV
  {
    fileName: 'AlfaRizi_CV_Backend.pdf',
    data: {
      name: 'Alfa Rizi',
      targetRole: 'Backend Developer / Java Engineer',
      location: 'West Bandung, West Java, Indonesia',
      email: 'alfarizi.developer@gmail.com',
      github: 'https://github.com/a1fariz',
      portfolio: 'https://alfarizi.my.id',
      labels: {
        summary: 'Professional Summary',
        skills: 'Technical Skills',
        projects: 'Featured Backend Projects',
        experience: 'Professional Experience',
        education: 'Education & Training'
      },
      summary: 'Backend-focused Software Engineering student (GPA 3.6/4.0) with proven experience building distributed microservices, RESTful APIs, and database-driven architectures. Skilled in Java (Spring Boot 3, Spring Security, Spring Cloud Gateway), Python (FastAPI), and SQL (PostgreSQL, PL/pgSQL triggers, views, Flyway migrations). Experienced in containerization with Docker, JWT/RBAC security implementations, and automated CI/CD pipelines.',
      skills: [
        { category: 'Languages', items: 'Java 17, Python 3.12, SQL, JavaScript (Node.js), C' },
        { category: 'Frameworks & Microservices', items: 'Spring Boot 3.2, Spring Cloud Gateway, Spring Security 6, Spring Data JPA, FastAPI, Express.js' },
        { category: 'Databases & Migrations', items: 'PostgreSQL, PL/pgSQL (Triggers, Views, Functions), Flyway, Drizzle ORM, Hibernate, ChromaDB, SQLite' },
        { category: 'Security & Auth', items: 'JWT (Access & Refresh Tokens), RBAC, BCrypt, Rate Limiting, CORS, Helmet' },
        { category: 'DevOps & Tooling', items: 'Docker, Docker Compose, GitHub Actions (CI/CD), Git, Maven, Postman, Linux CLI, OpenAPI/Swagger' }
      ],
      projects: [
        {
          title: 'ApexGrid — F1 Race Ticket Booking Backend',
          tech: 'Java 17, Spring Boot, Spring Cloud Gateway, PostgreSQL, Docker',
          year: '2026',
          bullets: [
            'Architected a 3-tier Spring Boot microservices backend comprising an API Gateway, User Service, and Race Ticket Service via Spring Cloud Gateway.',
            'Secured inter-service routing and REST endpoints using JWT authentication, refresh token rotation, and Spring Security RBAC (USER/ADMIN).',
            'Engineered concurrency-safe ticket inventory management via custom PostgreSQL PL/pgSQL triggers (update_race_quota) and Spring @Scheduled workers.',
            'Developed automated PDF ticket generation with embedded QR codes (ZXing & iText) and asynchronous email notification tracking.',
            'Containerized the gateway, services, and database using Docker Compose with robust health checks and network isolation.'
          ]
        },
        {
          title: 'StudyMate AI — Asynchronous RAG Backend Engine',
          tech: 'Python, FastAPI, ChromaDB, Sentence-Transformers, PyMuPDF',
          year: '2026',
          bullets: [
            'Designed an asynchronous document retrieval and study assistant API using FastAPI, PyMuPDF, and LangChain text splitters.',
            'Implemented semantic vector similarity search by embedding document chunks with Sentence Transformers (all-MiniLM-L6-v2) into ChromaDB.',
            'Connected an OpenAI-compatible LLM gateway to generate grounded study materials with verified [Page X] citations.',
            'Built a token-bucket IP rate limiter (60 req/min) and configured a GitHub Actions CI/CD workflow running Ruff, Pytest async, and pip-audit.'
          ]
        },
        {
          title: 'Finance Management System (FinanceAll) — Spring Boot MVC',
          tech: 'Java 17, Spring Boot, Spring Security, PostgreSQL, Flyway',
          year: '2026',
          bullets: [
            'Engineered a robust personal finance web application using Spring Boot 3.2, Spring Data JPA, and PostgreSQL.',
            'Implemented complete database version control and schema evolution using Flyway migrations (V1__init_schema.sql).',
            'Configured Spring Security 6 with session-based authentication, BCrypt encryption, and role-based endpoint authorization.',
            'Created service layers calculating debt payoff schedules, emergency fund milestones, and financial health scores.'
          ]
        },
        {
          title: 'Finance Feasibility — REST API & Financial Modeling Backend',
          tech: 'Node.js, Express.js, TypeScript, PostgreSQL, Drizzle ORM',
          year: '2026',
          demo: 'https://finance-feasibility.alfarizi.my.id',
          github: 'https://github.com/a1fariz/finance-feasibility',
          bullets: [
            'Developed a high-performance REST API using Express.js and TypeScript, bundled with esbuild and managed via Drizzle ORM on PostgreSQL.',
            'Implemented financial valuation algorithms for automated Net Present Value (NPV), IRR, ROI, and Payback Period computation.',
            'Integrated Firebase Admin token verification middleware and connected Google Gemini API for strategic report generation.'
          ]
        }
      ],
      experience: [
        {
          role: 'Lead Intern — IT & Business Operations',
          company: 'PT Resik Cemerlang (Pasim Group)',
          location: 'Bandung, Indonesia',
          period: '2025 – Present',
          bullets: [
            'Directed a 5-member intern team handling IT operations, troubleshooting system failures, and maintaining hardware/software SLAs.',
            'Maintained operating system stability and network security across company laptops via automated patching and antivirus deployment.',
            'Validated technical specifications across thousands of medical device data records to ensure database integrity.',
            'Delivered structured weekly incident and operational health reports to senior management.'
          ]
        },
        {
          role: 'Lead Intern — IT Hardware',
          company: 'SMP Negeri 2 Batujajar',
          location: 'West Bandung, Indonesia',
          period: '2024',
          bullets: [
            'Conducted hardware fault diagnosis, network cabling repairs, and component servicing for school lab computers.',
            'Established an inventory tracking and maintenance log system that streamlined recurrent hardware issue resolutions.'
          ]
        }
      ],
      education: [
        {
          institution: 'Universitas Nasional PASIM',
          degree: 'Associate Degree in Informatics Management (D3) — GPA: 3.6 / 4.0',
          location: 'Bandung, Indonesia',
          period: 'Expected May 2027',
          bullets: [
            'PUB Intensive Technical Scholarship (2024 – Present): Algorithms, Data Structures, Relational Database Engineering, Advanced Java Development.'
          ]
        }
      ]
    }
  },

  // 3. FULL-STACK DEVELOPER CV
  {
    fileName: 'AlfaRizi_CV_FullStack.pdf',
    data: {
      name: 'Alfa Rizi',
      targetRole: 'Full-Stack Developer',
      location: 'West Bandung, West Java, Indonesia',
      email: 'alfarizi.developer@gmail.com',
      github: 'https://github.com/a1fariz',
      portfolio: 'https://alfarizi.my.id',
      labels: {
        summary: 'Professional Summary',
        skills: 'Technical Skills',
        projects: 'Featured Full-Stack Projects',
        experience: 'Professional Experience',
        education: 'Education & Training'
      },
      summary: 'Full-Stack Software Engineering student (GPA 3.6/4.0) with strong experience building end-to-end web applications, microservices architectures, and AI-enabled platforms. Proficient across the stack with React 18/19, Next.js, and TypeScript on the frontend, paired with Spring Boot 3, FastAPI, Node.js/Express, and PostgreSQL on the backend. Adept at designing secure REST APIs, database schemas, and responsive user interfaces.',
      skills: [
        { category: 'Frontend Development', items: 'TypeScript, JavaScript (ES6+), React 18/19, Next.js 16 (App Router), HTML5, CSS3, Tailwind CSS, Recharts' },
        { category: 'Backend Engineering', items: 'Java 17 (Spring Boot 3.2, Spring Cloud Gateway, Spring Security), Python 3.12 (FastAPI), Node.js, Express.js' },
        { category: 'Databases & ORM', items: 'PostgreSQL, PL/pgSQL Triggers & Views, Drizzle ORM, Spring Data JPA, ChromaDB, SQLite' },
        { category: 'Security & Auth', items: 'JWT Authentication, Firebase Auth, RBAC, BCrypt, Rate Limiting, CORS' },
        { category: 'DevOps & Tooling', items: 'Docker, Docker Compose, GitHub Actions (CI/CD), Git, Maven, Vite, esbuild, Postman' }
      ],
      projects: [
        {
          title: 'ApexGrid — F1 Race Ticket Booking Platform',
          tech: 'React 18, Spring Boot Microservices, PostgreSQL, Docker',
          year: '2026',
          bullets: [
            'Built a full-stack platform featuring 3 Spring Boot microservices (Gateway, User, Race) and a React 18 single-page application.',
            'Implemented stateless JWT auth with refresh tokens, BCrypt password hashing, and user/admin role-based access control.',
            'Designed database triggers in PostgreSQL for real-time ticket quota updates and automated background task expiration.',
            'Created an administrative dashboard with interactive CRUD management and public race scheduling with real-time seat availability.',
            'Orchestrated the entire multi-service system and PostgreSQL database using Docker Compose.'
          ]
        },
        {
          title: 'Finance Feasibility — AI Investment Analysis Application',
          tech: 'React 19, Express, PostgreSQL, Drizzle ORM, Gemini',
          year: '2026',
          demo: 'https://finance-feasibility.alfarizi.my.id',
          github: 'https://github.com/a1fariz/finance-feasibility',
          bullets: [
            'Developed a complete financial feasibility web app calculating NPV, IRR, ROI, and Payback Period from dynamic user inputs.',
            'Integrated Google Gemini AI to analyze DCF data models and provide automated risk/feasibility narrative reports.',
            'Built a type-safe backend in Express.js with Drizzle ORM and PostgreSQL, secured with Firebase Auth and Helmet.',
            'Implemented real-time dynamic charts using Recharts and client-side data export to Excel (XLSX).'
          ]
        },
        {
          title: 'Renshuu — Japanese Language Learning Platform',
          tech: 'Next.js 16, React 19, TypeScript, Canvas API, Web Speech API',
          year: '2026',
          demo: 'https://renshuu.alfarizi.my.id',
          github: 'https://github.com/a1fariz/renshuu',
          bullets: [
            'Developed a comprehensive educational web app covering Kana, Kanji (KanjiVG SVG), Vocabulary, and JLPT N4 Grammar.',
            'Built an interactive HTML5 Canvas drawing pad for character stroke practice and integrated native Web Speech API audio.',
            'Engineered a client-side Spaced Repetition System (SRS) scheduler with review queues and JSON data backup/restore.'
          ]
        },
        {
          title: 'StudyMate AI — RAG Study Assistant',
          tech: 'FastAPI, React/TypeScript, ChromaDB, Sentence-Transformers',
          year: '2026',
          bullets: [
            'Built an end-to-end study assistant ingesting PDF documents to generate AI-assisted summaries, quizzes, and 3D flashcards.',
            'Implemented semantic search via ChromaDB vector embeddings and built a responsive UI connecting to a FastAPI backend.',
            'Automated testing and code validation using GitHub Actions CI/CD pipelines.'
          ]
        }
      ],
      experience: [
        {
          role: 'Lead Intern — IT & Business Operations',
          company: 'PT Resik Cemerlang (Pasim Group)',
          location: 'Bandung, Indonesia',
          period: '2025 – Present',
          bullets: [
            'Led 5 technical interns supporting day-to-day enterprise IT operations, workstation deployments, and network connectivity.',
            'Enforced SLA compliance for support requests, applying security patches and antivirus updates across company machines.',
            'Conducted systematic data QA on thousands of medical device specification records.',
            'Prepared weekly operational reports analyzing system issues and resolution metrics for senior management.'
          ]
        },
        {
          role: 'Lead Intern — IT Hardware',
          company: 'SMP Negeri 2 Batujajar',
          location: 'West Bandung, Indonesia',
          period: '2024',
          bullets: [
            'Diagnosed, repaired, and configured computer lab hardware, network peripherals, and printer systems.',
            'Created an inventory tracking system that streamlined maintenance logging and reduced equipment downtime.'
          ]
        }
      ],
      education: [
        {
          institution: 'Universitas Nasional PASIM',
          degree: 'Associate Degree in Informatics Management (D3) — GPA: 3.6 / 4.0',
          location: 'Bandung, Indonesia',
          period: 'Expected May 2027',
          bullets: [
            'PUB Intensive Technical Scholarship (2024 – Present): Web Development, Data Structures, Java Software Engineering, Database Systems.'
          ]
        }
      ]
    }
  },

  // 4. FRONTEND DEVELOPER CV
  {
    fileName: 'AlfaRizi_CV_Frontend.pdf',
    data: {
      name: 'Alfa Rizi',
      targetRole: 'Frontend Developer / React Engineer',
      location: 'West Bandung, West Java, Indonesia',
      email: 'alfarizi.developer@gmail.com',
      github: 'https://github.com/a1fariz',
      portfolio: 'https://alfarizi.my.id',
      labels: {
        summary: 'Professional Summary',
        skills: 'Technical Skills',
        projects: 'Featured Frontend Projects',
        experience: 'Professional Experience',
        education: 'Education & Training'
      },
      summary: 'Frontend-oriented Software Engineering student (GPA 3.6/4.0) with strong experience building responsive, interactive, and high-performance web applications. Proficient in React 18/19, Next.js 16 (App Router), TypeScript, JavaScript (ES6+), and modern CSS (Tailwind CSS, animations, responsive design). Experienced in consuming RESTful APIs, client-side state management, Web APIs (Canvas, Web Speech), and data visualization.',
      skills: [
        { category: 'Frontend Core', items: 'TypeScript, JavaScript (ES6+), HTML5, CSS3, Responsive UI/UX Design, Cross-Browser Compatibility' },
        { category: 'Frameworks & Libraries', items: 'React 18/19, Next.js 16 (App Router), Tailwind CSS (v3/v4), Vite, Recharts, Lucide Icons' },
        { category: 'Browser & Web APIs', items: 'HTML5 Canvas API, Web Speech API (SpeechSynthesis), LocalStorage, DOM Manipulation, SVG Animations' },
        { category: 'State & Integration', items: 'React Hooks, Context API, REST API Integration, JSON Data Serialization, Form Validation' },
        { category: 'Tools & Workflows', items: 'Git, GitHub, npm, pnpm, Postman, ESLint, esbuild, Linux CLI' }
      ],
      projects: [
        {
          title: 'Renshuu — Interactive Japanese Learning Platform',
          tech: 'Next.js 16, React 19, TypeScript, Canvas API, Web Speech API',
          year: '2026',
          demo: 'https://renshuu.alfarizi.my.id',
          github: 'https://github.com/a1fariz/renshuu',
          bullets: [
            'Built a responsive language learning web application using Next.js 16 App Router, React 19, and TypeScript.',
            'Engineered an interactive HTML5 Canvas character tracing pad allowing users to practice Japanese handwriting with real-time clears and resets.',
            'Implemented smooth SVG vector stroke-order animations utilizing KanjiVG stroke path coordinates.',
            'Integrated the browser-native Web Speech API (SpeechSynthesisUtterance ja-JP) for instant, client-side Japanese pronunciation.',
            'Designed a Spaced Repetition (SRS) review queue and offline data management system using LocalStorage and JSON import/export.'
          ]
        },
        {
          title: 'Finance Feasibility — Real-Time Financial Visualization Dashboard',
          tech: 'React 19, Recharts, Tailwind CSS, Vite, XLSX',
          year: '2026',
          demo: 'https://finance-feasibility.alfarizi.my.id',
          github: 'https://github.com/a1fariz/finance-feasibility',
          bullets: [
            'Developed a dynamic single-page dashboard in React 19 and Tailwind CSS to compute and visualize complex investment models.',
            'Constructed interactive charts (Recharts) displaying cash flow projections, payback period curves, and sensitivity metrics.',
            'Integrated Firebase client authentication state and implemented client-side Excel report export using XLSX.',
            'Built responsive UI components with modal dialogs, loading skeletons, and real-time form validation.'
          ]
        },
        {
          title: 'ApexGrid — F1 Booking Frontend UI',
          tech: 'React 18, Tailwind CSS, Vite, REST API, Context API',
          year: '2026',
          github: 'https://github.com/a1fariz/ApexGrid',
          bullets: [
            'Developed a modern F1 ticket booking client interface with dark mode aesthetic and responsive race catalog cards.',
            'Integrated protected routes using React Context API for JWT token management and role-based views (User/Admin).',
            'Built administrative management screens for live race scheduling, circuit data updates, and booking status controls.'
          ]
        },
        {
          title: 'Universe Interactive Website',
          tech: 'HTML5, CSS3, JavaScript, REST API, Canvas',
          year: '2025',
          demo: 'https://solar-explorer.alfarizi.my.id',
          github: 'https://github.com/a1fariz/projek-website-your-age-other-planet',
          bullets: [
            'Created an interactive space exploration website featuring scroll-driven animations and dynamic planetary calculation tools.',
            'Integrated external astronomy REST APIs to display live planetary data with responsive mobile-first layouts.'
          ]
        }
      ],
      experience: [
        {
          role: 'Lead Intern — IT & Business Operations',
          company: 'PT Resik Cemerlang (Pasim Group)',
          location: 'Bandung, Indonesia',
          period: '2025 – Present',
          bullets: [
            'Led an intern team of 5 handling operational support, user issue resolution, and system maintenance.',
            'Maintained detailed incident records and performed quality control across digital specification databases.',
            'Compiled weekly status reports illustrating operational trends and team task delivery.'
          ]
        },
        {
          role: 'Lead Intern — IT Hardware',
          company: 'SMP Negeri 2 Batujajar',
          location: 'West Bandung, Indonesia',
          period: '2024',
          bullets: [
            'Maintained school computer laboratory workstations, troubleshooting display, peripheral, and operating system errors.',
            'Created a physical hardware maintenance logging system that reduced turnaround times for repeat workstation issues.'
          ]
        }
      ],
      education: [
        {
          institution: 'Universitas Nasional PASIM',
          degree: 'Associate Degree in Informatics Management (D3) — GPA: 3.6 / 4.0',
          location: 'Bandung, Indonesia',
          period: 'Expected May 2027',
          bullets: [
            'PUB Intensive Technical Scholarship (2024 – Present): Web Programming (HTML5, CSS3, JavaScript), Data Structures, Software Engineering.'
          ]
        }
      ]
    }
  },

  // 5. INDONESIAN VERSION CV
  {
    fileName: 'AlfaRizi_CV_Indonesia.pdf',
    data: {
      name: 'Alfa Rizi',
      targetRole: 'Software Engineer / Backend Developer',
      location: 'Bandung Barat, Jawa Barat',
      email: 'alfarizi.developer@gmail.com',
      github: 'https://github.com/a1fariz',
      portfolio: 'https://alfarizi.my.id',
      labels: {
        summary: 'Ringkasan Profesional',
        skills: 'Keahlian Teknis',
        projects: 'Pengalaman Proyek Unggulan',
        experience: 'Pengalaman Kerja & Magang',
        education: 'Pendidikan & Pelatihan'
      },
      summary: 'Mahasiswa Manajemen Informatika D3 (IPK 3.6/4.0) dengan keahlian praktis dalam rekayasa perangkat lunak, arsitektur microservices, integrasi RAG AI, dan perancangan RESTful API. Memiliki penguasaan teknis kuat pada Java (Spring Boot 3, Spring Security, Spring Cloud Gateway), TypeScript/JavaScript (React 18/19, Next.js, Express), Python (FastAPI, ChromaDB), dan PostgreSQL (PL/pgSQL triggers, views, Flyway). Berpengalaman mengelola container Docker dan otomasi CI/CD dengan GitHub Actions.',
      skills: [
        { category: 'Bahasa Pemrograman', items: 'Java 17, TypeScript, JavaScript (ES6+), Python 3.12, SQL, C' },
        { category: 'Backend & Microservices', items: 'Spring Boot 3.2, Spring Cloud Gateway, Spring Security 6, Spring Data JPA, FastAPI, Express.js' },
        { category: 'Frontend', items: 'React 18/19, Next.js 16 (App Router), HTML5, CSS3, Tailwind CSS, Canvas API, Web Speech API' },
        { category: 'Database & ORM', items: 'PostgreSQL (Triggers, Functions, Views), Drizzle ORM, Flyway Migrations, Hibernate, ChromaDB, SQLite' },
        { category: 'DevOps & Tools', items: 'Docker, Docker Compose, GitHub Actions (CI/CD), Git, Maven, Postman, Linux CLI, OpenAPI/Swagger' }
      ],
      projects: [
        {
          title: 'ApexGrid — Platform Pemesanan Tiket Balap F1',
          tech: 'Java 17, Spring Boot, React, PostgreSQL, Docker',
          year: '2026',
          bullets: [
            'Merancang arsitektur microservices terdistribusi dengan 3 service independen (API Gateway, User Service, Race Service) menggunakan Spring Boot 3.2 dan Spring Cloud Gateway.',
            'Mengimplementasikan autentikasi JWT stateless dengan refresh token dan kontrol akses berbasis peran (RBAC USER/ADMIN).',
            'Membangun logika sinkronisasi kuota tiket secara real-time menggunakan database trigger PostgreSQL (PL/pgSQL) dan penjadwal pembatalan otomatis 30 menit (@Scheduled).',
            'Mengembangkan antarmuka katalog balapan dan panel admin interaktif menggunakan React 18 dan Tailwind CSS dengan dokumentasi OpenAPI/Swagger; containerized dengan Docker Compose.'
          ]
        },
        {
          title: 'StudyMate AI — Asisten Belajar Dokumen Berbasis RAG',
          tech: 'Python, FastAPI, ChromaDB, Sentence-Transformers',
          year: '2026',
          bullets: [
            'Membangun pipeline RAG asynchronous menggunakan FastAPI, PyMuPDF, dan LangChain text splitter untuk ekstraksi buku teks PDF lengkap dengan sitasi halaman otomatis.',
            'Mengimplementasikan pencarian kesamaan semantik menggunakan embedding Sentence Transformers (all-MiniLM-L6-v2) yang disimpan dalam vector store ChromaDB.',
            'Mengintegrasikan LLM client untuk menghasilkan ringkasan terstruktur, kuis pilihan ganda, dan flashcard interaktif yang terverifikasi dari dokumen.',
            'Membangun rate limiter token-bucket (60 req/menit) dan pipeline CI/CD GitHub Actions untuk linting Ruff, pengujian Pytest async, dan audit keamanan dependensi.'
          ]
        },
        {
          title: 'Finance Feasibility — Platform Analisis Kelayakan Investasi AI',
          tech: 'React 19, Express, PostgreSQL, Drizzle ORM, Gemini',
          year: '2026',
          demo: 'https://finance-feasibility.alfarizi.my.id',
          github: 'https://github.com/a1fariz/finance-feasibility',
          bullets: [
            'Mengembangkan aplikasi analisis investasi yang mengotomatisasi perhitungan NPV, IRR, ROI, dan Payback Period dari input parameter pengguna.',
            'Mengintegrasikan Google Gemini AI untuk analisis kelayakan otomatis dan penilaian risiko finansial.',
            'Membangun REST API berbasis Express.js dan Drizzle ORM pada database PostgreSQL dengan keamanan Firebase Admin auth dan rate limiting.',
            'Merancang dashboard visualisasi interaktif di React 19 menggunakan Recharts dan fitur ekspor laporan ke format Excel (XLSX).'
          ]
        },
        {
          title: 'Renshuu — Platform Pembelajaran Bahasa Jepang Interaktif',
          tech: 'Next.js 16, React 19, TypeScript, Canvas API, Web Speech API',
          year: '2026',
          demo: 'https://renshuu.alfarizi.my.id',
          github: 'https://github.com/a1fariz/renshuu',
          bullets: [
            'Mengembangkan aplikasi web edukasi mencakup materi Kana, Kanji (data stroke SVG KanjiVG), Kosakata, dan Tata Bahasa JLPT N4.',
            'Membangun kanvas penulisan interaktif (HTML5 Canvas) dan animasi visual urutan goresan karakter.',
            'Mengintegrasikan Web Speech API native browser (ja-JP) untuk pelafalan audio tanpa server serta mengimplementasikan algoritma Spaced Repetition (SRS).'
          ]
        }
      ],
      experience: [
        {
          role: 'Lead Intern — IT & Business Operations',
          company: 'PT Resik Cemerlang (Pasim Group)',
          location: 'Bandung, Indonesia',
          period: '2025 – Sekarang',
          bullets: [
            'Memimpin tim beranggotakan 5 intern dalam mendukung operasional teknis harian dan kepatuhan SLA tiket pemeliharaan perangkat.',
            'Mengelola pemeliharaan rutin, instalasi patch keamanan OS, dan update definisi antivirus pada puluhan laptop operasional.',
            'Melakukan validasi kualitas data teknis pada ribuan entri spesifikasi alat medis guna memastikan akurasi inventaris.',
            'Menyusun laporan operasional dan penanganan insiden mingguan untuk manajemen senior.'
          ]
        },
        {
          role: 'Lead Intern — IT Hardware',
          company: 'SMP Negeri 2 Batujajar',
          location: 'Bandung Barat, Indonesia',
          period: '2024',
          bullets: [
            'Melakukan diagnosis kerusakan komponen, perbaikan hardware, konfigurasi jaringan lokal, dan perawatan printer di laboratorium komputer.',
            'Merancang sistem pencatatan log inventaris dan perawatan hardware guna mempercepat penanganan masalah teknis berulang.'
          ]
        }
      ],
      education: [
        {
          institution: 'Universitas Nasional PASIM',
          degree: 'D3 Manajemen Informatika — IPK: 3.6 / 4.0',
          location: 'Bandung, Indonesia',
          period: 'Estimasi Mei 2027',
          bullets: [
            'Penerima Beasiswa Pelatihan Intensif PUB (Pemberdayaan Umat Berkelanjutan) (2024 – Sekarang): Logika Pemrograman, Struktur Data, Rekayasa Database Relasional, Java Lanjutan.'
          ]
        }
      ]
    }
  }
];

async function generateAllPdfs() {
  console.log('Launching browser via Playwright...');
  const browser = await chromium.launch({ headless: true });

  for (const item of cvDataList) {
    const htmlContent = cvHtmlTemplate(item.data);
    const tempHtmlPath = path.join(__dirname, `temp_${item.fileName}.html`);
    fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

    const page = await browser.newPage();
    await page.goto(`file://${tempHtmlPath}`, { waitUntil: 'networkidle' });
    
    const outputPath = path.join(outputDir, item.fileName);
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.35in',
        bottom: '0.35in',
        left: '0.45in',
        right: '0.45in'
      }
    });

    console.log(`Generated: ${outputPath}`);
    await page.close();
    fs.unlinkSync(tempHtmlPath);
  }

  await browser.close();
  console.log('All PDF resumes generated successfully!');
}

generateAllPdfs().catch(err => {
  console.error('Error generating PDFs:', err);
  process.exit(1);
});
