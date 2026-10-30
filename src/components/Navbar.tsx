"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { sounds } from "./SoundEffects";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "HERITAGE", href: "/#heritage" },
    { label: "INNOVATION", href: "/#innovation" },
    { label: "SHOP", href: "/shop" },
    { label: "ABOUT US", href: "#about" },
    { label: "CONTACT US", href: "#contact" },
  ];

  const handleLinkClick = (href: string) => {
    sounds.playClick();
    setMobileMenuOpen(false);

    if (href.startsWith("#")) {
      const element = document.getElementById(href.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        // If element not on current page, navigate to home with hash
        window.location.href = `/${href}`;
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-black/85 border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Nike Swoosh Logo */}
        <div className="flex items-center space-x-6">
          <Link
            href="/"
            onClick={() => sounds.playClick()}
            className="flex items-center gap-3 group"
          >
            <svg
              className="w-16 h-8 text-white group-hover:text-[#FF5500] transition-colors duration-200"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21.707 5.293c-2.484 2.05-6.578 4.793-10.707 7.707-3.09 2.181-5.836 4.316-7.707 5.707-.468.349-1.293.442-1.293-.707 0-.792.812-1.895 1.558-2.732 3.125-3.504 8.149-8.268 18.149-9.975z" />
            </svg>
            <div className="h-5 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-neutral-400 hidden sm:inline-block group-hover:text-white transition-colors">
              HERITAGE <span className="text-[#FF5500]">ARCHIVE</span>
            </span>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => {
            const isCurrentPage =
              (link.href === "/" && pathname === "/") ||
              (link.href === "/shop" && pathname === "/shop");

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  } else {
                    sounds.playClick();
                  }
                }}
                className={`text-xs font-semibold tracking-wider transition-all duration-200 relative py-1.5 ${
                  isCurrentPage
                    ? "text-[#FF5500]"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.label}
                {isCurrentPage && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF5500]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Archival Catalog Pill Button */}
        <div className="flex items-center space-x-4">
          <Link
            href="/shop"
            onClick={() => sounds.playClick()}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 hover:border-[#FF5500] hover:text-[#FF5500] hover:shadow-[0_0_15px_rgba(255,85,0,0.3)] text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>CATALOG</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5500]" />
          </Link>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => {
              sounds.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 text-white hover:text-[#FF5500] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith("#")) {
                  e.preventDefault();
                  handleLinkClick(link.href);
                } else {
                  sounds.playClick();
                  setMobileMenuOpen(false);
                }
              }}
              className="block text-sm font-semibold tracking-wider text-neutral-300 hover:text-[#FF5500] transition-colors py-1.5"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
