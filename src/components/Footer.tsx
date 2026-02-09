import { footer, contact, buildMailto, buildWhatsApp } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-slate/10 bg-white/70 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-base font-semibold text-ink">{footer.note}</p>
          <p className="text-sm text-slate">(c) 2026</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate">
          <a href={buildMailto()} className="focus-ring">
            {footer.emailLabel}: {contact.email}
          </a>
          <a
            href={contact.linkedinLink}
            target="_blank"
            rel="noreferrer"
            className="focus-ring"
          >
            {footer.linkedinLabel}
          </a>
          <a href={buildWhatsApp()} className="focus-ring">
            {footer.whatsappLabel}: {contact.whatsappNumber}
          </a>
        </div>
      </div>
    </footer>
  );
}
