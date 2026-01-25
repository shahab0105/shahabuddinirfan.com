import { testimonialsData } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="mb-20">
      <h2 className="mb-2 text-2xl font-bold tracking-tight">Testimonials</h2>
      <p className="mb-8 text-[var(--text-muted)]">
        What clients say after shipping together.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {testimonialsData.map((t) => (
          <article
            key={t.id}
            className="rounded-2xl border border-[var(--bg-muted)] bg-[var(--bg-elevated)] p-5"
          >
            <h3 className="font-semibold text-[var(--text)]">{t.projectTitle}</h3>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>{i < t.rating ? "★" : "☆"}</span>
                ))}
              </div>
              {t.ratingCount != null && (
                <span className="text-sm text-[var(--text-muted)]">
                  {t.rating}.0 of {t.ratingCount} reviews
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-[var(--text-muted)]">{t.dateRange}</p>
            <blockquote className="mt-3 border-l-2 border-[var(--bg-muted)] pl-4 text-sm italic text-[var(--text-muted)]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            {t.response && (
              <p className="mt-3 text-sm text-[var(--text-muted)]">
                <span className="font-medium">Response: </span>
                {t.response}
              </p>
            )}
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
              {t.totalCost && <span>{t.totalCost}</span>}
              {t.hourlyRate && <span>{t.hourlyRate}</span>}
              {t.totalHours && <span>{t.totalHours}</span>}
              {t.fixedPrice && <span>Fixed price</span>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
