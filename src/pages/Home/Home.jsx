import React from 'react'
import Content from '../../components/Content/Content'
import Layout from '../../components/Layout/Layout'
import door from '../../assets/door.jpg'
import useToggle from '../../hooks/useToggle'
import { BsDoorClosed, BsFillDoorOpenFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const Home = () => {
  const { dark, darkMode } = useToggle()


  return (
    <Layout>
      <Content dark={dark} darkMode={darkMode}>
        <div className={`${dark && "dark"}  bg-fixed border-1 p-3 dark:bg-black`}>
          <img alt='' src={door} className='rounded items-center w-[85rem]' />
          <div className='flex font-montserratAlternates-medium text-sm md:text-xl text-yellow-800'>
            <NavLink to={'/wood'} className='border-2 flex md:mx-36  m-3 p-5 w-96 bg-slate-50 rounded-2xl'>
              <BsDoorClosed size={44} className='border bg-yellow-300 p-2 -mt-1 mx-1 rounded' />
              Agaç gapylar
            </NavLink>

            <NavLink to={'/iron'} className='border-2 flex m-3 p-5 w-96 bg-slate-50 rounded-2xl'>
              <BsFillDoorOpenFill size={44} className='border bg-yellow-300 p-2 -mt-1 mx-1 rounded' />
              Demir gapylar
            </NavLink>

          </div>
        </div>
      </Content>
    </Layout>


  )
}

export default Home