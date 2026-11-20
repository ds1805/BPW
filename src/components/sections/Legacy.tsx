"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { timeline } from "@/data/timeline";

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: (typeof timeline)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-6 md:gap-0"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Mobile: simple vertical layout */}
      <div className="flex flex-col md:hidden">
        <div className="flex gap-4">
          {/* Dot */}
          <div className="flex flex-col items-center">
            <div
              className="w-4 h-4 rounded-full border-2 flex-shrink-0 mt-1"
              style={{
                borderColor: "#C49A52",
                background: "#47191D",
                boxShadow: "0 0 0 3px rgba(196,154,82,0.15)",
              }}
            />
            {!isLast && (
              <div
                className="w-[1px] flex-1 mt-2"
                style={{ background: "rgba(196,154,82,0.3)", minHeight: "60px" }}
              />
            )}
          </div>

          <div className="pb-10">
            <span
              className="text-xs tracking-widest uppercase font-medium"
              style={{ color: "#C49A52" }}
            >
              {item.year}
            </span>
            <h3
              className="font-serif text-xl mt-1 mb-2"
              style={{ color: "#47191D" }}
            >
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#29231F", opacity: 0.75 }}>
              {item.description}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop: alternating layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-6 w-full items-start">
        {/* Left content */}
        <div className={`${isEven ? "text-right" : ""}`}>
          {isEven && (
            <div className="pb-10">
              <span
                className="text-xs tracking-widest uppercase font-medium"
                style={{ color: "#C49A52" }}
              >
                {item.year}
              </span>
              <h3
                className="font-serif text-2xl mt-1 mb-3"
                style={{ color: "#47191D" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed max-w-sm ml-auto"
                style={{ color: "#29231F", opacity: 0.75 }}
              >
                {item.description}
              </p>
            </div>
          )}
        </div>

        {/* Center: dot and line */}
        <div className="flex flex-col items-center">
          <div
            className="w-5 h-5 rounded-full border-2 flex-shrink-0 mt-1"
            style={{
              borderColor: "#C49A52",
              background: "#47191D",
              boxShadow: "0 0 0 4px rgba(196,154,82,0.15)",
            }}
          />
          {!isLast && (
            <div
              className="w-[1px] flex-1 mt-2"
              style={{ background: "rgba(196,154,82,0.3)", minHeight: "80px" }}
            />
          )}
        </div>

        {/* Right content */}
        <div>
          {!isEven && (
            <div className="pb-10">
              <span
                className="text-xs tracking-widest uppercase font-medium"
                style={{ color: "#C49A52" }}
              >
                {item.year}
              </span>
              <h3
                className="font-serif text-2xl mt-1 mb-3"
                style={{ color: "#47191D" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed max-w-sm"
                style={{ color: "#29231F", opacity: 0.75 }}
              >
                {item.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function OrnamentalDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-6 my-8">
      <div
        className="flex-1 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(196,154,82,0.5))",
        }}
      />
      <div className="flex items-center gap-2">
        <span style={{ color: "#C49A52", fontSize: "0.5rem" }}>✦</span>
        {label && (
          <span
            className="text-xs tracking-widest uppercase px-2"
            style={{ color: "#C49A52" }}
          >
            {label}
          </span>
        )}
        <span style={{ color: "#C49A52", fontSize: "0.5rem" }}>✦</span>
      </div>
      <div
        className="flex-1 h-px"
        style={{
          background: "linear-gradient(to left, transparent, rgba(196,154,82,0.5))",
        }}
      />
    </div>
  );
}

export default function Legacy() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section
      id="legacy"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
      style={{ background: "#F7F0E4" }}
    >
      {/* Top ornamental border */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(196,154,82,0.5), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto">
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
            Our Heritage
          </span>

          <h2
            className="font-serif font-semibold mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#47191D",
              lineHeight: 1.2,
            }}
          >
            More Than a Sweet.
            <br />
            <em>A Family&apos;s Legacy.</em>
          </h2>

          <OrnamentalDivider />

          <p
            className="text-base leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#29231F", opacity: 0.75 }}
          >
            In Churu, a small city in the heart of Rajasthan, a family began a
            journey that would touch the lives of people across India. Through
            every generation, every celebration, and every farewell from the
            city, Bhaiji Pede Wale has been carried in the hands of those who
            love it most — the people of Churu, and everyone who has ever been
            lucky enough to taste what they make.
          </p>
        </motion.div>

        {/* Two-column story section */}
        <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Placeholder photo area */}
            <div
              className="relative aspect-[4/5] overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #47191D, #641E24)",
                border: "1px solid rgba(196,154,82,0.3)",
              }}
            >
              {/* Decorative frame inside */}
              <div
                className="absolute inset-4 border opacity-30"
                style={{ borderColor: "#C49A52" }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span
                  className="text-xs tracking-widest uppercase text-center px-8"
                  style={{ color: "rgba(196,154,82,0.6)" }}
                >
                  [SHOP / FAMILY PHOTOGRAPH]
                  <br />
                  <span className="text-[0.65rem] mt-2 block">
                    Replace with an authentic photograph of the shop or family
                  </span>
                </span>
              </div>
              {/* Corner ornaments */}
              {[
                "top-2 left-2",
                "top-2 right-2",
                "bottom-2 left-2",
                "bottom-2 right-2",
              ].map((pos, i) => (
                <div
                  key={i}
                  className={`absolute ${pos} w-4 h-4`}
                  style={{ opacity: 0.5 }}
                >
                  <svg viewBox="0 0 16 16" fill="none">
                    <path
                      d={
                        i === 0
                          ? "M1 8 L1 1 L8 1"
                          : i === 1
                          ? "M8 1 L15 1 L15 8"
                          : i === 2
                          ? "M1 8 L1 15 L8 15"
                          : "M8 15 L15 15 L15 8"
                      }
                      stroke="#C49A52"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span
              className="text-xs tracking-widest uppercase font-medium block mb-4"
              style={{ color: "#C49A52" }}
            >
              The Beginning
            </span>
            <h3
              className="font-serif text-2xl md:text-3xl mb-5"
              style={{ color: "#47191D" }}
            >
              A Dream, a Recipe, and a City That Embraced It.
            </h3>
            <div
              className="space-y-4 text-sm leading-relaxed"
              style={{ color: "#29231F", opacity: 0.8 }}
            >
              <p>
                It began in {new Date().getFullYear() - 70}s Churu — a city
                known for its scorching summers, ornate havelis, and the warmth
                of its people. [FOUNDER&apos;S NAME] started making Pede in a
                small shop with nothing more than craft, dedication, and an
                unshakeable belief in doing things the right way.
              </p>
              <p>
                Word spread. Neighbours became regulars. Regulars became
                ambassadors. And slowly, the name{" "}
                <em>Bhaiji Pede Wale</em> became inseparable from the idea of
                quality in Churu&apos;s sweet shops.
              </p>
              <p>
                [ADD FAMILY&apos;S FOUNDING STORY HERE — replace this
                placeholder with the actual narrative as shared by the family]
              </p>
            </div>

            <div className="mt-8 p-4 relative" style={{ borderLeft: "2px solid #C49A52" }}>
              <p
                className="font-serif italic text-base"
                style={{ color: "#641E24" }}
              >
                &ldquo;Some things should never change. The way we make our
                Pede is one of them.&rdquo;
              </p>
              <p
                className="text-xs mt-2 tracking-wide"
                style={{ color: "#C49A52" }}
              >
                — [FAMILY MEMBER&apos;S NAME] · [GENERATION]
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div>
          <div className="text-center mb-16">
            <span
              className="text-xs tracking-widest uppercase font-medium"
              style={{ color: "#C49A52" }}
            >
              A Journey Through Time
            </span>
            <h3
              className="font-serif text-3xl mt-3"
              style={{ color: "#47191D" }}
            >
              Milestones of a Living Legacy
            </h3>
            <OrnamentalDivider />
          </div>

          <div>
            {timeline.map((item, index) => (
              <TimelineItem
                key={item.year}
                item={item}
                index={index}
                isLast={index === timeline.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
