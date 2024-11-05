/** @type {import('tailwindcss').Config} */
const textShadowPlugin = require('tailwindcss-textshadow');
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        colorBoxShadow1: '0px 0px 10px rgba(255, 0, 0, 0.5)', 
        colorBoxShadow2: '0px 0px 10px rgba(0, 255, 0, 0.5)', 
        colorBoxShadow3: '0px 0px 10px rgba(0, 0, 255, 0.5)', 
      },
      textShadow: {  
        colorShadow1: '4px 4px 6px rgba(255, 0, 0, 0.7)',
        colorShadow2: '4px 4px 6px rgba(0, 255, 0, 0.7)',
        colorShadow3: '4px 4px 6px rgba(0, 0, 255, 0.7)',
      },
      colors: {
        color0: "white",
        color1: "red",
        color2: "green",
        color3: "blue"
      },
      fontFamily: {
        creepster: ['Creepster'],
      },
    },
  },
  plugins: [
    textShadowPlugin
  ],
}

