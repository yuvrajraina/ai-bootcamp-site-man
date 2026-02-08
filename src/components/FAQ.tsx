import { faqs } from "@/lib/content";

export default function FAQ() {
  return (
    <section className="section-padding bg-white/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
            Answers before you enroll
          </h2>
        </div>

        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate/10 bg-white/90 p-5 shadow-soft"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-ink focus-ring">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm text-slate">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
