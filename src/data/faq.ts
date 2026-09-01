import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  // Homepage
  {
    id: "home-when-release",
    question: "When does Aniimo release?",
    answer:
      "The game releases globally on 15-16 September 2026, depending on time zone. Steam lists 15 September 2026, and regional coverage reports a 16 September 2026 unlock for Asia-Pacific players.",
    pageIds: ["home", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-free-to-play",
    question: "Is Aniimo free to play?",
    answer:
      "Aniimo uses a free-to-play model with optional in-app purchases. Pre-registration unlocks a reward ladder that includes cosmetics and a Smoky Stone-themed Aniipod, and three free launch items (Sparkling Cube, Aniipod Ultra, Tumbler) are granted to all players at launch.",
    pageIds: ["home", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-pre-order",
    question: "Do I need to pre-order Aniimo?",
    answer:
      "Aniimo is free, so there is no paid pre-order. The reward ladder is unlocked by pre-registering an account on the official site, the Steam store, or the Epic Games Store before launch.",
    pageIds: ["home", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-platforms",
    question: "What platforms run Aniimo?",
    answer:
      "Aniimo launches on PS5, Xbox Series X|S, PC via Steam and Epic Games Store, iOS, and Android. Cloud-streaming and a Nintendo Switch version are not part of the confirmed launch lineup as of 2026-08-29.",
    pageIds: ["home", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-pc-spec",
    question: "Can my PC run Aniimo?",
    answer:
      "The current English Steam page lists an Intel i7-9700 or AMD Ryzen 5 3600X with a GTX 1060 or Radeon RX 6600 and 12 GB of RAM as the minimum, and an Intel Core i7-12700F or AMD Ryzen 7700X with an RTX 3070 8G or Radeon RX 6800 and 16 GB of RAM as the recommended spec. Both tiers need 45 GB of storage, and older regional pages showing 8 GB / 30 GB no longer reflect the official spec.",
    pageIds: ["home", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Release overview
  {
    id: "release-when-exact",
    question: "When exactly does Aniimo release?",
    answer:
      "Aniimo releases 15-16 September 2026. Steam lists 15 September; APAC coverage lists 16 September for the regional unlock.",
    pageIds: ["fixed-release-overview-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-pre-order-needed",
    question: "Do I need to pre-order Aniimo?",
    answer:
      "Aniimo is free to play. Pre-registration unlocks a reward ladder, and three launch-day items are granted free.",
    pageIds: ["fixed-release-overview-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-nintendo-switch",
    question: "Will Aniimo be on Nintendo Switch?",
    answer:
      "A Nintendo Switch version is not announced as of 2026-08-29. The launch lineup covers PS5, Xbox Series X|S, PC, iOS, and Android.",
    pageIds: ["fixed-release-overview-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-language-support",
    question: "What languages does Aniimo support?",
    answer:
      "The launch interface supports English plus twelve non-English languages (Simplified Chinese, Traditional Chinese, Japanese, Korean, French, German, Spanish (Latin America), Portuguese (Brazil), Russian, Indonesian, Thai, Vietnamese). Full audio and subtitle support outside English are not announced as of 2026-08-29.",
    pageIds: ["fixed-release-overview-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-unlock-hour",
    question: "Is the Aniimo launch hour announced?",
    answer:
      "Exact unlock hour and minute per time zone are not announced as of 2026-08-29.",
    pageIds: ["fixed-release-overview-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Platforms and versions
  {
    id: "platforms-switch",
    question: "Will Aniimo be on Nintendo Switch?",
    answer:
      "A Nintendo Switch version is not announced as of 2026-08-29.",
    pageIds: ["fixed-platforms-and-versions-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "platforms-cross-play",
    question: "Does Aniimo support cross-play?",
    answer:
      "Cross-play status across console, PC, and mobile is not announced as of 2026-08-29.",
    pageIds: ["fixed-platforms-and-versions-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "platforms-cloud-streaming",
    question: "Does Aniimo support cloud streaming?",
    answer:
      "Cloud-streaming availability is not announced as of 2026-08-29. The launch lineup covers direct installs only.",
    pageIds: ["fixed-platforms-and-versions-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "platforms-controller-support",
    question: "Does Aniimo on PC support controllers?",
    answer:
      "Aniimo on PC supports Xbox Wireless and PlayStation pads, plus standard keyboard and mouse.",
    pageIds: ["fixed-platforms-and-versions-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // System requirements
  {
    id: "spec-min-ram",
    question: "What is the minimum RAM for Aniimo on PC?",
    answer:
      "The current English Steam page lists 12 GB of RAM for the minimum spec and 16 GB of RAM for the recommended spec. Minimum RAM is no longer unannounced, and older regional pages showing 8 GB are superseded.",
    pageIds: ["fixed-system-requirements-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "spec-cpu-gpu",
    question: "Which CPU and GPU does Aniimo need on PC?",
    answer:
      "The minimum spec asks for an Intel i7-9700 or AMD Ryzen 5 3600X or above with a GTX 1060 or AMD Radeon RX 6600. The recommended spec asks for an Intel Core i7-12700F or AMD Ryzen 7700X or above with an NVIDIA GeForce RTX 3070 8G or above or an AMD Radeon RX 6800 or above. Both tiers require a 64-bit processor and operating system.",
    pageIds: ["fixed-system-requirements-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "spec-storage",
    question: "How much storage does Aniimo need on PC?",
    answer:
      "The current English Steam page lists 45 GB of available space for both the minimum and recommended tiers, raised from 30 GB on older regional pages. An SSD is recommended for shader and streaming performance.",
    pageIds: ["fixed-system-requirements-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "spec-controller",
    question: "Does Aniimo on PC support controllers?",
    answer:
      "Xbox Wireless and PlayStation pads are supported, plus standard keyboard and mouse.",
    pageIds: ["fixed-system-requirements-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "spec-regional-pages",
    question: "Which Steam page is authoritative for Aniimo PC specs?",
    answer:
      "The current English Steam page is authoritative; older regional pages still show 8 GB of RAM and 30 GB of storage, sometimes with blank CPU and GPU rows, and are not current.",
    pageIds: ["fixed-system-requirements-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Pre-order
  {
    id: "preorder-cost",
    question: "Does Aniimo cost money?",
    answer:
      "Aniimo is free-to-play with optional in-app purchases. There is no paid Standard or Deluxe edition.",
    pageIds: ["fixed-pre-order-and-editions-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "preorder-edition",
    question: "Is there a paid Aniimo edition?",
    answer:
      "A paid Standard, Deluxe, or Premium edition is not announced as of 2026-08-29. The base game is free.",
    pageIds: ["fixed-pre-order-and-editions-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "preorder-rewards",
    question: "What does pre-registering for Aniimo unlock?",
    answer:
      "Pre-registering on the official aniimo.com site claims the Susuta egg, and every pre-registered player shares the global milestone ladder: Glimmer x200 at 10M sign-ups, Aniipod Ultra x2 at 15M, the \"Companion Promise\" limited avatar frame at 20M, and the \"Sunlit Meadow\" limited outfit at 30M. The Perfect Egg is separate and comes from multi-day logins rather than from pre-registration.",
    pageIds: ["fixed-pre-order-and-editions-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "preorder-platform-links",
    question: "Where do I pre-register for Aniimo on my platform?",
    answer:
      "The official site links six storefronts: the PlayStation Store concept page, the Xbox Store listing, Steam (AppID 4126040), the Epic Games Store page, the Apple App Store listing, and an official Google Play link. Storefront pre-registration queues the free-to-play download; it does not replace the aniimo.com form that claims the Susuta egg.",
    pageIds: ["fixed-pre-order-and-editions-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "preorder-milestone-timing",
    question: "When do Aniimo milestone rewards unlock?",
    answer:
      "Milestone rewards pay out in the live game at launch, not during the closed beta. Closed Beta 3 progress was reset before launch, so nothing claimed in the beta build carries these rewards. The exact in-game claim screen and any claim deadline are not announced as of 2026-09-02.",
    pageIds: ["fixed-pre-order-and-editions-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "preorder-monetization",
    question: "How does Aniimo monetize?",
    answer:
      "Aniimo is free-to-play with optional in-app purchases. The store stocks cosmetics and convenience items; specific paid bundles and season pass plans are not announced as of 2026-09-02.",
    pageIds: ["fixed-pre-order-and-editions-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Closed beta
  {
    id: "beta-sign-up",
    question: "How do I sign up for the Aniimo closed beta?",
    answer:
      "Pre-register an account on the official Aniimo site, follow the Aniimo Steam news page, and join the official Aniimo Discord. Future beta windows will be announced through those channels.",
    pageIds: ["fixed-closed-beta-and-signups-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "beta-progress-carry",
    question: "Does Closed Beta 3 progress carry over to launch?",
    answer:
      "Closed Beta 3 progress did not carry forward to launch. Beta accounts were reset before launch, so the creatures added in that build and any traded Aniimo have to be re-earned in the live game.",
    pageIds: ["fixed-closed-beta-and-signups-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "beta-trading-system",
    question: "How does the Aniimo trading system work?",
    answer:
      "Closed Beta 3 introduced a trading system that lets players exchange Aniimo with one another, so roster gaps can be filled by trade instead of only by wild catches or reward eggs. Use the Aniilog capture log to see which forms you are still missing before opening a trade. Trade restrictions, cooldowns, whether eggs and Prismana forms are tradable, and whether trading ships in the launch build are not announced as of 2026-09-02.",
    pageIds: ["fixed-closed-beta-and-signups-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "beta-new-creatures",
    question: "Which creatures did Aniimo Closed Beta 3 add?",
    answer:
      "Closed Beta 3 added Bubbeep, Popapus, Mophling, and Sausite as new Aniimo species, Budsquire and Thornblade as additional creature forms, and the co-op bosses Bubbask and Coraliz. Their elements, roles, and evolution lines are not published as of 2026-09-02.",
    pageIds: ["fixed-closed-beta-and-signups-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "beta-future-windows",
    question: "Will there be more Aniimo betas?",
    answer:
      "Future beta windows are not announced as of 2026-09-02. Closed Beta 3 was the last announced test before the 15-16 September 2026 launch, so pre-registration on the official site, the Steam news page, and the official Discord are the channels to watch.",
    pageIds: ["fixed-closed-beta-and-signups-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Twining
  {
    id: "twining-definition",
    question: "What does 'Twining' mean in Aniimo?",
    answer:
      "Twining is the merge mechanic where your player character bonds with a captured Aniimo, gaining its movement type and combat kit.",
    pageIds: ["fixed-twining-system-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "twining-mode-difference",
    question: "What is the difference between Command Mode and Twine Mode?",
    answer:
      "Command Mode keeps you in human form while ordering party attacks; Twine Mode drops you into the merged Aniimo so you can use its movement and skills directly.",
    pageIds: ["fixed-twining-system-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "twining-cooldowns",
    question: "Do cooldowns matter during a Twine?",
    answer:
      "The exact cooldowns and balance details for Aniimo Twining are pre-launch speculation as of 2026-08-29.",
    pageIds: ["fixed-twining-system-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "twining-starter",
    question: "Can I Twine into my starter?",
    answer:
      "Yes. Once Twining is unlocked, every captured Aniimo, including your starter, can be merged with.",
    pageIds: ["fixed-twining-system-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Starter and Prismana
  {
    id: "starter-which-pick",
    question: "Which Aniimo starter should I pick?",
    answer:
      "Pick the form whose movement type covers your first region: Budclaw is described as a crab-like Aniimo that is great at burrowing, while Celestis and Nimbi are flying forms. Emberpup and Chirpi read as combat-forward picks. Which of these is actually offered on the starter screen is not announced as of 2026-09-02, and the list is subject to change per developer.",
    pageIds: ["fixed-starter-and-prismana-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "starter-named-roster",
    question: "Which Aniimo have been named so far?",
    answer:
      "Pre-launch coverage names Budclaw (crab-like, great at burrowing), Celestis and Nimbi (flying forms), Emberpup (a fiery little bruiser) and Chirpi (a feisty bird). Closed Beta 3 added Bubbeep, Popapus, Mophling, Sausite, Budsquire, and Thornblade, plus the co-op bosses Bubbask and Coraliz.",
    pageIds: ["fixed-starter-and-prismana-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "starter-emberpup-line",
    question: "What does Emberpup evolve into?",
    answer:
      "The CBR interview states that Emberpup evolves to Flameruff and then Scorchhowl, with Interlupa now part of the same family. It is the only Aniimo evolution chain named end-to-end in pre-launch coverage; per-step requirements are not confirmed as of 2026-09-02.",
    pageIds: ["fixed-starter-and-prismana-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "prismana-form-meaning",
    question: "What is a Prismana form in Aniimo?",
    answer:
      "A Prismana form is an alternate-color variant of an Aniimo with a shifted palette and slightly different stats. It follows the same Lumin to Gamma to Nova evolution path as a standard form.",
    pageIds: ["fixed-starter-and-prismana-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "perfect-egg-pre-register",
    question: "Do I get the Perfect Egg from pre-registering?",
    answer:
      "No. The official site lists the Perfect Egg as a random egg obtained through multi-day logins, not as a pre-registration claim. Pre-registering on aniimo.com claims the Susuta egg instead.",
    pageIds: ["fixed-starter-and-prismana-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "susuta-egg-replace-starter",
    question: "Does the Susuta egg replace my starter?",
    answer:
      "No. The Susuta egg is the mysterious egg claimed by pre-registering on the official aniimo.com site, and it arrives as extra roster support alongside the starter you already chose.",
    pageIds: ["fixed-starter-and-prismana-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Evolution
  {
    id: "evolution-pipeline",
    question: "What is the Aniimo evolution pipeline?",
    answer:
      "Every Aniimo follows Lumin to Gamma to Nova. Weather, regional, Sparkling, and Prismana variants are layered on top of that pipeline.",
    pageIds: ["fixed-evolution-and-stages-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "evolution-emberpup-line",
    question: "Is there a confirmed Aniimo evolution line?",
    answer:
      "Yes, one. The CBR interview states that Emberpup evolves to Flameruff and then Scorchhowl, with Interlupa now part of the same family. No other Aniimo line has published stage names as of 2026-09-02.",
    pageIds: ["fixed-evolution-and-stages-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "evolution-beta-additions",
    question: "Do the Closed Beta 3 creatures have known evolution lines?",
    answer:
      "Not yet. Bubbeep, Popapus, Mophling, and Sausite were added as new species, and Budsquire and Thornblade as additional forms, but their stages and evolution lines are not published as of 2026-09-02. Bubbask and Coraliz are presented as co-op bosses rather than as catchable lines.",
    pageIds: ["fixed-evolution-and-stages-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "evolution-prismana",
    question: "How do Prismana forms evolve?",
    answer:
      "Prismana forms follow the same Lumin to Gamma to Nova evolution path as standard forms.",
    pageIds: ["fixed-evolution-and-stages-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "evolution-sparkling",
    question: "What is a Sparkling variant?",
    answer:
      "A Sparkling variant is a rare palette-swapped form with a shifted appearance. The full Sparkling roster is not officially published as of 2026-09-02.",
    pageIds: ["fixed-evolution-and-stages-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "evolution-trigger",
    question: "How do I evolve my Aniimo?",
    answer:
      "Specific evolution conditions are not fully confirmed as of 2026-09-02. Higher forms are reached through encounter conditions, weather, regional location, and reward tracks.",
    pageIds: ["fixed-evolution-and-stages-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Catching
  {
    id: "catch-aniipod-types",
    question: "What types of Aniipods exist?",
    answer:
      "Aniimo ships a basic Aniipod plus an Aniipod Ultra as a free launch-day reward. Both share the same throw-and-confirm flow; the Ultra carries a higher base catch rate.",
    pageIds: ["fixed-catching-and-aniipods-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "catch-spawn-rules",
    question: "What controls Aniimo spawn rules?",
    answer:
      "Wild Aniimo spawn by region, weather, time of day, and trap placement. Spawn rules beyond environmental and weather hints are not announced as of 2026-08-29.",
    pageIds: ["fixed-catching-and-aniipods-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "catch-aniilog",
    question: "What is the Aniilog?",
    answer:
      "The Aniilog is the in-game capture log that records every catch attempt, listing form, region, weather, and outcome.",
    pageIds: ["fixed-catching-and-aniipods-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "catch-sneak-bonus",
    question: "What is the sneak bonus?",
    answer:
      "Approaching a wild Aniimo without alerting it grants a sneak bonus to the catch chance.",
    pageIds: ["fixed-catching-and-aniipods-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Elements and roles
  {
    id: "elements-count",
    question: "How many elements does Aniimo have?",
    answer:
      "Aniimo has nine elements: Fire, Water, Earth, Wind, Lightning, Ice, Light, Shadow, and Nature.",
    pageIds: ["fixed-elements-and-roles-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "roles-count",
    question: "How many combat roles does Aniimo have?",
    answer:
      "Aniimo has five combat roles: DPS, Heal, Support, Break, and Regen.",
    pageIds: ["fixed-elements-and-roles-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "elements-roles-interaction",
    question: "How do elements and roles interact?",
    answer:
      "Specific synergy coefficients are not announced as of 2026-08-29. A balanced 3-player squad typically includes one DPS, one healer or support, and one Break or Regen slot.",
    pageIds: ["fixed-elements-and-roles-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Regions
  {
    id: "regions-count",
    question: "How many regions does Aniimo have?",
    answer:
      "Total region count is subject to change per developer as of 2026-08-29. The Idyll continent includes beaches, grasslands, snowfields, volcanic caves, and the Astra sky metropolis.",
    pageIds: ["fixed-idyll-regions-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "regions-astra-access",
    question: "How do I reach the Astra sky metropolis?",
    answer:
      "Astra is reached via Twining into a flying form.",
    pageIds: ["fixed-idyll-regions-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "regions-weather-variants",
    question: "Do weather variants tie to regions?",
    answer:
      "Yes. Each region leans toward specific weather and element spawns. A regional sweep under native weather maximizes variant encounters.",
    pageIds: ["fixed-idyll-regions-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Heist
  {
    id: "heist-squad-size",
    question: "How big is a Heist of the Lost Isles squad?",
    answer:
      "Each Heist match uses a 3-player squad. The Diamond Egg Heist shown in Closed Beta 3 puts up to six of those three-player teams in the same match.",
    pageIds: ["fixed-heist-of-the-lost-isles-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "heist-diamond-egg-format",
    question: "What is the Diamond Egg Heist format?",
    answer:
      "Twisted Voxel describes the Diamond Egg Heist as pitting up to six teams of three players against one another: teams must secure a valuable diamond egg and safely escort it while defending against rival groups attempting to steal it. Whether it sits inside Heist of the Lost Isles or is a separate mode is not announced as of 2026-09-02.",
    pageIds: ["fixed-heist-of-the-lost-isles-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "heist-squad-composition",
    question: "What is the best Heist squad composition?",
    answer:
      "With only three slots, cover one damage answer, one survival answer, and one disruption answer: typically one DPS, one Heal or Support, and one Break or Regen. Spread element coverage across the three players rather than stacking one element, since Twining lets each player swap into a caught Aniimo's element mid-fight. Specific element multipliers are not announced as of 2026-09-02.",
    pageIds: ["fixed-heist-of-the-lost-isles-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "heist-co-op-bosses",
    question: "Who are Bubbask and Coraliz?",
    answer:
      "Bubbask and Coraliz are boss creatures added in Closed Beta 3 that players team up to battle, with challenges designed around group play. Whether they appear inside Heist of the Lost Isles, the Diamond Egg Heist, or a separate co-op activity is not announced as of 2026-09-02.",
    pageIds: ["fixed-heist-of-the-lost-isles-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "heist-rewards",
    question: "What rewards does Heist of the Lost Isles offer?",
    answer:
      "Reward structure and rank system for Heist of the Lost Isles are not announced as of 2026-09-02.",
    pageIds: ["fixed-heist-of-the-lost-isles-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "heist-solo-play",
    question: "Can I play Heist of the Lost Isles solo?",
    answer:
      "Solo play support is not announced as of 2026-09-02. Solo play is supported through the open-world PvE loop rather than Heist.",
    pageIds: ["fixed-heist-of-the-lost-isles-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Homeland
  {
    id: "homeland-skill-tree",
    question: "What is the Homeland Skills tree?",
    answer:
      "Homeland Skills is the long-term progression layer tied to the base. Specific skill tree and unlock conditions are not announced as of 2026-08-29.",
    pageIds: ["fixed-homeland-and-housing-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "homeland-housing-scope",
    question: "What is Aniimo Housing?",
    answer:
      "Aniimo Housing is a dedicated sub-mode within the Homeland layer covering decoration, room layouts, and Aniimo living quarters. Decoration catalog is not announced as of 2026-08-29.",
    pageIds: ["fixed-homeland-and-housing-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "homeland-region-placement",
    question: "Where can I place my Homeland?",
    answer:
      "Your Homeland sits in one of the Idyll regions. Placement rules and region limits are not announced as of 2026-08-29.",
    pageIds: ["fixed-homeland-and-housing-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Reception
  {
    id: "reception-launch-review",
    question: "Are there Aniimo launch-day reviews?",
    answer:
      "Launch-day reviews are not announced as of 2026-08-29 because Aniimo has not launched yet.",
    pageIds: ["fixed-review-and-reception-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "reception-monetization",
    question: "What concerns have preview outlets raised about Aniimo?",
    answer:
      "Preview coverage has raised three recurring concerns: monetization depth around the F2P model, AI-art questions tied to promotional material, and PC performance during the Closed Beta 3 window.",
    pageIds: ["fixed-review-and-reception-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "reception-pc-performance",
    question: "How was Aniimo PC performance in preview coverage?",
    answer:
      "PC performance concerns were raised during the Closed Beta 3 window. Performance claims are tied to the beta build and may shift at launch.",
    pageIds: ["fixed-review-and-reception-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
];
