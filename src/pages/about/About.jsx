import React from "react";
import Content from "../../components/Content/Content";
import Layout from "../../components/Layout/Layout";
import about from "../../assets/about.png";

const About = ({ mode }) => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <Layout>
      <Content>
        <div
          className={`${
            mode && "dark"
          }border bg-white dark:bg-slate-800 p-4 rounded-lg  h-[40rem] w-full text-sm xl:text-base`}
        >
          <div className=''>
            <div className='grid  md:grid-cols-2'>
              <img src={about} className='w-[29rem]' />

              <p className='font-montserrat-medium text-center md:pt-20 dark:text-slate-300'>
                E-commerce (electronic commerce) is the buying and selling of
                goods and services, or the transmitting of funds or data, over
                an electronic network, primarily the internet. These business
                transactions occur either as business-to-business,
                business-to-consumer, consumer-to-consumer or
                consumer-to-business.
              </p>

              <div className='font-montserrat-bold flex flex-col items-start justify-start mt-3 dark:text-slate-300'>
                <p>Biziň salgymyz: Aşgabat ş</p>
                <p className='mt-2'>Habarlaşmak üçin: +99361432761</p>
              </div>
            </div>
            <footer className='fixed bottom-5 left-20 lg:left-2/4 font-montserratAlternates-bold dark:text-slate-300'>
              &copy; Powered by Serdar {year}
            </footer>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default About;
