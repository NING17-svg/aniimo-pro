import type { PageContent } from "@/types/content";

const LAST_REVIEWED = "2026-10-09";

const RELATED_BEGINNER = [
  "guide-aniipods-types",
  "guide-how-to-catch-aniimo",
  "guide-twining-and-combat",
  "guide-codes-and-rewards",
];
const RELATED_ANIIPODS = [
  "guide-how-to-catch-aniimo",
  "guide-beginner-guide",
];
const RELATED_CATCHING = [
  "guide-aniipods-types",
  "guide-homeland-rv-farming",
];
const RELATED_TWINING = [
  "guide-team-building",
  "guide-elements-and-type-chart",
  "guide-beginner-guide",
];
const RELATED_TEAM = [
  "guide-elements-and-type-chart",
  "guide-twining-and-combat",
  "guide-egg-heist",
];
const RELATED_ELEMENTS = [
  "guide-team-building",
  "guide-twining-and-combat",
];
const RELATED_MAPS = [
  "guide-twining-and-combat",
  "guide-beginner-guide",
];
const RELATED_EGG = [
  "guide-team-building",
  "guide-elements-and-type-chart",
  "guide-homeland-rv-farming",
];
const RELATED_HOMELAND = [
  "guide-beginner-guide",
  "guide-egg-heist",
];
const RELATED_EVOLUTION = [
  "guide-team-building",
  "guide-glimmer-world-tree",
];
const RELATED_GLIMMER = [
  "guide-codes-and-rewards",
  "guide-evolution-guide",
];
const RELATED_CODES = [
  "guide-beginner-guide",
  "guide-glimmer-world-tree",
];

