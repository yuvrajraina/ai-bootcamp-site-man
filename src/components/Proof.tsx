import { studentWins, testimonials, whatYouShip } from "@/lib/content";
import DepthCard from "./DepthCard";
import { RevealGroup, RevealItem } from "./RevealGroup";

export default function Proof() {
  return (
    <section className="section-padding bg-white/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate">
              Student wins
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-ink sm:text-4xl">
              Proof that students ship real outcomes
            </h2>
            <RevealGroup className="mt-8 grid gap-6 md:grid-cols-3">
              {studentWins.map((win) => (
                <RevealItem key={win.title}>
                  <DepthCard
                    as="article"
                    className="h-full rounded-3xl border border-slate/10 bg-white/90 p-5 shadow-soft fx-glow"
                  >
                    <div className="mb-4 overflow-hidden rounded-2xl border border-slate/15 bg-gradient-to-br from-skyglow/20 to-white">
                      <img
                        src={win.imageSrc}
                        alt={win.imageAlt}
                        className="aspect-video w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-ink">{win.title}</h3>
                    <p className="mt-2 text-sm text-slate">{win.detail}</p>
                    <p className="mt-4 text-sm font-semibold text-sapphire">{win.metric}</p>
                  </DepthCard>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate">
              Testimonials
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">
              What past mentees say
            </h3>
            <RevealGroup className="mt-6 grid gap-4 md:grid-cols-2">
              {testimonials.map((item) => (
                <RevealItem key={`${item.name}-${item.role}`}>
                  <DepthCard as="blockquote" className="glass rounded-3xl p-5 fx-glow">
                    <p className="text-sm leading-relaxed text-slate">"{item.quote}"</p>
                    <footer className="mt-4 text-sm font-semibold text-ink">
                      {item.name}
                      <span className="ml-2 text-xs font-medium uppercase tracking-[0.12em] text-slate">
                        {item.role}
                      </span>
                    </footer>
                  </DepthCard>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate">
              What you'll ship
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">
              Portfolio pieces built inside the cohort
            </h3>
            <RevealGroup className="mt-6 grid gap-6 md:grid-cols-3">
              {whatYouShip.map((project) => (
                <RevealItem key={project.title}>
                  <DepthCard
                    as="article"
                    className="h-full rounded-3xl border border-slate/10 bg-white/90 p-5 shadow-soft fx-glow"
                  >
                    <div className="mb-4 overflow-hidden rounded-2xl border border-slate/15 bg-gradient-to-tr from-sapphire/10 to-skyglow/25">
                      <img
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        className="aspect-video w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <p className="inline-flex rounded-full bg-sapphire/10 px-3 py-1 text-xs font-semibold text-sapphire">
                      {project.badge}
                    </p>
                    <h4 className="mt-3 text-lg font-semibold text-ink">{project.title}</h4>
                    <p className="mt-2 text-sm text-slate">{project.summary}</p>
                  </DepthCard>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}