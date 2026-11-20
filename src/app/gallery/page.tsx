import type { Metadata } from "next";
import Memories from "@/components/sections/Memories";
import ClosingStatement from "@/components/sections/ClosingStatement";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual journey through the history of Bhaiji Pede Wale – the shop, the family, the craft, and the memories.",
};

export default function GalleryPage() {
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
          Photographs & Memories
        </span>
        <h1
          className="font-serif text-4xl md:text-5xl"
          style={{ color: "#F7F0E4" }}
        >
          Gallery
        </h1>
        <p
          className="mt-4 text-sm max-w-xl mx-auto"
          style={{ color: "rgba(247,240,228,0.65)" }}
        >
          A living archive of Bhaiji Pede Wale&apos;s story, told through photographs.
        </p>
      </div>

      <Memories />
      <ClosingStatement />
    </div>
  );
}
