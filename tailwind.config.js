module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors :{
        primary :"#eb2f64",
        secondary :"#777",
        secondaryHover :"#f4f2f2",
        bgPrimary :"#333"
      }
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    extend: {},
  },
  plugins: [],
}
