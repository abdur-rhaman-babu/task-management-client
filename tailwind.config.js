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
        secondary: "#1f2937", 
        dark: "#111827",
        border: '#4b5563',
        accent: '#92e3a9'
      },
    },
  },
  plugins: [require('daisyui'),],
}

