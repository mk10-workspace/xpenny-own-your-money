import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

import heroDark from "@/assets/app-hero-dark.png";
import heroLight from "@/assets/app-hero-light.png";
import transactionsDark from "@/assets/app-transactions-dark.png";
import transactionsLight from "@/assets/app-transactions-light.png";
import categoriesDark from "@/assets/app-categories-dark.png";
import categoriesLight from "@/assets/app-categories-light.png";
import accountsDark from "@/assets/app-accounts-dark.png";
import accountsLight from "@/assets/app-accounts-light.png";

export type PhoneVariant = "hero" | "transactions" | "categories" | "accounts";
type Theme = "dark" | "light";

interface PhoneMockupProps {
  variant?: PhoneVariant;
  theme?: Theme;
  className?: string;
}

const screenshots: Record<PhoneVariant, Record<Theme, { src: string; alt: string }>> = {
  hero: {
    dark: { src: heroDark, alt: "xPenny dashboard overview in dark mode" },
    light: { src: heroLight, alt: "xPenny dashboard overview in light mode" },
  },
  transactions: {
    dark: { src: transactionsDark, alt: "xPenny transactions in dark mode" },
    light: { src: transactionsLight, alt: "xPenny transactions in light mode" },
  },
  categories: {
    dark: { src: categoriesDark, alt: "xPenny categories in dark mode" },
    light: { src: categoriesLight, alt: "xPenny categories in light mode" },
  },
  accounts: {
    dark: { src: accountsDark, alt: "xPenny accounts in dark mode" },
    light: { src: accountsLight, alt: "xPenny accounts in light mode" },
  },
};

export function PhoneMockup({ variant = "hero", theme, className }: PhoneMockupProps) {
  const { theme: ctxTheme } = useTheme();
  const activeTheme = theme ?? ctxTheme;
  const shot = screenshots[variant][activeTheme];

  return (
    <div
      className={cn(
        "relative mx-auto aspect-[9/19] w-[280px] rounded-[2.75rem] border border-border bg-gradient-to-b from-surface-elevated to-surface p-2 shadow-[var(--shadow-elegant)]",
        className,
      )}
    >
      <div className="absolute inset-0 rounded-[2.75rem] ring-1 ring-inset ring-foreground/10" />
      <div className="absolute -inset-px rounded-[2.75rem] bg-gradient-to-b from-foreground/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] bg-background">
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
