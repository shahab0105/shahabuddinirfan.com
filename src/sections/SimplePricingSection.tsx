import { pricingData } from "@/data/pricing";
import { hero } from "@/data/hero";

export function SimplePricingSection() {
  return (
    <section className="mb-20">
      <h2 className="mb-2 text-2xl font-bold tracking-tight">Simple Pricing</h2>
      <p className="mb-6 text-[var(--text-muted)]">
        Clear prices for common services. Don&apos;t see what you need? Let&apos;s talk.
      </p>
      <div className="mb-8">
        <a
          href={hero.bookCallUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--bg-elevated)] px-4 py-2.5 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--bg-muted)]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Book a call
        </a>
      </div>

      {pricingData.map((category) => (
        <div key={category.title} className="mb-10">
          <div className="mb-4 flex items-center gap-2">
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                category.accent === "green" ? "bg-emerald-500/20 text-emerald-400" : "bg-orange-500/20 text-orange-400"
              }`}
            >
              {category.accent === "green" ? "🚀" : "🔧"}
            </span>
            <h3 className="text-lg font-semibold">{category.title}</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between gap-2 rounded-xl border border-[var(--bg-muted)] bg-[var(--bg-elevated)] p-4"
              >
                <div>
                  <h4 className="font-medium text-[var(--text)]">{item.name}</h4>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{item.timeframe}</p>
                </div>
                <span
                  className={`inline-flex w-fit rounded-full px-3 py-1 text-sm font-medium ${
                    category.accent === "green"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-orange-500/20 text-orange-400"
                  }`}
                >
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
