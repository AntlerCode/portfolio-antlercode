/* ============================================================
   AntlerCode design tokens — single source of truth in TS.
   Import for inline styles, CSS-in-JS themes, or charts where
   you can't reach the CSS variables.
   The values here are identical to those in app/globals.css.
   ============================================================ */
export const tokens = {
  color: {
    shadow:      "#1A1A1B", // app background — near-black, warm
    shadow2:     "#202022", // raised surface: cards, code, alt sections
    panel:       "#26262A", // highest surface: menus, overlays
    bone:        "#FAF7F2", // primary foreground / text
    copper:      "#B87333", // primary accent — links, eyebrows, italics
    copperSoft:  "rgba(184,115,51,.14)",
    ember:       "#9E3A3E", // secondary accent — primary CTA fill
    emberBright: "#C14A4F", // CTA hover
    emberSoft:   "rgba(158,58,62,.16)",
    muted:       "rgba(250,247,242,.56)", // secondary text
    dim:         "rgba(250,247,242,.54)", // tertiary / captions
    hair:        "rgba(250,247,242,.16)", // strong hairline / ghost border
    faint:       "rgba(250,247,242,.10)", // default border / divider
  },
  font: {
    serif: "var(--serif)",
    sans:  "var(--sans)",
    mono:  "var(--mono)",
  },
  space: {
    "2xs": "4px",  xs: "8px",  sm: "12px", md: "16px", lg: "24px",
    xl: "32px", "2xl": "48px", "3xl": "64px", "4xl": "96px", "5xl": "128px",
  },
  radius: { sm: "8px", md: "14px", lg: "22px", pill: "999px" },
  layout: {
    maxw: "1180px",
    gutter: "clamp(20px,5vw,64px)",
  },
} as const;

export type Tokens = typeof tokens;
