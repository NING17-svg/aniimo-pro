# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Template Game guide | Find the best entry point | Open Wiki / Browse Guides | Hub | Replace with the configured game's main hub intent. |
| `/release-date` | `src/data/pages/release-pages.ts` | Guide | Template Game release date | Check release timing and platforms | FAQ / Wiki | Supporting hub | Must stay tied to official or store sources. |
| `/faq` | `src/data/pages/site-pages.ts` | Guide | Template Game FAQ | Get short answers | Release Info / Contact | Answer hub | FAQ schema enabled. |
| `/about` | `src/data/pages/site-pages.ts` | Utility | about Template Game Guide | Trust and editorial policy | Contact | Trust | Explain unofficial status and sourcing rules. |
| `/contact` | `src/data/pages/site-pages.ts` | Utility | contact Template Game Guide | Corrections and source updates | About | Trust | Contact channel pending. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured. |
| `/terms` | `src/data/pages/site-pages.ts` | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Keep unofficial disclaimer clear. |
| `/release-overview` | `src/data/pages/fixed-pages.ts` | Guide | Aniimo simultaneous 10:00 UTC+8 global unlock (16 Sep PC/console/Xbox cloud, 23 Sep mobile) | Confirm launch date and local unlock hour per timezone | Pre-order & Editions / Platforms & Versions | Launch-status hub | Carries the per-platform status table, the 10:00 UTC+8 simultaneous global unlock, the per-timezone unlock table, multi-language main-story VO, and FAQ links. |
| `/pre-order-and-editions` | `src/data/pages/fixed-pages.ts` | Guide | Aniimo Advanced ($9.99) and Collector's ($19.99) editions with the Companion Handbook battle pass | Compare paid editions and free pre-registration rewards before the 16 Sep 09:59 UTC+8 cutoff | Release Overview / Platforms & Versions | Pre-order hub | Documents the Advanced and Collector's editions on PS5 and Xbox, the platform-exclusive Fluffy Friend and Doggo Dude accessories, the Companion Handbook battle pass with the Prismana Aniimo Egg and Evolution Material, the free pre-registration reward ladder, and the pre-order cutoff. |
| `/system-requirements` | `src/data/pages/fixed-pages.ts` | Guide | Aniimo PC minimum i7-4770 / Ryzen 7 2700 + GTX 970 / RX 5600 + 8 GB; recommended i7-10700 / Ryzen 5 5600 + RTX 3060 / RX 6700 + 16 GB; 40 GB storage | Verify PC specs before downloading the Aniimo client | Platforms & Versions / Release Overview | PC-spec hub | Carries the current English Steam minimum and recommended spec, the DirectX 11 + Windows 10/11 + broadband qualifiers, and the regional-page inconsistency caveat. |
| `/platforms-and-versions` | `src/data/pages/fixed-pages.ts` | Guide | Aniimo platform lineup incl. Xbox Cloud | Compare console/PC/mobile availability | System Requirements / Pre-order & Editions | Launch-status support | Reflects the platform split and controller improvements. |
| `/twining-system` | `src/data/pages/fixed-pages.ts` | Guide | Aniimo Twining and rune-system removal | Understand merge modes and simplified training | Starter & Prismana / Evolution & Stages | Mechanics hub | Documents the 2026-09-03 rune removal and training simplification. |
| `/starter-and-prismana` | `src/data/pages/fixed-pages.ts` | Guide | Aniimo Prismana flat-base + lucky strike + season spawn | Plan Prismana acquisition | Twining / Evolution | Acquisition hub | Carries the flat-base, lucky strike, and season spawn rework. |
| `/evolution-and-stages` | `src/data/pages/fixed-pages.ts` | Guide | Aniimo Umbral variant + Irisalis Legendary | Plan top-end variant acquisition | Starter & Prismana / Catching & Aniipods | Variant hub | Carries Umbral Perfect Potential via Wild Surges and the Irisalis Legendary flow. |
| `/catching-and-aniipods` | `src/data/pages/fixed-pages.ts` | Guide | Aniimo Sparkling Cube Perfect Potential + Irisalis Legendary flow | Catch top-tier Aniimo deterministically | Starter & Prismana / Evolution | Catch-flow hub | Carries the Sparkling Cube guarantee and the Legendary token-craft flow. |
| `/homeland-and-housing` | `src/data/pages/fixed-pages.ts` | Guide | Aniimo multi-area Homeland + RV dispatch Prismana eggs | Build and share a multi-area base | Starter & Prismana / Catching | Base hub | Carries the multi-area base, shareable furniture codes, petting AI, soil-tilling, and RV dispatch. |
| `/heist-of-the-lost-isles` | `src/data/pages/fixed-pages.ts` | Guide | Aniimo Chaos Mode on the Diamond Egg Heist | Build a Chaos Mode squad | Elements & Roles / Idyll Regions | PvPvE hub | Carries Chaos Mode layered on the six-team Diamond Egg Heist format. |
| `/companion-mode` | `src/data/pages/fixed-pages.ts` | Guide | Aniimo Companion Mode gifting and Twin Bonds | Reach the five social trophies with a friend | Pre-order & Editions / Twining System | Social hub | Documents the five Companion Mode trophies (A Buddy for My Buddy, Treasured Trade, Hearts in Tune, Friends in Focus, A Match Made Through Music), the Photo Studio In the Same Frame trophy, the Companion Handbook-Exclusive Prismana Aniimo Egg path, and the Treasured Trade exchange. |
| `/potential-and-personality` | `src/data/pages/fixed-pages.ts` | Guide | Aniimo Potential appraisal + MBTI personality axes | Plan a personality-reroll build | Catching & Aniipods / Companion Mode | Build hub | Documents the four MBTI-style axes (E/I, S/N, T/F, J/P), the Somewhat / Relatively / Very (+3% / +6% / +10%) appraisal tiers, the named personalities (Clingy, Practical, Aloof, Faithful), the free-path reroll, the Innate / Acquired Potential split, and the Sparkling Cube + Prismana stacking. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Launch facts: `/release-date`, `/faq`
- Official facts and guide structure: the planned fixed pages linked from `/`
- Evergreen hub and trust: `/`, `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage should link to the most current high-demand pages.
- Release Date should link to FAQ and official sources.
- FAQ should include all current high-demand answer pages.

## Open Questions

- Replace this section with game-specific unknowns during content configuration.
