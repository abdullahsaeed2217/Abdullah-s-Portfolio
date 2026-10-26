"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications & Achievements", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-slate-800/80 bg-[#070B14] py-12 relative z-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-bold text-slate-200 text-sm">
              {personalInfo.name}
            </span>
            <span className="text-[11px] font-mono text-cyan-400 mt-0.5">
              Computer Science Graduate · AI &amp; Full-Stack Developer
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/60 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/60 hover:text-[#0A66C2] hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-slate-800/60 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all border border-indigo-500/30"
              title="Scroll to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-mono gap-2">
          <span>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </span>
          <span className="text-slate-500">
            Engineered with Next.js &amp; Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}
