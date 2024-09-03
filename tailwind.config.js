/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#4DB3C5",
        'secondary': "#009EA9"
      },
      backgroundColor : {
        'primary': "#4DB3C5",
        'secondary': "#009EA9"
      },
      container: {
        // you can configure the container to be centered
        center: true,
        // or have default horizontal padding
        padding: '1rem',
        // default breakpoints but with 40px removed
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1200px',
          '2xl': '1456px',
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
}

