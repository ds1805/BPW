"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import Legacy from "@/components/sections/Legacy";
import TheArt from "@/components/sections/TheArt";
import TasteThatTravels from "@/components/sections/TasteThatTravels";
import SignaturePede from "@/components/sections/SignaturePede";
import Memories from "@/components/sections/Memories";
import VisitUs from "@/components/sections/VisitUs";
import ClosingStatement from "@/components/sections/ClosingStatement";

// Splash screen loaded client-side only
const SplashScreen = dynamic(
  () => import("@/components/loading/SplashScreen"),
  { ssr: false }
);

const SPLASH_SESSION_KEY = "bpw_splash_shown";

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(false);
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    // Only show splash on first visit per session
    const hasShown = sessionStorage.getItem(SPLASH_SESSION_KEY);
    if (!hasShown) {
      setShowSplash(true);
    } else {
      setSplashDone(true);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem(SPLASH_SESSION_KEY, "true");
    setShowSplash(false);
    setSplashDone(true);
  };

  return (
    <>
      {/* Splash screen – shown once per session */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {/* Main page content */}
      <div
        className="transition-opacity duration-500"
        style={{ opacity: splashDone ? 1 : 0 }}
      >
        {/* Section A: Hero */}
        <Hero />

        {/* Section B: Legacy + Timeline */}
        <Legacy />

        {/* Section C: The Art of Making Pede */}
        <TheArt />

        {/* Section D: Taste That Travels (India Map) */}
        <TasteThatTravels />

        {/* Section E: Signature Pede */}
        <SignaturePede />

        {/* Section F: Memories & Testimonials */}
        <Memories />

        {/* Section G: Visit Our Shop */}
        <VisitUs />

        {/* Section H: Closing Brand Statement */}
        <ClosingStatement />
      </div>
    </>
  );
}
