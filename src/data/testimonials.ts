// Customer memories – replace with real customer testimonials only
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  imageUrl?: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Dheeraj Saraswat",
    location: "Bhopal, Madhya Pradesh",
    quote:
      "Whenever anyone in our extended family visits Churu or Shekhawati, coming back without Bhaiji's Pede is out of the question. The distinct aroma of slow-roasted pure desi ghee and mawa brings back pure nostalgia. When the box opens in Bhopal, it vanishes within minutes!",
    verified: true,
  },
  {
    id: "t2",
    name: "Puneet",
    location: "Delhi",
    quote:
      "Delhi has innumerable sweet shops, but nothing matches the honest, generational craftsmanship of Bhaiji Pede Wale. Every time I visit Rajasthan, I carry extra gift boxes for colleagues and family. The authentic caramelized flavor and subtle cardamom note are unforgettable.",
    verified: true,
  },
  {
    id: "t3",
    name: "Vijay",
    location: "Chennai",
    quote:
      "A colleague brought a box of Bhaiji's Pede all the way to Chennai. After just one bite, I understood why people speak so passionately about it. You can taste the purity of slow milk reduction and traditional craft. It was an authentic slice of royal Rajasthan delivered to the South.",
    verified: true,
  },
];

export interface TravelRoute {
  city: string;
  label: string;
  x: number;
  y: number;
  distance: string;
  story: string;
}

export const churuOrigin = {
  city: "Churu",
  label: "Churu (Origin)",
  x: 158,
  y: 208,
  state: "Rajasthan",
};

// Accurately positioned coordinates on the 612x696 official India SVG map
export const travelRoutes: TravelRoute[] = [
  {
    city: "Delhi",
    label: "Delhi",
    x: 186,
    y: 210,
    distance: "280 km",
    story: "Hand-carried by commuters and family visitors who never return from Churu without a box.",
  },
  {
    city: "Jaipur",
    label: "Jaipur",
    x: 168,
    y: 250,
    distance: "205 km",
    story: "A cherished gift carried to the Pink City for festivals, relatives, and celebrations.",
  },
  {
    city: "Bikaner",
    label: "Bikaner",
    x: 124,
    y: 215,
    distance: "175 km",
    story: "Sharing the legendary taste across neighbouring desert cities.",
  },
  {
    city: "Jodhpur",
    label: "Jodhpur",
    x: 114,
    y: 270,
    distance: "340 km",
    story: "Carried across Marwar for weddings and traditional family occasions.",
  },
  {
    city: "Bhopal",
    label: "Bhopal",
    x: 185,
    y: 355,
    distance: "720 km",
    story: "Carried across Madhya Pradesh by families who treasure authentic Shekhawati sweetness.",
  },
  {
    city: "Mumbai",
    label: "Mumbai",
    x: 115,
    y: 432,
    distance: "1,220 km",
    story: "Packed in luggage on trains and flights to connect families across Maharashtra.",
  },
  {
    city: "Kolkata",
    label: "Kolkata",
    x: 395,
    y: 330,
    distance: "1,480 km",
    story: "A deep cultural bond connecting Shekhawati diaspora families to their roots.",
  },
  {
    city: "Ahmedabad",
    label: "Ahmedabad",
    x: 95,
    y: 345,
    distance: "740 km",
    story: "Carried to Gujarat through business journeys and loved ones.",
  },
  {
    city: "Pune",
    label: "Pune",
    x: 135,
    y: 448,
    distance: "1,290 km",
    story: "Brought by students and young professionals returning after visiting home in Churu.",
  },
  {
    city: "Hyderabad",
    label: "Hyderabad",
    x: 236,
    y: 462,
    distance: "1,450 km",
    story: "Treasured across the Deccan plateau as an authentic taste of Rajasthan.",
  },
  {
    city: "Bengaluru",
    label: "Bengaluru",
    x: 186,
    y: 546,
    distance: "1,920 km",
    story: "Hand-carried across thousands of kilometres to bring nostalgia to tech corridors.",
  },
  {
    city: "Chennai",
    label: "Chennai",
    x: 242,
    y: 552,
    distance: "2,080 km",
    story: "Reaching the southern coast solely through the affection and pride of our visitors.",
  },
  {
    city: "Lucknow",
    label: "Lucknow",
    x: 265,
    y: 242,
    distance: "620 km",
    story: "Welcomed into the city of Nawabs as Rajasthan's premier traditional sweet.",
  },
];
