import React, { useState } from 'react';
import { Navbar } from "./components/Navbar";
import { Hero } from './components/Hero';


import '@fontsource/creepster';
import "@fontsource/special-elite"; 
import "@fontsource/nosifer"; 
import { CategoriasMenu } from './components/CategoriasMenu';
import { Footer } from './components/Footer';

function App() {
  const [color, setColor] = useState<number>(2);

  const [refresh, setRefresh] = useState<number>(0);

  return (
    <>
      <Navbar color={color} setColor={setColor} />
      <Hero color={color} refresh={refresh} setRefresh={setRefresh} />
      <CategoriasMenu color={color} refresh={refresh} setRefresh={setRefresh} />
      <Footer color={color} />
    </>
  )
}

export default App
