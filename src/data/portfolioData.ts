import {
  Project,
  EducationItem,
  MainSkill,
  CertificationItem,
} from "@/types/portfolio";

export const personalInfo = {
  name: "Muhammad Abdullah Saeed",
  title: "Computer Science Graduate | AI Enthusiast | Full-Stack Developer",
  tagline: "Building Intelligent Solutions for Real-World Problems.",
  summary:
    "Computer Science graduate with deep enthusiasm for Artificial Intelligence, Computer Vision, and modern Full-Stack engineering. Passionate about transforming computational models into high-impact, real-time software systems that solve tangible problems.",
  email: "abdullahsaeed2217@gmail.com",
  phone: "(+92) 3261767798",
  location: "Jauharabad, Punjab, Pakistan",
  github: "https://github.com/abdullahsaeed2217",
  linkedin: "https://www.linkedin.com/in/muhammad-abdullah-saeed-bb3738371",
  cvPath: "/cv.pdf",
  profileImage: "/images/profile.png",
  stats: [
    { label: "Degree Completion", value: "BSCS 2026" },
    { label: "Core Focus", value: "Vision & AI" },
    { label: "Production Stack", value: "Next.js / Python" },
    { label: "Verified Honors", value: "Merit & Certifications" },
  ],
};

// ============================================================================
// 6 MAIN SKILLS CONFIGURATION (EDITABLE PROFICIENCY PERCENTAGES)
// NOTE: These percentages are initial development estimates based on coursework
// and project implementations. You can adjust the numbers (0-100) below anytime.
// ============================================================================
export const mainSkills: MainSkill[] = [
  {
    name: "React.js",
    percentage: 90,
    category: "Frontend Architecture",
  },
  {
    name: "Next.js",
    percentage: 88,
    category: "Full-Stack React Framework",
  },
  {
    name: "TypeScript",
    percentage: 85,
    category: "Type-Safe Systems",
  },
  {
    name: "Python",
    percentage: 88,
    category: "AI, Vision & Scripting",
  },
  {
    name: "Machine Learning",
    percentage: 82,
    category: "Model Training & Evaluation",
  },
  {
    name: "Artificial Intelligence",
    percentage: 85,
    category: "Computer Vision & Pose Analysis",
  },
];

// ============================================================================
// EDUCATION (EXACTLY TWO QUALIFICATIONS: BSCS & HSSC)
// ============================================================================
export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Education, Lahore — Jauharabad Campus",
    period: "2022–2026",
    location: "Jauharabad, Punjab, Pakistan",
    credential: "Undergraduate Degree",
    isFeatured: true,
    description:
      "Four-year comprehensive degree program emphasizing foundational computing theory, advanced algorithms, machine learning methodologies, computer vision, and software engineering practices.",
    coreSubjects: [
      "Artificial Intelligence",
      "Introduction to Machine Learning",
      "Artificial Neural Networks",
      "Data Structures & Algorithms",
      "Database Systems",
      "Software Engineering",
      "Computer Networks",
      "Fundamentals of Web Engineering",
    ],
    focusAreas: [
      "Computer Vision & Keypoint Pose Estimation",
      "Full-Stack Web Architecture & Scalable APIs",
      "Relational Database Design & Query Optimization",
      "Final Year Project: Real-Time AI Pose Tracking System (PoseFit)",
    ],
    documentUrl: "/documents/education/bscs-transcript.pdf",
    documentLabel: "View Transcript",
  },
  {
    degree: "Higher Secondary School Certificate (HSSC)",
    institution: "District Public School & Inter College Khushab (Jauharabad)",
    period: "2019–2021",
    location: "Jauharabad, Punjab, Pakistan",
    credential: "Pre-Engineering · BISE Sargodha",
    description:
      "Pre-Engineering faculty under Board of Intermediate & Secondary Education, Sargodha (Pakistan), establishing deep quantitative analytical problem-solving foundations in higher mathematics and physics.",
    coreSubjects: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "English",
      "Islamic Education",
      "Pakistan Studies",
    ],
    focusAreas: [
      "Calculus & Analytical Geometry",
      "Physical Sciences & Mechanics",
      "Quantitative Problem Solving",
    ],
    documentUrl: "/documents/education/hssc-certificate.pdf",
    documentLabel: "View Degree / Certificate",
  },
];

