import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Aniimo Guides",
  brandMark: "An",
  gameName: "Aniimo",
  domain: "aniimo.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://aniimo.pro").replace(/\/$/, ""),
  description:
    "Aniimo guide hub for catch, Twining, type matchups, exploration, Egg Heist, progression, and active codes on Steam.",
  tagline:
    "Catch Aniimo, Twine into battle, master the nine elements, and clear Egg Heist with verified guides.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        wikiNavigation: "Guide index",
        homeDetails: "About this guide and recent updates",
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
        onThisPage: "On this page",
        answerContext: "More context",
      },
    },
  ],
  author: "aniimo.pro Guides",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Aniimo on Steam",
      href: "https://store.steampowered.com/app/4126040/Aniimo/",
      description: "Official Steam store page for Aniimo by Pawprint Studio.",
    },
  ],
  disclaimer:
    "Fan-made guide hub for Aniimo on Steam. All game facts reference the official Steam store page and launch materials from Pawprint Studio.",
};
