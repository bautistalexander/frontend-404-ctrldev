import React from 'react'

import img_fantasma from '../images/fantasma.png';

interface Color {
    color: number;
    setColor: React.Dispatch<React.SetStateAction<number>>;
}

export const Hero: React.FC<Color> = ({ color, setColor }) => {
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col justify-between lg:w-2/3 p-10 gap-10">
                <h1 className={`text-6xl font-bold lg:text-8xl font-nosifer ${color === 1 ? "text-shadow-colorShadow1" : color === 2 ? "text-shadow-colorShadow2" : "text-shadow-colorShadow3"}`}>Historias y Leyendas de Terror</h1>
                <div className='flex justify-center w-full'>
                    <button className={`font-special text-2xl rounded-full px-3 py-1 w-full lg:w-1/3 border-2 transition border-color0 ${color === 1 ? "shadow-colorBoxShadow1 text-shadow-colorShadow1 hover:bg-color1 hover:border-color1" : color === 2 ? "shadow-colorBoxShadow2 text-shadow-colorShadow2 hover:bg-color2 hover:border-color2" : "shadow-colorBoxShadow3 text-shadow-colorShadow3 hover:bg-color3 hover:border-color3"}`}>
                        Escribir una Historia
                    </button>
                </div>
                <p className="font-special text-base md:text-2xl">
                    En esta página encontrarás una colección de historias y leyendas de terror que te transportarán a mundos oscuros y misteriosos. Sumérgete en relatos escalofriantes y comparte tus propias experiencias o leyendas que hayas escuchado. ¡Anímate a contribuir con tu historia y formar parte de esta comunidad de amantes del terror!
                </p>
            </div>
            <div className="flex flex-col items-center md:flex-row lg:w-1/3 md:justify-center md:items-end">
                <img src={img_fantasma} alt="" className="h-52 w-40 lg:h-96 lg:w-72 p-0 animate-bounce" />
            </div>
        </div>

    )
}
