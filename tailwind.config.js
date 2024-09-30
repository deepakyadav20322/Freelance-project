/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '4px 5px 18px 0px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}