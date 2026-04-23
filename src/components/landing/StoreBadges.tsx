import { Apple, Play } from "lucide-react";

import { cn } from "@/lib/utils";

export function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <a
        href="#"
        aria-label="Download on the App Store"
        className="group inline-flex items-center gap-3 rounded-2xl border border-border bg-foreground/95 px-5 py-3 text-background transition-all hover:scale-[1.02] hover:bg-foreground"
      >
        <Apple className="h-7 w-7" />
        <span className="flex flex-col text-left leading-none">
          <span className="text-[10px] font-medium opacity-70">Download on the</span>
          <span className="font-heading text-lg font-semibold">App Store</span>
        </span>
      </a>
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
