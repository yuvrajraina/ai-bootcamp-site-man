import { cohortInfo, pricingOffer, heroContent, buildWhatsApp } from "@/lib/content";
import DepthCard from "./DepthCard";
import { RevealGroup, RevealItem } from "./RevealGroup";

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <RevealGroup className="flex flex-col gap-3">
          <RevealItem>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate">
              Pricing
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
              {pricingOffer.headline}
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="max-w-2xl text-base text-slate">{pricingOffer.reassurance}</p>
          </RevealItem>
        </RevealGroup>

        <RevealGroup className="mt-10">
          <RevealItem>
            <DepthCard
              as="div"
              className="rounded-3xl border border-slate/10 bg-white/90 p-6 shadow-soft sm:p-8 fx-glow"
            >
              <p className="rounded-2xl border border-sapphire/25 bg-sapphire/10 px-4 py-3 text-center text-lg font-semibold text-sapphire sm:text-xl">
                {pricingOffer.supportingLine}
              </p>

              <RevealGroup className="mt-6 space-y-4">
                {cohortInfo.map((item) => (
                  <RevealItem key={item.label}>
                    <div className="rounded-2xl border border-slate/10 bg-white/95 px-4 py-4 sm:flex sm:items-start sm:justify-between sm:gap-6">
                      <dt className="text-sm font-semibold uppercase tracking-[0.08em] text-slate">
                        {item.label}
                      </dt>
                      <dd className="mt-2 text-base font-medium text-ink sm:mt-0 sm:text-right">
                        {item.value}
                      </dd>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center rounded-full bg-sapphire px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:shadow-glow focus-ring"
                >
                  {heroContent.ctaPrimary}
                </a>
                <a
                  href={buildWhatsApp()}
                  className="inline-flex items-center justify-center rounded-full border border-slate/20 bg-white px-6 py-3 text-sm font-semibold text-slate transition hover:border-sapphire hover:text-sapphire focus-ring"
                >
                  {heroContent.ctaSecondary}
                </a>
              </div>
            </DepthCard>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}