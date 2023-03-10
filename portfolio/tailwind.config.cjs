/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-lime': '#0A0F0B'
      },
      spacing: {
        '16em': '16em'
      },
      fontFamily: {
        'RobotoMono': ['Roboto Mono', 'monospace']
      },
      animation: {
        'pisca': 'pisca .7s infinite'
      },
      keyframes: {
        pisca: {
          '0%, 100%': {opacity: 1},
          '50%': {opacity: 0}
        }
      }
    },
  },
  plugins: [],
}
