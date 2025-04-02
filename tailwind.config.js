/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'arthur-black': '#000000',
        'arthur-dark': '#080000',
        'arthur-burgundy': '#49111C',
        'arthur-beige': '#D3CDBF',
      },
      fontFamily: {
        'hepta': ['Hepta Slab', 'serif'],
      },
    },
  },
  plugins: [],
};
