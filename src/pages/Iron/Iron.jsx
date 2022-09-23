import React from "react";
import Content from "../../components/Content/Content";
import Layout from "../../components/Layout/Layout";
import img10 from "../../assets/ImgGapy/10.jpg";
import img15 from "../../assets/ImgGapy/15.jpg";
import img17 from "../../assets/ImgGapy/17.jpg";
import img19 from "../../assets/ImgGapy/19.jpg";
import img20 from "../../assets/ImgGapy/20.jpg";
import img21 from "../../assets/ImgGapy/21.jpg";
import img23 from "../../assets/ImgGapy/23.jpg";
import img24 from "../../assets/ImgGapy/24.jpg";
import { NavLink } from "react-router-dom";

const Iron = () => {
  return (
    <div>
      <Layout>
        <Content>
          <NavLink
            to={"/about"}
            className='grid space-x-3 grid-cols-10 xl:grid-cols-6 font-montserrat-medium'
          >
            <div className='img dark:bg-slate-800'>
              <img src={img19} />
              <p className='nameDoor'>
                Steel Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  4500 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img20} className='rounded' />
              <p className='nameDoor'>
                Fiberglas Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  8000 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img21} className='rounded' />
              <p className='nameDoor'>
                Flush Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  5000 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img23} />
              <p className='nameDoor'>
                Battened Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  4500 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img10} className='rounded' />
              <p className='nameDoor'>
                Steel Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  3400 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img24} className='rounded' />
              <p className='nameDoor'>
                Ledged Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  8900 TMT
                </p>
              </p>
            </div>

            <div className='img dark:bg-slate-800'>
              <img src={img15} className='rounded' />
              <p className='nameDoor'>
                Glass Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  8400 TMT
                </p>
              </p>
            </div>

            <div className='img dark:bg-slate-800'>
              <img src={img17} className='rounded' />
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

export default Iron;
