import React, { useState } from "react";
import Content from "../../components/Content/Content";
import Layout from "../../components/Layout/Layout";
import about from "../../assets/about.png";
import eng from '../../assets/eng.png'
import rus from "../../assets/rus.png";

const About = () => {
    const [translate, setTranslate] = useState();
  const toggle = () =>{
    setTranslate(!translate);
  }

  const today = new Date();
  const year = today.getFullYear();
  return (
    <Layout>
      <Content>
        <div className='lg:fixed'>
          <div className='border bg-white h-[40rem] w-[24rem] lg:h-[38rem] lg:w-[74rem] rounded-md -mx-1 lg:mx-12 '>
            <img
              src={about}
              className='-my-16 lg:-my-72 p-16 lg:p-72 lg:-mx-72'
            />
            <button
              onClick={toggle}
              className='fixed top-20 right-4 lg:top-24 lg:right-24 border bg-slate-600 rounded-full'
            >
              <img src={rus} className='rounded-full w-7 lg:w-8' />
            </button>
            <button
              onClick={toggle}
              className='fixed top-20 lg:top-24 right-14 lg:right-36 border bg-slate-600 rounded-full'
            >
              <img src={eng} className='rounded-full w-7 lg:w-8' />
            </button>
            <div>
              {translate ? (
                <p className='font-montserrat-medium fixed text-sm lg:-mt-[33rem] lg:left-[55rem] lg:right-12 mx-3 lg:mx-9 lg:text-lg'>
                  E-commerce (electronic commerce) is the buying and selling of
                  goods and services, or the transmitting of funds or data, over
                  an electronic network, primarily the internet. These business
                  transactions occur either as business-to-business,
                  business-to-consumer, consumer-to-consumer or
                  consumer-to-business.
                </p>
              ) : (
                <p className='font-montserrat-medium fixed text-sm lg:-mt-[33rem] lg:left-[55rem] lg:right-12 mx-3 lg:mx-9 lg:text-lg'>
                  Электронная коммерция (электронная коммерция) - это
                  купля-продажа товары и услуги или передачу средств или данных
                  через электронной сети, в первую очередь Интернета. Эти бизнес
                  транзакции происходят либо как бизнес-бизнес,
                  бизнес-потребитель, потребитель-потребитель или от потребителя
                  к бизнесу
                </p>
              )}
            </div>
            <div className='font-montserrat-bold fixed right-[6rem] lg:right-[22.5rem] top-[32rem] lg:top-[25rem]'>
              <p>Biziň salgymyz: Aşgabat ş</p>
              <p className='mt-2'>Habarlaşmak üçin: +99361432761</p>
            </div>
            <footer className='fixed bottom-3 left-20 lg:left-2/4 font-montserratAlternates-bold'>
              &copy; Powered by Serdar {year}
            </footer>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default About;
