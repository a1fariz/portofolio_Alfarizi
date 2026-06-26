import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alfa Rizi — Junior Backend Developer & Software Engineer",
  description:
    "Portfolio of Alfa Rizi — Informatics Management student focused on Backend Development & Software Engineering with Java Spring Boot, React, and microservices architecture.",
  keywords: [
    "Alfa Rizi",
    "Junior Backend Developer",
    "Software Engineer",
    "Spring Boot",
    "React",
    "PostgreSQL",
    "Microservices",
    "Java",
    "Portfolio",
    "West Bandung",
    "Indonesia",
  ],
  authors: [{ name: "Alfa Rizi" }],
  creator: "Alfa Rizi",
  metadataBase: new URL("https://alfarizi.my.id"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alfarizi.my.id",
    title: "Alfa Rizi — Junior Backend Developer & Software Engineer",
    description:
      "Portfolio of Alfa Rizi — Informatics Management student focused on Backend Development & Software Engineering with Java Spring Boot, React, and microservices architecture.",
    siteName: "Alfa Rizi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfa Rizi — Junior Backend Developer & Software Engineer",
    description:
      "Portfolio of Alfa Rizi — Informatics Management student focused on Backend Development & Software Engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

// JSON-LD Person Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alfa Rizi",
  jobTitle: "Junior Backend Developer",
  email: "alfarizi.developer@gmail.com",
  url: "https://alfarizi.my.id",
  sameAs: [
    "https://github.com/a1fariz",
    "https://linkedin.com/in/alfa-rizi",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universitas Nasional PASIM",
  },
  knowsAbout: [
    "Java Spring Boot",
    "React",
    "PostgreSQL",
    "RESTful APIs",
    "Microservices Architecture",
    "JWT Authentication",
    "RBAC",
    "Docker",
    "CI/CD",
    "LangChain",
    "RAG",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "West Bandung",
    addressRegion: "West Java",
    addressCountry: "ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
