import { Download, PieChart, Users } from "lucide-react";

import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    icon: Download,
    title: "Download xPenny",
    body: "Grab it from the App Store or Google Play. No account required to start.",
  },
  {
    n: "02",
    icon: Users,
    title: "Add expenses & people",
    body: "Log transactions in seconds and add friends to track shared bills and IOUs.",
  },
  {
    n: "03",
    icon: PieChart,
    title: "See where your money goes",
    body: "Beautiful insights, real-time balances, and zero-stress monthly budgets.",
  },
];

export function Steps() {
  return (
    <section id="how" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            How it works
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Up and running in under a minute.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* Dotted connector */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden md:block"
            style={{
              height: 1,
              backgroundImage:
                "linear-gradient(to right, var(--primary) 50%, transparent 50%)",
              backgroundSize: "12px 1px",
              opacity: 0.4,
            }}
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.n} delay={i * 120}>
                  <div className="glass-strong relative h-full rounded-2xl p-6">
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-[0_8px_24px_-8px_var(--primary)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-heading text-3xl font-bold text-primary/30">
                        {s.n}
                      </span>
                    </div>
                    <h3 className="mt-5 font-heading text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
