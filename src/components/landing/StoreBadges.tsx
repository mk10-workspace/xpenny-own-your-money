import { Apple, Play } from "lucide-react";

import { cn } from "@/lib/utils";

export function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <div
        aria-label="iOS coming soon"
        className="group relative inline-flex cursor-not-allowed items-center gap-3 rounded-2xl border border-border bg-foreground/95 px-5 py-3 text-background opacity-70"
      >
        <Apple className="h-7 w-7" />
        <span className="flex flex-col text-left leading-none">
          <span className="text-[10px] font-medium opacity-70">Coming soon to</span>
          <span className="font-heading text-lg font-semibold">App Store</span>
        </span>
        <span className="absolute -right-2 -top-2 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-primary-foreground shadow-md">
          Soon
        </span>
      </div>
      <a
        href="#"
        aria-label="Get it on Google Play"
        className="group inline-flex items-center gap-3 rounded-2xl border border-border bg-foreground/95 px-5 py-3 text-background transition-all hover:scale-[1.02] hover:bg-foreground"
      >
        <Play className="h-6 w-6 fill-current" />
        <span className="flex flex-col text-left leading-none">
          <span className="text-[10px] font-medium opacity-70">GET IT ON</span>
          <span className="font-heading text-lg font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
