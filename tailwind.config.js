/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: ['#254FAD'],
        secondary: [''],
        Headtext: ['#1A3866'],
        text: ['#181D26']
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'hero-background': "url('./src/assets/image.png')"
      }
    },
  },
  plugins: [],
}

