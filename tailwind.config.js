/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oleo: ["Oleo Script", "cursive"],
        // Optional: Weitere Fonts hinzufügen
        inter: ["Inter", "sans-serif"],
        quin: ["Quintessential", "cursive"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
