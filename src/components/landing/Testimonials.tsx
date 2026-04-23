import { Star } from "lucide-react";

import { Reveal } from "./Reveal";

const quotes = [
  {
    quote:
      "Finally an app that handles the awful 'who paid for dinner' tracking without making me feel like an accountant.",
    name: "Maya R.",
    role: "Student, NYU",
    color: "from-emerald-400 to-teal-500",
  },
  {
    quote:
      "I open xPenny 5x a day. It's instant. No login screens, no spinners — just my money.",
    name: "Daniel K.",
    role: "Freelance designer",
    color: "from-amber-400 to-orange-500",
  },
  {
    quote:
      "My roommate group settles up once a month with one tap. Zero awkward Venmo conversations.",
    name: "Priya S.",
    role: "House organizer",
    color: "from-cyan-400 to-blue-500",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            People are <span className="text-gradient-emerald">obsessed</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 100}>
              <figure className="glass h-full rounded-2xl p-6">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-base text-foreground/90 leading-relaxed">
                  "{q.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${q.color} font-bold text-white`}
                  >
                    {q.name[0]}
                  </span>
                  <div className="leading-tight">
                    <p className="font-semibold">{q.name}</p>
                    <p className="text-xs text-muted-foreground">{q.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
