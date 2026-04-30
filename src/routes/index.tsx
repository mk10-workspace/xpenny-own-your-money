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

const SITE_URL = "https://xpenny.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "xPenny — Track Spending & Debts | Offline-First Finance App" },
      {
        name: "description",
        content:
          "xPenny is a blazing-fast, offline-first personal finance app. Track expenses, manage debts & IOUs, set budgets, and keep your money data private — no accounts, no ads, no tracking.",
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
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "xPenny — Track spending & debts, offline-first" },
      {
        name: "twitter:description",
        content:
          "Elegant expense tracking + a powerful Debt & IOU hub. Lightning fast, offline-first, obsessively private.",
      },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "xPenny",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Android, iOS",
          description:
            "Offline-first personal finance app for tracking expenses, debts and IOUs. Private, fast, and beautifully simple.",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            ratingCount: "128",
          },
          url: SITE_URL,
          image: `${SITE_URL}/og-image.png`,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "xPenny",
          url: SITE_URL,
        }),
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
