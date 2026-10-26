"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to Top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-indigo-600/90 hover:bg-cyan-500 text-white shadow-xl shadow-indigo-600/30 backdrop-blur-md transition-all duration-300 transform hover:scale-110 active:scale-95 border border-white/10"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
