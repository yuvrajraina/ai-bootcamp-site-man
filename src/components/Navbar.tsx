import { navItems, heroContent, buildMailto, buildWhatsApp } from "@/lib/content";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="text-lg font-semibold tracking-tight text-ink">
          AI Bootcamp
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-ink focus-ring rounded"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={buildWhatsApp()}
            className="rounded-full border border-slate/20 px-4 py-2 text-sm font-semibold text-slate transition hover:border-sapphire hover:text-sapphire focus-ring"
            aria-label="Chat on WhatsApp"
          >
            {heroContent.ctaSecondary}
          </a>
          <a
            href={buildMailto()}
            className="rounded-full bg-sapphire px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:shadow-glow focus-ring"
            aria-label="Register via email"
          >
            {heroContent.ctaPrimary}
          </a>
        </div>
      </div>
    </header>
  );
}
