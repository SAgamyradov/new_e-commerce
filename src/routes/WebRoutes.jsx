import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Basket from '../pages/Basket/Basket'
import Home from '../pages/Home/Home'
import Iron from '../pages/Iron/Iron'
import Shops from '../pages/Shops/Shops'
import Wood from '../pages/Wood/Wood'

const WebRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wood' element={<Wood />} />
        <Route path='/iron' element={<Iron />} />
        <Route path='/shops' element={<Shops />} />
        <Route path='/basket' element={<Basket />} />
      </Routes>
    </Router>

  )
}

export default WebRoutes