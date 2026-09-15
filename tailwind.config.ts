import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#1A3428",
        woodland: "#0C1812",
        cream: "#F4F0E6",
        parchment: "#E8E2D4",
        brass: "#B08D57",
        ink: "#1A1A1A",
        sage: "#6B7F6E",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(19, 38, 28, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
