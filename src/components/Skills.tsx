"use client";

import React, { useEffect, useRef, useState } from "react";
import { mainSkills } from "@/data/portfolioData";
import {
  Code2,
  BrainCircuit,
  Layers,
  Terminal,
  Sparkles,
  Cpu,
} from "lucide-react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSkillIcon = (name: string) => {
    switch (name) {
      case "React.js":
        return <Layers className="w-4 h-4 text-cyan-400" />;
      case "Next.js":
        return <Code2 className="w-4 h-4 text-indigo-400" />;
      case "TypeScript":
        return <Terminal className="w-4 h-4 text-blue-400" />;
      case "Python":
        return <Code2 className="w-4 h-4 text-amber-400" />;
      case "Machine Learning":
        return <Cpu className="w-4 h-4 text-purple-400" />;
      case "Artificial Intelligence":
        return <BrainCircuit className="w-4 h-4 text-emerald-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-[#0B1120]/60 dark:bg-[#0B1120]/60 bg-slate-100/60 relative z-10"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 text-slate-900">
            Skills
          </h2>
          <p className="mt-2.5 text-slate-400 dark:text-slate-400 text-slate-600 max-w-xl text-sm sm:text-base">
            Core programming languages, frameworks, and artificial intelligence competencies.
          </p>
        </div>

        {/* Compact Responsive Skills Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 bg-[#111827]/80 dark:bg-[#111827]/80 bg-white/90 p-6 sm:p-8 rounded-2xl border border-slate-800/80 dark:border-slate-800/80 border-slate-200 shadow-xl backdrop-blur-sm">
          {mainSkills.map((skill, index) => {
            const percentage = Math.min(100, Math.max(0, skill.percentage));

            return (
              <div key={skill.name} className="flex flex-col gap-2">
                {/* Header: Icon, Name, and Percentage */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-slate-800/80 dark:bg-slate-800/80 bg-slate-100 border border-slate-700/50">
                      {getSkillIcon(skill.name)}
                    </div>
                    <span className="text-sm font-semibold text-slate-100 dark:text-slate-100 text-slate-900">
                      {skill.name}
                    </span>
                    {skill.category && (
                      <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400 dark:text-slate-400 text-slate-500">
                        · {skill.category}
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-xs font-bold text-cyan-400 dark:text-cyan-400 text-indigo-600 bg-cyan-500/10 dark:bg-cyan-500/10 bg-indigo-50 px-2 py-0.5 rounded border border-cyan-500/20">
                    {percentage}%
                  </span>
                </div>

                {/* Animated Horizontal Progress Bar */}
                <div className="w-full h-2 rounded-full bg-slate-800 dark:bg-slate-800 bg-slate-200 overflow-hidden relative shadow-inner">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-cyan-400 transition-all duration-1000 ease-out shadow-sm"
                    style={{
                      width: isVisible ? `${percentage}%` : "0%",
                      transitionDelay: `${index * 120}ms`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
