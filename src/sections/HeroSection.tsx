import { hero } from "@/data/hero";
import { SocialIcon } from "@/components/SocialIcons";
import { ProfileAvatar } from "@/components/ProfileAvatar";

export function HeroSection() {
  return (
    <section className="relative mb-20">
      <div className="relative mb-6 flex justify-center">
        <div className="relative">
          <ProfileAvatar src={hero.profileImage} name={hero.name} />
          <span className="absolute -right-2 -top-1 rounded-md border border-[var(--bg-muted)] bg-[var(--bg-elevated)] px-2 py-0.5 text-xs font-medium text-[var(--text-muted)]">
            That&apos;s me!
          </span>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{hero.name}</h1>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          {hero.badge}
        </span>
      </div>

      <p className="mb-4 text-xl text-[var(--text-muted)]">{hero.greeting}</p>
      <div className="mb-8 space-y-4 text-[var(--text-muted)]">
        {hero.bio.split("\n\n").map((p, i) => (
          <p key={i} className="leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex gap-3">
          {hero.links.map((link) => (
            <SocialIcon key={link.icon} icon={link.icon} href={link.href} label={link.label} />
          ))}
        </div>
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
    </section>
  );
}
