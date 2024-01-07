/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora'],
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [],
};
