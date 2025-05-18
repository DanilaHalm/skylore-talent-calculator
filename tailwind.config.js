/** @type {import('tailwindcss').Config} */
module.exports = {
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
      backgroundImage: {
        Mage: "url('/public/Mage.png')",
        Hunter: "url('/public/Hunter.png')",
        Warrior: "url('/public/Warrior.png')",
        Shadow: "url('/public/Shadow.png')",
        Alchemist: "url('/public/Alchemist.png')",
      },
    },
  },
  plugins: [],
};
