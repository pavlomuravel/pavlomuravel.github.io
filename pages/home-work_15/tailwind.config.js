const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-1': "url('./img/bg-1.png')",
        'bg_button': "url('../src/img/button_fons.png')",
      },
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        rubik: ['"Rubik Distressed"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#F8F200", 
      },
      clipPath: {
        'custom-skew': 'polygon(5% 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0 5%)',
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
};
