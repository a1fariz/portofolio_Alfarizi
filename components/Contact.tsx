"use client";

import { useRef, useState } from "react";
import { Send, CheckCircle, AlertCircle, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type FormStatus = "idle" | "submitting" | "success" | "error";
type FieldName = "name" | "email" | "subject" | "message";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
const CONTACT_EMAIL = "alfarizi.developer@gmail.com";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const summaryRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    // Honeypot field — real users leave this empty; bots tend to fill it.
    company: "",
  });

  const validate = (): Partial<Record<FieldName, string>> => {
    const next: Partial<Record<FieldName, string>> = {};
    if (!formData.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      next.email = "Please enter a valid email address.";
    if (!formData.subject.trim()) next.subject = "Please add a subject.";
    if (!formData.message.trim()) next.message = "Please tell me a little about your project.";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Silently drop bot submissions that filled the honeypot.
    if (formData.company) {
      setFormStatus("success");
      return;
    }

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setFormStatus("idle");
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    // No endpoint configured — fall back to a mailto so the form is never a dead end.
    if (!FORMSPREE_ENDPOINT) {
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        formData.subject || "Portfolio Contact"
      )}&body=${body}`;
      return;
    }

    setFormStatus("submitting");
    setErrors({});

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          company: "",
        });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <>
{/* Renaissance CTA Band */}
      <section className="relative overflow-hidden border-y border-hairline bg-ink py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />
        <div className="pointer-events-none absolute left-1/2 top-[-14rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent-gold/15 blur-[120px]" />

        <div className="section-container relative z-10 text-on-dark">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="ornament-line mb-6 justify-center font-mono text-[11px] uppercase tracking-[0.2em] text-accent-gold">
                Let&apos;s build something thoughtful
              </span>
              <h2 className="mb-5 font-display text-display-sm text-canvas md:text-display-md">
                Have a project or opportunity in mind?
              </h2>
              <p className="mx-auto mb-9 max-w-lg font-sans text-sm leading-7 text-on-dark-soft md:text-base">
                I&apos;m open to new roles, engineering collaborations, and freelance work.
              </p>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent-red px-7 py-2.5 font-sans text-sm font-semibold text-white shadow-soft transition-colors hover:bg-accent-gold hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                <Mail size={16} />
                Send a Message
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="scroll-mt-24 py-20 md:py-28 bg-canvas">
        <div className="section-container">
          <div className="max-w-xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="ornament-line mb-4 justify-center font-mono text-[11px] uppercase tracking-[0.2em] text-accent-red">
                  Get in touch
                </span>
                <h2 className="font-display text-display-sm md:text-display-md text-ink mb-4">
                  Let&apos;s start a conversation.
                </h2>
                <p className="font-sans text-sm text-muted">
                  Fill out the form below and I&apos;ll get back to you promptly.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <form onSubmit={handleSubmit} noValidate className="relative space-y-5 rounded-[2rem] border border-hairline bg-surface-card/80 p-7 shadow-soft md:p-8">
                {/* Error summary — receives focus when a submit fails validation */}
                {Object.keys(errors).length > 0 && (
                  <div
                    ref={summaryRef}
                    role="alert"
                    tabIndex={-1}
                    aria-labelledby="error-summary-title"
                    className="rounded-xl border border-error/30 bg-error/5 p-4 text-sm text-error focus:outline-none focus-visible:ring-2 focus-visible:ring-error"
                  >
                    <p id="error-summary-title" className="mb-2 flex items-center gap-2 font-semibold">
                      <AlertCircle size={16} /> There is a problem
                    </p>
                    <ul className="list-disc space-y-1 pl-5">
                      {(Object.keys(errors) as FieldName[]).map((field) => (
                        <li key={field}>
                          <a href={`#${field}`} className="underline underline-offset-4 hover:text-error">
                            {errors[field]}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Honeypot — visually hidden, off-screen; not focusable by keyboard. */}
                <div
                  aria-hidden="true"
                  className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden"
                >
                  <label htmlFor="company">Company (leave blank)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-sans text-xs font-medium text-muted uppercase tracking-[1.5px] mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      className={`text-input ${errors.name ? "border-error focus:border-error focus:ring-error" : ""}`}
                      placeholder="Your name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "error-name" : undefined}
                    />
                    {errors.name && (
                      <p id="error-name" className="mt-1.5 text-xs text-error">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-sans text-xs font-medium text-muted uppercase tracking-[1.5px] mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      className={`text-input ${errors.email ? "border-error focus:border-error focus:ring-error" : ""}`}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "error-email" : undefined}
                    />
                    {errors.email && (
                      <p id="error-email" className="mt-1.5 text-xs text-error">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-sans text-xs font-medium text-muted uppercase tracking-[1.5px] mb-2"
                  >
                    Subject
                  </label>
<input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        setErrors((prev) => ({ ...prev, subject: undefined }));
                      }}
                      className={`text-input ${errors.subject ? "border-error focus:border-error focus:ring-error" : ""}`}
                      placeholder="What's this about?"
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={errors.subject ? "error-subject" : undefined}
                    />
                    {errors.subject && (
                      <p id="error-subject" className="mt-1.5 text-xs text-error">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-xs font-medium text-muted uppercase tracking-[1.5px] mb-2"
                  >
                    Message
                  </label>
<textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      className={`textarea-input ${errors.message ? "border-error focus:border-error focus:ring-error" : ""}`}
                      placeholder="Tell me about your project..."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "error-message" : undefined}
                    />
                    {errors.message && (
                      <p id="error-message" className="mt-1.5 text-xs text-error">
                        {errors.message}
                      </p>
                    )}
                  </div>

                {/* Status messages */}
                {formStatus === "success" && (
                  <div role="status" aria-live="polite" className="flex items-center gap-2 text-sm text-success font-sans">
                    <CheckCircle size={16} />
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}
                {formStatus === "error" && (
                  <div role="alert" className="flex items-center gap-2 text-sm text-error font-sans">
                    <AlertCircle size={16} />
                    <span>
                      Something went wrong. Please try again or email me{" "}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4">
                        directly
                      </a>.
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="btn-primary w-full gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "submitting" ? (
                    "Sending..."
                  ) : FORMSPREE_ENDPOINT ? (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  ) : (
                    <>
                      <Mail size={16} />
                      Send via Email
                    </>
                  )}
                </button>

                {!FORMSPREE_ENDPOINT && (
                  <p className="text-center font-sans text-xs text-muted">
                    Opens your email client. Prefer a direct form?{" "}
                    <a
                      href="https://formspree.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                    >
                      Configure Formspree
                    </a>
                    .
                  </p>
                )}
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
