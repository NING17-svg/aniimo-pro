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
  name: "Aniimo Guide",
  brandMark: "AG",
  gameName: "Aniimo",
  domain: "aniimo.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://aniimo.pro").replace(/\/$/, ""),
  description:
    "An unofficial Aniimo (Pawprint Studio) reference covering release status, platforms, Twining mechanics, starters, evolution, catching, PvPvE Heist of the Lost Isles, Homeland progression, and pre-launch reception for US English players.",
  tagline: "Aniimo launch reference, Twining mechanics, and early-game guidance for US players.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Aniimo Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Aniimo official site (Pawprint Interactive Entertainment)",
      href: "https://www.aniimo.com/",
      description: "Aniimo official homepage with pre-registration and global launch info.",
    },
    {
      label: "Aniimo Steam store page (AppID 4126040, Pawprint Studio)",
      href: "https://store.steampowered.com/app/4126040/Aniimo",
      description: "Steam store listing with PC release status, system requirements, and pre-launch beta history.",
    },
    {
      label: "Pawprint Studio official site",
      href: "https://www.pawprintstudio.com/",
      description: "Publisher and developer corporate site for Aniimo.",
    },
  ],
  disclaimer:
    "This is an unofficial Aniimo fan reference. All launch facts are sourced from the official Aniimo site and the Steam store page as of 2026-08-29. Unannounced details are labeled with dated status statements.",
};
