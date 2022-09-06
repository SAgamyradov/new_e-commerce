import React from "react";

const Content = ({ children, dark }) => {
  return (
    <section
      className={`${
        dark && "dark"
      } absolute top-14 md:top-20  bottom-0 overflow-y-scroll 
    xl:left-[15.1rem] right-0 p-2 bg-slate-200 dark:bg-black`}
    >
      {children}
    </section>
  );
};

export default Content;
