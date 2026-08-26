import type { Config } from "tailwindcss";

// Design tokens
// - navy / charcoal / cream are fixed brand colors.
// - `accent` resolves to a CSS variable (see app/globals.css) so the
//   amber vs. teal decision can be swapped in one place once confirmed.
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.json",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F3A",
        charcoal: "#1C1C1E",
        cream: "#F7F3EC",
        amber: "#D9A441",
        teal: "#1E7A6F",
        accent: "var(--color-accent)",
        background: "var(--color-bg)",
        foreground: "var(--color-fg)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
