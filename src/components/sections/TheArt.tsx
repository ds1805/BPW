"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const craftSteps = [
  {
    number: "01",
    title: "The Purest Ingredients",
    description:
      "Everything begins with pure, rich whole milk, simmered fresh daily in heavy traditional iron kadhais. No chemical essences, preservatives, or artificial thickeners — only pristine dairy, unrefined sugar, freshly crushed green cardamom, and Kashmir saffron.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Slow Roasting & The Mawa",
    description:
      "Hours of patient, rhythmic stirring over a steady low flame reduce the milk into dense, golden mawa (khoya). This painstaking craft requires a master's eye — knowing by aroma and texture the precise moment the caramelization achieves its rich, nutty character.",
    icon: "◆",
  },
  {
    number: "03",
    title: "The Artisan's Hand",
    description:
      "Handcrafted while still warm, each portion is rolled and pressed between experienced palms. The subtle central dimple and delicate dusting of aromatic spices are the authentic hallmarks of Shekhawati confectionery that cannot be replicated by machinery.",
    icon: "✦",
  },
  {
    number: "04",
    title: "The Golden Perfection",
    description:
      "Dense yet soft, gently grainy yet melting upon the palate. The balance of caramelized sweetness and earthy milk undertones creates the signature texture that has made Bhaiji Pede Wale a household name for generations.",
    icon: "◆",
  },
  {
    number: "05",
    title: "The Taste That Travels",
    description:
      "With every bite comes the warmth of Churu's royal heritage and desert hospitality. It is this unforgettable comfort that inspires travellers from across India to carry Bhaiji's Pede home to their loved ones.",
    icon: "✦",
  },
];

function CraftStep({
  step,
  index,
}: {
  step: (typeof craftSteps)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="flex gap-6 md:gap-10 items-start"
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      {/* Step number */}
      <div className="flex-shrink-0">
        <div
          className="w-16 h-16 flex items-center justify-center rounded-full border shadow-inner"
          style={{
            borderColor: "rgba(196,154,82,0.5)",
            background: "rgba(100,30,36,0.6)",
          }}
        >
          <span
            className="font-serif font-bold text-lg"
            style={{ color: "#C49A52" }}
          >
            {step.number}
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        className="flex-1 pb-10 border-b"
        style={{ borderColor: "rgba(196,154,82,0.2)" }}
      >
        <h3
          className="font-serif text-xl md:text-2xl mb-3 flex items-center gap-3"
          style={{ color: "#F7F0E4" }}
        >
          <span>{step.title}</span>
          <span className="text-xs opacity-50" style={{ color: "#C49A52" }}>
            {step.icon}
          </span>
        </h3>
        <p
          className="text-sm md:text-base leading-relaxed font-sans"
          style={{ color: "rgba(247,240,228,0.85)" }}
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function TheArt() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section
      id="the-craft"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: "#47191D" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(196,154,82,1) 0px,
              rgba(196,154,82,1) 1px,
              transparent 1px,
              transparent 60px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(196,154,82,1) 0px,
              rgba(196,154,82,1) 1px,
              transparent 1px,
              transparent 60px
            )
          `,
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span
            className="text-xs tracking-widest uppercase font-medium mb-4 block"
            style={{ color: "#C49A52" }}
          >
            The Craft
          </span>
          <h2
            className="font-serif font-semibold mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#F7F0E4",
              lineHeight: 1.2,
            }}
          >
            The Art of Making
            <br />
            <em style={{ color: "#C49A52" }}>Pede</em>
          </h2>
          <div className="flex items-center gap-6 justify-center my-8">
            <div
              className="flex-1 max-w-24 h-px"
              style={{ background: "linear-gradient(to right, transparent, rgba(196,154,82,0.5))" }}
            />
            <div className="flex items-center gap-2">
              <span style={{ color: "#C49A52", fontSize: "0.5rem" }}>✦</span>
              <span style={{ color: "#C49A52", fontSize: "0.4rem" }}>◆</span>
              <span style={{ color: "#C49A52", fontSize: "0.5rem" }}>✦</span>
            </div>
            <div
              className="flex-1 max-w-24 h-px"
              style={{ background: "linear-gradient(to left, transparent, rgba(196,154,82,0.5))" }}
            />
          </div>
          <p
            className="text-base leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(247,240,228,0.65)" }}
          >
            Every Pede at Bhaiji Pede Wale is the result of a process refined
            over decades — a process that has remained unchanged because some
            things are not meant to be modernised. Only perfected.
          </p>
        </motion.div>

        {/* Visual + steps layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: photo placeholder */}
          <motion.div
            className="sticky top-24"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="relative aspect-square overflow-hidden rounded-sm shadow-2xl"
              style={{
                border: "1px solid rgba(196,154,82,0.4)",
              }}
            >
              <Image
                src="/images/the-craft-pede.jpg"
                alt="Traditional Pede Making Craft - Bhaiji Pede Wale Churu"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-4 border opacity-30 pointer-events-none"
                style={{ borderColor: "#C49A52" }}
              />
              <div
                className="absolute bottom-0 inset-x-0 p-4 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(71,25,29,0.85) 0%, transparent 100%)",
                }}
              >
                <p className="text-[11px] tracking-widest uppercase font-serif" style={{ color: "#D8B98C" }}>
                  The Living Heritage &bull; Handcrafted Daily
                </p>
              </div>
            </div>

            {/* Quote block below image */}
            <div
              className="mt-6 p-5 relative rounded-sm"
              style={{
                background: "rgba(100,30,36,0.5)",
                borderLeft: "2px solid #C49A52",
              }}
            >
              <p
                className="font-serif italic text-sm leading-relaxed"
                style={{ color: "rgba(247,240,228,0.9)" }}
              >
                &ldquo;What we make cannot be rushed. It never was, and it
                never will be. The craft demands patience. And the people who
                love it deserve nothing less.&rdquo;
              </p>
              <p
                className="text-xs mt-3 tracking-wider font-serif"
                style={{ color: "#D8B98C" }}
              >
                — Tradition & Craftsmanship &bull; Bhaiji Pede Wale, Churu
              </p>
            </div>
          </motion.div>

          {/* Right: steps */}
          <div className="flex flex-col gap-0">
            {craftSteps.map((step, index) => (
              <CraftStep key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
