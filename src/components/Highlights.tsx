import { programHighlights, outcomes, whoFor } from "@/lib/content";
import DepthCard from "./DepthCard";
import { RevealGroup, RevealItem } from "./RevealGroup";

export default function Highlights() {
  const getContextBadge = (title: string) => {
    const words = title
      .split(" ")
      .map((word) => word.trim())
      .filter(Boolean);

    if (words.length === 1) {
      return words[0].slice(0, 2).toUpperCase();
    }

    return `${words[0][0]}${words[1][0]}`.toUpperCase();
  };

  return (
    <section id="program" className="section-padding scroll-mt-24 bg-white/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <RevealGroup className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <RevealItem>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate">
                Program Highlights
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-ink sm:text-4xl">
                Built for real-world AI builders
              </h2>
            </div>
          </RevealItem>
          <RevealItem>
            <p className="max-w-xl text-base text-slate">
              Hands-on sessions, weekly deliverables, and a clear portfolio outcome.
            </p>
          </RevealItem>
        </RevealGroup>

        <RevealGroup className="mt-10 grid gap-6 md:grid-cols-2">
          {programHighlights.map((item) => (
            <RevealItem key={item.title}>
              <DepthCard as="article" className="glass rounded-3xl p-6 fx-glow">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-sapphire/10 text-xs font-semibold text-sapphire">
                  {getContextBadge(item.title)}
                </div>
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-slate">{item.description}</p>
              </DepthCard>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-2">
          <RevealItem>
            <DepthCard
              as="article"
              className="rounded-3xl border border-slate/10 bg-white/80 p-6 shadow-soft fx-glow fx-parallax"
            >
              <h3 className="text-lg font-semibold text-ink">Program outcomes</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate">
                {outcomes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sapphire" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </DepthCard>
          </RevealItem>
          <RevealItem>
            <DepthCard
              as="article"
              className="rounded-3xl border border-slate/10 bg-white/80 p-6 shadow-soft fx-glow fx-parallax"
            >
              <h3 className="text-lg font-semibold text-ink">Who it is for</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate">
                {whoFor.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sapphire" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </DepthCard>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}