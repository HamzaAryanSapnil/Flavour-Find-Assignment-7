/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'fira': ['Fira Sans', 'sans-serif'],
        'lexend': ['Lexend', 'sans-serif'],
      },
      colors: {
        "navBlack": "#150B2B",
        "navBlack-seventy": "#150B2BB3",
        "navBlack-sixty": "#150B2B99",
        "nav-icon-bg": "#0BE58A",
        "recipe-header": "#282828",
        "recipe-header-eighty": "#282828CC",
        "recipe-des": "#878787",
      },
    },
  },
  plugins: [require("daisyui")],
}

