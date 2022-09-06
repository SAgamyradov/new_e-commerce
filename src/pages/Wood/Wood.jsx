import React from 'react'
import Content from '../../components/Content/Content'
import Layout from '../../components/Layout/Layout'
import { MdAddShoppingCart } from "react-icons/md";

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

const Wood = () => {
  return (
    <div>
      <Layout>
        <Content>
                      <div className='grid grid-cols-2 md:grid md:grid-cols-3 my-4 md:mx-20 font-montserrat-bold'>
            <div className='img dark:bg-slate-800'>
              <img src={img6} />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Steel Gapy - 5340TMT</p>
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
              <img src={img16} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Battened Gapy - 4500TMT</p>
            </div>
            
            <div className='img dark:bg-slate-800'>
              <img src={img18} className='rounded' />
              <MdAddShoppingCart className='addIcon' />
              <p className='nameDoor'>Battened Gapy - 3000TMT</p>
            </div>
          </div>
        

        </Content>
      </Layout>
    </div>
  )
}

export default Wood