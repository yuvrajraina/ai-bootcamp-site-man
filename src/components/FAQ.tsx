import { faqs } from "@/lib/content";
import DepthCard from "./DepthCard";
import { RevealGroup, RevealItem } from "./RevealGroup";

export default function FAQ() {
  return (
    <section className="section-padding bg-white/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <RevealGroup className="flex flex-col gap-3">
          <RevealItem>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate">
              FAQ
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
              Answers before you enroll
            </h2>
          </RevealItem>
        </RevealGroup>

        <RevealGroup className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <RevealItem key={faq.question}>
              <DepthCard
                as="details"
                className="group rounded-2xl border border-slate/10 bg-white/90 p-5 shadow-soft fx-glow"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-ink focus-ring">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-slate">{faq.answer}</p>
              </DepthCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}