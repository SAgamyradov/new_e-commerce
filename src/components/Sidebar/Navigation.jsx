import React from "react";
import { FaHome } from "react-icons/fa";
import {
  BsDoorClosed,
  BsFillDoorOpenFill,
  BsFillSunFill,
  BsMoonStars,
} from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logoLight from "../../assets/Oguzly.png";
import logoDark from "../../assets/Oguzly2.png";
import logoImage from "../../assets/ALTYN logo.png";

const Navigation = ({ mode, darkMode }) => {
  return (
    <div
      className={`flex  ${
        mode && "dark"
      } font-montserratAlternates-medium text-[0.95rem]`}
    >
      <div>
        <img
          alt=''
          src={logoImage}
          className='w-56 h-36 md:w-60 md:h-40   md:-mt-5'
        />

        <NavLink to={"/"} className='navlink -mt-4'>
          <FaHome size={20} className='mx-1' />
          Baş sahypa
        </NavLink>

        <NavLink to={"/wood"} className='navlink'>
          <BsDoorClosed size={19} className='mx-1' />
          Agaç gapy
        </NavLink>

        <NavLink to={"/iron"} className='navlink'>
          <BsFillDoorOpenFill size={19} className='mx-1' />
          Demir gapy
        </NavLink>

        <NavLink to={"/shops"} className='navlink'>
          <AiOutlineShoppingCart size={20} className='mx-1' />
          Dükanlar
        </NavLink>

        <button
          onClick={darkMode}
          className='
      rounded-full absolute bottom-20 left-12'
        >
          <BsMoonStars
            size={42}
            className='border rounded-full bg-slate-800 dark:bg-slate-300 mx-[3.2rem] relative p-2 dark:text-slate-800
        text-slate-100 duration-300'
          />
        </button>

        {mode ? (
          <img
            alt=''
            src={logoDark}
            className='absolute left-20 bottom-5 w-20'
          />
        ) : (
          <img
            alt=''
            src={logoLight}
            className='absolute left-20 bottom-5 w-20'
          />
        )}
      </div>
    </div>
  );
};

export default Navigation;
