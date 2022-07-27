import React from 'react'
import {CgController} from "react-icons/cg"
import {FaHome} from 'react-icons/fa'
import
      {BsDoorClosed, 
       BsFillDoorOpenFill,
       BsBasket2}
        from "react-icons/bs"
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import logoImage from '../../assets/ALTYN logo.jpg'
import logoOguz from '../../assets/Oguzly.png'


const Navigation = ({open, toggle, dark, darkMode,}) => {

  return (
    <div className={`flex ${dark && "dark"}`}>
    <div className={`${open ? 'w-0' : 'w-64'}  duration-700 h-screen md:h-full  bg-white dark:bg-slate-700 `}>
      <CgController size={25} className={`${!open && "rotate-180 duration-300"} md:hidden
       lg:hidden absolute cursor-pointer   left-2 w-7 top-3 `} 
        onClick={toggle} />
        <img alt='' src={logoImage} onClick={darkMode} className={`mt-16 md:w-36 h-16  mx-9 md:mt-7 
        ${open && "scale-0"} `}/>
      
      <NavLink to={'/'}
        className={` flex items-center  mx-4 mt-7 p-3 w-60 font-montserrat-medium 
         hover:bg-yellow-200  hover:text-slate-700 dark:hover:text-slate-900 text-yellow-800 dark:text-slate-300 rounded-l-full duration-500
          ${open && "scale-0"}`}>
          <FaHome size={22} className='mx-1'/>
          Baş sahypa
      </NavLink>

      <NavLink to={'/door'} 
      className={` flex items-center  mx-4 mt-1 p-3 w-60 font-montserrat-medium
       hover:bg-yellow-200 hover:text-slate-700 text-yellow-800 dark:text-slate-300 rounded-l-full duration-500 
       ${open && "scale-0"}`}>
        <BsDoorClosed size={20} className='mx-1'/>
      Agaç gapy
      </NavLink>

      <NavLink to={'/'} className={`flex items-center  mx-4 mt-1 p-3 w-60 font-montserrat-medium 
        hover:bg-yellow-200 hover:text-slate-700 text-yellow-800 dark:text-slate-300 rounded-l-full duration-500 
        ${open && "scale-0"}`}>
        <BsFillDoorOpenFill size={20} className='mx-1'/>  
        Demir gapy
      </NavLink>

      <NavLink to={'/'} className={`flex items-center mx-4 mt-1 p-3 w-60 font-montserrat-medium
      hover:bg-yellow-200 hover:text-slate-700 text-yellow-800 dark:text-slate-300 rounded-l-full duration-500 
      ${open && "scale-0"}`}>
        <AiOutlineShoppingCart size={20} className='mx-1'/>
        Magazynlar
      </NavLink>
     
     <NavLink to={'/'} className={`flex items-center mx-4 mt-1 p-3 w-60 font-montserrat-medium 
     hover:bg-yellow-200 hover:text-slate-700 text-yellow-800 dark:text-slate-300 rounded-l-full duration-500
      ${open && "scale-0"}`}>
      <BsBasket2 size={20} className='mx-2'/>
      Sebedim
     </NavLink>
      
      <img alt='' src={logoOguz} className='w-24 mx-16 mt-72'/>
    </div>
    </div>
  )
}
 
export default Navigation