import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Shield } from "lucide-react";

import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — xPenny" },
      {
        name: "description",
        content:
          "How xPenny handles your data: local-first storage, optional Google Drive backups, biometric auth, no analytics or tracking.",
      },
      { property: "og:title", content: "Privacy Policy — xPenny" },
      {
        property: "og:description",
        content:
          "xPenny is local-first and private. Read how we handle data, backups, and security.",
      },
      { property: "og:url", content: "https://xpenny.app/privacy" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://xpenny.app/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />

      {/* Background glow */}
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
            <Shield className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs uppercase tracking-widest text-primary">Legal</p>
            <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Privacy Policy
            </h1>
          </div>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Effective Date:</span> April 24, 2026
        </p>

        <article className="prose-content mt-10 space-y-10">
          <Section title="1. Introduction">
            <p>
              Welcome to <strong>xPenny</strong> ("we," "our," or "us"). We are committed to
              protecting your privacy. This Privacy Policy explains how your personal information
              and data are collected, used, and stored when you use the xPenny mobile application
              (the "App").
            </p>
            <p>
              xPenny is designed with privacy in mind. It operates primarily as a{" "}
              <strong>local-first</strong> application, meaning the vast majority of your data
              remains solely on your device.
            </p>
          </Section>

          <Section title="2. Information Collection and Use">
            <SubSection title="2.1 Local Data Storage">
              <p>
                All of your financial data—including transactions, budgets, debt tracking
                (Persons), and categories—is stored <strong>locally</strong> on your device using
                an internal SQLite database. We do not transmit, collect, or store this financial
                data on any external servers operated by us.
              </p>
            </SubSection>
            <SubSection title="2.2 Google Drive Backups">
              <p>
                xPenny offers a backup feature that allows you to securely save your financial
                data to your personal Google Drive account.
              </p>
              <ul>
                <li>
                  <strong>Authentication:</strong> If you choose to use this feature, the App will
                  ask you to sign in using Google Sign-In.
                </li>
                <li>
                  <strong>Drive Access:</strong> We request permission to read and write to a
                  specific folder within your Google Drive to store and retrieve your backup
                  files.
                </li>
                <li>
                  <strong>Data Privacy:</strong> Your backup data is stored in your personal
                  Google Drive account. We do not have access to your Google account credentials,
                  nor do we have access to your backup files or any other files in your Google
                  Drive.
                </li>
              </ul>
            </SubSection>
            <SubSection title="2.3 Biometric Authentication">
              <p>
                To enhance security, xPenny supports local authentication methods such as Face ID,
                Touch ID, or fingerprint sensors.
              </p>
              <ul>
                <li>The App requests permission to use these features to unlock the App.</li>
                <li>
                  Biometric data (such as your face or fingerprint) is processed securely by your
                  device's operating system.{" "}
                  <strong>
                    xPenny never accesses, collects, or transmits your raw biometric data.
                  </strong>
                </li>
              </ul>
            </SubSection>
            <SubSection title="2.4 Notifications and Background Tasks">
              <p>
                xPenny may request permission to send you local notifications (e.g., reminders to
                log expenses). These notifications are scheduled and triggered entirely locally on
                your device. No data regarding your notification interactions is sent to our
                servers.
              </p>
            </SubSection>
          </Section>

          <Section title="3. Third-Party Services">
            <p>
              While we do not collect your data, the App utilizes third-party services that may
              collect information used to identify you in accordance with their own privacy
              policies:
            </p>
            <ul>
              <li>
                <strong>Google Play Services / Google Sign-In:</strong> Used for authenticating
                users who wish to back up their data to Google Drive.
                <ul>
                  <li>
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:underline"
                    >
                      Google Privacy Policy
                    </a>
                  </li>
                  <li>
                    <strong>Google API Services User Data Policy:</strong> xPenny's use and
                    transfer to any other app of information received from Google APIs will adhere
                    to the{" "}
                    <a
                      href="https://developers.google.com/terms/api-services-user-data-policy"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:underline"
                    >
                      Google API Services User Data Policy
                    </a>
                    , including the Limited Use requirements.
                  </li>
                </ul>
              </li>
            </ul>
          </Section>

          <Section title="4. Analytics and Tracking">
            <p>
              xPenny <strong>does not</strong> include any third-party analytics trackers,
              advertising networks, or crash reporting tools (such as Firebase Analytics or
              AdMob). We do not track your usage behavior within the app.
            </p>
          </Section>

          <Section title="5. Data Retention and Deletion">
            <p>
              Because your data is stored locally on your device and within your personal Google
              Drive, you have full control over your data:
            </p>
            <ul>
              <li>
                <strong>Local Data:</strong> You can delete all your financial data at any time by
                uninstalling the xPenny app or clearing the app's storage data through your
                device settings.
              </li>
              <li>
                <strong>Backup Data:</strong> You can delete your backups at any time by
                navigating to your Google Drive and deleting the xPenny backup files/folder. You
                can also revoke the App's access to your Google account via your Google Account
                settings.
              </li>
            </ul>
          </Section>

          <Section title="6. Security">
            <p>
              We value your trust in providing us your information, thus we strive to use
              commercially acceptable means of protecting it. We use local encryption (
              <code className="rounded bg-surface px-1.5 py-0.5 text-xs">expo-secure-store</code>)
              to store sensitive keys (like OAuth tokens for Google Drive access) securely on your
              device. However, remember that no method of transmission over the internet, or
              method of electronic storage, is 100% secure and reliable, and we cannot guarantee
              its absolute security.
            </p>
          </Section>

          <Section title="7. Children's Privacy">
            <p>
              These Services do not address anyone under the age of 13. We do not knowingly
              collect personally identifiable information from children under 13. Given the
              local-first nature of the App, no such data is transmitted to us.
            </p>
          </Section>

          <Section title="8. Changes to This Privacy Policy">
            <p>
              We may update our Privacy Policy from time to time. Thus, you are advised to review
              this page periodically for any changes. We will notify you of any changes by posting
              the new Privacy Policy on this page. These changes are effective immediately after
              they are posted on this page.
            </p>
          </Section>

          <Section title="9. Contact Us">
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate
              to contact us.
            </p>
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
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base [&_a]:text-primary [&_a:hover]:underline [&_strong]:text-foreground [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul_ul]:mt-2 [&_ul_ul]:ml-5">
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
