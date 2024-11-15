import React from "react";
// import { AiFillBug } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

import img_arana1 from "../images/arana1.png";
import img_tapiz4 from "../images/tormenta.gif";

interface Color {
  color: number;

  idCategoria: number;
  setIdCategoria: React.Dispatch<React.SetStateAction<number>>;
  text: string;
}

export const Categoria: React.FC<Color> = ({ color, idCategoria, text, setIdCategoria }) => {
  return (
    <div
      className={`relative flex justify-center group cursor-pointer ${
        color === 1
          ? "text-color1"
          : color === 2
          ? "text-color2"
          : "text-color3"
      }`}

      onClick={() => {setIdCategoria(idCategoria)}}
    >
      <div className="absolute bottom-9 opacity-0 h-8 w-8 transform -translate-y-7 transition-all duration-1000 group-hover:translate-y-0 group-hover:opacity-100">
        <img
          src={img_arana1}
          alt=""
          className="w-full h-full invert opacity-70"
        />
      </div>

      <div
        className={`relative flex flex-row items-center ${
          color === 1
            ? "hover:border-color1"
            : color === 2
            ? "hover:border-color2"
            : "hover:border-color3"
        }`}
      >
        <div className="absolute h-full w-full opacity-15 top-0 left-0 overflow-hidden -z-10 hidden group-hover:block">
          <img src={img_tapiz4} alt="" className="h-full w-full object-cover" />
        </div>
        <a
          className={`capitalize flex items-center gap-2 text-xl md:text-2xl px-3 py-1 h-full font-bold border-2 border-t-0 border-transparent transition duration-300 animate-ease-in-out hover:items-end hover:shadow-colorBoxShadow4 relative`}
        >
          {text}
        </a>
      </div>
    </div>
  );
};
