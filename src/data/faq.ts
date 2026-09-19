import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  // Homepage
  {
    id: "home-when-release",
    question: "When does Aniimo release?",
    answer:
      "Aniimo launches in two confirmed September 2026 windows. PS5, Xbox Series X|S, Xbox Cloud Gaming, and PC (Steam and Epic) launch on 16 September 2026; iOS and Android launch one week later, on 23 September 2026. The earlier single 15-16 September 2026 window is superseded.",
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
      "Aniimo launches on PS5, Xbox Series X|S, Xbox Cloud Gaming, PC via Steam and Epic Games Store, iOS, and Android. PS5, Xbox, Xbox Cloud, and PC ship on 16 September 2026; iOS and Android ship one week later, on 23 September 2026. A Nintendo Switch version is not announced as of 2026-09-05.",
    pageIds: ["home", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-pc-spec",
    question: "Can my PC run Aniimo?",
    answer:
      "The current English Steam page lists an Intel Core i7-4770 or AMD Ryzen 7 2700 with an NVIDIA GTX 970 or AMD Radeon RX 5600 and 8 GB of RAM as the minimum, and an Intel Core i7-10700 or AMD Ryzen 5 5600 with an NVIDIA GeForce RTX 3060 or AMD Radeon RX 6700 and 16 GB of RAM as the recommended spec. Both tiers need 40 GB of storage, and older regional pages showing 12 GB / 45 GB or 8 GB / 30 GB still surface prior wording.",
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
      "Aniimo releases in two windows in September 2026. PS5, Xbox Series X|S, Xbox Cloud Gaming, and PC (Steam and Epic) launch on 16 September 2026; iOS and Android launch on 23 September 2026. The earlier 15-16 September 2026 single-window framing is superseded.",
    pageIds: ["fixed-release-overview-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-mobile-date",
    question: "When does Aniimo release on iOS and Android?",
    answer:
      "Aniimo releases on iOS and Android on 23 September 2026, one week after the PS5, Xbox, Xbox Cloud, and PC launch on 16 September 2026.",
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
      "The launch interface supports English plus twelve non-English languages (Simplified Chinese, Traditional Chinese, Japanese, Korean, French, German, Spanish (Latin America), Portuguese (Brazil), Russian, Indonesian, Thai, Vietnamese). The main-story voiceover ships in multiple languages alongside English, with nine interface languages (Simplified / Traditional Chinese, Japanese, Korean, French, German, Spanish (Latin America), Portuguese (Brazil)) receiving main-story VO. Russian, Indonesian, Thai, and Vietnamese remain interface-only at launch.",
    pageIds: ["fixed-release-overview-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-unlock-hour",
    question: "Is the Aniimo launch hour announced?",
    answer:
      "Yes. The simultaneous global unlock anchors on 10:00 UTC+8 on 16 September 2026 for PS5, Xbox Series X|S, Xbox Cloud Gaming, and PC (Steam and Epic). Per-timezone conversions: PT 19:00 Sep 15, CT 21:00 Sep 15, ET 22:00 Sep 15, BRT 23:00 Sep 15, BST 02:00 Sep 16, CEST 03:00 Sep 16, CST 10:00 Sep 16, KST 11:00 Sep 16, JST 11:00 Sep 16, AET 13:00 Sep 16, NZST 15:00 Sep 16. Mobile (iOS and Android) players unlock on 23 September 2026 at the same 10:00 UTC+8 anchor. See the [Aniimo release overview](/release-overview) page for the full table.",
    pageIds: ["fixed-release-overview-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-unlock-timezones",
    question: "What time does Aniimo unlock in my time zone?",
    answer:
      "Aniimo unlocks simultaneously across PC, PS5, and Xbox Series X|S at 10:00 UTC+8 on 16 September 2026. Per-timezone conversions: PT 19:00 Sep 15, CT 21:00 Sep 15, ET 22:00 Sep 15, BRT 23:00 Sep 15, BST 02:00 Sep 16, CEST 03:00 Sep 16, CST 10:00 Sep 16, KST 11:00 Sep 16, JST 11:00 Sep 16, AET 13:00 Sep 16, NZST 15:00 Sep 16. Mobile (iOS and Android) unlocks one week later on 23 September 2026 at the same 10:00 UTC+8 anchor.",
    pageIds: ["fixed-release-overview-en-us", "home", "faq"],
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
      "Xbox Cloud Gaming is a confirmed day-one track on 16 September 2026. GeForce Now and PlayStation Plus Premium streaming availability are not announced as of 2026-09-05.",
    pageIds: ["fixed-platforms-and-versions-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "platforms-xbox-cloud",
    question: "Does Aniimo run on Xbox Cloud Gaming?",
    answer:
      "Yes. Aniimo is a confirmed day-one title on Xbox Cloud Gaming alongside the direct Xbox Series X|S install, both launching on 16 September 2026.",
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
      "The current English Steam page lists 8 GB of RAM for the minimum spec and 16 GB of RAM for the recommended spec. Older regional pages still surface prior wording (12 GB / 45 GB or 8 GB / 30 GB) and are superseded by the current English Steam page.",
    pageIds: ["fixed-system-requirements-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "spec-cpu-gpu",
    question: "Which CPU and GPU does Aniimo need on PC?",
    answer:
      "The minimum spec asks for an Intel Core i7-4770 or AMD Ryzen 7 2700 or above with an NVIDIA GTX 970 or AMD Radeon RX 5600. The recommended spec asks for an Intel Core i7-10700 or AMD Ryzen 5 5600 or above with an NVIDIA GeForce RTX 3060 or AMD Radeon RX 6700. Both tiers require a 64-bit processor and operating system on DirectX 11 with a broadband internet connection.",
    pageIds: ["fixed-system-requirements-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "spec-storage",
    question: "How much storage does Aniimo need on PC?",
    answer:
      "The current English Steam page lists 40 GB of available space for both the minimum and recommended tiers. Older regional pages still surface prior wording (45 GB or 30 GB) and are superseded. An SSD is recommended for shader and streaming performance.",
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
      "The current English Steam page is authoritative. Older regional pages still surface prior wording — some show 8 GB / 30 GB, others show 12 GB / 45 GB — sometimes with blank CPU and GPU rows, and are not current.",
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
      "Aniimo's base game is free-to-play. The PlayStation Store and Xbox Store also list paid Advanced ($9.99) and Collector's ($19.99) pre-order packs that bundle a platform-exclusive accessory and the Companion Handbook battle pass. Steam does not list a paid pre-order edition.",
    pageIds: ["fixed-pre-order-and-editions-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "preorder-edition",
    question: "Is there a paid Aniimo edition?",
    answer:
      "Yes. Two paid pre-order packs are listed on the PlayStation Store and Xbox Store: the Advanced Edition ($9.99) and the Collector's Edition ($19.99). Both include the platform-exclusive accessory (PS5 Fluffy Friend or Xbox Doggo Dude) and the Companion Handbook battle pass. The Collector's Edition adds the Primegy Battery granted immediately and the exclusive Doll and Avatar Frame inside the Collector's Companion Handbook. The pre-order window closes on 16 September 2026 at 09:59 UTC+8.",
    pageIds: ["fixed-pre-order-and-editions-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "preorder-advanced-edition",
    question: "What is in the Aniimo Advanced Edition?",
    answer:
      "The Aniimo Advanced Edition is a $9.99 pre-order pack on PS5 and Xbox. It bundles the platform-exclusive accessory (PS5 Fluffy Friend or Xbox Doggo Dude) and the Advanced Companion Handbook battle pass. The Advanced Companion Handbook unlocks rewards as it levels up, including the Companion Handbook-Exclusive Prismana Aniimo Egg and the Companion Handbook-Exclusive Evolution Material.",
    pageIds: ["fixed-pre-order-and-editions-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "preorder-collectors-edition",
    question: "What is in the Aniimo Collector's Edition?",
    answer:
      "The Aniimo Collector's Edition is a $19.99 pre-order pack on PS5 and Xbox. It includes the platform-exclusive accessory (PS5 Fluffy Friend or Xbox Doggo Dude), the Collector's Companion Handbook battle pass, the Primegy Battery granted immediately, and the exclusive Doll and Avatar Frame inside the Collector's Companion Handbook. The Collector's pass is the longer Companion Handbook track; the exclusive Doll and Avatar Frame sit on it rather than on the Advanced pass.",
    pageIds: ["fixed-pre-order-and-editions-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "preorder-companion-handbook",
    question: "What is the Aniimo Companion Handbook?",
    answer:
      "The Companion Handbook is an in-game battle pass included with both the Advanced ($9.99) and Collector's ($19.99) editions on PS5 and Xbox. Rewards unlock as the Companion Handbook levels up rather than all at purchase. Its signature items are the Companion Handbook-Exclusive Prismana Aniimo Egg — which hatches a Prismana Form Aniimo with Perfect Potential at the Outpost Hatchinator — and the Companion Handbook-Exclusive Evolution Material, which is used in the standard Lumin to Gamma to Nova evolution pipeline.",
    pageIds: ["fixed-pre-order-and-editions-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "preorder-platform-exclusives",
    question: "Which platform-exclusive accessory comes with the Aniimo editions?",
    answer:
      "The Aniimo Advanced and Collector's editions each include a platform-exclusive accessory that is locked to the storefront you pre-order from. PS5 pre-orders include the Fluffy Friend accessory; Xbox pre-orders include the Doggo Dude accessory. The accessory is the only platform-locked piece inside the paid pack; the Companion Handbook battle pass and its contents are the same on both platforms.",
    pageIds: ["fixed-pre-order-and-editions-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "preorder-pre-order-window",
    question: "When does the Aniimo pre-order window close?",
    answer:
      "The pre-order window for the Advanced ($9.99) and Collector's ($19.99) editions on PS5 and Xbox closes on 16 September 2026 at 09:59 UTC+8 — one minute before the 10:00 UTC+8 simultaneous global unlock on PC, PlayStation 5, and Xbox Series X|S. After the cutoff the paid editions come off the storefront; the free base game stays free.",
    pageIds: ["fixed-pre-order-and-editions-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "preorder-rewards",
    question: "What does pre-registering for Aniimo unlock?",
    answer:
      "Pre-registering on the official aniimo.com site claims the Susuta egg, and every pre-registered player shares the global milestone ladder: Glimmer x200 at 10M sign-ups, Aniipod Ultra x2 at 15M, the \"Companion Promise\" limited avatar frame at 20M, and the \"Sunlit Meadow\" limited outfit at 30M. The Perfect Egg is separate and comes from multi-day logins rather than from pre-registration. The paid Advanced and Collector's editions do not replace these tracks.",
    pageIds: ["fixed-pre-order-and-editions-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "preorder-platform-links",
    question: "Where do I pre-register for Aniimo on my platform?",
    answer:
      "The official site links six storefronts for the free-to-play pre-registration: the PlayStation Store concept page, the Xbox Store listing, Steam (AppID 4126040), the Epic Games Store page, the Apple App Store listing, and an official Google Play link. Storefront pre-registration queues the free-to-play download; it does not replace the aniimo.com form that claims the Susuta egg.",
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
      "Aniimo is free-to-play with optional in-app purchases. On PS5 and Xbox, the Advanced ($9.99) and Collector's ($19.99) pre-order packs are the primary launch paid tiers and bundle a platform-exclusive accessory and the Companion Handbook battle pass. Steam does not list a paid pre-order edition as of 2026-09-14. Specific IAP bundles and any post-launch battle pass structure beyond the Companion Handbook are not announced.",
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
  {
    id: "twining-rune-system-removed",
    question: "Was the Aniimo rune system removed?",
    answer:
      "Yes. The 2026-09-03 dev letter removed the carried-item rune system, including random rune slots and the per-creature Rune Slot, in favor of a simplified training layer. Earlier coverage and pre-launch material that described a rune-equipped Aniipod is superseded.",
    pageIds: ["fixed-twining-system-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "twining-training-simplification",
    question: "What replaced the Aniimo rune system?",
    answer:
      "A simplified training layer replaced the rune system. Capability unlocks and stat growth now sit on the simplified training progression rather than on rune drops, as part of the same 2026-09-03 dev-letter rework that introduced the Prismana lucky strike flow and the Umbral Aniimo via Wild Surges.",
    pageIds: ["fixed-twining-system-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "twining-capability-awakening-reset",
    question: "Can I reset Aniimo Capability Awakening?",
    answer:
      "Yes. Under the 2026-09-03 dev letter, Capability Awakening can be reset for Aniimo below level 60 without penalty, so players can re-plan capability allocations on early-game forms.",
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
      "A Prismana form is an alternate-color variant of an Aniimo with a shifted palette and slightly different stats. It follows the same Lumin to Gamma to Nova evolution path as a standard form. Under the 2026-09-03 dev letter, Prismana catches resolve through a flat-base trigger chance plus a lucky strike on season-exclusive spawn windows.",
    pageIds: ["fixed-starter-and-prismana-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "prismana-flat-base-trigger",
    question: "How do Prismana encounters trigger in Aniimo?",
    answer:
      "Prismana encounters trigger on a flat-base chance that fires during a catch attempt against an eligible wild form. The flat-base chance replaces the older 'rare catalog of Prismana variants' framing.",
    pageIds: ["fixed-starter-and-prismana-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "prismana-lucky-strike",
    question: "What is the Aniimo Prismana lucky strike?",
    answer:
      "Lucky strike is the catching-side roll that lands a Prismana when the flat-base trigger fires. A successful lucky strike resolves the encounter as a Prismana catch; a failed lucky strike on the same catch counts as a normal catch without the Prismana outcome. The exact trigger value is not announced as of 2026-09-05.",
    pageIds: ["fixed-starter-and-prismana-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "prismana-season-spawn",
    question: "Are Prismana encounters season-exclusive?",
    answer:
      "Yes. The 2026-09-03 dev letter reworked Prismana encounters onto season-exclusive spawn windows during which the flat-base trigger is active for eligible forms. Season-exclusive spawns run alongside — not in place of — the standard weather, regional, and Sparkling variant layers.",
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
      "A Sparkling variant is a rare palette-swapped form with a shifted appearance. The full Sparkling roster is not officially published as of 2026-09-05.",
    pageIds: ["fixed-evolution-and-stages-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "evolution-umbral-variant",
    question: "What is the Aniimo Umbral variant?",
    answer:
      "Umbral is a top-end visual variant introduced in the 2026-09-03 dev letter, with a distinctive coloration and a Perfect Potential stat outcome. Umbral forms are reached through Wild Surges and rare open-world encounters, and they still evolve through the Lumin to Gamma to Nova pipeline while keeping the Umbral colouring.",
    pageIds: ["fixed-evolution-and-stages-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "evolution-legendary-irisalis",
    question: "How do I catch Irisalis in Aniimo?",
    answer:
      "Irisalis is a Legendary Aniimo caught through a redesigned token-craft flow: gather Legendary Aniipod tokens from exploration and story content, craft a personal Legendary Aniipod, trigger the one-time exclusive Irisalis encounter, defeat Irisalis in combat, and throw the crafted Legendary Aniipod to secure the catch. The flow replaces the earlier gacha-style ball-spam loop.",
    pageIds: ["fixed-evolution-and-stages-en-us", "fixed-catching-and-aniipods-en-us"],
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
  {
    id: "catch-sparkling-cube-perfect-potential",
    question: "Does the Sparkling Cube guarantee Perfect Potential?",
    answer:
      "Yes. Under the 2026-09-03 dev letter, any catch resolved through a launch-day Sparkling Cube lands on the maximum individual-values spread for the resulting form, so every Sparkling Cube outcome is a top-stat catch.",
    pageIds: ["fixed-catching-and-aniipods-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "catch-legendary-aniipod-craft",
    question: "How do I craft a Legendary Aniipod in Aniimo?",
    answer:
      "Legendary Aniipods are crafted at the Legendary Aniipod bench from Legendary tokens earned through exploration and story content. The crafted Aniipod is the personal capture device you throw to resolve the Legendary encounter — for Irisalis specifically, the encounter is one-time and exclusive.",
    pageIds: ["fixed-catching-and-aniipods-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "catch-irisalis-flow",
    question: "Can I win the Irisalis encounter on the first try?",
    answer:
      "Yes. The 2026-09-03 dev letter put Irisalis on a deterministic token-craft flow: gather tokens, craft a personal Legendary Aniipod, trigger the one-time exclusive encounter, defeat Irisalis, and throw the crafted Aniipod. Because the Aniipod is crafted rather than random, players who plan ahead can win Irisalis on the first try.",
    pageIds: ["fixed-catching-and-aniipods-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "catch-chance-formula",
    question: "How is the Aniimo catch chance calculated?",
    answer:
      "The aniimo.com/formula-multipliers page publishes a multiplier stack: Catch Chance = Base Chance (set by area tier) × Aniipod tier × Tumbler × level-difference multiplier × HP multiplier × Back Attack (×1.5 if applicable) × Special Status multiplier. Each modifier multiplies into the next, so stacking an Aniipod Ultra, a Tumbler, a level-difference bonus, an HP-band bonus, a Back Attack, and a Special Status can lift a low Base Chance encounter into a comfortable catch band.",
    pageIds: ["fixed-catching-and-aniipods-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "catch-nurture-pity",
    question: "What are the Nurture Prismana numbers in Aniimo?",
    answer:
      "Nurture is the per-roll chance that an Aniipod resolution produces a Prismana form on the caught body. The published numbers on aniimo.com/formula-multipliers are 3% per roll, a 480-roll soft pity where the per-roll chance starts rising, and a 10,500 hard pity where the catch is forced into a Prismana outcome regardless of the roll.",
    pageIds: ["fixed-catching-and-aniipods-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "catch-sparkling-style-probability",
    question: "What are the Sparkling Style probabilities in Aniimo?",
    answer:
      "On a standard Sparkling Cube catch, Sparkling Style resolves 99% Dazzling and 1% Shadow. On Egg Heist drops the table is inverted: 99% Shadow and 1% Dazzling. Treat the standard Sparkling Style outcome as the Dazzling-leaning one and Egg Heist drops as the Shadow-leaning one when planning variant farming.",
    pageIds: ["fixed-catching-and-aniipods-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "catch-alpha-held-items",
    question: "How do Alpha held items work in Aniimo?",
    answer:
      "Alpha rolls follow the published Alpha held-item drop table indexed by Title Level on aniimo.com/formula-multipliers; the pool widens as Title Level rises. Omega rolls override the Alpha table and resolve from the separate Omega pool. Alpha and Omega do not stack — a roll resolves on one table or the other, never both.",
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
      "Solo play support is not announced as of 2026-09-05. Solo play is supported through the open-world PvE loop rather than Heist.",
    pageIds: ["fixed-heist-of-the-lost-isles-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "heist-chaos-mode",
    question: "What is Aniimo Heist Chaos Mode?",
    answer:
      "Chaos Mode is a new mode layered on the six-team Diamond Egg Heist format. It adds a wider egg-type pool and rebalances squad and element priorities toward higher-pressure contested-cache play, with the Break slot in particular gaining importance.",
    pageIds: ["fixed-heist-of-the-lost-isles-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "heist-rank-ladder",
    question: "What is the Operation: Egg Heist rank ladder in Aniimo?",
    answer:
      "The published Operation: Egg Heist rank ladder starts at Rising Egg Scout and climbs to Expert Egg Raider. Intermediate ranks are reserved for the in-game ladder that the developer has not enumerated in public materials as of 2026-09-20. Treat Rising Egg Scout as the early gate and Expert Egg Raider as the higher gate, both of which carry trophy thresholds.",
    pageIds: ["fixed-heist-of-the-lost-isles-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "heist-prismana-hoard",
    question: "How do I earn the Prismana Hoard trophy in Aniimo?",
    answer:
      "The Prismana Hoard trophy is gated on five Prismatic collectibles captured across Heist runs. Prismatic collectibles drop from the wider Chaos Mode egg-type pool and from rare Diamond Egg Heist caches; the trophy fires once you have logged five such captures through the Aniilog on your account.",
    pageIds: ["fixed-heist-of-the-lost-isles-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "heist-safe-and-sound",
    question: "How do I earn the Safe and Sound trophy in Aniimo?",
    answer:
      "The Safe and Sound trophy is gated on winning a Heist run in Nightmare Team Mode without losing a squad member. The no-loss condition is the binding constraint — squad wipe at any point in the run disqualifies the trophy even if the diamond egg is otherwise secured and escorted.",
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
      "Your Homeland sits in one of the Idyll regions. Placement rules and region limits are not announced as of 2026-09-05.",
    pageIds: ["fixed-homeland-and-housing-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "homeland-multi-area",
    question: "Can I build multiple areas in my Aniimo Homeland?",
    answer:
      "Yes. The 2026-09-03 dev letter expanded the Homeland into a multi-area base where houses, gardens, RV bays, and social spaces each have their own buildable footprint.",
    pageIds: ["fixed-homeland-and-housing-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "homeland-furniture-codes",
    question: "How do I share Aniimo furniture layouts?",
    answer:
      "Furniture selections and full area layouts are packaged into a shareable group code. A friend can paste the code into their own multi-area base to inherit the same arrangement; the receiving player still needs the underlying furniture pieces in their own catalog for the layout to render fully.",
    pageIds: ["fixed-homeland-and-housing-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "homeland-petting-ai",
    question: "Can I pet Home Aniimo in Aniimo?",
    answer:
      "Yes. The 2026-09-03 dev letter introduced a Home Aniimo petting AI that reacts to player presence and to furniture state inside the Homeland. Petting is a Homeland-only behaviour and does not extend into open-world exploration.",
    pageIds: ["fixed-homeland-and-housing-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "homeland-rv-dispatch-prismana-eggs",
    question: "Can the Aniimo RV return Prismana eggs?",
    answer:
      "Yes. Under the 2026-09-03 dev letter, RV dispatch routes may return Prismana-trait eggs, so the RV is now a planned input into the Prismana catch flow. Specific routes, per-route egg tables, and Prismana-trait rates are not announced as of 2026-09-05.",
    pageIds: ["fixed-homeland-and-housing-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Companion Mode
  {
    id: "companion-mode-reach-friend",
    question: "How do I reach a friend in Aniimo Companion Mode?",
    answer:
      "Reach a friend by sitting on the same regional shard and linking through the Aniimo Pass. The shard determines which server pool you both match into, and the Aniimo Pass link is the social handshake that lets the two accounts see each other in the open world and at social hubs. Without the same shard or the Aniimo Pass link, the social layer does not pair the two accounts.",
    pageIds: ["fixed-companion-mode-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "companion-mode-trophies",
    question: "What are the Companion Mode trophies in Aniimo?",
    answer:
      "The published Companion Mode trophy list is A Buddy for My Buddy (gift one Aniimo), Treasured Trade (complete one exchange), Hearts in Tune (reach Twin Bond Level 5), Friends in Focus (take a Photo Studio shot with a friend), and A Match Made Through Music (play the flute with a friend nearby). The In the Same Frame photo trophy is the same Photo Studio setup framed on the friend.",
    pageIds: ["fixed-companion-mode-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "companion-mode-twin-bond-level",
    question: "How do I reach Twin Bond Level 5 in Aniimo?",
    answer:
      "Twin Bonds raise as you play with the same friend. Stacking gifting, trading, photo shots, and co-op encounters in one session is the fastest path to Level 5. Concentrate the social actions on one friend rather than spreading them across many friends if you want any single bond to reach Level 5 quickly.",
    pageIds: ["fixed-companion-mode-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "companion-mode-gifting-path",
    question: "What is the easiest way to fill the gifting trophy in Aniimo?",
    answer:
      "The Companion Handbook battle pass on the Advanced and Collector's editions drops the Companion Handbook-Exclusive Prismana Aniimo Egg, which hatches a Prismana Form Aniimo with Perfect Potential at the Outpost Hatchinator. That egg is a clean Prismana body for gifting because it does not pull from your active roster.",
    pageIds: ["fixed-companion-mode-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "companion-mode-treasured-trade",
    question: "How is Treasured Trade different from standard trading?",
    answer:
      "Treasured Trade is the named, one-shot exchange action tied to the Companion Mode trophy. Unlike the standard Trading system described on the closed-beta-and-signups page, Treasured Trade resolves as a single named exchange rather than as a roster-for-roster swap, and the trophy fires once the exchange resolves on both sides.",
    pageIds: ["fixed-companion-mode-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "companion-mode-photo-studio",
    question: "What is the Photo Studio trophy setup in Aniimo?",
    answer:
      "The Photo Studio is the in-game capture space where two players can pose together. The Friends in Focus trophy fires when the shot is taken with the friend visible in the frame. The In the Same Frame trophy is the same setup framed on the friend. Take both trophies in one Photo Studio visit.",
    pageIds: ["fixed-companion-mode-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "companion-mode-flute",
    question: "What is the A Match Made Through Music trophy in Aniimo?",
    answer:
      "The A Match Made Through Music trophy fires when you play the flute with a friend nearby on the same shard. The flute action is intentionally lightweight, so sequence it with the other four Companion Mode trophies in one session rather than reconnecting for each trophy.",
    pageIds: ["fixed-companion-mode-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Potential and Personality
  {
    id: "potential-mbti-axes",
    question: "What are the four MBTI-style personality axes in Aniimo?",
    answer:
      "Aniimo uses four MBTI-style axes to define personality: Energy (E / I), Perception (S / N), Judgment (T / F), and Lifestyle (J / P). Each axis pairs two poles, and the caught Aniimo's personality resolves as a combination of those poles. The combination picks which stat from the P.ATK, M.ATK, damage, crit, P.DEF, M.DEF, HP, and gusto pool the appraisal bonus lands on.",
    pageIds: ["fixed-potential-and-personality-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "potential-appraisal-tiers",
    question: "What are the Aniimo appraisal tiers and bonuses?",
    answer:
      "The appraisal tiers are Somewhat (+3%), Relatively (+6%), and Very (+10%). Most catches resolve at the Somewhat tier; the Relatively and Very tiers are weighted by how aligned the catch is with the personality axes. The tier is decided at catch time on the Innate Potential layer.",
    pageIds: ["fixed-potential-and-personality-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "potential-named-personalities",
    question: "What are the named personalities in Aniimo?",
    answer:
      "The four named personalities are Clingy (I / F leaning), Practical (S / T leaning), Aloof (I / N leaning), and Faithful (E / J leaning). Each leans on a different stat from the published pool; exact stat mappings for each named personality are partially published and the bespoke bonus surface is the public detail.",
    pageIds: ["fixed-potential-and-personality-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "potential-stat-pool",
    question: "Which stats does Aniimo Potential modify?",
    answer:
      "The published stat pool is P.ATK (physical attack), M.ATK (magic attack), damage, crit, P.DEF (physical defence), M.DEF (magic defence), HP, and gusto. The appraisal tier (+3% / +6% / +10%) lands on the stat the personality axes pick, so a Very Practical appraisal lands +10% on a Practical-axis stat from that pool.",
    pageIds: ["fixed-potential-and-personality-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "potential-innate-acquired",
    question: "What is the difference between Innate and Acquired Potential in Aniimo?",
    answer:
      "Innate Potential is locked at catch time and rides with the body forever. Acquired Potential is added through the simplified training progression and the Capability Awakening system, and it sits on top of the Innate layer. The two stack on the same axis, or land on two different stats if the Acquired roll picks a different axis from the Innate roll.",
    pageIds: ["fixed-potential-and-personality-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "potential-reroll-free-path",
    question: "How do I reroll Aniimo Potential without spending money?",
    answer:
      "The free-path reroll uses in-game consumables rather than paid currency. Use the consumables to reroll the Acquired appraisal until it lands on the axis and tier you want. The Innate appraisal is locked at catch time and cannot be rerolled; the reroll only touches the Acquired layer.",
    pageIds: ["fixed-potential-and-personality-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "potential-stacking-sparkling-prismana",
    question: "Does Aniimo Potential stack with Sparkling Cube and Prismana?",
    answer:
      "Yes. Sparkling Cube Perfect Potential lands the body on the maximum individual-values spread, the Prismana flat-base trigger shifts the base stats upward on the alternate-color variant, and the personality appraisal adds +3% / +6% / +10% on top of those two layers. The three layers combine on the same body rather than replacing each other.",
    pageIds: ["fixed-potential-and-personality-en-us"],
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
