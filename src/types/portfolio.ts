export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "AI & Computer Vision" | "Full-Stack Web" | "System Architecture";
  problem: string;
  solution: string;
  techStack: string[];
  keyFeatures: string[];
  highlights: string[];
  architecture?: {
    overview: string;
    diagrams: { title: string; image: string; description: string }[];
    pipeline: string[];
  };
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  role: string;
  date: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  credential: string;
  description: string;
  coreSubjects?: string[];
  focusAreas?: string[];
  documentUrl?: string;
  documentLabel?: string;
  documentId?: string;
  isFeatured?: boolean;
}

export type DocumentCategory = "education" | "certification" | "award" | "participation";

export interface PortfolioDocument {
  id: string;
  title: string;
  issuer: string;
  type: "transcript" | "degree" | "certificate" | "award" | "participation";
  category: DocumentCategory;
  filePath: string;
  issueDate?: string;
  credentialId?: string;
  badgeText: string;
  description?: string;
  highlights?: string[];
  skillsGained?: string[];
  verificationUrl?: string;
  fileAvailable: boolean;
}

export interface MainSkill {
  name: string;
  percentage: number; // Configurable proficiency percentage (0-100)
  category?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    badge?: string;
    description?: string;
  }[];
}

export interface ResearchInterest {
  id: string;
  title: string;
  shortDescription: string;
  expandedVision: string;
  targetApplications: string[];
  relevantTech: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  fileUrl?: string;
  highlights: string[];
  skillsGained: string[];
  badgeText: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
  type: "Leadership & Sports" | "Community & Outreach";
  achievement: string;
  keyContributions: string[];
}
