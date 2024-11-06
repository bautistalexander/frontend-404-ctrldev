import React from 'react'
import { Card } from './Card';

interface Color {
  color: number;
}

export const ContainerCards: React.FC<Color> = ({ color }) => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-10 p-10 font-special'>
      <Card color={color} />
      <Card color={color} />
      <Card color={color} />
      <Card color={color} />
      <Card color={color} />
      <Card color={color} />
    </div>
  )
}
