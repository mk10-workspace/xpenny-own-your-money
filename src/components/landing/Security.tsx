import { EyeOff, Lock, ShieldCheck } from "lucide-react";

import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: HardDriveIcon,
    title: "Local-first storage",
    body: "Everything stays on your device in an encrypted SQLite database. No cloud required.",
  },
  {
    icon: Lock,
    title: "Biometric lock",
    body: "Unlock with FaceID or TouchID. Your finances stay private even if your phone doesn't.",
  },
  {
    icon: EyeOff,
    title: "Zero tracking",
    body: "No ads. No analytics on your spending. We literally have nothing to sell.",
  },
];

function HardDriveIcon(props: React.SVGProps<SVGSVGElement>) {
  // Re-export as a concrete component for the array typing
  return <ShieldCheck {...props} />;
}

export function Security() {
  return (
    <section id="security" className="relative py-24 md:py-32">
      {/* Background lock pattern */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0.96 0.02 95) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="mx-auto max-w-5xl px-4">
        <Reveal className="text-center">
          <span className="relative mx-auto inline-flex h-20 w-20 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
            <span className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-[var(--shadow-glow)]">
              <ShieldCheck className="h-9 w-9" strokeWidth={2.2} />
            </span>
          </span>

          <h2 className="mt-8 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Your money. Your data. <span className="text-gradient-emerald">Period.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            xPenny is built privacy-first. Your transactions never leave your device unless you
            explicitly export them.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 100}>
                <div className="glass h-full rounded-2xl p-6 text-center md:text-left">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
