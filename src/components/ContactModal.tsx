"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Mail, Copy, Check, ExternalLink } from "lucide-react";
import { sounds } from "@/lib/sound";

export default function ContactModal({
  isOpen,
  onClose,
  initialProject,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialProject?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: initialProject || "Distributed Microservices (Spring Boot 3)",
    message: "",
  });

  if (!isOpen) return null;

  const targetEmail = "alfarizi.developer@gmail.com";
  const subject = encodeURIComponent(`[Engineering Inquiry] ${formData.projectType} — ${formData.name || "Client"}`);
  const emailBody = encodeURIComponent(
    `Hello Alfa Rizi,\n\nI would like to initiate an engineering engagement regarding:\n\n` +
    `• Name: ${formData.name}\n` +
    `• Email: ${formData.email}\n` +
    `• Project Typology: ${formData.projectType}\n` +
    `• Message / Parameters:\n${formData.message}\n\n` +
    `Looking forward to your response.`
  );
  const mailtoUrl = `mailto:${targetEmail}?subject=${subject}&body=${emailBody}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sounds.playChirp();
    setSubmitted(true);
    // Trigger direct mail client transmission
    if (typeof window !== "undefined") {
      window.open(mailtoUrl, "_blank");
    }
  };

  const handleCopySummary = () => {
    sounds.playClick();
    const summaryText =
      `To: ${targetEmail}\n` +
      `Subject: [Engineering Inquiry] ${formData.projectType} — ${formData.name}\n\n` +
      `From: ${formData.name} (${formData.email})\n` +
      `Scope: ${formData.projectType}\n` +
      `Details: ${formData.message}`;
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center p-4 sm:p-6 md:p-12">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#f4f3ef] border border-black/10 rounded-3xl p-6 sm:p-10 shadow-2xl text-[#141414] z-10"
        >
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="absolute top-6 right-6 p-3 rounded-full bg-black/5 hover:bg-black text-black hover:text-white transition-colors"
            aria-label="Close Contact"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div className="space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                  Direct Email Dispatch
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-black uppercase mt-1">
                  Initiate Engagement
                </h3>
                <p className="text-xs font-mono text-neutral-500 pt-1">
                  Recipient: <span className="text-black font-bold">{targetEmail}</span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 pt-2 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono text-xs uppercase text-neutral-600">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Satoshi Nakamoto"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-black placeholder-neutral-400 focus:outline-none focus:border-black text-sm shadow-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-xs uppercase text-neutral-600">
                      Your Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="satoshi@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-black placeholder-neutral-400 focus:outline-none focus:border-black text-sm shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-xs uppercase text-neutral-600">
                    Engagement Scope
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-black focus:outline-none focus:border-black text-sm shadow-sm"
                  >
                    <option>Distributed Microservices (Spring Boot 3)</option>
                    <option>Asynchronous RAG &amp; Vector Search (LangChain)</option>
                    <option>Creative Frontend &amp; 3D WebGL (Next.js/GSAP)</option>
                    <option>Full-Stack Application Development</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-xs uppercase text-neutral-600">
                    System Parameters &amp; Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Brief description of requirements, latency targets, or system goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-black placeholder-neutral-400 focus:outline-none focus:border-black text-sm shadow-sm"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#141414] text-[#f4f3ef] font-mono text-xs uppercase tracking-widest font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Dispatch to {targetEmail}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6 space-y-5">
              <CheckCircle2 className="w-12 h-12 text-black mx-auto" />
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-black uppercase">Transmission Dispatched</h3>
                <p className="text-sm text-neutral-600 max-w-sm mx-auto font-light leading-relaxed">
                  Your inquiry is addressed to <strong className="text-black">{targetEmail}</strong>. If your email app did not open automatically, use the buttons below.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-black/5 font-mono text-xs text-left text-neutral-700 space-y-1 shadow-sm">
                <div className="text-black font-bold">Inquiry Summary:</div>
                <p><span className="text-neutral-400">Sender:</span> {formData.name} ({formData.email})</p>
                <p><span className="text-neutral-400">Scope:</span> {formData.projectType}</p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={mailtoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#141414] text-[#f4f3ef] font-mono text-xs uppercase font-bold flex items-center gap-2 hover:bg-neutral-800 shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Email Client</span>
                </a>

                <button
                  onClick={handleCopySummary}
                  className="px-5 py-2.5 rounded-full bg-white border border-black/10 font-mono text-xs uppercase font-bold text-black flex items-center gap-2 hover:bg-neutral-100 shadow-sm"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied Brief!" : "Copy Brief Text"}</span>
                </button>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    sounds.playClick();
                    setSubmitted(false);
                    onClose();
                  }}
                  className="text-xs font-mono uppercase text-neutral-400 hover:text-black"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
