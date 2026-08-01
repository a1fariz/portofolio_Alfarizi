"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type FormStatus = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
const CONTACT_EMAIL = "alfarizi.developer@gmail.com";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    // Honeypot field — real users leave this empty; bots tend to fill it.
    company: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Silently drop bot submissions that filled the honeypot.
    if (formData.company) {
      setFormStatus("success");
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
      {/* Coral CTA Band */}
      <section className="bg-primary py-12 md:py-16 lg:py-20">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="font-serif text-title-lg md:text-display-sm text-on-primary mb-4">
              Get In Touch
            </h2>
            <p className="font-sans text-base text-on-primary/90 mb-8 max-w-lg mx-auto">
              Have a project in mind or just want to chat? I&apos;d love to hear
              from you.
            </p>
            <a href="#contact-form" className="btn-secondary-dark gap-2">
              Send a Message
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 md:py-24 bg-canvas">
        <div className="section-container">
          <div className="max-w-xl mx-auto">
            <ScrollReveal>
              <h2 className="font-serif text-display-sm md:text-display-md text-ink text-center mb-4">
                Contact Me
              </h2>
              <p className="font-sans text-sm text-muted text-center mb-10">
                Fill out the form below and I&apos;ll get back to you as soon
                as possible.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <form onSubmit={handleSubmit} className="relative space-y-5">
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
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="text-input"
                      placeholder="Your name"
                    />
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
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="text-input"
                      placeholder="you@example.com"
                    />
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
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="text-input"
                    placeholder="What's this about?"
                  />
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
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="textarea-input"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Status messages */}
                {formStatus === "success" && (
                  <div className="flex items-center gap-2 text-sm text-success font-sans">
                    <CheckCircle size={16} />
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}
                {formStatus === "error" && (
                  <div className="flex items-center gap-2 text-sm text-error font-sans">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or email me
                    directly.
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
                  <p className="text-center font-sans text-xs text-muted-soft">
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
