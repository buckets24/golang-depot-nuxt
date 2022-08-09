/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./modules/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./formkit.config.js"
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000000',
        white: '#FFFFFF',
        bg: {
          card: '#333333',
          dark: '#424141',
          light: '#FEF5EF'
        },
        body: {
          light: '#F4F4F4',
          dark: 'rgb(110, 117, 159)'
        }
      }
    }
  },
  plugins: [
    require('@formkit/themes/tailwindcss'),
    require('daisyui')
  ]

}
