"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { galleryImages } from "@/data/gallery";
import { testimonials } from "@/data/testimonials";

const categories = [
  { id: "all", label: "All Memories" },
  { id: "shop", label: "The Shop" },
  { id: "family", label: "Family" },
  { id: "product", label: "The Craft" },
  { id: "festival", label: "Festivals" },
  { id: "heritage", label: "Heritage" },
];

function GalleryItem({ image, index }: { image: (typeof galleryImages)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className="relative overflow-hidden cursor-pointer group"
        style={{
          border: "1px solid rgba(196,154,82,0.2)",
          gridRow: index % 5 === 0 ? "span 2" : "span 1",
        }}
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08, duration: 0.5 }}
      >
        {/* Photo placeholder */}
        <div
          className="w-full h-full min-h-[200px] flex flex-col items-center justify-center"
          style={{
            background:
              index % 3 === 0
                ? "rgba(71,25,29,0.12)"
                : index % 3 === 1
                ? "rgba(100,30,36,0.08)"
                : "rgba(196,154,82,0.08)",
          }}
        >
          <span
            className="text-xs text-center px-4"
            style={{ color: "rgba(196,154,82,0.5)" }}
          >
            {image.alt}
          </span>
        </div>

        {/* Caption overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
          style={{ background: "linear-gradient(to top, rgba(71,25,29,0.9), transparent)" }}
        >
          <p
            className="p-4 text-xs leading-relaxed"
            style={{ color: "#F7F0E4" }}
          >
            {image.caption}
          </p>
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "rgba(41,35,31,0.95)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="max-w-2xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="aspect-[4/3] flex items-center justify-center"
                style={{
                  background: "rgba(100,30,36,0.3)",
                  border: "1px solid rgba(196,154,82,0.4)",
                }}
              >
                <span
                  className="text-xs"
                  style={{ color: "rgba(196,154,82,0.6)" }}
                >
                  {image.alt}
                </span>
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <p className="text-sm" style={{ color: "#F7F0E4" }}>
                    {image.caption}
                  </p>
                  {image.year && (
                    <p className="text-xs mt-1" style={{ color: "#C49A52" }}>
                      {image.year}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "#C49A52" }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Memories() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section
      id="gallery"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
      style={{ background: "#29231F" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span
            className="text-xs tracking-widest uppercase font-medium mb-4 block"
            style={{ color: "#C49A52" }}
          >
            Memories
          </span>
          <h2
            className="font-serif font-semibold mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#F7F0E4",
              lineHeight: 1.2,
            }}
          >
            A Gallery of Moments
          </h2>
          <div className="flex items-center gap-6 justify-center my-8">
            <div
              className="flex-1 max-w-24 h-px"
              style={{
                background: "linear-gradient(to right, transparent, rgba(196,154,82,0.5))",
              }}
            />
            <span style={{ color: "#C49A52", fontSize: "0.5rem" }}>✦</span>
            <div
              className="flex-1 max-w-24 h-px"
              style={{
                background: "linear-gradient(to left, transparent, rgba(196,154,82,0.5))",
              }}
            />
          </div>
          <p
            className="text-base leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(247,240,228,0.65)" }}
          >
            Every photograph tells a part of our story. The shop, the family,
            the craft, the celebrations — moments that have made Bhaiji Pede
            Wale what it is today.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="px-4 py-2 text-xs tracking-widest uppercase transition-all duration-200"
              style={{
                background:
                  activeCategory === cat.id
                    ? "#C49A52"
                    : "transparent",
                color:
                  activeCategory === cat.id
                    ? "#29231F"
                    : "rgba(247,240,228,0.6)",
                border: "1px solid",
                borderColor:
                  activeCategory === cat.id
                    ? "#C49A52"
                    : "rgba(196,154,82,0.3)",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3">
          {filtered.map((image, index) => (
            <GalleryItem key={image.id} image={image} index={index} />
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3
              className="font-serif text-2xl md:text-3xl"
              style={{ color: "#F7F0E4" }}
            >
              What People Say
            </h3>
            <p
              className="text-sm mt-4"
              style={{ color: "rgba(247,240,228,0.5)" }}
            >
              Real memories from people who have made Bhaiji Pede Wale part of their story.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                className="p-6 relative"
                style={{
                  background: "rgba(100,30,36,0.15)",
                  border: "1px solid rgba(196,154,82,0.2)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="text-2xl mb-4"
                  style={{ color: "#C49A52", opacity: 0.4 }}
                >
                  &ldquo;
                </div>
                <p
                  className="font-serif italic text-sm leading-relaxed mb-5"
                  style={{ color: "rgba(247,240,228,0.75)" }}
                >
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full border flex items-center justify-center"
                    style={{ borderColor: "rgba(196,154,82,0.4)" }}
                  >
                    <span style={{ color: "#C49A52", fontSize: "0.5rem" }}>◆</span>
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold tracking-wide"
                      style={{ color: "#F7F0E4" }}
                    >
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: "rgba(247,240,228,0.5)" }}>
                      {t.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p
            className="text-center text-xs mt-6"
            style={{ color: "rgba(247,240,228,0.3)" }}
          >
            * Testimonials above are placeholder content. Replace with verified
            customer quotes only.
          </p>
        </div>
      </div>
    </section>
  );
}
