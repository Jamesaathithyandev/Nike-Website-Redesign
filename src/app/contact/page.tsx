"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import StudioBackdrop from "@/components/StudioBackdrop";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#060504] text-white selection:bg-[#FF5500] selection:text-black">
      {/* Studio Radial & Volumetric Backdrop */}
      <StudioBackdrop />

      <Navbar />

      <main className="pt-24 relative z-20">
        <ContactSection />
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}
