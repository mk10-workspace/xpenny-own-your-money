import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, FileText } from "lucide-react";

import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — xPenny" },
      {
        name: "description",
        content:
          "The terms and conditions governing your use of the xPenny mobile app — local-first finance tracking by oneByte / Mustak.",
      },
      { property: "og:title", content: "Terms & Conditions — xPenny" },
      {
        property: "og:description",
        content: "Read the terms that govern your use of the xPenny mobile application.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[480px] w-[860px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-3xl px-4 pb-24 pt-32 md:pt-40">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="mt-8 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-[0_8px_24px_-8px_var(--primary)]">
            <FileText className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs uppercase tracking-widest text-primary">Legal</p>
            <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Terms &amp; Conditions
            </h1>
          </div>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Effective Date:</span> April 24, 2026
        </p>

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
          Welcome to xPenny! These Terms and Conditions ("Terms") govern your use of the xPenny
          mobile application (the "App"), developed and operated by oneByte / Mustak ("we," "us,"
          or "our"). By downloading, installing, or using the App, you agree to be bound by these
          Terms. If you do not agree to these Terms, please do not use the App.
        </p>

        <article className="mt-10 space-y-10">
          <Section title="1. Use of the App">
            <SubSection title="1.1 Purpose">
              <p>
                xPenny is a personal finance tool designed to help you track expenses, budgets,
                and debts locally on your device. The App is intended for personal,
                non-commercial use.
              </p>
            </SubSection>
            <SubSection title="1.2 Not Financial Advice">
              <p>
                The information and tools provided within xPenny are for informational and
                organizational purposes only.{" "}
                <strong>
                  xPenny does not provide financial, legal, tax, or accounting advice.
                </strong>{" "}
                You should consult with a qualified professional before making any significant
                financial decisions. We are not responsible for any financial losses or damages
                resulting from your reliance on the App's data or calculations.
              </p>
            </SubSection>
          </Section>

          <Section title="2. User Data and Backups">
            <SubSection title="2.1 Local Storage Responsibility">
              <p>
                xPenny operates primarily as a "local-first" application. Your financial data is
                stored directly on your mobile device.{" "}
                <strong>
                  You are solely responsible for securing your device and ensuring your data is
                  not lost or compromised.
                </strong>
              </p>
            </SubSection>
            <SubSection title="2.2 Google Drive Backups">
              <p>
                We offer an optional feature to back up your local data to your personal Google
                Drive account.
              </p>
              <ul>
                <li>
                  We do not guarantee the availability, reliability, or security of Google Drive.
                </li>
                <li>
                  If your device is lost, damaged, or stolen, and you have not successfully
                  backed up your data, <strong>your data may be permanently lost.</strong> We
                  have no ability to recover lost data, as we do not store your data on our
                  servers.
                </li>
              </ul>
            </SubSection>
          </Section>

          <Section title="3. Intellectual Property">
            <p>
              The App, including its original content, features, functionality, design, and code,
              is owned by oneByte / Mustak and is protected by international copyright,
              trademark, patent, trade secret, and other intellectual property or proprietary
              rights laws. You may not copy, modify, distribute, sell, or lease any part of our
              App without our explicit written permission.
            </p>
          </Section>

          <Section title="4. Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, in no event shall we be liable
              for any indirect, punitive, incidental, special, consequential, or exemplary
              damages, including without limitation, damages for loss of profits, goodwill, use,
              data, or other intangible losses, arising out of or relating to the use of, or
              inability to use, the App.
            </p>
            <p>Specifically, we are not liable for:</p>
            <ul>
              <li>
                Any loss of financial data due to device failure, accidental deletion, or failure
                to perform backups.
              </li>
              <li>
                Errors, mistakes, or inaccuracies in the App's calculations or data presentation.
              </li>
              <li>
                Unauthorized access to or use of your device or your Google Drive account.
              </li>
            </ul>
          </Section>

          <Section title="5. Third-Party Services">
            <p>
              The App integrates with third-party services (such as Google Sign-In and Google
              Drive). Your use of these services is subject to their respective terms and
              conditions and privacy policies. We are not responsible for the practices, content,
              or availability of these third-party services.
            </p>
          </Section>

          <Section title="6. Modifications to the App and Terms">
            <p>
              We reserve the right to modify, suspend, or discontinue the App (or any part
              thereof) at any time, with or without notice.
            </p>
            <p>
              We may also revise these Terms from time to time. The most current version will
              always be posted within the App or on our website. By continuing to use the App
              after changes become effective, you agree to be bound by the revised Terms.
            </p>
          </Section>

          <Section title="7. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of your
              jurisdiction, without regard to its conflict of law provisions.
            </p>
          </Section>

          <Section title="8. Contact Us">
            <p>If you have any questions about these Terms, please contact us at:</p>
            <ul>
              <li>
                <strong>Developer:</strong> oneByte / Mustak
              </li>
              <li>
                <strong>Email:</strong> [Insert Contact Email Here]
              </li>
            </ul>
          </Section>
        </article>
      </main>

      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="glass rounded-2xl border border-border/60 p-6 md:p-8">
      <h2 className="font-heading text-xl font-semibold tracking-tight md:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base [&_a]:text-primary [&_a:hover]:underline [&_strong]:text-foreground [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-heading text-base font-semibold text-foreground md:text-lg">{title}</h3>
      <div className="mt-2 space-y-3">{children}</div>
    </div>
  );
}
