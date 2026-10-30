"use client";

import React from "react";
import { Zap, ShieldCheck, Globe, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-30 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28 border-t border-white/10"
    >
      {/* Section Header with Scroll Reveal */}
      <ScrollReveal direction="up" duration={0.85}>
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF5500]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
            CHAPTER // ABOUT NIKE ARCHIVE
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            THE CONTINUOUS PURSUIT OF
            <span className="block text-[#FF5500] drop-shadow-[0_0_25px_rgba(255,85,0,0.35)]">
              HUMAN POTENTIAL
            </span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Founded on the principle that “If you have a body, you are an athlete,” Nike has spent over five decades blending biomechanical science, aerospace cushioning, and cultural resonance to redefine the boundaries of movement.
          </p>
        </div>
      </ScrollReveal>

      {/* Main Grid: Heritage Story & Innovation Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
        
        {/* Left Column: Campus & Blueprint Card */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="right" duration={0.9} delay={0.15} className="h-full">
            <div className="h-full rounded-3xl bg-black/60 border border-white/10 p-8 sm:p-10 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group hover:border-[#FF5500]/50 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(255,85,0,0.12)]">
              <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#FF5500]/15 via-transparent to-transparent blur-3xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                    GLOBAL HEADQUARTERS // BEAVERTON, OREGON
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500] text-[11px] font-mono font-bold">
                    EST. 1964
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                  FROM WAFFLE IRONS TO AIR PROPULSION
                </h3>

                <p className="text-neutral-300 text-sm leading-relaxed">
                  In 1964, track coach Bill Bowerman and athlete Phil Knight set out with a simple vision: give runners lighter, faster shoes. Bowerman melted urethane in his wife’s waffle iron to invent the waffle sole, and by 1978, aerospace aeronautics engineer Frank Rudy introduced encapsulated air.
                </p>

                <p className="text-neutral-400 text-sm leading-relaxed">
                  Today, the Nike Sports Research Lab (NSRL) on the Beaverton campus gathers motion data across hundreds of thousands of athlete hours, shaping every arch, compound density, and stitch that makes our heritage pieces legendary.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-white/10 relative z-10">
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-white font-mono">190+</span>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-mono">Countries Active</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-[#FF5500] font-mono">75,000+</span>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-mono">Global Team</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-white font-mono">1,200+</span>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-mono">Utility Patents</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Core Ethos Cards with Staggered Fade-in */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {[
            {
              icon: Zap,
              title: "AIR MANUFACTURING INNOVATION",
              desc: "Pressurized gas geometry fabricated in St. Charles, Missouri and Beaverton, providing zero-drop impact absorption.",
            },
            {
              icon: ShieldCheck,
              title: "ARCHIVAL INTEGRITY",
              desc: "Preserving original silhouette molds from 1982 and 1985 with exact stitch counts, leather weights, and collar dimensions.",
            },
            {
              icon: Globe,
              title: "MOVE TO ZERO COMMITMENT",
              desc: "Nike’s ongoing journey toward zero carbon and zero waste to safeguard the future of sport and environmental play.",
            },
          ].map((card, idx) => (
            <ScrollReveal
              key={idx}
              direction="left"
              duration={0.8}
              delay={0.2 + idx * 0.12}
              className="flex-1"
            >
              <div className="h-full p-6 rounded-2xl bg-black/50 border border-white/10 hover:border-[#FF5500] transition-all duration-300 flex flex-col justify-center group hover:shadow-[0_10px_25px_rgba(255,85,0,0.15)] hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FF5500]/10 flex items-center justify-center text-[#FF5500] group-hover:scale-110 transition-transform">
                    <card.icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-white tracking-wider uppercase font-mono">
                    {card.title}
                  </h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Quote Banner with Scroll Reveal */}
      <ScrollReveal direction="up" duration={0.85} delay={0.2}>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-black/90 via-black/50 to-black/90 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md hover:border-[#FF5500]/40 transition-colors">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF5500] font-semibold">
              BILL BOWERMAN // NIKE CO-FOUNDER
            </span>
            <p className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
              “THERE IS NO FINISH LINE.”
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <Sparkles className="w-4 h-4 text-[#FF5500]" />
            <span>PORTLAND & BEAVERTON, OREGON</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
