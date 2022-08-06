import React from 'react'
import {BsMoonStars} from "react-icons/bs"
import {BsPersonCircle, BsFillSunFill} from "react-icons/bs"

import {MdSearch} from "react-icons/md"
import useToggle from '../../hooks/useToggle'


const Header = () => {
 const{dark, darkMode} = useToggle()

  return (
    <div className={`${dark && "dark" }`}>
          <div className={` absolute top-0 left-0 xl:left-64 flex  items-center justify-between right-0 p-2 xl:p-4
     text-slate-600 bg-slate-50 text-sm dark:bg-slate-900 duration-500 font-montserrat-medium `}>
       

       {/* GOZLEG */}
      
       <div className="bg-slate-200 dark:bg-slate-700 w-full mx-9 md:w-full flex justify-center items-center rounded-2xl
        hover:shadow-slate-400 duration-300 shadow-md">
        <MdSearch className="text-xl xl:text-3xl ml-2 dark:text-slate-400" />
        <input
          type="text"
          placeholder="Gözleg..."
          className="bg-slate-200 w-full dark:bg-slate-700  focus:outline-none   rounded-2xl p-2 m-1 xl:p-2"
        />
      </div>
      <div>
        <button onClick={darkMode}>
          { dark ?
        <BsFillSunFill size={28} className='text-sm xl:text-3xl mx-2 hover:text-slate-700 duration-300 
        dark:text-yellow-500'/>
            :
            < BsMoonStars size={28} className='text-sm xl:text-3xl mx-2 hover:text-slate-700 duration-300 
            dark:text-slate-300'/>
          }
        </button>
      </div>

        <div className='flex items-center'>
            <BsPersonCircle size={32} className=' text-lg xl:text-3xl mx-3 dark:text-slate-300'/>
            <h1 className='font-montserrat-medium mx-8 hidden md:block dark:text-slate-300 duration-700'>Agza_bol</h1>
            
        </div>
    
    </div>
    </div>

  )
}

export default Header