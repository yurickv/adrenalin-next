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
        main: '#f97316', //#F67831
        hover: '#EB3C5A',
        hoverBlack: '#C2C2C2',
        mainText: '#737373', //neutral-500
        mainTextBlack: '#d4d4d4', //neutral-300
        mainTitle: '#171717', //neutral-900
        mainTitleBlack: '#fafafa', //neutral-50
        background: '#ECECEC;',
        backgroundBlack: '#5F5C5D',
        darkBody: '#5F5C5D',
      },
      spacing: {
        px: '1px',
        0: '0',
        0.5: '2px',
        1: '4px',
        1.5: '6px',
        2: '8px',
        2.5: '10px',
        3: '12px',
        3.5: '14px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        24: '96px',
        28: '112px',
        32: '128px',
        36: '144px',
        40: '160px',
        44: '176px',
        48: '192px',
        52: '208px',
        56: '224px',
        60: '240px',
        64: '256px',
        72: '288px',
        80: '320px',
        96: '384px',
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
