"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { sounds } from "./SoundEffects";

export default function Footer() {
  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-30 border-t border-white/10 bg-black/90 py-16 px-6 sm:px-10 lg:px-16 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Nike Logo & Copyright */}
        <div className="flex items-center gap-4">
          <Link href="/" onClick={() => sounds.playClick()} className="group">
            <svg
              className="w-12 h-6 text-[#FF5500] group-hover:text-white transition-colors"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21.707 5.293c-2.484 2.05-6.578 4.793-10.707 7.707-3.09 2.181-5.836 4.316-7.707 5.707-.468.349-1.293.442-1.293-.707 0-.792.812-1.895 1.558-2.732 3.125-3.504 8.149-8.268 18.149-9.975z" />
            </svg>
          </Link>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
            © 2026 NIKE, INC. ALL RIGHTS RESERVED.
          </span>
        </div>

        {/* Center: Internal Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>•</span>
          <Link href="/shop" className="hover:text-white transition-colors">
            Sneaker Catalog
          </Link>
          <span>•</span>
          <a href="#about" className="hover:text-white transition-colors">
            About Us
          </a>
          <span>•</span>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact Us
          </a>
          <span>•</span>
          <span className="text-neutral-600">Beaverton, OR</span>
        </div>

        {/* Right: Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-[#FF5500] hover:text-black hover:border-[#FF5500] text-xs font-bold uppercase tracking-wider text-white transition-all duration-200"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}

