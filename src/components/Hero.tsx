import React, { useEffect, useState } from "react";

import img_fantasma1 from "../images/fantasma1.png";
import img_paisaje1 from "../images/paisaje1.png";
import img_telarana2 from "../images/telaraña2.png";
import img_terror from "../images/paisaje8.jpg";
import img_tapiz2 from "../images/aro1.png";
import img_tapiz3 from "../images/terror.gif";


import { IoClose } from "react-icons/io5";

import axios from "axios";

interface Color {
  color: number;

  refresh: number;
  setRefresh: React.Dispatch<React.SetStateAction<number>>;
}

interface Categoria {
  id: number;
  nombre: string;
}

export const Hero: React.FC<Color> = ({ color, refresh, setRefresh }) => {
  const [showModalForm, setShowModalForm] = useState<boolean>(false);

  const [tituloE, setTituloE] = useState<string>("");
  const [autorE, setAutorE] = useState<string>("");
  const [regionE, setRegionE] = useState<string>("");
  const [descripcionE, setDescripcionE] = useState<string>("");
  const [contenidoE, setContenidoE] = useState<string>("");
  const [categoriaE, setCategoriaE] = useState<number>(1);
  const [imagenE, setImagenE] = useState<File | null>(null);

  const [imagenUrl, setImagenUrl] = useState<string>(`${img_terror}`);

  const [dataCategories, setDataCategories] = useState<Categoria[]>([]);

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

  const handleChangeCategoria = (id: number) => {
    setCategoriaE(id);
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

  const newData = async () => {
    const formData = new FormData();
    formData.append("titulo", tituloE);
    formData.append("autor", autorE);
    formData.append("descripcion", descripcionE);
    formData.append("contenido", contenidoE);
    formData.append("region", regionE);
    formData.append("categoria_id", categoriaE.toString());

    // Comprobar si la imagen no es null antes de agregarla al FormData
    if (imagenE) {
      formData.append("imagen", imagenE); // Agregar el archivo de imagen solo si no es null
    } else {
      alert("Por favor, selecciona una imagen.");
      return;
    }

    try {
      // Realizar la solicitud POST al backend con Axios
      const response = await axios.post(
        "http://127.0.0.1:8000/textos/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data.message); // Aquí puedes mostrar un mensaje al usuario
      setShowModalForm(false);
      setRefresh(refresh + 1);
      // window.location.reload();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  useEffect(() => {
    // Cargar la imagen inicial desde la ruta y convertirla en un File
    const cargarImagenInicial = async () => {
      try {
        const respuesta = await fetch(img_terror);
        const blob = await respuesta.blob();
        const file = new File([blob], "calabaza2.png", { type: blob.type });
        setImagenE(file); // Establece el archivo en el estado inicial
      } catch (error) {
        console.error("Error al cargar la imagen inicial:", error);
      }
    };

    cargarImagenInicial();
  }, []);

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
  }, []);

  return (
    <>
      <div className="relative pt-[100px] flex flex-col lg:flex-row ">
        <div className="absolute h-full w-full opacity-20 top-0 left-0 overflow-hidden -z-10">
          <img src={img_tapiz3} alt="" className="h-full w-full object-cover" />
        </div>

        <div className="relative flex flex-col justify-between lg:w-2/3 p-10 gap-10">
          <div className="absolute w-full h-full opacity-60 left-0 -top-6 -z-10">
            <img
              src={img_telarana2}
              alt=""
              className="  w-full h-full bg-cover bg-no-repeat invert animate-wiggle animate-infinite animate-duration-[5000ms]"
            />
          </div>
          <h1
            className={`text-6xl lg:text-7xl font-nosifer text-shadow-colorShadow0 ${
              color === 1
                ? "text-color1"
                : color === 2
                ? "text-color2"
                : "text-color3"
            }`}
          >
            Historias y Leyendas de Terror
          </h1>
          <div className="flex justify-center md:justify-end w-full">
            <button
              className={`font-special text-xl rounded-full px-3 py-1 w-full xl:w-1/3 border-2 transition border-color0 ${
                color === 1
                  ? "shadow-colorBoxShadow1 text-shadow-colorShadow1 hover:bg-color1 hover:border-color1"
                  : color === 2
                  ? "shadow-colorBoxShadow2 text-shadow-colorShadow2 hover:bg-color2 hover:border-color2"
                  : "shadow-colorBoxShadow3 text-shadow-colorShadow3 hover:bg-color3 hover:border-color3"
              }`}
              onClick={() => setShowModalForm(true)}
            >
              Escribir una Historia
            </button>
          </div>
          <p className="font-special text-base md:text-xl">
            En esta página encontrarás una colección de historias y leyendas de
            terror que te transportarán a mundos oscuros y misteriosos.
            Sumérgete en relatos escalofriantes y comparte tus propias
            experiencias o leyendas que hayas escuchado. ¡Anímate a contribuir
            con tu historia y formar parte de esta comunidad de amantes del
            terror!
          </p>
        </div>

        <div className=" relative flex flex-col items-center md:flex-row lg:w-1/3 md:justify-center md:items-end">
          <div className="absolute w-full h-full opacity-70">
            <img
              src={img_paisaje1}
              alt=""
              className="w-full h-full object-cover object-[-10px] invert animate-fade animate-duration-[5000ms] animate-delay-500"
              style={{ transform: "rotateY(180deg)" }}
            />
          </div>
          <img
            src={img_fantasma1}
            alt=""
            className="h-52 w-40 lg:h-[500px] lg:w-80 p-0 animate-jump animate-infinite animate-duration-[10000ms] animate-delay-1000 animate-reverse"
          />
        </div>
      </div>

      {/* MODAL FORM */}
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
            <div className="mt-8 h-[530px] overflow-auto flex flex-col gap-8">
              <h1
                className={`text-4xl lg:text-5xl font-creepster text-center ${
                  color === 1
                    ? "text-color1"
                    : color === 2
                    ? "text-color2"
                    : "text-color3"
                }`}
              >
                Escribe una Historia o leyenda
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
                      className={`resize-none w-full h-10 p-1 bg-transparent rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        color === 1
                          ? "focus:ring-color1"
                          : color === 2
                          ? "focus:ring-color2"
                          : "focus:ring-color3"
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
                      className={`resize-none w-full h-10 p-1 bg-transparent rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        color === 1
                          ? "focus:ring-color1"
                          : color === 2
                          ? "focus:ring-color2"
                          : "focus:ring-color3"
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
                      className={`resize-none w-full h-10 p-1 bg-transparent rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        color === 1
                          ? "focus:ring-color1"
                          : color === 2
                          ? "focus:ring-color2"
                          : "focus:ring-color3"
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
                    className={`resize-none w-full h-20 p-1 bg-transparent rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      color === 1
                        ? "focus:ring-color1"
                        : color === 2
                        ? "focus:ring-color2"
                        : "focus:ring-color3"
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
                    className={`resize-none w-full h-20 p-1 bg-transparent rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      color === 1
                        ? "focus:ring-color1"
                        : color === 2
                        ? "focus:ring-color2"
                        : "focus:ring-color3"
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
                  onClick={newData}
                >
                  REGISTRAR
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
