import { syllabus } from "@/lib/content";
import DepthCard from "./DepthCard";
import { RevealGroup, RevealItem } from "./RevealGroup";

export default function Syllabus() {
  return (
    <section id="syllabus" className="section-padding scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <RevealGroup className="flex flex-col gap-3">
          <RevealItem>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate">
              Syllabus
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
              8-week timeline with weekly deliverables
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="max-w-2xl text-base text-slate">
              Two sessions per week with a clear deliverable to keep momentum and ship projects.
            </p>
          </RevealItem>
        </RevealGroup>

        <RevealGroup className="mt-10 grid gap-6 lg:grid-cols-2">
          {syllabus.map((week) => (
            <RevealItem key={week.week}>
              <DepthCard
                as="article"
                className="relative rounded-3xl border border-slate/10 bg-white/80 p-6 shadow-soft fx-glow"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
                    {week.week}
                  </span>
                  <span className="rounded-full bg-sapphire/10 px-3 py-1 text-xs font-semibold text-sapphire">
                    Deliverable
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-ink">{week.title}</h3>
                <div className="mt-4 grid gap-4">
                  {week.sessions.map((session) => (
                    <div key={session.title} className="rounded-2xl bg-white/90 p-4">
                      <p className="text-sm font-semibold text-ink">{session.title}</p>
                      <ul className="mt-2 space-y-1 text-sm text-slate">
                        {session.topics.map((topic) => (
                          <li key={topic} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sapphire" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl border border-sapphire/20 bg-sapphire/5 px-4 py-3 text-sm text-slate">
                  {week.deliverable}
                </div>
              </DepthCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}