import React, { useState } from 'react';
import { Navbar } from "./components/Navbar";
import { Hero } from './components/Hero';


import '@fontsource/creepster';
import "@fontsource/special-elite"; 
import "@fontsource/nosifer"; 
import { CategoriasMenu } from './components/CategoriasMenu';
import { ContainerCards } from './components/ContainerCards';

function App() {
  const [color, setColor] = useState<number>(2);

  return (
    <>
      <Navbar color={color} setColor={setColor} />
      <Hero color={color} setColor={setColor} />
      <CategoriasMenu color={color} />
      <ContainerCards color={color} />
    </>
  )
}

export default App
