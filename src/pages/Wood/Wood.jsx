import React from 'react'
import Content from '../../components/Content/Content'
import Layout from '../../components/Layout/Layout'

import img1 from "../../assets/ImgGapy/1.jpg";
import img2 from "../../assets/ImgGapy/2.jpg";
import img3 from "../../assets/ImgGapy/3.jpg";
import img4 from "../../assets/ImgGapy/4.jpg";
import img5 from "../../assets/ImgGapy/5.jpg";
import img6 from "../../assets/ImgGapy/6.jpg";
import img8 from "../../assets/ImgGapy/8.jpg";
import img9 from "../../assets/ImgGapy/9.jpg";
import img10 from "../../assets/ImgGapy/10.jpg";
import img11 from "../../assets/ImgGapy/11.jpg";
import img12 from "../../assets/ImgGapy/12.jpg";
import img13 from "../../assets/ImgGapy/13.jpg";
import img14 from "../../assets/ImgGapy/14.jpg";
import img16 from "../../assets/ImgGapy/16.jpg";
import img18 from "../../assets/ImgGapy/18.jpg";
import { NavLink } from 'react-router-dom';

const Wood = () => {
  return (
    <div>
      <Layout>
        <Content>
          <NavLink to={'/about'} className='grid grid-cols-2 gap-5 md:grid md:grid-cols-3 my-4 md:mx-20 font-montserrat-medium'>
            <div className='img dark:bg-slate-800'>
              <img src={img6} />
              <p className='nameDoor'>
                Steel Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  4500 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img14} className='rounded' />
              <p className='nameDoor'>
                Fiberglas Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  8000 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img8} className='rounded' />
              <p className='nameDoor'>
                Flush Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  5000 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img9} />
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
              <img src={img11} className='rounded' />
              <p className='nameDoor'>
                Ledged Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  8900 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img12} />
              <p className='nameDoor'>
                Battened Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  4300 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img1} className='rounded' />
              <p className='nameDoor'>
                Steel Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  7800 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img2} className='rounded' />
              <p className='nameDoor'>
                Fiberglas Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  6700 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img3} />
              <p className='nameDoor'>
                Ledged Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  4200 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img4} className='rounded' />
              <p className='nameDoor'>
                Glass Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  2200 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img5} className='rounded' />
              <p className='nameDoor'>
                Battened Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  5500 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img13} className='rounded' />
              <p className='nameDoor'>
                Steel Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  7600 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img16} className='rounded' />
              <p className='nameDoor'>
                Glass Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  2200 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img18} className='rounded' />
              <p className='nameDoor'>
                Battened Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  5500 TMT
                </p>
              </p>
            </div>
          </NavLink>
        </Content>
      </Layout>
    </div>
  );
}

export default Wood