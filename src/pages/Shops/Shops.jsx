import React from "react";
import Content from "../../components/Content/Content";
import Layout from "../../components/Layout/Layout";
import rek1 from "../../assets/resO.jpg";
import rek2 from "../../assets/fitci.jpg";
import rek3 from "../../assets/nuryupek.jpg";
import { NavLink } from "react-router-dom";

const Shops = ({ mode }) => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <Layout>
        <Content>
          <NavLink
            to={"/about"}
            className='grid gap-6 grid-cols-10 xl:grid-cols-6 p-1 font-montserrat-medium'
          >
            <div className='img dark:bg-slate-800'>
              <img src={rek1} className='w-80 h-28 md:w-96 md:h-56 rounded' />
              <p className='nameDoor'>
                Oguz restoran
                <p className='font-montserratAlternates-bold md:text-lg'>
                  +993 322 93443
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={rek2} className='w-80 h-28 md:w-96 md:h-56 rounded' />
              <p className='nameDoor'>
                Gubadag fitçi
                <p className='font-montserratAlternates-bold md:text-lg'>
                  +99364667428
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={rek3} className='w-80 h-28 md:w-96 md:h-56 rounded' />
              <p className='nameDoor'>
                Nur ýüpek
                <p className='font-montserratAlternates-bold md:text-lg'>
                  +99364846336
                </p>
              </p>
            </div>
            <footer className='fixed bottom-5 left-20 lg:left-2/4 font-montserratAlternates-bold dark:text-slate-300'>
              &copy; Powered by Serdar {year}
            </footer>
          </NavLink>
        </Content>
      </Layout>
    </div>
  );
};

export default Shops;
