export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: string;
  github: string;
  demo?: string;
  highlight: string;
  thumbnail?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  institution: string;
  year: string;
  emoji: string;
}

export interface TechCategory {
  name: string;
  items: string[];
}
