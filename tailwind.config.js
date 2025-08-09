/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       bannerImg: "url('./public/image/homeImage.jpg')",
        homeOnebanner: "url('./src/components/Home/images/homeonebg.avif')",
        homeonebanner: "url('./src/components/HomeOne/image/homeoneImage.webp')",
        blackOverlay: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1.5) 100%)",
        darkOverlay: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1.2) 100%)",
        darkOverlayTop: "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(5,10,10,1.8) 90%)",
        navOverlay: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
        insBackgroundImage: "url('./src/components/Instructor/image/bgImage.jpg')",
        boxbanner: "url('./src/components/Home/images/manager.jpg')",
        whiteOverlay: "linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
        boxImage: "url('./src/Components/Testmonial/images/boxImage.jpg')",
      },
    },
  },

  base: process.env.VITE_BASE_PATH || "/Elearna-website",
  plugins: [
    // Custom plugin for scrollbar hiding,
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* For Chrome, Safari, and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* For IE, Edge, and Firefox */
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      });
       
    },
  ],
};
