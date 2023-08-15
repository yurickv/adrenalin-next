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
        mainText: '#85777B',
        background: '#ECECEC;',
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
          "url('/woman.webp'), linear-gradient(to right, rgba(219, 219, 219, 0.5), rgba(219, 219, 219, 0.5)) ",
      },
    },
  },
  plugins: [],
};
