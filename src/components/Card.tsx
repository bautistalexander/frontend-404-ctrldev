import React from 'react'

import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

interface Color {
  color: number;
}

export const Card: React.FC<Color> = ({ color }) => {
  return (
    <div className='group'>
      <div className={`flex flex-col border-2 rounded-2xl overflow-hidden ${color === 1 ? "group-hover:shadow-colorBoxShadow1" : color === 2 ? "group-hover:shadow-colorBoxShadow2" : "group-hover:shadow-colorBoxShadow3"}`}>
        <div className="">
          <img src="./1.png" alt="" className="object-cover" />
        </div>

        <div className="flex flex-col px-5 py-2">
          <h1 className={`text-3xl font-bold ${color === 1 ? "group-hover:text-shadow-colorShadow1" : color === 2 ? "group-hover:text-shadow-colorShadow2" : "group-hover:text-shadow-colorShadow3"}`}>Titulo</h1>
          <span className="text-center text-white/60 italic">Autor: Alexander Bautista</span>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo voluptates iusto repellendus
            eveniet accusantium praesentium temporibus rerum
          </p>
        </div>

        <div className={`flex ${color === 1 ? "text-color1" : color === 2 ? "text-color2" : "text-color3"}`}>
          <div className={`cursor-pointer w-1/3 flex justify-center  py-2 hover:text-color0 ${color === 1 ? "hover:bg-color1" : color === 2 ? "hover:bg-color2" : "hover:bg-color3"}`}>
            <FaEye className="text-xl bottom-8" />
          </div>
          <div className={`cursor-pointer w-1/3 flex justify-center  py-2 hover:text-color0 ${color === 1 ? "hover:bg-color1" : color === 2 ? "hover:bg-color2" : "hover:bg-color3"}`}>
            <FaEdit className="text-xl bottom-8" />
          </div>
          <div className={`cursor-pointer w-1/3 flex justify-center  py-2 hover:text-color0 ${color === 1 ? "hover:bg-color1" : color === 2 ? "hover:bg-color2" : "hover:bg-color3"}`}>
            <FaTrashAlt className="text-xl bottom-8" />
          </div>
        </div>
      </div>
    </div>

  )
}
