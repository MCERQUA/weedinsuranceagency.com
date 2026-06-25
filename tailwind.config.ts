import type { Config } from "tailwindcss";

/**
 * WEED INSURANCE AGENCY — Compliance Teal design system (Worker A overflow, CCA batch).
 *
 * Brand direction: deep compliance teal (#1A3A4C), not dispensary green.
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
          DEFAULT: "#1A3A4C",
          bright: "#2D6B8A",
          ink: "#0C1A22",
          50:  "#E8F2F6",
          100: "#C4DDEA",
          200: "#90BDD5",
          300: "#5B9BBF",
          400: "#3A7DA8",
          500: "#2D6B8A",
          600: "#22506A",
          700: "#1A3A4C",
          800: "#122735",
          900: "#0C1A22",
        },

        // ── LEGACY ALIASES → new palette ────────────────────────────────────
        "forest-green": {
          DEFAULT: "#1A3A4C",
          dark: "#122735",
          50: "#E8F2F6",
          light: "#2D6B8A",
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
        "card-hover": "0 4px 8px rgba(22,32,28,.06), 0 24px 48px -16px rgba(26,58,76,.20)",
        cta:          "0 12px 28px -8px rgba(232,130,26,.45)",
        float:        "0 24px 64px -24px rgba(22,32,28,.30)",
      },
    },
  },
  plugins: [],
};
export default config;
