import type { Metadata } from "next";
import Legacy from "@/components/sections/Legacy";
import ClosingStatement from "@/components/sections/ClosingStatement";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The story of Bhaiji Pede Wale – a family heritage of traditional Pede making in Churu, Rajasthan, since 1948.",
};

export default function OurStoryPage() {
  return (
    <div className="pt-20">
      {/* Page hero */}
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
          Bhaiji Pede Wale
        </span>
        <h1
          className="font-serif text-4xl md:text-5xl"
          style={{ color: "#F7F0E4" }}
        >
          Our Story
        </h1>
        <p
          className="mt-4 text-sm max-w-xl mx-auto"
          style={{ color: "rgba(247,240,228,0.65)" }}
        >
          A family&apos;s journey. A city&apos;s pride. A legacy built one Pede at a time.
        </p>
      </div>

      <Legacy />
      <ClosingStatement />
    </div>
  );
}
