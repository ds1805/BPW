import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  metadataBase: new URL("https://bhaijipedewale.com"),
  title: {
    default: brand.seo.title,
    template: `%s | ${brand.name}`,
  },
  description: brand.seo.description,
  keywords: brand.seo.keywords,
  authors: [{ name: brand.name }],
  creator: brand.name,
  publisher: brand.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bhaijipedewale.com",
    siteName: brand.name,
    title: brand.seo.title,
    description: brand.seo.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${brand.name} – Traditional Pede Since ${brand.since}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: brand.seo.title,
    description: brand.seo.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "[GOOGLE_SEARCH_CONSOLE_VERIFICATION – TO BE UPDATED]",
  },
  icons: {
    icon: [
      { url: "/images/bpw-logo.jpg", type: "image/jpeg" },
    ],
    shortcut: "/images/bpw-logo.jpg",
    apple: [
      { url: "/images/bpw-logo.jpg", type: "image/jpeg" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: brand.name,
  description: brand.seo.description,
  foundingDate: brand.since,
  hasMap: brand.mapDirectionsUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: brand.address,
    addressLocality: brand.city,
    addressRegion: brand.state,
    postalCode: brand.pincode,
    addressCountry: brand.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  servesCuisine: ["Indian", "Rajasthani", "Sweets", "Traditional Pede"],
  image: "/images/shop-front.jpg",
  priceRange: "₹",
  url: "https://bhaijipedewale.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/bpw-logo.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/images/bpw-logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/bpw-logo.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=Inter:wght@300;400;500;600&family=Tiro+Devanagari+Hindi&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen" style={{ background: "#F7F0E4" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
