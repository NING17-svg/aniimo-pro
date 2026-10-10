import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", supplementary: "collapsed" },
  h1: "Aniimo Guides",
  seoTitle: "Complete Aniimo Guides: Catch, Twine, and Win Every Battle",
  metaDescription:
    "Use these Aniimo guides to start your save right: catch Aniimo, Twine into your squad, manage the nine-element type chart, and run the Egg Heist loop.",
  summary:
    "Aniimo is a free-to-play, creature-catching open-world RPG by Pawprint Studio. Players catch Aniimo with Aniipods, Twine with them for combat and traversal, manage the nine-element type chart, and run the Egg Heist extraction mode on the Lost Isles.",
  hero: {
    eyebrow: "Steam guide hub",
    subtitle:
      "Catch Aniimo, Twine into battle, manage the nine elements, and clear Egg Heist with verified guides from a 100% Pawprint Studio source set.",
    ctas: [
      { label: "Open the beginner guide", href: "/guides/beginner-guide/" },
      { label: "Redeem active codes", href: "/guides/codes-and-rewards/" },
    ],
  },
  quickAnswer:
    "Aniimo is a free-to-play, creature-catching open-world RPG by Pawprint Studio. You play a Pathfinder exploring the continent of Idyll — catching over 100 creatures called Aniimo using devices called Aniipods, then Twining with them to inherit their combat skills and movement abilities. This site collects the practical guides to do that well: from the first Helion-or-Lunara choice through squad building, exploration, the World Tree, and the timed Egg Heist extraction mode.",
  keyFacts: [
    { label: "Game type", value: "Creature-catching open-world RPG on Steam" },
    { label: "Start here", value: "Beginner guide and active codes" },
    { label: "Coverage", value: "11 guides across 10 player task clusters" },
  ],
  modules: [
    {
      id: "start-here",
      type: "guide-index",
      heading: "Start here",
      columns: 1,
      groups: [
        {
          title: "Begin the save and claim launch rewards",
          items: [
            {
              label: "Aniimo beginner guide",
              href: "/guides/beginner-guide/",
              description:
                "First hours, Helion vs Lunara, day-one priorities and core unlocks.",
            },
            {
              label: "Aniimo codes and rewards",
              href: "/guides/codes-and-rewards/",
              description:
                "Redeem active codes for Glimmer, Growth Flowers, Aniipods, and Credits.",
            },
          ],
        },
      ],
    },
    {
      id: "catch-and-build",
      type: "guide-index",
      heading: "Catch and build",
      columns: 1,
      groups: [
        {
          title: "Aniipods, captures and starting roster",
          items: [
            {
              label: "Aniipod types and capture bonuses",
              href: "/guides/aniipods-types/",
              description:
                "The graded Pro, Mega, Hyper, Trace, Ultra pod series plus Tumbler and Sparkling Cubes.",
            },
            {
              label: "How to catch Aniimo in practice",
              href: "/guides/how-to-catch-aniimo/",
              description:
                "Throw mechanics, pod choice by target, Sparkling Cubes and group capture with Tumblers.",
            },
          ],
        },
      ],
    },
    {
      id: "combat-and-progression",
      type: "guide-index",
      heading: "Combat and progression",
      columns: 1,
      groups: [
        {
          title: "Twining, squads, elements, and growth",
          items: [
            {
              label: "Twining, Command vs Twine Mode, and squad roles",
              href: "/guides/twining-and-combat/",
              description:
                "Twining, Command Mode vs Twine Mode, and the role categories that fill a 4-slot squad.",
            },
            {
              label: "Team building and the Aniimo tier list",
              href: "/guides/team-building/",
              description:
                "Cover roles before elements, see early and mid-game examples, and read the current SS and S snapshot.",
            },
            {
              label: "Nine elements and type matchups",
              href: "/guides/elements-and-type-chart/",
              description:
                "Grass, Fire, Electric, Rock, Wind, Water, Holy, Dark, Ice with ×1.6 and ×0.625 modifiers.",
            },
            {
              label: "Aniimo evolution lines and requirements",
              href: "/guides/evolution-guide/",
              description:
                "The Emberpup to Inferlupa line example, the Umbral trade-off and Prismana evolution paths.",
            },
            {
              label: "Glimmer and the World Tree",
              href: "/guides/glimmer-world-tree/",
              description:
                "How to earn Glimmer, run the Branch from 10 to 150 Amber, plus 15 shared blessings.",
            },
          ],
        },
      ],
    },
    {
      id: "explore-idyll",
      type: "guide-index",
      heading: "Explore Idyll",
      columns: 1,
      groups: [
        {
          title: "Maps, regions and traversal",
          items: [
            {
              label: "Idyll interactive map and exploration tips",
              href: "/guides/maps-and-exploration/",
              description:
                "The 15 Idyll regions by level range, plus mobility-based exploration tips.",
            },
          ],
        },
      ],
    },
    {
      id: "homeland-and-endgame",
      type: "guide-index",
      heading: "Homeland and endgame",
      columns: 1,
      groups: [
        {
          title: "Farming, RV, and the Egg Heist extraction loop",
          items: [
            {
              label: "Homeland, RV, and farming",
              href: "/guides/homeland-rv-farming/",
              description:
                "Hatchinator, farmland tiles, workers, Bud Tickets and the Home Index buy-and-sell loop.",
            },
            {
              label: "Egg Heist strategy and maps",
              href: "/guides/egg-heist/",
              description:
                "Level 50 unlock, the core loop, 3-player squad roles, Sanctum routes and recommended comps.",
            },
          ],
        },
      ],
    },
  ],
  faqIds: [],
  relatedPageIds: [
    "guide-beginner-guide",
    "guide-codes-and-rewards",
    "guide-team-building",
    "guide-elements-and-type-chart",
    "guide-egg-heist",
  ],
  schemaTypes: ["WebSite", "CollectionPage"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-09",
};
