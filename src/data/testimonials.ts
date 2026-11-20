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
    name: "[CUSTOMER NAME]",
    location: "[CITY, STATE]",
    quote:
      "[GENUINE CUSTOMER TESTIMONIAL – TO BE UPDATED. Example: Every time I visit Churu, the first thing I do is come to Bhaiji Pede Wale. And every time I leave Rajasthan, I carry a box for my family back home.]",
    verified: false,
  },
  {
    id: "t2",
    name: "[CUSTOMER NAME]",
    location: "[CITY, STATE]",
    quote:
      "[GENUINE CUSTOMER TESTIMONIAL – TO BE UPDATED. Example: My grandmother introduced me to these Pede when I was a child. Today, I bring them for my own children. Some tastes are simply irreplaceable.]",
    verified: false,
  },
  {
    id: "t3",
    name: "[CUSTOMER NAME]",
    location: "[CITY, STATE]",
    quote:
      "[GENUINE CUSTOMER TESTIMONIAL – TO BE UPDATED. Example: I travel from Delhi to Churu at least twice a year. And Bhaiji Pede Wale is always on the itinerary. No other Pede comes close.]",
    verified: false,
  },
];

// Routes that represent cities where customers have carried BPW Pede
// These are illustrative – update with actual customer-shared destinations
export const travelRoutes = [
  { city: "Delhi", lat: 28.6139, lng: 77.209, label: "Delhi" },
  { city: "Jaipur", lat: 26.9124, lng: 75.7873, label: "Jaipur" },
  { city: "Mumbai", lat: 19.076, lng: 72.8777, label: "Mumbai" },
  { city: "Kolkata", lat: 22.5726, lng: 88.3639, label: "Kolkata" },
  { city: "Ahmedabad", lat: 23.0225, lng: 72.5714, label: "Ahmedabad" },
  { city: "Jodhpur", lat: 26.2389, lng: 73.0243, label: "Jodhpur" },
  { city: "Bikaner", lat: 28.0229, lng: 73.3119, label: "Bikaner" },
  { city: "Pune", lat: 18.5204, lng: 73.8567, label: "Pune" },
  { city: "Hyderabad", lat: 17.385, lng: 78.4867, label: "Hyderabad" },
  { city: "Bengaluru", lat: 12.9716, lng: 77.5946, label: "Bengaluru" },
  { city: "Chennai", lat: 13.0827, lng: 80.2707, label: "Chennai" },
  { city: "Lucknow", lat: 26.8467, lng: 80.9462, label: "Lucknow" },
];

// Churu origin coordinates
export const churuOrigin = { lat: 28.2957, lng: 74.9517 };
