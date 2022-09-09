import React from "react";
import Content from "../../components/Content/Content";
import Layout from "../../components/Layout/Layout";
import door from "../../assets/door.jpg";
import useToggle from "../../hooks/useToggle";
import { BsDoorClosed, BsFillDoorOpenFill } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
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

const Home = () => {
  const { dark, darkMode } = useToggle();

  return (
    <Layout>
      <Content dark={dark} darkMode={darkMode}>
        <div
          className={`${dark && "dark"}  bg-fixed border-1  p-3 dark:bg-black`}
        >
          <img
            alt=''
            src={door}
            className='rounded items-center w-[85rem] md:mx-2'
          />
          <div className='flex text-sm md:text-xl text-yellow-800'>
            <NavLink
              to={"/wood"}
              className=' border-2 flex md:mx-40  m-3 p-5 md:w-96 bg-slate-50 rounded-2xl'
            >
              <BsDoorClosed
                size={44}
                className='border bg-yellow-300 p-2 -mt-1 mx-1 rounded'
              />
              Agaç gapylar
            </NavLink>

            <NavLink
              to={"/iron"}
              className='border-2 flex m-3 p-5 md:w-96 bg-slate-50 rounded-2xl'
            >
              <BsFillDoorOpenFill
                size={44}
                className='border bg-yellow-300 p-2 -mt-1 mx-1 rounded'
              />
              Demir gapylar
            </NavLink>
          </div>

          <NavLink
            to={"/about"}
            className='grid grid-cols-2 gap-4 md:grid md:grid-cols-3 my-4 md:mx-20 font-montserrat-medium'
          >
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
              <img src={img7} className='rounded' />
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
            </div>{" "}
            <div className='img dark:bg-slate-800'>
              <img src={img14} className='rounded' />
              <p className='nameDoor'>
                Fiberglas Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  3300 TMT
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
              <img src={img16} className='rounded' />
              <p className='nameDoor'>
                Battened Gapy
                <p className='font-montserratAlternates-bold md:text-lg'>
                  5500 TMT
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
            <div className='img dark:bg-slate-800'>
              <img src={img18} className='rounded' />
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
