import React, { useState } from 'react';
import { Navbar } from "./components/Navbar";
import { Hero } from './components/Hero';


import '@fontsource/creepster';
import "@fontsource/special-elite"; 
import "@fontsource/nosifer"; 
import { CategoriasMenu } from './components/CategoriasMenu';

function App() {
  const [color, setColor] = useState<number>(2);

  return (
    <>
      <Navbar color={color} setColor={setColor} />
      <Hero color={color} setColor={setColor} />
      <CategoriasMenu color={color} />
    </>
  )
}

export default App
