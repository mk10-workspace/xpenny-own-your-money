// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

// When DEPLOY_TARGET=vercel (set by Vercel via vercel.json), build with the Nitro
// Vercel preset so output goes to .vercel/output. Otherwise use the default
// Cloudflare build so Lovable's in-editor preview, publish, and dist-check work.
const isVercel = process.env.DEPLOY_TARGET === "vercel";

export default defineConfig(
  isVercel
    ? {
        cloudflare: false,
        plugins: [nitro({ preset: "vercel" })],
      }
    : {},
);
