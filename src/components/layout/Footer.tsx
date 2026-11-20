import Link from "next/link";
import Image from "next/image";
import { brand } from "@/data/brand";

const navLinks = [
  { href: "/our-story", label: "Our Story" },
  { href: "/the-craft", label: "The Craft" },
  { href: "/our-pede", label: "Our Pede" },
  { href: "/the-journey", label: "The Journey" },
  { href: "/gallery", label: "Gallery" },
  { href: "/visit-us", label: "Visit Us" },
];

export function Footer() {
  return (
    <footer
      style={{ background: "#47191D", borderTop: "1px solid #C49A52" }}
    >
      {/* Top ornamental section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div>
            <div className="mb-6">
              <div
                className="inline-flex items-center gap-3 mb-4"
              >
                <div
                  className="rounded-full overflow-hidden border-2 border-[#C49A52] bg-white p-0.5 shadow-md flex items-center justify-center flex-shrink-0"
                  style={{ width: "48px", height: "48px" }}
                >
                  <Image
                    src="/images/bpw-logo.jpg"
                    alt="BPW Logo"
                    width={42}
                    height={42}
                    className="rounded-full object-contain"
                  />
                </div>
                <div>
                  <p className="font-serif font-semibold text-base" style={{ color: "#F7F0E4" }}>
                    Bhaiji Pede Wale
                  </p>
                  <p className="text-xs tracking-widest uppercase" style={{ color: "#C49A52" }}>
                    Since {brand.since}
                  </p>
                </div>
              </div>
              <p
                className="text-sm leading-relaxed font-serif italic"
                style={{ color: "rgba(247,240,228,0.65)" }}
              >
                &ldquo;{brand.travelTagline}&rdquo;
              </p>
            </div>
            <div
              className="h-[1px]"
              style={{
                background:
                  "linear-gradient(90deg, #C49A52, transparent)",
              }}
            />
          </div>

          {/* Navigation column */}
          <div>
            <h3
              className="font-serif text-sm uppercase tracking-widest mb-6"
              style={{ color: "#C49A52" }}
            >
              Explore
            </h3>
            <nav className="flex flex-col gap-3" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors duration-200 hover:text-gold block"
                  style={{ color: "rgba(247,240,228,0.75)", display: "block" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <h3
              className="font-serif text-sm uppercase tracking-widest mb-6"
              style={{ color: "#C49A52" }}
            >
              Visit Us
            </h3>
            <div className="space-y-3 text-sm" style={{ color: "rgba(247,240,228,0.65)" }}>
              <p>{brand.address}</p>
              <p>{brand.city}, {brand.state}</p>
              {brand.phone !== "[PHONE NUMBER – TO BE UPDATED]" && (
                <p>
                  <a
                    href={`tel:${brand.phone}`}
                    className="hover:text-gold transition-colors"
                    style={{ color: "rgba(247,240,228,0.65)" }}
                  >
                    {brand.phone}
                  </a>
                </p>
              )}
              <div className="flex gap-4 pt-2">
                {brand.social.instagram !== "#" && (
                  <a
                    href={brand.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="transition-colors hover:opacity-80"
                    style={{ color: "#C49A52" }}
                  >
                    Instagram
                  </a>
                )}
                {brand.social.facebook !== "#" && (
                  <a
                    href={brand.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="transition-colors hover:opacity-80"
                    style={{ color: "#C49A52" }}
                  >
                    Facebook
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTop: "1px solid rgba(196,154,82,0.2)" }}
        className="py-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "rgba(247,240,228,0.4)" }}>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p
            className="text-xs font-serif italic"
            style={{ color: "rgba(247,240,228,0.4)" }}
          >
            {brand.closingStatement.split(".")[0]}.
          </p>
        </div>
      </div>
    </footer>
  );
}
