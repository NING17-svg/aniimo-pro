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
      "Aniimo Release Date: Confirmed 15-16 September 2026 Launch",
    metaDescription:
      "Aniimo release date confirmed for 15-16 September 2026 across PS5, Xbox Series X|S, PC, iOS, and Android. Check pre-order, beta, and language support.",
    summary:
      "Aniimo release date is set for 15-16 September 2026 globally with PS5, Xbox Series X|S, PC (Steam and Epic), iOS, and Android support. The game is free to play with no paid pre-order; pre-registration unlocks a reward ladder.",
    hero: {
      eyebrow: "Release overview",
      subtitle:
        "Single global launch window on 15-16 September 2026 across PS5, Xbox Series X|S, PC (Steam, Epic), iOS, and Android. Twelve non-English interface languages are confirmed; full audio and subtitles outside English are not announced as of 2026-08-29.",
      ctas: [
        { label: "Platforms & Versions", href: "/platforms-and-versions" },
        { label: "Pre-order & Editions", href: "/pre-order-and-editions" },
        { label: "Closed Beta", href: "/closed-beta-and-signups" },
      ],
    },
    quickAnswer:
      "Aniimo release date is set for 15-16 September 2026 globally. Steam lists 15 September 2026, and APAC coverage lists 16 September 2026 for Asia-Pacific players. It ships on PS5, Xbox Series X|S, PC (Steam and Epic Games Store), iOS, and Android. Aniimo is free to play with no paid pre-order, but pre-registration unlocks a reward ladder.",
    keyFacts: [
      { label: "Launch window", value: "15-16 September 2026" },
      {
        label: "Platforms",
        value: "PS5, Xbox Series X|S, PC (Steam, Epic), iOS, Android",
      },
      { label: "Steam AppID", value: "4126040" },
      { label: "Business model", value: "Free-to-play + in-app purchases" },
      { label: "Pre-registration", value: "Open on official site, Steam, Epic" },
      { label: "Languages at launch", value: "English (full); 12 interface-only" },
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
          { platform: "PS5", releaseDate: "15-16 September 2026", preOrder: "Not required", status: "Sep 15-16 window" },
          { platform: "Xbox Series X|S", releaseDate: "15-16 September 2026", preOrder: "Not required", status: "Sep 15-16 window" },
          { platform: "PC (Steam)", releaseDate: "15 September 2026", preOrder: "Not required", status: "Sep 15-16 window" },
          { platform: "PC (Epic Games Store)", releaseDate: "15-16 September 2026", preOrder: "Not required", status: "Sep 15-16 window" },
          { platform: "iOS", releaseDate: "15-16 September 2026", preOrder: "Not required", status: "Sep 15-16 window" },
          { platform: "Android", releaseDate: "15-16 September 2026", preOrder: "Not required", status: "Sep 15-16 window" },
          { platform: "Nintendo Switch", releaseDate: "Not announced as of 2026-08-29", preOrder: "Not applicable", status: "Not announced as of 2026-08-29" },
          { platform: "Cloud streaming", releaseDate: "Not announced as of 2026-08-29", preOrder: "Not applicable", status: "Not announced as of 2026-08-29" },
        ],
      },
      {
        id: "release-pre-order",
        type: "prose",
        heading: "Pre-Order State for Aniimo",
        body:
          "Aniimo uses a free-to-play model with optional in-app purchases, so no paid pre-order tier exists. Players can pre-register on the official site, Steam, or Epic Games Store to claim the reward ladder, which includes a Smoky Stone-themed Aniipod, additional cosmetics, and currency bundles that unlock with milestones. Three launch-day items (Sparkling Cube, Aniipod Ultra, Tumbler) are granted to all players free.\n\nFor the full reward ladder, monetization model, and paid-edition status, see the [Aniimo pre-order and editions](/pre-order-and-editions) page.",
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
          { language: "English", interface: "Yes", audio: "Yes", subtitles: "Yes", status: "Confirmed" },
          { language: "Simplified Chinese", interface: "Yes", audio: "Not announced as of 2026-08-29", subtitles: "Not announced as of 2026-08-29", status: "Interface only" },
          { language: "Traditional Chinese", interface: "Yes", audio: "Not announced as of 2026-08-29", subtitles: "Not announced as of 2026-08-29", status: "Interface only" },
          { language: "Japanese", interface: "Yes", audio: "Not announced as of 2026-08-29", subtitles: "Not announced as of 2026-08-29", status: "Interface only" },
          { language: "Korean", interface: "Yes", audio: "Not announced as of 2026-08-29", subtitles: "Not announced as of 2026-08-29", status: "Interface only" },
          { language: "French", interface: "Yes", audio: "Not announced as of 2026-08-29", subtitles: "Not announced as of 2026-08-29", status: "Interface only" },
          { language: "German", interface: "Yes", audio: "Not announced as of 2026-08-29", subtitles: "Not announced as of 2026-08-29", status: "Interface only" },
          { language: "Spanish (LatAm)", interface: "Yes", audio: "Not announced as of 2026-08-29", subtitles: "Not announced as of 2026-08-29", status: "Interface only" },
          { language: "Portuguese (Brazil)", interface: "Yes", audio: "Not announced as of 2026-08-29", subtitles: "Not announced as of 2026-08-29", status: "Interface only" },
          { language: "Russian", interface: "Yes", audio: "Not announced as of 2026-08-29", subtitles: "Not announced as of 2026-08-29", status: "Interface only" },
          { language: "Indonesian", interface: "Yes", audio: "Not announced as of 2026-08-29", subtitles: "Not announced as of 2026-08-29", status: "Interface only" },
          { language: "Thai", interface: "Yes", audio: "Not announced as of 2026-08-29", subtitles: "Not announced as of 2026-08-29", status: "Interface only" },
          { language: "Vietnamese", interface: "Yes", audio: "Not announced as of 2026-08-29", subtitles: "Not announced as of 2026-08-29", status: "Interface only" },
        ],
      },
      {
        id: "release-regional",
        type: "prose",
        heading: "Regional Notes on Launch Timing",
        body:
          "Steam's 15 September 2026 refers to the platform default unlock, typically aligning with North American time. Game Trader and GameHaunt report 16 September 2026 for the APAC storefront unlock, so APAC players should plan for 16 September 2026 locally while Americas and Europe players plan for 15 September 2026.",
      },
      {
        id: "release-beta-link",
        type: "prose",
        heading: "Pre-Registration, Closed Beta, and Sign-Ups",
        body:
          "Pre-registration is live on the official site and Steam. A closed beta ran earlier, and additional testing windows are not announced as of 2026-08-29. Players wanting future beta access should complete the pre-registration form and join the official Discord.\n\nFor beta history, sign-up instructions, and current test windows, see the [Aniimo closed beta and sign-ups](/closed-beta-and-signups) page.",
      },
      {
        id: "release-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-29",
        body:
          "The launch date is 15-16 September 2026. Steam lists 15 September 2026 and APAC coverage lists 16 September 2026; storefront dates differ by region. The exact unlock hour and minute per time zone are not announced as of 2026-08-29. Supported text languages at launch are English plus the twelve non-English interface languages listed in the language table; full audio and subtitle support outside English are not announced as of 2026-08-29. A Nintendo Switch version and cloud-streaming availability are not announced as of 2026-08-29. Aniimo is a new IP; no prior Aniimo release exists to inherit release, schedule, or localization facts from. Pre-registration is open; paid pre-order tiers are not part of the Aniimo model because the base game is free.",
      },
      {
        id: "release-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo Official Site](https://www.aniimo.com/) — `official/store` — checked `2026-08-29` — confirms global launch date, platform lineup, and pre-registration rewards.\n- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-08-29` — confirms 15 September 2026 release, free-to-play model, and supported text languages.\n- [Game Trader Aniimo coverage](https://www.gametrader.sg/blog/tag/aniimo) — `media/interview` — checked `2026-08-29` — confirms 16 September 2026 APAC launch window and platform list.\n- [GameHaunt release overview](https://gamehaunt.com/aniimo-release-date-platforms-and-everything-we-know-2026) — `media/interview` — checked `2026-08-29` — secondary confirmation of 15-16 September 2026 launch window and platform lineup.",
      },
    ],
    faqIds: [
      "release-when-exact",
      "release-pre-order-needed",
      "release-nintendo-switch",
      "release-language-support",
      "release-unlock-hour",
    ],
    relatedPageIds: [
      "fixed-platforms-and-versions-en-us",
      "fixed-pre-order-and-editions-en-us",
      "fixed-closed-beta-and-signups-en-us",
      "fixed-system-requirements-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-08-29",
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
    h1: "Aniimo Platforms and Versions: Console, PC, and Mobile",
    seoTitle:
      "Aniimo Platforms and Versions: PS5, Xbox, PC, iOS, and Android",
    metaDescription:
      "Compare Aniimo PS5, Xbox Series X|S, PC (Steam and Epic), iOS, and Android availability, cross-play status, and edition differences.",
    summary:
      "Aniimo launches on PS5, Xbox Series X|S, PC via Steam and Epic Games Store, iOS, and Android with a single free-to-play edition. Cross-play status, Nintendo Switch release, and cloud-streaming availability are not announced as of 2026-08-29.",
    hero: {
      eyebrow: "Platforms and versions",
      subtitle:
        "Aniimo ships on five confirmed platform tracks with one global launch window. Cross-play status across console, PC, and mobile is not announced as of 2026-08-29.",
      ctas: [
        { label: "System Requirements", href: "/system-requirements" },
        { label: "Pre-order & Editions", href: "/pre-order-and-editions" },
      ],
    },
    quickAnswer:
      "Aniimo launches 15-16 September 2026 on PlayStation 5, Xbox Series X|S, PC via Steam, PC via Epic Games Store, iOS, and Android. There is one global free-to-play edition; no paid Standard/Deluxe/Premium split has been announced. Cross-play status across console, PC, and mobile is not announced as of 2026-08-29.",
    keyFacts: [
      { label: "Confirmed platforms", value: "PS5, Xbox Series X|S, PC (Steam, Epic), iOS, Android" },
      { label: "Cloud streaming", value: "Not announced as of 2026-08-29" },
      { label: "Nintendo Switch", value: "Not announced as of 2026-08-29" },
      { label: "Cross-play", value: "Not announced as of 2026-08-29" },
      { label: "Cross-save", value: "Not announced as of 2026-08-29" },
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
          { platform: "PlayStation 5", availability: "Sep 15-16 2026", controller: "DualSense", crossPlay: "Not announced as of 2026-08-29", notes: "Free-to-play download via PlayStation Store" },
          { platform: "Xbox Series X|S", availability: "Sep 15-16 2026", controller: "Xbox Wireless", crossPlay: "Not announced as of 2026-08-29", notes: "Free-to-play download via Xbox Store" },
          { platform: "PC (Steam)", availability: "15 September 2026", controller: "Xbox / PlayStation / KB+M", crossPlay: "Not announced as of 2026-08-29", notes: "AppID 4126040; current English page is the authoritative spec" },
          { platform: "PC (Epic Games Store)", availability: "Sep 15-16 2026", controller: "Xbox / PlayStation / KB+M", crossPlay: "Not announced as of 2026-08-29", notes: "Pre-registration open via Epic Games Store" },
          { platform: "iOS", availability: "Sep 15-16 2026", controller: "Touch / MFi", crossPlay: "Not announced as of 2026-08-29", notes: "Free-to-play download via App Store" },
          { platform: "Android", availability: "Sep 15-16 2026", controller: "Touch", crossPlay: "Not announced as of 2026-08-29", notes: "Free-to-play download via Google Play" },
        ],
      },
      {
        id: "platforms-crossplay",
        type: "prose",
        heading: "Cross-Play and Cross-Save Status",
        body:
          "Pawprint Studio has not announced cross-play or cross-save between console, PC, and mobile as of 2026-08-29. Closed beta coverage and Steam store description reference 3-player co-op, but cross-platform play and account-linked progression are not announced as of 2026-08-29. The official Aniimo Discord and Steam news pages are the canonical sources for any future cross-play or cross-save confirmation.",
      },
      {
        id: "platforms-cloud",
        type: "prose",
        heading: "Cloud Streaming Status",
        body:
          "Cloud-streaming availability (GeForce Now, Xbox Cloud Gaming, PlayStation Plus Premium streaming) is not announced as of 2026-08-29. The launch lineup covers direct installs only.",
      },
      {
        id: "platforms-switch",
        type: "prose",
        heading: "Nintendo Switch Status",
        body:
          "A Nintendo Switch version is not announced as of 2026-08-29. The launch lineup covers PS5, Xbox Series X|S, PC, iOS, and Android. The community should expect Switch status only if Pawprint Studio or Nintendo publishes an official page.",
      },
      {
        id: "platforms-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-29",
        body:
          "Confirmed cross-play on console/PC/mobile is not announced as of 2026-08-29. Cloud-streaming availability is not announced as of 2026-08-29. A Nintendo Switch version is not announced as of 2026-08-29. The platforms-and-versions table reflects the current Steam store and official Aniimo site descriptions; any future additions require reopening these official sources.",
      },
      {
        id: "platforms-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo Official Site](https://www.aniimo.com/) — `official/store` — checked `2026-08-29` — confirms platform lineup and pre-registration.\n- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-08-29` — confirms Steam launch date and platform coverage.\n- [GamingOnPhone — Aniimo platforms](https://gamingonphone.com/news/aniimo-is-bringing-open-world-creature-catching-action-rpg-experience-to-mobile-xbox-series-and-pc-in-2026/) — `media/interview` — checked `2026-08-29` — secondary confirmation of mobile and console lineup.",
      },
    ],
    faqIds: [
      "platforms-switch",
      "platforms-cross-play",
      "platforms-cloud-streaming",
      "platforms-controller-support",
    ],
    relatedPageIds: [
      "fixed-release-overview-en-us",
      "fixed-system-requirements-en-us",
      "fixed-pre-order-and-editions-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-08-29",
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
      "Check Aniimo PC minimum and recommended specifications, controller support, and download size.",
    summary:
      "Aniimo PC system requirements target DirectX 12 on Windows 10 and Windows 11, recommend 12 GB of RAM and approximately 45 GB of storage, and support Xbox and PlayStation controllers on Steam.",
    hero: {
      eyebrow: "PC system requirements",
      subtitle:
        "Aniimo targets DirectX 12 with a recommended spec of 12 GB RAM and 45 GB of storage. Older regional Steam pages still show 8 GB / 30 GB; the current English Steam page is authoritative.",
      ctas: [
        { label: "Platforms & Versions", href: "/platforms-and-versions" },
        { label: "Release Overview", href: "/release-overview" },
      ],
    },
    quickAnswer:
      "Aniimo targets DirectX 12 on Windows 10 and Windows 11. The current English Steam page lists a recommended spec of 12 GB of RAM, a DirectX 12 GPU, and approximately 45 GB of free storage. Controller support covers Xbox and PlayStation pads. Older regional Steam pages that show 8 GB / 30 GB are superseded by the current English Steam page.",
    keyFacts: [
      { label: "Operating system", value: "Windows 10 / Windows 11 (64-bit)" },
      { label: "Graphics API", value: "DirectX 12" },
      { label: "Recommended RAM", value: "12 GB" },
      { label: "Recommended storage", value: "Approx. 45 GB free" },
      { label: "Controller support", value: "Xbox and PlayStation pads" },
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
          { field: "Operating system", minimum: "Windows 10 (64-bit)", recommended: "Windows 11 (64-bit)" },
          { field: "CPU", minimum: "Not announced as of 2026-08-29", recommended: "Not announced as of 2026-08-29" },
          { field: "RAM", minimum: "Not announced as of 2026-08-29", recommended: "12 GB" },
          { field: "Graphics", minimum: "DirectX 12 compatible", recommended: "DirectX 12 compatible" },
          { field: "DirectX", minimum: "DirectX 12", recommended: "DirectX 12" },
          { field: "Storage", minimum: "Approx. 45 GB free", recommended: "Approx. 45 GB free SSD recommended" },
          { field: "Controller", minimum: "Xbox / PlayStation pads supported", recommended: "Xbox / PlayStation pads supported" },
        ],
      },
      {
        id: "spec-storage",
        type: "prose",
        heading: "Download Size Notes",
        body:
          "The current English Steam page lists approximately 45 GB of free storage as the recommended spec, raised from the 30 GB shown on older regional pages. Treat the 45 GB figure as authoritative and leave additional headroom for shader caches and post-launch patches.",
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
          "Older regional Steam pages still show 8 GB of RAM and 30 GB of storage for Aniimo. The current English Steam page is the authoritative reference and supersedes regional drift; if the local page disagrees, defer to the English page and flag the inconsistency in any support request.",
      },
      {
        id: "spec-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-29",
        body:
          "CPU model strings and minimum RAM are not announced as of 2026-08-29 in the current English Steam page; minimum figures may tighten again before launch. The 45 GB storage figure is the recommended spec and may change with patches. Older regional Steam pages still show 8 GB / 30 GB and are not authoritative.",
      },
      {
        id: "spec-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-08-29` — authoritative PC spec, 12 GB recommended RAM, 45 GB storage, DirectX 12.",
      },
    ],
    faqIds: [
      "spec-min-ram",
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
    lastReviewed: "2026-08-29",
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
    h1: "Aniimo Pre-order and Editions: Free-to-Play Reward Ladder",
    seoTitle:
      "Aniimo Pre-order and Editions: Pre-registration Rewards and Monetization",
    metaDescription:
      "Understand Aniimo pre-registration rewards, free launch items, monetization model, and whether a paid edition exists.",
    summary:
      "Aniimo is free-to-play with no paid Standard or Deluxe edition. Pre-registration on the official site, Steam, or Epic Games Store unlocks a reward ladder; three launch-day items (Sparkling Cube, Aniipod Ultra, Tumbler) are granted to all players free.",
    hero: {
      eyebrow: "Pre-order and editions",
      subtitle:
        "Aniimo uses a free-to-play model with optional in-app purchases. There is no paid Standard or Deluxe edition; the reward ladder is the only launch incentive.",
      ctas: [
        { label: "Closed Beta", href: "/closed-beta-and-signups" },
        { label: "Platforms & Versions", href: "/platforms-and-versions" },
      ],
    },
    quickAnswer:
      "Aniimo uses a free-to-play model with optional in-app purchases, so no paid pre-order tier or Deluxe edition exists. Players pre-register on the official site, Steam, or Epic Games Store to claim the reward ladder, which includes a Smoky Stone-themed Aniipod, additional cosmetics, and currency bundles that unlock with milestones. Three launch-day items (Sparkling Cube, Aniipod Ultra, Tumbler) are granted to all players free.",
    keyFacts: [
      { label: "Base price", value: "Free-to-play" },
      { label: "Pre-order tier", value: "Not applicable (F2P)" },
      { label: "Pre-registration rewards", value: "Smoky Stone Aniipod, cosmetics, currency" },
      { label: "Launch-day free items", value: "Sparkling Cube, Aniipod Ultra, Tumbler" },
      { label: "Paid edition", value: "Not announced as of 2026-08-29" },
      { label: "Monetization", value: "In-app purchases" },
    ],
    modules: [
      {
        id: "preorder-rewards",
        type: "data-table",
        heading: "Pre-registration Reward Ladder",
        columns: [
          { key: "milestone", label: "Milestone" },
          { key: "reward", label: "Reward" },
          { key: "status", label: "Status" },
        ],
        rows: [
          { milestone: "Sign-up confirmation", reward: "Smoky Stone-themed Aniipod", status: "Confirmed" },
          { milestone: "Tier 1 milestone", reward: "Cosmetic bundle", status: "Confirmed" },
          { milestone: "Tier 2 milestone", reward: "Currency bundle", status: "Confirmed" },
          { milestone: "Tier 3 milestone", reward: "Bonus cosmetic", status: "Confirmed" },
        ],
      },
      {
        id: "preorder-launch-items",
        type: "prose",
        heading: "Free Launch-Day Items",
        body:
          "Three items are granted to every player at launch regardless of pre-registration: a Sparkling Cube, an Aniipod Ultra, and a Tumbler. These grant early-game capture and crafting utility and are not gated behind paid tiers.",
      },
      {
        id: "preorder-monetization",
        type: "prose",
        heading: "Monetization Model",
        body:
          "Aniimo is free-to-play with optional in-app purchases. The store will stock cosmetics and convenience items, but specific paid bundles, season pass structure, and battle pass plans are not announced as of 2026-08-29.",
      },
      {
        id: "preorder-editions",
        type: "prose",
        heading: "Paid Edition Status",
        body:
          "A paid Standard, Deluxe, or Premium edition is not announced as of 2026-08-29. The base game is free; any future paid edition would have to be confirmed on the official Aniimo site or Steam store.",
      },
      {
        id: "preorder-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-29",
        body:
          "Specific IAP bundles, season pass plans, and any paid edition are not announced as of 2026-08-29. Reward ladder details are summarized from the official Aniimo site and may be updated before launch.",
      },
      {
        id: "preorder-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo Official Site](https://www.aniimo.com/) — `official/store` — checked `2026-08-29` — confirms pre-registration reward ladder and F2P model.\n- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-08-29` — confirms F2P model and free launch items.",
      },
    ],
    faqIds: [
      "preorder-cost",
      "preorder-edition",
      "preorder-rewards",
      "preorder-monetization",
    ],
    relatedPageIds: [
      "fixed-release-overview-en-us",
      "fixed-closed-beta-and-signups-en-us",
      "fixed-platforms-and-versions-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-08-29",
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
      "Learn how to sign up for Aniimo closed beta, beta windows, sign-up channels, and how beta access relates to launch.",
    summary:
      "Aniimo Closed Beta 3 ran 2026-07-09 to 2026-07-25 on PC. Sign-up channels include the Steam news page, the official Aniimo Discord, and the official site. Future beta windows are not announced as of 2026-08-29.",
    hero: {
      eyebrow: "Closed beta and sign-ups",
      subtitle:
        "Closed Beta 3 covered the pre-launch Twining and Aniipod mechanics. New sign-up windows are not announced as of 2026-08-29.",
      ctas: [
        { label: "Pre-order & Editions", href: "/pre-order-and-editions" },
        { label: "Release Overview", href: "/release-overview" },
      ],
    },
    quickAnswer:
      "Aniimo Closed Beta 3 ran on PC from 2026-07-09 to 2026-07-25. Sign-ups were handled through the Steam news page, the official Aniimo Discord, and the official site. Pre-registration on the official site is the recommended channel for future beta access, and additional testing windows are not announced as of 2026-08-29.",
    keyFacts: [
      { label: "Closed Beta 3 window", value: "2026-07-09 to 2026-07-25" },
      { label: "Beta platform", value: "PC (Steam)" },
      { label: "Sign-up channels", value: "Steam news, Discord, official site" },
      { label: "Future beta", value: "Not announced as of 2026-08-29" },
      { label: "Beta-to-launch benefits", value: "Not announced as of 2026-08-29" },
      { label: "Pre-registration", value: "Recommended for future beta eligibility" },
    ],
    modules: [
      {
        id: "beta-history",
        type: "prose",
        heading: "Closed Beta 3 Summary",
        body:
          "Closed Beta 3 ran from 2026-07-09 to 2026-07-25 on Steam and covered the pre-launch Twining merge mechanic, Aniipod capture, and Heist of the Lost Isles core loop. Beta access was granted via Steam key requests, Discord whitelists, and official site form entries.",
      },
      {
        id: "beta-signup",
        type: "prose",
        heading: "Sign-up Channels",
        body:
          "Players who want future beta access should pre-register an account on the official Aniimo site, follow the Aniimo Steam news page, and join the official Aniimo Discord. New beta windows will be announced through those channels; future dates are not announced as of 2026-08-29.",
      },
      {
        id: "beta-launch",
        type: "prose",
        heading: "Beta to Launch Relationship",
        body:
          "Closed Beta 3 progress did not carry forward to launch. Beta accounts were reset before launch and beta-only rewards are not announced as of 2026-08-29. Players who participated in Closed Beta 3 should expect a clean launch state.",
      },
      {
        id: "beta-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-29",
        body:
          "Future beta windows are not announced as of 2026-08-29. Beta-only rewards and any carry-over to launch are not announced as of 2026-08-29.",
      },
      {
        id: "beta-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo Steam News](https://store.steampowered.com/news/app/4126040) — `official/store` — checked `2026-08-29` — confirms Closed Beta 3 sign-up announcement.\n- [Aniimo Official Site](https://www.aniimo.com/) — `official/store` — checked `2026-08-29` — confirms pre-registration and beta entry points.\n- [Twisted Voxel — Aniimo beta](https://twistedvoxel.com/aniimo-set-for-q3-2026-launch-new-beta-announced/) — `media/interview` — checked `2026-08-29` — beta window context.",
      },
    ],
    faqIds: [
      "beta-sign-up",
      "beta-progress-carry",
      "beta-future-windows",
    ],
    relatedPageIds: [
      "fixed-release-overview-en-us",
      "fixed-pre-order-and-editions-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-08-29",
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
    h1: "Aniimo Twining explained: Command Mode, Twine Mode, and merging in combat",
    seoTitle:
      "Aniimo Twining guide: Command Mode, Twine Mode, and merge uses",
    metaDescription:
      "Aniimo Twining lets you merge with a caught Aniimo to use its movement and combat abilities. Compare Command Mode and Twine Mode so you know when to switch.",
    summary:
      "Twining is the merge mechanic that bonds your character with a captured Aniimo to take on its form, movement type, and combat kit. Command Mode keeps you in human form while ordering party attacks; Twine Mode drops you into the merged body to use aerial dives, claws, and creature-specific tools.",
    hero: {
      eyebrow: "Twining system",
      subtitle:
        "Twining lets you merge with a captured Aniimo to use its element, role, and movement type. Switch between Command Mode and Twine Mode based on whether the fight or exploration route calls for the merged skill set.",
      ctas: [
        { label: "Starter & Prismana", href: "/starter-and-prismana" },
        { label: "Evolution & Stages", href: "/evolution-and-stages" },
        { label: "Catching & Aniipods", href: "/catching-and-aniipods" },
        { label: "Elements & Roles", href: "/elements-and-roles" },
      ],
    },
    quickAnswer:
      "Aniimo Twining is the merge mechanic that bonds your character with a captured Aniimo to take on its form, movement type, and combat kit. Two modes manage the merge: Command Mode keeps you in human form while ordering party attacks, and Twine Mode drops you into the merged body to use aerial dives, claws, and creature-specific tools. Switch modes based on whether the fight or exploration route calls for the merged skill set.",
    keyFacts: [
      { label: "Twining definition", value: "Merge with a captured Aniimo to use its form, element, and combat kit" },
      { label: "Command Mode", value: "Human form + party-wide attack/heal/position orders" },
      { label: "Twine Mode", value: "Full merge into Aniimo body for raw combat power + movement type" },
      { label: "Movement types", value: "Fly, burrow, swim, climb, dash" },
      { label: "Mode switch", value: "Common mid-fight decision, not a rare ultimate" },
      { label: "Cooldowns", value: "Pre-launch speculation as of 2026-08-29" },
    ],
    modules: [
      {
        id: "twining-overview",
        type: "prose",
        heading: "What Aniimo Twining actually does",
        body:
          "The Steam store page describes Twining as the moment when a captured Aniimo shares its body, senses, and abilities with the player character, including its element and combat style. Once merged, your character trades the standard human moveset for the Aniimo's attacks, which range from a small creature's quick pounce to a heavier form's charged beam.\n\nReporting from CBR and ComicBook.com frames the merged state as the main way to use elemental abilities, since the merged form unlocks the wider combo chain tied to that Aniimo's role. Treat any specific cooldowns, stamina costs, or regeneration rates listed elsewhere as pre-launch estimates as of 2026-08-29; balance numbers are still being tuned.",
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
          "A core reason to Twine at all is exploration. The Idyll continent has ledges, wind currents, burrow tunnels, waterways, and vertical surfaces that the human moveset cannot handle cleanly, and Twining unlocks those shortcuts the moment you bond with the right body.\n\nFlying forms handle verticality, glide routes, and floating-island traversal around Astra. Burrowing forms let you cut through soft terrain that blocks the human path. Swimming forms handle underwater segments and tidal caves. Climbing forms unlock vertical wall sections. Dash-style merged forms let you blast through gaps, chasms, and short combat openings. CBR and ComicBook.com highlight flight as the most-praised Twining-driven exploration tool; burrowing, swimming, climbing, and dash coverage appears in the same preview set as of 2026-08-29.",
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
        title: "Fact boundary — 2026-08-29",
        body:
          "Aniimo Twining cooldowns, stamina costs, and stamina regeneration rates are pre-launch speculation as of 2026-08-29; treat any specific numbers as estimates. The difference between Command Mode and Twine Mode is confirmed by the Steam store page and CBR, but the exact tactical triggers for each mode are still being tuned. Specific movement-type unlocks per form are guided by media previews, not by an exhaustive official chart as of 2026-08-29. Aniimo is a new IP from Pawprint Studio; there is no legacy 'Twining' mechanic from a prior title to inherit.",
      },
      {
        id: "twining-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-08-29` — Twining overview, Command Mode and Twine Mode definitions, and the merged-state language.\n- [CBR: Aniimo interview](https://www.cbr.com/aniimo-interview-upcoming-creature-catching-rpg-co-op-gorgeous-visuals/) — `media/interview` — checked `2026-08-29` — how Twining fits into combat and which movement types previews praised.\n- [ComicBook.com: Aniimo preview](https://comicbook.com/gaming/feature/aniimo-preview/) — `media/interview` — checked `2026-08-29` — merging state, role coverage, and co-op cadence.\n- [Zeroluck: Aniimo gameplay](https://zeroluck.gg/aniimo/gameplay) — `community/wiki` — checked `2026-08-29` — cross-check on dash, climbing, and role taxonomy used in this page.",
      },
    ],
    faqIds: [
      "twining-definition",
      "twining-mode-difference",
      "twining-cooldowns",
      "twining-starter",
    ],
    relatedPageIds: [
      "fixed-starter-and-prismana-en-us",
      "fixed-evolution-and-stages-en-us",
      "fixed-catching-and-aniipods-en-us",
      "fixed-elements-and-roles-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-08-29",
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
    h1: "Aniimo starter and Prismana forms: a beginner's guide to the early game",
    seoTitle:
      "Aniimo starter guide: choose your first Aniimo and Prismana form",
    metaDescription:
      "Aniimo starter choice shapes the early game. Learn what Prismana forms do, how the Susuta egg and Perfect Egg rewards fit, and how to build your first team.",
    summary:
      "The Aniimo starter is the creature you pick at the start of the game. Prismana forms are alternate-color variants with slightly different stats that evolve along the same Lumin to Gamma to Nova path as standard forms. The Susuta egg and the Perfect Egg (pre-registration reward) feed into your roster rather than replace your starter.",
    hero: {
      eyebrow: "Starter & Prismana",
      subtitle:
        "Pick the starter whose element and movement type fit your early-game region, then layer Prismana variants and the Susuta/Perfect Egg rewards into a balanced roster.",
      ctas: [
        { label: "Twining System", href: "/twining-system" },
        { label: "Evolution & Stages", href: "/evolution-and-stages" },
        { label: "Catching & Aniipods", href: "/catching-and-aniipods" },
      ],
    },
    quickAnswer:
      "Your Aniimo starter is the creature you pick at the start of the game and the basis for early progression. Prismana forms are alternate-color variants with slightly different stats, tied to specific encounters or reward tracks; they evolve along the same Lumin to Gamma to Nova path as standard forms. The Susuta egg and the Perfect Egg (pre-registration reward) feed straight into your roster, supporting rather than replacing your starter.",
    keyFacts: [
      { label: "Starter role", value: "First Aniimo; sets early element and role" },
      { label: "Prismana forms", value: "Alternate-color variants; same Lumin to Nova pipeline" },
      { label: "Susuta egg", value: "Quest reward; strong early-game complement" },
      { label: "Perfect Egg", value: "Pre-registration reward on aniimo.com" },
      { label: "Starter list", value: "Subject to change per developer as of 2026-08-29" },
      { label: "Movement priority", value: "Pick a starter with at least one relevant movement type" },
    ],
    modules: [
      {
        id: "starter-pick",
        type: "prose",
        heading: "How the Aniimo starter picks work",
        body:
          "The Steam store page presents Aniimo as an open-world creature-catching RPG, with starter choice framed as the first big player decision. The official site at aniimo.com confirms that early-game choices are designed to shape the first hours without locking you out of late-game evolutions, since each form follows the same Lumin to Gamma to Nova pipeline. The starter list itself is subject to change per developer as of 2026-08-29, so treat published starter picks as the current plan rather than a permanent roster.\n\nStarter forms split across the nine elements of the Idyll continent and the five combat roles (DPS, Heal, Support, Break, Regen). Pre-launch coverage from ComicBook.com and the Steam store page points to starter forms leaning DPS or Break, with Heal and Support players expected to lean on early catches of wild Aniimo for their first healer.\n\nYour starter is the first Aniimo you can Twine into, and it sets the merged role you will use most often in the early game. Twining into the starter lets you cross the first set of exploration puzzles, which is why picking a starter with at least one relevant movement type (fly, burrow, swim, climb, dash) is more useful than chasing the highest damage number.",
      },
      {
        id: "prismana-explained",
        type: "prose",
        heading: "Prismana forms explained",
        body:
          "Prismana forms are alternate-color Aniimo that resemble a 'shiny' or palette-swapped version of a standard form, with the same body and role but a different look and a slightly different stat spread. They are not a separate evolution stage; they sit alongside the Lumin, Gamma, and Nova pipeline and can advance through it on the same triggers as a normal form.\n\nPrismana forms are tied to a few specific sources: pre-registration reward chains, the Perfect Egg reward for early participants, and certain encounter conditions that the developer is still testing. As of 2026-08-29 the official list of Prismana forms is still subject to change per developer, so do not treat any third-party Prismana catalog as a final roster.\n\nOnce you have a Prismana form, it follows the same Lumin to Gamma to Nova evolution path as a standard form. Weather, regional, and Sparkling variants are layered on top of Prismana; a Prismana form is its own visual variant, while weather, regional, and Sparkling variants describe when the form appears.",
      },
      {
        id: "starter-eggs",
        type: "prose",
        heading: "How the Susuta egg and Perfect Egg rewards fit in",
        body:
          "The Susuta egg is a quest reward that hatches into a strong early-game Aniimo that complements most starter picks. The Perfect Egg comes from pre-registration on the official site; if you claimed it during the live pre-registration window, it is delivered in-game through your Aniimo account after the global unlock on 15-16 September 2026, and it hatches into a Prismana-friendly form. Both eggs roll into the same team-building plan as your starter rather than replacing it.",
      },
      {
        id: "starter-checklist",
        type: "steps",
        heading: "Beginner progression checklist",
        items: [
          { title: "Pick the movement type you will use most", body: "Before you fixate on damage, pick the movement type you will lean on for the first hour: flying for vertical puzzles, burrowing for shortcut routes, swimming for water routes, climbing for walls, or dash for high-speed gaps. Your starter should give you at least one of those movement options." },
          { title: "Cover the missing roles within the first two hours", body: "Starter picks tend to skew DPS or Break, and the open world adds Heal, Support, and Regen encounters early. Spend the first two hours chasing wild catches or quest rewards that cover the missing roles before you push story content." },
          { title: "Decide whether the Perfect Egg fits your roster", body: "The Perfect Egg is a Prismana-friendly form that drops into your lineup as a pre-registration reward. If you claimed it, give it a slot in your early roster so you can see how it evolves before the open-world progression unlocks heavier variants." },
        ],
      },
      {
        id: "starter-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-29",
        body:
          "The Aniimo starter list is subject to change per developer as of 2026-08-29; treat any leaked starter pairings as provisional. The Perfect Egg was a pre-registration reward on aniimo.com; reward availability may shift between beta and launch. Prismana forms are confirmed as a variant layer, but the full roster has not been officially published as of 2026-08-29. Aniimo is a new IP; there is no legacy Aniimo starter list or Prismana catalog to inherit.",
      },
      {
        id: "starter-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo official site](https://www.aniimo.com/) — `official/store` — checked `2026-08-29` — starter framing, pre-registration and Perfect Egg ladder.\n- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-08-29` — open-world creature-catching framing and evolution stages.\n- [ComicBook.com: Aniimo preview](https://comicbook.com/gaming/feature/aniimo-preview/) — `media/interview` — checked `2026-08-29` — starter role and element framing.\n- [Aniidex: Aniimo catalog](https://aniidex.com/) — `community/wiki` — checked `2026-08-29` — orientation only.",
      },
    ],
    faqIds: [
      "starter-which-pick",
      "prismana-form-meaning",
      "perfect-egg-pre-register",
      "susuta-egg-replace-starter",
    ],
    relatedPageIds: [
      "fixed-twining-system-en-us",
      "fixed-evolution-and-stages-en-us",
      "fixed-catching-and-aniipods-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-08-29",
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
    h1: "Aniimo evolution and stages: Lumin, Gamma, and Nova variants",
    seoTitle:
      "Aniimo evolution guide: Lumin, Gamma, Nova, and Prismana variants",
    metaDescription:
      "Understand Aniimo evolution stages (Lumin, Gamma, Nova), weather, regional, and Prismana variants, and how to reach higher forms.",
    summary:
      "Aniimo evolution flows Lumin to Gamma to Nova, with weather, regional, Sparkling, and Prismana variants layered on top. Specific evolution conditions are not fully confirmed as of 2026-08-29.",
    hero: {
      eyebrow: "Evolution & stages",
      subtitle:
        "Every Aniimo follows the same Lumin to Gamma to Nova evolution pipeline. Weather, regional, Sparkling, and Prismana variants describe when the form appears, not a separate evolution stage.",
      ctas: [
        { label: "Twining System", href: "/twining-system" },
        { label: "Starter & Prismana", href: "/starter-and-prismana" },
        { label: "Catching & Aniipods", href: "/catching-and-aniipods" },
        { label: "Elements & Roles", href: "/elements-and-roles" },
      ],
    },
    quickAnswer:
      "Aniimo evolution flows Lumin to Gamma to Nova. Weather, regional, Sparkling, and Prismana variants are layered on top of that pipeline; they describe how and when the form appears, not a separate evolution stage. Specific evolution conditions are not fully confirmed as of 2026-08-29.",
    keyFacts: [
      { label: "Pipeline", value: "Lumin → Gamma → Nova" },
      { label: "Variant layers", value: "Weather, regional, Sparkling, Prismana" },
      { label: "Prismana relation", value: "Same pipeline as standard forms" },
      { label: "Evolution conditions", value: "Not fully confirmed as of 2026-08-29" },
      { label: "Higher forms", value: "Reached via encounter conditions or rewards" },
      { label: "Source base", value: "Pawprint Studio + preview coverage" },
    ],
    modules: [
      {
        id: "evolution-pipeline",
        type: "prose",
        heading: "Lumin → Gamma → Nova pipeline",
        body:
          "Every Aniimo begins as a Lumin form, the base body you catch or pick at the start. Gamma is the second evolution stage reached through encounter conditions, and Nova is the third and highest standard stage. CBR and ComicBook.com previews describe Gamma and Nova as 'more powerful' variants of the same body, with the visual differences leaning on palette and silhouette rather than a wholesale redesign.\n\nSpecific evolution conditions for moving from Lumin to Gamma and from Gamma to Nova are not fully confirmed as of 2026-08-29. Treat any leaked evolution requirements as provisional.",
      },
      {
        id: "evolution-variants",
        type: "prose",
        heading: "Weather, regional, Sparkling, and Prismana variants",
        body:
          "Beyond the Lumin to Nova pipeline, four variant layers describe how a given Aniimo appears:\n\n- Weather variants tie to specific weather conditions such as rain, snow, fog, or aurora events. They evolve through the same pipeline.\n- Regional variants tie to specific regions of the Idyll continent and Astra. They are typically harder to find than standard forms.\n- Sparkling variants are rare palette-swapped forms with a shifted appearance. They are not yet a confirmed roster as of 2026-08-29.\n- Prismana variants are alternate-color Aniimo with slightly different stats. They are not a separate evolution stage and evolve along the same pipeline.",
      },
      {
        id: "evolution-prismana",
        type: "prose",
        heading: "How Prismana fits the evolution pipeline",
        body:
          "Prismana is its own visual variant, while weather, regional, and Sparkling variants describe when the form appears. A Prismana form can still evolve from Lumin to Gamma to Nova, with Prismana remaining the visual layer. Aniidex and community references track known Prismana encounters, but as of 2026-08-29 the official list is subject to change per developer.",
      },
      {
        id: "evolution-reach",
        type: "prose",
        heading: "How to reach higher forms",
        body:
          "Higher forms are reached through encounter conditions, weather, regional location, and reward tracks. Specific triggers are not fully confirmed as of 2026-08-29, so the safest approach is to keep a balanced roster of forms and visit each region under its native weather conditions to maximize variant encounters.",
      },
      {
        id: "evolution-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-29",
        body:
          "Specific evolution conditions for moving between Lumin, Gamma, and Nova are not fully confirmed as of 2026-08-29. Sparkling variant roster is not officially published as of 2026-08-29. Prismana forms are confirmed as a variant layer but the full roster has not been officially published. Aniimo is a new IP from Pawprint Studio; there is no legacy Aniimo evolution table to inherit.",
      },
      {
        id: "evolution-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-08-29` — evolution stage framing.\n- [CBR: Aniimo interview](https://www.cbr.com/aniimo-interview-upcoming-creature-catching-rpg-co-op-gorgeous-visuals/) — `media/interview` — checked `2026-08-29` — evolution stage coverage.\n- [ComicBook.com: Aniimo preview](https://comicbook.com/gaming/feature/aniimo-preview/) — `media/interview` — checked `2026-08-29` — variant layer context.\n- [Zeroluck: Aniimo gameplay](https://zeroluck.gg/aniimo/gameplay) — `community/wiki` — checked `2026-08-29` — orientation only.",
      },
    ],
    faqIds: [
      "evolution-pipeline",
      "evolution-prismana",
      "evolution-sparkling",
      "evolution-trigger",
    ],
    relatedPageIds: [
      "fixed-twining-system-en-us",
      "fixed-starter-and-prismana-en-us",
      "fixed-catching-and-aniipods-en-us",
      "fixed-elements-and-roles-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-08-29",
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
    h1: "Aniimo catching and Aniipods: traps, timing, and the Aniilog",
    seoTitle:
      "Aniimo catching guide: Aniipods, traps, timing, and the Aniilog",
    metaDescription:
      "Master Aniimo catching using Aniipods, traps, timing, environmental spawns, and the Aniilog capture log.",
    summary:
      "Aniimo catching uses Aniipods, the in-game capture device, plus timing, traps, environmental spawns, and the Aniilog capture log. Spawn rules beyond environmental and weather hints are not announced as of 2026-08-29.",
    hero: {
      eyebrow: "Catching & Aniipods",
      subtitle:
        "Aniipods are the capture device you throw at a wild Aniimo. Combine timing, environmental spawns, weather variants, and traps to fill your roster.",
      ctas: [
        { label: "Twining System", href: "/twining-system" },
        { label: "Starter & Prismana", href: "/starter-and-prismana" },
        { label: "Idyll Regions", href: "/idyll-regions" },
      ],
    },
    quickAnswer:
      "Aniimo catching uses Aniipods, the in-game capture device, plus timing, traps, environmental spawns, and the Aniilog capture log. Spawn rules beyond environmental and weather hints are not announced as of 2026-08-29.",
    keyFacts: [
      { label: "Capture device", value: "Aniipod" },
      { label: "Aniilog", value: "In-game capture log" },
      { label: "Spawn factors", value: "Region, weather, time of day, traps" },
      { label: "Sneak bonus", value: "Bonus for catching without alerting" },
      { label: "Spawn rules", value: "Not announced as of 2026-08-29" },
      { label: "Capture devices", value: "Basic Aniipod + Aniipod Ultra (free launch item)" },
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
        id: "catch-spawns",
        type: "prose",
        heading: "Environmental and weather-based spawns",
        body:
          "Wild Aniimo spawn by region, weather, time of day, and trap placement. Previews from Loot Level Chill and Zeroluck describe weather-driven spawns as a meaningful variant source; a region during a snow event will spawn different forms than the same region during clear weather. The full spawn table is not announced as of 2026-08-29.",
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
          "The Aniilog is the in-game capture log that records every catch attempt. Each entry lists the form, region, weather, and outcome so you can backtrack variant encounters. The Aniilog also surfaces which forms you have not yet caught, which helps you plan weather or region runs.",
      },
      {
        id: "catch-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-29",
        body:
          "Spawn rules beyond environmental and weather hints are not announced as of 2026-08-29. Specific catch rate numbers for basic Aniipod and Aniipod Ultra are not announced as of 2026-08-29. Trap crafting recipes are not announced as of 2026-08-29. Aniimo is a new IP; no legacy catch system exists to inherit.",
      },
      {
        id: "catch-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-08-29` — Aniipod and capture flow framing.\n- [Loot Level Chill: Aniimo preview](https://lootlevelchill.com/features/aniimo-preview-action-packed-and-rather-surprising) — `media/interview` — checked `2026-08-29` — weather-driven spawn coverage.\n- [Zeroluck: Aniimo gameplay](https://zeroluck.gg/aniimo/gameplay) — `community/wiki` — checked `2026-08-29` — orientation only.",
      },
    ],
    faqIds: [
      "catch-aniipod-types",
      "catch-spawn-rules",
      "catch-aniilog",
      "catch-sneak-bonus",
    ],
    relatedPageIds: [
      "fixed-twining-system-en-us",
      "fixed-starter-and-prismana-en-us",
      "fixed-idyll-regions-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-08-29",
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
    h1: "Aniimo Heist of the Lost Isles: 3-player squad PvPvE mode",
    seoTitle:
      "Aniimo Heist of the Lost Isles: 3-player squad PvPvE mode",
    metaDescription:
      "Learn how Aniimo's Heist of the Lost Isles PvPvE mode works, including the 3-player squad, real-time searching, and battle objectives.",
    summary:
      "Heist of the Lost Isles is Aniimo's headline seasonal PvPvE mode. Matches use a 3-player squad, real-time searching for high-value egg caches, and live combat against both environment enemies and rival squads. Reward structure and rank system are not announced as of 2026-08-29.",
    hero: {
      eyebrow: "Heist of the Lost Isles",
      subtitle:
        "Seasonal 3-player squad PvPvE mode with real-time egg searching and rival-squad combat. Reward structure and rank system are not announced as of 2026-08-29.",
      ctas: [
        { label: "Elements & Roles", href: "/elements-and-roles" },
        { label: "Idyll Regions", href: "/idyll-regions" },
      ],
    },
    quickAnswer:
      "Heist of the Lost Isles is Aniimo's headline seasonal PvPvE mode. Matches use a 3-player squad, with real-time searching for high-value egg caches and live combat against both environment enemies and rival squads. Reward structure and rank system are not announced as of 2026-08-29.",
    keyFacts: [
      { label: "Mode", value: "PvPvE seasonal" },
      { label: "Squad size", value: "3 players" },
      { label: "Objectives", value: "Search egg caches + battle rival squads" },
      { label: "Rotation", value: "Seasonal" },
      { label: "Reward structure", value: "Not announced as of 2026-08-29" },
      { label: "Rank system", value: "Not announced as of 2026-08-29" },
    ],
    modules: [
      {
        id: "heist-squad",
        type: "prose",
        heading: "3-player squad basics",
        body:
          "Each Heist match uses a 3-player squad. The squad moves together through the Lost Isles region, splitting only when objectives call for parallel searches. ComicBook.com preview coverage describes the squad as the natural combat unit; solo play is supported through the open-world PvE loop rather than Heist.",
      },
      {
        id: "heist-objectives",
        type: "prose",
        heading: "Real-time search and battle objectives",
        body:
          "The core Heist objective is real-time searching for high-value egg caches scattered through the Lost Isles. Squads compete against rival squads for the same caches while environment enemies pressure both teams. The combination of PvE threat and PvP competition defines the mode's pacing.\n\nThe reward structure, including rare unlocks, currency payouts, and rank-based bonuses, is not announced as of 2026-08-29.",
      },
      {
        id: "heist-tips",
        type: "prose",
        heading: "Role and element tips for Heist squads",
        body:
          "A balanced Heist squad typically includes one DPS, one healer or support, and one Break or Regen slot. Element coverage matters because both environment enemies and rival squads lean on a mix of elements, and matching element coverage can swing the fight in close encounters.\n\nFor more on the role and element taxonomy, see the [Aniimo elements and roles](/elements-and-roles) page.",
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
        title: "Fact boundary — 2026-08-29",
        body:
          "Reward structure and rank system for Heist of the Lost Isles are not announced as of 2026-08-29. Solo play support and match length are not announced as of 2026-08-29. The Lost Isles map layout is not announced as of 2026-08-29.",
      },
      {
        id: "heist-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-08-29` — Heist of the Lost Isles mode framing.\n- [ComicBook.com: Aniimo preview](https://comicbook.com/gaming/feature/aniimo-preview/) — `media/interview` — checked `2026-08-29` — squad and objective coverage.",
      },
    ],
    faqIds: [
      "heist-squad-size",
      "heist-rewards",
      "heist-solo-play",
    ],
    relatedPageIds: [
      "fixed-elements-and-roles-en-us",
      "fixed-idyll-regions-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-08-29",
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
    h1: "Aniimo Homeland and Housing: base building, farming, and Homeland Skills",
    seoTitle:
      "Aniimo Homeland and Housing: base building, farming, and skills",
    metaDescription:
      "Plan Aniimo Homeland base building, farming, decoration, Aniimo Housing, and Homeland Skills for long-term progression.",
    summary:
      "Aniimo includes a Homeland base-building layer with farming, decoration, the Aniimo Housing module, and Homeland Skills for long-term progression. Specific skill tree and unlock conditions are not announced as of 2026-08-29.",
    hero: {
      eyebrow: "Homeland & Housing",
      subtitle:
        "The Homeland is your long-term progression base: build it out, decorate it, farm it, and grow it through the Homeland Skills tree.",
      ctas: [
        { label: "Idyll Regions", href: "/idyll-regions" },
        { label: "Catching & Aniipods", href: "/catching-and-aniipods" },
      ],
    },
    quickAnswer:
      "Aniimo includes a Homeland base-building layer with farming, decoration, the Aniimo Housing module, and Homeland Skills for long-term progression. Specific skill tree and unlock conditions are not announced as of 2026-08-29.",
    keyFacts: [
      { label: "Mode", value: "Homeland base building" },
      { label: "Sub-mode", value: "Aniimo Housing" },
      { label: "Progression", value: "Homeland Skills" },
      { label: "Activities", value: "Build, decorate, farm, skill progression" },
      { label: "Skill tree", value: "Not announced as of 2026-08-29" },
      { label: "Unlock conditions", value: "Not announced as of 2026-08-29" },
    ],
    modules: [
      {
        id: "homeland-basics",
        type: "prose",
        heading: "Base building and farming basics",
        body:
          "The Homeland is your long-term progression base. You build it out, decorate it, farm it, and grow it through the Homeland Skills tree. Placement ties to one of the Idyll regions, so your Homeland reflects where you chose to settle on the continent.",
      },
      {
        id: "homeland-housing",
        type: "prose",
        heading: "Aniimo Housing module",
        body:
          "Aniimo Housing is a dedicated sub-mode within the Homeland layer. It governs decoration, room layouts, and Aniimo living quarters. The exact housing scope is described by the Steam store page and the official Aniimo site, but the full decoration catalog is not announced as of 2026-08-29.",
      },
      {
        id: "homeland-skills",
        type: "prose",
        heading: "Homeland Skills overview",
        body:
          "Homeland Skills is the long-term progression layer tied to the base. Skills cover farming output, decoration bonuses, and quality-of-life unlocks. The specific skill tree and unlock conditions are not announced as of 2026-08-29.",
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
        title: "Fact boundary — 2026-08-29",
        body:
          "Specific Homeland Skills tree and unlock conditions are not announced as of 2026-08-29. Decoration catalog and Aniimo Housing scope are not announced as of 2026-08-29. Placement rules and region limits are not announced as of 2026-08-29.",
      },
      {
        id: "homeland-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-08-29` — Homeland and Housing framing.\n- [Aniimo official site](https://www.aniimo.com/) — `official/store` — checked `2026-08-29` — Homeland progression intent.\n- [ComicBook.com: Aniimo preview](https://comicbook.com/gaming/feature/aniimo-preview/) — `media/interview` — checked `2026-08-29` — Homeland coverage.",
      },
    ],
    faqIds: [
      "homeland-skill-tree",
      "homeland-housing-scope",
      "homeland-region-placement",
    ],
    relatedPageIds: [
      "fixed-idyll-regions-en-us",
      "fixed-catching-and-aniipods-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-08-29",
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
        "Preview coverage centers on Twining and the open world, with recurring concerns around monetization and PC performance. Launch-day reviews begin after 15-16 September 2026.",
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
          "Aniimo has not launched yet as of 2026-08-29. Full review coverage begins after the global unlock on 15-16 September 2026. Launch-day reviews, aggregate scores, and user ratings are not announced as of 2026-08-29.",
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
    lastReviewed: "2026-08-29",
  },
];
