/** @type {import('tailwindcss').Config} */
const textShadowPlugin = require('tailwindcss-textshadow');
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        colorBoxShadow1: 'inset 0px 0px 10px rgba(255, 0, 0, 0.5)', 
        colorBoxShadow2: 'inset 0px 0px 10px rgba(0, 255, 0, 0.5)', 
        colorBoxShadow3: 'inset 0px 0px 10px rgba(0, 0, 255, 0.5)', 
        colorBoxShadow4: 'inset 0px 0px 10px rgba(255, 255, 255, 0.5)', 
      },
      textShadow: {  
        colorShadow1: '4px 4px 6px rgba(255, 0, 0, 0.7)',
        colorShadow2: '4px 4px 6px rgba(0, 255, 0, 0.7)',
        colorShadow3: '4px 4px 6px rgba(0, 0, 255, 0.7)',

        colorShadow4: '4px 4px 6px rgba(255, 255, 255, 0.7)',

      },
      colors: {
        color0: "white",
        color1: "red",
        color2: "green",
        color3: "blue",
        colorBackground: "black"
      },
      fontFamily: {
        creepster: ['Creepster'],
        special: ['"Special Elite"', 'cursive'],
        nosifer: ['Nosifer', 'cursive'],
      },
    },
  },
  plugins: [
    textShadowPlugin
  ],
}

