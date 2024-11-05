import React, { useState } from 'react';
import { Navbar } from "./components/Navbar";
import '@fontsource/creepster';

function App() {
  const [color, setColor] = useState<number>(2);

  return (
    <>
      <Navbar color={color} setColor={setColor} />
    </>
  )
}

export default App
