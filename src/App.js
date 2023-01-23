import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'

function Appli() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Appli;
