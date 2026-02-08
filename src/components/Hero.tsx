import { heroContent, outcomes, buildMailto, buildWhatsApp } from "@/lib/content";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:pb-24 lg:pt-20">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate">
            AI Bootcamp • 8 Weeks
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            {heroContent.headline}
          </h1>
          <p className="max-w-xl text-lg text-slate sm:text-xl">
            {heroContent.subheadline}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={buildMailto()}
              className="rounded-full bg-sapphire px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:shadow-glow focus-ring"
              aria-label="Register via email"
            >
              {heroContent.ctaPrimary}
            </a>
            <a
              href={buildWhatsApp()}
              className="rounded-full border border-slate/20 bg-white/80 px-6 py-3 text-base font-semibold text-slate transition hover:border-sapphire hover:text-sapphire focus-ring"
              aria-label="Chat on WhatsApp"
            >
              {heroContent.ctaSecondary}
            </a>
          </div>
          <p className="text-sm font-medium text-slate">{heroContent.note}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {outcomes.map((item) => (
              <div key={item} className="glass rounded-2xl px-4 py-3 text-sm text-slate">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-10 -top-10 hidden h-40 w-40 rounded-full bg-skyglow/40 blur-3xl lg:block" />
          <div className="relative h-[360px] w-full overflow-hidden rounded-3xl border border-white/40 bg-white/70 p-4 shadow-soft sm:h-[420px]">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
