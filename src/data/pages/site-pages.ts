import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const sitePages: PageContent[] = [
  {
    id: "faq",
    translationKey: "faq",
    locale: "en-US",
    routeKind: "fixed",
    slug: "faq",
    url: "/faq",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `${site.gameName} FAQ`,
    seoTitle: `${site.gameName} FAQ | Common Questions`,
    metaDescription:
      "Answers to common Aniimo launch questions: release window, platforms, free-to-play model, PC specs, pre-registration rewards, and the Twining system.",
    summary:
      "Quick answers to the launch questions players ask about Aniimo before the 15-16 September 2026 unlock.",
    hero: {
      eyebrow: "FAQ",
      subtitle:
        "Get clear, source-aware answers to launch timing, platform support, the Twining system, and pre-registration.",
      ctas: [
        { label: "Release Info", href: "/release-overview" },
        { label: "Contact", href: "/contact" },
      ],
    },
    quickAnswer:
      "Aniimo launches 15-16 September 2026 on PS5, Xbox Series X|S, PC (Steam and Epic), iOS, and Android. It is free-to-play with a Twining merge mechanic, and pre-registration unlocks a reward ladder that includes a Smoky Stone-themed Aniipod.",
    keyFacts: [
      { label: "Launch window", value: "15-16 September 2026" },
      { label: "Platforms", value: "PS5, Xbox, PC, iOS, Android" },
      { label: "Pricing", value: "Free-to-play" },
    ],
    modules: [
      {
        id: "faq-policy",
        type: "prose",
        heading: "How answers are sourced",
        body:
          "Answers reference official store pages, developer statements, and preview coverage. Anything not yet confirmed by Pawprint Studio is flagged with a dated fact-boundary note rather than guessed.",
      },
    ],
    faqIds: [
      "home-when-release",
      "home-platforms",
      "home-free-to-play",
      "home-pc-spec",
      "home-pre-order",
    ],
    relatedPageIds: ["home", "fixed-release-overview-en-us", "about"],
    schemaTypes: ["FAQPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-08-29",
  },
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name}`,
    metaDescription:
      "About Aniimo Guide: an unofficial reference hub covering Aniimo's release, mechanics, world, and reception.",
    summary:
      "What Aniimo Guide covers, where its facts come from, and what readers should expect from the site.",
    hero: {
      eyebrow: "About",
      subtitle:
        "Aniimo Guide is an unofficial reference hub built on official sources and dated editorial checks.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      `${site.name} is an unofficial Aniimo reference hub. It tracks the release window, the Twining system, the Heist of the Lost Isles PvPvE mode, and preview reception, and it flags anything Pawprint Studio has not yet confirmed.`,
    keyFacts: [
      { label: "Status", value: "Unofficial fan guide" },
      { label: "Editorial rule", value: "Official sources first, dated fact boundaries elsewhere" },
      { label: "Scope", value: "Release, gameplay, world, reception" },
    ],
    modules: [
      {
        id: "mission",
        type: "prose",
        heading: "Mission",
        body:
          "Give Aniimo players one place to confirm launch timing, understand the Twining merge, and find the official sources behind every claim. Keep claims short, sourced, and easy to update when Pawprint Studio publishes new information.",
      },
      {
        id: "sourcing",
        type: "prose",
        heading: "Sourcing",
        body:
          "Launch facts come from the Aniimo official site, the Aniimo Steam store page, the Pawprint Studio studio page, and Game Trader Singapore coverage. Preview impressions are attributed to the original outlets and never presented as final reviews. Areas Pawprint Studio has not announced are marked with a dated fact-boundary note instead of filler text.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["contact", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-08-29",
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "Contact Aniimo Guide to send corrections, official source links, or feedback on the site's release and mechanics coverage.",
    summary:
      "Where to send corrections, official source updates, and feedback for Aniimo Guide.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Send corrections, source links, and feedback. Do not send private account details.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      "Use the contact channel to flag an error, send an official source link, or share feedback on a specific page. Please include the page URL and the source you are pointing us to.",
    keyFacts: [
      { label: "Best for", value: "Corrections and source links" },
      { label: "Include", value: "Page URL and dated source" },
      { label: "Do not send", value: "Private account credentials" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "How to reach us",
        body:
          "Send a message through the contact channel listed on this site. Include the page URL, the fact that needs updating, and a link to the official source. Allow a few business days for review.",
      },
      {
        id: "corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "If an Aniimo launch fact has changed (release date, platform support, PC spec, or pre-registration reward), point us to the new official source and we will update the page with the correct date.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-08-29",
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
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      "Aniimo Guide privacy policy: what data the site collects, how analytics and ads work, and how to contact the team.",
    summary:
      "What Aniimo Guide collects, how it is used, and what choices visitors have.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "Aniimo Guide does not run user accounts. It uses lightweight analytics when configured and only loads ads if a provider is enabled.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "Aniimo Guide uses basic server logs, optional Google Analytics 4 when configured, and optional third-party advertising. No accounts, no comments, no payments.",
    keyFacts: [
      { label: "Analytics", value: "GA4 only when configured" },
      { label: "Accounts", value: "No user accounts" },
      { label: "Ads", value: "Adsterra only when enabled" },
    ],
    modules: [
      {
        id: "data",
        type: "prose",
        heading: "Information we collect",
        body:
          "If GA4 is configured, the site sends aggregate usage information to Google Analytics according to GA4 settings. If advertising is enabled, the third-party ad provider may process technical request data and use cookies or similar technologies to deliver and measure ads. Server logs retain standard request metadata for a short period to operate the site.",
      },
      {
        id: "contact",
        type: "prose",
        heading: "Contact messages",
        body:
          "Messages sent through the contact channel are used only to respond to the sender and to update the site. Do not include sensitive personal information in your message.",
      },
      {
        id: "updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "This policy is updated whenever the analytics, hosting, contact methods, or advertising providers change. The last-reviewed date at the top of this page reflects the current version.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-08-29",
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      "Aniimo Guide terms of use: unofficial status, informational scope, accuracy disclaimers, and acceptable-use rules.",
    summary:
      "Aniimo Guide is an unofficial informational site. Use it for guidance, not as an official source.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Use Aniimo Guide for informational purposes. It is not affiliated with Pawprint Studio or the official Aniimo publisher.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "Aniimo Guide is an unofficial fan site. Use it for guidance, but rely on the official Aniimo channels for purchase, account, and platform decisions.",
    keyFacts: [
      { label: "Use", value: "Informational guide content" },
      { label: "Status", value: "Unofficial fan site" },
      { label: "Final word", value: "Official Aniimo channels" },
    ],
    modules: [
      {
        id: "unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "Aniimo Guide is not affiliated with Pawprint Studio, the Aniimo publisher, any platform holder, or any trademark owner. The site is operated by independent fans for reference and informational purposes only.",
      },
      {
        id: "accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Aniimo information can change as Pawprint Studio publishes updates. Use the official Aniimo channels for final purchase, account, platform, and release decisions.",
      },
      {
        id: "acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not scrape the site aggressively, interfere with service availability, or submit harmful content through the contact channel. Respect applicable local laws when using the site.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-08-29",
  },
];