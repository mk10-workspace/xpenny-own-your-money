import { Sparkles, Wifi, ShieldCheck } from "lucide-react";

import { PhoneMockup } from "./PhoneMockup";
import { StoreBadges } from "./StoreBadges";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 grain"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px] animate-pulse-glow" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 lg:grid-cols-2">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Personal finance, reimagined
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Take control of your{" "}
            <span className="text-gradient-emerald">spending & debts</span>.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0">
            xPenny blends elegant expense tracking with a powerful Debt & IOU hub. Lightning fast,
            offline-first, and obsessively private — never forget who owes who again.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-center lg:items-start lg:justify-start">
            <StoreBadges className="justify-center lg:justify-start" />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-muted-foreground lg:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <Wifi className="h-4 w-4 text-primary" /> Offline-first
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" /> End-to-end private
            </span>
          </div>
        </div>

        {/* Phone + floating cards */}
        <div className="relative mx-auto flex h-[560px] w-full max-w-md items-center justify-center lg:h-[640px]">
          {/* Halo */}
          <div className="absolute inset-0 -z-10 m-auto h-72 w-72 rounded-full bg-primary/30 blur-[100px]" />

          <div
            className="relative animate-float"
            style={{ transform: "rotate(-6deg)", ["--tw-rotate" as string]: "-6deg" }}
          >
            <PhoneMockup variant="hero" />
          </div>

          {/* Floating card 1: transaction */}
          <div className="absolute left-0 top-10 hidden sm:block animate-float-delayed">
            <div className="glass-strong w-56 rounded-2xl p-3 shadow-[var(--shadow-elegant)]">
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                New transaction
              </p>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    ☕
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold">Coffee</p>
                    <p className="text-[10px] text-muted-foreground">Today · 8:42 AM</p>
                  </div>
                </div>
                <span className="font-heading text-sm font-bold">−$4.20</span>
              </div>
            </div>
          </div>

          {/* Floating card 2: IOU */}
          <div className="absolute right-0 top-32 hidden sm:block animate-float-slow">
            <div className="glass-strong w-52 rounded-2xl p-3 shadow-[var(--shadow-elegant)]">
              <p className="text-[10px] font-medium uppercase tracking-wider text-primary">
                Alex owes you
              </p>
              <p className="mt-1 font-heading text-2xl font-bold">$25.00</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-[10px] font-bold text-white">
                  A
                </span>
                <span className="text-[10px] text-muted-foreground">Dinner split · Sat</span>
              </div>
            </div>
          </div>

          {/* Floating card 3: chart */}
          <div className="absolute bottom-4 right-6 hidden sm:block animate-float">
            <div className="glass-strong w-48 rounded-2xl p-3 shadow-[var(--shadow-elegant)]">
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                This month
              </p>
              <div className="mt-2 flex h-12 items-end gap-1">
                {[30, 55, 40, 70, 45, 85, 60].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary"
                  />
                ))}
              </div>
              <p className="mt-1 text-[10px] text-muted-foreground">↗ 12% vs last month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
