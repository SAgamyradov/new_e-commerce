import React, { useState } from 'react'
import Navigation from './Navigation'
import {CgController} from "react-icons/cg"

const Sidebar = () => {
  const[open, setOpen]=useState();
  const toggle = () => setOpen(!open)
  return (
    <div className='flex'>
    <div className={`${open ? 'w-0' : 'w-64'} lg:block duration-700 h-screen bg-white `}>
      <CgController size={20} className={`${!open && "rotate-12"} lg:hidden absolute cursor-pointer  left-2 w-7 top-3 `} onClick={() => setOpen(!open)} />
        
        <Navigation/>
        
    </div>
    </div>
  )
}
 
export default Sidebar