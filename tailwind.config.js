/** @type {import('tailwindcss').Config} */

/** @type {import('tailwindcss/plugin')} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./dist/angular_app/**/*.{html,ts,js}",
    './projects/**/*.{html,ts}'
  ],
  darkMode: 'class',
  theme: {

    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms')
  ],
}
