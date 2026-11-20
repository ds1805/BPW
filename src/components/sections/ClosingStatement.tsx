"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { brand } from "@/data/brand";

function RajasthaniOrnament() {
  return (
    <svg
      viewBox="0 0 300 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-72"
    >
      <line
        x1="0"
        y1="30"
        x2="100"
        y2="30"
        stroke="rgba(196,154,82,0.4)"
        strokeWidth="0.5"
      />
      <circle cx="115" cy="30" r="5" stroke="#C49A52" strokeWidth="1" fill="none" />
      <circle cx="115" cy="30" r="2" fill="#C49A52" opacity="0.6" />
      <path
        d="M125 30 Q140 15 150 30 Q160 45 175 30"
        stroke="#C49A52"
        strokeWidth="1"
        fill="none"
      />
      <circle cx="185" cy="30" r="5" stroke="#C49A52" strokeWidth="1" fill="none" />
      <circle cx="185" cy="30" r="2" fill="#C49A52" opacity="0.6" />
      <line
        x1="200"
        y1="30"
        x2="300"
        y2="30"
        stroke="rgba(196,154,82,0.4)"
        strokeWidth="0.5"
      />
    </svg>
  );
}

export default function ClosingStatement() {
  return (
    <section
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: "#47191D" }}
    >
      {/* Background depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(100,30,36,0.5) 0%, transparent 70%)",
        }}
      />

      {/* Architectural pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(196,154,82,1) 0px,
              rgba(196,154,82,1) 1px,
              transparent 1px,
              transparent 40px
            )
          `,
        }}
      />

      {/* Corner ornaments */}
      {[
        "top-8 left-8",
        "top-8 right-8",
        "bottom-8 left-8",
        "bottom-8 right-8",
      ].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-10 h-10 opacity-30`}>
          <svg viewBox="0 0 40 40" fill="none">
            <path
              d={
                i === 0
                  ? "M2 20 L2 2 L20 2"
                  : i === 1
                  ? "M20 2 L38 2 L38 20"
                  : i === 2
                  ? "M2 20 L2 38 L20 38"
                  : "M20 38 L38 38 L38 20"
              }
              stroke="#C49A52"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>
      ))}

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Top ornament */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <RajasthaniOrnament />
        </motion.div>

        {/* Main statement */}
        <motion.h2
          className="font-serif font-semibold mb-10"
          style={{
            fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
            color: "#F7F0E4",
            lineHeight: 1.3,
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          Generations May Pass.
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
            Traditions Remain.
          </span>
          <br />
          <em style={{ color: "rgba(247,240,228,0.75)" }}>
            And Some Tastes Always Take You Home.
          </em>
        </motion.h2>

        {/* Devanagari subtitle */}
        <motion.p
          className="mb-12 text-xl"
          style={{
            fontFamily: "'Tiro Devanagari Hindi', 'Noto Serif Devanagari', serif",
            color: "rgba(196,154,82,0.85)",
            letterSpacing: "normal",
            textTransform: "none",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          मिठास की विरासत
        </motion.p>

        {/* Bottom ornament */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <RajasthaniOrnament />
        </motion.div>

        {/* Brand info */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div
            className="inline-flex items-center gap-3 mb-6"
          >
            <div
              className="rounded-full overflow-hidden border-2 border-[#C49A52] bg-white p-1 shadow-lg flex items-center justify-center flex-shrink-0"
              style={{ width: "56px", height: "56px" }}
            >
              <Image
                src="/images/bpw-logo.jpg"
                alt="Bhaiji Pede Wale Logo"
                width={48}
                height={48}
                className="rounded-full object-contain"
              />
            </div>
            <div className="text-left">
              <p className="font-serif font-semibold text-sm" style={{ color: "#F7F0E4" }}>
                {brand.name}
              </p>
              <p className="text-xs tracking-widest uppercase" style={{ color: "#C49A52" }}>
                Since {brand.since} · Churu, Rajasthan
              </p>
            </div>
          </div>

          <p
            className="text-xs mb-8"
            style={{ color: "rgba(247,240,228,0.5)" }}
          >
            {brand.address}
          </p>

          {/* CTA */}
          <Link
            href="/visit-us"
            className="inline-block px-10 py-3 text-xs tracking-widest uppercase font-medium transition-all duration-300"
            style={{
              border: "1px solid rgba(196,154,82,0.6)",
              color: "#C49A52",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(196,154,82,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            Visit Us in Churu
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
