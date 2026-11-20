import type { Metadata } from "next";
import TheArt from "@/components/sections/TheArt";
import ClosingStatement from "@/components/sections/ClosingStatement";

export const metadata: Metadata = {
  title: "The Craft",
  description:
    "Discover the traditional art of Pede-making at Bhaiji Pede Wale – a craft refined over generations in Churu, Rajasthan.",
};

export default function TheCraftPage() {
  return (
    <div className="pt-20">
      <div
        className="py-24 px-4 text-center relative"
        style={{ background: "#29231F" }}
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
          The Art
        </span>
        <h1
          className="font-serif text-4xl md:text-5xl"
          style={{ color: "#F7F0E4" }}
        >
          The Craft
        </h1>
        <p
          className="mt-4 text-sm max-w-xl mx-auto"
          style={{ color: "rgba(247,240,228,0.65)" }}
        >
          How a timeless tradition becomes a perfect Pede, one careful step at a time.
        </p>
      </div>

      <TheArt />
      <ClosingStatement />
    </div>
  );
}
