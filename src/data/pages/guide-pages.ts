import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

// Site Plan declares no /guides hub as a fixed page; this index points to
// Aniimo's four guide clusters so visitors can find guides from one route.
export const guidePages: PageContent[] = [
  {
    id: "guides",
    translationKey: "guides",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides",
    url: "/guides",
    pageType: "guides",
    presentation: { shell: "hub" },
    h1: `${site.gameName} Guides`,
    seoTitle: `${site.gameName} Guides | Beginner's Index`,
    metaDescription:
      "Beginner's guide index for Aniimo, covering starter and Prismana, evolution, catching, and Heist.",
    summary:
      "Browse Aniimo guides by Site Plan cluster: Launch status, Gameplay, World, and Reception.",
    hero: {
      eyebrow: "Guides",
      subtitle:
        "Aniimo's guide index. Authoritative guides live under Launch status, Gameplay, World, and Reception.",
      ctas: [
        { label: "Starter & Prismana", href: "/starter-and-prismana" },
        { label: "Catching & Aniipods", href: "/catching-and-aniipods" },
      ],
    },
    quickAnswer:
      "Aniimo's guides cover starter choice and Prismana forms, the Lumin to Gamma to Nova evolution pipeline, catching with Aniipods, and the Heist of the Lost Isles PvPvE mode.",
    keyFacts: [
      { label: "Guide depth", value: "Index of the four Site Plan navigation groups" },
      { label: "Avoid", value: "Unverified builds, loot, maps, or quest steps" },
      { label: "Next upgrade", value: "Full guide pages as launch coverage expands" },
    ],
    modules: [
      {
        id: "guides-categories",
        type: "prose",
        heading: "Guide categories",
        body:
          "Aniimo's guide categories match the Site Plan clusters: Launch status, Gameplay, World, and Reception. Each category links to dedicated fixed pages.",
        links: site.officialSources,
      },
    ],
    faqIds: [],
    relatedPageIds: ["home", "fixed-starter-and-prismana-en-us"],
    schemaTypes: ["CollectionPage", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-08-29",
  },
];
