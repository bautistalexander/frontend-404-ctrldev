import React, { useEffect, useState } from "react";

import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import axios from "axios";
import img_telarana3 from "../images/telarana3.png";
import img_tapiz2 from "../images/aro1.png";
import img_tapiz3 from "../images/terror.gif";
import img_tapiz4 from "../images/tormenta.gif";

interface Color {
  color: number;
  id: number;
  titulo: string;
  autor: string;
  descripcion: string;
  contenido: string;
  region: string;
  categoria_id: number;
  imagen_url: string;

  
  refresh: number;
  setRefresh: React.Dispatch<React.SetStateAction<number>>;
}

interface Categoria {
  id: number;
  nombre: string;
}

export const Card: React.FC<Color> = ({
  color,
  id,
  titulo,
  autor,
  descripcion,
  contenido,
  region,
  categoria_id,
  imagen_url,
  refresh,
  setRefresh
}) => {
  const [showModalView, setShowModalView] = useState<boolean>(false);
  const [showModalForm, setShowModalForm] = useState<boolean>(false);
  const [showModalDeleteTexto, setShowModalDeleteTexto] =
    useState<boolean>(false);

  const [tituloE, setTituloE] = useState<string>(titulo);
  const [autorE, setAutorE] = useState<string>(autor);
  const [regionE, setRegionE] = useState<string>(region);
  const [descripcionE, setDescripcionE] = useState<string>(descripcion);
  const [contenidoE, setContenidoE] = useState<string>(contenido);
  const [categoriaE, setCategoriaE] = useState<number>(categoria_id);
  const [imagenE, setImagenE] = useState<File | null>(null);
  const [imagenUrl, setImagenUrl] = useState<string>(
    `http://localhost:8000${imagen_url}`
  );

  const [dataCategories, setDataCategories] = useState<Categoria[]>([]);

  const [obtCategory, setObtCategory] = useState<Categoria>();

  const handleChangeTitulo = (e: any) => {
    setTituloE(e.target.value);
  };

  const handleChangeAutor = (e: any) => {
    setAutorE(e.target.value);
  };

  const handleChangeRegion = (e: any) => {
    setRegionE(e.target.value);
  };

  const handleChangeDescripcion = (e: any) => {
    setDescripcionE(e.target.value);
  };

  const handleChangeContenido = (e: any) => {
    setContenidoE(e.target.value);
  };

  const handleChangeImagen = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagenE(file);
      const reader = new FileReader();
      // Cuando el archivo esté cargado, establecer la URL de la imagen
      reader.onloadend = () => {
        setImagenUrl(reader.result as string); // Asigna el resultado al estado
      };
      // Lee el archivo como una URL de datos (Data URL)
      reader.readAsDataURL(file);
    }
  };

  const handleChangeCategoria = (id: number) => {
    setCategoriaE(id);
  };

  const updateData = async () => {
    const formData = new FormData();
    formData.append("titulo", tituloE);
    formData.append("autor", autorE);
    formData.append("descripcion", descripcionE);
    formData.append("contenido", contenidoE);
    formData.append("region", regionE);
    formData.append("categoria_id", categoriaE.toString());

    // Comprobar si la imagen no es null antes de agregarla al FormData
    if (imagenE !== null) {
      formData.append("imagen", imagenE); // Agregar el archivo de imagen solo si no es null
    }
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/textos/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Datos actualizados:", response.data);
      setShowModalForm(false); // Cerrar el modal después de actualizar
      setRefresh(refresh + 1);
      // window.location.reload();
    } catch (error) {
      console.error("Error al actualizar los datos:", error);
    }
  };

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
  }, [showModalForm]);

  const getDataCategory = async (item_id: number) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/categorias/${item_id}`
      );
      setObtCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTexto = async (item_id: number) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/textosborrar/${item_id}`
      );
      // console.log(response);
      setRefresh(refresh + 1);
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="group rounded-2xl bg-colorBackground opacity-80 h-[430px]">
        <div
          className={`flex flex-col justify-between border-2 rounded-2xl overflow-hidden shadow-colorBoxShadow4 h-full ${
            color === 1
              ? "group-hover:shadow-colorBoxShadow1 group-hover:border-color1"
              : color === 2
              ? "group-hover:shadow-colorBoxShadow2 group-hover:border-color2"
              : "group-hover:shadow-colorBoxShadow3 group-hover:border-color3"
          }`}
        >
          <div className="relative -z-10 overflow-hidden h-96">
            <div className="absolute w-full h-full opacity-70 group-hover:opacity-60">
              <img
                src={img_telarana3}
                alt=""
                className="object-cover invert group-hover:animate-wiggle group-hover:animate-infinite"
              />
            </div>
            <img
              src={`http://localhost:8000${imagen_url}`}
              alt=""
              className="object-cover h-full w-full"
            />
          </div>

          <div className="relative flex flex-col px-5 py-2 border-b-2 shadow-colorShadowBottom h-72">
            <div className="absolute h-full w-full opacity-15 top-0 left-0 overflow-hidden -z-10 hidden group-hover:block">
              <img
                src={img_tapiz4}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <h1
              className={`text-3xl font-bold line-clamp-2 text-center${
                color === 1
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
            <p className="text-sm line-clamp-3">{descripcion}</p>
          </div>

          <div
            className={`flex h-14 ${
              color === 1
                ? "text-color1"
                : color === 2
                ? "text-color2"
                : "text-color3"
            }`}
          >
            <div
              className={`cursor-pointer w-1/3 flex justify-center  py-4 hover:text-color0 ${
                color === 1
                  ? "hover:bg-color1"
                  : color === 2
                  ? "hover:bg-color2"
                  : "hover:bg-color3"
              }`}
              onClick={() => {
                getDataCategory(categoria_id);
                setShowModalView(true);
              }}
            >
              <FaEye className="text-2xl bottom-8" />
            </div>
            <div
              className={`cursor-pointer w-1/3 flex justify-center  py-4 hover:text-color0 ${
                color === 1
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
              className={`cursor-pointer w-1/3 flex justify-center  py-4 hover:text-color0 ${
                color === 1
                  ? "hover:bg-color1"
                  : color === 2
                  ? "hover:bg-color2"
                  : "hover:bg-color3"
              }`}
              onClick={() => {
                // deleteTexto(id);
                setShowModalDeleteTexto(true);
              }}
            >
              <FaTrashAlt className="text-2xl bottom-8" />
            </div>
          </div>
        </div>
      </div>

      {/* MODAL VEW */}
      {showModalView && (
        <div className="fixed inset-0 bg-colorBackground bg-opacity-60 backdrop-blur-sm flex flex-row justify-center items-center h-full z-20 font-special">
          <div
            className={`relative border-2 h-[600px] w-full md:w-1/2 p-5 m-5 rounded-lg flex-col ${
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
                onClick={() => setShowModalView(false)}
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
            <div className={`mt-8 h-[530px] overflow-y-scroll scrollbar-thin scrollbar-track-colorBackground ${
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
                {titulo}
              </h1>

              <div className="flex flex-col md:flex-row h-50">
                <div
                  className={`h-52 w-full md:w-1/2 border-2 border-color0 rounded-lg ${
                    color === 1
                      ? "shadow-colorBoxShadow1"
                      : color === 2
                      ? "shadow-colorBoxShadow2"
                      : "shadow-colorBoxShadow3"
                  }`}
                >
                  <img
                    src={`http://localhost:8000${imagen_url}`}
                    alt=""
                    className="object-cover rounded-lg h-full w-full"
                  />
                </div>
                <div className="md:h-52 w-full md:w-1/2 sm:p-2 flex flex-col justify-between">
                  <div className="mt-1">
                    <span
                      className={`text-sm font-extrabold ${
                        color === 1
                          ? "text-color1"
                          : color === 2
                          ? "text-color2"
                          : "text-color3"
                      }`}
                    >
                      Autor:
                    </span>
                    <p className="">{autor}</p>
                  </div>
                  <div className="mt-2">
                    <span
                      className={`text-sm font-extrabold ${
                        color === 1
                          ? "text-color1"
                          : color === 2
                          ? "text-color2"
                          : "text-color3"
                      }`}
                    >
                      Categoria:
                    </span>
                    <p className="capitalize">{obtCategory?.nombre}</p>
                  </div>
                  <div className="mt-2">
                    <span
                      className={`text-sm font-extrabold ${
                        color === 1
                          ? "text-color1"
                          : color === 2
                          ? "text-color2"
                          : "text-color3"
                      }`}
                    >
                      Región:
                    </span>
                    <p className="">{region}</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="mt-2">
                  <span
                    className={`text-sm font-extrabold ${
                      color === 1
                        ? "text-color1"
                        : color === 2
                        ? "text-color2"
                        : "text-color3"
                    }`}
                  >
                    Descripcion:
                  </span>
                  <p className="">{descripcion}</p>
                </div>
                <div className="mt-2">
                  <span
                    className={`text-sm font-extrabold ${
                      color === 1
                        ? "text-color1"
                        : color === 2
                        ? "text-color2"
                        : "text-color3"
                    }`}
                  >
                    Contenido:
                  </span>
                  <p className="">{contenido}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL EDIT */}
      {showModalForm && (
        <div className="fixed inset-0 bg-colorBackground bg-opacity-60 backdrop-blur-sm flex flex-row justify-center items-center h-full z-20 font-special">
          <div
            className={`relative border-2 h-[600px] w-full md:w-1/2 p-5 m-5 rounded-lg flex-col ${
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
                onClick={() => setShowModalForm(false)}
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
            <div className={`mt-8 h-[530px] flex flex-col gap-8 overflow-y-scroll scrollbar-thin scrollbar-track-colorBackground ${
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
                Edita la Historia o leyenda
              </h1>

              <div className="flex flex-col h-auto lg:flex-row lg:h-64">
                <div
                  className={`flex flex-col justify-center items-center h-52 w-full lg:w-1/2 rounded-lg gap-4`}
                >
                  <div
                    className={`rounded-full overflow-hidden border-4 h-40 w-40 ${
                      color === 1
                        ? "border-color1"
                        : color === 2
                        ? "border-color2"
                        : "border-color3"
                    }`}
                  >
                    <img
                      src={`${imagenUrl}`}
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>

                  <div className={``}>
                    <input
                      type="file"
                      name=""
                      id="img_texto"
                      className="hidden"
                      onChange={handleChangeImagen}
                    />
                    <label
                      htmlFor="img_texto"
                      className={`cursor-pointer p-2 border-2 rounded-lg ${
                        color === 1
                          ? "border-color1 hover:bg-color1"
                          : color === 2
                          ? "border-color2 hover:bg-color2"
                          : "border-color3 hover:bg-color3"
                      }`}
                    >
                      Seleccionar Imagen
                    </label>
                  </div>
                </div>

                <div className="md:h-52 w-full lg:w-1/2 sm:p-2 flex flex-col justify-between">
                  <div className="mt-1">
                    <span
                      className={`text-sm font-extrabold ${
                        color === 1
                          ? "text-color1"
                          : color === 2
                          ? "text-color2"
                          : "text-color3"
                      }`}
                    >
                      Título:
                    </span>
                    <textarea
                      id="titulo"
                      name="titulo"
                      onChange={handleChangeTitulo}
                      className={`resize-none w-full h-10 p-1 bg-transparent rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-y-scroll scrollbar-thin scrollbar-track-colorBackground scrollbar-thumb-rounded ${
                        color === 1
                          ? "focus:ring-color1 scrollbar-thumb-color1"
                          : color === 2
                          ? "focus:ring-color2 scrollbar-thumb-color2"
                          : "focus:ring-color3 scrollbar-thumb-color3"
                      }`}
                      placeholder="Escriba el título"
                      value={tituloE}
                    ></textarea>
                  </div>
                  <div className="mt-1">
                    <span
                      className={`text-sm font-extrabold ${
                        color === 1
                          ? "text-color1"
                          : color === 2
                          ? "text-color2"
                          : "text-color3"
                      }`}
                    >
                      Autor:
                    </span>
                    <textarea
                      id="autor"
                      name="autor"
                      onChange={handleChangeAutor}
                      className={`resize-none w-full h-10 p-1 bg-transparent rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-y-scroll scrollbar-thin scrollbar-track-colorBackground scrollbar-thumb-rounded ${
                        color === 1
                          ? "focus:ring-color1 scrollbar-thumb-color1"
                          : color === 2
                          ? "focus:ring-color2 scrollbar-thumb-color2"
                          : "focus:ring-color3 scrollbar-thumb-color3"
                      }`}
                      placeholder="Escriba el autor"
                      value={autorE}
                    ></textarea>
                  </div>
                  <div className="mt-2">
                    <span
                      className={`text-sm font-extrabold ${
                        color === 1
                          ? "text-color1"
                          : color === 2
                          ? "text-color2"
                          : "text-color3"
                      }`}
                    >
                      Región:
                    </span>
                    <textarea
                      id="region"
                      name="region"
                      onChange={handleChangeRegion}
                      className={`resize-none w-full h-10 p-1 bg-transparent rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-y-scroll scrollbar-thin scrollbar-track-colorBackground scrollbar-thumb-rounded ${
                        color === 1
                          ? "focus:ring-color1 scrollbar-thumb-color1"
                          : color === 2
                          ? "focus:ring-color2 scrollbar-thumb-color2"
                          : "focus:ring-color3 scrollbar-thumb-color3"
                      }`}
                      placeholder="Escriba la region"
                      value={regionE}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="mr-2 pl-2 lg:pl-0">
                <div className="mt-2">
                  <span
                    className={`text-sm font-extrabold ${
                      color === 1
                        ? "text-color1"
                        : color === 2
                        ? "text-color2"
                        : "text-color3"
                    }`}
                  >
                    Categoria:
                  </span>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {dataCategories.map((item: Categoria) => (
                      <label key={item.id}>
                        <input
                          type="radio"
                          value={item.id}
                          checked={categoriaE === item.id}
                          onChange={() => handleChangeCategoria(item.id)}
                          className={`m-1`}
                        />
                        {item.nombre}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mt-2">
                  <span
                    className={`text-sm font-extrabold ${
                      color === 1
                        ? "text-color1"
                        : color === 2
                        ? "text-color2"
                        : "text-color3"
                    }`}
                  >
                    Descripcion:
                  </span>
                  <textarea
                    id="titulo"
                    name="titulo"
                    onChange={handleChangeDescripcion}
                    className={`resize-none w-full h-20 p-1 bg-transparent rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-y-scroll scrollbar-thin scrollbar-track-colorBackground scrollbar-thumb-rounded ${
                      color === 1
                        ? "focus:ring-color1 scrollbar-thumb-color1"
                        : color === 2
                        ? "focus:ring-color2 scrollbar-thumb-color2"
                        : "focus:ring-color3 scrollbar-thumb-color3"
                    }`}
                    placeholder="Escriba la descripción"
                    value={descripcionE}
                  ></textarea>
                </div>
                <div className="mt-2">
                  <span
                    className={`text-sm font-extrabold ${
                      color === 1
                        ? "text-color1"
                        : color === 2
                        ? "text-color2"
                        : "text-color3"
                    }`}
                  >
                    Contenido:
                  </span>
                  <textarea
                    id="titulo"
                    name="titulo"
                    onChange={handleChangeContenido}
                    className={`resize-none w-full h-20 p-1 bg-transparent rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-y-scroll scrollbar-thin scrollbar-track-colorBackground scrollbar-thumb-rounded ${
                      color === 1
                        ? "focus:ring-color1 scrollbar-thumb-color1"
                        : color === 2
                        ? "focus:ring-color2 scrollbar-thumb-color2"
                        : "focus:ring-color3 scrollbar-thumb-color3"
                    }`}
                    placeholder="Escriba el contenido"
                    value={contenidoE}
                  ></textarea>
                </div>
                <button
                  className={`mt-2 rounded-lg w-full h-8 border-2 font-extrabold text-xl opacity-80 hover:opacity-100 ${
                    color === 1
                      ? "border-color1 bg-color1"
                      : color === 2
                      ? "border-color2 bg-color2"
                      : "border-color3 bg-color3"
                  }`}
                  onClick={updateData}
                >
                  GUARGAR CAMBIOS
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DELETE TEXTO */}
      {showModalDeleteTexto && (
        <div className="fixed inset-0 bg-colorBackground bg-opacity-60 backdrop-blur-sm flex flex-row justify-center items-center h-full z-20 font-special">
          <div
            className={`relative border-2 h-[220px] w-full md:w-1/2 p-5 m-5 rounded-lg flex-col ${
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
                onClick={() => setShowModalDeleteTexto(false)}
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
            <div className={`mt-8 h-36 flex flex-col gap-3 overflow-y-scroll scrollbar-thin scrollbar-track-colorBackground ${
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
                Eliminar Historia o Leyenda
              </h1>
              <div className="flex flex-col justify-center items-center gap-3">
                <h2 className="text-xl">{`¿Desea eleminar ${titulo}?`}</h2>
                <div className="w-full flex flex-row justify-center items-center gap-3 text-xl">
                  <button className={`border-2 rounded-md w-1/4 hover:text-color0 ${
                  color === 1
                    ? "bg-color1/50 border-color1 hover:bg-color1"
                    : color === 2
                    ? "bg-color2/50 border-color2 hover:bg-color2"
                    : "bg-color3/50 border-color3 hover:bg-color3"
                }`} onClick={() => {deleteTexto(id)}}>SI</button>
                  <button className="border-2 border-color0 rounded-md w-1/4 hover:text-colorBackground hover:bg-color0" onClick={() => {setShowModalDeleteTexto(false)}}>NO</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
