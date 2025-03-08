/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode with class
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"], // Scans for Tailwind classes
  theme: {
    extend: {}, // Extend Tailwind default styles if needed
  },
  plugins: [
    require("@tailwindcss/typography"), // Enables Tailwind Typography plugin
  ],
};
