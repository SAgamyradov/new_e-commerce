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
            className='rounded items-center w-[85rem] md:mx-11'
          />
          <div className='flex text-sm md:text-xl text-yellow-800'>
            <NavLink
              to={"/wood"}
              className=' border-2 flex md:mx-52  m-3 p-5 md:w-96 bg-slate-50 rounded-2xl'
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

          <div className='grid grid-cols-2 md:grid md:grid-cols-3 my-4 md:mx-20 font-montserrat-bold'>
            <div className='img dark:bg-slate-800'>
              <img src={img6} />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Steel Gapy - 5340TMT</p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img7} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Fiberglas Gapy - 9500TMT</p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img8} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Flush Gapy - 8000TMT</p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img9} />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Battened Gapy - 6450TMT</p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img10} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Steel Gapy - 7200TMT</p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img11} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Ledged Gapy - 5550TMT</p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img12} />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Battened Gapy - 4500TMT</p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img1} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Steel Gapy - 1900TMT</p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img2} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Fiberglas Gapy - 2000TMT</p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img3} />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Ledged Gapy - 1750TMT</p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img4} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Glass Gapy - 2100TMT</p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img5} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Battened Gapy - 1500TMT</p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img13} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Steel Gapy - 9000TMT</p>
            </div>{" "}
            <div className='img dark:bg-slate-800'>
              <img src={img14} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Fiberglas Gapy - 2500TMT</p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img15} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Glass Gapy - 1500TMT</p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img16} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Battened Gapy - 4500TMT</p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img17} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Flush Gapy - 5500TMT</p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img18} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Battened Gapy - 3000TMT</p>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
