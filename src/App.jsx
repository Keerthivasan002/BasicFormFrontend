import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './pages/Create.jsx';
import Final from './pages/Finish.jsx';




function App() {
  return (
    <div className='App'>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Create/>}/>
            <Route path="/final" element={<Final/>}/>
        </Routes>
        </BrowserRouter>
    </div>

  )
}

export default App
