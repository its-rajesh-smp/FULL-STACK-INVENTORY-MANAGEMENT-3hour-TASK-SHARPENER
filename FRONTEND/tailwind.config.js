/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    gridTemplateColumns: {
      'productGrid': "1fr 1fr 1fr 1fr 1fr 3fr"
    },
    extend: {},
  },
  plugins: [],
}