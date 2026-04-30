import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import { ThemeProvider } from "@/components/theme-provider";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://xpenny.app";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const Route = createRootRoute({
  head: () => ({
    scripts: [
      { src: "https://www.googletagmanager.com/gtag/js?id=G-EPHMXJ7F7S", async: true },
      {
        children:
          "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-EPHMXJ7F7S');",
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "xPenny",
          url: SITE_URL,
          logo: `${SITE_URL}/favicon.webp`,
          sameAs: [],
        }),
      },
    ],
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "xPenny — Track spending & debts, offline-first" },
      {
        name: "description",
        content:
          "xPenny is a blazing-fast personal finance app combining expense tracking with debt & IOU management. Offline-first, private, and beautifully simple.",
      },
      { name: "author", content: "xPenny" },
      { name: "publisher", content: "xPenny" },
      { name: "application-name", content: "xPenny" },
      { name: "apple-mobile-web-app-title", content: "xPenny" },
      { name: "theme-color", content: "#0a1410" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "keywords",
        content:
          "expense tracker, personal finance app, debt tracker, IOU app, budgeting app, offline finance app, money tracker, spending tracker, private finance app",
      },
      { property: "og:site_name", content: "xPenny" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "xPenny — track spending & debts, offline-first" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: "xPenny — track spending & debts, offline-first" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/webp", href: "/favicon.webp" },
      { rel: "apple-touch-icon", href: "/favicon.webp" },
      { rel: "canonical", href: SITE_URL + "/" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}
