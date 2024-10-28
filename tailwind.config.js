/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F1F3F4',
        secondaryBackground: '#F5F5F5',
        headerColor: '#5F6368',
        textColor: '#3C4043',
        tertiaryColor: '#006400',
        orangeColor: '#FFA500'
      }
    },
  },
  plugins: [],
}

