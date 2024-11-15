import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";

import img_tapiz3 from "../images/paisaje7.png";
import img_tapiz4 from "../images/tormenta.gif";

interface Color {
  color: number;
  setColor: React.Dispatch<React.SetStateAction<number>>;
}

export const Navbar: React.FC<Color> = ({ color, setColor }) => {
  const [showMenu, setShowMenu] = useState<number>(0);
  return (
    <nav
      className={`fixed z-10 flex flex-row justify-between gap-2 px-5 py-3 bg-colorBackground border-b-4 border-double shadow-colorShadowBottom md:flex-row md:justify-between w-full ${
        color === 1
          ? "border-b-color1"
          : color === 2
          ? "border-b-color2"
          : "border-b-color3"
      }`}
    >
      <div className="absolute h-full w-full opacity-20 top-0 left-0 overflow-hidden -z-10 invert flex gap-0">
        <img src={img_tapiz3} alt="" className="h-full w-full object-cover m-0 p-0 border-2" />
      </div>
      <div className="absolute h-full w-full opacity-10 top-0 left-0 overflow-hidden -z-10 group-hover:block">
              <img
                src={img_tapiz4}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
      <a href="#" className="text-white m-2">
        <h1
          className={`text-6xl px-3 py-1 rounded-md cursor-pointer font-creepster hover:animate-wiggle-more animate-infinite animate-duration-[5000ms] ${
            color === 1
              ? "hover:text-shadow-colorShadow1"
              : color === 2
              ? "hover:text-shadow-colorShadow2"
              : "hover:text-shadow-colorShadow3"
          }`}
        >
          Ctrl+Dev
        </h1>
      </a>
      <div className="flex w-full md:w-auto p-3 gap-6 justify-end">
        {/* <div
          className={`text-color0 flex w-full items-center justify-between border-2 px-5 py-2 rounded-full border-color0 ${color === 1 ? "hover:shadow-colorBoxShadow1" : color === 2 ? "hover:shadow-colorBoxShadow2" : "hover:shadow-colorBoxShadow3"}`}>
          <input type="text" placeholder="Buscar ..."
            className={`appearance-none border-none bg-transparent focus:outline-none w-full mr-4 placeholder:text-color0`} />
          <button className="">
            <FaSearch className={`fa-solid fa-palette text-color0 text-xl ${color === 1 ? "hover:text-color1" : color === 2 ? "hover:text-color2" : "hover:text-color3"}`} />
          </button>
        </div> */}
        <div
          className="relative flex justify-center items-center"
          onClick={() => {
            if (showMenu === 1) {
              setShowMenu(0);
            } else {
              setShowMenu(1);
            }
          }}
        >
          <IoIosColorPalette
            className={`fa-solid fa-palette text-color0 text-4xl animate-pulse ${
              color === 1
                ? "hover:text-color1"
                : color === 2
                ? "hover:text-color2"
                : "hover:text-color3"
            }`}
          />
          <div
            className={`flex flex-col justify-center items-center gap-2 absolute top-14 w-full transition-opacity duration-300 ease-in-out ${
              showMenu === 1
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <button
              className="rounded-full bg-color1 w-6 h-6"
              onClick={() => setColor(1)}
            ></button>
            <button
              className="rounded-full bg-color2 w-6 h-6"
              onClick={() => setColor(2)}
            ></button>
            <button
              className="rounded-full bg-color3 w-6 h-6"
              onClick={() => setColor(4)}
            ></button>
          </div>
        </div>
      </div>
    </nav>
  );
};
