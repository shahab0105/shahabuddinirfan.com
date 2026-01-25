export interface TestimonialItem {
  id: string;
  projectTitle: string;
  rating: number;
  ratingCount?: number;
  dateRange: string;
  quote: string;
  response?: string;
  totalCost?: string;
  hourlyRate?: string;
  totalHours?: string;
  fixedPrice?: boolean;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "1",
    projectTitle: "Fintech app dev — React Native / Expo / Supabase / Plaid",
    rating: 5,
    ratingCount: 2,
    dateRange: "Aug 1, 2025 – Oct 19, 2025",
    quote: "Shahab's an amazing developer. He delivered a polished product on time and was great to work with.",
    totalCost: "$8,850.00",
    hourlyRate: "$48.00/hr",
    totalHours: "183 hours",
  },
  {
    id: "2",
    projectTitle: "Various React app fixes and improvements",
    rating: 5,
    dateRange: "Feb 17, 2025 – Jun 28, 2025",
    quote: "Have worked with Shahab on various projects now. Always responsive, clear communication, and solid code.",
    response: "Thank you!!! ✨✨",
    totalCost: "$1,787.49",
    hourlyRate: "$55.00/hr",
    totalHours: "32 hours",
  },
  {
    id: "3",
    projectTitle: "Integrate an AI-powered feature to my online course",
    rating: 5,
    dateRange: "Jan 10, 2025 – Jan 22, 2025",
    quote: "It was a pleasure working with Shahab! He is very responsive and delivered exactly what we needed.",
    totalCost: "$630.00",
    hourlyRate: "$35.00/hr",
    totalHours: "18 hours",
  },
  {
    id: "4",
    projectTitle: "Healthcare Patient AI MVP — Replit / React / Node / Neon",
    rating: 5,
    dateRange: "Jun 12, 2025 – Jul 1, 2025",
    quote: "Working with Shahab has been an absolute pleasure. He's hands-down one of the fastest and most skilled developers I've worked with.",
    totalCost: "$1,200.00",
    fixedPrice: true,
  },
];
