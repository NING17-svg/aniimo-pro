import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
  children?: LocalizedNavigationItem[];
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  {
    href: "/guides/beginner-guide/",
    labels: { "en-US": "Guides" },
    children: [
      { href: "/guides/beginner-guide/", labels: { "en-US": "Beginner guide" } },
      { href: "/guides/aniipods-types/", labels: { "en-US": "Aniipod types" } },
      { href: "/guides/how-to-catch-aniimo/", labels: { "en-US": "How to catch Aniimo" } },
      { href: "/guides/twining-and-combat/", labels: { "en-US": "Twining and combat" } },
      { href: "/guides/team-building/", labels: { "en-US": "Team building" } },
      { href: "/guides/elements-and-type-chart/", labels: { "en-US": "Nine elements" } },
      { href: "/guides/maps-and-exploration/", labels: { "en-US": "Maps and exploration" } },
      { href: "/guides/egg-heist/", labels: { "en-US": "Egg Heist" } },
      { href: "/guides/homeland-rv-farming/", labels: { "en-US": "Homeland and farming" } },
      { href: "/guides/evolution-guide/", labels: { "en-US": "Evolution guide" } },
      { href: "/guides/glimmer-world-tree/", labels: { "en-US": "Glimmer and World Tree" } },
    ],
  },
  { href: "/guides/codes-and-rewards/", labels: { "en-US": "Codes" } },
  { href: "/guides/team-building/", labels: { "en-US": "Tier List" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/guides/beginner-guide/", labels: { "en-US": "Beginner guide" } },
  { href: "/guides/codes-and-rewards/", labels: { "en-US": "Codes" } },
  { href: "/guides/team-building/", labels: { "en-US": "Team building" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}
