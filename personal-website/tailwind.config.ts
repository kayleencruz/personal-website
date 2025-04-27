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
        serif: ['"Inria Serif"', 'serif'],
        // Optional: add custom ones
        inria: ['"Inria Serif"', 'serif'],
        'inria-light': ['"Inria Serif"', 'serif'],
        'inria-bold': ['"Inria Serif"', 'serif'],
        // etc. — these still use utility classes for weight & style
      },
    },
  },
  plugins: [],
} satisfies Config;
