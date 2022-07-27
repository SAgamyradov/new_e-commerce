import React, { useState } from 'react'
import {BsMoonStars} from "react-icons/bs"
import {BsPersonCircle} from "react-icons/bs"

import {MdSearch} from "react-icons/md"


const Header = () => {
  const[dark, setDark]=useState()
  const darkMode = () => setDark(!dark)

  return (
    <div className={` absolute top-0 left-0 xl:left-64 flex items-center justify-between right-0 p-2 xl:p-4
     text-slate-600 bg-white text-sm font-montserrat-medium ${dark && "dark" } `}>
       

       {/* GOZLEG */}
      
       <div className="  bg-slate-100 w-full mx-9 md:w-full flex justify-center items-center rounded-2xl">
        <MdSearch className="text-xl xl:text-3xl ml-2" />
        <input
          type="text"
          placeholder="Gözleg..."
          className="w-full bg-slate-100 focus:outline-none  rounded-2xl p-0.5 xl:p-2"
        />
      </div>
        
        <BsMoonStars size={36} onClick={darkMode} className='text-sm xl:text-3xl mx-2 hover:text-slate-700 duration-300'/>

        <div className='flex items-center'>
            <BsPersonCircle size={32} className=' text-lg xl:text-3xl mx-3'/>
            <h1 className='font-montserrat-medium mx-8 hidden md:block dark:text-yellow-400 duration-700'>Agza_bol</h1>
            
        </div>
        
    </div>
  )
}

export default Header