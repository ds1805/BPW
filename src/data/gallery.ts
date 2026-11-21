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
    src: "/images/products/classic-plain-pede.jpg",
    alt: "Classic Plain Pede served in traditional brassware",
    caption: "The timeless original — hand-shaped and roasted fresh every day in Churu.",
    category: "product",
  },
  {
    id: "g2",
    src: "/images/products/kesar-pede.jpg",
    alt: "Royal Kesar Pede garnished with pistachios",
    caption: "Infused with rich saffron and garnished with pistachios — our royal celebration pede.",
    category: "product",
  },
  {
    id: "g3",
    src: "/images/the-craft-pede.jpg",
    alt: "Traditional Pede Craftsmanship in an engraved brass vessel",
    caption: "Generations of mastery in every hand-moulded piece.",
    category: "product",
  },
  {
    id: "g4",
    src: "/images/products/special-gift-box.jpg",
    alt: "Shekhawati Heritage Gift Box by Bhaiji Pede Wale",
    caption: "Carried across India — our iconic heritage box that has travelled thousands of miles.",
    category: "product",
  },
  {
    id: "g5",
    src: "/images/shop-front.jpg",
    alt: "Bhaiji Pede Wala shop front at Bhaiji Chowk, Churu",
    caption: "The landmark shop at Bhaiji Chowk, Sabji Mandi Road, Churu — where our sweet legacy began.",
    category: "shop",
  },
  {
    id: "g6",
    src: "/images/placeholder/gallery-family-1.jpg",
    alt: "The founding family behind Bhaiji Pede Wale",
    caption: "The family whose dedication built a legacy of sweetness.",
    category: "family",
  },
  {
    id: "g7",
    src: "/images/placeholder/gallery-festival.jpg",
    alt: "Diwali and festival preparations in Churu",
    caption: "No festival is complete without Bhaiji's Pede on the plate.",
    category: "festival",
  },
  {
    id: "g8",
    src: "/images/placeholder/gallery-churu-heritage.jpg",
    alt: "Historic Havelis and architectural heritage of Churu",
    caption: "Churu — the heart of Shekhawati where our story began.",
    category: "heritage",
  },
];
