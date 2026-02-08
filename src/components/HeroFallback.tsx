export default function HeroFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-white/80">
      <div className="absolute -top-10 left-8 h-40 w-40 rounded-full bg-skyglow/50 blur-3xl" />
      <div className="absolute bottom-0 right-6 h-32 w-32 rounded-full bg-sapphire/20 blur-2xl" />
      <div className="relative z-10 flex flex-col items-center gap-2 text-center">
        <div className="text-sm font-semibold uppercase tracking-[0.3em] text-slate">
          AI FLOW
        </div>
        <div className="h-20 w-20 rounded-2xl border border-white/60 bg-gradient-to-br from-white via-skyglow/40 to-sapphire/20 shadow-soft" />
        <p className="max-w-[180px] text-xs text-slate">
          Ambient neural patterns loading
        </p>
      </div>
    </div>
  );
}
