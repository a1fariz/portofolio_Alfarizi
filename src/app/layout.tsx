import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alfarizi.my.id"),
  title: {
    default: "Alfa Rizi — Software Developer | Web, Backend, Mobile & AI",
    template: "%s | Alfa Rizi",
  },
  description:
    "Software development portfolio across frontend, backend, full-stack web, Flutter mobile, and AI applications. Explore projects, testing evidence, and role-specific CVs.",
  keywords: [
    "Alfa Rizi",
    "Backend Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Flutter Developer",
    "AI Application Developer",
    "IT Support",
    "Java Spring Boot",
    "Software Engineer",
    "Go Golang",
    "PostgreSQL",
    "Microservices",
  ],
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  authors: [{ name: "Alfa Rizi", url: "https://alfarizi.my.id" }],
  creator: "Alfa Rizi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alfarizi.my.id",
    title: "Alfa Rizi — Software Developer | Web, Backend, Mobile & AI",
    description:
      "Explore web, backend, mobile, and AI projects with architecture decisions and testing evidence.",
    siteName: "Alfa Rizi Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Alfa Rizi — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfa Rizi — Software Developer | Web, Backend, Mobile & AI",
    description:
      "React interfaces, Go and Java APIs, Flutter apps, and Python AI tools. Browse projects and role-specific CVs.",
    images: ["/images/profile.jpg"],
    creator: "@alfarizi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alfa Rizi",
  jobTitle: "Software Developer",
  url: "https://alfarizi.my.id",
  image: "https://alfarizi.my.id/images/profile.jpg",
  sameAs: [
    "https://github.com/a1fariz",
    "https://www.linkedin.com/in/alfa-rizi-65b483412",
  ],
  knowsAbout: [
    "Go",
    "Flutter",
    "Java 17",
    "Spring Boot 3",
    "PostgreSQL",
    "Python",
    "LangChain",
    "RAG Architecture",
    "Docker",
    "Next.js",
  ],
  affiliation: {
    "@type": "EducationalOrganization",
    name: "Universitas Nasional PASIM",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f4f3ef] text-[#141414]">{children}</body>
    </html>
  );
}
