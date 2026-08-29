import type { ThemeConfig } from "@/types/theme";

export const theme = {
  mode: "mixed",
  tokens: {
    pageBg: "#F4F7F3",
    surface1: "#FFFFFF",
    surface2: "#E9EEE8",
    surface3: "#DBE4DC",
    surfaceInverse: "#101F33",
    textPrimary: "#14201A",
    textMuted: "#4C5B52",
    textInverse: "#E9F1EF",
    textOnAccentPrimary: "#FFFFFF",
    textLink: "#0A5C66",
    focusRing: "#1B7F86",
    line: "#D3DCD4",
    lineStrong: "#6E7D71",
    accentPrimary: "#0F6152",
    accentSecondary: "#4C3A8C",
    accentBright: "#5FE0C0",
    statusConfirmed: "#1F6B3A",
    statusCaution: "#8A5A08",
    statusUnknown: "#4F5A66",
  },
  typography: {
    headingFamily:
      "Nunito, 'Segoe UI', system-ui, -apple-system, 'Helvetica Neue', Arial, 'PingFang SC', 'Hiragino Sans', 'Microsoft YaHei', sans-serif",
    bodyFamily:
      "Inter, 'Segoe UI', system-ui, -apple-system, 'Helvetica Neue', Arial, 'PingFang SC', 'Hiragino Sans', 'Microsoft YaHei', sans-serif",
    headingWeight: 800,
  },
  shape: {
    radius: "14px",
    borderWidth: "1px",
    shadow:
      "0 1px 2px rgba(16, 31, 51, 0.06), 0 8px 20px rgba(16, 31, 51, 0.08)",
    hoverLift: "2px",
  },
  density: "comfortable",
  background: { mode: "gradient", overlay: 0, position: "top center" },
  variants: {
    home: "split-panel",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "organic", intensity: "medium" },
} satisfies ThemeConfig;