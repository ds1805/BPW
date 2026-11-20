"use client";

import { useRef } from "react";
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
                  className="font-serif text-xs uppercase tracking-widest mb-3"
                  style={{ color: "#C49A52" }}
                >
                  Address
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#29231F" }}
                >
                  {brand.address}
                  <br />
                  {brand.city}, {brand.state}
                  <br />
                  {brand.country}
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
                  className="font-serif text-xs uppercase tracking-widest mb-3"
                  style={{ color: "#C49A52" }}
                >
                  Hours
                </h3>
                <div
                  className="space-y-2 text-sm"
                  style={{ color: "#29231F", opacity: 0.8 }}
                >
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span>{brand.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday – Sunday</span>
                    <span>{brand.hours.weekends}</span>
                  </div>
                  <div
                    className="flex justify-between pt-2 text-xs"
                    style={{ opacity: 0.6 }}
                  >
                    <span>Festival Hours</span>
                    <span>{brand.hours.holidays}</span>
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

              {/* Contact */}
              {brand.phone !== "[PHONE NUMBER – TO BE UPDATED]" && (
                <div>
                  <h3
                    className="font-serif text-xs uppercase tracking-widest mb-3"
                    style={{ color: "#C49A52" }}
                  >
                    Contact
                  </h3>
                  <a
                    href={`tel:${brand.phone}`}
                    className="text-base transition-colors"
                    style={{ color: "#29231F" }}
                  >
                    {brand.phone}
                  </a>
                </div>
              )}

              {/* Shop photo placeholder */}
              <div
                className="relative aspect-video overflow-hidden"
                style={{
                  background: "rgba(71,25,29,0.08)",
                  border: "1px solid rgba(196,154,82,0.2)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-xs text-center px-4"
                    style={{ color: "rgba(196,154,82,0.5)" }}
                  >
                    [SHOP EXTERIOR / INTERIOR PHOTOGRAPH]
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div>
                <a
                  href={brand.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 text-xs tracking-widest uppercase font-medium transition-colors duration-300"
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
                  Find Us in Churu
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
