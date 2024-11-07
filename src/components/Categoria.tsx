import React from 'react';
// import { AiFillBug } from "react-icons/ai";

import img_arana1 from '../images/arana1.png'

interface Color {
  color: number;
  text: string;
}

export const Categoria: React.FC<Color> = ({ color, text }) => {
  return (
    <div className={`relative flex justify-center group ${color === 1 ? "text-color1" : color === 2 ? "text-color2" : "text-color3"}`}>
      {/* <AiFillBug className="text-2xl text-color0 absolute bottom-9 opacity-0 transform -translate-y-7 transition-all duration-1000 group-hover:translate-y-0 group-hover:opacity-100" /> */}
      <div className="absolute bottom-9 opacity-0 h-8 w-8 transform -translate-y-7 transition-all duration-1000 group-hover:translate-y-0 group-hover:opacity-100">
        <img src={img_arana1} alt="" className='w-full h-full invert opacity-70'/>
      </div>

      <a href="#" className={`flex items-center text-xl md:text-2xl px-3 py-1 h-full font-bold  border-2 border-t-0  border-colorBackground transition duration-300 animate-ease-in-out hover:shadow-colorBoxShadow4 hover:items-end ${color === 1 ? "hover:border-color1" : color === 2 ? "hover:border-color2" : "hover:border-color3"}`}>
        {text}
      </a>
    </div>
  )
}
