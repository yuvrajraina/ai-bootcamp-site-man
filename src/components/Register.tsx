import {
  registerSection,
  contact,
  buildMailto,
  buildSignupForm,
  buildWhatsApp
} from "@/lib/content";

export default function Register() {
  return (
    <section id="register" className="section-padding scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate">
              Register
            </p>
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
              {registerSection.title}
            </h2>
            <p className="text-base text-slate">{registerSection.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={buildSignupForm()}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-sapphire px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:shadow-glow focus-ring"
              >
                {registerSection.ctaPrimary}
              </a>
              <a
                href={buildWhatsApp()}
                className="rounded-full border border-slate/20 bg-white/90 px-6 py-3 text-base font-semibold text-slate transition hover:border-sapphire hover:text-sapphire focus-ring"
              >
                {registerSection.ctaSecondary}
              </a>
            </div>
            <p className="text-sm text-slate">{registerSection.reassurance}</p>
          </div>
          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-ink">Contact details</h3>
            <div className="mt-4 space-y-3 text-sm text-slate">
              <div className="rounded-2xl border border-white/40 bg-white/80 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
                  Email
                </p>
                <a
                  href={buildMailto()}
                  className="mt-1 block text-base font-semibold text-ink focus-ring"
                >
                  {contact.email}
                </a>
              </div>
              <div className="rounded-2xl border border-white/40 bg-white/80 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
                  WhatsApp
                </p>
                <a
                  href={buildWhatsApp()}
                  className="mt-1 block text-base font-semibold text-ink focus-ring"
                >
                  {contact.whatsappNumber}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
