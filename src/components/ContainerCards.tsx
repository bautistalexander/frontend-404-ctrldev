import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import img_tapiz1 from "../images/tapiz1.png";
import axios from "axios";

interface Color {
  color: number;
  idCategoria: number;

  refresh: number;
  setRefresh: React.Dispatch<React.SetStateAction<number>>;
}

interface Texto {
  id: number;
  titulo: string;
  autor: string;
  descripcion: string;
  contenido: string;
  region: string;
  categoria_id: number;
  imagen_url: string;
}

export const ContainerCards: React.FC<Color> = ({
  color,
  idCategoria,
  refresh,
  setRefresh,
}) => {
  const [data, setData] = useState<Texto[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        // Condición para filtrar por categoría
        const url =
          idCategoria !== 0
            ? `http://127.0.0.1:8000/textos/categoria/${idCategoria}`
            : "http://127.0.0.1:8000/textos";
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [idCategoria, refresh]); // Solo se ejecuta cuando cambia `idCategoria`

  return (
    <>
      <div className="relative w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-10 font-special">
        <div className="absolute h-full w-full opacity-10 -z-10">
          <img
            src={img_tapiz1}
            alt=""
            className="h-full w-full invert object-cover animate-rotate-y animate-infinite animate-duration-[30000ms]"
          />
        </div>

        {data.length !== 0 ? (
          data.map((item) => (
            <Card
              color={color}
              key={item.id}
              id={item.id}
              titulo={item.titulo}
              autor={item.autor}
              descripcion={item.descripcion}
              contenido={item.contenido}
              region={item.region}
              categoria_id={item.categoria_id}
              imagen_url={item.imagen_url}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          ))
        ) : (
            <p className="text-xl text-center w-[300px] md:w-[500px]">{`No hay historias o leyendas de esa categoria`}</p>
        )}
      </div>
    </>
  );
};
