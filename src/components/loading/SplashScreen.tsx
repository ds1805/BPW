"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Rajasthani arch SVG ornament
function RajasthaniArch() {
  return (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-32 h-auto"
    >
      {/* Arch structure */}
      <path
        d="M20 160 L20 80 Q20 20 100 20 Q180 20 180 80 L180 160"
        stroke="#C49A52"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      {/* Inner arch */}
      <path
        d="M35 160 L35 85 Q35 38 100 38 Q165 38 165 85 L165 160"
        stroke="#C49A52"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      {/* Top ornament */}
      <circle cx="100" cy="22" r="6" stroke="#C49A52" strokeWidth="1.5" fill="none" opacity="0.8" />
      <circle cx="100" cy="22" r="3" fill="#C49A52" opacity="0.6" />
      {/* Jharokha details */}
      <line x1="20" y1="100" x2="35" y2="100" stroke="#C49A52" strokeWidth="1" opacity="0.4" />
      <line x1="165" y1="100" x2="180" y2="100" stroke="#C49A52" strokeWidth="1" opacity="0.4" />
      {/* Bottom ornamental feet */}
      <path d="M15 160 Q20 150 25 160" stroke="#C49A52" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M175 160 Q180 150 185 160" stroke="#C49A52" strokeWidth="1.5" fill="none" opacity="0.6" />
      {/* Decorative dots */}
      <circle cx="60" cy="50" r="1.5" fill="#C49A52" opacity="0.5" />
      <circle cx="140" cy="50" r="1.5" fill="#C49A52" opacity="0.5" />
      <circle cx="45" cy="70" r="1.5" fill="#C49A52" opacity="0.4" />
      <circle cx="155" cy="70" r="1.5" fill="#C49A52" opacity="0.4" />
    </svg>
  );
}

function OrnamentalSeparator() {
  return (
    <div className="flex items-center gap-4 my-4">
      <div className="flex-1 h-px" style={{ background: "rgba(196,154,82,0.4)" }} />
      <div className="flex items-center gap-2">
        <span style={{ color: "#C49A52", fontSize: "0.5rem" }}>✦</span>
        <span style={{ color: "#C49A52", fontSize: "0.4rem" }}>◆</span>
        <span style={{ color: "#C49A52", fontSize: "0.5rem" }}>✦</span>
      </div>
      <div className="flex-1 h-px" style={{ background: "rgba(196,154,82,0.4)" }} />
    </div>
  );
}

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"arch" | "text" | "tagline" | "exit">("arch");

  useEffect(() => {
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const timers = [
      setTimeout(() => setPhase("text"), 600),
      setTimeout(() => setPhase("tagline"), 1300),
      setTimeout(() => setPhase("exit"), 2800),
      setTimeout(() => onComplete(), 3600),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#47191D" }}
          exit={{
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 40%, rgba(41,35,31,0.5) 100%)",
            }}
          />

          {/* Corner ornaments */}
          {["top-6 left-6", "top-6 right-6", "bottom-6 left-6", "bottom-6 right-6"].map(
            (pos, i) => (
              <motion.div
                key={i}
                className={`absolute ${pos} w-8 h-8`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <svg viewBox="0 0 32 32" fill="none">
                  <path
                    d={
                      i === 0
                        ? "M2 16 L2 2 L16 2"
                        : i === 1
                        ? "M16 2 L30 2 L30 16"
                        : i === 2
                        ? "M2 16 L2 30 L16 30"
                        : "M16 30 L30 30 L30 16"
                    }
                    stroke="#C49A52"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </motion.div>
            )
          )}

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center text-center px-8">
            {/* Logo Emblem inside Arch */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-center"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-gold/80 bg-white/95 p-1 shadow-2xl mb-2">
                <Image
                  src="/images/bpw-logo.jpg"
                  alt="Bhaiji Pede Wale"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
              <RajasthaniArch />
            </motion.div>

            {/* BPW Monogram / Name */}
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={
                phase === "arch"
                  ? { opacity: 0, y: 20 }
                  : { opacity: 1, y: 0 }
              }
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1
                className="font-serif font-bold tracking-[0.15em] uppercase"
                style={{
                  fontSize: "clamp(2rem, 6vw, 3.5rem)",
                  background:
                    "linear-gradient(135deg, #C49A52 0%, #f5d78e 40%, #C49A52 70%, #d4a44a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Bhaiji Pede Wale
              </h1>

              <OrnamentalSeparator />

              <p
                className="text-xs tracking-[0.4em] uppercase font-medium"
                style={{ color: "rgba(196,154,82,0.7)" }}
              >
                Since 1948 &nbsp;·&nbsp; Churu, Rajasthan
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={
                phase === "tagline"
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
              transition={{ duration: 0.8 }}
            >
              <p
                className="font-serif italic"
                style={{
                  fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                  color: "rgba(247,240,228,0.75)",
                  letterSpacing: "0.05em",
                }}
              >
                A Legacy of Sweetness
              </p>
            </motion.div>
          </div>

          {/* Bottom gold line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, transparent, #C49A52, transparent)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
