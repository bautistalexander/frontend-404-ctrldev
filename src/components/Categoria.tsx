import React from 'react';
import { AiFillBug } from "react-icons/ai";

interface Color {
  color: number;
  text: string;
}

export const Categoria: React.FC<Color> = ({ color, text }) => {
  return (
    <div className={`relative flex justify-center group ${color === 1 ? "text-color1" : color === 2 ? "text-color2" : "text-color3"}`}>
      <AiFillBug className="text-2xl text-color0 absolute bottom-9 opacity-0 transform -translate-y-7 transition-all duration-1000 group-hover:translate-y-0 group-hover:opacity-100" />
      <a href="#" className={`text-xl md:text-2xl px-3 py-1 h-full font-bold  border-2 border-t-0 border-colorBackground hover:shadow-colorBoxShadow4 ${color === 1 ? "hover:border-color1" : color === 2 ? "hover:border-color2" : "hover:border-color3"}`}>
        {text}
      </a>
    </div>
  )
}
