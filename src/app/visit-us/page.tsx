import type { Metadata } from "next";
import VisitUs from "@/components/sections/VisitUs";
import ClosingStatement from "@/components/sections/ClosingStatement";

export const metadata: Metadata = {
  title: "Visit Us",
  description:
    "Find Bhaiji Pede Wale in Churu, Rajasthan. Address, directions, business hours, and contact information.",
};

export default function VisitUsPage() {
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
          Churu, Rajasthan
        </span>
        <h1
          className="font-serif text-4xl md:text-5xl"
          style={{ color: "#F7F0E4" }}
        >
          Visit Us
        </h1>
        <p
          className="mt-4 text-sm max-w-xl mx-auto"
          style={{ color: "rgba(247,240,228,0.65)" }}
        >
          Some experiences are best collected in person.
        </p>
      </div>

      <VisitUs />
      <ClosingStatement />
    </div>
  );
}
