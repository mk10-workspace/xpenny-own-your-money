import { StoreBadges } from "./StoreBadges";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="download" className="px-4 py-16 md:py-24">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/25 via-primary/10 to-transparent p-8 sm:p-12 md:p-16">
          {/* Glow */}
          <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-primary/30 blur-[120px]" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-primary-glow/20 blur-[120px]" />

          <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Start tracking in <span className="text-gradient-emerald">60 seconds</span>.
              </h2>
              <p className="mt-4 max-w-md text-base text-muted-foreground">
                No account required to start. Download xPenny and your first transaction is one
                tap away.
              </p>
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Free · iOS & Android · Offline-first
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 md:items-end">
              <StoreBadges />
              <p className="text-xs text-muted-foreground">No account required to start.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
