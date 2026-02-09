import { buildWhatsApp } from "@/lib/content";

export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 mx-auto flex w-[92%] gap-3 rounded-full border border-white/50 bg-white/90 p-2 shadow-soft backdrop-blur md:hidden">
      <a
        href="#apply"
        className="flex-1 rounded-full bg-sapphire px-4 py-3 text-center text-sm font-semibold text-white focus-ring"
        aria-label="Apply"
      >
        Apply
      </a>
      <a
        href={buildWhatsApp()}
        className="flex-1 rounded-full border border-slate/20 bg-white px-4 py-3 text-center text-sm font-semibold text-slate focus-ring"
        aria-label="Chat on WhatsApp"
      >
        WhatsApp
      </a>
    </div>
  );
}