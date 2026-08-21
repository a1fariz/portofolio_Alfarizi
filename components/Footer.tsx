import { Mail, Briefcase } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const footerLinks = {
  Quick: [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
  ],
  Connect: [
    {
      label: "GitHub",
      href: "https://github.com/a1fariz",
      icon: GithubIcon,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alfa-rizi-65b483412",
      icon: LinkedinIcon,
    },
    {
      label: "Jobstreet",
      href: "https://id.jobstreet.com/id/profiles/alfa-rizi-1lxtyz97xN",
      icon: Briefcase,
    },
    {
      label: "Email",
      href: "mailto:alfarizi.developer@gmail.com",
      icon: Mail,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-3">
               <div className="flex h-7 w-7 items-center justify-center rounded-full border border-primary bg-primary text-[10px] font-bold text-on-primary">

                AR
              </div>
              <span className="font-heading text-base font-bold text-ink">
                Alfa Rizi
              </span>
            </div>
            <p className="font-sans text-xs md:text-sm text-muted leading-relaxed">
              Junior Backend Developer &amp; Software Engineer based in West
              Bandung, Indonesia. Building resilient distributed systems with Java Spring
              Boot, PostgreSQL, and modern web architectures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-ink uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-1">
                {footerLinks.Quick.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-flex min-h-11 items-center font-sans text-xs text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red rounded"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-ink uppercase tracking-wider mb-4">
              Connect
            </h4>
            <nav aria-label="Social links">
              <ul className="space-y-1">
                {footerLinks.Connect.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red rounded"
                    >
                      <link.icon size={13} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-hairline pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted">
            © 2026 Alfa Rizi · All Rights Reserved
          </p>
          <p className="font-mono text-xs text-muted">
            Built with Next.js &amp; Tailwind CSS · West Bandung, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
