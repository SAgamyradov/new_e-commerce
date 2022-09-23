import React from "react";
import Content from "../../components/Content/Content";
import Layout from "../../components/Layout/Layout";
import door from "../../assets/door.jpg";
import useToggle from "../../hooks/useToggle";
import { BsDoorClosed, BsFillDoorOpenFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import img1 from "../../assets/ImgGapy/1.jpg";
import img2 from "../../assets/ImgGapy/2.jpg";
import img3 from "../../assets/ImgGapy/3.jpg";
import img4 from "../../assets/ImgGapy/4.jpg";
import img5 from "../../assets/ImgGapy/5.jpg";
import img6 from "../../assets/ImgGapy/6.jpg";
import img7 from "../../assets/ImgGapy/7.jpg";
import img8 from "../../assets/ImgGapy/8.jpg";
import img9 from "../../assets/ImgGapy/9.jpg";
import img10 from "../../assets/ImgGapy/10.jpg";
import img11 from "../../assets/ImgGapy/11.jpg";
import img12 from "../../assets/ImgGapy/12.jpg";
import img13 from "../../assets/ImgGapy/13.jpg";
import img14 from "../../assets/ImgGapy/14.jpg";
import img15 from "../../assets/ImgGapy/15.jpg";
import img16 from "../../assets/ImgGapy/16.jpg";
import img17 from "../../assets/ImgGapy/17.jpg";
import img18 from "../../assets/ImgGapy/18.jpg";

const Home = ({ mode, darkMode }) => {
  // const { dark, darkMode } = useToggle();

  return (
    <Layout>
      <Content dark={mode} darkMode={darkMode}>
        <div
          className={`${
            mode && "dark"
          }  border-1 flex flex-col justify-center items-center  p-3 dark:bg-black`}
        >
          <div className='flex items-center justify-center'>
            <img
              alt=''
              src={door}
              className='rounded-lg xl:w-[90rem] w-full mx-5 my-2'
            />
          </div>
          <div className='flex items-center justify-center text-sm xl:text-xl text-yellow-800'>
            <NavLink
              to={"/wood"}
              className='flex m-3 p-5 xl:w-96 bg-slate-50 dark:bg-slate-900 rounded-lg dark:shadow-lg dark:shadow-slate-700'
            >
              <BsDoorClosed
                size={44}
                className='bg-yellow-300 p-2 -mt-1 mx-1 rounded-lg'
              />
              <p className='dark:text-slate-300'>Agaç gapylar</p>
            </NavLink>

            <NavLink
              to={"/iron"}
              className='flex m-3 p-5 mx-9 xl:w-96 bg-slate-50 dark:bg-slate-900 rounded-lg dark:shadow-lg dark:shadow-slate-700'
            >
              <BsFillDoorOpenFill
                size={44}
                className='bg-yellow-300 p-2 -mt-1 mx-1 rounded-lg'
              />
              <p className='dark:text-slate-300'>Demir gapylar</p>
            </NavLink>
          </div>

          <NavLink
            to={"/about"}
            className='grid space-x-3 grid-cols-10 xl:grid-cols-6 font-montserrat-medium'
          >
            <div className='img dark:bg-slate-800'>
              <img src={img6} className='rounded-lg' />
              <p className='nameDoor'>
                Steel Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  4500 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img7} className='rounded-lg' />
              <p className='nameDoor'>
                Fiberglas Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  8000 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img8} className='rounded-lg' />
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
              <img src={img10} className='rounded-lg' />
              <p className='nameDoor'>
                Steel Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  3400 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img11} className='rounded-lg' />
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
              <img src={img1} className='rounded-lg' />
              <p className='nameDoor'>
                Steel Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  7800 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img2} className='rounded-lg' />
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
              <img src={img4} className='rounded-lg' />
              <p className='nameDoor'>
                Glass Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  2200 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img5} className='rounded-lg' />
              <p className='nameDoor'>
                Battened Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  5500 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img13} className='rounded-lg' />
              <p className='nameDoor'>
                Steel Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  7600 TMT
                </p>
              </p>
            </div>{" "}
            <div className='img dark:bg-slate-800'>
              <img src={img14} className='rounded-lg' />
              <p className='nameDoor'>
                Fiberglas Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  3300 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img15} className='rounded-lg' />
              <p className='nameDoor'>
                Glass Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  8400 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img16} className='rounded-lg' />
              <p className='nameDoor'>
                Battened Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  5500 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img17} className='rounded-lg' />
              <p className='nameDoor'>
                Flush Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  2400 TMT
                </p>
              </p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img18} className='rounded-lg' />
              <p className='nameDoor'>
                Battened Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  7600 TMT
                </p>
              </p>
            </div>
          </NavLink>
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
