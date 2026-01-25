import { featuredWork } from "@/data/featuredWork";
import { FeaturedWorkCard } from "@/components/FeaturedWorkCard";

export function FeaturedWorkSection() {
  return (
    <section className="mb-20">
      <h2 className="mb-2 text-2xl font-bold tracking-tight">Featured Work</h2>
      <p className="mb-8 text-[var(--text-muted)]">
        Check out some of my favorite projects! Want to see more? Let&apos;s chat! ✨
      </p>
      <div className="grid gap-4 sm:grid-cols-1">
        {featuredWork.map((project) => (
          <FeaturedWorkCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
