import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          background: "var(--brand-background)",
          surface: "var(--brand-surface)",
          "surface-light": "var(--brand-surface-light)",
          pink: "var(--brand-pink)",
          mauve: "var(--brand-mauve)",
          text: "var(--brand-text)",
        },
        surface: "var(--surface)",
        "surface-light": "var(--surface-light)",
        pink: "var(--pink)",
        mauve: "var(--mauve)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
