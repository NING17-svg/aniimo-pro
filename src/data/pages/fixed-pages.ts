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
      "Check Aniimo PC minimum and recommended CPU, GPU, RAM, and storage requirements from the current English Steam page, plus controller support.",
    summary:
      "The current English Steam page lists Aniimo PC minimum requirements as Intel i7-9700 / AMD Ryzen 5 3600X, 12 GB RAM, and GTX 1060 / Radeon RX 6600, with a recommended spec of Intel Core i7-12700F / AMD Ryzen 7700X, 16 GB RAM, and RTX 3070 8G / Radeon RX 6800. Both tiers list 45 GB of storage and a 64-bit Windows 10 or newer install.",
    hero: {
      eyebrow: "PC system requirements",
      subtitle:
        "The current English Steam page now names CPU and GPU models: Intel i7-9700 / Ryzen 5 3600X with a GTX 1060 / RX 6600 for minimum, and Intel Core i7-12700F / Ryzen 7700X with an RTX 3070 8G / RX 6800 for recommended. Older regional Steam pages that show 8 GB RAM and 30 GB storage are superseded.",
      ctas: [
        { label: "Platforms & Versions", href: "/platforms-and-versions" },
        { label: "Release Overview", href: "/release-overview" },
      ],
    },
    quickAnswer:
      "The current English Steam page lists Aniimo PC minimum requirements as 64-bit Windows 10, an Intel i7-9700 or AMD Ryzen 5 3600X or above, 12 GB of RAM, a GTX 1060 or AMD Radeon RX 6600, DirectX 11, and 45 GB of available space. The recommended spec raises that to Windows 10 or above, an Intel Core i7-12700F or AMD Ryzen 7700X or above, 16 GB of RAM, and an NVIDIA GeForce RTX 3070 8G or above or AMD Radeon RX 6800 or above. Both tiers need a broadband internet connection, and older regional Steam pages that show 8 GB / 30 GB are superseded.",
    keyFacts: [
      { label: "Operating system", value: "Windows 10 or above (64-bit)" },
      { label: "Minimum CPU / GPU", value: "Intel i7-9700 or Ryzen 5 3600X / GTX 1060 or RX 6600" },
      { label: "Recommended CPU / GPU", value: "Intel Core i7-12700F or Ryzen 7700X / RTX 3070 8G or RX 6800" },
      { label: "RAM", value: "12 GB minimum, 16 GB recommended" },
      { label: "Storage", value: "45 GB available space (SSD recommended)" },
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
          { field: "CPU", minimum: "Intel i7-9700 / AMD Ryzen 5 3600X or above", recommended: "Intel Core i7-12700F / AMD Ryzen 7700X or above" },
          { field: "RAM", minimum: "12 GB", recommended: "16 GB" },
          { field: "Graphics", minimum: "GTX 1060 / AMD Radeon RX 6600", recommended: "NVIDIA GeForce RTX 3070 8G or above / AMD Radeon RX 6800 or above" },
          { field: "DirectX", minimum: "Version 11", recommended: "Version 11" },
          { field: "Network", minimum: "Broadband internet connection", recommended: "Broadband internet connection" },
          { field: "Storage", minimum: "45 GB available space", recommended: "45 GB available space; SSD recommended" },
          { field: "Controller", minimum: "Xbox / PlayStation pads supported", recommended: "Xbox / PlayStation pads supported" },
        ],
      },
      {
        id: "spec-cpu-gpu",
        type: "prose",
        heading: "CPU and GPU Model Strings",
        body:
          "The current English Steam page now names specific CPU and GPU models instead of leaving them unannounced. The minimum tier asks for an Intel i7-9700 or AMD Ryzen 5 3600X or above paired with a GTX 1060 or AMD Radeon RX 6600. The recommended tier asks for an Intel Core i7-12700F or AMD Ryzen 7700X or above paired with an NVIDIA GeForce RTX 3070 8G or above or an AMD Radeon RX 6800 or above.\n\nBoth tiers require a 64-bit processor and a 64-bit operating system, and both list a broadband internet connection. If your CPU sits between the two named tiers, the minimum row is the floor Steam publishes; Steam does not publish a separate mid-tier target as of 2026-09-02.",
      },
      {
        id: "spec-ram",
        type: "prose",
        heading: "RAM: 12 GB Minimum, 16 GB Recommended",
        body:
          "Minimum RAM is no longer unannounced: the current English Steam page lists 12 GB of RAM for the minimum tier and 16 GB of RAM for the recommended tier. The 12 GB figure previously appeared on this page as a recommended value; it is now the published minimum, and 16 GB is the published recommendation. Older regional Steam pages that show 8 GB of RAM are superseded.",
      },
      {
        id: "spec-storage",
        type: "prose",
        heading: "Download Size Notes",
        body:
          "The current English Steam page lists 45 GB of available space for both the minimum and the recommended tier, raised from the 30 GB shown on older regional pages. Treat the 45 GB figure as authoritative, keep it on an SSD for shader and streaming performance, and leave additional headroom for shader caches and post-launch patches.",
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
          "Older regional Steam pages still show 8 GB of RAM and 30 GB of storage for Aniimo, and some still leave the CPU and GPU rows blank. Those pages are superseded: the current English Steam page is the authoritative reference with 12 GB minimum RAM, 16 GB recommended RAM, 45 GB of storage, and named CPU and GPU models. If the local page disagrees, defer to the English page and flag the inconsistency in any support request.",
      },
      {
        id: "spec-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-02",
        body:
          "The CPU, GPU, RAM, DirectX, network, and storage values on this page are read from the current English Steam page on 2026-09-02, which lists DirectX Version 11 for both tiers; the DirectX 12 value captured here on 2026-08-29 is superseded. Steam publishes only minimum and recommended tiers, so no mid-tier or ultra/4K target exists as of 2026-09-02. Target frame rate, resolution, and upscaling support per spec tier are not announced as of 2026-09-02, and the published figures may change again before the 15-16 September 2026 launch. Older regional Steam pages still show 8 GB / 30 GB and are not authoritative.",
      },
      {
        id: "spec-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-09-02` — authoritative PC spec: Intel i7-9700 / Ryzen 5 3600X and GTX 1060 / RX 6600 with 12 GB RAM minimum, Intel Core i7-12700F / Ryzen 7700X and RTX 3070 8G / RX 6800 with 16 GB RAM recommended, DirectX 11, broadband connection, and 45 GB storage.\n- [GameHaunt release overview](https://gamehaunt.com/aniimo-release-date-platforms-and-everything-we-know-2026) — `media/interview` — checked `2026-09-02` — pre-launch PC performance context; the article publishes no PC requirement table of its own.",
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
    lastReviewed: "2026-09-02",
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
      "Separate the Aniimo Susuta egg, Perfect Egg, and 10M-30M global milestone rewards, and pre-register on PS5, Xbox, Steam, Epic, App Store, or Google Play.",
    summary:
      "Aniimo is free-to-play with no paid Standard or Deluxe edition. Pre-registration rewards split into three separate tracks: the Susuta egg claimed through official-site pre-registration, the Perfect Egg from multi-day logins, and the global milestone ladder at 10M, 15M, 20M, and 30M sign-ups. Pre-registration is open on PS5, Xbox, Steam, Epic, the App Store, and Google Play.",
    hero: {
      eyebrow: "Pre-order and editions",
      subtitle:
        "Aniimo uses a free-to-play model with optional in-app purchases and no paid edition. Three separate reward tracks run before launch — the Susuta egg, the Perfect Egg, and the global milestone ladder — and each storefront has its own pre-registration button.",
      ctas: [
        { label: "Closed Beta", href: "/closed-beta-and-signups" },
        { label: "Platforms & Versions", href: "/platforms-and-versions" },
      ],
    },
    quickAnswer:
      "Aniimo uses a free-to-play model with optional in-app purchases, so no paid pre-order tier or Deluxe edition exists. Pre-registration rewards come from three separate tracks: the Susuta egg, claimed by pre-registering on the official aniimo.com site; the Perfect Egg, a random egg granted through multi-day logins; and the global milestone ladder, which pays Glimmer x200 at 10M sign-ups, Aniipod Ultra x2 at 15M, the \"Companion Promise\" limited avatar frame at 20M, and the \"Sunlit Meadow\" limited outfit at 30M. Pre-register on PS5, Xbox, Steam, Epic Games Store, the App Store, or Google Play; milestone rewards are delivered in-game at launch, not during the closed beta.",
    keyFacts: [
      { label: "Base price", value: "Free-to-play" },
      { label: "Pre-order tier", value: "Not applicable (F2P)" },
      { label: "Susuta egg", value: "Official-site pre-registration claim" },
      { label: "Perfect Egg", value: "Random egg from multi-day logins" },
      { label: "Milestone ladder", value: "10M, 15M, 20M, 30M global sign-ups" },
      { label: "Pre-registration storefronts", value: "PS5, Xbox, Steam, Epic, App Store, Google Play" },
    ],
    modules: [
      {
        id: "preorder-reward-tracks",
        type: "data-table",
        heading: "Three Separate Pre-Registration Reward Tracks",
        columns: [
          { key: "track", label: "Track" },
          { key: "reward", label: "Reward" },
          { key: "howToGet", label: "How you earn it" },
          { key: "delivery", label: "Delivery" },
        ],
        rows: [
          {
            track: "Official-site pre-registration",
            reward: "Susuta egg (mysterious egg)",
            howToGet: "Pre-register an account on aniimo.com",
            delivery: "In-game after the 15-16 September 2026 launch",
          },
          {
            track: "Multi-day login",
            reward: "Perfect Egg (random)",
            howToGet: "Log in across multiple days once the game is live",
            delivery: "In-game login track, not a pre-registration claim",
          },
          {
            track: "Global milestone ladder",
            reward: "Glimmer x200, Aniipod Ultra x2, avatar frame, outfit",
            howToGet: "Total global pre-registration count crosses 10M / 15M / 20M / 30M",
            delivery: "In-game at launch for every pre-registered account",
          },
        ],
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
        id: "preorder-eggs",
        type: "prose",
        heading: "Susuta Egg vs Perfect Egg vs Milestone Rewards",
        body:
          "These three rewards are often mixed together, but the official site keeps them separate.\n\nThe Susuta egg is the mysterious egg tied to pre-registering on aniimo.com. It is an account-level claim: complete the official-site pre-registration form and it lands in your account for the launch build.\n\nThe Perfect Egg is a random egg obtained through multi-day logins rather than through the pre-registration form. Signing up early does not grant it; you earn it by logging in across several days once the game is live.\n\nThe global milestone ladder is shared by every pre-registered player. It does not depend on which storefront you used or how early you signed up — it depends only on the worldwide pre-registration count. The official pre-registration counter showed 30,104,220 sign-ups when checked on 2026-09-02, which is past every published milestone threshold, so all four tiers are on the launch payout list.",
      },
      {
        id: "preorder-platforms",
        type: "data-table",
        heading: "Per-Platform Pre-Registration Storefronts",
        columns: [
          { key: "platform", label: "Platform" },
          { key: "storefront", label: "Where to pre-register" },
          { key: "notes", label: "Notes" },
        ],
        rows: [
          { platform: "PlayStation 5", storefront: "PlayStation Store — https://store.playstation.com/concept/10018491", notes: "Concept page; free-to-play download at launch" },
          { platform: "Xbox Series X|S", storefront: "Xbox Store — https://www.xbox.com/games/store/aniimo/9pk8phlcqdf6", notes: "Store listing with the Xbox pre-registration button" },
          { platform: "PC (Steam)", storefront: "Steam — https://store.steampowered.com/app/4126040/Aniimo", notes: "AppID 4126040; also hosts the PC spec table" },
          { platform: "PC (Epic Games Store)", storefront: "Epic Games Store — https://store.epicgames.com/p/aniimo-759396", notes: "Second PC storefront for the same launch build" },
          { platform: "iOS", storefront: "App Store — https://apps.apple.com/app/aniimo/id6759098797", notes: "Apple pre-registration entry for iPhone and iPad" },
          { platform: "Android", storefront: "Google Play — https://aniimo.onelink.me/AtO3/sm4nlhoy", notes: "Official site routes Android sign-ups through this link" },
        ],
      },
      {
        id: "preorder-claim-steps",
        type: "steps",
        heading: "How to Claim Before Launch",
        items: [
          {
            title: "Pre-register on aniimo.com for the Susuta egg",
            body: "The Susuta egg is tied to the official-site pre-registration form, not to a storefront button. Complete it once with the account you plan to play on so the egg is attached before the 15-16 September 2026 unlock.",
          },
          {
            title: "Add the storefront you will actually install from",
            body: "Pre-register on the platform you will play on: PlayStation Store, Xbox Store, Steam, Epic Games Store, the App Store, or the official Google Play link. Storefront pre-registration is what puts the free-to-play download in your library on launch day; it does not replace the official-site form.",
          },
          {
            title: "Expect milestone rewards at launch, not during beta",
            body: "The milestone ladder pays out in the live game after launch. Closed Beta 3 progress did not carry forward, so nothing you did in the beta build holds these rewards. The exact in-game claim screen and any claim deadline are not announced as of 2026-09-02.",
          },
          {
            title: "Keep the Perfect Egg on your login plan",
            body: "The Perfect Egg comes from multi-day logins after launch, so budget a few consecutive play sessions at release instead of expecting it from the pre-registration form.",
          },
        ],
      },
      {
        id: "preorder-launch-items",
        type: "prose",
        heading: "Free Launch-Day Items",
        body:
          "Three items are granted to every player at launch regardless of pre-registration: a Sparkling Cube, an Aniipod Ultra, and a Tumbler. These grant early-game capture and crafting utility and are not gated behind paid tiers. They are separate from the Aniipod Ultra x2 paid out by the 15M milestone tier.",
      },
      {
        id: "preorder-monetization",
        type: "prose",
        heading: "Monetization Model",
        body:
          "Aniimo is free-to-play with optional in-app purchases. The store will stock cosmetics and convenience items, but specific paid bundles, season pass structure, and battle pass plans are not announced as of 2026-09-02.",
      },
      {
        id: "preorder-editions",
        type: "prose",
        heading: "Paid Edition Status",
        body:
          "A paid Standard, Deluxe, or Premium edition is not announced as of 2026-09-02. The base game is free; any future paid edition would have to be confirmed on the official Aniimo site or Steam store.",
      },
      {
        id: "preorder-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-02",
        body:
          "The milestone ladder rewards (Glimmer x200, Aniipod Ultra x2, \"Companion Promise\" avatar frame, \"Sunlit Meadow\" outfit) and the four thresholds are read from the official Aniimo site and GameHaunt's release overview. The 30,104,220 pre-registration count is the figure displayed on the official site on 2026-09-02 and keeps moving. Any milestone above 30M is not announced as of 2026-09-02. The in-game claim flow, claim window, and whether rewards are per-account or per-platform are not announced as of 2026-09-02. Specific IAP bundles, season pass plans, and any paid edition are not announced as of 2026-09-02.",
      },
      {
        id: "preorder-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo Official Site](https://www.aniimo.com/) — `official/store` — checked `2026-09-02` — confirms the Susuta egg pre-registration claim, the Perfect Egg multi-day login track, the 10M/15M/20M/30M milestone rewards, the displayed sign-up count, and the six per-platform pre-registration links.\n- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-09-02` — confirms the free-to-play model and the Steam pre-registration entry point.\n- [GameHaunt release overview](https://gamehaunt.com/aniimo-release-date-platforms-and-everything-we-know-2026) — `media/interview` — checked `2026-09-02` — independent confirmation of the 10M/15M/20M/30M milestone ladder and its rewards.",
      },
    ],
    faqIds: [
      "preorder-cost",
      "preorder-edition",
      "preorder-rewards",
      "preorder-platform-links",
      "preorder-milestone-timing",
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
    lastReviewed: "2026-09-02",
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
          "Players who want future beta access should pre-register an account on the official Aniimo site, follow the Aniimo Steam news page, and join the official Aniimo Discord. New beta windows will be announced through those channels; future dates are not announced as of 2026-09-02.\n\nBecause Closed Beta 3 was the last announced test before the 15-16 September 2026 launch, the practical path for most players is pre-registration rather than another beta. The per-platform pre-registration links are listed on the [Aniimo pre-order and editions](/pre-order-and-editions) page.",
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
    lastReviewed: "2026-09-02",
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
      "Aniimo starter picks: compare Budclaw, Celestis, Nimbi, Emberpup, and Chirpi by movement type, see the Emberpup evolution line, and place the Susuta and Perfect Egg rewards.",
    summary:
      "The named Aniimo forms visible in pre-launch coverage are Budclaw (crab-like, burrowing), Celestis and Nimbi (flying), Emberpup (fiery bruiser), and Chirpi (feisty bird). Emberpup is the worked evolution example: Emberpup to Flameruff to Scorchhowl, with Interlupa now part of the same family. Prismana forms are alternate-color variants that evolve along the same Lumin to Gamma to Nova path, and the Susuta egg and Perfect Egg support your roster rather than replacing your starter.",
    hero: {
      eyebrow: "Starter & Prismana",
      subtitle:
        "Pick the starter whose movement type and role fit your first Idyll puzzles, then use the Emberpup to Flameruff to Scorchhowl line to see how far a single pick can go. The Susuta egg and Perfect Egg are roster support, not starter replacements.",
      ctas: [
        { label: "Twining System", href: "/twining-system" },
        { label: "Evolution & Stages", href: "/evolution-and-stages" },
        { label: "Catching & Aniipods", href: "/catching-and-aniipods" },
      ],
    },
    quickAnswer:
      "Your Aniimo starter is the creature you pick at the start of the game and the basis for early progression. The named forms surfaced in pre-launch coverage are Budclaw, a crab-like Aniimo that is great at burrowing; Celestis and Nimbi, both flying forms; Emberpup, described as a fiery little bruiser; and Chirpi, a feisty bird. Emberpup shows how far one pick travels: it evolves to Flameruff and then Scorchhowl, with Interlupa now part of the same family. Prismana forms are alternate-color variants with slightly different stats that follow the same Lumin to Gamma to Nova path, and the Susuta egg (official-site pre-registration) plus the Perfect Egg (multi-day logins) feed your roster rather than replacing your starter.",
    keyFacts: [
      { label: "Named forms in coverage", value: "Budclaw, Celestis, Nimbi, Emberpup, Chirpi" },
      { label: "Worked evolution line", value: "Emberpup → Flameruff → Scorchhowl (+ Interlupa)" },
      { label: "Movement examples", value: "Budclaw burrows; Celestis and Nimbi fly" },
      { label: "Prismana forms", value: "Alternate-color variants; same Lumin to Nova pipeline" },
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
          "The Steam store page presents Aniimo as an open-world creature-catching RPG, with starter choice framed as the first big player decision. The official site at aniimo.com frames that first pick as a rare Prismana Form Aniimo selected as a Junior Wayfarer, and confirms that early-game choices are designed to shape the first hours without locking you out of late-game evolutions, since each form follows the same Lumin to Gamma to Nova pipeline. The starter list itself is subject to change per developer as of 2026-09-02, so treat published starter picks as the current plan rather than a permanent roster.\n\nStarter forms split across the nine elements of the Idyll continent and the five combat roles (DPS, Heal, Support, Break, Regen). Pre-launch coverage from ComicBook.com and the Steam store page points to starter forms leaning DPS or Break — Emberpup is described as a bruiser rather than a support — with Heal and Support players expected to lean on early catches of wild Aniimo for their first healer.\n\nYour starter is the first Aniimo you can Twine into, and it sets the merged role you will use most often in the early game. Twining into the starter lets you cross the first set of exploration puzzles, which is why picking a starter with at least one relevant movement type (fly, burrow, swim, climb, dash) is more useful than chasing the highest damage number.",
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
          "Emberpup is the clearest published example of how far a single pick travels. In the CBR interview the developer states that Emberpup evolves to Flameruff and then Scorchhowl, with Interlupa now part of that family too — the only Aniimo evolution chain named end-to-end in pre-launch coverage.\n\nRead against the standard pipeline, that line is a Lumin form advancing through Gamma to Nova, with the family extended by Interlupa. It matters for starter planning for two reasons: the fiery bruiser you pick in hour one is the same creature carrying your damage slot several stages later, and a Prismana version of that form would follow the same chain while keeping its alternate colouring.\n\nExact evolution requirements for each step are not fully confirmed as of 2026-09-02. Stage mechanics are covered on the [Aniimo evolution and stages](/evolution-and-stages) page.",
      },
      {
        id: "prismana-explained",
        type: "prose",
        heading: "Prismana forms explained",
        body:
          "Prismana forms are alternate-color Aniimo that resemble a 'shiny' or palette-swapped version of a standard form, with the same body and role but a different look and a slightly different stat spread. They are not a separate evolution stage; they sit alongside the Lumin, Gamma, and Nova pipeline and can advance through it on the same triggers as a normal form.\n\nThe official site describes the Prismana Form Aniimo as a rare creature the player selects as a Junior Wayfarer, and Prismana forms are also tied to encounter conditions the developer is still testing. As of 2026-09-02 the official list of Prismana forms is still subject to change per developer, so do not treat any third-party Prismana catalog as a final roster.\n\nOnce you have a Prismana form, it follows the same Lumin to Gamma to Nova evolution path as a standard form. Weather, regional, and Sparkling variants are layered on top of Prismana; a Prismana form is its own visual variant, while weather, regional, and Sparkling variants describe when the form appears.",
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
          { title: "Slot the eggs where your roster is thin", body: "The Susuta egg arrives from official-site pre-registration and the Perfect Egg comes from multi-day logins. Give each a slot where your starter is weakest so you can see how it evolves before heavier variants unlock." },
        ],
      },
      {
        id: "starter-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-02",
        body:
          "Budclaw, Celestis, Nimbi, Emberpup, and Chirpi are named in the CBR interview and the ComicBook.com preview as Aniimo visible in pre-launch coverage; neither source publishes an official starter-selection screen, so which of them is actually offered as a starter is not announced as of 2026-09-02. Element assignments and combat roles for these specific forms are not announced as of 2026-09-02; the movement notes follow the descriptions in those sources. The Emberpup to Flameruff to Scorchhowl line and the addition of Interlupa are quoted from the CBR interview; per-step evolution requirements are not confirmed as of 2026-09-02. The Susuta egg is the official-site pre-registration claim and the Perfect Egg is a multi-day login reward per aniimo.com; reward availability may shift before launch. Prismana forms are confirmed as a variant layer, but the full roster has not been officially published as of 2026-09-02. Aniimo is a new IP; there is no legacy Aniimo starter list or Prismana catalog to inherit.",
      },
      {
        id: "starter-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo official site](https://www.aniimo.com/) — `official/store` — checked `2026-09-02` — Prismana Form Aniimo as the Junior Wayfarer pick, the Susuta egg pre-registration claim, and the Perfect Egg multi-day login track.\n- [CBR: Aniimo interview](https://www.cbr.com/aniimo-interview-upcoming-creature-catching-rpg-co-op-gorgeous-visuals/) — `media/interview` — checked `2026-09-02` — names Budclaw as a crab-like burrowing Aniimo, Celestis and Nimbi as flying Aniimo, and states that Emberpup evolves to Flameruff and then Scorchhowl, and now Interlupa too.\n- [ComicBook.com: Aniimo preview](https://comicbook.com/gaming/feature/aniimo-preview/) — `media/interview` — checked `2026-09-02` — names Chirpi as a feisty bird and Emberpup as a fiery little bruiser, plus starter role and element framing.\n- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-09-02` — open-world creature-catching framing and evolution stages.",
      },
    ],
    faqIds: [
      "starter-which-pick",
      "starter-named-roster",
      "starter-emberpup-line",
      "prismana-form-meaning",
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
    lastReviewed: "2026-09-02",
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
      "Understand Aniimo evolution stages (Lumin, Gamma, Nova), the named Emberpup to Flameruff to Scorchhowl line, Closed Beta 3 roster additions, and variant layers.",
    summary:
      "Aniimo evolution flows Lumin to Gamma to Nova, with weather, regional, Sparkling, and Prismana variants layered on top. Emberpup to Flameruff to Scorchhowl (now with Interlupa) is the one line named end-to-end in coverage, and Closed Beta 3 added Bubbeep, Popapus, Mophling, Sausite plus the Budsquire and Thornblade forms. Specific evolution conditions are not fully confirmed as of 2026-09-02.",
    hero: {
      eyebrow: "Evolution & stages",
      subtitle:
        "Every Aniimo follows the same Lumin to Gamma to Nova evolution pipeline. Emberpup to Flameruff to Scorchhowl is the named worked example, and Closed Beta 3 widened the roster the pipeline applies to.",
      ctas: [
        { label: "Twining System", href: "/twining-system" },
        { label: "Starter & Prismana", href: "/starter-and-prismana" },
        { label: "Catching & Aniipods", href: "/catching-and-aniipods" },
        { label: "Elements & Roles", href: "/elements-and-roles" },
      ],
    },
    quickAnswer:
      "Aniimo evolution flows Lumin to Gamma to Nova. The only chain named end-to-end in pre-launch coverage is Emberpup to Flameruff to Scorchhowl, with Interlupa now part of the same family. Weather, regional, Sparkling, and Prismana variants are layered on top of that pipeline; they describe how and when the form appears, not a separate evolution stage. Closed Beta 3 added Bubbeep, Popapus, Mophling, and Sausite as new species plus the Budsquire and Thornblade forms. Specific evolution conditions are not fully confirmed as of 2026-09-02.",
    keyFacts: [
      { label: "Pipeline", value: "Lumin → Gamma → Nova" },
      { label: "Named line", value: "Emberpup → Flameruff → Scorchhowl (+ Interlupa)" },
      { label: "Variant layers", value: "Weather, regional, Sparkling, Prismana" },
      { label: "Beta 3 species", value: "Bubbeep, Popapus, Mophling, Sausite" },
      { label: "Beta 3 forms", value: "Budsquire, Thornblade" },
      { label: "Evolution conditions", value: "Not fully confirmed as of 2026-09-02" },
    ],
    modules: [
      {
        id: "evolution-pipeline",
        type: "prose",
        heading: "Lumin → Gamma → Nova pipeline",
        body:
          "Every Aniimo begins as a Lumin form, the base body you catch or pick at the start. Gamma is the second evolution stage reached through encounter conditions, and Nova is the third and highest standard stage. CBR and ComicBook.com previews describe Gamma and Nova as 'more powerful' variants of the same body, with the visual differences leaning on palette and silhouette rather than a wholesale redesign.\n\nSpecific evolution conditions for moving from Lumin to Gamma and from Gamma to Nova are not fully confirmed as of 2026-09-02. Treat any leaked evolution requirements as provisional.",
      },
      {
        id: "evolution-named-line",
        type: "prose",
        heading: "Named example: Emberpup → Flameruff → Scorchhowl (+ Interlupa)",
        body:
          "Pre-launch coverage names exactly one chain end-to-end. In the CBR interview the developer states that Emberpup evolves to Flameruff and then Scorchhowl, and that Interlupa is now part of that family too. ComicBook.com independently describes Emberpup as a fiery little bruiser with serious attitude and a fan-favourite on the team.\n\nUse it as the reference shape for the pipeline: a base body you meet in the early game, a middle form, a top standard form, and a related family member added later. Interlupa is described as joining the family rather than as a confirmed fourth sequential stage, so do not read it as proof that some lines have four steps.\n\nNo other Aniimo line has published stage names as of 2026-09-02, so any full evolution chart circulating elsewhere is community reconstruction rather than an official table. Starter-side planning for this line lives on the [Aniimo starter and Prismana](/starter-and-prismana) page.",
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
          { name: "Bubbeep", kind: "New Aniimo species", stageStatus: "Evolution line not published as of 2026-09-02" },
          { name: "Popapus", kind: "New Aniimo species", stageStatus: "Evolution line not published as of 2026-09-02" },
          { name: "Mophling", kind: "New Aniimo species", stageStatus: "Evolution line not published as of 2026-09-02" },
          { name: "Sausite", kind: "New Aniimo species", stageStatus: "Evolution line not published as of 2026-09-02" },
          { name: "Budsquire", kind: "Additional creature form", stageStatus: "Which body it belongs to is not published as of 2026-09-02" },
          { name: "Thornblade", kind: "Additional creature form", stageStatus: "Which body it belongs to is not published as of 2026-09-02" },
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
        heading: "Weather, regional, Sparkling, and Prismana variants",
        body:
          "Beyond the Lumin to Nova pipeline, four variant layers describe how a given Aniimo appears:\n\n- Weather variants tie to specific weather conditions such as rain, snow, fog, or aurora events. They evolve through the same pipeline.\n- Regional variants tie to specific regions of the Idyll continent and Astra. They are typically harder to find than standard forms.\n- Sparkling variants are rare palette-swapped forms with a shifted appearance. They are not yet a confirmed roster as of 2026-09-02.\n- Prismana variants are alternate-color Aniimo with slightly different stats. They are not a separate evolution stage and evolve along the same pipeline.",
      },
      {
        id: "evolution-prismana",
        type: "prose",
        heading: "How Prismana fits the evolution pipeline",
        body:
          "Prismana is its own visual variant, while weather, regional, and Sparkling variants describe when the form appears. A Prismana form can still evolve from Lumin to Gamma to Nova, with Prismana remaining the visual layer — a Prismana Emberpup would run the same Flameruff and Scorchhowl steps while keeping its alternate colouring. Aniidex and community references track known Prismana encounters, but as of 2026-09-02 the official list is subject to change per developer.",
      },
      {
        id: "evolution-reach",
        type: "prose",
        heading: "How to reach higher forms",
        body:
          "Higher forms are reached through encounter conditions, weather, regional location, and reward tracks. Specific triggers are not fully confirmed as of 2026-09-02, so the safest approach is to keep a balanced roster of forms and visit each region under its native weather conditions to maximize variant encounters.",
      },
      {
        id: "evolution-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-02",
        body:
          "The Emberpup to Flameruff to Scorchhowl line and Interlupa joining that family are quoted from the CBR interview; per-step requirements for those evolutions are not confirmed as of 2026-09-02. The Closed Beta 3 names come from Twisted Voxel's beta coverage and describe the beta roster; their elements, roles, stages, and evolution lines are not published as of 2026-09-02, and whether every one ships at launch is not announced. Specific evolution conditions for moving between Lumin, Gamma, and Nova are not fully confirmed as of 2026-09-02. The Sparkling variant roster is not officially published as of 2026-09-02. Prismana forms are confirmed as a variant layer but the full roster has not been officially published. Aniimo is a new IP from Pawprint Studio; there is no legacy Aniimo evolution table to inherit.",
      },
      {
        id: "evolution-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [CBR: Aniimo interview](https://www.cbr.com/aniimo-interview-upcoming-creature-catching-rpg-co-op-gorgeous-visuals/) — `media/interview` — checked `2026-09-02` — states that Emberpup evolves to Flameruff and then Scorchhowl, and now Interlupa too; also names Budclaw, Celestis, and Nimbi.\n- [Twisted Voxel: Aniimo Closed Beta 3](https://twistedvoxel.com/aniimo-set-for-q3-2026-launch-new-beta-announced/) — `media/interview` — checked `2026-09-02` — names Bubbeep, Popapus, Mophling, and Sausite as new species, Budsquire and Thornblade as additional forms, and Bubbask and Coraliz as co-op bosses.\n- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-09-02` — evolution stage framing.\n- [ComicBook.com: Aniimo preview](https://comicbook.com/gaming/feature/aniimo-preview/) — `media/interview` — checked `2026-09-02` — variant layer context and Emberpup description.",
      },
    ],
    faqIds: [
      "evolution-pipeline",
      "evolution-emberpup-line",
      "evolution-beta-additions",
      "evolution-prismana",
      "evolution-sparkling",
      "evolution-trigger",
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
    lastReviewed: "2026-09-02",
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
      "Build an Aniimo Heist of the Lost Isles squad: 3-player role coverage, the six-team Diamond Egg Heist format, egg-cache priority, and Bubbask and Coraliz co-op bosses.",
    summary:
      "Heist of the Lost Isles is Aniimo's headline seasonal PvPvE mode, built on a 3-player squad that searches for high-value egg caches while fighting environment enemies and rival squads. The Diamond Egg Heist scales that up to six teams of three contesting one diamond egg, and Closed Beta 3 added the coordinated co-op bosses Bubbask and Coraliz. Reward structure and rank system are not announced as of 2026-09-02.",
    hero: {
      eyebrow: "Heist of the Lost Isles",
      subtitle:
        "Seasonal 3-player squad PvPvE with real-time egg searching, plus the Diamond Egg Heist where up to six teams of three contest a single diamond egg. Role coverage, element coverage, and cache priority decide close matches; the reward structure is still unannounced.",
      ctas: [
        { label: "Elements & Roles", href: "/elements-and-roles" },
        { label: "Idyll Regions", href: "/idyll-regions" },
        { label: "Closed Beta", href: "/closed-beta-and-signups" },
      ],
    },
    quickAnswer:
      "Heist of the Lost Isles is Aniimo's headline seasonal PvPvE mode. Matches use a 3-player squad that searches in real time for high-value egg caches while fighting environment enemies and rival squads. The Diamond Egg Heist variant added in Closed Beta 3 pits up to six teams of three players against one another: teams must secure a valuable diamond egg and escort it safely while rival groups try to steal it. Build the squad around role coverage (one DPS, one Heal or Support, one Break or Regen), spread element coverage across the three players, and decide cache priority before the match. Reward structure and rank system are not announced as of 2026-09-02.",
    keyFacts: [
      { label: "Mode", value: "PvPvE seasonal" },
      { label: "Squad size", value: "3 players" },
      { label: "Diamond Egg Heist", value: "Up to six teams of three" },
      { label: "Objectives", value: "Search egg caches, secure and escort the diamond egg" },
      { label: "Co-op bosses", value: "Bubbask, Coraliz (coordinated group play)" },
      { label: "Reward structure", value: "Not announced as of 2026-09-02" },
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
          "The Diamond Egg Heist, shown in Closed Beta 3, scales the squad format into a larger competitive bracket. Twisted Voxel describes it as pitting up to six teams of three players against one another in a competitive objective-based challenge, where teams must secure a valuable diamond egg and safely escort it while defending against rival groups attempting to steal it.\n\nThat changes the shape of the match in two ways. First, the population: with up to eighteen players on one objective, contested fights are the default rather than the exception, so a squad that can disengage matters as much as one that can win a straight fight. Second, the objective: securing the egg is only the first half — the escort leg is when your squad is slowest, most predictable, and most exposed to the other five teams.\n\nWhether the Diamond Egg Heist is a permanent rotation inside Heist of the Lost Isles or a separate seasonal mode is not announced as of 2026-09-02; Twisted Voxel's beta coverage does not tie the two names together.",
      },
      {
        id: "heist-objectives",
        type: "prose",
        heading: "Real-time search and battle objectives",
        body:
          "The core Heist objective is real-time searching for high-value egg caches scattered through the Lost Isles. Squads compete against rival squads for the same caches while environment enemies pressure both teams. The combination of PvE threat and PvP competition defines the mode's pacing.\n\nCache priority is the practical decision: caches that sit on open ground are cheap to grab but expensive to hold, while caches behind PvE pressure cost time but tend to be uncontested early. In a six-team Diamond Egg Heist, the diamond egg itself is the highest-value target on the map, so expect the remaining caches to go quiet once it is claimed.\n\nThe reward structure, including rare unlocks, currency payouts, and rank-based bonuses, is not announced as of 2026-09-02.",
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
        ],
      },
      {
        id: "heist-tips",
        type: "prose",
        heading: "Role and element tips for Heist squads",
        body:
          "A balanced Heist squad typically includes one DPS, one healer or support, and one Break or Regen slot. That covers the three things a match asks for: a damage answer, a survival answer, and a disruption answer.\n\nElement coverage is the second axis. Because both environment enemies and rival squads lean on a mix of elements, three players stacking one element gives a rival squad a single answer to all of you. Spread coverage across the squad rather than optimizing each player individually, and remember that Twining swaps you into a caught Aniimo's element mid-fight, so each player's roster is really a small pool of element options rather than one fixed type.\n\nDuring the search phase, use element coverage to pick which caches you take first: send the squad at caches whose guarding enemies your merged forms answer cleanly, and leave the ones you would have to grind through until the map thins out. Specific element-versus-element multipliers are not announced as of 2026-09-02, so treat coverage as insurance rather than as a calculated advantage. For the role and element taxonomy, see the [Aniimo elements and roles](/elements-and-roles) page.",
      },
      {
        id: "heist-co-op-bosses",
        type: "prose",
        heading: "Bubbask and Coraliz: coordinated co-op encounters",
        body:
          "Closed Beta 3 added two boss creatures, Bubbask and Coraliz, which Twisted Voxel describes as creatures players team up to battle, with challenges designed around group play. They are the clearest signal of what a coordinated squad is expected to handle: encounters built for a group rather than for a solo player with an AI-controlled roster.\n\nFor squad building, that reinforces the same three-slot logic — a Break slot to interrupt boss patterns, a Heal or Regen slot to survive them, and a DPS slot to convert the openings. Their placement is the open question: the source presents them as co-op boss content added in the beta build and does not say whether they appear inside Heist of the Lost Isles, the Diamond Egg Heist, or a separate co-op activity as of 2026-09-02.\n\nThe full Closed Beta 3 addition list, including the trading system and the new creature roster, is on the [Aniimo closed beta and sign-ups](/closed-beta-and-signups) page.",
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
        title: "Fact boundary — 2026-09-02",
        body:
          "The Diamond Egg Heist format (up to six teams of three, secure and escort the diamond egg) and the co-op bosses Bubbask and Coraliz come from Twisted Voxel's Closed Beta 3 coverage and describe the beta build; the source does not state that either is part of Heist of the Lost Isles, and whether they ship unchanged at launch is not announced as of 2026-09-02. Reward structure and rank system for Heist of the Lost Isles are not announced as of 2026-09-02. The phase-by-phase role mapping and cache-priority guidance on this page are reasoning from the confirmed 3-player squad, the five-role taxonomy, and the published objectives — not an official strategy guide. Specific element-versus-element multipliers, boss mechanics, match length, solo play support, and the Lost Isles map layout are not announced as of 2026-09-02.",
      },
      {
        id: "heist-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- [Aniimo on Steam](https://store.steampowered.com/app/4126040/Aniimo) — `official/store` — checked `2026-09-02` — Heist of the Lost Isles mode framing and 3-player co-op.\n- [ComicBook.com: Aniimo preview](https://comicbook.com/gaming/feature/aniimo-preview/) — `media/interview` — checked `2026-09-02` — squad-as-combat-unit and objective coverage.\n- [Twisted Voxel: Aniimo Closed Beta 3](https://twistedvoxel.com/aniimo-set-for-q3-2026-launch-new-beta-announced/) — `media/interview` — checked `2026-09-02` — confirms the Diamond Egg Heist as up to six teams of three securing and escorting a diamond egg, and Bubbask and Coraliz as co-op bosses designed around group play.\n- [Aniimo official site](https://www.aniimo.com/) — `official/store` — checked `2026-09-02` — five-role taxonomy used for the phase mapping.",
      },
    ],
    faqIds: [
      "heist-squad-size",
      "heist-diamond-egg-format",
      "heist-squad-composition",
      "heist-co-op-bosses",
      "heist-rewards",
      "heist-solo-play",
    ],
    relatedPageIds: [
      "fixed-elements-and-roles-en-us",
      "fixed-idyll-regions-en-us",
      "fixed-closed-beta-and-signups-en-us",
      "fixed-twining-system-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-02",
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
