"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { brand } from "@/data/brand";

function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <span
        className="text-xs tracking-widest uppercase"
        style={{ color: "rgba(196,154,82,0.7)" }}
      >
        Scroll
      </span>
      <div
        className="w-[1px] h-12 relative overflow-hidden"
        style={{ background: "rgba(196,154,82,0.3)" }}
      >
        <motion.div
          className="absolute top-0 left-0 right-0"
          style={{ height: "100%", background: "#C49A52" }}
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0">
      {/* Deep gradient background (placeholder until real photo is added) */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 50%, rgba(100, 30, 36, 0.95) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 30%, rgba(166, 95, 66, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, #29231F 0%, #47191D 40%, #641E24 70%, #29231F 100%)
          `,
        }}
      />

      {/* Architectural pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 60px,
              rgba(196,154,82,0.1) 60px,
              rgba(196,154,82,0.1) 61px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 60px,
              rgba(196,154,82,0.05) 60px,
              rgba(196,154,82,0.05) 61px
            )
          `,
        }}
      />

      {/* Jharokha silhouette - left */}
      <div
        className="absolute left-0 bottom-0 w-64 h-80 opacity-20"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, rgba(196,154,82,0.4) 0%, transparent 60%)
          `,
          borderRight: "1px solid rgba(196,154,82,0.3)",
        }}
      />

      {/* Jharokha silhouette - right */}
      <div
        className="absolute right-0 bottom-0 w-64 h-80 opacity-20"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, rgba(196,154,82,0.4) 0%, transparent 60%)
          `,
          borderLeft: "1px solid rgba(196,154,82,0.3)",
        }}
      />

      {/* Top vignette */}
      <div
        className="absolute top-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, rgba(41,35,31,0.5), transparent)",
        }}
      />

      {/* Bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background:
            "linear-gradient(to top, rgba(41,35,31,0.8), transparent)",
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

function OrnamentalTop() {
  return (
    <svg
      viewBox="0 0 400 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-xs"
    >
      <line
        x1="0"
        y1="30"
        x2="155"
        y2="30"
        stroke="rgba(196,154,82,0.5)"
        strokeWidth="0.5"
      />
      <path
        d="M165 30 Q185 10 200 30 Q215 50 235 30"
        stroke="#C49A52"
        strokeWidth="1"
        fill="none"
      />
      <circle cx="200" cy="30" r="3" fill="#C49A52" opacity="0.8" />
      <line
        x1="245"
        y1="30"
        x2="400"
        y2="30"
        stroke="rgba(196,154,82,0.5)"
        strokeWidth="0.5"
      />
    </svg>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#29231F",
        paddingTop: "110px",
        paddingBottom: "60px",
      }}
    >
      {/* Background with parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <HeroBackground />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4 sm:px-8 max-w-5xl mx-auto w-full"
        style={{ opacity }}
      >
        {/* Pre-heading ornament and brand emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-4 flex flex-col items-center"
        >
          <div
            className="rounded-full overflow-hidden border-2 border-[#C49A52] bg-white p-1 shadow-2xl mb-3 flex items-center justify-center flex-shrink-0"
            style={{ width: "84px", height: "84px" }}
          >
            <Image
              src="/images/bpw-logo.jpg"
              alt="Bhaiji Pede Wale Churu Logo"
              width={76}
              height={76}
              className="rounded-full object-contain"
              priority
            />
          </div>
          <OrnamentalTop />
        </motion.div>

        {/* Devanagari & Heritage subtitle */}
        <motion.div
          className="flex items-center justify-center flex-wrap gap-2 mb-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <span
            style={{
              fontFamily: "'Tiro Devanagari Hindi', 'Noto Serif Devanagari', serif",
              fontSize: "1.15rem",
              letterSpacing: "normal",
              textTransform: "none",
              color: "#C49A52",
              lineHeight: 1,
            }}
          >
            भाई जी पेड़े वाले
          </span>
          <span
            className="text-xs uppercase tracking-widest font-medium"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(196, 154, 82, 0.85)",
            }}
          >
            · Since {brand.since} · Churu, Rajasthan
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="font-serif font-bold leading-tight mb-6"
          style={{
            fontSize: "clamp(2.2rem, 6vw, 5rem)",
            color: "#F7F0E4",
            textShadow: "0 4px 30px rgba(0,0,0,0.5)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          Some Traditions Are
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #C49A52 0%, #f5d78e 40%, #C49A52 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Meant to Be Passed On.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base md:text-lg leading-relaxed max-w-xl mb-10"
          style={{ color: "rgba(247,240,228,0.75)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          From the heart of Churu, a timeless taste shaped by generations of
          dedication.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <Link
            href="/our-story"
            className="group relative px-8 py-3 font-medium text-sm tracking-wide overflow-hidden transition-all duration-300"
            style={{
              background: "#C49A52",
              color: "#29231F",
              border: "1px solid #C49A52",
            }}
          >
            <span className="relative z-10 tracking-widest uppercase text-xs">
              Discover Our Legacy
            </span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "#d4b472" }}
            />
          </Link>

          <Link
            href="/our-pede"
            className="group px-8 py-3 font-medium text-sm tracking-wide transition-all duration-300"
            style={{
              background: "transparent",
              color: "#F7F0E4",
              border: "1px solid rgba(247,240,228,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#C49A52";
              (e.currentTarget as HTMLElement).style.color = "#C49A52";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(247,240,228,0.4)";
              (e.currentTarget as HTMLElement).style.color = "#F7F0E4";
            }}
          >
            <span className="tracking-widest uppercase text-xs">
              Explore Our Pede
            </span>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <ScrollIndicator />
        </motion.div>
      </motion.div>

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{
          background: "linear-gradient(to top, #F7F0E4, transparent)",
        }}
      />
    </section>
  );
}