// ============================================================================
// SINGLE FEATURED PROJECT: POSEFIT
// ============================================================================
export const projectsData: Project[] = [
  {
    id: "posefit",
    title: "PoseFit – AI-Powered Gym Posture Detection System",
    tagline:
      "Real-time computer vision fitness application analyzing workout posture with sub-second feedback.",
    category: "AI & Computer Vision",
    featured: true,
    role: "Lead Software Architect & AI Developer (BSCS Capstone)",
    date: "2025 - 2026",
    problem:
      "An AI-powered fitness application designed to detect and analyze exercise posture in real time. The system uses computer vision to identify incorrect body positions, provide posture correction feedback, and support workout monitoring. It aims to improve exercise accuracy and promote safer workout practices.",
    solution:
      "An AI-powered fitness application designed to detect and analyze exercise posture in real time. The system uses computer vision to identify incorrect body positions, provide posture correction feedback, and support workout monitoring. It aims to improve exercise accuracy and promote safer workout practices.",
    techStack: [
      "Computer Vision",
      "MediaPipe Pose",
      "Python",
      "React.js",
      "TypeScript",
      "TensorFlow.js",
      "PostgreSQL",
    ],
    keyFeatures: [
      "Real-time skeletal landmark tracking with zero wearable sensors",
      "Dynamic trigonometric angle validation for posture correction",
      "Instant visual and audio correction cues during exercise reps",
      "Comprehensive workout session monitoring and progress logs",
    ],
    highlights: [
      "Pure optical tracking through standard webcams",
      "Low-latency real-time joint angle evaluation",
    ],
    githubUrl: "https://github.com/abdullahsaeed2217/PoseFit",
  },
  {
    id: "brightpath-school-system",
    title: "BrightPath – Comprehensive School Management System",
    tagline:
      "Full-stack institutional administration platform streamlining student profiling, attendance, academic grading, and fee management.",
    category: "Full-Stack Web",
    featured: true,
    role: "Lead Full-Stack Developer",
    date: "2024",
    problem:
      "Educational institutions frequently face operational hurdles caused by fragmented record-keeping, manual paper-based attendance, disjointed examination reporting, and inefficient fee reconciliation across administrative departments.",
    solution:
      "Engineered an integrated, end-to-end institutional management portal featuring dedicated administrative and student portals. BrightPath unifies student enrollment, real-time class attendance logging, automated examination gradebook calculation, and institutional fee record management with secure session authentication and relational database integrity.",
    techStack: [
      "Node.js",
      "Express.js",
      "JavaScript (ES6+)",
      "SQL / Relational DB",
      "HTML5 & Modern CSS",
      "RESTful APIs",
      "Session Authentication",
    ],
    keyFeatures: [
      "Dual portal architecture with role-based routing for Administrators and Students",
      "Comprehensive student registry with personal profiling, class allocation, and academic history",
      "Automated attendance logging with section-level analytics and reporting",
      "Examination marks calculation and term report card generation",
      "Fee management module tracking dues, invoice status, and receipt auditing",
    ],
    highlights: [
      "Full-stack MVC architectural flow from dynamic frontend to relational database layer",
      "Modular backend API routes with role authorization and validation middleware",
    ],
    githubUrl: "https://github.com/abdullahsaeed2217/BrightPath-School-System",
  },
];

