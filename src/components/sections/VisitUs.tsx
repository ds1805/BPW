"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { brand } from "@/data/brand";

export default function VisitUs() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section
      id="visit-us"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
      style={{ background: "#F7F0E4" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(196,154,82,0.5), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
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
            Find Us
          </span>
          <h2
            className="font-serif font-semibold mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#47191D",
              lineHeight: 1.2,
            }}
          >
            Some Experiences Are
            <br />
            <em>Best Collected in Person.</em>
          </h2>
          <div className="flex items-center gap-6 justify-center my-8">
            <div
              className="flex-1 max-w-24 h-px"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(196,154,82,0.5))",
              }}
            />
            <span style={{ color: "#C49A52", fontSize: "0.5rem" }}>✦</span>
            <div
              className="flex-1 max-w-24 h-px"
              style={{
                background:
                  "linear-gradient(to left, transparent, rgba(196,154,82,0.5))",
              }}
            />
          </div>
          <p
            className="text-base leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#29231F", opacity: 0.75 }}
          >
            The real Bhaiji Pede Wale experience begins in Churu — the aroma of
            freshly made Pede, the warmth of the shop, the familiarity of a
            place that has welcomed people for generations.
          </p>
        </motion.div>

        {/* Two column: Map + Info */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                border: "1px solid rgba(196,154,82,0.4)",
                height: "400px",
              }}
            >
              <iframe
                src={brand.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(30%) sepia(20%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bhaiji Pede Wale location in Churu, Rajasthan"
              />
            </div>

            <div className="mt-4">
              <a
                href={brand.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium transition-colors"
                style={{ color: "#C49A52" }}
              >
                <span>Get Directions</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>

          {/* Shop info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-8">
              {/* Address */}
              <div>
                <h3
                  className="font-serif text-xs uppercase tracking-widest mb-3 font-semibold"
                  style={{ color: "#C49A52" }}
                >
                  Shop Address
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#29231F" }}
                >
                  <span className="font-serif font-medium text-lg block text-[#47191D]">
                    Bhaiji Pede Wala
                  </span>
                  <span className="block mt-1">
                    {brand.address}
                  </span>
                  <span className="block text-sm opacity-90 font-medium">
                    {brand.city}, {brand.state} — {brand.pincode}
                  </span>
                </p>
              </div>

              {/* Divider */}
              <div
                className="h-[1px]"
                style={{
                  background:
                    "linear-gradient(to right, rgba(196,154,82,0.4), transparent)",
                }}
              />

              {/* Hours */}
              <div>
                <h3
                  className="font-serif text-xs uppercase tracking-widest mb-3 font-semibold"
                  style={{ color: "#C49A52" }}
                >
                  Business Hours
                </h3>
                <div
                  className="space-y-2.5 text-sm"
                  style={{ color: "#29231F" }}
                >
                  <div className="flex justify-between items-center py-1.5 border-b border-[rgba(196,154,82,0.2)]">
                    <span className="font-medium">Monday – Saturday</span>
                    <span className="font-semibold text-[#47191D]">8:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-[rgba(196,154,82,0.2)]">
                    <span className="font-medium text-stone-700">Sunday</span>
                    <span className="text-xs uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-stone-200 text-stone-700">
                      Closed (Off)
                    </span>
                  </div>
                  <div
                    className="flex justify-between items-center pt-1 text-xs"
                    style={{ color: "#A65F42" }}
                  >
                    <span className="font-medium">Festive Seasons</span>
                    <span className="font-semibold">8:00 AM – 9:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div
                className="h-[1px]"
                style={{
                  background:
                    "linear-gradient(to right, rgba(196,154,82,0.4), transparent)",
                }}
              />

              {/* Shop photo */}
              <div
                className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md group"
                style={{
                  border: "1px solid rgba(196,154,82,0.35)",
                }}
              >
                <Image
                  src="/images/shop-front.jpg"
                  alt="Bhaiji Pede Wala shop front at Bhaiji Chowk, Churu"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute bottom-0 inset-x-0 p-3.5 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(71,25,29,0.92) 0%, rgba(71,25,29,0.4) 60%, transparent 100%)",
                  }}
                >
                  <p className="text-xs font-serif text-[#F7F0E4] font-medium">
                    भाईजी पेड़े वाला &bull; Sabji Mandi Road
                  </p>
                  <p className="text-[10px] text-[#D8B98C] tracking-wider uppercase">
                    Ward No. 57, Bhaiji Chowk near SenMandir, Churu
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div>
                <a
                  href={brand.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 text-xs tracking-widest uppercase font-medium transition-colors duration-300 shadow-md"
                  style={{
                    background: "#47191D",
                    color: "#F7F0E4",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#641E24";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#47191D";
                  }}
                >
                  <span>Open in Google Maps</span>
                  <span>➔</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