export const guidePages: PageContent[] = [
  // 1. beginner-guide
  {
    id: "guide-beginner-guide",
    translationKey: "guide-beginner-guide",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/beginner-guide",
    url: "/guides/beginner-guide",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Aniimo Beginner Guide and Starter Choice",
    seoTitle: "Aniimo Beginner Guide: First Hours, Starter Choice, Day One",
    metaDescription:
      "Aniimo beginner guide covering Helion vs Lunara starter choice, Day-one priorities, core systems to unlock early, catching tips, and squad progression tips.",
    summary:
      "A new Aniimo save starts with about 30 minutes of setup that locks in your first hours: link and verify email, pick a server, create your character, then choose Helion or Lunara as the starting Aniimo.",
    hero: {
      eyebrow: "Beginner guide",
      subtitle:
        "Plan the first session so you do not backtrack, then pick a starter with eyes open.",
      ctas: [],
    },
    quickAnswer:
      "A new Aniimo save starts with about 30 minutes of setup that locks in your first hours: link and verify email, pick a server, create your character, then choose Helion or Lunara as the starting Aniimo. The game then walks you into the Twining tutorial. Plan a few quiet minutes for the first session so you don't have to backtrack.",
    keyFacts: [
      { label: "Starter choice", value: "Helion or Lunara, both Light element" },
      { label: "First catch", value: "Emberpup using a Standard Aniipod" },
      { label: "First unlock", value: "Homeland RV through Prologue objectives" },
    ],
    modules: [
      {
        id: "pick-your-starter-helion-or-lunara",
        type: "comparison",
        heading: "Pick your starter: Helion or Lunara",
        options: [
          {
            name: "Helion",
            summary: "Melee burst, close-range damage. Uses Light typing.",
            bestFor: "Early fights that feel punchy and immediate.",
          },
          {
            name: "Lunara",
            summary: "Ranged, sustain-focused. Uses Light typing.",
            bestFor: "Players who prefer staying at range and leaning on regen.",
          },
        ],
      },
      {
        id: "starter-choice-rule",
        type: "prose",
        heading: "Both starters share Light and base stats",
        body: "Both Helion and Lunara share the Light element and identical base stats, with a 30% passive. The starter you don't pick may become obtainable later through story or events, but this isn't confirmed by any official source — don't plan around it. The starter choice is effectively irreversible for a long stretch of the game, so pick the creature you actually want to play rather than the \"stronger\" one. There is no \"wrong\" pick, but there is a pick you will live with for the first hours.",
      },
      {
        id: "day-one-priorities",
        type: "steps",
        heading: "Day-one priorities",
        items: [
          {
            title: "Open Mail and Events",
            body: "Claim every available reward: pre-registration milestones and launch rewards such as the Susuta Egg, Aniipod Ultras, and Sparkling Cubes. These are time-limited and the easiest source of premium catching tools.",
          },
          {
            title: "Run the early tutorials at Polaris Institute",
            body: "The story is tied to free launch rewards and teaches the core systems (Twining, catching, combat). Don't skip the dialog.",
          },
          {
            title: "Follow the main quest to Bloomville",
            body: "Follow the main quest until you reach Bloomville and the \"Chasing the Clouds\" quest. Many early guides assume you're at this point.",
          },
          {
            title: "Catch your first wild Aniimo (Emberpup)",
            body: "Use a Standard Aniipod — premium pods are wasted on the first catch.",
          },
        ],
      },
      {
        id: "core-systems-to-unlock-early",
        type: "entity-grid",
        heading: "Core systems to unlock early",
        items: [
          {
            title: "Bloom and teleport waypoints",
            summary: "Waypoints enable fast travel and become the difference between minutes and hours of backtracking.",
            href: "/guides/maps-and-exploration/",
          },
          {
            title: "Homeland / RV",
            summary: "Complete \"Prologue: The Mysterious RV\" and its Home Invitation objective. The Homeland is your hatchery, crafting bench, and stamina upgrade station.",
            href: "/guides/homeland-rv-farming/",
          },
          {
            title: "Talents",
            summary: "Talents compound with squad upgrades, so the sooner they level up the more fights you can sustain.",
            href: "/guides/twining-and-combat/",
          },
          {
            title: "Lumin Amber alerts",
            summary: "Each alert upgrades a region branch (see World Tree) and pays out Glimmer over time.",
            href: "/guides/glimmer-world-tree/",
          },
          {
            title: "Hatchers full",
            summary: "Eggs incubate in the background while you explore; empty hatchers are lost time.",
            href: "/guides/homeland-rv-farming/",
          },
        ],
      },
      {
        id: "catching-discipline",
        type: "prose",
        heading: "Catching discipline",
        body: "You have a small stack of premium Aniipods early. Don't burn them: use Standard Aniipods for common, low-tier Aniimo and save Aniipod Ultras, Pros, Megas, and other premium pods for Alpha Aniimo and rare spawns. An Aniipod is consumed the moment it lands regardless of capture result — check the displayed catch chance before throwing. Protect the Sparkling Cube: it guarantees capture and Perfect Potential. When possible, trade 100 Sparkling Crystals at an outpost vendor for one and reserve it for a high-value target.",
      },
      {
        id: "squad-and-progression-discipline",
        type: "prose",
        heading: "Squad and progression discipline",
        body: "Squads are 4 Aniimo slots, built around roles (DPS, Break, Healing / Regen, Energy / Support) with at least two elements covered. Catch every new species you see — duplicates help find better Potential individuals — but don't level every Aniimo caught. Spend upgrade materials only on long-term team members. If you feel stuck, check Elite Training and Tripper level objectives before grinding random enemies. Don't rush the free rare Prismana pick at Junior Wayfarer rank (claimed at level 40 from 14 options). Wait until you know what role your team actually needs — picking early locks you into a role you might replace ten hours later.",
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_BEGINNER,
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
    adAnchors: [
      { after: "core-systems-to-unlock-early", slot: "guide-section-break" },
    ],
  },
  // 2. aniipods-types
  {
    id: "guide-aniipods-types",
    translationKey: "guide-aniipods-types",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/aniipods-types",
    url: "/guides/aniipods-types",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Aniimo Aniipod Types and Capture Bonuses",
    seoTitle: "Aniimo Aniipod Types: Pro, Mega, Hyper, Trace, Ultra Pods",
    metaDescription:
      "Aniimo Aniipod types list: the graded series Aniipod, Pro, Mega, Hyper, Trace, Ultra, plus the Tumbler, Sparkling Cubes, and Lumin Shards support items.",
    summary:
      "Aniipods are the catching devices used to capture Aniimo. They were developed by Polaris Institute researchers using Lumintech, inspired by Ancient Idyllian civilization ruins.",
    hero: {
      eyebrow: "Aniipod types",
      subtitle:
        "Standard Aniipod through Ultra, Tumbler route capture, and Sparkling Cube potential.",
      ctas: [],
    },
    quickAnswer:
      "Aniipods are the catching devices used to capture Aniimo. They were developed by Polaris Institute researchers using Lumintech, inspired by Ancient Idyllian civilization ruins. The full Aniipod family is a graded series, and each tier trades catch rate, throw speed, or special behavior for increasingly rare drops.",
    keyFacts: [
      { label: "Series count", value: "Six pods (Aniipod to Ultra) plus Tumbler" },
      { label: "Catch math", value: "Pro 1.5x, Mega 2x; Tumbler 6x with Nourishment" },
      { label: "Best rare tool", value: "Aniipod Ultra is guaranteed; Sparkling Cube adds Perfect Potential" },
    ],
    modules: [
      {
        id: "standard-aniipods",
        type: "data-table",
        heading: "Standard Aniipods",
        columns: [
          { key: "pod", label: "Pod" },
          { key: "effect", label: "Effect" },
        ],
        rows: [
          { pod: "Aniipod", effect: "Basic catching device. No bonus modifier. Use on common, low-tier Aniimo." },
          { pod: "Aniipod Pro", effect: "First upgrade tier. Adds 1.5x Capture Chance." },
          { pod: "Aniipod Mega", effect: "Second upgrade tier. Adds 2x Capture Chance." },
          { pod: "Aniipod Hyper", effect: "Advanced tier. Keeps the 2x Capture Chance and adds increased toss speed. Useful in harder timing windows where a slow throw would miss." },
          { pod: "Aniipod Trace", effect: "Advanced tier. Eagle-eye lock system that automatically tracks nearby Aniimo after the pod is tossed. Keeps the 2x Capture Chance. Useful when the target is moving or at range." },
        ],
      },
      {
        id: "rare-and-specialty-pods",
        type: "comparison",
        heading: "Rare and specialty pods",
        options: [
          {
            name: "Aniipod Ultra",
            summary: "Rare-tier Aniipod that guarantees a successful Aniimo capture. Used in the most important catches; consumes on impact just like every other pod.",
            bestFor: "Alpha Aniimo and rare spawns where a guaranteed catch matters more than potential quality.",
          },
          {
            name: "Tumbler",
            summary: "Specialty item inspired by Nimbi rolling down grassy slopes. The Tumbler rolls along its path and captures every Aniimo it touches, doubles the base catch rate, and multiplies that rate by 6x for Aniimo drawn together by the Nourishment effect.",
            bestFor: "Group capture with Lumin Shards and Nourishment clusters.",
          },
        ],
      },
      {
        id: "support-items",
        type: "comparison",
        heading: "Support items",
        options: [
          {
            name: "Sparkling Cube",
            summary: "A charm / accessory that signifies a Pathfinder. It grants capture-related benefits and produces Perfect Potential on the resulting creature rather than acting as a direct catch multiplier. The starter event hands out cubes during its second phase (collect 10 Prismana Aniimo).",
            bestFor: "One-shot, high-value targets where Perfect Potential is the goal.",
          },
          {
            name: "Lumin Shards",
            summary: "Used to attract wild Aniimo to gathering spots, so they can be funneled into a Tumbler's path or hit with a higher catch-rate pod.",
            bestFor: "Group capture setups and Tumbler routes.",
          },
        ],
      },
      {
        id: "where-to-get-premium-pods",
        type: "prose",
        heading: "Where to get premium pods",
        body: "Pre-registration launch rewards distributed Aniipod Ultras and Tumblers through milestone events. Notable sources included the 15M pre-registration milestone (1x Aniipod Ultra) and forming a full 6-member squad (1x Aniipod Ultra per team member). Treat any Aniipod Ultra you receive this way as a one-shot tool for the catch that matters most. Don't spend it on the first wild Aniimo you see.",
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_ANIIPODS,
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  // 3. how-to-catch-aniimo
  {
    id: "guide-how-to-catch-aniimo",
    translationKey: "guide-how-to-catch-aniimo",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/how-to-catch-aniimo",
    url: "/guides/how-to-catch-aniimo",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "How to Catch Aniimo in Practice",
    seoTitle: "How to Catch Aniimo: Throw, Pod Choice, Sparkling Cubes",
    metaDescription:
      "How to catch Aniimo: throw workflow, the right pod tier for each target, Sparkling Cube strategy, Tumbler group capture, plus Aniilog completion tips.",
    summary:
      "Pull out an Aniipod (right-click on PC), aim, and throw. The pod is consumed the moment it lands, success or not, so aim and timing matter more than the pod tier.",
    hero: {
      eyebrow: "How to catch Aniimo",
      subtitle: "Right-click to throw, watch the catch chance, and match the pod to the target.",
      ctas: [],
    },
    quickAnswer:
      "Pull out an Aniipod (right-click on PC), aim, and throw. The pod is consumed the moment it lands, success or not, so aim and timing matter more than the pod tier. Use this workflow every time: spot the target, weaken it with Break damage, and pick the pod that matches the displayed catch chance.",
    keyFacts: [
      { label: "Throw input", value: "Right-click on PC, aim and throw" },
      { label: "Best starter throw", value: "Standard Aniipod for common Aniimo" },
      { label: "Best one-shot tool", value: "Sparkling Cube for Perfect Potential" },
    ],
    modules: [
      {
        id: "the-catch-workflow",
        type: "steps",
        heading: "The catch workflow",
        items: [
          {
            title: "Spot the target and check its element",
            body: "The catch chance is shown before you throw — read it.",
          },
          {
            title: "Approach sleeping or unaware Aniimo",
            body: "Higher catch rates on oblivious targets.",
          },
          {
            title: "Use Break damage from attacks to weaken the target",
            body: "Lower HP means a higher catch chance.",
          },
          {
            title: "Throw the right pod for the situation",
            body: "Match pod tier to the encounter (see below).",
          },
          {
            title: "If the pod lands but the Aniimo breaks free",
            body: "The pod is still consumed. Don't retry on the same target with the same tier — switch targets or switch pods.",
          },
        ],
      },
      {
        id: "pod-choice-by-target",
        type: "entity-grid",
        heading: "Pod choice by target",
        items: [
          {
            title: "Common, low-tier Aniimo",
            summary: "Standard Aniipod. Premium pods are wasted here.",
          },
          {
            title: "Mid-tier encounters",
            summary: "Aniipod Pro or Mega. Use the displayed catch chance to decide; 2x Mega usually clears mid-tier encounters comfortably.",
          },
          {
            title: "Alpha Aniimo and rare spawns",
            summary: "Aniipod Ultra (guaranteed) or a Sparkling Cube (guaranteed + Perfect Potential). Save these.",
          },
          {
            title: "Moving or distant targets",
            summary: "Aniipod Hyper (faster toss) or Aniipod Trace (auto-tracks after toss).",
          },
        ],
      },
      {
        id: "sparkling-cubes",
        type: "prose",
        heading: "Sparkling Cubes",
        body: "A Sparkling Cube is the highest-value tool a player has: it guarantees capture, delivers Perfect Potential on the resulting creature, and is easy to source by trading 100 Sparkling Crystals at an outpost vendor. The starter event second phase — collect 10 Prismana Aniimo — also rewards one. Treat the Cube as a one-shot — pick a rare Aniimo or an Alpha you specifically want at Perfect Potential and use the Cube there. Don't test it on a common spawn.",
      },
      {
        id: "group-capture-with-tumblers",
        type: "steps",
        heading: "Group capture with Tumblers",
        items: [
          {
            title: "Throw Lumin Shards at a gathering spot",
            body: "Lure wild Aniimo around the node.",
          },
          {
            title: "Send a Tumbler through the cluster",
            body: "The Tumbler doubles the base catch rate and applies a 6x multiplier for the grouped Aniimo.",
          },
        ],
      },
      {
        id: "catching-for-completion",
        type: "prose",
        heading: "Catching for completion",
        body: "For Aniilog and region-progress reasons, catch one specimen for every visibly different field role. The Aniilog doubles as a progression tool — it surfaces habitat clues that lead to new routes and shortcuts. Keep at least one fast-traversal Aniimo ready (Fly, Climb, Dig, or Hustle). When the Aniilog points to a new habitat you can't reach, Twining into that fast-traversal Aniimo is usually the unlock.",
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_CATCHING,
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
    adAnchors: [
      { after: "pod-choice-by-target", slot: "guide-section-break" },
    ],
  },
  // 4. twining-and-combat
  {
    id: "guide-twining-and-combat",
    translationKey: "guide-twining-and-combat",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/twining-and-combat",
    url: "/guides/twining-and-combat",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Twining, Command vs Twine Mode, and Squad Roles",
    seoTitle: "Aniimo Twining System: Command Mode, Twine Mode, Squad Roles",
    metaDescription:
      "Aniimo Twining system explained: Twining for combat and traversal, 20 mobility abilities, Command Mode vs Twine Mode, and the DPS, Break, Heal roles in a squad.",
    summary:
      "Twining is Aniimo's signature mechanic: you merge with a collected Aniimo and inherit its abilities, effectively becoming the creature.",
    hero: {
      eyebrow: "Twining and combat",
      subtitle: "Twining for battle and traversal, plus Command vs Twine Mode and squad roles.",
      ctas: [],
    },
    quickAnswer:
      "Twining is Aniimo's signature mechanic: you merge with a collected Aniimo and inherit its abilities, effectively becoming the creature. Everything combat and traversal-related flows from this single decision — which Aniimo are you currently Twined into? Squads are built around roles and elemental matchups, and Command Mode vs Twine Mode determines how much direct control you have in any given fight.",
    keyFacts: [
      { label: "Modes", value: "Command (auto) and Twine (manual)" },
      { label: "Squad size", value: "4 Aniimo slots over up to 5 role categories" },
      { label: "Element set", value: "9 elements with ×1.6 / ×0.625 modifiers" },
    ],
    modules: [
      {
        id: "what-twining-gives-you",
        type: "entity-grid",
        heading: "What Twining gives you",
        items: [
          {
            title: "Combat skill set",
            summary: "Use the Aniimo's full skill set to deal damage and exploit elemental affinities (Fire, Ice, Dark, Electric, Grass, Water, Rock, Wind, Light).",
          },
          {
            title: "Traversal abilities",
            summary: "Use the Aniimo's unique movement abilities to traverse Idyll — flight, diving, burrowing, sprinting, climbing, grappling, and more.",
          },
          {
            title: "Exploration puzzles and shortcuts",
            summary: "Solve exploration puzzles, find hidden chests, and reach high platforms or shortcuts that the human form can't access.",
          },
        ],
      },
      {
        id: "mobility-abilities",
        type: "data-table",
        heading: "Mobility abilities",
        columns: [
          { key: "category", label: "Category" },
          { key: "abilities", label: "Abilities" },
        ],
        rows: [
          { category: "Fly and glide", abilities: "Take Off, Cloudwalk" },
          { category: "Swim", abilities: "Swim" },
          { category: "Climb", abilities: "Climb" },
          { category: "Dig", abilities: "Tunnel, Dig In" },
          { category: "Go fast", abilities: "Hustle, Scurry, Fast and Furious" },
          { category: "Jump higher", abilities: "High Jump, Puff Up" },
          { category: "Light up", abilities: "Glow, Luminous Seed" },
          { category: "Cloak", abilities: "Cloak (stealth passages)" },
          { category: "Detect and observe", abilities: "Detection, Bilateral" },
          { category: "Grapple", abilities: "Hookshot" },
          { category: "Bubbles and floating", abilities: "Floaty Bubble, Bubble Drift" },
          { category: "Other", abilities: "Blooming, Head Hammer" },
        ],
      },
      {
        id: "command-mode-vs-twine-mode",
        type: "comparison",
        heading: "Command Mode vs Twine Mode",
        options: [
          {
            name: "Command Mode",
            summary: "The game controls your Aniimo automatically. Positioning, preparation, and elemental matchups matter more than direct input. Works fine for routine mob fights but becomes very hard on tougher enemies that require precise positioning, dodging, or scripted mechanics.",
            bestFor: "Routine encounters and grinding sessions.",
          },
          {
            name: "Twine Mode",
            summary: "You manually pilot your Aniimo. Essential for encounters that demand precise dodges, movement, or positioning. Real-time combos, abilities, dodging, and movement are only available in Twine Mode.",
            bestFor: "Boss fights and enemies that punish auto-pilot behavior.",
          },
        ],
      },
      {
        id: "squad-combat",
        type: "prose",
        heading: "Squad combat",
        body: "Squads are 4 Aniimo slots. While one Aniimo is in Twine (under your direct control), the other three act autonomously or on simple commands. Rotating Aniimo in and out of Twine lets you swap elemental matchups, exploit weakness windows, and manage ability cooldowns. Elemental strengths and weaknesses from the nine-element type system drive most fights. Always check the target's element before swapping into Twine.",
      },
      {
        id: "squad-roles",
        type: "entity-grid",
        heading: "Squad roles",
        items: [
          {
            title: "DPS (Attacker)",
            summary: "Primary damage dealer. Targets enemy weaknesses and finishes opponents. Fire, Electric, and Dark Aniimo are commonly selected for this role.",
          },
          {
            title: "Break (Breaker)",
            summary: "Frontline Aniimo specialized in disrupting enemy defenses, shields, and stagger mechanics. Builds break meter to stagger enemies.",
          },
          {
            title: "Heal (Healer)",
            summary: "Sustain role. Restores HP, removes debuffs, and provides shields. Often decides the outcome of tough encounters.",
          },
          {
            title: "Support (Supporter)",
            summary: "Utility role that buffs allies, debuffs enemies, or provides utility.",
          },
          {
            title: "Energy Recovery",
            summary: "Generates energy for the team and keeps ability rotations flowing.",
          },
        ],
      },
      {
        id: "squad-composition-guidance",
        type: "prose",
        heading: "Practical composition guidance",
        body: "Avoid four pure DPS — a working setup covers all four roles while keeping at least two different elements. Common archetypes: one Breaker + one Healer + two Attackers, or two Breakers + one Healer + one Attacker, varying by encounter. Don't obsess over perfect stats on early catches; build a functional team first, then replace weak members as better Aniimo appear. Mix roles rather than collecting three creatures solving the same problem. The official in-game Aniimo index separates creatures by role. Starters recommended for first bonds include Helion, Lunara, and Besauce — all functional before the first roster is built.",
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_TWINING,
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
    adAnchors: [
      { after: "command-mode-vs-twine-mode", slot: "guide-section-break" },
    ],
  },
  // 5. team-building
  {
    id: "guide-team-building",
    translationKey: "guide-team-building",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/team-building",
    url: "/guides/team-building",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Team Building and the Aniimo Tier List",
    seoTitle: "Aniimo Team Building Guide: Squad Roles, Elements, Tier List",
    metaDescription:
      "Aniimo team building guide: cover roles then elements across a 4-slot squad, see early and mid-game examples, and read the current SS and S tier list snapshot.",
    summary:
      "A 4-Aniimo squad is built by covering four roles and maintaining at least two different elements for type advantage.",
    hero: {
      eyebrow: "Team building",
      subtitle: "Cover roles, then elements, then check the tier list snapshot.",
      ctas: [],
    },
    quickAnswer:
      "A 4-Aniimo squad is built by covering four roles — DPS + Break + Regen + (Healer or Support) — and maintaining at least two different elements for type advantage. The tier list below shows the current meta snapshot; the build principles show you how to use it without rebuilding your team every patch.",
    keyFacts: [
      { label: "Squad size", value: "4 Aniimo slots, 5 role categories" },
      { label: "Element rule", value: "At least 2 different elements in any squad" },
      { label: "Tier list", value: "89 ranked entries, SS to D, Version 1.0 snapshot" },
    ],
    modules: [
      {
        id: "how-to-build-a-squad",
        type: "steps",
        heading: "How to build a squad",
        items: [
          {
            title: "Roles first, elements second",
            body: "Cover all four roles before optimizing for elemental coverage.",
          },
          {
            title: "Bring a Breaker",
            body: "Breakers create damage windows; without one, fights drag and DPS never lands.",
          },
          {
            title: "Cover at least two different elements",
            body: "The nine-element type system gives significant damage bonuses, so an all-Grass squad dies to the first Wind-type boss.",
          },
          {
            title: "Adjust to enemy matchup",
            body: "Need more energy? Swap in a Regen unit. Too squishy? Add a Healer. Fights dragging? Boost DPS or Break power.",
          },
          {
            title: "Use the in-game Team Builder",
            body: "It evaluates your 4-slot squad out of 100 and produces a shareable link.",
          },
        ],
      },
      {
        id: "skill-elements-note",
        type: "callout",
        tone: "tip",
        title: "Skill elements can differ from the Aniimo's element",
        body: "An Aniimo's element isn't the same as each of its individual skills' elements — check each skill in combat before assuming a matchup applies.",
      },
      {
        id: "early-game-team-example",
        type: "entity-grid",
        heading: "Early-game team example",
        items: [
          {
            title: "Tank (HP mitigation) — Waleetle (Rock, S-tier, trait +20%)",
            summary: "Anchors the squad with HP mitigation and Rock-type bulk.",
          },
          {
            title: "DPS carry — Thornblade (Grass, SS, trait +40%)",
            summary: "Trait scales with HP loss; punishes low-HP foes.",
          },
          {
            title: "Support — Fennelun or Lunara (S, trait +40%)",
            summary: "Strongest buff scaling; both are strong S-tier picks.",
          },
          {
            title: "Flex — Soleon or Helion (S-tier)",
            summary: "All-rounder slot that keeps two elements (Rock + Grass with a Light support).",
          },
        ],
      },
      {
        id: "mid-game-team-example",
        type: "entity-grid",
        heading: "Mid-game team example",
        items: [
          {
            title: "Slot 1 DPS — Thornblade or Irisalis",
            summary: "Top Grass damage carry.",
          },
          {
            title: "Slot 2 Tank — Grizbo or Minespine",
            summary: "Rock tank bulk; Minespine has the highest HP in tier.",
          },
          {
            title: "Slot 3 Support / Heal — Lunara",
            summary: "Best +40% support scaler.",
          },
          {
            title: "Slot 4 Elemental coverage — Sherro, Fulminitis, or Glynsera",
            summary: "Swap to whatever element the current boss line is weak to.",
          },
        ],
      },
      {
        id: "current-tier-list-snapshot",
        type: "data-table",
        heading: "Current tier list snapshot (SS Tier)",
        columns: [
          { key: "name", label: "Aniimo" },
          { key: "element", label: "Element" },
          { key: "atk", label: "ATK" },
          { key: "hp", label: "HP" },
          { key: "trait", label: "Trait" },
          { key: "score", label: "Score" },
        ],
        rows: [
          { name: "Thornblade", element: "Grass", atk: "323", hp: "7,818", trait: "+40%", score: "78" },
          { name: "Irisalis", element: "Grass (Legendary)", atk: "348", hp: "6,533", trait: "—", score: "77" },
          { name: "Grizbo", element: "Rock", atk: "332", hp: "8,246", trait: "+15%", score: "76" },
          { name: "Scorchhowl", element: "Fire", atk: "318", hp: "7,764", trait: "+25%", score: "75" },
          { name: "Waleetle", element: "Rock", atk: "305", hp: "7,496", trait: "+20%", score: "74" },
          { name: "Pawney", element: "Dark", atk: "334", hp: "7,496", trait: "—", score: "72" },
          { name: "Ignitis", element: "Dark", atk: "334", hp: "7,496", trait: "+25%", score: "72" },
          { name: "Cornet", element: "Wind", atk: "323", hp: "6,211", trait: "+5%", score: "71" },
          { name: "Minespine", element: "Rock", atk: "240", hp: "8,568", trait: "—", score: "71" },
        ],
      },
      {
        id: "tier-list-s-tier",
        type: "data-table",
        heading: "S tier standouts",
        columns: [
          { key: "name", label: "Aniimo" },
          { key: "element", label: "Element" },
          { key: "trait", label: "Trait" },
          { key: "score", label: "Score" },
        ],
        rows: [
          { name: "Irisal", element: "Grass", trait: "+15%", score: "70" },
          { name: "Soleon", element: "—", trait: "+15%", score: "70" },
          { name: "Fennelun / Lunara", element: "—", trait: "+40% (best trait scalers)", score: "70" },
          { name: "Infergon", element: "Fire", trait: "—", score: "68" },
          { name: "Sherro", element: "Water", trait: "+20%", score: "68" },
          { name: "Glynsera", element: "Ice", trait: "+11%", score: "66" },
          { name: "Fulminitis", element: "Electric", trait: "Top raw ATK 348", score: "65" },
        ],
      },
      {
        id: "element-patterns",
        type: "prose",
        heading: "Element patterns",
        body: "Grass dominates SS with Thornblade + Irisalis leading; Rock offers the tankiest walls (Minespine 8,568 HP, Grizbo 8,246 HP); Dark provides top trait-scaling bruisers (Ignitis +25%). Fire / Dark dual-type Loris Lup and Rock / Grass dual-type Shrubclaw appear in S.",
      },
      {
        id: "how-to-use-the-tier-list",
        type: "prose",
        heading: "How to use the tier list",
        body: "A tier list is a snapshot, not a rulebook. Don't rebuild your team around a tier-list shuffle every patch — the meta is still shifting in Version 1.0. Use SS units as goals — the early-game team example already routes Thornblade and Lunara in for that reason. Replace weak members as better Aniimo appear naturally. Don't burn Sparkling Cubes chasing a tier change you'll regret. The official in-game Team Builder (out of 100, shareable link) is the daily tool; the tier list is the long-view plan.",
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_TEAM,
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
    adAnchors: [
      { after: "current-tier-list-snapshot", slot: "guide-section-break" },
    ],
  },
  // 6. elements-and-type-chart
  {
    id: "guide-elements-and-type-chart",
    translationKey: "guide-elements-and-type-chart",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/elements-and-type-chart",
    url: "/guides/elements-and-type-chart",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Nine Elements and Type Matchups",
    seoTitle: "Aniimo Type Chart: Nine Elements and Matchups Explained",
    metaDescription:
      "Aniimo type chart for the nine elements: super effective and not very effective matchups for Grass, Fire, Electric, Rock, Wind, Water, Holy, Dark, and Ice.",
    summary:
      "Aniimo uses a nine-element system: Grass, Fire, Electric, Rock, Wind, Water, Holy, Dark, and Ice, with ×1.6 super effective and ×0.625 not very effective modifiers.",
    hero: {
      eyebrow: "Nine elements",
      subtitle: "Read the counter-pick table before swapping into Twine.",
      ctas: [],
    },
    quickAnswer:
      "Aniimo uses a nine-element system: Grass, Fire, Electric, Rock, Wind, Water, Holy, Dark, and Ice. Damage modifiers on matchups are ×1.6 for super effective and ×0.625 for not very effective; neutral matchups don't modify damage. There is no immunity system — multipliers only range from ×0.625 to ×1.6.",
    keyFacts: [
      { label: "Elements", value: "9 (Grass, Fire, Electric, Rock, Wind, Water, Holy, Dark, Ice)" },
      { label: "Modifiers", value: "×1.6 super effective, ×0.625 not very effective" },
      { label: "No immunity", value: "All matchups fall between ×0.625 and ×1.6" },
    ],
    modules: [
      {
        id: "the-nine-elements",
        type: "entity-grid",
        heading: "The nine elements",
        items: [
          { title: "1. Grass", summary: "Effective against Water and Rock. Weak to Fire, Wind, and Dark." },
          { title: "2. Fire", summary: "Effective against Grass and Ice. Weak to Water and Dark." },
          { title: "3. Electric", summary: "Effective against Water and Wind. Weak to Rock and Ice." },
          { title: "4. Rock", summary: "Effective against Electric and Ice. Weak to Grass and Water." },
          { title: "5. Wind", summary: "Effective against Grass and Dark. Weak to Electric and Holy." },
          { title: "6. Water", summary: "Effective against Fire and Rock. Weak to Grass, Electric, and Ice." },
          { title: "7. Holy", summary: "Effective against Wind and Dark. Weak to Dark." },
          { title: "8. Dark", summary: "Effective against Fire, Grass, and Holy. Weak to Wind and Holy." },
          { title: "9. Ice", summary: "Effective against Water and Electric. Weak to Fire and Rock." },
        ],
      },
      {
        id: "dual-type-and-skills",
        type: "prose",
        heading: "Dual types and skill elements",
        body: "Aniimo can have single or dual types. Named dual-types include Inferlupa (Dark / Fire), Glacy (Ice / Water), and Leafy (Water / Grass). Individual skills can also have elements that differ from the Aniimo's primary element — check each skill in combat before assuming a matchup applies.",
      },
      {
        id: "super-effective-against",
        type: "data-table",
        heading: "Super effective against (×1.6)",
        columns: [
          { key: "attacker", label: "Attacker" },
          { key: "targets", label: "Targets" },
        ],
        rows: [
          { attacker: "Grass", targets: "Water, Rock" },
          { attacker: "Fire", targets: "Grass, Ice" },
          { attacker: "Electric", targets: "Water, Wind" },
          { attacker: "Rock", targets: "Electric, Ice" },
          { attacker: "Wind", targets: "Grass, Dark" },
          { attacker: "Water", targets: "Fire, Rock" },
          { attacker: "Holy", targets: "Wind, Dark" },
          { attacker: "Dark", targets: "Fire, Grass, Holy" },
          { attacker: "Ice", targets: "Water, Electric" },
        ],
      },
      {
        id: "not-very-effective-against",
        type: "data-table",
        heading: "Not very effective against (×0.625)",
        columns: [
          { key: "attacker", label: "Attacker" },
          { key: "targets", label: "Targets" },
        ],
        rows: [
          { attacker: "Grass", targets: "Fire, Wind, Dark" },
          { attacker: "Fire", targets: "Water, Dark" },
          { attacker: "Electric", targets: "Rock, Ice" },
          { attacker: "Rock", targets: "Grass, Water" },
          { attacker: "Wind", targets: "Electric, Holy" },
          { attacker: "Water", targets: "Grass, Electric, Ice" },
          { attacker: "Holy", targets: "Dark" },
          { attacker: "Dark", targets: "Wind, Holy" },
          { attacker: "Ice", targets: "Fire, Rock" },
        ],
      },
      {
        id: "practical-application",
        type: "prose",
        heading: "Practical application",
        body: "Type matchups apply significant damage bonuses, so maintaining at least two different elements in any 4-slot squad is recommended to keep a usable matchup on hand. The community tier list notes Grass as the leading SS element (Thornblade, Irisalis both Grass) and Rock as the leading defensive element. Grass counter-picks Rock and Water; Rock counter-picks Electric and Ice. Knowing two counter-pick directions is enough for most boss fights. Dual-type rules aren't officially documented — when you face a dual-type boss, apply the worst matchup against the lineup you have, not the best. A Grass / Dark weakness to Fire gives a ×1.6; a Grass / Dark resistance to Water gives a ×0.625. Plan both. For each element, keep at least one Aniimo on your roster with a super-effective matchup against the two most common opposing elements. That keeps your squad useful across Idyll's region-by-region bosses.",
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_ELEMENTS,
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
    adAnchors: [
      { after: "super-effective-against", slot: "guide-section-break" },
    ],
  },
  // 7. maps-and-exploration
  {
    id: "guide-maps-and-exploration",
    translationKey: "guide-maps-and-exploration",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/maps-and-exploration",
    url: "/guides/maps-and-exploration",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Idyll Interactive Map and Exploration Tips",
    seoTitle: "Aniimo Interactive Map: 15 Idyll Regions and Exploration",
    metaDescription:
      "Aniimo interactive map covers the 15 Idyll regions by level range, Aniimo count, points of interest, and nomad challenges, plus mobility-based exploration tips.",
    summary:
      "Aniimo ships with an in-game interactive map of Idyll broken into 15 named regions. Crescent Bay is currently the only region not yet placed on the interactive map.",
    hero: {
      eyebrow: "Maps and exploration",
      subtitle: "Plan a route by level range, then unlock traversal abilities in order.",
      ctas: [],
    },
    quickAnswer:
      "Aniimo ships with an in-game interactive map of Idyll broken into 15 named regions. The map tracks spawns, chests, gathering nodes, and fast-travel points at in-game coordinates. Crescent Bay is currently the only region not yet placed on the interactive map.",
    keyFacts: [
      { label: "Region count", value: "15 regions; Crescent Bay is not yet on the interactive map" },
      { label: "Order", value: "Breezy Plains -> Argent Strait -> Forest of Falling Stars" },
      { label: "Traversal", value: "Movement Skills unlock further regions" },
    ],
    modules: [
      {
        id: "idyll-regions-by-level",
        type: "data-table",
        heading: "Idyll regions by level",
        columns: [
          { key: "region", label: "Region" },
          { key: "level", label: "Recommended level" },
          { key: "aniimo", label: "Aniimo" },
          { key: "pois", label: "POIs" },
          { key: "nomad", label: "Nomad challenges" },
        ],
        rows: [
          { region: "Nimbus Fields", level: "5-15", aniimo: "19", pois: "28", nomad: "2" },
          { region: "Forest of Falling Stars", level: "16-23", aniimo: "15", pois: "11", nomad: "1" },
          { region: "The Argent Strait", level: "14-20", aniimo: "14", pois: "23", nomad: "6" },
          { region: "Sea of Flowers", level: "19-28", aniimo: "14", pois: "25", nomad: "6" },
          { region: "Beast Fang Ridge", level: "22-30", aniimo: "17", pois: "23", nomad: "5" },
          { region: "Mistwoods", level: "24-33", aniimo: "13", pois: "26", nomad: "3" },
          { region: "Blitzwood", level: "28-35", aniimo: "14", pois: "20", nomad: "3" },
          { region: "Echoback Landing", level: "29-38", aniimo: "14", pois: "21", nomad: "3" },
          { region: "Berylline Causeway", level: "34-38", aniimo: "15", pois: "16", nomad: "3" },
          { region: "Rosetower Woods", level: "39-43", aniimo: "11", pois: "28", nomad: "4" },
          { region: "Driftwise Meadow", level: "38-42", aniimo: "16", pois: "10", nomad: "3" },
          { region: "Russet Highlands", level: "39-45", aniimo: "17", pois: "19", nomad: "2" },
          { region: "Zephyrus Landbridge", level: "45-48", aniimo: "15", pois: "16", nomad: "3" },
          { region: "Tideblossom Coast", level: "45-50", aniimo: "9", pois: "9", nomad: "2" },
          { region: "Crescent Bay", level: "50-55", aniimo: "10", pois: "Not placed on the interactive map", nomad: "—" },
        ],
      },
      {
        id: "early-regions-in-order",
        type: "steps",
        heading: "Early regions in order",
        items: [
          {
            title: "Breezy Plains",
            body: "The starting region around Polaris Institute / Bloomville.",
          },
          {
            title: "The Argent Strait",
            body: "Nomad content density makes it a worthwhile next stop.",
          },
          {
            title: "Forest of Falling Stars",
            body: "Higher level range; venture further only once you have Movement Skills unlocked.",
          },
        ],
      },
      {
        id: "exploration-tips",
        type: "prose",
        heading: "Exploration tips",
        body: "Wild Aniimo spawns in Idyll are influenced by environmental factors including weather, time of day, terrain, and natural phenomena — the same habitat produces different encounters under different conditions. Watch for the Lumin Amber alert that pops up while exploring: it points to Lumin Amber upgrades for region branches, so you don't need to sweep every corner. Activate every Bloom / teleport waypoint you find for fast travel and progression. Waypoints pay for themselves within minutes. The Aniilog provides habitat clues that double as progression tools. Revisit a region with the right Movement Skill unlocked to discover areas and shortcuts that were previously inaccessible. Try friend trading, co-op dungeons, and the Egg Heist PvPvE mode early so multiplayer feels familiar later.",
      },
      {
        id: "using-mobility-to-explore",
        type: "prose",
        heading: "Using mobility to explore",
        body: "Whenever you hit a gap, high platform, obstacle, or unusual environmental interaction, switching into Twine and using the right mobility is the solution. The 20 movement abilities — Fly and glide (Take Off, Cloudwalk), Swim, Climb, Dig (Tunnel, Dig In), Hustle / Scurry / Fast and Furious, High Jump / Puff Up, Glow / Luminous Seed, Cloak, Grapple (Hookshot), Floaty Bubble / Bubble Drift, and Detection, Bilateral, Blooming, Head Hammer — cover most traversal puzzles. Keep at least one fast-traversal Aniimo ready (Fly, Climb, Dig, or Hustle) so you can return to habitats later. Most \"stuck\" exploration moments clear up with the right mobility.",
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_MAPS,
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  // 8. egg-heist
  {
    id: "guide-egg-heist",
    translationKey: "guide-egg-heist",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/egg-heist",
    url: "/guides/egg-heist",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Egg Heist Strategy and Maps",
    seoTitle: "Aniimo Egg Heist Strategy: Loop, Tiers, Maps, Squad Roles",
    metaDescription:
      "Aniimo Egg Heist strategy: Level 50 unlock, the core extraction loop, Normal to Chaos tiers, 3-player squad roles, Sanctum routes, and recommended team comps.",
    summary:
      "Operation: Egg Heist is a timed PvPvE extraction mode on the Lost Isles, playable solo or in a 3-player co-op team.",
    hero: {
      eyebrow: "Egg Heist",
      subtitle: "Level 50 unlock, extraction loop, and 3-player squad roles.",
      ctas: [],
    },
    quickAnswer:
      "Operation: Egg Heist is a timed PvPvE extraction mode on the Lost Isles, playable solo or in a 3-player co-op team. The core loop is breach the Sanctum, loot nests, and extract to the Egg Boat. You need Level 50 and Veteran Pathfinder / Wayfarer III rank to unlock it.",
    keyFacts: [
      { label: "Unlock", value: "Level 50 + Veteran / Wayfarer III rank" },
      { label: "Players", value: "1-3 (solo or co-op)" },
      { label: "Extract point", value: "Egg Boat on the Lost Isles" },
    ],
    modules: [
      {
        id: "how-to-unlock",
        type: "prose",
        heading: "How to unlock",
        body: "You need Level 50 and Veteran Pathfinder / Wayfarer III rank. Open via Events > Game Modes or the ESC menu.",
      },
      {
        id: "core-loop-1-3-players",
        type: "steps",
        heading: "Core loop (1-3 players)",
        items: [
          { title: "Land at Ancient Harbor", body: "Spawn point on the Lost Isles." },
          { title: "Locate the activated Sanctum", body: "The blue gate goes in; the purple gate goes out." },
          { title: "Loot with intent", body: "Prioritize relics, keys, and high-coin items." },
          { title: "Clear the nest, Twine with the egg, and roll it out", body: "Twining keeps the egg under your control during extraction." },
          { title: "Meet the escape condition", body: "One egg plus a set amount of Eggshell Coins before extraction." },
          { title: "Submit at the Egg Boat and evacuate", body: "Eggs go to the in-game mailbox after extract — they don't auto-pop into the inventory." },
        ],
      },
      {
        id: "beginner-protection",
        type: "callout",
        tone: "tip",
        title: "Fainting forfeits everything",
        body: "Fainting forfeits all carried and equipped items. Beginner's Protection covers the first 3 deaths, so use them to learn the layout.",
      },
      {
        id: "difficulty-tiers-and-rewards",
        type: "data-table",
        heading: "Difficulty tiers and rewards",
        columns: [
          { key: "tier", label: "Tier" },
          { key: "tuning", label: "Tuning" },
          { key: "rewards", label: "Rewards" },
        ],
        rows: [
          { tier: "Normal", tuning: "PvE-leaning", rewards: "Uncommon" },
          { tier: "Hard", tuning: "Denser packs", rewards: "Rare" },
          { tier: "Nightmare", tuning: "PvP enabled", rewards: "Epic" },
          { tier: "Chaos", tuning: "Hardest tuning", rewards: "Top-end loot" },
        ],
      },
      {
        id: "rank-track-and-shop",
        type: "prose",
        heading: "Season 1 rank track and shop",
        body: "The Season 1 rank track is: Rookie Egg Hunter > Rising Egg Scout > Pro Egg Snatcher > Elite Egg Seeker > Expert Egg Raider > Egg Heist Master > Egg Emperor. Reward payouts include Aniimo eggs with Perfect Potential plus Eggshell Coins used in the shop. Top shop buys include Mysterious Prismana Eggs, Chaos Tickets, and Keys to unlock loot rooms. Spend talents in Personal Growth and Egg Boat Upgrades for permanent bonuses. In solo play you keep all coins; in team play eggs are shared but coins are individual.",
      },
      {
        id: "strategy-tips",
        type: "entity-grid",
        heading: "Strategy tips",
        items: [
          { title: "Equip Backpack, Attack Amplifier, and Protective Unit", summary: "Manage durability before each run." },
          { title: "Prioritize high-rarity loot", summary: "Maximizes coins per carry weight." },
          { title: "Twine with the egg after finding it", summary: "Gives you direct control during extraction." },
          { title: "Skip the third nest", summary: "Greedy third-nest runs wipe squads more often than first nests." },
          { title: "Don't overfill the backpack", summary: "Overfilling stops movement." },
          { title: "Coin threshold before extract", summary: "Holding an egg doesn't waive the Eggshell Coin requirement." },
        ],
      },
      {
        id: "squad-roles-3-player-teams",
        type: "entity-grid",
        heading: "Squad roles (3-player teams)",
        items: [
          { title: "Carrier", summary: "Twines, rolls the egg, focuses on mobility and shields." },
          { title: "Front Guard", summary: "Peeks threats with Break and knockback." },
          { title: "Rear Guard", summary: "Flanks, heals, vision control." },
        ],
      },
      {
        id: "loadout-tips",
        type: "prose",
        heading: "Loadout tips",
        body: "Bring 1 Main + 3 Lumen-stage Assist Aniimo. Assists lend single abilities on cooldown. Fire + Electric assists help with terrain gates. Carry keys (Rusted, Silver-Plated, Gilded) for locked rooms. Keep spare backpacks — fainting resets to the 4-slot default. The required 4-Aniimo squad balance is 1 DPS, 1 Healer, 1 Shield / Support, 1 Regen. Always bring a healer — Prismana Glacy is the most recommended assist. Each player should bring an extra slot: Carrier uses mobility / shields; Front Guard uses break / knockback; Rear Guard uses heal / buff.",
      },
      {
        id: "maps-and-routes",
        type: "prose",
        heading: "Maps and routes",
        body: "Egg Heist takes place in the Lost Sanctum on the Lost Isles. Players breach the Sanctum, loot nests, and extract to the Egg Boat. Two known entry routes: Main Entrance (standard entry — safer, longer path) and Side Entrance (deeper inside the Sanctum — riskier but faster route to valuable rooms). When carrying an egg, pick whichever exit offers the safer or shorter path on the map. The Egg Boat extraction point is the only way to score in success. Detailed map layouts for each region aren't documented publicly; routes rely on the Sanctum's two standard entrances plus the Egg Boat extraction. The Lost Isles is also a separate open-world PvPvE area beyond Egg Heist and supports general player-versus-player encounters.",
      },
      {
        id: "recommended-team-comps",
        type: "comparison",
        heading: "Recommended team compositions",
        options: [
          {
            name: "Ranged safe clear",
            summary: "Lunara / Stellarys + Prismana Glacy, Gracewing, Turbo.",
            bestFor: "Carriers who want safe mid-range damage and reliable heals.",
          },
          {
            name: "Melee sustain",
            summary: "Helion + Prismana Glacy, Gracewing, Turbo.",
            bestFor: "Front Guards who prefer melee pressure with sustain.",
          },
          {
            name: "Control / peel",
            summary: "Hexxin + Fragrancier, Gracewing, Turbo.",
            bestFor: "Rear Guards focused on crowd control and peel.",
          },
        ],
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_EGG,
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
    adAnchors: [
      { after: "difficulty-tiers-and-rewards", slot: "guide-section-break" },
    ],
  },
  // 9. homeland-rv-farming
  {
    id: "guide-homeland-rv-farming",
    translationKey: "guide-homeland-rv-farming",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/homeland-rv-farming",
    url: "/guides/homeland-rv-farming",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Homeland, RV, and Farming",
    seoTitle: "Aniimo Homeland RV Farming Guide: Hatchinator, Bud Tickets",
    metaDescription:
      "Aniimo Homeland RV farming: unlock the RV early, run the Hatchinator, plant farmland and woodland tiles, assign workers, raise the Home Index, farm Bud Tickets.",
    summary:
      "The RV (camper van) acts as a doorway, not a vehicle, leading into each player's instanced Homeland. The Homeland supports building and furnishing houses, decorating, growing crops, and housing collected Aniimo.",
    hero: {
      eyebrow: "Homeland and farming",
      subtitle: "Unlock the RV early, run the Hatchinator, plant tiles, farm Bud Tickets.",
      ctas: [],
    },
    quickAnswer:
      "The RV (camper van) acts as a doorway, not a vehicle, leading into each player's instanced Homeland. The Homeland supports building and furnishing houses, decorating, growing crops, and housing collected Aniimo. Use it for farming resources, hatching eggs, and generating passive currency.",
    keyFacts: [
      { label: "RV unlock", value: "Complete Prologue: The Mysterious RV early" },
      { label: "Key level", value: "Reach RV Level 8 to unlock main Bud Ticket farm" },
      { label: "Currencies", value: "Bud Tickets (decorations) and Home Coins (land)" },
    ],
    modules: [
      {
        id: "unlocking-the-homeland",
        type: "prose",
        heading: "Unlocking the Homeland",
        body: "Park the RV early. As soon as the story allows, complete \"Prologue: The Mysterious RV\" and its Home Invitation objective to unlock your Homeland. Reach RV Level 8 to unlock the main Bud Ticket farm — that's where passive income starts compounding.",
      },
      {
        id: "egg-hatching",
        type: "prose",
        heading: "Egg hatching",
        body: "The Hatchinator inside the Homeland holds multiple eggs at once for simultaneous incubation. Friend visits trigger Caresses that shave 10 minutes off an egg's incubation (subject to a cap). Fill the Hatchinator with multiple eggs rather than running them one at a time; empty hatchers are lost time. Pet wandering Aniimo in your house for small rewards and a separate Stars currency. It's a few seconds of action for steady small gains.",
      },
      {
        id: "farmland-and-production",
        type: "prose",
        heading: "Farmland and production",
        body: "Farmland tiles (starting at Level 1) can be placed (up to 4 initially) and expanded as the RV levels up. Woodland tiles are for trees (timber, fruit, rubber). Seeds are purchased from the Homeland Shop bot using Home Coins. Crops are sold through the Grocery Shop bot or Daily Orders bot for Home Coins. Huge crops (oversized variants) sell for better prices. Common farming materials: Wheat, Rice, Cotton, Bamboo, Sugarcane, Soybeans, Strawberry, and Fertilizer. Functional tiles include Farmland, Woodland, Mineral Piles, and various flooring / wall options. Machines include craft generators and specialized processing equipment. Landscapes include Conch Beach, Grassy Flooring, Pebble Paving, and similar terrain tiles.",
      },
      {
        id: "production-categories",
        type: "entity-grid",
        heading: "Production categories",
        items: [
          { title: "Growing", summary: "Raw crops, wood, materials." },
          { title: "Production", summary: "Crafting tables, stoves, brew kegs for finished items." },
          { title: "Infrastructure", summary: "Hatchinator and support facilities." },
        ],
      },
      {
        id: "workers",
        type: "prose",
        heading: "Workers",
        body: "Housed Aniimo can be assigned to farm resources. Worker job categories are Water, Grass, Artisanship, Earth, Carry, and Dark. Best workers cover several at once (for example, Witchin covers all three relevant categories). Sparkling Prismana Aniimo are the most valuable workers. Keep the Feed Box stocked or workers stop producing.",
      },
      {
        id: "decoration-economy",
        type: "data-table",
        heading: "Decoration economy — Bud Tickets per day",
        columns: [
          { key: "kind", label: "Aniimo kind" },
          { key: "per-day", label: "Bud Tickets / day" },
        ],
        rows: [
          { kind: "Regular Aniimo", "per-day": "120" },
          { kind: "Sparkling", "per-day": "180" },
          { kind: "Prismana", "per-day": "180" },
          { kind: "Sparkling + Prismana", "per-day": "270" },
        ],
      },
      {
        id: "home-index-loop",
        type: "steps",
        heading: "Raising the Home Index efficiently",
        items: [
          {
            title: "Buy the cheapest decorations you've never owned",
            body: "Cube decorations cost roughly 2 Bud Tickets each.",
          },
          {
            title: "Place each once to earn first-time index points",
            body: "Index only counts the first placement.",
          },
          {
            title: "Sell back through co-op vendors or robot shops",
            body: "Sells for roughly half the cost — the index points are the goal, not the resale.",
          },
        ],
      },
      {
        id: "home-index-milestones",
        type: "prose",
        heading: "Home Index milestones",
        body: "You can also build one of every house structure and furniture item and grow mutated plants — both add to your score. Home Index milestones award toolboxes totaling 22 modification tool kits across all levels.",
      },
      {
        id: "spending-priorities",
        type: "steps",
        heading: "Spending priorities",
        items: [
          { title: "1. Backpack", body: "Carry more items per run." },
          { title: "2. Protective Unit", body: "Mitigates incoming damage." },
          { title: "3. Attack Amplifier", body: "Improves sustained DPS." },
          { title: "4. Keys", body: "Unlock locked rooms during Egg Heist." },
          { title: "5. Chips", body: "Permanent stat slots." },
          { title: "6. Eggs", body: "Invest in long-term roster breadth." },
          { title: "7. Chaos Tickets", body: "Reserve for the hardest Egg Heist runs." },
        ],
      },
      {
        id: "daily-loop-tips",
        type: "entity-grid",
        heading: "Daily loop tips",
        items: [
          { title: "Park the RV early", summary: "Don't delay the Prologue objective." },
          { title: "Keep spare Aniimo housed", summary: "Assign them to farming tasks." },
          { title: "Fill the Hatchinator with multiple eggs", summary: "Empty hatchers are lost time." },
          { title: "Invite friends for Caresses", summary: "Shaves 10 minutes off each egg (subject to a cap)." },
          { title: "Complete Daily Orders", summary: "Extra Bud Tickets come from the Daily Orders bot." },
          { title: "Don't overfill the Bud Ticket Jar", summary: "It caps at 1,000 tickets — overfill production is lost." },
          { title: "Use cheap 2-ticket cube decorations", summary: "Cheapest way to raise Home Index." },
        ],
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_HOMELAND,
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
    adAnchors: [
      { after: "decoration-economy", slot: "guide-section-break" },
    ],
  },
  // 10. evolution-guide
  {
    id: "guide-evolution-guide",
    translationKey: "guide-evolution-guide",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/evolution-guide",
    url: "/guides/evolution-guide",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Aniimo Evolution Lines and Requirements",
    seoTitle: "Aniimo Evolution Guide: Emberpup Line, Umbral, Prismana",
    metaDescription:
      "Aniimo evolution guide: how conditions stack, the Emberpup to Inferlupa line example, Umbral trade-off, and Prismana paths plus an evolving checklist.",
    summary:
      "Aniimo evolution is gated by more than just level. A typical evolution requires some combination of: a target level, a specific personality trait, a Pathfinder talent tree unlock, an Alpha variant defeat, certain quest choices, or a trade.",
    hero: {
      eyebrow: "Evolution guide",
      subtitle: "Conditions, the Emberpup example, Umbral trade-off, and a practical checklist.",
      ctas: [],
    },
    quickAnswer:
      "Aniimo evolution is gated by more than just level. A typical evolution requires some combination of: a target level, a specific personality trait, a Pathfinder talent tree unlock on the player account, an Alpha variant defeat, certain quest choices and collected items, or in some cases a trade to another player. Catching the Alpha boss directly grants an already-evolved Aniimo and skips the evolution process.",
    keyFacts: [
      { label: "Sample line", value: "Emberpup -> Flameruff -> Scorchhowl -> Inferlupa" },
      { label: "Umbral choice", value: "Perks or form — only one can be kept" },
      { label: "Alpha shortcut", value: "Catching the Alpha grants an evolved Aniimo" },
    ],
    modules: [
      {
        id: "how-evolution-conditions-stack",
        type: "entity-grid",
        heading: "How evolution conditions stack",
        items: [
          { title: "Target level", summary: "e.g. level 12, level 20." },
          { title: "Personality trait", summary: "A specific personality trait on the Aniimo." },
          { title: "Pathfinder talent tree unlock", summary: "Required unlock on the player account." },
          { title: "Alpha variant defeat", summary: "Defeat the Alpha form of the next evolution." },
          { title: "Quest choices and items", summary: "Specific quest choices plus collected items." },
          { title: "Trade to another player", summary: "Some lines require a trade before the final evolution." },
        ],
      },
      {
        id: "worked-example-the-emberpup-line",
        type: "steps",
        heading: "Worked example: the Emberpup line",
        items: [
          {
            title: "Emberpup -> Flameruff",
            body: "Clear Sanctum: First Spark, level 12, no extra cost.",
          },
          {
            title: "Flameruff -> Scorchhowl",
            body: "Defeat the Alpha Scorchhowl, level 20, cost: Blaze Stone x3.",
          },
          {
            title: "Scorchhowl -> Inferlupa (Fire / Dark)",
            body: "Complete Journey: Warrior, level 20, cost: Night Stone x3 + Unbroken Flameruff Spirit x6.",
          },
        ],
      },
      {
        id: "other-pinned-evolution-levels",
        type: "data-table",
        heading: "Other pinned evolution levels",
        columns: [
          { key: "from", label: "From" },
          { key: "to", label: "To" },
          { key: "level", label: "Level" },
        ],
        rows: [
          { from: "Prankie", to: "Glacy or Leafy (branch)", level: "20" },
          { from: "Flutternym", to: "Gracewing", level: "21" },
          { from: "Celestis", to: "Stellarys", level: "18" },
          { from: "Budclaw", to: "Geoclaw or Shrubclaw (unresolved)", level: "Next tier" },
        ],
      },
      {
        id: "lunara-line",
        type: "prose",
        heading: "Lunara's separate evolution path",
        body: "The Lunara line has a different mechanic: in combat, Lunara's Ultimate (Selene's Judgment) evolves it temporarily into Lumin for the duration of the fight. The same Ultimate permanently evolves Lunara into Nova / Fennelun with a 15% damage increase until combat ends.",
      },
      {
        id: "umbral-evolution",
        type: "prose",
        heading: "Umbral evolution: a permanent trade-off",
        body: "Umbral evolution is a one-way choice. Keeping an Aniimo Umbral retains its dark essence appearance (like Darklers) and Umbral perks. Evolving it removes the appearance, state, and perks but retains Perfect Potential. The game shows a confirmation warning before committing. Decide between perks or form — only one can be kept.",
      },
      {
        id: "egg-quality-tiers-and-prismana",
        type: "prose",
        heading: "Egg quality tiers and Prismana",
        body: "Egg quality tiers that appear in the dex: Perfect, Elite, Alpha, Sparkling, and Prismana. Prismana evolution paths exist and are tied to eggs and rare events. The egg quality tier determines which evolution branches are reachable and which conditions are required.",
      },
      {
        id: "practical-checklist",
        type: "steps",
        heading: "Practical checklist before evolving",
        items: [
          { title: "Confirm the target level", body: "Hit the listed level on the Aniimo." },
          { title: "Confirm the required trait", body: "Make sure the Aniimo has the right personality trait." },
          { title: "Confirm the player-side requirement", body: "Talent tree unlock, quest completion, Alpha fight, or trade." },
          { title: "Gather the listed material costs", body: "Have the items ready before confirmation." },
          { title: "Umbral decision", body: "Decide between Umbral perks or non-Umbral form before the confirmation dialog." },
          { title: "Consider Alpha skip", body: "Catching the Alpha directly grants an evolved Aniimo and bypasses the chain." },
        ],
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_EVOLUTION,
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  // 11. glimmer-world-tree
  {
    id: "guide-glimmer-world-tree",
    translationKey: "guide-glimmer-world-tree",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/glimmer-world-tree",
    url: "/guides/glimmer-world-tree",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Glimmer and the World Tree",
    seoTitle: "Aniimo Glimmers World Tree: Branch Blessings and Spending",
    metaDescription:
      "Aniimo Glimmers World Tree: how to earn Glimmer, run the Branch from 10 to 150 Amber with 15 blessings, plus Lumin Amber sources and spending priorities.",
    summary:
      "Glimmer is a rare currency scattered across Idyll, used to purchase items from the Glimmer Shop at outpost vendors.",
    hero: {
      eyebrow: "Glimmer and World Tree",
      subtitle: "Earn Glimmer, run the Branch from 10 to 150 Amber, spend it well.",
      ctas: [],
    },
    quickAnswer:
      "Glimmer is a rare currency scattered across Idyll, used to purchase items from the Glimmer Shop at outpost vendors. Glimmer is not a region — it acts as a premium-but-farmable currency. The World Tree (called Branch) is the sacred Vein convergence point on each map; both Branches share a blessing track that pays out as you spend Amber.",
    keyFacts: [
      { label: "Best source", value: "Elite Training Core Courses (story-tied)" },
      { label: "Branch track", value: "15 blessings from 10 to 150 Amber" },
      { label: "Track total", value: "18 Irisalis Petals, 13 Tumblers, 1 Prismana Crystal, 1 Perfect Egg" },
    ],
    modules: [
      {
        id: "how-to-earn-glimmer",
        type: "entity-grid",
        heading: "How to earn Glimmer",
        items: [
          { title: "Elite Training Core Courses", summary: "Best source, tied to main story progression." },
          { title: "Daily activities", summary: "30 Glimmer per day at 400 points at the Institute Guide's Daily Activity menu." },
          { title: "Defeat Alpha Aniimo", summary: "50 Glimmer first-time reward." },
          { title: "Defeat Omega Aniimo", summary: "100 Glimmer first-time reward." },
          { title: "Raise Aniilog Level", summary: "100 Glimmer per level by capturing Aniimo and completing Research Goals." },
          { title: "Holo-Battle Simulator rewards", summary: "Repeatable Glimmer payouts." },
          { title: "Chest exploration rewards", summary: "Find Glimmer in chests across Idyll." },
          { title: "Companion Handbook rewards", summary: "Handbook milestones grant Glimmer." },
          { title: "Branch energy infusion", summary: "Channel Lumin Amber at the Branch." },
          { title: "Quest completion rewards", summary: "Side and main quests grant Glimmer." },
          { title: "Lumin Crystals top-up", summary: "Buying them grants first-time Glimmer bonuses, alongside paid outfits." },
        ],
      },
      {
        id: "world-tree-branch-actions",
        type: "entity-grid",
        heading: "World Tree (Branch) actions",
        items: [
          {
            title: "Infuse Energy",
            summary: "Pour Lumin Amber. 1 Amber = 1 point. One blessing every 10 Amber, 15 blessings in all, 150 Amber to finish.",
          },
          {
            title: "Nurture",
            summary: "Trigger a Wild Surge at an area's Bloom to raise Prismatic Energy. One free Nurture daily, banked up to 3. Extra Nurtures cost Vein Essence (up to 15 a day, 25 after the 30-Amber blessing).",
          },
          {
            title: "Change Weather",
            summary: "Unlocks at 60 Amber (Prismana Radiance) plus the area's Silver Badge. Costs 1 Prismana Crystal per Flow; 3 a day max, 60 seconds apart.",
          },
        ],
      },
      {
        id: "shared-blessing-track",
        type: "data-table",
        heading: "Shared blessing track (10 -> 150 Amber)",
        columns: [
          { key: "amber", label: "Amber" },
          { key: "blessing", label: "Blessing" },
        ],
        rows: [
          { amber: "10", blessing: "Lucky Encounter (+10% catch chance)" },
          { amber: "20", blessing: "Budding (+10% Stamina cap)" },
          { amber: "30", blessing: "Prospering Clusters (+10 Nurture cap / day)" },
          { amber: "40", blessing: "Sprouting (+10% Stamina cap)" },
          { amber: "50", blessing: "First Bloom (+10% Stamina cap)" },
          { amber: "60", blessing: "Prismana Radiance (unlocks weather change)" },
          { amber: "70", blessing: "Thriving (+10% Stamina cap)" },
          { amber: "80", blessing: "Blossoming (+10% Stamina cap)" },
          { amber: "90", blessing: "Sparkling Encounter (Wonder Egg spawns Mondays)" },
          { amber: "100", blessing: "Flourish (-10% Stamina use)" },
          { amber: "110", blessing: "Flourishing (-10% Stamina use)" },
          { amber: "120", blessing: "Earthwake Revelation (reveals hidden caves; rarer egg on Isles)" },
          { amber: "130", blessing: "Abundance (-10% Stamina use)" },
          { amber: "140", blessing: "Full Bloom (-10% Stamina use)" },
          { amber: "150", blessing: "Wanderer's Might (no Stamina cost out of combat; Perfect Egg)" },
        ],
      },
      {
        id: "total-rewards",
        type: "data-table",
        heading: "Total rewards per Branch (0 -> 150 Amber)",
        columns: [
          { key: "reward", label: "Reward" },
          { key: "qty", label: "Quantity" },
        ],
        rows: [
          { reward: "Irisalis Petals", qty: "18" },
          { reward: "Aniipod Mega", qty: "50" },
          { reward: "Credits", qty: "500,000" },
          { reward: "Capaseed", qty: "40" },
          { reward: "Tumblers", qty: "13" },
          { reward: "Vein Essence", qty: "2" },
          { reward: "Glimmer", qty: "500" },
          { reward: "Prismana Crystal", qty: "1" },
          { reward: "Wonder Egg", qty: "1" },
          { reward: "Perfect Egg", qty: "1" },
        ],
      },
      {
        id: "lumin-amber-sources-and-variants",
        type: "entity-grid",
        heading: "Lumin Amber sources and variants",
        items: [
          { title: "Sources", summary: "Open-world collectibles, first-clear Alpha / Omega and Sanctum rewards, and Blessed Aniimo encounters. Regional — Breezy Plains Amber only feeds its Branch; Isles Amber only feeds the Isles Branch." },
          { title: "Guarded", summary: "Defeat Aniimo." },
          { title: "Lumin Collection", summary: "Gather scattered energy." },
          { title: "Ecosystem-blended", summary: "Twine with a specific Aniimo." },
          { title: "Runaway", summary: "Chase before time runs out." },
        ],
      },
      {
        id: "how-to-spend-glimmer",
        type: "entity-grid",
        heading: "How to spend Glimmer",
        items: [
          {
            title: "Primegy (50 Glimmer)",
            summary: "Stamina for Alpha / Omega and Holo-Battle Simulator. The most reliable stamina refill.",
          },
          {
            title: "Gift of Celebration (88 Glimmer)",
            summary: "Send up to 100x / day to raise Affinity. Fastest path to Soulmate, around 2.66-3 weeks, and unlocks Good Friend rank for trading.",
          },
          {
            title: "Sparkling Crystal (15 Glimmer each)",
            summary: "Collect 1,000 for a Sparkling Cube. Weekly 100-purchase cap, used for Perfect Potential Sparkling Aniimo.",
          },
          {
            title: "Capafruit (1,000 Glimmer)",
            summary: "+1 Innate Potential for minmaxing. Save for endgame.",
          },
        ],
      },
      {
        id: "spending-strategy",
        type: "prose",
        heading: "Spending strategy",
        body: "For long-term planning, prioritize Primegy for stamina flow first, then Gift of Celebration once you want Affinity / Soulmate progression. Capafruit is the endgame spend — don't redirect Glimmer to it before the Branch track is finished.",
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_GLIMMER,
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
    adAnchors: [
      { after: "shared-blessing-track", slot: "guide-section-break" },
    ],
  },
  // 12. codes-and-rewards
  {
    id: "guide-codes-and-rewards",
    translationKey: "guide-codes-and-rewards",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/codes-and-rewards",
    url: "/guides/codes-and-rewards",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Aniimo Codes and Rewards",
    seoTitle: "Aniimo Codes: 15 Active Codes for Glimmer, Aniipods, More",
    metaDescription:
      "Aniimo codes: 15 active redeem codes for Glimmer, Growth Flowers, Credits, Aniipods, and Aniipod Pros, with redemption steps and expired codes to skip.",
    summary:
      "Aniimo redeem codes grant in-game items such as Glimmer, Growth Flowers, Credits, Aniipods, and Aniipod Pros. Codes are case-sensitive and single-use per account.",
    hero: {
      eyebrow: "Codes and rewards",
      subtitle: "15 active codes as of 10 Oct 2026 plus how to redeem them.",
      ctas: [],
    },
    quickAnswer:
      "Aniimo redeem codes grant in-game items such as Glimmer, Growth Flowers, Credits, Aniipods, and Aniipod Pros. Codes are case-sensitive — enter the capitalization exactly as listed. Each code is single-use per account. Codes are pulled without warning, so redeem them promptly.",
    keyFacts: [
      { label: "Active codes", value: "15 verified as of 10 Oct 2026" },
      { label: "Total Glimmer", value: "230 across all active codes" },
      { label: "US-exclusive", value: "aniimazingfroyo (US server only)" },
    ],
    modules: [
      {
        id: "how-to-redeem",
        type: "prose",
        heading: "How to redeem",
        body: "Prerequisite: finish the tutorial, defeat Turbo, and start the \"Chasing the Clouds\" quest in Bloomville. Open Phone menu > Settings > Account tab > Gift Code Redemption. Rewards are delivered to the in-game mailbox, not shown on the redemption screen.",
      },
      {
        id: "active-codes",
        type: "data-table",
        heading: "Active codes (as of 10 Oct 2026)",
        columns: [
          { key: "code", label: "Code" },
          { key: "rewards", label: "Rewards" },
        ],
        rows: [
          { code: "aniimonow", rewards: "Growth Flower x3, Credits x10,000" },
          { code: "anywhereaniimo", rewards: "Growth Flower x3, Credits x10,000" },
          { code: "anythinganiimo", rewards: "Growth Flower x3, Credits x10,000" },
          { code: "aniimazingfroyo", rewards: "Glimmer x20 (US server only)" },
          { code: "aniimofreetoplay", rewards: "Glimmer x50, Growth Flower x5, Aniipod Pro x5" },
          { code: "aniimotogether", rewards: "Growth Flower x3, Credits x10,000" },
          { code: "aniimowelcome", rewards: "Glimmer x50, Growth Flower x5, Aniipod Pro x5" },
          { code: "aniimoidyll", rewards: "Credits x10,000, Aniipod x5" },
          { code: "ANIIMOGIFT", rewards: "Glimmer x10, Credits x20,000, Growth Flower x10, Aniipod Pro x5" },
          { code: "Aniimo2026", rewards: "Glimmer x20" },
          { code: "anyoneaniimo", rewards: "Credits x10,000, Aniipod x5" },
          { code: "aniimoopenworld", rewards: "Credits x10,000, Aniipod x5" },
          { code: "twinewithaniimo", rewards: "Credits x10,000, Aniipod x5" },
          { code: "aniimobonus", rewards: "Glimmer x50" },
          { code: "aniimolaunch2026", rewards: "Glimmer x50, Growth Flower x5, Aniipod Pro x5" },
        ],
      },
      {
        id: "total-rewards",
        type: "callout",
        tone: "tip",
        title: "Total value across all active codes",
        body: "230 Glimmer, 100,000 Credits, 37 Growth Flowers, 20 Aniipod Pros, 20 Aniipods.",
      },
      {
        id: "known-expired",
        type: "data-table",
        heading: "Known expired",
        columns: [
          { key: "code", label: "Code" },
          { key: "status", label: "Status" },
        ],
        rows: [
          { code: "aniimoparty", status: "Expired 18 Sept 2026. Will not redeem; remove it from any list you're using." },
        ],
      },
      {
        id: "troubleshooting",
        type: "entity-grid",
        heading: "Troubleshooting",
        items: [
          { title: "Capitalization", summary: "If a code refuses, check capitalization against the list above. Aniimo code redemption is case-sensitive." },
          { title: "Expired list", summary: "Confirm the code isn't on the expired list." },
          { title: "Server region", summary: "\"aniimazingfroyo\" is restricted to the US server. If you're on another server, swap to a global code." },
          { title: "Already redeemed", summary: "If a code returns no reward, the account may have already redeemed it. Each code is single-use per account." },
        ],
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_CODES,
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
];
