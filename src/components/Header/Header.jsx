import React from "react";

import { BsBasket2 } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { MdSearch } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Header = ({ dark }) => {
  return (
    <div className={`${dark && "dark"} container mx-auto`}>
      <div
        className={` absolute top-0 left-0 xl:left-64 flex  items-center justify-between right-0 p-2 xl:p-4
     text-slate-600 bg-slate-50 text-sm dark:bg-slate-900 duration-500 font-montserrat-medium `}
      >
        {/* GOZLEG */}

        <div
          className=' mx-9 md:w-full flex justify-center items-center rounded-2xl
        hover:shadow-sm shadow-slate-400 duration-300 '
        >
          <MdSearch className='absolute left-14 text-xl xl:text-3xl  dark:text-slate-400' />
          <input
            type='text'
            placeholder='Gözleg...'
            className='bg-slate-200 w-full dark:bg-slate-700 dark:text-slate-100 md:text-base focus:outline-none rounded-lg p-2 px-9 m-1 xl:p-2 xl:px-9'
          />
        </div>
        <div></div>
        <NavLink to={"/basket"}>
          <BsBasket2
            size={32}
            className='text-md xl:text-3xl mx-3 dark:text-slate-300'
          />
        </NavLink>
        <div className=''>
          <FcAbout
            size={32}
            className=' text-lg xl:text-3xl mx-4 mt-1 dark:text-slate-300'
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
