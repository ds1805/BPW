import type { Metadata } from "next";
import SignaturePede from "@/components/sections/SignaturePede";
import ClosingStatement from "@/components/sections/ClosingStatement";

export const metadata: Metadata = {
  title: "Our Pede",
  description:
    "Discover the signature Pede collection at Bhaiji Pede Wale – traditional sweets made in Churu, Rajasthan, since 1948.",
};

export default function OurPedePage() {
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
          <span style={{ fontFamily: "Tiro Devanagari Hindi, serif" }}>
            पेड़ा
          </span>
        </span>
        <h1
          className="font-serif text-4xl md:text-5xl"
          style={{ color: "#F7F0E4" }}
        >
          Our Pede
        </h1>
        <p
          className="mt-4 text-sm max-w-xl mx-auto"
          style={{ color: "rgba(247,240,228,0.65)" }}
        >
          Made with tradition. Remembered with love. The signature collection of
          Bhaiji Pede Wale.
        </p>
      </div>

      <SignaturePede />

      {/* Future e-commerce integration note */}
      <div
        className="py-10 px-4 text-center"
        style={{ background: "#F7F0E4", borderTop: "1px solid rgba(196,154,82,0.2)" }}
      >
        <p
          className="text-xs max-w-lg mx-auto leading-relaxed"
          style={{ color: "rgba(41,35,31,0.5)" }}
        >
          <strong style={{ color: "#C49A52" }}>Visiting Churu?</strong> Our Pede
          are available exclusively at our shop in Churu, Rajasthan. We do not
          currently offer online delivery. Please visit us in person for the
          freshest experience.
        </p>
      </div>

      <ClosingStatement />
    </div>
  );
}
