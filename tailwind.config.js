/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#F67831',
        hover: '#EB3C5A',
        hoverBlack: '#C2C2C2',
        mainText: '#737373', //neutral-500
        mainTextBlack: '#a3a3a3', //neutral-400
        mainTitle: '#171717', //neutral-900
        mainTitleBlack: '#fafafa', //neutral-50
        background: '#ECECEC;',
        backgroundBlack: '#5F5C5D',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        sm: '320px',
        md: '768px',
        lg: '1280px',
        xl: '1440px',
      },
      backgroundImage: {
        'hero-bg':
          "linear-gradient(to right, rgba(46, 47, 66, 0.5), rgba(46, 47, 66, 0.5)), url('/bg-hero.jpg')",
        'calc-bg':
          'linear-gradient(to right, rgba(219, 219, 219, 0.5), rgba(219, 219, 219, 0.5)) ',
        'calc-bg-woman': "url('/woman.webp')",
      },
      listStyleImage: {
        checkmark: 'url("/chack.png")',
      },
    },
  },
  plugins: [],
};
