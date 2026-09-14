import type { PageContent } from "@/types/content";

export const fixedPages: PageContent[] = [
  {
    id: "fixed-release-overview-en-us",
    translationKey: "release-overview",
    locale: "en-US",
    routeKind: "fixed",
    slug: "release-overview",
    url: "/release-overview",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Aniimo Release Date: Global Launch Status by Platform",
    seoTitle:
      "Aniimo Release Date: 16 September 2026 PC/Console + 23 September 2026 Mobile Launch",
    metaDescription:
      "Aniimo release date confirmed for 16 September 2026 on PS5, Xbox Series X|S, Xbox cloud, and PC, with iOS and Android on 23 September 2026. Check pre-order, beta, and language support.",
    summary:
      "Aniimo release date is split across two windows in September 2026 with a simultaneous 10:00 UTC+8 global unlock. PS5, Xbox Series X|S, Xbox cloud, and PC (Steam and Epic) launch on 16 September 2026; iOS and Android launch on 23 September 2026 at the same 10:00 UTC+8 anchor. The base game is free to play, with paid Advanced ($9.99) and Collector's ($19.99) pre-order packs on PS5 and Xbox.",
    hero: {
      eyebrow: "Release overview",
      subtitle:
        "Two confirmed launch windows in September 2026 with a simultaneous 10:00 UTC+8 global unlock. PS5, Xbox Series X|S, Xbox cloud, and PC (Steam, Epic) on 16 September 2026, with iOS and Android on 23 September 2026. Twelve non-English interface languages are confirmed, and the main-story voiceover ships in multiple languages alongside English.",
      ctas: [
        { label: "Platforms & Versions", href: "/platforms-and-versions" },
        { label: "Pre-order & Editions", href: "/pre-order-and-editions" },
        { label: "Closed Beta", href: "/closed-beta-and-signups" },
      ],
    },
    quickAnswer:
      "Aniimo launches in two confirmed windows with a simultaneous 10:00 UTC+8 global unlock. PS5, Xbox Series X|S, Xbox cloud gaming, and PC (Steam and Epic Games Store) launch on 16 September 2026 at 10:00 UTC+8. iOS and Android launch one week later, on 23 September 2026, at the same 10:00 UTC+8 anchor. The base game is free to play, with paid Advanced ($9.99) and Collector's ($19.99) pre-order packs on PS5 and Xbox that close their pre-order window at 09:59 UTC+8 on 16 September 2026. Per-timezone unlock hours are in the table below.",
    keyFacts: [
      { label: "Console + PC + cloud launch", value: "16 September 2026 at 10:00 UTC+8" },
      { label: "Mobile (iOS, Android) launch", value: "23 September 2026 at 10:00 UTC+8" },
      { label: "Simultaneous global unlock anchor", value: "10:00 UTC+8" },
      {
        label: "Platforms",
        value: "PS5, Xbox Series X|S, Xbox cloud, PC (Steam, Epic), iOS, Android",
      },
      { label: "Steam AppID", value: "4126040" },
      { label: "Business model", value: "Free-to-play + Advanced ($9.99) and Collector's ($19.99) pre-order packs on PS5 and Xbox" },
      { label: "Pre-order window closes", value: "16 September 2026 09:59 UTC+8" },
      { label: "Languages at launch", value: "English (full) + 12 interface-only; multi-language main-story VO" },
    ],
    modules: [
      {
        id: "release-status-table",
        type: "data-table",
        heading: "Release Status by Platform",
        columns: [
          { key: "platform", label: "Platform" },
          { key: "releaseDate", label: "Release Date" },
          { key: "preOrder", label: "Pre-Order" },
          { key: "status", label: "Status" },
        ],
        rows: [
          { platform: "PS5", releaseDate: "16 September 2026", preOrder: "Not required", status: "Confirmed" },
          { platform: "Xbox Series X|S", releaseDate: "16 September 2026", preOrder: "Not required", status: "Confirmed" },
          { platform: "Xbox Cloud Gaming", releaseDate: "16 September 2026", preOrder: "Not required", status: "Confirmed" },
          { platform: "PC (Steam)", releaseDate: "16 September 2026", preOrder: "Not required", status: "Confirmed" },
          { platform: "PC (Epic Games Store)", releaseDate: "16 September 2026", preOrder: "Not required", status: "Confirmed" },
          { platform: "iOS", releaseDate: "23 September 2026", preOrder: "Not required", status: "Confirmed" },
          { platform: "Android", releaseDate: "23 September 2026", preOrder: "Not required", status: "Confirmed" },
          { platform: "Nintendo Switch", releaseDate: "Not announced as of 2026-09-14", preOrder: "Not applicable", status: "Not announced as of 2026-09-14" },
        ],
      },
      {
        id: "release-pre-order",
        type: "prose",
        heading: "Pre-Order State for Aniimo",
        body:
          "Aniimo's base game is free-to-play with optional in-app purchases, and the PlayStation Store and Xbox Store now list paid Advanced ($9.99) and Collector's ($19.99) pre-order packs that bundle a platform-exclusive accessory (PS5 Fluffy Friend or Xbox Doggo Dude) and the Companion Handbook battle pass. The pre-order window closes at 09:59 UTC+8 on 16 September 2026. Players can still pre-register on the official site, Steam, or Epic Games Store to claim the free reward ladder (Glimmer x200, Aniipod Ultra x2, the \"Companion Promise\" avatar frame, and the \"Sunlit Meadow\" outfit). Three launch-day items (Sparkling Cube, Aniipod Ultra, Tumbler) are granted to all players free. The Sparkling Cube now carries a guaranteed Perfect Potential outcome, which means the Sparkling variant it produces always lands on its maximum individual-values spread.\n\nFor the full editions table, Companion Handbook contents, free pre-registration tracks, and claim steps, see the [Aniimo pre-order and editions](/pre-order-and-editions) page. The Sparkling Cube Perfect Potential guarantee and the new catching-side mechanics are covered on the [Aniimo catching and Aniipods](/catching-and-aniipods) page.",
      },
      {
        id: "release-languages",
        type: "data-table",
        heading: "Supported Languages at Launch",
        columns: [
          { key: "language", label: "Language" },
          { key: "interface", label: "Interface" },
          { key: "audio", label: "Audio" },
          { key: "subtitles", label: "Subtitles" },
          { key: "status", label: "Status" },
        ],
        rows: [
          { language: "English", interface: "Yes", audio: "Yes (main-story VO)", subtitles: "Yes", status: "Confirmed" },
          { language: "Simplified Chinese", interface: "Yes", audio: "Main-story VO", subtitles: "Confirmed", status: "Interface + main-story VO" },
          { language: "Traditional Chinese", interface: "Yes", audio: "Main-story VO", subtitles: "Confirmed", status: "Interface + main-story VO" },
          { language: "Japanese", interface: "Yes", audio: "Main-story VO", subtitles: "Confirmed", status: "Interface + main-story VO" },
          { language: "Korean", interface: "Yes", audio: "Main-story VO", subtitles: "Confirmed", status: "Interface + main-story VO" },
          { language: "French", interface: "Yes", audio: "Main-story VO", subtitles: "Confirmed", status: "Interface + main-story VO" },
          { language: "German", interface: "Yes", audio: "Main-story VO", subtitles: "Confirmed", status: "Interface + main-story VO" },
          { language: "Spanish (LatAm)", interface: "Yes", audio: "Main-story VO", subtitles: "Confirmed", status: "Interface + main-story VO" },
          { language: "Portuguese (Brazil)", interface: "Yes", audio: "Main-story VO", subtitles: "Confirmed", status: "Interface + main-story VO" },
          { language: "Russian", interface: "Yes", audio: "Interface only", subtitles: "Interface only", status: "Interface only" },
          { language: "Indonesian", interface: "Yes", audio: "Interface only", subtitles: "Interface only", status: "Interface only" },
          { language: "Thai", interface: "Yes", audio: "Interface only", subtitles: "Interface only", status: "Interface only" },
          { language: "Vietnamese", interface: "Yes", audio: "Interface only", subtitles: "Interface only", status: "Interface only" },
        ],
      },
      {
        id: "release-regional",
        type: "prose",
        heading: "Regional Notes on Launch Timing",
        body:
          "The 2026-09-05 platform split fixes the launch cadence: console, Xbox cloud, and PC players plan for 16 September 2026, and iOS / Android players plan for 23 September 2026. The earlier 15-16 September 2026 single-window framing has been superseded. The simultaneous global unlock anchors on 10:00 UTC+8 — see the timezone table below for your local unlock hour.",
      },
      {
        id: "release-unlock-timezones",
        type: "data-table",
        heading: "Launch Unlock Times by Time Zone (10:00 UTC+8 Anchor)",
        columns: [
          { key: "timezone", label: "Time Zone" },
          { key: "date", label: "Local Date" },
          { key: "local", label: "Local Unlock" },
          { key: "platforms", label: "Platforms" },
        ],
        rows: [
          { timezone: "Pacific Time (PT)", date: "15 September 2026", local: "19:00 PT", platforms: "PS5, Xbox Series X|S, Xbox Cloud, PC (Steam, Epic)" },
          { timezone: "Central Time (CT)", date: "15 September 2026", local: "21:00 CT", platforms: "PS5, Xbox Series X|S, Xbox Cloud, PC (Steam, Epic)" },
          { timezone: "Eastern Time (ET)", date: "15 September 2026", local: "22:00 ET", platforms: "PS5, Xbox Series X|S, Xbox Cloud, PC (Steam, Epic)" },
          { timezone: "Brasília Time (BRT)", date: "15 September 2026", local: "23:00 BRT", platforms: "PS5, Xbox Series X|S, Xbox Cloud, PC (Steam, Epic)" },
          { timezone: "British Summer Time (BST)", date: "16 September 2026", local: "02:00 BST", platforms: "PS5, Xbox Series X|S, Xbox Cloud, PC (Steam, Epic)" },
          { timezone: "Central European Summer Time (CEST)", date: "16 September 2026", local: "03:00 CEST", platforms: "PS5, Xbox Series X|S, Xbox Cloud, PC (Steam, Epic)" },
          { timezone: "China Standard Time (CST)", date: "16 September 2026", local: "10:00 CST / UTC+8", platforms: "PS5, Xbox Series X|S, Xbox Cloud, PC (Steam, Epic)" },
          { timezone: "Korea Standard Time (KST)", date: "16 September 2026", local: "11:00 KST", platforms: "PS5, Xbox Series X|S, Xbox Cloud, PC (Steam, Epic)" },
          { timezone: "Japan Standard Time (JST)", date: "16 September 2026", local: "11:00 JST", platforms: "PS5, Xbox Series X|S, Xbox Cloud, PC (Steam, Epic)" },
          { timezone: "Australian Eastern Time (AET)", date: "16 September 2026", local: "13:00 AET", platforms: "PS5, Xbox Series X|S, Xbox Cloud, PC (Steam, Epic)" },
          { timezone: "New Zealand Standard Time (NZST)", date: "16 September 2026", local: "15:00 NZST", platforms: "PS5, Xbox Series X|S, Xbox Cloud, PC (Steam, Epic)" },
          { timezone: "Mobile (iOS, Android) — same 10:00 UTC+8 anchor", date: "23 September 2026", local: "10:00 UTC+8", platforms: "iOS, Android" },
        ],
      },
      {
        id: "release-unlock-note",
        type: "callout",
        tone: "confirmed",
        title: "10:00 UTC+8 simultaneous global unlock — PC, PS5, and Xbox",
        body:
          "On 16 September 2026 the simultaneous global unlock anchors on 10:00 UTC+8 across PC (Steam and Epic), PlayStation 5, and Xbox Series X|S (including Xbox Cloud Gaming). The per-timezone table above converts that anchor into your local hour. Mobile (iOS and Android) players unlock one week later, on 23 September 2026, at the same 10:00 UTC+8 anchor. Platform-specific pre-load notes remain on the [Aniimo pre-order and editions](/pre-order-and-editions) page.",
      },
      {
        id: "release-beta-link",
        type: "prose",
        heading: "Pre-Registration, Closed Beta, and Sign-Ups",
        body:
          "Pre-registration is live on the official site and Steam. A closed beta ran earlier, and additional testing windows are not announced as of 2026-09-05. Players wanting future beta access should complete the pre-registration form and join the official Discord.\n\nFor beta history, sign-up instructions, and current test windows, see the [Aniimo closed beta and sign-ups](/closed-beta-and-signups) page.",
      },
      {
        id: "release-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-14",
        body:
          "The launch date is split into two confirmed windows in September 2026: PS5, Xbox Series X|S, Xbox cloud, and PC on 16 September 2026; iOS and Android on 23 September 2026. The earlier single 15-16 September 2026 window and the prior 'cloud streaming not announced as of 2026-08-29' framing are superseded. The simultaneous global unlock anchors on 10:00 UTC+8 on 16 September 2026 for PC, PS5, and Xbox Series X|S (including Xbox Cloud Gaming); the per-timezone table above converts that anchor to local unlock hour. Mobile (iOS and Android) players unlock on 23 September 2026 at the same 10:00 UTC+8 anchor. Supported text languages at launch remain English plus the twelve non-English interface languages listed in the language table; the main-story voiceover ships in multiple languages alongside English, with nine interface languages (Simplified / Traditional Chinese, Japanese, Korean, French, German, Spanish (Latin America), Portuguese (Brazil)) receiving main-story VO. A Nintendo Switch version is not announced as of 2026-09-14. Aniimo is a new IP; no prior Aniimo release exists to inherit release, schedule, or localization facts from. Pre-registration is open; the base game is free and paid pre-order tiers are limited to the PS5 and Xbox Advanced ($9.99) and Collector's ($19.99) editions covered on the pre-order page.",
      },
      {
        id: "release-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo Official Site](https://www.aniimo.com/) — `official/store` — checked `2026-09-14` — confirms the 16 September 2026 PC/console launch, the 23 September 2026 mobile launch, the multi-language main-story VO, and the pre-registration rewards.\n- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-09-14` — confirms 16 September 2026 PC release, free-to-play model, and supported text languages.\n- [Aniimo Dev Letter (2026-09-03)](https://www.aniimo.com/newslist/detail/100051) — `official/news` — checked `2026-09-14` — confirms the platform split and the multi-language main-story VO.\n- [Fandomwire — Aniimo official release date times and everything you need to know](https://fandomwire.com/aniimo-official-release-date-times-and-everything-you-need-to-know) — `media/release` — checked `2026-09-14` — publishes the 10:00 UTC+8 simultaneous global unlock anchor and the per-timezone table sourced from the official PlayStation page.\n- [TheGamesWiki — Aniimo servers and cross-play](https://thegameswiki.com/aniimo/wiki/servers-and-cross-play) — `media/wiki` — checked `2026-09-14` — cross-references the same 10:00 UTC+8 anchor and the SteamDB listing.\n- [CBR — Aniimo official September 2026](https://www.cbr.com/free-open-world-pokemon-replacement-official-september-2026) — `media/interview` — checked `2026-09-14` — secondary confirmation of the platform split.",
      },
    ],
    faqIds: [
      "release-when-exact",
      "release-mobile-date",
      "release-pre-order-needed",
      "release-nintendo-switch",
      "release-language-support",
      "release-unlock-hour",
      "release-unlock-timezones",
    ],
    relatedPageIds: [
      "fixed-platforms-and-versions-en-us",
      "fixed-pre-order-and-editions-en-us",
      "fixed-closed-beta-and-signups-en-us",
      "fixed-system-requirements-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-14",
  },
  {
    id: "fixed-platforms-and-versions-en-us",
    translationKey: "platforms-and-versions",
    locale: "en-US",
    routeKind: "fixed",
    slug: "platforms-and-versions",
    url: "/platforms-and-versions",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Aniimo Platforms and Versions: Console, PC, Mobile, and Xbox Cloud",
    seoTitle:
      "Aniimo Platforms and Versions: PS5, Xbox, Xbox Cloud, PC, iOS, and Android",
    metaDescription:
      "Compare Aniimo PS5, Xbox Series X|S, Xbox Cloud Gaming, PC (Steam and Epic), iOS, and Android availability, cross-play status, and edition differences.",
    summary:
      "Aniimo launches in two confirmed September 2026 windows: PS5, Xbox Series X|S, Xbox Cloud Gaming, and PC (Steam and Epic) on 16 September 2026; iOS and Android on 23 September 2026. There is a single free-to-play edition with no paid Standard/Deluxe/Premium split.",
    hero: {
      eyebrow: "Platforms and versions",
      subtitle:
        "PS5, Xbox Series X|S, Xbox Cloud Gaming, and PC ship on 16 September 2026; iOS and Android ship one week later on 23 September 2026. Cross-play status across console, PC, and mobile is not announced as of 2026-09-05.",
      ctas: [
        { label: "System Requirements", href: "/system-requirements" },
        { label: "Pre-order & Editions", href: "/pre-order-and-editions" },
      ],
    },
    quickAnswer:
      "Aniimo launches 16 September 2026 on PlayStation 5, Xbox Series X|S, Xbox Cloud Gaming, PC via Steam, and PC via Epic Games Store. iOS and Android launch 23 September 2026. There is one global free-to-play edition; no paid Standard/Deluxe/Premium split has been announced. Cross-play status across console, PC, and mobile is not announced as of 2026-09-05.",
    keyFacts: [
      { label: "Confirmed platforms", value: "PS5, Xbox Series X|S, Xbox Cloud, PC (Steam, Epic), iOS, Android" },
      { label: "Console + PC + cloud launch", value: "16 September 2026" },
      { label: "Mobile (iOS, Android) launch", value: "23 September 2026" },
      { label: "Nintendo Switch", value: "Not announced as of 2026-09-05" },
      { label: "Cross-play", value: "Not announced as of 2026-09-05" },
      { label: "Cross-save", value: "Not announced as of 2026-09-05" },
      { label: "Edition split", value: "Single F2P edition with optional IAP" },
    ],
    modules: [
      {
        id: "platforms-matrix",
        type: "data-table",
        heading: "Per-Platform Availability Matrix",
        columns: [
          { key: "platform", label: "Platform" },
          { key: "availability", label: "Availability" },
          { key: "controller", label: "Controller" },
          { key: "crossPlay", label: "Cross-Play" },
          { key: "notes", label: "Notes" },
        ],
        rows: [
          { platform: "PlayStation 5", availability: "16 September 2026", controller: "DualSense", crossPlay: "Not announced as of 2026-09-05", notes: "Free-to-play download via PlayStation Store" },
          { platform: "Xbox Series X|S", availability: "16 September 2026", controller: "Xbox Wireless", crossPlay: "Not announced as of 2026-09-05", notes: "Free-to-play download via Xbox Store" },
          { platform: "Xbox Cloud Gaming", availability: "16 September 2026", controller: "Xbox Wireless / touch fallback", crossPlay: "Not announced as of 2026-09-05", notes: "Confirmed cloud-streaming track on day one" },
          { platform: "PC (Steam)", availability: "16 September 2026", controller: "Xbox / PlayStation / KB+M", crossPlay: "Not announced as of 2026-09-05", notes: "AppID 4126040; current English page is the authoritative spec" },
          { platform: "PC (Epic Games Store)", availability: "16 September 2026", controller: "Xbox / PlayStation / KB+M", crossPlay: "Not announced as of 2026-09-05", notes: "Pre-registration open via Epic Games Store" },
          { platform: "iOS", availability: "23 September 2026", controller: "Touch / MFi", crossPlay: "Not announced as of 2026-09-05", notes: "Free-to-play download via App Store; mobile controller pass-through is the planned input" },
          { platform: "Android", availability: "23 September 2026", controller: "Touch", crossPlay: "Not announced as of 2026-09-05", notes: "Free-to-play download via Google Play" },
        ],
      },
      {
        id: "platforms-crossplay",
        type: "prose",
        heading: "Cross-Play and Cross-Save Status",
        body:
          "Pawprint Studio has not announced cross-play or cross-save between console, PC, and mobile as of 2026-09-05. Closed beta coverage and Steam store description reference 3-player co-op, but cross-platform play and account-linked progression are not announced as of 2026-09-05. The official Aniimo Discord and Steam news pages are the canonical sources for any future cross-play or cross-save confirmation.",
      },
      {
        id: "platforms-cloud",
        type: "prose",
        heading: "Cloud Streaming Status",
        body:
          "Xbox Cloud Gaming is a confirmed day-one track on 16 September 2026 alongside the direct Xbox install. GeForce Now and PlayStation Plus Premium streaming availability are not announced as of 2026-09-05.",
      },
      {
        id: "platforms-switch",
        type: "prose",
        heading: "Nintendo Switch Status",
        body:
          "A Nintendo Switch version is not announced as of 2026-09-05. The launch lineup covers PS5, Xbox Series X|S, Xbox Cloud, PC, iOS, and Android. The community should expect Switch status only if Pawprint Studio or Nintendo publishes an official page.",
      },
      {
        id: "platforms-mobile-controls",
        type: "prose",
        heading: "Mobile and controller controls",
        body:
          "Touch input is the default on iOS and Android, with mobile controller pass-through supported for both the 23 September 2026 mobile launch and any later controller-driven updates. Touch layouts were reworked alongside the mobile launch so that the same Twining-driven combat used on console and PC is reachable on a phone.",
      },
      {
        id: "platforms-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-05",
        body:
          "Confirmed cross-play on console/PC/mobile is not announced as of 2026-09-05. GeForce Now and PlayStation Plus Premium streaming availability are not announced as of 2026-09-05; Xbox Cloud Gaming is the only confirmed cloud track. A Nintendo Switch version is not announced as of 2026-09-05. The platforms-and-versions table reflects the current Steam store, official Aniimo site, and the 2026-09-03 dev letter; any future additions require reopening these official sources.",
      },
      {
        id: "platforms-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo Official Site](https://www.aniimo.com/) — `official/store` — checked `2026-09-05` — confirms platform lineup and pre-registration.\n- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-09-05` — confirms Steam launch date and platform coverage.\n- [Aniimo Dev Letter (2026-09-03)](https://www.aniimo.com/newslist/detail/100051) — `official/news` — checked `2026-09-05` — confirms the 16 September 2026 console / PC / cloud launch, the 23 September 2026 mobile launch, and the mobile controller improvements.\n- [Aniimo Global Launch post (2026-08-26)](https://www.aniimo.com/m/newslist/detail/100064) — `official/news` — checked `2026-09-05` — confirms the platform split.\n- [CBR — Aniimo official September 2026](https://www.cbr.com/free-open-world-pokemon-replacement-official-september-2026) — `media/interview` — checked `2026-09-05` — secondary confirmation of mobile and console lineup.",
      },
    ],
    faqIds: [
      "platforms-switch",
      "platforms-cross-play",
      "platforms-cloud-streaming",
      "platforms-xbox-cloud",
      "platforms-controller-support",
    ],
    relatedPageIds: [
      "fixed-release-overview-en-us",
      "fixed-system-requirements-en-us",
      "fixed-pre-order-and-editions-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-05",
  },
  {
    id: "fixed-system-requirements-en-us",
    translationKey: "system-requirements",
    locale: "en-US",
    routeKind: "fixed",
    slug: "system-requirements",
    url: "/system-requirements",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Aniimo PC System Requirements",
    seoTitle:
      "Aniimo PC System Requirements: Minimum and Recommended Specs",
    metaDescription:
      "Check Aniimo PC minimum and recommended CPU, GPU, RAM, and storage requirements from the current English Steam page, plus controller support.",
    summary:
      "The current English Steam page lists Aniimo PC minimum requirements as Intel Core i7-4770 / AMD Ryzen 7 2700, 8 GB RAM, and NVIDIA GTX 970 / AMD Radeon RX 5600, with a recommended spec of Intel Core i7-10700 / AMD Ryzen 5 5600, 16 GB RAM, and NVIDIA GeForce RTX 3060 / AMD Radeon RX 6700. Both tiers list 40 GB of storage and a 64-bit Windows 10 or newer install on DirectX 11.",
    hero: {
      eyebrow: "PC system requirements",
      subtitle:
        "The current English Steam page lists the minimum spec as Intel Core i7-4770 / AMD Ryzen 7 2700 with an NVIDIA GTX 970 / AMD Radeon RX 5600 and 8 GB of RAM, and the recommended spec as Intel Core i7-10700 / AMD Ryzen 5 5600 with an NVIDIA GeForce RTX 3060 / AMD Radeon RX 6700 and 16 GB of RAM. Both tiers list 40 GB of storage on DirectX 11. Older regional Steam pages that show 12 GB / 45 GB or 8 GB / 30 GB still surface prior wording and are superseded.",
      ctas: [
        { label: "Platforms & Versions", href: "/platforms-and-versions" },
        { label: "Release Overview", href: "/release-overview" },
      ],
    },
    quickAnswer:
      "The current English Steam page lists Aniimo PC minimum requirements as 64-bit Windows 10, an Intel Core i7-4770 or AMD Ryzen 7 2700 or above, 8 GB of RAM, an NVIDIA GTX 970 or AMD Radeon RX 5600, DirectX 11, and 40 GB of available space. The recommended spec raises that to Windows 10 or above, an Intel Core i7-10700 or AMD Ryzen 5 5600 or above, 16 GB of RAM, and an NVIDIA GeForce RTX 3060 or AMD Radeon RX 6700. Both tiers need a broadband internet connection. Older regional Steam pages that show 12 GB / 45 GB or 8 GB / 30 GB still surface prior wording and are superseded.",
    keyFacts: [
      { label: "Operating system", value: "Windows 10 or above (64-bit)" },
      { label: "Minimum CPU / GPU", value: "Intel Core i7-4770 or Ryzen 7 2700 / GTX 970 or RX 5600" },
      { label: "Recommended CPU / GPU", value: "Intel Core i7-10700 or Ryzen 5 5600 / RTX 3060 or RX 6700" },
      { label: "RAM", value: "8 GB minimum, 16 GB recommended" },
      { label: "DirectX", value: "Version 11" },
      { label: "Network", value: "Broadband internet connection" },
      { label: "Storage", value: "40 GB available space (SSD recommended)" },
      { label: "Authoritative source", value: "Current English Steam page" },
    ],
    modules: [
      {
        id: "spec-table",
        type: "data-table",
        heading: "Minimum vs Recommended Spec",
        columns: [
          { key: "field", label: "Field" },
          { key: "minimum", label: "Minimum" },
          { key: "recommended", label: "Recommended" },
        ],
        rows: [
          { field: "Operating system", minimum: "Windows 10 (64-bit)", recommended: "Windows 10 or above (64-bit)" },
          { field: "CPU", minimum: "Intel Core i7-4770 / AMD Ryzen 7 2700 or above", recommended: "Intel Core i7-10700 / AMD Ryzen 5 5600 or above" },
          { field: "RAM", minimum: "8 GB", recommended: "16 GB" },
          { field: "Graphics", minimum: "NVIDIA GTX 970 / AMD Radeon RX 5600", recommended: "NVIDIA GeForce RTX 3060 / AMD Radeon RX 6700" },
          { field: "DirectX", minimum: "Version 11", recommended: "Version 11" },
          { field: "Network", minimum: "Broadband internet connection", recommended: "Broadband internet connection" },
          { field: "Storage", minimum: "40 GB available space", recommended: "40 GB available space; SSD recommended" },
          { field: "Controller", minimum: "Xbox / PlayStation pads supported", recommended: "Xbox / PlayStation pads supported" },
        ],
      },
      {
        id: "spec-cpu-gpu",
        type: "prose",
        heading: "CPU and GPU Model Strings",
        body:
          "The current English Steam page names specific CPU and GPU models on both tiers. The minimum tier asks for an Intel Core i7-4770 or AMD Ryzen 7 2700 or above paired with an NVIDIA GTX 970 or AMD Radeon RX 5600. The recommended tier asks for an Intel Core i7-10700 or AMD Ryzen 5 5600 or above paired with an NVIDIA GeForce RTX 3060 or AMD Radeon RX 6700.\n\nBoth tiers require a 64-bit processor and a 64-bit operating system, and both list a broadband internet connection. If your CPU sits between the two named tiers, the minimum row is the floor Steam publishes; Steam does not publish a separate mid-tier target as of 2026-09-14.",
      },
      {
        id: "spec-ram",
        type: "prose",
        heading: "RAM: 8 GB Minimum, 16 GB Recommended",
        body:
          "The current English Steam page lists 8 GB of RAM for the minimum tier and 16 GB of RAM for the recommended tier. The earlier figure of 12 GB on this page was the published minimum before Steam revised the spec; the current floor is 8 GB, and the recommendation is 16 GB.",
      },
      {
        id: "spec-storage",
        type: "prose",
        heading: "Download Size Notes",
        body:
          "The current English Steam page lists 40 GB of available space for both the minimum and the recommended tier. The earlier 45 GB figure on this page was the published spec before Steam revised it; the current storage floor is 40 GB. Treat the 40 GB figure as authoritative, keep it on an SSD for shader and streaming performance, and leave additional headroom for shader caches and post-launch patches.",
      },
      {
        id: "spec-controller",
        type: "prose",
        heading: "Controller Support",
        body:
          "Aniimo on PC supports Xbox Wireless and PlayStation pads, plus standard keyboard and mouse. Touch input is reserved for iOS and Android.",
      },
      {
        id: "spec-regional",
        type: "prose",
        heading: "Regional Page Inconsistency",
        body:
          "Older regional Steam pages still surface prior wording for Aniimo — some show 8 GB / 30 GB, others show 12 GB / 45 GB — and a few still leave the CPU and GPU rows blank. The current English Steam page is the authoritative reference: 8 GB minimum RAM, 16 GB recommended RAM, 40 GB of storage, and the named CPU and GPU models above. If the local page disagrees, defer to the English page and flag the inconsistency in any support request.",
      },
      {
        id: "spec-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-14",
        body:
          "The CPU, GPU, RAM, DirectX, network, and storage values on this page are read from the current English Steam page on 2026-09-14, which lists DirectX Version 11 for both tiers. Steam publishes only minimum and recommended tiers, so no mid-tier or ultra/4K target exists as of 2026-09-14. Target frame rate, resolution, and upscaling support per spec tier are not announced as of 2026-09-14, and the published figures may change again before the 16 September 2026 PC / console / Xbox cloud launch or the 23 September 2026 mobile launch. Older regional Steam pages still surface prior wording (8 GB / 30 GB or 12 GB / 45 GB) and are not authoritative.",
      },
      {
        id: "spec-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-09-14` — authoritative PC spec: Intel Core i7-4770 / Ryzen 7 2700 and GTX 970 / RX 5600 with 8 GB RAM minimum, Intel Core i7-10700 / Ryzen 5 5600 and RTX 3060 / RX 6700 with 16 GB RAM recommended, DirectX 11, broadband connection, and 40 GB storage.",
      },
    ],
    faqIds: [
      "spec-min-ram",
      "spec-cpu-gpu",
      "spec-storage",
      "spec-controller",
      "spec-regional-pages",
    ],
    relatedPageIds: [
      "fixed-release-overview-en-us",
      "fixed-platforms-and-versions-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-14",
  },
  {
    id: "fixed-pre-order-and-editions-en-us",
    translationKey: "pre-order-and-editions",
    locale: "en-US",
    routeKind: "fixed",
    slug: "pre-order-and-editions",
    url: "/pre-order-and-editions",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Aniimo Pre-order and Editions: Advanced, Collector's, and the Companion Handbook Battle Pass",
    seoTitle:
      "Aniimo Pre-order and Editions: Advanced ($9.99), Collector's ($19.99), and the Companion Handbook Battle Pass",
    metaDescription:
      "Compare the Aniimo Advanced ($9.99) and Collector's ($19.99) editions on PS5 and Xbox, the platform-exclusive Fluffy Friend and Doggo Dude accessories, and the Companion Handbook battle pass with the Prismana Aniimo Egg and Evolution Material. Pre-order window closes 16 September 2026 09:59 UTC+8.",
    summary:
      "Aniimo's base game is still free-to-play, but the PlayStation Store and Xbox Store now list paid Advanced ($9.99) and Collector's ($19.99) pre-order packs that bundle platform-exclusive accessories and the Companion Handbook battle pass. The Companion Handbook is an in-game battle pass whose rewards unlock as it levels up, including the Companion Handbook-Exclusive Prismana Aniimo Egg (hatches a Prismana Form Aniimo with Perfect Potential at the Outpost Hatchinator) and the Companion Handbook-Exclusive Evolution Material. The pre-order window closes on 16 September 2026 at 09:59 UTC+8.",
    hero: {
      eyebrow: "Pre-order and editions",
      subtitle:
        "Two paid pre-order packs — Advanced ($9.99) and Collector's ($19.99) — sit alongside the free base game on PlayStation and Xbox. Both pack the Companion Handbook battle pass and a platform-exclusive accessory (PS5 Fluffy Friend or Xbox Doggo Dude); the Collector's pack adds the Primegy Battery and the exclusive Doll plus Avatar Frame inside the Companion Handbook. The pre-order window closes 16 September 2026 at 09:59 UTC+8.",
      ctas: [
        { label: "Release Overview", href: "/release-overview" },
        { label: "Platforms & Versions", href: "/platforms-and-versions" },
      ],
    },
    quickAnswer:
      "Aniimo's base game remains free-to-play, but PlayStation Store and Xbox Store now list two paid pre-order packs. The Advanced Edition ($9.99) on either platform bundles the platform-exclusive accessory (PS5 Fluffy Friend or Xbox Doggo Dude) plus the Advanced Companion Handbook battle pass. The Collector's Edition ($19.99) on either platform adds the same platform-exclusive accessory, the Collector's Companion Handbook battle pass, the Primegy Battery granted immediately, and the exclusive Doll and Avatar Frame inside the Collector's Companion Handbook. The Companion Handbook is an in-game battle pass whose rewards unlock as the pass levels up; its signature items are the Companion Handbook-Exclusive Prismana Aniimo Egg (hatches a Prismana Form Aniimo with Perfect Potential at the Outpost Hatchinator) and the Companion Handbook-Exclusive Evolution Material. The pre-order window closes on 16 September 2026 at 09:59 UTC+8.",
    keyFacts: [
      { label: "Base game", value: "Free-to-play" },
      { label: "Advanced Edition", value: "$9.99 on PS5 and Xbox" },
      { label: "Collector's Edition", value: "$19.99 on PS5 and Xbox" },
      { label: "PS5 exclusive accessory", value: "Fluffy Friend" },
      { label: "Xbox exclusive accessory", value: "Doggo Dude" },
      { label: "Companion Handbook", value: "In-game battle pass bundled with both paid editions" },
      { label: "Companion Handbook-exclusive Prismana Aniimo Egg", value: "Hatches Prismana Form Aniimo with Perfect Potential at the Outpost Hatchinator" },
      { label: "Pre-order window closes", value: "16 September 2026 09:59 UTC+8" },
    ],
    modules: [
      {
        id: "preorder-editions-table",
        type: "data-table",
        heading: "Advanced vs Collector's Edition",
        columns: [
          { key: "field", label: "Field" },
          { key: "advanced", label: "Advanced Edition" },
          { key: "collectors", label: "Collector's Edition" },
        ],
        rows: [
          { field: "Price", advanced: "$9.99", collectors: "$19.99" },
          { field: "Platforms", advanced: "PS5 and Xbox", collectors: "PS5 and Xbox" },
          { field: "PS5 exclusive accessory", advanced: "Fluffy Friend", collectors: "Fluffy Friend" },
          { field: "Xbox exclusive accessory", advanced: "Doggo Dude", collectors: "Doggo Dude" },
          { field: "Companion Handbook", advanced: "Advanced Companion Handbook battle pass", collectors: "Collector's Companion Handbook battle pass" },
          { field: "Primegy Battery", advanced: "Not included", collectors: "Granted immediately" },
          { field: "Exclusive Doll", advanced: "Not included", collectors: "Inside the Collector's Companion Handbook" },
          { field: "Exclusive Avatar Frame", advanced: "Not included", collectors: "Inside the Collector's Companion Handbook" },
        ],
      },
      {
        id: "preorder-companion-handbook",
        type: "prose",
        heading: "What the Companion Handbook Battle Pass Is",
        body:
          "The Companion Handbook is an in-game battle pass included with both the Advanced and Collector's editions. Its rewards unlock as the battle pass levels up, rather than dropping all at purchase. Two items are exclusive to the Companion Handbook and are central to the catch-and-evolve loop:\n\n- Companion Handbook-Exclusive Prismana Aniimo Egg — hatches a Prismana Form Aniimo with Perfect Potential at the Outpost Hatchinator. A Prismana form is the alternate-color variant with shifted palette and slightly different stats, and Perfect Potential lands on the maximum individual-values spread.\n- Companion Handbook-Exclusive Evolution Material — a Companion-Handbook-only evolution resource used in the standard Lumin to Gamma to Nova pipeline.\n\nThe Advanced and Collector's passes share the same shape; the Collector's pass is the longer reward track, with the exclusive Doll and Avatar Frame sitting on it rather than on the Advanced pass.",
      },
      {
        id: "preorder-platform-exclusives",
        type: "prose",
        heading: "Platform-Exclusive Accessories: PS5 Fluffy Friend vs Xbox Doggo Dude",
        body:
          "Both paid editions ship with a platform-exclusive accessory, and the choice is locked to the platform you pre-order from:\n\n- PS5 pre-order: Fluffy Friend accessory.\n- Xbox pre-order: Doggo Dude accessory.\n\nThe accessory is the only platform-locked piece inside the paid pack; the Companion Handbook battle pass and its contents are the same on both platforms. The base free-to-play download is unchanged on either storefront and does not include either accessory.",
      },
      {
        id: "preorder-window",
        type: "callout",
        tone: "caution",
        title: "Pre-order window closes 16 September 2026 09:59 UTC+8",
        body:
          "The PS5 and Xbox pre-order window for the Advanced and Collector's editions closes on 16 September 2026 at 09:59 UTC+8 — one minute before the 10:00 UTC+8 simultaneous global unlock on PC, PlayStation 5, and Xbox Series X|S. After that cutoff, the paid editions are no longer available for pre-order and you will need to wait for the in-game Companion Handbook battle pass track if it is offered separately post-launch. The free base game stays free; only the paid editions have a hard pre-order deadline.",
      },
      {
        id: "preorder-f2p-tracks",
        type: "prose",
        heading: "Free-to-Play Pre-Registration Reward Tracks",
        body:
          "The free base game still carries three separate pre-registration reward tracks that do not depend on buying an edition:\n\n- Official-site pre-registration — Susuta egg (mysterious egg), claimed through aniimo.com and delivered in-game after the 16 September 2026 PC / console / Xbox cloud launch.\n- Multi-day login — Perfect Egg (random egg), earned by logging in across several days once the game is live. Not granted by pre-registering early.\n- Global milestone ladder — Glimmer x200 at 10M sign-ups, Aniipod Ultra x2 at 15M, the \"Companion Promise\" limited avatar frame at 20M, and the \"Sunlit Meadow\" limited outfit at 30M. Paid out in-game at launch to every pre-registered account.\n\nThese three tracks run on top of the free base game; buying an Advanced or Collector's edition does not replace them.",
      },
      {
        id: "preorder-rewards",
        type: "data-table",
        heading: "Global Milestone Ladder",
        columns: [
          { key: "milestone", label: "Milestone" },
          { key: "reward", label: "Reward" },
          { key: "status", label: "Status" },
        ],
        rows: [
          { milestone: "10,000,000 pre-registrations", reward: "Glimmer x200", status: "Threshold passed as of 2026-09-02" },
          { milestone: "15,000,000 pre-registrations", reward: "Aniipod Ultra x2", status: "Threshold passed as of 2026-09-02" },
          { milestone: "20,000,000 pre-registrations", reward: "\"Companion Promise\" limited avatar frame", status: "Threshold passed as of 2026-09-02" },
          { milestone: "30,000,000 pre-registrations", reward: "\"Sunlit Meadow\" limited outfit", status: "Threshold passed as of 2026-09-02" },
        ],
      },
      {
        id: "preorder-platforms",
        type: "data-table",
        heading: "Where to Pre-Order on PS5 and Xbox",
        columns: [
          { key: "platform", label: "Platform" },
          { key: "storefront", label: "Where to pre-order" },
          { key: "notes", label: "Notes" },
        ],
        rows: [
          { platform: "PlayStation 5", storefront: "PlayStation Store — https://www.playstation.com/en-us/games/aniimo/", notes: "Advanced ($9.99) and Collector's ($19.99) editions; PS5 Fluffy Friend accessory" },
          { platform: "Xbox Series X|S", storefront: "Xbox Store — Advanced (9ph327n126wg) and Collector's (9p7smc59003m)", notes: "Advanced ($9.99) and Collector's ($19.99) editions; Xbox Doggo Dude accessory" },
        ],
      },
      {
        id: "preorder-claim-steps",
        type: "steps",
        heading: "How to Pre-Order Before 16 September 2026 09:59 UTC+8",
        items: [
          {
            title: "Pick a platform — the accessory is platform-locked",
            body: "Decide between PS5 (Fluffy Friend) and Xbox (Doggo Dude) before opening the storefront, because the platform-exclusive accessory does not transfer if you switch platforms later.",
          },
          {
            title: "Open the matching storefront listing",
            body: "On PS5 use https://www.playstation.com/en-us/games/aniimo/. On Xbox open the Advanced Edition (ProductID 9ph327n126wg) or the Collector's Edition (ProductID 9p7smc59003m) listing.",
          },
          {
            title: "Choose Advanced ($9.99) or Collector's ($19.99) and pay",
            body: "Both editions include the platform-exclusive accessory and the Companion Handbook battle pass. Collector's adds the Primegy Battery granted immediately and the exclusive Doll and Avatar Frame on the longer Companion Handbook track.",
          },
          {
            title: "Complete the official-site pre-registration if you have not",
            body: "The Susuta egg is still claimed through aniimo.com, not through the paid edition. Pre-register the account you will play on so the egg lands in the launch build alongside your paid pack.",
          },
          {
            title: "Finish before 16 September 2026 09:59 UTC+8",
            body: "The pre-order window closes at 09:59 UTC+8 on 16 September 2026 — one minute before the 10:00 UTC+8 simultaneous global unlock on PC, PS5, and Xbox Series X|S. After the cutoff the paid editions come off the storefront.",
          },
        ],
      },
      {
        id: "preorder-launch-items",
        type: "prose",
        heading: "Free Launch-Day Items",
        body:
          "Three items are granted to every player at launch regardless of whether they pre-ordered an edition or pre-registered: a Sparkling Cube, an Aniipod Ultra, and a Tumbler. These grant early-game capture and crafting utility and are not gated behind any paid tier. They are separate from the Aniipod Ultra x2 paid out by the 15M milestone tier and from the Companion Handbook battle pass track.",
      },
      {
        id: "preorder-monetization",
        type: "prose",
        heading: "Monetization Model",
        body:
          "Aniimo is free-to-play with optional in-app purchases. The paid editions on PS5 and Xbox are pre-order packs — they bundle a platform-exclusive accessory and the Companion Handbook battle pass, and they do not replace the free base game. Specific IAP bundles and any post-launch battle pass structure beyond the Companion Handbook are not announced as of 2026-09-14.",
      },
      {
        id: "preorder-steam-status",
        type: "prose",
        heading: "Steam Edition Status",
        body:
          "The PlayStation Store and Xbox Store list the Advanced and Collector's editions with their platform-exclusive accessories. Steam (AppID 4126040) does not list a paid pre-order edition beyond the free-to-play download. Do not assume a Steam pre-order pack will appear before launch.",
      },
      {
        id: "preorder-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-14",
        body:
          "The Advanced Edition ($9.99), Collector's Edition ($19.99), the platform-exclusive accessories (PS5 Fluffy Friend, Xbox Doggo Dude), the Companion Handbook battle pass with the Companion Handbook-Exclusive Prismana Aniimo Egg (Prismana Form Aniimo with Perfect Potential at the Outpost Hatchinator) and the Companion Handbook-Exclusive Evolution Material, the Collector's Primegy Battery granted immediately, and the exclusive Doll plus Avatar Frame inside the Collector's Companion Handbook are read from the PlayStation Store and Xbox Store product pages on 2026-09-14. The pre-order window closing at 16 September 2026 09:59 UTC+8 is read from the same PlayStation Store and Xbox Store listings. A Steam paid pre-order pack is not listed as of 2026-09-14. The in-game Companion Handbook level pacing, exact reward list per level, and whether the Companion Handbook will be offered separately after launch are not announced as of 2026-09-14.",
      },
      {
        id: "preorder-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo on PlayStation Store](https://www.playstation.com/en-us/games/aniimo/) — `official/store` — checked `2026-09-14` — confirms the Advanced and Collector's pre-order packs, the Companion Handbook battle pass, the PS5 Fluffy Friend accessory, and the 16 September 2026 09:59 UTC+8 pre-order window.\n- [Aniimo Pre-order Pack — Advanced Edition on Xbox](https://www.xbox.com/en-us/games/store/aniimo-pre-order-pack-advanced-edition/9ph327n126wg) — `official/store` — checked `2026-09-14` — confirms the $9.99 Advanced Edition on Xbox, the Companion Handbook battle pass, the Xbox Doggo Dude accessory, and the pre-order cutoff.\n- [Aniimo Pre-order Pack — Collector's Edition on Xbox](https://www.xbox.com/en-US/games/store/aniimo-pre-order-pack-collectors-edition/9p7smc59003m) — `official/store` — checked `2026-09-14` — confirms the $19.99 Collector's Edition on Xbox, the Primegy Battery granted immediately, and the exclusive Doll plus Avatar Frame inside the Collector's Companion Handbook.",
      },
    ],
    faqIds: [
      "preorder-cost",
      "preorder-edition",
      "preorder-advanced-edition",
      "preorder-collectors-edition",
      "preorder-companion-handbook",
      "preorder-platform-exclusives",
      "preorder-pre-order-window",
      "preorder-rewards",
      "preorder-monetization",
    ],
    relatedPageIds: [
      "fixed-release-overview-en-us",
      "fixed-closed-beta-and-signups-en-us",
      "fixed-platforms-and-versions-en-us",
      "fixed-starter-and-prismana-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-14",
  },
  {
    id: "fixed-closed-beta-and-signups-en-us",
    translationKey: "closed-beta-and-signups",
    locale: "en-US",
    routeKind: "fixed",
    slug: "closed-beta-and-signups",
    url: "/closed-beta-and-signups",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Aniimo Closed Beta and Sign-Ups",
    seoTitle:
      "Aniimo Closed Beta: Sign-ups, Beta 3, and Future Test Windows",
    metaDescription:
      "Aniimo Closed Beta 3 added the trading system, new creatures, and co-op bosses. See sign-up channels, the beta-to-launch reset, and future test windows.",
    summary:
      "Aniimo Closed Beta 3 ran 2026-07-09 to 2026-07-25 and added the Aniimo trading system, the Diamond Egg Heist, co-op bosses Bubbask and Coraliz, new creatures (Bubbeep, Popapus, Mophling, Sausite) with the Budsquire and Thornblade forms, and expanded mobile RV Homeland decoration. Beta progress did not carry to launch, and future beta windows are not announced as of 2026-09-02.",
    hero: {
      eyebrow: "Closed beta and sign-ups",
      subtitle:
        "Closed Beta 3 introduced the Aniimo trading system, four new creatures plus the Budsquire and Thornblade forms, co-op bosses Bubbask and Coraliz, and the six-team Diamond Egg Heist. Progress reset before launch, and new sign-up windows are not announced as of 2026-09-02.",
      ctas: [
        { label: "Pre-order & Editions", href: "/pre-order-and-editions" },
        { label: "Release Overview", href: "/release-overview" },
      ],
    },
    quickAnswer:
      "Aniimo Closed Beta 3 ran from 2026-07-09 to 2026-07-25 on PC (including Steam), iOS, and Android, and was the build that added the Aniimo trading system for exchanging Aniimo with other players, the Diamond Egg Heist competitive mode, co-op bosses Bubbask and Coraliz, four new creatures (Bubbeep, Popapus, Mophling, Sausite), the Budsquire and Thornblade forms, and more Homeland personalization through the mobile RV-style base. Sign-ups ran through the Steam news page, the official Aniimo Discord, and the official site. Beta progress did not carry forward to launch, and additional testing windows are not announced as of 2026-09-02.",
    keyFacts: [
      { label: "Closed Beta 3 window", value: "2026-07-09 to 2026-07-25" },
      { label: "Headline addition", value: "Aniimo trading system" },
      { label: "New creatures", value: "Bubbeep, Popapus, Mophling, Sausite" },
      { label: "New forms", value: "Budsquire, Thornblade" },
      { label: "Co-op bosses", value: "Bubbask, Coraliz" },
      { label: "Future beta", value: "Not announced as of 2026-09-02" },
    ],
    modules: [
      {
        id: "beta-history",
        type: "prose",
        heading: "Closed Beta 3 Summary",
        body:
          "Closed Beta 3 ran from 2026-07-09 to 2026-07-25 on PC (including Steam), iOS, and Android, and covered the pre-launch Twining merge mechanic, Aniipod capture, and the Heist of the Lost Isles core loop. Beta access was granted via Steam key requests, Discord whitelists, and official site form entries.\n\nThis was the feature-heaviest test so far: Pawprint Studio used it to introduce the Aniimo trading system, the competitive Diamond Egg Heist, group-play boss encounters, a batch of new creatures and forms, and a wider Homeland decoration catalog.",
      },
      {
        id: "beta-additions",
        type: "data-table",
        heading: "What Closed Beta 3 Added",
        columns: [
          { key: "addition", label: "Addition" },
          { key: "detail", label: "Detail" },
          { key: "status", label: "Launch status" },
        ],
        rows: [
          { addition: "Aniimo trading system", detail: "Players can exchange Aniimo with one another", status: "Introduced in beta; launch rules not announced as of 2026-09-02" },
          { addition: "New Aniimo species", detail: "Bubbeep, Popapus, Mophling, Sausite", status: "Added to the beta roster" },
          { addition: "Additional creature forms", detail: "Budsquire, Thornblade", status: "Added to the beta roster" },
          { addition: "Co-op bosses", detail: "Bubbask and Coraliz, designed around group play", status: "Group-play encounters in the beta build" },
          { addition: "Diamond Egg Heist", detail: "Up to six teams of three players contest one diamond egg", status: "Competitive objective mode in the beta build" },
          { addition: "Homeland personalization", detail: "Mobile RV-style base with more Aniimo-themed decorations", status: "Expanded decoration catalog in the beta build" },
        ],
      },
      {
        id: "beta-trading",
        type: "prose",
        heading: "The Aniimo Trading System",
        body:
          "The trading system lets players exchange Aniimo with one another, which changes how roster gaps get filled. Instead of relying only on wild catches, weather-gated spawns, and reward eggs, a player can trade for a form they have not encountered.\n\nThat makes the Aniilog capture log the practical planning tool for trading: it records which forms you have caught by region and weather and surfaces the ones still missing, so you know what to ask for before you open a trade. See the [Aniimo catching and Aniipods](/catching-and-aniipods) page for how the Aniilog tracks each entry.\n\nTrading also feeds the Homeland layer. Closed Beta 3 moved Homeland access onto a mobile RV-style base with more personalization options and a wider selection of Aniimo-themed decorations, so a traded roster changes both who fights with you and who lives in your base. See the [Aniimo Homeland and Housing](/homeland-and-housing) page for the base-building and Homeland Skills layer.\n\nTrade restrictions, cooldowns, level or region gates, whether eggs and Prismana forms are tradable, and whether trading ships in the launch build are not announced as of 2026-09-02.",
      },
      {
        id: "beta-signup",
        type: "prose",
        heading: "Sign-up Channels",
        body:
          "Players who want future beta access should pre-register an account on the official Aniimo site, follow the Aniimo Steam news page, and join the official Aniimo Discord. New beta windows will be announced through those channels; future dates are not announced as of 2026-09-05.\n\nBecause Closed Beta 3 was the last announced test before the 16 September 2026 PC / console / Xbox cloud launch (and the 23 September 2026 mobile launch), the practical path for most players is pre-registration rather than another beta. The per-platform pre-registration links are listed on the [Aniimo pre-order and editions](/pre-order-and-editions) page.",
      },
      {
        id: "beta-launch",
        type: "prose",
        heading: "Beta to Launch Relationship",
        body:
          "Closed Beta 3 progress did not carry forward to launch. Beta accounts were reset before launch and beta-only rewards are not announced as of 2026-09-02. Players who participated in Closed Beta 3 should expect a clean launch state: the creatures added in that build (Bubbeep, Popapus, Mophling, Sausite, Budsquire, Thornblade) have to be caught again, traded Aniimo do not persist, and Homeland decoration progress starts over.\n\nPre-registration rewards are the one pre-launch item track that is meant to land in the live game, and they pay out at launch rather than in the beta build.",
      },
      {
        id: "beta-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-02",
        body:
          "The Closed Beta 3 additions on this page (trading system, Bubbeep, Popapus, Mophling, Sausite, Budsquire, Thornblade, Bubbask, Coraliz, Diamond Egg Heist, mobile RV Homeland decoration) come from Twisted Voxel's beta coverage and describe the beta build, not a confirmed launch feature list. Whether trading, the Diamond Egg Heist, and the co-op bosses ship unchanged at launch is not announced as of 2026-09-02. Trading rules, restrictions, and cooldowns are not announced as of 2026-09-02. Future beta windows, beta-only rewards, and any carry-over to launch are not announced as of 2026-09-02.",
      },
      {
        id: "beta-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo Steam News](https://store.steampowered.com/news/app/4126040) — `official/store` — checked `2026-09-02` — confirms Closed Beta 3 sign-up announcement.\n- [Aniimo Official Site](https://www.aniimo.com/) — `official/store` — checked `2026-09-02` — confirms pre-registration and beta entry points.\n- [Twisted Voxel — Aniimo Q3 2026 launch and new beta](https://twistedvoxel.com/aniimo-set-for-q3-2026-launch-new-beta-announced/) — `media/interview` — checked `2026-09-02` — confirms the trading system, the new species Bubbeep, Popapus, Mophling and Sausite, the Budsquire and Thornblade forms, co-op bosses Bubbask and Coraliz, the six-teams-of-three Diamond Egg Heist, and the mobile RV-style Homeland decoration expansion.\n- [GameHaunt release overview](https://gamehaunt.com/aniimo-release-date-platforms-and-everything-we-know-2026) — `media/interview` — checked `2026-09-02` — confirms the global closed beta start on 2026-07-09.",
      },
    ],
    faqIds: [
      "beta-sign-up",
      "beta-progress-carry",
      "beta-trading-system",
      "beta-new-creatures",
      "beta-future-windows",
    ],
    relatedPageIds: [
      "fixed-release-overview-en-us",
      "fixed-pre-order-and-editions-en-us",
      "fixed-heist-of-the-lost-isles-en-us",
      "fixed-catching-and-aniipods-en-us",
      "fixed-homeland-and-housing-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-05",
  },
  {
    id: "fixed-twining-system-en-us",
    translationKey: "twining-system",
    locale: "en-US",
    routeKind: "fixed",
    slug: "twining-system",
    url: "/twining-system",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Aniimo Twining explained: Command Mode, Twine Mode, and the simplified training layer",
    seoTitle:
      "Aniimo Twining guide: Command Mode, Twine Mode, merge uses, and training simplification",
    metaDescription:
      "Aniimo Twining lets you merge with a caught Aniimo to use its movement and combat abilities. Compare Command Mode and Twine Mode, plus the new simplified training layer that drops the rune system.",
    summary:
      "Twining is the merge mechanic that bonds your character with a captured Aniimo to take on its form, movement type, and combat kit. Command Mode keeps you in human form while ordering party attacks; Twine Mode drops you into the merged body to use aerial dives, claws, and creature-specific tools. The carried-item rune system described in earlier coverage has been removed in favor of a simplified training layer.",
    hero: {
      eyebrow: "Twining system",
      subtitle:
        "Twining lets you merge with a captured Aniimo to use its element, role, and movement type. The previous carried-item rune framing has been removed; training and capability now sit on a simplified layer.",
      ctas: [
        { label: "Starter & Prismana", href: "/starter-and-prismana" },
        { label: "Evolution & Stages", href: "/evolution-and-stages" },
        { label: "Catching & Aniipods", href: "/catching-and-aniipods" },
        { label: "Elements & Roles", href: "/elements-and-roles" },
      ],
    },
    quickAnswer:
      "Aniimo Twining is the merge mechanic that bonds your character with a captured Aniimo to take on its form, movement type, and combat kit. Two modes manage the merge: Command Mode keeps you in human form while ordering party attacks, and Twine Mode drops you into the merged body to use aerial dives, claws, and creature-specific tools. The carried-item rune system documented in earlier coverage has been removed; training now uses a simplified layer that reworks how stat growth and capability unlocks are reached.",
    keyFacts: [
      { label: "Twining definition", value: "Merge with a captured Aniimo to use its form, element, and combat kit" },
      { label: "Command Mode", value: "Human form + party-wide attack/heal/position orders" },
      { label: "Twine Mode", value: "Full merge into Aniimo body for raw combat power + movement type" },
      { label: "Movement types", value: "Fly, burrow, swim, climb, dash" },
      { label: "Rune system", value: "Removed in 2026-09-03 dev letter" },
      { label: "Training layer", value: "Simplified in 2026-09-03 dev letter; capability unlocks reworked" },
      { label: "Mode switch", value: "Common mid-fight decision, not a rare ultimate" },
    ],
    modules: [
      {
        id: "twining-overview",
        type: "prose",
        heading: "What Aniimo Twining actually does",
        body:
          "The Steam store page describes Twining as the moment when a captured Aniimo shares its body, senses, and abilities with the player character, including its element and combat style. Once merged, your character trades the standard human moveset for the Aniimo's attacks, which range from a small creature's quick pounce to a heavier form's charged beam.\n\nReporting from CBR and ComicBook.com frames the merged state as the main way to use elemental abilities, since the merged form unlocks the wider combo chain tied to that Aniimo's role. Treat any specific cooldowns, stamina costs, or regeneration rates listed elsewhere as pre-launch estimates as of 2026-09-05; balance numbers are still being tuned.",
      },
      {
        id: "twining-training-rewrite",
        type: "prose",
        heading: "Carried item rune removal and the simplified training layer",
        body:
          "The 2026-09-03 dev letter removed the carried-item rune system from Aniimo. Earlier coverage and pre-launch material referenced an Aniipod-carried rune that slotted into a captured Aniimo, a random rune slot, and a Rune Slot per creature; those mechanics are no longer part of the launch build.\n\nIn their place, Pawprint Studio shipped a simplified training layer: capability unlocks now sit on the simplified training progression rather than on rune drops, and stat growth is reached through a Capability Awakening system that can be reset for Aniimo below level 60 without penalty. The training simplification is part of the same coordinated carried-item rework that introduces the Prismana lucky-strike flow and the Umbral Aniimo via Wild Surges, so players who were planning around runes should re-plan around the simplified layer plus the new acquisition rules on the [Aniimo starter and Prismana](/starter-and-prismana) and [Aniimo evolution and stages](/evolution-and-stages) pages.",
      },
      {
        id: "twining-command-mode",
        type: "prose",
        heading: "Command Mode vs Twine Mode",
        body:
          "Command Mode keeps your player model on screen and lets you issue party-wide attacks, healing calls, or positional commands to Aniimo in your line-up, similar to a real-time tactical layer. It works well when the fight is positional, when you are in co-op and want to coordinate, or when you want to scout ahead with the human moveset.\n\nTwine Mode drops you fully into the Aniimo and trades the tactical overview for raw combat power plus the Aniimo's movement type. It is the right choice when elemental advantage matters more than positioning, when the encounter calls for a finisher, or when exploration needs the merged movement tool to reach a ledge, a climbable wall, or a burrow entrance.",
      },
      {
        id: "twining-when-command",
        type: "prose",
        heading: "When Command Mode is the better pick",
        body:
          "Command Mode suits fights where the merged role is already well covered by an AI-controlled ally, when you want to drop a heal or role-based buff on the team, or when the next step in the fight is reading the boss's cast bar. It is also useful in co-op when you are playing a support role and need to stay mobile while staying on top of your elemental skills.",
      },
      {
        id: "twining-when-twine",
        type: "prose",
        heading: "When Twine Mode is the better pick",
        body:
          "Twine Mode is the right call when you need the merged creature's elemental coverage or a unique movement option, when closing the gap matters more than staying behind the tank, or when a quest specifically asks you to 'Twine into' a form. Previews from Zeroluck and CBR describe the merged state as the highest-octane moment of combat, so plan to use it on key pushes rather than as a default.",
      },
      {
        id: "twining-movement",
        type: "prose",
        heading: "Movement types you gain by Twining into specific forms",
        body:
          "A core reason to Twine at all is exploration. The Idyll continent has ledges, wind currents, burrow tunnels, waterways, and vertical surfaces that the human moveset cannot handle cleanly, and Twining unlocks those shortcuts the moment you bond with the right body.\n\nFlying forms handle verticality, glide routes, and floating-island traversal around Astra. Burrowing forms let you cut through soft terrain that blocks the human path. Swimming forms handle underwater segments and tidal caves. Climbing forms unlock vertical wall sections. Dash-style merged forms let you blast through gaps, chasms, and short combat openings. CBR and ComicBook.com highlight flight as the most-praised Twining-driven exploration tool; burrowing, swimming, climbing, and dash coverage appears in the same preview set as of 2026-09-05.",
      },
      {
        id: "twining-combat",
        type: "prose",
        heading: "Combat transformation notes",
        body:
          "Once you are inside a merged Aniimo, your elemental skills and role kit take over from the human moveset. The same Twining choice is also a combat-style choice: pick the Aniimo whose element and role match the encounter, not just the one whose movement type you needed to reach the room. The merged form's role, drawn from the standard list (DPS, Heal, Support, Break, or Regen), tells you how the merge will behave in combat before you commit.",
      },
      {
        id: "twining-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-05",
        body:
          "Aniimo Twining cooldowns, stamina costs, and stamina regeneration rates are pre-launch speculation as of 2026-09-05; treat any specific numbers as estimates. The difference between Command Mode and Twine Mode is confirmed by the Steam store page and CBR, but the exact tactical triggers for each mode are still being tuned. Specific movement-type unlocks per form are guided by media previews, not by an exhaustive official chart as of 2026-09-05. The carried-item rune system, including random rune slots and per-creature Rune Slots, has been removed in the 2026-09-03 dev letter; training now sits on a simplified Capability Awakening layer that can be reset for sub-Lv.60 Aniimo. Aniimo is a new IP from Pawprint Studio; there is no legacy 'Twining' mechanic from a prior title to inherit.",
      },
      {
        id: "twining-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-09-05` — Twining overview, Command Mode and Twine Mode definitions, and the merged-state language.\n- [Aniimo Dev Letter (2026-09-03)](https://www.aniimo.com/newslist/detail/100051) — `official/news` — checked `2026-09-05` — confirms the rune-system removal, the simplified training layer, and the Capability Awakening reset for sub-Lv.60 Aniimo.\n- [CBR: Aniimo interview](https://www.cbr.com/aniimo-interview-upcoming-creature-catching-rpg-co-op-gorgeous-visuals/) — `media/interview` — checked `2026-09-05` — how Twining fits into combat and which movement types previews praised.\n- [ComicBook.com: Aniimo preview](https://comicbook.com/gaming/feature/aniimo-preview/) — `media/interview` — checked `2026-09-05` — merging state, role coverage, and co-op cadence.\n- [Zeroluck: Aniimo gameplay](https://zeroluck.gg/aniimo/gameplay) — `community/wiki` — checked `2026-09-05` — cross-check on dash, climbing, and role taxonomy used in this page.",
      },
    ],
    faqIds: [
      "twining-definition",
      "twining-mode-difference",
      "twining-cooldowns",
      "twining-starter",
      "twining-rune-system-removed",
      "twining-training-simplification",
      "twining-capability-awakening-reset",
    ],
    relatedPageIds: [
      "fixed-starter-and-prismana-en-us",
      "fixed-evolution-and-stages-en-us",
      "fixed-catching-and-aniipods-en-us",
      "fixed-elements-and-roles-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-05",
  },
  {
    id: "fixed-starter-and-prismana-en-us",
    translationKey: "starter-and-prismana",
    locale: "en-US",
    routeKind: "fixed",
    slug: "starter-and-prismana",
    url: "/starter-and-prismana",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Aniimo starter and Prismana forms: lucky strike, flat base, and reworked spawn rules",
    seoTitle:
      "Aniimo starter and Prismana guide: lucky strike, flat-base trigger, season spawns",
    metaDescription:
      "Aniimo starter picks and Prismana flow: compare Budclaw, Celestis, Nimbi, Emberpup, and Chirpi by movement type, see the Prismana flat-base trigger and lucky strike mechanic, and place the Susuta and Perfect Egg rewards.",
    summary:
      "The named Aniimo forms visible in pre-launch coverage are Budclaw (crab-like, burrowing), Celestis and Nimbi (flying), Emberpup (fiery bruiser), and Chirpi (feisty bird). Emberpup is the worked evolution example: Emberpup to Flameruff to Scorchhowl, with Interlupa now part of the same family. Prismana forms now use a flat-base trigger chance plus a lucky strike during catching, with reworked season-exclusive spawn rules that supersede the earlier catalog framing. The Susuta egg and Perfect Egg support your roster rather than replacing your starter.",
    hero: {
      eyebrow: "Starter & Prismana",
      subtitle:
        "Pick the starter whose movement type and role fit your first Idyll puzzles, then plan the Prismana flow around the new flat-base trigger and lucky strike mechanic. The Susuta egg and Perfect Egg are roster support, not starter replacements.",
      ctas: [
        { label: "Twining System", href: "/twining-system" },
        { label: "Evolution & Stages", href: "/evolution-and-stages" },
        { label: "Catching & Aniipods", href: "/catching-and-aniipods" },
      ],
    },
    quickAnswer:
      "Your Aniimo starter is the creature you pick at the start of the game and the basis for early progression. The named forms surfaced in pre-launch coverage are Budclaw, a crab-like Aniimo that is great at burrowing; Celestis and Nimbi, both flying forms; Emberpup, described as a fiery little bruiser; and Chirpi, a feisty bird. Emberpup shows how far one pick travels: it evolves to Flameruff and then Scorchhowl, with Interlupa now part of the same family. Prismana forms now resolve through a flat-base trigger chance plus a lucky strike mechanic at the moment of catching, and their season-exclusive spawn rules were reworked as part of the same carried-item update that removed the rune system. The Susuta egg (official-site pre-registration) plus the Perfect Egg (multi-day logins) feed your roster rather than replacing your starter.",
    keyFacts: [
      { label: "Named forms in coverage", value: "Budclaw, Celestis, Nimbi, Emberpup, Chirpi" },
      { label: "Worked evolution line", value: "Emberpup → Flameruff → Scorchhowl (+ Interlupa)" },
      { label: "Movement examples", value: "Budclaw burrows; Celestis and Nimbi fly" },
      { label: "Prismana forms", value: "Alternate-color variants; same Lumin to Nova pipeline" },
      { label: "Prismana flat-base", value: "Trigger chance replaces the old catalog framing" },
      { label: "Lucky strike", value: "Catching-side roll that locks in a Prismana catch" },
      { label: "Season spawns", value: "Reworked in 2026-09-03 dev letter" },
      { label: "Susuta egg", value: "Official-site pre-registration claim; roster support" },
      { label: "Perfect Egg", value: "Random egg from multi-day logins" },
    ],
    modules: [
      {
        id: "starter-roster",
        type: "data-table",
        heading: "Named Aniimo Forms in Pre-Launch Coverage",
        columns: [
          { key: "name", label: "Aniimo" },
          { key: "described", label: "How coverage describes it" },
          { key: "movement", label: "Movement / early use" },
          { key: "source", label: "Named by" },
        ],
        rows: [
          { name: "Budclaw", described: "Crab-like Aniimo that is great at burrowing", movement: "Burrow — soft-terrain shortcuts and blocked routes", source: "CBR interview" },
          { name: "Celestis", described: "Example of a flying Aniimo", movement: "Fly — vertical puzzles and Astra traversal", source: "CBR interview" },
          { name: "Nimbi", described: "Example of a flying Aniimo", movement: "Fly — glide routes and floating-island approaches", source: "CBR interview" },
          { name: "Emberpup", described: "A fiery little bruiser with serious attitude; a team fan-favourite", movement: "Ground pressure — the fiery front-line pick", source: "ComicBook.com preview, CBR interview" },
          { name: "Chirpi", described: "A feisty bird", movement: "Bird form — early aerial pressure", source: "ComicBook.com preview" },
        ],
      },
      {
        id: "starter-pick",
        type: "prose",
        heading: "How the Aniimo starter picks work",
        body:
          "The Steam store page presents Aniimo as an open-world creature-catching RPG, with starter choice framed as the first big player decision. The official site at aniimo.com frames that first pick as a rare Prismana Form Aniimo selected as a Junior Wayfarer, and confirms that early-game choices are designed to shape the first hours without locking you out of late-game evolutions, since each form follows the same Lumin to Gamma to Nova pipeline. The starter list itself is subject to change per developer as of 2026-09-05, so treat published starter picks as the current plan rather than a permanent roster.\n\nStarter forms split across the nine elements of the Idyll continent and the five combat roles (DPS, Heal, Support, Break, Regen). Pre-launch coverage from ComicBook.com and the Steam store page points to starter forms leaning DPS or Break — Emberpup is described as a bruiser rather than a support — with Heal and Support players expected to lean on early catches of wild Aniimo for their first healer.\n\nYour starter is the first Aniimo you can Twine into, and it sets the merged role you will use most often in the early game. Twining into the starter lets you cross the first set of exploration puzzles, which is why picking a starter with at least one relevant movement type (fly, burrow, swim, climb, dash) is more useful than chasing the highest damage number.",
      },
      {
        id: "starter-movement-map",
        type: "prose",
        heading: "Matching the named forms to early Idyll puzzles",
        body:
          "Movement type is the practical tiebreaker between the named forms, because the Idyll continent gates early routes behind traversal rather than damage.\n\nBudclaw is the burrowing answer: CBR describes it as a crab-like Aniimo that is great at burrowing, which is the tool for soft terrain and shortcut tunnels that the human moveset cannot cross. Celestis and Nimbi are the flying answers, and flight is the traversal tool previews single out most often — it is how you handle verticality, wind currents, and the approach to the Astra sky metropolis. Emberpup and Chirpi read as combat-forward picks: a fiery bruiser and a feisty bird rather than dedicated traversal tools.\n\nIf your first region is coastal or vertical, a flying form pays off immediately. If you expect to push through grassland and cave routes, the burrowing option removes more walls. Either way you can catch the others later with an Aniipod, so the starter only has to cover the first hour cleanly. Full movement-type detail is on the [Aniimo Twining system](/twining-system) page, and role definitions are on the [Aniimo elements and roles](/elements-and-roles) page.",
      },
      {
        id: "starter-emberpup-line",
        type: "prose",
        heading: "Worked example: the Emberpup evolution line",
        body:
          "Emberpup is the clearest published example of how far a single pick travels. In the CBR interview the developer states that Emberpup evolves to Flameruff and then Scorchhowl, with Interlupa now part of that family too — the only Aniimo evolution chain named end-to-end in pre-launch coverage.\n\nRead against the standard pipeline, that line is a Lumin form advancing through Gamma to Nova, with the family extended by Interlupa. It matters for starter planning for two reasons: the fiery bruiser you pick in hour one is the same creature carrying your damage slot several stages later, and a Prismana version of that form would follow the same chain while keeping its alternate colouring.\n\nExact evolution requirements for each step are not fully confirmed as of 2026-09-05. Stage mechanics are covered on the [Aniimo evolution and stages](/evolution-and-stages) page.",
      },
      {
        id: "prismana-explained",
        type: "prose",
        heading: "Prismana forms explained",
        body:
          "Prismana forms are alternate-color Aniimo that resemble a 'shiny' or palette-swapped version of a standard form, with the same body and role but a different look and a slightly different stat spread. They are not a separate evolution stage; they sit alongside the Lumin, Gamma, and Nova pipeline and can advance through it on the same triggers as a normal form.\n\nThe official site describes the Prismana Form Aniimo as a rare creature the player selects as a Junior Wayfarer, and Prismana forms are also tied to encounter conditions the developer is still testing. As of 2026-09-05 the official list of Prismana forms is still subject to change per developer, so do not treat any third-party Prismana catalog as a final roster.\n\nOnce you have a Prismana form, it follows the same Lumin to Gamma to Nova evolution path as a standard form. Weather, regional, and Sparkling variants are layered on top of Prismana; a Prismana form is its own visual variant, while weather, regional, and Sparkling variants describe when the form appears.",
      },
      {
        id: "prismana-flat-base",
        type: "prose",
        heading: "Prismana flat-base trigger chance",
        body:
          "The 2026-09-03 dev letter reworked Prismana acquisition into a flat-base trigger chance. The earlier 'rare catalog of Prismana variants' framing has been replaced by a fixed base chance that fires during a catch attempt: every Aniipod throw against an eligible wild form rolls that flat-base chance, and a hit resolves the encounter as a Prismana instead of a standard form.\n\nBecause the chance is flat rather than tied to which body you chase, the practical planning shift is to throw more catches across more eligible forms rather than to chase a single rumored Prismana body. The flat base applies to both wild encounters and to certain event windows, and the lucky strike mechanic that sits on top of it decides how the catch resolves once the flat-base trigger fires.",
      },
      {
        id: "prismana-lucky-strike",
        type: "prose",
        heading: "Lucky strike mechanic during catching",
        body:
          "Lucky strike is the catching-side roll that lands a Prismana on a flat-base trigger. When the flat-base chance fires, a successful lucky strike is what turns the encounter into a Prismana catch; a failed lucky strike on the same catch still counts as a normal catch but the Prismana outcome is not resolved.\n\nIn practice, lucky strike replaces the older 'wait for the right spawn' advice. Players planning around Prismana should treat it as a per-catch roll layered on top of the flat-base chance, not as a separate encounter type. The official trigger value is not announced as of 2026-09-05, and the lucky strike outcome is independent of weather, regional, and Sparkling variant conditions.",
      },
      {
        id: "prismana-season-spawn",
        type: "prose",
        heading: "Reworked season-exclusive spawn rules",
        body:
          "The same 2026-09-03 dev letter that introduced the flat-base trigger and lucky strike reworked the season-exclusive spawn rules for Prismana. Earlier coverage framed Prismana encounters as rare catalog entries; the rework instead ties them to season-exclusive spawn windows in which the flat-base trigger is active for eligible forms.\n\nSeason-exclusive spawns run alongside — not in place of — the standard weather, regional, and Sparkling variant layers, so a Prismana encounter during a season window still resolves through the normal variant chain after the lucky strike fires. Exact season dates and the list of eligible forms per season are not announced as of 2026-09-05; treat any third-party 'Prismana season' schedule as community reconstruction.",
      },
      {
        id: "starter-eggs",
        type: "prose",
        heading: "How the Susuta egg and Perfect Egg rewards fit in",
        body:
          "Neither egg replaces your starter, and they do not come from the same place.\n\nThe Susuta egg is the mysterious egg tied to pre-registering on the official aniimo.com site. It is an account-level claim that lands in the launch build, so it arrives as a second body for your roster after you have already chosen a starter.\n\nThe Perfect Egg is a random egg earned through multi-day logins rather than through the pre-registration form, so it depends on playing across several days at launch rather than on signing up early.\n\nBoth roll into the same team-building plan as your starter: use them to cover the roles and movement types your starter does not, not to redo the first pick. Claim mechanics and the full milestone ladder are on the [Aniimo pre-order and editions](/pre-order-and-editions) page.",
      },
      {
        id: "starter-checklist",
        type: "steps",
        heading: "Beginner progression checklist",
        items: [
          { title: "Pick the movement type you will use most", body: "Before you fixate on damage, pick the movement type you will lean on for the first hour: flying (Celestis, Nimbi) for vertical puzzles, burrowing (Budclaw) for shortcut routes, swimming for water routes, climbing for walls, or dash for high-speed gaps. Your starter should give you at least one of those movement options." },
          { title: "Cover the missing roles within the first two hours", body: "Starter picks tend to skew DPS or Break — Emberpup and Chirpi read as combat-forward forms — and the open world adds Heal, Support, and Regen encounters early. Spend the first two hours chasing wild catches or quest rewards that cover the missing roles before you push story content." },
          { title: "Follow one evolution line all the way", body: "Use the published Emberpup to Flameruff to Scorchhowl line as your reference chain. Keeping one form in the lineup long enough to advance stages teaches you the pipeline faster than rotating a dozen half-levelled catches." },
          { title: "Plan Prismana around flat-base + lucky strike + season spawn", body: "The 2026-09-03 rework replaced the older catalog framing with a flat-base trigger chance, a catching-side lucky strike, and reworked season-exclusive spawn windows. Throw catches across eligible forms inside active season windows rather than chasing a rumored single body." },
          { title: "Slot the eggs where your roster is thin", body: "The Susuta egg arrives from official-site pre-registration and the Perfect Egg comes from multi-day logins. Give each a slot where your starter is weakest so you can see how it evolves before heavier variants unlock." },
        ],
      },
      {
        id: "starter-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-05",
        body:
          "Budclaw, Celestis, Nimbi, Emberpup, and Chirpi are named in the CBR interview and the ComicBook.com preview as Aniimo visible in pre-launch coverage; neither source publishes an official starter-selection screen, so which of them is actually offered as a starter is not announced as of 2026-09-05. Element assignments and combat roles for these specific forms are not announced as of 2026-09-05; the movement notes follow the descriptions in those sources. The Emberpup to Flameruff to Scorchhowl line and the addition of Interlupa are quoted from the CBR interview; per-step evolution requirements are not confirmed as of 2026-09-05. The Susuta egg is the official-site pre-registration claim and the Perfect Egg is a multi-day login reward per aniimo.com; reward availability may shift before launch. Prismana forms are confirmed as a variant layer, the flat-base trigger and lucky strike mechanic are confirmed in the 2026-09-03 dev letter, but the official trigger values, season dates, and per-season eligible-form lists are not announced as of 2026-09-05. Aniimo is a new IP; there is no legacy Aniimo starter list or Prismana catalog to inherit.",
      },
      {
        id: "starter-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo official site](https://www.aniimo.com/) — `official/store` — checked `2026-09-05` — Prismana Form Aniimo as the Junior Wayfarer pick, the Susuta egg pre-registration claim, and the Perfect Egg multi-day login track.\n- [Aniimo Dev Letter (2026-09-03)](https://www.aniimo.com/newslist/detail/100051) — `official/news` — checked `2026-09-05` — confirms the rune-system removal, the Prismana flat-base trigger, the lucky strike mechanic, and the reworked season-exclusive spawn rules.\n- [CBR: Aniimo interview](https://www.cbr.com/aniimo-interview-upcoming-creature-catching-rpg-co-op-gorgeous-visuals/) — `media/interview` — checked `2026-09-05` — names Budclaw as a crab-like burrowing Aniimo, Celestis and Nimbi as flying Aniimo, and states that Emberpup evolves to Flameruff and then Scorchhowl, and now Interlupa too.\n- [ComicBook.com: Aniimo preview](https://comicbook.com/gaming/feature/aniimo-preview/) — `media/interview` — checked `2026-09-05` — names Chirpi as a feisty bird and Emberpup as a fiery little bruiser, plus starter role and element framing.\n- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-09-05` — open-world creature-catching framing and evolution stages.",
      },
    ],
    faqIds: [
      "starter-which-pick",
      "starter-named-roster",
      "starter-emberpup-line",
      "prismana-form-meaning",
      "prismana-flat-base-trigger",
      "prismana-lucky-strike",
      "prismana-season-spawn",
      "perfect-egg-pre-register",
      "susuta-egg-replace-starter",
    ],
    relatedPageIds: [
      "fixed-twining-system-en-us",
      "fixed-evolution-and-stages-en-us",
      "fixed-catching-and-aniipods-en-us",
      "fixed-pre-order-and-editions-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-05",
  },
  {
    id: "fixed-evolution-and-stages-en-us",
    translationKey: "evolution-and-stages",
    locale: "en-US",
    routeKind: "fixed",
    slug: "evolution-and-stages",
    url: "/evolution-and-stages",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Aniimo evolution and stages: Lumin, Gamma, Nova, Umbral, and Legendary variants",
    seoTitle:
      "Aniimo evolution guide: Lumin, Gamma, Nova, Umbral, Sparkling, and Prismana variants",
    metaDescription:
      "Understand Aniimo evolution stages (Lumin, Gamma, Nova), the named Emberpup to Flameruff to Scorchhowl line, the Umbral variant, Closed Beta 3 roster additions, and variant layers.",
    summary:
      "Aniimo evolution flows Lumin to Gamma to Nova, with weather, regional, Sparkling, Prismana, Umbral, and Legendary variants layered on top. Emberpup to Flameruff to Scorchhowl (now with Interlupa) is the one line named end-to-end in coverage, and Closed Beta 3 added Bubbeep, Popapus, Mophling, Sausite plus the Budsquire and Thornblade forms. The 2026-09-03 dev letter introduced the Umbral variant with Perfect Potential via Wild Surges and reworked Irisalis catching onto a Legendary token crafting path. Specific evolution conditions are not fully confirmed as of 2026-09-05.",
    hero: {
      eyebrow: "Evolution & stages",
      subtitle:
        "Every Aniimo follows the same Lumin to Gamma to Nova evolution pipeline. Emberpup to Flameruff to Scorchhowl is the named worked example, the Umbral variant adds a Wild Surge route to Perfect Potential, and Irisalis is the redesigned Legendary catch.",
      ctas: [
        { label: "Twining System", href: "/twining-system" },
        { label: "Starter & Prismana", href: "/starter-and-prismana" },
        { label: "Catching & Aniipods", href: "/catching-and-aniipods" },
        { label: "Elements & Roles", href: "/elements-and-roles" },
      ],
    },
    quickAnswer:
      "Aniimo evolution flows Lumin to Gamma to Nova. The only chain named end-to-end in pre-launch coverage is Emberpup to Flameruff to Scorchhowl, with Interlupa now part of the same family. Weather, regional, Sparkling, Prismana, Umbral, and Legendary variants are layered on top of that pipeline; they describe how and when the form appears, not a separate evolution stage. The 2026-09-03 dev letter added the Umbral variant with Perfect Potential through Wild Surges and introduced a redesigned Irisalis Legendary catch built around crafted Legendary Aniipods and a one-time exclusive encounter. Closed Beta 3 added Bubbeep, Popapus, Mophling, and Sausite as new species plus the Budsquire and Thornblade forms. Specific evolution conditions are not fully confirmed as of 2026-09-05.",
    keyFacts: [
      { label: "Pipeline", value: "Lumin → Gamma → Nova" },
      { label: "Named line", value: "Emberpup → Flameruff → Scorchhowl (+ Interlupa)" },
      { label: "Variant layers", value: "Weather, regional, Sparkling, Prismana, Umbral, Legendary" },
      { label: "Umbral route", value: "Perfect Potential via Wild Surges" },
      { label: "Irisalis", value: "Legendary token craft + one-time exclusive encounter" },
      { label: "Beta 3 species", value: "Bubbeep, Popapus, Mophling, Sausite" },
      { label: "Beta 3 forms", value: "Budsquire, Thornblade" },
      { label: "Evolution conditions", value: "Not fully confirmed as of 2026-09-05" },
    ],
    modules: [
      {
        id: "evolution-pipeline",
        type: "prose",
        heading: "Lumin → Gamma → Nova pipeline",
        body:
          "Every Aniimo begins as a Lumin form, the base body you catch or pick at the start. Gamma is the second evolution stage reached through encounter conditions, and Nova is the third and highest standard stage. CBR and ComicBook.com previews describe Gamma and Nova as 'more powerful' variants of the same body, with the visual differences leaning on palette and silhouette rather than a wholesale redesign.\n\nSpecific evolution conditions for moving from Lumin to Gamma and from Gamma to Nova are not fully confirmed as of 2026-09-05. Treat any leaked evolution requirements as provisional.",
      },
      {
        id: "evolution-named-line",
        type: "prose",
        heading: "Named example: Emberpup → Flameruff → Scorchhowl (+ Interlupa)",
        body:
          "Pre-launch coverage names exactly one chain end-to-end. In the CBR interview the developer states that Emberpup evolves to Flameruff and then Scorchhowl, and that Interlupa is now part of that family too. ComicBook.com independently describes Emberpup as a fiery little bruiser with serious attitude and a fan-favourite on the team.\n\nUse it as the reference shape for the pipeline: a base body you meet in the early game, a middle form, a top standard form, and a related family member added later. Interlupa is described as joining the family rather than as a confirmed fourth sequential stage, so do not read it as proof that some lines have four steps.\n\nNo other Aniimo line has published stage names as of 2026-09-05, so any full evolution chart circulating elsewhere is community reconstruction rather than an official table. Starter-side planning for this line lives on the [Aniimo starter and Prismana](/starter-and-prismana) page.",
      },
      {
        id: "evolution-beta-roster",
        type: "data-table",
        heading: "Closed Beta 3 roster additions",
        columns: [
          { key: "name", label: "Added" },
          { key: "kind", label: "Kind" },
          { key: "stageStatus", label: "Stage / line status" },
        ],
        rows: [
          { name: "Bubbeep", kind: "New Aniimo species", stageStatus: "Evolution line not published as of 2026-09-05" },
          { name: "Popapus", kind: "New Aniimo species", stageStatus: "Evolution line not published as of 2026-09-05" },
          { name: "Mophling", kind: "New Aniimo species", stageStatus: "Evolution line not published as of 2026-09-05" },
          { name: "Sausite", kind: "New Aniimo species", stageStatus: "Evolution line not published as of 2026-09-05" },
          { name: "Budsquire", kind: "Additional creature form", stageStatus: "Which body it belongs to is not published as of 2026-09-05" },
          { name: "Thornblade", kind: "Additional creature form", stageStatus: "Which body it belongs to is not published as of 2026-09-05" },
          { name: "Bubbask", kind: "Co-op boss creature", stageStatus: "Boss encounter, not a catchable evolution line as published" },
          { name: "Coraliz", kind: "Co-op boss creature", stageStatus: "Boss encounter, not a catchable evolution line as published" },
        ],
      },
      {
        id: "evolution-beta-context",
        type: "prose",
        heading: "What the Beta 3 additions mean for the pipeline",
        body:
          "Twisted Voxel's Closed Beta 3 coverage lists Bubbeep, Popapus, Mophling, and Sausite as new Aniimo species and Budsquire and Thornblade as additional creature forms, alongside the co-op bosses Bubbask and Coraliz. The names widen the roster the Lumin to Gamma to Nova pipeline applies to; they do not add a new stage to it.\n\nThe distinction matters when you read community lists. A 'new species' is a new base body that should have its own line, while an 'additional form' is published as a form rather than as a named stage, and the source does not say which body Budsquire or Thornblade belongs to. Bubbask and Coraliz are described as creatures you team up to fight, so treat them as encounter content until the developer publishes catch or evolution data. Beta-build context for all of these is on the [Aniimo closed beta and sign-ups](/closed-beta-and-signups) page.",
      },
      {
        id: "evolution-variants",
        type: "prose",
        heading: "Weather, regional, Sparkling, Prismana, Umbral, and Legendary variants",
        body:
          "Beyond the Lumin to Nova pipeline, six variant layers describe how a given Aniimo appears:\n\n- Weather variants tie to specific weather conditions such as rain, snow, fog, or aurora events. They evolve through the same pipeline.\n- Regional variants tie to specific regions of the Idyll continent and Astra. They are typically harder to find than standard forms.\n- Sparkling variants are rare palette-swapped forms with a shifted appearance. They are not yet a confirmed roster as of 2026-09-05.\n- Prismana variants are alternate-color Aniimo with slightly different stats. They are not a separate evolution stage and evolve along the same pipeline; the 2026-09-03 dev letter reworked their acquisition onto a flat-base trigger + lucky strike + season-exclusive spawn window.\n- Umbral variants are a distinct visual variant with Perfect Potential stat outcomes reached through Wild Surges and open-world encounters.\n- Legendary variants are catchable only through the redesigned Legendary token crafting flow; Irisalis is the named Legendary tied to that flow.",
      },
      {
        id: "evolution-prismana",
        type: "prose",
        heading: "How Prismana fits the evolution pipeline",
        body:
          "Prismana is its own visual variant, while weather, regional, and Sparkling variants describe when the form appears. A Prismana form can still evolve from Lumin to Gamma to Nova, with Prismana remaining the visual layer — a Prismana Emberpup would run the same Flameruff and Scorchhowl steps while keeping its alternate colouring. Aniidex and community references track known Prismana encounters, but as of 2026-09-05 the official list is subject to change per developer. The 2026-09-03 dev letter reworked how a Prismana catch resolves — see the flat-base + lucky strike + season-exclusive flow on the [Aniimo starter and Prismana](/starter-and-prismana) page.",
      },
      {
        id: "evolution-umbral",
        type: "prose",
        heading: "Umbral variant: Perfect Potential via Wild Surges",
        body:
          "The 2026-09-03 dev letter introduced the Umbral variant as a new top-end visual layer. Umbral forms are characterised by a distinctive coloration — darker, contrast-shifted palettes compared to their base body — and they always carry Perfect Potential, the maximum-stat outcome on each individual value.\n\nUmbral forms are reached through Wild Surges, ecosystem events that surface a rare-eligible spawn across the open world. The encounter is a chance roll: not every Wild Surge resolves an Umbral encounter, and the Prismatic Energy that powers the surge is the resource you cultivate to push the chance. Outside the Wild Surge window, an Umbral form can also appear as a rare open-world spawn, though the surge route is the documented acquisition path.\n\nStat-wise, an Umbral catch starts on Perfect Potential, so it sits above a Prismana catch of the same body in the standard value spread. It still evolves through the Lumin to Gamma to Nova pipeline while keeping its Umbral colouring. The full per-form Umbral roster and exact Wild Surge scheduling are not announced as of 2026-09-05.",
      },
      {
        id: "evolution-legendary-irisalis",
        type: "prose",
        heading: "Legendary variants and Irisalis",
        body:
          "Legendary variants sit above Umbral as a separate acquisition layer: they are not caught through flat-base or Wild Surge rolls but through a deterministic token-craft flow. The 2026-09-03 dev letter redesigns Irisalis — the headline Legendary — onto that flow, replacing the earlier gacha-style ball-spam loop that Global Beta Test feedback had criticised.\n\nThe Irisalis flow resolves in order: gather Legendary Aniipod tokens from exploration and story content, craft a personal Legendary Aniipod at the crafting station, trigger the one-time exclusive encounter with Irisalis, defeat Irisalis in combat, and throw the crafted Legendary Aniipod to secure the catch. Because the encounter is one-time and the Aniipod is crafted rather than random, players who plan ahead can win Irisalis on the first try.\n\nThe Aniipod crafting step is shared with the broader Legendary Aniipod crafting cross-link on the [Aniimo catching and Aniipods](/catching-and-aniipods) page. Other Legendary Aniimo beyond Irisalis are not announced as of 2026-09-05; treat any third-party Legendary roster as community reconstruction.",
      },
      {
        id: "evolution-reach",
        type: "prose",
        heading: "How to reach higher forms",
        body:
          "Higher forms are reached through encounter conditions, weather, regional location, and reward tracks. For top-end variants, three acquisition paths now apply: the Prismana flat-base trigger with a lucky strike catch on season-exclusive spawns; the Umbral Perfect Potential route through Wild Surges and open-world encounters; and the Legendary token-craft flow exemplified by Irisalis. Specific triggers are not fully confirmed as of 2026-09-05, so the safest approach is to keep a balanced roster of forms and to enter active season windows with Aniipods ready for both Prismana and Umbral encounters.",
      },
      {
        id: "evolution-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-05",
        body:
          "The Emberpup to Flameruff to Scorchhowl line and Interlupa joining that family are quoted from the CBR interview; per-step requirements for those evolutions are not confirmed as of 2026-09-05. The Closed Beta 3 names come from Twisted Voxel's beta coverage and describe the beta roster; their elements, roles, stages, and evolution lines are not published as of 2026-09-05, and whether every one ships at launch is not announced. Specific evolution conditions for moving between Lumin, Gamma, and Nova are not fully confirmed as of 2026-09-05. The Sparkling variant roster is not officially published as of 2026-09-05. Prismana forms are confirmed as a variant layer, the flat-base trigger and lucky strike mechanic are confirmed in the 2026-09-03 dev letter, but the official trigger values, season dates, and per-season eligible-form lists are not announced as of 2026-09-05. The Umbral variant and its Perfect Potential via Wild Surges route are confirmed in the 2026-09-03 dev letter, but the full Umbral form list and exact surge scheduling are not announced as of 2026-09-05. The Irisalis Legendary redesign (token craft + one-time exclusive encounter + crafted Legendary Aniipod) is confirmed in the 2026-09-03 dev letter; other Legendary Aniimo beyond Irisalis are not announced as of 2026-09-05. Aniimo is a new IP from Pawprint Studio; there is no legacy Aniimo evolution table to inherit.",
      },
      {
        id: "evolution-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo Dev Letter (2026-09-03)](https://www.aniimo.com/newslist/detail/100051) — `official/news` — checked `2026-09-05` — confirms the rune-system removal, the Prismana flat-base + lucky strike + season spawn rework, the Umbral variant with Perfect Potential via Wild Surges, the Sparkling Cube Perfect Potential guarantee, the Irisalis Legendary redesign, and the simplified training layer.\n- [CBR: Aniimo interview](https://www.cbr.com/aniimo-interview-upcoming-creature-catching-rpg-co-op-gorgeous-visuals/) — `media/interview` — checked `2026-09-05` — states that Emberpup evolves to Flameruff and then Scorchhowl, and now Interlupa too; also names Budclaw, Celestis, and Nimbi.\n- [Twisted Voxel: Aniimo Closed Beta 3](https://twistedvoxel.com/aniimo-set-for-q3-2026-launch-new-beta-announced/) — `media/interview` — checked `2026-09-05` — names Bubbeep, Popapus, Mophling, and Sausite as new species, Budsquire and Thornblade as additional forms, and Bubbask and Coraliz as co-op bosses.\n- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-09-05` — evolution stage framing.\n- [ComicBook.com: Aniimo preview](https://comicbook.com/gaming/feature/aniimo-preview/) — `media/interview` — checked `2026-09-05` — variant layer context and Emberpup description.",
      },
    ],
    faqIds: [
      "evolution-pipeline",
      "evolution-emberpup-line",
      "evolution-beta-additions",
      "evolution-prismana",
      "evolution-sparkling",
      "evolution-trigger",
      "evolution-umbral-variant",
      "evolution-legendary-irisalis",
    ],
    relatedPageIds: [
      "fixed-twining-system-en-us",
      "fixed-starter-and-prismana-en-us",
      "fixed-catching-and-aniipods-en-us",
      "fixed-elements-and-roles-en-us",
      "fixed-closed-beta-and-signups-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-05",
  },
  {
    id: "fixed-catching-and-aniipods-en-us",
    translationKey: "catching-and-aniipods",
    locale: "en-US",
    routeKind: "fixed",
    slug: "catching-and-aniipods",
    url: "/catching-and-aniipods",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Aniimo catching and Aniipods: traps, timing, Sparkling Cube, and Irisalis Legendary flow",
    seoTitle:
      "Aniimo catching guide: Aniipods, traps, Sparkling Cube Perfect Potential, and Irisalis crafting",
    metaDescription:
      "Master Aniimo catching using Aniipods, traps, timing, environmental spawns, the Sparkling Cube Perfect Potential guarantee, the Legendary Aniipod crafting flow, and the Aniilog capture log.",
    summary:
      "Aniimo catching uses Aniipods, the in-game capture device, plus timing, traps, environmental spawns, and the Aniilog capture log. The Sparkling Cube now carries a Perfect Potential guarantee, and the Legendary tier resolves through a crafted Legendary Aniipod into a one-time exclusive Irisalis encounter.",
    hero: {
      eyebrow: "Catching & Aniipods",
      subtitle:
        "Aniipods are the capture device you throw at a wild Aniimo. Sparkling Cube now guarantees Perfect Potential, and the Legendary Aniipod craft leads into the one-time exclusive Irisalis encounter.",
      ctas: [
        { label: "Twining System", href: "/twining-system" },
        { label: "Starter & Prismana", href: "/starter-and-prismana" },
        { label: "Idyll Regions", href: "/idyll-regions" },
      ],
    },
    quickAnswer:
      "Aniimo catching uses Aniipods, the in-game capture device, plus timing, traps, environmental spawns, and the Aniilog capture log. The launch-day Sparkling Cube now guarantees Perfect Potential on its outcome, and the redesigned Legendary flow replaces the older ball-spam loop with a token-gather → Legendary Aniipod craft → one-time Irisalis encounter sequence.",
    keyFacts: [
      { label: "Capture device", value: "Aniipod" },
      { label: "Aniilog", value: "In-game capture log" },
      { label: "Spawn factors", value: "Region, weather, time of day, traps" },
      { label: "Sneak bonus", value: "Bonus for catching without alerting" },
      { label: "Sparkling Cube", value: "Guaranteed Perfect Potential outcome" },
      { label: "Legendary craft", value: "Tokens → crafted Legendary Aniipod → one-time Irisalis encounter" },
      { label: "Capture devices", value: "Basic Aniipod, Aniipod Ultra, Sparkling Cube, crafted Legendary Aniipod" },
    ],
    modules: [
      {
        id: "catch-aniipod",
        type: "prose",
        heading: "Aniipod basics",
        body:
          "Aniipods are the in-game capture device you throw at a wild Aniimo to attempt a catch. The free launch-day reward ladder grants an Aniipod Ultra, which carries a higher base catch rate than the basic Aniipod. Both share the same throw-and-confirm flow; the difference is the underlying catch chance and any post-catch bonuses.",
      },
      {
        id: "catch-sparkling-cube",
        type: "prose",
        heading: "Sparkling Cube Perfect Potential guarantee",
        body:
          "The Sparkling Cube is the third launch-day item granted to all players free. Under the 2026-09-03 dev letter, the Sparkling Cube now carries a Perfect Potential guarantee: any catch resolved through a Sparkling Cube lands on the maximum individual-values spread for the resulting form.\n\nThat changes how a Sparkling Cube is best used. Where pre-launch coverage treated it as a rare-variant chance roll, the new framing is that every Sparkling Cube outcome is a top-stat form on the body you catch. Use it on the forms that benefit most from top-tier individual values, and pair it with the Prismana flat-base trigger + lucky strike flow on the [Aniimo starter and Prismana](/starter-and-prismana) page if you also want the alternate-color Prismatic outcome on the same catch.",
      },
      {
        id: "catch-legendary-aniipod",
        type: "prose",
        heading: "Legendary Aniipod crafting",
        body:
          "Legendary Aniipods are not bought or rolled: they are crafted at the Legendary Aniipod bench. The recipe consumes Legendary tokens that drop from exploration and story content, and the resulting Aniipod is a personal, named-tier capture device.\n\nThe crafted Legendary Aniipod is what you throw to resolve the Legendary encounter — for Irisalis specifically, the encounter is one-time and exclusive, so you only need to win it once. Because the Aniipod is crafted rather than random, the catch step on a Legendary encounter is deterministic once you reach the encounter with the right materials.\n\nCrafted Legendary Aniipods are tied to the Legendary Aniipod crafting flow rather than to the standard Prismana or Umbral catch paths; treat the Legendary bench as a separate station from the basic Aniipod vendor.",
      },
      {
        id: "catch-irisalis-flow",
        type: "prose",
        heading: "Irisalis Legendary catch flow",
        body:
          "The 2026-09-03 dev letter redesigns the Irisalis catch onto a token-craft flow. The sequence, in order:\n\n1. Gather Legendary Aniipod tokens from exploration and story content. Token sources are tagged as exploration and story drops in the dev letter rather than as a single reward track.\n2. Craft a personal Legendary Aniipod at the Legendary Aniipod bench.\n3. Trigger the one-time exclusive encounter with Irisalis. The encounter is named 'one-time' in the dev letter, so it does not repeat.\n4. Defeat Irisalis in combat. The Irisalis fight is the Legendary combat check before the catch resolves.\n5. Throw the crafted Legendary Aniipod to secure the catch.\n\nThe redesign explicitly replaces the prior gacha-style ball-spam loop. Because the flow is deterministic — gather tokens, craft, encounter, defeat, throw — players who plan ahead can win Irisalis on the first try.\n\nOther Legendary Aniimo beyond Irisalis are not announced as of 2026-09-05; treat any third-party Legendary roster as community reconstruction. The Irisalis entry on the [Aniimo evolution and stages](/evolution-and-stages) page covers how the Legendary variant fits into the broader evolution pipeline.",
      },
      {
        id: "catch-spawns",
        type: "prose",
        heading: "Environmental and weather-based spawns",
        body:
          "Wild Aniimo spawn by region, weather, time of day, and trap placement. Previews from Loot Level Chill and Zeroluck describe weather-driven spawns as a meaningful variant source; a region during a snow event will spawn different forms than the same region during clear weather. The full spawn table is not announced as of 2026-09-05.",
      },
      {
        id: "catch-sneak",
        type: "prose",
        heading: "Sneak bonus tips",
        body:
          "Approaching a wild Aniimo without alerting it grants a sneak bonus to the catch chance. Use terrain and Twining into a small or burrowing form to close distance quietly when the encounter allows.",
      },
      {
        id: "catch-aniilog",
        type: "prose",
        heading: "Aniilog capture log",
        body:
          "The Aniilog is the in-game capture log that records every catch attempt. Each entry lists the form, region, weather, and outcome so you can backtrack variant encounters. The Aniilog also surfaces which forms you have not yet caught, which helps you plan weather or region runs. Legendary encounters are logged in the Aniilog so you can confirm whether the one-time Irisalis encounter has already fired on your account.",
      },
      {
        id: "catch-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-05",
        body:
          "Spawn rules beyond environmental and weather hints are not announced as of 2026-09-05. Specific catch rate numbers for basic Aniipod and Aniipod Ultra are not announced as of 2026-09-05. Trap crafting recipes are not announced as of 2026-09-05. The Sparkling Cube Perfect Potential guarantee is confirmed by the 2026-09-03 dev letter; the exact individual-values spread and the maximum-stat outcome vs. an Umbral Perfect Potential catch are not announced as of 2026-09-05. The Irisalis Legendary token-craft flow (tokens → craft → one-time exclusive encounter → defeat → throw) is confirmed by the 2026-09-03 dev letter; specific token drop rates, Legendary Aniipod crafting recipe, and Irisalis combat mechanics are not announced as of 2026-09-05. Other Legendary Aniimo beyond Irisalis are not announced as of 2026-09-05. Aniimo is a new IP; no legacy catch system exists to inherit.",
      },
      {
        id: "catch-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-09-05` — Aniipod and capture flow framing.\n- [Aniimo Dev Letter (2026-09-03)](https://www.aniimo.com/newslist/detail/100051) — `official/news` — checked `2026-09-05` — confirms the Sparkling Cube Perfect Potential guarantee, the rune-system removal, the Prismana flat-base + lucky strike + season spawn rework, the Umbral variant with Perfect Potential via Wild Surges, and the Irisalis Legendary redesign (token craft + one-time exclusive encounter + crafted Legendary Aniipod).\n- [Loot Level Chill: Aniimo preview](https://lootlevelchill.com/features/aniimo-preview-action-packed-and-rather-surprising) — `media/interview` — checked `2026-09-05` — weather-driven spawn coverage.\n- [Zeroluck: Aniimo gameplay](https://zeroluck.gg/aniimo/gameplay) — `community/wiki` — checked `2026-09-05` — orientation only.",
      },
    ],
    faqIds: [
      "catch-aniipod-types",
      "catch-spawn-rules",
      "catch-aniilog",
      "catch-sneak-bonus",
      "catch-sparkling-cube-perfect-potential",
      "catch-legendary-aniipod-craft",
      "catch-irisalis-flow",
    ],
    relatedPageIds: [
      "fixed-twining-system-en-us",
      "fixed-starter-and-prismana-en-us",
      "fixed-evolution-and-stages-en-us",
      "fixed-idyll-regions-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-05",
  },
  {
    id: "fixed-elements-and-roles-en-us",
    translationKey: "elements-and-roles",
    locale: "en-US",
    routeKind: "fixed",
    slug: "elements-and-roles",
    url: "/elements-and-roles",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Aniimo elements and roles: nine elements and five combat roles",
    seoTitle:
      "Aniimo elements and roles: nine elements and five combat roles",
    metaDescription:
      "Look up the nine Aniimo elements and the five combat roles (DPS, Heal, Support, Break, Regen) and how they interact.",
    summary:
      "Aniimo has nine elements and five combat roles (DPS, Heal, Support, Break, Regen). Specific synergy coefficients are not announced as of 2026-08-29; the role system is confirmed by the official site and Steam store page.",
    hero: {
      eyebrow: "Elements & roles",
      subtitle:
        "Nine elements plus five combat roles define Aniimo's team-building. Roles are confirmed; specific synergy coefficients are not announced as of 2026-08-29.",
      ctas: [
        { label: "Twining System", href: "/twining-system" },
        { label: "Starter & Prismana", href: "/starter-and-prismana" },
        { label: "Heist of the Lost Isles", href: "/heist-of-the-lost-isles" },
      ],
    },
    quickAnswer:
      "Aniimo has nine elements and five combat roles (DPS, Heal, Support, Break, Regen). Specific synergy coefficients are not announced as of 2026-08-29; the role system is confirmed by the official Aniimo site and Steam store page.",
    keyFacts: [
      { label: "Element count", value: "9" },
      { label: "Role count", value: "5 (DPS, Heal, Support, Break, Regen)" },
      { label: "Element interactions", value: "Not announced as of 2026-08-29" },
      { label: "Role interactions", value: "Not announced as of 2026-08-29" },
      { label: "Party size", value: "3-player co-op core squad" },
      { label: "Source", value: "Pawprint Studio + ComicBook.com preview" },
    ],
    modules: [
      {
        id: "elements-list",
        type: "entity-grid",
        heading: "Aniimo elements",
        items: [
          { title: "Fire", summary: "Element type — see in-game roster for full description.", href: "" },
          { title: "Water", summary: "Element type — see in-game roster for full description.", href: "" },
          { title: "Earth", summary: "Element type — see in-game roster for full description.", href: "" },
          { title: "Wind", summary: "Element type — see in-game roster for full description.", href: "" },
          { title: "Lightning", summary: "Element type — see in-game roster for full description.", href: "" },
          { title: "Ice", summary: "Element type — see in-game roster for full description.", href: "" },
          { title: "Light", summary: "Element type — see in-game roster for full description.", href: "" },
          { title: "Shadow", summary: "Element type — see in-game roster for full description.", href: "" },
          { title: "Nature", summary: "Element type — see in-game roster for full description.", href: "" },
        ],
      },
      {
        id: "roles-list",
        type: "entity-grid",
        heading: "Aniimo combat roles",
        items: [
          { title: "DPS", summary: "Damage-dealing role; primary damage output.", href: "" },
          { title: "Heal", summary: "Healing role; restores ally HP and removes conditions.", href: "" },
          { title: "Support", summary: "Support role; buffs allies and debuffs enemies.", href: "" },
          { title: "Break", summary: "Break role; disrupts enemy patterns and staggers bosses.", href: "" },
          { title: "Regen", summary: "Regen role; long-term sustain through HP regeneration and shields.", href: "" },
        ],
      },
      {
        id: "elements-roles-interaction",
        type: "prose",
        heading: "Element and role interaction",
        body:
          "Specific synergy coefficients between elements and roles are not announced as of 2026-08-29. The role taxonomy (DPS, Heal, Support, Break, Regen) is confirmed by the official Aniimo site and ComicBook.com preview, while the official element-vs-element chart is not yet published as of 2026-08-29.\n\nTeam composition: a balanced 3-player squad typically includes one DPS, one healer or support, and one Break or Regen slot. Heist of the Lost Isles rewards teams that can flex roles across the squad during the real-time search and battle phases.",
      },
      {
        id: "elements-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-29",
        body:
          "Specific synergy coefficients between elements are not announced as of 2026-08-29. The element/role taxonomy is confirmed; the published roster and chart are not finalized as of 2026-08-29. Aniimo is a new IP; no legacy element or role table exists to inherit.",
      },
      {
        id: "elements-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo official site](https://www.aniimo.com/) — `official/store` — checked `2026-08-29` — role taxonomy.\n- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-08-29` — role and element framing.\n- [ComicBook.com: Aniimo preview](https://comicbook.com/gaming/feature/aniimo-preview/) — `media/interview` — checked `2026-08-29` — role/team-building coverage.",
      },
    ],
    faqIds: [
      "elements-count",
      "roles-count",
      "elements-roles-interaction",
    ],
    relatedPageIds: [
      "fixed-twining-system-en-us",
      "fixed-starter-and-prismana-en-us",
      "fixed-heist-of-the-lost-isles-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-08-29",
  },
  {
    id: "fixed-idyll-regions-en-us",
    translationKey: "idyll-regions",
    locale: "en-US",
    routeKind: "fixed",
    slug: "idyll-regions",
    url: "/idyll-regions",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Aniimo Idyll regions and Astra sky city",
    seoTitle:
      "Aniimo Idyll regions: named areas of the Idyll continent and Astra",
    metaDescription:
      "Survey the named regions of the Idyll continent, the Astra sky-floating metropolis, and key exploration tips for each area.",
    summary:
      "Aniimo opens on the Idyll continent, a daylight overworld with named regions (beaches, grasslands, snowfields, volcanic caves) and the Astra sky-floating metropolis. Total region count is subject to change per developer as of 2026-08-29.",
    hero: {
      eyebrow: "Idyll regions",
      subtitle:
        "Aniimo opens on the Idyll continent with named regions ranging from beaches and grasslands to snowfields and volcanic caves, plus the Astra sky-floating metropolis.",
      ctas: [
        { label: "Twining System", href: "/twining-system" },
        { label: "Catching & Aniipods", href: "/catching-and-aniipods" },
        { label: "Homeland & Housing", href: "/homeland-and-housing" },
      ],
    },
    quickAnswer:
      "Aniimo opens on the Idyll continent, a daylight overworld with named regions including beaches, grasslands, snowfields, and volcanic caves, plus the Astra sky-floating metropolis. Total region count is subject to change per developer as of 2026-08-29.",
    keyFacts: [
      { label: "Continent", value: "Idyll" },
      { label: "Metropolis", value: "Astra (sky-floating)" },
      { label: "Region count", value: "Subject to change per developer as of 2026-08-29" },
      { label: "Environment themes", value: "Beach, grassland, snowfield, volcanic cave" },
      { label: "Exploration hint", value: "Weather variants tie to region" },
      { label: "Source", value: "Steam store + CBR / ComicBook.com previews" },
    ],
    modules: [
      {
        id: "regions-list",
        type: "entity-grid",
        heading: "Named Idyll regions",
        items: [
          { title: "Beach regions", summary: "Coastal areas; tidepool spawns and water routes.", href: "" },
          { title: "Grassland regions", summary: "Open plains; high spawn density for standard forms.", href: "" },
          { title: "Snowfield regions", summary: "Cold climate; snow weather variants common.", href: "" },
          { title: "Volcanic cave regions", summary: "Underground lava systems; fire-element forms prevalent.", href: "" },
          { title: "Astra sky metropolis", summary: "Floating city social hub; aerial traversal and Twining into flying forms.", href: "" },
        ],
      },
      {
        id: "regions-explore",
        type: "prose",
        heading: "Exploration tips by region",
        body:
          "Each region leans toward specific weather and element spawns. Beach regions favor tidepool and water routes; grassland regions host the densest standard-form spawns; snowfield regions expose snow weather variants; volcanic cave regions favor fire-element forms. Astra sits above the continent and is best reached via Twining into a flying form.\n\nA regional sweep under native weather maximizes variant encounters. Use the Aniilog capture log to track which forms you have caught per region.",
      },
      {
        id: "regions-astra",
        type: "prose",
        heading: "Astra sky-floating metropolis",
        body:
          "Astra is the social hub and one of the headline exploration spaces. It floats above the continent and is reached via flying Twining forms. Pre-launch coverage from CBR and ComicBook.com highlights Astra as the main aerial traversal showcase.",
      },
      {
        id: "regions-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-29",
        body:
          "Total region count is subject to change per developer as of 2026-08-29. Specific named regions beyond the four environment themes are not fully confirmed as of 2026-08-29. Aniimo is a new IP; no legacy Idyll region list exists to inherit.",
      },
      {
        id: "regions-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-08-29` — Idyll continent and Astra framing.\n- [CBR: Aniimo interview](https://www.cbr.com/aniimo-interview-upcoming-creature-catching-rpg-co-op-gorgeous-visuals/) — `media/interview` — checked `2026-08-29` — Astra traversal coverage.\n- [ComicBook.com: Aniimo preview](https://comicbook.com/gaming/feature/aniimo-preview/) — `media/interview` — checked `2026-08-29` — region themes.",
      },
    ],
    faqIds: [
      "regions-count",
      "regions-astra-access",
      "regions-weather-variants",
    ],
    relatedPageIds: [
      "fixed-twining-system-en-us",
      "fixed-catching-and-aniipods-en-us",
      "fixed-homeland-and-housing-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-08-29",
  },
  {
    id: "fixed-heist-of-the-lost-isles-en-us",
    translationKey: "heist-of-the-lost-isles",
    locale: "en-US",
    routeKind: "fixed",
    slug: "heist-of-the-lost-isles",
    url: "/heist-of-the-lost-isles",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Aniimo Heist of the Lost Isles: 3-player squad, Diamond Egg Heist, and Chaos Mode",
    seoTitle:
      "Aniimo Heist of the Lost Isles, Diamond Egg Heist, and Chaos Mode",
    metaDescription:
      "Build an Aniimo Heist of the Lost Isles squad: 3-player role coverage, the six-team Diamond Egg Heist format, Chaos Mode layered on the same six-team bracket, the new egg types, and Bubbask and Coraliz co-op bosses.",
    summary:
      "Heist of the Lost Isles is Aniimo's headline seasonal PvPvE mode, built on a 3-player squad that searches for high-value egg caches while fighting environment enemies and rival squads. The Diamond Egg Heist scales that up to six teams of three contesting one diamond egg, and the 2026-09-03 dev letter layered Chaos Mode on the existing format alongside a wider set of egg types. Closed Beta 3 added the coordinated co-op bosses Bubbask and Coraliz.",
    hero: {
      eyebrow: "Heist of the Lost Isles",
      subtitle:
        "Seasonal 3-player squad PvPvE with real-time egg searching, the Diamond Egg Heist where up to six teams of three contest a single diamond egg, and Chaos Mode layered on top with a wider egg-type pool and rebalanced squad priorities.",
      ctas: [
        { label: "Elements & Roles", href: "/elements-and-roles" },
        { label: "Idyll Regions", href: "/idyll-regions" },
        { label: "Closed Beta", href: "/closed-beta-and-signups" },
      ],
    },
    quickAnswer:
      "Heist of the Lost Isles is Aniimo's headline seasonal PvPvE mode. Matches use a 3-player squad that searches in real time for high-value egg caches while fighting environment enemies and rival squads. The Diamond Egg Heist variant added in Closed Beta 3 pits up to six teams of three players against one another: teams must secure a valuable diamond egg and escort it safely while rival groups try to steal it. The 2026-09-03 dev letter layered Chaos Mode on the same six-team bracket, expanded the egg-type pool, and rebalanced squad and element priorities for the higher-pressure pacing. Build the squad around role coverage (one DPS, one Heal or Support, one Break or Regen), spread element coverage across the three players, and decide cache priority before the match.",
    keyFacts: [
      { label: "Mode", value: "PvPvE seasonal" },
      { label: "Squad size", value: "3 players" },
      { label: "Diamond Egg Heist", value: "Up to six teams of three" },
      { label: "Chaos Mode", value: "Layered on the six-team format with wider egg types" },
      { label: "Objectives", value: "Search egg caches, secure and escort the diamond egg" },
      { label: "Co-op bosses", value: "Bubbask, Coraliz (coordinated group play)" },
      { label: "Reward structure", value: "Not announced as of 2026-09-05" },
    ],
    modules: [
      {
        id: "heist-squad",
        type: "prose",
        heading: "3-player squad basics",
        body:
          "Each Heist match uses a 3-player squad. The squad moves together through the Lost Isles region, splitting only when objectives call for parallel searches. ComicBook.com preview coverage describes the squad as the natural combat unit; solo play is supported through the open-world PvE loop rather than Heist.\n\nThree slots is a tight budget: every role you take is a role no one else can cover, so decide composition before the match instead of improvising after the first fight.",
      },
      {
        id: "heist-diamond-egg",
        type: "prose",
        heading: "Diamond Egg Heist: six teams of three",
        body:
          "The Diamond Egg Heist, shown in Closed Beta 3, scales the squad format into a larger competitive bracket. Twisted Voxel describes it as pitting up to six teams of three players against one another in a competitive objective-based challenge, where teams must secure a valuable diamond egg and safely escort it while defending against rival groups attempting to steal it.\n\nThat changes the shape of the match in two ways. First, the population: with up to eighteen players on one objective, contested fights are the default rather than the exception, so a squad that can disengage matters as much as one that can win a straight fight. Second, the objective: securing the egg is only the first half — the escort leg is when your squad is slowest, most predictable, and most exposed to the other five teams.\n\nThe Diamond Egg Heist is the bracket Chaos Mode layers on top of. Treat the six-team Diamond Egg Heist as the underlying format for both standard and Chaos runs as of 2026-09-05.",
      },
      {
        id: "heist-objectives",
        type: "prose",
        heading: "Real-time search and battle objectives",
        body:
          "The core Heist objective is real-time searching for high-value egg caches scattered through the Lost Isles. Squads compete against rival squads for the same caches while environment enemies pressure both teams. The combination of PvE threat and PvP competition defines the mode's pacing.\n\nCache priority is the practical decision: caches that sit on open ground are cheap to grab but expensive to hold, while caches behind PvE pressure cost time but tend to be uncontested early. In a six-team Diamond Egg Heist, the diamond egg itself is the highest-value target on the map, so expect the remaining caches to go quiet once it is claimed.\n\nThe reward structure, including rare unlocks, currency payouts, and rank-based bonuses, is not announced as of 2026-09-05.",
      },
      {
        id: "heist-chaos-mode",
        type: "prose",
        heading: "Chaos Mode layered on the Diamond Egg Heist",
        body:
          "Chaos Mode is the new mode introduced in the 2026-09-03 dev letter. It runs on the same six-team Diamond Egg Heist bracket rather than as a separate map, and it changes the Heist format in three ways:\n\n- Wider egg-type pool: Chaos Mode adds new egg types beyond the standard and diamond caches that the Diamond Egg Heist already contests. The expanded pool raises the high-end target density on the map, so squad priority shifts toward whichever egg type has the best contested-fight value.\n- Rebalanced squad priorities: Chaos Mode pushes the squad composition away from the standard DPS / Heal or Support / Break or Regen template toward higher-pressure breakpoints. The Break slot in particular is more important because Chaos Mode caches tend to be more contested, and a stronger Regen slot reduces the cost of being forced into a sustained fight during the escort.\n- Rebalanced element priorities: With the wider egg-type pool, element coverage matters more than element stacking. Chaos Mode rewards squads that can answer a wider element range, because you cannot predict which element an opposing squad will field at the contested cache.\n\nChaos Mode sits on top of the existing Diamond Egg Heist rather than replacing it. Squads that learned the standard six-team bracket apply the same escort mechanics; the difference is the wider egg-type pool and the higher-pressure pacing that rebalances squad and element priorities.",
      },
      {
        id: "heist-role-map",
        type: "data-table",
        heading: "Mapping the five roles onto Heist phases",
        columns: [
          { key: "phase", label: "Phase" },
          { key: "pressure", label: "What pressures you" },
          { key: "roles", label: "Roles that carry the phase" },
        ],
        rows: [
          { phase: "Search", pressure: "Clock and map coverage; light PvE contact", roles: "Support for movement and vision uptime; Regen to keep the squad topped up without stopping" },
          { phase: "PvE clear at a cache", pressure: "Environment enemies guarding the cache", roles: "DPS to shorten the clear; Break to stagger anything that can interrupt the grab" },
          { phase: "Contested cache fight", pressure: "A rival squad arriving mid-clear", roles: "Break to disrupt the enemy opener; DPS to punish the stagger; Heal to survive being caught between PvE and PvP" },
          { phase: "Diamond egg secure", pressure: "Up to five rival teams converging on one objective", roles: "Break plus DPS to contest the pick-up; Heal for the burst window" },
          { phase: "Escort", pressure: "Slow, predictable route with rival interception", roles: "Heal and Regen to survive sustained chip damage; Support to keep the carrier moving; Break to peel interceptors" },
          { phase: "Chaos Mode contested cache", pressure: "Wider egg-type pool plus multiple squads on the same egg", roles: "Break plus DPS to lock the egg; Regen to survive the longer fight; Heal to recover from the wider element pressure" },
        ],
      },
      {
        id: "heist-tips",
        type: "prose",
        heading: "Role and element tips for Heist squads",
        body:
          "A balanced Heist squad typically includes one DPS, one healer or support, and one Break or Regen slot. That covers the three things a match asks for: a damage answer, a survival answer, and a disruption answer.\n\nElement coverage is the second axis. Because both environment enemies and rival squads lean on a mix of elements, three players stacking one element gives a rival squad a single answer to all of you. Spread coverage across the squad rather than optimizing each player individually, and remember that Twining swaps you into a caught Aniimo's element mid-fight, so each player's roster is really a small pool of element options rather than one fixed type.\n\nDuring the search phase, use element coverage to pick which caches you take first: send the squad at caches whose guarding enemies your merged forms answer cleanly, and leave the ones you would have to grind through until the map thins out. In Chaos Mode, the wider egg-type pool rewards spreading element coverage further across the squad rather than concentrating it; treat coverage as insurance rather than as a calculated advantage. Specific element-versus-element multipliers are not announced as of 2026-09-05. For the role and element taxonomy, see the [Aniimo elements and roles](/elements-and-roles) page.",
      },
      {
        id: "heist-co-op-bosses",
        type: "prose",
        heading: "Bubbask and Coraliz: coordinated co-op encounters",
        body:
          "Closed Beta 3 added two boss creatures, Bubbask and Coraliz, which Twisted Voxel describes as creatures players team up to battle, with challenges designed around group play. They are the clearest signal of what a coordinated squad is expected to handle: encounters built for a group rather than for a solo player with an AI-controlled roster.\n\nFor squad building, that reinforces the same three-slot logic — a Break slot to interrupt boss patterns, a Heal or Regen slot to survive them, and a DPS slot to convert the openings. Their placement is the open question: the source presents them as co-op boss content added in the beta build and does not say whether they appear inside Heist of the Lost Isles, the Diamond Egg Heist, or Chaos Mode.\n\nThe full Closed Beta 3 addition list, including the trading system and the new creature roster, is on the [Aniimo closed beta and sign-ups](/closed-beta-and-signups) page.",
      },
      {
        id: "heist-region",
        type: "prose",
        heading: "Lost Isles region",
        body:
          "Heist matches play out in the Lost Isles region, a separate map from the Idyll continent. Astra is the social hub for the broader Idyll area, but Heist of the Lost Isles has its own map and objectives. Region-specific tips are covered on the [Aniimo Idyll regions](/idyll-regions) page.",
      },
      {
        id: "heist-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-05",
        body:
          "The Diamond Egg Heist format (up to six teams of three, secure and escort the diamond egg) and the co-op bosses Bubbask and Coraliz come from Twisted Voxel's Closed Beta 3 coverage and describe the beta build; the source does not state that either is part of Heist of the Lost Isles, and whether they ship unchanged at launch is not announced as of 2026-09-05. Chaos Mode, the wider egg-type pool, and the squad and element rebalance are confirmed in the 2026-09-03 dev letter; specific Chaos Mode egg types, difficulty tier, and reward structure are not announced as of 2026-09-05. Reward structure and rank system for Heist of the Lost Isles are not announced as of 2026-09-05. The phase-by-phase role mapping and cache-priority guidance on this page are reasoning from the confirmed 3-player squad, the five-role taxonomy, and the published objectives — not an official strategy guide. Specific element-versus-element multipliers, boss mechanics, match length, solo play support, and the Lost Isles map layout are not announced as of 2026-09-05.",
      },
      {
        id: "heist-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-09-05` — Heist of the Lost Isles mode framing and 3-player co-op.\n- [Aniimo Dev Letter (2026-09-03)](https://www.aniimo.com/newslist/detail/100051) — `official/news` — checked `2026-09-05` — confirms Chaos Mode, the wider egg-type pool, and the squad and element rebalance layered on the existing six-team Diamond Egg Heist format.\n- [ComicBook.com: Aniimo preview](https://comicbook.com/gaming/feature/aniimo-preview/) — `media/interview` — checked `2026-09-05` — squad-as-combat-unit and objective coverage.\n- [Twisted Voxel: Aniimo Closed Beta 3](https://twistedvoxel.com/aniimo-set-for-q3-2026-launch-new-beta-announced/) — `media/interview` — checked `2026-09-05` — confirms the Diamond Egg Heist as up to six teams of three securing and escorting a diamond egg, and Bubbask and Coraliz as co-op bosses designed around group play.\n- [Aniimo official site](https://www.aniimo.com/) — `official/store` — checked `2026-09-05` — five-role taxonomy used for the phase mapping.",
      },
    ],
    faqIds: [
      "heist-squad-size",
      "heist-diamond-egg-format",
      "heist-squad-composition",
      "heist-co-op-bosses",
      "heist-rewards",
      "heist-solo-play",
      "heist-chaos-mode",
    ],
    relatedPageIds: [
      "fixed-elements-and-roles-en-us",
      "fixed-idyll-regions-en-us",
      "fixed-closed-beta-and-signups-en-us",
      "fixed-twining-system-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-05",
  },
  {
    id: "fixed-homeland-and-housing-en-us",
    translationKey: "homeland-and-housing",
    locale: "en-US",
    routeKind: "fixed",
    slug: "homeland-and-housing",
    url: "/homeland-and-housing",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Aniimo Homeland and Housing: multi-area base, furniture codes, petting AI, RV dispatch",
    seoTitle:
      "Aniimo Homeland and Housing: multi-area base, furniture codes, petting AI, RV dispatch Prismana eggs",
    metaDescription:
      "Plan the Aniimo Homeland multi-area base, shareable furniture codes, interactive furniture, Home Aniimo petting AI, soil-tilling social interaction, RV dispatch routes that may return Prismana-trait eggs, and the faster upgrade pacing.",
    summary:
      "Aniimo's Homeland is now a multi-area base that supports house building, shareable furniture codes, interactive furniture, Home Aniimo petting AI, soil-tilling social interaction, and an RV dispatch system whose routes can return Prismana-trait eggs. Aniimo Housing, farming, and Homeland Skills remain the long-term progression layer, and the 2026-09-03 dev letter shortened the upgrade pacing.",
    hero: {
      eyebrow: "Homeland & Housing",
      subtitle:
        "Build out a multi-area base, share furniture with group codes, pet your Home Aniimo, till soil with friends, and send the RV on dispatch routes that may return Prismana-trait eggs.",
      ctas: [
        { label: "Idyll Regions", href: "/idyll-regions" },
        { label: "Catching & Aniipods", href: "/catching-and-aniipods" },
        { label: "Starter & Prismana", href: "/starter-and-prismana" },
      ],
    },
    quickAnswer:
      "The Aniimo Homeland is a multi-area base where you build houses, pick furniture, share your layout with group codes, interact with open-world furniture, pet your Home Aniimo through a dedicated petting AI, till soil socially with friends, and send the RV on dispatch routes that may return Prismana-trait eggs. Aniimo Housing, farming, and Homeland Skills cover the long-term progression layer, and the 2026-09-03 dev letter rebalanced the upgrade pacing so that the RV in particular reaches higher tiers faster.",
    keyFacts: [
      { label: "Mode", value: "Homeland base building (multi-area)" },
      { label: "Sub-mode", value: "Aniimo Housing (rooms, decoration)" },
      { label: "Furniture sharing", value: "Group codes for layouts and pieces" },
      { label: "Home Aniimo", value: "Petting AI, social soil-tilling" },
      { label: "RV dispatch", value: "Routes may return Prismana-trait eggs" },
      { label: "Upgrade pacing", value: "Rebalanced for faster RV upgrades" },
      { label: "Skill tree", value: "Homeland Skills (long-term progression)" },
    ],
    modules: [
      {
        id: "homeland-basics",
        type: "prose",
        heading: "Multi-area base building",
        body:
          "The Homeland is a multi-area base. Rather than a single plot, you build across multiple named areas so that houses, gardens, RV bays, and social spaces can each have their own footprint. Placement still ties to one of the Idyll regions, so your multi-area base reflects where you chose to settle on the continent.\n\nThe multi-area expansion is the headline change in the 2026-09-03 dev letter. Pre-launch coverage described the Homeland as a single mobile RV-style base; the launch build splits that into a multi-area layout where the RV, houses, and farmland sit side by side as separate buildable plots.",
      },
      {
        id: "homeland-housing",
        type: "prose",
        heading: "House building and Aniimo Housing module",
        body:
          "House building lives inside the multi-area base. Each named area can host a house layout, and the Aniimo Housing module governs decoration, room layouts, and Aniimo living quarters across those houses. The Housing module sits on top of the multi-area base, so the decoration catalog applies area by area rather than to one big plot.\n\nThe full per-area decoration catalog is not announced as of 2026-09-05; treat any third-party furniture list as community reconstruction. House-building pacing is part of the same upgrade pacing rebalance documented in the 2026-09-03 dev letter.",
      },
      {
        id: "homeland-furniture-codes",
        type: "prose",
        heading: "Shareable furniture codes",
        body:
          "Furniture selections and full area layouts can be packaged into a shareable group code. The code is the format Pawprint Studio uses to move a layout from your base into another player's base without re-placing every piece, so a friend who likes your furniture setup can paste it into their own multi-area base and inherit the same arrangement.\n\nCodes apply to furniture selections and layouts only; they do not transfer ownership of paid cosmetic items, and the receiving player still needs the underlying furniture pieces in their own catalog for the layout to render fully. The exact code length and the per-platform copy/paste flow are not announced as of 2026-09-05.",
      },
      {
        id: "homeland-interactive-furniture",
        type: "prose",
        heading: "Interactive furniture and Home Aniimo petting AI",
        body:
          "Interactive furniture refers to the open-world furniture pieces inside a Homeland area that respond to player input — sit, open, toggle, or otherwise act on. The 2026-09-03 dev letter ties that interactivity to a new Home Aniimo petting AI: Home Aniimo stationed around the base react to player presence and to furniture state, so sitting on a bench or opening a chest surfaces a petting interaction.\n\nThe petting AI is described as the dedicated social layer for Home Aniimo. Treat the AI as a Homeland-only behaviour; it does not extend into open-world exploration. Specific petting prompts and the per-Aniimo reaction set are not announced as of 2026-09-05.",
      },
      {
        id: "homeland-soil-tilling",
        type: "prose",
        heading: "Soil-tilling social interaction",
        body:
          "Soil-tilling is the social farming interaction that lets two or more players till the same soil tile in a Homeland area. Where pre-launch coverage framed farming as a solo activity, the launch build treats it as a co-op action: a friend visiting your Homeland can join in on the soil you are working, and the combined action accelerates the tilling speed on that tile.\n\nBecause soil-tilling is the same action across visitors, it dovetails with the shareable furniture codes flow: friends can copy your base layout, then join you for a soil-tilling session to push the farm forward together. The exact tilling bonus per additional player is not announced as of 2026-09-05.",
      },
      {
        id: "homeland-rv-dispatch",
        type: "prose",
        heading: "RV dispatch and Prismana-trait eggs",
        body:
          "The RV sits inside the multi-area base and supports a dispatch system. You send the RV on routes that resolve over time, and the routes may return eggs. Under the 2026-09-03 dev letter, RV dispatch routes can return Prismana-trait eggs, so the RV is now a planned input into the Prismana catch flow described on the [Aniimo starter and Prismana](/starter-and-prismana) page.\n\nThe exact list of routes, the per-route egg table, and the Prismana-trait rate are not announced as of 2026-09-05. The same dev letter shortened the upgrade pacing on the RV so that higher dispatch tiers reach the player faster; specific tier thresholds are not announced.",
      },
      {
        id: "homeland-skills",
        type: "prose",
        heading: "Homeland Skills overview",
        body:
          "Homeland Skills is the long-term progression layer tied to the base. Skills cover farming output, decoration bonuses, and quality-of-life unlocks. The specific skill tree and unlock conditions are not announced as of 2026-09-05.",
      },
      {
        id: "homeland-region",
        type: "prose",
        heading: "Where you place your Homeland",
        body:
          "Your Homeland sits in one of the Idyll regions, so the placement choice affects weather, spawn density, and farming output. For an overview of the named regions, see the [Aniimo Idyll regions](/idyll-regions) page.",
      },
      {
        id: "homeland-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-05",
        body:
          "The multi-area base, shareable furniture codes, interactive furniture, Home Aniimo petting AI, soil-tilling social interaction, and RV dispatch Prismana-trait eggs are confirmed in the 2026-09-03 dev letter. Specific skill tree and unlock conditions for Homeland Skills are not announced as of 2026-09-05. The per-area decoration catalog and the shareable furniture code format are not announced as of 2026-09-05. The RV dispatch route list, per-route egg table, and Prismana-trait rate are not announced as of 2026-09-05. The exact soil-tilling bonus per additional player, the petting AI prompt set, and the upgrade pacing tier thresholds are not announced as of 2026-09-05.",
      },
      {
        id: "homeland-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-09-05` — Homeland and Housing framing.\n- [Aniimo Dev Letter (2026-09-03)](https://www.aniimo.com/newslist/detail/100051) — `official/news` — checked `2026-09-05` — confirms the multi-area base, shareable furniture codes, interactive furniture, Home Aniimo petting AI, soil-tilling social interaction, RV dispatch Prismana-trait eggs, and the upgrade pacing rebalance.\n- [Aniimo official site](https://www.aniimo.com/) — `official/store` — checked `2026-09-05` — Homeland progression intent.\n- [ComicBook.com: Aniimo preview](https://comicbook.com/gaming/feature/aniimo-preview/) — `media/interview` — checked `2026-09-05` — Homeland coverage.",
      },
    ],
    faqIds: [
      "homeland-skill-tree",
      "homeland-housing-scope",
      "homeland-region-placement",
      "homeland-multi-area",
      "homeland-furniture-codes",
      "homeland-petting-ai",
      "homeland-rv-dispatch-prismana-eggs",
    ],
    relatedPageIds: [
      "fixed-idyll-regions-en-us",
      "fixed-catching-and-aniipods-en-us",
      "fixed-starter-and-prismana-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-05",
  },
  {
    id: "fixed-review-and-reception-en-us",
    translationKey: "review-and-reception",
    locale: "en-US",
    routeKind: "fixed",
    slug: "review-and-reception",
    url: "/review-and-reception",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Aniimo review and reception: preview and beta coverage",
    seoTitle:
      "Aniimo review and reception: preview and beta coverage",
    metaDescription:
      "See how Aniimo has been received in previews and beta coverage, including the Twining mechanic, monetization concerns, and PC performance.",
    summary:
      "Aniimo has not launched yet, so full review coverage is not available. Preview coverage from ComicBook.com, GamingBible, Mein-MMO, Loot Level Chill, CBR, Twisted Voxel, GameHaunt, and GameDaily has focused on the Twining system, monetization concerns, AI-art concerns, and PC performance. Launch-day reviews are not announced as of 2026-08-29.",
    hero: {
      eyebrow: "Review & reception",
      subtitle:
        "Preview coverage centers on Twining and the open world, with recurring concerns around monetization and PC performance. Launch-day reviews begin after 16 September 2026 for PC / console / Xbox cloud and 23 September 2026 for mobile.",
      ctas: [
        { label: "Twining System", href: "/twining-system" },
        { label: "Platforms & Versions", href: "/platforms-and-versions" },
        { label: "System Requirements", href: "/system-requirements" },
      ],
    },
    quickAnswer:
      "Aniimo has not launched yet, so full review coverage is not available. Preview coverage from ComicBook.com, GamingBible, Mein-MMO, Loot Level Chill, CBR, Twisted Voxel, GameHaunt, and GameDaily has focused on the Twining system, monetization concerns, AI-art concerns, and PC performance. Launch-day reviews are not announced as of 2026-08-29.",
    keyFacts: [
      { label: "Most-praised mechanic", value: "Twining merge" },
      { label: "Recurring concerns", value: "Monetization, AI art, PC performance" },
      { label: "Launch reviews", value: "Not announced as of 2026-08-29" },
      { label: "Beta period", value: "Closed Beta 3 (2026-07-09 to 2026-07-25)" },
      { label: "PC Gamer counterpoint", value: "via duniu.com syndication" },
      { label: "Coverage outlets", value: "ComicBook.com, GamingBible, Mein-MMO, Loot Level Chill, CBR, Twisted Voxel, GameHaunt, GameDaily" },
    ],
    modules: [
      {
        id: "reception-strengths",
        type: "prose",
        heading: "Strengths in preview coverage",
        body:
          "Preview coverage repeatedly highlights the Twining merge mechanic, the colorful Idyll open world, and the 3-player co-op loop as the strongest parts of the game. CBR, ComicBook.com, GamingBible, Loot Level Chill, GameDaily, and GameHaunt all lean positive on the merged combat and the exploration pacing.",
      },
      {
        id: "reception-concerns",
        type: "prose",
        heading: "Concerns in preview coverage",
        body:
          "The same preview cycle has raised three recurring concerns: monetization depth around the F2P model, AI-art questions tied to promotional material, and PC performance during the Closed Beta 3 window. These concerns are attributed to the preview outlets and do not represent final review verdicts; the game has not launched yet as of 2026-08-29.",
      },
      {
        id: "reception-counterpoint",
        type: "prose",
        heading: "PC Gamer counterpoint via duniu syndication",
        body:
          "A PC Gamer article syndicated through duniu.com presents a counterpoint to the AI-art and performance concerns. The counterpoint focuses on the merged combat's responsiveness and the regional variety. As of 2026-08-29 the PC Gamer syndication is one media source among several, and the overall reception still reflects pre-launch coverage.",
      },
      {
        id: "reception-launch",
        type: "prose",
        heading: "Launch-day review status",
        body:
          "Aniimo has not launched yet as of 2026-09-05. Full review coverage begins after the global unlock on 16 September 2026 for PC / console / Xbox cloud and 23 September 2026 for mobile. Launch-day reviews, aggregate scores, and user ratings are not announced as of 2026-09-05.",
      },
      {
        id: "reception-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-29",
        body:
          "Full review coverage does not exist yet because Aniimo has not launched. Preview impressions are attributed to the original outlets and do not represent final review verdicts. Launch-day reviews are not announced as of 2026-08-29. PC performance claims in previews are tied to the Closed Beta 3 build and may shift at launch.",
      },
      {
        id: "reception-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [ComicBook.com: Aniimo preview](https://comicbook.com/gaming/feature/aniimo-preview/) — `media/interview` — checked `2026-08-29` — PAX East preview.\n- [GamingBible: Aniimo preview](https://www.gamingbible.com/news/aniimo-pokemon-meets-zelda-free-rpg-preview-045663-20260206) — `media/interview` — checked `2026-08-29` — Pokemon meets Zelda framing.\n- [Loot Level Chill: Aniimo preview](https://lootlevelchill.com/features/aniimo-preview-action-packed-and-rather-surprising) — `media/interview` — checked `2026-08-29` — action-packed coverage.\n- [CBR: Aniimo interview](https://www.cbr.com/aniimo-interview-upcoming-creature-catching-rpg-co-op-gorgeous-visuals/) — `media/interview` — checked `2026-08-29` — Twining and visuals.\n- [Twisted Voxel: Aniimo beta](https://twistedvoxel.com/aniimo-set-for-q3-2026-launch-new-beta-announced/) — `media/interview` — checked `2026-08-29` — beta context.\n- [GameHaunt: Aniimo release](https://gamehaunt.com/aniimo-release-date-platforms-and-everything-we-know-2026) — `media/interview` — checked `2026-08-29` — release overview.\n- [GameDaily: Aniimo preview](https://gamedaily.com/news/aniimo-a-colorful-creature-catcher-with-low-barrier-of-entry) — `media/interview` — checked `2026-08-29` — colorful framing.",
      },
    ],
    faqIds: [
      "reception-launch-review",
      "reception-monetization",
      "reception-pc-performance",
    ],
    relatedPageIds: [
      "fixed-twining-system-en-us",
      "fixed-platforms-and-versions-en-us",
      "fixed-system-requirements-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-05",
  },
];
