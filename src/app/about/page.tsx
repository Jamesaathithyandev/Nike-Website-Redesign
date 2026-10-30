"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import StudioBackdrop from "@/components/StudioBackdrop";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#060504] text-white selection:bg-[#FF5500] selection:text-black">
      {/* Studio Radial & Volumetric Backdrop */}
      <StudioBackdrop />

      <Navbar />

      <main className="pt-24 relative z-20">
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
