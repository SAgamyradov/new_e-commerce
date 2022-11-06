import React from "react";
import useToggle from "../../hooks/useToggle";
import Navigation from "./Navigation";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ mode, darkMode }) => {
  const { open, toggle } = useToggle();

  return (
    <div className={`${mode && "dark"}`}>
      <div
        className={`fixed bg-slate-50 dark:bg-slate-900 ${
          open ? "left-0" : "-left-64"
        }  xl:left-0 top-0 min-h-screen z-50  w-64 duration-500`}
      >
        <div>
          <button
            onClick={toggle}
            className='text-slate-700 xl:hidden block dark:text-slate-300 fixed left-2 top-3 '
          >
            {open ? <IoClose size={30} /> : <HiMenuAlt2 size={30} />}
          </button>
          <Navigation dark={mode} darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
