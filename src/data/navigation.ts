import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

// Site Plan IA: Launch status / Gameplay / World / Reception
export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/release-overview", labels: { "en-US": "Release status" } },
  { href: "/platforms-and-versions", labels: { "en-US": "Platforms" } },
  { href: "/system-requirements", labels: { "en-US": "System requirements" } },
  { href: "/pre-order-and-editions", labels: { "en-US": "Pre-order" } },
  { href: "/closed-beta-and-signups", labels: { "en-US": "Closed beta" } },
  { href: "/twining-system", labels: { "en-US": "Twining" } },
  { href: "/starter-and-prismana", labels: { "en-US": "Starter & Prismana" } },
  { href: "/evolution-and-stages", labels: { "en-US": "Evolution" } },
  { href: "/catching-and-aniipods", labels: { "en-US": "Catching & Aniipods" } },
  { href: "/elements-and-roles", labels: { "en-US": "Elements & Roles" } },
  { href: "/idyll-regions", labels: { "en-US": "Regions" } },
  { href: "/heist-of-the-lost-isles", labels: { "en-US": "Heist" } },
  { href: "/homeland-and-housing", labels: { "en-US": "Homeland" } },
  { href: "/companion-mode", labels: { "en-US": "Companion Mode" } },
  { href: "/potential-and-personality", labels: { "en-US": "Personality" } },
  { href: "/review-and-reception", labels: { "en-US": "Reception" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
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
