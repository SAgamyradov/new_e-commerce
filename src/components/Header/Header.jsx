import React from 'react'
import {BsMoonStars} from "react-icons/bs"
import {BsPersonCircle} from "react-icons/bs"
import {CgController} from "react-icons/cg"
// import {BiSearchAlt} from "react-icons/bi"

const Header = () => {
  return (
    <div className="absolute top-0 left-0 xl:left-64 flex items-center justify-between right-0 p-2 xl:p-4 text-red-900 bg-white text-sm font-montserrat-medium">
       <CgController size={46} className='m-3 lg:hidden'/>

       {/* GOZLEG */}
       {/* <div className='flex  '>
       <BiSearchAlt size={32} /> */}
        <input 
            type='text'
            placeholder='Gozleg...'
            className='w-full bg-slate-200 text-red-900 focus:outline-none rounded-2xl p-2 xl:p-2'
            />
            {/* </div> */}
        
        <BsMoonStars size={32} className='text-sm xl:text-3xl mx-5'/>

        <div className='flex items-center'>
            <BsPersonCircle size={32} className='text-lg xl:text-3xl mx-2'/>
            <h1 className='font-montserrat-medium mx-8 hidden md:block'>Agza_bol</h1>
            
        </div>
        
    </div>
  )
}

export default Header