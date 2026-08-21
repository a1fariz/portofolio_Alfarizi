"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, CornerDownLeft, Check, Mail } from "lucide-react";
import { useModalAccessibility } from "./useModalAccessibility";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export default function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [input, setInput] = useState("");
  const dialogRef = useModalAccessibility(isOpen, onClose);
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-2 text-primary">
          <p className="font-mono text-xs sm:text-sm">
            ┌─────────────────────────────────────────────────────────┐<br />
            │ &nbsp;Welcome to Alfa Shell v1.0 (Interactive CLI Portfolio)│<br />
            └─────────────────────────────────────────────────────────┘
          </p>
          <p className="text-xs text-accent-emerald/80">
            Type <span className="text-warning font-bold">&apos;help&apos;</span> to see available commands or <span className="text-warning font-bold">&apos;sudo hire-me&apos;</span> to get in touch directly.
          </p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        outputNode = (
          <div className="space-y-1 text-xs sm:text-sm text-body">
            <p className="text-warning font-bold">Available Commands:</p>
            <p><span className="text-primary font-mono w-24 inline-block">whoami</span> — Brief summary about Alfa Rizi</p>
            <p><span className="text-primary font-mono w-24 inline-block">skills</span> — Technical skills & backend stack</p>
            <p><span className="text-primary font-mono w-24 inline-block">projects</span> — Key production & portfolio projects</p>
            <p><span className="text-primary font-mono w-24 inline-block">education</span> — Formal & PUB Non-formal education details</p>
            <p><span className="text-primary font-mono w-24 inline-block">contact</span> — Get contact & social links</p>
            <p><span className="text-primary font-mono w-24 inline-block">clear</span> — Clear the terminal history</p>
            <p><span className="text-warning font-mono w-24 inline-block">sudo hire-me</span> — Hiring easter egg & quick contact</p>
          </div>
        );
        break;

      case "whoami":
        outputNode = (
          <div className="text-xs sm:text-sm text-body space-y-1">
            <p className="text-accent-emerald font-bold">Alfa Rizi</p>
            <p>Junior Backend Developer & Software Engineer</p>
            <p className="text-muted">PASIM Bandung · Open to Remote / Jakarta / Bandung</p>
            <p className="text-body mt-2">
              Experienced in Java Spring Boot, Microservices, RAG pipelines (LangChain + Gemini), PostgreSQL, and React.
            </p>
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="text-xs sm:text-sm text-body space-y-1 font-mono">
            <p><span className="text-warning">Languages:</span> Java, Python, JavaScript, C, C++, SQL</p>
            <p><span className="text-warning">Backend:</span> Spring Boot, Spring Security, Spring Cloud Gateway, Express.js, REST APIs</p>
            <p><span className="text-warning">Databases:</span> PostgreSQL, Supabase, ChromaDB, Drizzle ORM</p>
            <p><span className="text-warning">AI / RAG:</span> LangChain, Google Gemini 2.0 Flash, Sentence-Transformers</p>
            <p><span className="text-warning">DevOps & Security:</span> Docker, GitHub Actions, JWT, RBAC, Maven</p>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="text-xs sm:text-sm text-body space-y-2">
            <p><span className="text-primary font-bold">1. ApexGrid</span> — F1 Ticket Booking Platform (Spring Boot Microservices + JWT + PostgreSQL Triggers)</p>
            <p><span className="text-primary font-bold">2. StudyMate AI</span> — Intelligent RAG Assistant (Python + LangChain + ChromaDB + Gemini 2.0)</p>
            <p><span className="text-primary font-bold">3. Finance Feasibility</span> — AI Investment Platform (React 19 + Node + Express + Supabase + Gemini AI)</p>
            <p><span className="text-primary font-bold">4. ALPAY E-Wallet</span> — Terminal C Application (Two-role RBAC + File Handling .txt)</p>
          </div>
        );
        break;

      case "education":
        outputNode = (
          <div className="text-xs sm:text-sm text-body space-y-2">
            <p className="text-accent-emerald font-bold">Formal Education:</p>
            <p>Associate Degree in Informatics Management (D3) — Universitas Nasional PASIM (GPA: 3.6/4.0)</p>
            <p className="text-accent-emerald font-bold mt-2">Non-Formal Education (PUB):</p>
            <p>Programming Training PUB PASIM (2024–Present): Logic C, Data Structures & DB, Web, Java Fundamental, Git, Java Advanced.</p>
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="text-xs sm:text-sm text-body space-y-1 font-mono">
            <p><span className="text-primary">Email:</span> alfarizi.developer@gmail.com</p>
            <p><span className="text-primary">GitHub:</span> https://github.com/a1fariz</p>
            <p><span className="text-primary">LinkedIn:</span> https://www.linkedin.com/in/alfa-rizi-65b483412</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "sudo hire-me":
      case "hire-me":
      case "sudo hire me":
        outputNode = (
          <div className="p-3 bg-accent-emerald/10 border border-accent-emerald/40 rounded text-xs sm:text-sm space-y-2">
            <p className="flex items-center gap-1.5 text-accent-emerald font-bold">
              <Check size={14} /> ACCESS GRANTED! [Permission: RECRUITER_APPROVED]
            </p>
            <p className="text-body-strong">
              Alfa Rizi is ready for Full-time, Contract, or Remote backend developer opportunities.
            </p>
            <a
              href="mailto:alfarizi.developer@gmail.com?subject=Job%20Opportunity%20-%20Backend%20Developer"
              className="inline-flex items-center gap-1.5 mt-1 px-3 py-1 bg-primary text-on-primary font-bold rounded hover:bg-primary-active transition-colors"
            >
              <Mail size={13} /> Send Email Offer
            </a>
          </div>
        );
        break;

      default:
        outputNode = (
          <p className="text-xs sm:text-sm text-error font-mono">
            Command not found: &apos;{trimmed}&apos;. Type <span className="text-warning font-bold">&apos;help&apos;</span> for commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: input, output: outputNode }]);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/20 p-4 backdrop-blur-md">
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="terminal-modal-title"
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="flex h-[500px] w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-hairline bg-white text-ink shadow-2xl"
          >
            {/* Terminal Top Bar */}
             <div className="flex items-center justify-between border-b border-hairline bg-surface-soft px-4 py-3">

              <div className="flex items-center gap-2">
                <button
                   onClick={onClose}
                    className="min-h-10 min-w-10 rounded-full bg-error transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-error"

                   aria-label="Close"

                />
                <div className="w-3 h-3 rounded-full bg-warning" />
                <div className="w-3 h-3 rounded-full bg-success" />
                 <span className="ml-3 flex items-center gap-1.5 font-mono text-xs text-muted">

                   <Terminal size={14} className="text-primary" />
                   <span id="terminal-modal-title">alfarizi@portfolio: ~/shell</span>
                </span>
              </div>
              <button
                onClick={onClose}
                  className="inline-flex min-h-10 min-w-10 items-center justify-center p-1 text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"


                aria-label="Close terminal"
              >
                <X size={16} />
              </button>
            </div>

            {/* Terminal Body */}
            <div
               className="flex-1 space-y-4 overflow-y-auto bg-canvas p-4 font-mono text-xs sm:text-sm"

              onClick={() => inputRef.current?.focus()}
            >
              {history.map((item, index) => (
                <div key={index} className="space-y-1.5">
                  {item.command && (
                     <div className="flex items-center gap-2 text-muted">

                       <span className="font-bold text-primary">alfarizi@portfolio:~$</span>
                       <span className="text-ink">{item.command}</span>

                    </div>
                  )}
                  {item.output}
                </div>
              ))}

              {/* Active Prompt Line */}
               <form onSubmit={handleCommand} className="flex items-center gap-2 pt-1 text-ink">
                 <span className="shrink-0 font-bold text-primary">alfarizi@portfolio:~$</span>

                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                    className="flex-1 border-none bg-transparent font-mono text-xs text-ink outline-none caret-primary sm:text-sm"

                   placeholder="Type a command (e.g. help, skills, sudo hire-me)..."
                   aria-label="Terminal command"
                   data-autofocus

                />
                  <button type="submit" className="inline-flex min-h-10 min-w-10 items-center justify-center text-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Run command">


                  <CornerDownLeft size={14} />
                </button>
              </form>

              <div ref={bottomRef} />
            </div>

            {/* Terminal Footer Info */}
             <div className="flex items-center justify-between border-t border-hairline bg-surface-soft px-4 py-2 font-mono text-[11px] text-muted">
               <span>Press &apos;ESC&apos; or click X to exit shell</span>
               <span className="text-primary">Bash v5.2</span>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
