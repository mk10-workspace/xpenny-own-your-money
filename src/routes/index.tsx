import { createFileRoute } from "@tanstack/react-router";

import { FAQ } from "@/components/landing/FAQ";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { Features } from "@/components/landing/Features";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Nav } from "@/components/landing/Nav";
import { Security } from "@/components/landing/Security";
import { Steps } from "@/components/landing/Steps";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "xPenny — Track spending & debts, offline-first" },
      {
        name: "description",
        content:
          "Blazing-fast personal finance app combining expense tracking with debt & IOU management. Offline-first SQLite, biometric security, multi-language.",
      },
      {
        property: "og:title",
        content: "xPenny — Take control of your spending & debts",
      },
      {
        property: "og:description",
        content:
          "Elegant expense tracking + a powerful Debt & IOU hub. Lightning fast, offline-first, obsessively private.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "xPenny — Track spending & debts, offline-first" },
      {
        name: "twitter:description",
        content:
          "Elegant expense tracking + a powerful Debt & IOU hub. Lightning fast, offline-first, obsessively private.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <Features />
        <FeatureGrid />
        <Security />
        <Steps />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
