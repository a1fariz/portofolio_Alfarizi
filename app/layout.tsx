import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MotionSettings from "@/components/MotionSettings";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
  preload: false,
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
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Alfa Rizi — Junior Backend Developer & Software Engineer',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfa Rizi — Junior Backend Developer & Software Engineer",
    description:
      "Portfolio of Alfa Rizi — Informatics Management student focused on Backend Development & Software Engineering.",
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
     { media: "(prefers-color-scheme: light)", color: "#FBFBF8" },
     { media: "(prefers-color-scheme: dark)", color: "#FBFBF8" },

  ],
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
    "https://www.linkedin.com/in/alfa-rizi-65b483412",
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
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-canvas text-body selection:bg-primary/30 selection:text-ink">
        <MotionSettings>
          {children}
          <Analytics />
          <SpeedInsights />
        </MotionSettings>
      </body>
    </html>
  );
}
