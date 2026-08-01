import { FormalEducation, NonFormalEducation } from "@/lib/types";

export const formalEducation: FormalEducation = {
  degree: "Associate Degree in Informatics Management (D3)",
  institution: "Universitas Nasional PASIM, Bandung",
  period: "Sept 2024 – May 2027 (expected)",
  gpa: "3.6 / 4.0",
};

export const nonFormalEducation: NonFormalEducation = {
  program: "Programming Training — PUB (Pemberdayaan Umat Berkelanjutan)",
  institution: "Universitas Nasional PASIM Bandung",
  period: "2024 – Present",
  modules: [
    { title: "Logic & Basic Programming (C Language)", period: "Sep 2024 – Jan 2025" },
    { title: "Data Structures & Databases", period: "Jan 2025 – Jun 2025" },
    { title: "Web Programming (HTML, CSS & JavaScript)", period: "Jun 2025 – Aug 2025" },
    { title: "Java Fundamental", period: "Aug 2025 – Jan 2026" },
    { title: "Git & GitHub", period: "Jan 2026 – Feb 2026" },
    { title: "Java Advanced", period: "Feb 2026 – 16 Jun 2026" },
  ],
};
