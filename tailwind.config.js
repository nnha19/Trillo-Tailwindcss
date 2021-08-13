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
    extend: {
      width: ["responsive", "hover", "focus"],
      margin:["hover"]
    },
  },
  plugins: [],
}
