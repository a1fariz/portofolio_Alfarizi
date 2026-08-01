"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, CornerDownLeft } from "lucide-react";

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
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-2 text-emerald-400">
          <p className="font-mono text-xs sm:text-sm">
            ┌─────────────────────────────────────────────────────────┐<br />
            │ &nbsp;Welcome to Alfa Shell v1.0 (Interactive CLI Portfolio)│<br />
            └─────────────────────────────────────────────────────────┘
          </p>
          <p className="text-xs text-emerald-300/80">
            Type <span className="text-amber-300 font-bold">&apos;help&apos;</span> to see available commands or <span className="text-amber-300 font-bold">&apos;sudo hire-me&apos;</span> to get in touch directly.
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
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
            <p className="text-amber-300 font-bold">Available Commands:</p>
            <p><span className="text-emerald-400 font-mono w-24 inline-block">whoami</span> — Brief summary about Alfa Rizi</p>
            <p><span className="text-emerald-400 font-mono w-24 inline-block">skills</span> — Technical skills & backend stack</p>
            <p><span className="text-emerald-400 font-mono w-24 inline-block">projects</span> — Key production & portfolio projects</p>
            <p><span className="text-emerald-400 font-mono w-24 inline-block">education</span> — Formal & PUB Non-formal education details</p>
            <p><span className="text-emerald-400 font-mono w-24 inline-block">contact</span> — Get contact & social links</p>
            <p><span className="text-emerald-400 font-mono w-24 inline-block">clear</span> — Clear the terminal history</p>
            <p><span className="text-amber-400 font-mono w-24 inline-block">sudo hire-me</span> — Hiring easter egg & quick contact</p>
          </div>
        );
        break;

      case "whoami":
        outputNode = (
          <div className="text-xs sm:text-sm text-slate-300 space-y-1">
            <p className="text-emerald-300 font-bold">Alfa Rizi</p>
            <p>Junior Backend Developer & Software Engineer</p>
            <p className="text-slate-400">PASIM Bandung · Open to Remote / Jakarta / Bandung</p>
            <p className="text-slate-300 mt-2">
              Experienced in Java Spring Boot, Microservices, RAG pipelines (LangChain + Gemini), PostgreSQL, and React.
            </p>
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="text-xs sm:text-sm text-slate-300 space-y-1 font-mono">
            <p><span className="text-amber-300">Languages:</span> Java, Python, JavaScript, C, C++, SQL</p>
            <p><span className="text-amber-300">Backend:</span> Spring Boot, Spring Security, Spring Cloud Gateway, Express.js, REST APIs</p>
            <p><span className="text-amber-300">Databases:</span> PostgreSQL, Supabase, ChromaDB, Drizzle ORM</p>
            <p><span className="text-amber-300">AI / RAG:</span> LangChain, Google Gemini 2.0 Flash, Sentence-Transformers</p>
            <p><span className="text-amber-300">DevOps & Security:</span> Docker, GitHub Actions, JWT, RBAC, Maven</p>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="text-xs sm:text-sm text-slate-300 space-y-2">
            <p><span className="text-emerald-400 font-bold">1. ApexGrid</span> — F1 Ticket Booking Platform (Spring Boot Microservices + JWT + PostgreSQL Triggers)</p>
            <p><span className="text-emerald-400 font-bold">2. StudyMate AI</span> — Intelligent RAG Assistant (Python + LangChain + ChromaDB + Gemini 2.0)</p>
            <p><span className="text-emerald-400 font-bold">3. Finance Feasibility</span> — AI Investment Platform (React 19 + Node + Express + Supabase + Gemini AI)</p>
            <p><span className="text-emerald-400 font-bold">4. ALPAY E-Wallet</span> — Terminal C Application (Two-role RBAC + File Handling .txt)</p>
          </div>
        );
        break;

      case "education":
        outputNode = (
          <div className="text-xs sm:text-sm text-slate-300 space-y-2">
            <p className="text-emerald-300 font-bold">Formal Education:</p>
            <p>Associate Degree in Informatics Management (D3) — Universitas Nasional PASIM (GPA: 3.6/4.0)</p>
            <p className="text-emerald-300 font-bold mt-2">Non-Formal Education (PUB):</p>
            <p>Programming Training PUB PASIM (2024–Present): Logic C, Data Structures & DB, Web, Java Fundamental, Git, Java Advanced.</p>
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="text-xs sm:text-sm text-slate-300 space-y-1 font-mono">
            <p><span className="text-emerald-400">Email:</span> alfarizi.developer@gmail.com</p>
            <p><span className="text-emerald-400">GitHub:</span> https://github.com/a1fariz</p>
            <p><span className="text-emerald-400">LinkedIn:</span> https://www.linkedin.com/in/alfa-rizi-65b483412</p>
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
          <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded text-xs sm:text-sm space-y-2">
            <p className="text-emerald-300 font-bold">✅ ACCESS GRANTED! [Permission: RECRUITER_APPROVED]</p>
            <p className="text-slate-200">
              Alfa Rizi is ready for Full-time, Contract, or Remote backend developer opportunities.
            </p>
            <a
              href="mailto:alfarizi.developer@gmail.com?subject=Job%20Opportunity%20-%20Backend%20Developer"
              className="inline-block mt-1 px-3 py-1 bg-emerald-500 text-slate-950 font-bold rounded hover:bg-emerald-400 transition-colors"
            >
              ✉️ Send Email Offer
            </a>
          </div>
        );
        break;

      default:
        outputNode = (
          <p className="text-xs sm:text-sm text-rose-400 font-mono">
            Command not found: &apos;{trimmed}&apos;. Type <span className="text-amber-300 font-bold">&apos;help&apos;</span> for commands.
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-3xl bg-slate-900 border border-slate-700/70 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[500px] text-slate-100"
          >
            {/* Terminal Top Bar */}
            <div className="bg-slate-800/90 px-4 py-3 border-b border-slate-700/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors"
                  aria-label="Close"
                />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="ml-3 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                  <Terminal size={14} className="text-emerald-400" />
                  alfarizi@portfolio: ~/shell
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-200 transition-colors p-1"
                aria-label="Close terminal"
              >
                <X size={16} />
              </button>
            </div>

            {/* Terminal Body */}
            <div
              className="flex-1 p-4 overflow-y-auto font-mono text-xs sm:text-sm space-y-4 bg-slate-950/90"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((item, index) => (
                <div key={index} className="space-y-1.5">
                  {item.command && (
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-emerald-400 font-bold">alfarizi@portfolio:~$</span>
                      <span className="text-slate-100">{item.command}</span>
                    </div>
                  )}
                  {item.output}
                </div>
              ))}

              {/* Active Prompt Line */}
              <form onSubmit={handleCommand} className="flex items-center gap-2 text-slate-100 pt-1">
                <span className="text-emerald-400 font-bold shrink-0">alfarizi@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none font-mono text-xs sm:text-sm text-slate-100 caret-emerald-400"
                  placeholder="Type a command (e.g. help, skills, sudo hire-me)..."
                  autoFocus
                />
                <button type="submit" className="text-slate-500 hover:text-emerald-400">
                  <CornerDownLeft size={14} />
                </button>
              </form>

              <div ref={bottomRef} />
            </div>

            {/* Terminal Footer Info */}
            <div className="bg-slate-900 px-4 py-2 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>Press &apos;ESC&apos; or click X to exit shell</span>
              <span className="text-emerald-400">Bash v5.2</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
