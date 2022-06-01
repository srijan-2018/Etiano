module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5.5rem',
        '3xl': '6.5rem',
      },
    },

    extend: {
      fontFamily: {
        rubik: ['Rubik', 'Roboto'],
      },
      height: {
        '85vh': '85vh',
      },
      backgroundImage: {
        signup: "url('/src/assests/signup.png')",
        login: "url('/src/assests/signin.png')",
        error: "url('/src/assests/error-bg.png')",
        privacy: "url('/src/assests/privacy.png')",
        genieHero: "url('/src/assests/genieHero.png')",
        genieFromTo: "url('/src/assests/genieFromTo.png')",
        aboutHero: "url('/src/assests/aboutHero.png')",
      },
      borderWidth: {
        0.2: '.2px',
      },
      colors: {
        primary: '#191D21',
        secondary: '#2F343A',
        cta: '#B2DB5B',
        'brand-text': '#FC6011',
        rating: '#FFFF00',
        'fb-blue': '#367FC0',
        'fb-blue-dark': '#135A9A',
        'google-red-dark': '#A81402',
        'google-red': '#DD4B39',
        border: '#FEBD00',
        'cta-dark': '#8FCE0B',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin')],
};
