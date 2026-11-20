"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import IndiaMapData from "@svg-maps/india";
import { travelRoutes, churuOrigin, TravelRoute } from "@/data/testimonials";

function IndiaMapSVG({
  activeCity,
  onSelectCity,
}: {
  activeCity: TravelRoute;
  onSelectCity: (city: TravelRoute) => void;
}) {
  const mapData = IndiaMapData as {
    viewBox?: string;
    locations: { id: string; name: string; path: string }[];
  };

  const churu = churuOrigin;

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <svg
        viewBox={mapData.viewBox || "0 0 612 696"}
        className="w-full h-auto drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C49A52" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f5d78e" stopOpacity="0.4" />
          </linearGradient>
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="glow" />
            <feComposite in="SourceGraphic" in2="glow" operator="over" />
          </filter>
        </defs>

        {/* All States of India from official cartography */}
        <g id="india-states">
          {mapData.locations.map((loc) => {
            const isRajasthan = loc.name === "Rajasthan";
            return (
              <path
                key={loc.id}
                id={loc.id}
                d={loc.path}
                fill={
                  isRajasthan
                    ? "rgba(196, 154, 82, 0.2)"
                    : "rgba(71, 25, 29, 0.05)"
                }
                stroke={
                  isRajasthan
                    ? "#C49A52"
                    : "rgba(196, 154, 82, 0.35)"
                }
                strokeWidth={isRajasthan ? "1.4" : "0.6"}
                strokeLinejoin="round"
                className="transition-colors duration-300"
              />
            );
          })}
        </g>

        {/* Flight & Travel Route Arcs from Churu */}
        <g id="travel-routes">
          {travelRoutes.map((route, i) => {
            const isSelected = activeCity.city === route.city;
            // Quadratic curve control point with natural upward bow
            const midX = (churu.x + route.x) / 2;
            const midY = (churu.y + route.y) / 2;
            const dx = route.x - churu.x;
            const dy = route.y - churu.y;
            // Curvature offset perpendicular to line
            const offset = Math.min(Math.sqrt(dx * dx + dy * dy) * 0.15, 45);
            const ctrlX = midX - (dy / Math.max(Math.abs(dx) + Math.abs(dy), 1)) * offset;
            const ctrlY = midY + (dx / Math.max(Math.abs(dx) + Math.abs(dy), 1)) * offset;

            const pathD = `M ${churu.x} ${churu.y} Q ${ctrlX} ${ctrlY} ${route.x} ${route.y}`;

            return (
              <g key={route.city}>
                {/* Background faint arc */}
                <path
                  d={pathD}
                  stroke="rgba(196, 154, 82, 0.25)"
                  strokeWidth="0.8"
                  fill="none"
                />

                {/* Animated active golden travel line */}
                <motion.path
                  d={pathD}
                  stroke={isSelected ? "#C49A52" : "rgba(196, 154, 82, 0.6)"}
                  strokeWidth={isSelected ? "2" : "1"}
                  strokeDasharray={isSelected ? "4 3" : "2 4"}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: 0.3 + i * 0.08,
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                />
              </g>
            );
          })}
        </g>

        {/* Destination City Dots & Markers */}
        <g id="city-markers">
          {travelRoutes.map((route) => {
            const isSelected = activeCity.city === route.city;
            return (
              <g
                key={`marker-${route.city}`}
                onClick={() => onSelectCity(route)}
                className="cursor-pointer group"
              >
                {/* Click target area */}
                <circle cx={route.x} cy={route.y} r="14" fill="transparent" />

                {/* Pulse ring for active city */}
                {isSelected && (
                  <motion.circle
                    cx={route.x}
                    cy={route.y}
                    r="8"
                    stroke="#C49A52"
                    strokeWidth="1.5"
                    fill="none"
                    animate={{ r: [6, 16, 6], opacity: [0.8, 0.1, 0.8] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}

                {/* City node */}
                <circle
                  cx={route.x}
                  cy={route.y}
                  r={isSelected ? 5 : 3.5}
                  fill={isSelected ? "#47191D" : "#C49A52"}
                  stroke="#C49A52"
                  strokeWidth={isSelected ? "2" : "1"}
                  filter={isSelected ? "url(#goldGlow)" : undefined}
                />

                {/* City label text */}
                <text
                  x={route.x + (route.x > 300 ? -8 : 8)}
                  y={route.y + (route.y > 450 ? 3 : -6)}
                  textAnchor={route.x > 300 ? "end" : "start"}
                  fontSize={isSelected ? "11" : "9"}
                  fontWeight={isSelected ? "700" : "500"}
                  fill={isSelected ? "#47191D" : "#641E24"}
                  fontFamily="'Inter', system-ui, sans-serif"
                  className="transition-all duration-200 select-none"
                  style={{
                    textShadow: "0 1px 3px rgba(247, 240, 228, 0.9)",
                  }}
                >
                  {route.label}
                </text>
              </g>
            );
          })}
        </g>

        {/* Churu (Origin) Beacon */}
        <g id="churu-origin">
          {/* Outer glow ring */}
          <motion.circle
            cx={churu.x}
            cy={churu.y}
            r="12"
            stroke="#C49A52"
            strokeWidth="1.5"
            fill="none"
            animate={{ r: [10, 20, 10], opacity: [0.9, 0.2, 0.9] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Central gold point */}
          <circle
            cx={churu.x}
            cy={churu.y}
            r="6.5"
            fill="#C49A52"
            stroke="#47191D"
            strokeWidth="1.5"
            filter="url(#goldGlow)"
          />

          {/* Center heart */}
          <circle cx={churu.x} cy={churu.y} r="2.5" fill="#47191D" />

          {/* Churu Label with badge */}
          <g transform={`translate(${churu.x - 48}, ${churu.y - 30})`}>
            <rect
              width="96"
              height="20"
              rx="4"
              fill="#47191D"
              stroke="#C49A52"
              strokeWidth="1"
            />
            <text
              x="48"
              y="13"
              textAnchor="middle"
              fontSize="9"
              fontWeight="700"
              fill="#F7F0E4"
              fontFamily="'Playfair Display', serif"
              letterSpacing="0.05em"
            >
              ★ CHURU (Origin)
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function TasteThatTravels() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const [activeCity, setActiveCity] = useState<TravelRoute>(travelRoutes[0]);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle through cities every 3.5s unless user is interacting
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveCity((prev) => {
        const idx = travelRoutes.findIndex((r) => r.city === prev.city);
        const nextIdx = (idx + 1) % travelRoutes.length;
        return travelRoutes[nextIdx];
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

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
          className="text-center mb-16"
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
            <em style={{ color: "#A65F42" }}>India Is Where It Travels.</em>
          </h2>

          <div className="flex items-center gap-6 justify-center my-6">
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
            style={{ color: "#29231F", opacity: 0.8 }}
          >
            Bhaiji Pede Wale doesn&apos;t run commercial delivery fleets. Our sweets
            travel the country the old-fashioned way: hand-carried by travellers,
            relatives, and homecomers as an affectionate taste of Churu.
          </p>
        </motion.div>

        {/* Map + Interactive Story Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Official Cartographic India Map (7 cols) */}
          <div
            className="lg:col-span-7 bg-[#FBF7F0] p-6 rounded-2xl border border-[#C49A52]/30 shadow-lg relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Legend / Origin info */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#C49A52]/20">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#C49A52] inline-block shadow-sm" />
                <span className="text-xs font-serif font-semibold text-[#47191D]">
                  Rajasthan & Churu (Origin)
                </span>
              </div>
              <span className="text-[11px] text-[#A65F42] uppercase tracking-wider">
                Click any city to view route
              </span>
            </div>

            {/* Official Map */}
            <IndiaMapSVG
              activeCity={activeCity}
              onSelectCity={(city) => {
                setActiveCity(city);
                setIsPaused(true);
              }}
            />

            {/* City Selector Chips */}
            <div className="mt-4 pt-4 border-t border-[#C49A52]/20 flex flex-wrap gap-1.5 justify-center">
              {travelRoutes.map((route) => {
                const isSelected = activeCity.city === route.city;
                return (
                  <button
                    key={route.city}
                    onClick={() => {
                      setActiveCity(route);
                      setIsPaused(true);
                    }}
                    className={`px-2.5 py-1 text-xs rounded-full transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#47191D] text-[#F7F0E4] font-medium shadow-sm scale-105"
                        : "bg-[#F7F0E4] text-[#29231F] hover:bg-[#C49A52]/20 border border-[#C49A52]/30"
                    }`}
                  >
                    {route.city}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Active Route Details & Story Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Active City Spotlight Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCity.city}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-xl border border-[#C49A52] relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(71, 25, 29, 0.95), rgba(100, 30, 36, 0.92))",
                  boxShadow: "0 10px 25px -5px rgba(71, 25, 29, 0.3)",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs uppercase tracking-widest font-semibold"
                    style={{ color: "#C49A52" }}
                  >
                    Active Route
                  </span>
                  <span
                    className="text-xs px-2.5 py-0.5 rounded-full"
                    style={{
                      background: "rgba(196, 154, 82, 0.2)",
                      color: "#f5d78e",
                      border: "1px solid rgba(196, 154, 82, 0.4)",
                    }}
                  >
                    {activeCity.distance} from Churu
                  </span>
                </div>

                <h3
                  className="font-serif text-2xl font-bold mb-2 flex items-center gap-2"
                  style={{ color: "#F7F0E4" }}
                >
                  <span>Churu</span>
                  <span style={{ color: "#C49A52" }}>➔</span>
                  <span>{activeCity.label}</span>
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(247, 240, 228, 0.85)" }}
                >
                  {activeCity.story}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Narrative Pillars */}
            <div className="space-y-4">
              <div
                className="p-4 rounded-lg"
                style={{
                  background: "rgba(71, 25, 29, 0.04)",
                  borderLeft: "3px solid #C49A52",
                }}
              >
                <h4 className="font-serif text-base font-semibold mb-1" style={{ color: "#47191D" }}>
                  The Traveller&apos;s Gift
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "#29231F", opacity: 0.75 }}>
                  Every visitor leaving Churu carries a box of Bhaiji Pede — the standard gift
                  carried from Rajasthan to loved ones nationwide.
                </p>
              </div>

              <div
                className="p-4 rounded-lg"
                style={{
                  background: "rgba(71, 25, 29, 0.04)",
                  borderLeft: "3px solid #C49A52",
                }}
              >
                <h4 className="font-serif text-base font-semibold mb-1" style={{ color: "#47191D" }}>
                  Carried by Trust, Not Shipped
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "#29231F", opacity: 0.75 }}>
                  We do not operate e-commerce courier shipments. Every box that reaches Mumbai,
                  Kolkata, or Bengaluru was carried by hand because someone cared enough to bring it.
                </p>
              </div>
            </div>

            {/* Physical visit reminder */}
            <div
              className="p-4 text-xs rounded-lg"
              style={{
                background: "rgba(196, 154, 82, 0.1)",
                border: "1px solid rgba(196, 154, 82, 0.3)",
                color: "#29231F",
              }}
            >
              <strong style={{ color: "#47191D" }}>Visiting Rajasthan?</strong>{" "}
              Experience our Pede fresh from the shop in Churu.{" "}
              <a
                href="/visit-us"
                className="underline font-semibold hover:opacity-80"
                style={{ color: "#641E24" }}
              >
                Find our location & directions &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
