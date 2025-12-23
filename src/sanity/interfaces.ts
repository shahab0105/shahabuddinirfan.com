interface FeaturedWork {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  tags?: string[];
  description?: string;
  url?: string;
}
interface Service {
  _id: string;
  name: string;
  description?: string;
  timeline?: string;
  pricing?: string;
}
export type { FeaturedWork, Service }