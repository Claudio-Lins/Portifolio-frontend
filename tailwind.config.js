/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  
  theme: {
    extend: {
      colors: {
        background: "#272332",
        primary: "#71eac6",
        lightPrimary: "#bee0d6",
        darkPrimary: "#254b45",
        error: "#ff8989",
        gray: "#808080",
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [],
}
