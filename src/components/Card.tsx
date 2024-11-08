import React, { useState } from "react";

import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import prueba from "../images/prueba.jpg";
import imagen11 from "../images/paisaje4.png";
import img_telarana3 from "../images/telarana3.png";

interface Color {
  color: number;

  titulo: string;
  autor: string;
  descripcion: string;
  contenido: string;
  region: string;
  categoria_id: string;
  imagen: string;
}

export const Card: React.FC<Color> = ({
  color,
  titulo,
  autor,
  descripcion,
  contenido,
  region,
  categoria_id,
  imagen,
}) => {

  const [showModalView, setShowModalView] = useState<boolean>(false);
  const [showModalForm, setShowModalForm] = useState<boolean>(false);

  return (
    <>
      <div className="group rounded-2xl bg-colorBackground opacity-80 h-[430px]">
        <div
          className={`flex flex-col justify-between border-2 rounded-2xl overflow-hidden shadow-colorBoxShadow4 h-full ${color === 1
            ? "group-hover:shadow-colorBoxShadow1 group-hover:border-color1"
            : color === 2
              ? "group-hover:shadow-colorBoxShadow2 group-hover:border-color2"
              : "group-hover:shadow-colorBoxShadow3 group-hover:border-color3"
            }`}
        >
          <div className="relative -z-10">
            <div className="absolute w-full h-full opacity-40 group-hover:opacity-60">
              <img
                src={img_telarana3}
                alt=""
                className="object-cover invert group-hover:animate-wiggle group-hover:animate-infinite"
              />
            </div>
            <img src={imagen} alt="" className="object-cover" />
          </div>

          <div className="relative flex flex-col px-5 py-2 border-b-2 shadow-colorShadowBottom h-72">
            <div className="absolute top-0 left-0 w-full h-full opacity-25 -z-10">
              <img
                src={imagen}
                alt=""
                className="object-contain sm:object-cover"
              />
            </div>
            <h1
              className={`text-3xl font-bold line-clamp-1 ${color === 1
                ? "group-hover:text-shadow-colorShadow1"
                : color === 2
                  ? "group-hover:text-shadow-colorShadow2"
                  : "group-hover:text-shadow-colorShadow3"
                }`}
            >
              {titulo}
            </h1>
            <span className="text-center text-color0/60 italic text-sm line-clamp-1">
              {`Autor: ${autor}`}
            </span>
            <p className="text-sm line-clamp-5">{descripcion}</p>
          </div>

          <div
            className={`flex h-14 ${color === 1
              ? "text-color1"
              : color === 2
                ? "text-color2"
                : "text-color3"
              }`}
          >
            <div
              className={`cursor-pointer w-1/3 flex justify-center  py-4 hover:text-color0 ${color === 1
                ? "hover:bg-color1"
                : color === 2
                  ? "hover:bg-color2"
                  : "hover:bg-color3"
                }`}

              onClick={() => setShowModalView(true)}
            >
              <FaEye className="text-2xl bottom-8" />
            </div>
            <div
              className={`cursor-pointer w-1/3 flex justify-center  py-4 hover:text-color0 ${color === 1
                ? "hover:bg-color1"
                : color === 2
                  ? "hover:bg-color2"
                  : "hover:bg-color3"
                }`}
                onClick={() => setShowModalForm(true)}
            >
              <FaEdit className="text-2xl bottom-8" />
            </div>
            <div
              className={`cursor-pointer w-1/3 flex justify-center  py-4 hover:text-color0 ${color === 1
                ? "hover:bg-color1"
                : color === 2
                  ? "hover:bg-color2"
                  : "hover:bg-color3"
                }`}
            >
              <FaTrashAlt className="text-2xl bottom-8" />
            </div>
          </div>
        </div>
      </div>


      {/* MODAL VEW */}
      {
        showModalView && (
          <div className="fixed inset-0 bg-colorBackground bg-opacity-60 backdrop-blur-sm flex flex-row justify-center items-center h-full z-20 font-special">
            <div className={`relative border-2 h-[600px] w-full md:w-1/2 p-5 m-5 rounded-lg flex-col ${color === 1 ? "shadow-colorBoxShadow1" : color === 2 ? "shadow-colorBoxShadow2" : "shadow-colorBoxShadow3"}`}>
              <div className="absolute flex justify-end items-center w-full h-10 p-5 top-0 left-0">
                <IoClose className={`text-3xl cursor-pointer ${color === 1 ? "hover:text-color1" : color === 2 ? "hover:text-color2" : "hover:text-color3"}`} onClick={() => setShowModalView(false)} />
              </div>
              {/* Contenido del Modal */}
              <div className="mt-8 h-[530px] overflow-auto">
                <h1 className={`text-4xl lg:text-5xl font-creepster text-center ${color === 1 ? "text-color1" : color === 2 ? "text-color2" : "text-color3"}`}>
                  {titulo}
                </h1>

                <div className="flex flex-col md:flex-row h-50">
                  <div className={`h-52 w-full md:w-1/2 border-2 border-color0 rounded-lg ${color === 1 ? "shadow-colorBoxShadow1" : color === 2 ? "shadow-colorBoxShadow2" : "shadow-colorBoxShadow3"}`}>
                    <img src={prueba} alt="" className="object-cover rounded-lg h-full w-full" />
                  </div>
                  <div className="md:h-52 w-full md:w-1/2 sm:p-2 flex flex-col justify-between">
                    <div className="mt-1">
                      <span className={`text-sm font-extrabold ${color === 1 ? "text-color1" : color === 2 ? "text-color2" : "text-color3"}`}>Autor:</span>
                      <p className="">
                        {autor}
                      </p>
                    </div>
                    <div className="mt-2">
                      <span className={`text-sm font-extrabold ${color === 1 ? "text-color1" : color === 2 ? "text-color2" : "text-color3"}`}>Categoria:</span>
                      <p className="">
                        {categoria_id}
                      </p>
                    </div>
                    <div className="mt-2">
                      <span className={`text-sm font-extrabold ${color === 1 ? "text-color1" : color === 2 ? "text-color2" : "text-color3"}`}>Región:</span>
                      <p className="">
                        {region}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mt-2">
                    <span className={`text-sm font-extrabold ${color === 1 ? "text-color1" : color === 2 ? "text-color2" : "text-color3"}`}>Descripcion:</span>
                    <p className="">
                      {descripcion}
                    </p>
                  </div>
                  <div className="mt-2">
                    <span className={`text-sm font-extrabold ${color === 1 ? "text-color1" : color === 2 ? "text-color2" : "text-color3"}`}>Contenido:</span>
                    <p className="">
                      {contenido}
                    </p>

                  </div>

                </div>
              </div>
            </div>
          </div>)
      }


      {/* MODAL FORM */}
      {
        showModalForm && (
          < div className="fixed inset-0 bg-colorBackground bg-opacity-60 backdrop-blur-sm flex flex-row justify-center items-center h-full z-20 font-special">
            <div className={`relative border-2 h-[600px] w-full md:w-1/2 p-5 m-5 rounded-lg flex-col ${color === 1 ? "shadow-colorBoxShadow1" : color === 2 ? "shadow-colorBoxShadow2" : "shadow-colorBoxShadow3"}`}>
              <div className="absolute flex justify-end items-center w-full h-10 p-5 top-0 left-0">
                <IoClose className={`text-3xl cursor-pointer ${color === 1 ? "hover:text-color1" : color === 2 ? "hover:text-color2" : "hover:text-color3"}`} onClick={() => setShowModalForm(false)} />
              </div>
              {/* Contenido del Modal */}
              <div className="mt-8 h-[530px] overflow-auto">
                <h1 className={`text-4xl lg:text-5xl font-creepster text-center ${color === 1 ? "text-color1" : color === 2 ? "text-color2" : "text-color3"}`}>
                  Escribe tu Historia o leyenda
                </h1>

                <div className="flex flex-col md:flex-row h-64">
                  <div className={`h-64 w-full md:w-1/2 border-2 border-color0 rounded-lg ${color === 1 ? "shadow-colorBoxShadow1" : color === 2 ? "shadow-colorBoxShadow2" : "shadow-colorBoxShadow3"}`}>
                    <img src={prueba} alt="" className="object-cover rounded-lg h-full w-full" />
                    <input type="file" name="" id="" />
                  </div>
                  <div className="md:h-52 w-full md:w-1/2 sm:p-2 flex flex-col justify-between">
                    <div className="mt-1">
                      <span className={`text-sm font-extrabold ${color === 1 ? "text-color1" : color === 2 ? "text-color2" : "text-color3"}`}>Título:</span>
                      <textarea id="titulo" name="titulo" className={`resize-none w-full h-20 p-1 bg-transparent rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${color === 1 ? "focus:ring-color1" : color === 2 ? "focus:ring-color2" : "focus:ring-color3"}`} placeholder="Escriba el título">
                        {titulo}
                      </textarea>
                    </div>
                    <div className="mt-1">
                      <span className={`text-sm font-extrabold ${color === 1 ? "text-color1" : color === 2 ? "text-color2" : "text-color3"}`}>Autor:</span>
                      <textarea id="autor" name="autor" className={`resize-none w-full h-10 p-1 bg-transparent rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${color === 1 ? "focus:ring-color1" : color === 2 ? "focus:ring-color2" : "focus:ring-color3"}`} placeholder="Escriba el autor">
                        {autor}
                      </textarea>
                    </div>
                    <div className="mt-2">
                      <span className={`text-sm font-extrabold ${color === 1 ? "text-color1" : color === 2 ? "text-color2" : "text-color3"}`}>Región:</span>
                      <textarea id="region" name="region" className={`resize-none w-full h-10 p-1 bg-transparent rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${color === 1 ? "focus:ring-color1" : color === 2 ? "focus:ring-color2" : "focus:ring-color3"}`} placeholder="Escriba la region">
                        {region}
                      </textarea>
                    </div>
                  </div>
                </div>

                <div className="mr-2">
                  <div className="mt-2">
                    <span className={`text-sm font-extrabold ${color === 1 ? "text-color1" : color === 2 ? "text-color2" : "text-color3"}`}>Categoria:</span>
                    <p className="">
                      categoria_id
                    </p>
                  </div>
                  <div className="mt-2">
                    <span className={`text-sm font-extrabold ${color === 1 ? "text-color1" : color === 2 ? "text-color2" : "text-color3"}`}>Descripcion:</span>
                    <textarea id="titulo" name="titulo" className={`resize-none w-full h-20 p-1 bg-transparent rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${color === 1 ? "focus:ring-color1" : color === 2 ? "focus:ring-color2" : "focus:ring-color3"}`} placeholder="Escriba el título">
                      {descripcion}
                    </textarea>
                  </div>
                  <div className="mt-2">
                    <span className={`text-sm font-extrabold ${color === 1 ? "text-color1" : color === 2 ? "text-color2" : "text-color3"}`}>Contenido:</span>
                    <textarea id="titulo" name="titulo" className={`resize-none w-full h-20 p-1 bg-transparent rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${color === 1 ? "focus:ring-color1" : color === 2 ? "focus:ring-color2" : "focus:ring-color3"}`} placeholder="Escriba el título">
                      {contenido}
                    </textarea>

                  </div>
                  <button className={`rounded-lg w-full h-8 border-2 font-extrabold text-xl opacity-80 hover:opacity-100 ${color === 1 ? "border-color1 bg-color1" : color === 2 ? "border-color2 bg-color2" : "border-color3 bg-color3"}`}>GUARGAR CAMBIOS</button>
                </div>
              </div>
            </div>
          </div >
        )
      }


    </>
  );
};
