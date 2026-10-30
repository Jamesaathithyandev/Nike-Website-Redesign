"use client";

import React, { useEffect, useState } from "react";

export default function StudioBackdrop() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 35 });

  useEffect(() => {
    // Subtle mouse tracking for dynamic ambient illumination on desktop
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to percentage
      const x = Math.round((e.clientX / window.innerWidth) * 100);
      const y = Math.round((e.clientY / window.innerHeight) * 100);
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 
        Base Layer: Deep, rich multi-layered velvety studio gradient
        Warm terracotta and burnt sienna undertones modeled after the original Nike shoot
      */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 32% 40%, rgba(140, 48, 15, 0.32) 0%, rgba(70, 22, 8, 0.22) 35%, rgba(20, 10, 6, 0.85) 70%, #060504 100%),
            radial-gradient(ellipse 65% 55% at 78% 25%, rgba(255, 85, 0, 0.12) 0%, rgba(90, 30, 8, 0.08) 40%, transparent 70%),
            radial-gradient(circle at 50% 85%, rgba(120, 40, 10, 0.16) 0%, transparent 60%),
            #060504
          `,
        }}
      />

      {/* 
        Interactive Dynamic Ambient Light:
        Gently glides with mouse motion to create tangible optical depth
      */}
      <div
        className="absolute w-[650px] h-[650px] rounded-full blur-[140px] opacity-35 transition-transform duration-700 ease-out will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(255, 85, 0, 0.4) 0%, rgba(180, 50, 0, 0.15) 45%, transparent 70%)",
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* 
        Hero Volumetric Studio Spotlight:
        Positions a dramatic warm key light directly behind the hand & sneaker presentation
      */}
      <div className="absolute -left-20 top-1/4 w-[850px] h-[850px] rounded-full bg-radial from-[#FF5500]/22 via-[#9e330c]/12 to-transparent blur-[130px] animate-pulse-glow pointer-events-none" />

      {/* Mid-Page Accent Atmosphere (behind metrics & circular cluster) */}
      <div className="absolute -right-32 top-[45%] w-[750px] h-[750px] rounded-full bg-radial from-[#FF5500]/15 via-[#682006]/10 to-transparent blur-[140px] pointer-events-none" />

      {/* Lower Page Warm Glow (behind About & Contact) */}
      <div className="absolute left-1/4 bottom-10 w-[900px] h-[600px] rounded-full bg-radial from-[#c0400a]/16 via-transparent to-transparent blur-[150px] pointer-events-none" />

      {/* 
        Architectural Studio Grid:
        Ultra-fine 1px geometric grid with a radial mask so it gently shines
        only through illuminated areas, evoking Nike Innovation Lab blueprints
      */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 75% 75% at 50% 40%, black 30%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 40%, black 30%, transparent 85%)",
        }}
      />

      {/* 
        Cinematic Studio Vignette:
        Darkens the extreme edges and corners to ensure pristine typographic contrast
      */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse 95% 90% at 50% 50%, transparent 45%, rgba(6, 5, 4, 0.65) 75%, rgba(4, 3, 2, 0.96) 100%)",
        }}
      />

      {/* 
        Photographic Film Grain:
        Smooth tactile noise preventing color banding and giving 35mm cinematic richness
      */}
      <div className="absolute inset-0 noise-bg opacity-35 mix-blend-overlay" />
    </div>
  );
}

