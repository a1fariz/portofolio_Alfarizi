import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#faf9f5",
        "surface-soft": "#f5f0e8",
        "surface-card": "#efe9de",
        "surface-cream-strong": "#e8e0d2",
        "surface-dark": "#181715",
        "surface-dark-elevated": "#252320",
        "surface-dark-soft": "#1f1e1b",
        primary: {
          DEFAULT: "#cc785c",
          active: "#a9583e",
          disabled: "#e6dfd8",
        },
        ink: "#141413",
        "body-strong": "#252523",
        body: "#3d3d3a",
        muted: {
          DEFAULT: "#6c6a64",
          soft: "#8e8b82",
        },
        "on-primary": "#ffffff",
        "on-dark": "#faf9f5",
        "on-dark-soft": "#a09d96",
        hairline: {
          DEFAULT: "#e6dfd8",
          soft: "#ebe6df",
        },
        success: "#5db872",
        warning: "#d4a017",
        error: "#c64545",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "500" }],
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "500" }],
        "display-md": ["36px", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "500" }],
        "display-sm": ["28px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "500" }],
        "title-lg": ["22px", { lineHeight: "1.3", letterSpacing: "0", fontWeight: "500" }],
        "title-md": ["18px", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "500" }],
        "title-sm": ["16px", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "500" }],
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        pill: "9999px",
      },
      spacing: {
        xxs: "4px",
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        section: "96px",
      },
      maxWidth: {
        content: "1200px",
      },
      animation: {
        "bounce-slow": "bounce-slow 2s infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
      keyframes: {
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
