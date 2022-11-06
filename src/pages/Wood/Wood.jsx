import React from "react";
import Content from "../../components/Content/Content";
import Layout from "../../components/Layout/Layout";
import img1 from "../../assets/ImgGapy/10.jpg";
import img2 from "../../assets/ImgGapy/15.jpg";
import img3 from "../../assets/ImgGapy/17.jpg";
import img30 from "../../assets/ImgGapy/30.jpg";
import img5 from "../../assets/ImgGapy/20.jpg";
import img6 from "../../assets/ImgGapy/21.jpg";
import img8 from "../../assets/ImgGapy/23.jpg";
import img9 from "../../assets/ImgGapy/24.jpg";
import { NavLink } from "react-router-dom";

const Wood = () => {
  return (
    <div>
      <Layout>
        <Content>
          <NavLink
            to={"/about"}
            className='grid gap-6 grid-cols-10 xl:grid-cols-6 p-1 font-montserrat-medium'
          >
            <div className='img dark:bg-slate-800'>
              <img src={img1} />
              <p className='nameDoor'>
                Steel Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  4500 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img2} className='rounded' />
              <p className='nameDoor'>
                Fiberglas Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  8000 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img3} className='rounded' />
              <p className='nameDoor'>
                Flush Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  5000 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img30} />
              <p className='nameDoor'>
                Battened Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  4500 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img5} className='rounded' />
              <p className='nameDoor'>
                Steel Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  3400 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img6} className='rounded' />
              <p className='nameDoor'>
                Ledged Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  8900 TMT
                </p>
              </p>
            </div>

            <div className='img dark:bg-slate-800'>
              <img src={img9} className='rounded' />
              <p className='nameDoor'>
                Glass Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  8400 TMT
                </p>
              </p>
            </div>

            <div className='img dark:bg-slate-800'>
              <img src={img8} className='rounded' />
              <p className='nameDoor'>
                Flush Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  2400 TMT
                </p>
              </p>
            </div>
          </NavLink>
        </Content>
      </Layout>
    </div>
  );
};

export default Wood;
