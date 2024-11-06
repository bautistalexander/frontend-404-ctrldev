import React, { useState } from 'react';
import { Navbar } from "./components/Navbar";
import { Hero } from './components/Hero';


import '@fontsource/creepster';
import "@fontsource/special-elite"; 
import "@fontsource/nosifer"; 

function App() {
  const [color, setColor] = useState<number>(2);

  return (
    <>
      <Navbar color={color} setColor={setColor} />
      <Hero color={color} setColor={setColor} />
    </>
  )
}

export default App
