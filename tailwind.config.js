/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        muted: '#636674',
        main: '#44af49',
        secondary: '#cadb2e',
        pMain: '#0D6FD3',
        pSecondary: '#0845BF',
        pDark: '#131313',
        qdark: '#191D26',
        fourthly: '#1a1a1a',
      }
    },
  },
  plugins: [],
}

