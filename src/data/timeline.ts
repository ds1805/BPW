// Timeline milestones – fill with verified family history
export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
}

export const timeline: TimelineMilestone[] = [
  {
    year: "1948",
    title: "The Beginning",
    description:
      "[FOUNDER'S NAME] started making Pede in a small shop in Churu with a simple dream: to create a taste that people would remember. The story of Bhaiji Pede Wale began here.",
    imageUrl: "/images/placeholder/timeline-1948.jpg",
    imageAlt: "The original Bhaiji Pede Wale shop circa 1948",
  },
  {
    year: "[YEAR]",
    title: "Growing Reputation",
    description:
      "[MILESTONE DESCRIPTION – TO BE UPDATED BY FAMILY]",
    imageUrl: "/images/placeholder/timeline-milestone-2.jpg",
    imageAlt: "Shop milestone",
  },
  {
    year: "[YEAR]",
    title: "A Second Generation",
    description:
      "[DESCRIPTION OF SECOND GENERATION JOINING THE BUSINESS – TO BE UPDATED]",
    imageUrl: "/images/placeholder/timeline-milestone-3.jpg",
    imageAlt: "Second generation",
  },
  {
    year: "[YEAR]",
    title: "Churu Becomes Proud",
    description:
      "[MILESTONE – TO BE UPDATED. Example: Recognition by the community, featured in local media, etc.]",
    imageUrl: "/images/placeholder/timeline-milestone-4.jpg",
    imageAlt: "Community recognition",
  },
  {
    year: "Today",
    title: "A Living Legacy",
    description:
      "Still made the traditional way. Still loved by people across India. Bhaiji Pede Wale continues to be a name that people carry home with pride — from Churu to every corner of the country.",
    imageUrl: "/images/placeholder/timeline-today.jpg",
    imageAlt: "Bhaiji Pede Wale today",
  },
];
