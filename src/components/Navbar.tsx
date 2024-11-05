import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";

interface Color {
  color: number;
  setColor: React.Dispatch<React.SetStateAction<number>>;
}

export const Navbar: React.FC<Color> = ({ color, setColor }) => {
  const [showMenu, setShowMenu] = useState<number>(0);
  return (
    <nav className="flex flex-col justify-center items-center flex-wrap gap-2 px-5 py-3 bg-black/30 md:flex-row md:justify-between">
      <a href="#" className="text-white m-2">
        <h1 className={`text-6xl px-3 py-1 rounded-md cursor-pointer font-creepster ${color === 1 ? "hover:text-shadow-colorShadow1" : color === 2 ? "hover:text-shadow-colorShadow2" : "hover:text-shadow-colorShadow3"}`}>CtrlDev</h1>
      </a>
      <div className="flex w-full md:w-auto p-3 gap-6">
        <div
          className={`text-color0 flex w-full items-center justify-between border-2 px-5 py-2 rounded-full border-color0 ${color === 1 ? "hover:shadow-colorBoxShadow1" : color === 2 ? "hover:shadow-colorBoxShadow2" : "hover:shadow-colorBoxShadow3"}`}>
          <input type="text" placeholder="Buscar ..."
            className={`appearance-none border-none bg-transparent focus:outline-none w-full mr-4 placeholder:text-color0`} />
          <button className="">
            <FaSearch className={`fa-solid fa-palette text-color0 text-xl ${color === 1 ? "hover:text-color1" : color === 2 ? "hover:text-color2" : "hover:text-color3"}`} />
          </button>
        </div>
        <button className="relative" onClick={() => {if(showMenu === 1) {
          setShowMenu(0)
        } else {
          setShowMenu(1)
        }}}>
          <IoIosColorPalette className={`fa-solid fa-palette text-color0 text-3xl animate-pulse ${color === 1 ? "hover:text-color1" : color === 2 ? "hover:text-color2" : "hover:text-color3"}`}  />
          <div className={`flex flex-col justify-center items-center gap-2 absolute top-12 w-full transition-opacity duration-300 ease-in-out ${showMenu === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
            <button className="rounded-full bg-color1 w-6 h-6" onClick={() => setColor(1)}></button>
            <button className="rounded-full bg-color2 w-6 h-6" onClick={() => setColor(2)}></button>
            <button className="rounded-full bg-color3 w-6 h-6" onClick={() => setColor(4)}></button>
          </div>
        </button>
      </div>
    </nav>
  )
}
