import { Mail } from "lucide-react";
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
      href: "https://linkedin.com/in/alfa-rizi",
      icon: LinkedinIcon,
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
    <footer className="bg-surface-dark py-16 lg:py-2xl">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Column */}
          <div>
            <span className="font-serif text-xl font-medium text-on-dark block mb-3">
              AR
            </span>
            <p className="font-sans text-sm text-on-dark-soft leading-relaxed">
              Junior Backend Developer &amp; Software Engineer based in West
              Bandung, Indonesia. Building robust applications with Java Spring
              Boot, React, and modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs font-medium text-on-dark uppercase tracking-[1.5px] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.Quick.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-on-dark-soft hover:text-on-dark transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-sans text-xs font-medium text-on-dark uppercase tracking-[1.5px] mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              {footerLinks.Connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-sm text-on-dark-soft hover:text-on-dark transition-colors"
                  >
                    <link.icon size={14} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-surface-dark-elevated pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-on-dark-soft">
            © 2026 Alfa Rizi · Built with Next.js &amp; Tailwind CSS
          </p>
          <p className="font-sans text-xs text-on-dark-soft">
            Made in West Bandung 🇮🇩
          </p>
        </div>
      </div>
    </footer>
  );
}
