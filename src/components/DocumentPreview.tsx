"use client";

import React, { useEffect, useState, useRef } from "react";
import { PortfolioDocument } from "@/types/portfolio";
import {
  X,
  ExternalLink,
  Download,
  Maximize2,
  Minimize2,
  FileText,
  Award,
  CheckCircle2,
  AlertCircle,
  GraduationCap,
} from "lucide-react";

interface DocumentPreviewProps {
  document: PortfolioDocument | null;
  onClose: () => void;
}

export default function DocumentPreview({ document: doc, onClose }: DocumentPreviewProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loading, setLoading] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Keyboard navigation: Escape to close and body scroll lock
  useEffect(() => {
    if (!doc) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const prevOverflow = window.document.body.style.overflow;
    window.document.body.style.overflow = "hidden";

    // Focus close button on mount for accessibility
    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.document.body.style.overflow = prevOverflow;
    };
  }, [doc, onClose]);

  // Loading state management: auto-clear after 750ms so user is never blocked by un-fired iframe onload
  useEffect(() => {
    if (!doc) return;
    setLoading(true);
    setIsFullscreen(false);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 750);

    return () => clearTimeout(timer);
  }, [doc]);

  if (!doc) return null;

  // Sanitized download filename
  const sanitizedTitle = doc.title.replace(/[^a-zA-Z0-9_-]/g, "_");
  const downloadFilename = `${sanitizedTitle}.pdf`;

  const getCategoryIcon = () => {
    switch (doc.category) {
      case "education":
        return <GraduationCap className="w-5 h-5 text-indigo-400" />;
      case "award":
        return <Award className="w-5 h-5 text-amber-400" />;
      default:
        return <FileText className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="document-preview-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className={`relative w-full ${
          isFullscreen
            ? "max-w-[98vw] h-[96vh]"
            : "max-w-5xl h-[92vh] max-h-[920px]"
        } bg-[#0F172A] border border-indigo-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-800 bg-[#0B1120] shrink-0">
          <div className="flex items-center gap-3 min-w-0 mr-3">
            <div className="p-2 sm:p-2.5 rounded-xl bg-indigo-500/15 border border-indigo-500/30 shrink-0">
              {getCategoryIcon()}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {doc.badgeText}
                </span>
                {doc.issueDate && (
                  <span className="text-[11px] font-mono text-slate-400">
                    {doc.issueDate}
                  </span>
                )}
              </div>
              <h3
                id="document-preview-title"
                className="text-sm sm:text-base md:text-lg font-bold text-slate-100 truncate mt-0.5"
                title={doc.title}
              >
                {doc.title}
              </h3>
              <p className="text-xs text-cyan-400 font-medium truncate">
                {doc.issuer}
              </p>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {doc.filePath && (
              <>
                {/* Open in full new tab */}
                <a
                  href={doc.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700/60 transition-colors"
                  title="Open in new browser tab"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="hidden sm:inline">New Tab</span>
                </a>

                {/* Direct Download button */}
                <a
                  href={doc.filePath}
                  download={downloadFilename}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-semibold shadow-md transition-all"
                  title="Download Document PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>
              </>
            )}

            {/* Toggle Fullscreen */}
            <button
              type="button"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors hidden md:inline-flex"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>

            {/* Close Button */}
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-red-500/20 hover:text-red-400 transition-colors"
              title="Close (Escape)"
              aria-label="Close document preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Display Canvas */}
        <div className="relative flex-1 w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
          {/* Subtle Loading Spinner Overlay */}
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-400 bg-slate-950/80 backdrop-blur-sm z-10 transition-opacity duration-300">
              <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
              <span className="text-xs font-mono">Loading Genuine Document...</span>
            </div>
          )}

          {doc.filePath ? (
            <>
              {/* Native Object / Iframe PDF Embed */}
              <object
                data={`${doc.filePath}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                type="application/pdf"
                className="w-full h-full border-0 bg-slate-900"
              >
                <iframe
                  src={`${doc.filePath}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                  title={`${doc.title} Document View`}
                  className="w-full h-full border-0 bg-slate-900"
                >
                  <div className="flex flex-col items-center justify-center p-8 text-center text-slate-300 h-full">
                    <FileText className="w-12 h-12 text-cyan-400 mb-3" />
                    <p className="text-sm font-semibold mb-2">
                      PDF viewer not supported directly in this frame.
                    </p>
                    <a
                      href={doc.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open Document in Full Tab</span>
                    </a>
                  </div>
                </iframe>
              </object>

              {/* Mobile helper banner for viewports where iframe PDF rendering is limited */}
              <div className="sm:hidden absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#0B1120]/95 backdrop-blur-md border border-indigo-500/40 flex items-center justify-between text-xs text-slate-300 z-20 shadow-lg">
                <span className="text-[11px] text-slate-400 font-mono">
                  Mobile view?
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={doc.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-cyan-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Open in Tab</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-slate-600">|</span>
                  <a
                    href={doc.filePath}
                    download={downloadFilename}
                    className="font-semibold text-indigo-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Download</span>
                    <Download className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-center text-slate-400">
              <AlertCircle className="w-12 h-12 text-amber-400 mb-3" />
              <p className="text-sm font-semibold text-slate-200">
                Document File Missing
              </p>
              <p className="text-xs text-slate-400 mt-1 max-w-sm">
                This document is verified, but the local file has not yet been placed in the public assets directory.
              </p>
            </div>
          )}
        </div>

        {/* Footer Bar: Verification ID & Details */}
        <div className="px-4 sm:px-6 py-3 border-t border-slate-800 bg-[#0B1120] text-xs shrink-0 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            {doc.credentialId ? (
              <div className="font-mono text-[11px] text-slate-300 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                <span className="text-slate-500 mr-1.5 uppercase font-semibold">Credential:</span>
                <span className="text-cyan-400 font-medium select-all">{doc.credentialId}</span>
              </div>
            ) : (
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Academic &amp; Institutional Document</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {doc.skillsGained &&
              doc.skillsGained.slice(0, 3).map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="hidden md:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                >
                  {skill}
                </span>
              ))}

            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors ml-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
