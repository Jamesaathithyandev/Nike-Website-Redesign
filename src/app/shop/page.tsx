"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import StudioBackdrop from "@/components/StudioBackdrop";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { sounds } from "@/components/SoundEffects";
import {
  Search,
  X,
  ArrowRight,
} from "lucide-react";

interface Sneaker {
  id: string;
  name: string;
  category: "AIR JORDAN" | "AIR MAX" | "COURT CLASSICS";
  releaseYear: string;
  designer: string;
  colorway: string;
  image: string;
  tag: string;
  summary: string;
  specs: {
    upper: string;
    cushioning: string;
    traction: string;
    heritageCode: string;
  };
  highlights: string[];
}

const sneakersData: Sneaker[] = [
  {
    id: "jordan1-orange",
    name: "Air Jordan 1 Retro Dual OG",
    category: "AIR JORDAN",
    releaseYear: "2024 Archival Presentation",
    designer: "Peter Moore / Nike Archival Lab",
    colorway: "Terracotta Orange / Washed Indigo Denim / Natural Tan",
    image: "/sneakers/jordan1-orange.jpg",
    tag: "FEATURED SHOWCASE",
    summary:
      "Presented in hand. A striking juxtaposition of tactile terracotta orange suede overlays and stonewashed indigo denim twill, unified by a smooth vachetta leather Swoosh.",
    specs: {
      upper: "Brushed Pigskin Suede & 12oz Washed Cotton Twill Denim",
      cushioning: "Encapsulated Air-Sole Heel Chamber in Polyurethane",
      traction: "Solid Rubber with Concentric Basketball Pivot Rings",
      heritageCode: "AJ1-ORANGE-DENIM-01",
    },
    highlights: [
      "Heavy-nap terracotta suede overlays",
      "Stonewashed woven indigo denim quarter and toe",
      "Debossed Jordan Wings emblem on collar ankle flap",
      "Dual stacked silhouette archival presentation",
    ],
  },
  {
    id: "jordan1-chicago",
    name: "Air Jordan 1 High OG 'Chicago'",
    category: "AIR JORDAN",
    releaseYear: "1985 / 2022 Reimagined",
    designer: "Peter Moore",
    colorway: "Varsity Red / Black / Sail / Muslin",
    image: "/sneakers/jordan1-chicago.jpg",
    tag: "THE CORNERSTONE",
    summary:
      "The sneaker that sparked modern sports marketing and sneakerhead culture. Banned by the NBA in 1984 for violating the uniform code, fueling the legendary 'Banned' campaign.",
    specs: {
      upper: "Cracked Full-Grain Leather & Premium Calfskin",
      cushioning: "Original 1985 Specification Encapsulated Nike Air",
      traction: "Non-marking Rubber Cupsole with Deep Flex Grooves",
      heritageCode: "AJ1-OG-CHIC-1985",
    },
    highlights: [
      "Timeless Varsity Red, White, and Black color blocking",
      "Original high-cut collar geometry",
      "Distressed vintage sail midsole finish",
      "Collector edition archival box detailing",
    ],
  },
  {
    id: "dunk-low-panda",
    name: "Nike Dunk Low Retro 'Panda'",
    category: "COURT CLASSICS",
    releaseYear: "1985 / 2021",
    designer: "Peter Moore",
    colorway: "White / Black",
    image: "/sneakers/dunk-low.jpg",
    tag: "STREET PHENOMENON",
    summary:
      "Originally created for the 1985 'Be True to Your School' collegiate basketball program, later adopted by skateboarders and transformed into a worldwide lifestyle staple.",
    specs: {
      upper: "Smooth Full-Grain Bovine Leather",
      cushioning: "Resilient EVA Foam Midsole",
      traction: "Circular Pivot Outsole for Multi-Directional Grip",
      heritageCode: "NK-DNK-PANDA-07",
    },
    highlights: [
      "Monochromatic black and white contrast blocking",
      "Padded low-cut collar for ankle mobility",
      "Perforated toe-box for thermal ventilation",
      "Ultra-durable stitched perimeter cupsole",
    ],
  },
  {
    id: "air-max-90",
    name: "Nike Air Max 90 'Infrared'",
    category: "AIR MAX",
    releaseYear: "1990",
    designer: "Tinker Hatfield",
    colorway: "White / Black / Cool Grey / Radiant Red",
    image: "/sneakers/air-max.jpg",
    tag: "VISIBLE AIR REVOLUTION",
    summary:
      "Tinker Hatfield designed the AM90 with fluid lines inspired by high-performance Italian sports cars, framed by radiant infrared accents that demanded attention on the track.",
    specs: {
      upper: "Mesh Base with Synthetic Suede Overlays & TPU Ridges",
      cushioning: "Large-Volume Visible Max Air Heel Bubble",
      traction: "Classic Rubber Waffle Tread Outsole",
      heritageCode: "NK-AM90-INFRA-90",
    },
    highlights: [
      "Architectural TPU ribbed eyelets and heel badge",
      "Open-weave breathable ballistic nylon mesh toe",
      "Max Air window framed by Radiant Red cassette",
      "Waffle lugs engineered for wet road traction",
    ],
  },
  {
    id: "air-force-1",
    name: "Nike Air Force 1 '07 'Triple White'",
    category: "COURT CLASSICS",
    releaseYear: "1982",
    designer: "Bruce Kilgore",
    colorway: "White / White / White",
    image: "/sneakers/air-force-1.jpg",
    tag: "CULTURAL MONUMENT",
    summary:
      "The first basketball shoe to incorporate Nike Air cushioning, named after the aircraft that carries the President of the United States. A cultural uniform across the globe.",
    specs: {
      upper: "Crisp Pure White Box Calf Leather",
      cushioning: "Full-Length Polyurethane Midsole with Encapsulated Air",
      traction: "Thick Solid Rubber Sole with Star-Patterned Toe Ring",
      heritageCode: "NK-AF1-TRIPLE-82",
    },
    highlights: [
      "Clean tonal triple-white aesthetic",
      "Brushed silver metallic 'AF-1' lace deubré dubrae",
      "Generously padded low collar for all-day comfort",
      "Double-stitched leather reinforcement overlays",
    ],
  },
  {
    id: "jordan4-bred",
    name: "Air Jordan 4 Retro 'Bred'",
    category: "AIR JORDAN",
    releaseYear: "1989 / 2024",
    designer: "Tinker Hatfield",
    colorway: "Black / Fire Red / Cement Grey / White",
    image: "/sneakers/jordan4-retro.jpg",
    tag: "THE SHOT (1989)",
    summary:
      "Worn by Michael Jordan when he hit 'The Shot' over Craig Ehlo in Game 5 of the 1989 NBA Playoffs. Distinguished by molded plastic mesh quarter windows and triangular support wings.",
    specs: {
      upper: "Premium Durabuck Nubuck & Molded Mesh Urethane",
      cushioning: "Visible Heel Air Unit & Forefoot Air Bag",
      traction: "Herringbone Pattern with Sculpted Grey Rubber Forefoot",
      heritageCode: "AJ4-BRED-SHOT-89",
    },
    highlights: [
      "Iconic sculpted TPU lateral support wings",
      "Molded polyurethane mesh quarter netting",
      "Original Nike Air text badge on heel tab",
      "Flight script logo woven on extended tongue patch",
    ],
  },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [inspectModalSneaker, setInspectModalSneaker] = useState<Sneaker | null>(null);

  const categories = ["ALL", "AIR JORDAN", "AIR MAX", "COURT CLASSICS"];

  const filteredSneakers = sneakersData.filter((shoe) => {
    const matchesCategory =
      selectedCategory === "ALL" || shoe.category === selectedCategory;
    const matchesSearch =
      shoe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shoe.colorway.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shoe.designer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen bg-[#060504] text-white selection:bg-[#FF5500] selection:text-black">
      
      {/* Studio Radial & Volumetric Backdrop */}
      <StudioBackdrop />

      {/* Navigation */}
      <Navbar />

      {/* Main Catalog Header */}
      <main className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-36 pb-20 select-none">
        
        {/* Editorial Title & Archival Framing with Scroll Reveal */}
        <ScrollReveal direction="up" duration={0.85}>
          <div className="space-y-4 max-w-3xl mb-12">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.92]">
              SNEAKER <span className="text-[#FF5500] drop-shadow-[0_0_25px_rgba(255,85,0,0.35)]">SHOWCASE</span>
            </h1>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
              An informational archive celebrating four decades of game-changing athletic engineering. Explore silhouettes, original patent years, materials composition, and historical context.
            </p>
          </div>
        </ScrollReveal>

        {/* Filters & Search Control Bar with Scroll Reveal */}
        <ScrollReveal direction="up" duration={0.85} delay={0.15}>
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-md mb-12 hover:border-white/20 transition-colors">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    sounds.playClick();
                    setSelectedCategory(cat);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-[#FF5500] text-black shadow-lg scale-105"
                      : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {cat === "ALL" ? `ALL SILHOUETTES (${sneakersData.length})` : cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by name, colorway..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/80 border border-white/15 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] transition-all font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>
        </ScrollReveal>

        {/* Sneaker Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSneakers.map((sneaker, idx) => (
            <ScrollReveal
              key={sneaker.id}
              direction="up"
              duration={0.85}
              delay={(idx % 3) * 0.12}
            >
              <div className="group relative rounded-3xl overflow-hidden bg-black/60 border border-white/10 hover:border-[#FF5500] transition-all duration-300 backdrop-blur-md flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(255,85,0,0.2)] h-full">
                
                {/* Card Top / Tag & Release */}
                <div className="p-6 pb-0 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-[#FF5500] font-bold">
                    {sneaker.tag}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 font-semibold">
                    {sneaker.releaseYear}
                  </span>
                </div>

                {/* Sneaker Image Container */}
                <div className="relative w-full aspect-[4/3] p-6 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-radial from-[#FF5500]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <img
                    src={sneaker.image}
                    alt={sneaker.name}
                    className="w-full h-full object-contain filter group-hover:scale-108 transition-transform duration-500 drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]"
                  />
                </div>

                {/* Card Details Body */}
                <div className="p-6 pt-0 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest block">
                      {sneaker.category} // {sneaker.designer}
                    </span>
                    <h3 className="text-xl font-black uppercase tracking-tight text-white mt-1 group-hover:text-[#FF5500] transition-colors">
                      {sneaker.name}
                    </h3>
                    <p className="text-xs text-neutral-400 line-clamp-2 mt-2 leading-relaxed">
                      {sneaker.summary}
                    </p>
                  </div>

                  {/* Specs Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {sneaker.highlights.slice(0, 2).map((item, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-white/5 text-[10px] font-mono text-neutral-300 border border-white/5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Inspect Button */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => {
                        sounds.playClick();
                        setInspectModalSneaker(sneaker);
                      }}
                      className="w-full py-3 rounded-xl bg-white/5 hover:bg-[#FF5500] text-white hover:text-black border border-white/15 hover:border-[#FF5500] text-xs font-bold font-mono uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                    >
                      <span>INSPECT SILHOUETTE & SPECS</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {filteredSneakers.length === 0 && (
          <div className="py-20 text-center space-y-3">
            <p className="text-lg font-bold text-neutral-400 font-mono">
              No archival silhouettes matched “{searchQuery}”
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("ALL");
              }}
              className="px-6 py-2 rounded-full bg-[#FF5500] text-black text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </main>

      {/* 
        INSPECTION MODAL:
        Shows full-screen archival inspection with technical specifications
      */}
      {inspectModalSneaker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl select-none animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0c0907] border border-white/15 p-6 sm:p-10 shadow-2xl space-y-8 animate-scaleUp">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF5500] font-bold">
                  {inspectModalSneaker.tag} // {inspectModalSneaker.specs.heritageCode}
                </span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
                  {inspectModalSneaker.name}
                </h2>
                <p className="text-xs font-mono text-neutral-400 mt-1">
                  Origin: {inspectModalSneaker.releaseYear} • Designed by {inspectModalSneaker.designer}
                </p>
              </div>

              <button
                onClick={() => {
                  sounds.playClick();
                  setInspectModalSneaker(null);
                }}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF5500] hover:text-black text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image + Big Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 relative aspect-[4/3] rounded-2xl bg-black/80 border border-white/10 p-6 flex items-center justify-center">
                <img
                  src={inspectModalSneaker.image}
                  alt={inspectModalSneaker.name}
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
                />
              </div>

              <div className="md:col-span-6 space-y-4">
                <h4 className="text-sm font-mono uppercase tracking-widest text-[#FF5500] font-bold">
                  COLORWAY & NARRATIVE
                </h4>
                <p className="text-sm font-semibold text-white">
                  {inspectModalSneaker.colorway}
                </p>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {inspectModalSneaker.summary}
                </p>

                <div className="pt-2 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
                    Key Features
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {inspectModalSneaker.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Specifications Matrix */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
                ARCHIVAL SPECIFICATIONS
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-[11px] font-mono uppercase text-neutral-500 block">
                    Upper Construction
                  </span>
                  <span className="text-xs font-bold text-white block mt-1">
                    {inspectModalSneaker.specs.upper}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-[11px] font-mono uppercase text-neutral-500 block">
                    Cushioning Unit
                  </span>
                  <span className="text-xs font-bold text-[#FF5500] block mt-1">
                    {inspectModalSneaker.specs.cushioning}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-[11px] font-mono uppercase text-neutral-500 block">
                    Outsole Traction
                  </span>
                  <span className="text-xs font-bold text-white block mt-1">
                    {inspectModalSneaker.specs.traction}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  sounds.playClick();
                  setInspectModalSneaker(null);
                }}
                className="px-8 py-3 rounded-full bg-[#FF5500] text-black font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
              >
                Close Inspection
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 
        UNIVERSAL ABOUT US SECTION (#about)
        Placed at bottom of all pages per user specification
      */}
      <AboutSection />

      {/* 
        UNIVERSAL CONTACT US SECTION (#contact)
        Placed at bottom of all pages per user specification
      */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
