import { Link } from "@tanstack/react-router";
import { Globe } from "lucide-react";

import logo from "@/assets/logo.webp";

type FooterLink = { label: string; to?: string; href?: string };

const cols: { title: string; links: FooterLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Security", href: "/#security" },
      { label: "Download", href: "/#download" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/30 py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img src={logo} alt="xPenny logo" className="h-9 w-9 rounded-xl" />
              <span className="font-heading text-lg font-bold tracking-tight">
                x<span className="text-gradient-emerald">Penny</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The blazing-fast personal finance app for tracking spending and IOUs — offline,
              private, and beautifully simple.
            </p>

            <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
              <Globe className="h-3.5 w-3.5" />
              English (US)
            </button>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading text-sm font-semibold">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.to ? (
                      <Link
                        to={l.to}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        href={l.href ?? "#"}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} xPenny. All rights reserved.</p>
          <p>Made with care for people who care about their money.</p>
        </div>
      </div>
    </footer>
  );
}
