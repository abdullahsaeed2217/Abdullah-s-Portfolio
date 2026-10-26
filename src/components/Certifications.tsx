"use client";

import React, { useState } from "react";
import { getCertificationDocuments } from "@/data/documentsData";
import { PortfolioDocument } from "@/types/portfolio";
import DocumentPreview from "./DocumentPreview";
import {
  Award,
  CheckCircle,
  ExternalLink,
  Download,
  Trophy,
  Eye,
  FileText,
  Sparkles,
} from "lucide-react";

export default function Certifications() {
  const [activeDoc, setActiveDoc] = useState<PortfolioDocument | null>(null);
  const certificates = getCertificationDocuments();

  const handleOpenCertificate = (doc: PortfolioDocument, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveDoc(doc);
  };

  return (
    <section id="certifications" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <span>CREDENTIALS &amp; HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 text-slate-900">
            Certifications &amp; Achievements
          </h2>
          <p className="mt-2.5 text-slate-400 dark:text-slate-400 text-slate-600 max-w-2xl text-sm sm:text-base">
            Verified professional development programs, hands-on simulations, and university merit awards.
          </p>
        </div>

        {/* Compact Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => {
            const isWinner =
              cert.badgeText.includes("1st") || cert.badgeText.includes("Trophy");
            const sanitizedTitle = cert.title.replace(/[^a-zA-Z0-9_-]/g, "_");
            const downloadFilename = `${sanitizedTitle}_Certificate.pdf`;

            return (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-[#111827]/80 dark:bg-[#111827]/80 bg-white border border-slate-800/80 dark:border-slate-800/80 border-slate-200 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => handleOpenCertificate(cert)}
              >
                <div>
                  {/* Badge & Date */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold flex items-center gap-1.5 ${
                        isWinner
                          ? "bg-amber-500/15 text-amber-400 dark:text-amber-400 text-amber-700 border border-amber-500/30"
                          : "bg-indigo-500/15 text-indigo-300 dark:text-indigo-300 text-indigo-700 border border-indigo-500/30"
                      }`}
                    >
                      {isWinner ? (
                        <Trophy className="w-3.5 h-3.5" />
                      ) : (
                        <Award className="w-3.5 h-3.5" />
                      )}
                      <span>{cert.badgeText}</span>
                    </span>

                    {cert.issueDate && (
                      <span className="text-[11px] text-slate-400 dark:text-slate-400 text-slate-500 font-mono">
                        {cert.issueDate}
                      </span>
                    )}
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 text-slate-900 group-hover:text-cyan-400 transition-colors mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-medium text-cyan-400 dark:text-cyan-400 text-indigo-600 mb-4">
                    {cert.issuer}
                  </p>

                  {/* Highlights */}
                  {cert.highlights && cert.highlights.length > 0 && (
                    <div className="space-y-1.5 mb-5">
                      {cert.highlights.slice(0, 2).map((h, hIdx) => (
                        <div
                          key={hIdx}
                          className="text-xs text-slate-400 dark:text-slate-400 text-slate-600 flex items-start gap-2 leading-relaxed"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Actions: View Certificate Button, Download, and External Link */}
                <div
                  className="pt-4 border-t border-slate-800/60 dark:border-slate-800/60 border-slate-200 flex items-center justify-between gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Primary View Certificate Button */}
                  <button
                    type="button"
                    onClick={(e) => handleOpenCertificate(cert, e)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-semibold shadow-md shadow-indigo-500/20 transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>

                  {/* Secondary Download Button */}
                  {cert.filePath && (
                    <a
                      href={cert.filePath}
                      download={downloadFilename}
                      className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
                      title="Download Certificate PDF"
                      aria-label={`Download ${cert.title} PDF`}
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {/* Secondary Open in Tab Button */}
                  {cert.filePath && (
                    <a
                      href={cert.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-cyan-400 border border-slate-700/60 transition-colors"
                      title="Open PDF in new browser tab"
                      aria-label={`Open ${cert.title} in new tab`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reusable Document Preview Modal */}
      <DocumentPreview
        document={activeDoc}
        onClose={() => setActiveDoc(null)}
      />
    </section>
  );
}
