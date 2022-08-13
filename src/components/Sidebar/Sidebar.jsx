import React from 'react'
import useToggle from '../../hooks/useToggle'
import Navigation from './Navigation'
import {BsX} from "react-icons/bs"
import {CgMenuLeftAlt} from 'react-icons/cg'





const Sidebar = ({dark, darkMode}) => {
  const{open, toggle} = useToggle()

  return (
    <div className={`${dark && "dark"}`}>
         <div 
      className={` absolute  bg-slate-50 dark:bg-slate-900  ${
        open ? "left-0" : "-left-64" 
      }  xl:left-0 top-0 min-h-screen z-50  w-64 duration-500`}>
        <button className='fixed left-2 top-3 outline-none' onClick={toggle}>
                {open ?(
          <BsX
            className="absolute left-[15.5rem] top-14 bg-yellow-600 
             text-slate-50 rounded-r-lg"
            size={24}
          />
        )  : (
          <CgMenuLeftAlt
            className="text-slate-700 rounded-lg lg:hidden block dark:text-slate-300"
            size={28}
          />
        )}
        
        </button>
      <Navigation dark={dark} darkMode={darkMode}/>
       
      
    </div>
    </div>
 
  )
}

export default Sidebar