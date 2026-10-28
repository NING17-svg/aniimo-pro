import type { PageContent } from "@/types/content";

export const sitePages: PageContent[] = [
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "About Aniimo Guides",
    seoTitle: "About Aniimo Guides",
    metaDescription:
      "Learn what Aniimo Guides covers, how its pages are sourced, and how this independent fan guide relates to Pawprint Studio's game.",
    summary:
      "Aniimo Guides is an independent, unofficial guide site for Aniimo, with practical pages on catching, Twining, combat, exploration, progression, Egg Heist, and rewards.",
    hero: {
      eyebrow: "About this site",
      subtitle:
        "An independent guide hub for players looking for clear answers about Aniimo on Steam.",
      ctas: [{ label: "Start with the beginner guide", href: "/guides/beginner-guide/" }],
    },
    quickAnswer:
      "Aniimo Guides is a fan-made, unofficial reference site. It is not operated, approved, or endorsed by Pawprint Studio or the game's publisher.",
    keyFacts: [
      { label: "Coverage", value: "Player guides for Aniimo on Steam" },
      { label: "Operator relationship", value: "Independent and unofficial" },
      { label: "Primary game source", value: "Official Aniimo Steam store page" },
    ],
    modules: [
      {
        id: "independent-guide-site",
        type: "prose",
        heading: "Independent guide site",
        body:
          "Aniimo Guides is an independently operated fan resource about *Aniimo*. It is not the official game website and is not run or endorsed by Pawprint Studio or the publisher. The game itself is developed by Pawprint Studio; the official [Aniimo Steam page](https://store.steampowered.com/app/4126040/Aniimo/) is the primary source we use for store-listed facts.",
      },
      {
        id: "guide-coverage-and-review",
        type: "prose",
        heading: "What the guides cover",
        body:
          "The site organizes practical answers around player tasks: starting a save, catching Aniimo, building a squad, reading type matchups, exploring Idyll, progressing through Homeland systems, and playing Egg Heist. Pages are reviewed against the cited source material and updated when confirmed information changes. Unconfirmed details are identified rather than presented as established game facts.",
        links: [
          {
            label: "Beginner guide",
            href: "/guides/beginner-guide/",
            description: "Plan a first session and compare the two starter choices.",
          },
          {
            label: "PC system requirements",
            href: "/system-requirements/",
            description: "See the Windows specifications listed by Steam.",
          },
          {
            label: "Privacy policy",
            href: "/privacy-policy/",
            description: "How this guide site and embedded providers handle visitor data.",
          },
        ],
      },
      {
        id: "official-game-support",
        type: "prose",
        heading: "Official game information and support",
        body:
          "For official game announcements, account support, or questions about personal data held by the game operator, use [Pawprint Studio's website](https://pawprintstudio.com/) and its [Player Privacy Policy](https://pawprintstudio.com/privacy-policy/en). This site does not provide access to game accounts or handle game support requests.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["guide-beginner-guide", "system-requirements"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-28",
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Aniimo Guides Privacy Policy",
    seoTitle: "Privacy Policy | Aniimo Guides",
    metaDescription:
      "Read how Aniimo Guides handles website visits, analytics, advertising, external links, and privacy choices.",
    summary:
      "This policy explains the analytics, advertising, and hosting services that may process technical information when you visit Aniimo Guides.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "A plain-language summary of the services this guide site uses and where to find their current privacy controls.",
      ctas: [],
    },
    quickAnswer:
      "Aniimo Guides does not offer user accounts, comments, contact forms, or checkout. The site may load Google Analytics, Google AdSense, and Adsterra services; those providers may process technical or usage information under their own policies.",
    keyFacts: [
      { label: "Accounts or forms", value: "Not provided on this site" },
      { label: "Analytics", value: "Google Analytics 4 when configured" },
      { label: "Advertising", value: "Google AdSense and Adsterra placements" },
    ],
    modules: [
      {
        id: "information-collected-by-this-site",
        type: "prose",
        heading: "Information handled when you visit",
        body:
          "This guide site has no user registration, comments, contact form, or purchase checkout. The hosting platform may process standard technical request information to deliver pages and protect the service, such as a requested URL, network address, browser headers, and security events. This site does not ask you to submit account or payment details.",
      },
      {
        id: "analytics-and-advertising-services",
        type: "prose",
        heading: "Analytics and advertising services",
        body:
          "Google Analytics 4 may load when an analytics measurement ID is configured for this site. Google describes the default Analytics collection as including page usage, session statistics, approximate location, and browser and device information; it may use first-party cookies. Google AdSense scripts and Adsterra advertising or sponsored-link placements are also included. Depending on the page, device, and ad delivery, those third parties may use cookies or similar technologies and receive information from your browser. Their handling is governed by their own policies: [Google Analytics data collection](https://support.google.com/analytics/answer/11593727?hl=en), [Google privacy policy](https://policies.google.com/privacy), [Adsterra cookies policy](https://adsterra.com/cookies/), and [Cloudflare privacy policy](https://www.cloudflare.com/privacypolicy/).",
      },
      {
        id: "privacy-choices",
        type: "prose",
        heading: "Your browser and provider choices",
        body:
          "You can block or clear cookies through your browser settings. Google also provides an [Analytics opt-out browser add-on](https://tools.google.com/dlpage/gaoptout). Blocking cookies or third-party scripts can affect analytics and advertising behavior. This site does not provide an on-page consent preference tool; review the linked providers' current controls and policies for their services.",
      },
      {
        id: "game-operator-privacy-policy",
        type: "prose",
        heading: "The game's account data is separate",
        body:
          "This policy covers aniimo.pro, not an Aniimo game account or Pawprint Studio service. For game accounts or personal data handled by the game operator, read [Pawprint Studio's Player Privacy Policy](https://pawprintstudio.com/privacy-policy/en). External websites linked from this site set their own terms and privacy practices.",
      },
      {
        id: "policy-review-date",
        type: "prose",
        heading: "Policy updates",
        body:
          "This policy was reviewed on 28 October 2026. It may be updated if the site's analytics, advertising, or hosting setup changes. The date at the top-level page record shows the latest review.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "system-requirements"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-28",
  },
];
