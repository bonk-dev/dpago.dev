/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'mono': ['Fira Code'],
      'sans': ['Inter']
    }
  },
  plugins: [
      require('@tailwindcss/typography')
  ],
}

