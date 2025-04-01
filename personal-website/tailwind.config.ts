import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        serifDisplay: ["DM Serif Display", "serif"],
        robotoFlex: ["Roboto Flex", "sans-serif"],
        robotoSerif: ["Roboto Serif", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
