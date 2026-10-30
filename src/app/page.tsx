"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import StudioBackdrop from "@/components/StudioBackdrop";
import SneakerPresenter from "@/components/SneakerPresenter";
import HeroOverlay from "@/components/HeroOverlay";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { sounds } from "@/components/SoundEffects";
import {
  Globe,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  Compass,
  Cpu,
  Feather,
  Wind,
} from "lucide-react";

export default function Home() {
  const [activeCircleTooltip, setActiveCircleTooltip] = useState<string | null>(null);

  // 6 Circular Nodes matching the honeycomb cluster in the reference image
  const clusterNodes = [
    {
      id: "swoosh",
      label: "SWOOSH",
      sub: "Genesis 1971",
      desc: "Carolyn Davidson's timeless symbol representing motion, speed, and the wing of the Greek goddess of victory.",
      icon: (
        <svg className="w-8 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.707 5.293c-2.484 2.05-6.578 4.793-10.707 7.707-3.09 2.181-5.836 4.316-7.707 5.707-.468.349-1.293.442-1.293-.707 0-.792.812-1.895 1.558-2.732 3.125-3.504 8.149-8.268 18.149-9.975z" />
        </svg>
      ),
      floatClass: "animate-float-slow",
    },
    {
      id: "wings",
      label: "JORDAN",
      sub: "Wings 1985",
      desc: "Peter Moore's basketball-with-wings insignia debossed into the collar flap of the original Air Jordan 1.",
      icon: <ShieldCheck className="w-6 h-6 text-[#FF5500]" />,
      floatClass: "animate-float-reverse",
    },
    {
      id: "air",
      label: "AIR-SOLE",
      sub: "Pressurized Gas",
      desc: "Aeronautics engineer Frank Rudy's encapsulated gas membranes absorbing impact with zero degradation.",
      icon: <Wind className="w-6 h-6 text-white" />,
      floatClass: "animate-float-slow",
    },
    {
      id: "flyknit",
      label: "FLYKNIT",
      sub: "Precision Yarn",
      desc: "Featherweight engineered thread weaving targeted breathability, support, and flexibility while slashing waste.",
      icon: <Feather className="w-6 h-6 text-[#FF5500]" />,
      floatClass: "animate-float-reverse",
    },
    {
      id: "react",
      label: "REACT",
      sub: "Energy Return",
      desc: "Proprietary synthetic elastomer foam tested for thousands of hours to deliver bouncy, resilient response.",
      icon: <Zap className="w-6 h-6 text-white" />,
      floatClass: "animate-float-slow",
    },
    {
      id: "ispa",
      label: "ISPA",
      sub: "Design Philosophy",
      desc: "Improvise, Scavenge, Protect, Adapt - Nike's avant-garde experimental design division pushing future forms.",
      icon: <Cpu className="w-6 h-6 text-[#FF5500]" />,
      floatClass: "animate-float-reverse",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#060504] text-white selection:bg-[#FF5500] selection:text-black">
      
      {/* Studio Radial & Volumetric Backdrop */}
      <StudioBackdrop />

      {/* Top Navigation */}
      <Navbar />

      {/* 
        HERO PRESENTATION SECTION:
        The hand enters from left to right, presenting the sneakers prominently on the left/center.
        The clean editorial informational text slides in simultaneously aligned to the RIGHT.
      */}
      <section
        id="hero-presentation-section"
        className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between"
      >
        {/* Sneaker hand presentation image anchored outside the left screen edge */}
        <SneakerPresenter />

        {/* Right-aligned Hero text, specs, and informational exploration buttons */}
        <HeroOverlay />
      </section>

      {/* 
        ========================================================================
        SECTION 2: REFERENCE METRICS CARD (media_1793364397656_eb18a34f.jpg)
        Elevated rounded dark glass card with globe badge, mission statement,
        and 3 digital counters (86+, 98%, 223m) with glowing orange underline bars!
        ========================================================================
      */}
      <section
        id="metrics-section"
        className="relative z-30 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20"
      >
        <ScrollReveal direction="up" duration={0.9} distance={45}>
          <div className="rounded-3xl border border-white/10 bg-[#0d0a08]/90 p-8 sm:p-12 lg:p-16 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-[#FF5500]/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,85,0,0.15)]">
            
            {/* Subtle warm ambient glow behind the card */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-radial from-[#FF5500]/15 via-transparent to-transparent blur-3xl pointer-events-none" />

            {/* Top Row: Globe Badge & Main Editorial Statement */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-14 border-b border-white/10">
              
              {/* Left Tag & Channel Pills (matching reference top-left) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2.5 text-xs font-mono text-neutral-400">
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FF5500]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span>Hub support athletes from all over the world</span>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono text-neutral-400 hover:text-white hover:border-[#FF5500] hover:bg-[#FF5500]/10 transition-all duration-200 cursor-pointer">
                    X
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono text-neutral-400 hover:text-white hover:border-[#FF5500] hover:bg-[#FF5500]/10 transition-all duration-200 cursor-pointer">
                    e
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono text-neutral-400 hover:text-white hover:border-[#FF5500] hover:bg-[#FF5500]/10 transition-all duration-200 cursor-pointer">
                    ✦
                  </div>
                </div>
              </div>

              {/* Right Main Editorial Statement (matching reference typography) */}
              <div className="lg:col-span-7">
                <p className="text-xl sm:text-2xl lg:text-3xl font-normal text-neutral-300 leading-snug">
                  We are an athlete-driven <span className="text-white font-bold">innovation and design laboratory</span> passionate about crafting revolutionary footwear and equipment that accelerate human performance across the globe.
                </p>
              </div>
            </div>

            {/* Bottom Row: 3 Big Numeric Metrics with Glowing Orange Underlines */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-12">
              
              {/* Metric 1: 86+ */}
              <ScrollReveal direction="up" delay={0.15} duration={0.8}>
                <div className="space-y-3 group/metric">
                  <span className="block text-5xl sm:text-6xl lg:text-7xl font-black text-white font-mono tracking-tight group-hover/metric:text-[#FF5500] transition-colors">
                    86+
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                    <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
                    <span className="uppercase tracking-wider font-semibold">Innovation Labs & Active Patents</span>
                  </div>
                  {/* Glowing orange underline bar matching reference */}
                  <div className="w-full h-[2.5px] bg-white/10 relative overflow-hidden mt-2 rounded-full">
                    <div className="absolute inset-y-0 left-0 w-3/4 bg-[#FF5500] shadow-[0_0_10px_#FF5500]" />
                  </div>
                </div>
              </ScrollReveal>

              {/* Metric 2: 98% */}
              <ScrollReveal direction="up" delay={0.3} duration={0.8}>
                <div className="space-y-3 group/metric">
                  <span className="block text-5xl sm:text-6xl lg:text-7xl font-black text-white font-mono tracking-tight group-hover/metric:text-[#FF5500] transition-colors">
                    98%
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                    <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
                    <span className="uppercase tracking-wider font-semibold">Elite Athlete Performance Approval</span>
                  </div>
                  {/* Glowing orange underline bar matching reference */}
                  <div className="w-full h-[2.5px] bg-white/10 relative overflow-hidden mt-2 rounded-full">
                    <div className="absolute inset-y-0 left-0 w-4/5 bg-[#FF5500] shadow-[0_0_10px_#FF5500]" />
                  </div>
                </div>
              </ScrollReveal>

              {/* Metric 3: 223m */}
              <ScrollReveal direction="up" delay={0.45} duration={0.8}>
                <div className="space-y-3 group/metric">
                  <span className="block text-5xl sm:text-6xl lg:text-7xl font-black text-white font-mono tracking-tight group-hover/metric:text-[#FF5500] transition-colors">
                    223m
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                    <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
                    <span className="uppercase tracking-wider font-semibold">Athletes & Runners Powered Worldwide</span>
                  </div>
                  {/* Glowing orange underline bar matching reference */}
                  <div className="w-full h-[2.5px] bg-white/10 relative overflow-hidden mt-2 rounded-full">
                    <div className="absolute inset-y-0 left-0 w-2/3 bg-[#FF5500] shadow-[0_0_10px_#FF5500]" />
                  </div>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* 
        ========================================================================
        SECTION 3: REFERENCE CIRCULAR BADGE CLUSTER (media_1793364397656_eb18a34f.jpg)
        Left: "Over 40 years / shaping global footwear"
        Right: Organic honeycomb cluster of 6 interactive circular dark discs!
        ========================================================================
      */}
      <section
        id="heritage"
        className="relative z-30 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28 border-t border-white/10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Big Bold Typography matching reference */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="right" duration={0.85}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF5500]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                CHAPTER 02 // CULTURAL LINEAGE
              </div>
            </ScrollReveal>

            {/* "Over 40 years / shaping global footwear" */}
            <ScrollReveal direction="right" duration={0.85} delay={0.15}>
              <div className="space-y-1">
                <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
                  Over <span className="text-[#FF5500] drop-shadow-[0_0_20px_rgba(255,85,0,0.35)]">40 years</span>
                </h2>
                <p className="text-2xl sm:text-3xl font-light text-neutral-300 uppercase tracking-wide">
                  shaping global culture
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" duration={0.85} delay={0.25}>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                From the original 1985 Air Jordan 1 banned by the league to modern sustainable Flyknit architectures, our circular innovation nodes cross-pollinate track aerodynamics with runway presence.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" duration={0.85} delay={0.35}>
              <div className="pt-2">
                <Link
                  href="/shop"
                  onClick={() => sounds.playClick()}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/5 border border-white/15 hover:border-[#FF5500] hover:text-[#FF5500] hover:shadow-[0_0_20px_rgba(255,85,0,0.25)] text-xs font-bold uppercase tracking-wider text-neutral-200 transition-all duration-300 group hover:scale-105 active:scale-95"
                >
                  <span>EXPLORE ALL SILHOUETTES</span>
                  <ArrowRight className="w-4 h-4 text-[#FF5500] group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Honeycomb Circular Disc Cluster matching reference */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
            <ScrollReveal direction="left" duration={0.9} delay={0.2}>
              
              {/* Ambient cluster backlight */}
              <div className="absolute inset-0 bg-radial from-[#FF5500]/15 via-transparent to-transparent blur-3xl pointer-events-none" />

              {/* Interactive Cluster arrangement */}
              <div className="relative w-full max-w-lg mx-auto py-8 flex flex-col items-center gap-4">
                
                {/* Row 1: Top Node */}
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setActiveCircleTooltip(activeCircleTooltip === "swoosh" ? null : "swoosh");
                    }}
                    className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#18110b] border border-white/15 hover:border-[#FF5500] hover:shadow-[0_0_35px_rgba(255,85,0,0.45)] transition-all duration-300 flex flex-col items-center justify-center p-3 text-center group cursor-pointer hover:scale-110 active:scale-95 ${clusterNodes[0].floatClass}`}
                  >
                    <div className="group-hover:scale-110 transition-transform">
                      {clusterNodes[0].icon}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 group-hover:text-[#FF5500] transition-colors font-bold mt-1">
                      {clusterNodes[0].label}
                    </span>
                  </button>
                </div>

                {/* Row 2: Two interconnected circles */}
                <div className="flex justify-center gap-4 sm:gap-6 -mt-2">
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setActiveCircleTooltip(activeCircleTooltip === "wings" ? null : "wings");
                    }}
                    className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#1c130d] border border-white/15 hover:border-[#FF5500] hover:shadow-[0_0_35px_rgba(255,85,0,0.45)] transition-all duration-300 flex flex-col items-center justify-center p-3 text-center group cursor-pointer hover:scale-110 active:scale-95 ${clusterNodes[1].floatClass}`}
                  >
                    <div className="group-hover:scale-110 transition-transform">
                      {clusterNodes[1].icon}
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white font-bold mt-1">
                      {clusterNodes[1].label}
                    </span>
                    <span className="text-[9px] font-mono text-neutral-400">
                      {clusterNodes[1].sub}
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      sounds.playClick();
                      setActiveCircleTooltip(activeCircleTooltip === "air" ? null : "air");
                    }}
                    className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#1c130d] border border-white/15 hover:border-[#FF5500] hover:shadow-[0_0_35px_rgba(255,85,0,0.45)] transition-all duration-300 flex flex-col items-center justify-center p-3 text-center group cursor-pointer hover:scale-110 active:scale-95 ${clusterNodes[2].floatClass}`}
                  >
                    <div className="group-hover:scale-110 transition-transform">
                      {clusterNodes[2].icon}
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white font-bold mt-1">
                      {clusterNodes[2].label}
                    </span>
                    <span className="text-[9px] font-mono text-neutral-400">
                      {clusterNodes[2].sub}
                    </span>
                  </button>
                </div>

                {/* Row 3: Three interconnected circles (bottom base) */}
                <div className="flex justify-center gap-3 sm:gap-4 -mt-2">
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setActiveCircleTooltip(activeCircleTooltip === "flyknit" ? null : "flyknit");
                    }}
                    className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#18110b] border border-white/15 hover:border-[#FF5500] hover:shadow-[0_0_35px_rgba(255,85,0,0.45)] transition-all duration-300 flex flex-col items-center justify-center p-2.5 text-center group cursor-pointer hover:scale-110 active:scale-95 ${clusterNodes[3].floatClass}`}
                  >
                    <div className="group-hover:scale-110 transition-transform">
                      {clusterNodes[3].icon}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white font-bold mt-0.5">
                      {clusterNodes[3].label}
                    </span>
                    <span className="text-[8px] font-mono text-neutral-400">
                      {clusterNodes[3].sub}
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      sounds.playClick();
                      setActiveCircleTooltip(activeCircleTooltip === "react" ? null : "react");
                    }}
                    className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#1c130d] border border-white/15 hover:border-[#FF5500] hover:shadow-[0_0_35px_rgba(255,85,0,0.45)] transition-all duration-300 flex flex-col items-center justify-center p-2.5 text-center group cursor-pointer hover:scale-110 active:scale-95 ${clusterNodes[4].floatClass}`}
                  >
                    <div className="group-hover:scale-110 transition-transform">
                      {clusterNodes[4].icon}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white font-bold mt-0.5">
                      {clusterNodes[4].label}
                    </span>
                    <span className="text-[8px] font-mono text-neutral-400">
                      {clusterNodes[4].sub}
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      sounds.playClick();
                      setActiveCircleTooltip(activeCircleTooltip === "ispa" ? null : "ispa");
                    }}
                    className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#18110b] border border-white/15 hover:border-[#FF5500] hover:shadow-[0_0_35px_rgba(255,85,0,0.45)] transition-all duration-300 flex flex-col items-center justify-center p-2.5 text-center group cursor-pointer hover:scale-110 active:scale-95 ${clusterNodes[5].floatClass}`}
                  >
                    <div className="group-hover:scale-110 transition-transform">
                      {clusterNodes[5].icon}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white font-bold mt-0.5">
                      {clusterNodes[5].label}
                    </span>
                    <span className="text-[8px] font-mono text-neutral-400">
                      {clusterNodes[5].sub}
                    </span>
                  </button>
                </div>

              </div>

              {/* Dynamic Node Detail Card */}
              <div className="w-full max-w-md mx-auto mt-4 p-4 rounded-2xl bg-black/70 border border-white/15 text-center min-h-[76px] flex items-center justify-center backdrop-blur-md shadow-lg">
                {activeCircleTooltip ? (
                  (() => {
                    const active = clusterNodes.find((n) => n.id === activeCircleTooltip);
                    if (!active) return null;
                    return (
                      <div className="space-y-1">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#FF5500] font-bold">
                          {active.label} // {active.sub}
                        </span>
                        <p className="text-xs text-neutral-300 leading-relaxed">
                          {active.desc}
                        </p>
                      </div>
                    );
                  })()
                ) : (
                  <p className="text-xs font-mono text-neutral-400">
                    ✦ Click any circular innovation node above to inspect its technological breakdown
                  </p>
                )}
              </div>

            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 4: INNOVATION & ANATOMY MATRIX (id="innovation")
        ========================================================================
      */}
      <section
        id="innovation"
        className="relative z-30 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28 border-t border-white/10"
      >
        <ScrollReveal direction="up" duration={0.85}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF5500]">
                ENGINEERING EXCELLENCE
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mt-2">
                UNCOMPROMISED <span className="text-[#FF5500]">SPECIFICATIONS</span>
              </h2>
            </div>
            <p className="text-neutral-400 text-sm max-w-md">
              Every millimeter built to the original archival standards, combining timeless basketball geometry with modern longevity.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              number: "01",
              title: "DUAL SILHOUETTE",
              desc: "Showcasing both shoes in hand to highlight seamless symmetry across panels and stitch lines.",
              icon: Compass,
            },
            {
              number: "02",
              title: "AIR-SOLE UNIT",
              desc: "Encapsulated pressurized Air pocket embedded inside the heel for responsive impact cushioning.",
              icon: Zap,
            },
            {
              number: "03",
              title: "WINGS EMBLEM",
              desc: "Debossed Air Jordan Wings crest stamped on the lateral collar ankle flap in classic styling.",
              icon: ShieldCheck,
            },
            {
              number: "04",
              title: "PIVOT TRACTION",
              desc: "Solid rubber outsole with concentric circle traction rings designed for precision grip.",
              icon: Layers,
            },
          ].map((item, idx) => (
            <ScrollReveal
              key={item.number}
              direction="up"
              duration={0.8}
              delay={idx * 0.12}
            >
              <div className="group p-8 rounded-2xl bg-black/50 border border-white/10 hover:border-[#FF5500] hover:shadow-[0_15px_30px_rgba(255,85,0,0.15)] transition-all duration-300 hover:-translate-y-2 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-black text-neutral-600 group-hover:text-[#FF5500] transition-colors font-mono">
                      {item.number}
                    </span>
                    <item.icon className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-wider text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 
        ========================================================================
        UNIVERSAL ABOUT US SECTION (#about)
        Required at bottom of all pages
        ========================================================================
      */}
      <AboutSection />

      {/* 
        ========================================================================
        UNIVERSAL CONTACT US SECTION (#contact)
        Required at bottom of all pages
        ========================================================================
      */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
