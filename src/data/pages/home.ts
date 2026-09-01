import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", variant: "split-panel" },
  h1: "Aniimo Launch Hub: Everything Confirmed Before Release",
  seoTitle:
    "Aniimo Launch Guide: Release Date, Platforms, and Mechanics",
  metaDescription:
    "Get the confirmed Aniimo launch details: 15-16 September 2026 release, supported platforms, Twining system, starter and Prismana mechanics, and PvPvE Heist events.",
  summary:
    "Find Aniimo launch date, supported platforms, the Twining merge system, starter and Prismana basics, the Heist of the Lost Isles PvPvE mode, and pre-launch reception in one US English reference hub.",
  hero: {
    eyebrow: "Aniimo pre-launch reference",
    subtitle:
      "Aniimo (Pawprint Studio) is an open-world creature-catching RPG launching 15-16 September 2026 on PS5, Xbox Series X|S, PC, iOS, and Android. Use this hub to confirm launch timing, platform support, the Twining merge mechanic, and the seasonal Heist of the Lost Isles PvPvE mode.",
    ctas: [
      { label: "Release Overview", href: "/release-overview" },
      { label: "Twining System", href: "/twining-system" },
    ],
  },
  quickAnswer:
    "Aniimo is an open-world creature-catching RPG from Pawprint Studio launching 15-16 September 2026 across PS5, Xbox Series X|S, PC (Steam and Epic), iOS, and Android with a free-to-play model. The headline mechanic is Twining — you throw an Aniipod to catch a wild Aniimo, then merge with that already-caught Aniimo to use its movement type, element, and combat kit. Seasonal PvPvE content ships as Heist of the Lost Isles, a 3-player squad mode.",
  keyFacts: [
    { label: "Developer / Publisher", value: "Pawprint Studio" },
    { label: "Launch window", value: "15-16 September 2026" },
    {
      label: "Platforms",
      value: "PS5, Xbox Series X|S, PC (Steam, Epic), iOS, Android",
    },
    { label: "Business model", value: "Free-to-play with in-app purchases" },
    {
      label: "Headline mechanic",
      value: "Twining merge + Aniipod capture",
    },
    {
      label: "PvPvE mode",
      value: "Heist of the Lost Isles (3-player squad)",
    },
  ],
  modules: [
    {
      id: "home-release-date",
      type: "prose",
      heading: "Release Date and Confirmed Platforms",
      body:
        "The global launch window is 15-16 September 2026, depending on time zone. The Steam store page lists 15 September 2026 as the unlock date, while regional coverage lists 16 September 2026 for players in Asia-Pacific and East Asia release windows.\n\nConfirmed platforms at launch are PlayStation 5, Xbox Series X|S, PC via Steam, PC via Epic Games Store, iOS, and Android. Pawprint Studio has not announced a Nintendo Switch version, and cloud-streaming availability is not part of the confirmed lineup.\n\nSee the [Aniimo release overview](/release-overview) page for the per-platform status table, pre-order state, and supported languages.",
    },
    {
      id: "home-system-requirements",
      type: "prose",
      heading: "PC System Requirements and Storage",
      body:
        "The current English Steam page now names CPU and GPU models. The minimum spec is an Intel i7-9700 or AMD Ryzen 5 3600X or above with a GTX 1060 or AMD Radeon RX 6600 and 12 GB of RAM; the recommended spec is an Intel Core i7-12700F or AMD Ryzen 7700X or above with an NVIDIA GeForce RTX 3070 8G or AMD Radeon RX 6800 and 16 GB of RAM. Both tiers list 45 GB of available space, a 64-bit Windows 10 or newer install, and a broadband connection. Older regional pages that showed 8 GB of RAM and 30 GB of storage are superseded, and controller support is confirmed for Xbox and PlayStation pads.\n\nSee the [Aniimo PC system requirements](/system-requirements) page for the full minimum vs recommended table.",
    },
    {
      id: "home-prelaunch-hub",
      type: "prose",
      heading: "Pre-Launch Answer Hub: Five Updated Guides",
      body:
        "These five pages carry the current pre-launch answers, refreshed on 2026-09-02:\n\n- Starter roster and named forms — Budclaw, Celestis, Nimbi, Emberpup, and Chirpi with movement notes: [Aniimo starter and Prismana](/starter-and-prismana).\n- Evolution lines — the named Emberpup to Flameruff to Scorchhowl chain plus Interlupa, and the Closed Beta 3 roster additions: [Aniimo evolution and stages](/evolution-and-stages).\n- Pre-registration rewards — the Susuta egg, the Perfect Egg, the 10M to 30M milestone ladder, and per-platform storefront links for PS5, Xbox, Steam, Epic, App Store, and Google Play: [Aniimo pre-order and editions](/pre-order-and-editions).\n- Squad strategy — 3-player role coverage, the six-team Diamond Egg Heist, and the Bubbask and Coraliz co-op bosses: [Aniimo Heist of the Lost Isles](/heist-of-the-lost-isles).\n- PC specs, trading, and future betas — the Steam CPU and GPU model strings on [Aniimo PC system requirements](/system-requirements), and the trading system, beta reset, and sign-up channels on [Aniimo closed beta and sign-ups](/closed-beta-and-signups).",
    },
    {
      id: "home-twining",
      type: "prose",
      heading: "Twining System and Core Gameplay Loop",
      body:
        "Aniipods are the in-game capture device you throw at a wild Aniimo to attempt a catch. Once an Aniimo is caught, Twining merges your player character with that already-caught Aniimo to use its movement type, element, and combat kit. Catching and Twining are two separate steps: the Aniipod adds the Aniimo to your roster, and the Twining merge applies on top of that already-caught roster member. Combat is action-oriented rather than turn-based, with dash, dodge, and skill-based engagement.\n\nThe core loop is open-world exploration, Twining encounters, party-based co-op for up to three players, and seasonal PvPvE events. Starter choice and early-game roster composition matter because Twining shapes how your party fights, supports, or roams.\n\nSee the [Aniimo Twining system](/twining-system) page for Command Mode vs Twine Mode details.",
    },
    {
      id: "home-starter-prismana",
      type: "prose",
      heading: "Starter and Prismana Basics",
      body:
        "A Prismana form is an alternate-color variant of a standard Aniimo with a shifted palette and slightly different stats. Prismana forms follow the same Lumin to Gamma to Nova evolution pipeline as standard forms, and they sit alongside weather, regional, and Sparkling variants as a layer rather than a separate stage. The starter is the partner you begin the game with, chosen from a small selection at the start of the adventure. Because every wild Aniimo can be caught with an Aniipod and then Twined, the starter determines your early combat style until you expand the roster.\n\nA full breakdown of starter choices, Prismana categories, and roster planning lives on the [Aniimo starter and Prismana](/starter-and-prismana) page.",
    },
    {
      id: "home-heist",
      type: "prose",
      heading: "Heist of the Lost Isles Event",
      body:
        "Heist of the Lost Isles is the headline seasonal PvPvE mode. Matches are built around a 3-player squad, with real-time searching for high-value egg caches and live combat against both environment enemies and rival squads. The mode rotates seasonally, and the full reward structure, including rare unlocks, currency payouts, and rank-based bonuses, is not announced as of 2026-08-29.\n\nPvP is not the only way to progress; players who prefer pure PvE can ignore Heist and focus on open-world Twining, exploration, and story content. Mode-by-mode details are on the [Aniimo Heist of the Lost Isles](/heist-of-the-lost-isles) page.",
    },
    {
      id: "home-reception",
      type: "prose",
      heading: "Review and Reception Status",
      body:
        "The game has not launched yet, so full review coverage is not available. Preview coverage from CBR, ComicBook.com, GamingBible, and Loot Level Chill has focused on the Twining system, visual style, and co-op loop. Final review coverage will begin after the global unlock on 15-16 September 2026.\n\nLive preview impressions and post-launch reviews are tracked on the [Aniimo review and reception](/review-and-reception) page.",
    },
    {
      id: "home-fact-boundary",
      type: "callout",
      tone: "caution",
      title: "Fact boundary — 2026-08-29",
      body:
        "Aniimo is a new IP from Pawprint Studio; no prior Aniimo game exists to inherit mechanics, lore, or roster data from. The launch window is 15-16 September 2026; exact unlock hour and minute per time zone are not announced as of 2026-08-29. Starter list, full Prismana roster, cross-play status, Nintendo Switch release, and cloud-streaming availability are not announced as of 2026-08-29. Review and reception content does not exist yet because Aniimo has not launched; preview impressions are attributed to the original outlets and do not represent final review verdicts.",
    },
    {
      id: "home-sources",
      type: "prose",
      heading: "Sources",
      body:
        "- [Aniimo Official Site](https://www.aniimo.com/) — `official/store` — checked `2026-08-29` — confirms global launch date, platform lineup, Twining system, and pre-registration rewards.\n- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-08-29` — confirms 15 September 2026 release, Steam spec, and free-to-play model.\n- [Pawprint Studio](https://www.pawprintstudio.com/) — `official/store` — checked `2026-08-29` — developer studio page, used to attribute the Aniimo IP and Twining system to Pawprint Studio.\n- [Game Trader Aniimo coverage](https://www.gametrader.sg/blog/tag/aniimo) — `media/interview` — checked `2026-08-29` — regional preview coverage of mechanics, starter, and platform lineup.\n- [GameHaunt release overview](https://gamehaunt.com/aniimo-release-date-platforms-and-everything-we-know-2026) — `media/interview` — checked `2026-08-29` — secondary confirmation of 15-16 September 2026 launch window and platform list.",
    },
  ],
  faqIds: [
    "home-when-release",
    "home-free-to-play",
    "home-pre-order",
    "home-platforms",
    "home-pc-spec",
  ],
  relatedPageIds: [
    "fixed-release-overview-en-us",
    "fixed-twining-system-en-us",
    "fixed-system-requirements-en-us",
    "fixed-platforms-and-versions-en-us",
    "fixed-heist-of-the-lost-isles-en-us",
    "fixed-starter-and-prismana-en-us",
    "fixed-pre-order-and-editions-en-us",
    "fixed-closed-beta-and-signups-en-us",
    "fixed-review-and-reception-en-us",
  ],
  schemaTypes: ["WebSite", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-02",
};
