// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "steel-gray": "#928dab",
        "dark-purple": "#1f1c2c",
        "mice-elf-light": "#948e99",
        "mice-elf-dark": "#2e1437",
      },
    },
  },
  plugins: [],
};
