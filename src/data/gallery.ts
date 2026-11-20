// Gallery images – replace placeholder URLs with actual photographs
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: "shop" | "family" | "product" | "festival" | "heritage";
  year?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/placeholder/gallery-shop-exterior.jpg",
    alt: "Bhaiji Pede Wale shop exterior in Churu",
    caption: "The shop as it stands today – a landmark of Churu.",
    category: "shop",
  },
  {
    id: "g2",
    src: "/images/placeholder/gallery-shop-interior.jpg",
    alt: "Inside Bhaiji Pede Wale – the heart of the craft",
    caption: "Where every Pede is made with care.",
    category: "shop",
  },
  {
    id: "g3",
    src: "/images/placeholder/gallery-family-1.jpg",
    alt: "The family behind Bhaiji Pede Wale",
    caption: "[FAMILY CAPTION – TO BE UPDATED]",
    category: "family",
  },
  {
    id: "g4",
    src: "/images/placeholder/gallery-pede-making.jpg",
    alt: "Traditional Pede being crafted by hand",
    caption: "Every Pede, crafted the traditional way.",
    category: "product",
  },
  {
    id: "g5",
    src: "/images/placeholder/gallery-pede-closeup.jpg",
    alt: "A close-up of freshly made Pede",
    caption: "The warmth of tradition in every piece.",
    category: "product",
  },
  {
    id: "g6",
    src: "/images/placeholder/gallery-festival.jpg",
    alt: "Festival celebrations at Bhaiji Pede Wale",
    caption: "Every festival begins here.",
    category: "festival",
  },
  {
    id: "g7",
    src: "/images/placeholder/gallery-churu-heritage.jpg",
    alt: "Traditional Churu architecture and heritage",
    caption: "Churu – where the story began.",
    category: "heritage",
  },
  {
    id: "g8",
    src: "/images/placeholder/gallery-packaging.jpg",
    alt: "Traditional packaging at Bhaiji Pede Wale",
    caption: "Wrapped with care. Carried with pride.",
    category: "product",
  },
];
