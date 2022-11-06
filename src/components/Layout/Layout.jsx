import React, { useEffect, useState } from "react";
import Content from "../Content/Content";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

function getDefaultMode() {
  const savedMode = localStorage.getItem("mode");
  return savedMode ? savedMode : "light";
}
const Layout = ({ children }) => {
  const [mode, setMode] = useState(getDefaultMode());

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("mode", mode);
  }, [mode]);

  const darkMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className='font-montserratAlternates-medium'>
      <Header dark={mode} darkMode={darkMode} />
      <Sidebar dark={mode} darkMode={darkMode} />
      <Content dark={mode} darkMode={darkMode} />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
