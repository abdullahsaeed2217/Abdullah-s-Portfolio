"use client";

import React from "react";
import { projectsData } from "@/data/portfolioData";
import { Github, ExternalLink, Sparkles, Layers } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0B1120]/60 dark:bg-[#0B1120]/60 bg-slate-100/60 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <span>PROJECT SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 text-slate-900">
            Projects
          </h2>
          <p className="mt-2.5 text-slate-400 dark:text-slate-400 text-slate-600 max-w-xl text-sm sm:text-base">
            Featured artificial intelligence, computer vision, and full-stack software implementations.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="p-7 sm:p-9 rounded-2xl bg-[#111827]/85 dark:bg-[#111827]/85 bg-white border border-slate-800/80 dark:border-slate-800/80 border-slate-200 hover:border-indigo-500/40 transition-all duration-300 shadow-xl backdrop-blur-sm"
            >
              {/* Project Category Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/15 text-indigo-300 dark:text-indigo-300 text-indigo-700 border border-indigo-500/30">
                  {project.category === "AI & Computer Vision" ? (
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  ) : (
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  )}
                  <span>
                    {project.category === "AI & Computer Vision"
                      ? "AI & Computer Vision · Capstone Project"
                      : "Full-Stack Web · Management Platform"}
                  </span>
                </span>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-400 text-slate-500">
                  {project.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-slate-100 text-slate-900 mb-2">
                {project.title}
              </h3>

              {/* Tagline / Subtitle */}
              {project.tagline && (
                <p className="text-xs sm:text-sm font-mono text-cyan-400/90 dark:text-cyan-400/90 text-cyan-600 mb-4">
                  {project.tagline}
                </p>
              )}

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 text-slate-600 leading-relaxed mb-6">
                {project.problem}
              </p>

              {/* Key Features Bullet Points */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div className="mb-6 p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 bg-slate-50 border border-slate-800/60 dark:border-slate-800/60 border-slate-200">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 text-slate-500 block mb-2.5 font-semibold">
                    Core Capabilities
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 dark:text-slate-300 text-slate-700">
                    {project.keyFeatures.slice(0, 4).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Small Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-800/80 dark:bg-slate-800/80 bg-slate-100 border border-slate-700/60 dark:border-slate-700/60 border-slate-200 text-xs font-mono text-slate-300 dark:text-slate-300 text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Functional Repository Button */}
              <div className="pt-5 border-t border-slate-800/60 dark:border-slate-800/60 border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                {project.githubUrl && (
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-400 text-slate-500">
                    {project.githubUrl.replace(/^https?:\/\//, "")}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
