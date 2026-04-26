import {
  CloudUpload,
  Fingerprint,
  HandCoins,
  Languages,
  PiggyBank,
  Repeat,
  Search,
  Target,
} from "lucide-react";

import { Reveal } from "./Reveal";

const items = [
  {
    icon: HandCoins,
    title: "Debt & IOU ledger",
    body: 'Track "I owe" vs "I am owed" per person, with Borrow, Repay, Lend and Receive actions.',
  },
  {
    icon: PiggyBank,
    title: "Savings goals",
    body: "Goal-based savings accounts with progress tracking — for emergencies and dreams alike.",
  },
  {
    icon: Repeat,
    title: "Recurrence & reminders",
    body: "Schedule daily, weekly or monthly repeating transactions and never miss a bill.",
  },
  {
    icon: Target,
    title: "Smart budgeting",
    body: "Set monthly limits per category and watch budgeted vs spent update in real time.",
  },
  {
    icon: CloudUpload,
    title: "Encrypted cloud backup",
    body: "Optional Google Drive sync with end-to-end encryption — your data, your keys.",
  },
  {
    icon: Fingerprint,
    title: "Biometric lock",
    body: "Passcode and Face ID / fingerprint unlock to keep your finances private.",
  },
  {
    icon: Search,
    title: "Advanced search",
    body: "Find any transaction by title, note, amount or account in milliseconds.",
  },
  {
    icon: Languages,
    title: "Multi-currency",
    body: "Pick your default currency, customize formatting and define your week & month start.",
  },
];

export function FeatureGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Power features. <span className="text-gradient-emerald">Zero clutter.</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            From IOUs to recurring bills, xPenny handles the details so you can focus on the bigger
            picture.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 60}>
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
