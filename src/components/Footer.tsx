import React from "react";

import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import img_tapiz1 from "../images/tapiz1.png";

interface Color {
  color: number;
}

export const Footer: React.FC<Color> = ({ color }) => {

  const newPage = (link: string) => {
    window.open(link, '_blank');
  } 

  return (
    <div className={`relative overflow-hidden w-full flex flex-col md:flex-row justify-between items-center md:h-48 font-special text-color0 border-t-4 shadow-colorShadowTop border-double ${
        color === 1
          ? "border-t-color1"
          : color === 2
          ? "border-t-color2"
          : "border-t-color3"
      }`}>
        <div className="absolute h-full w-full opacity-10 -z-10">
          <img
            src={img_tapiz1}
            alt=""
            className="h-full w-full invert object-cover"
          />
        </div>
        
      <div className="flex w-full md:w-1/3 h-full p-10 text-2xl text-center items-center">
        Tu reflejo en la pantalla... parpadea cuando tú no lo haces.
      </div>

      <div className="flex w-full md:w-1/3 h-full justify-center items-center flex-col p-5 gap-2">
        <h1
          className={`text-3xl text-center md:text-4xl ${
            color === 1
              ? "text-shadow-colorShadow1"
              : color === 2
              ? "text-shadow-colorShadow2"
              : "text-shadow-colorShadow3"
          }`}
        >
          Alexander Bautista
        </h1>
        {/* inconos */}
        <div className="flex flex-wrap justify-center w-full gap-2">
          <div
            className={`border-2 border-transparent rounded-md p-1 cursor-pointer  ${
              color === 1
                ? "hover:border-color1 hover:shadow-colorBoxShadow1 hover:text-color1 text-color1/50"
                : color === 2
                ? "hover:border-color2 hover:shadow-colorBoxShadow2 hover:text-color2 text-color2/50"
                : "hover:border-color3 hover:shadow-colorBoxShadow3 hover:text-color3 text-color3/50"
            }`}
            onClick={() => {newPage("https://www.youtube.com/@alexanderm.bautistam.305")}}
          >
            <FaYoutube
              className={`text-2xl md:text-4xl hover:animate-rotate-x hover:animate-once`}
            />
          </div>
          <div
            className={`border-2 border-transparent rounded-md p-1 cursor-pointer ${
              color === 1
                ? "hover:border-color1 hover:shadow-colorBoxShadow1 hover:text-color1 text-color1/50"
                : color === 2
                ? "hover:border-color2 hover:shadow-colorBoxShadow2 hover:text-color2 text-color2/50"
                : "hover:border-color3 hover:shadow-colorBoxShadow3 hover:text-color3 text-color3/50"
            }`}
            onClick={() => {newPage("https://github.com/bautistalexander")}}
          >
            <FaGithub
              className={`text-2xl md:text-4xl hover:animate-rotate-x hover:animate-once`}
            />
          </div>
          <div
            className={`border-2 border-transparent rounded-md p-1 cursor-pointer ${
              color === 1
                ? "hover:border-color1 hover:shadow-colorBoxShadow1 hover:text-color1 text-color1/50"
                : color === 2
                ? "hover:border-color2 hover:shadow-colorBoxShadow2 hover:text-color2 text-color2/50"
                : "hover:border-color3 hover:shadow-colorBoxShadow3 hover:text-color3 text-color3/50"
            }`}
            onClick={() => {newPage("https://www.facebook.com/profile.php?id=100009756577449&locale=es_LA")}}
          >
            <FaFacebook
              className={`text-2xl md:text-4xl hover:animate-rotate-x hover:animate-once`}
            />
          </div>
        </div>

        <p
          className={`text-sm flex justify-center items-center opacity-50 ${
            color === 1
              ? "text-color1"
              : color === 2
              ? "text-color2"
              : "text-color3"
          }`}
        >
          <span className="text-2xl">&copy;</span> creado por: Alexander
          Bautista
        </p>
      </div>

      <div className="flex w-full md:w-1/3 h-full p-10 text-2xl text-center items-center">
        Recuerda que… tu código siempre compilará hasta que llegue el cliente.
      </div>
    </div>
  );
};
