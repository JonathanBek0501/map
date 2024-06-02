/** @type {import('tailwindcss').Config} */
export default {
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
        brand: {
          cream: {
            DEFAULT: '#EFEBE2',
            dark: '#EDE6D8'
          },
          brown: '#AD8C48'
        }
      },
      fontFamily: {
        Americana: ['Americana', 'sans-serif'],
        ArabicPro: ['Basis Grotesque Arabic Pro', 'sans-serif']
      },
      maxWidth: {
        base: '1440px'
      },
      borderRadius: {
        '2.5xl': '20px'
      }
    },
  },
  plugins: [],
}

