import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ClosingStatement from "@/components/sections/ClosingStatement";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div
        className="py-4 px-4 sm:px-8"
        style={{ background: "#47191D", borderBottom: "1px solid rgba(196,154,82,0.2)" }}
      >
        <nav className="max-w-6xl mx-auto flex items-center gap-2 text-xs" style={{ color: "rgba(247,240,228,0.5)" }}>
          <Link href="/" style={{ color: "rgba(247,240,228,0.5)" }}>Home</Link>
          <span>/</span>
          <Link href="/our-pede" style={{ color: "rgba(247,240,228,0.5)" }}>Our Pede</Link>
          <span>/</span>
          <span style={{ color: "#C49A52" }}>{product.name}</span>
        </nav>
      </div>

      <div className="py-20 px-4 sm:px-8" style={{ background: "#F7F0E4" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Product image */}
            <div
              className="relative aspect-square"
              style={{
                background: "rgba(71,25,29,0.08)",
                border: "1px solid rgba(196,154,82,0.3)",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className="w-20 h-20 rounded-full border-2 flex items-center justify-center mb-4"
                  style={{ borderColor: "rgba(196,154,82,0.4)" }}
                >
                  <span style={{ color: "#C49A52", fontSize: "2rem" }}>◆</span>
                </div>
                <span
                  className="text-xs text-center px-6"
                  style={{ color: "rgba(196,154,82,0.5)" }}
                >
                  {product.imageAlt}
                  <br />
                  <span className="text-[0.6rem] block mt-2">
                    Replace with actual product photograph
                  </span>
                </span>
              </div>
            </div>

            {/* Product info */}
            <div>
              {product.nameHindi && (
                <p
                  className="text-lg mb-2 font-medium"
                  style={{
                    fontFamily: "'Tiro Devanagari Hindi', 'Noto Serif Devanagari', serif",
                    color: "#C49A52",
                    letterSpacing: "normal",
                    textTransform: "none",
                  }}
                >
                  {product.nameHindi}
                </p>
              )}
              <h1
                className="font-serif text-3xl md:text-4xl mb-4"
                style={{ color: "#47191D" }}
              >
                {product.name}
              </h1>

              <div
                className="h-[1px] mb-6"
                style={{ background: "linear-gradient(to right, rgba(196,154,82,0.5), transparent)" }}
              />

              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "#29231F", opacity: 0.8 }}
              >
                {product.longDescription}
              </p>

              {/* Variants */}
              <div className="mb-8">
                <p
                  className="text-xs tracking-widest uppercase mb-3"
                  style={{ color: "#C49A52" }}
                >
                  Available Sizes
                </p>
                <div className="flex gap-3 flex-wrap">
                  {product.variants.map((v) => (
                    <div
                      key={v.id}
                      className="px-4 py-2 text-sm"
                      style={{
                        border: "1px solid rgba(196,154,82,0.5)",
                        color: "#29231F",
                      }}
                    >
                      {v.weight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Shelf life */}
              {product.shelfLife && (
                <p
                  className="text-xs mb-6"
                  style={{ color: "rgba(41,35,31,0.5)" }}
                >
                  Shelf life: {product.shelfLife}
                </p>
              )}

              {/* Note */}
              <div
                className="p-4 text-xs leading-relaxed mb-8"
                style={{
                  background: "rgba(196,154,82,0.08)",
                  border: "1px solid rgba(196,154,82,0.2)",
                  color: "rgba(41,35,31,0.65)",
                }}
              >
                <strong style={{ color: "#C49A52" }}>Available in-store only.</strong>{" "}
                Bhaiji Pede Wale Pede are currently available exclusively at our
                Churu shop. We do not offer online delivery at this time.
              </div>

              <Link
                href="/visit-us"
                className="inline-block px-10 py-3 text-xs tracking-widest uppercase font-medium transition-colors duration-300"
                style={{
                  background: "#47191D",
                  color: "#F7F0E4",
                }}
              >
                Visit Us in Churu
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ClosingStatement />
    </div>
  );
}
