module.exports = {
  darkMode: 'media',
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './public/**/*.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'lavender-light': '#e1c8f9',
        'space-gray': '#393e46',
        'logo-pink': '#feacc6',
        'lavender': '#c89af4',
        'silver-gray': '#505762',

        'almost-white': '#eee',

        'dark-gray': '#222831',
        'logo-purple': '#6d7cff',
        'almost-black': '#0d0f13',
        'normal-gray': '#37414f',
        'alice-blue': '#a0aaff',
        'normal-blue': '3a4eff'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
