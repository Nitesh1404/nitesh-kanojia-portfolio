// ============================================================
//  PORTFOLIO DATA MODELS
//  Change interfaces here when you add new fields.
// ============================================================

export interface Stat {
  value: number;
  decimal?: string;   // e.g. '8.92' for CGPA
  label: string;
}

export interface SkillCategory {
  icon: string;
  name: string;
  tags: { label: string; hot?: boolean }[];
}

export interface ExperienceItem {
  company: string;
  product: string;
  date: string;
  role: string;
  bullets: string[];   // supports basic HTML inside strings
}

export interface Project {
  num: string;
  icon: string;
  name: string;
  stack: string[];
  description: string;
  metrics: string[];
}

export interface ValueCard {
  title: string;
  description: string;
}

export interface ContactLink {
  icon: string;
  label: string;
  href: string;
}

export interface PortfolioData {
  name: string;
  nameLine2: string;
  tagline: string;
  summary: string;
  location: string;
  stats: Stat[];
  heroDeco: string[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: Project[];
  bio: string;
  education: {
    degree: string;
    school: string;
    cgpa: string;
  };
  values: ValueCard[];
  contactTagline: string;
  contactLinks: ContactLink[];
}
