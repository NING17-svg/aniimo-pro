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
    "Aniimo Launch Guide: 16 September PC/Console + 23 September Mobile",
    metaDescription:
    "Get the confirmed Aniimo launch details: 16 September 2026 PC/console/Xbox cloud release, 23 September 2026 iOS and Android release, supported platforms, Twining system, starter and Prismana mechanics, and PvPvE Heist events.",
  summary:
    "Find Aniimo launch dates, supported platforms, the Twining merge system, starter and Prismana basics, the Heist of the Lost Isles PvPvE mode with Chaos Mode, and pre-launch reception in one US English reference hub.",
  hero: {
    eyebrow: "Aniimo pre-launch reference",
    subtitle:
      "Aniimo (Pawprint Studio) is an open-world creature-catching RPG launching 16 September 2026 on PS5, Xbox Series X|S, Xbox Cloud Gaming, and PC, and 23 September 2026 on iOS and Android. Use this hub to confirm launch timing, platform support, the Twining merge mechanic, and the seasonal Heist of the Lost Isles PvPvE mode.",
    ctas: [
      { label: "Release Overview", href: "/release-overview" },
      { label: "Twining System", href: "/twining-system" },
    ],
  },
  quickAnswer:
    "Aniimo is an open-world creature-catching RPG from Pawprint Studio launching in two confirmed September 2026 windows: PS5, Xbox Series X|S, Xbox Cloud Gaming, and PC (Steam and Epic) on 16 September 2026, with iOS and Android one week later on 23 September 2026. The headline mechanic is Twining — you throw an Aniipod to catch a wild Aniimo, then merge with that already-caught Aniimo to use its movement type, element, and combat kit. Seasonal PvPvE content ships as Heist of the Lost Isles, a 3-player squad mode with Chaos Mode layered on top of the six-team Diamond Egg Heist bracket.",
  keyFacts: [
    { label: "Developer / Publisher", value: "Pawprint Studio" },
    { label: "Console + PC + cloud launch", value: "16 September 2026" },
    { label: "Mobile (iOS, Android) launch", value: "23 September 2026" },
    {
      label: "Platforms",
      value: "PS5, Xbox Series X|S, Xbox Cloud, PC (Steam, Epic), iOS, Android",
    },
    { label: "Business model", value: "Free-to-play with in-app purchases" },
    {
      label: "Headline mechanic",
      value: "Twining merge + Aniipod capture",
    },
    {
      label: "PvPvE mode",
      value: "Heist of the Lost Isles (3-player squad) + Chaos Mode",
    },
  ],
  modules: [
    {
      id: "home-release-date",
      type: "prose",
      heading: "Release Date and Confirmed Platforms",
      body:
        "Aniimo launches in two confirmed September 2026 windows. PS5, Xbox Series X|S, Xbox Cloud Gaming, and PC (Steam and Epic) launch on 16 September 2026; iOS and Android launch one week later, on 23 September 2026. The earlier single 15-16 September 2026 window is superseded.\n\nConfirmed platforms at launch are PlayStation 5, Xbox Series X|S, Xbox Cloud Gaming, PC via Steam, PC via Epic Games Store, iOS, and Android. A Nintendo Switch version is not announced as of 2026-09-05.\n\nSee the [Aniimo release overview](/release-overview) page for the per-platform status table, pre-order state, and supported languages.",
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
        "Heist of the Lost Isles is the headline seasonal PvPvE mode. Matches are built around a 3-player squad, with real-time searching for high-value egg caches and live combat against both environment enemies and rival squads. The Diamond Egg Heist scales the format to six teams of three contesting a single diamond egg, and Chaos Mode layers a wider egg-type pool and rebalanced squad and element priorities on top of the same six-team bracket.\n\nPvP is not the only way to progress; players who prefer pure PvE can ignore Heist and focus on open-world Twining, exploration, and story content. Mode-by-mode details are on the [Aniimo Heist of the Lost Isles](/heist-of-the-lost-isles) page.",
    },
    {
      id: "home-reception",
      type: "prose",
      heading: "Review and Reception Status",
      body:
        "The game has not launched yet, so full review coverage is not available. Preview coverage from CBR, ComicBook.com, GamingBible, and Loot Level Chill has focused on the Twining system, visual style, and co-op loop. Final review coverage will begin after the global unlock on 16 September 2026 for PC / console / Xbox cloud and 23 September 2026 for iOS / Android.\n\nLive preview impressions and post-launch reviews are tracked on the [Aniimo review and reception](/review-and-reception) page.",
    },
    {
      id: "home-fact-boundary",
      type: "callout",
      tone: "caution",
      title: "Fact boundary — 2026-09-05",
      body:
        "Aniimo is a new IP from Pawprint Studio; no prior Aniimo game exists to inherit mechanics, lore, or roster data from. The launch window is split: PS5, Xbox Series X|S, Xbox Cloud Gaming, and PC on 16 September 2026; iOS and Android on 23 September 2026. Exact unlock hour and minute per time zone are not announced as of 2026-09-05. Starter list, full Prismana roster, cross-play status, and Nintendo Switch release are not announced as of 2026-09-05. Review and reception content does not exist yet because Aniimo has not launched; preview impressions are attributed to the original outlets and do not represent final review verdicts.",
    },
    {
      id: "home-sources",
      type: "prose",
      heading: "Sources",
      body:
        "- [Aniimo Official Site](https://www.aniimo.com/) — `official/store` — checked `2026-09-05` — confirms the platform split (16 September 2026 PC/console/Xbox cloud, 23 September 2026 iOS/Android), multi-language main-story VO, Twining system, and pre-registration rewards.\n- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-09-05` — confirms 16 September 2026 PC release, Steam spec, and free-to-play model.\n- [Aniimo Dev Letter (2026-09-03)](https://www.aniimo.com/newslist/detail/100051) — `official/news` — checked `2026-09-05` — confirms the rune-system removal, the Prismana flat-base + lucky strike + season spawn rework, the Umbral variant with Perfect Potential via Wild Surges, the Irisalis Legendary redesign, the multi-area Homeland expansion, and Chaos Mode.\n- [Pawprint Studio](https://www.pawprintstudio.com/) — `official/store` — checked `2026-09-05` — developer studio page, used to attribute the Aniimo IP and Twining system to Pawprint Studio.\n- [CBR — Aniimo official September 2026](https://www.cbr.com/free-open-world-pokemon-replacement-official-september-2026) — `media/interview` — checked `2026-09-05` — secondary confirmation of the platform split.",
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
  lastReviewed: "2026-09-05",
};
