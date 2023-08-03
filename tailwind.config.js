/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#F67831",
        hover: "#EB3C5A",
        gradient:
          "linear-gradient(to right, rgb(246, 120, 49), rgb(235, 60, 90))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      backgroundImage: {
        "hero-bg":
          "linear-gradient(to right, rgba(46, 47, 66, 0.5), rgba(46, 47, 66, 0.5)), url('/bg-hero.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
