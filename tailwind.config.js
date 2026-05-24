/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#fdfbf7', // Soft white / cream
          DEFAULT: '#d4af37', // Light gold accent
          dark: '#2c2c2c',
          beige: '#f5f0e6', // Warm beige
          green: '#4caf50', // Subtle green highlights
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
