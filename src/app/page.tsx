import { ThemeToggle } from "@/components/ThemeToggle";
import { HeroSection } from "@/sections/HeroSection";
import { FeaturedWorkSection } from "@/sections/FeaturedWorkSection";
import { SimplePricingSection } from "@/sections/SimplePricingSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <header className="fixed top-0 right-0 z-50 p-6">
        <ThemeToggle />
      </header>
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-8">
        <HeroSection />
        <FeaturedWorkSection />
        <SimplePricingSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}
