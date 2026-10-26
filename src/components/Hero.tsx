"use client";

import React from "react";
import dynamic from "next/dynamic";
import { personalInfo } from "@/data/portfolioData";
import ProfileAvatar3D from "./ProfileAvatar3D";
import {
  ArrowRight,
  FileDown,
  Mail,
  Github,
  Linkedin,
  MapPin,
  ChevronDown,
} from "lucide-react";

// Dynamic import for background 3D Canvas
const HeroScene = dynamic(() => import("./3d/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      <div className="w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl animate-pulse" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* 3D Scene Background */}
      <HeroScene />

      {/* Radial Gradient Glow Underlay */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/15 via-cyan-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            {/* Status / Role Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 dark:bg-slate-900/80 bg-slate-100 border border-indigo-500/30 text-indigo-300 dark:text-indigo-300 text-indigo-700 text-xs font-mono mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-slate-300 dark:text-slate-300 text-slate-700 font-medium">
                Portfolio &amp; Engineering Showcase
              </span>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 text-slate-900 leading-[1.15] mb-3">
              <span>{personalInfo.name}</span>
            </h1>

            {/* Subheading / Positioning */}
            <div className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300 bg-clip-text text-transparent mb-4">
              {personalInfo.title}
            </div>

            {/* Tagline */}
            <blockquote className="border-l-2 border-cyan-400/80 pl-4 py-1 text-slate-300 dark:text-slate-300 text-slate-700 italic text-base sm:text-lg mb-6">
              &ldquo;{personalInfo.tagline}&rdquo;
            </blockquote>

            {/* Concise Human Introduction */}
            <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 text-slate-600 max-w-2xl leading-relaxed mb-8">
              Computer Science graduate with deep enthusiasm for Artificial Intelligence,
              Computer Vision, and modern Full-Stack engineering. Passionate about transforming
              computational models into high-impact, real-time software systems that solve tangible problems.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/cv.pdf"
                download="Muhammad_Abdullah_Saeed_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 bg-white hover:bg-slate-700/80 text-slate-200 dark:text-slate-200 text-slate-800 font-semibold text-sm border border-slate-700/60 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-transparent hover:bg-slate-800/40 text-slate-300 dark:text-slate-300 text-slate-700 font-medium text-sm border border-slate-700/40 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Location Links */}
            <div className="flex flex-wrap items-center gap-3 text-slate-400 dark:text-slate-400 text-slate-600">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mr-1">Profiles:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 bg-slate-100 hover:text-white hover:bg-indigo-600/30 border border-slate-700/50 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 bg-slate-100 hover:text-[#0A66C2] hover:bg-indigo-600/30 border border-slate-700/50 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 bg-slate-100 hover:text-cyan-400 hover:bg-indigo-600/30 border border-slate-700/50 transition-all duration-200"
                aria-label="Send Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <div className="flex items-center text-xs font-mono text-slate-400 ml-2">
                <MapPin className="w-3.5 h-3.5 mr-1 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Circular 3D Profile Avatar & Stats */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
            <ProfileAvatar3D
              imageSrc={personalInfo.profileImage}
              altText="Muhammad Abdullah Saeed - Profile Photo"
            />

            {/* Balanced Quick Highlights Row */}
            <div className="grid grid-cols-2 gap-3 mt-8 w-full max-w-xs sm:max-w-sm">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 bg-slate-100/90 border border-slate-800/80 dark:border-slate-800/80 border-slate-200 text-center"
                >
                  <p className="text-[11px] font-mono text-slate-400">{stat.label}</p>
                  <p className="text-xs sm:text-sm font-semibold text-cyan-400 mt-0.5">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator pointing to #skills */}
        <div className="mt-12 flex justify-center">
          <a
            href="#skills"
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="Scroll to Skills Section"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest">Scroll Down</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
