module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        bounce: 'bounce 1.3s infinite'
      },
      fontFamily:{
        'montserrat-bold':["Montserrat-Bold"],
        'montserrat-medium':["Montserrat-Medium"],
        'montserratAlternates-bold':["MontserratAlternates-Bold"],
        'montserratAlternates-medium':["MontserratAlternates-Medium"]
      }
    },
  },
  plugins: [],
}
