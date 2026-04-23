import { Fingerprint, Globe, HardDrive, KeyRound } from "lucide-react";

import { Reveal } from "./Reveal";

const items = [
  {
    icon: Globe,
    title: "Multi-language",
    body: "Localized out of the box for global users. Switch languages in one tap.",
  },
  {
    icon: Fingerprint,
    title: "Biometric lock",
    body: "FaceID and TouchID protect your finances every time you open the app.",
  },
  {
    icon: KeyRound,
    title: "Google sign-in",
    body: "Optional Google authentication for fast, secure account access.",
  },
  {
    icon: HardDrive,
    title: "Local-only data",
    body: "Your data lives on your device. We can't read it because we never store it.",
  },
];

export function FeatureGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group glass h-full rounded-2xl p-6 transition-all hover:border-primary/40 hover:bg-surface/70">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
