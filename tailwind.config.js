module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#444a59',
        secondary: '#d9d9d9',
        white: '#ffffff',
        'secondary-bg': '#f8f8f8',
        red: '#f54b5e',
        blue: '#358ed7',
        grey: '#808080',
      },
      fontSize: {
        xxs: '.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
