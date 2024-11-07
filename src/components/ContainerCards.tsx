import React from 'react'
import { Card } from './Card';


import img_tapiz1 from '../images/tapiz1.png';

interface Color {
  color: number;
}

export const ContainerCards: React.FC<Color> = ({ color }) => {
  return (
    <div className='relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-10 p-10 font-special'>
      <div className='absolute h-full w-full opacity-10 -z-10'>
        <img src={img_tapiz1} alt="" className='h-full w-full invert object-cover' />
      </div>
      <Card color={color} />
      <Card color={color} />
      <Card color={color} />
      <Card color={color} />
      <Card color={color} />
      <Card color={color} />
    </div>
  )
}
