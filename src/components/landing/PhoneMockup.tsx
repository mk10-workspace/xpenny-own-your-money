import { cn } from "@/lib/utils";

import transactionsDark from "@/assets/app-transactions-dark.png";
import transactionsLight from "@/assets/app-transactions-light.png";

type Variant = "budget" | "debts" | "offline";
type Theme = "dark" | "light";

interface PhoneMockupProps {
  variant?: Variant;
  theme?: Theme;
  className?: string;
}

const screenshots: Record<Theme, { src: string; alt: string }> = {
  dark: {
    src: transactionsDark,
    alt: "xPenny dashboard in dark mode showing Net Flow, inflow/outflow and transactions tab",
  },
  light: {
    src: transactionsLight,
    alt: "xPenny dashboard in light mode showing Net Flow, inflow/outflow and transactions tab",
  },
};

export function PhoneMockup({ theme = "dark", className }: PhoneMockupProps) {
  const shot = screenshots[theme];

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
          className="h-full w-full object-top object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}