// ============================================================================
// CERTIFICATIONS & ACHIEVEMENTS (VERIFIED AWARDS & CREDENTIALS)
// ============================================================================
export const certificationsData: CertificationItem[] = [
  {
    id: "forage-ai",
    title: "AI in Action Job Simulation",
    issuer: "Forage & VISTA",
    date: "October 12, 2026",
    credentialId: "Enrolment: 6acc8981c2a3c14a73c36878 | User: 6acc88aeb9aa0ea2e382c217",
    fileUrl: "/documents/certificates/forage-ai-in-action.pdf",
    badgeText: "Verified Simulation",
    highlights: [
      "Built fluency in Prompt & Contextual Engineering for repeatable, high-accuracy AI interaction.",
      "Applied prompt skills to automate professional workflows and optimize complex technical processes.",
      "Credential verified and co-signed by Tom Brunskill, Co-Founder of Forage.",
    ],
    skillsGained: [
      "Prompt Engineering",
      "Contextual Engineering",
      "Workflow Automation",
      "Applied AI",
    ],
  },
  {
    id: "hp-data-science",
    title: "Data Science & Analytics",
    issuer: "HP LIFE | HP Foundation",
    date: "October 14, 2026",
    credentialId: "Certificate Serial: ce1fd52b-1aee-4c67-afe7-987be68b11c3",
    fileUrl: "/documents/certificates/hp-life-data-science.pdf",
    badgeText: "HP Foundation Certified",
    highlights: [
      "Learned leading data science and analytics practices, methodologies, and analytical tools.",
      "Evaluated commercial benefits and strategic challenges of data-driven decision making.",
      "Issued by Michele Malejki, Executive Director, HP Foundation.",
    ],
    skillsGained: [
      "Data Science",
      "Data Analytics",
      "Business Intelligence",
      "Methodologies",
    ],
  },
  {
    id: "erozgaar-web",
    title: "Web Development & WordPress",
    issuer: "e-Rozgaar Program · University of Education Jauharabad",
    date: "June 01, 2023 – August 31, 2023",
    fileUrl: "/documents/certificates/erozgaar-web-development.pdf",
    badgeText: "Completion Certificate",
    highlights: [
      "Completed hands-on practical training in responsive web development and dynamic web systems.",
      "Developed web applications, interactive components, and custom CMS implementations.",
      "Certified at e-Rozgaar Lab, University of Education Jauharabad Campus.",
    ],
    skillsGained: [
      "Web Development",
      "WordPress",
      "Frontend Architecture",
      "Responsive UI",
    ],
  },
  {
    id: "erozgaar-digital-marketing",
    title: "Digital Marketing & SEO",
    issuer: "e-Rozgaar Program · University of Education Jauharabad",
    date: "June 01, 2024 – August 31, 2024",
    fileUrl: "/documents/certificates/erozgaar-digital-marketing.pdf",
    badgeText: "Completion Certificate",
    highlights: [
      "Completed intensive training in Search Engine Optimization (SEO), digital advertising, and growth.",
      "Executed On-Page, Off-Page, and technical site performance optimization.",
      "Certified at e-Rozgaar Lab, University of Education Jauharabad Campus.",
    ],
    skillsGained: [
      "Digital Marketing",
      "SEO",
      "Brand Promotion",
      "Search Optimization",
    ],
  },
  {
    id: "sports-gala-tug-of-war",
    title: "1st Position – Tug of War (Sports Gala 2024)",
    issuer: "University of Education Jauharabad",
    date: "2024",
    fileUrl: "/documents/certificates/sports-gala-tug-of-war.pdf",
    badgeText: "1st Position Winner",
    highlights: [
      "Secured 1st Position in Tug of War competition at annual University Sports Gala 2024.",
      "Demonstrated physical endurance, high-intensity team coordination, and competitive drive.",
      "Awarded official Distribution Certificate signed by Coordinator and Principal.",
    ],
    skillsGained: [
      "Team Leadership",
      "Competitive Resilience",
      "Collaboration",
      "Strategic Focus",
    ],
  },
  {
    id: "sports-gala-volleyball",
    title: "Runner Up – Volleyball (Team Captain)",
    issuer: "University of Education Jauharabad",
    date: "March 01 – 02, 2023",
    fileUrl: "/documents/certificates/sports-gala-volleyball.pdf",
    badgeText: "Runner-Up Trophy",
    highlights: [
      "Captained the campus varsity volleyball team to the finals at Sports Gala UE JBD.",
      "Adjudged Runner Up with official Certificate of Merit awarded by the Principal.",
      "Guided team strategy, court rotation, and morale throughout high-pressure matches.",
    ],
    skillsGained: [
      "Team Captaincy",
      "Athletic Leadership",
      "Tactical Planning",
      "Sportsmanship",
    ],
  },
  {
    id: "educational-family-fair",
    title: "Certificate of Participation – Educational Family Fair",
    issuer: "District Population Welfare Office Khushab (Health & Population Dept)",
    date: "Punjab Family Planning Programme (PFPP)",
    fileUrl: "/documents/certificates/educational-family-fair.pdf",
    badgeText: "Civic Participation",
    highlights: [
      "Recognized for active participation in the Educational Family Fair Mela.",
      "Supported public community welfare initiatives and civic health awareness programs.",
      "Presented by District Population Welfare Officer, Khushab.",
    ],
    skillsGained: [
      "Community Engagement",
      "Public Awareness",
      "Civic Service",
      "Communication",
    ],
  },
];
