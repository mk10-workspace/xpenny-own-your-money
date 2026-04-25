import { cn } from "@/lib/utils";

import accountsShot from "@/assets/app-accounts.png";
import categoriesShot from "@/assets/app-categories.png";
import transactionsShot from "@/assets/app-transactions.png";

interface PhoneMockupProps {
  variant?: "budget" | "debts" | "offline";
  className?: string;
}

const screenshots: Record<NonNullable<PhoneMockupProps["variant"]>, { src: string; alt: string }> =
  {
    budget: { src: transactionsShot, alt: "App transactions screen showing net flow and recent activity" },
    debts: { src: categoriesShot, alt: "App expense categories screen with spending breakdown" },
    offline: { src: accountsShot, alt: "App accounts screen listing user accounts and balances" },
  };

export function PhoneMockup({ variant = "budget", className }: PhoneMockupProps) {
  const shot = screenshots[variant];

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

        <img
          src={shot.src}
          alt={shot.alt}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
      </div>
    </div>
  );
}
