"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface ProfileAvatar3DProps {
  imageSrc: string;
  altText: string;
}

export default function ProfileAvatar3D({ imageSrc, altText }: ProfileAvatar3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle, elegant tilt: max +/- 10 degrees
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });

    // Glare position
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlare({ x: glareX, y: glareY, opacity: 0.25 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center cursor-pointer select-none"
      style={{ perspective: "1000px" }}
    >
      {/* Outer ambient glow */}
      <div
        className="absolute w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-tr from-indigo-500/30 via-cyan-400/25 to-indigo-600/30 blur-2xl transition-opacity duration-500 -z-10"
        style={{
          opacity: isHovered ? 0.9 : 0.45,
          transform: isHovered ? "scale(1.08)" : "scale(1)",
        }}
      />

      {/* 3D Depth Card Wrapper */}
      <div
        className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 aspect-square rounded-full transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: prefersReducedMotion
            ? "none"
            : `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${isHovered ? 1.03 : 1}, ${isHovered ? 1.03 : 1}, 1)`,
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? `0 25px 45px -12px rgba(99, 102, 241, 0.35), 0 10px 20px -5px rgba(6, 182, 212, 0.25)`
            : `0 15px 30px -10px rgba(0, 0, 0, 0.4), 0 0 25px rgba(99, 102, 241, 0.15)`,
        }}
      >
        {/* Subtle Animated Glowing Border Ring */}
        <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-tr from-indigo-500 via-cyan-400 to-indigo-600 animate-pulse duration-1000">
          {/* Inner Circle Mask */}
          <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0B1120] border border-cyan-400/20">
            {/* The Headshot Image */}
            <Image
              src={imageSrc}
              alt={altText}
              fill
              priority
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
              className="object-cover object-top rounded-full transition-transform duration-500 will-change-transform"
              style={{
                transform: isHovered ? "scale(1.04)" : "scale(1)",
              }}
            />

            {/* Soft Ambient Depth & Vignette */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-transparent to-[#0B1120]/40 pointer-events-none" />

            {/* Dynamic 3D Specular Light Glare Overlay */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.05) 40%, transparent 70%)`,
                opacity: glare.opacity,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
