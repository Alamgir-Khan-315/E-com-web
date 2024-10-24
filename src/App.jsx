import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from '../src/Components/Home/home.jsx'
import Men from '../src/Components/Men/men'
import Women from '../src/Components/Women/women'
import Kids from '../src/Components/Kids/kids'

import Log from './Components/Log in/Log_in.jsx'
import Sign from './Components/Log in/Sign_up.jsx'

import ItemDiplay from './Components/ItemDisplay.jsx'

const App = () => {
  return (
    <div className='bg-gray-100 h-full'>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />

          <Route path="/itemDisplay" element={<ItemDiplay />} />

          <Route path="/log" element={<Log />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
