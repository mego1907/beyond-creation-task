/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#21436E",
        "white": "#fff",
        "form": "rgba(237, 237, 237, 0.50)",
        "transparent": "transparent"
      }
    },
    
  },
  plugins: [],
}