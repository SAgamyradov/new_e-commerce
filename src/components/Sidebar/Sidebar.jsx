import React from "react";
import useToggle from "../../hooks/useToggle";
import Navigation from "./Navigation";
import { HiMenuAlt2, HiMenuAlt1 } from "react-icons/hi";

const Sidebar = ({ mode, darkMode }) => {
  const { open, toggle } = useToggle();

  return (
    <div className={`${mode && "dark"}`}>
      <div
        className={` absolute bg-slate-50 dark:bg-slate-900  ${
          open ? "left-0" : "-left-64"
        }  xl:left-0 top-0 min-h-screen z-50  w-64 duration-500`}
      >
        <Navigation dark={mode} darkMode={darkMode} />
      </div>
      <button className='' onClick={toggle}>
        {open ? (
          <HiMenuAlt1
            className='text-slate-700 xl:hidden block dark:text-slate-300 fixed'
            size={30}
          />
        ) : (
          <HiMenuAlt2
            className='text-slate-700 xl:hidden block dark:text-slate-300 fixed`'
            size={30}
          />
        )}
      </button>
    </div>
  );
};

export default Sidebar;
