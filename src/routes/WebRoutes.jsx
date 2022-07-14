import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from '../pages/Home/Home'

const WebRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />}/ >
        </Routes>
    </Router>
  )
}

export default WebRoutes