import type { ThemeConfig } from "@/types/theme";

// Aniimo-specific visual configuration. The creature-catching, open-world Idyll
// feel leans on a warm grass-green accent paired with an amber secondary and a
// dim caution red used in Egg Heist and survival guidance.
export const theme: ThemeConfig = {
  mode: "light",
  navigation: "header",
  tokens: {
    pageBg: "#fafaf5",
    surface1: "#ffffff",
    surface2: "#f0f1e8",
    surface3: "#dfe2d4",
    surfaceInverse: "#1f2a1f",
    textPrimary: "#1f2a1f",
    textMuted: "#5f6a5a",
    textInverse: "#ffffff",
    textOnAccentPrimary: "#ffffff",
    textLink: "#3f5524",
    focusRing: "#3f5524",
    line: "#d3d9c8",
    lineStrong: "#a3ac9a",
    accentPrimary: "#6b8a3a",
    accentSecondary: "#b8763e",
    accentBright: "#8aab50",
    statusConfirmed: "#3f5524",
    statusCaution: "#8a3a3a",
    statusUnknown: "#5f6a5a",
  },
  typography: {
    headingFamily:
      "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    bodyFamily:
      "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    headingWeight: 700,
  },
  shape: { radius: "6px", borderWidth: "1px", shadow: "0 2px 8px rgba(31, 42, 31, 0.06)", hoverLift: "2px" },
  density: "comfortable",
  background: { mode: "solid", overlay: 0, position: "center" },
  variants: {
    home: "guide-portal",
    hub: "grouped-list",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "none", intensity: "low" },
};
