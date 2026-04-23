const marks = ["ProductHunt", "TechCrunch", "Wired", "The Verge", "FastCo"];

export function SocialProof() {
  return (
    <section className="border-y border-border/60 bg-surface/40 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Loved by students & young professionals
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-60">
          {marks.map((m) => (
            <span
              key={m}
              className="font-heading text-base font-semibold tracking-tight text-muted-foreground sm:text-lg"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
