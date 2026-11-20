"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { travelRoutes, churuOrigin } from "@/data/testimonials";

// SVG India Map paths (simplified outline)
// The map is a simplified representation for illustrative purposes
function IndiaMapSVG({
  animatedCities,
}: {
  animatedCities: typeof travelRoutes;
}) {
  // Convert geo coordinates to SVG viewBox coordinates
  // India bounding box: ~68°E to 97°E, ~8°N to 37°N
  const geoToSVG = (lat: number, lng: number) => {
    const svgWidth = 400;
    const svgHeight = 480;
    const minLng = 68;
    const maxLng = 97.5;
    const minLat = 7;
    const maxLat = 37.5;

    const x = ((lng - minLng) / (maxLng - minLng)) * svgWidth;
    const y = svgHeight - ((lat - minLat) / (maxLat - minLat)) * svgHeight;
    return { x, y };
  };

  const churuSVG = geoToSVG(churuOrigin.lat, churuOrigin.lng);

  return (
    <svg
      viewBox="0 0 400 480"
      className="w-full max-w-sm"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* India outline – simplified polygon approximation */}
      <path
        d="M 155 20 L 175 18 L 200 22 L 230 25 L 255 30 L 275 45 L 285 60 L 290 80 L 295 100 L 300 120 L 310 140 L 320 155 L 325 175 L 320 195 L 310 210 L 305 225 L 310 240 L 305 260 L 295 275 L 285 285 L 280 300 L 270 320 L 260 335 L 250 350 L 240 365 L 230 380 L 225 400 L 220 420 L 215 445 L 210 460 L 205 465 L 198 460 L 192 450 L 185 435 L 178 415 L 170 395 L 160 380 L 148 362 L 138 345 L 125 330 L 110 318 L 100 305 L 90 290 L 82 275 L 78 258 L 75 240 L 72 222 L 70 205 L 68 190 L 66 175 L 65 160 L 68 145 L 72 132 L 78 118 L 84 102 L 92 88 L 100 75 L 110 62 L 120 50 L 132 38 L 143 28 Z"
        stroke="rgba(196,154,82,0.4)"
        strokeWidth="1.5"
        fill="rgba(100,30,36,0.08)"
      />

      {/* Animated lines from Churu to cities */}
      {animatedCities.map((city, i) => {
        const citySVG = geoToSVG(city.lat, city.lng);
        return (
          <motion.line
            key={city.city}
            x1={churuSVG.x}
            y1={churuSVG.y}
            x2={citySVG.x}
            y2={citySVG.y}
            stroke="#C49A52"
            strokeWidth="0.8"
            strokeDasharray="4 4"
            strokeOpacity="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }}
          />
        );
      })}

      {/* City dots */}
      {animatedCities.map((city, i) => {
        const citySVG = geoToSVG(city.lat, city.lng);
        return (
          <motion.g key={`dot-${city.city}`}>
            <motion.circle
              cx={citySVG.x}
              cy={citySVG.y}
              r="4"
              fill="#C49A52"
              opacity="0.6"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ delay: 1.2 + i * 0.15, duration: 0.4 }}
            />
            <motion.circle
              cx={citySVG.x}
              cy={citySVG.y}
              r="8"
              stroke="#C49A52"
              strokeWidth="0.5"
              fill="none"
              opacity="0.3"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 1], opacity: [0, 0.3, 0.3] }}
              transition={{ delay: 1.4 + i * 0.15, duration: 0.6 }}
            />
          </motion.g>
        );
      })}

      {/* Churu origin dot – larger and more prominent */}
      <motion.circle
        cx={churuSVG.x}
        cy={churuSVG.y}
        r="6"
        fill="#C49A52"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      />
      <motion.circle
        cx={churuSVG.x}
        cy={churuSVG.y}
        r="14"
        stroke="#C49A52"
        strokeWidth="1"
        fill="none"
        animate={{ r: [10, 18, 10], opacity: [0.5, 0.1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.text
        x={churuSVG.x + 10}
        y={churuSVG.y - 10}
        fontSize="9"
        fill="#C49A52"
        fontFamily="serif"
        fontWeight="600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Churu
      </motion.text>
    </svg>
  );
}

export default function TasteThatTravels() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const mapRef = useRef(null);
  const isMapInView = useInView(mapRef, { once: true, margin: "-100px" });
  const [animatedCities, setAnimatedCities] = useState<typeof travelRoutes>([]);
  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  useEffect(() => {
    if (!isMapInView) return;
    const timer = setInterval(() => {
      setAnimatedCities((prev) => {
        if (prev.length < travelRoutes.length) {
          return [...prev, travelRoutes[prev.length]];
        }
        clearInterval(timer);
        return prev;
      });
    }, 200);
    return () => clearInterval(timer);
  }, [isMapInView]);

  useEffect(() => {
    if (travelRoutes.length === 0) return;
    const timer = setInterval(() => {
      setCurrentCityIndex((prev) => (prev + 1) % travelRoutes.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="the-journey"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
      style={{ background: "#F7F0E4" }}
    >
      {/* Decorative top border */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(196,154,82,0.5), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto">
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
            The Journey
          </span>
          <h2
            className="font-serif font-semibold mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#47191D",
              lineHeight: 1.2,
            }}
          >
            Churu Is Where It Begins.
            <br />
            <em>India Is Where It Travels.</em>
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
            No delivery vans. No courier boxes. Just people — travellers,
            homecomers, and loyal customers — who carry Bhaiji Pede Wale&apos;s
            Pede as gifts for their families, their friends, and everyone they
            love. This is how a small shop in Churu reached the hearts of
            people across India.
          </p>
        </motion.div>

        {/* Map + Story layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Map */}
          <motion.div
            ref={mapRef}
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isMapInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <IndiaMapSVG animatedCities={animatedCities} />

              {/* Animated city name display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCityIndex}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.5 }}
                >
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ color: "#C49A52" }}
                  >
                    {travelRoutes[currentCityIndex]?.label}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Story text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-8">
              {/* Story cards */}
              {[
                {
                  title: "The Traveller's Gift",
                  text: "Every person who leaves Churu for another city knows exactly what to bring back home. A box from Bhaiji Pede Wale. It has become the most meaningful gift from this city — the one that says 'I remembered you, and I brought the best Churu has to offer.'",
                },
                {
                  title: "Carried, Not Shipped",
                  text: "These Pede have never been marketed beyond Churu. They have travelled through the hands and hearts of people who wanted to share something extraordinary. That is a kind of reputation that money cannot buy.",
                },
                {
                  title: "A Taste That Waits for You",
                  text: "Ask anyone who has lived in Churu and moved away. They will tell you: the moment they return, one of the first things they do is visit Bhaiji Pede Wale. Some memories are made of tastes.",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  className="p-5 relative"
                  style={{
                    background: "rgba(71,25,29,0.04)",
                    borderLeft: "2px solid rgba(196,154,82,0.5)",
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                >
                  <h3
                    className="font-serif text-lg mb-2"
                    style={{ color: "#47191D" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#29231F", opacity: 0.75 }}
                  >
                    {card.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Note about delivery */}
            <div
              className="mt-8 p-4 text-xs leading-relaxed"
              style={{
                background: "rgba(196,154,82,0.08)",
                border: "1px solid rgba(196,154,82,0.2)",
                color: "#29231F",
                opacity: 0.75,
              }}
            >
              <span style={{ color: "#C49A52", fontWeight: 600 }}>
                Note:
              </span>{" "}
              Bhaiji Pede Wale currently operates from its shop in Churu,
              Rajasthan. We do not offer direct nationwide delivery at this time.
              Please{" "}
              <a
                href="/visit-us"
                style={{ color: "#C49A52", textDecoration: "underline" }}
              >
                visit us in Churu
              </a>{" "}
              to experience the original.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
