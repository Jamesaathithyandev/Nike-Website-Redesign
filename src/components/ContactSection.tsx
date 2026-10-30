"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Mail, MapPin, ArrowRight, MessageSquare } from "lucide-react";
import { sounds } from "./SoundEffects";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const [selectedCategory, setSelectedCategory] = useState("ARCHIVAL CATALOG");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const categories = [
    "ARCHIVAL CATALOG",
    "PRESS & MEDIA",
    "DESIGN COLLAB",
    "GENERAL INQUIRY",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sounds.playClick();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4500);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sounds.playClick();
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail("");
    }, 3500);
  };

  return (
    <section
      id="contact"
      className="relative z-30 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28 border-t border-white/10"
    >
      {/* Section Header with Scroll Reveal */}
      <ScrollReveal direction="up" duration={0.85}>
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF5500]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
            CHAPTER // CONTACT & INQUIRIES
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            CONNECT WITH THE
            <span className="block text-[#FF5500] drop-shadow-[0_0_25px_rgba(255,85,0,0.35)]">
              NIKE ARCHIVE DESK
            </span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Whether you are researching historic silhouette releases, seeking archival assets, or submitting athlete and design inquiries, our team in Beaverton is here to assist.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Campus Contacts & Social Channels */}
        <div className="lg:col-span-5 space-y-8">
          
          <ScrollReveal direction="right" duration={0.85} delay={0.15}>
            <div className="p-8 rounded-3xl bg-black/60 border border-white/10 backdrop-blur-md space-y-6 hover:border-[#FF5500]/50 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(255,85,0,0.1)]">
              <h3 className="text-xl font-black uppercase text-white tracking-tight flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#FF5500]" />
                <span>WORLD HEADQUARTERS</span>
              </h3>
              
              <div className="space-y-4 text-sm text-neutral-300">
                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">Campus Address</span>
                  <p className="font-semibold text-white mt-0.5">
                    One Bowerman Drive<br />
                    Beaverton, Oregon 97005, USA
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">Archival Research Desk</span>
                  <a
                    href="mailto:archive@nike.com"
                    className="font-mono text-[#FF5500] hover:underline"
                  >
                    archive@nike.com
                  </a>
                </div>

                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">Global Press & Communications</span>
                  <a
                    href="mailto:media.relations@nike.com"
                    className="font-mono text-neutral-300 hover:text-white hover:underline"
                  >
                    media.relations@nike.com
                  </a>
                </div>

                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">Operating Hours</span>
                  <p className="text-neutral-400 font-mono text-xs">
                    Monday – Friday: 08:00 – 18:00 PST (Oregon)
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Newsletter Card with Scroll Reveal */}
          <ScrollReveal direction="right" duration={0.85} delay={0.3}>
            <div className="p-8 rounded-3xl bg-black/60 border border-white/10 backdrop-blur-md space-y-4 hover:border-[#FF5500]/50 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF5500] font-semibold">
                  ARCHIVAL DISPATCH
                </span>
                <Mail className="w-4 h-4 text-neutral-400" />
              </div>

              <h4 className="text-lg font-black uppercase text-white">
                Stay Informed on Archival Releases
              </h4>

              <p className="text-xs text-neutral-400 leading-relaxed">
                Curated breakdowns of vintage models, design notes from the Beaverton vault, and exhibition announcements.
              </p>

              {newsletterSubscribed ? (
                <div className="p-4 rounded-xl bg-white/5 border border-[#FF5500]/50 text-xs text-[#FF5500] font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>SUBSCRIBED TO NIKE ARCHIVAL DISPATCH</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3 pt-1">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/15 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#FF5500] transition-colors font-mono"
                    />
                    <button
                      type="submit"
                      className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-lg bg-[#FF5500] text-black font-bold text-xs uppercase hover:bg-white transition-all flex items-center justify-center hover:scale-105 active:scale-95"
                      aria-label="Subscribe"
                    >
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>

        </div>

        {/* Right Column: Interactive Inquiry Dispatch Form */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="left" duration={0.9} delay={0.2}>
            <div className="p-8 sm:p-10 rounded-3xl bg-black/70 border border-white/10 backdrop-blur-md relative overflow-hidden hover:border-[#FF5500]/40 transition-all duration-300 hover:shadow-[0_20px_45px_rgba(255,85,0,0.12)]">
              
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#FF5500]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                    DIRECT TRANSMISSION FORM
                  </span>
                </div>
                <span className="text-xs font-mono text-neutral-500">ENCRYPTED // DESK 01</span>
              </div>

              {isSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FF5500]/10 border border-[#FF5500] flex items-center justify-center mx-auto text-[#FF5500] shadow-[0_0_30px_rgba(255,85,0,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black uppercase text-white tracking-tight">
                    TRANSMISSION RECEIVED
                  </h4>
                  <p className="text-neutral-400 text-sm max-w-md mx-auto">
                    Your inquiry has been logged into the Beaverton archival queue. A representative will contact you within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Category Selection Pills */}
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2.5">
                      Select Inquiry Classification
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <button
                          type="button"
                          key={cat}
                          onClick={() => {
                            sounds.playClick();
                            setSelectedCategory(cat);
                          }}
                          className={`px-4 py-2 rounded-lg text-xs font-bold font-mono transition-all duration-150 ${
                            selectedCategory === cat
                              ? "bg-[#FF5500] text-black shadow-md scale-105"
                              : "bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-neutral-400"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Marcus Vance"
                        className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/15 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. marcus@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/15 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] transition-all font-mono"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                      Subject / Topic *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Archival provenance inquiry for 1985 Jordan 1"
                      className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/15 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                      Message Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Provide details about your research, partnership, or archival request..."
                      className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/15 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#FF5500] text-black font-black text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(255,85,0,0.3)] hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4 stroke-[2.5]" />
                    <span>TRANSMIT INQUIRY TO BEAVERTON DESK</span>
                  </button>
                </form>
              )}

            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
