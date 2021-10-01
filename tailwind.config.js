const { loadGetInitialProps } = require("next/dist/shared/lib/utils");


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'my-font': "'Varela Round'"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
