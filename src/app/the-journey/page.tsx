import type { Metadata } from "next";
import TasteThatTravels from "@/components/sections/TasteThatTravels";
import ClosingStatement from "@/components/sections/ClosingStatement";

export const metadata: Metadata = {
  title: "The Journey",
  description:
    "How Bhaiji Pede Wale's Pede have travelled from Churu to every corner of India – carried by the people who love them.",
};

export default function TheJourneyPage() {
  return (
    <div className="pt-20">
      <div
        className="py-24 px-4 text-center relative"
        style={{ background: "#47191D" }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #C49A52, transparent)",
          }}
        />
        <span
          className="text-xs tracking-widest uppercase block mb-4"
          style={{ color: "#C49A52" }}
        >
          Made in Churu
        </span>
        <h1
          className="font-serif text-4xl md:text-5xl"
          style={{ color: "#F7F0E4" }}
        >
          The Journey
        </h1>
        <p
          className="mt-4 text-sm max-w-xl mx-auto"
          style={{ color: "rgba(247,240,228,0.65)" }}
        >
          Made in Churu. Carried across India. Remembered everywhere.
        </p>
      </div>

      <TasteThatTravels />
      <ClosingStatement />
    </div>
  );
}
