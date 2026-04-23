import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Is xPenny free?",
    a: "Yes — the core app is completely free. We may offer a small optional Pro tier in the future for power users, but expense tracking and IOU management will always be free.",
  },
  {
    q: "Does my data sync between devices?",
    a: "xPenny is offline-first and stores everything locally on your device. Optional encrypted backup and multi-device sync are on the roadmap and will always be opt-in.",
  },
  {
    q: "Which platforms is it available on?",
    a: "iOS and Android, available on the App Store and Google Play. Both versions are fully feature-parity.",
  },
  {
    q: "How is my data stored?",
    a: "Inside an encrypted SQLite database on your device. Nothing is sent to a server unless you explicitly export it. Even we can't see your transactions.",
  },
  {
    q: "Can I export my data?",
    a: "Absolutely. Export to CSV or JSON anytime — your data is yours. No vendor lock-in, ever.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            FAQ
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Questions, answered.
          </h2>
        </Reveal>

        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="glass rounded-2xl px-6">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className={i === faqs.length - 1 ? "border-b-0" : ""}
              >
                <AccordionTrigger className="font-heading text-base font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
