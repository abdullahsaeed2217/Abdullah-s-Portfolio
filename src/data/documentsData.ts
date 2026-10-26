import { PortfolioDocument } from "@/types/portfolio";

/**
 * ============================================================================
 * CENTRALIZED PORTFOLIO DOCUMENTS CONFIGURATION
 * ============================================================================
 * Maps every academic document, certificate, and achievement to its genuine file path.
 * Used uniformly across Education, Certifications, and DocumentPreview.
 */
export const portfolioDocuments: PortfolioDocument[] = [
  // --- ACADEMIC EDUCATION DOCUMENTS ---
  {
    id: "bscs-transcript",
    title: "Bachelor of Science in Computer Science — Academic Transcript",
    issuer: "University of Education, Lahore — Jauharabad Campus",
    type: "transcript",
    category: "education",
    filePath: "/documents/education/bscs-transcript.pdf",
    issueDate: "July 08, 2026",
    credentialId: "Registration: 22-UE-06157 | Student ID: bsf2205449 | Serial: 7876",
    badgeText: "Official Transcript (CGPA 3.14)",
    description:
      "Comprehensive two-page official transcript covering 8 semesters of rigorous computing coursework, algorithms, artificial intelligence, machine learning, and Final Year Project (PoseFit).",
    highlights: [
      "Cumulative Grade Point Average: 3.14 / 4.00 (73.00% marks).",
      "Core coursework in Artificial Intelligence, Machine Learning, Neural Networks, Database Systems, and Algorithms.",
      "Capstone Project: Real-Time AI Pose Tracking System (PoseFit).",
      "Authentic multi-page document issued and sealed by Controller of Examinations, University of Education, Lahore.",
    ],
    fileAvailable: true,
  },
  {
    id: "hssc-certificate",
    title: "Higher Secondary School Certificate (HSSC)",
    issuer: "District Public School & Inter College Khushab (Jauharabad)",
    type: "degree",
    category: "education",
    filePath: "/documents/education/hssc-certificate.pdf",
    issueDate: "October 14, 2021",
    credentialId: "Roll No: 418411 | Reg No: 38201-9789144-7 | Cert: No.INT.0304289",
    badgeText: "Pre-Engineering (Grade A)",
    description:
      "Board of Intermediate & Secondary Education, Sargodha (Pakistan) official certificate for Intermediate Annual Examination 2021.",
    highlights: [
      "Passed in ONE ATTEMPT in Pre-Engineering faculty.",
      "Obtained 799 / 1100 marks, achieving Grade 'A'.",
      "High distinction in Mathematics (162/200, 81.00%) and Physics (143/200, 71.50%).",
      "Authentic sealed certificate issued by BISE Sargodha.",
    ],
    fileAvailable: true,
  },

  // --- CERTIFICATIONS & ACHIEVEMENTS ---
  {
    id: "forage-ai",
    title: "AI in Action Job Simulation",
    issuer: "Forage & VISTA",
    type: "certificate",
    category: "certification",
    filePath: "/documents/certificates/forage-ai-in-action.pdf",
    issueDate: "October 12, 2026",
    credentialId: "Enrolment: 6acc8981c2a3c14a73c36878 | User: 6acc88aeb9aa0ea2e382c217",
    badgeText: "Verified Simulation",
    description:
      "Professional practical job simulation focused on building fluency in prompt and contextual engineering, and automating complex workflows.",
    highlights: [
      "Built demonstrated fluency in Prompt & Contextual Engineering for reliable AI workflow automation.",
      "Applied prompt engineering skills to systematically streamline professional task pipelines.",
      "Verified credential co-signed by Tom Brunskill, Co-Founder of Forage.",
    ],
    skillsGained: [
      "Prompt Engineering",
      "Contextual Engineering",
      "Workflow Automation",
      "Applied AI",
    ],
    fileAvailable: true,
  },
  {
    id: "hp-data-science",
    title: "Data Science & Analytics",
    issuer: "HP LIFE | HP Foundation",
    type: "certificate",
    category: "certification",
    filePath: "/documents/certificates/hp-life-data-science.pdf",
    issueDate: "October 14, 2026",
    credentialId: "Serial Number: ce1fd52b-1aee-4c67-afe7-987be68b11c3",
    badgeText: "HP Foundation Certified",
    description:
      "Professional online curriculum examining leading data science practices, methodologies, analytics tools, and commercial data-driven decision making.",
    highlights: [
      "Mastered core data science practices, statistical methodologies, and analytical tooling.",
      "Analyzed the commercial advantages and practical trade-offs of data-driven business architectures.",
      "Issued by Michele Malejki, Executive Director, HP Foundation.",
    ],
    skillsGained: [
      "Data Science",
      "Data Analytics",
      "Business Intelligence",
      "Decision Modeling",
    ],
    fileAvailable: true,
  },
  {
    id: "erozgaar-web",
    title: "Web Development & WordPress",
    issuer: "e-Rozgaar Program · University of Education Jauharabad",
    type: "certificate",
    category: "certification",
    filePath: "/documents/certificates/erozgaar-web-development.pdf",
    issueDate: "June 01, 2023 – August 31, 2023",
    credentialId: "e-Rozgaar Lab UE Jauharabad Campus",
    badgeText: "Completion Certificate",
    description:
      "Comprehensive three-month professional training in responsive frontend engineering, modern web architectures, and custom WordPress systems.",
    highlights: [
      "Completed hands-on practical training in responsive web development and dynamic web solutions.",
      "Engineered full client projects, custom CMS integrations, and responsive interfaces.",
      "Certified at e-Rozgaar Lab, University of Education Jauharabad Campus.",
    ],
    skillsGained: [
      "Web Development",
      "WordPress",
      "Frontend Architecture",
      "Responsive UI",
    ],
    fileAvailable: true,
  },
  {
    id: "erozgaar-seo",
    title: "Digital Marketing & SEO",
    issuer: "e-Rozgaar Program · University of Education Jauharabad",
    type: "certificate",
    category: "certification",
    filePath: "/documents/certificates/erozgaar-digital-marketing.pdf",
    issueDate: "June 01, 2024 – August 31, 2024",
    credentialId: "e-Rozgaar Lab UE Jauharabad Campus",
    badgeText: "Completion Certificate",
    description:
      "Specialized training in On-Page, Off-Page, and technical search engine optimization, market research, and commercial brand positioning.",
    highlights: [
      "Executed technical site audits, keyword strategies, and organic digital growth workflows.",
      "Completed intensive practical commercial client campaign optimization.",
      "Certified at e-Rozgaar Lab, University of Education Jauharabad Campus.",
    ],
    skillsGained: [
      "Technical SEO",
      "Keyword Strategy",
      "Digital Marketing",
      "Growth Audits",
    ],
    fileAvailable: true,
  },
  {
    id: "sports-gala-tug-of-war",
    title: "1st Position – Tug of War (Sports Gala 2024)",
    issuer: "University of Education Jauharabad",
    type: "award",
    category: "award",
    filePath: "/documents/certificates/sports-gala-tug-of-war.pdf",
    issueDate: "2024",
    credentialId: "Sports Gala 2024 Distribution Certificate",
    badgeText: "1st Position Winner",
    description:
      "Championship victory in the Tug of War tournament during the annual university sports gala.",
    highlights: [
      "Secured 1st Position in high-intensity competitive tournament fixtures.",
      "Demonstrated team cohesion, physical discipline, and collaborative leadership.",
      "Official Distribution Certificate signed by Coordinator and Principal.",
    ],
    skillsGained: [
      "Team Leadership",
      "Competitive Resilience",
      "High Morale",
      "Coordination",
    ],
    fileAvailable: true,
  },
  {
    id: "sports-gala-volleyball",
    title: "Runner Up – Volleyball (Team Captain)",
    issuer: "University of Education Jauharabad",
    type: "award",
    category: "award",
    filePath: "/documents/certificates/sports-gala-volleyball.pdf",
    issueDate: "March 01 – 02, 2023",
    credentialId: "Sports Gala UE JBD Certificate of Merit",
    badgeText: "Runner-Up Trophy",
    description:
      "Team Captain of the campus varsity volleyball squad, leading the team through competitive rounds to the tournament championship.",
    highlights: [
      "Captained campus varsity volleyball squad to the tournament finals.",
      "Adjudged Runner Up with official Certificate of Merit awarded by the Principal.",
      "Orchestrated match tactics, rotation strategy, and court communication.",
    ],
    skillsGained: [
      "Team Captaincy",
      "Athletic Leadership",
      "Tactical Planning",
      "Sportsmanship",
    ],
    fileAvailable: true,
  },
  {
    id: "educational-family-fair",
    title: "Certificate of Participation – Educational Family Fair",
    issuer: "District Population Welfare Office Khushab (Health & Population Dept)",
    type: "participation",
    category: "participation",
    filePath: "/documents/certificates/educational-family-fair.pdf",
    issueDate: "Punjab Family Planning Programme (PFPP)",
    credentialId: "District Population Welfare Officer, Khushab",
    badgeText: "Civic Participation",
    description:
      "Public service recognition for active engagement in the community welfare Educational Family Fair Mela.",
    highlights: [
      "Recognized for volunteer service in community education and public family welfare initiatives.",
      "Supported informative public health literacy outreach and civic assistance booths.",
      "Presented by District Population Welfare Officer, Khushab.",
    ],
    skillsGained: [
      "Community Engagement",
      "Public Awareness",
      "Civic Service",
      "Communication",
    ],
    fileAvailable: true,
  },
];

/**
 * Helper lookups to access documents cleanly by ID or category
 */
export function getDocumentById(id: string): PortfolioDocument | undefined {
  return portfolioDocuments.find((doc) => doc.id === id);
}

export function getEducationDocuments(): PortfolioDocument[] {
  return portfolioDocuments.filter((doc) => doc.category === "education");
}

export function getCertificationDocuments(): PortfolioDocument[] {
  return portfolioDocuments.filter((doc) => doc.category !== "education");
}
