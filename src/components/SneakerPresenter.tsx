"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { sounds } from "./SoundEffects";

export default function SneakerPresenter() {
  const presenterRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const kickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!presenterRef.current) return;

    // Play subtle entrance audio on load
    sounds.playEntranceSwoosh();

    // Start completely off-screen to the left
    gsap.set(presenterRef.current, {
      xPercent: -120,
      opacity: 0,
      rotate: -3,
    });

    if (glowRef.current) {
      gsap.set(glowRef.current, { opacity: 0, scale: 0.85 });
    }
    if (kickerRef.current) {
      gsap.set(kickerRef.current, { opacity: 0 });
    }

    // Animate smoothly from left to right onto the screen in sync with hero text
    gsap.to(presenterRef.current, {
      xPercent: 0,
      opacity: 1,
      rotate: 0,
      duration: 1.6,
      ease: "power3.out",
      onComplete: () => {
        sounds.playSettleClick();
      },
    });

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0.95,
        scale: 1,
        duration: 2.2,
        ease: "power2.out",
      });
    }

    if (kickerRef.current) {
      gsap.to(kickerRef.current, {
        opacity: 0.75,
        duration: 2.5,
        ease: "power2.out",
      });
    }

    // Static presentation once in place - no hover sway, no scroll transform
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 flex items-center justify-start overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 
        Presenter arm container:
        Anchors cleanly from outside the left screen edge.
        Occupies the left/center-left area of the viewport, 
        leaving the right side completely clear for the informational text.
      */}
      <div
        ref={presenterRef}
        className="relative -left-8 sm:-left-12 md:-left-16 lg:-left-20 xl:-left-24 will-change-transform flex items-center top-4 sm:top-2 lg:top-0"
      >
        <div className="relative w-[92vw] sm:w-[86vw] md:w-[78vw] lg:w-[62vw] xl:w-[58vw] 2xl:w-[54vw] max-w-[620px] sm:max-w-[780px] md:max-w-[950px] lg:max-w-[1100px] xl:max-w-[1240px] aspect-[1024/571] drop-shadow-[0_30px_70px_rgba(0,0,0,0.98)]">
          
          {/* Volumetric warm diffuse studio halo behind the sneakers */}
          <div
            ref={glowRef}
            className="absolute -inset-6 bg-radial from-[#FF5500]/30 via-[#c0400a]/15 to-transparent blur-3xl opacity-90 scale-95 pointer-events-none"
          />

          {/* Lower arm crimson kicker rim light matching original studio photograph */}
          <div
            ref={kickerRef}
            className="absolute bottom-2 left-4 right-1/4 h-24 bg-gradient-to-t from-[#ff3700]/30 via-[#ff3700]/10 to-transparent blur-2xl pointer-events-none"
          />

          {/* High resolution transparent RGBA sneaker presentation image */}
          <img
            src="/sneakers_hand_presented.png"
            alt="Hand extending from outside screen presenting Nike Air Jordan 1 Retro sneakers"
            className="w-full h-full object-contain filter contrast-[1.04] brightness-[1.02] relative z-10"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
