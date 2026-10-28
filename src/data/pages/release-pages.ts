import type { PageContent } from "@/types/content";

export const releasePages: PageContent[] = [
  {
    id: "system-requirements",
    translationKey: "system-requirements",
    locale: "en-US",
    routeKind: "fixed",
    slug: "system-requirements",
    url: "/system-requirements",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Aniimo System Requirements for PC",
    seoTitle: "Aniimo System Requirements: Minimum and Recommended PC Specs",
    metaDescription:
      "Check the minimum and recommended Windows PC requirements for Aniimo, including CPU, memory, graphics, DirectX, network, and storage.",
    summary:
      "Aniimo's Steam listing specifies minimum and recommended requirements for 64-bit Windows PCs, including 8 GB or 16 GB RAM and 40 GB of storage.",
    hero: {
      eyebrow: "PC requirements",
      subtitle:
        "The figures below reproduce the Windows specifications currently published on Aniimo's Steam store page.",
      ctas: [],
    },
    quickAnswer:
      "Aniimo requires a 64-bit processor and operating system. Steam lists Windows 10, an Intel Core i7-4770 or AMD Ryzen 7 2700, 8 GB RAM, a GTX 970 or Radeon RX 5600, DirectX 11, broadband internet, and 40 GB of storage as minimum; its recommended tier raises the CPU, GPU, and memory requirements.",
    keyFacts: [
      { label: "Minimum memory", value: "8 GB RAM" },
      { label: "Recommended memory", value: "16 GB RAM" },
      { label: "Storage", value: "40 GB" },
    ],
    modules: [
      {
        id: "windows-pc-requirements",
        type: "data-table",
        heading: "Steam-listed PC requirements",
        columns: [
          { key: "component", label: "Component" },
          { key: "minimum", label: "Minimum" },
          { key: "recommended", label: "Recommended" },
        ],
        rows: [
          {
            component: "System",
            minimum: "64-bit processor and operating system; Windows 10",
            recommended: "64-bit processor and operating system; Windows 10 or above",
          },
          {
            component: "Processor",
            minimum: "Intel Core i7-4770 / AMD Ryzen 7 2700",
            recommended: "Intel Core i7-10700 / AMD Ryzen 5 5600 or better",
          },
          { component: "Memory", minimum: "8 GB RAM", recommended: "16 GB RAM" },
          {
            component: "Graphics",
            minimum: "NVIDIA GeForce GTX 970 / AMD Radeon RX 5600",
            recommended: "NVIDIA GeForce RTX 3060 / AMD Radeon RX 6700 or better",
          },
          { component: "DirectX", minimum: "Version 11", recommended: "Version 11" },
          {
            component: "Network",
            minimum: "Broadband internet connection",
            recommended: "Broadband internet connection",
          },
          { component: "Storage", minimum: "40 GB available space", recommended: "40 GB available space" },
        ],
      },
      {
        id: "requirements-source-and-scope",
        type: "prose",
        heading: "Source and scope",
        body:
          "These are the Windows PC requirements listed on the [official Aniimo Steam page](https://store.steampowered.com/app/4126040/Aniimo/), checked on 28 October 2026. Steam does not list separate macOS or Linux specifications on that page. A listed specification is not a performance benchmark or a guarantee for every hardware configuration; check the store page for later changes before installing.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["guide-beginner-guide", "about"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-28",
  },
];
