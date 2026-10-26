import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://abdullah-portfolio.vercel.app"),
  title: "Muhammad Abdullah Saeed | AI & Full-Stack Developer",
  description:
    "Official portfolio of Muhammad Abdullah Saeed. Computer Science graduate specializing in Artificial Intelligence, Computer Vision (PoseFit), and Modern Web Engineering.",
  keywords: [
    "Muhammad Abdullah Saeed",
    "Computer Science Graduate",
    "AI Enthusiast",
    "PoseFit AI",
    "Computer Vision Developer",
    "Full-Stack Developer",
    "Next.js Developer",
    "University of Education",
    "Pakistan",
  ],
  authors: [{ name: "Muhammad Abdullah Saeed", url: "https://github.com/abdullahsaeed2217" }],
  creator: "Muhammad Abdullah Saeed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdullah-portfolio.vercel.app",
    title: "Muhammad Abdullah Saeed | AI & Full-Stack Developer",
    description:
      "Explore the personal portfolio of Muhammad Abdullah Saeed: AI & Computer Vision systems, PoseFit biomechanics platform, academic timeline, and verified certifications.",
    siteName: "Muhammad Abdullah Saeed Portfolio",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 1200,
        alt: "Muhammad Abdullah Saeed - AI & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Abdullah Saeed | AI & Full-Stack Developer",
    description:
      "Computer Science graduate specializing in AI, Computer Vision (PoseFit), and modern full-stack systems.",
    images: ["/images/profile.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Abdullah Saeed",
    jobTitle: "Computer Science Graduate & AI Developer",
    url: "https://github.com/abdullahsaeed2217",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Education",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Computer Vision",
      "Machine Learning",
      "Next.js",
      "TypeScript",
      "Python",
      "PostgreSQL",
    ],
    sameAs: [
      "https://github.com/abdullahsaeed2217",
      "https://www.linkedin.com/in/muhammad-abdullah-saeed-bb3738371",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground selection:bg-brand-primary selection:text-white antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          <ScrollProgressBar />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
