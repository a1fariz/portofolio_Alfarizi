"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
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
      <section className="bg-primary py-16 lg:py-2xl">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="font-serif text-display-sm text-on-primary mb-4">
              Get In Touch 📩
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
      <section id="contact" className="py-section bg-canvas">
        <div className="section-container">
          <div className="max-w-xl mx-auto">
            <ScrollReveal>
              <h2 className="font-serif text-display-md text-ink text-center mb-4">
                Contact Me
              </h2>
              <p className="font-sans text-sm text-muted text-center mb-10">
                Fill out the form below and I&apos;ll get back to you as soon
                as possible.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-5">
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
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
