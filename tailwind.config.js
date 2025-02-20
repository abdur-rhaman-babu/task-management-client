/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#58a296", 
        secondary: "#FF9800", 
        dark: "#111827",
      },
    },
  },
  plugins: [],
}

