"use client";

import React, { useState } from "react";
import { educationData } from "@/data/portfolioData";
import { getDocumentById } from "@/data/documentsData";
import { PortfolioDocument, EducationItem } from "@/types/portfolio";
import DocumentPreview from "./DocumentPreview";
import {
  GraduationCap,
  Calendar,
  MapPin,
  ExternalLink,
  Download,
  Eye,
  FileCheck,
} from "lucide-react";

export default function Education() {
  const [selectedDoc, setSelectedDoc] = useState<PortfolioDocument | null>(null);

  const handleOpenDoc = (item: EducationItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    // Resolve document from centralized config or fallback
    const docId = item.degree.toLowerCase().includes("bachelor")
      ? "bscs-transcript"
      : "hssc-certificate";

    const resolved = getDocumentById(docId);
    if (resolved) {
      setSelectedDoc(resolved);
    } else if (item.documentUrl) {
      // Fallback
      setSelectedDoc({
        id: docId,
        title: item.degree,
        issuer: item.institution,
        type: "transcript",
        category: "education",
        filePath: item.documentUrl,
        issueDate: item.period,
        badgeText: item.credential,
        description: item.description,
        fileAvailable: true,
      });
    }
  };

  return (
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 text-slate-900">
            Education
          </h2>
          <p className="mt-2.5 text-slate-400 dark:text-slate-400 text-slate-600 max-w-xl text-sm sm:text-base">
            Academic qualifications, coursework rigor, and genuine verified records.
          </p>
        </div>

        {/* Two Compact Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((item, index) => {
            const docId = item.degree.toLowerCase().includes("bachelor")
              ? "bscs-transcript"
              : "hssc-certificate";
            const doc = getDocumentById(docId);
            const targetPath = doc?.filePath || item.documentUrl || "";
            const downloadFilename = docId === "bscs-transcript" ? "BSCS_Transcript_UE_Lahore.pdf" : "HSSC_Certificate_BISE_Sargodha.pdf";

            return (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-2xl bg-[#111827]/80 dark:bg-[#111827]/80 bg-white border border-slate-800/80 dark:border-slate-800/80 border-slate-200 hover:border-indigo-500/50 hover:shadow-indigo-500/10 transition-all duration-300 shadow-xl flex flex-col justify-between group cursor-pointer"
                onClick={() => handleOpenDoc(item)}
              >
                <div>
                  {/* Degree & Year Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 bg-slate-100 text-indigo-400 border border-slate-700/50 group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 dark:text-cyan-400 text-indigo-600 bg-cyan-500/10 dark:bg-cyan-500/10 bg-indigo-50 px-3 py-1 rounded-full border border-cyan-500/20 shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-100 dark:text-slate-100 text-slate-900 group-hover:text-cyan-400 transition-colors mb-1.5">
                    {item.degree}
                  </h3>

                  <p className="text-sm font-medium text-indigo-400 dark:text-indigo-400 text-indigo-600 mb-2">
                    {item.institution}
                  </p>

                  <div className="flex items-center gap-2.5 text-xs text-slate-400 dark:text-slate-400 text-slate-500 mb-4 font-mono flex-wrap">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {item.location}
                    </span>
                    <span>·</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 dark:bg-slate-800/80 bg-slate-100 text-slate-300 dark:text-slate-300 text-slate-700">
                      {item.credential}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Action Buttons for Academic Document */}
                <div
                  className="pt-4 border-t border-slate-800/60 dark:border-slate-800/60 border-slate-200 flex items-center justify-between gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Primary View Document Button */}
                  <button
                    type="button"
                    onClick={(e) => handleOpenDoc(item, e)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-semibold shadow-md shadow-indigo-500/20 transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{item.documentLabel || "View Document"}</span>
                  </button>

                  {/* Secondary Download Button */}
                  {targetPath && (
                    <a
                      href={targetPath}
                      download={downloadFilename}
                      className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
                      title="Download PDF Document"
                      aria-label={`Download ${item.degree} PDF`}
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  )}

                  {/* Secondary Open in Tab Button */}
                  {targetPath && (
                    <a
                      href={targetPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-cyan-400 border border-slate-700/60 transition-colors"
                      title="Open PDF in new browser tab"
                      aria-label={`Open ${item.degree} in new tab`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Centralized Document Preview Modal */}
      <DocumentPreview
        document={selectedDoc}
        onClose={() => setSelectedDoc(null)}
      />
    </section>
  );
}
