
# xPenny — Premium Fintech Landing Page

A high-conversion, single-route landing page with an Emerald Prestige dark aesthetic, glassmorphism, and subtle motion. Fully responsive (mobile → desktop).

## Visual direction
- **Palette:** Deep emerald-black background `#0a1410` → `#064e3b`, surfaces in `#0d7a5f`, vibrant accent `#10b981`, soft cream text `#f5f0e0`.
- **Typography:** Sora (headings, tight tracking) + Manrope (body).
- **Effects:** Frosted glass cards (backdrop-blur + low-opacity borders), emerald glow gradients, grain/noise overlay, soft float + fade-in on scroll, gradient mesh behind hero.
- **Iconography:** Lucide line icons in emerald, tinted glassy badges.

## Page sections (single route: `/`)

1. **Sticky Nav**
   - xPenny wordmark + coin glyph, links (Features, Security, Download), small "Get the app" CTA. Translucent on scroll.

2. **Hero — "Take Control of Your Spending & Debts"**
   - Left: eyebrow chip ("Personal finance, reimagined"), large headline, subheadline, App Store + Google Play badges (placeholder `#`), trust row ("Offline-first · End-to-end private · 4.9 ★").
   - Right: **Phone + floating UI cards** — central tilted phone showing Budget screen, with 3 floating glass cards orbiting it: a transaction row ("Coffee –$4.20"), an IOU card ("Alex owes you $25"), a mini bar chart ("This month"). Subtle parallax on mouse move, gentle float animation, emerald glow behind phone.

3. **Logo / social proof strip**
   - "Loved by students & young pros" + 5 muted partner/press marks.

4. **Feature highlights — zig-zag layout (3 alternating rows)**
   - **Smart Expense Tracking** — phone screenshot left, copy right (top expenses, monthly budget, categories).
   - **Debt & IOU Management** — copy left, "Manage Persons" mock right (avatars + balances, "Settle up" button).
   - **Lightning Fast & Offline-First** — phone with offline indicator + speed metric ("0ms · local SQLite"), copy right.
   - Each row: glass card framing, emerald accent icon, 2–3 bullet sub-benefits.

5. **Feature grid (secondary)** — 4 compact glass cards
   - Multi-language · Biometric (FaceID/TouchID) · Google Sign-in · Local-only data.

6. **Security & Privacy section**
   - Centered shield emblem + headline "Your money. Your data. Period."
   - 3 columns: Local-first storage · Biometric lock · Zero tracking. Subtle lock-pattern background.

7. **"How it works" — 3 steps**
   - Download → Add expenses & people → See where your money goes. Numbered glass tiles connected by a dotted emerald line.

8. **Testimonials** — 3 short quotes in glass cards (student, freelancer, friend group organizer).

9. **FAQ** — 5 collapsible items (Is it free? Does it sync? Which platforms? How is data stored? Can I export?). Uses shadcn Accordion.

10. **Final CTA**
    - Full-width emerald gradient panel, headline "Start tracking in 60 seconds", subcopy, both store badges, "No account required to start."

11. **Footer**
    - Logo + tagline, link columns (Product, Company, Legal — Privacy Policy, Terms, Contact), language switcher mock, copyright.

## Technical plan
- Replace `src/routes/index.tsx` placeholder with the full landing page composed of small section components in `src/components/landing/` (Nav, Hero, PhoneMockup, FeatureRow, FeatureGrid, Security, Steps, Testimonials, FAQ, FinalCTA, Footer).
- Add Sora + Manrope via Google Fonts in `__root.tsx` head links; map them as CSS vars in `src/styles.css` (`--font-heading`, `--font-body`) and apply via Tailwind utilities.
- Update `src/styles.css` design tokens to the Emerald Prestige palette in oklch (background, foreground, primary = emerald, card with translucent surface, border with low-opacity cream). Keep dark mode as the default look.
- Build phone + floating cards as pure CSS/SVG (no images needed) — rounded device frame, status bar, mock UI rows; floating cards animated with CSS keyframes (`float`, `fade-in-up`).
- Use `IntersectionObserver` (tiny inline hook) for scroll-reveal; `prefers-reduced-motion` respected.
- Per-page SEO in the route's `head()`: title "xPenny — Track spending & debts, offline-first", description, og:title, og:description, og:image (omit since no real asset).
- Reuse shadcn `Button`, `Accordion`, `Badge`. No new dependencies.
- Fully responsive: mobile stacks hero copy above phone, zig-zag collapses to single column, nav becomes a Sheet menu on small screens.

## Out of scope
- Real app store links, real screenshots, backend, analytics, i18n implementation (UI mock only).
