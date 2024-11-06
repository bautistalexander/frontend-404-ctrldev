import React from 'react';
import { Categoria } from './Categoria';

interface Color {
  color: number;
}

export const CategoriasMenu: React.FC<Color> = ({ color }) => {
  return (
    <div className={`flex flex-wrap flex-row justify-around gap-6 border-2 rounded-xl md:rounded-3xl ${color === 1 ? "border-color1" : color === 2 ? "border-color2" : "border-color3"}`}>
      <Categoria color={color} text={"Todo"}/>
      <Categoria color={color} text={"Fantasmas"}/>
      <Categoria color={color} text={"Tecnológico"}/>
      <Categoria color={color} text={"Nacional"}/>
    </div>
  )
}
