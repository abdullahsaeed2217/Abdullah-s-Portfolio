"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import {
  Sun,
  Moon,
  Menu,
  X,
  FileDown,
} from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications & Achievements", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section spy for active navigation
      const sections = ["home", "skills", "education", "projects", "certifications", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1120]/85 dark:bg-[#0B1120]/90 bg-white/90 backdrop-blur-md border-b border-indigo-500/15 shadow-lg shadow-black/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-indigo-500/20">
              <div className="w-full h-full bg-[#0B1120] dark:bg-[#0B1120] bg-white rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-sm bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  MAS
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-slate-100 dark:text-slate-100 text-slate-900 group-hover:text-cyan-400 transition-colors">
                Muhammad Abdullah Saeed
              </span>
              <span className="text-[11px] font-mono text-cyan-400 dark:text-cyan-400 text-indigo-600">
                AI &amp; Full-Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-xs xl:text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-cyan-400 bg-indigo-500/15 border border-indigo-500/30 shadow-sm"
                      : "text-slate-300 dark:text-slate-300 text-slate-600 hover:text-slate-100 dark:hover:text-white hover:bg-slate-800/40"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & CV Download */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-xl text-slate-300 dark:text-slate-300 text-slate-700 bg-slate-800/40 dark:bg-slate-800/40 bg-slate-100 hover:text-cyan-400 hover:bg-slate-800/80 transition-all border border-slate-700/50"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-500" />
              )}
            </button>

            {/* Download CV Button */}
            <a
              href="/cv.pdf"
              download="Muhammad_Abdullah_Saeed_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-md shadow-indigo-500/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-slate-300 dark:text-slate-300 text-slate-700 bg-slate-800/50 border border-slate-700/50"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-500" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-slate-300 dark:text-slate-300 text-slate-700 bg-slate-800/50 border border-slate-700/50 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1120]/95 dark:bg-[#0B1120]/95 bg-white/95 backdrop-blur-xl border-b border-indigo-500/20 px-4 pt-3 pb-6 transition-all duration-300">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-cyan-400 bg-indigo-500/15 font-semibold"
                      : "text-slate-300 dark:text-slate-300 text-slate-700 hover:text-white hover:bg-slate-800/40"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-800/60 flex flex-col gap-2">
              <a
                href="/cv.pdf"
                download="Muhammad_Abdullah_Saeed_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-medium text-sm shadow-md"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
