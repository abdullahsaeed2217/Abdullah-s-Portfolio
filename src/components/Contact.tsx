"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  Copy,
  Check,
  FileDown,
  Phone,
  ExternalLink,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Basic Validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields (Name, Email, and Message).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Web3Forms Access Key is not configured yet. Please add your key to NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local (free from web3forms.com)."
      );
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: trimmedName,
          email: trimmedEmail,
          subject: trimmedSubject || `Portfolio Message from ${trimmedName}`,
          message: trimmedMessage,
          from_name: "Muhammad Abdullah Saeed Portfolio",
          botcheck: "",
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(
          data.message || "Failed to send message. Please verify your Web3Forms access key or try again."
        );
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        "Network error: Unable to connect to email delivery service. Please check your connection or send a direct email."
      );
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0B1120]/60 dark:bg-[#0B1120]/60 bg-slate-100/60 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 text-slate-900">
            Get In Touch
          </h2>
          <p className="mt-2.5 text-slate-400 dark:text-slate-400 text-slate-600 max-w-xl text-sm sm:text-base">
            Open to prospective academic research, collaboration, and software engineering opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-[#111827]/85 dark:bg-[#111827]/85 bg-white border border-slate-800/80 dark:border-slate-800/80 border-slate-200 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-400 dark:text-indigo-400 text-indigo-600 border border-indigo-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400 text-slate-500 block uppercase">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-bold text-slate-100 dark:text-slate-100 text-slate-900 hover:text-cyan-400 transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/60 dark:border-slate-800/60 border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-mono font-medium"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-1 text-xs text-indigo-400 dark:text-indigo-400 text-indigo-600 hover:underline font-mono"
                >
                  <span>Open Email App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Phone & Location Card */}
            <div className="p-6 rounded-2xl bg-[#111827]/85 dark:bg-[#111827]/85 bg-white border border-slate-800/80 dark:border-slate-800/80 border-slate-200 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 bg-slate-100 text-cyan-400 border border-slate-700/50">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400 text-slate-500 block uppercase">
                    Phone
                  </span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-xs sm:text-sm font-semibold text-slate-200 dark:text-slate-200 text-slate-800 hover:text-cyan-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-800/60 dark:border-slate-800/60 border-slate-200">
                <div className="p-2.5 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 bg-slate-100 text-cyan-400 border border-slate-700/50">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400 text-slate-500 block uppercase">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 dark:text-slate-200 text-slate-800">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Profiles & CV Download */}
              <div className="pt-3 border-t border-slate-800/60 dark:border-slate-800/60 border-slate-200 flex flex-wrap gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 bg-slate-100 hover:bg-slate-700 text-xs font-semibold text-slate-200 dark:text-slate-200 text-slate-800 border border-slate-700/60 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#0A66C2]/15 hover:bg-[#0A66C2]/25 text-xs font-semibold text-[#0A66C2] border border-[#0A66C2]/30 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="/cv.pdf"
                  download="Muhammad_Abdullah_Saeed_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-semibold shadow-md transition-all"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111827]/85 dark:bg-[#111827]/85 bg-white border border-slate-800/80 dark:border-slate-800/80 border-slate-200 shadow-xl">
              <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 text-slate-900 mb-1">
                Compose Message
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 text-slate-600 mb-6">
                Send a direct message to {personalInfo.email}.
              </p>

              {status === "success" ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-in fade-in duration-200">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-100 dark:text-slate-100 text-slate-900 mb-1">
                    Message sent successfully!
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-400 text-slate-600 mb-4">
                    Thank you for reaching out. Your message has been delivered to {personalInfo.email}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="text-xs font-semibold text-cyan-400 hover:underline font-mono"
                  >
                    Send another message &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage || "Failed to send message. Please try again or use direct email."}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 dark:text-slate-400 text-slate-600 mb-1.5">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. John / Hiring Manager"
                        disabled={status === "loading"}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 bg-slate-50 border border-slate-700/60 dark:border-slate-700/60 border-slate-300 text-slate-100 dark:text-slate-100 text-slate-900 text-xs focus:outline-none focus:border-cyan-400 disabled:opacity-60 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 dark:text-slate-400 text-slate-600 mb-1.5">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your-email@example.com"
                        disabled={status === "loading"}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 bg-slate-50 border border-slate-700/60 dark:border-slate-700/60 border-slate-300 text-slate-100 dark:text-slate-100 text-slate-900 text-xs focus:outline-none focus:border-cyan-400 disabled:opacity-60 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 dark:text-slate-400 text-slate-600 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Collaboration / Academic Inquiry"
                      disabled={status === "loading"}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 bg-slate-50 border border-slate-700/60 dark:border-slate-700/60 border-slate-300 text-slate-100 dark:text-slate-100 text-slate-900 text-xs focus:outline-none focus:border-cyan-400 disabled:opacity-60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 dark:text-slate-400 text-slate-600 mb-1.5">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      disabled={status === "loading"}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 bg-slate-50 border border-slate-700/60 dark:border-slate-700/60 border-slate-300 text-slate-100 dark:text-slate-100 text-slate-900 text-xs focus:outline-none focus:border-cyan-400 resize-none disabled:opacity-60 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 disabled:opacity-60 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
