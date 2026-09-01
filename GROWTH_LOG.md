# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-02 - Pre-launch hub refresh: starter, evolution, pre-order, Heist, PC specs, beta-trading

- Task: Refresh five pre-launch answer pages with public-source evidence captured on 2026-09-02; add a homepage pre-launch hub linking the updated pages.
- Files changed: `src/data/pages/home.ts`, `src/data/pages/fixed-pages.ts`, `src/data/faq.ts`, and this log.
- URLs affected: `/`, `/starter-and-prismana`, `/evolution-and-stages`, `/pre-order-and-editions`, `/heist-of-the-lost-isles`, `/system-requirements`, `/closed-beta-and-signups`. No URLs added or removed; `CONTENT_INDEX.md` URL responsibilities unchanged.
- Source coverage: ComicBook.com preview, CBR interview, GameHaunt release overview, official Aniimo site, English Steam store page, Twisted Voxel Closed Beta 3 coverage — all re-checked `2026-09-02`.
- Fact corrections: Steam now lists DirectX 11 (not 12); Perfect Egg is a multi-day login reward rather than a pre-registration reward; both corrections recorded in the in-page `Fact boundary — 2026-09-02` callouts. Starter sources split per name (CBR vs ComicBook.com) instead of a single-attribution summary.
- FAQ growth: 58 to 68 items; ten new questions covering CPU/GPU strings, per-platform pre-order links, milestone timing, trading, Closed Beta 3 creatures, named starter roster, Emberpup evolution line, Beta 3 evolution roster, Diamond Egg Heist six-team format, squad composition, and co-op bosses.
- Verification: `npm run verify` (typecheck, lint, template validation, content validation, IndexNow URL validation, static export, rendered SEO validation) before push.

### 2026-08-30 - Adsterra six-unit codes integrated

- Task: Populate the fixed Adsterra ad units in `src/data/ads.ts` with the six real codes from the Adsterra publisher dashboard.
- Files changed: `src/data/ads.ts` and this log.
- URLs affected: No URL changes; ad values are consumed by the existing fixed ad modules only.
- Ad baseline: `native-banner`, `banner-728x90`, `banner-468x60`, `banner-320x50`, `banner-160x600`, and `smartlink` now hold real publisher codes; the standard ad slots and the empty-value contract remain unchanged.
- Verification: `npm run verify` plus the read-only Adsterra completion validator before registry terminal commit.

### 2026-08-30 - Bing ownership verification configured

- Task: Add the public Bing Webmaster ownership code supplied by the verified API account.
- Files changed: `wrangler.jsonc` and this log.
- URLs affected: `/` metadata only; no route changes.
- Verification: Local build and rendered SEO validation expose exactly one matching `msvalidate.01` tag; the same public value was read back from the Cloudflare production trigger build environment before the final Git push.

### 2026-08-30 - Route manifest aligned with the approved launch plan

- Task: Remove the template-only `/guides` and `/wiki` routes and classify `/` as the homepage route.
- Files changed: Homepage route metadata, central page registry, and content index.
- URLs affected: `/guides` and `/wiki` removed; `/` retained.
- SEO/GEO changed: The public route inventory now contains only routes declared by the Aniimo launch content package.
- Verification: Regenerate the route manifest and run the V3 route-contract validator plus the normal site checks.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.
