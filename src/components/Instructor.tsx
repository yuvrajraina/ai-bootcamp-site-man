import { instructor } from "@/lib/content";
import DepthCard from "./DepthCard";
import { RevealGroup, RevealItem } from "./RevealGroup";

export default function Instructor() {
  return (
    <section id="about" className="section-padding scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <RevealGroup className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <RevealItem>
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate">
                Instructor
              </p>
              <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
                {instructor.name}
              </h2>
              <p className="text-lg text-slate">{instructor.title}</p>
              <p className="text-base text-slate">{instructor.bio}</p>
            </div>
          </RevealItem>

          <RevealItem>
            <DepthCard as="aside" className="glass rounded-3xl p-6 fx-glow fx-parallax">
              <h3 className="text-lg font-semibold text-ink">Why learn with Yuvraj</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate">
                {instructor.credibility.map((item) => (
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