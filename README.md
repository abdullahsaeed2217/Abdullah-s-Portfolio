# Muhammad Abdullah Saeed — Personal Portfolio & Engineering Showcase

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)

A high-performance personal portfolio, research showcase, and engineering dossier crafted for **Muhammad Abdullah Saeed** — Computer Science Graduate, AI Enthusiast, and Full-Stack Developer.

---

## 🌟 Key Highlights & Architecture

- **3D Interactive Hero Experience**: Custom circular profile container with real-time mouse-tracking 3D tilt physics, radial depth glow, and responsive soft-lighting effects.
- **Dynamic Skills Proficiency Matrix**: Interactive skill visualizers with configurable proficiency ratings across React.js, Next.js, TypeScript, Python, Machine Learning, and Computer Vision.
- **Academic Credentials & Degree Showcase**: Structured academic records detailing BS Computer Science (University of Education) and Pre-Engineering (HSSC) with an integrated in-app PDF document & transcript viewer modal.
- **Featured Engineering Projects**:
  - **PoseFit – AI-Powered Gym Posture Detection System**: Real-time computer vision fitness application analyzing skeletal landmarks and joint angles via MediaPipe Pose and Python with sub-second optical feedback.
  - **BrightPath – Comprehensive School Management System**: Full-stack educational institutional administration portal featuring role-based portals for Admins and Students, automated attendance tracking, gradebook calculations, and SQL relational record keeping.
- **Verified Certifications & Honors**: Dynamic credential verification modal showcasing authentic diplomas and certifications from HP LIFE (Data Science & Analytics), Forage & VISTA (AI in Action), and e-Rozgaar (Web Development).
- **Direct Client-Side Contact Delivery**: Fully functional contact form powered by Web3Forms client-side API, complete with honeypot spam protection, live loading state feedback, and RFC-compliant validation without opening external email clients.
- **Responsive & Accessible**: 100% responsive fluid layout optimized for smartphones, tablets, laptops, and ultra-wide screens.

---

## 🛠️ Tech Stack & Libraries

| Domain | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS & PostCSS |
| **Animation & 3D** | Framer Motion, Three.js / React Three Fiber |
| **Icons** | Lucide React |
| **Forms & Delivery** | Web3Forms Client API |
| **Document Viewer** | Custom Responsive Modal with PDF / Image Preview |

---

## 📂 Project Structure

```text
Portfolio/
├── public/
│   ├── cv.pdf                         # Primary downloadable Curriculum Vitae
│   ├── images/                        # Profile and UI assets
│   └── documents/                     # Verified degrees, transcripts, certificates
│       ├── education/
│       │   ├── bscs-transcript.pdf
│       │   └── hssc-certificate.pdf
│       └── certificates/
│           ├── forage-ai-in-action.pdf
│           ├── hp-life-data-science.pdf
│           └── erozgaar-web-development.pdf
├── src/
│   ├── app/                           # Next.js App Router (layout, page, metadata)
│   ├── components/                    # Modular UI components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx                   # 3D interactive tilt avatar & intro
│   │   ├── About.tsx
│   │   ├── Skills.tsx                 # Configurable proficiency visualizer
│   │   ├── Education.tsx              # Degree records & transcript buttons
│   │   ├── Projects.tsx               # PoseFit & BrightPath showcase
│   │   ├── Certifications.tsx         # Verified credentials gallery
│   │   ├── Contact.tsx                # Direct email dispatch system
│   │   ├── DocumentPreview.tsx        # Responsive credential modal
│   │   └── Footer.tsx
│   ├── data/                          # Centralized content configurations
│   │   ├── portfolioData.ts           # Bio, skills, projects, and credentials
│   │   └── documentsData.ts           # Document metadata and file registries
│   └── types/                         # TypeScript interfaces and schema contracts
├── .env.example                       # Environment configuration guide
├── .gitignore                         # Comprehensive ignore rules
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.17.0 or higher recommended) and **npm** installed:

```bash
node -v
npm -v
```

### 1. Clone the Repository

```bash
git clone https://github.com/abdullahsaeed2217/Abdullah-s-Portfolio.git
cd Abdullah-s-Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory by copying `.env.example`:

```bash
cp .env.example .env.local
```

Open `.env.local` and add your **free** Web3Forms Access Key:

```env
# Obtain your free access key at https://web3forms.com (takes 10 seconds)
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Production Build

To test and compile an optimized production build:

```bash
npm run build
npm run start
```

---

## 🌐 Deployment to Vercel

The portfolio is fully optimized for one-click deployment on **[Vercel](https://vercel.com/)**:

1. Push this repository to your GitHub account.
2. In the Vercel dashboard, click **Add New Project** and import `Abdullah-s-Portfolio`.
3. Under **Environment Variables**, add:
   - **Key**: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - **Value**: `your_web3forms_access_key`
4. Click **Deploy**. Vercel will build and assign a global CDN URL automatically.

---

## 👨‍💻 Author & Contact

**Muhammad Abdullah Saeed**  
Computer Science Graduate · AI Enthusiast · Full-Stack Developer  
Jauharabad, Punjab, Pakistan  

- **Email**: [abdullahsaeed2217@gmail.com](mailto:abdullahsaeed2217@gmail.com)
- **GitHub**: [@abdullahsaeed2217](https://github.com/abdullahsaeed2217)
- **LinkedIn**: [muhammad-abdullah-saeed](https://www.linkedin.com/in/muhammad-abdullah-saeed-bb3738371)
- **Portfolio Repository**: [Abdullah-s-Portfolio](https://github.com/abdullahsaeed2217/Abdullah-s-Portfolio)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
