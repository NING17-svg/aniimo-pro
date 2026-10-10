# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Aniimo guides | Find the best entry point | Open Beginner guide / Redeem active codes | Hub | First module exposes the approved player-task entries before background facts; hero CTA points at beginner guide and codes page. |
| `/guides/beginner-guide/` | `src/data/pages/guide-pages.ts` | Guide | Aniimo beginner guide | First hours, starter choice, day-one priorities | Helion vs Lunara table / Day-one steps / Related links | Starter hub | Picks Helion or Lunara with shared Light-element and identical base stats; documents day-one priorities and core unlocks (Bloom, Homeland, Talents, Lumin Amber, Hatchers). |
| `/guides/aniipods-types/` | `src/data/pages/guide-pages.ts` | Guide | Aniimo Aniipod types | Compare pod tiers and capture bonuses | Standard / Pro / Mega / Hyper / Trace / Ultra table / Tumbler and Sparkling Cube | Catch hub | Lists the six graded pods, Tumbler group capture, Sparkling Cube and Lumin Shards support, plus premium pod sources. |
| `/guides/how-to-catch-aniimo/` | `src/data/pages/guide-pages.ts` | Guide | how to catch Aniimo | Throw workflow, pod choice by target, Sparkling Cubes | Catch workflow steps / Pod choice by target / Group capture steps | Catch hub | Walks the throw, the pod tier match-up, Sparkling Cubes for Perfect Potential, Tumbler group capture, and completionist catch roles. |
| `/guides/twining-and-combat/` | `src/data/pages/guide-pages.ts` | Guide | Aniimo Twining | Twining for combat and traversal, Command vs Twine Mode, squad roles | Mobility abilities table / Roles grid / Mode comparison | Combat hub | Twining for combat and movement, lists the 20 mobility abilities, contrasts Command Mode vs Twine Mode, breaks down the five squad roles (DPS, Break, Heal, Support, Energy Recovery). |
| `/guides/team-building/` | `src/data/pages/guide-pages.ts` | Guide | Aniimo team building | Cover roles, then elements, and tier-list snapshot | Steps / Early-game and mid-game examples / SS and S tier tables | Combat hub | Steps to build a squad, early and mid-game examples, current SS and S tier snapshot, plus element-pattern guidance. |
| `/guides/elements-and-type-chart/` | `src/data/pages/guide-pages.ts` | Guide | Aniimo type chart | Counter-pick for the nine elements | Counter-pick tables / Element list / Practical application prose | Combat hub | Lists the nine elements and dual-type rules, then the ×1.6 super-effective and ×0.625 not-very-effective counter-pick tables. |
| `/guides/maps-and-exploration/` | `src/data/pages/guide-pages.ts` | Guide | Aniimo interactive map | Plan a route by region and traversal ability | Region level table / Early-region steps / Exploration prose | Explore hub | Carries the 15 Idyll regions by level range, Aniimo and POI counts, and mobility-based exploration tips. |
| `/guides/egg-heist/` | `src/data/pages/guide-pages.ts` | Guide | Aniimo Egg Heist | Build a Heist extraction squad and choose comps | Unlock text / Loop steps / Tier table / Role and comp grids | Endgame hub | Level 50 + Veteran rank unlock, Normal-Hard-Nightmare-Chaos tier table, Carrier/Front Guard/Rear Guard role split, and recommended team comps. |
| `/guides/homeland-rv-farming/` | `src/data/pages/guide-pages.ts` | Guide | Aniimo Homeland RV | Run the RV farm and raise the Home Index | Farmland / Hatchinator / Home Index loop / Spending priorities | Endgame hub | Unlocks the RV, runs the Hatchinator, sets farmland and worker categories, raises the Home Index loop, and orders Bud Ticket spending. |
| `/guides/evolution-guide/` | `src/data/pages/guide-pages.ts` | Guide | Aniimo evolution | Stack evolution conditions, plan Umbral and Prismana | Condition grid / Worked Emberpup line / Pinned levels / Checklist | Progression hub | Conditions that stack (level, trait, talent tree, Alpha defeat, quest, trade), the Emberpup→Inferlupa worked example, and Umbral/Prismana considerations. |
| `/guides/glimmer-world-tree/` | `src/data/pages/guide-pages.ts` | Guide | Aniimo Glimmer World Tree | Earn Glimmer, run the Branch blessing track | Glimmer sources / Branch actions / 15-blessing table / Spending guidance | Progression hub | Glimmer sources and amounts, Branch actions (Infuse Energy, Nurture, Change Weather), the 10-150 Amber blessing track, and spending priorities. |
| `/guides/codes-and-rewards/` | `src/data/pages/guide-pages.ts` | Guide | Aniimo codes | Redeem active codes and skip expired ones | Active-codes table / Known-expired table / Troubleshooting grid | Player rewards hub | Lists 15 active codes (as of 10 Oct 2026), total Glimmer and resource value, expired codes to skip, and a redemption troubleshooting grid. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: Aniimo uses guide-only content; entity generation is disabled (`src/data/entities.ts` is empty).
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Save setup: `/`, `/guides/beginner-guide/`, `/guides/codes-and-rewards/`
- Catching and starting roster: `/guides/aniipods-types/`, `/guides/how-to-catch-aniimo/`
- Combat and progression: `/guides/twining-and-combat/`, `/guides/team-building/`, `/guides/elements-and-type-chart/`, `/guides/evolution-guide/`, `/guides/glimmer-world-tree/`
- Exploration: `/guides/maps-and-exploration/`
- Endgame and farming: `/guides/egg-heist/`, `/guides/homeland-rv-farming/`

## Internal Linking Map

- Homepage should link to the most current high-demand pages; the current six hero entries mirror the clusters above.
- Beginner guide should link to Aniipods, catch workflow, Twining, and codes; this is the only page that touches codes directly outside the codes page.
- Codes page should link to the Beginner guide (start-here pairing) and the Glimmer World Tree (Glimmer spending reference).
- Glimmer and World Tree page should link to Codes (Glimmer sources include some codes) and the Evolution guide (Capafruit and similar endgame spends).
- Egg Heist should link to team building, elements type chart, and homeland farming.
- Team building should link to elements type chart, Twining, and Egg Heist comps.

## Open Questions

- Re-check on 2026-11-09 whether the Level 50 Veteran / Wayfarer III unlock text is still accurate after any pre-season 2 changes.
- Re-check on 2026-11-09 that the Branch blessing track totals and 10-Amber increment numbers still apply.
- Re-check on 2026-11-09 any codes that have rotated out (today's "Known expired" list tracks `aniimoparty` only).
