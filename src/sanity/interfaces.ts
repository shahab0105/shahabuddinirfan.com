interface FeaturedWork {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  tags?: string[];
  description?: string;
  url?: string;
}
export type { FeaturedWork }