import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#4F46E5",
          dark: "#4338CA",
          light: "#6366F1",
        },
        secondary: {
          DEFAULT: "#10B981",
          dark: "#059669",
          light: "#34D399",
        },
        "mice-elf": {
          light: "#4A3F69",
          dark: "#2A1B3D"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
