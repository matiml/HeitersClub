/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
      'img1': "url('./public/media/DSC_0531.jpg')",
      'img2': "url('./public/media/DSC_0652.jpg')",
      'img3': "url('./public/media/DSC_1106.jpg ')",
    },
      
    },
  },
  plugins: [],
}
