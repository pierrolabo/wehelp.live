module.exports = {
  mode: 'jit',
  plugins: [require('@tailwindcss/aspect-ratio')],
  content: {
    files: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './app.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
