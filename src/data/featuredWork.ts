export interface FeaturedWorkItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  type: string;
  url?: string;
  githubUrl?: string;
  icon: "heart" | "sunset" | "waves" | "circle" | "chart" | "code";
}

export const featuredWork: FeaturedWorkItem[] = [
  {
    id: "1",
    title: "Invozio",
    description: "Swedish payments platform — end-to-end integration, reporting, and reconciliation.",
    tags: ["React", "Next.js", "Tailwind", "Stripe", "Vercel"],
    type: "Freelance Development",
    url: "https://invozio.com",
    icon: "heart",
  },
  {
    id: "2",
    title: "SeekInvest",
    description: "US-based investment platform with portfolio tracking and analytics.",
    tags: ["React", "Next.js", "Tailwind", "Figma", "Vercel"],
    type: "Freelance Development",
    url: "https://seekinvest.com",
    icon: "sunset",
  },
  {
    id: "3",
    title: "Virusgeeks",
    description: "Real-time COVID SaaS backend with dashboards and data pipelines.",
    tags: ["React", "Material UI", "JavaScript", "TypeScript", "API Integration", "Figma"],
    type: "Job Development",
    url: "https://virusgeeks.com",
    icon: "waves",
  },
  {
    id: "4",
    title: "RAG CLI Chatbot",
    description: "Personal knowledge assistant with embeddings and vector search.",
    tags: ["JavaScript", "TypeScript", "Node", "OpenAI", "Pinecone"],
    type: "Side Project",
    githubUrl: "https://github.com/shahab0105/rag-cli",
    icon: "code",
  },
  {
    id: "5",
    title: "E-commerce Admin",
    description: "Multi-tenant admin systems for inventory, orders, and analytics.",
    tags: ["React", "Python", "AWS", "SaaS", "Tailwind", "Chart.js", "Stripe"],
    type: "Job Development",
    icon: "chart",
  },
];
