import React, { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  const [dark, setDark] = useState();
  const darkMode = () => {
    setDark(!dark);
  };

  return (
    <div className='font-montserratAlternates-medium'>
      <Header dark={dark} darkMode={darkMode} />
      <Sidebar dark={dark} darkMode={darkMode} />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
