import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

// Site Plan declares no entity-driven /wiki hub; this index covers the four
// Site Plan clusters so visitors can browse all Aniimo reference pages in
// one place.
export const wikiPages: PageContent[] = [
  {
    id: "wiki",
    translationKey: "wiki",
    locale: "en-US",
    routeKind: "fixed",
    slug: "wiki",
    url: "/wiki",
    pageType: "wiki",
    presentation: { shell: "hub" },
    h1: `${site.gameName} Wiki`,
    seoTitle: `${site.gameName} Wiki | Reference Index`,
    metaDescription:
      "Reference wiki index for Aniimo, covering platforms, mechanics, and launch status.",
    summary:
      "Browse Aniimo's reference pages by Site Plan cluster: Launch status, Gameplay, World, and Reception.",
    hero: {
      eyebrow: "Wiki",
      subtitle:
        "Aniimo's wiki index. Authoritative pages live under Launch status, Gameplay, World, and Reception.",
      ctas: [
        { label: "Release status", href: "/release-overview" },
        { label: "Twining system", href: "/twining-system" },
      ],
    },
    quickAnswer:
      "Aniimo's wiki index points to the four Site Plan navigation groups. Use the Launch status pages for date and platform answers, the Gameplay pages for Twining, evolution, and catching, the World pages for regions and Heist, and the Reception page for previews.",
    keyFacts: [
      { label: "Wiki scope", value: "Index of the four Site Plan navigation groups" },
      { label: "Editorial rule", value: "Cite official, media, or wiki-reference sources" },
      { label: "Avoid", value: "Speculation and unverified mechanics" },
    ],
    modules: [
      {
        id: "wiki-organization",
        type: "prose",
        heading: "Wiki organization",
        body:
          "Aniimo's authoritative content lives in four Site Plan clusters: Launch status, Gameplay, World, and Reception. Each cluster has a hub-style page with linked fixed pages covering the planned search intents.",
        links: site.officialSources,
      },
    ],
    faqIds: [],
    relatedPageIds: ["home", "fixed-release-overview-en-us"],
    schemaTypes: ["CollectionPage", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-08-29",
  },
];
