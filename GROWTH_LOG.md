# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-10-10 - Adsterra placement codes filled for aniimo.pro

- Task: Replace the empty Adsterra codes in `src/data/ads.ts` with the real placement codes collected from the publisher platform for the V4 horizontal layout (`page-top-728x90`, `page-top-468x60`, `page-top-320x50`, `home-after-entry-native`, `home-directory-end-468x60`, `home-directory-end-320x50`, `guide-native-native`, `guide-section-break-728x90`, `guide-section-break-468x60`, `guide-section-break-320x50`, `guide-before-faq-468x60`, `guide-before-faq-320x50`, `footer-sponsored-smartlink`). Each key targets exactly the format/size combination approved by `ad-placement-manifest.json`; shared platform codes (Popunder, Social Bar, additional Banner sizes) remain unrequested by the page inventory.
- Files changed: `src/data/ads.ts` (placeholder replacement), this log.
- Ad baseline: All 13 V4 inventory entries now hold JS-literal-escaped Adsterra placement codes; no component, slot, layout, route, SEO, ownership or deployment change.
- Verification: `npm run verify` (typecheck + lint + build).

### 2026-10-10 - V4 launch rebuild of aniimo.pro

- Task: Rebuild `aniimo.pro` from scratch on the V4 guide-page assembly with 12 routes (home + 11 guides) covering the Aniimo save setup, catching, combat, exploration, and endgame clusters. Reuse the existing GA4 property `properties/551850595` with data stream `properties/551850595/dataStreams/15524177010` and Google Search Console property `sc-domain:aniimo.pro`. Retire the previous V3 release/fixed-page cluster.
- Files changed: All `src/data/pages/*.ts`, `src/data/navigation.ts`, `src/data/site.ts`, `src/data/ads.ts`, `src/data/theme.ts`, `src/data/assets.ts`, `public/ads.txt`, `public/_headers`, `public/icon.svg`, `wrangler.jsonc`, `next.config.ts`, `package.json`, `AGENTS.md`, `CONTENT_INDEX.md`, this log, and the entire `out/` static build.
- URLs affected: `/`, `/guides/beginner-guide/`, `/guides/aniipods-types/`, `/guides/how-to-catch-aniimo/`, `/guides/twining-and-combat/`, `/guides/team-building/`, `/guides/elements-and-type-chart/`, `/guides/maps-and-exploration/`, `/guides/egg-heist/`, `/guides/homeland-rv-farming/`, `/guides/evolution-guide/`, `/guides/glimmer-world-tree/`, `/guides/codes-and-rewards/`. The legacy `/release-date`, `/pre-order-and-editions`, `/system-requirements`, `/platforms-and-versions`, `/twining-system`, `/starter-and-prismana`, `/evolution-and-stages`, `/catching-and-aniipods`, `/homeland-and-housing`, `/heist-of-the-lost-isles`, `/companion-mode`, `/potential-and-personality`, `/release-overview`, `/about`, `/contact`, `/faq`, `/privacy-policy`, `/terms` URLs are no longer generated and old Git history pre-dating this rebuild should not be referenced for site edits.
- Save setup: `/` hero rewrites to `Aniimo Guides` and lists the new player-task modules; `/guides/beginner-guide/` is the primary Helion-vs-Lunara entry with the seven core unlocks (Bloom, Homeland, Talents, Lumin Amber, Hatchers full).
- Catching: `/guides/aniipods-types/` carries the graded Pro→Ultra pod table plus Tumbler and Sparkling Cube support items; `/guides/how-to-catch-aniimo/` walks the throw workflow, pod choice by target, group capture with Tumbler + Lumin Shards, and the completionist catch rationale.
- Combat and progression: `/guides/twining-and-combat/` keeps the 20-mobility-ability table and the Command-vs-Twine comparison; `/guides/team-building/` swaps prior team examples for the early and mid-game slots and a Version 1.0 SS and S tier snapshot; `/guides/elements-and-type-chart/` keeps the nine-element ×1.6 / ×0.625 tables; `/guides/evolution-guide/` keeps the Emberpup→Inferlupa worked example plus Umbral and Prismana trade-off notes; `/guides/glimmer-world-tree/` keeps the 10→150 Amber blessing track and the per-reward totals.
- Exploration: `/guides/maps-and-exploration/` covers the 15 Idyll regions with level range, Aniimo count, POI count, and nomad challenges.
- Endgame: `/guides/egg-heist/` keeps the Level 50 + Veteran / Wayfarer III unlock and the Normal-Hard-Nightmare-Chaos tier table; `/guides/homeland-rv-farming/` keeps the Hatchinator, farmland, worker categories, decoration-economy table, and Bud Ticket spending priorities.
- Rewards: `/guides/codes-and-rewards/` lists 15 active codes as of 10 Oct 2026 (230 Glimmer total, 100,000 Credits, 37 Growth Flowers, 20 Aniipod Pros, 20 Aniipods) plus the known expired `aniimoparty` and a redemption troubleshooting grid.
- Ad baseline: `src/data/ads.ts` matches `ad-placement-manifest.json` keys for the V4 horizontal layout (`page-top-*`, `home-after-entry-native`, `home-directory-end-*`, `guide-native-native`, `guide-section-break-*`, `guide-before-faq-*`, `footer-sponsored-smartlink`); every code remains empty; Adsterra Integrator owns first fill.
- Integration: `wrangler.jsonc` exposes `NEXT_PUBLIC_SITE_URL=https://aniimo.pro`, keeps the canonical measurement ID placeholder for the deploy hook to inject via `wrangler secret`, and does not contain a `main` Worker script. `NEXT_PUBLIC_BING_SITE_AUTH_CODE` is set via Workers secret at deploy time.
- Verification: `npm run verify` (typecheck + lint + build) and the central `validate_guide_v4_stage.py builder` must succeed before this rebuild is reported as live.

### 2026-10-02 - V4 semantic ad inventory

- Replaced fixed six format bindings with independently named positions and container-fitting device alternatives; added 160x300 and mobile-home-only 300x250 capability. Guide bodies and desktop prohibit rectangles; Social Bar excluded.
- Page Builder reserves empty codes and uses local-only placeholders; Adsterra Integrator still supplies real codes via browser automation. Complete module anchors avoid splitting answers/tables/steps.
- No route, content, publisher ownership or site deployment change. Focused inventory, responsive execution and placement capture validation required.

### 2026-10-02 - Third V4 site: optional reference directory

- Scope: reusable object directory and assembly guidance extracted from Kingdom Rush 6; no site deployment or role/Skill change.
- Added: optional `ReferenceDirectory` for existing entity-grid inputs, source name/label/summary search, exact badge filters, count/reset/empty states, optional registered media and unique Unicode/duplicate-name anchors. Shared pure helpers support homepage previews. Plain same-page URLs can target the entry; existing fragments, queries and external targets remain intact.
- Design: semantic tokens and serializable localized labels; caller owns placement, categories, columns, fonts, palette and assets. Ordinary EntityGrid/ModuleRenderer and page routes/SEO remain unchanged.
- Verification: source/SSR conservation, registered media, empty/no-label datasets, link retention and anchor collisions; actual Chrome 1440px/390px search/filter/reset, independent localized directory, no overflow, and no-JS reading/fragment targets. Type/lint, template/content, V4 components/composition, static build and rendered SEO checked. Temporary browser fixtures are private runtime evidence, not production routes.
- Business boundary: component behavior only; no claims about game facts, search traffic, ad fill or revenue.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.
