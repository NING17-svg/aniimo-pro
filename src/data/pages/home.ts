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
    "Get the confirmed Aniimo launch details: simultaneous 10:00 UTC+8 global unlock on 16 September 2026 (PC/PS5/Xbox/Xbox Cloud) and 23 September 2026 (mobile), supported platforms, the Advanced and Collector's pre-order packs with the Companion Handbook battle pass, current Steam PC specs, Twining system, and PvPvE Heist events.",
  summary:
    "Find Aniimo launch dates, the 10:00 UTC+8 simultaneous global unlock and per-timezone table, the Advanced ($9.99) and Collector's ($19.99) pre-order packs with the Companion Handbook battle pass, current Steam PC specs, the Twining merge system, starter and Prismana basics, the Heist of the Lost Isles PvPvE mode with Chaos Mode, and pre-launch reception in one US English reference hub.",
  hero: {
    eyebrow: "Aniimo pre-launch reference",
    subtitle:
      "Aniimo (Pawprint Studio) is an open-world creature-catching RPG launching 16 September 2026 at 10:00 UTC+8 on PS5, Xbox Series X|S, Xbox Cloud Gaming, and PC, and 23 September 2026 at the same 10:00 UTC+8 anchor on iOS and Android. Use this hub to confirm launch timing in your time zone, the Advanced and Collector's pre-order packs, platform support, the Twining merge mechanic, and the seasonal Heist of the Lost Isles PvPvE mode.",
    ctas: [
      { label: "Release Overview", href: "/release-overview" },
      { label: "Pre-order & Editions", href: "/pre-order-and-editions" },
    ],
  },
  quickAnswer:
    "Aniimo is an open-world creature-catching RPG from Pawprint Studio launching in two confirmed September 2026 windows with a simultaneous 10:00 UTC+8 global unlock: PS5, Xbox Series X|S, Xbox Cloud Gaming, and PC (Steam and Epic) on 16 September 2026, with iOS and Android one week later on 23 September 2026 at the same anchor. The base game is free, with Advanced ($9.99) and Collector's ($19.99) pre-order packs on PS5 and Xbox that include the Companion Handbook battle pass and a platform-exclusive accessory. The headline mechanic is Twining — you throw an Aniipod to catch a wild Aniimo, then merge with that already-caught Aniimo to use its movement type, element, and combat kit. Seasonal PvPvE content ships as Heist of the Lost Isles, a 3-player squad mode with Chaos Mode layered on top of the six-team Diamond Egg Heist bracket.",
  keyFacts: [
    { label: "Developer / Publisher", value: "Pawprint Studio" },
    { label: "Console + PC + cloud launch", value: "16 September 2026 at 10:00 UTC+8" },
    { label: "Mobile (iOS, Android) launch", value: "23 September 2026 at 10:00 UTC+8" },
    {
      label: "Platforms",
      value: "PS5, Xbox Series X|S, Xbox Cloud, PC (Steam, Epic), iOS, Android",
    },
    { label: "Business model", value: "Free-to-play + Advanced ($9.99) and Collector's ($19.99) on PS5/Xbox" },
    { label: "Pre-order window closes", value: "16 September 2026 09:59 UTC+8" },
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
        "Aniimo launches in two confirmed September 2026 windows with a simultaneous 10:00 UTC+8 global unlock. PS5, Xbox Series X|S, Xbox Cloud Gaming, and PC (Steam and Epic) launch on 16 September 2026; iOS and Android launch one week later, on 23 September 2026 at the same 10:00 UTC+8 anchor. The earlier single 15-16 September 2026 window is superseded.\n\nConfirmed platforms at launch are PlayStation 5, Xbox Series X|S, Xbox Cloud Gaming, PC via Steam, PC via Epic Games Store, iOS, and Android. A Nintendo Switch version is not announced as of 2026-09-14.\n\nSee the [Aniimo release overview](/release-overview) page for the per-timezone unlock table, the per-platform status table, pre-order state, and supported languages.",
    },
    {
      id: "home-launch-timezones",
      type: "prose",
      heading: "Launch Unlock in Your Time Zone",
      body:
        "The simultaneous global unlock anchors on 10:00 UTC+8 on 16 September 2026 for PS5, Xbox Series X|S, Xbox Cloud Gaming, and PC (Steam and Epic). Per-timezone conversions:\n\n- PT 19:00 Sep 15 — CT 21:00 Sep 15 — ET 22:00 Sep 15 — BRT 23:00 Sep 15\n- BST 02:00 Sep 16 — CEST 03:00 Sep 16\n- CST 10:00 Sep 16 — KST 11:00 Sep 16 — JST 11:00 Sep 16 — AET 13:00 Sep 16 — NZST 15:00 Sep 16\n\nMobile (iOS and Android) players unlock one week later, on 23 September 2026 at the same 10:00 UTC+8 anchor.\n\nThe PS5 and Xbox pre-order window for the Advanced ($9.99) and Collector's ($19.99) editions closes at 09:59 UTC+8 on 16 September 2026 — one minute before the global unlock. Full table and platform-specific pre-load notes on the [Aniimo release overview](/release-overview) page.",
    },
    {
      id: "home-system-requirements",
      type: "prose",
      heading: "PC System Requirements and Storage",
      body:
        "The current English Steam page lists the minimum spec as an Intel Core i7-4770 or AMD Ryzen 7 2700 or above with an NVIDIA GTX 970 or AMD Radeon RX 5600 and 8 GB of RAM, and the recommended spec as an Intel Core i7-10700 or AMD Ryzen 5 5600 or above with an NVIDIA GeForce RTX 3060 or AMD Radeon RX 6700 and 16 GB of RAM. Both tiers list 40 GB of available space, a 64-bit Windows 10 or newer install, DirectX 11, and a broadband connection. Older regional pages that surface prior wording (12 GB / 45 GB or 8 GB / 30 GB) are superseded, and controller support is confirmed for Xbox and PlayStation pads.\n\nSee the [Aniimo PC system requirements](/system-requirements) page for the full minimum vs recommended table.",
    },
    {
      id: "home-prelaunch-hub",
      type: "prose",
      heading: "Pre-Launch Answer Hub: Five Updated Guides",
      body:
        "These five pages carry the current pre-launch answers:\n\n- Starter roster and named forms — Budclaw, Celestis, Nimbi, Emberpup, and Chirpi with movement notes: [Aniimo starter and Prismana](/starter-and-prismana).\n- Evolution lines — the named Emberpup to Flameruff to Scorchhowl chain plus Interlupa, and the Closed Beta 3 roster additions: [Aniimo evolution and stages](/evolution-and-stages).\n- Pre-order packs, Companion Handbook, and free pre-registration rewards — Advanced ($9.99) and Collector's ($19.99) on PS5 and Xbox with the PS5 Fluffy Friend and Xbox Doggo Dude accessories, the Companion Handbook-Exclusive Prismana Aniimo Egg and Evolution Material, the 16 September 2026 09:59 UTC+8 pre-order cutoff, plus the Susuta egg, the Perfect Egg, and the 10M to 30M milestone ladder: [Aniimo pre-order and editions](/pre-order-and-editions).\n- Squad strategy — 3-player role coverage, the six-team Diamond Egg Heist, and the Bubbask and Coraliz co-op bosses: [Aniimo Heist of the Lost Isles](/heist-of-the-lost-isles).\n- PC specs, trading, and future betas — the Steam CPU and GPU model strings on [Aniimo PC system requirements](/system-requirements), and the trading system, beta reset, and sign-up channels on [Aniimo closed beta and sign-ups](/closed-beta-and-signups).",
    },
    {
      id: "home-pre-order-callout",
      type: "prose",
      heading: "Pre-Order Window Closes 16 September 2026 09:59 UTC+8",
      body:
        "If you are buying the Aniimo pre-order packs on PlayStation 5 or Xbox, the cutoff is hard. The Advanced Edition ($9.99) and Collector's Edition ($19.99) come off the storefront at 09:59 UTC+8 on 16 September 2026, one minute before the 10:00 UTC+8 simultaneous global unlock on PC, PS5, and Xbox Series X|S. Both packs include the platform-exclusive accessory (PS5 Fluffy Friend or Xbox Doggo Dude) and the Companion Handbook battle pass; the Collector's adds the Primegy Battery granted immediately plus the exclusive Doll and Avatar Frame inside the Collector's Companion Handbook.\n\nSee the [Aniimo pre-order and editions](/pre-order-and-editions) page for the full editions table and claim steps.",
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
        "The game has not launched yet, so full review coverage is not available. Preview coverage from CBR, ComicBook.com, GamingBible, and Loot Level Chill has focused on the Twining system, visual style, and co-op loop. Final review coverage will begin after the 10:00 UTC+8 simultaneous global unlock on 16 September 2026 for PC / PS5 / Xbox Series X|S (Xbox Cloud Gaming included) and on 23 September 2026 for iOS / Android.\n\nLive preview impressions and post-launch reviews are tracked on the [Aniimo review and reception](/review-and-reception) page.",
    },
    {
      id: "home-companion-mode",
      type: "prose",
      heading: "Companion Mode and Personality Layers",
      body:
        "Two social and build layers ship alongside the open-world catch loop. Companion Mode is the social path: five trophies map onto gifting one Aniimo (A Buddy for My Buddy), one Treasured Trade exchange, Twin Bond Level 5 (Hearts in Tune), one Photo Studio shot (Friends in Focus), and one flute play (A Match Made Through Music). The Personality layer is the build path: the four MBTI-style axes (E/I, S/N, T/F, J/P) with +3% / +6% / +10% tiers feed directly into P.ATK, M.ATK, damage, crit, P.DEF, M.DEF, HP, and gusto, and the free-path reroll keeps you from spending money to chase the named personalities Clingy, Practical, Aloof, and Faithful.\n\nSee the [Aniimo Companion Mode](/companion-mode) and [Aniimo Potential and Personality](/potential-and-personality) pages for the full loops.",
    },
    {
      id: "home-fact-boundary",
      type: "callout",
      tone: "caution",
      title: "Fact boundary — 2026-09-14",
      body:
        "Aniimo is a new IP from Pawprint Studio; no prior Aniimo game exists to inherit mechanics, lore, or roster data from. The launch window is split: PS5, Xbox Series X|S, Xbox Cloud Gaming, and PC on 16 September 2026; iOS and Android on 23 September 2026. The simultaneous global unlock anchors on 10:00 UTC+8 on 16 September 2026 for PC, PS5, and Xbox Series X|S (including Xbox Cloud Gaming); mobile unlocks at the same 10:00 UTC+8 anchor on 23 September 2026. The PS5 and Xbox Advanced ($9.99) and Collector's ($19.99) pre-order packs close their pre-order window at 09:59 UTC+8 on 16 September 2026. Starter list, full Prismana roster, cross-play status, and Nintendo Switch release are not announced as of 2026-09-14. Review and reception content does not exist yet because Aniimo has not launched; preview impressions are attributed to the original outlets and do not represent final review verdicts.",
    },
    {
      id: "home-sources",
      type: "prose",
      heading: "Sources",
      body:
        "- [Aniimo Official Site](https://www.aniimo.com/) — `official/store` — checked `2026-09-14` — confirms the platform split (16 September 2026 PC/console/Xbox cloud, 23 September 2026 iOS/Android), multi-language main-story VO, Twining system, and pre-registration rewards.\n- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-09-14` — confirms 16 September 2026 PC release, current English Steam spec, and free-to-play model.\n- [Aniimo Dev Letter (2026-09-03)](https://www.aniimo.com/newslist/detail/100051) — `official/news` — checked `2026-09-14` — confirms the rune-system removal, the Prismana flat-base + lucky strike + season spawn rework, the Umbral variant with Perfect Potential via Wild Surges, the Irisalis Legendary redesign, the multi-area Homeland expansion, and Chaos Mode.\n- [Aniimo on PlayStation Store](https://www.playstation.com/en-us/games/aniimo/) — `official/store` — checked `2026-09-14` — confirms the Advanced ($9.99) and Collector's ($19.99) pre-order packs, the Companion Handbook battle pass, the PS5 Fluffy Friend accessory, and the 16 September 2026 09:59 UTC+8 pre-order window.\n- [Fandomwire — Aniimo official release date times and everything you need to know](https://fandomwire.com/aniimo-official-release-date-times-and-everything-you-need-to-know) — `media/release` — checked `2026-09-14` — publishes the 10:00 UTC+8 simultaneous global unlock anchor and the per-timezone table sourced from the official PlayStation page.\n- [Pawprint Studio](https://www.pawprintstudio.com/) — `official/store` — checked `2026-09-14` — developer studio page, used to attribute the Aniimo IP and Twining system to Pawprint Studio.\n- [CBR — Aniimo official September 2026](https://www.cbr.com/free-open-world-pokemon-replacement-official-september-2026) — `media/interview` — checked `2026-09-14` — secondary confirmation of the platform split.",
    },
  ],
  faqIds: [
    "home-when-release",
    "home-free-to-play",
    "home-pre-order",
    "home-platforms",
    "home-pc-spec",
    "release-unlock-timezones",
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
    "fixed-companion-mode-en-us",
    "fixed-potential-and-personality-en-us",
    "fixed-review-and-reception-en-us",
  ],
  schemaTypes: ["WebSite", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-14",
};
