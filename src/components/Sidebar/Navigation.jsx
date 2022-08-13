import React from 'react'
import { FaHome } from 'react-icons/fa'
import {
BsDoorClosed,
BsFillDoorOpenFill,
BsMoonStars,
BsFillSunFill
}
  from "react-icons/bs"
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import logoLight from '../../assets/Oguzly.png'
import logoDark from '../../assets/Oguzly2.png'
import logoImage from '../../assets/ALTYN logo.png'



const Navigation = ({ dark, darkMode }) => {


  return (
    <div className={`flex  ${dark && "dark"} font-montserratAlternates-medium text-[0.95rem]`}>
      <div>
        <img alt='' src={logoImage} className='-mt-3 w-56 h-36 md:w-60 md:h-40   md:-mt-5' />

        <NavLink to={'/'}
          className={` flex items-center  mx-6 -mt-4 p-3 w-[14.5rem]  rounded-l-full
         hover:bg-yellow-200  hover:text-slate-700 text-yellow-800 dark:text-slate-300  
         dark:hover:text-slate-900 duration-500 `}>
          <FaHome size={20} className='mx-1' />
          Baş sahypa
        </NavLink>

        <NavLink to={'/iron'}
          className='flex items-center  mx-6 mt-[0.4rem]  p-3 w-[14.5rem]  rounded-l-full
       hover:bg-yellow-200 hover:text-slate-700 text-yellow-800 dark:text-slate-300
       dark:hover:text-slate-900 duration-500'>
          <BsDoorClosed size={19} className='mx-1' />
          Agaç gapy
        </NavLink>

        <NavLink to={'/wood'} className='flex items-center  mx-6 mt-[0.4rem]  p-3 w-[14.5rem]  rounded-l-full
       hover:bg-yellow-200 hover:text-slate-700 text-yellow-800 dark:text-slate-300
       dark:hover:text-slate-900 duration-500'>
          <BsFillDoorOpenFill size={19} className='mx-1' />
          Demir gapy
        </NavLink>

        <NavLink to={'/shops'} className='flex items-center font-montserrat-medium mx-6 mt-[0.4rem]  p-3 w-[14.5rem] rounded-l-full
       hover:bg-yellow-200 hover:text-slate-700 text-yellow-800 dark:text-slate-300
       dark:hover:text-slate-900 duration-500'>
          <AiOutlineShoppingCart size={20} className='mx-1' />
          Magazynlar
        </NavLink>

        <button onClick={darkMode} className='border bg-slate-100 shadow-sm shadow-slate-500 h-7 w-20 
      rounded-full absolute bottom-20 left-20'>
          {dark ?
            <BsFillSunFill size={27} className='rounded-full mx-[3.2rem] relative p-1 bg-yellow-500
        text-slate-50'/>
            :
            < BsMoonStars size={27} className='rounded-full relative bg-slate-600  p-1
            text-slate-50'/>
          }
        </button>

        {dark ?
          <img alt='' src={logoDark} className='absolute left-20 bottom-5 w-20' />
          :
          <img alt='' src={logoLight} className='absolute left-20 bottom-5 w-20' />
        }
      </div>

    </div>
  )
}

export default Navigation