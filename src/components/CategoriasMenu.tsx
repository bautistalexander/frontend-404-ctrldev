import React, { useEffect, useState } from "react";
import { Categoria } from "./Categoria";
import axios from "axios";
import { ContainerCards } from "./ContainerCards";
import { IoClose } from "react-icons/io5";
import { FaEye } from "react-icons/fa";

import img_tapiz2 from "../images/aro1.png";
import img_tapiz3 from "../images/terror.gif";

interface Color {
  color: number;

  refresh: number;
  setRefresh: React.Dispatch<React.SetStateAction<number>>;
}

interface Categoria {
  id: number;
  nombre: string;
}

export const CategoriasMenu: React.FC<Color> = ({ color, refresh, setRefresh }) => {
  const [dataCategories, setDataCategories] = useState<Categoria[]>([]);

  const [auxIdCat, setAuxIdCat] = useState<number>(0);
  const [auxNombreCat, setAuxIdNombreCat] = useState<string>("");

  const [nombreCategoriaInput, setNombreCategoriaInput] = useState<string>("");

  const [nuevoCat, setNuevoCat] = useState<string>("");

  const [idCategoriaDelete, setIdCategoriaDelete] = useState<number>(0);

  const [idCategoria, setIdCategoria] = useState<number>(0);

  const [showModalDeleteCategoria, setShowModalDeleteCategoria] =
    useState<boolean>(false);

  useEffect(() => {
    const getDataCategories = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/categorias");
        setDataCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataCategories();
  }, [idCategoriaDelete, nuevoCat]);

  const deleteCategoria = async (id: number) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/categoria/${id}`
      );
      setIdCategoriaDelete(id);
      setShowModalDeleteCategoria(false);
    } catch (error) {
      console.log(error);
    }
  };

  const obtParaEliminar = (idC: number, nomC: string) => {
    setShowModalDeleteCategoria(true);
    setAuxIdCat(idC);
    setAuxIdNombreCat(nomC);
  };

  const updateCategoria = async (
    idC: number,
    categoria: { nombre: string }
  ) => {
    try {
      if (nombreCategoriaInput !== "") {
        const response = await axios.put(
          `http://127.0.0.1:8000/categorias/${idC}`,
          categoria
        );
      }

      setShowModalDeleteCategoria(false);
      setIdCategoriaDelete(idC);
    } catch (error) {
      console.log(error);
    }
  };

  const createCategoria = async (
    categoria: { nombre: string }
  ) => {
    try {
      if (nombreCategoriaInput !== "") {
        const response = await axios.post(
          `http://127.0.0.1:8000/categoria`,
          categoria
        );
      }

      setShowModalDeleteCategoria(false);
      setNuevoCat(categoria.nombre);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoria = (e: any) => {
    setNombreCategoriaInput(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col gap-5 items-center w-full">
        <div
          className={`font-special flex flex-wrap flex-row justify-around gap-6 border-2 rounded-xl md:rounded-3xl mx-5 md:h-16 shadow-colorShadowBottom w-full ${
            color === 1
              ? "border-color1"
              : color === 2
              ? "border-color2"
              : "border-color3"
          }`}
        >
          { dataCategories.length !== 0 ?
          dataCategories.map((item) => (
            <div className="flex flex-row" key={item.id}>
              <Categoria
                color={color}
                text={item.nombre}
                idCategoria={item.id}
                setIdCategoria={setIdCategoria}
              />
              <div className="flex justify-center items-center">
                <FaEye
                  className={`text-2xl animate-once hover:animate-rotate-x cursor-pointer border-2 rounded-full ${
                    color === 1
                      ? "hover:border-color1 hover:shadow-colorBoxShadow1"
                      : color === 2
                      ? "hover:border-color2 hover:shadow-colorBoxShadow2"
                      : "hover:border-color3 hover:shadow-colorBoxShadow3"
                  }`}
                  onClick={() => {
                    obtParaEliminar(item.id, item.nombre);
                  }
                }
                />
              </div>
            </div>
          )) : 
          <p className="w-full text-xl text-center">No hay categorias</p>
        }
        </div>
        <button
          className={`font-special text-xl rounded-full px-3 py-1 w-full xl:w-1/3 border-2 transition border-color0 ${
            color === 1
              ? "shadow-colorBoxShadow1 text-shadow-colorShadow1 hover:bg-color1 hover:border-color1"
              : color === 2
              ? "shadow-colorBoxShadow2 text-shadow-colorShadow2 hover:bg-color2 hover:border-color2"
              : "shadow-colorBoxShadow3 text-shadow-colorShadow3 hover:bg-color3 hover:border-color3"
          }`}
          onClick={() => setIdCategoria(0)}
        >
          Mostrar todas las categorias
        </button>
      </div>

      <ContainerCards color={color} idCategoria={idCategoria} refresh={refresh} setRefresh={setRefresh}/>

      {/* MODAL EDITAR Y DELETE CATEGORIA */}
      {showModalDeleteCategoria && (
        <div className="fixed inset-0 bg-colorBackground bg-opacity-60 backdrop-blur-sm flex flex-row justify-center items-center h-full z-20 font-special">
          <div
            className={`relative border-2 h-[430px] w-full md:w-1/2 p-5 m-5 rounded-lg flex-col ${
              color === 1
                ? "shadow-colorBoxShadow1"
                : color === 2
                ? "shadow-colorBoxShadow2"
                : "shadow-colorBoxShadow3"
            }`}
          >
            <div className="absolute flex justify-end items-center w-full h-10 p-5 top-0 left-0">
              <IoClose
                className={`text-3xl cursor-pointer ${
                  color === 1
                    ? "hover:text-color1"
                    : color === 2
                    ? "hover:text-color2"
                    : "hover:text-color3"
                }`}
                onClick={() => setShowModalDeleteCategoria(false)}
              />
            </div>
            <div className="absolute h-full w-full opacity-25 top-0 left-0 overflow-hidden -z-10">
              <img
                src={img_tapiz2}
                alt=""
                className="h-full w-full object-contain animate-jump-out animate-infinite animate-duration-[30000ms] animate-ease-out"
              />
            </div>
            <div className="absolute h-full w-full opacity-15 top-0 left-0 overflow-hidden -z-10">
              <img
                src={img_tapiz3}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* Contenido del Modal */}
            <div className={`mt-8 h-80 md:h-[400px] flex flex-col gap-3 overflow-y-scroll scrollbar-thin scrollbar-track-colorBackground ${
                color === 1
                  ? "scrollbar-thumb-color1"
                  : color === 2
                  ? "scrollbar-thumb-color2"
                  : "scrollbar-thumb-color3"
              }`}>
              <h1
                className={`text-4xl lg:text-5xl font-creepster text-center ${
                  color === 1
                    ? "text-color1"
                    : color === 2
                    ? "text-color2"
                    : "text-color3"
                }`}
              >
                Crea, Edita o Elimina Categoria
              </h1>
              <div className="flex flex-col justify-center items-center gap-3">
                <h2 className="text-xl text-center">{`Escribe el nuevo nombre de la categoria ${auxNombreCat} o crea una nueva categoria: `}</h2>
                <div className="flex flex-col gap-3 text-xl mb-6 w-full">
                  <input
                    type="text"
                    placeholder="Escribe el nuevo nombre"
                    className={`p-1 rounded-md bg-transparent border-2 border-color0 focus:outline-none ${
                      color === 1
                        ? "focus:border-color1"
                        : color === 2
                        ? "focus:border-color2"
                        : "focus:border-color3"
                    }`}
                    value={nombreCategoriaInput}
                    onChange={handleCategoria}
                  />
                  <div className="w-full flex flex-col sm:flex-row md:gap-10 gap-3">
                    <button
                      className={`border-2 rounded-md p-1 sm:w-1/2 hover:text-color0 ${
                        color === 1
                          ? "bg-color1/50 border-color1 hover:bg-color1"
                          : color === 2
                          ? "bg-color2/50 border-color2 hover:bg-color2"
                          : "bg-color3/50 border-color3 hover:bg-color3"
                      }`}
                      onClick={() => {
                        updateCategoria(auxIdCat, {
                          nombre: nombreCategoriaInput,
                        });
                      }}
                    >
                      Guardar Cambios
                    </button>
                    <button
                      className={`border-2 rounded-md p-1 sm:w-1/2 hover:text-color0 ${
                        color === 1
                          ? "bg-color1/50 border-color1 hover:bg-color1"
                          : color === 2
                          ? "bg-color2/50 border-color2 hover:bg-color2"
                          : "bg-color3/50 border-color3 hover:bg-color3"
                      }`}
                      onClick={() => {
                        createCategoria({
                          nombre: nombreCategoriaInput,
                        });
                      }}
                    >
                      Crear Nuevo
                    </button>
                  </div>
                </div>
                <h2 className="text-xl text-center">{`¿Desea eleminar la categoria ${auxNombreCat}?`}</h2>
                <div className="w-full flex flex-row justify-center items-center gap-3 text-xl">
                  <button
                    className={`border-2 rounded-md w-1/4 hover:text-color0 ${
                      color === 1
                        ? "bg-color1/50 border-color1 hover:bg-color1"
                        : color === 2
                        ? "bg-color2/50 border-color2 hover:bg-color2"
                        : "bg-color3/50 border-color3 hover:bg-color3"
                    }`}
                    onClick={() => {
                      deleteCategoria(auxIdCat);
                    }}
                  >
                    SI
                  </button>
                  <button
                    className="border-2 border-color0 rounded-md w-1/4 hover:text-colorBackground hover:bg-color0"
                    onClick={() => {
                      setShowModalDeleteCategoria(false);
                    }}
                  >
                    NO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
