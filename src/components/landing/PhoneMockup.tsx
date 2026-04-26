import { cn } from "@/lib/utils";

import accountsDark from "@/assets/app-accounts-dark.png";
import accountsLight from "@/assets/app-accounts-light.png";
import categoriesDark from "@/assets/app-categories-dark.png";
import categoriesLight from "@/assets/app-categories-light.png";
import transactionsDark from "@/assets/app-transactions-dark.png";
import transactionsLight from "@/assets/app-transactions-light.png";

type Variant = "budget" | "debts" | "offline";
type Theme = "dark" | "light";

interface PhoneMockupProps {
  variant?: Variant;
  theme?: Theme;
  className?: string;
}

const screenshots: Record<Variant, Record<Theme, { src: string; alt: string }>> = {
  budget: {
    dark: {
      src: transactionsDark,
      alt: "xPenny transactions screen in dark mode showing net flow and recent activity",
    },
    light: {
      src: transactionsLight,
      alt: "xPenny transactions screen in light mode showing net flow and recent activity",
    },
  },
  debts: {
    dark: {
      src: categoriesDark,
      alt: "xPenny expense categories screen in dark mode with spending breakdown",
    },
    light: {
      src: categoriesLight,
      alt: "xPenny expense categories screen in light mode with spending breakdown",
    },
  },
  offline: {
    dark: {
      src: accountsDark,
      alt: "xPenny accounts screen in dark mode listing user accounts and balances",
    },
    light: {
      src: accountsLight,
      alt: "xPenny accounts screen in light mode listing user accounts and balances",
    },
  },
};

export function PhoneMockup({ variant = "budget", theme = "dark", className }: PhoneMockupProps) {
  const shot = screenshots[variant][theme];

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
