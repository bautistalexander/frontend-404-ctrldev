/** @type {import('tailwindcss').Config} */
const textShadowPlugin = require('tailwindcss-textshadow');
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        colorBoxShadow1: 'inset 0px 0px 10px rgba(255, 0, 0, 0.8)', 
        colorBoxShadow2: 'inset 0px 0px 10px rgba(0, 255, 0, 0.8)', 
        colorBoxShadow3: 'inset 0px 0px 10px rgba(0, 0, 255, 0.8)', 
        colorBoxShadow4: 'inset 0px 0px 10px rgba(255, 255, 255, 0.8)',
        colorShadowBottom: '0px 4px 8px rgba(255, 255, 255, 0.8)'
      },
      textShadow: {  
        colorShadow0: '4px 4px 6px rgba(222, 204, 174, 0.7)',
        colorShadow1: '4px 4px 6px rgba(255, 0, 0, 0.7)',
        colorShadow2: '4px 4px 6px rgba(0, 255, 0, 0.7)',
        colorShadow3: '4px 4px 6px rgba(0, 0, 255, 0.7)',


      },
      colors: {
        color0: "rgb(222, 204, 174)",
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
    textShadowPlugin,
    require('tailwindcss-animated'),
    require('@tailwindcss/line-clamp'),
  ],
}

