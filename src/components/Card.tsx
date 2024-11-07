import React from 'react'

import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

import prueba from "../images/prueba.jpg";
import imagen from "../images/paisaje4.png";
import img_telarana3 from "../images/telarana3.png";

interface Color {
  color: number;
}

export const Card: React.FC<Color> = ({ color }) => {
  return (
    <div className='group rounded-2xl bg-colorBackground opacity-80'>
      <div className={`flex flex-col border-2 rounded-2xl overflow-hidden shadow-colorBoxShadow4 ${color === 1 ? "group-hover:shadow-colorBoxShadow1 group-hover:border-color1" : color === 2 ? "group-hover:shadow-colorBoxShadow2 group-hover:border-color2" : "group-hover:shadow-colorBoxShadow3 group-hover:border-color3"}`}>
        <div className="relative -z-10">
          <div className='absolute w-full h-full opacity-40 group-hover:opacity-60'>
            <img src={img_telarana3} alt="" className="object-cover invert group-hover:animate-wiggle group-hover:animate-infinite" />
          </div>
          <img src={prueba} alt="" className="object-cover" />
        </div>

        <div className="relative flex flex-col px-5 py-2 border-b-2 shadow-colorShadowBottom">
          <div className='absolute top-0 left-0 w-full h-full opacity-25 -z-10'>
            <img src={imagen} alt="" className="object-contain sm:object-cover" />
          </div>
          <h1 className={`text-3xl font-bold ${color === 1 ? "group-hover:text-shadow-colorShadow1" : color === 2 ? "group-hover:text-shadow-colorShadow2" : "group-hover:text-shadow-colorShadow3"}`}>Titulo</h1>
          <span className="text-center text-white/60 italic">Autor: Alexander Bautista</span>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo voluptates iusto repellendus
            eveniet accusantium praesentium temporibus rerum
          </p>
        </div>

        <div className={`flex ${color === 1 ? "text-color1" : color === 2 ? "text-color2" : "text-color3"}`}>
          <div className={`cursor-pointer w-1/3 flex justify-center  py-4 hover:text-color0 ${color === 1 ? "hover:bg-color1" : color === 2 ? "hover:bg-color2" : "hover:bg-color3"}`}>
            <FaEye className="text-2xl bottom-8" />
          </div>
          <div className={`cursor-pointer w-1/3 flex justify-center  py-4 hover:text-color0 ${color === 1 ? "hover:bg-color1" : color === 2 ? "hover:bg-color2" : "hover:bg-color3"}`}>
            <FaEdit className="text-2xl bottom-8" />
          </div>
          <div className={`cursor-pointer w-1/3 flex justify-center  py-4 hover:text-color0 ${color === 1 ? "hover:bg-color1" : color === 2 ? "hover:bg-color2" : "hover:bg-color3"}`}>
            <FaTrashAlt className="text-2xl bottom-8" />
          </div>
        </div>
      </div>
    </div>

  )
}
