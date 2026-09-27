import type { Config } from "tailwindcss";

/**
 * WEED INSURANCE AGENCY — Compliance Teal design system (Worker A overflow, CCA batch).
 *
 * Brand direction: deep compliance teal (#522D18), not dispensary green.
 * Cannabis business insurance is a B2B specialty surplus market — trust, credentialing,
 * and compliance signals matter more than cannabis culture aesthetics.
 * Warm amber CTA pops hard against deep teal. Warm off-white canvas standard CCA.
 *
 * Two layers:
 *  1. CCA foundation tokens + Weed niche signature (compliance teal brand ramp).
 *  2. LEGACY ALIASES mapped → new palette so C-owned files auto-retheme.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── CCA SHARED FOUNDATION ────────────────────────────────────────────
        canvas: "#FBF8F3",
        card: "#FFFFFF",
        panel: "#F3EEE6",
        ink: "#16201C",
        "ink-soft": "#3A4540",
        muted: "#5E6862",
        line: "#E7DFD3",
        "line-soft": "#F0EAE0",

        cta: {
          DEFAULT: "#E8821A",
          dark: "#C2690B",
          soft: "#FCE7CF",
        },

        // ── BRAND: compliance teal (Cannabis Business / Surplus Market niche) ─
        // Deep teal-slate evokes regulatory authority, specialty credentialing,
        // surplus market expertise — NOT recreational cannabis culture.
        // Fully distinct from SSV trail green (#1A4B2E) and dairy meadow (#1B5E34).
        brand: {
          DEFAULT: "#522D18",
          bright: "#97532C",
          ink: "#1F170F",
          50:  "#E8F2F6",
          100: "#EED4C5",
          200: "#DEAC8F",
          300: "#CE8155",
          400: "#B26234",
          500: "#97532C",
          600: "#713E21",
          700: "#522D18",
          800: "#2F2217",
          900: "#1F170F",
        },

        // ── LEGACY ALIASES → new palette ────────────────────────────────────
        "forest-green": {
          DEFAULT: "#522D18",
          dark: "#2F2217",
          50: "#E8F2F6",
          light: "#97532C",
        },
        "ember-orange": {
          DEFAULT: "#E8821A",
          dark: "#C2690B",
          light: "#F0943A",
        },
        "warm-white": "#FBF8F3",
        bark: {
          DEFAULT: "#16201C",
          light: "#3A4540",
        },
        timber: {
          DEFAULT: "#3A4540",
          light: "#5E6862",
        },
        border: "#E7DFD3",
      },

      fontFamily: {
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },

      boxShadow: {
        soft:         "0 1px 2px rgba(22,32,28,.04)",
        card:         "0 1px 2px rgba(22,32,28,.04), 0 10px 30px -12px rgba(22,32,28,.12)",
        "card-hover": "0 4px 8px rgba(22,32,28,.06), 0 24px 48px -16px rgba(82,45,24,.20)",
        cta:          "0 12px 28px -8px rgba(232,130,26,.45)",
        float:        "0 24px 64px -24px rgba(22,32,28,.30)",
      },
    },
  },
  plugins: [],
};
export default config;
