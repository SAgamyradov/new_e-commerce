import React, { useState } from 'react'
import {CgController} from "react-icons/cg"
import {FaHome} from 'react-icons/fa'
import
      {BsDoorClosed, 
       BsFillDoorOpenFill,
       BsBasket2,
                  }
        from "react-icons/bs"
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import logoImage from '../../assets/ALTYN.jpg'


const Navigation = () => {
  const[open, setOpen] = useState()
  const toggle = () => setOpen(!open)
  return (
    <div className='flex '>
    <div className={`${open ? 'w-0' : 'w-64'} lg:block duration-700 h-screen bg-white `}>
      <CgController size={25} className={`${!open && "rotate-180 duration-300"} md:hidden lg:hidden absolute cursor-pointer   left-2 w-7 top-3 `} 
        onClick={toggle} />
        <img alt='' src={logoImage} className={`mt-16 md:w-36 h-16  mx-9 md:mt-7 ${open && "scale-0"}`}/>
      
      <NavLink to={'/'}
        className={` flex items-center  mx-4 mt-7 p-3 w-60 font-montserrat-medium 
         hover:bg-yellow-200  hover:text-slate-700 text-yellow-800 rounded-l-full duration-500 ${open && "scale-0"}`}>
          <FaHome className='mx-1'/>
          Bas sahypa
      </NavLink>

      <NavLink to={'/'} 
      className={` flex items-center  mx-4 mt-1 p-3 w-60 font-montserrat-medium
       hover:bg-yellow-200 hover:text-slate-700 text-yellow-800 rounded-l-full duration-500 ${open && "scale-0"}`}>
        <BsDoorClosed className='mx-1'/>
      Agac gapy
      </NavLink>

      <NavLink to={'/'} className={`flex items-center  mx-4 mt-1 p-3 w-60 font-montserrat-medium 
        hover:bg-yellow-200 hover:text-slate-700 text-yellow-800 rounded-l-full duration-500 ${open && "scale-0"}`}>
        <BsFillDoorOpenFill className='mx-1'/>  
        Demir gapy
      </NavLink>

      <NavLink to={'/'} className={`flex items-center mx-4 mt-1 p-3 w-60 font-montserrat-medium
      hover:bg-yellow-200 hover:text-slate-700 text-yellow-800 rounded-l-full duration-500 ${open && "scale-0"}`}>
        <AiOutlineShoppingCart className='mx-1'/>
        Magazynlar
      </NavLink>
     
     <NavLink to={'/'} className={`flex items-center mx-4 mt-1 p-3 w-60 font-montserrat-medium 
     hover:bg-yellow-200 hover:text-slate-700 text-yellow-800 rounded-l-full duration-500 ${open && "scale-0"}`}>
      <BsBasket2 className='mx-1'/>
      Sebedim
     </NavLink>
      
    </div>
    </div>
  )
}
 
export default Navigation