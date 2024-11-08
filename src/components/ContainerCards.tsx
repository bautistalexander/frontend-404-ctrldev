import React, { useEffect, useState } from "react";
import { Card } from "./Card";

import img_tapiz1 from "../images/tapiz1.png";
import axios from "axios";

import prueba from "../images/prueba.jpg";
import imagen from "../images/paisaje4.png";
import img_telarana3 from "../images/telarana3.png";

interface Color {
  color: number;
}

interface Texto {
  titulo: string;
  autor: string;
  descripcion: string;
  contenido: string;
  region: string;
  categoria_id: string;
  imagen: string;
}

export const ContainerCards: React.FC<Color> = ({ color }) => {
  const [data, setData] = useState<Texto[]>([]);


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/textos");
        setData(response.data);
      } catch (error) { }
    };

    getData();
  }, []);

  return (
    <>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-10 p-10 font-special">
        <div className="absolute h-full w-full opacity-10 -z-10">
          <img
            src={img_tapiz1}
            alt=""
            className="h-full w-full invert object-cover animate-rotate-y animate-infinite animate-duration-[30000ms]"
          />
        </div>

        {data.map((item) => (
          <Card
            color={color}
            key={item.titulo}
            titulo={item.titulo}
            autor={item.autor}
            descripcion={item.descripcion}
            contenido={item.descripcion}
            region={item.region}
            categoria_id={item.categoria_id}
            imagen={item.imagen}
          />
        ))}
      </div>


      
      {/* Modal */}


    </>
  );
};
