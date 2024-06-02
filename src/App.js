import React, { useState } from 'react'
import Forms from "./components/Forms";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/about'
function App() {
  const [mode, setmode] = useState('light');
  const toggleMode = () => {
    if (mode === 'dark') {
      setmode('light')
      document.body.style.backgroundColor = "white";
    } else {
      setmode('dark')
      document.body.style.backgroundColor = "black";
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
            <div className="container my-4">
            </div>
        <Routes>
          <Route path='/about' element={<About mode={mode}/>}></Route>
          <Route path='/' element={<Forms mode={mode} />}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
