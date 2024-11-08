import React from 'react'

import img_fantasma1 from '../images/fantasma1.png';
import img_paisaje1 from '../images/paisaje1.png';
import img_telarana2 from '../images/telaraña2.png';

interface Color {
    color: number;
}

export const Hero: React.FC<Color> = ({ color }) => {
    return (
        <div className="pt-[100px] flex flex-col lg:flex-row ">
            <div className="relative flex flex-col justify-between lg:w-2/3 p-10 gap-10">
                <div className='absolute w-full h-full opacity-60 left-0 -top-6 -z-10'>
                    <img src={img_telarana2} alt="" className='  w-full h-full bg-cover bg-no-repeat invert animate-wiggle animate-infinite animate-duration-[5000ms]' />
                </div>
                <h1 className={`text-6xl lg:text-7xl font-nosifer text-shadow-colorShadow0 ${color === 1 ? "text-color1" : color === 2 ? "text-color2" : "text-color3"}`}>Historias y Leyendas de Terror</h1>
                <div className='flex justify-center md:justify-end w-full'>
                    <button className={`font-special text-xl rounded-full px-3 py-1 w-full xl:w-1/3 border-2 transition border-color0 ${color === 1 ? "shadow-colorBoxShadow1 text-shadow-colorShadow1 hover:bg-color1 hover:border-color1" : color === 2 ? "shadow-colorBoxShadow2 text-shadow-colorShadow2 hover:bg-color2 hover:border-color2" : "shadow-colorBoxShadow3 text-shadow-colorShadow3 hover:bg-color3 hover:border-color3"}`}>
                        Escribir una Historia
                    </button>
                </div>
                <p className="font-special text-base md:text-xl">
                    En esta página encontrarás una colección de historias y leyendas de terror que te transportarán a mundos oscuros y misteriosos. Sumérgete en relatos escalofriantes y comparte tus propias experiencias o leyendas que hayas escuchado. ¡Anímate a contribuir con tu historia y formar parte de esta comunidad de amantes del terror!
                </p>
            </div>

            <div className=" relative flex flex-col items-center md:flex-row lg:w-1/3 md:justify-center md:items-end" >
                <div className='absolute w-full h-full opacity-70' >
                    <img src={img_paisaje1} alt="" className='w-full h-full object-cover object-[-10px] invert animate-fade animate-duration-[5000ms] animate-delay-500' style={{ transform: 'rotateY(180deg)' }}/>
                </div>
                <img src={img_fantasma1} alt="" className="h-52 w-40 lg:h-[500px] lg:w-80 p-0 animate-jump animate-infinite animate-duration-[10000ms] animate-delay-1000 animate-reverse" />
            </div>
        </div>

    )
}
