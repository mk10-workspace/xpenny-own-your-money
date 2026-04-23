import { Check, Users, Wallet, Zap } from "lucide-react";

import { PhoneMockup } from "./PhoneMockup";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const rows = [
  {
    icon: Wallet,
    eyebrow: "Smart expense tracking",
    title: "Every dollar, beautifully accounted for.",
    body: "Log transactions in seconds, see your top categories, and stay on top of your monthly budget without the spreadsheet stress.",
    bullets: [
      "One-tap transaction logging with categories",
      "Auto-grouped top expenses & insights",
      "Monthly budgets with live progress",
    ],
    variant: "budget" as const,
    flip: false,
  },
  {
    icon: Users,
    eyebrow: "Debt & IOU management",
    title: "Never forget who owes who.",
    body: "A dedicated Manage Persons hub tracks shared expenses and personal loans in real-time. Settle up with one tap when you're square.",
    bullets: [
      "Per-person balances updated instantly",
      "Track both directions: you owe & owed",
      "One-tap settle-up & history",
    ],
    variant: "debts" as const,
    flip: true,
  },
  {
    icon: Zap,
    eyebrow: "Lightning fast & offline-first",
    title: "Built on local SQLite. Zero lag.",
    body: "Your data lives on your device, so the app feels instant — even on the subway, on a plane, or in the middle of nowhere.",
    bullets: [
      "0ms reads from local SQLite database",
      "Works fully offline, syncs when online",
      "No spinners, no waiting — ever",
    ],
    variant: "offline" as const,
    flip: false,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            Features
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything you need.{" "}
            <span className="text-gradient-emerald">Nothing you don't.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            A focused toolkit for daily money — without the bloat of legacy banking apps.
          </p>
        </Reveal>

        <div className="mt-20 space-y-24 md:space-y-32">
          {rows.map((row) => {
            const Icon = row.icon;
            return (
              <Reveal
                key={row.eyebrow}
                className={cn(
                  "grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16",
                  row.flip && "lg:[&>*:first-child]:order-2",
                )}
              >
                {/* Visual */}
                <div className="relative">
                  <div className="absolute inset-0 -z-10 m-auto h-64 w-64 rounded-full bg-primary/20 blur-[80px]" />
                  <div className="glass-strong rounded-3xl p-6 sm:p-10">
                    <PhoneMockup variant={row.variant} />
                  </div>
                </div>

                {/* Copy */}
                <div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary ring-1 ring-primary/30">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {row.eyebrow}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                    {row.title}
                  </h3>
                  <p className="mt-4 text-base text-muted-foreground">{row.body}</p>
                  <ul className="mt-6 space-y-3">
                    {row.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/20 text-primary">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="text-sm text-foreground/90">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
