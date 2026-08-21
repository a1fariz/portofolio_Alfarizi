import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#f4efe5",
        "surface-soft": "#eee7da",
        "surface-card": "#fbf8f1",
        "surface-card-hover": "#fffdf8",
        "surface-cream-strong": "#e6dac6",
        "surface-dark": "#e9dfcf",
        "surface-dark-elevated": "#fffdf8",
        "surface-dark-soft": "#eee7da",
        primary: {
          DEFAULT: "#7f6035",
          active: "#75552d",
          disabled: "#b8a98d",
          glow: "rgba(143, 109, 61, 0.18)",
        },
        accent: {
          red: "#8a3229",
          gold: "#ad8139",
          olive: "#68734b",
          cyan: "#476b66",
          emerald: "#527c5b",
          violet: "#7564a0",
        },
        ink: "#2b221b",
        "body-strong": "#4a3d31",
        body: "#5f5245",
        muted: {
          DEFAULT: "#72634f",
          soft: "#8a7a69",
        },
        "on-primary": "#fffaf0",
        "on-dark": "#f4efe5",
        "on-dark-soft": "#b0a292",
        hairline: {
          DEFAULT: "rgba(82, 61, 39, 0.16)",
          soft: "rgba(82, 61, 39, 0.08)",
          strong: "rgba(82, 61, 39, 0.3)",
        },
        border: "rgba(82, 61, 39, 0.16)",
        success: "#527c5b",
        warning: "#a87527",
        error: "#a3473f",
      },
      fontFamily: {
        display: ["var(--font-display)", '"Cormorant Garamond"', "Georgia", "serif"],
        serif: ["var(--font-display)", '"Cormorant Garamond"', "Georgia", "serif"],
        heading: ["var(--font-heading)", '"Plus Jakarta Sans"', "sans-serif"],
        sans: ["var(--font-inter)", '"Inter"', "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains)", '"JetBrains Mono"', "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(4rem, 10vw, 9rem)", { lineHeight: "0.82", letterSpacing: "-0.065em", fontWeight: "500" }],
        "display-lg": ["clamp(3rem, 7vw, 6.5rem)", { lineHeight: "0.88", letterSpacing: "-0.055em", fontWeight: "500" }],
        "display-md": ["clamp(2.5rem, 5vw, 4.75rem)", { lineHeight: "0.95", letterSpacing: "-0.045em", fontWeight: "500" }],
        "display-sm": ["clamp(2rem, 3.5vw, 3.25rem)", { lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "500" }],
        "title-lg": ["1.375rem", { lineHeight: "1.25", letterSpacing: "-0.02em", fontWeight: "600" }],
        "title-md": ["1.125rem", { lineHeight: "1.35", letterSpacing: "-0.01em", fontWeight: "600" }],
        "title-sm": ["1rem", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "500" }],
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
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
        section: "120px",
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(157, 63, 53, 0.2)",
        "glow-cyan": "0 0 35px -5px rgba(82, 123, 117, 0.18)",
        "glow-sm": "0 0 15px -3px rgba(143, 109, 61, 0.16)",
        soft: "0 24px 70px -35px rgba(66, 49, 32, 0.35)",
        card: "0 16px 40px -24px rgba(66, 49, 32, 0.28)",
      },
      animation: {
        "bounce-slow": "bounce-slow 2s infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "pulse-glow": "pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.65" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
