import { programHighlights, outcomes, whoFor } from "@/lib/content";

export default function Highlights() {
  return (
    <section id="program" className="section-padding scroll-mt-24 bg-white/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate">
              Program Highlights
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-ink sm:text-4xl">
              Built for real-world AI builders
            </h2>
          </div>
          <p className="max-w-xl text-base text-slate">
            Hands-on sessions, weekly deliverables, and a clear portfolio outcome.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {programHighlights.map((item) => (
            <div key={item.title} className="glass rounded-3xl p-6">
              <div className="mb-4 h-10 w-10 rounded-2xl bg-sapphire/10" />
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-slate">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate/10 bg-white/80 p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-ink">Program outcomes</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate">
              {outcomes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sapphire" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate/10 bg-white/80 p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-ink">Who it is for</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate">
              {whoFor.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sapphire" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
