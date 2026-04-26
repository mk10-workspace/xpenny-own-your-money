import { Check, LayoutDashboard, Users, Sun, Moon } from "lucide-react";
import { useState } from "react";

import { PhoneMockup } from "./PhoneMockup";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const rows = [
  {
    icon: LayoutDashboard,
    eyebrow: "Dashboard & transactions",
    title: "Every dollar, beautifully accounted for.",
    body: "Track Expenses, Income, Transfers and Debts in seconds. See your net flow, top categories and monthly progress without the spreadsheet stress.",
    bullets: [
      "Four transaction types: Expense, Income, Transfer, Debt",
      "Real-time net worth, inflow & outflow",
      "Monthly budgets with live progress",
      "Recurring transactions and reminders",
    ],
    variant: "budget" as const,
    flip: false,
  },
  {
    icon: Users,
    eyebrow: "Categories & accounts",
    title: "Organize spending. Master your accounts.",
    body: "Custom categories with unique icons and colors. Manage Regular, Debt and Savings accounts — including credit cards, loans and goal-based emergency funds.",
    bullets: [
      "Fully customizable categories & subcategories",
      "Regular, Debt and Savings account types",
      "Goal tracking on savings accounts",
      "Multi-currency with custom formatting",
    ],
    variant: "debts" as const,
    flip: true,
  },
  {
    icon: Sun,
    eyebrow: "Yours, in any light",
    title: "Built on local SQLite. Beautiful in every theme.",
    body: "Your data lives on your device — encrypted, instant, and yours alone. Switch between dark, light, and system themes without losing a beat.",
    bullets: [
      "Offline-first, encrypted local SQLite database",
      "Dark, Light and system-default themes",
      "Optional Google Drive backup & multi-device sync",
      "Export transactions to CSV anytime",
    ],
    variant: "offline" as const,
    flip: false,
  },
];

export function Features() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

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

          {/* Theme toggle */}
          <div
            className="mx-auto mt-8 inline-flex items-center gap-1 rounded-full border border-border bg-surface/60 p-1 backdrop-blur"
            role="tablist"
            aria-label="App theme preview"
          >
            <Button
              type="button"
              size="sm"
              variant={theme === "dark" ? "default" : "ghost"}
              onClick={() => setTheme("dark")}
              className={cn(
                "rounded-full px-4",
                theme === "dark" && "bg-primary text-primary-foreground hover:bg-primary/90",
              )}
              role="tab"
              aria-selected={theme === "dark"}
            >
              <Moon className="mr-1.5 h-3.5 w-3.5" />
              Dark
            </Button>
            <Button
              type="button"
              size="sm"
              variant={theme === "light" ? "default" : "ghost"}
              onClick={() => setTheme("light")}
              className={cn(
                "rounded-full px-4",
                theme === "light" && "bg-primary text-primary-foreground hover:bg-primary/90",
              )}
              role="tab"
              aria-selected={theme === "light"}
            >
              <Sun className="mr-1.5 h-3.5 w-3.5" />
              Light
            </Button>
          </div>
        </Reveal>

        <div className="mt-16 space-y-24 md:space-y-32">
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
                    <PhoneMockup variant={row.variant} theme={theme} />
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
