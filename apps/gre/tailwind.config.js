/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Rubik', 'system-ui', 'sans-serif'],
        'heading': ['Manrope', 'system-ui', 'sans-serif'],
        'body': ['Rubik', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
