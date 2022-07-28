import React from 'react'
import Content from '../Content/Content'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Navigation'

const Layout = ({children}) => {
  return (
    <div className='flex'>
       
       
       <Header />
        <Sidebar />
        <Content />
        <main>
        {children}
        </main>
       
    </div>
  )
}

export default Layout