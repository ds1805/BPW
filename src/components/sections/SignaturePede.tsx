"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { products, productCategories } from "@/data/products";

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image area */}
      <div
        className="relative aspect-square overflow-hidden mb-5 rounded-lg border border-[#C49A52]/30 shadow-md bg-[#47191D]/10"
      >
        <Image
          src={product.imageUrl}
          alt={product.imageAlt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Featured badge */}
        {product.featured && (
          <div
            className="absolute top-3 left-3 px-2 py-1"
            style={{ background: "#C49A52" }}
          >
            <span className="text-[0.6rem] font-semibold uppercase tracking-widest" style={{ color: "#29231F" }}>
              Signature
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: "rgba(71,25,29,0.85)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`/our-pede/${product.slug}`}
                className="px-5 py-2 text-xs tracking-widest uppercase font-medium transition-colors"
                style={{
                  border: "1px solid #C49A52",
                  color: "#C49A52",
                }}
              >
                View Details
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Product info */}
      <div>
        {product.nameHindi && (
          <p
            className="text-sm mb-1 font-medium"
            style={{
              color: "#C49A52",
              fontFamily: "'Tiro Devanagari Hindi', 'Noto Serif Devanagari', serif",
              letterSpacing: "normal",
              textTransform: "none",
            }}
          >
            {product.nameHindi}
          </p>
        )}
        <h3
          className="font-serif text-lg mb-2"
          style={{ color: "#47191D" }}
        >
          {product.name}
        </h3>
        <p
          className="text-sm leading-relaxed mb-3"
          style={{ color: "#29231F", opacity: 0.7 }}
        >
          {product.shortDescription}
        </p>

        {/* Variants */}
        <div className="flex gap-2 flex-wrap">
          {product.variants.map((v) => (
            <span
              key={v.id}
              className="text-xs px-2 py-1"
              style={{
                border: "1px solid rgba(196,154,82,0.4)",
                color: "#29231F",
                opacity: 0.7,
              }}
            >
              {v.weight}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SignaturePede() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section
      id="our-pede"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
      style={{ background: "#F7F0E4" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(196,154,82,0.5), transparent)",
        }}
      />

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
            The Pede
          </span>
          <h2
            className="font-serif font-semibold mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#47191D",
              lineHeight: 1.2,
            }}
          >
            Our Signature Pede
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
            style={{ color: "#29231F", opacity: 0.75 }}
          >
            Each Pede is a small piece of our story — made the traditional way,
            as it has always been, and always will be.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setActiveCategory("all")}
            className="px-5 py-2 text-xs tracking-widest uppercase transition-all duration-200"
            style={{
              background: activeCategory === "all" ? "#47191D" : "transparent",
              color: activeCategory === "all" ? "#F7F0E4" : "#29231F",
              border: "1px solid",
              borderColor: activeCategory === "all" ? "#47191D" : "rgba(196,154,82,0.4)",
              opacity: activeCategory === "all" ? 1 : 0.7,
            }}
          >
            All
          </button>
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="px-5 py-2 text-xs tracking-widest uppercase transition-all duration-200"
              style={{
                background: activeCategory === cat.id ? "#47191D" : "transparent",
                color: activeCategory === cat.id ? "#F7F0E4" : "#29231F",
                border: "1px solid",
                borderColor:
                  activeCategory === cat.id ? "#47191D" : "rgba(196,154,82,0.4)",
                opacity: activeCategory === cat.id ? 1 : 0.7,
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-14">
          <Link
            href="/our-pede"
            className="inline-block px-10 py-3 text-xs tracking-widest uppercase font-medium transition-colors duration-300"
            style={{
              border: "1px solid #47191D",
              color: "#47191D",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#47191D";
              (e.currentTarget as HTMLElement).style.color = "#F7F0E4";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#47191D";
            }}
          >
            View Complete Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
