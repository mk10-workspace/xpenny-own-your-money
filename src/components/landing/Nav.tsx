import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

import logo from "@/assets/logo.webp";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const links = [
  { href: "#features", label: "Features" },
  { href: "#security", label: "Security" },
  { href: "#how", label: "How it works" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300",
            scrolled ? "glass-strong shadow-[var(--shadow-elegant)]" : "glass",
          )}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="xPenny logo"
              className="h-9 w-9 rounded-xl shadow-[0_8px_24px_-8px_var(--primary)]"
            />
            <span className="font-heading text-lg font-bold tracking-tight">
              x<span className="text-gradient-emerald">Penny</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Button
              asChild
              size="sm"
              className="rounded-full bg-primary px-5 font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_var(--primary)] hover:bg-primary-glow"
            >
              <a href="#download">Get the app</a>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground/80"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <Button
                asChild
                size="sm"
                className="mt-2 rounded-full bg-primary font-semibold text-primary-foreground"
              >
                <a href="#download" onClick={() => setOpen(false)}>
                  Get the app
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
