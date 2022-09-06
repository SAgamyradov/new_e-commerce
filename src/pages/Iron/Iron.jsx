import React from "react";
import Content from "../../components/Content/Content";
import Layout from "../../components/Layout/Layout";
import { MdAddShoppingCart } from "react-icons/md";
import img10 from "../../assets/ImgGapy/10.jpg";
import img15 from "../../assets/ImgGapy/15.jpg";
import img17 from "../../assets/ImgGapy/17.jpg";
import img19 from "../../assets/ImgGapy/19.jpg";
import img20 from "../../assets/ImgGapy/20.jpg";
import img21 from "../../assets/ImgGapy/21.jpg";
import img23 from "../../assets/ImgGapy/23.jpg";
import img24 from "../../assets/ImgGapy/24.jpg";

const Iron = () => {
  return (
    <div>
      <Layout>
        <Content>
          <div className='grid grid-cols-2 md:grid md:grid-cols-3 my-4 md:mx-20 font-montserrat-bold'>
            <div className='img dark:bg-slate-800'>
              <img src={img19} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Flush Gapy - 5500TMT</p>
            </div>

            <div className='img dark:bg-slate-800'>
              <img src={img20} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Steel Gapy - 5500TMT</p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img24} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Steel Gapy - 5500TMT</p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img23} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Steel Gapy - 5500TMT</p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img21} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Steel Gapy - 5500TMT</p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img10} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Steel Gapy - 5500TMT</p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img15} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Steel Gapy - 5500TMT</p>
            </div>
            <div className='img dark:bg-slate-800'>
              <img src={img17} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Flush Gapy - 5500TMT</p>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Iron;
