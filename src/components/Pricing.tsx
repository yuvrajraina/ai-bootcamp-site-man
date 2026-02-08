import { pricing, pricingNote, buildSignupForm } from "@/lib/content";

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate">
            Pricing
          </p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
            Choose your learning tier
          </h2>
          <p className="max-w-2xl text-base text-slate">
            Flexible options depending on the level of feedback and support you want.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricing.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl border border-slate/10 bg-white/80 p-6 shadow-soft ${
                tier.highlight ? "ring-2 ring-sapphire/50" : ""
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-sapphire px-3 py-1 text-xs font-semibold text-white">
                  {tier.highlight}
                </span>
              )}
              <h3 className="text-lg font-semibold text-ink">{tier.name}</h3>
              <p className="mt-2 text-3xl font-semibold text-ink">{tier.price}</p>
              <p className="mt-2 text-sm text-slate">{tier.description}</p>
              <ul className="mt-4 space-y-3 text-sm text-slate">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sapphire" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={buildSignupForm()}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-sapphire px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:shadow-glow focus-ring"
              >
                Sign Up Form
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate">{pricingNote}</p>
      </div>
    </section>
  );
}
