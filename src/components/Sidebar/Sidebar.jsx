import React, { useState } from 'react'
import Navigation from './Navigation'

const Sidebar = () => {
  const[open, setopen]=useState(true)
  return (
    <div className={`${open ? "w-64" : "w-0"}lg:bg-white h-screen w-64 relative`}>
        
        <Navigation/>
        
    </div>
  )
}

export default Sidebar