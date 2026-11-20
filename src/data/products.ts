// Product catalogue – designed for future e-commerce activation
export interface ProductVariant {
  id: string;
  name: string;
  weight: string;
  price?: number; // Optional – activate for e-commerce
  available: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  nameHindi?: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  galleryImages?: string[];
  variants: ProductVariant[];
  featured: boolean;
  available: boolean;
  // E-commerce fields (future)
  sku?: string;
  inventory?: number;
  shippingInfo?: string;
  allergens?: string[];
  shelfLife?: string;
}

export const productCategories = [
  { id: "signature", name: "Signature Pede", slug: "signature-pede" },
  { id: "seasonal", name: "Seasonal Specials", slug: "seasonal-specials" },
  { id: "gifting", name: "Gifting Collections", slug: "gifting-collections" },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "classic-plain-pede",
    name: "Classic Plain Pede",
    nameHindi: "सादा पेड़ा",
    shortDescription:
      "The original. The timeless. Made the same way since 1948.",
    longDescription:
      "Our signature plain Pede is what Bhaiji Pede Wale has been known for across generations. Made with traditional methods and the finest ingredients, each piece carries the warmth of Churu and the pride of a family's lifetime of dedication. [DETAILED DESCRIPTION TO BE UPDATED]",
    category: "signature",
    tags: ["signature", "traditional", "classic"],
    imageUrl: "/images/products/classic-plain-pede.jpg",
    imageAlt: "Authentic Classic Plain Pede in traditional brass bowl by Bhaiji Pede Wale",
    variants: [
      { id: "plain-250", name: "250g", weight: "250g", available: true },
      { id: "plain-500", name: "500g", weight: "500g", available: true },
      { id: "plain-1kg", name: "1 kg", weight: "1kg", available: true },
    ],
    featured: true,
    available: true,
    shelfLife: "[SHELF LIFE – TO BE UPDATED]",
  },
  {
    id: "2",
    slug: "kesar-pede",
    name: "Kesar Pede",
    nameHindi: "केसर पेड़ा",
    shortDescription:
      "Infused with the golden warmth of saffron. A Rajasthani celebration on your palate.",
    longDescription:
      "Our Kesar Pede brings the luxurious flavour of authentic saffron to our traditional Pede recipe. Crafted for special occasions and celebrations. [DETAILED DESCRIPTION TO BE UPDATED]",
    category: "signature",
    tags: ["kesar", "saffron", "festive"],
    imageUrl: "/images/products/kesar-pede.jpg",
    imageAlt: "Authentic Kesar Pede with saffron and pistachios by Bhaiji Pede Wale",
    variants: [
      { id: "kesar-250", name: "250g", weight: "250g", available: true },
      { id: "kesar-500", name: "500g", weight: "500g", available: true },
    ],
    featured: true,
    available: true,
    shelfLife: "[SHELF LIFE – TO BE UPDATED]",
  },
  {
    id: "3",
    slug: "special-gift-box",
    name: "Special Gift Box",
    nameHindi: "विशेष उपहार बॉक्स",
    shortDescription:
      "Carry a piece of Churu's legacy. The perfect gift from Rajasthan.",
    longDescription:
      "An elegantly presented assortment of our finest Pede, crafted for gifting on special occasions. Weddings, festivals, celebrations — carry the taste of Bhaiji Pede Wale as your most meaningful gift. [DETAILED DESCRIPTION TO BE UPDATED]",
    category: "gifting",
    tags: ["gift", "assorted", "festive", "occasion"],
    imageUrl: "/images/products/special-gift-box.jpg",
    imageAlt: "Royal Shekhawati Heritage Gift Box by Bhaiji Pede Wale",
    variants: [
      {
        id: "gift-500",
        name: "500g Gift Box",
        weight: "500g",
        available: true,
      },
      { id: "gift-1kg", name: "1kg Gift Box", weight: "1kg", available: true },
    ],
    featured: true,
    available: true,
    shelfLife: "[SHELF LIFE – TO BE UPDATED]",
  },
];
