"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";
import gsap from "gsap";
import { sounds } from "./SoundEffects";

export default function HeroOverlay() {
  const contentRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    // Synchronized entrance animation:
    // Glides and fades smoothly in from the right simultaneously as the sneaker arm enters from the left
    gsap.fromTo(
      contentRef.current,
      {
        x: 70,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        delay: 0.15,
        ease: "power3.out",
      }
    );

    if (bottomBarRef.current) {
      gsap.fromTo(
        bottomBarRef.current,
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.3,
          delay: 0.45,
          ease: "power2.out",
        }
      );
    }
  }, []);

  const scrollToMetrics = () => {
    sounds.playClick();
    const target = document.getElementById("metrics-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pointer-events-none relative z-20 flex flex-col justify-between min-h-screen p-6 sm:p-10 lg:p-16 pt-28 select-none">
      
      {/* Background Subtle Watermark Typography */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none -z-10 overflow-hidden pr-4 sm:pr-8 lg:pr-16">
        <span className="text-[18vw] font-black tracking-tighter uppercase text-white/[0.025] select-none leading-none">
          NIKE AIR
        </span>
      </div>

      {/* Main Hero Row: Align Informational Copy to the RIGHT on desktop */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 sm:pt-10">
        
        {/* Left Column is left intentionally open for the hand and sneakers */}
        <div className="hidden lg:block lg:col-span-6 pointer-events-none" />

        {/* Right Column: Neat Editorial Informational Showcase */}
        <div
          ref={contentRef}
          className="lg:col-span-6 ml-auto w-full max-w-xl space-y-6 pointer-events-auto"
        >
          {/* Main Title & Editorial Description */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white leading-[0.92]">
              AIR JORDAN 1
              <span className="block text-[#FF5500] mt-1 drop-shadow-[0_0_25px_rgba(255,85,0,0.35)]">
                RETRO DUAL OG
              </span>
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal pt-1 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              Presented in hand. An archival pairing of premium terracotta orange suede and stonewashed woven denim, unified by the iconic Swoosh and legendary Air-Sole comfort. Engineered in 1985 for hardwood dominance, elevated across four decades into global cultural heritage.
            </p>
          </div>

          {/* Informational Specs Floating Badges */}
          <div className="grid grid-cols-3 gap-3 pt-1">
            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md hover:border-[#FF5500] hover:shadow-[0_0_20px_rgba(255,85,0,0.2)] transition-all duration-300 group hover:-translate-y-0.5">
              <span className="block text-xl sm:text-2xl font-black text-white group-hover:text-[#FF5500] transition-colors font-mono">
                1985
              </span>
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium block mt-1">
                Origin Year
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md hover:border-[#FF5500] hover:shadow-[0_0_20px_rgba(255,85,0,0.2)] transition-all duration-300 group hover:-translate-y-0.5">
              <span className="block text-xl sm:text-2xl font-black text-[#FF5500] font-mono">
                DUAL OG
              </span>
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium block mt-1">
                Archival Stance
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md hover:border-[#FF5500] hover:shadow-[0_0_20px_rgba(255,85,0,0.2)] transition-all duration-300 group hover:-translate-y-0.5">
              <span className="block text-xl sm:text-2xl font-black text-white group-hover:text-[#FF5500] transition-colors font-mono">
                AIR-SOLE
              </span>
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium block mt-1">
                Heel Gas Unit
              </span>
            </div>
          </div>

          {/* Call to Actions - Informational & Archival exploration only */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToMetrics}
              className="px-8 py-4 rounded-full bg-[#FF5500] text-black font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-[0_10px_25px_rgba(255,85,0,0.3)] flex items-center gap-2 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>EXPLORE ARCHIVE</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <Link
              href="/shop"
              onClick={() => sounds.playClick()}
              className="px-7 py-4 rounded-full bg-black/60 border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:border-[#FF5500] hover:text-[#FF5500] transition-all duration-300 backdrop-blur-md flex items-center gap-2 hover:scale-[1.03] active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>VIEW ALL SILHOUETTES</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Detailed Specs & Scroll Cue */}
      <div
        ref={bottomBarRef}
        className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 pt-6 border-t border-white/10 mt-12 pb-4"
      >
        {/* Left: Product Heritage Tag */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
            <span className="text-white font-bold tracking-widest">
              ARCHIVAL PRESENTATION
            </span>
          </div>
          <span className="hidden sm:inline text-neutral-600">|</span>
          <span className="hidden sm:inline">DUAL RETRO SILHOUETTE</span>
          <span className="hidden sm:inline text-neutral-600">|</span>
          <span className="hidden sm:inline">BEAVERTON, OREGON</span>
        </div>

        {/* Center: Scroll Down Cue */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={scrollToMetrics}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-black/70 hover:border-[#FF5500] hover:text-[#FF5500] text-neutral-300 text-xs font-semibold uppercase tracking-wider transition-all duration-200 backdrop-blur-sm group"
          >
            <span>Scroll to Explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#FF5500] group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Right: Feature Badges */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#FF5500]" />
            <span className="text-white font-medium">Suede & Denim Fusion</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#FF5500]" />
            <span className="text-white font-medium">100% Authentic Craft</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#FF5500]" />
            <span className="text-white font-medium">Encapsulated Air</span>
          </div>
        </div>
      </div>
    </div>
  );
}
