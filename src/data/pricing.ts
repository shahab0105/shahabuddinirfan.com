export interface PricingItem {
  id: string;
  name: string;
  timeframe: string;
  price: string;
}

export interface PricingCategory {
  title: string;
  accent: "green" | "orange";
  items: PricingItem[];
}

export const pricingData: PricingCategory[] = [
  {
    title: "Full Projects",
    accent: "green",
    items: [
      { id: "fp1", name: "Landing Page", timeframe: "1–2 weeks", price: "$300–1,000" },
      { id: "fp2", name: "Web App (MVP)", timeframe: "3–6 weeks", price: "$2,000–4,000" },
      { id: "fp3", name: "Mobile App (MVP)", timeframe: "4–8 weeks", price: "$2,500–5,000" },
      { id: "fp4", name: "SaaS Product", timeframe: "2–4 months", price: "$3,000–6,000" },
      { id: "fp5", name: "Dashboard / Analytics", timeframe: "2–4 weeks", price: "$2,500–5,000" },
      { id: "fp6", name: "API Development", timeframe: "1–3 weeks", price: "$1,000–3,000" },
    ],
  },
  {
    title: "Quick Fixes",
    accent: "orange",
    items: [
      { id: "qf1", name: "Critical Bug Fix", timeframe: "Same day", price: "$100–200" },
      { id: "qf2", name: "Performance Optimization", timeframe: "2–3 days", price: "$300–500" },
      { id: "qf3", name: "Security Patch", timeframe: "1–2 days", price: "$100–200" },
      { id: "qf4", name: "Database Fix", timeframe: "1–2 days", price: "$300–500" },
      { id: "qf5", name: "API Integration Fix", timeframe: "1–2 days", price: "$100–200" },
      { id: "qf6", name: "Responsive Design Fix", timeframe: "Same day", price: "$50–100" },
    ],
  },
];
