import { ArrowDownRight, ArrowUpRight, Coffee, ShoppingBag, Utensils } from "lucide-react";

import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  variant?: "budget" | "debts" | "offline";
  className?: string;
}

export function PhoneMockup({ variant = "budget", className }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[9/19] w-[280px] rounded-[2.75rem] border border-border bg-gradient-to-b from-surface-elevated to-surface p-2 shadow-[var(--shadow-elegant)]",
        className,
      )}
    >
      {/* Frame highlight */}
      <div className="absolute inset-0 rounded-[2.75rem] ring-1 ring-inset ring-foreground/10" />
      <div className="absolute -inset-px rounded-[2.75rem] bg-gradient-to-b from-foreground/10 via-transparent to-transparent pointer-events-none" />

      {/* Screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] bg-background">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />

        {/* Status bar */}
        <div className="relative z-10 flex items-center justify-between px-6 pt-2 text-[10px] font-semibold text-foreground/80">
          <span>9:41</span>
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/60" />
            <span className="h-1.5 w-2.5 rounded-sm bg-foreground/60" />
          </span>
        </div>

        {variant === "budget" && <BudgetScreen />}
        {variant === "debts" && <DebtsScreen />}
        {variant === "offline" && <OfflineScreen />}
      </div>
    </div>
  );
}

function BudgetScreen() {
  return (
    <div className="relative h-full px-5 pt-10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">November</p>
          <h3 className="font-heading text-base font-semibold">Budget</h3>
        </div>
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary-glow" />
      </div>

      {/* Big number */}
      <div className="mt-6 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-4">
        <p className="text-[10px] text-muted-foreground">Spent this month</p>
        <p className="mt-1 font-heading text-3xl font-bold tracking-tight">$1,284</p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-foreground/10">
          <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-primary to-primary-glow" />
        </div>
        <p className="mt-2 text-[10px] text-muted-foreground">$716 left of $2,000 budget</p>
      </div>

      {/* Top expenses */}
      <p className="mt-5 mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        Top expenses
      </p>
      <div className="space-y-2">
        <Row icon={<Utensils className="h-3.5 w-3.5" />} label="Dining" amount="$324" />
        <Row icon={<ShoppingBag className="h-3.5 w-3.5" />} label="Shopping" amount="$218" />
        <Row icon={<Coffee className="h-3.5 w-3.5" />} label="Coffee" amount="$84" />
      </div>
    </div>
  );
}

function Row({
  icon,
  label,
  amount,
}: {
  icon: React.ReactNode;
  label: string;
  amount: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-foreground/5 px-3 py-2">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
          {icon}
        </span>
        <span className="text-xs font-medium">{label}</span>
      </div>
      <span className="font-heading text-xs font-semibold">{amount}</span>
    </div>
  );
}

function DebtsScreen() {
  const people = [
    { name: "Alex", amount: "+$25.00", owes: false, color: "from-emerald-400 to-teal-500" },
    { name: "Sam", amount: "−$12.50", owes: true, color: "from-amber-400 to-orange-500" },
    { name: "Jordan", amount: "+$48.00", owes: false, color: "from-cyan-400 to-blue-500" },
    { name: "Riley", amount: "−$6.20", owes: true, color: "from-pink-400 to-rose-500" },
  ];
  return (
    <div className="relative h-full px-5 pt-10">
      <div>
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Manage</p>
        <h3 className="font-heading text-base font-semibold">Persons</h3>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-primary/15 p-3">
          <p className="text-[10px] text-muted-foreground">You're owed</p>
          <p className="font-heading text-lg font-bold text-primary">$73.00</p>
        </div>
        <div className="rounded-xl bg-foreground/5 p-3">
          <p className="text-[10px] text-muted-foreground">You owe</p>
          <p className="font-heading text-lg font-bold">$18.70</p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {people.map((p) => (
          <div
            key={p.name}
            className="flex items-center justify-between rounded-xl bg-foreground/5 px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br text-[10px] font-bold text-white",
                  p.color,
                )}
              >
                {p.name[0]}
              </span>
              <div className="leading-tight">
                <p className="text-xs font-medium">{p.name}</p>
                <p className="text-[9px] text-muted-foreground">
                  {p.owes ? "You owe" : "Owes you"}
                </p>
              </div>
            </div>
            <span
              className={cn(
                "font-heading text-xs font-semibold",
                p.owes ? "text-amber-400" : "text-primary",
              )}
            >
              {p.amount}
            </span>
          </div>
        ))}
      </div>

      <button className="mt-3 w-full rounded-xl bg-gradient-to-r from-primary to-primary-glow py-2 text-xs font-semibold text-primary-foreground">
        Settle up
      </button>
    </div>
  );
}

function OfflineScreen() {
  return (
    <div className="relative h-full px-5 pt-10">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
        <p className="text-[10px] font-medium text-primary">Local · Offline ready</p>
      </div>
      <h3 className="mt-2 font-heading text-base font-semibold">This week</h3>

      {/* Mini bar chart */}
      <div className="mt-4 flex h-32 items-end justify-between gap-1.5">
        {[40, 65, 30, 80, 55, 90, 45].map((h, i) => (
          <div key={i} className="flex-1">
            <div
              style={{ height: `${h}%` }}
              className="w-full rounded-t-md bg-gradient-to-t from-primary/30 to-primary"
            />
          </div>
        ))}
      </div>
      <div className="mt-1 flex justify-between text-[9px] text-muted-foreground">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <span key={i} className="flex-1 text-center">
            {d}
          </span>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-foreground/5 p-3">
          <p className="text-[9px] text-muted-foreground">Read latency</p>
          <p className="font-heading text-base font-bold text-primary">0ms</p>
        </div>
        <div className="rounded-xl bg-foreground/5 p-3">
          <p className="text-[9px] text-muted-foreground">Sync</p>
          <p className="font-heading text-base font-bold">Local</p>
        </div>
      </div>

      <div className="mt-3 space-y-1.5">
        <div className="flex items-center justify-between rounded-lg bg-primary/10 px-3 py-1.5 text-[10px]">
          <span className="flex items-center gap-1.5 text-primary">
            <ArrowUpRight className="h-3 w-3" /> Salary
          </span>
          <span className="font-semibold">+$3,200</span>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-foreground/5 px-3 py-1.5 text-[10px]">
          <span className="flex items-center gap-1.5 text-amber-400">
            <ArrowDownRight className="h-3 w-3" /> Rent
          </span>
          <span className="font-semibold">−$1,100</span>
        </div>
      </div>
    </div>
  );
}
